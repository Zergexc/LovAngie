import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import './Letter.css';

const Letter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openLetter = () => {
        setIsOpen(true);
        canvasConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ec4899', '#8b5cf6', '#ffffff']
        });
    };

    return (
        <section className="letter-section">
            <h2 className="section-title">Una carta para ti</h2>

            <div className="letter-container">
                {!isOpen && (
                    <motion.div
                        className="envelope-wrapper"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openLetter}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="envelope glass-card">
                            <Mail size={80} className="envelope-icon" />
                            <span>Toca para abrir</span>
                        </div>
                    </motion.div>
                )}

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="letter-content glass-card"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={24} />
                            </button>
                            <div className="letter-text">
                                <h3>Mi querida niña,</h3>
                                <p>
                                    No suelo escribir cosas así, pero quería que tuvieras algo especial en este sitio.
                                    <br /><br />
                                    A pesar de la distancia, siento que estás conmigo todo el tiempo. Contar los días
                                    para verte es lo que me mantiene ilusionado. Febrero y marzo serán nuestros meses.
                                    <br /><br />
                                    Gracias por ser como eres, por tu paciencia y por tu cariño.
                                    <br /><br />
                                    Te quiero muchísimo.
                                </p>
                                <p className="signature">Con amor, tu novio ❤️</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Letter;
