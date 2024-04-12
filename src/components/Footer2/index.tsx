import { makeStyles } from '@mui/styles';
import { Grid, Box, Theme } from '@mui/material';
import './style.css'


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
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Permite que los elementos se envuelvan en la siguiente línea
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },

  logo: {
    maxWidth: '25%', // Cada logo puede tomar hasta el 25% del contenedor
    height: 'auto',
    margin: '0 40px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%', // En pantallas pequeñas, cada logo toma hasta el 50% (dos logos por línea)
      margin: '10px 20%', // Ajusta los márgenes según sea necesario
    },
  },
}));
const Footer2 = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Box className={classes.logosContainer}>
          <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Flogomadrid03%402x.png?alt=media&token=201db2e3-f201-40a8-aba2-927325e261fd" alt="Comisiones obreras de Madrid" className={classes.logo} />
          <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2FCEIM%402x.png?alt=media&token=10737447-4603-4566-bad5-a18e30def9a7" alt="Empresarios de Madrid" className={classes.logo} />
          <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Flogomadrid02%402x.png?alt=media&token=38b4d50a-ad1a-4fd4-97a9-0d48845855d5" alt="UGT" className={classes.logo} />
          <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fcomunidad%20de%20madrid.jpg?alt=media&token=aea46254-db3e-4b1e-8152-4c01a3d5b45d" alt="Comunidad de Madrid" className={classes.logo} style={{ maxWidth: '15%' }} /> {/* Modificar directamente el estilo del último logo */}
        </Box>
      </Grid>
    </Grid>
  </footer>
);
};

export default Footer2;
