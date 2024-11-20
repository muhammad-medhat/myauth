// api/bool.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Create the Express route
app.get("/api/bool", cors(), (req, res) => {
  const token = req.query.token;
  const whiteList = ["md-blocks"];
  // const result = whiteList.includes(token);
  const result = true;
  res.json({ result: result });
});

// Export the app as a Vercel-compatible function
module.exports = app;
