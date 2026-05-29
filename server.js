const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Initialize the app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Store the current document state in memory
let documentState = "";

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Send the current document state to the new user immediately
    socket.emit('text-update', documentState);

    // Listen for text changes from a client
    socket.on('text-change', (newText) => {
        documentState = newText; 
        
        // Broadcast the change to everyone EXCEPT the sender
        socket.broadcast.emit('text-update', documentState);
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[REAL-TIME COLLABORATIVE EDITOR] running on http://localhost:${PORT}`);
});