import React, { Component } from 'react';

class HeaderKeeperComponent extends Component {

  render() {
    const style ={
        backgroundColor : "#189ad3"
    } 
    return (
      <>
			<div className="header header-fix header-logo-left" style = {style}>
				<span className="message-notification">
					<i className="far fa-bell"></i>
					<span className="count">2</span>
				</span>
				<span className="title">Keeper1</span>
				<span className="create-new">
					<i className="fa fa-pen-square"></i>
				</span>
			</div>
			</>
    );
  }
}

export default HeaderKeeperComponent;
