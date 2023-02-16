require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db.js");

// MongoDB connection
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/", require("./routes/password"));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
