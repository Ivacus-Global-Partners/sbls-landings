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

const IndemnizacionDespido = () => {

    const headerIndemnizacionDespido = 'https://i.ibb.co/SQgX3VS/header-indemnizaci-n.png'
    const href = 'https://sagardoyschool.com/archivos/actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'
    const download = 'actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social.pdf'

    const claustro = [
        {
            img: 'https://i.ibb.co/cNb3vTz/maria-rosa.png',
            name: 'Rosa María Virolés Piñol',
            job: `Directora del Programa. Ex-Presidententa de la Sala Cuarta del Tribunal Supremo`
        },
        {
            img: 'https://i.ibb.co/7vtQnFX/ramon-llanos.png',
            name: 'Ramón Gallo Llanos',
            job: 'Magistrado de la Sala de lo Social de la Audiencia Nacional'
        },
    ]

    return (
        <div>
            <Header image={headerIndemnizacionDespido} href={'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf'} download={'hr-comunicacion-interna-sagardoy.pdf'} />
            <InfoForm href={href} download={download} title shadow submit={
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
                    <div style={{ textAlign: 'justify'}}>
                        <p>
                            ¿Eres profesional del derecho, profesional de RR.HH. o empleador? ¿Sabías que un conocimiento profundo de la figura del despido en el ordenamiento jurídico promueve un entorno laboral justo, equitativo y legalmente sólido?
                        </p>
                        <p>
                            Conoce <b>cómo se están aplicando las normativas relacionadas al despido en los diferentes tribunales</b> españoles y europeos. Y profundiza <b>en las nuevas claves de la indemnización por despido</b>, un tema sometido a intenso devate en los últimos tiempos.

                        </p>
                    </div>
                }
            />
            <PorqueSagardoy />
            <IconsInfo
                dates={['25 enero, 2024', '14 febrero, 2024']}
                duration={
                    <>
                        4 jorbadas de <br />
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
                "Profundizar": "sobre los aséctos jurídicos, legales y judiciales del despido y, en particular, de la indemnización sometida a intenso debate en los últimos tiempos.",
                "Estudiar": "la tendendencia jurisprudencial en materia indemnizatoria por daños y perjuicios y daños morales en los supuestos de vulneración de derechos fundamentales",
                "Análizar": "la doctrina jurisprudencial y la aplicabilidad de las normas sobre el despido en los diferentes tribunales españoles y europeos"
            }} />
            <CardsClaustro claustro={claustro} />
            <Footer href={href} download={download} />
        </div>
    )
}

export default IndemnizacionDespido