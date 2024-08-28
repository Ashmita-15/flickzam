// src/app/home/page.js
'use client'; // To ensure client-side interactivity

import React from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup'); // Navigate to the Signup page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Main content area with background image */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          textAlign: 'center',
          backgroundImage: 'url("/bg.jpg")', // Assuming bg.jpg is in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" color="white"> {/* Adjust color for better visibility */}
            Welcome to Flickzam App
          </Typography>
          <Button variant="contained" color="primary" onClick={handleGetStarted}>
            Get Started
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

