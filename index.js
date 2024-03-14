// Import express
import express from 'express';

// Create a web server named app
const app = express();

// Serve the content of www
app.use(express.static('www'));

// Start the web server
app.listen(3333, () => console.log('Listening on http://localhost:3333'));