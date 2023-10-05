import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactInfoForm({
    onSubmit,
    onBackClick,
    reservationData,
    contactInfoData,
    theme
}) {
    const formik = useFormik({
        initialValues: {
            firstName: contactInfoData.firstName,
            lastName: contactInfoData.lastName,
            email: contactInfoData.email,
            phoneNumber: contactInfoData.phoneNumber
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phoneNumber: Yup.string().required('Phone Number is required')
        }),
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

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
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            type="text"
                            id="first-name"
                            {...formik.getFieldProps('firstName')}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            type="text"
                            id="last-name"
                            {...formik.getFieldProps('lastName')}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            id="email"
                            {...formik.getFieldProps('email')}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            id="phone-number"
                            {...formik.getFieldProps('phoneNumber')}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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