import React, { Component } from "react";
import KeeperItemList from "./KeeperItemList";
import axios from "axios";

class MenuSettingComponent extends Component {

  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  id = 3;

  state = {
    menu: {
      status: "popup"
    },
    items: [],
    data: []
  };

  menu_status = {
    popup:
      "menu menu-box-bottom menu-box-detached round-large style2_menu_setting menu-active ",
    close:
      "menu menu-box-bottom menu-box-detached round-large style2_menu_setting"
  };

  componentDidMount() {
    axios.get("http://localhost:8080/keepers").then(res => {
      console.log(res);
      this.setState({ items: res.data });
    });
  }

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
    const { items } = this.state;

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
                <KeeperItemList items={items}></KeeperItemList>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MenuSettingComponent;
