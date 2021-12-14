const express = require("express")
const signupcontrollerRestaurant = require("../controllers/signupcontrollerRestaurant")


const router = express.Router();
router.use(express.json())
//middleware to read req.body.<params>

//CREATE USER
router.post("/",signupcontrollerRestaurant.signup_indexRestaurant);
router.get("/",signupcontrollerRestaurant.signup_indexRestaurant2);


module.exports = router;