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

const SostenibilidadCorporativa: React.FC = () => {

  const href = 'https://sagardoyschool.com/archivos/sostenibilidad-corporativa-claves-para-el-futuro.pdf';
  const download = 'sostenibilidad-corporativa-claves-para-el-futuro.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FNieves%20Cifuentes.png?alt=media&token=5369cc5d-065d-4795-9407-358188385b83',
      name: 'Nieves Cifuentes',
      job: <>Codirectora del programa “Sostenibilidad Corporativa: claves para el futuro” Responsable corporativa de medio ambiente en <strong>Naturgy</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FRosa%20Sanz.png?alt=media&token=778dc03e-9a74-4ace-829a-3aa903be0ca2',
      name: 'Rosa M. Sanz',
      job: 'Codirectora del programa “Sostenibilidad Corporativa: claves para el futuro” Non Executive Director & Governance Expert'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FAmado%20Gil.png?alt=media&token=5f0c0bd8-6c16-4ed2-9748-2958f28adf05',
      name: 'Amado Gil',
      job: <>Especialista en cambio climático en <strong>Naturgy</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FRosa%20Garc%C3%ADa.png?alt=media&token=c8ab87fd-5388-4bca-9a50-fa4cdb1fcadc',
      name: 'Rosa García',
      job: <>Consejera independiente y Presidente de la Comisión de Sostenibilidad en <strong>Acerinox y Ence</strong></>
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FCristina%20Ribero.png?alt=media&token=de487ac9-d7e0-4585-bfc5-959652f65abc',
      name: 'Cristina Ribero',
      job: <>Directora del Departamento de Industria Energía, Medio Ambiente y Clima <strong>CEOE</strong></>
    },
  ]

  const texto = <>
    <strong>El 90% de los inversores tienen en cuenta los factores ESG en sus decisiones.</strong> Por tanto, las empresas que ignoran las exigencias de sostenibilidad corren el riesgo de perder competitividad e inversiones.
    <br /><br />
    <strong>La sostenibilidad</strong> ha salido de las direcciones de sostenibilidad para escalar a los consejos de administración e introducirse <strong>en todas las áreas de la empresa,</strong> siendo indispensables en la toma de decisiones empresariales a alto nivel.
    <br /><br />
    Descubre las herramientas necesarias para <strong>responder con éxito a los retos</strong> de los próximos años en materia de sostenibilidad.
  </>;
  const redirect = 'https://sagardoyschool.com/thank-you/sostenibilidad-corporativa-claves-para-el-futuro/';

  return (
    <div>
      <Helmet>
        <title>Executive Program: Sostenibilidad Corporativa Claves para el Futuro</title>
        <meta name="title" content="Executive Program: Sostenibilidad Corporativa Claves para el Futuro" />
        <meta name="description" content="La sostenibilidad ha salido de las direcciones de sostenibilidad para escalar a los consejos de administración e introducirse en todas las áreas de la empresa, siendo indispensables en la toma de decisiones empresariales a alto nivel." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Sostenibilidad corporativa, sostenibilidad, inversiones" />
      </Helmet>


      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FSostenibilidad%20Corporativa%2FAgregar%20texto%20(1).png?alt=media&token=1d339253-45f0-487b-8cfa-f0b77d8bbb5f"} />
      <InfoForm style={{ top: '32vw' }} productId='0xe88cac' formId='0xf1bef0' href={href} download={download} redirect={redirect} title shadow submit={
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo
        body={texto}
      />
      <BodyInfo2
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FRosa%20Sanz.png?alt=media&token=778dc03e-9a74-4ace-829a-3aa903be0ca2"}
        name={"Rosa M. Sanz García"}
        quote={"Las organizaciones más avanzadas ya utilizan la sostenibilidad como una ventaje competitiva reconociendo y aprovechando las prácticas sostenibles."}
      />
      <BodyInfo2
        img={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FNieves%20Cifuentes.png?alt=media&token=5369cc5d-065d-4795-9407-358188385b83"}
        name={"Nieves Cifuentes Valero"}
        quote={"La realidad es que los temas ESG han salido de las direcciones de sostenibilidad para escalar a los consejos de administración e introducirse en todas las áreas de la empresa."}
      />
      <IconsInfo dates={['Del 7 mayo', ' al 25 junio']} duration={
        <>
          Martes, de 17:00h<br />
          a 20:00h
        </>
      }
        language={"Español"}
        format={
          <>
            Presencial o Virtual<br />
            ¡Tú eliges!<br />
          </>
        }
      />
      <ProgramObjetives objetives={{
        "Profundizar": "en la inclusión de la gestión de la sostenibilidad desde el debate estratégico como factor clave en la toma de decisiones de las organizaciones para la creación de valor.",
        "Explorar": "la puesta en valor en la gestión empresarial de los factores ESG en diferentes sectores e industrias a través de estrategias de comunicación, reporte y posicionamiento en ratings de sostenibilidad, analizando los retos y oportunidades.",
        "Entender": "cómo impulsar el cambio hacia un modelo sostenible desde los órganos de decisión de las compañías."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer />
    </div>
  )
}

export default SostenibilidadCorporativa;