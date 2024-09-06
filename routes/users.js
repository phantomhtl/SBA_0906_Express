const express = require('express');
const fs = require('fs');
const router = express.Router();

// Read user data from JSON
let users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// // Create a new user
// router.post('/', (req, res) => {
//   const newUser = { id: users.length + 1, ...req.body };
//   users.push(newUser);
//   fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
//   res.status(201).json(newUser);
// });

// // Update a user
// router.put('/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const userIndex = users.findIndex(user => user.id === userId);
  
//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], ...req.body };
//     fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// // Delete a user
// router.delete('/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   users = users.filter(user => user.id !== userId);
//   fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
//   res.status(204).send();
// });

module.exports = router;
