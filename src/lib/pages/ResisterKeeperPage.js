import React from 'react';

import HeaderKeeperComponent from '../components/default/HeaderKeeperComponent';
import RegisterKeeperComponent from '../components/keeper/RegisterKeeperComponent';
import FooterKeeperComponent from '../components/default/FooterKeeperComponent';

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