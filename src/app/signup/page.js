'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, TextField, Button, Stack } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import '@fontsource/poppins';

export default function SignupPage() {
  const [showSignUpForm, setShowSignUpForm] = useState(true); // Default to signup form
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const router = useRouter();
  const [textVisible, setTextVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // State for page fade-in effect

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
      setIsSignedUp(true);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Trigger the text transition on component mount
    const timeout = setTimeout(() => setTextVisible(true), 500); // Delay for the transition effect
    setFadeIn(true); // Trigger the fade-in effect for the page
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        opacity: fadeIn ? 1 : 0, // Apply fade-in effect
        transform: fadeIn ? 'translateY(0)' : 'translateY(20px)', // Slide-up effect
        transition: 'opacity 1s ease, transform 1s ease', // Transition properties
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          padding: 4,
          gap: 4,
          flexWrap: 'nowrap', // Keeps text box and form side by side
          opacity: fadeIn ? 1 : 0, // Apply fade-in effect to container
          transform: fadeIn ? 'translateY(0)' : 'translateY(20px)', // Slide-up effect
          transition: 'opacity 1s ease, transform 1s ease', // Transition properties
        }}
      >
        {/* Text Box Section */}
        <Box
          sx={{
            flexShrink: 0,
            width: '100%',
            maxWidth: 450,
            height: '100%',
            position: 'relative',
            borderRadius: 2,
            boxShadow: `0 0 20px 8px rgba(0, 150, 150, .5)`, // Blue-green glow effect
            overflow: 'hidden',
            padding: 2, // Ensure text is padded from the edges
            backgroundImage: 'url("/cinema.jpg")', // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 1s ease', // Transition properties for text box
            '&:hover': {
              transform: 'scale(1.05)', // Scale up on hover
            },
          }}
        >
          {/* Overlay for visibility */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.4)', // Lower opacity to make text visible
              zIndex: 1,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              zIndex: 2, // Ensure text stays above the background
              color: '#fff',
              textAlign: 'center',
              textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
              fontWeight: 'bold',
              opacity: textVisible ? 1 : 0, // Add transition effect
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)', // Slide up effect
              transition: 'opacity 1s ease, transform 1s ease', // Transition properties
            }}
          >
            Guess any Movie Anytime, Anywhere through
             FlickZam AI!
          </Typography>
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 450,
            height: '100%', // Match height with the text box
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Increased translucency
            borderRadius: 2,
            padding: 4,
            boxShadow: `0 0 20px 8px rgba(0, 150, 150, .5)`, // Blue-green glow effect
            color: '#fff',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 1s ease', // Transition properties for form
            '&:hover': {
              transform: 'scale(1.02)', // Slightly scale up on hover
            },
          }}
        >
          {/* Display Thank You Message if user is signed up */}
          {isSignedUp ? (
            <Box sx={{ textAlign: 'center', color: '#fff' }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Thank You for Signing Up!
              </Typography>
            </Box>
          ) : (
            <>
              {/* Display error message if any */}
              {error && (
                <Typography
                  color="error"
                  variant="body1"
                  sx={{ marginBottom: 2, fontFamily: 'Roboto, sans-serif' }}
                >
                  {error}
                </Typography>
              )}

              {/* Heading above the form */}
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {showSignUpForm ? 'Sign-Up' : 'Login'}
              </Typography>

              {/* Form fields */}
              <Stack spacing={3} sx={{ mt: 3, width: '100%' }}>
              <TextField
  label="Email"
  variant="outlined"
  type="email"
  fullWidth
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  sx={{
    input: { color: 'white', fontFamily: 'Roboto, sans-serif' },
    label: { color: 'rgba(255, 255, 255, 0.7)' },
    '& .MuiOutlinedInput-root': {
      borderColor: 'rgba(0, 150, 150, .5)', // Match glow effect color
      '& fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
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
    input: { color: 'white', fontFamily: 'Roboto, sans-serif' },
    label: { color: 'rgba(255, 255, 255, 0.7)' },
    '& .MuiOutlinedInput-root': {
      borderColor: 'rgba(0, 150, 150, .5)', // Match glow effect color
      '& fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0, 150, 150, .5)',
      },
    },
  }}
/>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    fontFamily: 'Raleway, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
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
                  }}
                  onClick={showSignUpForm ? handleSignUp : handleLogin}
                >
                  {showSignUpForm ? 'Sign Up' : 'Login'}
                </Button>
              </Stack>

              {/* Form switch buttons */}
              <Box sx={{ mt: 2 }}>
                {showSignUpForm ? (
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Already a user? <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleLoginClick}>Login</Button>
                </Typography>

                ) : (
                  <Typography variant="body1" sx={{ marginTop: 2 }}>
                  If you don't have an account, <Button variant="text" color="secondary" sx={{ fontWeight: 'bold', textDecoration: 'underline' }} onClick={handleSignUpClick}>Sign Up</Button>
                </Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
