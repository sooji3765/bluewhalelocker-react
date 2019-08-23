import React ,{Component} from 'react'
import Select from 'react-select'

class InputLockerComponent extends Component{


    render() {
        
    const options =[
      { value:"large" ,label :"Large"},
      { value:"medium" ,label :"Medium"},
      { value:"small" ,label :"Small"}     
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
                              <label for="locker_num">Locker Number</label>
                              <input
                                    className="locket-input-text"
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
                                    className="locket-input-text"
                                    type="text"
                                    placeholder="lockerNumber"
                                  />
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