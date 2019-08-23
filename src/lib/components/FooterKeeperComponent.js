import React, { Component } from 'react';

class FooterKeeperComponent extends Component {

  constructor(props) {
    super(props);
  }

  path = {
    "/add_locker": "",
    "/likeList": "",
    "/reservationList": "",
    "/chat": "",
    "/usersetting": "",
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
        <a href="/add_locker" className={this.path["/add_locker"]}><i className="fas fa-plus"></i><span>ADD</span>
        </a>
        <a href="/likeList" className={this.path["/likeList"]}><i className="fa fa-heart"></i><span>My Locker</span>
        </a>
        <a href="/chat" className={this.path["/reservationList"]}><i className="fa fa-comments"></i><span>Chat</span>
        </a>
        <a href="/keeper_setting" className={this.path["/keeper/setting"]}><i className="fa fa-user"></i><span>Setting</span>
        </a>
        <div className="clear"></div>
	  	</div>
      </>
    );
  }
}

export default FooterKeeperComponent;
