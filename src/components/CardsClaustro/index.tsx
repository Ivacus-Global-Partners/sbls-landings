import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { makeStyles } from '@mui/styles';
import { Container, Divider, Theme } from '@mui/material';
import { Navigation } from 'swiper/modules';
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
        margin: '20px 0 8px',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2em',
        }
    },
    job: {
        textAlign: 'center',
        fontSize: '0.8em',
        margin: '8px 0 25px 0',
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
        background: '#F0F0F0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        borderRadius: '10px',
        padding: '15px 10px',
        boxSizing: 'border-box',
    },
    swiper: {
        height: 'auto',
        padding: '0 65px',
    },
    slide: {
        cursor: 'pointer',
        height: 'auto',
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
        height: '20vw',
        transition: 'right 0.2s ease, opacity 0.6s, left 0.2s ease',
    },
    title: {
        fontFamily: 'times',
        fontStyle: 'italic',
        fontSize: '3.4vw',
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

const CardsClaustro = ({ claustro }: { claustro: { name: string, img: string, job: any }[] }) => {
    const classes = useStyles();
    const [navigation, setNavigation] = React.useState(false);

    const mySwiperProps: SwiperProps = {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 20,
        navigation: {
            enabled: true,
            disabledClass: classes.navigationDisabled,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        modules: [Navigation],
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 1.4,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            960: {
                slidesPerView: 4.2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4.15,
                spaceBetween: 30,
            }
        }
    } as any;


    return (
        <div className={classes.cardContainer}>
            <Container>
                <h1 className={classes.title}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ficonos%2Fschool_FILL0_wght400_GRAD0_opsz48.svg?alt=media&token=d2edfee9-3ab6-4924-9450-feb9a18f7812" 
                    className={classes.icono} 
                    alt="Icono" /> Descubre a parte del claustro</h1>
                <div onMouseEnter={() => setNavigation(true)}
                    onMouseLeave={() => setNavigation(false)}>
                    <Swiper {...mySwiperProps} className={classes.swiper} style={{ marginTop: '3%' }}>
                        {
                            claustro
                                .map((member, index) => (
                                    <SwiperSlide className={classes.slide} key={index}>
                                        <div className={classes.card}>
                                            <img className={classes.slideimg} src={member.img} alt="Foto" />
                                            <p className={classes.name}>{member.name}</p>
                                            <Divider orientation='horizontal' className={classes.divider} />
                                            <p className={classes.job}>{member.job}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }
                        <div className={`swiper-button-next ${classes.navigation}`}
                            style={{ right: `${navigation ? '0' : '-100px'}` }}></div>
                        <div className={`swiper-button-prev ${classes.navigation}`}
                            style={{ left: `${navigation ? '0' : '-100px'}` }}></div>
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default CardsClaustro;