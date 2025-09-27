const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,   
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-Fiction","Other"],
        default: "Other"
    },

});

const Library = mongoose.model("Library", schema);
module.exports = Library;
