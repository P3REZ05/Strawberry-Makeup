import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/logo/strawberrymakeup.png';

const Header = () => {
  return (
    <header className="py-1 border-bottom" style={{ backgroundColor: 'var(--success)' }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className='mt-' style={{ height: '80px' }} />
          </Link>
          
          {/* BOTON RESPONSI EN PANTALLA DE MOVILES */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">
                  <i className="bi "></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/shop">
                  <i className="bi "></i> Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">
                  <i className="bi "></i> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/categories">
                  <i className="bi "></i> Categories
                </Link>
              </li>
            </ul>

            {/* Iconos de usuario, búsqueda y carrito */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  <i className="bi bi-search fs-5"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="bi bi-person-fill fs-5"></i>
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart-fill fs-5"></i>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">2</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;