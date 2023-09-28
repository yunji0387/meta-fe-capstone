import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReservationIcon from '@mui/icons-material/EventSeat';
import DeliveryIcon from '@mui/icons-material/TakeoutDining';
import PickUpIcon from '@mui/icons-material/Hail';
import InfoIcon from '@mui/icons-material/Info';

const sections = [
  {
    title: "HOME",
    href: "/",
    icon: HomeIcon
  },
  {
    title: "MENU",
    href: "/menu",
    icon: RestaurantMenuIcon
  },
  {
    title: "RESERVATION",
    href: "/reservation",
    icon: ReservationIcon
  },
  {
    title: "DELIVERY",
    href: "/delivery",
    icon: DeliveryIcon
  },
  {
    title: "PICK UP",
    href: "/pickup",
    icon: PickUpIcon
  },
  {
    title: "ABOUT US",
    href: "/about",
    icon: InfoIcon
  }
];

export default function Sidebar({ open, toggleSidebar, theme }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 225 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Divider />
        {sections.map((section, index) => (
          <Box key={index}>
            <Divider />
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={section.href}>
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {React.createElement(section.icon)}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={<Typography variant="p" sx={{ color: theme.palette.primary.mainText }}>{section.title}</Typography>} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box>
      <React.Fragment key={'left'}>
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleSidebar} // Toggle the Sidebar drawer
        >
          <MenuIcon sx={{color: theme.palette.primary.light}}/>
        </IconButton>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={toggleSidebar}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </Box>
  );
}