import React from 'react';

import HeaderKeeperComponent from '../components/HeaderKeeperComponent';
import UsersettingComponent from '../components/UsersettingComponent';
import FooterKeeperComponent from '../components/FooterKeeperComponent';

const KeeperSettingPage = (props) => {
 
  return (
    <>
      <HeaderKeeperComponent></HeaderKeeperComponent>
      {/* <UsersettingComponent></UsersettingComponent> */}
      <FooterKeeperComponent path="/keeper_setting"></FooterKeeperComponent>
    </>
  );
};

export default KeeperSettingPage;