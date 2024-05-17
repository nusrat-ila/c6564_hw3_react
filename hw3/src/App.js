// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CountryList from './CountryList';
import PopulationChart from './PopulationChart';
import GDPChart from './GDPChart';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<CountryList />} />
                <Route path="/population" element={<PopulationChart />} />
                <Route path="/gdp" element={<GDPChart />} />
            </Routes>
        </Router>
    );
};

export default App;
