import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactInfoForm from '../components/ContactInfoForm';

describe('ContactInfoForm', () => {
    const mockOnSubmit = jest.fn();
    const mockOnBackClick = jest.fn();
    const mockReservationData = {
        date: '2023-10-06',
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
    };
    const mockContactInfoData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    };

    it('renders without crashing', () => {
        render(
            <ContactInfoForm
                onSubmit={mockOnSubmit}
                onBackClick={mockOnBackClick}
                reservationData={mockReservationData}
                contactInfoData={mockContactInfoData}
                theme={{palette: {secondary: {main: '#fff', contrastText: '#000', dark: '#000'}}}} // You can adjust this as per your real theme.
            />
        );

        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });

    it('updates input values on change', () => {
        render(
            <ContactInfoForm
                onSubmit={mockOnSubmit}
                onBackClick={mockOnBackClick}
                reservationData={mockReservationData}
                contactInfoData={mockContactInfoData}
                theme={{palette: {secondary: {main: '#fff', contrastText: '#000', dark: '#000'}}}} // You can adjust this as per your real theme.
            />
        );

        const firstNameInput = screen.getByLabelText(/first name/i);
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        expect(firstNameInput.value).toBe('John');

        const lastNameInput = screen.getByLabelText(/last name/i);
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        expect(lastNameInput.value).toBe('Doe');

        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        expect(emailInput.value).toBe('john.doe@example.com');

        const phoneNumberInput = screen.getByLabelText(/phone number/i);
        fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
        expect(phoneNumberInput.value).toBe('1234567890');
    });

    it.skip('fires onSubmit with form data on submission', () => {
        render(
            <ContactInfoForm
                onSubmit={mockOnSubmit}
                onBackClick={mockOnBackClick}
                reservationData={mockReservationData}
                contactInfoData={mockContactInfoData}
                theme={{palette: {secondary: {main: '#fff', contrastText: '#000', dark: '#000'}}}} // You can adjust this as per your real theme.
            />
        );

        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const phoneNumberInput = screen.getByLabelText(/phone number/i);
        const submitButton = screen.getByRole('button', { name: /make your reservation/i });

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });

        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalledWith({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '1234567890',
        });
    });
});
