import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Placeholders - reemplaza estas rutas con tus fotos reales en src/assets
// import photo1 from '../assets/photo1.jpg';
// import photo2 from '../assets/photo2.jpg';

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2 className="section-title">Nuestros Momentos</h2>
            <div className="gallery-container">
                <motion.div
                    className="photo-card"
                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                >
                    {/* Reemplaza src con tu foto */}
                    <div className="photo-inner">
                        <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop" alt="Nosotros 1" />
                        <span className="photo-caption">La primera vez</span>
                    </div>
                </motion.div>

                <motion.div
                    className="photo-card"
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                >
                    {/* Reemplaza src con tu foto */}
                    <div className="photo-inner">
                        <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop" alt="Nosotros 2" />
                        <span className="photo-caption">Juntos</span>
                    </div>
                </motion.div>
            </div>
            <p className="gallery-note">Solo dos fotos por ahora, pero miles de recuerdos por crear.</p>
        </section>
    );
};

export default Gallery;
