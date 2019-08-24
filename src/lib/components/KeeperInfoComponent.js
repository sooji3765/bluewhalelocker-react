import React, { Component } from "react";

class KeeperInfoComponent extends Component {
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

    const buttonOuterStyle = {
      display: "inline"
    };
    const buttonStyle = {
      height: "50px",
      width: "120px",
      margin: "10px"
    };

    const h1Style = {
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "300px"
    };
    return (
      <>
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
                전화번호{" "}
                <img src="../img/store2.jpg" alt="store2" style={imgStyle2} />
                (전화기 아이콘)
              </div>
              <div style={liStyle}>남은라커수/총라커수</div>
              <div style={buttonOuterStyle}>
                <button style={buttonStyle}>
                  <a href="../pages/ChatPage.js">채팅(아이콘)</a>
                </button>
                <button style={buttonStyle}>
                  <a href="/reservation">예약(이쁜 글씨)</a>
                </button>
              </div>
              <div style={mapStyle}>
                <h1 style={h1Style}>Map</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KeeperInfoComponent;
