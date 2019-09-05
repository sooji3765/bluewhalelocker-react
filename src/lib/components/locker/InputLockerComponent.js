import React ,{Component} from 'react'
import Select from 'react-select'
import Button from '@material-ui/core/Button';
import BwlUtil from '../../utils/BwlUtil';

class InputLockerComponent extends Component{

  constructor(props) {
      super(props);
      this.handleRegisterLocker = this.handleRegisterLocker.bind(this)
  }

  handleRegisterLocker = (e) => {
    e.preventDefault();
    
    const form = BwlUtil.findParentForm(e.target);

    if (form) {
        const item = BwlUtil.getFormData(e, form);
        this.props.handleRegisterLocker({props: this.props, e, item});
    } else {
        console.log('not found form tag');
    }

  }

  render() {
        
    const options = [
      { value:"large" ,label :"Large"},
      { value:"medium" ,label :"Medium"},
      { value:"small" ,label :"Small"}     
    ]

    const prices = [
      { value:"3,000" ,label :"3,000"},
      { value:"2,000" ,label :"2,000"},
      { value:"1,000" ,label :"1,000"}     
    ]

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
                                    name="locker_number"
                                    className="locker-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
                                  
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_size">Locker Size</label>
                              <Select name="size" options={options}></Select>
                            </div>
                            <div className="form-locker-div">
                              <label for="locker_num">Locker Number</label>
                              <input
                                    name="state"
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
                                  name='radio_charge'
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                                  <div className="radio-item"> 
                                   <label>Charge</label>
                                <input 
                                  name='radio_charge'
                                  type="radio"
                                  value="free"
                                  />
                                  </div>
                              </div>
                            </div>

                            <div className="form-locker-div">
                              <label for="locker_size">Locker Price</label>
                              <Select name='prices' options={prices}></Select>
                            </div>

                            <div className="form-locker-div">
                              <Button variant="outlined" color="default" className="locker-btn-register" onClick={(e) => this.handleRegisterLocker(e)} >REGISTER LOCKER</Button>
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