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

<<<<<<< HEAD
const ComunicacionHR: React.FC = () => {

  const [searchParams] = useSearchParams()

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
   
  ]

  const texto = <>
    ¿Sabías que la comunicación eficaz promueve el compromiso con los equipos y las organizaciones? ¿Deseas fortalecer tus conocimientos y competencias de comunicación interna estratégica?
    <br /><br />
    Conoce cómo <strong>aplicar herramientas de comunicación estratégica para mejorar la cultura corporativa y los resultados del negocio.</strong> Y consigue que las Políticas de Recursos Humanos sean mejor comprendidas, valoradas y, por tanto, aplicadas por todos los profesionales de la organización.
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/hr-comunicacion-interna-del-negocio/';

  const utmOriginParam = searchParams.get('utm_origin');
  const formId = utmOriginParam === 'estudio-de-comunicacion' ? '0xe91cd0' : '0xba2874';
=======
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

>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863

  return (
    <div>
      <Helmet>
<<<<<<< HEAD
        <title>HR: Comunicación Interna al servicio del Negocio</title>
        <meta name="title" content="HR: Comunicación Interna al servicio del Negocio"/>
        <meta name="description" content="Descubre cómo la comunicación interna puede potenciar tu negocio. En Sagardoy, ofrecemos soluciones de comunicación interna para mejorar la eficiencia y el rendimiento de tu empresa. ¡Conoce nuestras propuestas hoy!"/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="comunicación interna, negocios, eficiencia empresarial, soluciones de comunicación" />
      </Helmet>
  
    
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FHeader-comunicacion-hr.png?alt=media&token=120463d2-c37a-43c6-a328-ac1c792ba6ae"} />
      <InfoForm productId='0xa7cd6c' formId={formId} href={href} download={download}  redirect={redirect} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
=======
        <title>Marca personal y Comuniación</title>
        <meta name="title" content="Marca personal y Comunicación"/>
        <meta name="description" content="Descubre cómo potenciar tu marca personal y mejorar tu comunicación con estrategias efectivas y consejos prácticos. Aprende a destacar tus habilidades, valores y experiencia para construir una presencia auténtica y profesional en cualquier entorno."/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Marca personal,Estrategias de comunicación,Desarrollo profesional,Autenticidad en la marca,Networking efectivo,Presencia digital,Personal branding,Comunicación efectiva,Gestión de la reputación online,Construcción de identidad personal" />
      </Helmet>
  
    
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FMarcaPersonal%2Fheaderlanding.png?alt=media&token=93a47500-67a2-4851-8422-0a61f44c41c0"} />
      <InfoForm productId='0xff1653' formId='0x10a1d3b' href={href} download={download}  redirect={redirect} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
<<<<<<< HEAD
      <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>Hacia una marca personal diferencial</p>}
=======
      <BodyInfo title={
            <p style={{ color: 'black', margin: 0 }}>
              Hacia una marca personal <span style={{ color: '#980628' }}>diferencial</span>
            </p>
          }
    
>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863
        body={texto}
      />
      <BodyInfo2
        filled
<<<<<<< HEAD
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FPablo%20Gonzalo.png?alt=media&token=63fd84d8-e349-41e4-b117-310ac961df63"}
        name={"Pablo Gonzalo Molina"}
        job={<>
          Socio de Estudio de Comunicación <br />
          Director de programa ejecutivo HR: Comunicación Interna al servicio del Negocio</>}
        quote={"En estos tiempos en los que se extienden fenómenos como el de la “renuncia silenciosa” (“quiet quitting”), una certeza se consolida: para ser diferencialmente competitivas, las organizaciones precisan de profesionales comprometidos. Y el compromiso se construye, entre otros pilares, sobre una comunicación eficaz."}
      />
      <IconsInfo dates={['Del 8 abril', ' al 27 mayo']} duration={
        <>
          8 semanas 1 sesión por<br />
          semana 17:00h a 20:00h
=======
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
>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863
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
<<<<<<< HEAD
        "Fortalecer": "los conocimientos y competencia de los profesionales de RR.HH.en comunicación interna estratégica, incrementando con ello su impacto en todos los niveles de organización.",
        "Guiar": "a los profesionales de RR.HH. en la aplicación de herramientas de comunicación necesarias para lograr una mayor aportación al negocio y a la gestión de la cultura corporativa.",
        "Desarrollar": "casos prácticos en colaboración con profesionales de destacadas organizaciones para encontrar soluciones desde distintas perspectivas."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
=======
        "Aprender": "herramientas de oratoria persuasiva para liderar y transformar equipos de manera efectiva.",
        "Incorporar": "habilidades y técnicas de comunicación efectiva para potenciar la marca personal de directivos y ejecutivos.",
        "Brindar": "sesiones de entrenamiento uno-a-uno y desarrollar estrategias personalizadas."
      }} />
      <CardsClaustro claustro={claustro} title="Conoce a nuestro claustro" />
>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default ComunicacionHR;
=======
export default MarcaPersonal;
>>>>>>> 6217d873201ff7f67829d1a4d8d93f4aee22c863
