const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userController");

//login user
router.post("/login", loginUser);

//Signup user
router.post("/signup", signupUser);

module.exports = router;
