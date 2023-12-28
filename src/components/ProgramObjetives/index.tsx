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
        <div className="wrapper  ">
          <img className={classes.image} src="https://i.ibb.co/jy1nCvz/Sin-t-tulo-4.png" alt="Objetives" />
        </div>
      </div>
    </div>
  )
}

export default ProgramObjetives