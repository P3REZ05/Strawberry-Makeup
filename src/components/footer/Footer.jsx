import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-2">&copy; 2023 Mi Tienda. Todos los derechos reservados.</p>
                <div className="d-flex justify-content-center">
                    <a href="#" className="text-white mx-3">
                        <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="#" className="text-white mx-3">
                        <i className="bi bi-twitter"></i> Twitter
                    </a>
                    <a href="#" className="text-white mx-3">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
