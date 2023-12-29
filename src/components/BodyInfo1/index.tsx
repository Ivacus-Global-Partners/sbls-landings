import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: 'center',
    padding: '25px 0 25px 5%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingLeft: '2',
    }
  },

  paragraphContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  },

  titleContainer: {
    textAlign: 'left',
    marginLeft: '-10px',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
      marginTop: '0px',
    },
  },

  title: {
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '2.5em',
    margin: 0,
    textAlign: 'left',
    fontWeight: '300',
    color: '#AA1936',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      fontWeight: '200',
      fontSize: '1.7em',
    },
    [theme.breakpoints.down('sm')]: {
      fontWeight: '200',
      textAlign: 'left',
    },
  },

  paragraph: {
    textAlign: 'left',
    width: '100%', // Ocupa todo el ancho disponible

    fontFamily: 'nunito',
    fontStyle: 'regular',
    fontSize: '18px',
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