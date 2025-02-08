import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/home/Hero';
import Hometext from './pages/Home';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';



const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<><Hero /> <Hometext /></>} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;