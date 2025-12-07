import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <span className={styles.logoText}>Digital Mode Tarot</span>
            </Link>
            <nav className={styles.nav}>
                <Link to="/about" className={styles.navLink}>About</Link>
            </nav>
        </header>
    );
};

export default Header;
