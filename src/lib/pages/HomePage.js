import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import MapComponent from "../components/MapComponent";
import FooterComponent from "../components/FooterComponent";
import MenuSettingComponent from "../components/MenuSettingComponent";
import GeographyComponent from "../components/GeographyComponent";
import MyInfo from "../info/MyInfo";

const HomePage = props => {
  const profile = MyInfo.getProfile("profile");
  return (
    <>
      <HeaderComponent {...profile.state.header} />
      <MapComponent />
      {/* <GeographyComponent /> */}
      <FooterComponent path="/" />
      <MenuSettingComponent />
    </>
  );
};

export default HomePage;
