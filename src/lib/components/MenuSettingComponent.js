import React, { Component } from "react";

class MenuSettingComponent extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  state = {
    menu: {
      status: "popup"
    }
  };

  menu_status = {
    popup:
      "menu menu-box-bottom menu-box-detached round-large style2_menu_setting menu-active ",
    close:
      "menu menu-box-bottom menu-box-detached round-large style2_menu_setting"
  };

  handleMenuClose = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      menu: {
        status: "close"
      }
    });
    return false;
  };

  render() {
    const menuSettingsClassName = this.menu_status[this.state.menu.status];
    return (
      <>
        <div
          id="menu-settings"
          className={menuSettingsClassName}
          data-menu-height="310"
          data-menu-effect="menu-over"
          data-menu-height="310"
          data-menu-effect="menu-over"
        >
          <div className="content bottom-0">
            <div className="menu-title">
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <div>
                <h1>Settings</h1>
              </div>
              <a href="#" className="close-menu" onClick={this.handleMenuClose}>
                <i className="fa fa-times" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MenuSettingComponent;
