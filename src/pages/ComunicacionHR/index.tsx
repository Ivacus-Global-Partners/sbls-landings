import React, { useEffect } from 'react';
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
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FPablo%20Gonzalo.png?alt=media&token=63fd84d8-e349-41e4-b117-310ac961df63',
      name: 'Pablo Gonzalo',
      job: 'Socio Estudio de Comunicación'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Farantxa.png?alt=media&token=c6663cc3-aeb3-4827-ac0a-26d5ac95c48d',
      name: 'Arantxa García',
      job: 'Global Culture, Engagement & DEI Director Danone'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FJavier_Chico.png?alt=media&token=9c913250-134c-42ab-ae9c-b76685cdfd74',
      name: 'Javier Chico',
      job: 'Director de Strategic Pitching Spain & Continental Europe CBRE'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FMarta%20Sempere.png?alt=media&token=4e580348-0558-44d2-b27f-cfba7feec43a',
      name: 'Marta Sempere',
      job: 'People & Culture Vice President Coca-Cola Europacific Partners'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FPedro%20Soto.png?alt=media&token=c7da0259-6bce-440c-a654-718653b4f44c',
      name: 'Pedro Soto',
      job: 'Director de Estudio Comunicación'
    },
  ]

  const texto = <>
    ¿Sabías que la comunicación eficaz promueve el compromiso con los equipos y las organizaciones? ¿Deseas fortalecer tus conocimientos y competencias de comunicación interna estratégica?
    <br /><br />
    Conoce cómo <strong>aplicar herramientas de comunicación estratégica para mejorar la cultura corporativa y los resultados del negocio.</strong> Y consigue que las Políticas de Recursos Humanos sean mejor comprendidas, valoradas y, por tanto, aplicadas por todos los profesionales de la organización.
  </>;

  return (
    <div>
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FHeader-comunicacion-hr.png?alt=media&token=120463d2-c37a-43c6-a328-ac1c792ba6ae"} href={href} download={download} />
      <InfoForm productId='0xa7cd6c' formId='0xba2874' href={href} download={download} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>Hacia una comunicación interna efectiva</p>}
        body={texto}
      />
      <BodyInfo2
        filled
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FPablo%20Gonzalo.png?alt=media&token=63fd84d8-e349-41e4-b117-310ac961df63"}
        name={"Pablo Gonzalo Molina"}
        job={<>
          Socio de Estudio de Comunicación <br />
          Director de programa ejecutivo HR: Comunicación Interna al servicio del Negocio</>}
        quote={"En estos tiempos en los que se extienden fenómenos como el de la “renuncia silenciosa” (“quiet quitting”), una certeza se consolida: para ser diferencialmente competitivas, las organizaciones precisan de profesionales comprometidos. Y el compromiso se construye, entre otros pilares, sobre una comunicación eficaz."}
      />
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
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer href={href} download={download} />
    </div>
  )
}

export default ComunicacionHR;