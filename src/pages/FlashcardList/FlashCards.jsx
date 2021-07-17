import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './FlashCardList.css'

export default function FlashCardList() {
    const [flashCards, setFlashCards] = useState([]);
    const colours = ["#e74c3c", "#FF006E", "#34495e", "#9b59b6", "#2c3e50", "#27ae60", "#d35400", "#16a085"];
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    function getRandomColor(colourArray) {
        return colourArray[Math.floor(Math.random() * colourArray.length)]
    }

    useEffect(() => {
        let keys = Object.keys(window.sessionStorage);
        console.log(keys)
        keys.forEach((key) => {
            console.log(key);
            setFlashCards(prevFlashCards =>[...prevFlashCards, window.sessionStorage.getItem(key)]);
        });
    }, []);

    return (
        <div>
            <Header header="Flash Card List"/>
            {flashCards.map(card => <div key={card} className="card text-large" style={{backgroundColor: getRandomColor(colours)}}><Link to={{ pathname: "/card", state: { colour: getRandomColor(colours), english: card, chinese: getKeyByValue(window.sessionStorage, card)}}}>{card}</Link></div>)}
        </div>
    )
}
