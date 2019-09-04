import React, { Component } from 'react';
import LockerBwlKlaytn from './LockerBwlKlaytn';
import SimpleStorageBwlKlaytn from './SimpleStorageBwlKlaytn';
import BwlERC20Klaytn from './BwlERC20Klaytn';

class BwlKlaytnContracts extends Component {

  componentDidMount = async () => {
  };

  render() {
    return (
      <>
        <div className="page-content header-clear-medium color-white">
        <LockerBwlKlaytn/>
        <SimpleStorageBwlKlaytn/>
        <BwlERC20Klaytn/>
        </div>
      </>
    );
  }
}

export default BwlKlaytnContracts;
