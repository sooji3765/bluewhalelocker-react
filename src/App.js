import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './lib/pages/HomePage'
import LikeListPage from './lib/pages/LikeListPage'
import ReservationList from './lib/pages/ReservationListPage'
import ChatPage from './lib/pages/ChatPage'
import UsersettingPage from './lib/pages/UsersettingPage'
import LoginPage from './lib/pages/LoginPage'
import SignPage from './lib/pages/SignPage'
import KeeperSettingPage from './lib/pages/KeeperSettingPage'
import RegisterKeeperPage from './lib/pages/ResisterKeeperPage';

const App = () => {

  return (
    <>
      <Route exact path="/" component={HomePage}/>
      <Route path="/likeList" component={LikeListPage}/>
      <Route path="/reservationList" component={ReservationList}/>
      <Route path="/chat" component={ChatPage}/>
      <Route path="/usersetting" component={UsersettingPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignPage}/>
      <Route path="/keeper_setting" component={KeeperSettingPage}/>
      <Route path="/register_keeper" component={RegisterKeeperPage}/>
    </>
  );
}

export default App;
