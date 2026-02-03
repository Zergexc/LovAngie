import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container">
            <audio ref={audioRef} loop>
                {/* Coloca tu canción 'song.mp3' en la carpeta public */}
                <source src="/song.mp3" type="audio/mp3" />
            </audio>

            <motion.button
                className={`music-btn ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            {isPlaying && (
                <motion.div
                    className="music-waves"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                </motion.div>
            )}
        </div>
    );
};

export default MusicPlayer;
