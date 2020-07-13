const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");

//Loading config
dotenv.config({ path: "./config/config.env" });

//Passport Config
require("./config/passport")(passport);

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

//logging with morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));

//Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//Passport Middleware

//static
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.render("main");
});

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `you are connect to port ${process.env.NODE_ENV} http://localhost:${PORT}`
  )
);
