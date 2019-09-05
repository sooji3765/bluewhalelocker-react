import React, { Component } from 'react';

class FooterComponent extends Component {

  constructor(props) {
    super(props);
    this.handleRouterHome = this.handleRouterHome.bind(this);
    this.handleRouterReservation = this.handleRouterReservation.bind(this);
    this.handleRouterChat = this.handleRouterChat.bind(this);
    this.handleRouterUsersetting = this.handleRouterUsersetting.bind(this);
  }

  path = {
    "/": "",
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

  handleRouterHome = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'HomeComponent'});
  }

  handleRouterReservation = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'ReservationComponent'});
  }

  handleRouterChat = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'ChatComponent'});
  }

  handleRouterUsersetting = (e) => {
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'UsersettingComponent'});
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
      <div id="footer-menu">
        <a href="/" className={this.path["/"]} onClick={(e) => this.handleRouterHome(e)}><i className="fa fa-search"></i><span>Search</span>
        </a>
        <a href="/reservationList" className={this.path["/reservationList"]} onClick={(e) => this.handleRouterReservation(e)}><i className="fa fa-list-alt"></i><span>List</span>
        </a>
        <a href="/chat" className={this.path["/chat"]} onClick={(e) => this.handleRouterChat(e)}><i className="fa fa-comments"></i><span>Chat</span>
        </a>
        <a href="/usersetting" className={this.path["/usersetting"]} onClick={(e) => this.handleRouterUsersetting(e)}><i className="fa fa-user"></i><span>Setting</span>
        </a>
        <div className="clear"></div>
	  	</div>
      </>
    );
  }
}

export default FooterComponent;
