import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SideSection from '../components/SideSection';
import Divider from '@mui/material/Divider';
import mainPostImg from '../assets/images/littleLemon.jpg';
import HeadChefImg from '../assets/images/chef-alberto.jpg';
import SousChefImg from '../assets/images/chef-brandon.jpg';
import PastryChefImg from '../assets/images/pastry-chef-jolin.jpg';
import LocationMapImg from '../assets/images/littleLemonMap.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const mainFeaturedPost = {
    title: 'Little Lemon',
    location: 'Chicago',
    description:
        "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image: mainPostImg,
    imageText: 'Little Lemon main image',
    linkText: 'Continue reading…',
};

const chefList = [
    {
        name: "Alberto Maman",
        title: "Head Chef",
        image: HeadChefImg
    },
    {
        name: "Brandon Wong",
        title: "Sous Chef",
        image: SousChefImg
    },
    {
        name: "Jolin Jackson",
        title: "Pastry Chef",
        image: PastryChefImg
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

export default function About() {
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant='h3' textAlign='center'>
                About Us
            </Typography>
            <MainFeaturedPost post={mainFeaturedPost} />

            <Typography variant='h4' textAlign='center'>Our Chefs</Typography>
            <Grid container spacing={5} justifyContent="center">
                {chefList.map((chef) => (
                    <Grid item>
                        <Grid container spacing={0} direction='column'>
                            {/* <Paper
                                sx={{
                                    position: 'relative',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${chef.image})`,
                                    width: 200,
                                    height: 300
                                }}
                            />
                            <Typography variant='h5' textAlign='center'>{chef.title}</Typography>
                            <Typography variant='p' textAlign='center'>{chef.name}</Typography> */}
                            <Paper
                                sx={{
                                    position: 'relative',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundImage: `url(${chef.image})`,
                                    width: 200,
                                    height: 300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end', // Pushes content to the bottom
                                }}
                            >
                                <Box sx={{ padding: '16px' }}>
                                    <Typography variant='h5' textAlign='center'>{chef.title}</Typography>
                                    <Typography variant='p' textAlign='center'>{chef.name}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Divider sx={{ mt: 2 }} />
            <Typography variant='h4' textAlign='center' sx={{ mt: 2 }}>Location</Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {/* <Paper
                        sx={{
                            position: 'relative',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${LocationMapImg})`,
                            width: '100%',
                            height: 300,
                        }}
                    /> */}
                    <Paper
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto', // Adjusts to the image's height
                            overflow: 'hidden', // Hide any potential overflow
                        }}
                    >
                        <img
                            src={LocationMapImg}
                            alt="Location Map"
                            style={{
                                width: '100%', // Make the image fill the Paper container width
                                height: 'auto', // Allow the image to adjust its height
                                verticalAlign: 'bottom', // Align the image to the bottom
                                display: 'block', // Ensure it's a block-level element for better layout control
                            }}
                        />
                    </Paper>
                </Grid>
                <SideSection />
                {/* <Grid item xs={12} md={4}>
                    <SideSection />
                </Grid> */}
            </Grid>
        </Container>
    );
}
