import React, { Component } from "react";
import Calendar from "react-calendar";
// import Calendar from "react-calendar/dist/entry.nostyle";

class LockerReservationComponent extends Component {
  state = {
    date: new Date(),
    today: new Date()
  };

  onChange = date => {
    this.setState({ date });
    console.log(date);
  };

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
      height: "400px",
      display: "block",
      margin: "0 auto"
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
            <div style={calendarStyle}>
              <Calendar
                // className={classes.calendar}
                minDate={this.state.today}
                onChange={this.onChange}
                value={this.state.date}
              />
              <div>
                {this.state.date.getFullYear()}년{" "}
                {this.state.date.getMonth() + 1}월 {this.state.date.getDate()}일
              </div>
              <div>남은 라커수 : 3</div>
              <button className="menu-keeper-btn">예약하기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LockerReservationComponent;
