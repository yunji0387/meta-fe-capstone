import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

const sections = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Menu",
    href: "/menu"
  },
  {
    title: "Reservation",
    href: "/reservation"
  },
  {
    title: "Delivery",
    href: "/delivery"
  },
  {
    title: "Pick Up",
    href: "/pickup"
  }
];

const sections2 = [
  {
    title: "About Us",
    href: "/about"
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sections.map((section, index) => (
          <ListItem key={section.title} disablePadding>
            <ListItemButton component={Link} to={section.href}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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