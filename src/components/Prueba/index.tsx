import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        columnGap: '30px',
        rowGap: '15px',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            textAlign: 'center',
        }
    },
    job: {
        fontWeight: 'bold',
        margin: 0,
    },
    info: {
        margin: 0,
        fontWeight: '400',
    },
    img: {
        borderRadius: '100%',
        height: '150px',
        zIndex: 10,
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    a: {
        textDecoration: 'none',
        color: 'black',
    },
    icon: {
        width: '40px',
        borderRadius: '100%',
        position: 'relative',
    },
    iconContainer: {
        display: 'flex',
        position: 'absolute',
        right: '-20px',
        bottom: '-5px',
    },
    imgContainer: {
        position: 'relative',
    },
    title: {
        fontFamily: 'times',
        fontStyle: 'italic',
        fontSize: '2.4em',
        margin: 0,
        marginBottom: '10px',
        fontWeight: '500',
        color: '#AA1936',
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
    },
}));

const ContactInfo = () => {
    const classes = useStyles();

    return (
        <div style={{ marginTop: '10%' }}>
            <h1 className={classes.title}>
                <img src="https://i.ibb.co/k58Z8Jr/school-FILL0-wght400-GRAD0-opsz48-2x.png" style={{ width: '4%' }} alt="Icono" />
                Hacia una comunicación interna efectiva
            </h1>
            <p>
                ¿Sabías que la comunicación eficaz promueve el compromiso con los equipos y las organizaciones? ¿Deseas fortalecer tus conocimientos y competencias de comunicación interna estratégica?
                <br /><br />
                Conoce cómo <strong>aplicar herramientas de comunicación estratégica para mejorar la cultura corporativa y los resultados del negocio.</strong> Y consigue que las Políticas de Recursos Humanos sean mejor comprendidas, valoradas y, por tanto, aplicadas por todos los profesionales de la organización. 
            </p>
        </div>
    )
}

export default ContactInfo;
