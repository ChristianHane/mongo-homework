const scrapeController = require('./scrapeController.js');
const articleController = require('./articleController.js');
const express = require('express');

const router = express.Router();

router.route('/api/scrape').get(scrapeController.get);
router.route('/articles').get(articleController.get)
