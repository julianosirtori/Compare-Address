import React, { useState, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';


import { Container } from './styles';

export default function MapContainer({ children }) {
  const [lat, setLat] = useState(-25.4110039);
  const [lng, setLng] = useState(-49.0449647);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLng(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);


  return (
    <Container>
      <GoogleMap
        id="circle-example"
        mapContainerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={13}
        center={{
          lat,
          lng,
        }}
      >
        {children}
      </GoogleMap>
    </Container>
  );
}
