import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactInfoForm({ onSubmit, onBackClick, initialData }) {
    // Define state variables for contact information
    const [firstName, setFirstName] = useState(initialData.firstName || '');
    const [lastName, setLastName] = useState(initialData.lastName || '');
    const [email, setEmail] = useState(initialData.email || '');
    const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber || '');

    // Event handlers to update state when input values change
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the contact information (e.g., send it to a server)
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
    };

    // Use useEffect to update the input fields when initialData changes
    useEffect(() => {
        setFirstName(initialData.firstName || '');
        setLastName(initialData.lastName || '');
        setEmail(initialData.email || '');
        setPhoneNumber(initialData.phoneNumber || '');
    }, [initialData]);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="outlined" // You can style the button as needed
                        color="primary"
                        onClick={onBackClick}
                    >
                        Back to Reservation
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        id="phone-number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Submit Contact Information
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
