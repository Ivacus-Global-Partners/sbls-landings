import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './style.css';

import React from 'react'
import InfoForm from '../infoForm';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    backgroundColor: '#f0f0f0'
  },
  image: {
    width: '100%', 
    height: 'auto', 
    objectFit: 'contain', 
  },
  header: {
    marginTop: '-4%',
    display: 'grid',
    padding: '0 12% 0 8%',
    // padding: '0 18% 0 70%', //Aqui para mover el form
    gridTemplateColumns: '1fr 2.5fr',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '100%',
      marginTop: '4%',
    },
    columnGap: '7%',
    rowGap: '15px',
    // alignItems: 'flex-start',
  },
  superposed: {
    position: 'absolute',
    top: '50%',
    left: '85%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
  }
}));

const BodyInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="https://i.ibb.co/5MKJb8z/Body1.png" alt="Body1" />
      <div className={classes.superposed}>
        <div className={classes.header}>
          <InfoForm title shadow submit="Enviar"/>
        </div>
      </div>
    </div>
  )
}

export default BodyInfo;