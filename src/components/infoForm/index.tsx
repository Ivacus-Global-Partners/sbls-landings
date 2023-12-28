import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import countries from '../../resources/data/countries';
import './style.css'

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        background: '#F2F2F2',
        borderRadius: '20px',
        boxSizing: 'border-box',
        padding: '3vh 2vw',
        margin: '10px 0',
        textAlign: 'center',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // width: '300px', //Posiblemente cambiar esto
        position: 'relative',
    },
    h3: {
        fontStyle: 'italic',
        margin: 0,
        padding: 0,
        fontFamily: 'times',
        color: '#AA1936',
        fontSize: '2vw',
        letterSpacing: '-0.8px',
        fontWeight: '100',
        textAlign: 'start',
        marginBottom: '10px',
        [theme.breakpoints.down(1280)]: {
            textAlign: 'center',
            fontSize: '4vw',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '6vw',
        }
    },
    p: {
        margin: 0,
        fontSize: '1vw',
        marginBottom: '20px',
        textAlign: 'start',
        [theme.breakpoints.down(1280)]: {
            textAlign: 'center',
            fontSize: '1.6vw',
        },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: '2vw',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3vw',
        },
    },
    input: {
        outline: 'none',
        display: 'block',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        fontFamily: 'times',
        fontSize: '1.5vw',
        fontStyle: 'italic',
        color: 'black',
        width: '100%',
        margin: '10px 0',
        [theme.breakpoints.down(1280)]: {
            fontSize: '2.5vw',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3vw',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '4vw',
        },
        '&::placeholder': {
            color: 'black'
        },
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '15px',
        fontFamily: 'times',
        fontStyle: 'italic',
        fontSize: '1vw',
        margin: '25px 0 20px 5px',
        width: '100%',
        textAlign: 'start',
        justifyContent: 'start',
        [theme.breakpoints.up('md')]: {
            maxWidth: '30vw',
        },
        [theme.breakpoints.down(1280)]: {
            justifyContent: 'center',
            fontSize: '1.5vw',
        },
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            maxWidth: '60vw',
            fontSize: '2.5vw',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            maxWidth: '100vw',
            fontSize: '3.3vw',
        },
    },
    a: {
        color: 'black',
    },
    button: {
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        padding: '2.5vh',
        margin: '0 auto',
        boxShadow: '0px 4px 8px #7e7777',
        cursor: 'pointer',
        fontSize: '1vw',
        [theme.breakpoints.down(1280)]: {
            fontSize: '1.5vw',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5vw',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2.5vh',
            fontSize: '3.3vw',
        },
    },
    img: {
        borderRadius: '100%',
        position: 'absolute',
        width: '5vw',
        top: '0',
        right: '0',
        filter: 'brightness(95%) contrast(89%)',
        [theme.breakpoints.down(1280)]: {
            width: '10vw',
        },
        [theme.breakpoints.down('md')]: {
            width: '14vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '18vw',
        }
    },
    icon: {
        borderRadius: '100%',
        position: 'absolute',
        width: '2.5vw',
        bottom: '-1vh',
        right: '0',
        [theme.breakpoints.down(1280)]: {
            width: '5.5vw',
        },
        [theme.breakpoints.down('md')]: {
            width: '6.5vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '8.5vw',
        }
    },
    checkboxText: {
        display: 'inline',
    },
    imgContainer: {
        position: 'absolute',
        top: '-2vw',
        right: 0,
        [theme.breakpoints.down('md')]: {
            top: '-5vw',
        },
    },
    imgSubContainer: {
        position: 'relative',
        height: '5vw',
        [theme.breakpoints.down(1280)]: {
            height: '10vw',
        },
        [theme.breakpoints.down('md')]: {
            height: '14vw',
        },
        [theme.breakpoints.down('sm')]: {
            height: '18vw',
        }
    },
    option: {
        color: 'gray',
        '&:hover': {
            background: '#e6e6e6'
        }
    }
}));

const InfoForm = ({ icon = false, phone = false, shadow = false, submit, drawer = false, title = false }:
    { icon?: boolean, phone?: boolean, shadow?: boolean, submit: string, drawer?: boolean, title?: boolean }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));
    const [enabledSubmit, setEnabledSubmit] = React.useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}
            style={{
                boxShadow: `${shadow ? '0px 4px 8px #7e7777' : undefined}`,
                background: `${drawer ? 'none' : undefined}`,
            }}>
            {title && (
                <h3 className={classes.h3}>Solicita información</h3>
            )}
            {phone && (
                <p className={classes.p}>Puedes llamarnos al +34 91 454 00 71</p>
            )}
            <div>
                <div>
                    <input required className={classes.input} placeholder='Nombre' style={{
                        display: `${drawer ? 'inline' : undefined}`,
                        width: `${drawer && !isMedium ? 'fit-content' : '100%'}`,
                        marginRight: `${drawer && !isMedium ? '30px' : '0'}`,
                        paddingLeft: `${drawer ? '0' : '10px'}`,
                        borderRadius: `${drawer ? '0' : '10px'}`,
                        borderBottom: `${drawer ? '2px solid #E6E6E6' : 'none'}`,
                        fontSize: `${drawer ? '1.4em' : undefined}`,
                    }} />
                    <input required className={classes.input} placeholder='Apellidos' style={{
                        display: `${drawer ? 'inline' : 'block'}`,
                        width: `${drawer && !isMedium ? 'fit-content' : '100%'}`,
                        paddingLeft: `${drawer ? '0' : '10px'}`,
                        borderRadius: `${drawer ? '0' : '10px'}`,
                        borderBottom: `${drawer ? '2px solid #E6E6E6' : 'none'}`,
                        fontSize: `${drawer ? '1.4em' : undefined}`,
                    }} />
                </div>
                <div>
                    {drawer && (
                        <input type="email" required className={classes.input} placeholder='Email*' style={{
                            display: 'inline',
                            width: `${isMedium ? '100%' : 'fit-content'}`,
                            marginRight: `${isMedium ? '0' : '30px'}`,
                            paddingLeft: '0',
                            borderRadius: '0',
                            borderBottom: '2px solid #E6E6E6',
                            fontSize: '1.4em',
                        }} />
                    )}
                    <input className={classes.input} type="number" placeholder={drawer ? "Número de teléfono" : "Teléfono"}
                        required={!drawer}
                        style={{
                            display: `${drawer ? 'inline' : 'block'}`,
                            width: `${drawer && !isMedium ? 'fit-content' : '100%'}`,
                            paddingLeft: `${drawer ? '0' : '10px'}`,
                            borderRadius: `${drawer ? '0' : '10px'}`,
                            borderBottom: `${drawer ? '2px solid #E6E6E6' : 'none'}`,
                            fontSize: `${drawer ? '1.4em' : undefined}`,
                        }} />
                </div>
                {!drawer && (
                    <input className={classes.input} type='email' placeholder='Email' style={{
                        paddingLeft: `${drawer ? '0' : '10px'}`,
                        borderRadius: `${drawer ? '0' : '10px'}`,
                        borderBottom: `${drawer ? '2px solid #E6E6E6' : 'none'}`,
                        fontSize: `${drawer ? '1.4em' : undefined}`,
                    }} />
                )}
                {!drawer && (
                    <>
                        <select defaultValue="ES" className={classes.input} style={{
                            paddingLeft: '0',
                            borderRadius: '0',
                            fontSize: '1.4em',
                            background: 'none',
                            border: 'none',
                            borderBottom: '2px solid #E6E6E6',
                        }}>
                            <option hidden className={classes.option}>País de residencia</option>
                            {countries.map((country: any, index: any) => (
                                <option className={classes.option} value={country.code}>{country.name} ({country.code})</option>
                            ))}
                        </select>           
                    </>
                )}
            </div>
            <label className={classes.checkbox}>
                <input type="checkbox" onClick={() => setEnabledSubmit((old) => !old)} />
                <div className={classes.checkboxText}>
                    Consiento el tratamiento de mis datos por IE y fundación IE (incluso cuando el mismo se realice fuera del EEE), para el envío de información.
                </div>
            </label>
            <button type="submit" className={classes.button} style={{
                background: `${enabledSubmit ? '#AA1935' : '#B3B3B3'}`,
                borderRadius: `${drawer ? '30px' : undefined}`,
                boxShadow: `${drawer ? 'unset' : undefined}`
            }} disabled = {!enabledSubmit}>{submit}</button>
            {icon && (
                <div className={classes.imgContainer}>
                    <div className={classes.imgSubContainer}>
                        <img className={classes.img} src="https://i.ibb.co/G5TBr1r/juanan.jpg" alt="infoForm" />
                        <img className={classes.icon} src="https://www.vectorico.com/wp-content/uploads/2018/02/Whatsapp-Icon-300x300.png" alt="whatsapp" />
                    </div>
                </div>
            )}
        </form>
    )
}

export default InfoForm;
