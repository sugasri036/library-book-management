const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: {
    type: String,
    enum: ["technology", "education", "scifi"],
  },
  publishedYear: Number,
  availableCopies: Number,
});

module.exports = mongoose.model("Book", bookSchema);
