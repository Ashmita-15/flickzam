import { CssBaseline, GlobalStyles, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const globalStyles = {
  body: {
    backgroundColor: '#000', // Black background
    color: '#fff',           // Optional: Set text color to white for contrast
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <AppBar position="static" sx={{ backgroundColor: '#000' }}>
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Flickzam
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" component={Link} href="/">Home</Button>
                <Button color="inherit" component={Link} href="/search">Search</Button>
                <Button color="inherit" component={Link} href="/about">About</Button>
                <Button color="inherit" component={Link} href="/signup">Sign Up</Button>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <main style={{ padding: '1rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
