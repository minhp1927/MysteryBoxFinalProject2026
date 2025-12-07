import React from 'react';
import Link from 'next/link';
import styles from '../styles/components.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGrid}>
                <div className={styles.footerColumn}>
                    <h4>Về MysteryBox</h4>
                    <ul>
                        <li><Link href="/about">Giới thiệu</Link></li>
                        <li><Link href="#">Điều khoản dịch vụ</Link></li>
                        <li><Link href="#">Chính sách bảo mật</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Hỗ trợ khách hàng</h4>
                    <ul>
                        <li><Link href="/contact">Liên hệ</Link></li>
                        <li><Link href="#">Câu hỏi thường gặp</Link></li>
                        <li><Link href="#">Chính sách đổi trả</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h4>Kết nối với chúng tôi</h4>
                    <p>Cập nhật những thông tin mới nhất về các sản phẩm và chương trình khuyến mãi.</p>
                    <div className={styles.footerSocial}>
                        <Link href="#" aria-label="Facebook">FB</Link>
                        <Link href="#" aria-label="Instagram">IG</Link>
                        <Link href="#" aria-label="Tiktok">TK</Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; {new Date().getFullYear()} MysteryBox. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;