const request = require("request");
const cheerio = require("cheerio");
const db = require("./models");

async function get(req, res) {
  db.find({})
    .populate('Comments')
    .then((article) => {
      res.json(article);
    })
    .catch(function(err) {
      res.json(err);
    });
}

module.exports = {
  get,
}
