import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockSubmit = jest.fn();
  const mockDateChange = jest.fn();

  test('muestra los campos del formulario correctamente', () => {
    render(<BookingForm availableTimes={['18:00', '19:00', '20:00']} onDateChange={mockDateChange} submitForm={mockSubmit} />);
    
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('llama a onDateChange cuando se cambia la fecha', () => {
    render(<BookingForm availableTimes={['18:00', '19:00', '20:00']} onDateChange={mockDateChange} submitForm={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-15' } });

    expect(mockDateChange).toHaveBeenCalledWith('2025-01-15');
  });

  test('llama a submitForm cuando el formulario es enviado', () => {
    render(<BookingForm availableTimes={['18:00', '19:00', '20:00']} onDateChange={mockDateChange} submitForm={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-01-15' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByText(/Make Your Reservation/i));

    expect(mockSubmit).toHaveBeenCalledWith({
      date: '2025-01-15',
      time: '18:00',
      guests: "2",
      occasion: 'Birthday',
    });
  });
});
