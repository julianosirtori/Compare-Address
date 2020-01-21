import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar Endereço" />
      <button type="button">
        <MdSearch size={19} color="#333333" />
      </button>
    </Container>
  );
}
