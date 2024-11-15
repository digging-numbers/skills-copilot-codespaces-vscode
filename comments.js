// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file

// Import the http module
const http = require('http');
const fs = require('fs');

// Create a web server
const server = http.createServer((req, res) => {
    // Set the content type
    res.setHeader('Content-Type', 'text/html');

    // Read the comments.html file and send it as the response
    fs.readFile('./comments.html', (err, data) => {
        if (err) {
            res.end('Error reading file');
        } else {
            res.end(data);
        }
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});