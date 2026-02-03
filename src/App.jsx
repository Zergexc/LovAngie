import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timer from './components/Timer';
import Reasons from './components/Reasons';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import LoveButton from './components/LoveButton';
import Story from './components/Story';
import SongDedications from './components/SongDedications';
import BackgroundParticles from './components/BackgroundParticles';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BackgroundParticles />
      <MusicPlayer />
      <LoveButton />
      <Hero />
      <Timer targetDate="2026-02-14T00:00:00" /> {/* Default date, configurable */}
      <SongDedications />
      <Story />
      <Gallery />
      <Reasons />
      <Letter />
      <Footer />
    </div>
  );
}

export default App;
