const express = require ("express");
const { FoodIndex, FoodCreate, FoodUpdate, FoodDelete } = require ("../controllers/foods.controller.js")
const router = express.Router();


//get
router.get("/", FoodIndex);

//post
router.post("/", FoodCreate);

//update
router.put("/:id", FoodUpdate);

//delete
router.delete("/:id", FoodDelete);

module.exports=router;