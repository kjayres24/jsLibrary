require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./Controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./Controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json()); //tells the application that we want json to be used as we process this request

app.use(require('./middleware/headers'));

app.use('/test', test);

app.use('/api/user', user);

app.use(require('./middleware/validate-session')); //2
app.use('/authtest', authTest); //3

app.listen(3000, function () {
    console.log('App is listening on 3000.')
});

app.use('/api/test', function (req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
});