'use client';

import React from 'react';
import { SupportAgent } from "@mui/icons-material";
import { Avatar, Box, Card, Typography } from "@mui/material";
import Markdown from 'react-markdown';

function MessageBox({ ai, text }) {
    return (
        ai ? (
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
                <Avatar alt="Bot Avatar" sx={{ m: 1, bgcolor: '#004d40' }}>
                    <SupportAgent sx={{ color: '#ffffff' }} />
                </Avatar>
                <Box
                    sx={{
                        width: "70%",
                        backgroundColor: '#00695c', // Dark teal background
                        borderRadius: 4,
                        padding: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add subtle shadow
                    }}
                >
                    <Typography variant="subtitle1" sx={{ color: '#ffffff', fontFamily: 'Roboto, sans-serif' }}>
                        <Markdown>{text}</Markdown>
                    </Typography>
                </Box>
            </Box>
        ) : (
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
                <Card
                    sx={{
                        width: "50%",
                        backgroundColor: '#004d40', // Dark teal background
                        borderRadius: 4,
                        padding: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add subtle shadow
                    }}
                >
                    <Typography variant="body1" sx={{ color: '#ffffff', fontFamily: 'Roboto, sans-serif' }}>
                        {text}
                    </Typography>
                </Card>
            </Box>
        )
    );
}

export default MessageBox;
