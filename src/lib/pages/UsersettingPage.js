import React from 'react';

import HeaderComponent from '../components/default/HeaderComponent';
import UsersettingComponent from '../components/user/UsersettingComponent';
import FooterComponent from '../components/default/FooterComponent';
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