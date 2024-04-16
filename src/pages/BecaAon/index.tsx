import React from 'react';
import BodyBecaAon from '../../components/BodyBecaAon';
import BodyInfoBecaAon from '../../components/BodyInfoBecaAon';
import IconsInfoBecaAon from '../../components/IconsInfoBecaAon';
import InfoFormBecaAon from '../../components/infoFormBecaAon';
import FooterBecaAon from '../../components/FooterBecaAon';
import HeaderBeca from '../../components/HeaderBeca';
import CardsClaustroBecaAon from '../../components/CardsClaustroBecaAon';
import BodyInfo2 from '../../components/BodyInfo2';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

const BecaAon: React.FC = () => {

  const [searchParams] = useSearchParams()

  const href = '';
  const download = '';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2FCarmen-Burgos-Casas%402x.png?alt=media&token=11917d00-fa73-42fe-8af4-03589c5f5671',
      name: 'Carmen Burgos Casas',
      job: 'Executive Director Health Solutions at AON'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fvanessa-izquierdo%402x.png?alt=media&token=4969e609-dc86-4069-bd15-d03699373ef4',
      name: 'Vanessa Izquierdo',
      job: 'Directora Académica del Máster Executive en Dirección de Recursos Humanos. Directora Ejecutiva Sagardoy Business & Law School.  '
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fnaira%402x.png?alt=media&token=3042095a-57b2-419c-a613-4f7c6ed22b01',
      name: 'Naira Pérez Alonso',
      job: 'Directora de Estrategia de Sagardoy Business & Law School '
    },
  
  ]

  const texto = <>
    La gestión de Recursos Humanos (RRHH) evoluciona con el contexto. La IA, la experiencia de empleado, el desarrollo de talento y la DEI&A, son solo algunas de las áreas que están redefiniendo el rol del director de RRHH.
    <br /><br />
    Por ello, desde <strong>Sagardoy School,</strong> junto con <strong>AON,</strong> lanzamos una convocatoria de beca para el <strong>Máster Executive en Dirección de Recursos Humanos de Sagardoy Business & Law School,</strong> dirigida a profesionales que aspiren a liderar esta transformación en sus organizaciones.
    <br /><br />
    <strong>Participa en el desafío y únete a nuestra comunidad de expertos. Gana una beca para nuestro Máster Executive en Dirección de Recursos Humanos</strong>
  </>;

  const texto1 = <>
  Si eres directivo o futuro directivo de RRHH que busca impulsar cambios significativos, esta beca es para ti. 
  </>;
  const redirect = '';


  return (
    <div>
      <Helmet>
        <title>Beca Aon: Impulsando la innovación en Recursos Humanos</title>
        <meta name="title" content="HR: Comunicación Interna al servicio del Negocio"/>
        <meta name="description" content="Descubre cómo la comunicación interna puede potenciar tu negocio. En Sagardoy, ofrecemos soluciones de comunicación interna para mejorar la eficiencia y el rendimiento de tu empresa. ¡Conoce nuestras propuestas hoy!"/>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="comunicación interna, negocios, eficiencia empresarial, soluciones de comunicación" />
      </Helmet>
  
    
      <HeaderBeca image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2FHeaderBecaAon.png?alt=media&token=db0fc995-373d-4342-92e9-5804de347328"} />
      <InfoFormBecaAon productId='0x111115a' formId='0x11110e1' href={href} download={download}  redirect={redirect} title shadow submit={ 
        <>
        Enviar
        </>
      } />
      <BodyInfoBecaAon
        title={<p style={{ color: '#980628', margin: 0 }}>¿Qúe es la beca AON?</p>}
        body={texto}
      />
      <IconsInfoBecaAon  profile={
        <>
          Presencial<br />
          & Remoto<br />
        </>
      }
      duration={
        <>
          8 semanas 1 sesión por<br />
          semana 17:00h a 20:00h
        </>
      }
      dates={['Del 8 abril', ' al 27 mayo']} 
       
        prize={
          <>
            C\Velázquez 86D<br />
            28006 | Madrid<br />
          </>
        }
       
      />
        <BodyBecaAon
        title={<p style={{ color: '#980628', margin: 0 }}>¿Quién debería participar? </p>}
        body={texto1}
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
   
      <CardsClaustroBecaAon claustro={claustro} title="Jurado" />
      <FooterBecaAon/>
    </div>
  )
}

export default BecaAon;