const express = require('express');
const Book = require('../models/Book');
const User = require('../models/User');

const router = express.Router();

// Add a Book (Author Only)
router.post('/create', async (req, res) => {
  const { title, genre, authorId, stock } = req.body;

  try {
    const author = await User.findById(authorId);
    if (!author || author.role !== 'Author') {
      return res.status(400).json({ message: "Only authors can add books" });
    }

    const book = new Book({ title, genre, author: authorId, stock });
    await book.save();

    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get All Books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('author', 'name');
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get Books by Author
router.get('/author/:id', async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.id });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Borrow Book (Reader Only)
router.post('/borrow', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || user.role !== 'Reader') {
      return res.status(400).json({ message: "Only readers can borrow books" });
    }

    if (!book || book.stock < 1) {
      return res.status(400).json({ message: "Book not available" });
    }

    // Borrow the book
    user.borrowedBooks.push(bookId);
    book.stock -= 1;

    await user.save();
    await book.save();

    res.status(200).json({ message: "Book borrowed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
