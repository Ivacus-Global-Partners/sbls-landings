import React from 'react'
import Header from '../../components/Header'
import InfoForm from '../../components/infoForm'
import DownloadIcon from '@mui/icons-material/Download';
import BodyInfo2 from '../../components/BodyInfo2';
import IconsInfo from '../../components/IconsInfo';
import ProgramObjetives from '../../components/ProgramObjetives';
import CardsClaustro from '../../components/CardsClaustro';
import Footer from '../../components/Footer';
import BodyInfoIndemnizacion from '../../components/IndemnizacionDespido/BodyInfo1';

const IndemnizacionDespido = () => {

    const headerIndemnizacionDespido = 'https://i.ibb.co/CWw8Ndw/indemnizacion-Header.png'

    return (
        <div>
            <Header image={headerIndemnizacionDespido} href={'https://sagardoyschool.com/archivos/hr-comunicacion-interna-al-servicio-del-negocio.pdf'} download={'hr-comunicacion-interna-sagardoy.pdf'} />
            <InfoForm title shadow submit={
                <>
                    <DownloadIcon sx={{ fontSize: '1.2em' }} />
                    Descargar folleto
                </>
            } />
            <BodyInfoIndemnizacion />
            <BodyInfo2 />
            <IconsInfo />
            <ProgramObjetives />
            <CardsClaustro />
            <Footer />
        </div>
    )
}

export default IndemnizacionDespido