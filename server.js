const express = require("express");
const fs = require("fs");
const logger = require("./middleware/logger");
const authenticate = require("./middleware/authenticate");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(logger); // Logger middleware
app.use("/admin", authenticate); // Admin routes
app.use(express.static("public"));

// Routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.get("/", (req, res) => {
  res.render("home");
});

// Admin
app.get("/admin", (req, res) => {
  const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));
  const posts = JSON.parse(fs.readFileSync("./data/posts.json", "utf8"));
  const comments = JSON.parse(fs.readFileSync("./data/comments.json", "utf8"));
  res.render("dashboard", { users, posts, comments });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
