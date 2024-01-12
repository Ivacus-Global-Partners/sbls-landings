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

const IconsInfo = ({ dates, duration, language, place, format }: { dates: string[], duration: any, language: string, place: any, format: any }) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tableWidth = '100%';

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%', paddingTop: '20px' }} className={classes.container}>
      <div className={classes.tableContainer}>
        <table align="center" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: tableWidth }}>
          <tbody>

            {isMobile ? (
              <>
                <tr style={{ verticalAlign: "top" }}>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className={classes.icon}
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
                                alt='fechas'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Fechas</strong><br />
                              {dates.map((d, i) => (
                                <React.Fragment key={i}>
                                  {d} < br />
                                </React.Fragment>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className={classes.icon}
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
                                alt='Duración'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Duración</strong><br />
                              {duration}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className={classes.icon}
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fidioma.png?alt=media&token=4e54d49c-7f7e-45aa-9b42-4325b96a2561"
                                alt='Idioma'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Idioma</strong><br />
                              {language}<br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr style={{ verticalAlign: "top" }}>
                  <td colSpan={3} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className={classes.icon}
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fubicacion.png?alt=media&token=f337f820-575e-46ad-9846-52c8a46d528b"
                                alt='Lugar'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Lugar</strong><br />
                              {place}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={3} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle'}}
                        width="100%">
                        <tbody>
                          <tr >
                            <td>
                              <img
                                className={classes.icon}
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fformato.png?alt=media&token=7d1e192c-23ea-4162-a14f-e1242fef288c"
                                alt='Formato'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Formato</strong><br />
                              {format}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr style={{ verticalAlign: "top" }}>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fcalendario.png?alt=media&token=8180ed33-4cc8-474c-b547-3c44e01471f5"
                                alt='fechas'
                                className={classes.icon}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Fechas</strong><br />
                              {dates.map((d, i) => (
                                <React.Fragment key={i}>
                                  {d} < br />
                                </React.Fragment>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fhorario.png?alt=media&token=c2fc5731-bd2d-47e3-8af3-c05dc21cfe5c"
                                alt='Duración'
                                className={classes.icon}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Duración</strong><br />
                              {duration}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fidioma.png?alt=media&token=4e54d49c-7f7e-45aa-9b42-4325b96a2561"
                                alt='Idioma'
                                className={classes.icon}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Idioma</strong><br />
                              {language}<br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fubicacion.png?alt=media&token=f337f820-575e-46ad-9846-52c8a46d528b"
                                alt='Lugar'
                                className={classes.icon}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Lugar</strong><br />
                              {place}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={2} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fformato.png?alt=media&token=7d1e192c-23ea-4162-a14f-e1242fef288c"
                                alt='Formato'
                                className={classes.icon}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Formato</strong><br />
                              {format}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IconsInfo;