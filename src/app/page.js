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
      {/* Main content area with background image and reduced opacity */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          position: 'relative', // Position relative for overlay
          textAlign: 'center',
          overflow: 'hidden', // Ensures the image and overlay are contained
        }}
      >
        {/* Background image with reduced opacity */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5, // Adjust the opacity of the image
            zIndex: -1, // Ensure the image is behind the content
          }}
        />

        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h3" // Adjust font size with variant or by directly setting fontSize
            color="#fff" // Brighter color
            sx={{ fontWeight: 'bold', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Welcome to Flickzam App
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGetStarted}
            sx={{
              padding: '16px 32px', // Make the button larger
              fontSize: '1.5rem', // Increase font size for the button text
              fontWeight: 'bold', // Make the text bold
              backgroundColor: '#00308F', // Brighter color
              '&:hover': {
                backgroundColor: '#72A0C1', // Slightly lighter on hover
              },
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
