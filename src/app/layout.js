import { CssBaseline, GlobalStyles, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

// Custom global styles with enhanced keyframes for more intense glowing
const globalStyles = {
  body: {
    backgroundColor: '#000', // Black background
    color: '#fff',           // Optional: Set text color to white for contrast
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@keyframes glow': {
    '0%': {
      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Increase the size and intensity of the glow
    },
    '50%': {
      textShadow: '0 0 30px rgba(255, 255, 255, 1)', // Brightest glow in the middle of the animation
    },
    '100%': {
      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Return to the initial glow
    },
  },
  '.glow': {
    animation: 'glow 1.5s infinite', // Continuous animation
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Raleway:wght@300;600&display=swap"
        />
      </head>
      <body>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <AppBar position="fixed" sx={{ backgroundColor: '#000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Raleway, sans-serif', // Updated font
                  color: 'white',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Enhanced glowing effect
                  animation: 'glow 1.5s infinite', // Continuous glowing animation
                }}
                className="glow"
              >
                FLICKZAM
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  color="inherit"
                  component={Link}
                  href="/"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background on hover
                      transform: 'scale(1.05)', // Slightly scale up on hover
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                    },
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  href="/search"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background on hover
                      transform: 'scale(1.05)', // Slightly scale up on hover
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                    },
                  }}
                >
                  Search
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  href="/about"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background on hover
                      transform: 'scale(1.05)', // Slightly scale up on hover
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                    },
                  }}
                >
                  About
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  href="/signup"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background on hover
                      transform: 'scale(1.05)', // Slightly scale up on hover
                      transition: 'transform 0.3s ease, background-color 0.3s ease',
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <main style={{ padding: '4rem 1rem 1rem', flex: 1 }}> {/* Adjust padding to account for the fixed header */}
          {children}
        </main>
        {/* Footer removed */}
      </body>
    </html>
  );
}
