import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    const center = {
      lat: -34.397,
      lng: 150.644
    };

    const style = {
      minWwidth: "1000px",
      minHeight: "1000px"
    }

    return (
      <>
      <div className="page-content header-clear-medium">
        <div className="search-view">
          <input type="text" className="search-input" />
          <span className="click-search"><i className="fa fa-search"></i></span>
        </div>
        <div className="map-content">
          <Map
            style={style}
            google={this.props.google}
            initialCenter={center}
            zoom={8}
          >
          </Map>
        </div>
      </div>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBNfdF_uHYQT0Jn8czh4R10flxH8x3G95k",
  v: "3"
})(MapContainer);
