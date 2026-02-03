import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero-bg-shapes">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="shape shape-1"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="shape shape-2"
                />
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="hero-badge">
                        Para mi persona favorita
                    </span>
                    <h1 className="hero-title text-gradient">
                        Hola, mi Princesa
                    </h1>
                    <p className="hero-subtitle">
                        Aunque estemos lejos, cada segundo nos acerca más. <br />
                        Hice este pequeño espacio pensando en ti, mi Angie hermosa.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="hero-icon"
                >
                    <Heart size={64} className="heart-icon" fill="currentColor" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="hero-scroll"
            >
                <p>Desliza hacia abajo</p>
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
