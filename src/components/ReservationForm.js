import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function ReservationForm() {
    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Choose date"
                        type="date"
                        id="res-date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="res-time">Choose time</InputLabel>
                        <Select
                            label="Choose time"
                            id="res-time"
                        >
                            <MenuItem value="17:00">17:00</MenuItem>
                            <MenuItem value="18:00">18:00</MenuItem>
                            <MenuItem value="19:00">19:00</MenuItem>
                            <MenuItem value="20:00">20:00</MenuItem>
                            <MenuItem value="21:00">21:00</MenuItem>
                            <MenuItem value="22:00">22:00</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Number of guests"
                        type="number"
                        placeholder="1"
                        inputProps={{
                            min: 1,
                            max: 10,
                        }}
                        id="guests"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="occasion">Occasion</InputLabel>
                        <Select
                            label="Occasion"
                            id="occasion"
                        >
                            <MenuItem value="Birthday">Birthday</MenuItem>
                            <MenuItem value="Anniversary">Anniversary</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Make Your reservation
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}