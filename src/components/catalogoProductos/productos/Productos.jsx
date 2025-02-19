import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Productos = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BACKEND_URL = 'http://localhost:8000'; // Ajusta si es necesario

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${BACKEND_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            setError('Error al cargar los productos: ' + error.message);
            console.error('Error al cargar productos:', error);
        } finally {
            setLoading(false);
        }
    };

    const getImageUrl = (imagePath) => {
        return imagePath ? `${BACKEND_URL}${imagePath}` : `${BACKEND_URL}/images/default.png`;
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger m-3" role="alert">
                {error}
            </div>
        );
    }

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">Nuestros Productos</h2>
            <div className="row g-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-lg-3">
                            <div className="card h-100 shadow-sm">
                                <div className="position-relative">
                                    <img 
                                        src={getImageUrl(product.image)} 
                                        className="card-img-top" 
                                        alt={product.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `${BACKEND_URL}/images/default.png`;
                                        }}
                                        style={{ height: '200px', objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-truncate">{product.name}</h5>
                                    <p className="card-text text-muted" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: '3',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="h5 mb-0 text-primary">${product.price}</p>
                                        </div>
                                        <button className="btn btn-primary w-100">
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No hay productos disponibles</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Productos;
