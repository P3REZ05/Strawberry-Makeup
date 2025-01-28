import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Home from './pages/home';
import Footer from './components/footer/Footer';

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