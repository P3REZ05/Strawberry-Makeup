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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link bi-house-fill fw-bold">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link logotik bi-cart3 fw-bold">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bi-telephone-fill fw-bold">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bi-person-fill fs-1"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;