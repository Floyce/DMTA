import React from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

// SVG Placeholder generator based on name
const CardSymbol = ({ name, color }) => (
    <div className={styles.symbolContainer} style={{ color }}>
        <svg viewBox="0 0 100 100" fill="currentColor" width="80" height="80">
            {/* Simple geometric abstractions as placeholders */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        </svg>
    </div>
);

const Card = ({ card, isFront = true }) => {
    if (!isFront) {
        return (
            <div className={`${styles.card} ${styles.cardBack}`}>
                <div className={styles.pattern} />
            </div>
        );
    }

    return (
        <div className={`${styles.card} ${styles.cardFront}`}>
            <div className={styles.cardInner} style={{ border: `1px solid ${card.themeColor}40` }}>
                <div className={styles.header}>
                    <span className={styles.cardId}>#{card.id.split('_')[0].toUpperCase()}</span>
                </div>
                <div className={styles.content}>
                    <CardSymbol name={card.symbol} color={card.themeColor} />
                    <h2 className={styles.cardTitle} style={{ color: card.themeColor }}>{card.title}</h2>
                    <div className={styles.keywords}>
                        {card.keywords.map(k => <span key={k} className={styles.keyword}>{k}</span>)}
                    </div>
                    <div className={styles.divider} style={{ background: card.themeColor }} />
                    <p className={styles.description}>{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
