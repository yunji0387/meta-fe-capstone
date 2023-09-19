import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReservationForm from '../components/ReservationForm';

export default function Reservation() {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Reservation
            </Typography>
            <ReservationForm />
        </Container>
    );
}
