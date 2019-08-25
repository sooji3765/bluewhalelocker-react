import React, { Component } from "react";
import { Link } from "react-router-dom";
import KeeperInfoPage from "../pages/KeeperInfoPage";
import KeeperItem from "./KeeperItem";
import KeeperItemList from "./KeeperItemList";

class MenuSettingComponent extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  state = {
    menu: {
      status: "popup"
    },
    items: {
      id: 1,
      text: "text",
      checked: true
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

  handleItemClick() {
    console.log("clicked");
  }

  render() {
    const menuSettingsClassName = this.menu_status[this.state.menu.status];
    return (
      <>
        <div
          id="menu-settings"
          className={menuSettingsClassName}
          data-menu-height="310"
          data-menu-effect="menu-over"
        >
          <div className="menu-content">
            <div className="menu-title">
              <span className="menu-title-p">Keeper List</span>
              <a href="#" className="close-menu" onClick={this.handleMenuClose}>
                <i className="fa fa-times" />
              </a>
            </div>
            <div className="menu-list">
              <ul>
                {/* <KeeperItem
                  businessName="상호명"
                  phoneNumber="010-xxxx-xxxx"
                  currentLocker="3"
                  maxLocker="10"
                ></KeeperItem> */}
                <KeeperItemList items={this.props.items}></KeeperItemList>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MenuSettingComponent;
