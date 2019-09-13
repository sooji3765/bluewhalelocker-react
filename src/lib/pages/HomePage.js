import React from "react";

import HeaderComponent from "../components/default/HeaderComponent";
import MapComponent from "../components/map/MapComponent";
import FooterComponent from "../components/default/FooterComponent";
import MenuSettingComponent from "../components/keeper/MenuSettingComponent";
import PageMainComponent from '../components/default/PageMainComponent';
import GeographyComponent from "../components/map/GeographyComponent";
import MyInfo from "../info/MyInfo";

const HomePage = props => {
  const profile = MyInfo.getProfile("profile");
  
  return (
    <>
      <HeaderComponent />
      <MapComponent />
      {/* <GeographyComponent /> */}
      <PageMainComponent/>
      <FooterComponent path="/" />
      <MenuSettingComponent />
    </>
  );
};

export default HomePage;
