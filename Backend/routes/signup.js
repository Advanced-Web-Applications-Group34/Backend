const express = require("express")
const signupcontroller = require("../controllers/signupcontroller")

const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//CREATE USER
router.post("/", signupcontroller.signup_index); //end of app.post()

module.exports = router;