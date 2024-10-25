import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';  
import MoviePoster from './Pages/MoviePoster';
import SpideySlider from './Pages/SpideySlider';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />  
          <Route path="/movie-poster" element={<MoviePoster />} />
          <Route path="/spidey-slider" element={<SpideySlider />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
