const db = require("../database");

function queryDatabase(){
    db.query('DROP TABLE IF EXISTS restaurant_table;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped restaurant_table table if existed.');
    })
        db.query('CREATE TABLE `userdb`.`restaurant_table` (`resManid` INT NOT NULL AUTO_INCREMENT,`resName` VARCHAR(50) NOT NULL,`opHours` VARCHAR(50) NOT NULL,`image` BLOB  NOT NULL,`resType` VARCHAR(45)  NOT NULL, `priceLevel` VARCHAR(4)  NOT NULL, `managerId` INT  NOT NULL,PRIMARY KEY (`resManid`));', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created restaurant_table table.');
    })
   
    db.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};
module.exports = queryDatabase();
