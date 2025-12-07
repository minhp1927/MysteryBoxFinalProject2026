import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components.module.css';

const Header: React.FC = () => {
    const [user, setUser] = useState<{ name: string } | null>(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('currentUser');
            if (raw) setUser(JSON.parse(raw));
        } catch (e) {
            setUser(null);
        }
    }, []);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('currentUser');
            setUser(null);
            // reload to update UI
            window.location.href = '/';
        }
    };

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
                {user ? (
                    <>
                        <span style={{ marginLeft: 8 }}>{user.name}</span>
                        <button onClick={handleLogout} style={{ marginLeft: 8 }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login">Login</Link>
                    </>
                )}
                <span style={{ marginLeft: 8 }}>🛒</span>
            </div>
        </header>
    );
};

export default Header;