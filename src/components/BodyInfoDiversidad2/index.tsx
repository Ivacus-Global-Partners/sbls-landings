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
    marginLeft: '60px',
    rowGap: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    }
  },
  logo: {
    width: '35%',
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
  fullAuthorInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '45px',
    '& p': {
      fontSize: '16px'
    },
    '& img': {
      width: '80px',
      height: '80px',
    },
    [theme.breakpoints.down('md')]: {
      gap: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      gap: '20px',
      '& img': {
        width: '120px',
        height: '120px',
      },
    },
  },
  twoAuthors: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '30px',
    gap: '70px',
    padding: '0 66px',
    boxSizing: 'border-box',
    '& div': {
      flex: 1,
    },
    '& p': {
      margin: 0
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      gap: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: 0,
      gap: '20px',
    }
  },
  fullQuote: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  }
}));

const BodyInfoDiversidad2 = ({ img, quote, name, job, filled = false, logo, logoAlt, img2, name2, job2, }:
  {
    img: string,
    quote: any,
    name: string,
    job?: any,
    filled?: boolean,
    logo?: string,
    logoAlt?: string,
    img2?: string,
    name2?: string,
    job2?: any,
  }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.container} style={{ background: filled ? '#980628' : 'inherit' }}>
      <div className={classes.content}>
        {!isMobile && !img2 && (
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
          <p className={`${classes.p} ${name2 ? classes.fullQuote : ''}`} style={{ color: filled ? 'white' : 'black', paddingRight: name2 ? 0 : isLargeScreen ? '33vw' : '0' }}>
            {typeof quote === 'string' ? (
              <>
                
                {quote}
               
              </>
            ) : (
              quote
            )}

          </p>
          <div className={name2 ? classes.twoAuthors : ''}>
            {job && <div className={name2 ? classes.fullAuthorInfo : isMobile ? classes.imageTextContainer : ''}>
              {isMobile && !img2 && (
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
              {img2 && <img
                src={img}
                alt={name}
                className={classes.image}
              />}
              <p className={classes.name} style={{ color: filled ? 'white' : 'black' }}>
                <span><b>{name}</b></span>
                <br />{job}
              </p>
            </div>}
            {name2 && <div className={name2 ? classes.fullAuthorInfo : isMobile ? classes.imageTextContainer : ''}>
              <img
                src={img2}
                alt={name2}
                className={classes.image}
              />
              <p className={classes.name} style={{ color: filled ? 'white' : 'black' }}>
                <span><b>{name2}</b></span>
                <br />{job2}
              </p>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyInfoDiversidad2 ;
