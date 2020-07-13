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

// Logout user
//  /auth/google/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
