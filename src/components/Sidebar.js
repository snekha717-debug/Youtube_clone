import React from 'react';
import { Stack, Typography, Divider } from '@mui/material';
import { Home, Whatshot, MusicNote, SportsEsports, Article, EmojiEvents, Lightbulb, Checkroom, ThumbUp, History } from '@mui/icons-material';

const categories = [
  { name: 'Home', icon: <Home /> },
  { name: 'Trending', icon: <Whatshot /> },
  { name: 'Music', icon: <MusicNote /> },
  { name: 'Gaming', icon: <SportsEsports /> },
  { name: 'News', icon: <Article /> },
  { name: 'Sports', icon: <EmojiEvents /> },
  { name: 'Learning', icon: <Lightbulb /> },
  { name: 'Fashion', icon: <Checkroom /> },
  { divider: true },
  { name: 'Liked Videos', icon: <ThumbUp /> },
  { name: 'History', icon: <History /> },
];

const Sidebar = () => {
  // Hardcoding "Trending" to be the active category just like the image
  const selectedCategory = 'Trending';

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category, idx) => {
        if (category.divider) {
          return <Divider key={idx} sx={{ backgroundColor: '#3d3d3d', my: 2 }} />;
        }

        return (
          <button
            key={category.name}
            style={{
              background: category.name === selectedCategory ? '#272727' : 'transparent',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              padding: '10px 15px',
              margin: '2px 0',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: '0.2s all ease-in-out',
            }}
            onMouseOver={(e) => {
              if (category.name !== selectedCategory) e.currentTarget.style.backgroundColor = '#272727';
            }}
            onMouseOut={(e) => {
              if (category.name !== selectedCategory) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ marginRight: '20px', color: 'white', display: 'flex', alignItems: 'center' }}>
              {category.icon}
            </span>
            <Typography variant="body2" sx={{ fontWeight: category.name === selectedCategory ? 'bold' : '500', fontSize: '14px' }}>
              {category.name}
            </Typography>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;