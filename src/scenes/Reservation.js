import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Typography from '@mui/material/Typography';
import mainPostImg from '../assets/images/littleLemon.jpg';

import homePost from '../posts/home-today-special.md';
const posts = [homePost];

const mainFeaturedPost = {
    title: 'Coming Soon...',
    description:
        "Reservation features is cominng soon, please stay tuned.",
    image: mainPostImg,
    imageText: 'Little Lemon main image',
};

export default function Reservation() {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Reservation
            </Typography>
            <MainFeaturedPost post={mainFeaturedPost} />
        </Container>
    );
}
