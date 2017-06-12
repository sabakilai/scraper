"use strict"
let request = require('request');
let xpath = require('xpath');
let dom = require('xmldom').DOMParser;

var Parser = function() {};

Parser.prototype.get = function(url, xpath) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        var doc = new dom().parseFromString(body);
        var data = xpath.select("string(//*[@id='txt']/p/text()[1])", doc);
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};

module.exports = Parser;
