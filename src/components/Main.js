import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Welcome to Little Lemon</h1>
        <p>We are a family-owned Mediterranean restaurant.</p>
        <button className="cta-button">Reserve a Table</button>
      </section>
      <section className="specials">
        <h2>This Week's Specials!</h2>
        {/* Agregar cards aquí */}
      </section>
    </main>
  );
}

export default Main;
