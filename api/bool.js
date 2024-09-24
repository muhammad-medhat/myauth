// api/bool.js
const express = require("express");
const app = express();

// Create the Express route
app.get("/api/bool", (req, res) => {
  const res = Math.random();
  const result = res >= 0.5; // Random true/false
  res.json({ result: result, res: res });
});

// Export the app as a Vercel-compatible function
module.exports = app;
