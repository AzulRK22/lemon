function Footer() {
    return (
      <footer>
        <div className="footer-content">
          {/* Imagen en el lado izquierdo */}
          <img src="./assets/Logo.svg" alt="Little Lemon Logo" />
          {/* Navegación */}
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
          {/* Contacto */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>123 Main St, Cityville</li>
              <li>+1 (123) 456-7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
          {/* Enlaces sociales */}
          <div className="footer-section">
            <h4>Social Links</h4>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
export default Footer;