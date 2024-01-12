import React from 'react'
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import DownloadIcon from '@mui/icons-material/Download';
import PorqueSagardoy from '../../components/PorqueSagardoy';
import { Helmet } from 'react-helmet';


const SeguridadSocial: React.FC = () => {
  const href = 'https://sagardoyschool.com/archivos/actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'
  const download = 'actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'

  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FMaria%20Foret%20Pastor2.png?alt=media&token=52aa71ec-6a2a-43ef-88dd-e4d8a193422e',
      name: 'Maria Foret Pastor',
      job: 'Inspectora de Trabajo y Seguridad Social'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FJorge%20Travesedo%20Das%C3%AD.png?alt=media&token=21e6201f-7595-4aba-9c09-5fb8b02d40cb',
      name: 'Jorge Travesedo Dasí',
      job: 'Socio en Sagardoy Abogados. Miembro del Cuerpo Superior de Inspectores de Trabajo y Seguridad Social.'
    },
  ]


  const textoBody = <>Actualmente, muchas empresas enfrentan problemas legales y económicos debido al incumplimiento de las normativas laborales y de cotización a la Seguridad Social.<br /><br />
    ¿Lideras al equipo de relaciones laborales o Recursos Humanos de tu empresa? ¿Eres un profesional experto en relaciones laborales o asesor jurídico? <strong>Mantente actualizado en las normativas de cotización a la Seguridad Social y conoce al detalle las facultades de la Inspección de Trabajo y Seguridad Social (ITSS).</strong><br /><br />
    Aplica la teoría en casos prácticos desarrollando y discutiendo con otros participantes, alegaciones o recurso de alzada a un acta de liquidación de cuotas a la Seguridad Social. Además, conoce cómo redactar e interponer un recurso contencioso administrativo o demanda ante la jurisdicción social impugnando una sanción o liquidación de la ITSS.
  </>

  return (
    <div>
      <Helmet>
        <title>HR: Comunicación Interna al servicio del Negocio</title>
        <meta name="title" content="Este es un test" />
        <meta name="description" content="La mejor tienda de ropa online para comprar moda para mujeres, hombres y niños. Encontrarás
        una amplia selección de ropa de las mejores marcas a precios competitivos."/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ropa, moda, tienda online, mujeres, hombres, niños, marcas, precios" />
      </Helmet>
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fheader%20seguridad%20social.png?alt=media&token=4ec2e4ea-95b3-487a-8d14-e9f723f650f6"} href={href} download={download} />
      <InfoForm formId='0xba2890' productId='0xa7ebd6' href={href} download={download} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={
        <p style={{ color: 'black', margin: 0 }}>
          Actualízate con expertos en <span style={{ color: '#980628' }}>material laboral</span>
        </p>
      }

        body={textoBody}

      />
      <PorqueSagardoy />
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
        "Proporcionar": "a los profesionales, expertos en relaciones laborales y asesores jurídicos, un completo y actualizado conocimiento del marco jurídico regulador de la obligación de cotización a la Seguridad Social, y la problemática de los falsos autónomos y la cesión ilegal de trabajadores.",
        "Formar": "a los profesionales para el correcto cumplimiento de la normativa, con el objeto de prevenir y solventar incumplimientos normativos y evitar sanciones y liquidaciones, que menoscaben la imagen y reputación de la empresa y supongan pérdidas económicas para la compañía.",
        "Conocer": "las actualizaciones en las facultades de la Inspección de Trabajo y Seguridad Social y detectar y gestionar los riesgos del incumplimiento normativo aplicados a diversos casos prácticos."
      }} />
      <CardsClaustro claustro={claustro} title="Conoce a nuestro claustro" />
      <Footer href={href} download={download} />
    </div>
  )
}

export default SeguridadSocial;