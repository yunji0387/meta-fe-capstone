import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function FeaturedCategory(props) {
    const { category, theme } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main }}>
                <CardActionArea component="a" href={category.href} >
                    <CardContent>
                        <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {React.createElement(category.icon, { fontSize: 'large' })}
                            <Typography component="h2" variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
                                {category.title}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default FeaturedCategory;
