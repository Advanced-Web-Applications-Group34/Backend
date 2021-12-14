const express = require("express")
const menucontroller = require("../controllers/menucontroller")



const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//CREATE USER
router.post("/", menucontroller.menu_index); //end of app.post()
router.get("/", menucontroller.menu_index2);


module.exports = router;