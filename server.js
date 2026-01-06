require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected to Atlas");
  })
  .catch((err) => console.log(err));

const bookRoutes = require("./routes/books");
app.use("/books", bookRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

console.log("Connected to:", mongoose.connection.host);
