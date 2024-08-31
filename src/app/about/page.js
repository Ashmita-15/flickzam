"use client"; // Ensures the file is treated as a client component

import { Typography, Container, Grid, Paper, Box, Divider } from '@mui/material';

export default function AboutPage() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)', // Gradient background
      padding: 0, // Ensure no extra padding
      margin: 0,  // Ensure no extra margin
    }}>
      {/* Ensure content is not hidden behind the fixed header */}
      <Box sx={{ pt: 8 }}> {/* Add padding-top equal to the height of the header */}
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
            FlickZam harnesses the power of advanced AI to provide a seamless movie-finding experience. Whether you{"'"}re searching by description, dialogue, or image, our intelligent algorithms deliver accurate and relevant results, simplifying your search and enhancing your movie discovery journey.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {['Find by Description', 'Find by Dialogue', 'Find by Image'].map((title, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ 
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
                    {index === 0 && "Enter a detailed description or plot summary of the movie you're looking for. Our AI will match your input with a vast database to deliver the most relevant movie suggestions. Ideal for finding movies you remember only by their storyline."}
                    {index === 1 && "Input specific dialogue or quotes from the movie, and FlickZam's AI will identify the film based on your provided text. This feature helps you locate movies based on memorable lines or conversations."}
                    {index === 2 && "Upload an image, such as a scene or a movie poster, and our AI will recognize the movie based on visual elements. Perfect for identifying films from scenes or promotional images you have."}
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
              }}
            >
              Our Vision
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                color: 'white',
                fontFamily: 'Roboto, sans-serif',
                textAlign: 'center'
              }}
            >
              At FlickZam, we envision a world where movie discovery is effortless and enjoyable. Our AI technology aims to enhance the user experience by providing precise and personalized movie recommendations, ensuring you find exactly what you{"'"}re looking for with minimal effort.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          py: 2,
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'Raleway, sans-serif' }}>
          © 2024 FlickZam. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
