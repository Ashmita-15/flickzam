'use client';
import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Stack } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false); // Track if sign-up form should be shown

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setError('');
  };

  const handleLoginClick = () => {
    setShowSignUpForm(false);
    setError('');
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate_();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate_();
    } catch (error) {
      setError(error.message);
    }
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