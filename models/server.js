// server.js
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Middleware untuk file statis (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
