import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReservationForm from '../components/ReservationForm';
import ContactInfoForm from '../components/ContactInfoForm';

export default function Reservation(props) {
    const { theme } = props;

    // Define state variables to manage form visibility and data
    const [showReservationForm, setShowReservationForm] = React.useState(true);
    const [showContactInfoForm, setShowContactInfoForm] = React.useState(false);

    // Define state variables to store entered data
    const [reservationData, setReservationData] = React.useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    });

    const [contactInfoData, setContactInfoData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const [time, setTime] = React.useState('');

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    // Define availableTimes here
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];



    // Function to handle submission of ReservationForm
    const handleReservationSubmit = (data) => {
        // Store the data entered in the ReservationForm
        setReservationData(data);

        // Hide ReservationForm and show ContactInfoForm
        setShowReservationForm(false);
        setShowContactInfoForm(true);
    };

    // Function to handle submission of ContactInfoForm
    const handleContactInfoSubmit = (data) => {
        // Store the data entered in the ContactInfoForm
        setContactInfoData(data);

        // Perform any necessary actions related to ContactInfoForm submission
        // You can choose to redirect or display a confirmation message here
    };

    // Function to go back to Reservation page
    const handleBackToReservation = () => {
        setShowReservationForm(true);
        setShowContactInfoForm(false);
    };

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center' sx={{fontFamily: theme.typography.titleText}}>
                Reservation
            </Typography>

            {/* {showReservationForm && (
                <>
                    <Typography variant='h6' textAlign='center'>
                        Please complete the table reservation form below.
                    </Typography>
                    <ReservationForm
                        onSubmit={handleReservationSubmit}
                        initialData={reservationData} // Pass the initialData prop
                        availableTimes={availableTimes}
                        onTimeChange={handleTimeChange}
                        time={time}
                    />
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
                    <ContactInfoForm
                        onSubmit={handleContactInfoSubmit}
                        onBackClick={handleBackToReservation}
                        initialData={contactInfoData} // Pass the initialData prop
                    />
                </>
            )} */}
        </Container>
    );
}
