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
      var name = $('.ot #txt table tr td').each(function (i,element) {
        td[i] = $(this).text();
      });
      td.join(', ');
      console.log(td);

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

      var inXpath = "BODY/TABLE[1]/TR[1]/TD[1]/DIV[1]/H3[1]";
      var xpath = inXpath.split( "/" );
      var dom_body = cheerio.load(html);
      var sss = dom_body('*');
      for( var i = 0; i < xpath.length; i++ ) {
          if (xpath[i].indexOf('[') == -1){
              sss = sss.children(xpath[i])
          } else {
              var selector = xpath[i].split('[')[0];
              var matches = xpath[i].match(/\[(.*?)\]/);
              var index = matches[1] - 1;
              sss = sss.children(selector).eq(index)
          }
      }
      console.log(sss.text())



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
