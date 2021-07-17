import React, {useRef, useState} from 'react'
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import './objectDetector.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export function ObjectDetector() {
    const fileInputRef = useRef();
    const [imageData, setImageData] = useState(null);
    const [translation, setTranslation ] = useState({});

    const openFilePicker = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const readImage = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = () => reject(fileReader.error);
            fileReader.readAsDataURL(file);
        })
    }

    const onSelectImage = async(e) => {
        const file = e.target.files[0];
        const imageData = await readImage(file);
        setImageData(imageData);

        const imageElement = document.createElement("img");
        imageElement.src = imageData;

        imageElement.onload = async() => {
            await detectObjectInImage(imageElement);
        }
    }

    const detectObjectInImage = async (imageElement) => {
        const model = await cocoSsd.load({});
        const predictions = await model.detect(imageElement, 2);
        console.log("Predictions: ", predictions[0].class);
        translateObjectName(predictions[0].class);
    }

    const translateObjectName = async(word) => {
        axios({
            baseURL: 'https://api.cognitive.microsofttranslator.com/',
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': '4b4a066737eb4313a4cfbfc633794085',
                'Ocp-Apim-Subscription-Region': 'eastus',
                'Content-type': 'application/json',
            },
            params: {
                'api-version': '3.0',
                'from': 'en',   // from english
                'to': 'zh-Hans' // this is the desired translation visit https://docs.microsoft.com/en-us/azure/cognitive-services/translator/language-support for more
            },
            data: [{
                'text': word
            }],
            responseType: 'json'
        }).then(function(response){
            setTranslation({
                english: word,
                chinese: response.data[0].translations[0].text
            });
            console.log(JSON.stringify(response.data[0], null, 4));
        });
    }

    // html code
    return (
        <div className="main-container">
            <h1>Chinese: {translation.chinese != null ? translation.chinese : ""}</h1>
            <div className="detector-container">
                {imageData && <img alt = "img" className = "targetImg" src={imageData}/>}
            </div>
            <input className="hidden" type="file" ref={fileInputRef} onChange={onSelectImage} />
            <div className="row">
                <button onClick={openFilePicker} className="btn blue">Select Image</button>
                <Link className="btn blue" to={{ pathname: "/definition", state: { chinese: translation.chinese, english: translation.english }}}>Breakdown</Link>
            </div>
        </div>
    )
}
