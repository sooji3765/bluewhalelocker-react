import React from 'react';

import HeaderKeeperComponent from '../components/HeaderKeeperComponent';
import RegisterKeeperComponent from '../components/RegisterKeeperComponent';
import FooterKeeperComponent from '../components/FooterKeeperComponent';

const RegisterKeeperPage = (props) => {
 
  return (
    <>
      <HeaderKeeperComponent></HeaderKeeperComponent>
      <RegisterKeeperComponent></RegisterKeeperComponent>
      <FooterKeeperComponent path="/keeper_setting"></FooterKeeperComponent>
    </>
  );
};

export default RegisterKeeperPage;