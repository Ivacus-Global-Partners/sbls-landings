import React from 'react';
import BodyInfo from '../../components/BodyInfo';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import BodyInfo2 from '../../components/BodyInfo2';
import DownloadIcon from '@mui/icons-material/Download';
import { Helmet } from 'react-helmet';

const IAprogram: React.FC = () => {

  const href = 'https://sagardoyschool.com/archivos/sostenibilidad-corporativa-claves-para-el-futuro.pdf';
  const download = 'sostenibilidad-corporativa-claves-para-el-futuro.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Farbeo%402x.png?alt=media&token=c4775784-1d11-4b31-aa21-ae3db220d44c',
      name: 'Jose Luis Arbeo',
      job: <>Advisor de Desarrollo de negocio Ex-Director de Marketing y Contenidos de BBVA</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Fdavid-alayon%402x.png?alt=media&token=9bfbb949-01cb-46b2-833a-fd34b77fd894',
      name: 'David Alayón',
      job: 'Cofundador y CEO de Innuba Ex-Director de Innovación de Inditex'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Fgema-nunez%402x.png?alt=media&token=c8cfcbe4-edc5-41a6-bb5b-cd727581bd14',
      name: 'Gema Núñez',
      job: <>Head of Industry Relations Google</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Fmaria-borbones%402x.png?alt=media&token=d4ce3f51-2e1f-442d-989e-878ff9751491',
      name: 'María Borbonés',
      job: <>Client Engineering Manager & IA Architect IBM</>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Fjuanjo-carmena%402x.png?alt=media&token=71ac2a7f-7027-445b-924f-5c91887c80a4',
      name: 'Juanjo Carmena',
      job: <>Enterprise Solutions Manager EMEA GitHub Microsoft</>
    },
  ]

  const texto = <>
    Las organizaciones que no aplican la IA están <strong>perdiendo una ventaja competitiva</strong> y, en el medio plazo, incluso pueden perder relevancia y perder su posición en el mercado. 
    <br /><br />
    <strong>La IA generativa es una tecnología diferente a cualquier otra</strong> que haya surgido anteriormente. Esta disrupción tecnológica presenta tanto oportunidades únicas como desafíos significativos, lo que <strong>requiere un enfoque innovador y adaptativo en el liderazgo y la gestión estratégica</strong> de todas las áreas de negocio. 
    <br /><br />
    Descubre, de la mano de un claustro excelente, el <strong>impacto de la IA en las distintas áreas de negocio</strong> a través de casos reales y con un enfoque práctico.
  </>;
  const redirect = '';

  return (
    <div>
      <Helmet>
        <title>Executive Program: IA transformando negocios e industrias</title>
        <meta name="title" content="Executive Program: IA transformando negocios e industrias" />
        <meta name="description" content="La sostenibilidad ha salido de las direcciones de sostenibilidad para escalar a los consejos de administración e introducirse en todas las áreas de la empresa, siendo indispensables en la toma de decisiones empresariales a alto nivel." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Sostenibilidad corporativa, sostenibilidad, inversiones" />
      </Helmet>


      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2FIAheader.png?alt=media&token=5e626bd4-9476-45b6-bb48-857ab4b6f0ec"} />
      <InfoForm productId='0xe88cac' formId='0xf1bef0' href={href} download={download} redirect={redirect} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
     <BodyInfo
        title={<p style={{ color: '#980628', margin: 0 }}>¿Cuál debe ser mi propuesta de valor para continuar siendo un jugador relevante?</p>}
        body={texto}
      />
      <BodyInfo2
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Fdavid-alayon%402x.png?alt=media&token=9bfbb949-01cb-46b2-833a-fd34b77fd894"}
        name={"David Alayón"}
        job={<>
            Cofundador y director de Innovación de Innuba <br />
            Codirector del programa IA: Transformando negocios e industrias</>}
        quote={"Es el momento para entender qué es lo que está ocurriendo, analizar y entender los casos de uso y las buenas prácticas que las compañías están abordando y luego pensar en el futuro y en cómo poder abordarlo."}
      />
      <BodyInfo2
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLandingIA%2Farbeo%402x.png?alt=media&token=c4775784-1d11-4b31-aa21-ae3db220d44c"}
        name={"Jose Luis Arbeo"}
        job={<>
            Consultor de Marketing, Desarrollo y Transformación de negocio  <br />
            Codirector del programa IA: Transformando negocios e industrias</>}
        quote={"El programa de Inteligencia Artificial intenta pensar en la IA como una palanca de transformación de negocios, de industrias y de empresas en general."}
      />
      <IconsInfo dates={['Del 1 al 17', 'de octubre']} duration={
        <>
          Martes y Jueves, de<br />
          16:30h a 19:30h
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
        "Comprender": "el 360 de la IA. Desde aspectos técnicos relevantes para el negocio hasta implicaciones organizativas y estratégicas.",
        "Aprender": "a implementar proyectos de IA para obtener ventaja estratégica.",
        "Evaluar": "los sesgos y las implicaciones éticas en el aprendizaje automático."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer />
    </div>
  )
}

export default IAprogram;