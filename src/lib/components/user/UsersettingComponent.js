import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyInfo from "../../info/MyInfo";

class UsersettingComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn = e => {
    e.preventDefault();
    MyInfo.setSignOut();
    window.location.href = "/";
  };

  render() {
    const userInfo = {
      ...this.props.userInfo
    };

    const site = {
      login: "login"
    };

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="content-box box-padding">
            <div className="profile">
              <img className="profile-img" src="img/user2.png" alt="user2" />

              <div className="profile-body">
                <h2 className="userid">{userInfo.user_id}</h2>
                <span className="user-name">{userInfo.user_name}</span>
                <button className="btn">My Profile</button>
              </div>
            </div>
          </div>
          <div className="line-hr" />
          <div className="content-box">
            <div className="content">
              <ul className="link-list1">
                <li>
                  <a href="/profile_edit">
                    <i className="fas fa-user-cog color-blue" />
                    <span>Profile Edit</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-keyboard" />
                    <span>My Review</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-wallet color-green" />
                    <span>My Wallet</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <Link to="/keeper_setting">
                    <i className="fas fa-exchange-alt color-yellow" />
                    <span>Change Keeper Mode</span>
                    <i className="fa fa-angle-right" />
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog color-gray" />
                    <span>Setting Application</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <Link to="/login" onClick={this.handleSignIn}>
                    <i className="fa fa-power-off color-red" />
                    <span>Login</span>
                    <i className="fa fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UsersettingComponent;
