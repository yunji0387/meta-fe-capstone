import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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

const social = [
  { name: 'GitHub', icon: GitHubIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Facebook', icon: FacebookIcon },
];

function SideSection() {

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Location
        </Typography>
        <Typography>{address.addressLine},</Typography>
        <Typography>{address.city},{address.postalCode},</Typography>
        <Typography>{address.state}, {address.country}.</Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Business Hours
        </Typography>
        {Object.entries(businessHours).map(([day, hours]) => (
        <Grid container key={day} justifyContent="space-between" sx={{ maxWidth: 230 }}>
          <Grid item>
            <Typography>{`${day}`}</Typography>
          </Grid>
          <Grid item>
            <Typography>{hours}</Typography>
          </Grid>
        </Grid>
      ))}
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
        Social
      </Typography>
      {
        social.map((network) => (
          <Link
            key={network.name}
            display="block"
            variant="body1"
            href="#"
            sx={{ mb: 0.5 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </Link>
        ))
      }
    </Grid>
  );
}

export default SideSection;
