import React, { Component } from "react";

class UsersettingComponent extends Component {

  constructor(props) {
    super(props);
    this.handleRouterKeeperSetting = this.handleRouterKeeperSetting.bind(this);
    this.handleRouterSignIn = this.handleRouterSignIn.bind(this);
  }

  handleRouterKeeperSetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'KeeperSettingComponent', selectChanger: 'keeper'});
  }

  handleRouterSignIn = e => {
    e.preventDefault();

    const profile = {
      state: {
        header: {
          count: "",
          title: "",
        },
        userInfo: {
          user_id: "",
          user_name: "",
        },
        routerInfo: {
          selectComponent: "LoginComponent",
        },
      }
    };
    this.props.handleUpdateState({props: this.props, e, profile});
  };

  render() {
    const userInfo = {
      ...this.props.userInfo
    };

    // const site = {
    //   login: "login"
    // };

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
                  <a href="/review">
                    <i className="fas fa-keyboard" />
                    <span>My Review</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="/wallet">
                    <i className="fas fa-wallet color-green" />
                    <span>My Wallet</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a to="/keeper_setting" onClick={(e) => this.handleRouterKeeperSetting(e)}>
                    <i className="fas fa-exchange-alt color-yellow" />
                    <span>Change Keeper Mode</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a to="/login" onClick={this.handleSignIn}>
                    <i className="fa fa-power-off color-red" />
                    <span>Login</span>
                    <i className="fa fa-angle-right" />
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

export default UsersettingComponent;
