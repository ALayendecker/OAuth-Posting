const express = require("express");
const router = express.Router();

//login/landing

//route get/
router.get("/", (req, res) => {
  res.render("Login");
});

router.get("/dashboard", (req, res) => {
  res.render("Dashboard");
});

module.exports = router;
