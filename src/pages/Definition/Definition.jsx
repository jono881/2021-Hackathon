import React from 'react';
import dogImage from '../../images/chinese_character_dog.jpeg';
import './Definition.css';

export default function Definition(props) {

    return (
        <div>
            <h1>{props.location.state.chinese}</h1>
            <div className="picture">
                <h2>English: {props.location.state.english}</h2>
            </div>
        </div>
    );
}
