import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { init } from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-M56RR2R', // Reemplaza con tu identificador de contenedor
};

init(tagManagerArgs);

const gaMeasurementId = 'G-KPZRBCR3GD'; // Reemplaza con tu Measurement ID

// Enviar evento Page View a GTM con el Measurement ID de Google Analytics
window.dataLayer.push({
  event: 'PageView',
  page: 'https://sagardoyschool.com/landings/hr-comunicacion-interna-sagardoy',
  gaMeasurementId: gaMeasurementId,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
