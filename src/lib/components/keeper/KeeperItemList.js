import React, { Component } from "react";
import KeeperItem from "./KeeperItem";

class KeeperItemList extends Component {
  render() {
    const { items } = this.props;

    const itemList = items.map(
      ({ id, name, phone, currentLocker, maxLocker,open_time,close_time }) => (
        <KeeperItem
          id={id}
          businessName={name}
          phoneNumber={phone}
          open_time={open_time}
          close_time={close_time}
          currentLocker={"사용가능라커수"}
          maxLocker={"전체라커수"}
          key={id}
        />
      )
    );

    return <div>{itemList}</div>;
  }
}

export default KeeperItemList;
