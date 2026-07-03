import React from 'react';
import { Stack } from '@mui/material';
import { Home, Code, MusicNote, School, SportsEsports } from '@mui/icons-material';

const categories = [
  { name: 'Home', icon: <Home /> },
  { name: 'Coding', icon: <Code /> },
  { name: 'Music', icon: <MusicNote /> },
  { name: 'Education', icon: <School /> },
  { name: 'Gaming', icon: <SportsEsports /> },
];

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          style={{
            background: 'transparent',
            color: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '12px 15px',
            margin: '5px 0',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: '0.2s all ease-in-out',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#272727'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span style={{ marginRight: '15px' }}>{category.icon}</span>
          <span style={{ fontWeight: '500' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;