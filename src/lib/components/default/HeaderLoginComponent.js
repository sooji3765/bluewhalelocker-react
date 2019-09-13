import React, { Component } from 'react';

class HeaderLoginComponent extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		const { header } = this.props;
		
    return (
      <>
			<div className="header header-fix header-logo-left">
{/* 				<span className="message-notification">
					<i className="far fa-bell"></i>
					<span className="count">{header.count}</span>
				</span> */}
				<span className="title">{header.title}</span>
{/* 				<span className="create-new">
					<i className="fa fa-pen-square"></i>
				</span> */}
			</div>
			</>
    );
  }
}

export default HeaderLoginComponent;
