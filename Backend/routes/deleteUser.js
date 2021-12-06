const express = require("express")
const deleteUsercontroller = require("../controllers/deleteUsercontroller")

const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//Delete user (AUTHENTICATE USER)
router.post("/", deleteUsercontroller.login_index); //end of app.post()

module.exports = router;