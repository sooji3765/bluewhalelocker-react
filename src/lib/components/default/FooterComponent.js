import React, { Component } from 'react';

class FooterComponent extends Component {

  constructor(props) {
    super(props);
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
        <a href="/" className={this.path["/"]}><i className="fa fa-search"></i><span>Search</span>
        </a>
        <a href="/reservationList" className={this.path["/reservationList"]}><i className="fa fa-list-alt"></i><span>List</span>
        </a>
        <a href="/chat" className={this.path["/chat"]}><i className="fa fa-comments"></i><span>Chat</span>
        </a>
        <a href="/usersetting" className={this.path["/usersetting"]}><i className="fa fa-user"></i><span>Setting</span>
        </a>
        <div className="clear"></div>
	  	</div>
      </>
    );
  }
}

export default FooterComponent;
