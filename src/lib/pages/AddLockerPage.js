import React from 'react';

import HeaderKeeperComponent from '../components/HeaderKeeperComponent';
import AddLockerComponent from '../components/AddLockerComponent';
import FooterKeeperComponent from '../components/FooterKeeperComponent';

const KeeperSettingPage = (props) => {
 
  return (
    <>
      <HeaderKeeperComponent></HeaderKeeperComponent>
      <AddLockerComponent></AddLockerComponent>
      <FooterKeeperComponent path="/add_locker"></FooterKeeperComponent>
    </>
  );
};

export default KeeperSettingPage;