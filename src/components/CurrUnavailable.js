import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const content = {
    title: 'Currently Unavailable...',
    description:
        " features is currently unavailable, please try again later.",
};

export default function CurrUnavailable({ title }) {

    return (
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
            <Typography variant='h5'>
                {content.title}
            </Typography>
            <Typography variant='p'>
                {title} {content.description}
            </Typography>
        </Paper>
    );
}
