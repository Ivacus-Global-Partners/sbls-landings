import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComunicaciónHR from '../pages/ComunicacionHR';
import SeguridadSocial from '../pages/SeguridadSocial';


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ComunicaciónHR />} />
                <Route path="/comunicacionhr" element={<ComunicaciónHR />} />
                <Route path="/seguridadsocial" element={<SeguridadSocial />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
