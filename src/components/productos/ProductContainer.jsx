import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simula una llamada a la API para obtener los productos
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products'); // Reemplaza con la URL de tu API
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center my-4">Nuestros Productos</h2>
            <ProductList products={products} />
        </div>
    );
};

export default ProductContainer;