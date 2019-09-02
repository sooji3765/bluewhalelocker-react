import React, { Component } from "react";
import Calendar from "react-calendar";
import {Button, ButtonGroup} from '@material-ui/core';
import Select from 'react-select'

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

    const options = [
      { value: 'Large', label: 'Large' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Small', label: 'Small' }
    ]
   
    return (
      <>
        <div className="page-content header-clear-medium">
          <div>
            <div className="page-title">LOCKER RESERVATION</div>
            
            <div className="locker-info-div">
              <div className="locker-info-text"> 
                <p className="text-title">young's cafe</p>
                <p classNmae="text-ctx"> 공덕 어쩌구 저쩌구</p>
                <p>Keeper : hayoung</p>
              </div>
              <div className="locker-info-img">
                <img src="../img/store1.jpg" alt="store_img" className="locker-info-img-in" />
              </div>
            </div>

            
            <div className="reservation-input-content">
              <div>
                {this.state.date.getFullYear()}년{" "}
                {this.state.date.getMonth() + 1}월 {this.state.date.getDate()}일
                <div>남은 라커수 : 3</div>
              </div>
             
              

              <Calendar
                className="calender-div"
                minDate={this.state.today}
                onChange={this.onChange}
                value={this.state.date}
              />
           

           <Select 
           className="btn-group-con"
           options={options} />
            
              
            <ButtonGroup 
              className="btn-group-con"
              fullWidth 
              aria-label="full width outlined button group">
              <Button>RESERVATION</Button>
              <Button>PAY</Button>
            </ButtonGroup>
           
           </div> 
          </div>
        </div>
      </>
    );
  }
}

export default LockerReservationComponent;
