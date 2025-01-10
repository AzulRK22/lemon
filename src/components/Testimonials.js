import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';  // Importar el ícono de estrella
import user1 from '../images/alex.jpg';
import user2 from '../images/sarah.jpg';
import user3 from '../images/andrew.jpg';
import user4 from '../images/anna.jpg';

function Testimonials() {
  const testimonials = [
    { img: user1, name: 'John', review: 'Amazing food!', stars: 5 },
    { img: user2, name: 'Sarah', review: 'Loved the ambiance!', stars: 4 },
    { img: user3, name: 'Mike', review: 'Great service!', stars: 4 },
    { img: user4, name: 'Anna', review: 'Best dessert ever!', stars: 5 },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="stars">
              {Array(item.stars).fill(<FaStar />)} {/* Mostrar las estrellas según la calificación */}
            </div>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
