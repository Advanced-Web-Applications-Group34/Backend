require("dotenv").config()
const mysql = require("mysql")
const config = require("../database.js");
const bcrypt = require("bcrypt")
const conn = require("../database.js");



const signup_indexRestaurant = async (req, res) => {

    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password,10); //Hash & Salt
    const resname = req.body.resname;
    const address = req.body.address;
    const fromOpHours = req.body.fromOpHours
    const ToOpHours = req.body.ToOpHours;
    const resType = req.body.resType;
    const priceLevel = req.body.priceLevel;
    const managerid = req.body.managerid;


   conn.getConnection( async (err, connection) => {
    
     if (err) throw (err)
    
     const sqlSearch = "SELECT * FROM restaurant_table WHERE email = ?"
     const search_query = mysql.format(sqlSearch,[email])
    
     const sqlInsert = "INSERT INTO restaurant_table (resmanId, resname, address, email, password,fromOpHours,ToOpHours, resType, priceLevel, managerid) VALUES (0,?,?,?,?,?,?,?,?,0)"
     const insert_query = mysql.format(sqlInsert,[resname, address, email, hashedPassword,fromOpHours,ToOpHours, resType,priceLevel, managerid])
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
       console.log ("--------> Created a new restaurant Account")
       console.log(result.insertId)
       res.sendStatus(201)
      })
      
     }
    }) //end of connection.query()
    
   }) //end of db.getConnection()
    
}
const signup_indexRestaurant2 = async (req, res) => {
conn.query('SELECT * FROM Restaurant_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
  }
module.exports = {
    signup_indexRestaurant,
    signup_indexRestaurant2
}