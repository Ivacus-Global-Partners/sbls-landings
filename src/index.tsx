import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TagManager from 'react-gtm-module';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const tagManagerArgs = {
  gtmId: 'GTM-M56RR2R'
};

// Evento de vista de página
TagManager.dataLayer({
  dataLayer: {
      event: 'page_view',
      page: '/landings/hr-comunicacion-interna-sagardoy'
  }
});

// Evento de clic en un botón
TagManager.dataLayer({
  dataLayer: {
      event: 'button_click',
      button: 'nombre_del_boton'
  }
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
