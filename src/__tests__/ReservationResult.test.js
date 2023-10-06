import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationResult from '../components/ReservationResult';

describe('ReservationResult', () => {
    const mockOnReturn = jest.fn();
    const mockReservationData = {
        date: '2023-10-06',
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
    };
    const mockContactInfoData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
    };

    const mockTheme = {
        typography: {
            contentText: 'Handlee, cursive',
            titleText: 'Permanent Marker, cursive',
        },
        palette: {
            secondary: {
                main: '#8c8c8c',
                contrastText: '#fff',
                dark: '#636363',
            }
        }
    };

    it('renders successfully reserved message on success', () => {
        render(
            <ReservationResult
                isReservedSuccess={true}
                onReturn={mockOnReturn}
                reservationData={mockReservationData}
                contactInfoData={mockContactInfoData}
                theme={mockTheme} // Adjust this based on your real theme.
            />
        );

        expect(screen.getByText(/Table Successfully Reserved./i)).toBeInTheDocument();
        expect(screen.getByText(/Date: 2023-10-06/i)).toBeInTheDocument();
        expect(screen.getByText(/First Name: John/i)).toBeInTheDocument();
    });

    it('renders failed reserved message on failure', () => {
        render(
            <ReservationResult
                isReservedSuccess={false}
                onReturn={mockOnReturn}
                reservationData={mockReservationData}
                contactInfoData={mockContactInfoData}
                theme={mockTheme} // Adjust this based on your real theme.
            />
        );

        expect(screen.getByText(/Table Failed to Reserve, please try again./i)).toBeInTheDocument();
    });

    // Add other tests as necessary.
});