import React, { Component } from "react";

class KeeperSettingComponent extends Component {

  constructor(props) {
    super(props);
    this.handleRouterKeeperEdit = this.handleRouterKeeperEdit.bind(this);
    this.handleRouterReview = this.handleRouterReview.bind(this);
    this.handleRouterWallet = this.handleRouterWallet.bind(this);
    this.handleRouterUserSetting = this.handleRouterUserSetting.bind(this);
    this.handleRouterSignIn = this.handleRouterSignIn.bind(this);
  }

  handleRouterKeeperEdit = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'RegisterKeeperComponent'});
  }

  handleRouterReview = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'ReviewRegistComponent'});
  }

  handleRouterWallet = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'WalletComponent'});
  }

  handleRouterUserSetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'UsersettingComponent', selectChanger: 'user'});
  }

  handleRouterRegisterKeeper = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'RegisterKeeperComponent'});
  }

  handleRouterSignIn = e => {
    e.preventDefault();
    this.props.handleSignOut({props: this.props, e});
  };

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
                <a href="/keeper_edit" onClick={(e) => this.handleRouterKeeperEdit(e)}>
                  <i className="fas fa-user-cog color-blue"></i>
                  <span>Keeper Edit</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/keeper/review" onClick={(e) => this.handleRouterReview(e)}>
                  <i className="fas fa-keyboard"></i>
                  <span>My Review</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/keeper/wallet" onClick={(e) => this.handleRouterWallet(e)}>
                  <i className="fas fa-wallet color-green"></i>
                  <span>My Wallet</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href ="/usersetting" onClick={(e) => this.handleRouterUserSetting(e)}>
                  <i className="fas fa-exchange-alt color-yellow"></i>
                  <span>Change User Mode</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/register_keeper" onClick={(e) => this.handleRouterRegisterKeeper(e)}>
                  <i className="fa fa-cog color-gray"></i>
                  <span>Register Keeper</span>
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="/login" onClick={this.handleRouterSignIn} >
                
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
