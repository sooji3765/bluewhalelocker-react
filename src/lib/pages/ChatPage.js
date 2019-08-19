import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import ChatComponent from '../components/ChatComponent';
import FooterComponent from '../components/FooterComponent';

const ChatPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ChatComponent></ChatComponent>
      <FooterComponent path="/chat"></FooterComponent>
    </>
  );
};

export default ChatPage;