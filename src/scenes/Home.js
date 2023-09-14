import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import Main from '../components/Main';
import SideSection from '../components/SideSection';
import Navbar from '../components/Navbar';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import post1 from '../posts/blog-post-1.md';
import post2 from '../posts/blog-post-2.md';
import post3 from '../posts/blog-post-3.md';

const mainFeaturedPost = {
    title: 'Little Lemon',
    location: 'Chicago',
    description:
        "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    },
];


const posts = [post1, post2, post3];

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Navbar />
            <Container
                // maxWidth="lg"
                sx={{
                    mt: 3,
                    // width:'lg',
                }}
            >
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="From the firehose" posts={posts} />
                        <SideSection
                            title={sidesection.title}
                            description={sidesection.description}
                            archives={sidesection.archives}
                            social={sidesection.social}
                        />
                    </Grid>
                </main>
            </Container>
            <footer>
                <Footer />
            </footer>
        </ThemeProvider>
    );
}