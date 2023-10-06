import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function ReservationForm({ availableTimes, onSubmit, reservationData }) {
    const formik = useFormik({
        initialValues: {
            date: reservationData.date,
            time: reservationData.time,
            guests: reservationData.guests,
            occasion: reservationData.occasion
        },
        validationSchema: Yup.object({
            date: Yup.date().required('Date is required'),
            time: Yup.string().required('Time is required'),
            guests: Yup.number().min(1).max(10).required('Number of guests is required'),
            occasion: Yup.string().required('Occasion is required')
        }),
        onSubmit: (values) => {
            // console.log("Formik onSubmit called with values:", values);
            onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Choose date"
                        type="date"
                        id="res-date"
                        InputLabelProps={{ shrink: true }}
                        {...formik.getFieldProps('date')}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                        inputProps={{ "data-testid": "res-date" }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={formik.touched.time && Boolean(formik.errors.time)}>
                        <InputLabel htmlFor="res-time">Choose time</InputLabel>
                        <Select
                            label="Choose time"
                            id="res-time"
                            {...formik.getFieldProps('time')}
                            inputProps={{ "data-testid": "res-time" }}
                        >
                            {availableTimes.map((timeOption) => (
                                <MenuItem key={timeOption} value={timeOption}>
                                    {timeOption}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{formik.touched.time && formik.errors.time}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Number of guests"
                        type="number"
                        placeholder="1"
                        inputProps={{ min: 1, max: 10, "data-testid": "guests" }}
                        id="guests"
                        {...formik.getFieldProps('guests')}
                        error={formik.touched.guests && Boolean(formik.errors.guests)}
                        helperText={formik.touched.guests && formik.errors.guests}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={formik.touched.occasion && Boolean(formik.errors.occasion)}>
                        <InputLabel htmlFor="occasion">Occasion</InputLabel>
                        <Select
                            label="Occasion"
                            id="occasion"
                            {...formik.getFieldProps('occasion')}
                            inputProps={{ "data-testid": "occasion" }}
                        >
                            <MenuItem value="Birthday">Birthday</MenuItem>
                            <MenuItem value="Anniversary">Anniversary</MenuItem>
                        </Select>
                        <FormHelperText>{formik.touched.occasion && formik.errors.occasion}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        id="submitReservationButton"
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        data-testid="submitReservationButton"
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
