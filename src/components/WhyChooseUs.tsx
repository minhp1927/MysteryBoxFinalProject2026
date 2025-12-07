import React from 'react';
import styles from '../styles/components.module.css';

const features = [
    {
        icon: '✅',
        title: 'Sản phẩm chính hãng',
        description: 'Cam kết 100% sản phẩm trong mỗi hộp quà đều là hàng chính hãng, chất lượng cao.',
    },
    {
        icon: '🎁',
        title: 'Mở hộp đầy bất ngờ',
        description: 'Trải nghiệm cảm giác hồi hộp, thú vị khi khám phá những vật phẩm ngẫu nhiên.',
    },
    {
        icon: '🚚',
        title: 'Giao hàng siêu tốc',
        description: 'Hỗ trợ giao hàng nhanh chóng trên toàn quốc, nhận hàng chỉ trong 2-3 ngày.',
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className={styles.whyChooseUs}>
            <h2 className="section-title">Tại sao chọn MysteryBox?</h2>
            <div className={styles.whyChooseUsGrid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                        <span className={styles.featureIcon}>{feature.icon}</span>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
