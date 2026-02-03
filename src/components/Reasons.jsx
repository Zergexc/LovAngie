import React from 'react';
import { motion } from 'framer-motion';
import { Star, Smile, Music, Heart } from 'lucide-react';
import './Reasons.css';

const reasons = [
    {
        icon: <Smile size={32} />,
        title: "Tu Sonrisa",
        desc: "Ilumina mis días, incluso a través de una pantalla."
    },
    {
        icon: <Music size={32} />,
        title: "Tu Voz",
        desc: "Mi sonido favorito en todo el mundo."
    },
    {
        icon: <Heart size={32} />,
        title: "Tu Amor",
        desc: "La forma en que me cuidas y me haces sentir especial."
    },
    {
        icon: <Star size={32} />,
        title: "Nuestro Futuro",
        desc: "Saber que pronto estaremos juntos lo es todo."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Reasons = () => {
    return (
        <section className="reasons-section">
            <h2 className="section-title">Lo que amo de ti</h2>

            <motion.div
                className="reasons-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {reasons.map((reason, index) => (
                    <motion.div key={index} variants={item} className="reason-card glass-card">
                        <div className="reason-icon">{reason.icon}</div>
                        <h3 className="reason-title">{reason.title}</h3>
                        <p className="reason-desc">{reason.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Reasons;
