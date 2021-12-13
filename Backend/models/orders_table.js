const db = require("../database");

function queryDatabase(){
    db.query('DROP TABLE IF EXISTS orders_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped restaurant_table table if existed.');
    })
        db.query('CREATE TABLE `userdb`.`orders_table` (`orderid` INT NOT NULL AUTO_INCREMENT,`restaurantid` INT NOT NULL,`userid` INT NOT NULL, `foodid` INT NOT NULL, `orderStatus` VARCHAR(45) NOT NULL,PRIMARY KEY (`orderid`));', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created orders_table table.');
    })
   
    db.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};
module.exports = queryDatabase();


