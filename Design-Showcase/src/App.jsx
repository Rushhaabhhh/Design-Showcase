import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';  
import MoviePoster from './Pages/MoviePoster';
import SpideySlider from './Pages/SpideySlider';
// import Jewellery from './Pages/Jewellery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />  
          <Route path="/movie-poster" element={<MoviePoster />} />
          <Route path="/spidey-slider" element={<SpideySlider />} />
          {/* <Route path="/jewellery" element={<Jewellery />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
