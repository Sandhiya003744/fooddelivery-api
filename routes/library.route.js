
const express = require("express");
const router = express.Router();

const LibraryController = require("../controllers/library.controller");

// Define routes
router.get("/", LibraryController.LibraryIndex);
router.post("/", LibraryController.LibraryCreate);
router.put("/:id", LibraryController.LibraryUpdate);
router.delete("/:id", LibraryController.LibraryDelete);

module.exports = router;
