import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>© {new Date().getFullYear()} Digital Mode Tarot. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
