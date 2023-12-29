import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './style.css'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '25px 0 25px 25px',
    columnGap: '15px',
    rowGap: '15px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingLeft: 0,
    }
  },
  subcontainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',

  },
  card: {
    padding: '20px',
    borderRadius: '20px',
    width: '280px',
    paddingBottom: '45px',
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      minWidth: 0,
      maxWidth: '24vw',
    },
    [theme.breakpoints.down(300)]: {
      width: '80vw'
    }
  },
  title: {
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '3em',
    margin: 0,
    textAlign: 'center',
    fontWeight: '500',
    color: '#AA1936',
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
    },
  },
  subTitle: {
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '3em',
    margin: 0,
    textAlign: 'center',
    fontWeight: '300',
    color: '#AA1936',
    [theme.breakpoints.down('sm')]: {
      fontSize: '6vw',
    },
  },
  text: {
    fontSize: '0.9em',
    margin: 0,
    marginLeft: '25px',
  },
  objetives: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  objetivesItem: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '600px',
    },
  },
}));

const ProgramObjetives = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <h1 className={classes.title}>
          <img src="https://i.ibb.co/8r1dDzr/ads-click-FILL0-wght400-GRAD0-opsz48-2x.png" style={{ width: '4%' }} alt="Icono" /> Objetivos principales del programa
        </h1>
        <div className="wrapper option-1 option-1-1">
          <ol className={classes.objetives}>
            
            <li className="c-stepper__item image1" >
              <h3 className="c-stepper__title title">Fortalecer</h3>
              <p className="c-stepper__desc">
                los conocimientos y competencia de los profesionales
                de RR.HH. en comunicación interna estratégica, incrementando
                con ello su impacto en todos los niveles de organización
              </p>
            </li>
            <li className="c-stepper__item image2">
              <h3 className="c-stepper__title title">Guíar</h3>
              <p className="c-stepper__desc">
                a los profesionales de RR.HH. en la aplicación de herramientas de 
                de comunicación necesarias para lograr una mayor aportación al negocio
                y a la gestión de la cultura corporativa.
              </p>
            </li>
            <li className="c-stepper__item image3">
              <h3 className="c-stepper__title title">Desarrollar</h3>
              <p className="c-stepper__desc">
                casos prácticos en colaboración con profesionales de destacadas
                organizaciones para encontrar soluciones desde distintas perspectivas.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ProgramObjetives