import { makeStyles } from '@mui/styles';
import { Grid, Box, Theme } from '@mui/material';
import './style.css';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: 'white',
    padding: '40px 3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
    }
  },
  logosContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Cambiado de 'center' a 'flex-start' para alinear a la izquierda
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    maxWidth: '35%', // Incremento del tamaño máximo para que el logo sea más grande
    height: 'auto',
    marginLeft: '0', // Margen izquierdo ajustado a 0 para desplazar hacia la izquierda
    marginRight: '20px', // Espaciado consistente a la derecha
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%', // Hacer el logo más grande en dispositivos móviles
      margin: '10px 10px', // Ajuste de márgenes en dispositivos móviles
    },
    '@media (min-width: 960px)': { // Estilos específicos para dispositivos de escritorio
      maxWidth: '30%', // Ajustar tamaño máximo para escritorio
      marginLeft: '3%', // Margen izquierdo aumentado para escritorio
      marginRight: '20px', // Mantener el margen derecho
    },
  },
}));

const FooterIA = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box className={classes.logosContainer}>
            <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FEventoIA%2FLogofooter.png?alt=media&token=4415fa12-e5d0-410a-8d97-82eb6a9b739b" alt="Comisiones obreras de Madrid" className={classes.logo} />
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterIA;
