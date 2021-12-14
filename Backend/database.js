
require("dotenv").config()
//CREATE NEW .env file with envi.text info
const mysql = require('mysql');
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

/*
var config =
{   
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    ssl: true,
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           user_tabledb();
           restaurant_tabledb();
           orders_tabledb();
           fooditemdb();
           cart_tabledb();
    }
});
*/


const conn = mysql.createPool({
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
 conn.getConnection( (err, connection)=> {
    if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)
 })
 

/*
//Do these if tables are deleted
function user_tabledb(){
    conn.query('DROP TABLE IF EXISTS user_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped user_table table if existed.');
        }) 
    
        conn.query('CREATE TABLE user_table ( userid INT NOT NULL AUTO_INCREMENT PRIMARY KEY,email VARCHAR(320) NOT NULL,password VARCHAR(100) NOT NULL, fname VARCHAR(50) NULL,lname VARCHAR(50) NULL, address VARCHAR(15) NULL,postalcode VARCHAR(10) NULL,phoneNumber VARCHAR(15) NULL, isManager tinyint(1) NOT NULL);',
        function (err, results, fields) {
            if (err) throw err;
          console.log('Created user_table table.'); 
        })

    conn.query('INSERT INTO user_table (email,password) VALUES (?, ?);', ['nice@email.com','nicepassword1'],
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).'); 
    })
    

    conn.query('SELECT * FROM user_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
    /*conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};

function restaurant_tabledb(){
    conn.query('DROP TABLE IF EXISTS restaurant_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped restaurant_table table if existed.');
        }) 
    
        conn.query('CREATE TABLE restaurant_table ( resmanid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, resname VARCHAR(50) NOT NULL, opHours VARCHAR(45) NOT NULL, image BLOB NULL,resType VARCHAR(45) NULL, priceLevel VARCHAR(4) NOT NULL,managerid int(11) NOT NULL);',
        function (err, results, fields) {
            if (err) throw err;
          console.log('Created restaurant_table table.'); 
        })

    conn.query('INSERT INTO restaurant_table (resname,opHours,resType,priceLevel) VALUES (?, ?, ?, ?);', ['awesomerestaurantName','8-20','Fast food','$$'],
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).'); 
    })
    

    conn.query('SELECT * FROM restaurant_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
   /* conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};


function orders_tabledb(){
    conn.query('DROP TABLE IF EXISTS orders_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped orders_table table if existed.');
        }) 
    
        conn.query('CREATE TABLE orders_table ( orderid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, restaurantid INT(11) NOT NULL, userid INT(11) NOT NULL, foodid INT(11) NOT NULL, orderstatus VARCHAR(45) NULL);',
        function (err, results, fields) {
            if (err) throw err;
          console.log('Created orders_table table.'); 
        })

    conn.query('INSERT INTO orders_table (restaurantid,userid,foodid,orderstatus) VALUES (?, ?, ?, ?);', ['1','6','4','7','Delivered'],
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).'); 
    })
    

    conn.query('SELECT * FROM orders_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
    /*conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};

function fooditemdb(){
    conn.query('DROP TABLE IF EXISTS fooditem;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped fooditem table if existed.');
        }) 
    
        conn.query('CREATE TABLE fooditem ( foodid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, description VARCHAR(200) NOT NULL, price DOUBLE NOT NULL, foodimage BLOB NULL, category VARCHAR(100), restaurantid INT(11) NOT NULL);',
        function (err, results, fields) {
            if (err) throw err;
          console.log('Created fooditem table.'); 
        })

    conn.query('INSERT INTO fooditem (name,description,price,category) VALUES (?, ?, ?, ?);', ['CheeseBurger','Lots of cheeseee','245,89','Fast Food'],
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).'); 
    })
    

    conn.query('SELECT * FROM fooditem', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
    /*conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};

function cart_tabledb(){
    conn.query('DROP TABLE IF EXISTS cart_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped cart_table table if existed.');
        }) 
    
        conn.query('CREATE TABLE cart_table ( cartid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, restaurantid INT(11) NOT NULL, foodsid INT(11) NOT NULL );',
        function (err, results, fields) {
            if (err) throw err;
          console.log('Created cart_table table.'); 
        })

    conn.query('INSERT INTO cart_table (restaurantid, foodsid) VALUES (?, ?);', ['1','1'],
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).'); 
    })
    

    conn.query('SELECT * FROM cart_table', 
    function (err, results, fields) {
        if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        for (i = 0; i < results.length; i++) {
            console.log('Row: ' + JSON.stringify(results[i]));
        }
        console.log('Done.');
    })
    /*conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    }); 
}
*/
module.exports =  conn;