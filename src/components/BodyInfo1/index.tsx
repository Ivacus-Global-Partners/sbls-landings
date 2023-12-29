import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    backgroundColor: '#ffffff',
    paddingLeft: '20px',  // Ajusta según sea necesario
    paddingRight: '20px', // Ajusta según sea necesario
  },

  paragraphContainer: {
    textAlign: 'left',
    marginTop: '2px', // Ajusta el margen superior del párrafo
    marginBottom: '15px',
    width: '100%', // Ocupa todo el ancho disponible
  },

  titleContainer: {
    textAlign: 'left',
    marginLeft: '-10px', // Ajusta el margen izquierdo del título
    marginTop: '20px', // Ajusta el margen superior del título
  },

  title: {
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '2.5em',
    margin: 0,
    marginLeft: '-400px',
    textAlign: 'left',
    fontWeight: '300',
    color: '#AA1936',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0', // Ajuste para pantallas pequeñas
      fontSize: '6vw',
    },
  },

  paragraph: {
    textAlign: 'left',
    width: '100%', // Ocupa todo el ancho disponible
    marginLeft: '170px',
    fontFamily: 'nunito',
    fontStyle: 'regular',
    fontSize:'18px',
  },
}));

const BodyInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>
          <img src="https://i.ibb.co/G2nV6hf/rocket-launch-FILL0-wght400-GRAD0-opsz24-2x.png" style={{ width: '3%' }} alt="Icono" /> Hacia una comunicación interna efectiva
        </h1>
      </div>
      <div className={classes.paragraphContainer}>
        <p className={classes.paragraph}>
          ¿Sabías que la comunicación eficaz promueve el compromiso con los equipos y las <br />organizaciones? 
          ¿Deseas fortalecer tus conocimientos y competencias de comunicación <br />interna estratégica?<br /><br />
          Conoce cómo <strong>aplicar herramientas de comunicación estratégica para mejorar la cultura<br /> corporativa y los resultados del negocio.</strong>
          Y consigue que las Políticas de Recursos Humanos<br />sean mejor comprendidas, valoradas y, por tanto, aplicadas por todos los profesionales de la <br />organización.
        </p>
      </div>
    </div>
  );
};

export default BodyInfo;