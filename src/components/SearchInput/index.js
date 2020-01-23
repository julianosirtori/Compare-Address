import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ onClickPlace }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState('');


  function onPlaceChanged() {
    if (autocomplete !== null) {
      onClickPlace(autocomplete.getPlace());
      setAddress('');
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  }

  return (
    <Container>
      <Autocomplete
        onLoad={setAutocomplete}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Pesquisar Endereço"
        />
      </Autocomplete>
      <MdSearch size={19} color="#333333" />


    </Container>
  );
}
