import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

const App = () => {
  // 1. Create a state to hold our search query
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#0f0f0f', color: 'white', minHeight: '100vh' }}>
        
        {/* 2. Pass the setter function to the Navbar so it can update the search term */}
        <Navbar setSearchTerm={setSearchTerm} />
        
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box sx={{ width: { xs: '100%', md: '220px' }, px: { xs: 0, md: 2 }, mt: 1 }}>
            <Sidebar />
          </Box>
          
          <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, px: 2 }}>
            {/* 3. Pass the actual search term down to the Feed to filter the videos */}
            <Feed searchTerm={searchTerm} />
          </Box>
        </Stack>
      </Box>
    </BrowserRouter>
  );
};

export default App;