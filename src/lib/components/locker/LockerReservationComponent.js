import React, { Component } from "react";
import Calendar from "react-calendar";
import {Button,InputAdornment, TextField,ButtonGroup} from '@material-ui/core';
import Select from 'react-select'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class LockerReservationComponent extends Component {
  state = {
    date: new Date(),
    today: new Date()
  };

  constructor(props) {
    super(props);
    this.handleReservationLocker = this.handleReservationLocker.bind(this);
    this.handlePayLocker = this.handlePayLocker.bind(this);
  }
  
  onChange = date => {
    this.setState({ date });
    console.log(date);
  };

  state ={
    selectedDate : new Date()
  }

  handleDateChange= (e)=> {
    this.setState({selectedDate:e.target.value});
  }

  handleReservationLocker = (e) => {
    e.preventDefault();
  }

  handlePayLocker = (e) => {
    e.preventDefault();
  }
    
  render() {

    const options = [
      { value: '0', label: '0' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' }
    ]
   
    return (
      <>
        <div className="page-content header-clear-medium">
          <div>
            <div className="page-title">LOCKER RESERVATION</div>
            
            <div className="locker-info-div">
              <div className="store-img-div">
                <img className="store-img" alt="store" src="../img/hollys.jpg"/>
              </div>

              <div className="store-detail">
                <p className="store-name">Store Name</p>
                <p>Store Address</p>
              </div>
            </div>

            
            <div className="reservation-input-content">
            <div className="select-content">
              <div className="select-date">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  style={{color:"#fff"}}
                  id="date-picker-inline"
                  label="Select Use Date"
                  fullWidth
                  value={this.state.selectedDate}
                  onChange={(e) =>this.handleDateChange(e)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </MuiPickersUtilsProvider>
              </div>

              <div className="select-locker-area">
                <div className="select-locker-item">
                  <div className="locker-size-con">
                    LARGE
                  </div>
                
                  <Select 
                   className="locker-size-op"
                    options={options} />
                  
                </div>
                <div className="select-locker-item">
                  <div className="locker-size-con">
                    medium
                  </div>
                
                  <Select 
                   className="locker-size-op"
                    options={options} />
                  
                </div>
                <div className="select-locker-item">
                  <div className="locker-size-con">
                    SMALL
                  </div>
                
                  <Select 
                   className="locker-size-op"
                    options={options} />
                  
                </div>
              </div>

            </div>
            <ButtonGroup 
              className="btn-group-con"
              fullWidth 
              aria-label="full width outlined button group">
              <Button onClick={this.handleReservationLocker} >RESERVATION</Button>
              <Button onClick={this.handlePayLocker} >PAY</Button>
            </ButtonGroup>
           
           </div> 
          </div>
        </div>
      </>
    );
  }
}

export default LockerReservationComponent;
