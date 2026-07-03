import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// Dummy data to test the layout
const dummyVideos = [1, 2, 3, 4, 5, 6, 7, 8];

const Feed = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Recommended <span style={{ color: '#F31503' }}>Videos</span>
      </Typography>

      <Grid container spacing={2}>
        {dummyVideos.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent' }}>
              <CardMedia 
                image={`https://picsum.photos/seed/${item}/400/225`} 
                sx={{ width: '100%', height: 180, borderRadius: 2 }} 
              />
              <CardContent sx={{ backgroundColor: 'transparent', p: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                  Sample Video Title {item}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  Channel Name
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;