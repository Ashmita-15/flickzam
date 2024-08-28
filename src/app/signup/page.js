'use client';
import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Stack } from '@mui/material';

export default function SignupPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleLoginClick = () => {
    setShowSignUpForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just set isSignedUp to true
    setIsSignedUp(true);
  };

  const ThankYouMessage = () => (
    <Box sx={{ textAlign: 'center', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Thank You for Signing Up!
      </Typography>
      
    </Box>
  );

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: 400,
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            marginLeft: '20vw',
            padding: 20
          }}
        >
          <img
            src="/question.jpg"
            alt="Question"
            style={{
              width: '600px',
              height: '600px',
              borderRadius: '8px',
              padding: '-10vh',
            }}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 4,
            backgroundColor: '#000',
            borderRadius: 2,
            boxShadow: `0 0 10px 4px rgba(0, 0, 255, 0.6)`,
            color: '#fff',
            textAlign: 'center',
            marginTop: '-5vh',
            marginRight: '2vh'
          }}
        >
          {isSignedUp ? (
            <ThankYouMessage />
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                {showSignUpForm ? 'Sign-Up' : 'Login'}
              </Typography>

              {showSignUpForm ? (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      label="Name"
                      variant="outlined"
                      fullWidth
                      sx={{
                        input: { color: 'white' },
                        label: { color: 'rgba(255, 255, 255, 0.7)' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#00f' },
                          '&:hover fieldset': { borderColor: '#00f' },
                          '&.Mui-focused fieldset': { borderColor: '#00f' },
                        },
                      }}
                    />
                    <TextField
                      label="Username"
                      variant="outlined"
                      fullWidth
                      sx={{
                        input: { color: 'white' },
                        label: { color: 'rgba(255, 255, 255, 0.7)' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#00f' },
                          '&:hover fieldset': { borderColor: '#00f' },
                          '&.Mui-focused fieldset': { borderColor: '#00f' },
                        },
                      }}
                    />
                    <TextField
                      label="Create Password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      sx={{
                        input: { color: 'white' },
                        label: { color: 'rgba(255, 255, 255, 0.7)' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#00f' },
                          '&:hover fieldset': { borderColor: '#00f' },
                          '&.Mui-focused fieldset': { borderColor: '#00f' },
                        },
                      }}
                    />
                    <Button variant="contained" color="primary" fullWidth type="submit">
                      Sign Up
                    </Button>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                      Already a user? <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleLoginClick}>Login</Button>
                    </Typography>
                  </Stack>
                </form>
              ) : (
                <Stack spacing={2}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#00f' },
                        '&:hover fieldset': { borderColor: '#00f' },
                        '&.Mui-focused fieldset': { borderColor: '#00f' },
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#00f' },
                        '&:hover fieldset': { borderColor: '#00f' },
                        '&.Mui-focused fieldset': { borderColor: '#00f' },
                      },
                    }}
                  />
                  <Button variant="contained" color="primary" fullWidth>
                    Login
                  </Button>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    If you don't have an account, <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleSignUpClick}>Sign Up</Button>
                  </Typography>
                </Stack>
              )}
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}