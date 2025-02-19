import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../assets/logo/strawberrymakeup.png';

const Header = () => {
  return (
    <header className="py-1 border-bottom" style={{ backgroundColor: 'var(--success)' }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Botón de menú para móviles */}
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo centrado */}
          <Link className="navbar-brand mx-auto order-2 order-lg-1" to="/">
            <img src={logo} alt="Logo" className='mt-' style={{ height: '80px' }} />
          </Link>

          {/* Iconos de búsqueda y carrito para móviles */}
          <div className="d-flex order-3 d-lg-none">
            <Link className="nav-link me-3" to="/search">
              <i className="bi bi-search fs-5"></i>
            </Link>
            <Link className="nav-link position-relative" to="/shopcart">
              <i className="bi bi-cart-fill fs-5"></i>
              <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </Link>
          </div>

          {/* Menú de navegación */}
          <div className="collapse navbar-collapse order-4 order-lg-2" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link fw-bold dropdown-toggle" to="/categories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/categories/category1">Category 1</Link></li>
                  <li><Link className="dropdown-item" to="/categories/category2">Category 2</Link></li>
                  <li><Link className="dropdown-item" to="/categories/category3">Category 3</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Iconos para desktop */}
          <ul className="navbar-nav d-none d-lg-flex order-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <i className="bi bi-search fs-5"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <i className="bi bi-person-fill fs-5"></i>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/shopcart">
                <i className="bi bi-cart-fill fs-5"></i>
                <span className="position-absolute top-80 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;