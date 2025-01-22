import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FocusSection from './components/FocusSection';
import FocusSection2 from './components/FocusSection2';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import GameTheory from './components/GameTheory';
import Loading from './components/Loading';

const App = () => {
  const [showFocusSection, setShowFocusSection] = useState(true);

  const toggleFocusSection = () => {
    setShowFocusSection((prev) => !prev);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              {showFocusSection ? (
                <FocusSection toggleFocusSection={toggleFocusSection} />
              ) : (
                <FocusSection2 toggleFocusSection={toggleFocusSection} />
              )}
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <GameTheory />
              <Footer />
            </>
          }
        />
        <Route
          path="/loading"
          element={
            <>
              <Loading />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
