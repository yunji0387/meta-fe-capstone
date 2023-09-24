import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
    title: "Home",
    href: "/",
    icon: HomeIcon
  },
  {
    title: "Menu",
    href: "/menu",
    icon: RestaurantMenuIcon
  },
  {
    title: "Reservation",
    href: "/reservation",
    icon: ReservationIcon
  },
  {
    title: "Delivery",
    href: "/delivery",
    icon: DeliveryIcon
  },
  {
    title: "Pick Up",
    href: "/pickup",
    icon: PickUpIcon
  }
];

const sections2 = [
  {
    title: "About Us",
    href: "/about",
    icon: InfoIcon
  }
];

export default function Sidebar({ open, toggleSidebar }) {
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
        {sections.map((section, index) => (
          <ListItem key={section.title} disablePadding>
            <ListItemButton component={Link} to={section.href}>
              <ListItemIcon>
                {React.createElement(section.icon)}
              </ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sections2.map((section, index) => (
          <ListItem key={section.title} disablePadding>
            <ListItemButton component={Link} to={section.href}>
              <ListItemIcon>
                {React.createElement(section.icon)}
              </ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={toggleSidebar} // Toggle the Sidebar drawer
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={toggleSidebar}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}