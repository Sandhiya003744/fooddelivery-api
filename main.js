const express = require('express');
const app = express();
const libraryRoutes = require("./library.route.js");

const bodyParser = require("body-parser");

const PORT = 3000;

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db.js");
connectDB();


app.use(bodyParser.json());




app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json("My first API");
});

app.use('/library', libraryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port:http://localhost:${PORT}`);
});





