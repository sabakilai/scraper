"use strict"
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

module.exports = {
  GetLinks(){
    return new Promise(function(resolve, reject) {
      request('http://mes.kg/ru/events/', function (error, response, html) {
        if (!error && response.statusCode == 200) {
          var $ = cheerio.load(html);
          var links = [];
          $('.svodka ul li a').each(function (i,element) {
            links[i] = 'http://mes.kg' + $(this).attr('href');
          });
          links = JSON.stringify(links);
          resolve(links);
        } else {
          reject(err);
        }
      });
    });
  },
  WriteMesMessage(url){
    request(url,function (error,response,html) {
      if (!error && response.statusCode == 200){
        var $ = cheerio.load(html);
        var data = [];
        $('.svodka-full p').each(function (i,element) {
          data[i] = $(this).text().replace(/(?:\r\n|\r|\n|\t)/g, "");
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
        fs.writeFile('./data/mes/osh.json', output, 'utf8', () => {console.log('Added Mes file ');});
      } else {
        console.log('Error: ' + error );
      }
    })
  }
};
