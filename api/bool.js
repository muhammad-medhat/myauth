// api/bool.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Create the Express route
app.get("/api/bool", cors(), (req, res) => {
  const rnd = Math.random();
  const result = rnd >= 0.5; // Random true/false
  res.json({ result: result, rnd, req });
});

// Export the app as a Vercel-compatible function
module.exports = app;
