import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
class KeeperInfoPage extends Component {
  state = {};
  render() {
    const imgStyle = {
      display: "inline-block",
      width: "300px",
      height: "300px",
      boder: "1px solid black",
      margin: "10px",
      background: "orange"
    };

    const imgStyle2 = {
      display: "inline-block",
      width: "10px",
      height: "10px",
      boder: "1px solid black",
      background: "orange"
    };

    const outerStyle = {
      textAlign: "center",
      background: "blue",
      color: "white",
      overflowX: "hidden",
      overflowY: "hidden"
    };

    const outerStyle2 = {
      textAlign: "center",
      background: "green",
      color: "white",
      overflowX: "hidden",
      overflowY: "hidden"
    };

    const liStyle = {
      //   fontSize: "40px",
      marginTop: "10px",
      display: "block",
      fontSize: "15px",
      background: "red",
      margin: "10px"
    };

    const mapStyle = {
      background: "yellow",
      margin: "10px",
      height: "300px",
      color: "black",
      fontSize: "30px"
    };

    const buttonStyle = {
      height: "50px",
      width: "120px"
    };

    const h1Style ={
      display : "inline-block",
      verticalAlign :"middle",
      lineHeight : "300px"
    }
    return (
      <>
        <HeaderComponent />
        <div className="page-content header-clear-medium">
          <div style={outerStyle}>
            <img src="../img/store1.jpg" alt="store_img" style={imgStyle} />
            <div style={outerStyle2}>
              <div style={liStyle}>
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div style={liStyle}>상호명 </div>
              <div style={liStyle}>
                전화번호 <img src="../img/store2.jpg" alt="store2" style={imgStyle2} />
              </div>
              <button style={buttonStyle}>
                <a href="../pages/ChatPage.js">예약</a>
              </button>
              <div style={mapStyle}>
                <h1 style={h1Style}>Map</h1>
              </div>
            
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default KeeperInfoPage;
