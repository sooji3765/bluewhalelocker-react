import React, { Component } from "react";
import { height } from "@material-ui/system";

class LockerReservationComponent extends Component {
  render() {
    const headLineStyle = {
      textAlign: "center",
      background: "blue",
      color: "white",
      fontSize: "30px",
      height: "40px",
      margin: "20px",
      paddingTop: "7px",
      fontStyle: "bord"
    };
    const outerStyle = {
      display: "inline-block",
      width: "50%",
      verticalAlign: "middle",
      textAlign: "center",
      background: "yellow"
    };
    const outerStyle2 = {
      display: "inline-block",
      width: "50%",
      verticalAlign: "middle",
      textAlign: "center",
      background: "orange"
    };
    const imgStyle = {
      display: "inline-block",
      width: "300px",
      height: "300px",
      boder: "1px solid black",
      margin: "10px",
      background: "orange"
    };
    const calendarStyle = {
      background: "pink",
      height: "400px"
    };
    return (
      <>
        <div className="page-content header-clear-medium">
          <div>
            <div style={headLineStyle}>LOCKER RESERVATION</div>
            <div style={outerStyle}>
              <div>
                <div>하영이 카페</div>
                <div>공덕 어쩌구 저쩌구</div>
                <div>Keeper : 하영</div>
              </div>
            </div>
            <div style={outerStyle2}>
              <img src="../img/store1.jpg" alt="store_img" style={imgStyle} />
            </div>
            <div style={calendarStyle} />
          </div>
        </div>
      </>
    );
  }
}

export default LockerReservationComponent;
