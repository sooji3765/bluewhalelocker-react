import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./lib/pages/HomePage";
import LikeListPage from "./lib/pages/LikeListPage";
import ReservationList from "./lib/pages/ReservationListPage";
import ChatPage from "./lib/pages/ChatPage";
import UsersettingPage from "./lib/pages/UsersettingPage";
import LoginPage from "./lib/pages/LoginPage";
import SignPage from "./lib/pages/SignPage";
import KeeperSettingPage from "./lib/pages/KeeperSettingPage";
import RegisterKeeperPage from "./lib/pages/ResisterKeeperPage";
import AddLockerPage from "./lib/pages/AddLockerPage";
import InputLockerPage from "./lib/pages/InputLockerPage";
import MyInfo from "./lib/info/MyInfo";
import KeeperInfoPage from "./lib/pages/KeeperInfoPage";
import LockerReservationPage from "./lib/pages/LockerReservationPage";
import profileEditPage from "./lib/pages/ProfileEditPage";

const App = () => {
  const profile = MyInfo.getProfile("profile");
  const state = {
    props: {
      isSignIn: false
    },
    ...profile
  };

  return (
    <>
      {!state.props.isSignIn && (
        <>
          <Route exact path="/" component={LoginPage} />
        </>
      )}
      {state.props.isSignIn && (
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/likeList" component={LikeListPage} />
          <Route path="/reservationList" component={ReservationList} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/usersetting" component={UsersettingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignPage} />
          <Route path="/keeper_setting" component={KeeperSettingPage} />
          <Route path="/add_locker" component={AddLockerPage} />
          <Route path="/input_locker" component={InputLockerPage} />
          <Route path="/register_keeper" component={RegisterKeeperPage} />
          <Route path="/keeper_info" component={KeeperInfoPage} />
          <Route path="/reservation" component={LockerReservationPage} />
          <Route path="/profile_edit" component={profileEditPage} />
        </>
      )}
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignPage} />
    </>
  );
};

export default App;
