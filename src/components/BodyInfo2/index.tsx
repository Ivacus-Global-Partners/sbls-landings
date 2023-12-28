import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './style.css';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#f0f0f0'
  },
  image: {
    width: '100%', 
    height: 'auto', 
    objectFit: 'contain', 
  },
}));

const BodyInfo2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.image} src="https://i.ibb.co/X4B76Gr/Body2.png" alt="Body2" />
    </div>
  )
}

export default BodyInfo2;
