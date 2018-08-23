'use strict'
require('dotenv').config()

var express = require ("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gopublk');
var db = mongoose.connection;


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')()); //
app.use(require('morgan')('combined'));


//Setup Passport
const passport = require('./passport-init')(app);

//Do more stuff here

var PORT = 3000;



app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});



