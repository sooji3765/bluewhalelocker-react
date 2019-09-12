import React, { Component } from "react";
export default class KeeperItem extends Component {

  constructor(props){
    super(props);
    this.handleRouterKeeperInfo = this.handleRouterKeeperInfo.bind(this);
  }


  handleRouterKeeperInfo = (e) =>{
      e.preventDefault();
      this.props.handleRouterKeeperInfo({props: this.props, e,selectComponent:'KeeperInfoComponent'});
  }

  render() {
    const {
      businessName,
      phoneNumber,
      id,
      open_time,
      close_time
    } = this.props;

    return (
      <div>
        <li className="menu-item" onClick={ (e) => this.handleRouterKeeperInfo(e)}>
          {/* <a href={`/keeper_info/${id}`}> */}
            <div className="menu-keeper-item">
              <div className="menu-keeper-img">
                <img className="keeper-img" src="../img/hollys.jpg" alt="user2" />
              </div>
              <div className="menu-keeper-content">
                <p className="keeper-name">{businessName}</p>
                <p>{open_time} - {close_time} | {phoneNumber}</p>
               
                <p className="keeper-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </p>
              </div>
            </div>
          {/* </a> */}
        </li>
      </div>
    );
  }
}
