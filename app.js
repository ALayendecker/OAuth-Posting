const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//Loading config
dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

//logging with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", function (req, res) {
  res.render("home");
});

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `you are connect to port ${process.env.NODE_ENV} http://localhost:${PORT}`
  )
);
