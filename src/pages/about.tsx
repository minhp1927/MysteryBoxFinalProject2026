import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/components.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.aboutPage}>
            <Header />
            <main className={styles.mainContent}>
                <h1>About Us</h1>
                <p>
                    Welcome to our website! We are dedicated to providing the best products and services to our customers. Our mission is to deliver quality and value in everything we do.
                </p>
                <p>
                    Our team is passionate about what we do, and we strive to exceed your expectations. Thank you for visiting our site, and we hope to serve you soon!
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default About;