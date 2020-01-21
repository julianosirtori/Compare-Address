import React, { Component } from 'react';
import {
  Map, InfoWindow, Marker, GoogleApiWrapper,
} from 'google-maps-react';

import { Container } from './styles';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCXDjlo8nNGHaU_hpecD4eqqbXuDH83ZGU'),
})(MapContainer);
