import React, { Component } from 'react';

class FooterKeeperComponent extends Component {

  constructor(props) {
    super(props);
    this.handleRouterAddRocker = this.handleRouterAddRocker.bind(this);
    this.handleRouterLikeList = this.handleRouterLikeList.bind(this);
    this.handleRouterChat = this.handleRouterChat.bind(this);
    this.handleRouterKeeperSetting = this.handleRouterKeeperSetting.bind(this);
  }

  path = {
    "/add_locker": "",
    "/likeList": "",
    "/reservationList": "",
    "/chat": "",
    "/usersetting": "",
  }

  handleRouterAddRocker = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'AddLockerComponent'});
  }

  handleRouterLikeList = (e) => {
    e.preventDefault();
  }

  handleRouterKeeperSetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'UsersettingComponent'});
  }

  handleRouterAddRocker = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'AddLockerComponent'});
  }

  handleRouterLikeList = (e) => {
    e.preventDefault();
  }

  handleRouterChat = (e) => {
    e.preventDefault();
    //this.props.handleUpdateState({props: this.props, e, selectComponent: 'ChatComponent'});

    var jwtToken = this.props.userInfo.token;
    var user_type = this.props.routerInfo.selectChanger;
    var form = document.getElementById('frmChat');

    //form.action = url;
    form.user_type.value = user_type;
    form.token.value = jwtToken;
    form.submit();
  }

  handleRouterKeeperSetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'KeeperSettingComponent'});
  }

  componentDidMount() {
    this.setState({
      ...this.props
    })
  }

  render() {

    if (!this.state) {
      return (
        <>
        </>
        )
    }

    this.path[this.state.path] = "active-nav";
    return (
      <>
      <div id="footer-keeper-menu">
        <form name="frmChat" id="frmChat" action="http://localhost:3001/" onSubmit={this.handleSubmit} method="get">
          <input type="hidden" name="token" id="token" value="" />
          <input type="hidden" name="user_type" id="user_type" value="" />
        </form>
        <a href="/likeList" className={this.path["/likeList"]} onClick={(e) => this.handleRouterLikeList(e)}>
        <i class="fas fa-luggage-cart"></i>
        {/* <i class="fas fa-suitcase-rolling"></i> */}
        <span>My Locker</span>
        </a>
        <a href="/add_locker" className={this.path["/add_locker"]} onClick={(e) => this.handleRouterAddRocker(e)}><i className="fas fa-plus"></i><span>ADD</span>
        </a>
        <a href="/chat" className={this.path["/chat"]} onClick={(e) => this.handleRouterChat(e)}><i className="fa fa-comments"></i><span>Chat</span>
        {/* <a href="/chat" className={this.path["/reservationList"]} onClick={(e) => this.handleRouterChat(e)}><i className="fa fa-comments"></i><span>Chat</span> */}
        </a>
        <a href="/keeper_setting" className={this.path["/keeper/setting"]} onClick={(e) => this.handleRouterKeeperSetting(e)}><i className="fa fa-user"></i><span>My Profile</span>
        </a>
        <div className="clear"></div>
	  	</div>
      </>
    );
  }
}

export default FooterKeeperComponent;
