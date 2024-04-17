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
    marginBottom: '10px',  // Espacio debajo del ícono
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

const IconsInfoBecaAon = ({ profile, deadlineDate, winnersAnnouncement, prizes }: {
  profile?: string,
  deadlineDate?: string,
  winnersAnnouncement?: string,
  prizes?: React.ReactNode
}) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%', paddingTop: '15px' }} className={classes.container}>
      <div className={classes.tableContainer}>

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', gap: '15px', padding: '10px 0 15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start', gap: '3px' }}>
              {/* Sección para perfil del participante */}
              {profile && (
                <div style={{ rowGap: '10px', display: 'flex', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                  <img
                    className={classes.icon}
                    src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fperfil.png?alt=media&token=ae0fb9c2-ad3d-4f7f-8eca-68b239049f9e"
                    alt='Perfil del participante'
                  />
                  <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                    <strong>Perfil del participante</strong><br />
                    {profile}
                  </div>
                </div>
              )}
              {/* Sección para fecha límite */}
              {deadlineDate && (
                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                  <img
                    className={classes.icon}
                    src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
                    alt='Fecha límite para participar'
                  />
                  <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                    <strong>Fecha límite</strong><br />
                    {deadlineDate}
                  </div>
                </div>
              )}
              {/* Sección para anuncio de los ganadores */}
              {winnersAnnouncement && (
                <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '33%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                  <img
                    className={classes.icon}
                    src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
                    alt='Anuncio de los ganadores'
                  />
                  <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
                    <strong>Anuncio de los ganadores</strong><br />
                    {winnersAnnouncement}
                  </div>
                </div>
              )}
              {/* Sección para premios */}
              {prizes && (
                <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                  <img
                    className={classes.icon}
                    src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fpremio.png?alt=media&token=889eea31-30ab-417a-b1f7-b2499646277b"
                    alt='Premios'
                  />
                  <div style={{ fontSize: '14px', fontFamily: 'Arial' }} >
                    <strong>Premios</strong><br />
                    {prizes}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'start' }}>
            {/* Componentes de la vista de escritorio */}
            {/* Sección para perfil del participante */}
  {profile && (
    <div style={{ rowGap: '10px', display: 'flex', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
      <img
        className={classes.icon}
        src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fperfil.png?alt=media&token=ae0fb9c2-ad3d-4f7f-8eca-68b239049f9e"
        alt='Perfil del participante'
      />
      <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
        <strong>Perfil del participante</strong><br />
        {profile}
      </div>
    </div>
  )}
  {/* Sección para fecha límite */}
  {deadlineDate && (
    <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
      <img
        className={classes.icon}
        src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
        alt='Fecha límite para participar'
      />
      <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
        <strong>Fecha límite</strong><br />
        {deadlineDate}
      </div>
    </div>
  )}
  {/* Sección para anuncio de los ganadores */}
  {winnersAnnouncement && (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
      <img
        className={classes.icon}
        src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
        alt='Anuncio de los ganadores'
      />
      <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
        <strong>Anuncio de los ganadores</strong><br />
        {winnersAnnouncement}
      </div>
    </div>
  )}
  {/* Sección para premios */}
  {prizes && (
    <div style={{ display: 'flex', rowGap: '10px', flexDirection: 'column', width: '25%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
      <img
        className={classes.icon}
        src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fpremio.png?alt=media&token=889eea31-30ab-417a-b1f7-b2499646277b"
        alt='Premios'
      />
      <div style={{ fontSize: '14px', fontFamily: 'Arial' }}>
        <strong>Premios</strong><br />
        {prizes}
      </div>
    </div>
  )}

          </div>
        )}
      </div>
    </div>
  )
}
export default IconsInfoBecaAon;
