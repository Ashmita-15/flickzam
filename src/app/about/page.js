"use client"; // Ensures the file is treated as a client component

import { Typography, Container, Grid, Paper, Box, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // For scroll animations

// Helper function to determine if the viewport width is small
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function AboutPage() {
  const isMobile = useIsMobile();
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)', // Gradient background
      padding: 0, // Ensure no extra padding
      margin: 0,  // Ensure no extra margin
    }}>
      {/* Importing Fonts in the Component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');
          .custom-font {
            font-family: 'Roboto', sans-serif;
          }
          .custom-header {
            font-family: 'Poppins', sans-serif;
          }
          .hover-effect:hover {
            color: #f0f0f0;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            transform: scale(1.05);
            transition: all 0.3s ease;
          }
        `}
      </style>

      <Container maxWidth="lg" sx={{ 
        py: 8, 
        flexGrow: 1, 
        px: 2, // Ensure padding on sides
        width: '100%', // Ensure full width
        boxSizing: 'border-box', // Include padding in width calculation
      }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          align="center" 
          sx={{ 
            color: 'white', 
            textShadow: '0 0 15px rgba(192,192,192,0.8)', 
            mb: 4,
            fontFamily: 'Poppins, sans-serif',
            '&:hover': {
              color: '#f0f0f0',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            },
            transition: 'color 0.3s ease, text-shadow 0.3s ease'
          }}
        >
          About FlickZam
        </Typography>
        <Typography 
          variant="h5" 
          gutterBottom 
          align="center" 
          sx={{ 
            color: 'white', 
            textShadow: '0 0 12px rgba(192,192,192,0.6)', 
            mb: 6,
            fontFamily: 'Poppins, sans-serif',
            '&:hover': {
              color: '#f0f0f0',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
            },
            transition: 'color 0.3s ease, text-shadow 0.3s ease'
          }}
        >
          Revolutionizing movie discovery with cutting-edge AI.
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="center" 
          sx={{ 
            color: 'white', 
            mb: 6,
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          FlickZam harnesses the power of advanced AI to provide a seamless movie-finding experience. Whether you're searching by description, dialogue, or image, our intelligent algorithms deliver accurate and relevant results, simplifying your search and enhancing your movie discovery journey.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {['Find by Description', 'Find by Dialogue', 'Find by Image'].map((title, index) => (
            <Grid item xs={12} md={4} key={index} ref={aboutRef} sx={{ 
              transition: '0.5s', 
              opacity: aboutInView ? 1 : 0, 
              transform: aboutInView ? 'translateY(0)' : 'translateY(20px)',
              px: 1, // Ensure padding on sides
            }}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                borderRadius: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                backgroundColor: 'white', 
                color: 'black',
                textAlign: 'center',
                transition: '0.3s ease-in-out', // Transition for hover effects
                '&:hover': {
                  transform: 'scale(1.05)', // Slightly scale up on hover
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // Increase shadow on hover
                },
                '& h6': {
                  fontSize: '1.2rem', // Responsive font size
                  mb: 2,
                  fontFamily: 'Poppins, sans-serif', // Stylish font for headers in boxes
                },
                '& p': {
                  fontSize: '1rem', // Responsive font size
                  fontFamily: 'Roboto, sans-serif', // Font for paragraphs in boxes
                }
              }}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body1">
                  {index === 0 && 'Enter a detailed description or plot summary of the movie you’re looking for. Our AI will match your input with a vast database to deliver the most relevant movie suggestions. Ideal for finding movies you remember only by their storyline.'}
                  {index === 1 && 'Input specific dialogue or quotes from the movie, and FlickZam’s AI will identify the film based on your provided text. This feature helps you locate movies based on memorable lines or conversations.'}
                  {index === 2 && 'Upload an image, such as a scene or a movie poster, and our AI will recognize the movie based on visual elements. Perfect for identifying films from scenes or promotional images you have.'}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 8, bgcolor: 'white' }} />

        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              color: 'white', 
              textShadow: '0 0 12px rgba(192,192,192,0.8)', 
              mb: 4,
              fontFamily: 'Poppins, sans-serif', // Stylish font for vision header
              '&:hover': {
                color: '#f0f0f0',
                textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
              },
              transition: 'color 0.3s ease, text-shadow 0.3s ease'
            }} 
            ref={visionRef}
          >
            Our Vision
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              color: 'white', 
              mb: 4, 
              opacity: visionInView ? 1 : 0, 
              transform: visionInView ? 'translateY(0)' : 'translateY(20px)', 
              transition: '0.5s',
              fontFamily: 'Roboto, sans-serif', // Font for vision description
            }}
          >
            At FlickZam, we aim to enhance the way you discover movies by integrating sophisticated AI technology with a user-friendly interface. Our goal is to make finding movies easier and more enjoyable, allowing you to focus on what matters most – enjoying great films.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ color: 'white', fontFamily: 'Roboto, sans-serif' }}
          >
            We are committed to continual improvement and innovation, striving to provide the best possible experience for our users.
          </Typography>
        </Box>
      </Container>

      <Box sx={{ 
        py: 1, 
        backgroundColor: '#000000', 
        color: 'white', 
        width: '100%', 
        boxSizing: 'border-box',
        mt: 'auto', // Push footer to the bottom
        textAlign: 'center',
      }}>
        <Typography variant="body2" align="center" sx={{ p: 2 }}>
          © {new Date().getFullYear()} FlickZam. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
