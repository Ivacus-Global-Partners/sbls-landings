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

const ProgramObjetives = ({ objetives }: { objetives: Record<string, string> }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
        <h1 className={classes.title}>
          <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fads_click_FILL0_wght400_GRAD0_opsz48.svg?alt=media&token=7e186a13-2517-4685-a65f-6379d43854e9" 
            className={classes.icono} 
            alt="Icono" />
          Objetivos principales del programa
        </h1>
        <div className="wrapper option-1 option-1-1">
          <Grid className={classes.objetives} container>
            <Grid item xs={12} sm={4} md={4}>
              <li className="c-stepper__item image1" >
                <h3 className="c-stepper__title title">{Object.keys(objetives)[0]}</h3>
                <p className="c-stepper__desc">
                  {Object.values(objetives)[0]}
                </p>
              </li>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <li className="c-stepper__item image2">
                <h3 className="c-stepper__title title">{Object.keys(objetives)[1]}</h3>
                <p className="c-stepper__desc">
                  {Object.values(objetives)[1]}
                </p>
              </li>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <li className="c-stepper__item image3">
                <h3 className="c-stepper__title title">{Object.keys(objetives)[2]}</h3>
                <p className="c-stepper__desc">
                  {Object.values(objetives)[2]}
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