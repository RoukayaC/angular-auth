const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const users = require("./routes/api/users"); // Ensure the path is correct
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongo_url = config.get("mongo_url");
mongoose.set("strictQuery", true);
mongoose
  .connect(mongo_url)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Use the users routes for authentication
app.use("/api/users", users); // Ensure the prefix is correct

// Set the port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
