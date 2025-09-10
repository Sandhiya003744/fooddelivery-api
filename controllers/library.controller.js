// controllers/library.controller.js

const Library = require("../models/library.model.js"); // ✅ fixed name

const LibraryIndex = (req, res) => {
    res.send("Get all the books");
};

const LibraryCreate = async (req, res) => {
    // id,title,desc
    console.log(req.body);

    // validate your data
    const newLibrary = new Library({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    });

    try {
        const library = await newLibrary.save();
        return res.status(201).json(library); // ✅ fixed (removed req,body)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const LibraryUpdate = (req, res) => {
    res.send("Update book information");
};

const LibraryDelete = (req, res) => {
    res.send("Delete a book");
};

module.exports = {
    LibraryIndex,
    LibraryCreate,
    LibraryUpdate,
    LibraryDelete
};
