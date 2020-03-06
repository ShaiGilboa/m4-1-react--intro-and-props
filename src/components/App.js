import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  console.log(props.currentUser);
  return (
    <div className="wrapper">
      <Header />
      <ChatStream messages={props.conversation.messages} currentUser={props.currentUser} />
      <Footer />
    </div>
  );
}

export default App;
