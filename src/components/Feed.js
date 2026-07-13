import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Avatar, Stack } from '@mui/material';

// 1. Fixed the Video IDs! They are now case-sensitive and point to highly reliable, static videos.
const hardcodedVideos = [
  {
    id: "5qap5aO4i9A", // Updated to a static 24/7 Lofi mix that doesn't break
    title: "lofi hip hop radio - beats to relax/study to",
    channel: "Lofi Girl",
    views: "72M views • 2 years ago",
    avatar: "https://picsum.photos/seed/lofi/50/50"
  },
  {
    id: "dQw4w9WgXcQ", // FIXED: Case-sensitive Rick Astley ID
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    channel: "Rick Astley",
    views: "1.4B views • 13 years ago",
    avatar: "https://picsum.photos/seed/rick/50/50"
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    channel: "Blender",
    views: "12M views • 10 years ago",
    avatar: "https://picsum.photos/seed/blender/50/50"
  },
  {
    id: "jNQXAC9IVRw",
    title: "Me at the zoo",
    channel: "jawed",
    views: "290M views • 18 years ago",
    avatar: "https://picsum.photos/seed/jawed/50/50"
  },
  {
    id: "2Vv-BfVoq4g",
    title: "Ed Sheeran - Perfect (Official Music Video)",
    channel: "Ed Sheeran",
    views: "3.5B views • 6 years ago",
    avatar: "https://picsum.photos/seed/ed/50/50"
  },
  {
    id: "LXb3EKWsInQ", // Swapped to a stunning 4K nature video
    title: "COSTA RICA IN 4K 60fps HDR (ULTRA HD)",
    channel: "Jacob + Katie Schwarz",
    views: "150M views • 5 years ago",
    avatar: "https://picsum.photos/seed/costa/50/50"
  }
];

const displayVideos = [...hardcodedVideos, ...hardcodedVideos, ...hardcodedVideos];

const Feed = ({ searchTerm }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const filteredVideos = displayVideos.filter((video) => {
    if (!searchTerm) return true;
    const lowerCaseSearch = searchTerm.toLowerCase();
    return (
      video.title.toLowerCase().includes(lowerCaseSearch) ||
      video.channel.toLowerCase().includes(lowerCaseSearch)
    );
  });

  return (
    <Box sx={{ overflowY: 'auto', height: '90vh', py: 1, px: 2 }}>
      
      {filteredVideos.length === 0 && (
        <Typography variant="h6" sx={{ color: '#FFFFFF', textAlign: 'center', mt: 5 }}>
          No results found for "{searchTerm}"
        </Typography>
      )}

      <Grid container spacing={3}>
        {filteredVideos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} key={`${video.id}-${idx}`}> 
            <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent' }}>
              
              {playingVideo === `${video.id}-${idx}` ? (
                <iframe
                  width="100%"
                  height="210"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '12px' }}
                ></iframe>
              ) : (
                <CardMedia 
                  component="img"
                  image={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  onClick={() => setPlayingVideo(`${video.id}-${idx}`)}
                  sx={{ width: '100%', height: 210, borderRadius: 3, cursor: 'pointer', objectFit: 'cover' }} 
                />
              )}

              <CardContent sx={{ backgroundColor: 'transparent', padding: '12px 0 !important' }}>
                <Stack direction="row" spacing={1.5}>
                  <Avatar src={video.avatar} sx={{ width: 36, height: 36 }} />
                  <Box>
                    {/* 2. FIXED TEXT COLOR: Moved color definitions strictly into the sx prop */}
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: '#FFFFFF', // Forced bright white
                        fontWeight: 'bold',
                        lineHeight: 1.3, 
                        mb: 0.5, 
                        fontSize: '15px', 
                        display: '-webkit-box', 
                        WebkitLineClamp: 2, 
                        WebkitBoxOrient: 'vertical', 
                        overflow: 'hidden' 
                      }}
                    >
                      {video.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#AAAAAA', fontSize: '13px' }}>
                      {video.channel}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#AAAAAA', fontSize: '13px' }}>
                      {video.views}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;