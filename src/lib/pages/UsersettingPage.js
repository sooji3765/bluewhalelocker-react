import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import UsersettingComponent from '../components/UsersettingComponent';
import FooterComponent from '../components/FooterComponent';
import MyInfo from '../info/MyInfo';

const UsersettingPage = (props) => {

  const profile = MyInfo.getProfile();
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <UsersettingComponent {...profile.state}></UsersettingComponent>
      <FooterComponent path="/usersetting"></FooterComponent>
    </>
  );
};

export default UsersettingPage;