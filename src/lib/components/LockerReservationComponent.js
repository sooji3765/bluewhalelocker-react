import React, { Component } from "react";
import { height } from "@material-ui/system";
import Calendar from "react-calendar";

class LockerReservationComponent extends Component {
  state = {
    date: new Date()
  };

  //   onDateChange = date => {
  //     this.setState({
  //       date: moment(date).format("YYYY-MM-DD")
  //     });
  //   };

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
      background: "orange",
      borderRadius: "100%"
    };
    const calendarStyle = {
      background: "pink",
      height: "400px"
    };
    const tStyle = {
      margin: "10px"
    };
    return (
      <>
        <div className="page-content header-clear-medium">
          <div>
            <div style={headLineStyle}>LOCKER RESERVATION</div>
            <div style={outerStyle}>
              <div>
                <div style={tStyle}>young's cafe</div>
                <div>공덕 어쩌구 저쩌구</div>
                <div>Keeper : hayoung</div>
              </div>
            </div>
            <div style={outerStyle2}>
              <img src="../img/store1.jpg" alt="store_img" style={imgStyle} />
            </div>
            {/* <div style={calendarStyle} /> */}
            <Calendar
              //   className={classes.calendar}
              onChange={this.onDateChange}
              value={this.state.date}
            />
          </div>
        </div>
      </>
    );
  }
}

export default LockerReservationComponent;
