import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { geolocated } from "react-geolocated";

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
    selectedPlace: {},
    center: {
      lat: 37.5434348,
      lng: 126.9499267
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log("클릭했음");
  };

  windowHasClosed = () => {
    this.setState({
      showingInfoWindow: false
    });
    console.log("닫았음");
  };

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    const style = {
      height: "65%"
    };

    const styleMap = {
      width: "90%",
      verticalAlign: "bottom"
    };

    return (
      <>
        <div className="page-content header-clear-medium">
          <div className="search-view">
            <Autocomplete
              style={styleMap}
              onPlaceSelected={place => {
                console.log(place);
                if (place.geometry) {
                  console.log(place.geometry.location.lat());
                  console.log(place.geometry.location.lng());
                  this.setState({
                    center: {
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng()
                    }
                  });
                }
              }}
              types={[null]}
            />

            <span className="click-search">
              <i className="fa fa-search" />
            </span>
          </div>

          <div className="map-content">
            <Map
              style={style}
              google={this.props.google}
              initialCenter={this.state.center}
              center={this.state.center}
              zoom={15}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={"Current location2"}
                email={"이메일"}
                phoneNumber={"010-0000-0000"}
                address={"창원시 의창구"}
                photo={"이미지"}
                lockerCount={"10개"}
                position={this.state.center}
              />

              <Marker
                onClick={this.onMarkerClick}
                name={"Current location"}
                position={{ lat: 37.762391, lng: -122.439192 }}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                onClose={this.windowHasClosed}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                  <div>
                    <div>{this.state.selectedPlace.email}</div>
                    <div>{this.state.selectedPlace.phoneNumber}</div>
                    <div>{this.state.selectedPlace.address}</div>
                    <div>{this.state.selectedPlace.photo}</div>
                    <div>{this.state.selectedPlace.lockerCount}</div>
                    <div>
                      공백공백공백공백공백공백공백공백공백공백공백공백공백공백
                    </div>
                  </div>
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
