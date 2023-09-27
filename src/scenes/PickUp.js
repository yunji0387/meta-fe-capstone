import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CurrUnavailable from '../components/CurrUnavailable';

export default function PickUp(props) {
    const { theme } = props;

    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center' sx={{ mb: 1, fontFamily: theme.typography.titleText}}>
                Order Pick Up
            </Typography>
            <CurrUnavailable title={"Order pick up"} />
        </Container>
    );
}
