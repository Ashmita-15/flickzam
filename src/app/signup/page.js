'use client';
import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Stack } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(false); // Track if sign-up form should be shown
  const [error, setError] = useState(''); // State for managing error messages
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [isSignedUp, setIsSignedUp] = useState(false); // State to track sign-up status
  const router = useRouter(); // Next.js router

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
      setIsSignedUp(true); // Set sign-up status to true
      setError(''); // Clear error message
    } catch (error) {
      setError(error.message); // Set error message if signup fails
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to the dashboard or home page
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

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
            padding:20
          }}
        >
          <img
            src="/question.jpg"
            alt="Question"
            style={{
              width: '600px',
              height: '600px',
              borderRadius: '8px',
              padding:'-10vh',
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
          {/* Display Thank You Message if user is signed up */}
          {isSignedUp ? (
            <Box sx={{ textAlign: 'center', color: '#fff' }}>
              <Typography variant="h4" gutterBottom>
                Thank You for Signing Up!
              </Typography>
            </Box>
          ) : (
            <>
              {/* Display error message if any */}
              {error && (
                <Typography color="error" variant="body1" sx={{ marginBottom: 2 }}>
                  {error}
                </Typography>
              )}

              {/* Heading above the form */}
              <Typography variant="h4" gutterBottom>
                {showSignUpForm ? 'Sign-Up' : 'Login'}
              </Typography>

              {/* Form fields */}
              {showSignUpForm ? (
                <Stack spacing={2}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        borderColor: '#00f',
                        '& fieldset': {
                          borderColor: '#00f',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00f',
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        borderColor: '#00f',
                        '& fieldset': {
                          borderColor: '#00f',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00f',
                        },
                      },
                    }}
                  />
                  <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
                    Sign Up
                  </Button>
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                    Already a user? <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleLoginClick}>Login</Button>
                  </Typography>
                </Stack>
              ) : (
                <Stack spacing={2}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        borderColor: '#00f',
                        '& fieldset': {
                          borderColor: '#00f',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00f',
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiOutlinedInput-root': {
                        borderColor: '#00f',
                        '& fieldset': {
                          borderColor: '#00f',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00f',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00f',
                        },
                      },
                    }}
                  />
                  <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
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
