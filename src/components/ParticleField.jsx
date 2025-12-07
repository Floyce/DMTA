import React from 'react';
import styles from './ParticleField.module.css';

const ParticleField = () => {
    // Create an array of 25 particles with random properties
    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        style: {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
            opacity: 0.1 + Math.random() * 0.3,
            transform: `scale(${0.5 + Math.random() * 1})`
        }
    }));

    return (
        <div className={styles.particleContainer}>
            {particles.map(p => (
                <div key={p.id} className={styles.particle} style={p.style} />
            ))}
        </div>
    );
};

export default ParticleField;
