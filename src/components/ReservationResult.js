import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'; // Imported to add a button for navigation

export default function ReservationResult(props) {
    const { theme, isReservedSuccess, onReturn, reservationData, contactInfoData } = props; // Added an onReturn prop for the button's click event

    return (
        <Container sx={{ mt: 3, textAlign: 'center' }}>

            {isReservedSuccess ? (
                <>
                    <Typography variant='h4' sx={{ fontFamily: theme.typography.contentText }}>
                        Table Successfully Reserved.
                    </Typography>
                    <Paper elevation={0} sx={{ mb: 2, p: 2, bgcolor: 'grey.200', textAlign: 'left' }}>
                        <Typography variant='h5' textAlign='center' sx={{mb: 2}}>
                            Reservation Information
                        </Typography>
                        <Typography variant="body1">
                            Date: {reservationData.date}<br />
                            Time: {reservationData.time}<br />
                            Guests: {reservationData.guests}<br />
                            Occasion: {reservationData.occasion}<br />
                        </Typography>
                        <Divider sx={{mt: 2 , mb: 2}} />
                        <Typography variant="body1">
                            First Name: {contactInfoData.firstName}<br />
                            Last Name: {contactInfoData.lastName}<br />
                            Email: {contactInfoData.email}<br />
                            Phone Number: {contactInfoData.phoneNumber}<br />
                        </Typography>
                    </Paper>
                    <Button fullWidth variant="contained" color="primary" onClick={onReturn} sx={{ mt: 3 }}>
                        Make Another Reservation
                    </Button>
                </>
            ) : (
                <>
                    <Typography variant='h4' sx={{ fontFamily: theme.typography.titleText }}>
                        Table Failed to Reserve, please try again.
                    </Typography>
                    <Button fullWidth variant="contained" color="primary" onClick={onReturn} sx={{ mt: 3 }}>
                        Try Again
                    </Button>
                </>
            )}
            <Button aria-label="On Click" fullWidth href='/' variant="contained" color="primary" sx={{ mt: 5 }}>Back to Home</Button>
        </Container>
    );
}