import React from 'react';
import './ChatMessage.css';
import TipSent  from '../assets/tip-sent.svg';
import { ReactComponent as TipReceived } from '../assets/tip-received.svg';

let tip = false;

const SentMessage = ({message, messageType}) => {
    const toggleTipHandler = (event) => {
    console.log(tip)
    tip = tip? false : true;
    document.querySelector('img').classList.toggle('none')
}
    return (
        <div className='chat-message' onClick={toggleTipHandler}>
            <div className={`content ${messageType}`}>
                <p className='message message-received'>{message.body}</p>
                {/* <TipSent className='tip-sent'/> */}
                <img src={TipSent} alt='tip-sent' className='tip-sent' />
            </div>
        </div>
    )
}

const ReceivedMessage = ({message, messageType}) => {
    const toggleTipHandler = (event) => {
    console.log(tip)
    tip = tip? false : true;
    document.querySelector('svg').classList.toggle('none')
} 
    return (
        <div className='chat-message' onClick={toggleTipHandler}>
            <img className='user-image' src={message.user.avatar} alt='user-avatar'/>
            <div className={`content ${messageType}`}>
                <h2 className='user-name'>{message.user.username}:</h2>
                <p className='message message-sent'>{message.body}</p>
                <TipReceived className='tip-received '/>
            </div>
        </div>
    )
}

// const toggleTipHandler = (event) => {
//     console.log(tip)
//     tip = tip? false : true;
//     document.querySelector('.tip-sent').classList.toggle('none')
// }

const ChatMessage = ({message, messageType}) => {
    if(messageType === 'received'){
        return <ReceivedMessage message={message} messageType={messageType} />
    } else if(messageType ==='sent'){
        return <SentMessage message={message} messageType={messageType} />
    }
    // document.getElementsByClassName('chat-message').addEventListener('blur',toggleTipHandler)
}


// document.querySelector('.message').addEventListener('click', addTipHandler)

export default ChatMessage;