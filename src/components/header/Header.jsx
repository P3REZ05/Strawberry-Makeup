import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white text-center py-3">
            <h1>Mi Tienda</h1>
            <nav>
                <Link to="/" className="text-white mx-2">Inicio</Link>
                <Link to="/about" className="text-white mx-2">Acerca de</Link>
            </nav>
        </header>
    );
};

export default Header;