const request = require("request");
const cheerio = require("cheerio");
const db = require("./models");

function get(req, res) {
  db.find({}, (err, found) => {
    if(err) {
      console.error(err);
    } else {
      res.render('index', {articles: found});
    }
  })
}



module.exports = {
  get,
  post,
}
