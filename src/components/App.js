import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Header';
import Home from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
