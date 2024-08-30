'use client';

import React from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { Global } from '@emotion/react'; // Import to add keyframes
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup'); // Navigate to the Signup page
  };

  return (
    <>
      {/* Import Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@300;600;800&display=swap"
      />

      {/* Global styles for background animation */}
      <Global
        styles={{
          '@keyframes backgroundMove': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      />

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
            position: 'relative', // Position relative to add an overlay
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            textAlign: 'center',
            backgroundImage: 'url("/bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animation: 'backgroundMove 15s infinite linear', // Background animation
            overflow: 'hidden', // Hide overflow for background effect
          }}
        >
          {/* Semi-transparent overlay to dull background */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
              zIndex: 1,
            }}
          />

          <Stack spacing={3} alignItems="center" sx={{ zIndex: 2 }}>
            <Typography
              variant="h2"
              color="white"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Text shadow for better visibility
              }}
            >
              Welcome to Flickzam
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Enhanced text shadow for better visibility
                maxWidth: '70%', // Adjust max width for better formatting
              }}
            >
              Discover your favorite movies and shows with AI-powered search!
            </Typography>
            <Button
              variant="contained"
              onClick={handleGetStarted}
              sx={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 'bold',  // Make font bold
                px: 4, // Padding on the x-axis
                py: 1.5, // Padding on the y-axis
                color: 'white',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Add text shadow for visibility
                background: 'linear-gradient(45deg, #00695c 30%, #0d47a1 90%)', // Dark Teal to Navy Blue gradient
                borderRadius: '30px', // Rounded corners
                boxShadow: '0 3px 5px 2px rgba(0, 105, 92, .3)', // Shadow effect
                '&:hover': {
                  background: 'linear-gradient(45deg, #0d47a1 30%, #00695c 90%)', // Hover effect with reverse gradient
                  boxShadow: '0 5px 8px 3px rgba(0, 105, 92, .5)', // Increased shadow on hover
                  transform: 'scale(1.05)', // Slight scaling effect on hover
                  transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease', // Smooth transition
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            py: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2024 FlickZam. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
