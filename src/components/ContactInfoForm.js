import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactInfoForm({
    onSubmit,
    onBackClick,
    firstName,
    lastName,
    email,
    phoneNumber,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPhoneNumberChange,
    reservationData,
    theme
}) {

    return (
        <Box>
            <Paper elevation={0} sx={{ mb: 2, p: 2, bgcolor: 'grey.200' }}>
                <Button
                    fullWidth
                    variant="outlined" // You can style the button as needed
                    onClick={onBackClick}
                    sx={{
                        mb: 2,
                        border: 0,
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        '&:hover': {
                            border: 0,
                            bgcolor: theme.palette.secondary.dark, // Change the background color on hover
                        },
                    }}
                >
                    Back to Table Reservation
                </Button>
                <Typography variant="p">
                    Date: {reservationData.date}<br />
                </Typography>
                <Typography variant="p">
                    Time: {reservationData.time}<br />
                </Typography>
                <Typography variant="p">
                    Guests: {reservationData.guests}<br />
                </Typography>
                <Typography variant="p">
                    Occasion: {reservationData.occasion}<br />
                </Typography>
            </Paper>
            <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={onFirstNameChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={onLastNameChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onEmailChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            id="phone-number"
                            value={phoneNumber}
                            onChange={onPhoneNumberChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Make Your Reservation
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}