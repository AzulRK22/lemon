import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

  const updateTimes = (date) => {
    fetchAPI(new Date(date)).then(times => setAvailableTimes(times));
  };

  useEffect(() => {
    updateTimes(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);  // Actualizamos la fecha seleccionada
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Navegamos a la página de confirmación pasando los datos del formulario
      navigate("/confirmed", { state: { formData } });
    }
  };

  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange} 
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
