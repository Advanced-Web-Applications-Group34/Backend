const express = require("express")
const login = require('./routes/login');
const signup = require('./routes/signup');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started on port ${port}...`))


//signup routes
app.use('/signup', signup);

//login routes
app.use('/login', login);