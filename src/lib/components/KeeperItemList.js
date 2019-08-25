import React, { Component } from "react";
import KeeperItem from "./KeeperItem";

class KeeperItemList extends Component {
  render() {
    const { items } = this.props;

    const itemList = items.map(
      ({ id, businessName, phoneNumber, currentLocker, maxLocker }) => (
        <KeeperItem
          id={id}
          businessName={businessName}
          phoneNumber={phoneNumber}
          currentLocker={currentLocker}
          maxLocker={maxLocker}
          key={id}
        />
      )
    );

    return <div>{itemList}</div>;
  }
}

export default KeeperItemList;
