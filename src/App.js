import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './lib/pages/HomePage'
import LikeListPage from './lib/pages/LikeListPage'
import ReservationList from './lib/pages/ReservationListPage'
import ChatPage from './lib/pages/ChatPage'
import UsersettingPage from './lib/pages/UsersettingPage'

const App = () => {

  return (
    <>
      <Route exact path="/" component={HomePage}/>
      <Route path="/likeList" component={LikeListPage}/>
      <Route path="/reservationList" component={ReservationList}/>
      <Route path="/chat" component={ChatPage}/>
      <Route path="/usersetting" component={UsersettingPage}/>
    </>
  );
}

export default App;
