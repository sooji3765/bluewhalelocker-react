import React, { Component } from 'react';

class MenuSettingComponent extends Component {

  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this)
  }

  state = {
    menu: {
      status: "popup"
    }
  };

  menu_status = {
    popup: "menu menu-box-bottom menu-box-detached round-large style2_menu_setting menu-active ",
    close: "menu menu-box-bottom menu-box-detached round-large style2_menu_setting"
  };  

  handleMenuClose = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      menu: {
        status: "close"
      }
    })
    return false;
  };

  render() {

    const menuSettingsClassName = this.menu_status[this.state.menu.status];
    return (
      <>
      <div id="menu-settings" className={menuSettingsClassName} data-menu-height="310" data-menu-effect="menu-over"
          data-menu-height="310" data-menu-effect="menu-over" 
          >
        <div className="content bottom-0">
          <div className="menu-title">
            <h1>Settings</h1>
            <p className="color-highlight">Flexible and Easy to Use</p><a href="#" className="close-menu" onClick={this.handleMenuClose}><i
                className="fa fa-times"></i></a>
          </div>
          <div className="divider bottom-20"></div>
          <div className="toggle-with-icon">
            <i className="toggle-icon round-tiny fa fa-moon bg-red2-dark color-white"></i>
            <a href="#" className="toggle-switch toggle-ios toggle-off toggle-animated" data-toggle-theme=""
              data-toggle-height="27" data-toggle-width="50" data-toggle-content="toggle-content-1"
              data-toggle-checkbox="toggle-checkbox-1" data-bg-on="bg-green1-dark" data-bg-off="">
              <span className="color-theme regularbold font-13 style2_menu_span" >Dark Mode</span>
              <strong className="style2_menu_strong"></strong>
              <u className="style2_menu_u"></u>
            </a>
          </div>
          <div className="divider top-25 bottom-0"></div>
          <div className="link-list link-list-2 link-list-long-border">
            <a href="#" data-menu="menu-highlights">
              <i className="fa fa-tint bg-green1-dark color-white round-tiny"></i>
              <span>Page Highlight</span>
              <strong>16 Color Highlights Included</strong>
              <em className="bg-highlight">HOT</em>
            </a>
            <a href="#" data-menu="menu-backgrounds" className="no-border">
              <i className="fa fa-brush bg-blue2-dark color-white round-tiny"></i>
              <span>Page Background</span>
              <strong>10 Page Gradients Included</strong>
              <em className="bg-highlight">NEW</em>
            </a>
          </div>
        </div>

      </div>
      </>
    );
  }
}

export default MenuSettingComponent;
