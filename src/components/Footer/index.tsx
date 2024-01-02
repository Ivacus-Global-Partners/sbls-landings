import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Box, Theme } from '@mui/material';
import './style.css'
import DownloadIcon from '@mui/icons-material/Download';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: '#F7F7F7',
    padding: '40px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 0',
    }
  },
  mainLogo: {
    maxWidth: '200px',
    height: 'auto',
    marginLeft: '3vw',
  },
  imageContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  secondaryText: {
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 0,
    fontSize: '18px',
  },
  iconsItem: {
    [theme.breakpoints.down('sm')]: {
      padding: '7px 0',
    },
    '& h3, & a': {
      marginTop: '5px',
      marginBottom: '5px',
      color: '#000000',
      fontSize: '1.5vw',
      fontFamily: 'times',
      fontWeight: 'normal',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#c5c5d6',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '2vw',
      },
    },
  },
  logosArea: {
    display: 'flex',
    alignItems: 'self-end',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '20px',
    },
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '100px',
    maxWidth: '100%',
    '& img': {
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      flexDirection: 'row !important',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '20px',
      flexDirection: 'column !important',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      alignItems: 'center !important',
      marginBottom: '30px',
      marginTop: '30px',
    }
  },
  menuContainer: {
    maxWidth: '400px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '250px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '400px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
      marginRight: '20px',
      marginBottom: '30px',
      '& img': {
        maxWidth: '120%',
        marginLeft: '-5%',
      }
    },
  },
  downLoadBtn: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '5px',
    border: 'none',
    borderRadius: '20px',
    background: '#980628',
    padding: '8px 25px',
    color: 'white',
    margin: '25px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Box className={classes.imageContainer}>
            <img src="https://i.ibb.co/L9kpfz4/Grupo-9-2x.png" className={classes.mainLogo} alt="Sagardoy Business School" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button className={classes.downLoadBtn}>
            <DownloadIcon sx={{ fontSize: '1.3em' }} />
            Descargar folleto
          </button>
        </Grid>
        <Grid item xs={12} sm={4} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Grid className={classes.logos}>
            <Box>
              <address className={classes.iconsItem}>
                <h3>C/Velázquez 86D. 28006 Madrid</h3>
                <label>info@sagardoyschool.com</label>
              </address>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </footer >
  );
};

export default Footer;
