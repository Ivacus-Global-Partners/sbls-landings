import React from 'react';
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import BodyInfo2 from '../../components/BodyInfo2';
import DownloadIcon from '@mui/icons-material/Download';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

const MarcaPersonal: React.FC = () => {

  const [searchParams] = useSearchParams()

  const href = 'https://sagardoyschool.com/archivos/marca-personal-y-comunicacion.pdf';
  const download = 'marca-personal-y-comunicacion.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMarcaPersonal%2Ffran-carrillo%402x.png?alt=media&token=9b28a6c0-e359-45bd-8d41-d26d9adb5091',
      name: 'Fran Carrillo',
      job: <>Director General de <strong>La Fábrica de Discursos,</strong> consultora de comunicación y asuntos públicos. Consultor político y asesor de comunicación política y empresarial. Ha sido Senador en las Cortes Generales y Diputado en el Parlamento de Andalucía.</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMarcaPersonal%2Fvictor-sanchez%402x.png?alt=media&token=4cd1fe15-093f-4c95-b801-7971da1174c4',
      name: 'Víctor Sánchez del Real',
      job: <>Fundador de <strong>Elocuent,</strong> consultora de comunicación. Periodista, Consultor, Profesor de comunicación. Ha sido diputado en el Congreso Español.</>
    },
]
   

  const texto = <>
    ¿Quieres gestionar tu talento y habilidades profesionales de manera diferente y diferenciadora, y convertir tus debilidades comunicativas en fortalezas auténticas? 
    <br /><br />
    En un entorno donde <strong>la reputación personal es un activo invaluable,</strong> los profesionales y directivos deben construir una <strong>marca personal sólida.</strong>  En este camino, dominar las <strong>técnicas de comunicación efectiva,</strong> en el día a día, ayuda a lograr que los mensajes causen el impacto deseado.
    <br /><br />
    Aprende a <strong>gestionar tu marca personal y domina las metodologías de comunicación efectiva</strong> y alcanza tus objetivos personales y profesionales.
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/marca-personal-y-comunicacion/';


  return (
    <div>
      <Helmet>
        <title>Marca personal y Comuniación</title>
        <meta name="title" content="Marca personal y Comunicación"/>
        <meta name="description" content="Descubre cómo potenciar tu marca personal y mejorar tu comunicación con estrategias efectivas y consejos prácticos. Aprende a destacar tus habilidades, valores y experiencia para construir una presencia auténtica y profesional en cualquier entorno."/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Marca personal,Estrategias de comunicación,Desarrollo profesional,Autenticidad en la marca,Networking efectivo,Presencia digital,Personal branding,Comunicación efectiva,Gestión de la reputación online,Construcción de identidad personal" />
      </Helmet>
  
    
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMarcaPersonal%2Fheaderlanding.png?alt=media&token=93a47500-67a2-4851-8422-0a61f44c41c0"} />
      <InfoForm productId='0xff1653' formId='0x10a1d3b' href={href} download={download}  redirect={redirect} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={
            <p style={{ color: 'black', margin: 0 }}>
              Hacia una marca personal <span style={{ color: '#980628' }}>diferencial</span>
            </p>
          }
    
        body={texto}
      />
      <BodyInfo2
        filled
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMarcaPersonal%2Ffran-carrillo%402x.png?alt=media&token=9b28a6c0-e359-45bd-8d41-d26d9adb5091"}
        name={"Fran Carrillo Guerrero"}
        job={<>
         Director del programa ejecutivo Marca Personal y Comunicación <br />
         Director General de La Fábrica de Discursos, consultora de comunicación y asuntos públicos.</>}
        quote={"El discurso es el principio y fin de toda estrategia personal y corporativa. Comunicar qué eres, qué representas y por qué estás ahí define a toda organización, compañía o marca. La diferencia entre el éxito y el fracaso en el mundo profesional reside en una máxima cada vez más presente en las organizaciones: si no te vendes, estás vendido."}
      />
      <IconsInfo dates={['Del 6 al 8 de junio']} duration={
        <>
         3 días 
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
        "Aprender": "herramientas de oratoria persuasiva para liderar y transformar equipos de manera efectiva.",
        "Incorporar": "habilidades y técnicas de comunicación efectiva para potenciar la marca personal de directivos y ejecutivos.",
        "Brindar": "sesiones de entrenamiento uno-a-uno y desarrollar estrategias personalizadas."
      }} />
      <CardsClaustro claustro={claustro} title="Conoce a nuestro claustro" />
      <Footer />
    </div>
  )
}

export default MarcaPersonal;