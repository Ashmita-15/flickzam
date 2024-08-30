'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Person, SendAndArchiveRounded, Search, Mic, ImageSearch, Menu as MenuIcon, Add as AddIcon, CameraAlt as CameraAltIcon, ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import MessageBox from './message_box';

const drawerWidth = 250;

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('description');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [conversations, setConversations] = useState([]);
    const messagesEndRef = useRef(null);

    // Handle chat bot interaction
    async function interactWithChatBot(message) {
        // Dummy implementation
        const aiResponse = "This is a response from the bot.";
        return aiResponse;
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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        console.log('Image file selected:', file);
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log('Image preview:', reader.result);
        };
        reader.readAsDataURL(file);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const startNewChat = () => {
        const newChat = {
            id: Date.now(),
            name: `New Chat ${conversations.length + 1}`,
            messages: []
        };
        setConversations([newChat, ...conversations]);
        setMessages([]);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleSidebar}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        {sidebarOpen ? <ArrowBackIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ fontFamily: 'Poppins, sans-serif', textShadow: '0 0 15px rgba(192,192,192,0.8)' }}>
                        FlickZam
                    </Typography>
                    <IconButton color="inherit">
                        <Person />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                anchor="left"
                open={sidebarOpen}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#121212',
                        color: 'white',
                        borderRight: 'none'
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                        <IconButton
                            color="inherit"
                            aria-label="close drawer"
                            edge="start"
                            onClick={toggleSidebar}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="create new chat"
                            edge="start"
                            onClick={startNewChat}
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Button
                        fullWidth
                        startIcon={<AddIcon />}
                        onClick={startNewChat}
                        sx={{
                            mt: 2,
                            color: 'white',
                            borderRadius: '0',
                            justifyContent: 'flex-start',
                            pl: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        New Chat
                    </Button>
                    <List sx={{ flexGrow: 1, mt: 2 }}>
                        {conversations.map((chat) => (
                            <ListItem
                                button
                                key={chat.id}
                                sx={{
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                                    borderRadius: '0',
                                    pl: 2
                                }}
                            >
                                <ListItemText primary={chat.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{
                flexGrow: 1,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'margin-left 0.3s',
                marginLeft: sidebarOpen ? drawerWidth : 0,
                background: 'linear-gradient(135deg, #003366 0%, #000000 50%, #808080 100%)',
            }}>
                <Toolbar />
                <Box sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                    pb: 20
                }}>
                    {/* Search Options */}
                    <Box sx={{ mb: 2 }}>
                        <Button
                            variant={searchType === 'description' ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => setSearchType('description')}
                            startIcon={<Search />}
                            sx={{
                                color: 'white',
                                borderColor: 'white',
                                mr: 1,
                                backgroundColor: searchType === 'description' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                            }}
                        >
                            Description
                        </Button>
                        <Button
                            variant={searchType === 'dialogue' ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={() => setSearchType('dialogue')}
                            startIcon={<Mic />}
                            sx={{
                                color: 'white',
                                borderColor: 'white',
                                mr: 1,
                                backgroundColor: searchType === 'dialogue' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                            }}
                        >
                            Dialogue
                        </Button>
                        <Button
                            variant={searchType === 'image' ? 'contained' : 'outlined'}
                            color="primary"
                            component="label"
                            startIcon={<ImageSearch />}
                            sx={{
                                color: 'white',
                                borderColor: 'white',
                                backgroundColor: searchType === 'image' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                            }}
                        >
                            Image
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                hidden
                            />
                        </Button>
                    </Box>

                    {/* Messages */}
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                        maxHeight: '60vh',
                        mb: 2
                    }}>
                        {messages.length === 0 ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    Start a new conversation
                                </Typography>
                            </Box>
                        ) : (
                            messages.map((message, index) => (
                                <MessageBox key={index} ai={message.ai} text={message.text} />
                            ))
                        )}
                        {loading && (
                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                Bot is typing...
                            </Typography>
                        )}
                        <div ref={messagesEndRef} />
                    </Box>
                </Box>

                {/* Message Input */}
                <Box sx={{
                    position: 'sticky',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 2,
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <IconButton color="inherit" component="label" sx={{ color: 'white' }}>
                            <CameraAltIcon />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                hidden
                            />
                        </IconButton>
                        <TextField
                            fullWidth
                            multiline
                            minRows={1}
                            maxRows={3}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Message FlickZam Bot..."
                            variant="outlined"
                            onKeyDown={handleKeyDown}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" onClick={handleSendMessage} sx={{ color: 'white' }}>
                                            <SendAndArchiveRounded />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                borderRadius: '20px',
                                backgroundColor: '#121212',
                                color: 'white',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(255, 255, 255, 0.8)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ChatPage;
