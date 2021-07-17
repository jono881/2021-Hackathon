import React, {useEffect, useState} from 'react'

export default function FlashCards() {
    const [flashCards, setFlashCards] = useState([]);
    
    useEffect(() => {
        let keys = Object.keys(window.sessionStorage);
        console.log(keys)
        keys.forEach((key) => {
            console.log(key);
            setFlashCards(prevFlashCards =>[...prevFlashCards, window.sessionStorage.getItem(key)]);
        });
    }, [])
    return (
        <div>
            <h1>FlashCards</h1>
            {flashCards.map(card => <div>{card}</div>)}
        </div>
    )
}
