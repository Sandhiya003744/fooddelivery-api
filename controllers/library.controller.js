// controllers/library.controller.js

const LibraryIndex = (req, res) => {
    res.send("Get all the books");
};

const LibraryCreate = (req, res) => {
    res.send("Create a new book");
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

