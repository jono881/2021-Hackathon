import React from 'react';
import './Card.css';

export default function Card({english, chinese, colour, flipCard}) {
    return (
            <div className={flipCard ? "flashcard flipped" : "flashcard"}>
                <div className="front" style={{backgroundColor: colour}}>
                    <div className="english">{english}</div>
                </div>
                <div className="back" style={{backgroundColor: colour}}>
                    <div className="hanzi">{chinese}</div>
                </div>
            </div>
    )
}
