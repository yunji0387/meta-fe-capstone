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

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

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
    const handleReservationSubmit = () => {
        const updatedReservationData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion,
        };
        setReservationData(updatedReservationData);

        // Hide ReservationForm and show ContactInfoForm
        setShowReservationForm(false);
        setShowContactInfoForm(true);
    };

    // Define state variables for contact information
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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
    const handleContactInfoSubmit = () => {
        const updatedContactData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
        };
        setContactInfoData(updatedContactData);
        setContactInfoUpdated(true); // Mark contactInfoData as updated

        // Perform any necessary actions related to ContactInfoForm submission
        // You can choose to redirect or display a confirmation message here
    };
    // Function to handle submission of ContactInfoForm
    // const handleContactInfoSubmit = () => {
    //     // Store the data entered in the ContactInfoForm
    //     // setContactInfoData(data);
    //     const updatedContactData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         phoneNumber: phoneNumber,
    //     };
    //     setContactInfoData(updatedContactData);
    //     // Perform any necessary actions related to ContactInfoForm submission
    //     // You can choose to redirect or display a confirmation message here

    //     const reservationInfoString = `Date: ${reservationData.date}\nTime: ${reservationData.time}\nGuests: ${reservationData.guests}\nOccasion: ${reservationData.occasion}`;
    //     const contactInfoString = `\nFirst Name: ${contactInfoData.firstName}\nLast Name: ${contactInfoData.lastName}\nEmail: ${contactInfoData.email}\nPhone Number: ${contactInfoData.phoneNumber}`;

    //     // Display contactInfoString in an alert
    //     alert(reservationInfoString + contactInfoString);
    // };

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
                        onTimeChange={handleTimeChange}
                        time={time}
                        onDateChange={handleDateChange}
                        date={date}
                        onGuestsChange={handleGuestsChange}
                        guests={guests}
                        onOccasionChange={handleOccasionChange}
                        occasion={occasion}
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
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        onFirstNameChange={handleFirstNameChange}
                        onLastNameChange={handleLastNameChange}
                        onEmailChange={handleEmailChange}
                        onPhoneNumberChange={handlePhoneNumberChange}
                        reservationData={reservationData}
                        theme={theme}
                    // initialData={contactInfoData} // Pass the initialData prop
                    />
                </>
            )}
        </Container>
    );
}
