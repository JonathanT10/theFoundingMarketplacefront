import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../css/googleMaps.css';
import Row from 'react-bootstrap/Row';
import PatronMain from './patronMain'



export class Maps extends React.Component {

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    back = () => {
        window.location = '/patronmain';
    };

    render() {
      const mapStyles = {
        width: "60%",
        height: "60%",
      };
      return (
          <div>
                
                    <p className="lOut" onClick={() => this.logOut()}>Logout</p>
                    <p className="lOut" onClick={() => this.back()}>Back</p>
         
                <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{lat: 32.74166491698227, lng: -96.2855366309602}}
                >
                    <Marker postion={{ lat: 32.74166491698227, lng: -96.2855366309602 }} />
                </Map>
        </div>
      );
    }
  }



  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3zjpaRKDi2kra4MN-pmjOtuD5Lloykts'
  })(Maps);