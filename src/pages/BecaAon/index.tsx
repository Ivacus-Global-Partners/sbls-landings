import React from "react";
import BodyBecaAon from "../../components/BodyBecaAon";
import BodyInfoBecaAon from "../../components/BodyInfoBecaAon";
import IconsInfoBecaAon from "../../components/IconsInfoBecaAon";
import InfoFormBecaAon from "../../components/infoFormBecaAon";
import FooterBecaAon from "../../components/FooterBecaAon";
import HeaderBeca from "../../components/HeaderBeca";
import CardsClaustroBecaAon from "../../components/CardsClaustroBecaAon";
import { Helmet } from "react-helmet";
import ComoParticipar from "../../components/ComoParticipar";

const BecaAon: React.FC = () => {
  const href =
    "https://sagardoyschool.com/archivos/master-executive-en-direccion-de-rrhh.pdf";
  const download = "master-executive-en-direccion-de-rrhh.pdf";
  const claustro = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2FCarmen-Burgos-Casas%402x.png?alt=media&token=11917d00-fa73-42fe-8af4-03589c5f5671",
      name: "Carmen Burgos Casas",
      job: "Executive Director Health Solutions at Aon",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fvanessa-izquierdo%402x.png?alt=media&token=4969e609-dc86-4069-bd15-d03699373ef4",
      name: "Vanessa Izquierdo",
      job: "Directora Académica del Máster Executive en Dirección de Recursos Humanos. Directora Ejecutiva Sagardoy Business & Law School.  ",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fnaira%402x.png?alt=media&token=3042095a-57b2-419c-a613-4f7c6ed22b01",
      name: "Naira Pérez Alonso",
      job: "Directora de Estrategia de Sagardoy Business & Law School ",
    },
  ];

  const texto = (
    <>
      La gestión de Recursos Humanos (RRHH) evoluciona con el contexto. La IA,
      la experiencia de empleado, el desarrollo de talento y la DEI&A, son solo
      algunas de las áreas que están redefiniendo el rol del director de RRHH.
      <br />
      <br />
      Por ello, desde <strong>Sagardoy School,</strong> junto con{" "}
      <strong>Aon,</strong> lanzamos una convocatoria de beca para el{" "}
      <strong>
        Máster Executive en Dirección de Recursos Humanos de Sagardoy Business &
        Law School,
      </strong>{" "}
      dirigida a profesionales que aspiren a liderar esta transformación en sus
      organizaciones.
      <br />
      <br />
      
        Participa en el desafío y únete a nuestra comunidad de expertos.<strong> Gana
        una beca del 100% para nuestro Máster Executive en Dirección de Recursos Humanos.
      </strong>
    </>
  );

  const texto1 = (
    <>
      Si eres directivo o futuro directivo de RRHH que busca impulsar cambios
      significativos, esta beca es para ti. 
    </>
  );
  const texto2 = (
    <>
      <strong>1er Premio:</strong> Admisión al Máster Executive en Dirección de
      Recursos Humanos para el año académico 2024, con una beca que cubre el
      100% de las tasas del programa.
      <br />
      <br />
      <strong>2do Premio:</strong> Admisión al Máster Executive en Dirección de
      Recursos Humanos para el año académico 2024, con una beca que cubre el 50%
      de las tasas del programa.
    </>
  );
  const texto3 = (
    <>
      El Jurado examinará las postulaciones y seleccionará a los ganadores el
      día 7 de junio de 2024. En esa misma fecha, daremos a conocer la decisión
      sobre los ganadores a las becas para el{" "}
      <strong>
        Máster Executive en Dirección de Recursos Humanos de Sagardoy Business &
        Law School 2024.
      </strong>
    </>
  );
  const textoPremios = (
    <>
      <strong>1er Premio:</strong> 1 beca del 100% para el Máster Executive en Dirección de RRHH, edición 2024<br/>
      <strong>2do Premio:</strong> 1 beca del 50% para el Máster Executive en Dirección de RRHH, edición 2024
    </>
  );
  const redirect = "https://sagardoyschool.com/thank-you/beca-aon-impulsando-la-innovaci%C3%B3n-en-recursos-humanos/";

  return (
    <div>
      <Helmet>
        <title>Beca Aon: Impulsando la innovación en Recursos Humanos</title>
        <meta
          name="title"
          content="Beca Aon: Impulsando la innovación en Recursos Humanos"
        />
        <meta name="description" content="Descripción de la beca Aon aquí." />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="beca, Aon, innovación, recursos humanos"
        />
      </Helmet>

      <HeaderBeca
        image={
          "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2FHeaderBecaAon.png?alt=media&token=db0fc995-373d-4342-92e9-5804de347328"
        }
      />
      <InfoFormBecaAon
        productId="0x111115a"
        formId="0x11110e1"
        href={href}
        download={download}
        redirect={redirect}
        title
        shadow
        submit={<>Enviar</>}
      />
      <BodyInfoBecaAon
        title={
          <p style={{ color: "#980628", margin: 0 }}>¿Qúe es la beca Aon?</p>
        }
        body={texto}
      />
      <IconsInfoBecaAon
        profile="Directivos o futuros directivos de RRHH que buscan impulsar cambios significativos en las organizaciones."
        deadlineDate="Viernes, 31 de mayo de 2024 "
        winnersAnnouncement="Viernes, 7 de junio de 2024"
        prizes={textoPremios}
      />
      <BodyBecaAon
        title={
          <p style={{ color: "#980628", margin: 0 }}>
            ¿Quién puede participar? 
          </p>
        }
        body={texto1}
      />
      <ComoParticipar />
      <BodyBecaAon
        title={
          <p style={{ color: "#980628", margin: 0 }}>
            ¿A qué premios optarás? 
          </p>
        }
        body={texto2}
      />
      <BodyBecaAon
        title={
          <p style={{ color: "#980628", margin: 0 }}>
            ¿Cuándo anunciaremos a los ganadores? 
          </p>
        }
        body={texto3}
      />
      <CardsClaustroBecaAon claustro={claustro} title="Jurado" />
      <FooterBecaAon />
    </div>
  );
};

export default BecaAon;
