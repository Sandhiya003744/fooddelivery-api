const express = require('express');
const libraryRoutes = require("./library.route.js");
const connectDB = require("./db.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Base route
app.get('/', (req, res) => {
    res.json("My first API");
});

// Library routes
app.use('/library', libraryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port:http://localhost:${PORT}`);
});





