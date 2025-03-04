const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Fallback route to serve the main HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Set the port number
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
