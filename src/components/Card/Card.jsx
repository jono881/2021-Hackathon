import React from 'react';
import './Card.css';

export default function Card({english, chinese, flipCard}) {
    return (
        <div>
            <div className={flipCard ? "card flipped" : "card"}>
            <div className="front">
                <div className="english">{english}</div>
            </div>
            <div className="back">
                <div className="hanzi">{chinese}</div>
            </div>
        </div>
        </div>
    )
}
