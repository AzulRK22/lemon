import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, onDateChange, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    if (id === "date") {
      onDateChange(value);  // Aseguramos que la fecha se pase correctamente al componente padre
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData); // Enviamos los datos al componente principal
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

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
