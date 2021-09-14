import React from 'react'
import Header from '../../components/Header/Header';
import './Home.css';
// import {FaCamera, FaBook, FaSearch} from 'react-icons/fa';


export default function Home() {
    return (
        <section>
            <Header header="Home"/>
            <h1 className="title-centre-align">World's First Mandarin Language Learning App for Dyslexia</h1>

            <div className="text-left">
                <h2>Features</h2>
                <h3>Image Detection</h3>
                {/* <FaCamera size="100" className="image-left"/> */}
                <p>Select an image from your device and our web application translates the object in the image to produce a written translation in your desired language.</p>

                <h3>Flashcards</h3>
                {/* <FaCamera size="100" className="image-left"/> */}
                <p>Practise remembering key words saved from the image detection feature and pronouncing them correctly with an audio clip.</p>

                <h3>Search</h3>
                {/* <FaCamera size="100" className="image-left"/> */}
                <p>Find certain flashcards containing key words to assist with your practising.</p>

            </div>
            {/* <FaCamera size="100" className="image-left"/>
            <FaBook size="50"/>
            <FaSearch size="50"/> */}

        </section>

    )
}
