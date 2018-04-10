const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  summary: {
    type: String,
    validate: [
      function(input) {
        return input.length >= 20;
      },
      "Summary must be at least 20 characters."
    ]
  },
  url: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    }
  ]
})

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
