const db = require("../database");

function queryDatabase(){
    db.query('DROP TABLE IF EXISTS fooditem;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped fooditem table if existed.');
    })
        db.query('CREATE TABLE `userdb`.`fooditem` (`cartid` INT NOT NULL AUTO_INCREMENT, `restaurantid` INT NOT NULL,`foodsid` INT NOT NULL,  PRIMARY KEY (`cartid`));', 
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


