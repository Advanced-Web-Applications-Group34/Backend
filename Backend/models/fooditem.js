const db = require("../database");

function queryDatabase(){
    db.query('DROP TABLE IF EXISTS fooditem;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped fooditem table if existed.');
    })
        db.query('CREATE TABLE `userdb`.`fooditem` (`foodid` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(100) NOT NULL,`description` VARCHAR(200) NOT NULL, `price` DOUBLE NOT NULL,`foodimage` BLOB NOT NULL,`category` VARCHAR(100) NOT NULL, `restaurantid` INT NOT NULL, PRIMARY KEY (`foodid`));', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created fooditem table.');
    })
   
    db.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};
module.exports = queryDatabase();