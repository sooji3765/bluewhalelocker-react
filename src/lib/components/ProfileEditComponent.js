import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileEditComponent extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="page-content header-clear-medium">
          <form>
            <div className="form-login">
              <div className="form-title">프로필 수정</div>
              <br />
              <div className="keeper-names">Email</div>
              <div className="keeper-names"> 이름</div>
              <div>사진 수정</div>
              <br />
              <div>password</div>
              <div className="form-content">
                <span className="form-span" />
                <input
                  placeholder="password"
                  className="input-text"
                  name="password"
                />
              </div>

              <div className="form-content">
                <span className="form-span">
                  <i class="fas fa-key" />
                </span>
                <input
                  placeholder="password"
                  className="input-text"
                  name="password"
                />
              </div>
              <div className="form-click-content">
                <button className="form-login-btn" onClick={this.handleSignIn}>
                  수정
                </button>
                {/* <Link to="/signup" className="form-link-signup">
                  Sign Up
                </Link> */}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default ProfileEditComponent;
