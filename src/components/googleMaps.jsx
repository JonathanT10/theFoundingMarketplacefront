import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../css/googleMaps.css';
import Row from 'react-bootstrap/Row';



export class Maps extends React.Component {

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    back = () => {
        localStorage.removeItem('token');
        window.location = '/patronmain';
    };

    render() {
      const mapStyles = {
        width: "50%",
        height: "50%",
      };
      return (
          <div>
                
                    <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                    <p className="logOut" onClick={() => this.back()}>Back</p>
         
                <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 32.74166491698227, lng: -96.2855366309602 }}
                />
        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD3zjpaRKDi2kra4MN-pmjOtuD5Lloykts'
  })(Maps);