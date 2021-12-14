const express = require("express")
const login = require('./routes/login');
const signup = require('./routes/signup');
const signuprestaurant = require('./routes/signuprestaurant')
const menu = require('./routes/menu')
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server Started on port ${port}...`))


//signup routes
app.use('/usersignup', signup);

//signup routes
app.use('/ressignup', signuprestaurant);

app.use('/menuset', menu);

//login routes
app.use('/login', login);
