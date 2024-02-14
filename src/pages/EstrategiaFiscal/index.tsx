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
import { useMediaQuery, useTheme } from '@mui/material';

const EstrategiaFiscal: React.FC = () => {

  const href = 'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf';
  const download = 'hr-comunicacion-interna-sagardoy.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-javier-seijo%402x.png?alt=media&token=5e9ed93c-6882-4f6b-b0b8-30e7dfde293b',
      name: 'Javier Seijo',
      job: <>
        Codirector del programa Socio Responsable de Tributación de Empresas, Private Tax y de la práctica de Real Estate en <strong>EY España</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-pablo-sanz-vf%402x.png?alt=media&token=b578e640-461b-4c05-8a7e-61f268838c39',
      name: 'Pablo Sanz',
      job: <>
        Codirector del programa Socio Responsable de la Zona Norte en <strong>EY España</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Flara%402x.png?alt=media&token=3822e7b2-14cd-4aca-9554-950275727568',
      name: 'Lara Vettorazzi',
      job: <>
        Socia de Corporate M&A <strong>EY Abogados</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-nuria-redondo%402x.png?alt=media&token=6d9607d7-5fbf-4fe6-a67e-c48429086426',
      name: 'Nuria Redondo',
      job: 'Tax Partner at EY Abogados'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-pablo-ulecia%402x.png?alt=media&token=e394ffdd-5f8b-4b23-a5df-0905d1341adc',
      name: 'Pablo Ulecia',
      job: 'EY EMEIA Banking and Capital Markets Tax & Law Leader'
    },
  ]

  const texto = <>
    En un entorno económico cambiante, la necesidad de conocer, anticipar y gestionar los efectos de la normativa fiscal se convierte más que en una necesidad, en una urgencia.
    <br /><br />
    Conoce los <strong>aspectos fiscales más relevantes con un enfoque práctico y atendiendo a las especificidades de los distintos sectores</strong> en la actividad empresarial. No pierdas la oportunidad de aprender a diseñar estrategias que te permitan planificar y <strong>optimizar los recursos financieros en las organizaciones.</strong>
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/hr-comunicacion-interna-del-negocio/';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Helmet>
        <title>Programa Ejecutivo en Estrategia Fiscal y Sectorial</title>
        <meta name="title" content="Programa Ejecutivo en Estrategia Fiscal y Sectorial" />
        <meta name="description" content="Conoce los aspectos fiscales más relevantes con un enfoque práctico y atendiendo a las especificidades de los distintos sectores en la actividad empresarial." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="estrategia fiscal, estrategia sectorial, programa ejecutivo, normativa fiscal, actividad empresarial" />
      </Helmet>


      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Ffiscalidad%2Fheaderfiscalidad.png?alt=media&token=2c62c078-cd73-44ab-adeb-f4793c804d29"} />
      <InfoForm productId='0xa7cd6c' formId='0xba2874' href={href} download={download} redirect={redirect} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>Hacia una planificación fiscal avanzada</p>}
        body={texto}
      />
      <BodyInfo2
        filled
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-javier-seijo%402x.png?alt=media&token=5e9ed93c-6882-4f6b-b0b8-30e7dfde293b"}
        name={"Javier Seijo"}
        job={<>
          Codirector del programa <br />
          Socio Responsable de Tributación de Empresas, Private Tax y de la práctica de Real Estate en <strong>EY España</strong></>}
        img2={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fey-pablo-sanz-vf%402x.png?alt=media&token=b578e640-461b-4c05-8a7e-61f268838c39"}
        name2={"Pablo Sanz"}
        job2={<>
          Codirector del programa <br />
          Socio Responsable de la Zona Norte en <strong>EY España</strong></>}
        quote={"Sin ninguna duda, uno de los mayores retos a los que nos enfrentamos las empresas, los profesionales y los ciudadanos en general, es dar cumplimiento al mandato del Código Civil de que el desconocimiento de las leyes no excusa de su cumplimiento."}
      />
      {!isMobile && <>
        <br />
        <br />
        <br />
        <br />
      </>}
      <IconsInfo dates={['Del 24 septiembre', ' al 28 noviembre']} duration={
        <>
          2 meses / Martes y Jueves<br />
          de 9:00h a 12:00h
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
            y Virtual<br />
          </>
        }
      />
      <ProgramObjetives objetives={{
        "Profundizar": "en los aspectos clave de la planificación fiscal y la comprensión de los diferentes sectores de la economía.",
        "Diseñar": "estrategias fiscales avanzadas, así como planificar y optimizar los recursos financieros de las organizaciones.",
        "Brindar": "herramientas y conocimientos para hacer frente a los efectos que la normativa tributaria genera en los grupos empresariales, sus propietarios y los ciudadanos en general."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer />
    </div>
  )
}

export default EstrategiaFiscal;