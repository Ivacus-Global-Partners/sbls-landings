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
  const href = 'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf';
  const download = 'hr-comunicacion-interna-sagardoy.pdf';
  return (
    <div>
      <Header image={"https://i.ibb.co/w7Ht6Sk/Header.png"} href={href} download={download} />
      <InfoForm href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={<p style={{ color: '#980628', margin: 0 }}>Hacia una comunicación interna efectiva</p>} />
      <BodyInfo2 />
      <IconsInfo dates={['8 abril, 2024', '27 mayo, 2024']} duration={
        <>
          8 semanas 1 sesión por<br />
          semana 17:00h a 20:00h
        </>
      }
        language={"Español"}
        place={
          <>
            C\Velázquez 86D<br />
            28006 | Madrid<br />
          </>
        }
        format={
          <>
            Presencial<br />
            & Remoto<br />
          </>
        }
      />
      <ProgramObjetives />
      <CardsClaustro />
      <Footer />
    </div>
  )
}

export default ComunicacionHR;