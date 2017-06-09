"use strict"
let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');
let xpath = require('xpath');
let dom = require('xmldom').DOMParser;


router.get('/chu', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=chu', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var table1 = {
        sunrise: td[1],
        sunset: td[3],
        radiation: td[5],
        night_temp_pass: td[10],
        day_temp_pass:td[13],
        night_prec:td[11],
        day_prec:td[14]
      };

      var f_part = $('.ot').next().children().children().eq(1).text();
      var s_part = $('.ot').next().children().eq(3).text();
      var full = (f_part + s_part).replace(/(?:\r\n|\r|\n|\t)/g, "");
      var table = [];
      table[0] =  $('.sample').eq(2).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(2).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(2).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(2).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(2).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(2).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var output = {
        table1,
        table2:{
          f_row:{
            name:table[0],
            night:table[1],
            day:table[2]
          },
          s_row:{
            name:table[3],
            night:table[4],
            day:table[5]
          },
          text:full
        }

      };
      res.json(output);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/osh', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=osh', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var table1 = {
        night_temp_pass: td[4],
        day_temp_pass:td[7],
        night_prec_pass:td[5],
        day_prec_pass:td[8]
      };

      var f_part = $('.ot').next().children().children().eq(1).text();
      var s_part = $('.ot').next().children().eq(3).text();
      var full = (f_part + s_part).replace(/(?:\r\n|\r|\n|\t)/g, "");
      var table = [];
      table[0] =  $('.sample').eq(1).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(1).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(1).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(1).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(1).children().children().eq(3).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(1).children().children().eq(3).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var output = {
        table1,
        table2:{
          f_row:{
            name:table[0],
            night:table[1],
            day:table[2]
          },
          s_row:{
            name:table[3],
            night:table[4],
            day:table[5]
          },
          text:full
        }

      };
      res.json(output);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/naryn', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=naryn', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var table1 = {
        night_temp_pass: td[4],
        day_temp_pass:td[7],
        night_prec_pass:td[5],
        day_prec_pass:td[8]
      };

      var f_part = $('.ot').next().children().children().eq(1).text();
      var s_part = $('.ot').next().children().eq(3).text();
      var full = (f_part + s_part).replace(/(?:\r\n|\r|\n|\t)/g, "");
      var table = [];
      table[0] =  $('.sample').eq(1).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(1).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(1).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(1).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(1).children().children().eq(3).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(1).children().children().eq(3).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var output = {
        table1,
        table2:{
          f_row:{
            name:table[0],
            night:table[1],
            day:table[2]
          }
        },
        text:full

      };
      res.json(output);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/isyk', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=lake', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var table1 = {
        date:td[0],
        radiation: td[1],
        night_temp_pass: td[6],
        day_temp_pass:td[9],
        night_prec:td[7],
        day_prec:td[10]
      };

      var f_part = $('.ot').next().children().children().eq(1).text();
      var s_part = $('.ot').next().children().eq(2).text();
      var full = (f_part + s_part).replace(/(?:\r\n|\r|\n|\t)/g, "");
      var table = [];
      table[0] =  $('.sample').eq(2).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(2).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(2).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(2).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(2).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(2).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var output = {
        table1,
        table2:{
          f_row:{
            name:table[0],
            night:table[1],
            day:table[2]
          }
        },
        text:full

      };
      res.json(output);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/capitals', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=capitals', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var td = [];
      $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
        td[i] = td[i].replace(/(?:\r\n|\r|\n|\t)/g, "");
      });
      td.join(', ');
      var table1 = {
        sunrise: td[1],
        sunset: td[3],
        radiation: td[5],
        night_temp_pass: td[10],
        day_temp_pass:td[13],
        night_prec:td[11],
        day_prec:td[14]
      };

      var f_part = $('.ot').next().children().children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var s_part = $('.ot').next().children().children().eq(7).text().replace(/(?:\r\n|\r|\n|\t)/g, "");


      var table = [];
      table[0] =  $('.sample').eq(2).children().children().eq(0).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(2).children().children().eq(0).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(2).children().children().eq(0).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(2).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(2).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(2).children().children().eq(2).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var output = {
        table1,
        table2:{
          f_row:{
            name:table[0],
            night:table[1],
            day:table[2]
          },
          s_row:{
            name:table[3],
            night:table[4],
            day:table[5]
          }
        }

      };
      res.json(output. table2);
    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

module.exports = router;
