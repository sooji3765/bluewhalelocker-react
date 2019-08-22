import React from 'react';

import HeaderKeeperComponent from '../components/HeaderKeeperComponent';
import KeeperSettingComponent from '../components/KeeperSettingComponent';
import FooterKeeperComponent from '../components/FooterKeeperComponent';

const KeeperSettingPage = (props) => {
 
  return (
    <>
      <HeaderKeeperComponent></HeaderKeeperComponent>
      <KeeperSettingComponent></KeeperSettingComponent>
      <FooterKeeperComponent path="/keeper_setting"></FooterKeeperComponent>
    </>
  );
};

export default KeeperSettingPage;