import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const IconsInfo = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tableWidth = '100%';

  return (
    <div style={{ margin: '0px auto', backgroundColor: '#F7F7F7', maxWidth: '100%' }} className={classes.container}>
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
                                src="https://i.ibb.co/6XqB0sc/Grupo-3-2x.png"
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
                                className={classes.icon}
                                src="https://i.ibb.co/8jw8Mqz/Grupo-8-2x.png"
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
                                className={classes.icon}
                                src="https://i.ibb.co/qmdYbJZ/Sin-t-tulo-1.png"
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
                                className={classes.icon}
                                src="https://i.ibb.co/fHjMGgP/Grupo-7-2x.png"
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
                                className={classes.icon}
                                src="https://i.ibb.co/2MtRGNv/Grupo-5-2x.png"
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
                                src="https://i.ibb.co/6XqB0sc/Grupo-3-2x.png"
                                alt='fechas'
                                className={classes.icon}
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
                                src="https://i.ibb.co/8jw8Mqz/Grupo-8-2x.png"
                                alt='Duración'
                                className={classes.icon}
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
                                src="https://i.ibb.co/qmdYbJZ/Sin-t-tulo-1.png"
                                alt='Idioma'
                                className={classes.icon}
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
                                src="https://i.ibb.co/fHjMGgP/Grupo-7-2x.png"
                                alt='Lugar'
                                className={classes.icon}
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
                                src="https://i.ibb.co/2MtRGNv/Grupo-5-2x.png"
                                alt='Formato'
                                className={classes.icon}
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