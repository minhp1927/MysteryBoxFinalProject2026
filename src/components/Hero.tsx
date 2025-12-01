import React from 'react';
import styles from '../styles/components.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Welcome to HapaBox</h1>
            <p className={styles.heroSubtitle}>Your one-stop solution for all your needs.</p>
            <button className={styles.heroButton}>Get Started</button>
        </div>
    );
};

export default Hero;