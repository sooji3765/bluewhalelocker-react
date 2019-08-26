import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class KeeperItem extends Component {
  render() {
    const {
      businessName,
      phoneNumber,
      currentLocker,
      maxLocker,
      keeperImg,
      id
    } = this.props;

    return (
      <div>
        <li className="menu-item">
          <a href="/keeper_info">
            <div className="menu- keeper-item">
              <div className="menu-keeper-img">
                <img className="keeper-img" src="img/user2.png" alt="user2" />
              </div>
              <div className="menu-keeper-content">
                <span className="keeper-name">{businessName}</span>
                <span className="keeper-phone">
                  {phoneNumber} <i className="fas fa-phone-alt" />
                </span>
              </div>
              <div className="btn-group">
                <Link to="/keeper_info">
                  <button className="keeper-btn-reservation">상세보기</button>
                </Link>
              </div>
              <div className="menu-keeper-count">
                <span className="locker-count">
                  {currentLocker}/{maxLocker}
                </span>
              </div>
            </div>
          </a>
        </li>
      </div>
    );
  }
}
