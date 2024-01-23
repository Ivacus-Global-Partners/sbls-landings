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

const IconsInfo = ({ dates, duration, language, place, format }: { dates: string[], duration: any, language: string, place?: any, format: any }) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%', paddingTop: '15px' }} className={classes.container}>
      <div className={classes.tableContainer}>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', rowGap: '15px', padding: '10px 0 15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start', columnGap: '3px' }}>
              <div style={{ rowGap: '10px', display: 'flex', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
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
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
                  alt='Duración'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Duración</strong><br />
                  {duration}
                </div>
              </div>
              {place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fidioma.png?alt=media&token=4e54d49c-7f7e-45aa-9b42-4325b96a2561"
                  alt='Idioma'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Idioma</strong><br />
                  {language}
                </div>
              </div>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start' }}>
              {place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fubicacion.png?alt=media&token=f337f820-575e-46ad-9846-52c8a46d528b"
                  alt='Lugar'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Lugar</strong><br />
                  {place}
                </div>
              </div>}
              {!place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fidioma.png?alt=media&token=4e54d49c-7f7e-45aa-9b42-4325b96a2561"
                  alt='Idioma'
                />
                <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                  <strong>Idioma</strong><br />
                  {language}
                </div>
              </div>}
              <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: `${!place ? '33%' : '50%'}`, justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
                <img
                  className={classes.icon}
                  src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fformato.png?alt=media&token=7d1e192c-23ea-4162-a14f-e1242fef288c"
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
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
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
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
                alt='Duración'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Duración</strong><br />
                {duration}
              </div>
            </div>
            <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fidioma.png?alt=media&token=4e54d49c-7f7e-45aa-9b42-4325b96a2561"
                alt='Idioma'
              />
              <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                <strong>Idioma</strong><br />
                {language}
              </div>
            </div>
            {place && <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100&' }}>
              <img
                className={classes.icon}
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fubicacion.png?alt=media&token=f337f820-575e-46ad-9846-52c8a46d528b"
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
                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fformato.png?alt=media&token=7d1e192c-23ea-4162-a14f-e1242fef288c"
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

export default IconsInfo;