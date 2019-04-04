require('dotenv').config() //requiring our specific .env file
const express = require('express') //here we require the use of the express npm package that we've installed in our dependencies
const app = express() //instance of express. firing off a top-level express() function that is exported by the express module. Allows us to create an express app
const pies = require('./Controllers/piecontroller')
const db = require('./db');
const bodyParser = require('body-parser');
const user = require('./Controllers/usercontroller');


db.sync();

app.use(require('./middleware/headers'));

app.use(bodyParser.json());
app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) //listening to whats on our port in the .env file.

app.use(express.static(__dirname + '/public')) //express.static: how express hosts static content __dirname: setting the directory, what we are hosting out of.
console.log(__dirname)

app.use('/pies', pies);
app.use('/auth', user);

