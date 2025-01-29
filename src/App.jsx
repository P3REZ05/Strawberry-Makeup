import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/body-home/Hero';
import Home from './pages/home';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;