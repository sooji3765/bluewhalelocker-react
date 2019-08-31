import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class ReviewList extends Component {
  render() {
    const { reviewItems } = this.props;

    const reviewItemList = reviewItems.map(
      ({ id, img, user_email, content, reg_date }) => (
        <ReviewItem
          id={id}
          img={img}
          userEmail={user_email}
          content={content}
          date={reg_date}
          key={id}
        />
      )
    );

    return <div>{reviewItemList}</div>;
  }
}

export default ReviewList;
