import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './components/defaultTheme';
import RouterComponent from './router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterComponent />
    </ThemeProvider>
  );
}

export default App;
