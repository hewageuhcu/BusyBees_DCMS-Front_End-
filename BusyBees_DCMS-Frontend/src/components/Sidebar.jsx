// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Typography, Avatar, Box } from '@mui/material';
import BabyIcon from '@mui/icons-material/ChildCare';
import BabySitterIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 280,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#f7f9fc',
          borderRight: '1px solid #e0e0e0',
          padding: '20px 10px',
          top: '64px', // Adjust this value if your header height is different
        },
      }}
    >
      {/* Profile Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Avatar
          alt="User Profile"
          src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
          sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
          Mathew
        </Typography>
        <Typography variant="body2" sx={{ color: '#8D939D' }}>
          Designer
        </Typography>
      </Box>
      <Divider />

      {/* Sidebar Title */}
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1a73e8', paddingBottom: '10px' }}
      >
        Daycare Management
      </Typography>

      <List>
        <ListItem button component={Link} to="/dashboard" sx={{ '&:hover': { backgroundColor: '#e8f0fe' } }}>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#1a73e8' }} />
          </ListItemIcon>
          <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 'bold' }} />
        </ListItem>
        <ListItem button component={Link} to="/babyDetails" sx={{ '&:hover': { backgroundColor: '#e8f0fe' } }}>
          <ListItemIcon>
            <BabyIcon sx={{ color: '#ff7043' }} />
          </ListItemIcon>
          <ListItemText primary="Babys" primaryTypographyProps={{ fontWeight: 'bold' }} />
        </ListItem>
        <ListItem button component={Link} to="/babySitterDetails" sx={{ '&:hover': { backgroundColor: '#e8f0fe' } }}>
          <ListItemIcon>
            <BabySitterIcon sx={{ color: '#43a047' }} />
          </ListItemIcon>
          <ListItemText primary="Babysitters" primaryTypographyProps={{ fontWeight: 'bold' }} />
        </ListItem>
      </List>
      <Divider sx={{ marginTop: '20px' }} />
    </Drawer>
  );
}

export default Sidebar;