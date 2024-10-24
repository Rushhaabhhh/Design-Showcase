import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';  
import MoviePoster from './Pages/MoviePoster';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />  
          <Route path="/movie-poster" element={<MoviePoster />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
