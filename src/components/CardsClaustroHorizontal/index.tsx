import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { makeStyles } from '@mui/styles';
import { Container, Divider, Theme } from '@mui/material';
import './style.css'

const useStyles = makeStyles((theme: Theme) => ({
    icono: {
        width: '4%',
        [theme.breakpoints.down('sm')]: {
            width: '6%',
        }
    },
    cardContainer: {
        padding: '65px 0',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '25px',
        }
    },
    name: {
        fontWeight: 'bold',
        fontSize: '1.4em',
        margin: '20px 0 8px',
        fontFamily: 'Nunito',
        color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2em',
        }
    },
    job: {
        textAlign: 'left',
        fontSize: '0.9em',
        color: 'white',
        fontWeight: 'normal',
        fontFamily: 'Nunito',
        margin: '8px 0 25px 0',
        marginBottom: '0px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1em',
        }
    },
    divider: {
        border: 'none',
        borderBottom: '1px solid black !important',
        width: '90%',
    },
    card: {
        background: '#980628',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'normal',
        height: '100%',
        borderRadius: '10px',
        padding: '15px 10px',
        boxSizing: 'border-box',
        marginTop: '5%'
    },
    cardContent: {
        height: 'auto',
        padding: '0 65px',
    },
    slidetext: {
        zIndex: 1,
        position: 'absolute',
        top: "60px",
        left: "30px",
        fontFamily: 'times',
        fontStyle: 'italic',
        width: '50%',
        fontSize: '1.5vw',
        fontWeight: 'normal',

        [theme.breakpoints.down('md')]: {
            fontSize: '3vw',
            width: '45%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4vw',
            width: '50%',
        }
    },
    slideimg: {
        width: 'auto',
        height: '25vh',
        transition: 'transform 0.3s ease-in-out',
        maxWidth: "100%",
        objectFit: "contain",
        '&:hover': {
            transform: 'scale(1.05)'
        },
        [theme.breakpoints.down('lg')]: {
            height: '10vh',
        },
        [theme.breakpoints.down('md')]: {
            height: '15vh',
        }
    },
    divclosed: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'rgba(170, 25, 54, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.2s ease-in-out',
        fontFamily: 'times',
        fontStyle: 'italic',
        fontSize: '1.7vw',
        color: 'white',
        opacity: 0,
        '&:hover': {
            opacity: 1,
        },

        [theme.breakpoints.down('md')]: {
            fontSize: '3vw',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4vw',
        }
    },
    icon: {
        color: 'white',
        marginRight: '10px',
    },
    span: {
        zIndex: 1,
        position: 'absolute',
        display: 'flex',
        padding: '7px',
        color: 'white',
        backgroundColor: '#aa1933',
        marginTop: '20px',
        '@media (max-width: 620px)': {
            padding: '5px',
            marginTop: '10px'
        }
    },
    label: {
        margin: 0,
        marginRight: '10px',
    },
    customButton: {
        color: 'red',
    },
    lastIcon: {
        position: 'absolute',
        zIndex: 1,
        bottom: '20px',
        left: '20px',
        width: '30%',
    },
    navigationDisabled: {
        opacity: 0,
    },
    navigation: {
        top: '16px',
        height: '100%',
        transition: 'right 0.2s ease, opacity 0.6s, left 0.2s ease',
    },
    title: {
        fontFamily: 'times',
        fontStyle: 'italic',
        fontSize: '3.2vw',
        margin: 0,
        marginBottom: '10px',
        fontWeight: '500',
        color: '#AA1936',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.6em',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '1.9em',
        },
    },

}));

const CardsClaustroHorizontal = ({ claustro, title }: { claustro: { name: string, img: string, job: any, job1: any, job2: any }[], title: string }) => {
    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            <Container>
                <h1 className={classes.title}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fschool_FILL0_wght400_GRAD0_opsz48.svg?alt=media&token=d2edfee9-3ab6-4924-9450-feb9a18f7812"
                        className={classes.icono}
                        alt="Icono" /> {title}</h1>
                <div className={classes.cardContent} style={{ marginTop: '3%' }}>
                    {
                        claustro
                            .map((member, index) => (
                                <div key={index}>
                                    <div className={classes.card}>
                                        <img className={classes.slideimg} src={member.img} alt="Foto" />
                                        <div className={classes.cardContent}>
                                            <p className={classes.name}>{member.name}</p>
                                            <p className={classes.job}>{member.job}</p>
                                            <p className={classes.job}>{member.job1}</p>
                                            <Divider style={{ backgroundColor: 'white', marginTop: '10px' }} orientation='horizontal' />
                                            <p className={classes.job}>{member.job2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>

            </Container>
        </div>
    )
}

export default CardsClaustroHorizontal;