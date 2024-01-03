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

const SeguridadSocial: React.FC = () => {
  const href = 'https://sagardoyschool.com/archivos/actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'
  const download = 'actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'
  return (
    <div>
      <Header image={"https://i.ibb.co/ZLGGKk9/header-seguridad-social.png"} href={href} download={download} />
      <InfoForm href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={
        <p style={{ color: 'black', margin: 0 }}>
          Actualízate con expertos en <span style={{ color: '#980628' }}>material laboral</span>
        </p>
      } />
      <BodyInfo2 />
      <IconsInfo dates={['15 febrero, 2024', '21 marzo, 2024']} duration={
        <>
          6 sesiones 1 sesión por<br />
          semana de 9:00 a 12:00h
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
            & Virtual<br />
          </>
        }
      />
      <ProgramObjetives />
      <CardsClaustro />
      <Footer />
    </div>
  )
}

export default SeguridadSocial;