// Header.tsx
import React from 'react';
import './Header.css';
import DownloadIcon from '@mui/icons-material/Download';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  downLoadBtn: {
    position: 'absolute',
    left: '35%',
    fontSize: '1.2em',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px',
    border: 'none',
    borderRadius: '20px',
    background: '#980628',
    padding: '8px 25px',
    color: 'white',
    cursor: 'pointer',
    bottom: '0%',
    [theme.breakpoints.down('md')]: {
      left: '35%',
      fontSize: '0.9em',
    },
    [theme.breakpoints.down(780)]: {
      left: '35%',
      fontSize: '0.9em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5vw',
      left: '32%',
      padding: '4px 14px',
      transform: 'translate(-50%, -10%)',
    },
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="header-container" style={{ position: 'relative' }}>
      <img className='header-image' src="https://i.ibb.co/w7Ht6Sk/Header.png" alt="Header" />
      <button className={classes.downLoadBtn}>
        <DownloadIcon sx={{ fontSize: '1.3em' }} />
        Descargar folleto
      </button>
    </div>
  );
};

export default Header;
