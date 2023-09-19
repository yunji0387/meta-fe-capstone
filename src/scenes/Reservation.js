import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReservationForm from '../components/ReservationForm';
import ContactInfoForm from '../components/ContactInfoForm';

export default function Reservation() {
    // Define state variables to manage form visibility
    const [showReservationForm, setShowReservationForm] = React.useState(true);
    const [showContactInfoForm, setShowContactInfoForm] = React.useState(false);

    // Function to handle submission of ReservationForm
    const handleReservationSubmit = () => {
        // Perform any necessary actions related to ReservationForm submission
        
        // Hide ReservationForm and show ContactInfoForm
        setShowReservationForm(false);
        setShowContactInfoForm(true);
    };

    // Function to handle submission of ContactInfoForm
    const handleContactInfoSubmit = () => {
        // Perform any necessary actions related to ContactInfoForm submission
        
        // You can choose to redirect or display a confirmation message here
    };

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Reservation
            </Typography>

            {showReservationForm && (
                <>
                    <Typography variant='h6' textAlign='center'>
                        Please complete the table reservation form below.
                    </Typography>
                    <ReservationForm onSubmit={handleReservationSubmit} />
                </>
            )}

            {showContactInfoForm && (
                <>
                    <Typography variant='h5' textAlign='center'>
                        Almost there...
                    </Typography>
                    <Typography variant='h6' textAlign='center'>
                        Please enter your contact information below.
                    </Typography>
                    <ContactInfoForm onSubmit={handleContactInfoSubmit} />
                </>
            )}
        </Container>
    );
}
