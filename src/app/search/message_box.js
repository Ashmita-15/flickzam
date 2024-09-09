import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Avatar } from '@mui/material';
import { SupportAgent } from '@mui/icons-material';

// Styled components for the Message Box
const MessageContainer = styled('div')(({ ai }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: ai ? 'flex-start' : 'flex-end',
  width: '100%',
  maxWidth: '600px', // Matches the max width of the chat box
  margin: '8px 0',
}));

const MessageBubble = styled(Typography)(({ ai }) => ({
  padding: '8px 16px',
  backgroundColor: ai ? '#1e88e5' : '#ffca28', // Different colors for AI and user messages
  color: '#ffffff',
  borderRadius: '16px',
  border: 'none',
  maxWidth: '100%',
  whiteSpace: 'pre-wrap', // Preserve line breaks
  overflowWrap: 'break-word',
  boxShadow: 'none',
}));

function MessageBox({ ai, text }) {
  return (
    <MessageContainer ai={ai}>
      {ai && (
        <Avatar
          sx={{
            backgroundColor: '#1e88e5',
            marginRight: '8px',
            width: 32,
            height: 32,
          }}
        >
          <SupportAgent />
        </Avatar>
      )}
      <MessageBubble ai={ai} variant="body1">
        {text}
      </MessageBubble>
    </MessageContainer>
  );
}

export default MessageBox;
