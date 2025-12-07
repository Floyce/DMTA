import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './GradientBackground.module.css';

const GradientBackground = ({ type = 'default' }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            background: type === 'dark'
                ? 'linear-gradient(135deg, #1A0B2E 0%, #2D0F28 50%, #000000 100%)'
                : 'linear-gradient(135deg, #1A0B2E 0%, #4B0082 50%, #FF9ECF 100%)',
            transition: { duration: 1.5, ease: "easeInOut" }
        });
    }, [type, controls]);

    return (
        <motion.div
            className={styles.container}
            animate={controls}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <div className={styles.overlay} />
        </motion.div>
    );
};

export default GradientBackground;
