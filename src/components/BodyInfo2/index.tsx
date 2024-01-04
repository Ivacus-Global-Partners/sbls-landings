import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) => ({
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50px',
    rowGap: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    }
  },
  logo: {
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  image: {
    objectFit: 'contain',
    width: '120px',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      width: '100px',
      height: '100px',
    },
    [theme.breakpoints.only('md')]: {
      width: '120px',
      height: '120px',
    },
  },
  textContainer: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '15px',
    },
  },
  p: {
    fontFamily: 'Playfair Display',
    fontStyle: 'italic',
    color: '#ffffff',
    fontSize: '28px',
    marginBottom: '25px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '50px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  icon: {
    color: '#ffffff',
    fontSize: '22px',
    marginRight: '5px',
    marginBottom: '1px',
  },
  name: {
    fontFamily: 'Nunito',
    fontSize: '18px',
    color: '#ffffff',
    marginLeft: '50px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '40px',
    },
  },
  imageTextContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const BodyInfo2 = ({ img, quote, name, job, filled = false, logo, logoAlt }: { img: string, quote: string, name: string, job: any, filled?: boolean, logo?: string, logoAlt?: string }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.container} style={{ background: filled ? '#980628' : 'inherit' }}>
      <div className={classes.content}>
        {!isMobile && (
          <div className={classes.imgContainer}>
            <img
              src={img}
              alt={name}
              className={classes.image}
            />
            {logo && <img
              src={logo}
              alt={logoAlt ?? "logo"}
              className={classes.logo}
            />}
          </div>
        )}
        <div className={classes.textContainer}>
          <p className={classes.p} style={{ color: filled ? 'white' : 'black', paddingRight: isLargeScreen ? '33vw' : '0' }}>
            <>
              <FontAwesomeIcon icon={faQuoteLeft} className={classes.icon} style={{ color: filled ? 'inherit' : '#980628' }} />
              {quote} <FontAwesomeIcon icon={faQuoteRight} className={classes.icon} style={{ color: filled ? 'inherit' : '#980628' }} />
            </>
          </p>
          <div className={isMobile ? classes.imageTextContainer : ''}>
            {isMobile && (
              <div className={classes.imgContainer}>
                <img
                  src={img}
                  alt={name}
                  className={classes.image}
                />
                {logo && <img
                  src={logo}
                  alt={logoAlt ?? "logo"}
                  className={classes.logo}
                />}
              </div>
            )}
            <p className={classes.name} style={{ color: filled ? 'white' : 'black' }}>
              <span><b>{name}</b></span>
              <br />{job}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyInfo2;
