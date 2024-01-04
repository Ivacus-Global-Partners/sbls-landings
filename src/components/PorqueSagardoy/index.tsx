import { Card, CardContent, CardMedia, Theme, useMediaQuery, useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        marginBottom: '20px',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1px'
        }
    },
    content: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    textContainer: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: '15px',
        },
    },
    icon: {
        color: '#ffffff',
        fontSize: '22px',
        marginRight: '5px',
        marginBottom: '1px',
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: '24px',
        fontStyle: 'italic',
        color: '#ffffff',
    },
    subtitle: {
        fontFamily: 'Nunito',
        fontSize: '16px',
        color: '#ffffff',
    },
    body: {
        fontFamily: 'Nunito',
        color: '#ffffff',
        fontSize: '14px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'justify',
            marginLeft: '10px'
        },
    },
    imageTextContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const PorqueSagardoy = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <div className={classes.container}>
            <div className={classes.content}>
                <div style={{ flex: '100%' }} className={classes.cardContainer}>
                    <Card style={{ backgroundColor: '#980628' }} >
                        <Grid container>
                            <Grid item xs={12} sm={isMobile ? 12 : 4} md={8}>
                                <CardContent>
                                    <h1 className={classes.title}>
                                        ¿Por qué elegir Sagardoy School?
                                    </h1>
                                    <h2 className={classes.subtitle}>* Especialización & Experiencia</h2>
                                    <p className={classes.body}>
                                        Equipo docente con amplia trayectoria en materia de derecho laboral y empresarial.
                                    </p>
                                    <h2 className={classes.subtitle}>* Enfoque práctico</h2>
                                    <p className={classes.body}>
                                        Metodología que una la base teórica con la aplicación práctica, gracias al análisis de <br />
                                        casos reales.
                                    </p>
                                    <h2 className={classes.subtitle}>* Formato flexible</h2>
                                    <p className={classes.body}>
                                        Sesiones presenciales y virtuales.
                                    </p>
                                    <h2 className={classes.subtitle}>* Networking de alto valor</h2>
                                    <p className={classes.body}>
                                        Networking con profesionales de destacadas organizaciones, quienes aportarán sus <br />
                                        puntos de vista desde distintas perspectivas.
                                    </p>
                                </CardContent>
                            </Grid>

                            {!isMobile && (
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardMedia
                                        style={{ width: '100%', maxWidth: '100%', height: '100%' }}
                                        component="img"
                                        image="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPorqueSagardoy.png?alt=media&token=d0318e49-e62f-4ede-97fd-7af0abedf94a"
                                        alt="Live from space album cover"
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PorqueSagardoy;
