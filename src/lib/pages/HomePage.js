import React from "react";

import HeaderComponent from "../components/HeaderComponent";
import MapComponent from "../components/MapComponent";
import FooterComponent from "../components/FooterComponent";
import MenuSettingComponent from "../components/MenuSettingComponent";
import GeographyComponent from "../components/GeographyComponent";

const HomePage = props => {
  return (
    <>
      <HeaderComponent />
      <MapComponent />
      {/* <GeographyComponent /> */}
      <FooterComponent path="/" />
      <MenuSettingComponent />
    </>
  );
};

export default HomePage;
