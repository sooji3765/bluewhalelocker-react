import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

class LockerItemComponent extends Component {

    state ={
        checked : true,
        open :false
    }

    handleChange = e => {
        this.setState({  [e.target.value]: e.target.checked });
    };

    handleOpen = () =>{
        this.setState({
            open : true
        })
    }

    handleClose = () =>{
        this.setState({
            open : false
        })
    }

    render() {

        return (
            <>
                <div className="page-content header-clear-medium">
                    <div className="page-title-content">
                        LOCKER ITEM 
                    </div>

                    <div className="page-form-container">
                        <div className="form-content-div">
                            <TextField
                                fullWidth
                                label="Locker Number"
                                id="margin-none"
                                defaultValue="0001"
                                InputProps={{
                                    readOnly: true,
                                  }}
                               
                            />
                        </div>
                        <div className="form-content-div">
                            <TextField
                                fullWidth
                                label="Size"
                                id="margin-none"
                                InputProps={{
                                    readOnly: true,
                                  }}
                                defaultValue="Small"  
                            />
                        </div>
                        <div className="form-content-div">
                            <TextField
                                fullWidth
                                label="Price"
                                id="margin-none"
                                InputProps={{
                                    readOnly: true,
                                  }}
                                defaultValue="1,000"  
                            />
                        </div>
                        <div className="form-content-div">
                           <label className="form-content-label">Score</label>
                            <div className="form-star-div">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />   
                            </div>
                        </div>

                        <div className="form-content-div">
                            <label className="form-content-label">State Change</label>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={this.state.checked}
                                    onChange={(e)=>this.handleChange}
                                    value="checked"
                                    color="primary"
                                />
                                }
                                label="USE"
                            />
                        </div>

                        <div className="form-content-div">

                            <Button
                                onClick={this.handleOpen}
                                variant="outlined"
                                color="secondary"
                                fullWidth
                            >DELETE LOCKER <i className="fas fa-trash icon-margin"></i></Button>
                        </div>
                        <div className="form-content-div">    
                            <Button
                                fullWidth 
                                variant="outlined" 
                                color="default"
                            >EDIT</Button>
                        </div>
                    </div>

                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        >
                        <div className="paper">
                            <h2 id="simple-modal-title">Text in a modal</h2>
                            <p id="simple-modal-description">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                            <Button variant="outlined" color="secondary">삭제하기</Button>    
                        </div>
                    </Modal>
                </div>


                
            </>
        );
    }
}

export default LockerItemComponent;