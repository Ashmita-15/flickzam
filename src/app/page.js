'use client';

import React, { useEffect } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { Global } from '@emotion/react';

export default function HomePage() {
  const handleGetStarted = () => {
    console.log('Get Started button clicked');
    window.location.href = '/signup';
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 10 - 5; // Calculate horizontal movement
      const y = (e.clientY / window.innerHeight) * 10 - 5; // Calculate vertical movement
      document.querySelector('.background-image').style.backgroundPosition = `${x}px ${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@300;600;800&display=swap"
      />

      <Global
        styles={{
          '@keyframes backgroundMove': {
            '0%': { backgroundPosition: '0% 0%' },
            '50%': { backgroundPosition: '100% 100%' },
            '100%': { backgroundPosition: '0% 0%' },
          },
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          '.background-image': {
            backgroundAttachment: 'fixed',
            animation: 'backgroundMove 60s linear infinite',
          },
          '.fade-in-text': {
            opacity: 0,
            animation: 'fadeIn 2s ease forwards',
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
        <Box
          className="background-image"
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            textAlign: 'center',
            backgroundImage: 'url("/bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          />

          <Stack spacing={3} alignItems="center" sx={{ zIndex: 2 }}>
            <Typography
              variant="h2"
              color="white"
              className="fade-in-text"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
              }}
            >
              Welcome to Flickzam
            </Typography>
            <Typography
              variant="h5"
              color="white"
              className="fade-in-text"
              sx={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
                maxWidth: '70%',
                animationDelay: '0.5s', // Delay for the subtitle
              }}
            >
              Discover your favorite movies and shows with AI-powered search!
            </Typography>
            <Button
              variant="contained"
              onClick={handleGetStarted}
              className="fade-in-text"
              sx={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                color: 'white',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                background: 'linear-gradient(45deg, #00695c 30%, #0d47a1 90%)',
                borderRadius: '30px',
                boxShadow: '0 3px 5px 2px rgba(0, 105, 92, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0d47a1 30%, #00695c 90%)',
                  boxShadow: '0 5px 8px 3px rgba(0, 105, 92, .5)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
                },
                animationDelay: '1s', // Delay for the button
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>

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
