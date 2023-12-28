import React from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { makeStyles } from '@mui/styles';
import { Container, Theme } from '@mui/material';
import { Navigation } from 'swiper/modules';
import './style.css'
import programs from '../../resources/data/program';


const useStyles = makeStyles((theme: Theme) => ({
    swiper: {
        height: 'auto',
        padding: '0 65px',
    },
    slide: {
        cursor: 'pointer',
        height: '20vw',

        [theme.breakpoints.down('md')]: {
            height: '40vw',
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vw',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '60vw',
        }
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
        width: '100%',
        height: '100%',

        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)'
        },

        [theme.breakpoints.down('md')]: {
            objectPosition: 'center',
        },
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
    }
}));

const CardsClaustro = ({ type }: { type: string }) => {
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
                spaceBetween: 60,
            },
            960: {
                slidesPerView: 4.2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4.15,
                spaceBetween: 65,
            }
        }
    } as any;


    return (
        <div style={{ padding: '65px 0' }}>
            <Container>
                <div onMouseEnter={() => setNavigation(true)}
                    onMouseLeave={() => setNavigation(false)} >
                    <Swiper {...mySwiperProps} className={classes.swiper} style={{ width: '100%', height: '100%' }}>
                        {
                            programs
                                .filter((slide: { type: string; }) => slide.type === type || type === 'all')
                                .map((slide: { last: any; href: string | undefined; }, index: number) => (
                                    <SwiperSlide className={classes.slide}>
                                        <>
                                            {slide.last && (
                                                <img
                                                    src="https://i.ibb.co/2gmSSyy/ultimas-plazas.png"
                                                    alt="Last Icon"
                                                    className={classes.lastIcon}
                                                />
                                            )}
                                            <img className={classes.slideimg} style={{ borderRadius: '15px' }} src={slide.href} alt="Slkside"></img>
                                        </>
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