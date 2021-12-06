const express = require("express")
const logoutcontroller = require("../controllers/logoutcontroller")

const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//Logout using JWT auth token
router.delete("/", logoutcontroller.logout_index); //end of app.post()

module.exports = router;