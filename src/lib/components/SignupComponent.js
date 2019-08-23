import React ,{ Component } from 'react';
import PageMainComponent from './PageMainComponent';
import MyInfo from '../info/MyInfo';

class SignupComponent extends Component{

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignUp.bind(this);
      }

    handleSignUp = (e) => {
        e.preventDefault();
        MyInfo.setSignUp();
        window.location.href = "/";
    };

    render(){
        return (
           <>
           <div className="page-content header-clear-medium color-white">
               <form>
                   <div className="form-signup">
                       <div className="form-title">
                            SIGN UP
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
                            <span className="form-span"><i class="fab fa-amilia"></i></span>
                            <input 
                                placeholder ="name" 
                                className="input-text"
                                name ="name"
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
                    <div className="form-content">
                        <span className="form-span"><i class="fas fa-key"></i></span>
                        <input 
                            placeholder ="password check" 
                            className="input-text"
                            name ="password-re"
                            />
                    </div>
                    
                    <div className="form-click-content">
                     
                        <button 
                            className="form-login-btn"
                            onClick={this.handleSignUp}
                        >REGISTER</button>
                    </div> 
                   </div>
               </form>
           </div>
           <PageMainComponent/>
           </>
        )
    }
}

export default SignupComponent