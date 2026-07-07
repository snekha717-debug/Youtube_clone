import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, CircularProgress, Stack } from '@mui/material';

// ⚠️ PASTE YOUR GOOGLE API KEY HERE
const API_KEY = 'AIzaSyBJW2nT-VX9L0P9owmgFqp-DkgykyGWWjA'; 

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null); // Tracks which video was clicked

  // Function to fetch real videos from YouTube
  const fetchVideos = async (pageToken = '') => {
    if (loading) return;
    setLoading(true);

    try {
      // Fetching popular videos. You can change 'chart=mostPopular' to a search query!
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=12&regionCode=US&key=${API_KEY}&pageToken=${pageToken}`
      );
      const data = await response.json();
      
      if (data.items) {
        // Append new videos to the existing list (for infinite scroll)
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
        setNextPageToken(data.nextPageToken || '');
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
    setLoading(false);
  };

  // Initial load
  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Infinite Scroll Handler attached to the Box
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50;
    if (bottom && nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };

  return (
    <Box 
      onScroll={handleScroll} 
      sx={{ overflowY: 'auto', height: '90vh', py: 1, px: 2 }}
    >
      <Grid container spacing={3}>
        {videos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent' }}>
              
              {/* If clicked, show iframe player. If not, show thumbnail */}
              {playingVideo === video.id ? (
                <iframe
                  width="100%"
                  height="210"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '12px' }}
                ></iframe>
              ) : (
                <CardMedia 
                  component="img"
                  image={video.snippet.thumbnails.medium.url} 
                  alt={video.snippet.title}
                  onClick={() => setPlayingVideo(video.id)} // Click to play!
                  sx={{ 
                    width: '100%', 
                    height: 210, 
                    borderRadius: 3, 
                    cursor: 'pointer',
                    objectFit: 'cover'
                  }} 
                />
              )}

              <CardContent sx={{ backgroundColor: 'transparent', padding: '12px 0 !important' }}>
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  color="#FFF"
                  sx={{ 
                    lineHeight: 1.3, 
                    mb: 0.5, 
                    fontSize: '15px',
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical', 
                    overflow: 'hidden' 
                  }}
                >
                  {video.snippet.title}
                </Typography>
                <Typography variant="body2" color="#AAAAAA" sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                  {video.snippet.channelTitle}
                </Typography>
                
                {/* Format the view count to look like "1.2M views" */}
                <Typography variant="body2" color="#AAAAAA" sx={{ fontSize: '13px' }}>
                  {new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(video.statistics.viewCount)} views
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Loading Spinner at the bottom when fetching new data */}
      {loading && (
        <Stack direction="row" justifyContent="center" sx={{ mt: 3, mb: 3 }}>
          <CircularProgress sx={{ color: 'red' }} />
        </Stack>
      )}
    </Box>
  );
};

export default Feed;
