import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../review/ReviewList";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class KeeperInfoComponent extends Component {
  state = {
    id: 3,

    reviewItems: [
      {
        id: 0,
        name: "황모씨",
        text: "개별루임",
        date: "2019-08-36",
        img: ""
      },
      {
        id: 1,
        name: "이모씨",
        text: "개좋음",
        date: "2019-08-37",
        img: ""
      },
      {
        id: 2,
        name: "박모씨",
        text: "적당함",
        date: "2019-08-35",
        img: ""
      }
    ]
  };

  render() {
    const { reviewItems, id } = this.state;

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="keeper-info-page">
            <div className="keeper-photo-content">
              <img
                className="keeper-photo"
                src="../img/store1.jpg"
                alt="store_img"
              />
            </div>

            <div className="keeper-info-content">
              <div className="keeper-info-profile">
                <div className="keeper-name-content">
                  <div className="keeper-names">HAYONG Cafe</div>
                  <div className="keeper-info-score-div">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span className="keeper-info-use">230</span>
                  </div>
                </div>
                <img
                  className="keeper-profile-img"
                  src="../img/user1.png"
                  alt="keeper-profile"
                />
              </div>

              <div className="use-locker-now">사용 가능한 락커 수 : 4</div>

              <div className="btn-group">
                <Link to="/reservation">
                  <button className="keeper-btn-reservation">예약하기</button>
                </Link>
              </div>

              <div className="keeper-info-detail">
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-detail">010-0000-0000</div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="info-detail">서울시 어쩌구 ~~~~</div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-detail">010-0000-0000</div>
                </div>
              </div>

              <div className="keeper-location">
                <Map
                  style={{ height: "100%" }}
                  google={this.props.google}
                  initialCenter={{ lat: 37.5434348, lng: 126.9499267 }}
                  zoom={15}
                >
                  <Marker
                    name={"Current location"}
                    position={{ lat: 37.5434348, lng: 126.9499267 }}
                  />
                </Map>
              </div>

              <div className="keeper-review">
                <div className="review-title">REVIEW {id}</div>
                <ul className="review-cotent">
                  <ReviewList reviewItems={reviewItems}></ReviewList>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAhHkFo-bYv_U9iLedicra9em2FpndEJS0",
  v: "3"
})(KeeperInfoComponent);
