const mysql = require('mysql');
const conn = require('../database');

/*
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

module.exports = {
    user_table: function()
    
};
*/