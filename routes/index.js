const express = require("express");
const router = express.Router();

//login/landing

//route get/
router.get("/", (req, res) => {
  res.send("login");
});

router.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

module.exports = router;
