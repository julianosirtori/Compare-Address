import React from 'react';

import FindHouse from '../../assets/images/find_house.svg';
import SearchInput from '../../components/SearchInput';
import MapContainer from '../../components/MapContainer';
import Pin from '../../components/Pin';

import {
  Container, Sidebar, HeaderTitle, Content, Filters,
} from './styles';

export default function Home() {
  function searchInput(place) {
    console.log(place);
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
          <li>
            <Pin color="#9a67ea"><strong>1</strong></Pin>
            <span>Rua Osvaldo Cruz, 263, Zona 07</span>
          </li>
          <li>
            <Pin color="#9a67ea"><strong>2</strong></Pin>
            <span>Rua 10 de Maio. 379</span>
          </li>
          <li>
            <Pin color="#9a67ea"><strong>3</strong></Pin>
            <span>Av das Palmeiras</span>
          </li>
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
        <MapContainer />
      </Content>
    </Container>
  );
}
