import React from "react";
import BodyInfo from "../../components/BodyInfo1";
import IconsInfo2 from "../../components/Iconsinfo2";
import ImpactoEnElMercadoForm from "../../components/ImpactoEnElMercadoForm";
import Header2 from "../../components/Header2";
import DownloadIcon from "@mui/icons-material/Download";
import { Helmet } from "react-helmet";
import Footer2 from "../../components/Footer2";

const ImpactoEnElMercado: React.FC = () => {
  const href =
    "https://sagardoyschool.com/archivos/AGENDA_JORNADA_REEQUILIBRIO_TERRITORIAL.pdf";
  const download = "AGENDA_JORNADA_REEQUILIBRIO_TERRITORIAL.pdf";

  const texto = (
    <>
      En el marco de trabajo de la nueva Estrategia Madrid por el empleo, con el
      objetivo de conocer de mano de profesionales y expertos, la realidad
      actual del mercado laboral organizamos estas jornadas sobre Empleo y
      Mercado de Trabajo en las que reflexionaremos sobre los temas de máxima
      actualidad.
      <br />
      <br />
      La tercera jornada tendrá lugar el próximo 11 de junio,
      <strong>
        {" "}
        “Reequilibrio Territorial Madrileño e Impacto en el Mercado de Trabajo”,
      </strong>{" "}
      en horario de 9:30 a 12:00.
      <br />
      <br />
      Este encuentro será una oportunidad para conectar con profesionales y
      expertos que debatirán y expondrán sus puntos de vista sobre el
      reequilibrio territorial en la Comunidad de Madrid y su impacto en el
      mercado laboral, centrado en compartir experiencias, e identificar las
      oportunidades y estrategias, para favorecer la adaptación y el desarrollo
      del talento, en busca de iniciativas innovadoras e impulso de proyectos en
      este ámbito.
    </>
  );
  const redirect = "https://sagardoyschool.com/thank-you/impacto-en-el-nuevo-mercado/";

  return (
    <div>
      <Helmet>
    <title>
        Reequilibrio Territorial Madrileño e Impacto en el Mercado de Trabajo
    </title>
    <meta
        name="title"
        content="Reequilibrio Territorial Madrileño e Impacto en el Mercado de Trabajo"
    />
    <meta
        name="description"
        content="Explora el reequilibrio territorial madrileño y su impacto en el mercado de trabajo. Descubre las tendencias, desafíos y oportunidades para adaptarte y prosperar en un entorno laboral en constante evolución."
    />
    <meta name="robots" content="index, follow" />
    <meta
        name="keywords"
        content="reequilibrio territorial, Madrid, mercado de trabajo, empleo, digitalización, tecnologías"
    />
</Helmet>


      <Header2
        image={
          "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Impacto%20En%20El%20Mercado%2Fheaderlandingimpacto.png?alt=media&token=4e20c2c9-c708-44be-b091-c6a155f996a2"
        }
      />
      <ImpactoEnElMercadoForm
        productId=" 0x1132a51"
        formId=" 0x1132af5"
        href={href}
        download={download}
        redirect={redirect}
        title
        shadow
        submit={
          <>
            <DownloadIcon sx={{ fontSize: "1.2em" }} />
            Aceptar
          </>
        }
      />
      <BodyInfo body={texto} />

      <IconsInfo2
        dates={["Martes 11 de junio"]}
        duration={<>9:30h - 12:00h</>}
        place={
          <>
            C\Velázquez 86D
            <br />
            28006 | Madrid
            <br />
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
  );
};

export default ImpactoEnElMercado;
