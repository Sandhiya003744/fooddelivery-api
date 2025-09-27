const Library = require("./library.model.js");
const LibraryIndex = async (req, res) => {
  try {
    const libr = await Library.find();
    res.send(libr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const LibraryCreate = async (req, res) => {
  console.log(req.body);

  const newLibrary = new Library({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
  });

  try {
    const library = await newLibrary.save();
    return res.status(201).json(library);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const LibraryUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLibrary = await Library.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedLibrary) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const LibraryDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLibrary = await Book.findByIdAndDelete(id);

    if (!deletedLibrary) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const LibraryFindByTitle = async (req, res) => {
  try {
    const name = req.params.title;
    const SearchBookName = await Library.find({
      title: new RegExp(name, "i"),
    });
    res.send(SearchBookName);
  } catch (error) {
    res.status(400).json({ message: "error.message" });
  }
};

module.exports = {
  LibraryIndex,
  LibraryCreate,
  LibraryUpdate,
  LibraryDelete,
  LibraryFindByTitle,
};
