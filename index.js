const express = require("express");
const app = express();
const port = 3000;

// Endpoint to return a true or false value
app.get("/bool", (req, res) => {
  const result = Math.random() >= 0.5; // Random true/false
  res.json({ result: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Boolean service running at http://localhost:${port}`);
});
