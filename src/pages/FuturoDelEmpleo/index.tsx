import React from "react";
import BodyInfo from "../../components/BodyInfo";
import IconsInfo2 from "../../components/Iconsinfo2";
import FuturoDelEmpleoForm from "../../components/FuturoEmpleoForm";
import Header2 from "../../components/Header2";
import DownloadIcon from "@mui/icons-material/Download";
import { Helmet } from "react-helmet";
import Footer2 from "../../components/Footer2";

const FuturoDelEmpleo: React.FC = () => {
  const href =
    "https://sagardoyschool.com/archivos/0424_AGENDA_JORNADAS_DE_EMPLEO_23_05_2024.pdf";
  const download = "0424_AGENDA_JORNADAS_DE_EMPLEO_23_05_2024.pdf";

  const texto = (
    <>
      En el marco de trabajo de la nueva Estrategia Madrid por el empleo, con el
      objetivo de conocer de mano de profesionales y expertos, la realidad
      actual del mercado laboral organizamos estas jornadas sobre Empleo y
      Mercado de Trabajo en las que reflexionaremos sobre los temas de máxima
      actualidad.
      <br />
      <br />
      La segunda jornada tendrá lugar el próximo 23 de mayo,
      <strong>
        {" "}
        “El Futuro Del Empleo Y Profesiones Emergentes En El Mercado De Trabajo
        Madrileño”,
      </strong>{" "}
      en horario de 9:30 a 12:00.
      <br />
      <br />
      Este encuentro será una oportunidad para conectar con profesionales y
      expertos que debatirán y expondrán sus puntos de vista sobre el futuro del
      mercado laboral, centrado en identificar las oportunidades y estrategias
      para favorecer la adaptación y el desarrollo del talento, en busca de
      iniciativas innovadoras e impulso de proyectos en este ámbito.
    </>
  );
  const redirect =
    "https://sagardoyschool.com/thank-you/futuro-del-empleo";

  return (
    <div>
      <Helmet>
        <title>
          El Futuro Del Empleo Y Profesiones Emergentes En El Mercado De Trabajo
          Madrileño
        </title>
        <meta
          name="title"
          content="El Futuro Del Empleo Y Profesiones Emergentes En El Mercado De Trabajo Madrileño"
        />
        <meta
          name="description"
          content="Explora el futuro del empleo y las profesiones emergentes en el mercado de trabajo madrileño, donde la digitalización y nuevas tecnologías están transformando el panorama laboral. Descubre las tendencias, desafíos y oportunidades para adaptarte y prosperar en este entorno en constante evolución."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="empleo, profesiones emergentes, mercado de trabajo, digitalización, tecnologías, Madrid"
        />
      </Helmet>

      <Header2
        image={
          "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20El%20Futuro%20del%20Empleo%2FHeaderFuturoEmpleo.png?alt=media&token=9d4a3184-7437-4769-bd95-802ccbd3f5af"
        }
      />
      <FuturoDelEmpleoForm
        productId="0x112f23b"
        formId="0x112f27d"
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
        dates={["Jueves 23 de mayo"]}
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

export default FuturoDelEmpleo;
