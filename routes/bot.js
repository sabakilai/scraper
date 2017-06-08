"use strict"
let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');
let xpath = require('xpath');
let dom = require('xmldom').DOMParser;

/* GET home page. */
router.get('/meteo', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=chu', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var temperature = {
        'Восход Солнца': td[1],
        'Заход Солнца': td[3],
        'Радиационный фон': td[5],
        'Температура ночью': td[10],
        'Температура днём':td[13],
        'Осадки ночью':td[11],
        'Осадки днём':td[14]
      }
      res.json(temperature);

    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/meteo2', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=chu', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      var first = $('.ot').next().children().children().eq(1).text();
      first = first.replace(/(?:\r\n|\r|\n|\t)/g, "");
      var second = $('.ot').next().children().eq(3).text();
      second = second.replace(/(?:\r\n|\r|\n|\t)/g, "");
      var full = first + second;
      //var third = [];
      var third =  $('.sample').eq(2).children().children().eq(1).children().eq(0).text();
      var third = third.replace(/(?:\r\n|\r|\n|\t)/g, "");
      res.json(third);


    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});


router.get('/meteo3', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=chu', function (error, response, html) {
    if (!error && response.statusCode == 200) {


      //var xml = cheerio.load(html);
      var xml = html;
      var doc = new dom().parseFromString(xml)
      var nodes = xpath.select("//div", doc)

      console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
      console.log("Node: " + nodes[0].toString())



    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

module.exports = router;
