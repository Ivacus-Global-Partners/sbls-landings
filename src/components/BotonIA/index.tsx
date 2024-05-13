import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Theme } from '@mui/material';
import './style.css';
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: '#F7F7F7',
    padding: '40px 3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
    }
  },
  downLoadBtn: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '3px',
    border: 'none',
    textAlign: 'center',
    height: '40px',
    width: '268px',
    borderRadius: '20px',
    background: '#980628',
    padding: '8px 62px',
    fontSize: 'medium',
    color: 'white',
    margin: '25px auto', // Centrado automático
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    }
  }
}));

const BotonIA = () => {
  const classes = useStyles();

  const handleDownload = () => {
    const link = document.getElementById('download-pdf');
    if (link) {
      link.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
  };

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center">
        <Grid item>
          <button className={classes.downLoadBtn} onClick={handleDownload}>
            <DownloadIcon sx={{ fontSize: '1.2em' }} />
            Inscríbete
          </button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default BotonIA;
