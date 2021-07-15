import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../css/googleMaps.css';




export class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        lat: '',
        lng: ''
    };
}


  componentDidMount(){
    const lat = localStorage.getItem('lat')
    const lng = localStorage.getItem('lng')
    this.setState({
      lat: lat,
      lng: lng
    })
  }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    back = () => {
        localStorage.removeItem('lat')
        localStorage.removeItem('lng')
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
                zoom={5}
                style={mapStyles}
                initialCenter={{lat: this.state.lat, lng: this.state.lng}}
                >
                   <Marker 
                    label='American Made'
                    postion={{ lat: this.state.lat, lng: this.state.lng }} 
                    />
                </Map>
        </div>
      );
    }
  }



  export default GoogleApiWrapper({
    apiKey: ''
  })(Maps);