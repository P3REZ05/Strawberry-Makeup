import React from 'react';
import '../../App.css';
import imagen1 from '../../assets/example/imagen1.png';
import imagen2 from '../../assets/example/imagen2.png';
import imagen3 from '../../assets/example/imagen3.png';

const Hero = () => {
    return (
        <div className='contenido-carrusel'>
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
    );
};

export default Hero;