import React, { Component } from "react";

class UsersettingComponent extends Component {

  constructor(props) {
    super(props);
    this.handleRouterProfileEdit = this.handleRouterProfileEdit.bind(this);
    this.handleRouterReview = this.handleRouterReview.bind(this);
    this.handleRouterWallet = this.handleRouterWallet.bind(this);
    this.handleRouterKeeperSetting = this.handleRouterKeeperSetting.bind(this);
    this.handleRouterSignIn = this.handleRouterSignIn.bind(this);
  }

  handleRouterProfileEdit = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'ProfileEditComponent'});
  }

  handleRouterReview = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'KeeperInfoComponent'});
  }

  handleRouterWallet = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'WalletComponent'});
  }

  handleRouterKeeperSetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'KeeperSettingComponent', selectChanger: 'keeper'});
  }

  handleRouterSignIn = e => {
    e.preventDefault();
    this.props.handleSignOut({props: this.props, e});
  };

  render() {
    const userInfo = {
      ...this.props.userInfo
    };

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="content-box box-padding">
            <div className="profile">
              <img className="profile-img" src="img/user2.png" alt="user2" />

              <div className="profile-body">
                <h2 className="userid">{userInfo.email}</h2>
                <span className="user-name">{userInfo.user_name}</span>
               
              </div>
            </div>
          </div>
          <div className="line-hr" />
          <div className="content-box">
            <div className="content">
              <ul className="link-list1">
                <li>
                  <a href="/profile_edit" onClick={(e) => this.handleRouterProfileEdit(e)}>
                    <i className="fas fa-user-cog color-blue" />
                    <span>Profile Edit</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="/review" onClick={(e) => this.handleRouterReview(e)}>
                    <i className="fas fa-keyboard" />
                    <span>My Review</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="/wallet" onClick={(e) => this.handleRouterWallet(e)}>
                    <i className="fas fa-wallet color-green" />
                    <span>My Wallet</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="/keeper_setting" onClick={(e) => this.handleRouterKeeperSetting(e)}>
                    <i className="fas fa-exchange-alt color-yellow" />
                    <span>Change Keeper Mode</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a href="/login" onClick={this.handleRouterSignIn}>
                    <i className="fa fa-power-off color-red" />
                    <span>Logout</span>
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
