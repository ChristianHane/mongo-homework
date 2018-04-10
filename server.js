const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require("express");
const mongoose = require('mongoose');
const request = require("request");
const cheerio = require("cheerio");
const db = require("./models");

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// const db = mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds233769.mlab.com:33769/heroku_lxhvf50g");
const db = mongoose.connect("mongodb://localhost/populatedb");


db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
