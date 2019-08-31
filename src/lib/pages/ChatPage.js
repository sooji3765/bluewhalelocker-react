import React from 'react';

import HeaderComponent from '../components/default/HeaderComponent';
import ChatComponent from '../components/chat/ChatComponent';
import FooterComponent from '../components/default/FooterComponent';

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