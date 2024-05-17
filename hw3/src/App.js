import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CountryList from './CountryList';
import PopulationChart from './PopulationChart';
import GDPChart from './GDPChart';
import Footer from './Footer';
const App = () => {
    return (
        <Router>
             <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '60px' }}>
                <title>test</title>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={<CountryList />} />
                <Route path="/population" element={<PopulationChart />} />
                <Route path="/gdp" element={<GDPChart />} />
            </Routes>
            <Footer />
            </div>
        </Router>
    );
};

export default App;
