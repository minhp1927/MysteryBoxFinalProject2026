import React from 'react';
import Link from 'next/link';
import styles from '../styles/components.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Link href="/">
                    <strong>MysteryBox</strong>
                </Link>
            </div>
            <nav className={styles.headerNav}>
                <ul>
                    <li>
                        <Link href="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link href="/products">Sản phẩm</Link>
                    </li>
                    <li>
                        <Link href="/users">Users</Link>
                    </li>
                    <li>
                        <Link href="/about">Về chúng tôi</Link>
                    </li>
                    <li>
                        <Link href="/contact">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.headerActions}>
                <span>🔍</span>
                <span>👤</span>
                <span>🛒</span>
            </div>
        </header>
    );
};

export default Header;