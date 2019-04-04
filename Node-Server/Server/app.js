var express = require('express');
var app = express();
var test = require('./Controllers/testcontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');
var user = require('./Controllers/usercontroller');

sequelize.sync();

app.use(bodyParser.json()); //tells the application that we want json to be used as we process this request

app.use('/test', test);

app.use('/api/user', user);

app.listen(3000, function () {
    console.log('App is listening on 3000.')
});

app.use('/api/test', function (req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
});