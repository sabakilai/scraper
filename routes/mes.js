"use strict"
let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');


router.get('/mes', function(req, res, next) {
  request('http://mes.kg/ru/events/full/3387.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.svodka-full p').each(function (i,element) {
        td[i] = $(this).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      var output = [];
      for (var i = 0; i < td.length; i++) {
        if (td[i] != 'Прогноз погоды ' ){
          output[i] = td[i];
        }else {
          break;
        }
      }
      output = output.join(" ");
      res.status(200).json(output);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/links', function(req, res, next) {
  request('http://mes.kg/ru/events/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.svodka ul li a').each(function (i,element) {
        td[i] = 'http://mes.kg' + $(this).attr('href');
      });

      res.json(td);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});



module.exports = router;
