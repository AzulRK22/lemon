import React from 'react';
import './Footer.css';
import mario from '../images/mario.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Componente de la imagen del logo
const FooterLogo = () => (
  <div className="footer-logo">
    <img src={mario} alt="Little Lemon Logo" />
  </div>
);

// Componente de navegación
const FooterNavigation = () => (
  <div className="footer-section">
    <h4>Navigation</h4>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#order-online">Order Online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </div>
);

// Componente de contacto
const FooterContact = () => (
  <div className="footer-section">
    <h4>Contact</h4>
    <ul>
      <li>123 Main St, Cityville</li>
      <li>+1 (123) 456-7890</li>
      <li>info@littlelemon.com</li>
    </ul>
  </div>
);

// Componente de enlaces sociales
const FooterSocialLinks = () => (
  <div className="footer-section">
    <h4>Social Links</h4>
    <ul className="social-links">
      <li><a href="https://facebook.com"><FaFacebook /></a></li>
      <li><a href="https://twitter.com"><FaTwitter /></a></li>
      <li><a href="https://instagram.com"><FaInstagram /></a></li>
    </ul>
  </div>
);

// Componente final del footer
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <FooterLogo />
        <div className="footer-sections">
          <FooterNavigation />
          <FooterContact />
          <FooterSocialLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Little Lemon | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
