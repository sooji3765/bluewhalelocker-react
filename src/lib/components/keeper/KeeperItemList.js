import React, { Component } from "react";
import KeeperItem from "./KeeperItem";

class KeeperItemList extends Component {
  render() {
    const { items } = this.props;

    const itemList = items.map(
      ({ id, business_name, phone, currentLocker, maxLocker }) => (
        <KeeperItem
          id={id}
          businessName={business_name}
          phoneNumber={phone}
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
