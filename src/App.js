import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

const App = () => {
  return (
    <BrowserRouter>
      {/* Box is a wrapper component that serves as a div. We set a dark theme background here. */}
      <Box sx={{ backgroundColor: '#0f0f0f', color: 'white', minHeight: '100vh' }}>
        <Navbar />
        
        <Stack direction={{ xs: 'column', md: 'row' }}>
          {/* Sidebar Area */}
          <Box sx={{ width: { xs: '100%', md: '250px' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
            <Sidebar />
          </Box>
          
          {/* Main Feed Area */}
          <Box p={2} sx={{ overflowY: 'auto', height: '92vh', flex: 2 }}>
            <Feed />
          </Box>
        </Stack>
      </Box>
    </BrowserRouter>
  );
};

export default App;