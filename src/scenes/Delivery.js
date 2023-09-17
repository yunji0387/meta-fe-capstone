import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Typography from '@mui/material/Typography';
import mainPostImg from '../assets/images/littleLemon.jpg';

const mainFeaturedPost = {
    title: 'Coming Soon...',
    description:
        "Delivery features is cominng soon, please stay tuned.",
    image: mainPostImg,
    imageText: 'Little Lemon main image',
};

export default function Delivery() {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Delivery
            </Typography>
            <MainFeaturedPost post={mainFeaturedPost} />
        </Container>
    );
}
