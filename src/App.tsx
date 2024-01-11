import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './components/defaultTheme';
import RouterComponent from './router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';



ReactGA.initialize('G-KPZRBCR3GD');


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterComponent />
    </ThemeProvider>
  );

  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname }); // Actualiza la página
    ReactGA.pageview(location.pathname); // Registra una vista de página
  }, [location]);

}

export default App;

