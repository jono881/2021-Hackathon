import React, {useState} from 'react'
const { connect } = require('twilio-video');

export default function TwilioVideo() {
    const [identity, setIdentity] = useState("");
    const [room, setRoom] = useState(null);

    async function joinRoom() {
        try {
          const response = await fetch(`https://{your-endpoint}?identity=${this.state.identity}`);
          const data = await response.json();
          const room = await connect(data.accessToken, {
            name: 'cool-room',
            audio: true,
            video: true
          });
      
          this.setState({ room: room });
        } catch(err) {
          console.log(err);
        }
    }

    return (
        <div>
            
        </div>
    )
}
