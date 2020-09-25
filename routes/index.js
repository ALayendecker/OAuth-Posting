const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//login/landing

//route get/
router.get("/", ensureGuest, (req, res) => {
  res.render("login", { layout: "login" });
});

router.get("/dashboard", ensureAuth, async (req, res) => {
  res.render("dashboard");
});

module.exports = router;
