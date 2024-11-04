import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo2 from '../Screens/assets/logo2.png';
import Image from 'next/image';
import { Alarm, Notifications, Person, Settings } from '@mui/icons-material';
import Link from 'next/link';

function HamburgerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSignOut = () => {
    // Implement sign-out functionality here
    console.log("Signed out");
  };

  return (
    <>
      {/* AppBar with Hamburger Icon on the Right */}
      <AppBar position="static" style={{ backgroundColor: "#fafafa" }}>
        <Toolbar>
          <Box sx={{ mr: 2 }}>
            <Image
              src={logo2}
              alt="App Logo"
              width={50}
              height={50}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            sx={{ color: '#4B5563' }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ height: "100%" }}>
          <Link href="/Screens/profile">
            <ListItem button>
              <ListItemIcon>
                <Person sx={{ color: '#3B82F6' }} />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ color: '#333333' }} />
            </ListItem>
          </Link>
          <Link href="/Screens/subscription">
            <ListItem button>
              <ListItemIcon>
                <Notifications sx={{ color: '#3B82F6' }} />
              </ListItemIcon>
              <ListItemText primary="Subscribe" sx={{ color: '#333333' }} />
            </ListItem>
          </Link>
          <Link href="/Screens/settings">
            <ListItem button>
              <ListItemIcon>
                <Settings sx={{ color: '#3B82F6' }} />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ color: '#333333' }} />
            </ListItem>
          </Link>

        </List>
        <button className='nav-button'>Sign Out</button>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
