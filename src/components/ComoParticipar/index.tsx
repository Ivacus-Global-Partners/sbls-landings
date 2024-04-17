import { Card, CardContent, CardMedia, Theme, useMediaQuery, useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './style.css';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    gridItem: {
        display: 'flex',
        height: 'fit-content',
    },
    list: {
        color: 'white',
        paddingLeft: '20px',
        marginLeft: '85px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        }
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
        marginRight: '45%',
        [theme.breakpoints.up('sm')]: {
            marginRight: '10%',
            textAlign: 'left',
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: '0%',
            fontSize: '35px',
        }
    },
    subtitle: {
        fontFamily: 'Nunito',
        fontSize: '20px',
        color: '#ffffff',
        paddingLeft: '0px',
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            // fontSize: '15px',
        },

    },
    listItem: {
        fontSize: '25px',
        // height: '60px',
        // position: 'relative',
    },
    body: {
        margin: 0,
        fontFamily: 'Nunito',
        paddingLeft: '0px',
        color: '#ffffff',
        fontSize: '16px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            marginBottom: '5%',
        },
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'left',
            // marginTop: '1%'
        }
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
            width: '100%',
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
    imageWidth: {
        width: '70%',
        maxWidth: '70%', 
        height: '100%', 
        marginLeft: '30%',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            maxWidth: '100%', 
            height: '100%', 
            marginLeft: '22%',
        },
    }
}));

const ComoParticipar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.cardContainer} style={{ backgroundColor: '#980628' }}>
                    <Card style={isSmall ? {  backgroundColor: '#980628', width: '100%' } : { backgroundColor: '#980628', width: '100%' }} >
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} sm={isMobile ? 12 : 4} md={7.5} className={classes.gridItem}>
                                <CardContent sx={{ height: 'fit-content' }}>
                                    <h1 className={classes.title}>
                                        ¿Cómo participar?
                                    </h1>
                                    <ul className={classes.list} >
                                        <li className={classes.listItem} style={{ lineHeight: '100%' }}>
                                            <h2 className={classes.subtitle}>Especialización & Experiencia</h2>
                                            <p className={classes.body}>
                                                Equipo docente con amplia trayectoria en materia de derecho laboral y empresarial.
                                            </p>
                                        </li>
                                        <li className={classes.listItem}><h2 className={classes.subtitle}>Enfoque práctico</h2>
                                            <p className={classes.body}>
                                                Metodología que aúna la base teórica con la aplicación práctica, gracias al análisis de casos reales.
                                            </p>
                                        </li>
                                        <li className={classes.listItem}><h2 className={classes.subtitle} style={isSmall ? { marginTop: '0%' } : {}}>Formato flexible</h2>
                                            <p className={classes.body}>
                                                Sesiones presenciales y virtuales.
                                            </p>
                                        </li>
                                        <li className={classes.listItem}><h2 className={classes.subtitle} style={isSmall ? { marginTop: '0%' } : {}} >Networking de alto valor</h2>
                                            <p className={classes.body}>
                                                Networking con profesionales de destacadas organizaciones, quienes aportarán sus
                                                puntos de vista desde distintas perspectivas.
                                            </p>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Grid>

                            {!isMobile && (
                                <Grid item xs={12} sm={4} md={4.5} >
                                    <CardMedia
                                        className={classes.imageWidth}
                                        component="img"
                                        image="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fbodyphot.png?alt=media&token=be110c65-7872-4b5e-8c54-b1510d8a1d88"
                                        alt=""
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

export default ComoParticipar;
