import React from 'react';
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo2 from '../../components/Iconsinfo2';
import InfoForm2 from '../../components/infoForm2';
import Header2 from '../../components/Header2';
import DownloadIcon from '@mui/icons-material/Download';
import { Helmet } from 'react-helmet';
import Footer2 from '../../components/Footer2';

const DigitalizacionyCompetencias: React.FC = () => {

  const href = 'https://sagardoyschool.com/archivos/Agenda_jornadas_de_empleo_18_04_2024.pdf';
  const download = 'Agenda_jornadas_de_empleo_18_04_2024.pdf';
 

  const texto = <>
    En el marco de trabajo de la nueva Estrategia Madrid por el empleo, con el objetivo de conocer de mano de profesionales y expertos, la realidad actual del mercado laboral organizamos estas jornadas sobre Empleo y Mercado de Trabajo en las que reflexionaremos sobre los temas de máxima actualidad.  
    <br /><br />
    La primera jornada tendrá lugar el próximo 18 de abril,<strong> “La Digitalización y las Competencias clave en el nuevo mercado de trabajo”,</strong> en horario de 9:30 a 12:00.  
    <br /><br />
    Este encuentro será una oportunidad para conectar con profesionales y expertos que debatirán y expondrán sus puntos de vista sobre uno de los grandes retos actuales del mercado laboral, centrado en identificar las oportunidades y estrategias para integrar con éxito la tecnología e impulsar la adaptación y el desarrollo del talento, en busca de iniciativas innovadoras y desarrollo de proyectos en este ámbito.
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/digitalizacion-y-competencias/';

  return (
    <div>
       <Helmet>
    <title>La Digitalización y las Competencias clave en el nuevo mercado de trabajo</title>
    <meta name="title" content="La Digitalización y las Competencias clave en el nuevo mercado de trabajo" />
    <meta name="description" content="La digitalización está redefiniendo las competencias clave en el mercado laboral, impulsando la necesidad de nuevas habilidades y enfoques en todos los sectores industriales." />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="digitalización, competencias clave, mercado de trabajo, habilidades" />
  </Helmet>

      <Header2 image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fmailings%2FComunidadDeMadrid%2FLandingHeadermadrid.png?alt=media&token=35a7f934-1ea1-43fa-ae8a-fd1c40d23165"} />
      <InfoForm2 productId=' 0x110a4d1' formId='0x110a367' href={href} download={download} redirect={redirect} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Aceptar
        </>
      } />
     <BodyInfo
        
        body={texto}
      />
     
      <IconsInfo2 dates={['Jueves 18 de abril']} duration={
        <>
          9:30h - 12:00h
        </>
      }
        
        place={
            <>
              C\Velázquez 86D<br />
              28006 | Madrid<br />
            </>
          }
        format={
          <>
            Presencial &<br />
             remoto
            
          </>
        }
      />
      
      
      <Footer2 />
    </div>
  )
}

export default DigitalizacionyCompetencias;