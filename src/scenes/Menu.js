import * as React from 'react';
import Container from '@mui/material/Container';
import Main from '../components/Main';
import Typography from '@mui/material/Typography';
import homePost from '../posts/home-today-special.md';
const posts = [homePost];

export default function Menu() {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Menu
            </Typography>
            <Main posts={posts} />
        </Container>
    );
}
