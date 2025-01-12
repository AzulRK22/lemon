import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../images/Logo.svg';
import Hamburger from '../images/hamburger.svg';  // Asegúrate de que tienes el archivo
import BookingPage from './BookingPage.js'
import Home from './Main.js'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para controlar el menú en móviles

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Cambiar el estado del menú
  };

  const goToReservations = () => {
    window.location.href = BookingPage;  // O usa la ruta absoluta si es necesario
  };
  const goToHome = () => {
    window.location.href = Home;  // O usa la ruta absoluta si es necesario
  };


  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <button className="hamburger-icon" onClick={toggleMenu}>
        <img src={Hamburger} alt="Menu" />
      </button>
    </header>
  );
}

export default Header;
