const express = require("express");
const serverless = require("serverless-http"); // Required for Vercel

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});


module.exports = serverless(app); // Exporting the handler directly
