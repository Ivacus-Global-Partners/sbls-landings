import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComunicaciónHR from '../pages/ComunicacionHR';
import SeguridadSocial from '../pages/SeguridadSocial';
import IndemnizacionDespido from '../pages/IndemnizacionDespido';


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ComunicaciónHR />} />
                <Route path="/comunicacionhr" element={<ComunicaciónHR />} />
                <Route path="/seguridadsocial" element={<SeguridadSocial />} />
                <Route path="/indemnizaciondespido" element={<IndemnizacionDespido />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
