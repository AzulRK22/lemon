import React from 'react';
import './Header.css';
import Logo from '../images/Logo.svg';  // Importa la imagen

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />  {/* Usa la variable Logo */}
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
