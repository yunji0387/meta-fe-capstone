import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function FeaturedCategory(props) {
    const { category } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card sx={{height:50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'black'}}>
                <CardActionArea component="a" href="#" >
                    <CardContent>
                        <Typography component="h2" variant="h4" sx={{ textAlign: 'center', color:'white' }}>
                            {category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default FeaturedCategory;
