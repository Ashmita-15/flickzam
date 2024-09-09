"use client";
import React, { useState, useRef } from "react";
import {
  TextField,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  Send as SendIcon,
  Menu as MenuIcon,
  AddCircle as AddCircleIcon,
  MoreVert as MoreVertIcon,
  Description as DescriptionIcon,
  Image as ImageIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  CameraAlt as CameraIcon,
  Upload as UploadIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MessageBox from "./message_box"; // Adjust import path if needed
import { useRouter } from 'next/navigation'; // Use correct import for useRouter

// Styled components
const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  background: "linear-gradient(to bottom, #003366, #000000, #808080)",
  color: "#ffffff",
});

const ChatContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  padding: "16px",
});

const ChatWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "800px",
  height: "calc(100vh - 120px)",
  backgroundColor: "transparent",
  padding: "16px",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    height: "calc(100vh - 100px)",
    padding: "8px",
  },
}));

const Header = styled(AppBar)({
  backgroundColor: "#003366",
  color: "#ffffff",
  zIndex: 1200,
});

const ChatArea = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  overflowY: "auto",
  padding: "8px",
});

const InputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "8px 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginRight: "8px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "24px",
    backgroundColor: "#ffffff",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: "8px",
    width: "100%",
  },
}));

const SearchOptionsContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  right: "280px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    bottom: "70px",
    top: "auto",
    right: "50%",
    transform: "translateX(50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "8px",
    borderRadius: "16px",
  },
}));

const SearchModeContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "8px",
});

const ImageSearchContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "16px",
});

const ImagePreview = styled("img")({
  maxWidth: "100%",
  maxHeight: "200px",
  objectFit: "contain",
  marginTop: "8px",
});

function ChatPage() {
  const [chats, setChats] = useState([
    { name: "Chat 1", messages: [{ ai: true, text: "How can I assist you in finding a movie today?" }] },
    { name: "Chat 2", messages: [{ ai: true, text: "How can I help you discover a great film?" }] },
  ]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchMode, setSearchMode] = useState(null);
  const [imageInput, setImageInput] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // State for profile dialog
  const [userInfo, setUserInfo] = useState({ name: "John Doe", email: "john.doe@example.com" }); // Mock user info
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const router = useRouter(); // Use router for navigation

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== "" || imageInput) {
      let userMessage = input;
      if (searchMode === "image" && imageInput) {
        userMessage = "Image search";
      }

      // Add user message to chat
      setChats((prevChats) => {
        const updatedChats = [...prevChats];
        updatedChats[activeChatIndex].messages.push({ ai: false, text: userMessage });
        return updatedChats;
      });

      setInput("");
      setImageInput(null);
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

      // Simulate API call and bot response
      try {
        const botResponse = await fetchBotResponse(userMessage, searchMode, imageInput);
        setChats((prevChats) => {
          const updatedChats = [...prevChats];
          updatedChats[activeChatIndex].messages.push({ ai: true, text: botResponse });
          return updatedChats;
        });
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching bot response:", error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  const fetchBotResponse = async (userInput, mode, imageInput) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response based on search mode
    const movieSuggestions = [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "12 Angry Men",
      "Schindler's List"
    ];
    
    const getRandomMovies = (count) => {
      const shuffled = [...movieSuggestions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    switch (mode) {
      case "description":
        return `Based on your description "${userInput}", here are some movie suggestions:\n\n` +
               getRandomMovies(3).join("\n");
      case "image":
        return `Based on the ${imageInput ? "uploaded" : "provided"} image, here are some visually similar movies:\n\n` +
               getRandomMovies(3).join("\n");
      case "dialogue":
        return `Movies with dialogue similar to "${userInput}" include:\n\n` +
               getRandomMovies(3).join("\n");
      default:
        return `Here are some movie suggestions based on your input "${userInput}":\n\n` +
               getRandomMovies(3).join("\n");
    }
  };

  const handleSearchModeChange = (mode) => {
    setSearchMode(mode);
    setInput("");
    setImageInput(null);
  };

  const handleCloseSearchMode = () => {
    setSearchMode(null);
    setInput("");
    setImageInput(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageInput(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    // Implement camera capture functionality if needed
  };

  const handleAddNewChat = () => {
    const newChatName = `Chat ${chats.length + 1}`;
    setChats([...chats, { name: newChatName, messages: [] }]);
    setActiveChatIndex(chats.length);
  };

  const handleHomeClick = () => {
    router.push('/'); // Navigate to home page
  };

  const handleProfileClick = () => {
    setProfileOpen(true); // Open profile dialog
  };

  const handleLogoutClick = () => {
    // Implement logout functionality here
    console.log("Logged out");
  };

  const handleCloseProfileDialog = () => {
    setProfileOpen(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <Header position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {chats[activeChatIndex]?.name || "Chat"}
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="more" onClick={handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Header>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : 240,
            backgroundColor: "#003366",
            color: "#ffffff",
          },
        }}
      >
        <List>
          {chats.map((chat, index) => (
            <ListItem
              button
              key={index}
              selected={index === activeChatIndex}
              onClick={() => setActiveChatIndex(index)}
            >
              <ListItemText primary={chat.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleAddNewChat}>
            <AddCircleIcon />
            <ListItemText primary="Add New Chat" />
          </ListItem>
        </List>
      </Drawer>

      <ChatContainer>
        <ChatWrapper>
          <ChatArea>
            {chats[activeChatIndex]?.messages.map((msg, index) => (
              <MessageBox key={index} ai={msg.ai} text={msg.text} />
            ))}
            <div ref={messagesEndRef} />
          </ChatArea>

          {searchMode && (
            <SearchModeContainer>
              <Typography variant="body1">
                {`Search by ${searchMode}`}
              </Typography>
              <IconButton onClick={handleCloseSearchMode}>
                <CloseIcon />
              </IconButton>
            </SearchModeContainer>
          )}

          {searchMode === "image" && (
            <ImageSearchContainer>
              <StyledTextField
                fullWidth
                value={input}
                onChange={(e) => setInput(e.target.value)}
                variant="outlined"
                placeholder="Enter image URL..."
              />
              <div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                <Button
                  variant="contained"
                  startIcon={<UploadIcon />}
                  onClick={() => fileInputRef.current.click()}
                  style={{ marginRight: "8px" }}
                >
                  Upload
                </Button>
                <Button
                  variant="contained"
                  startIcon={<CameraIcon />}
                  onClick={handleCameraCapture}
                >
                  Capture
                </Button>
              </div>
              {imageInput && <ImagePreview src={imageInput} alt="Uploaded" />}
            </ImageSearchContainer>
          )}

          <InputContainer>
            <StyledTextField
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              variant="outlined"
              placeholder={searchMode ? `Enter ${searchMode} here...` : "Type a message..."}
            />
            <IconButton onClick={handleSendMessage} color="primary" style={{ width: isMobile ? '100%' : 'auto' }}>
              <SendIcon />
            </IconButton>
          </InputContainer>
        </ChatWrapper>
      </ChatContainer>

      <SearchOptionsContainer>
        <IconButton onClick={() => handleSearchModeChange("description")} style={{ color: searchMode === "description" ? "#ffffff" : "#cccccc" }}>
          <DescriptionIcon />
        </IconButton>
        <IconButton onClick={() => handleSearchModeChange("image")} style={{ color: searchMode === "image" ? "#ffffff" : "#cccccc" }}>
          <ImageIcon />
        </IconButton>
        <IconButton onClick={() => handleSearchModeChange("dialogue")} style={{ color: searchMode === "dialogue" ? "#ffffff" : "#cccccc" }}>
          <ChatIcon />
        </IconButton>
      </SearchOptionsContainer>

      {/* Profile Dialog */}
      <Dialog open={profileOpen} onClose={handleCloseProfileDialog}>
        <DialogTitle>Profile Information</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Name: {userInfo.name}</Typography>
          <Typography variant="body1">Email: {userInfo.email}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
}

export default ChatPage;
