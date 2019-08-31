import React from 'react';

import HeaderKeeperComponent from '../components/default/HeaderKeeperComponent';
import InputLockerComponent from '../components/locker/InputLockerComponent';
import FooterKeeperComponent from '../components/default/FooterKeeperComponent';

const InputLockerPage = (props) => {
 
  return (
    <>
      <HeaderKeeperComponent></HeaderKeeperComponent>
      <InputLockerComponent></InputLockerComponent>
      <FooterKeeperComponent path="/add_locker"></FooterKeeperComponent>
    </>
  );
};

export default InputLockerPage;