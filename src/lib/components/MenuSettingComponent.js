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
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>

                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <div className="menu-keeper-item">
                    <div className="menu-keeper-img">
                      <img className="keeper-img" src="img/user2.png" alt="user2"/>
                    </div>
                    <div className="menu-keeper-content">
                      <span className="keeper-name">상호명</span>
                      <span className="keeper-phone">010-0000-0000 <i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="menu-keeper-count">
                      <span className="locker-count">3/10</span>  
                    </div>
                  </div>
                </li>
                
              </ul>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default MenuSettingComponent;
