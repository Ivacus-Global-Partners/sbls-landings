import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  icono: {
    marginTop: '2%',
    marginRight: '1%',
    width: '3%',
    [theme.breakpoints.down('md')]: {
      width: '3.5%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '5%',
      marginRight: 0,
    },
    [theme.breakpoints.up(539)]: {
      width: '4%',
      marginTop: '1%',
    }
  },
  container: {
    justifyContent: 'center',
    padding: '25px 35vw 25px 5%',
    alignItems: 'center',
    [theme.breakpoints.down(850)]: {
      paddingRight: '5%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingLeft: '2',
      paddingRight: '2',
    },
  },

  paragraphContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'center', // Centrado vertical
    textAlign: 'center', // Alineación del texto
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    },
  },
  

  title: {
    display: 'flex',
    alignItems: 'start',
    fontFamily: 'times',
    fontStyle: 'italic',
    fontSize: '3.2vw',
    margin: 0,
    textAlign: 'left',
    fontWeight: '300',
    color: '#AA1936',
    marginBottom: '5%',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      fontWeight: '200',
      fontSize: '2.6em',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '1.9em',
    },
  },

  paragraph: {
    textAlign: 'left',
    width: '100%',
    fontFamily: "'Nunito', sans- serif",
    fontStyle: 'regular',
    fontSize: '18px',
    marginBottom: '20%',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: '0',
    }
  },
}));

const BodyInfoBecaAon = ({ title, body }: { title?: any, body: any },) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        {title && <h1 className={classes.title}>
          {title}
        </h1>}
      </div>
      <div className={classes.paragraphContainer}>
        <p className={classes.paragraph}>
          {body}
        </p>
      </div>
    </div>
  );
};

export default BodyInfoBecaAon;