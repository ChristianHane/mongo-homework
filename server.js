const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const router = require('./routes.js');

const request = require("request");
const cheerio = require("cheerio");

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router);

// Database configuration
const db = mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds233769.mlab.com:33769/heroku_lxhvf50g");

// Hook mongojs configuration to the db variable
db.on("error", function(error) {
  console.log("Database Error:", error);
});
