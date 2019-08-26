import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class ProfileEditComponent extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="page-content header-clear-medium">
          <form>
            <div className="form-profile">
                <div className="form-profile-title">
                  Profile Edit
                </div>

                <div className="from-profile-div">
                  <div className="form-profile-img-div">
                    <img className="form-profile-img" src='../img/user1.png' alt=''/>
                    {/* span에 이미지 수정 이벤트 만들어주세용 */}
                    <span className="form-profile-img-edit"><i className="fas fa-user-edit"></i></span>
                  </div>
                </div>

                <div className="form-profile-div">
                  <TextField
                    id="standard-helperText"
                    label="Email"
                    defaultValue="test@text.com"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                   
                    margin="normal"
                  /> 
                </div>
                <div className="form-profile-div">
                  <TextField
                    id="standard-helperText"
                    label="Name"
                    defaultValue="HWANG "
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    margin="normal"
                  /> 
                </div>
                <div className="form-profile-div">
                  <TextField
                    type="password"
                    id="standard-helperText"
                    label="Password"
                    fullWidth
                    margin="normal"
                  /> 
                </div>  
                <div className="form-profile-div">
                <Button variant="outlined" color="inherit" fullWidth>
                    PASSWORD EDIT
                </Button>
                </div> 
            </div>
          </form>  
        </div>
      </>
    );
  }
}

export default ProfileEditComponent;
