const express = require('express');
const fs = require('fs');
const router = express.Router();

// Read post data from JSON file
let posts = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Create a new post
router.post('/', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  fs.writeFileSync('./data/posts.json', JSON.stringify(posts, null, 2));
  res.status(201).json(newPost);
});



module.exports = router;
