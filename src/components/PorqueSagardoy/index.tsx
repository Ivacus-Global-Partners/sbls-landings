import { Card, CardContent, CardMedia, Theme, useMediaQuery, useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    gridItem: {
        display: 'flex',
        height: 'fit-content',
    },
    list: {
        color: 'white',
        paddingLeft: '20px'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '8px 8px 0',
        boxSizing: 'border-box',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1px'
        }
    },
    content: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
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
        margin: 0,
        fontFamily: 'Playfair Display',
        fontSize: '40px',
        fontStyle: 'italic',
        color: '#ffffff',
        fontWeight: 'lighter',
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'Nunito',
        fontSize: '20px',
        color: '#ffffff',
        margin: 0,
    },
    body: {
        margin: 0,
        fontFamily: 'Nunito',
        color: '#ffffff',
        fontSize: '16px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
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
        width: '90%',
        [theme.breakpoints.up(850)]: {
            width: '95%',
            marginLeft: '20px',
        },
        [theme.breakpoints.down(850)]: {
            textAlign: 'left',
            justifyContent: 'left',
            '& ul': {
                listStyle: 'none',
                padding: 0,
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
}));

const PorqueSagardoy = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.cardContainer}>
                    <Card style={{ backgroundColor: '#980628', width: '100%' }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} sm={isMobile ? 12 : 4} md={7.5} className={classes.gridItem}>
                                <CardContent sx={{ height: 'fit-content', paddingBottom: '10px !important' }}>
                                    <h1 className={classes.title}>
                                        ¿Por qué elegir Sagardoy School?
                                    </h1>
                                    <ul className={classes.list}>
                                        <li><h2 className={classes.subtitle}>Especialización & Experiencia</h2>
                                            <p className={classes.body}>
                                                Equipo docente con amplia trayectoria en materia de derecho laboral y empresarial.
                                            </p>
                                        </li>
                                        <li><h2 className={classes.subtitle}>Enfoque práctico</h2>
                                            <p className={classes.body}>
                                                Metodología que aúna la base teórica con la aplicación práctica, gracias al análisis de <br />
                                                casos reales.
                                            </p>
                                        </li>
                                        <li><h2 className={classes.subtitle}>Formato flexible</h2>
                                            <p className={classes.body}>
                                                Sesiones presenciales y virtuales.
                                            </p>
                                        </li>
                                        <li><h2 className={classes.subtitle}>Networking de alto valor</h2>
                                            <p className={classes.body}>
                                                Networking con profesionales de destacadas organizaciones, quienes aportarán sus <br />
                                                puntos de vista desde distintas perspectivas.
                                            </p>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Grid>

                            {!isMobile && (
                                <Grid item xs={12} sm={4} md={4.5}>
                                    <CardMedia
                                        style={{ width: '100%', maxWidth: '100%', height: '100%' }}
                                        component="img"
                                        image="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fimg01.png?alt=media&token=24f9a7f1-b31d-4647-945f-f9c389f8d19b"
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
