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

      var f_day = $('.ot').next().children().children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      var s_day = $('.ot').next().children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table = [];
      table[0] =  $('.sample').eq(2).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(2).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(2).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(2).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(2).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(2).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table2 ={
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
      };

      var output = {
        table1,
        table2,
        text:{f_day,s_day}
      };
      res.status(200).json(output);
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

      var f_day = $('.ot').next().children().children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "")
      var s_day = $('.ot').next().children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "")

      var table = [];
      table[0] =  $('.sample').eq(1).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(1).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(1).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(1).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(1).children().children().eq(3).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(1).children().children().eq(3).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table2 = {
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
      };

      var output = {
        table1,
        table2,
        text:{f_day,s_day}
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
        night_temp_pass: td[4],
        day_temp_pass:td[7],
        night_prec_pass:td[5],
        day_prec_pass:td[8]
      };

      var f_day = $('#txt > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2)').text();
      var s_day = $('.ot').next().children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table = [];
      table[0] =  $('.sample').eq(1).children().children().eq(1).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[1] =  $('.sample').eq(1).children().children().eq(1).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(1).children().children().eq(1).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(1).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(1).children().children().eq(3).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(1).children().children().eq(3).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table2 = {
        f_row:{
          name:table[0],
          night:table[1],
          day:table[2]
        }
      };

      var output = {
        table1,
        table2,
        text:{f_day,s_day}
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

      var bishkek = $('.ot').next().children().children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var osh = $('.ot').next().children().children().eq(7).text().replace(/(?:\r\n|\r|\n|\t)/g, "");


      var table = [];
      table[0] =  $('.sample').eq(2).children().children().eq(0).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t|)/g, "");
      table[1] =  $('.sample').eq(2).children().children().eq(0).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[2] =  $('.sample').eq(2).children().children().eq(0).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[3] =  $('.sample').eq(2).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[4] =  $('.sample').eq(2).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[5] =  $('.sample').eq(2).children().children().eq(2).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[6] =  $('.sample').eq(2).children().children().eq(2).children().eq(4).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[7] =  $('.sample').eq(2).children().children().eq(2).children().eq(5).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[8] =  $('.sample').eq(2).children().children().eq(2).children().eq(6).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[9] =  $('.sample').eq(2).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table2 = {
        city:table[9],
        days:{
          first:table[0],
          second:table[1],
          third:table[2]
        },
        temp:{
          f_night:table[3],
          f_day:table[4],
          s_night:table[5],
          s_day:table[6],
          t_night:table[7],
          t_day:table[8]
        }
      };

      table[10] =  $('.sample').eq(3).children().children().eq(0).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t|)/g, "");
      table[11] =  $('.sample').eq(3).children().children().eq(0).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[12] =  $('.sample').eq(3).children().children().eq(0).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[13] =  $('.sample').eq(3).children().children().eq(2).children().eq(1).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[14] =  $('.sample').eq(3).children().children().eq(2).children().eq(2).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[15] =  $('.sample').eq(3).children().children().eq(2).children().eq(3).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[16] =  $('.sample').eq(3).children().children().eq(2).children().eq(4).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[17] =  $('.sample').eq(3).children().children().eq(2).children().eq(5).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[18] =  $('.sample').eq(3).children().children().eq(2).children().eq(6).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
      table[19] =  $('.sample').eq(3).children().children().eq(2).children().eq(0).text().replace(/(?:\r\n|\r|\n|\t)/g, "");

      var table3 = {
        city:table[19],
        days:{
          first:table[10],
          second:table[11],
          third:table[12]
        },
        temp:{
          f_night:table[13],
          f_day:table[14],
          s_night:table[15],
          s_day:table[16],
          t_night:table[17],
          t_day:table[18]
        }
      };


      var output = {
        table1,
        table2,
        table3,
        text:{
          bishkek,
          osh
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

router.get('/capitals', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=capitals', function (error, response, html) {
    if (!error && response.statusCode == 200) {



    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

module.exports = router;
