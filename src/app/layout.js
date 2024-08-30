import { CssBaseline, GlobalStyles, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

// Custom global styles with enhanced keyframes for glowing effects
const globalStyles = {
  body: {
    backgroundColor: '#000',
    color: '#fff',
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
      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    },
    '50%': {
      textShadow: '0 0 30px rgba(255, 255, 255, 1)',
    },
    '100%': {
      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    },
  },
  '.glow': {
    animation: 'glow 1.5s infinite',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@300;600&display=swap"
        />
      </head>
      <body>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <AppBar position="fixed" sx={{ backgroundColor: '#000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: 'Montserrat, sans-serif',
                  color: 'white',
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                  animation: 'glow 1.5s infinite',
                  '&:hover': {
                    color: '#f0f0f0', // Slightly lighter color on hover
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                  },
                }}
                className="glow"
              >
                FLICKZAM
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {['/', '/search', '/about', '/signup'].map((href, index) => (
                  <Button
                    key={index}
                    color="inherit"
                    component={Link}
                    href={href}
                    sx={{
                      fontFamily: 'Raleway, sans-serif',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-3px)',
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                      },
                    }}
                  >
                    {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                  </Button>
                ))}
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <main style={{ padding: '4rem 1rem 1rem', flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
