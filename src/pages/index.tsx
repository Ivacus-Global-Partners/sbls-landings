import React from 'react'
import Title from '../components/Title'
import BodyInfo from '../components/BodyInfo1';
import IconsInfo from '../components/IconsInfo';

const Home = () => {
  return (
    <div>
        <Title text='Esto es una prueba' />
        <BodyInfo />
        <br />
        <IconsInfo />
    </div>
  )
}

export default Home;