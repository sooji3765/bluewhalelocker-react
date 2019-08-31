import React, { Component } from "react";
import Moment from 'react-moment';
export default class ReviewItem extends Component {
  render() {
    const { img, userEmail, content, date, id } = this.props;

    return (
      <>
        <li className="review-item">
          <div className="review-writer">
            <img
              className="review-writer-img"
              src="../img/user2.png"
              alt="review-user1"
            />
            <div className="review-writer-info">
              <p className="review-writer-name">{userEmail}</p>
              <p className="review-write-date"><Moment format="YYYY/MM/DD">{date}</Moment></p>
            </div>
            <div className="review-writer-score">
              <div className="review-writer-star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
          </div>
          <div className="review-in">{content}</div>
        </li>
      </>
    );
  }
}
