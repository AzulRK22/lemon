// src/components/ConfirmedBooking.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  // Usamos useLocation para acceder al estado de la navegación
  const location = useLocation();
  const { formData } = location.state || {}; // Aseguramos que los datos estén presentes

  if (!formData) {
    return <p>No reservation data available</p>;  // Si no hay datos, mostramos un mensaje
  }

  return (
    <div className="confirmed-booking-container">
      <h1>Reservation Confirmed!</h1>
      <p>Thank you for your reservation. Here are the details:</p>
      <div className="booking-details">
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        <p><strong>Guests:</strong> {formData.guests}</p>
        <p><strong>Occasion:</strong> {formData.occasion || 'None'}</p>
      </div>
      <button className="back-button" onClick={() => window.history.back()}>Back to Booking</button>
    </div>
  );
}

export default ConfirmedBooking;
