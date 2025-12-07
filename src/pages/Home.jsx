import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import MoodButton from '../components/MoodButton';
import moodCards from '../data/moodcards.json';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);

    const handleDraw = (isSpecial = false) => {
        setIsExiting(true);

        // Select a random card
        // Extended logic: if special, maybe pick from a specific set or guarantee a 'rare' one if implemented
        const randomIndex = Math.floor(Math.random() * moodCards.length);
        const selectedCard = moodCards[randomIndex];

        // Delay navigation slightly for exit animation
        setTimeout(() => {
            navigate('/reveal', { state: { card: selectedCard, isSpecial } });
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <ParticleField />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -20 : 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>
                    <span className={styles.titleSmall}>Welcome to</span>
                    <br />
                    Digital Mode Tarot
                </h1>
                <p className={styles.tagline}>Discover the emotional archetype defining your moment.</p>

                <div className={styles.buttonContainer}>
                    <MoodButton
                        onDraw={() => handleDraw(false)}
                        onLongPress={() => handleDraw(true)}
                    />
                    <p className={styles.instruction}>Tap to draw • Long press for a deeper reading</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
