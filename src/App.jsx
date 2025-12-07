import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import GradientBackground from './components/GradientBackground';
import Home from './pages/Home';
import About from './pages/About';
import Breathing from './pages/Breathing';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reveal" element={<CardReveal />} />
        <Route path="/breathe" element={<Breathing />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <GradientBackground />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
