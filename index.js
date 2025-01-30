const express = require("express");
const serverless = require("serverless-http"); // Required for Vercel

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

// ❌ REMOVE: app.listen(PORT, () => {...}) 
// ✅ Export the app for Vercel
module.exports = app;
module.exports.handler = serverless(app);
