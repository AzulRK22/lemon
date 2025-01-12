import React from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm />
    </div>
  );
}

export default BookingPage;