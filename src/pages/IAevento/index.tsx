import React from "react";
import BodyIA from "../../components/BodyIA";
import IconsInfo2 from "../../components/Iconsinfo2";
import FormIA from "../../components/FormIA";
import Header2 from "../../components/Header2";
import DownloadIcon from "@mui/icons-material/Download";
import { Helmet } from "react-helmet";
import FooterIA from "../../components/FooterIA";
import BotonIA from "../../components/BotonIA";

const IAEvento: React.FC = () => {
  const href =
    "https://sagardoyschool.com/archivos/AGENDA_EVENTO_IA_06_06_2024.pdf";
  const download = "AGENDA_EVENTO_IA_06_06_2024.pdf";

  const texto = (
    <>
      <strong>
        En la próxima década se crearán en España 1,6 millones nuevos puestos
        relacionados con la IA y desaparecerán 2 millones de los actuales
        puestos tal y como los conocemos actualmente.
      </strong>
      <br />
      <br />
      <strong>
        ¿Qué retos supone esta transformación para los profesionales del área de
        gestión de Personas, Cultura y Talento?
      </strong>
      <br />
      <br />
      En la mesa redonda <strong>“La IA como alidada de la gestión de personas”</strong> veremos
      cómo la Inteligencia Artificial y la Cultura Data Driven, pueden aportar
      soluciones a dichos retos.
      <br />
      <br />
      <strong>Ponentes:</strong>
      <br />
      <br />
      <ul>
        <li>Miguel de la Osa – IA Managing Partner Sagardoy Business & Law School</li>
        <li>Sonia Silva - Artificial Intelligence and Data Strategy, Head of Digital & Technology, Deloitte.</li>
        <li>Gonzalo Jiménez – Experto en Transformación Digital</li>
        <li>Rosa Esteban – Head of Talent & Culture, Grupo Sesé</li>
        <li>Enrique Robles del Cerro - HR Transformation & Executive Development Manager, Iberdrola</li>
      </ul>
    </>
  );
  const redirect = "https://sagardoyschool.com/thank-you/futuro-del-empleo";

  return (
    <div>
      <Helmet>
        <title>
          La IA Como Aliada de la Gestión de Personas en las Organizaciones
        </title>
        <meta
          name="title"
          content="La IA Como Aliada de la Gestión de Personas en las Organizaciones"
        />
        <meta
          name="description"
          content="Descubre cómo la inteligencia artificial está revolucionando la gestión de personas en las organizaciones. Explora las herramientas y estrategias de IA que facilitan la toma de decisiones, optimización de recursos humanos y mejora de la productividad laboral."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="IA, gestión de personas, inteligencia artificial, recursos humanos, tecnologías, organizaciones"
        />
      </Helmet>
      <Header2
        image={
          "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FEventoIA%2FIA%20EVENTO.png?alt=media&token=9fb2e242-d1eb-40b5-99a9-b56673c6f947"
        }
      />
      <FormIA
        productId=" 0x11e8740"
        formId="0x11e88b7"
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
      <BodyIA body={texto} />
      <BotonIA />
      <IconsInfo2
        dates={["Jueves 6 de junio"]}
        duration={<>9:30h - 11:30h</>}
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

      <FooterIA />
    </div>
  );
};

export default IAEvento;
