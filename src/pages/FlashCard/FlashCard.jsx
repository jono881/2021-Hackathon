import React, {useState} from 'react'
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './FlashCard.css';

export default function FlashCard(props) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className="card-container">
            <Header header="Flash Card"/>
            <Card flipCard={isFlipped} colour={props.location.state.colour} english={props.location.state.english} chinese={props.location.state.chinese}/>
            <div>
                <button onClick={()=>setFlipped(!isFlipped)} className="btn blue">Flip Card</button>
            </div>
        </div>
    )
}
