const request = require("request");
const cheerio = require("cheerio");
const db = require("./models");

function get(req, res) {
  request("https://www.nytimes.com/section/business/economy?action=click&contentCollection=business&region=navbar&module=collectionsnav&pagetype=sectionfront&pgtype=sectionfront", function(error, response, html) {
    const $ = cheerio.load(html);

    $("div.story-meta").each(function(i, element) {
      const title = $(element).children("h2").text();
      const link = $(element).parent("a.story-link").attr("href");
      const summary = $(element).children("p.summary").text();

      db.Article.find({'title': title}, (err, found) => {
        if(err) {
          console.error(err);
        } else if(!found){
          db.Article.create({
            title,
            summary, 
            link,
          })
        }
      })
    });
  });
  res.redirect('/articles');
};

module.exports = {
  get,
}
