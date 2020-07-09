const express = require("express");
const router = express.Router();
const passport = require("passport");

// Auth with google
//route get /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// google auth callback
// get /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);
module.exports = router;
