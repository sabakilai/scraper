"use strict"
let express = require('express');
let router = express.Router();
let Parser = require('../libs/parse');
let p = new Parser();

router.get('/chu', function(req, res)  {
  var url = 'http://meteo.kg/index.php?reg=chu';
  var data = [];
  data.push(p.get(url,'#txt > p:nth-child(2)' )); // weather text for first day
  data.push(p.get(url,'#txt > p:nth-child(1)' )); // weather text for second day
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)' )); // sunrise
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)' )); // sunset
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2)' )); // radiation
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1)' )); //Chui
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)' )); //night_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(1)' )); //Talas
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)' )); //night_temp

  Promise.all(data).then(
    (datas) => {
      var output = {
        text:{
          first_day:datas[0],
          second_day:datas[1]
        },
        first_table:{
          sunrise:datas[2],
          sunset:datas[3],
          radiation:datas[4]
        },
        second_table:{
          row_1:{
            name:datas[5],
            day_temp:datas[6],
            night_temp:datas[7]
          },
          row_2:{
            name:datas[8],
            day_temp:datas[9],
            night_temp:datas[10]
          }
        }
      };
      res.json({
        success: true,
        message: 'Successful!',
        data: output
      });
    }
  ).catch(
    (err) => {
      res.json({
        success: false,
        message: 'Error'
      });
    }
  );
});

router.get('/osh', function(req, res)  {
  var url = 'http://meteo.kg/index.php?reg=osh';
  var data = [];
  data.push(p.get(url,'#txt > p:nth-child(2)' )); // weather text for first day
  data.push(p.get(url,'#txt > p:nth-child(1)' )); // weather text for second day
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1)' )); //Chui
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)' )); //night_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(1)' )); //Talas
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)' )); //night_temp

  Promise.all(data).then(
    (datas) => {
      var output = {
        text:{
          first_day:datas[0],
          second_day:datas[1]
        },
        second_table:{
          row_1:{
            name:datas[2],
            day_temp:datas[3],
            night_temp:datas[4]
          },
          row_2:{
            name:datas[5],
            day_temp:datas[6],
            night_temp:datas[7]
          }
        }
      };
      res.json({
        success: true,
        message: 'Successful!',
        data: output
      });
    }
  ).catch(
    (err) => {
      res.json({
        success: false,
        message: 'Error'
      });
    }
  );
});

router.get('/naryn', function(req, res)  {
  var url = 'http://meteo.kg/index.php?reg=naryn';
  var data = [];
  data.push(p.get(url,'#txt > p:nth-child(2)' )); // weather text for first day
  data.push(p.get(url,'#txt > p:nth-child(1)' )); // weather text for second day
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1)' )); //Chui
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)' )); //night_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(1)' )); //Talas
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)' )); //night_temp

  Promise.all(data).then(
    (datas) => {
      var output = {
        text:{
          first_day:datas[0],
          second_day:datas[1]
        },
        second_table:{
          row_1:{
            name:datas[2],
            day_temp:datas[3],
            night_temp:datas[4]
          }
        }
      };
      res.json({
        success: true,
        message: 'Successful!',
        data: output
      });
    }
  ).catch(
    (err) => {
      res.json({
        success: false,
        message: 'Error'
      });
    }
  );
});

router.get('/isyk', function(req, res)  {
  var url = 'http://meteo.kg/index.php?reg=lake';
  var data = [];
  data.push(p.get(url,'#txt > p:nth-child(2)' )); // weather text for first day
  data.push(p.get(url,'#txt > p:nth-child(1)' )); // weather text for second day
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)' )); // radiation

  data.push(p.get(url,'#txt > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(1)' )); // sunset
  data.push(p.get(url,'#txt > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2)' )); //
  data.push(p.get(url,'#txt > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(1)' )); //Chui
  data.push(p.get(url,'#txt > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2)' )); //day_temp


  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1)' )); //Talas
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(3)' )); //day_temp
  data.push(p.get(url,'#stranka > table:nth-child(4) > tbody > tr > td:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)' )); //night_temp

  Promise.all(data).then(
    (datas) => {
      var output = {
        text:{
          first_day:datas[0],
          second_day:datas[1]
        },
        first_table:{
          radiation:datas[2],
          water:{
            first_date:datas[3],
            first_temp:datas[4],
            second_date:datas[5],
            second_temp:datas[6]
          }
        },
        second_table:{
          row_1:{
            name:datas[7],
            day_temp:datas[8],
            night_temp:datas[9]
          }
        }
      };
      res.json({
        success: true,
        message: 'Successful!',
        data: output
      });
    }
  ).catch(
    (err) => {
      res.json({
        success: false,
        message: 'Error'
      });
    }
  );
});

router.get('/capitals', function(req, res)  {
  var url = 'http://meteo.kg/index.php?reg=capitals';
  var data = [];
  data.push(p.get(url,'#txt > p:nth-child(2)' )); // weather text for biskek
  data.push(p.get(url,'#txt > p:nth-child(6)' )); // weather text for osh
  data.push(p.get(url,'#txt_red > p' )); //storm
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)' )); // sunrise
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)' )); // sunset
  data.push(p.get(url,'#txt > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2)' )); // radiation

  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(2)' )); //bishkek_table
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3)' ));
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2)' ));

  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(3)' )); //bishkek_table
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(5)' ));
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(4)' ));

  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4)' )); //bishkek_table
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(7)' ));
  data.push(p.get(url,'#txt > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(6)' ));

  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(1) > td:nth-child(2)' )); //osh_table
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(3)' ));
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(2)' ));

  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(1) > td:nth-child(3)' )); //osh_table
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(5)' ));
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(4)' ));

  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(1) > td:nth-child(4)' )); //osh_table
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(7)' ));
  data.push(p.get(url,'#txt > table:nth-child(7) > tbody > tr:nth-child(3) > td:nth-child(6)' ));

  Promise.all(data).then(
    (datas) => {
      var output = {
        text:{
          bishek:datas[0],
          osh:datas[1],
          storm:datas[2]
        },
        first_table:{
          sunrise:datas[3],
          sunset:datas[4],
          radiation:datas[5]
        },
        bishkek_table:{
          date_1:{
            date:datas[6],
            day_temp:datas[7],
            night_temp:datas[8]
          },
          date_2:{
            date:datas[9],
            day_temp:datas[10],
            night_temp:datas[11]
          },
          date_3:{
            date:datas[12],
            day_temp:datas[13],
            night_temp:datas[14]
          }
        },
        osh_table:{
          date_1:{
            date:datas[15],
            day_temp:datas[16],
            night_temp:datas[17]
          },
          date_2:{
            date:datas[18],
            day_temp:datas[19],
            night_temp:datas[20]
          },
          date_3:{
            date:datas[21],
            day_temp:datas[22],
            night_temp:datas[23]
          }
        }
      };
      res.json({
        success: true,
        message: 'Successful!',
        data: output
      });
    }
  ).catch(
    (err) => {
      res.json({
        success: false,
        message: 'Error'
      });
    }
  );
});


module.exports = router;
