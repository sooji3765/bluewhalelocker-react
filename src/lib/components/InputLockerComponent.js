import React ,{Component} from 'react'
import Select from 'react-select'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class InputLockerComponent extends Component{


    render() {
        
    const options =[
      { value:"large" ,label :"Large"},
      { value:"medium" ,label :"Medium"},
      { value:"small" ,label :"Small"}     
    ]

    // const [value, setValue] = React.useState('female');

    // function handleChange(event) {
    //   setValue(event.target.value);
    // }

        return(
            <>
            <div className="page-content header-clear-medium color-white">
                <div className="input-locker-page">
                    <div className="input-locker-title">
                        Register Locker
                    </div>

                    <div className="form-input-locker">
                        <form>
                            <div className="form-locker-div">
                            <FormControl component="fieldset">
                              <FormLabel component="legend">Select Locker Charge</FormLabel>
                              <input
                                    className="locker-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
                                  </FormControl>
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_size">Locker Size</label>
                              <Select options={options}></Select>
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_num">Locker Number</label>
                              <input
                                    className="locket-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
                            </div>
                            <div className="form-locker-div"> 
                            <FormControl component="fieldset">
                              <FormLabel component="legend">Select Locker Charge</FormLabel>
                              <RadioGroup aria-label="position" name="position"  row>
                                
                                <FormControlLabel
                                  // value="start1"
                                  control={<Radio color="primary" />}
                                  label="Free"
                                  labelPlacement="start"
                                />
                                <FormControlLabel
                                  // value="start2"
                                  control={<Radio color="primary" />}
                                  label="Charge"
                                  labelPlacement="start"
                                />
                              </RadioGroup>
                            </FormControl>
                            </div>

                            <div className="form-locker-div">
                              <Button variant="outlined" color="primary" className="locker-btn-register">REGISTER LOCKER</Button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>    
            </>
        )
    }
}

export default InputLockerComponent;