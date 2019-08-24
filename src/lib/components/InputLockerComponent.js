import React ,{Component} from 'react'
import Select from 'react-select'
import Button from '@material-ui/core/Button';


class InputLockerComponent extends Component{


    render() {
        
    const options =[
      { value:"large" ,label :"Large"},
      { value:"medium" ,label :"Medium"},
      { value:"small" ,label :"Small"}     
    ]

    const prices =[
      { value:"3,000" ,label :"3,000"},
      { value:"2,000" ,label :"2,000"},
      { value:"1,000" ,label :"1,000"}     
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
                            <label for="locker_size">Locker Number</label>
                              <input
                                    className="locker-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
                                  
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_size">Locker Size</label>
                              <Select options={options}></Select>
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_num">Locker Number</label>
                              <input
                                    className="locker-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
                            </div>
                            <div className="form-locker-div"> 
                              <label for="locker_num">Select Locker Charge</label>
                              <div className="radio-group">
                                <div className="radio-item">
                                <label>Free</label>
                                <input 
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                                  <div className="radio-item"> 
                                   <label>Charge</label>
                                <input 
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                              </div>
                            </div>

                            <div className="form-locker-div">
                              <label for="locker_size">Locker Price</label>
                              <Select options={prices}></Select>
                            </div>

                            <div className="form-locker-div">
                              <Button variant="outlined" color="default" className="locker-btn-register">REGISTER LOCKER</Button>
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