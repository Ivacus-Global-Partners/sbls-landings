import { Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        padding: '60px',
        paddingBottom: '0px',
        alignItems: 'start',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '30px',
            paddingRight: '30px',
        }
    },
    image: {
        height: "7vh",
        marginRight: "10px",
        [theme.breakpoints.down('md')]: {
            height: '6vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '5.5vh',
        }
    },
    text: {
        margin: 0,
        fontFamily: 'times',
        fontStyle: 'italic',
        fontWeight: 'normal',
        fontSize: '2.4vw',
        paddingTop: '0vw',
    }
}));

interface TitleProps {
    text: string;
    id?: string;
    backgroundColor?: string;
}

const Title: FC<TitleProps> = ({ text, id }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={classes.container} id={id}>
            <img
                className={classes.image}
                src="https://i.ibb.co/sJfZ6hb/flecha-normal2.png"
                alt='Arrow-icon'
            />
            <Typography variant="h4" className={classes.text} style={{
                fontSize: `${isMobile ? '4.5vh' : isMedium ? '4.5vh' : '6vh'}`
            }}>{text}</Typography>
        </div>
    )
}

export default Title;
