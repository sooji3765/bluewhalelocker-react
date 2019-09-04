import React, { Component } from 'react';

class HeaderComponent extends Component {



	userInfo = {
		...this.props.userInfo
	};
	
  render() {
    return (
      <>
			<div className="header header-fix header-logo-left">
				<span className="message-notification">
					<i className="far fa-bell"></i>
					<span className="count">{this.props.count}</span>
				</span>
				<span className="title">{this.props.title}</span>
				<span className="create-new">
					<i className="fa fa-pen-square"></i>
				</span>
			</div>
			</>
    );
  }
}

export default HeaderComponent;
