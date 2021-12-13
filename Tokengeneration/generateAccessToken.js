// Obsolete for current code. left for documentation purposes

// $ npm i jsonwebtoken
// ^ this should fetch the needed database to generate tokens using this code  + tokenAsignment

const jwt = require("jsonwebtoken")

function generateAccessToken (user) {
    
    return 
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})

    }
    
    module.exports=generateAccessToken
