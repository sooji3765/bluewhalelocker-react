import React from 'react';

import HeaderKeeperComponent from '../components/HeaderKeeperComponent';
import InputLockerComponent from '../components/InputLockerComponent';
import FooterKeeperComponent from '../components/FooterKeeperComponent';

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