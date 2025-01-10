import React from 'react';
import Slider from 'react-slick';
import './About.css';
import about1 from '../images/chefB.jpg';
import about2 from '../images/restaurant.jpg';

function About() {
  // Configuración del carrusel
  const settings = {
    dots: true, // Mostrar puntos para navegar entre las imágenes
    infinite: true, // Hacer que el carrusel se repita de forma infinita
    speed: 500, // Velocidad de la transición entre imágenes
    slidesToShow: 1, // Solo mostrar una imagen a la vez
    slidesToScroll: 1, // Desplazarse de una en una imagen
    autoplay: true, // Hacer que las imágenes se deslicen automáticamente
    autoplaySpeed: 3000, // Tiempo entre cada transición
    arrows: false, // Ocultar las flechas por defecto
  };

  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>At Little Lemon, we are passionate about serving up delightful Mediterranean dishes. Our mission is to bring the true essence of Mediterranean cuisine to Chicago. Join us to explore the vibrant flavors that tell a story of tradition and innovation.</p>
        <p>Our chefs use the freshest ingredients, sourced locally, to prepare dishes that honor both authenticity and creativity. Whether you're enjoying a cozy dinner or celebrating with friends, Little Lemon offers an unforgettable dining experience.</p>
      </div>

      <div className="about-images">
        <Slider {...settings}>
          <div>
            <img src={about1} alt="Chef at work" />
          </div>
          <div>
            <img src={about2} alt="Restaurant view" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default About;
