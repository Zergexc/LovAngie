import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Heart, Plane } from 'lucide-react';
import './Story.css';

const milestones = [
    {
        date: "El inicio",
        title: "Cuando nos conocimos",
        description: "El momento en que nuestros caminos se cruzaron y todo cambió.",
        icon: <Calendar size={20} />
    },
    {
        date: "Primeras Llamadas",
        title: "Horas hablando",
        description: "Esas madrugadas donde el sueño no importaba, solo escucharte.",
        icon: <Phone size={20} />
    },
    {
        date: "La Visita",
        title: "El primer abrazo",
        description: "Cuando la distancia se hizo cero y pude sentirte real.",
        icon: <Heart size={20} />
    },
    {
        date: "Febrero 2026",
        title: "El Reencuentro",
        description: "La cuenta regresiva termina. No puedo esperar a verte de nuevo.",
        icon: <Plane size={20} />
    }
];

const Story = () => {
    return (
        <section className="story-section">
            <h2 className="section-title">Nuestra Historia</h2>
            <div className="timeline">
                <div className="timeline-line"></div>
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-dot">
                            {item.icon}
                        </div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">{item.date}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-desc">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Story;
