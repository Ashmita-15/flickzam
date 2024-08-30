'use client';

import React from 'react';
import { SupportAgent } from "@mui/icons-material";
import { Avatar, Box, Card, Typography } from "@mui/material";
import Markdown from 'react-markdown';

function MessageBox({ ai, text }) {
    return (
        <Box sx={{ display: "flex", justifyContent: ai ? "flex-start" : "flex-end", mb: 1 }}>
            {ai ? (
                <>
                    <Avatar alt="Bot Avatar" sx={{ m: 1, bgcolor: '#004d40' }}>
                        <SupportAgent sx={{ color: '#ffffff' }} />
                    </Avatar>
                    <Box
                        sx={{
                            maxWidth: "80%",
                            backgroundColor: '#00695c',
                            borderRadius: 4,
                            padding: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            color: '#ffffff',
                            wordBreak: 'break-word',
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                            <Markdown>{text}</Markdown>
                        </Typography>
                    </Box>
                </>
            ) : (
                <Card
                    sx={{
                        maxWidth: "80%",
                        backgroundColor: '#004d40',
                        borderRadius: 4,
                        padding: 2,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        color: '#ffffff',
                    }}
                >
                    <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                        {text}
                    </Typography>
                </Card>
            )}
        </Box>
    );
}

export default MessageBox;
