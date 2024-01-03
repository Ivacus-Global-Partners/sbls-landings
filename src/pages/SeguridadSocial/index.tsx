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

  const claustro = [
    {
      img: 'https://i.ibb.co/9GGkHhh/maria-foret-pastor.png',
      name: 'Maria Foret Pastor',
      job: 'Inspectora de Trabajo y Seguridad Social'
    },
    {
      img: 'https://i.ibb.co/2dgtvCG/jorge-travesedo.png',
      name: 'Jorge Travesedo Dasí',
      job: 'Socia en Sagardoy Abogados. Miembro del Cuerpo Superior de Inspectores de Trabajo y Seguridad Social.'
    },
  ]

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
      <ProgramObjetives objetives={{
        "Proporcionar": "a los profesionales, expertos en relaciones laborales y asesores jurídicos, un completo y actualizado conocimiento del marco jurídico regulador de la obligación de cotización a la seguridad social, y la problemática de los falsos autónomos y la cesión ilegal de trabajadores.",
        "Formar": "a los profesionales para el correcto cumplimiento de la normativa, con el objeto de prevenir y solventar incumplimientos normativos y evitar sanciones y liquidaciones, que menoscaben la imagen y reputación de la empresa y supongan pérdidas económicas para la compañía.",
        "Conocer": "las actualizaciones en las facultades de la Inspección de Trabajo y Seguridad Social y detectar y gestionar los riesgos del incumplimiento normativo aplicados a diversos casos prácticos."
      }} />
      <CardsClaustro claustro={claustro} />
      <Footer href={href} download={download} />
    </div>
  )
}

export default SeguridadSocial;