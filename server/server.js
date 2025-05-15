const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
