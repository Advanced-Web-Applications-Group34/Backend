const express = require("express")
const logincontroller = require("../controllers/logincontroller")

const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//LOGIN (AUTHENTICATE USER)
router.post("/", logincontroller.login_index); //end of app.post()

module.exports = router;