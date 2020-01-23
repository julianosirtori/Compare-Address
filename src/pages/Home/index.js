import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';

import FindHouse from '../../assets/images/find_house.svg';
import SearchInput from '../../components/SearchInput';
import MapContainer from '../../components/MapContainer';
import Pin from '../../components/Pin';

import Pin1 from '../../assets/images/pin_1.svg';
import Pin2 from '../../assets/images/pin_2.svg';
import Pin3 from '../../assets/images/pin_3.svg';
import Pin4 from '../../assets/images/pin_4.svg';

import {
  Container, Sidebar, HeaderTitle, Content, Filters,
} from './styles';

export default function Home() {
  const [places, setPlaces] = useState([]);

  function searchInput(place) {
    setPlaces([...places, {
      id: place.id,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      formatted_address: place.formatted_address,
    }]);
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
    return '';
  }


  return (
    <Container>
      <Sidebar>
        <HeaderTitle>
          <img src={FindHouse} alt="Comparar Endereços" />
          <strong>Comparar Endereços</strong>
        </HeaderTitle>
        <SearchInput onClickPlace={searchInput} />
        <ul>
          {places.map((item, index) => (
            <li key={item.id}>
              <img src={getIconByIndex(index)} alt="PinOne" />
              <span>{item.formatted_address}</span>
            </li>
          ))}


        </ul>
        <Filters>
          <strong>Exibir Serviços Proximos</strong>
          <ul>
            <li>
              <input type="checkbox" name="academia" id="academia" />
              <label htmlFor="academia">Academia</label>
              <Pin color="#fbff00" />
            </li>
            <li>
              <input type="checkbox" name="padaria" id="padaria" />
              <label htmlFor="padaria">Padarias</label>
              <Pin color="#ff6f00" />
            </li>
            <li>
              <input type="checkbox" name="supermercados" id="supermercados" />
              <label htmlFor="supermercados">Super Mercados</label>
              <Pin color="#ff6f00" />
            </li>
            <li>
              <input type="checkbox" name="hospital" id="hospital" />
              <label htmlFor="hospital">Hospitais</label>
              <Pin color="#ff0000" />
            </li>
            <li>
              <input type="checkbox" name="farmacias" id="farmacias" />
              <label htmlFor="farmacias">Farmacias</label>
              <Pin color="#0026ff" />
            </li>
            <li>
              <input type="checkbox" name="parques" id="parques" />
              <label htmlFor="parques">PArques</label>
              <Pin color="#00ff08" />
            </li>

          </ul>
        </Filters>

      </Sidebar>
      <Content>
        <MapContainer>
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
  );
}
