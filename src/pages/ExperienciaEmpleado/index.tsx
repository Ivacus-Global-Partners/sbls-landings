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
import BigQuote from '../../components/BigQuote';
import { Helmet } from 'react-helmet';
import { useMediaQuery, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const ExperienciaEmpleado: React.FC = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const href = 'https://sagardoyschool.com/archivos/certificaci%C3%B3n-experto-experiencia-de-empleado.pdf';
  const download = 'certificación-experto-experiencia-de-empleado.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fjose-luis%402x.png?alt=media&token=437cd7d5-04d5-4b98-ae32-a52608194ce1',
      name: 'José Luis Pascual',
      job: <>Socio director de Experiencia de Empleado en <strong>Lukkap</strong> y Director académico de la Certificación en Experiencia Empleado</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fcarmen-arroyal%402x.png?alt=media&token=abbe50ba-9cad-49c7-ae37-a2fb5df0f171',
      name: 'Carmen Arroyal',
      job: <>Head of Employee Experience en <strong>Grupo Santalucía</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FAlberto%20Serrano.png?alt=media&token=8c327502-4bb3-4a3f-901f-670bc11ce047',
      name: 'Alberto Serrano',
      job: <>Director de Organización y Personas en <strong>COFARES</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FEsther%20Burges%20Plasencia.png?alt=media&token=a5744ff2-dff2-4071-a3bc-82816e473ad7',
      name: 'Esther Burges',
      job: <>Responsable de Cultura y Experiencia de Empleado en <strong>Ibercaja</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FAntonio%20Pajuelo.png?alt=media&token=4dd8cd98-6940-402b-afc0-7ec36566b20d',
      name: 'Antonio Pajuelo',
      job: <>Director de Talento y Experiencia de Empleado en <strong>Mahou San Miguel</strong></>
    },
  ]

  const texto = <>
    ¿Sabías que el impacto emocional negativo en los trabajadores representa un aumento del 17% más de bajas laborales? trabajar en la <strong>#ExperienciadeEmpleado</strong> es imprescindible para revertir estos datos. Cambia tu modelo de relación con el empleado por uno basado en la experiencia con nuestra Certificación Experto en Experiencia de Empleado.
  </>;

  return (
    <div>

      <Helmet>
        <title>Certificación Experto Experiencia de Empleado</title>
        <meta name="title" content="Certificación Experto Experiencia de Empleado" />
        <meta name="description" content="Descubre cómo obtener la certificación de Experto en Experiencia de Empleado. Mejora tus habilidades y conocimientos en la creación de experiencias positivas para empleados. ¡Conviértete en un profesional destacado en el ámbito de la Experiencia de Empleado!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="certificación, experiencia de empleado, habilidades profesionales, desarrollo profesional" />
      </Helmet>

      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fheader%20certificacion%20experto.png?alt=media&token=d3033539-45af-4645-a3e9-af4fa0ee588d"} />
      <InfoForm formId='0xba28a4' productId='0x598f38' href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>Hacia un modelo transformador</p>}
        body={texto}
      />
      <div style={isMobile ? { backgroundColor: '#980628' } : {}}>
        <BodyInfo2
          filled
          logoAlt="Lukkap"
          logo="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Flukkap-logo.png?alt=media&token=e675185b-7232-4838-9daa-743e6611b2be"
          img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FJose%20Luis%20Pascual.png?alt=media&token=118eae81-1787-4b69-8bb1-7be813834960"}
          name={"José Luis Pascual "}
          job={<>
            Director de la Certificación Experto en Experiencia de Empleado <br />
            Socio Director de Experiencia Empleado en <strong>Lukkap</strong>
          </>}
          quote={"La gestión de personas está evolucionando hacía la gestión de la experiencia. El empleado ha adquirido un papel protagonista en la relación profesional y ahora se empiezan a tener en cuenta sus necesidades para construir soluciones de gestión que tengan más impacto en su compromiso y, con ello, un retorno mayor en su rendimiento."}
        />
      </div>
      <IconsInfo dates={['Del 21 febrero', 'al 26 junio']} duration={
        <>
          5 meses<br />
          Miércoles de 17:00h a 20:00h
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
        "Profesionalizar": "la función de la experiencia de empleado como modelo de transformación, desde y para las personas.",
        "Capacitar": "a los profesionales del área de RR.HH. para que puedan asentar las bases del diseño y desarrollo de un modelo de gestión centrado en la experiencia de los empleados.",
        "Adquirir": "los conocimientos de un modelo que impacta, directamente, sobre la experiencia de cliente y los resultados de las organizaciones."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <BigQuote />
      <Footer />
    </div>
  )
}

export default ExperienciaEmpleado;