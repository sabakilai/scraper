"use strict"
let request = require('request');

var TaxiClient = function(options) {
  this.options = options;
};

TaxiClient.prototype.post = function(url, params) {
  for(let index in this.options) {
    params[index] = this.options[index];
  }
  let options = {
    method: 'POST',
    url: url,
    headers: {
      'content-type': 'multipart/form-data'
    },
    formData: params
  };
  return new Promise(function(resolve, reject) {
    request.post(options, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject(err);
      }
    });
  });
};

module.exports = TaxiClient;