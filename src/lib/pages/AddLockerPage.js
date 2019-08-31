import React from 'react';

import HeaderKeeperComponent from '../components/default/HeaderKeeperComponent';
import AddLockerComponent from '../components/locker/AddLockerComponent';
import FooterKeeperComponent from '../components/default/FooterKeeperComponent';

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