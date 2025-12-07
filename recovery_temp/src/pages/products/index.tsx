import React from 'react';
import ProductCard from '../../../components/ProductCard';
import { useFetch } from '../../../hooks/useFetch';

const ProductsPage = () => {
    const { data: products, loading, error } = useFetch('/api/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <div>
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;