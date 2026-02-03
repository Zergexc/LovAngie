import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Music2 } from 'lucide-react';
import './SongDedications.css';

// ¡AQUÍ AGREGAS TUS CANCIONES NUEVAS!
// El formato es: { id: "ID_DE_YOUTUBE", title: "Título", date: "Fecha", message: "Tu mensaje" }
const songs = [
    {
        id: "Rir_fuLX7HM",
        title: "Morat - No Se Va",
        date: "2 de Febrero",
        message: "Hoy escuché esto y no pude evitar pensar en ti, en cómo te quedas conmigo aunque estemos lejos. Eres mi pensamiento favorito, mi Angie hermosa."
    },
    {
        id: "VilDW2Aj9aM",
        title: "Morat - Besos En Guerra",
        date: "1 de Febrero",
        message: "Para mi princesa, porque lucharé por ti y por nosotros siempre. Te adoro."
    }
];

const SongDedications = () => {
    const [currentSong, setCurrentSong] = useState(songs[0]);

    return (
        <section className="songs-section">
            <h2 className="section-title">Canciones que tienen tu nombre</h2>
            <p className="section-subtitle">Cada letra me habla de ti, preciosa.</p>

            <div className="songs-container">
                {/* Reproductor Principal */}
                <motion.div
                    className="main-player glass-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="main-player-content">
                        <div className="video-wrapper">
                            <iframe
                                src={`https://www.youtube.com/embed/${currentSong.id}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="song-info">
                            <div className="song-header">
                                <span className="song-date"><Calendar size={14} /> {currentSong.date}</span>
                                <span className="song-tag">Para ti, mi amor</span>
                            </div>
                            <h3>{currentSong.title}</h3>
                            <div className="message-box">
                                <p className="song-message">"{currentSong.message}"</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Lista de Historial */}
                <div className="playlist-sidebar">
                    <h3>Historial</h3>
                    <div className="playlist-scroll">
                        {songs.map((song, index) => (
                            <motion.div
                                key={index}
                                className={`playlist-item ${currentSong.id === song.id ? 'active' : ''}`}
                                onClick={() => setCurrentSong(song)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="playlist-icon">
                                    {currentSong.id === song.id ? <Play size={16} fill="currentColor" /> : <Music2 size={16} />}
                                </div>
                                <div className="playlist-info">
                                    <h4>{song.title}</h4>
                                    <span>{song.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SongDedications;
