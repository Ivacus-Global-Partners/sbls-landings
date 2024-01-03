import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#980628',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  image: {
    objectFit: 'contain',
    width: '120px',
    height: '120px',
    marginLeft: '50px',
    marginBottom: '120px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.only('md')]: {
      width: '120px',
      height: '120px',
    },
  },
  textContainer: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '15px',
    },
  },
  p: {
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    color: '#ffffff',
    fontSize: '28px',
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '50px',
      textAlign: 'left',
    },
  },
  icon: {
    color: '#ffffff',
    fontSize: '22px',
    marginRight: '5px',
    marginBottom: '1px',
  },
  name: {
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    fontSize:'18px',
    color: '#ffffff',
    marginLeft: '80px',
    marginBottom: '20px',
  },
}));

const BodyInfo2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img
          src="https://i.ibb.co/yhD5JRd/Imagen-2x.png"
          alt="Imagen-2x"
          className={classes.image}
        />
        <div className={classes.textContainer}>
          <p className={classes.p}>
            <FontAwesomeIcon icon={faQuoteLeft} className={classes.icon} />
            En estos tiempos en los que se extienden fenómenos como el de la “renuncia silenciosa” (“quiet quitting”), una certeza se consolida: para ser diferencialmente competitivas, las organizaciones precisan de profesionales comprometidos. Y el compromiso se construye, entre otros pilares, sobre una comunicación eficaz. <FontAwesomeIcon icon={faQuoteRight} className={classes.icon} />
          </p>
          <p className={classes.name}> <span>Pablo Gonzalo Molina</span> <br />Socio de Estudio de Comunicación <br /> Director de programa ejecutivo HR: Comunicación Interna al servicio del Negocio</p>
          {/* ... (añade más contenido según sea necesario) */}
        </div>
      </div>
    </div>
  );
};

export default BodyInfo2;
