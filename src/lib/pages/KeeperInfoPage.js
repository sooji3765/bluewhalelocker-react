import React, { Component } from "react";
import HeaderComponent from "../components/default/HeaderComponent";
import FooterComponent from "../components/default/FooterComponent";
import KeeperInfoComponent from "../components/keeper/KeeperInfoComponent";

class KeeperInfoPage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <KeeperInfoComponent />
        <FooterComponent />
      </>
    );
  }
}

export default KeeperInfoPage;
