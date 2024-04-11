import React from 'react';
import './Header.css';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

// Puedes eliminar useStyles si ya no se usa en otro lugar
const useStyles = makeStyles((theme: Theme) => ({
  // Si downLoadBtn era el único estilo, ahora puedes dejar esto vacío o eliminar useStyles completamente
}));

const Header2 = ({ image }: { image: string }) => {
  // Si ya no utilizas useStyles en otro lugar, puedes eliminar la siguiente línea
  const classes = useStyles();

  return (
    <div className="header-container" style={{ position: 'relative' }}>
      <img className='header-image' src={image} alt="Header" />
      {/* El botón ha sido eliminado */}
    </div>
  );
};

export default Header2;

