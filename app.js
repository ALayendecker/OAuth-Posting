const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//Loading config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `you are connect to port ${process.env.NODE_ENV} http://localhost:${PORT}`
  )
);
