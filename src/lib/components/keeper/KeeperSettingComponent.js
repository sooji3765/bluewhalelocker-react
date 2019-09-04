import React, { Component } from "react";

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
            </div>
          </div>
        </div>
        <div className="line-hr"></div>
        <div className="content-box">
          <div className="content">
            <ul className="link-list1">
              <li>
                <a to="/keeper_edit">
                  <i className="fas fa-user-cog color-blue"></i>
                  <span>Keeper Edit</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/keeper/review">
                  <i className="fas fa-keyboard"></i>
                  <span>My Review</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/keeper/wallet">
                  <i className="fas fa-wallet color-green"></i>
                  <span>My Wallet</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a to ="/usersetting">
                  <i className="fas fa-exchange-alt color-yellow"></i>
                  <span>Change User Mode</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a to="/register_keeper">
                  <i className="fa fa-cog color-gray"></i>
                  <span>Register Keeper</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a to="/login">
                
                  <i className="fa fa-power-off color-red"></i>
                  <span>Login</span>
                  <i className="fa fa-angle-right"></i>
              
                </a>
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
