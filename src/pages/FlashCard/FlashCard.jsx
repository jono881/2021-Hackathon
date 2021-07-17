import React, {useState} from 'react'
import Card from '../../components/Card/Card';

export default function FlashCard(props) {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div>
            <Card flipCard={isFlipped} english={props.location.state.english} chinese={props.location.state.chinese}/>
            <div className="buttonRow">
                <button onClick={()=>setFlipped(!isFlipped)}>Flip Card</button>
            </div>
        </div>
    )
}
