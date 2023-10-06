import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReservationForm from '../components/ReservationForm';

describe('ReservationForm', () => {
    // const availableTimes = [
    //     '16:00',
    //     '17:00',
    //     '18:00',
    //     '19:00',
    //     '20:00',
    //     '21:00',
    //     '22:00',
    // ];

    const onSubmitMock = jest.fn();

    // const initialData = {
    //     date: '2023-10-05',
    //     time: '16:00',
    //     guests: 1,
    //     occasion: '',
    // };

    const mockAvailableTimes = [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const initialMockReservationData = {
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    };

    it('renders without crashing', () => {
        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                onSubmit={onSubmitMock}
                reservationData={initialMockReservationData}
            />
        );
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toBeInTheDocument();
    });

    it('updates input values on change', () => {
        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                onSubmit={onSubmitMock}
                reservationData={initialMockReservationData}
            />
        );

        // Testing date input
        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2023-10-06' } });
        expect(dateInput.value).toBe('2023-10-06');

        // Testing time select
        const timeSelect = screen.getByTestId('res-time');
        fireEvent.change(timeSelect, { target: { value: '18:00' } });
        expect(timeSelect.value).toBe('18:00');

        // Testing guests input
        const guestsInput = screen.getByLabelText(/number of guests/i);
        fireEvent.change(guestsInput, { target: { value: 3 } });
        expect(guestsInput.value).toBe('3');

        // Testing occasion select
        const occasionSelect = screen.getByTestId('occasion');
        fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
        expect(occasionSelect.value).toBe('Anniversary');
    });

    it.skip('fires onSubmit with form data on submission', async () => {
        const onSubmitMock = jest.fn();
        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                onSubmit={onSubmitMock}
                reservationData={initialMockReservationData}
            />
        );

        // Fill in the form data
        const dateInput = screen.getByTestId('res-date');
        fireEvent.change(dateInput, { target: { value: '2023-10-06' } });

        const timeSelect = screen.getByTestId('res-time');
        fireEvent.change(timeSelect, { target: { value: '16:00' } });

        const guestsInput = screen.getByTestId('guests');
        fireEvent.change(guestsInput, { target: { value: 2 } });

        const occasionSelect = screen.getByTestId('occasion');
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        // Click the submit button
        const submitButton = screen.getByTestId('proceedToNextStepButton');
        fireEvent.click(submitButton);

        console.log("----------------");
        console.log(onSubmitMock.mock.calls);
        console.log("----------------");
        // Check if the mock function was called with the correct form data
        expect(onSubmitMock).toHaveBeenCalledWith({
            date: '2023-10-06',
            time: '16:00',
            guests: 2,
            occasion: 'Birthday'
        });
    });
});