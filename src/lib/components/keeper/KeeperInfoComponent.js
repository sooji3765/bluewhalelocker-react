import React, { Component } from "react";

import ReviewList from "../review/ReviewList";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";

class KeeperInfoComponent extends Component {
  state = {
    keeperinfoItem: [],
    reviewItems: []
  };

  componentDidMount() {

    axios.get("http://localhost:8080/keepers/2").then(res =>{
      console.log(res);
      this.setState({keeperinfoItem : res.data});
    })
    axios.get("http://localhost:8080/review/list").then(res => {
      console.log(res);
      this.setState({ reviewItems: res.data.results });
    });
  }

  handleReservation= (e)=>{
    e.preventDefault();
    this.props.handleUpdateState({props: this.props, e, selectComponent: 'LockerReservationComponent'});
  }

  render() {
    const { reviewItems, id } = this.state;

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="keeper-info-page">
            <div className="keeper-photo-content">
              <img
                className="keeper-photo"
                src="../img/hollys.jpg"
                alt="store_img"
              />
            </div>

            <div className="keeper-info-content">
              <div className="keeper-info-profile">
                <div className="keeper-name-content">
                  <div className="keeper-names">
                    {this.state.keeperinfoItem.name}
                  </div>
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

             

              <div className="keeper-info-detail">
              <div className="keeper-info-div">
                  <div className="info-detail-txt">공덕역 카페 프릳츠의 맛있는 베이커리 디저트 커피</div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-detail">010-9090-1234</div>
                </div>
                <div className="keeper-info-div">
                  <div className="info-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="info-detail">서울시 어쩌구 ~~~~</div>
                </div>
               
              </div>
              <div className="btn-group"> 
                  <button onClick={(e)=>this.handleReservation(e)} className="keeper-btn-reservation">RESERVATION</button>
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
