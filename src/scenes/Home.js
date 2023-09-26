import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import SideSection from '../components/SideSection';

import ReservationIcon from '@mui/icons-material/EventSeat';
import DeliveryIcon from '@mui/icons-material/TakeoutDining';
import PickUpIcon from '@mui/icons-material/Hail';

import mainPostImg from '../assets/images/littleLemon.jpg';
import christmasPostImg from '../assets/images/christmas.jpg';
import newYearPostImg from '../assets/images/newYear.jpg';

import todaySpecialMenu from '../menus/today-special.md';
const posts = [todaySpecialMenu];

const mainFeaturedPost = {
    title: 'Little Lemon',
    location: 'Chicago',
    description:
        "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image: mainPostImg,
    imageText: 'Little Lemon main image',
    linkText: 'Continue reading…',
};

const featuredCategories = [
    {
        title: 'Reservation',
        href: "/reservation",
        icon: ReservationIcon
    },
    {
        title: 'Delivery',
        href: "/delivery",
        icon: DeliveryIcon
    },
    {
        title: 'Pick Up',
        href: "/pickup",
        icon: PickUpIcon
    }
];

const featuredPosts = [
    {
        title: 'Christmas Eve',
        date: 'Dec 20 - Dec 23',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.',
        image: christmasPostImg,
        imageLabel: 'Image Text',
    },
    {
        title: 'New Year Special',
        date: 'Feb 05 - Feb 25',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.',
        image: newYearPostImg,
        imageLabel: 'Image Text',
    },
];

export default function Home(props) {
    const { theme } = props;

    return (
        <Container sx={{ mt: 3 }}>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                {featuredCategories.map((category) => (
                    <FeaturedCategory category={category} theme={theme} />
                ))}
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Grid container spacing={5}>
                <Main posts={posts} mediumSize={8} />
                <SideSection />
            </Grid>
        </Container>
    );
}
