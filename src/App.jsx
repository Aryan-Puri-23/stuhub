import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Clubs from './pages/Clubs';
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<HomePage />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  );
}

export default App;
