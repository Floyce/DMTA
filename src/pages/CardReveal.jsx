import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import Card from '../components/Card';
import styles from './CardReveal.module.css';
import GradientBackground from '../components/GradientBackground';

const CardReveal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cardRef = useRef(null);
    const { card } = location.state || {};

    useEffect(() => {
        if (!card) {
            navigate('/');
        }
    }, [card, navigate]);

    if (!card) return null;

    const handleSaveImage = async () => {
        if (cardRef.current) {
            try {
                const canvas = await html2canvas(cardRef.current, {
                    backgroundColor: null,
                    scale: 2
                });
                const link = document.createElement('a');
                link.download = `digital-mood-${card.id}.png`;
                link.href = canvas.toDataURL();
                link.click();
            } catch (err) {
                console.error("Failed to save image", err);
            }
        }
    };

    return (
        <div className={styles.container}>
            <GradientBackground type={card.type === 'dark' ? 'dark' : 'default'} />

            <motion.div
                className={styles.revealWrapper}
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
                <div ref={cardRef} className={styles.cardContainer}>
                    <Card card={card} />
                </div>
            </motion.div>

            <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <div className={styles.descriptionText}>
                    <p>{card.description}</p>
                </div>

                <div className={styles.buttons}>
                    <button onClick={() => navigate('/')} className={styles.actionButton}>
                        Draw Another
                    </button>
                    <button onClick={handleSaveImage} className={styles.actionButton}>
                        Save Card
                    </button>
                    <button onClick={() => navigate('/breathe', { state: { themeColor: card.themeColor, type: card.type } })} className={`${styles.actionButton} ${styles.breatheButton}`}>
                        Breathe
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default CardReveal;
