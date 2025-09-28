const express = require('express');
const libraryRoutes = require("./library.route.js");
const connectDB = require("./db.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connectDB();

app.get('/', (req, res) => {
    res.json("My first API");
});

app.use('/library', libraryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port:http://localhost:${PORT}`);
});





