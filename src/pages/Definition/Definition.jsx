import React from 'react';
import dogImage from '../../images/chinese_character_dog.jpeg';
import bookImage from '../../images/book_character.jpeg';
import catImage from '../../images/cat_character.jpeg';
import doorImage from '../../images/door_character.jpeg';
import umbrellaImage from '../../images/umbrella_character.jpeg'
import dogSound from '../../sounds/dog.m4a';
import bookSound from '../../sounds/book.m4a';
import catSound from '../../sounds/cat.m4a';
import doorSound from '../../sounds/door.m4a';
import umbrellaSound from '../../sounds/umbrella.m4a';
import './Definition.css';

export default function Definition(props) {
    const saveToStorage = () => {
        if (!window.sessionStorage.getItem(props.location.state.chinese)) {
            window.sessionStorage.setItem(props.location.state.chinese, props.location.state.english);
        }
    }
    const playSound = () => {
        let audio = new Audio();
        if (props.location.state.english === "dog") {
            audio.src = dogSound;
        } else if (props.location.state.english === "cat") {
            audio.src = catSound;
        }
        else if (props.location.state.english === "door") {
            audio.src = doorSound;
        }
        else if (props.location.state.english === "book") {
            audio.src = bookSound;
        }
        else if (props.location.state.english === "umbrella") {
            audio.src = umbrellaSound;
        }
        audio.play();
    }
    return (
        <div>
            <h1>{props.location.state.chinese}</h1>
            <div className="picture">
                <h2>English: {props.location.state.english}</h2>
                {
                    props.location.state.english === "dog" ? 
                        <div><h2>Pinyin: gǒu</h2><img src={dogImage} alt="img"/></div>:
                    props.location.state.english === "book" ?
                         <div><h2>Pinyin: Shū</h2><img src={bookImage} alt="img"/></div> :
                    props.location.state.english === "cat" ?
                        <div><h2>Pinyin: Māo</h2><img src={catImage} alt="img"/></div> :
                    props.location.state.english === "door" ?
                        <div><h2>Pinyin: Mén</h2><img src={doorImage} alt="img"/></div> :
                    props.location.state.english === "umbrella" ?
                        <div><h2>Pinyin: Sǎn</h2><img src={umbrellaImage} alt="img"/></div> : ""
                }
            </div>
            <button onClick={saveToStorage}>Save as Flash Card</button>
            <button onClick={playSound}>Play Sound</button>
        </div>
    );
}
