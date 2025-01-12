import React, { useState } from "react";
import './BookingForm.css';

function BookingForm() {
    const [formData, setFormData] = useState({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
  
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Reservation submitted:", formData);
    };
  
    return (
      <form className="booking-form-container" onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="time">Choose time</label>
        <select id="time" value={formData.time} onChange={handleChange} required>
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
  
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          placeholder="1"
          required
        />
  
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
  
        <input type="submit" value="Make Your Reservation" />
      </form>
    );
  }
  
  export default BookingForm;