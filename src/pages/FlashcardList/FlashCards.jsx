import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function FlashCardList() {
    const [flashCards, setFlashCards] = useState([]);
    
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
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
            <h1>FlashCards</h1>
            {flashCards.map(card => <div key={card}><Link to={{ pathname: "/card", state: { english: card, chinese: getKeyByValue(window.sessionStorage, card)}}}>{card}</Link></div>)}
        </div>
    )
}
