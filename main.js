const express = require("express");
const foodRoutes = require ("./routes/food.route.js");
const connectDB = require("./lib/db.js");

const app = express();
const PORT=3000;

//connect db
connectDB();

app.get('/', (req, res) => {
res.json("My first api");
});


app.use('/foods', foodRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);





