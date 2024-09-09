'use client';
import { CssBaseline, GlobalStyles, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

// Custom global styles
const globalStyles = {
  'html, body': {
    backgroundColor: '#000',
    color: '#fff',
    margin: 0,
    padding: 0,
    overflow: 'hidden', // Prevent scrollbars
    height: '100%', // Ensure full height
    width: '100%', // Ensure full width
  },
  '#__next': {
    height: '100%', // Ensure Next.js wrapper takes full height
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
};

export default function Layout({ children }) {
  const pathname = usePathname();
  const isSearchPage = pathname === '/search';

  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@300;600&display=swap"
        />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {!isSearchPage && (
          <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
            <Toolbar>
              <Container
                maxWidth="lg"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 16px',
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: 'white',
                    '&:hover': {
                      color: '#f0f0f0',
                      transform: 'scale(1.05)',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                    },
                  }}
                >
                  FLICKZAM
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[
                    { href: '/home', label: 'Home' },
                    { href: '/search', label: 'Search' },
                    { href: '/about', label: 'About' },
                    { href: '/signup', label: 'Signup' }
                  ].map((item, index) => (
                    <Button
                      key={index}
                      color="inherit"
                      component={Link}
                      href={item.href}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-3px)',
                          transition: 'transform 0.3s ease, background-color 0.3s ease',
                        },
                        '@media (max-width: 600px)': {
                          fontSize: '0.9rem',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        )}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '0 16px',
          margin: 0,
          width: '100%',
          height: isSearchPage ? '100vh' : 'calc(100vh - 64px)', // Adjust for AppBar height when present
          overflow: 'auto', // Allow scrolling within main content if needed
          '@media (max-width: 600px)': {
            padding: '0 8px',
          },
        }}>
          {children}
        </main>
        {!isSearchPage && (
          <footer
            style={{
              backgroundColor: '#000',
              color: '#fff',
              textAlign: 'center',
              padding: '1rem',
              width: '100%',
              '@media (max-width: 600px)': {
                fontSize: '0.8rem',
                padding: '0.5rem',
              },
            }}
          >
            <Typography variant="body2">
              © 2024 FlickZam. All Rights Reserved.
            </Typography>
          </footer>
        )}
      </body>
    </html>
  );
}
