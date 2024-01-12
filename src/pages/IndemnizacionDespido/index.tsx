import React from 'react'
import Header from '../../components/Header'
import InfoForm from '../../components/infoForm'
import DownloadIcon from '@mui/icons-material/Download';
import IconsInfo from '../../components/IconsInfo';
import ProgramObjetives from '../../components/ProgramObjetives';
import CardsClaustro from '../../components/CardsClaustro';
import Footer from '../../components/Footer';
import PorqueSagardoy from '../../components/PorqueSagardoy';
import BodyInfo from '../../components/BodyInfo1';
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Helmet } from 'react-helmet';


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

    const claustro = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Fmaria-rosa.png?alt=media&token=00c935b1-a806-4537-9d76-d2ee824220f4',
            name: 'Rosa María Virolés Piñol',
            job: `Directora del Programa. Ex-Presidententa de la Sala Cuarta del Tribunal Supremo`
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2Framon-llanos.png?alt=media&token=0dbabf60-d797-49c7-b6c7-fee9f05abf6c',
            name: 'Ramón Gallo Llanos',
            job: 'Magistrado de la Sala de lo Social de la Audiencia Nacional'
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
            <Header image={headerIndemnizacionDespido} href={'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf'} download={'hr-comunicacion-interna-sagardoy.pdf'} />
            <InfoForm productId='0xa7ebda' formId='0xba2898' href={href} download={download} title shadow submit={
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
                dates={['25 enero, 2024', '14 febrero, 2024']}
                duration={
                    <>
                        4 jornadas de <br />
                        9:00h a 12:00h
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
            <CardsClaustro claustro={claustro} title="Descubre a parte del claustro" />
            <Footer href={href} download={download} />
        </div>
    )
}

export default IndemnizacionDespido