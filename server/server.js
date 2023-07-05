const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//Database connection  with Mongoose
try {
  mongoose.connect(process.env.DATABASE_CLOUD);
  console.log("DB connected");
} catch (error) {
  console.log(error);
}

//Routes

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
