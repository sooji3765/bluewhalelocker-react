import React, { Component } from "react";
import { Link } from "react-router-dom";

class KeeperSettingComponent extends Component {
  render() {
    const userInfo = {
      user_id: "USER1",
      user_name: "HAYONG"
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
                  <a href="#">
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
                  <Link to="/usersetting">
                    <i className="fas fa-exchange-alt color-yellow" />
                    <span>Change User Mode</span>
                    <i className="fa fa-angle-right" />
                  </Link>
                </li>
                <li>
                  <Link to="/register_keeper">
                    <i className="fa fa-cog color-gray" />
                    <span>Register Keeper</span>
                    <i className="fa fa-angle-right" />
                  </Link>
                </li>
                <li>
                  <Link to="/login">
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

export default KeeperSettingComponent;
