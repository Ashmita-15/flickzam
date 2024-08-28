// src/app/signup/page.js
'use client'; // To ensure client-side interactivity

import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Stack } from '@mui/material';

export default function SignupPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false); // Track if sign-up form should be shown

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleLoginClick = () => {
    setShowSignUpForm(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',
        height: '100vh',
        padding: 4,
      }}
    >
      {/* Container for image and form */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200, // Set a maximum width for the combined content
        }}
      >
        {/* Image on the left */}
        <Box
          sx={{
            flexShrink: 0,
            width: 400, // Set the width of the image box
            height: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',// Allow height to adjust based on the image aspect ratio
            marginLeft: '20vw', 
            padding:20
            // Space between the image and the form
          }}
        >
          <img
            src="/question.jpg"
            alt="Question"
            style={{
              width: '600px',
              height: '600px',
              borderRadius: '8px',
              padding:'-10vh', // Optional: add some rounding to the corners of the image box
            }}
          />
        </Box>

        {/* Form content */}
        <Box
          sx={{
           
            width: '100%',
            maxWidth: 400, // Set a maximum width for the form
            padding: 4,
            backgroundColor: '#000',
            borderRadius: 2,
            boxShadow: `0 0 10px 4px rgba(0, 0, 255, 0.6)`, // Blue glowy border around the entire form
            color: '#fff',
            textAlign: 'center',
            marginTop:'-5vh',
            marginRight:'2vh'
          }}
        >
          {/* Heading above the form */}
          <Typography variant="h4" gutterBottom>
            {showSignUpForm ? 'Sign-Up' : 'Login'}
          </Typography>

          {/* Form fields */}
          {showSignUpForm ? (
            <Stack spacing={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                sx={{
                  input: { color: 'white' },
                  label: { color: 'rgba(255, 255, 255, 0.7)' },
                  '& .MuiOutlinedInput-root': {
                    borderColor: '#00f', // Blue border for input fields
                    '& fieldset': {
                      borderColor: '#00f', // Permanent blue border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f', // Blue border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f', // Blue border when focused
                    },
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
                    borderColor: '#00f', // Blue border for input fields
                    '& fieldset': {
                      borderColor: '#00f', // Permanent blue border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f', // Blue border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f', // Blue border when focused
                    },
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
                    borderColor: '#00f', // Blue border for input fields
                    '& fieldset': {
                      borderColor: '#00f', // Permanent blue border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f', // Blue border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f', // Blue border when focused
                    },
                  },
                }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Already a user? <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleLoginClick}>Login</Button>
              </Typography>
            </Stack>
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
                    borderColor: '#00f', // Blue border for input fields
                    '& fieldset': {
                      borderColor: '#00f', // Permanent blue border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f', // Blue border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f', // Blue border when focused
                    },
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
                    borderColor: '#00f', // Blue border for input fields
                    '& fieldset': {
                      borderColor: '#00f', // Permanent blue border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f', // Blue border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f', // Blue border when focused
                    },
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
        </Box>
      </Box>
    </Container>
  );
}
