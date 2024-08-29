'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Typography, Container, Card, TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from "react";
import { Person, SendAndArchiveRounded } from "@mui/icons-material";
import { GoogleGenerativeAI } from "@google/generative-ai";
import MessageBox from './messge_box';

const drawerWidth = 240;

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI("AIzaSyDFeowgP0Mn10UXKqO20pe59g_5T6BC_aU");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  async function interactWithChatBot(message) {
    const chat = model.startChat();
    setLoading(true);
    let result = await chat.sendMessage(message);
    setLoading(false);
    return result.response.text();
  }

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { ai: false, text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setInput("");

    const aiResponse = await interactWithChatBot(input);
    const aiMessage = { ai: true, text: aiResponse };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', textShadow: '0 0 15px rgba(192,192,192,0.8)' }}>
            FlickZam Bot
          </Typography>
          <IconButton color="inherit">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#000000',
            color: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {['Chat 1', 'Chat 2', 'Chat 3'].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                '&:hover': {
                  backgroundColor: 'gray'
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px`, display: 'flex', flexDirection: 'column' }}
      >
        <Toolbar />

        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)',
            color: 'white',
            pb: 5
          }}
        >
          {messages.map((message, index) => (
            <Box key={index} sx={{ padding: 0.5, borderRadius: 8, maxWidth: '800px', width: '100%', margin: '0 auto' }}>
              <MessageBox ai={message.ai} text={message.text} />
            </Box>
          ))}
          {loading && (
            <Box sx={{ padding: 0.5, borderRadius: 8, maxWidth: '800px', width: '100%', margin: '0 auto' }}>
              <Typography variant="body1" color="textSecondary">
                Bot is typing...
              </Typography>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: `${drawerWidth}px`,
            right: 0,
            padding: 2,
            backgroundColor: '#f0f0f0',
            borderTop: '1px solid #ddd',
          }}
        >
          <Card sx={{ backgroundColor: "#ffffff", padding: 0.5, borderRadius: 8, maxWidth: '800px', margin: '0 auto' }}>
            <TextField
              fullWidth
              multiline
              minRows={1}
              maxRows={10}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message ChatBot"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: '50px',
                  "& fieldset": {
                    borderColor: 'transparent',
                  },
                  "&:hover fieldset": {
                    borderColor: 'transparent',
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: 'transparent',
                  },
                },
                overflowY: 'hidden'
              }}
              onKeyDown={handleKeyDown}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleSendMessage}>
                      <SendAndArchiveRounded />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Card>
          <Typography variant="body2" align="center" sx={{ mt: 1, color: 'white' }}>
            ChatBot Can Make Mistakes
          </Typography>
        </Box>

      </Box>
    </Container>
  );
}

export default ChatPage;
