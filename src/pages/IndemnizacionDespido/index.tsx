import React from 'react'
import Header from '../../components/Header'
import InfoForm from '../../components/infoForm'
import DownloadIcon from '@mui/icons-material/Download';
import IconsInfo from '../../components/IconsInfo';
import ProgramObjetives from '../../components/ProgramObjetives';
import Footer from '../../components/Footer';
import PorqueSagardoy from '../../components/PorqueSagardoy';
import BodyInfo from '../../components/BodyInfo1';
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Helmet } from 'react-helmet';
import CardsClaustroHorizontal from '../../components/CardsClaustroHorizontal';


const useStyles = makeStyles((theme: Theme) => ({
    body: {
        textAlign: 'justify',
        [theme.breakpoints.up(1100)]: {
            marginBottom: '70px'
        },
        [theme.breakpoints.up(1200)]: {
            marginBottom: '80px'
        }
    },
}));

const IndemnizacionDespido = () => {

    const classes = useStyles();

    const headerIndemnizacionDespido = 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fheader%20indemnizaci%C3%B3nPorDespido.png?alt=media&token=f5672768-f9b6-4225-af2c-3c054932ad3e'
    const href = 'https://sagardoyschool.com/archivos/actualizacion-juridica-la-indemnizacion-por-despido.pdf'
    const download = 'actualizacion-juridica-la-indemnizacion-por-despido.pdf'
    const redirect = 'https://sagardoyschool.com/thank-you/actualizacion-juridica/'
    const claustro = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Frosa_maria_viroles_pinol%402x.png?alt=media&token=f544288d-3f8a-48c6-b822-0482088633cf',
            name: 'Rosa María Virolés',
            job: `Directora del Programa de actualización La indemnización por despido: las nuevas claves`,
            job1: 'Ex-Presidenta de la Sala Cuarta del Tribunal Supremo',
            job2: `Licenciada en Derecho y Doctora por la Universidad de Barcelona. Es magistrada especialista del orden jurisdiccional social por oposición desde 1990.
            Ha sido letrada de la Administración de la Seguridad Social y letrada del Estado. Está en posesión de la Cruz de Honor de la Orden de San Raimundo de Peñafort.`,
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FPersonas%2Framon%402x.png?alt=media&token=0a3dd60c-ba94-45b4-b311-a8653c1bca69',
            name: 'Ramón Gallo',
            job: 'Magistrado de la Sala de lo Social de la Audiencia Nacional',
            job1: '',
            job2: 'Licenciado en Derecho por la Universidad Complutense de Madrid (UCM). Es magistrado especialista del orden jurisdiccional social por oposición desde 1990. Ha sido ponente en numerosos seminarios, cursos y conferencias, y ha participado en publicaciones destacadas como ‘El procedimiento del art. 138 de la LRJS’.',
        },
    ]

    return (
        <div>
            <Helmet>
                <title>Actualización Jurídica: La Indemnización por Despido</title>
                <meta name="title" content="Actualización Jurídica: La Indemnización por Despido" />
                <meta name="description" content="Explora la actualización jurídica sobre la indemnización por despido. Conoce las últimas novedades y cambios legales relacionados con este tema. ¡Mantente informado para tomar decisiones informadas en el ámbito laboral!" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="actualización jurídica, indemnización por despido, leyes laborales, derechos laborales, novedades legales" />
            </Helmet>
            <Header image={headerIndemnizacionDespido} />
            <InfoForm productId='0xa7ebda' formId='0xba2898' href={href} download={download} redirect={redirect} title shadow submit={
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
                            ¿Eres profesional del derecho, profesional de RR.HH. o empleador? ¿Sabías que un conocimiento profundo de la figura del despido en el ordenamiento jurídico promueve un entorno laboral justo, equitativo y legalmente sólido?
                        </p>
                        <p>
                            Conoce <b>cómo se están aplicando las normativas relacionadas al despido en los diferentes tribunales</b> españoles y europeos. Y profundiza <b>en las nuevas claves de la indemnización por despido</b>, un tema sometido a intenso debate en los últimos tiempos.
                        </p>
                    </div>
                }
            />
            <PorqueSagardoy />
            <IconsInfo
                dates={['Del 19 febrero', 'al 01 marzo']}
                duration={
                    <>
                        5 jornadas de <br />
                        9:30h a 12:30h
                    </>
                }
                language={'Español'}
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
                "Profundizar": "sobre los aspectos jurídicos, legales y judiciales del despido y, en particular, de la indemnización sometida a intenso debate en los últimos tiempos.",
                "Estudiar": "la tendendencia jurisprudencial en materia indemnizatoria por daños y perjuicios y daños morales en los supuestos de vulneración de derechos fundamentales",
                "Analizar": "la doctrina jurisprudencial y la aplicabilidad de las normas sobre el despido en los diferentes tribunales españoles y europeos"
            }} />
            {/* <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" /> */}
            <CardsClaustroHorizontal claustro={claustro} title="Conoce a nuestro claustro" />
            <Footer />
        </div>
    )
}

export default IndemnizacionDespido