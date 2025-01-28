import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    const products = [
        { id: 1, name: 'Producto 1', price: 29.99, image: 'url_imagen_1' },
        { id: 2, name: 'Producto 2', price: 39.99, image: 'url_imagen_2' },
        { id: 3, name: 'Producto 3', price: 49.99, image: 'url_imagen_3' },
    ];

    return (
        <div className="container">
            <h2 className="text-center my-4">Nuestros Productos</h2>
            <ProductList products={products} />
        </div>
    );
};

export default Home;