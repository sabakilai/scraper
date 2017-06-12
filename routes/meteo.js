"use strict"
let express = require('express');
let router = express.Router();
let request = require('request');
let xpath = require('xpath');
let dom = require('xmldom').DOMParser;
let Parser = require('../libs/parser');
let p = new Parser();

router.get('/chu1', function(req, res, next) {
  request('http://meteo.kg/index.php?reg=chu', function (error, response, html) {
    if (!error && response.statusCode == 200) {

      var doc = new dom().parseFromString(html);
      var title = xpath.select("string(//*[@id='txt']/p/text()[1])", doc).replace(/(?:\r\n|\r|\n|\t|;)/g, "");

      res.status(200).json(title);


    } else {
      return res.json({
        success:false,
        message:error
      });
    }
  });
});

router.get('/chu', function(req, res)  {
  p.get('http://meteo.kg/index.php?reg=chu',"string(//*[@id='txt']/p/text()[1])" ).then(function(data) {
    return res.json({
      success: true,
      message: 'Successful!',
      data: data
    });
  }, function(error) {
    return res.json({
      success: false,
      message: 'Oops'
    });
  });
});


module.exports = router;
