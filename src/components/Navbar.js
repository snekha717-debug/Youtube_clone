import React, { useState } from 'react';
import { Stack, Paper, IconButton, Box, Avatar } from '@mui/material';
import { Search, Notifications, YouTube, Menu, Mic, VideoCall } from '@mui/icons-material';

// Receive the setSearchTerm function as a prop
const Navbar = ({ setSearchTerm }) => {
  // Local state to track what the user is typing
  const [inputValue, setInputValue] = useState('');

  // Handle the form submission (pressing Enter or clicking the magnifying glass)
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setSearchTerm(inputValue); // Sends the typed word up to App.js
  };

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#0f0f0f', top: 0, justifyContent: 'space-between', zIndex: 100 }}>
      
      <Stack direction="row" alignItems="center" gap={2}>
        <Menu sx={{ color: 'white', cursor: 'pointer', display: { xs: 'none', sm: 'block' } }} />
        <Stack direction="row" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }} onClick={() => setSearchTerm('')}>
          <YouTube sx={{ color: '#FF0000', fontSize: '32px' }} />
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', letterSpacing: '-1px' }}>YouTube</span>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" gap={2} sx={{ flex: 1, justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
        {/* Attach the handleSearch function to the form's onSubmit */}
        <Paper
          component="form"
          onSubmit={handleSearch}
          sx={{
            borderRadius: 20,
            border: '1px solid #303030',
            pl: 2,
            boxShadow: 'none',
            backgroundColor: '#121212',
            display: 'flex',
            alignItems: 'center',
            width: { sm: '350px', md: '550px' }
          }}
        >
          <input
            style={{ border: 'none', outline: 'none', background: 'transparent', color: 'white', width: '100%', padding: '10px 0', fontSize: '16px' }}
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update local state as you type
          />
          <Box sx={{ backgroundColor: '#222222', borderRadius: '0 20px 20px 0', borderLeft: '1px solid #303030' }}>
            <IconButton type="submit" sx={{ p: '8px 20px', color: 'white' }}>
              <Search />
            </IconButton>
          </Box>
        </Paper>
        <IconButton sx={{ backgroundColor: '#181818', color: 'white', '&:hover': { backgroundColor: '#303030' } }}>
          <Mic />
        </IconButton>
      </Stack>

      <Stack direction="row" gap={2.5} alignItems="center">
        <VideoCall sx={{ cursor: 'pointer', color: 'white', display: { xs: 'none', md: 'block' } }} />
        <Notifications sx={{ cursor: 'pointer', color: 'white' }} />
        <Avatar sx={{ width: 32, height: 32, cursor: 'pointer', bgcolor: '#4CAF50', fontSize: '16px' }}>U</Avatar>
      </Stack>
    </Stack>
  );
};

export default Navbar;