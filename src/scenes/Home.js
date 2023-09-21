import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import SideSection from '../components/SideSection';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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
        href: "/reservation"
    }, 
    {
        title: 'Delivery',
        href: "/delivery"
    }, 
    {
        title: 'Pick Up',
        href: "/pickup"
    }
];

// const featuredCategories = ['Reservation', 'Delivery', 'Pick Up'];

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

const sidesection = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

const address = {
    addressLine: '8888 Turin Hwy',
    city: 'Chicago',
    postalCode: 'C5C 3T9',
    state: 'Illinois',
    country: 'United States'
};

const businessHours = {
    Mon: '10:00am - 10:00pm',
    Tue: '10:00am - 10:00pm',
    Wed: 'Closed',
    Thu: '10:00am - 10:00pm',
    Fri: '10:00am - 10:00pm',
    Sat: '10:00am - 10:00pm',
    Sun: '10:00am - 10:00pm'
};

export default function Home() {
    return (
        <Container sx={{ mt: 3 }}>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
                {featuredCategories.map((category) => (
                    <FeaturedCategory category={category} />
                ))}
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main posts={posts} mediumSize={8} />
                <SideSection
                    title={sidesection.title}
                    description={sidesection.description}
                    archives={sidesection.archives}
                    address={address}
                    businessHours={businessHours}
                    social={sidesection.social}
                />
            </Grid>
        </Container>
    );
}
