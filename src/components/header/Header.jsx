import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/logo/strawberrymakeup.png';

const Header = () => {
    return (
        <header className="py-2 border-bottom" style={{ backgroundColor: 'var(--success)' }}>
            <nav className="navbar navbar-expand-lg "></nav>
                <div className="container">
                    <a className="navbar-brand " href="#">
                        <img src={logo}  alt="Logo" style={{ height: '80px' }} />
                    </a>
                </div>
        </header>
    );
};

export default Header;