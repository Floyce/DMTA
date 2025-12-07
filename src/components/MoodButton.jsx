import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MoodButton.module.css';

const MoodButton = ({ onDraw, onLongPress }) => {
    const timerRef = useRef(null);
    const [isPressing, setIsPressing] = useState(false);

    const startPress = () => {
        setIsPressing(true);
        timerRef.current = setTimeout(() => {
            if (onLongPress) {
                onLongPress();
                setIsPressing(false); // Reset state to prevent onClick
                timerRef.current = null; // Mark as handled
            }
        }, 1500); // 1.5s for long press
    };

    const endPress = (e) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
            if (isPressing) {
                onDraw(); // Only trigger draw if we haven't long-pressed
            }
        }
        setIsPressing(false);
    };

    return (
        <div className={styles.buttonWrapper}>
            <motion.button
                className={styles.moodButton}
                onMouseDown={startPress}
                onMouseUp={endPress}
                onMouseLeave={() => {
                    clearTimeout(timerRef.current);
                    setIsPressing(false);
                }}
                onTouchStart={startPress}
                onTouchEnd={(e) => {
                    e.preventDefault(); // Prevent click emulation
                    endPress();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: [
                        "0 0 0px rgba(255, 158, 207, 0.4)",
                        "0 0 20px rgba(255, 158, 207, 0.6)",
                        "0 0 0px rgba(255, 158, 207, 0.4)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <span className={styles.text}>Draw My Mood</span>
            </motion.button>
            {isPressing && (
                <motion.div
                    className={styles.longPressIndicator}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "linear" }}
                />
            )}
        </div>
    );
};

export default MoodButton;
