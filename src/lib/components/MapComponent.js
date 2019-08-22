import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";

import {
  Map,
  GoogleApiWrapper,
  onMapClicked,
  onMarkerClick,
  Marker,
  InfoWindow
} from "google-maps-react";

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log("클릭했음", this.shouldComponentUpdate);
  };

  windowHasClosed = () => {
    this.setState({
      showingInfoWindow: false
    });
    console.log("닫았음", this.shouldComponentUpdate);
  };

  // onMapClicked = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

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
    };

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="search-view">
            {/* <input type="text" className="search-input" /> */}
            <Autocomplete
              style={{ width: "90%" }}
              onPlaceSelected={place => {
                console.log(place);
              }}
              types={["(regions)"]}
              // componentRestrictions={{ country: "ru" }}
            />

            {/* <span className="click-search">
              <i className="fa fa-search" />
            </span> */}
          </div>

          <div className="map-content">
            <Map
              style={style}
              google={this.props.google}
              initialCenter={center}
              zoom={8}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={"Current location"}
                position={{ lat: 37.762391, lng: -122.439192 }}
              />
              <Marker onClick={this.onMarkerClick} name={"Current location2"} />

              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.windowHasClosed}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                  <h1>
                    공백공백공백공백공백공백공백공백공백공백공백공백공백공백
                  </h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAhHkFo-bYv_U9iLedicra9em2FpndEJS0",
  v: "3"
})(MapContainer);
