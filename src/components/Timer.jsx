import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Timer.css';

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { días: 0, horas: 0, minutos: 0, segundos: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timeComponents = Object.keys(timeLeft).map((interval) => {
        return (
            <div className="timer-box glass-card" key={interval}>
                <span className="timer-value">{timeLeft[interval]}</span>
                <span className="timer-label">{interval}</span>
            </div>
        );
    });

    return (
        <section className="timer-section">
            <h2 className="section-title">Tiempo para verte</h2>
            <div className="timer-container">
                {timeComponents.length ? timeComponents : <span>¡Llegó el día!</span>}
            </div>
        </section>
    );
};

export default Timer;
