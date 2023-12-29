import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './style.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start', // Alinea el contenido a la izquierda
    alignItems: 'center',
    height: '40vh',
    backgroundColor: '#980628',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    objectFit: 'contain',
    width: '110px', // Ajusta el tamaño del avatar según tus necesidades
    height: '110px',
    marginRight: theme.spacing(2),
    
    marginLeft:'130px',
    marginBottom:'100px',
   
  },
}));

const BodyInfo2 = () => {
  const classes = useStyles();
  const [avatarSize, setAvatarSize] = useState({ width: 80, height: 80 });



  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img
          src="https://i.ibb.co/yhD5JRd/Imagen-2x.png"
          alt="Imagen-2x"
          className={classes.image}
          style={{ width: avatarSize.width, height: avatarSize.height }}
    
        />
        <p>
        <FontAwesomeIcon icon="fa-solid fa-quote-left" size="2xs" style={{color: "#ffffff",}} />¡Aquí va tu párrafo! Puedes agregar el contenido que desees aquí.</p>
      </div>
    </div>
  );
};

export default BodyInfo2;
