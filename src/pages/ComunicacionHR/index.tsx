import React from 'react'
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import BodyInfo2 from '../../components/BodyInfo2';
import DownloadIcon from '@mui/icons-material/Download';

const ComunicacionHR: React.FC = () => {
  return (
    <div>
      <Header image={"https://i.ibb.co/w7Ht6Sk/Header.png"} href={'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf'} download={'hr-comunicacion-interna-sagardoy.pdf'} />
      <InfoForm title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo />
      <BodyInfo2 />
      <IconsInfo />
      <ProgramObjetives />
      <CardsClaustro />
      <Footer />
    </div>
  )
}

export default ComunicacionHR;