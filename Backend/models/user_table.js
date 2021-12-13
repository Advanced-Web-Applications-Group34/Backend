const mysql = require('mysql');
const con = require('../database');
/*

function queryDatabase(){
    pool.query('DROP TABLE IF EXISTS user_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped user_table table if existed.');
    })
        pool.query('CREATE TABLE `userdb`.`user_table` ( `userid` INT NOT NULL AUTO_INCREMENT,`email` VARCHAR(320) NOT NULL,`password` VARCHAR(100) NOT NULL, `fname` VARCHAR(50) NULL,`lname` VARCHAR(50) NULL, `address` VARCHAR(15) NULL,`postalcode` VARCHAR(10) NULL,`phoneNumber` VARCHAR(15) NULL,  `phoneNumber` VARCHAR(15) NULL, `isManager` TINYINT(1) NULL, PRIMARY KEY (`userid`));', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created user_table table.');
    })
   
    pool.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};
module.exports = queryDatabase();
*/
  