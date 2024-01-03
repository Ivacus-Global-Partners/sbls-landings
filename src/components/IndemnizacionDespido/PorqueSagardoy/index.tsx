import { Box, Card, CardContent, CardMedia, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: theme.spacing(2),
        boxSizing: 'border-box',
        marginBottom: '20px',
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
        marginLeft: '50px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            width: '100px',
            height: '100px',
            marginLeft: '10px',
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
    icon: {
        color: '#ffffff',
        fontSize: '22px',
        marginRight: '5px',
        marginBottom: '1px',
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: '24px',
        // fontStyle: 'italic',
        color: '#ffffff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '40px',
        },
    },
    subtitle: {
        fontFamily: 'Nunito',
        fontSize: '16px',
        color: '#ffffff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '40px',
        },
    },
    body: {
        fontFamily: 'Nunito',
        color: '#ffffff',
        fontSize: '14px',
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
    },
}));

const PorqueSagardoy = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (

        <div className={classes.container}>
            <div className={classes.content}>
                <div style={{ flex: '75%'}} className={classes.cardContainer}>
                    <Card style={{ backgroundColor: '#980628' }} sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                            <CardContent sx={{ flex: '1 0 auto' }}>
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
                        </Box>
                        <CardMedia
                            style={{ width: 'auto'}}
                            component="img"
                            image="https://i.ibb.co/qRRZZ4w/Porque-Sagardoy.png"
                            alt="Live from space album cover"
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PorqueSagardoy;
