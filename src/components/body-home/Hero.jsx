import React from 'react';
import '../../App.css';
import imagen1 from '../../assets/example/imagen1.png';
import imagen2 from '../../assets/example/imagen2.png';
import imagen3 from '../../assets/example/imagen3.png';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Nuevas Tendencias a Diario</h1>
                        <p>Con hasta 60% de descuento</p>
                        <a className="btn btn-primary" href="#">Shop Now</a>
                        <div className="mt-3">
                            <a className="me-2" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="me-2" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
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