import { Grid, Theme } from '@mui/material';
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
  containerLi: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '25px 0 25px 25px',
      columnGap: '15px',
      rowGap: '15px',
      alignItems: 'center',
    }
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
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '15px',
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '3.4vw',
    margin: 0,
    textAlign: 'center',
    fontWeight: '500',
    color: '#AA1936',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.6em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.9em',
    },
    [theme.breakpoints.down(495)]: {
      display: 'block',
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
  icono: {
    width: '0.7em',
    [theme.breakpoints.down(315)]: {
      width: '0.5em',
    },
    [theme.breakpoints.down(495)]: {
      marginRight: '5px',
    }
  }
}));

const ProgramObjetives = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <h1 className={classes.title}>
          <img src="https://i.ibb.co/8r1dDzr/ads-click-FILL0-wght400-GRAD0-opsz48-2x.png" className={classes.icono} alt="Icono" />
          Objetivos principales del programa
        </h1>
        <div className="wrapper option-1 option-1-1">
          <Grid className={classes.objetives} container>
            <Grid xs={12} sm={6} md={4}>
              <li className="c-stepper__item image1" >
                <h3 className="c-stepper__title title">Fortalecer</h3>
                <p className="c-stepper__desc">
                  los conocimientos y competencia <br />de los profesionales
                  de RR.HH. <br />en comunicación interna <br /> estratégica, incrementando
                  con <br /> ello su impacto en todos los <br /> niveles de organización
                </p>
              </li>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <li className="c-stepper__item image2">
                <h3 className="c-stepper__title title">Guíar</h3>
                <p className="c-stepper__desc">
                  a los profesionales de RR.HH. en <br /> la aplicación de herramientas
                  de <br />comunicación necesarias para <br /> lograr una mayor aportación al<br /> negocio
                  y a la gestión de la <br />cultura corporativa.
                </p>
              </li>
            </Grid>
            <Grid xs={12} sm={12} md={4}>
              <li className="c-stepper__item image3">
                <h3 className="c-stepper__title title">Desarrollar</h3>
                <p className="c-stepper__desc">
                  casos prácticos en colaboración<br /> con profesionales de<br /> destacadas
                  organizaciones para<br /> encontrar soluciones desde <br />distintas perspectivas.
                </p>
              </li>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default ProgramObjetives