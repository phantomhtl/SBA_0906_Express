const express = require('express');
const fs = require('fs');
const router = express.Router();

// Read comment data from JSON file
let comments = JSON.parse(fs.readFileSync('./data/comments.json', 'utf8'));

// Get all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Create a new comment
router.post('/', (req, res) => {
  const newComment = { id: comments.length + 1, ...req.body };
  comments.push(newComment);
  fs.writeFileSync('./data/comments.json', JSON.stringify(comments, null, 2));
  res.status(201).json(newComment);
});



module.exports = router;
