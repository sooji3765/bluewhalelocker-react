import React ,{ Component } from 'react';
import 'date-fns';
import PageMainComponent from './PageMainComponent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class RegisterKeeperComponent extends Component{

    
    render = () => {

        // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

        // function handleDateChange(date) {
        //     setSelectedDate(date);
        // }

        return (
           <>
           <div className="page-content header-clear-medium color-white">
               <div className="register-keeper-page">
                <div className="register-keeper-title">
                    KEEPER REGISTER
                </div>

                <div className="register-keeper-form">
                    <form>
                        <div className="form-container">
                        <TextField
                            id="standard-full-width"
                            label="Name"
                            placeholder="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                        <div className="form-container">
                        <TextField
                            id="standard-full-width"
                            label="Tel"
                            placeholder="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                        <div className="form-container">
                        <TextField
                            id="standard-full-width"
                            label="Phone"
                            placeholder="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                        <div className="form-container">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>   
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            className="register-textfield"
                            id="date-picker-inline"
                            label="Date of Birth"
                            // value={selectedDate}
                            // onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="form-container">
                        <TextField
                            id="standard-full-width"
                            label="Location"
                            placeholder="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                        <div className="form-container">
                            <input type="file" onChange={this.onChange} />
                        </div>
                        <div className="form-container">
                            <div className="radio-group">
                                <div className="radio-item">
                                <label>General</label>
                                <input 
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                                  <div className="radio-item"> 
                                   <label>Business</label>
                                <input 
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                              </div>
                        </div>
                        <div className="form-container-business">
                            <div className="form-container">
                            <TextField
                                id="standard-full-width"
                                label="Business Number"
                                placeholder="Placeholder"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            </div>
                            <div className="form-container">
                            <TextField
                                id="standard-full-width"
                                label="Business Name"
                                placeholder="Placeholder"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            </div>
                            <div className="form-container">
                            <TextField
                                id="standard-full-width"
                                label="Business Phone"
                                placeholder="Placeholder"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            </div>
                        </div>        

                        <div className="form-container">
                            <Button variant="outlined" color="default" className="locker-btn-register">REGISTER</Button>
                        </div>
                        
                    </form>
                </div>
               </div>
           </div>
           <PageMainComponent/>
           </>
        )
    }
}

export default RegisterKeeperComponent;