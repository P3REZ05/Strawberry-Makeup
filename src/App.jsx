import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import MasterPage from './pages/MasterPage';



const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MasterPage.Home/>} />
                <Route path='/shop' element={<MasterPage.shop/>} />
                <Route path='/about' element={<MasterPage.about/>} />
                <Route path='/contact' element={<MasterPage.contact/>} />
                <Route path='/shopcart' element={<MasterPage.shopcart/>} />
                <Route path='/admin' element={<MasterPage.admin/>} />
            </Routes>
            <Footer />
            
        </div>
    );
};

export default App;