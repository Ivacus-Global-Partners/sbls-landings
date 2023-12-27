import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    paddingBottom: '0px',
    alignItems: 'start',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '30px',
      paddingRight: '30px',
    }
  },
  iconsTd: {
    width: '100px',
    fontSize: '0px',
    direction: 'ltr',
    padding: '0px 0',
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

const IconsInfo = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%' }} className={classes.container}>
      <div style={{ margin: '0px auto', maxWidth: '600px', padding: '15px 0' }}>
        <table align="center" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ width: '100%', maxWidth: '600px' }}>
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Ffechas.png?alt=media&token=b1e83cdc-91b5-49fa-9a96-e6c7a11e7099"
                                alt='fechas'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Fechas</strong><br />
                              8 abril, 2024<br />
                              27 mayo, 2024<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fhorario.png?alt=media&token=6263b84f-2f70-4bd5-998e-27fcc05142a2"
                                alt='horario'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Duración</strong><br />
                              8 semanas 1 sesión por<br />
                              semana 17:00h a 20:00h<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fidioma.png?alt=media&token=fe753c11-c2b7-4f50-aeca-a9a291654b54"
                                alt='Idioma'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Idioma</strong><br />
                              Español<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Flugar.png?alt=media&token=1edbe7c7-b5f3-4d17-91d1-a1f5e77de632"
                                alt='Lugar'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Lugar</strong><br />
                              C\Velázquez 86D<br />
                              28006 | Madrid<br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                  <td colSpan={3} className={classes.iconsTd}>
                    <div className={classes.iconsDiv}>
                      <table border={0} cellPadding="0" cellSpacing="0" role="presentation" style={{ verticalAlign: 'middle' }}
                        width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fformato.png?alt=media&token=8833641f-be1f-4e1c-8fec-b3b17180c91c"
                                alt='Formato'
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Formato</strong><br />
                              Presencial<br />
                              & Remoto<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Ffechas.png?alt=media&token=b1e83cdc-91b5-49fa-9a96-e6c7a11e7099"
                                alt='fechas'
                                style={{ width: '50%' }}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Fechas</strong><br />
                              8 abril, 2024<br />
                              27 mayo, 2024<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fhorario.png?alt=media&token=6263b84f-2f70-4bd5-998e-27fcc05142a2"
                                alt='Duración'
                                style={{ width: '50%' }}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Duración</strong><br />
                              8 semanas 1 sesión por<br />
                              semana 17:00h a 20:00h<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fidioma.png?alt=media&token=fe753c11-c2b7-4f50-aeca-a9a291654b54"
                                alt='Idioma'
                                style={{ width: '50%' }}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Idioma</strong><br />
                              Español<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Flugar.png?alt=media&token=1edbe7c7-b5f3-4d17-91d1-a1f5e77de632"
                                alt='Lugar'
                                style={{ width: '50%' }}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Lugar</strong><br />
                              C\Velázquez 86D<br />
                              28006 | Madrid<br />
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
                                src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMail%20indemnizacion%2Fformato.png?alt=media&token=8833641f-be1f-4e1c-8fec-b3b17180c91c"
                                alt='Formato'
                                style={{ width: '50%' }}
                              />
                            </td>
                          </tr>
                          <tr style={{ fontSize: '14px' }}>
                            <td style={{ paddingTop: '10px' }}>
                              <strong>Formato</strong><br />
                              Presencial<br />
                              & Remoto<br />
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