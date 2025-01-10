import React from 'react';
import './Specials.css';
import special1 from '../images/greeksalad.jpg';
import special2 from '../images/bruchetta.svg';
import special3 from '../images/lemon.jpg';

function Specials() {
  const specials = [
    {
      img: special1,
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicado stvle fetal cheese, garnished with crunchy garlic and rosemary croutons',
    },
    {
      img: special2,
      title: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic ano seasoned with salt and olive oil.',
    },
    {
      img: special3,
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from granamas recipe book, every last incredient has been sourced and is as authentic as can be imagined.',
    },
  ];

  return (
    <section className="specials">
      <h2>This weeks specials!</h2>
      <div className="specials-container">
        {specials.map((item, index) => (
          <article key={index} className="special-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">{item.price}</p>
            <p>{item.description}</p>
            <button>Order a delivery</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
