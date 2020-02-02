import React, { useState, useEffect, useContext } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';
import HomeContext from '../../pages/Home/context';

export default function SearchInput({ onClickPlace }) {
  const { latLng } = useContext(HomeContext);
  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState('');
  const [bounds, setBound] = useState();

  useEffect(() => {
    const circle = new window.google.maps.Circle({ radius: 5000, center: latLng });
    setBound(circle.getBounds());
  }, [latLng]);

  function onPlaceChanged() {
    if (autocomplete !== null) {
      onClickPlace(autocomplete.getPlace());
      setAddress('');
    } else {
      console.warn('Autocomplete is not loaded yet!');
    }
  }

  return (
    <Container>
      <Autocomplete
        onLoad={setAutocomplete}
        onPlaceChanged={onPlaceChanged}
        bounds={bounds}
      >
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Adicionar Endereços"
        />
      </Autocomplete>
      <MdSearch size={19} color="#333333" />


    </Container>
  );
}

SearchInput.propTypes = {
  onClickPlace: PropTypes.func.isRequired,
};
