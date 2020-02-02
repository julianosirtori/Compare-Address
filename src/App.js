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
          libraries={['places']}
          googleMapsApiKey="<INSERT HERE YOUR API KEY>"
        >
          <Routes />
        </LoadScript>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
