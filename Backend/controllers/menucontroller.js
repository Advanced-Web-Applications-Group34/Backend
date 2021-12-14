require("dotenv").config()
const mysql = require("mysql")
const config = require("../database.js");
const conn = require("../database.js");



const menu_index = async (req, res) => {

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const foodimage = req.body.foodimage;


   conn.getConnection( async (err, connection) => {
    
     if (err) throw (err)
       
     const sqlSearch = "SELECT * FROM fooditem WHERE name = ?"
     const search_query = mysql.format(sqlSearch,[name])
    
     const sqlInsert = "INSERT INTO fooditem (foodid,name,description,price,foodimage) VALUES (0, ?, ?, ?,?)"
     const insert_query = mysql.format(sqlInsert,[name,description,price,foodimage])
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
       console.log ("--------> Created new menu")
       console.log(result.insertId)
       res.sendStatus(201)
      })
      
     }
    }) //end of connection.query()
    
   }) //end of db.getConnection()
    
}
const menu_index2 = async (req, res) => {
conn.query('SELECT * FROM fooditem', 
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
    menu_index,
    menu_index2
}