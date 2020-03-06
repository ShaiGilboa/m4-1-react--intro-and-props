import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage'

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

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
