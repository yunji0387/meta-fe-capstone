import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Main from '../components/Main';
import Typography from '@mui/material/Typography';
import todaySpecialMenu from '../menus/today-special.md';
import mainCourseMenu from '../menus/maincourse-menu.md';
import appertizerMenu from '../menus/appertizer-menu.md';
import dessertMenu from '../menus/dessert-menu.md';
import drinkMenu from '../menus/drink-menu.md';

const menus = [todaySpecialMenu];

export default function Menu() {
    return (
        <Container sx={{ mt: 3 }}>
            <Typography variant='h3' textAlign='center'>
                Menu
            </Typography>
            <Main posts={menus} />

            <Grid container spacing={5} sx={{ mt: 3 }}>
                <Main posts={[mainCourseMenu]} mediumSize={8} />
                <Grid item xs={12} md={4}>
                    <Main posts={[appertizerMenu, dessertMenu, drinkMenu]} mediumSize={12} />
                </Grid>
            </Grid>
        </Container>

    );
}
