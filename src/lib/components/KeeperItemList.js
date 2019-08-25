import React, { Component } from "react";
import KeeperItem from "./KeeperItem";

class KeeperItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        <KeeperItem
          businessName="상호명"
          phoneNumber="010-xxxx-xxxx"
          currentLocker="3"
          maxLocker="10"
        ></KeeperItem>

        <KeeperItem
          businessName="상호명"
          phoneNumber="010-xxxx-xxxx"
          currentLocker="3"
          maxLocker="10"
        ></KeeperItem>

        <KeeperItem
          businessName="상호명"
          phoneNumber="010-xxxx-xxxx"
          currentLocker="3"
          maxLocker="10"
        ></KeeperItem>
      </div>
    );
  }
}

export default KeeperItemList;
