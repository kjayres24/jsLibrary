require('dotenv').config();

var express = require('express');
var app = express();
var log = require('./Controllers/logcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');
var user = require('./Controllers/usercontroller');

sequelize.sync();

app.use(bodyParser.json()); //tells the application that we want json to be used as we process this request

app.use(require('./middleware/headers'));

app.use('/user', user);

app.use(require('./middleware/validate-session')); //2

app.use('/log', log);

app.listen(3000, function () {
    console.log('App is listening on 3000.');
});

