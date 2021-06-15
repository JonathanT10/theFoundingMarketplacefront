import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../css/googleMaps.css';


const mapStyles = {
    width: '100%',
    height: '100%'
};
export class GoogleMaps extends Component {

    
render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }

}

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuxk0FsOc6GSDNMvvGc-8jjrQtgmzd7DI'
  })(GoogleMaps);