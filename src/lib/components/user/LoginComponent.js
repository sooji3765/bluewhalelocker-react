import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MyInfo from '../../info/MyInfo';

class LoginComponent extends Component{

    handleSignIn = (e) => {
        e.preventDefault();
        MyInfo.setSignIn();
        window.location.href = "/";
    };

    render(){
        return (
            <>
            <div className="page-content header-clear-medium">
               <form>
                <div className="form-login">
                    <div className="form-title">
                        LOGIN
                    </div>
                    <div className="form-content">
                        <span className="form-span"><i class="fas fa-user"></i></span>
                        <input
                            placeholder ="email" 
                            className="input-text"
                            name ="email"
                            />
                    </div>

                    <div className="form-content">
                        <span className="form-span"><i class="fas fa-key"></i></span>
                        <input 
                            placeholder ="password" 
                            className="input-text"
                            name ="password"
                            />
                    </div>
                    <div className="form-click-content">
                        <label><input className="form-check" type="checkbox"/>save your login data</label>
                        <button 
                            className="form-login-btn"
                            onClick={this.handleSignIn}
                        >LOGIN</button>
                        <Link to="/signup" className="form-link-signup">Sign Up</Link>
                    </div>
                </div>
                </form>
            </div>
            </>
        );
    }
}

export default LoginComponent;