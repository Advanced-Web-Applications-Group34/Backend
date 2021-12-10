require("dotenv").config()
const mysql = require("mysql")
const database = require("../database");
const db = require("../database");
const generateAccessToken = require('../routes/generateAccessToken');
const bcrypt = require("bcrypt")

//LOGIN (AUTHENTICATE USER, and return accessToken
const login_index = (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    db.getConnection ( async (err, connection)=> {

     if (err) throw (err)
     const sqlSearch = "Select * from user_table where email = ?"
     const search_query = mysql.format(sqlSearch,[email])

     await connection.query (search_query, async (err, result) => {

      connection.release()
      
      if (err) throw (err)

      if (result.length == 0) {
       console.log("--------> User does not exist")
       res.sendStatus(404)
      } 
      else {
         const hashedPassword = result[0].password
         //get the hashedPassword from result
         
        if (await bcrypt.compare(password, hashedPassword)) {
        console.log("---------> Login Successful")
        console.log("---------> Generating accessToken")
        const token = generateAccessToken({email: email})  
        console.log(token) 
        res.json({accessToken: token})
        res.send(`${email} is logged in!`)
        } 
        else {
        console.log("---------> Password Incorrect")
        res.send("Password incorrect!")
        } //end of bcrypt.compare()
      }//end of User exists i.e. results.length==0
     }) //end of connection.query()
    }) //end of db.connection()
}
module.exports = {
    login_index
}