/*
require("dotenv").config()
//const queryDatabase = require('./models/user_table');
const mysql = require('mysql');
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT


const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,      //This is your localhost IP
    user: DB_USER,         // "AwaUser" created
    password: DB_PASSWORD,  // password for the new user
    database: DB_DATABASE,      // Database name
    port: DB_PORT,               // port name, "3306" by default
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,          
 })
 db.getConnection( (err, connection)=> {
    if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)
 })
 
/*
require("dotenv").config()
const mysql = require('mysql');
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT



var db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT  
});
*/

//CREATE table user_table
  db.getConnection(function(err) {
   console.log("Connected!");
  
    
    //CREATE USER_TABLE
    var sql = "DROP TABLE IF EXISTS user_table;', function (err, results, fields)"; 
    console.log('Dropped user_table table if it exists already');
    var sql = "CREATE TABLE 'newuser_table' ( userid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,email VARCHAR(320) NOT NULL,password VARCHAR(100) NOT NULL, fname VARCHAR(50) NULL,lname VARCHAR(50) NULL, address VARCHAR(15) NULL,postalcode VARCHAR(10) NULL,phoneNumber VARCHAR(15) NULL, isManager TINYINT(1) NULL,)";
    console.log('Created new user_table table');
    //var sql = "RENAME TABLE 'newuser_table' to 'userdb.user_table'"
    //var sql = "RENAME TABLE 'user_table' to 'user_tableold','newuser_table' to 'user_table'"

   ///////////////////////////
   //CREATE RESTAURANT_TABLE
   var sql = "DROP TABLE IF EXISTS restaurant_table;', function (err, results, fields)"; 
   console.log('Dropped restaurant_table table if it exists already');  
   var sql = "CREATE TABLE restaurant_table; (resManid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, resName VARCHAR(50) NOT NULL, opHours VARCHAR(50) NOT NULL, image BLOB  NOT NULL, resType VARCHAR(45)  NOT NULL, priceLevel VARCHAR(4)  NOT NULL, managerId INT  NOT NULL)";
   console.log('Created new restaurant_table table');
    
 });

 module.exports= db;
 
/*
  con.connect(function(err) {
   if (err) throw err;
   var sql = "DROP TABLE IF EXISTS restaurant_table;', function (err, results, fields)"; 
   if (err) throw err; 
    console.log('Dropped user_table table if existed.');
 
   var sql = "CREATE TABLE restaurant_table; (resManid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, resName VARCHAR(50) NOT NULL, opHours VARCHAR(50) NOT NULL, image BLOB  NOT NULL, resType VARCHAR(45)  NOT NULL, priceLevel VARCHAR(4)  NOT NULL, managerId INT  NOT NULL)";
   if (err) throw err; 
   console.log('Created user_table table');
 });
*/
