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
        marginLeft: '140px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '20px',
            paddingLeft: '0px',
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
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
        fontSize: '60px',
        fontStyle: 'italic',
        color: '#ffffff',
        fontWeight: 'lighter',
        textAlign: 'center',
        paddingLeft: '100px',
        paddingBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            marginRight: '10%',
            textAlign: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0px',
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
        fontSize: '22px',
        color: 'white',
        marginBottom: '10px',
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
        width: '100%',
        [theme.breakpoints.up(850)]: {
            width: '100%',
            // marginLeft: '20px',
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
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            marginLeft: '22%',
        },
    },
    numberCircle: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '4px',
        background: 'white',
        color: '#980628',
        textAlign: 'center',
        fontSize: '30px',
        lineHeight: '24px',
        marginRight: '15px',
        display: 'inline-block !important',
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: '30px',
        }
    },
    sectionTitle: {
        fontSize: '24px',
        width: '100%',
        color: 'white',
        paddingTop: '5px !important',
        display: 'inline',
        verticalAlign: 'super',
    },
    subsectionContainer: {
        marginLeft: '60px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        }
    },
    tacContainer: {
        marginLeft: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        }
    },

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
                    <Card style={isSmall ? { backgroundColor: '#980628', width: '100%' } : { backgroundColor: '#980628', width: '100%' }}>
                        <Grid container sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} sm={isMobile ? 12 : 4} md={7.5} className={classes.gridItem}>
                                <CardContent sx={{ height: 'fit-content' }}>
                                    <h1 className={classes.title}>
                                        ¿Cómo participar?
                                    </h1>
                                    <div className={classes.subsectionContainer}>
                                        {isMobile && <span className={classes.numberCircle}>1</span>}
                                        <span className={classes.sectionTitle}>Reflexiona y comparte tus respuestas a las siguientes preguntas*:</span>
                                    </div>
                                    <ul className={classes.list}>
                                        <li className={classes.listItem}>¿Cuáles son los mayores retos a los que se enfrenta tu organización al integrar prácticas innovadoras de RRHH?</li>
                                        <li className={classes.listItem}>¿Cómo consideras que la IA puede generar un impacto significativo en tu organización o en el campo de los Recursos Humanos en general?</li>
                                        <li className={classes.listItem}>Comparte tu visión sobre el futuro de los Recursos Humanos, ¿hacia dónde crees que evolucionarán las prácticas actuales de wellbeing?</li>
                                    </ul>
                                    <div className={classes.subsectionContainer}>
                                        {isMobile && <span className={classes.numberCircle}>2</span>}
                                        <span className={classes.sectionTitle}>Envíanos tus respuestas, junto con tu currículum vitae al correo electrónico all@sagardoy.com con el asunto “Beca AON 2024” hasta el viernes, 31 de mayo de 2024.</span>
                                    </div>
                                    <div className={classes.tacContainer}>
                                        <span className={classes.listItem}>* Todos los textos deben estar en español. </span>
                                        <span className={classes.listItem}>*  Envíanos las respuestas a las preguntas planteadas en un (1) documento DIN A4 en formato PDF, de 300-500 palabras (obligatorio) o en formato video.</span>
                                    </div>
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
