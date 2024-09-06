const authenticate = (req, res, next) => {
  const isAuthenticated = true; 
  if (isAuthenticated) {
    next();
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

module.exports = authenticate;

//Right now this function will not work because users are not authenticated.