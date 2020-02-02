import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap } from '@react-google-maps/api';

import getCurrentPosition from '../../utils/getCurrentPosition';

import HomeContext from '../../pages/Home/context';
import { Container } from './styles';

export default function MapContainer({ children, onClick }) {
  const { latLng, setLatLng } = useContext(HomeContext);
  const [center, setCenter] = useState(latLng);
  const [mapRef, setMapRef] = useState(null);

  useEffect(() => {
    getCurrentPosition((latitude, longitude) => {
      setCenter({
        lat: latitude,
        lng: longitude,
      });
    });
  }, []);

  function onCenterChanged() {
    if (mapRef !== null) {
      setLatLng(mapRef.getCenter());
    }
  }

  return (
    <Container>
      <GoogleMap
        id="circle-example"
        onClick={(mouseEvent) => onClick(mouseEvent, mapRef)}
        mapContainerStyle={{
          height: '100%',
          width: '100%',
        }}
        zoom={13}
        onLoad={setMapRef}
        center={center}
        onCenterChanged={onCenterChanged}
      >
        {children}
      </GoogleMap>
    </Container>
  );
}
