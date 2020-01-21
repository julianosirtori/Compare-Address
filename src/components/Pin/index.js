import React from 'react';

// import PinIcon from '../../assets/images/pin_icon.svg';

import { Container, Content, PinIcon } from './styles';

export default function Pin({ children, color, size }) {
  return (
    <Container>
      <PinIcon color={color} size={size} />
      {/* <img src={PinIcon} alt="Pin" /> */}
      <Content>
        {children}
      </Content>

    </Container>
  );
}
