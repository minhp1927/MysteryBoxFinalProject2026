import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import { mockProducts } from '../data/products';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <WhyChooseUs />
            <main className="main-container">
                <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
                <div className="product-grid">
                    {mockProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;