const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require('mongoose');
const path = require("path");
const router = require('./routes.js');

const request = require("request");
const cheerio = require("cheerio");

const app = express();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(router);

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});
