import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/logo/strawberrymakeup.png';

const Header = () => {
    return (
        <header className="py-2" style={{ backgroundColor: 'var(--success)' }}>
            <nav className="navbar navbar-expand-lg "></nav>
                <div class="container">
                    <a class="navbar-brand " href="#">
                        <img src={logo} alt="Logo" style={{ height: '90px' }} />
                    </a>
                </div>
        </header>
    );
};

export default Header;