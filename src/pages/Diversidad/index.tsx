import React from 'react';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import BodyInfoDiversidad2 from '../../components/BodyInfoDiversidad2';
import DownloadIcon from '@mui/icons-material/Download';
import { Helmet } from 'react-helmet';
import BodyInfoDiversidad from '../../components/BodyInfoDiversidad';

const Diversidad: React.FC = () => {

  const href = 'https://sagardoyschool.com/thank-you/programa-el-poder-de-la-diversidad';
  const download = 'el-poder-de-la-diversidad.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2FMarina-Tirado_OK%402x.png?alt=media&token=0134da0c-92e2-4c96-af3f-688338657bf1',
      name: 'Marina Tirado',
      job: <>Consultora de Learning & Development (L&D) Consultora de Estrategia Educativa en la UFV. Associate professor en IE University</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2FHelmar%20V2%402x.png?alt=media&token=0e1eeffe-2222-4c62-876c-261fb2a6c993',
      name: 'Helmar Rodríguez',
      job: <>Consultor en desarrollo del potencial organizacional - sistémico y humano. Fundador de Marpas Hills, The Innate Human School , Clearness y Innate CQ</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2Fpabloors.png?alt=media&token=ff194a45-a5b2-4985-a00a-6b7d9c1cc274',
      name: 'Pablo Dórs',
      job: <>Sacerdote, escritor y conferencista internacional. Fundador de la red de meditadores Amigos del Desierto.</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2Fgonzalo-rodriguez.png?alt=media&token=35ae0ca3-ccbd-4252-a887-8e4b1084d2c9',
      name: 'Gonzalo Rodríguez-Fraile',
      job: <>Mentor, facilitador y presidente de la Fundación Desarrollo de la Consciencia. MBA por Harvard Business School</>
    },
   
  ]

  const texto = <>
    En un entorno social y empresarial en constante evolución, es fundamental que como líderes <strong>evaluemos nuestro enfoque hacia la Diversidad, Equidad, Inclusión y Accesibilidad (DEI&A).</strong>
    <br /><br />
    La DEI&A no solo enriquece nuestro <strong>ambiente laboral,</strong> sino que también permite fortalecer las marcas en el mercado global. En lugar de un enfoque de diversidad basado en números, es crucial asegurar la coherencia entre los objetivos y las estructuras. 
    <br /><br />
    Conoce las herramientas para diseñar una hoja de ruta que te permita liderar este cambio en tu organización.
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/programa-el-poder-de-la-diversidad/';

  return (
    <div>
   <Helmet>
    <title>Executive Program: El poder de la diversidad</title>
    <meta name="title" content="Executive Program: El poder de la diversidad" />
    <meta name="description" content="Descubre cómo la diversidad enriquece el entorno corporativo, impulsa la innovación y crea una ventaja competitiva sostenible en nuestro Executive Program." />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="diversidad, inclusión, liderazgo inclusivo, innovación, ventaja competitiva, transformación empresarial" />
</Helmet>


      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2FDiversidadHeader.png?alt=media&token=33f0409d-b5be-44c3-bb38-d4fe46016500"} />
      <InfoForm productId='0xe88cb8' formId='0x111275e' href={href} download={download} redirect={redirect} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
     <BodyInfoDiversidad
        title={<p style={{ color: '#980628', margin: 0 }}>¿Quieres ser parte del cambio en tu organización?</p>}
        body={texto}
      />
      <BodyInfoDiversidad2 
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingDiversidad%2FMarina-Tirado_OK%402x.png?alt=media&token=0134da0c-92e2-4c96-af3f-688338657bf1"}
        name={"Marina Tirado"}
        job={<>
           Consultora de Learning & Development (L&D) y <br />
           Directora del programa ejecutivo El poder de la Diversidad</>}
        quote={"“Promover y mantener una cultura corporativa de bienestar, diversidad e inclusión es crítico para mantener la sostenibilidad, crecimiento y la viabilidad de la compañía a corto y largo plazo”"}
      />
    
      <IconsInfo dates={['Del 8 al 31', 'de octubre']} duration={
        <>
          Martes y Jueves, de<br />
          9:00h a 12:30h
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
            Presencial o Virtual<br />
            ¡Tú eliges!<br />
          </>
        }
      />
      <ProgramObjetives objetives={{
        "Construir": "la hoja de ruta para diseñar una cultura que atrae y retiene el talento.",
        "Aprender": "a facilitar un entorno de trabajo inclusivo en el que se valoran y adoptan diversas culturas, talentos y formas de pensar y aumenta el nivel de motivación y compromiso.",
        "Comprender": "los procesos perceptivos, institucionales y psicológicos que afectan a la forma en que las personas colaboran e interactúan entre sí."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer />
    </div>
  )
}

export default Diversidad;