import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    margin: '0',
    padding: '15px 0',
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  },
  icon: {
    width: '5vw',
    [theme.breakpoints.down(1100)]: {
      width: '8vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '10vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '45%',
      maxWidth: '100%',
      marginBottom: '1px',
    },
    [theme.breakpoints.down(550)]: {
      width: '40%',
    }
  },
  container: {
    display: 'flex',
    paddingBottom: '0px',
    alignItems: 'start',
    justifyContent: 'center',
    margin: '40px auto',
  },
  iconsDiv: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '15px',
    textAlign: 'center',
    width: '100%',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  text: {
    fontSize: '14px',
    fontFamily: 'Arial',
    marginTop: '10px',
  },
}));

const IconsInfo2 = ({ dates, duration, place, format }: { dates: string[], duration: any, place?: any, format: any }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%', paddingTop: '30px' }} className={classes.container}>
      <div className={classes.tableContainer}>
        <div className={classes.iconsDiv}>
          <div className={classes.iconWrapper}>
            <img
              className={classes.icon}
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Ffechasmadrid.png?alt=media&token=a7cbad8f-df45-49aa-809c-d7c2498ab2ee"
              alt='fechas'
            />
            <div className={classes.text}>
              <strong>Fechas</strong><br />
              {dates.map((d, i) => (
                <React.Fragment key={i}>
                  {d} < br />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className={classes.iconWrapper}>
            <img
              className={classes.icon}
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fduraci%C3%B3nmadrid.png?alt=media&token=ce6e05ae-5d57-4fcc-a488-3acded046b78"
              alt='Duración'
            />
            <div className={classes.text}>
              <strong>Duración</strong><br />
              {duration}
            </div>
          </div>
          {place && (
            <div className={classes.iconWrapper}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2FLugarmadrid.png?alt=media&token=25166a47-4bdb-4167-8a13-376506dd905f"
                alt='Lugar'
              />
              <div className={classes.text}>
                <strong>Lugar</strong><br />
                {place}
              </div>
            </div>
          )}
          <div className={classes.iconWrapper}>
            <img
              className={classes.icon}
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fformatomadrid.png?alt=media&token=e06e1147-86f7-4e40-a7ea-8ac0200a1165"
              alt='Formato'
            />
            <div className={classes.text}>
              <strong>Formato</strong><br />
              {format}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconsInfo2;
