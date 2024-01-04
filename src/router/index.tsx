import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComunicaciónHR from '../pages/ComunicacionHR';
import SeguridadSocial from '../pages/SeguridadSocial';
import IndemnizacionDespido from '../pages/IndemnizacionDespido';
import ExperienciaEmpleado from '../pages/ExperienciaEmpleado';


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
            </Routes>
        </Router>
    );
};

export default RouterComponent;
