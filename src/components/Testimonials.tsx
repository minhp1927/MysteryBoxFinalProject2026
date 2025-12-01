import React from 'react';
import styles from '../styles/components.module.css';
import { mockTestimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
            <div className={styles.testimonialList}>
                {mockTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className={styles.testimonialCard}>
                        <p>"{testimonial.message}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;