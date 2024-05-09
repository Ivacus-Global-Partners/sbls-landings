import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComunicaciónHR from '../pages/ComunicacionHR';
import SeguridadSocial from '../pages/SeguridadSocial';
import IndemnizacionDespido from '../pages/IndemnizacionDespido';
import ExperienciaEmpleado from '../pages/ExperienciaEmpleado';
import Igualdad from '../pages/Igualdad';
import EstrategiaFiscal from '../pages/EstrategiaFiscal';
import SostenibilidadCorporativa from '../pages/SostenibilidadCorporativa';
import MarcaPersonal from '../pages/MarcaPersonal';
import IAprogram from '../pages/IAprogram';
import Diversidad from '../pages/Diversidad';
import DigitalizaciónyCompetencias from '../pages/DigitalizacionyCompetencias';
import BecaAon from '../pages/BecaAon';
import FuturoDelEmpleo from '../pages/FuturoDelEmpleo';
import ImpactoEnElMercado from '../pages/ImpactoEnElMercado'


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/comunicacionhr" element={<ComunicaciónHR />} />
                <Route path="/seguridadsocial" element={<SeguridadSocial />} />
                <Route path="/indemnizaciondespido" element={<IndemnizacionDespido />} />
                <Route path="/experienciaempleado" element={<ExperienciaEmpleado />} />

                <Route path="/landings/hr-comunicacion-interna-sagardoy" element={<ComunicaciónHR />} />
                <Route path="/landings/actualizacion-de-la-normativa-de-cotizacion-a-la-seguridad-social" element={<SeguridadSocial />} />
                <Route path="/landings/actualizacion-juridica-la-indemnizacion-por-despido" element={<IndemnizacionDespido />} />
                <Route path="/landings/certificacion-experto-experiencia-de-empleado" element={<ExperienciaEmpleado />} />
                <Route path="/landings/actualizacion-igualdad-mas-alla-del-genero" element={<Igualdad />} />
                <Route path="/landings/programa-ejecutivo-en-estrategia-fiscal-y-sectorial" element={<EstrategiaFiscal />} />
                <Route path="/landings/executive-program-sostenibilidad-corporativa-claves-para-el-futuro" element={<SostenibilidadCorporativa />} />
                <Route path="/landings/programa-ejecutivo-marca-personal" element={<MarcaPersonal />} />
                <Route path="/landings/executive-program-ia" element={<IAprogram />} />
                <Route path="/landings/executive-program-el-poder-de-la-diversidad" element={<Diversidad />} />
                <Route path="/landings/digitalizacion-y-competencias-clave-en-el-nuevo-mercado-de-trabajo" element={<DigitalizaciónyCompetencias />} />
                <Route path="/landings/beca-aon-impulsando-la-innovación-en-recursos-humanos" element={<BecaAon />} />
                <Route path="/landings/el-futuro-del-empleo-y-profesiones-emergentes-en-el-mercado-de-trabajo-madrileño" element={<FuturoDelEmpleo />} />
                <Route path="/landings/reequilibrio-territorial-madrileño-e-impacto-en-el-mercado-de-trabajo" element={<ImpactoEnElMercado />} />

            </Routes>
        </Router>
    );
};

export default RouterComponent;
