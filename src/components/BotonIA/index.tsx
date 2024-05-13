import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    padding: '40px 3vw',  // Mantiene el relleno en todos los lados
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',  // Ajusta para dispositivos más pequeños
    }
  },
  downLoadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Centra el texto dentro del botón
    border: 'none',
    textAlign: 'center',
    height: '40px',
    width: '268px',
    borderRadius: '20px',
    background: '#980628',
    padding: '8px 60px',
    fontSize: 'medium',
    color: 'white',
    margin: '0 auto',  // Centrado automático en el eje horizontal
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      width: '90%',  // Ajusta el ancho en dispositivos medianos
    }
  }
}));

const BotonIA = () => {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.getElementById('download-pdf');
    if (link) {
      link.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center">
        <Grid item>
          <button className={classes.downLoadBtn} onClick={handleDownload}>
            Inscríbete 
          </button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default BotonIA;
