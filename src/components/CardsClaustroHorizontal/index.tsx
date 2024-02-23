import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { makeStyles } from '@mui/styles';
import { Container, Divider, Theme, useMediaQuery, useTheme } from '@mui/material';
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9em',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '1em',
        }
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
        marginTop: '5%',
        width: '90%',
        paddingTop: '0px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '25%',
            paddingTop: '10%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    cardContent: {
        height: 'auto',
        padding: '0 65px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        }
    },
    content: {
        height: 'auto',
        padding: '0 10%',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
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
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            top: '35%',
            left: '-5%',
            right: '0%',
            width: '20%',
            height: '50%',
        }
    },
    icon: {
        color: 'white',
        marginRight: '10px',
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={classes.cardContainer}>
            <Container>
                <h1 className={classes.title}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fschool_FILL0_wght400_GRAD0_opsz48.svg?alt=media&token=d2edfee9-3ab6-4924-9450-feb9a18f7812"
                        className={classes.icono}
                        alt="Icono" /> {title}</h1>
                <div className={classes.cardContent}>
                    {
                        claustro.map((member, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '10px' }}>
                                    <div className={classes.card}>
                                        {isMobile && (
                                            <img
                                                className={classes.slideimg}
                                                src={member.img}
                                                alt="Foto"
                                                style={{
                                                    position: 'absolute',
                                                    top: '-0%',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '30%',
                                                    height: '50%',
                                                }}
                                            />
                                        )}
                                        <div className={classes.content}>
                                            <p className={classes.name}>{member.name}</p>
                                            <p className={classes.job}>{member.job}</p>
                                            <p className={classes.job}>{member.job1}</p>
                                            {!isMobile && (
                                                <>
                                                    <Divider style={{ backgroundColor: 'white', marginTop: '10px' }} orientation='horizontal' />
                                                    <p className={classes.job}>{member.job2}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {!isMobile && !isMediumSize && (
                                        <img
                                            className={classes.slideimg}
                                            src={member.img}
                                            alt="Foto"
                                            style={{
                                                position: 'absolute',
                                                top: '35%',
                                                left: '-5%',
                                                right: '0%',
                                                width: '20%',
                                                height: '50%',
                                            }}
                                        />
                                    )}
                                    { isMediumSize && !isMobile &&(
                                        <img
                                            className={classes.slideimg}
                                            src={member.img}
                                            alt="Foto"
                                            style={{
                                                position: 'absolute',
                                                top: '35%',
                                                left: '-11%',
                                                right: '0%',
                                                width: '20%',
                                                height: '50%',
                                            }}
                                        />
                                    )}
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
