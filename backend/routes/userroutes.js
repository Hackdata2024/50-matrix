const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/usercontroller");
// const { isAuthenticated } = require("../middleware/auth");


const router = express.Router();


router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

// router.route("/me").get(isAuthenticated ,getUserDetails);







module.exports = router;