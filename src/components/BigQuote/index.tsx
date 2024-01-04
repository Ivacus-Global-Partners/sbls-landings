import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme: Theme) => ({
    authorInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start',
            textAlign: 'left',
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
            textAlign: 'center',
        }
    },
    bigQuote: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        }
    },
    author: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            margin: 0
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    icon: {
        color: '#980628',
        fontSize: '22px',
        marginRight: '5px',
        marginBottom: '1px',
    },
    quote: {
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        fontStyle: 'italic',
        color: 'black',
        fontSize: '25px',
        width: '85%',
    },
    img: {
        width: '30vw',
        [theme.breakpoints.down('md')]: {
            width: '50vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30vw',
        },
        [theme.breakpoints.down('xs')]: {
            width: '60vw',
        },
    },
    job: {
        fontSize: '0.8em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        }
    },
    name: {
        fontSize: '1em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2em',
        }
    }
}));

const BigQuote = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div className={classes.bigQuote}>
            <div className={classes.author}>
                <img
                    className={classes.img}
                    src={!isMobile || isXS ? "https://i.ibb.co/mJrG67B/Sin-t-tulo-6.png" : "https://i.ibb.co/GFwr8kN/Iberdrola-short.png"}
                    alt="Irene Vivas"
                />
                <div className={classes.authorInfo}>
                    <p className={classes.name}><strong>Irene Vivas</strong></p>
                    <p className={classes.job}>Alumni de la Certificación Experto en Experiencia de Empleado<br /> Experiencia de Empleado en <strong>Iberdrola</strong></p>
                </div>
            </div>
            <p className={classes.quote}>
                <FontAwesomeIcon icon={faQuoteLeft} className={classes.icon} />
                Sin duda una experiencia de aprendizaje enriquecedora. Muy recomendable para todas aquellas personas que crean en la importancia del bienestar de los empleados como motor fundamental de cualquier empresa. Perfecto equilibrio teórico práctico, y muy alta preparación de los formadores. Las masterclasses aportan un valor adicional fundamental, y por supuesto la oportunidad de networking que todo ello supone. <FontAwesomeIcon icon={faQuoteRight} className={classes.icon} />
            </p>
        </div>
    )
}

export default BigQuote;
