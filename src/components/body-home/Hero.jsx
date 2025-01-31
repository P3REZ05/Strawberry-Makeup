import React from 'react';
import '../../App.css';
import fondo from '../../assets/fondos/fondo.png';
import imagen1 from '../../assets/example/imagen1.png';
import imagen2 from '../../assets/example/imagen2.png';
import imagen3 from '../../assets/example/imagen3.png';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className='overlay'></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Nuevas Tendencias a Diario</h1>
                        <p>Con hasta 60% de descuento</p>
                        <a className="btn" style={{ backgroundColor: 'var(--success)' }}  href="#">Shop Now</a>
                        <div className="mt-3">
                            <a className="me-2" href="#">
                                <i className="bihero bi-facebook" ></i>
                            </a>
                            <a className="me-2" href="#">
                                <i className="bihero bi-tiktok"></i>
                            </a>
                            <a href="#">
                                <i className="bihero bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={imagen1} className="d-block w-100" alt="imagen 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen2} className="d-block w-100" alt="imagen 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen3} className="d-block w-100" alt="imagen 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;