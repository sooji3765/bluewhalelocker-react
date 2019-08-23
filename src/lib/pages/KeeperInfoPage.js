import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import KeeperInfoComponent from "../components/KeeperInfoComponent";

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
