import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function SideSection(props) {
  const { address, businessHours, social } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
          Location
        </Typography>
        <Typography>{address.addressLine},</Typography>
        <Typography>{address.city},{address.postalCode},</Typography>
        <Typography>{address.state}, {address.country}.</Typography>
        <Divider sx={{marginTop:2,marginBottom:2}} />
        <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
          Business Hours
        </Typography>
        {Object.entries(businessHours).map(([day, hours]) => (
          <div key={day} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{`${day}`}</Typography>
            <Typography>{hours}</Typography>
          </div>
        ))}
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

SideSection.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default SideSection;
