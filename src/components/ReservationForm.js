import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function ReservationForm({ onSubmit, initialData, availableTimes, onTimeChange, time }) {
    // Define state variables for each input field and set their initial values from props
    const [date, setDate] = useState(initialData.date || '');
    // const [time, setTime] = useState(initialData.time || '');
    const [guests, setGuests] = useState(initialData.guests || 1); // Default to 1 guest
    const [occasion, setOccasion] = useState(initialData.occasion || '');

    // Event handlers to update state when input values change
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    // const handleTimeChange = (event) => {
    //     setTime(event.target.value);
    // };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Call the onSubmit prop to submit the form data to the parent component
        // onSubmit({ date, time, guests, occasion });
        onSubmit({ date, guests, occasion });
    };

    // Use useEffect to update the input fields when initialData changes
    useEffect(() => {
        setDate(initialData.date || '');
        // setTime(initialData.time || '');
        setGuests(initialData.guests || 1);
        setOccasion(initialData.occasion || '');
    }, [initialData]);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Choose date"
                        type="date"
                        id="res-date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date}
                        onChange={handleDateChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="res-time">Choose time</InputLabel>
                        <Select
                            label="Choose time"
                            id="res-time"
                            value={time}
                            // onChange={handleTimeChange}
                            onChange={onTimeChange}
                        >
                            {availableTimes.map((timeOption) => (
                                <MenuItem key={timeOption} value={timeOption}>
                                    {timeOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Number of guests"
                        type="number"
                        placeholder="1"
                        inputProps={{
                            min: 1,
                            max: 10,
                        }}
                        id="guests"
                        value={guests}
                        onChange={handleGuestsChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="occasion">Occasion</InputLabel>
                        <Select
                            label="Occasion"
                            id="occasion"
                            value={occasion}
                            onChange={handleOccasionChange}
                        >
                            <MenuItem value="Birthday">Birthday</MenuItem>
                            <MenuItem value="Anniversary">Anniversary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
