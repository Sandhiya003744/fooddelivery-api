
const express = require("express");
const router = express.Router();

const LibraryController = require("./library.controller");


router.get("/", LibraryController.LibraryIndex);
router.post("/", LibraryController.LibraryCreate);
router.put("/:id", LibraryController.LibraryUpdate);
router.delete("/:id", LibraryController.LibraryDelete);
router.get("/:title", LibraryController.LibraryFindByTitle);
// router.get("/token", LibraryController.LibraryToken);

module.exports = router;
