import React, { Component } from "react";

class LoginComponent extends Component{
    render(){
        return (
            <>
            <div className="page-content header-clear-medium">
                <div className="page-title">
                    LOGIN
                </div>

                <div className="form-login">
                    <div className="form-content">
                        <span className="form-span">ID</span>
                        <input
                            placeholder ="email" 
                            className="input-text"
                            name ="email"
                            />
                    </div>

                    <div className="form-content">
                        <span className="form-span">PASSWORD</span>
                        <input 
                            placeholder ="password" 
                            className="input-text"
                            name ="password"
                            />
                    </div>
                    <div className="form-click-content">
                        <input type="checkbox"/>save your login data
                        <button 
                            className="form-login-btn"
                        >LOGIN</button>
                        <a href ="/">Sign Up</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default LoginComponent;