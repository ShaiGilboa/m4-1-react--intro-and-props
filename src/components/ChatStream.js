import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage'

function ChatStream(props) {
  console.log(props)
  return (<section className="chat-stream">
          {props.messages.map((message, index)=>{
            let messageType='';
            message.user === props.currentUser ? messageType = 'sent' : messageType = 'received';
            return (
              <div key={index}>
                <ChatMessage message={message} messageType={messageType}/>
              </div>
            )
          })}
          </section>);
}

export default ChatStream;
