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
  const claustro = [
    {
      img: 'https://i.ibb.co/jJb3G1p/Imagen.png',
      name: 'Pablo Gonzalo',
      job: 'Socio Estudio de Comunicación'
    },
    {
      img: 'https://i.ibb.co/bgRPkNh/arantxa.png',
      name: 'Arantxa García',
      job: 'Global Culture, Engagement & DEI Director Danone'
    },
    {
      img: 'https://i.ibb.co/6JqPBNX/Javier-Chico.png',
      name: 'Javier Chico',
      job: 'Director de Strategic Pitching Spain & Continental Europe CBRE'
    },
    {
      img: 'https://i.ibb.co/zXtC2K8/1572520280186.png',
      name: 'Marta Sempere',
      job: 'People & Culture Vice President Coca-Cola Europacific Partners'
    },
    {
      img: 'https://i.ibb.co/PW5T4kh/1568624230103.png',
      name: 'Pedro Soto',
      job: 'Director de Estudio Comunicación'
    },
  ]

  const texto = `
  Actualmente, muchas empresas enfrentan problemas legales y económicos debido al incumplimiento de las normativas laborales y de cotización a la Seguridad Social.

  ¿Lideras al equipo de relaciones laborales o Recursos Humanos de tu empresa? ¿Eres un profesional experto en relaciones laborales o asesor jurídico? Mantente actualizado en las normativas de cotización a la Seguridad Social y conoce al detalle las facultades de la Inspección de Trabajo y Seguridad Social (ITSS).

  Aplica la teoría en casos prácticos desarrollando y discutiendo con otros participantes, alegaciones o recurso de alzada a un acta de liquidación de cuotas a la seguridad social. Además, conoce cómo redactar e interponer un recurso contencioso administrativo o demanda ante la jurisdicción social impugnando una sanción o liquidación de la ITSS.
  `;

  return (
    <div>
      <Header image={"https://i.ibb.co/w7Ht6Sk/Header.png"} href={href} download={download} />
      <InfoForm href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={<p style={{ color: '#980628', margin: 0 }}>Hacia una comunicación interna efectiva</p>} body={texto} />
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
      <ProgramObjetives objetives={{
        "Fortalecer": "los conocimientos y competencia de los profesionales de RR.HH.en comunicación interna estratégica, incrementando con ello su impacto en todos los niveles de organización.",
        "Guiar": "a los profesionales de RR.HH. en la aplicación de herramientas de comunicación necesarias para lograr una mayor aportación al negocio y a la gestión de la cultura corporativa.",
        "Desarrollar": "casos prácticos en colaboración con profesionales de destacadas organizaciones para encontrar soluciones desde distintas perspectivas."
      }} />
      <CardsClaustro claustro={claustro} />
      <Footer href={href} download={download} />
    </div>
  )
}

export default ComunicacionHR;