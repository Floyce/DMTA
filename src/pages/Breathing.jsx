import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Breathing.module.css';
import GradientBackground from '../components/GradientBackground';

const Breathing = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { themeColor, type } = location.state || { themeColor: '#FF9ECF', type: 'light' };

    // Breathing phases: 'inhale', 'hold', 'exhale'
    const [phase, setPhase] = useState('inhale');
    const [instruction, setInstruction] = useState('Breathe In');

    useEffect(() => {
        const cycle = type === 'dark' ? 10000 : 12000; // Total cycle length
        const inhaleTime = 4000;
        const holdTime = type === 'dark' ? 0 : 4000; // Box breathing for light, 4-6 breathing for dark
        // const exhaleTime = cycle - inhaleTime - holdTime;

        const runCycle = () => {
            setPhase('inhale');
            setInstruction('Breathe In');

            setTimeout(() => {
                if (holdTime > 0) {
                    setPhase('hold');
                    setInstruction('Hold');
                    setTimeout(() => {
                        setPhase('exhale');
                        setInstruction('Breathe Out');
                    }, holdTime);
                } else {
                    setPhase('exhale');
                    setInstruction('Breathe Out');
                }
            }, inhaleTime);
        };

        runCycle();
        const interval = setInterval(runCycle, cycle);
        return () => clearInterval(interval);
    }, [type]);

    return (
        <div className={styles.container}>
            <GradientBackground type={type} />
            <motion.div
                className={styles.circleContainer}
                animate={{
                    scale: phase === 'inhale' ? 1.5 : (phase === 'hold' ? 1.5 : 1),
                    opacity: phase === 'inhale' ? 0.8 : (phase === 'hold' ? 0.8 : 0.4)
                }}
                transition={{
                    duration: phase === 'inhale' ? 4 : (phase === 'hold' ? 0 : (type === 'dark' ? 6 : 4)),
                    ease: "easeInOut"
                }}
            >
                <div className={styles.circle} style={{ borderColor: themeColor, boxShadow: `0 0 40px ${themeColor}60` }} />
                <div className={styles.innerCircle} style={{ background: themeColor }} />
            </motion.div>

            <motion.h2
                className={styles.instruction}
                key={instruction}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >
                {instruction}
            </motion.h2>

            <button onClick={() => navigate('/')} className={styles.backButton}>End Session</button>
        </div>
    );
};

export default Breathing;
