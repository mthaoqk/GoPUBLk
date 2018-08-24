const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routing");
const app = express();
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const logger = require('morgan');
var flash = require('connect-flash');

app.use(logger('dev'))
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Add routes, both API and view
// Connect Flash
app.use(flash());

app.use(session({
  secret: 'frufgnrvnrinrifr',
  saveUninitialized:true,
  resave:true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gopublk");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

