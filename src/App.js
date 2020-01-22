import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';


import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyCXDjlo8nNGHaU_hpecD4eqqbXuDH83ZGU"
        >
          <Routes />
        </LoadScript>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
