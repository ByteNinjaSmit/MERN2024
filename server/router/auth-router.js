const express = require("express");
const router = express.Router();
const authcontrollers =require("../controllers/auth-controller");

// router.get("/",(req,res) => {
//     res.status(200).send('Welcome to world best website mern series by smitraj using router');

// });

router.route("/").get(authcontrollers.home);


router.route("/register").post(authcontrollers.register);

module.exports = router;