import React, { Component } from 'react';

class HeaderComponent extends Component {

	constructor(props) {
		super(props);
		this.handleRouterHome = this.handleRouterHome.bind(this);
		this.handleRouterSignOut = this.handleRouterSignOut.bind(this);
	}

  handleRouterSignOut = e => {
  e.preventDefault();
  this.props.handleSignOut({props: this.props, e});
  };

  handleRouterHome = (e) => {
  e.preventDefault();
  this.props.handleUpdateState({props: this.props, e, selectComponent: 'HomeComponent'});
  }
  
  componentDidMount() {
    this.setState({
      ...this.props
    })
  }

	render() {
		const { header } = this.props;
		
    return (
      <>
      <div className="header header-fix header-logo-left">
        <span className="message-notification">
          <i className="far fa-bell"></i>
          <span className="count">{header.count}</span>
        </span>
        <span className="title" onClick={(e) => this.handleRouterHome(e)}>{header.title}</span>
        <span className="create-new">
          <a href="#" onClick={this.handleRouterSignOut}>
          <i className="fas fa-sign-out-alt color-icon-white" ></i></a>
        </span>
      </div>
      </>
    );
  }
}

export default HeaderComponent;
