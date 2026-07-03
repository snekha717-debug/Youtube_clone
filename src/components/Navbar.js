import React from 'react';
import { Stack, Paper, IconButton } from '@mui/material';
import { Search, AccountCircle, Notifications, YouTube } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#0f0f0f', top: 0, justifyContent: 'space-between' }}
    >
      {/* Logo Area */}
      <Stack direction="row" alignItems="center" gap={1}>
        <YouTube sx={{ color: 'red', fontSize: '40px' }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-1px' }}>YouTube</span>
      </Stack>

      {/* Search Bar */}
      <Paper
        component="form"
        sx={{
          borderRadius: 20,
          border: '1px solid #3d3d3d',
          pl: 2,
          boxShadow: 'none',
          mr: { sm: 5 },
          backgroundColor: '#121212',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '150px', sm: '350px', md: '500px' }
        }}
      >
        <input
          style={{ border: 'none', outline: 'none', background: 'transparent', color: 'white', width: '100%' }}
          placeholder="Search..."
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'gray', backgroundColor: '#222', borderRadius: '0 20px 20px 0' }}>
          <Search />
        </IconButton>
      </Paper>

      {/* Profile & Notifications */}
      <Stack direction="row" gap={2} alignItems="center">
        <Notifications sx={{ cursor: 'pointer' }} />
        <AccountCircle sx={{ cursor: 'pointer', fontSize: '30px' }} />
      </Stack>
    </Stack>
  );
};

export default Navbar;