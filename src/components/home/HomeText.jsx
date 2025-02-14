import React from 'react';

const Hometext = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row text-center align-items-start">
                <div className="col-md-4 mb-5">
                    <div className="mx-auto" style={{ maxWidth: '80%' }}>
                        <h2 style={{color: 'var(--success)' }}>ENVIOS 100% SEGUROS</h2>
                        <p style={{ maxWidth: '80%', margin: '0 auto', }} >
                            Nuestra tienda ofrece envios a todo el pais de forma segura y contamos con pagos contraentrega, manejamos multiples metodos de pago para tu comodidad. 
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="mx-auto" style={{ maxWidth: '97%' }}>
                        <h2 style={{color: 'var(--success)' }}>PRODUCTOS DE LA MEJOR CALIDAD</h2>
                        <p style={{ maxWidth: '80%', margin: '0 auto' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias aut id ex, excepturi voluptatem dolorem accusamus maiores similique officiis perferendis porro, veniam consequatur quae, totam atque dolore ipsa iusto.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="mx-auto" style={{ maxWidth: '90%' }}>
                        <h2 style={{color: 'var(--success)' }}>VENTAS AL DETAL Y AL POR MAYOR</h2>
                        <p style={{ maxWidth: '80%', margin: '0 auto' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa accusantium commodi omnis ullam consectetur aliquid corrupti iure obcaecati, culpa eveniet odit laboriosam ducimus ad animi soluta at! Perspiciatis, atque exercitationem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometext;