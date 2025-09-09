const express = require ("express");
const router = express.Router();

//get
router.get('/', (req, res) => {
res.send("Get all food items");
});

//post
router.post('/', (req, res) => {
res.send("Prepare a food");
});

//update
router.put('/:id', (req, res) => {
res.send("Add extra spices");
});

//delete
router.delete('/:id', (req, res) => {
res.send("Food is completed");
});

module.exports=router;