import React from 'react'
import Title from '../components/Title'
import BodyInfo from '../components/BodyInfo1';
import IconsInfo from '../components/IconsInfo';
import InfoForm from '../components/infoForm';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import ProgramObjetives from '../components/ProgramObjetives';
import Footer from '../components/Footer';
import Header from '../components/Header';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginTop: '-4%',
    display: 'grid',
    padding: '0 12% 0 8%',
    // padding: '0 18% 0 70%', //Aqui para mover el form
    gridTemplateColumns: '1fr 2.5fr',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '100%',
      marginTop: '4%',
    },
    columnGap: '7%',
    rowGap: '15px',
    alignItems: 'center',
  },
  text: {
    padding: '0 10%',
    fontSize: '20px',
  },
  img: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '5% 15%',
    [theme.breakpoints.down('md')]: {
      padding: '5%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      paddingTop: '5%',
    }
  }
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
        <Header/>
        <div className={classes.header}> 
          <InfoForm title shadow submit="Enviar" />
        </div>
        <BodyInfo />
        <br />
        <IconsInfo />
        <ProgramObjetives />
        <Footer />
    </div>
  )
}

export default Home;