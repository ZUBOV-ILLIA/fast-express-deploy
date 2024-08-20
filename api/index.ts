const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(port, () => {
  console.log(`http://localhost:${port}}`)
});

module.exports = app;
