require("dotenv").config()
const mysql = require("mysql")

const db = require("../database");

const bcrypt = require("bcrypt")

const signup_index = async (req, res) => {

    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password,10); //Hash & Salt
    
    db.getConnection( async (err, connection) => {
    
     if (err) throw (err)
    
    
     const sqlSearch = "SELECT * FROM user_table WHERE email = ?"
     const search_query = mysql.format(sqlSearch,[email])
    
     const sqlInsert = "INSERT INTO user_table (userId, email, password) VALUES (0,?,?)"
     const insert_query = mysql.format(sqlInsert,[email, hashedPassword])
     // ? will be replaced by values
     // ?? will be replaced by string
    
      await connection.query (search_query, async (err, result) => {
    
    
      if (err) throw (err)
      console.log("------> Search Results")
      console.log(result.length)
    
      if (result.length != 0) {
       connection.release()
       console.log("------> Account already exists")
       res.sendStatus(409) 
      } 
    
      else {
        await connection.query (insert_query, (err, result)=> {

       connection.release()
       
       if (err) throw (err)
       console.log ("--------> Created a new Account")
       console.log(result.insertId)
       res.sendStatus(201)
      })
     }
    }) //end of connection.query()
    
    }) //end of db.getConnection()
    
}

module.exports = {
    signup_index
}