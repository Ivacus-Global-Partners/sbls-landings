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
      width: '17vw',
    },
    [theme.breakpoints.down(550)]: {
      width: '14vw',
    }
  },
  container: {
    display: 'flex',
    paddingBottom: '0px',
    alignItems: 'start',
    justifyContent: 'center',
  },
  iconsTd: {
    padding: '15px 10px',
    width: '100px',
    fontSize: '0px',
    direction: 'ltr',
    paddingTop: '0px',
    textAlign: 'center',
    fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
  },
  iconsDiv: {
    fontSize: '0px',
    textAlign: 'center',
    direction: 'ltr',
    display: 'initial',
    verticalAlign: 'middle',
    margin: '35px',
    width: '100%'
  }
}));

const IconsInfo2 = ({ dates, duration,place, format }: { dates: string[], duration: any, place?: any, format: any }) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%', paddingTop: '30px' }} className={classes.container}>
      <div className={classes.tableContainer}>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', rowGap: '15px', padding: '10px 0 15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start', columnGap: '3px' }}>
              <div style={{ rowGap: '10px', display: 'flex', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Ffechasmadrid.png?alt=media&token=a7cbad8f-df45-49aa-809c-d7c2498ab2ee"
                  alt='fechas'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Fechas</strong><br />
                  {dates.map((d, i) => (
                    <React.Fragment key={i}>
                      {d} < br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fduraci%C3%B3nmadrid.png?alt=media&token=ce6e05ae-5d57-4fcc-a488-3acded046b78"
                  alt='Duración'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Duración</strong><br />
                  {duration}
                </div>
              </div>
              
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start' }}>
              {place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2FLugarmadrid.png?alt=media&token=25166a47-4bdb-4167-8a13-376506dd905f"
                  alt='Lugar'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Lugar</strong><br />
                  {place}
                </div>
              </div>}
            
              <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: `${!place ? '33%' : '50%'}`, justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fformatomadrid.png?alt=media&token=e06e1147-86f7-4e40-a7ea-8ac0200a1165"
                  alt='Formato'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong> Formato</strong><br />
                  {format}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start' }}>
            <div style={{ rowGap: '10px', display: 'flex', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Ffechasmadrid.png?alt=media&token=a7cbad8f-df45-49aa-809c-d7c2498ab2ee"
                alt='fechas'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Fechas</strong><br />
                {dates.map((d, i) => (
                  <React.Fragment key={i}>
                    {d} < br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fduraci%C3%B3nmadrid.png?alt=media&token=ce6e05ae-5d57-4fcc-a488-3acded046b78"
                alt='Duración'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Duración</strong><br />
                {duration}
              </div>
            </div>
           
            {place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2FLugarmadrid.png?alt=media&token=25166a47-4bdb-4167-8a13-376506dd905f"
                alt='Lugar'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Lugar</strong><br />
                {place}
              </div>
            </div>}
            <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2Fformatomadrid.png?alt=media&token=e06e1147-86f7-4e40-a7ea-8ac0200a1165"
                alt='Formato'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Formato</strong><br />
                {format}
              </div>
            </div>
          </div>
        )
        }
      </div >
    </div >
  )
}

export default IconsInfo2;