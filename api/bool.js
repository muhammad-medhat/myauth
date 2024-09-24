// api/bool.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Create the Express route
app.get("/api/bool", (req, res) => {
  const res = Math.random();
  const result = res >= 0.5; // Random true/false
  res.json({ result: result });
});
module.exports = (req, res) => {
  res.status(200).json({ message: "Hello World" });
};

// Export the app as a Vercel-compatible function
module.exports = app;
