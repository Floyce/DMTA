import React from 'react';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <ParticleField />
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.card}>
                    <h1 className={styles.title}>About Digital Mode Tarot</h1>
                    <div className={styles.bodyText}>
                        <p>
                            Logic and intuition are often seen as opposites. Here, we believe they are two sides of the same coin.
                        </p>
                        <p>
                            Digital Mode Tarot is not about predicting the future. It is about reflecting the present.
                            Built on the concept of emotional archetypes, this application uses randomness as a mirror
                            to reveal the subconscious currents of your current state.
                        </p>
                        <p>
                            In a world of constant noise, we offer a moment of digital stillness.
                            A pause. A breath. A color.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
