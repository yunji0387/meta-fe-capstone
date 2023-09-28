import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import LittleLemonLogo from '../assets/logos/logo4.png';

export default function Navbar(props) {
  const { theme } = props;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ p: 0 }}>
        <Button href='./notifications'>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography variant='p' sx={{ width: 125 }}>Notifications</Typography>
        </Button>
      </MenuItem>
      <MenuItem sx={{ p: 0 }}>
        <Button href='./profile'>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
          <Typography variant='p' sx={{ width: 125 }}>Profile</Typography>
        </Button>
      </MenuItem>
      <MenuItem sx={{ p: 0 }}>
        <Button href='./settings'>
          <IconButton size="large">
            <SettingsIcon />
          </IconButton>
          <Typography variant='p' sx={{ width: 125 }}>Settings</Typography>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <Sidebar open={isSidebarOpen} toggleSidebar={handleSidebarToggle} theme={theme} />
          <Box sx={{ flexGrow: 1 }} />
          <Link style={{ textDecoration: 'none' }} to="/">
            <Box
              component="img"
              sx={{
                height: 50,
                backgroundColor: theme.palette.primary.light,
                marginTop: 1,
                paddingTop: 0.5,
                paddingBottom: 0.5,
                paddingLeft: 1,
                paddingRight: 1,
                borderRadius: 10
              }}
              alt="Little Lemon Logo"
              src={LittleLemonLogo}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon sx={{ color: theme.palette.primary.light }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}