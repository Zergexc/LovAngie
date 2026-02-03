import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import './LoveButton.css';

const messages = [
    "Eres mi sueño hecho realidad",
    "Cada día te quiero más, mi Angie",
    "Tu sonrisa es mi motor",
    "Ya quiero abrazarte",
    "Eres lo mejor de mi vida",
    "Gracias por existir, preciosa",
    "Siempre juntos",
    "Mi corazón es tuyo",
    "Te amo infinito",
    "Eres mi persona favorita",
    "Contando los segundos para verte",
    "Tus ojos son mi paz"
];

const LoveButton = () => {
    const [message, setMessage] = useState(null);

    const handleClick = () => {
        // Random confetti
        canvasConfetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#ec4899', '#f472b6']
        });

        // Random message
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMsg);

        // Auto hide after 3 seconds
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="love-button-container">
            <AnimatePresence>
                {message && (
                    <motion.div
                        className="love-popup glass-card"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="love-btn"
                onClick={handleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heart fill="white" className="love-btn-icon" />
                <span className="love-btn-text">Envíame amor</span>
            </motion.button>
        </div>
    );
};

export default LoveButton;
