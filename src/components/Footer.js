import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FooterLogo from '../assets/logos/logo5.png';


const phoneNumber = "1-888-LEMON-U(888-888)";
const email = "contact-us@llemon.com";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" marginTop={2}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Little Lemon Restaurant
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {' | All Rights Reserved.'}
    </Typography>
  );
}

function Policy() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" marginTop={2}>
      <Link color="inherit" href="">
        Privacy Policy
      </Link>
      {' and '}
      <Link color="inherit" href="">
        Terms of Service
      </Link>
      {' apply.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 2,
          }}
        >
          <img
            src={FooterLogo}
            alt="Little Lemon Footer Logo"
            style={{ height: 80 }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              {phoneNumber}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              <Link color="inherit" href={`mailto:${email}`}>
              {email}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Copyright />
        <Policy />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
