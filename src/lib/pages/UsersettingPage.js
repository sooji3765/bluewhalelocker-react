import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import UsersettingComponent from '../components/UsersettingComponent';
import FooterComponent from '../components/FooterComponent';

const UsersettingPage = (props) => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <UsersettingComponent></UsersettingComponent>
      <FooterComponent path="/usersetting"></FooterComponent>
    </>
  );
};

export default UsersettingPage;