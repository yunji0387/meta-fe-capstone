import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Main from '../components/Main';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
            <Divider />
            <Grid container spacing={2} sx={{ mt: 0 }}>
                <Main posts={[mainCourseMenu]} mediumSize={7} />
                <Grid item xs={12} md={5}>
                    <Main posts={[appertizerMenu, dessertMenu, drinkMenu]} mediumSize={12} padding={2} bgColor={'grey.200'} addTopDivider={true} />
                </Grid>
            </Grid>
        </Container>

    );
}
