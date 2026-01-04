const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// POST
router.post("/", async (req, res) => {
  const books = await Book.create(req.body);
  res.json(books);
});

// Insert multiple books at once
router.post("/many", async (req, res) => {
  try {
    const books = await Book.insertMany(req.body);
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET by category
router.get("/category/:category", async (req, res) => {
  const books = await Book.find({ category: req.params.category });
  res.json(books);
});

// GET after 2019
router.get("/after/2019", async (req, res) => {
  const books = await Book.find({ publishedYear: { $gt: 2019 } });
  res.json(books);
});

// UPDATE copies
router.put("/copies/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  book.availableCopies += req.body.change;
  await book.save();

  res.json(book);
});

// DELETE if copies = 0
router.delete("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  if (book.availableCopies === 0) {
    await Book.findByIdAndDelete(req.params.id);
    return res.json({ message: "Book deleted" });
  }

  res.status(400).json({ error: "Copies still available" });
});

module.exports = router;
