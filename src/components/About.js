import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...</p>
      </div>
      <div className="about-images">
        <img src="../images/about1.jpg" alt="About Image 1" />
        <img src="../images/about2.jpg" alt="About Image 2" />
      </div>
    </section>
  );
}

export default About;
