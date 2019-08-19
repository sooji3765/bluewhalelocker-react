import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import FooterComponent from '../components/FooterComponent';
import MenuSettingComponent from '../components/MenuSettingComponent';

const HomePage = (props) => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <MapComponent></MapComponent>
      <FooterComponent path="/"></FooterComponent>
      <MenuSettingComponent></MenuSettingComponent>
    </>
  );
};

export default HomePage;