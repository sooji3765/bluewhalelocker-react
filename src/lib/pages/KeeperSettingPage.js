import React from 'react';

import HeaderKeeperComponent from '../components/default/HeaderKeeperComponent';
import KeeperSettingComponent from '../components/keeper/KeeperSettingComponent';
import FooterKeeperComponent from '../components/default/FooterKeeperComponent';

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