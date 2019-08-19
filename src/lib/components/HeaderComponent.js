import React, { Component } from 'react';

class MenuSettingComponent extends Component {

  render() {
    return (
      <>
			<div className="header header-fix header-logo-left">
				<span className="message-notification">
					<i className="far fa-bell"></i>
					<span className="count">2</span>
				</span>
				<span className="title">Locker</span>
				<span className="create-new">
					<i className="fa fa-pen-square"></i>
				</span>
			</div>
			</>
    );
  }
}

export default MenuSettingComponent;
