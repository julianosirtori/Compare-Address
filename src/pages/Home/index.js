import React, { useState, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';

import { formatNumberInStringKm, getDistanceFromLatLonInKm } from '../../utils/getDistanceFromLatLonInKm';

import FindHouse from '../../assets/images/find_house.svg';
import SearchInput from '../../components/SearchInput';
import MapContainer from '../../components/MapContainer';

import Pin1 from '../../assets/images/pin_1.svg';
import Pin2 from '../../assets/images/pin_2.svg';
import Pin3 from '../../assets/images/pin_3.svg';
import Pin4 from '../../assets/images/pin_4.svg';
import Pin from '../../assets/images/pin.svg';


import {
  Container, Sidebar, HeaderTitle, Content,
} from './styles';
import HomeContext from './context';

export default function Home() {
  const [placeToCampare, setPlaceToCompare] = useState({ name: '', latLng: null });
  const [places, setPlaces] = useState([]);
  const [latLng, setLatLng] = useState(new window.google.maps.LatLng(-25.4110039, -49.0449647));

  function searchInput(place) {
    const addressSplit = place.formatted_address.split(',');
    if (placeToCampare.latLng !== null) {
      console.log(placeToCampare.latLng.lat(), placeToCampare.latLng.lng());
      setPlaces([...places, {
        id: place.id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        formatted_address: `${addressSplit[0]} ${addressSplit[1]}`,
        distance: formatNumberInStringKm(getDistanceFromLatLonInKm(
          place.geometry.location.lat(), place.geometry.location.lng(),
          placeToCampare.latLng.lat(), placeToCampare.latLng.lng(),
        )),
      }]);
    } else {
      setPlaces([...places, {
        id: place.id,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        formatted_address: `${addressSplit[0]} ${addressSplit[1]}`,
        distance: '',
      }]);
    }
  }


  function compareAddresses(event, mapRef) {
    const { placeId, placeLatLng = latLng } = event;
    const service = new window.google.maps.places.PlacesService(mapRef);
    service.getDetails({ placeId, fields: ['name'] }, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaceToCompare({ name: results.name, latLng: placeLatLng });
      }
    });
    setPlaces(places.map((place) => ({
      ...place,
      distance: formatNumberInStringKm(getDistanceFromLatLonInKm(
        place.lat, place.lng,
        placeLatLng.lat(), placeLatLng.lng(),
      )),
    })));
  }

  function getIconByIndex(index) {
    if (index === 0) {
      return Pin1;
    } if (index === 1) {
      return Pin2;
    } if (index === 2) {
      return Pin3;
    } if (index === 3) {
      return Pin4;
    }
    return Pin;
  }


  return (
    <HomeContext.Provider value={{ latLng, setLatLng }}>
      <Container>
        <Sidebar>
          <HeaderTitle>
            <img src={FindHouse} alt="Comparar Endereços" />
            <strong>Comparar Endereços</strong>
          </HeaderTitle>
          <SearchInput onClickPlace={searchInput} />
          <p>Clique em um Pin no mapa para comparar com os enderecos abaixo:</p>
          <h3>{placeToCampare.name}</h3>
          <ul>
            {places.map((item, index) => (
              <li key={item.id}>
                <img src={getIconByIndex(index)} alt="Pin" />
                <span>{item.formatted_address}</span>
                <strong>{item.distance}</strong>
              </li>
            ))}
          </ul>
          {/* Rua Capitão Frederico Virmond - Santa Cruz Guarapuava - PR */}
        </Sidebar>
        <Content>
          <MapContainer onClick={compareAddresses}>
            {places.map((item, index) => (
              <Marker
                key={item.id}
                icon={{
                  url: getIconByIndex(index),
                  scaledSize: new window.google.maps.Size(26, 40),
                }}
                title={item.formatted_address}
                position={item}
              />
            ))}
          </MapContainer>
        </Content>
      </Container>
    </HomeContext.Provider>
  );
}
