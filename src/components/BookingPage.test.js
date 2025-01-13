import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from '../api';

import { BrowserRouter as Router } from 'react-router-dom';

// Mock de las funciones de la API
jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('muestra el formulario correctamente', () => {
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);
    
    render(
      <Router>
        <BookingPage />
      </Router>
    );

    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('actualiza los horarios disponibles cuando se cambia la fecha', async () => {
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);
    
    render(
      <Router>
        <BookingPage />
      </Router>
    );

    // Cambiar la fecha
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-15' } });

    // Verificar que la API se llama con la fecha correcta
    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-01-15'));
      expect(fetchAPI).toHaveBeenCalledTimes(1);
    });

    // Verificar que los tiempos están en el formulario
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
    expect(screen.getByText('20:00')).toBeInTheDocument();
  });

  test('navega a la página de confirmación después de enviar el formulario', async () => {
    fetchAPI.mockResolvedValue(['18:00', '19:00', '20:00']);
    submitAPI.mockReturnValue(true);
    const navigate = jest.fn();

    render(
      <Router>
        <BookingPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-15' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    
    fireEvent.click(screen.getByText(/Make Your Reservation/i));

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/confirmed", { state: { formData: { date: '2025-01-15', time: '18:00', guests: 2, occasion: 'Birthday' } } });
    });
  });
});
