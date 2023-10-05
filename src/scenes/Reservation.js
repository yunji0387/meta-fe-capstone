import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReservationForm from '../components/ReservationForm';
import ContactInfoForm from '../components/ContactInfoForm';

export default function Reservation(props) {
    const { theme } = props;

    // Define state variables to manage form visibility and data
    const [showReservationForm, setShowReservationForm] = useState(true);
    const [showContactInfoForm, setShowContactInfoForm] = useState(false);

    // Define state variables to store entered data
    const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    });

    const [contactInfoData, setContactInfoData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    // Define availableTimes here
    const availableTimes = [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    // Function to handle submission of ReservationForm
    const handleReservationSubmit = (values) => {
        // console.log(values);
        const updatedReservationData = {
            date: values.date,
            time: values.time,
            guests: values.guests,
            occasion: values.occasion,
        };
        setReservationData(updatedReservationData);

        // Hide ReservationForm and show ContactInfoForm
        setShowReservationForm(false);
        setShowContactInfoForm(true);
    };

    // Define state variable to track changes in contactInfoData
    const [contactInfoUpdated, setContactInfoUpdated] = useState(false);

    // Use useEffect to trigger the alert when contactInfoData changes
    useEffect(() => {
        if (contactInfoUpdated) {
            const reservationInfoString = `Date: ${reservationData.date}\nTime: ${reservationData.time}\nGuests: ${reservationData.guests}\nOccasion: ${reservationData.occasion}`;
            const contactInfoString = `\nFirst Name: ${contactInfoData.firstName}\nLast Name: ${contactInfoData.lastName}\nEmail: ${contactInfoData.email}\nPhone Number: ${contactInfoData.phoneNumber}`;

            // Display contactInfoString in an alert
            alert(reservationInfoString + contactInfoString);
        }
    }, [contactInfoData, reservationData.date, reservationData.time, reservationData.guests, reservationData.occasion, contactInfoUpdated]);

    // Function to handle submission of ContactInfoForm
    const handleContactInfoSubmit = (values) => {
        console.log(values);
        const updatedContactData = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
        };
        setContactInfoData(updatedContactData);
        setContactInfoUpdated(true); // Mark contactInfoData as updated

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
            <Typography variant='h3' textAlign='center' sx={{ fontFamily: theme.typography.titleText }}>
                Reservation
            </Typography>

            {showReservationForm && (
                <>
                    <Typography variant='h6' textAlign='center'>
                        Please complete the table reservation form below.
                    </Typography>
                    <ReservationForm
                        onSubmit={handleReservationSubmit}
                        initialData={reservationData} // Pass the initialData prop
                        availableTimes={availableTimes}
                        reservationData={reservationData}
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
                        reservationData={reservationData}
                        contactInfoData={contactInfoData}
                        theme={theme}
                    />
                </>
            )}
        </Container>
    );
}