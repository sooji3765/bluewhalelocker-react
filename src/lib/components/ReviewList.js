import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class ReviewList extends Component {
  render() {
    const { reviewItems } = this.props;

    const reviewItemList = reviewItems.map(({ id, img, name, text, date }) => (
      <ReviewItem
        id={id}
        img={img}
        Name={name}
        text={text}
        date={date}
        key={id}
      />
    ));

    return <div>{reviewItemList}</div>;
  }
}

export default ReviewList;
