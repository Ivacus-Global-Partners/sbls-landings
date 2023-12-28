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
        fontSize: '3em',
        margin: 0,
        marginBottom: '10px',
        fontWeight: '500',
        color: '#AA1936',
    },
}));

const ContactInfo = () => {
    const classes = useStyles();

    return (
        <div style={{ marginTop: '10%'}}>
              <h1 className={classes.title}><img src="https://i.ibb.co/k58Z8Jr/school-FILL0-wght400-GRAD0-opsz48-2x.png" style={{ width: '4%'}} alt="Icono" /> Descubre a parte del claustro</h1>
        </div>
    )
}

export default ContactInfo;
