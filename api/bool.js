// api/bool.js
const express = require("express");
const app = express();

// Create the Express route
app.get("/api/bool", (req, res) => {
  const result = Math.random() >= 0.5; // Random true/false
  res.json({ result: result });
});

// Export the app as a Vercel-compatible function
module.exports = app;
