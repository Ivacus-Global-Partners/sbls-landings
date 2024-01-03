import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComunicaciónHR from '../pages/ComunicaciónHR';


const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ComunicaciónHR />} />
                <Route path="/comunicacionhr" element={<ComunicaciónHR />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
