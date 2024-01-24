import React from 'react';
import BodyInfo from '../../components/BodyInfo1';
import IconsInfo from '../../components/IconsInfo';
import InfoForm from '../../components/infoForm';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardsClaustro from '../../components/CardsClaustro';
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Helmet } from 'react-helmet';
import PorqueSagardoy from '../../components/PorqueSagardoy';

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    textAlign: 'justify',
    paddingRight: '100px',
    [theme.breakpoints.up(1100)]: {
      marginBottom: '70px',
    },
    [theme.breakpoints.up(1200)]: {
      marginBottom: '80px'
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '0px',
    }
  },
}));

const Igualdad: React.FC = () => {

  const classes = useStyles();
  const href = 'https://sagardoyschool.com/archivos/la-igualdad-mas-alla-del-genero-obligaciones-de-las-empresas.pdf';
  const download = 'la-igualdad-mas-alla-del-genero-obligaciones-de-las-empresas.pdf';
  const claustro = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fgemma-fabregat%402x.png?alt=media&token=a412de0c-1ac3-4cfb-a601-fa385c0a0a71',
      name: 'Gemma Fabregat',
      job: `Of counsel en Sagardoy Abogados.
      Catedrática de Derecho del Trabajo y Seguridad Social de la Universitat de València`
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fbruno-alvarez%402x.png?alt=media&token=264f097c-0d20-4650-aa21-ece0d34afea0',
      name: 'Bruno Álvarez',
      job: `Socio en Sagardoy Abogados.
      Miembro de la Asociación Nacional de Laboristas (ASNALA) y del Foro Español de Laboristas (FORELAB)`
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Fmaria-jesus-herrera%402x.png?alt=media&token=f4c0de55-1516-4f8a-88c7-b598ce8f098a',
      name: 'María Jesús Herrera',
      job: `Socia en Sagardoy Abogados.
      Miembro de la Asociación Nacional de Laboristas (ASNALA)`
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2FAlicia_Moro_Valent_n_Gamazo%402x.png?alt=media&token=a7f41eb3-17d1-45c0-84c5-d069c126a32f',
      name: 'Alicia Moro',
      job: `Socia en Sagardoy Abogados.
      Miembro de la Asociación Nacional de Laboristas (ASNALA)`
    },
  ]

  return (
    <div>
      <Helmet>
        <title>Programa de actualización: La igualdad más allá del género</title>
        <meta name="title" content="Programa de actualización: La igualdad más allá del género" />
        <meta name="description" content="Profundiza tus conocimientos acerca del marco de derecho antidiscriminatorio y de libertad sexual para dar una respuesta consistente en el ámbito de la no discriminación, conciliación y el fomento de la igualdad y gestión de la diversidad." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="igualdad, género" />
      </Helmet>
      <Header image={"https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fheader_igualdad.png?alt=media&token=b555ef2b-661c-45ea-9439-714a357c4a27"} />
      <InfoForm productId='0xa7cd6c' formId='0xba2874' href={href} download={download} title shadow submit={ //Cambiar el productId y formId. Ya que son de indemnizacion por despido
        <>
          <DownloadIcon sx={{ fontSize: '1.2em' }} />
          Descargar folleto
        </>
      } />
      <BodyInfo title={
        <p style={{ color: 'black', margin: 0 }}>
          Actualízate con expertos en <span style={{ color: '#980628' }}>materia laboral</span>
        </p>

      }
        body={
          <div className={classes.body}>
            <p>
              ¿Sabías que un conocimiento profundo del ordenamiento jurídico en materia laboral promueve un entorno laboral justo, equitativo y legalmente sólido?
            </p>
            <p>
              Profundiza tus conocimientos acerca del <b>marco de derecho antidiscriminatorio y de libertad sexual</b> para dar una respuesta consistente en el ámbito de la no discriminación, conciliación y el fomento de la igualdad y gestión de la diversidad.
            </p>
          </div>
        }
      />
      <PorqueSagardoy />
      <IconsInfo
        dates={['Del 01 marzo', 'al 26 abril']}
        duration={
          <>
            8 sesiones de <br />
            9:00h a 11:00h
          </>
        }
        language={'Español'}
        format={
          <>
            Virtual<br />
          </>
        }
      />
      <ProgramObjetives objetives={{
        "Capacitar": "a los profesionales del derecho y la empresa que necesitan abordar todas las obligaciones en materia de no discriminación y libertad sexual.",
        "Profundizar": "en las nuevas medidas de conciliación desde la corresponsabilidad, fomento de la igualdad y gestión de la diversidad.",
        "Preparar": "a las organizaciones en el entendimiento del orden jurídico relacionado a la no discriminación y libertad sexual, de manera que puedan implementar y promover medias de prevención en sus organizaciones."
      }} />
      <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
      <Footer />
    </div>
  )
}

export default Igualdad;