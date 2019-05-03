let express = require('express');
let conn = require('../mysql/mysql');
let userSql = require('../mysql/user_table');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  console.log('searching...');
  let params = req.query;
  let name = params['name'];
  let password = params['password'];
  conn.query(userSql.login,[name,password],function (err, result) {
    // console.log(err);
    if(err){
      console.log(err);
      res.send("{result:'error', status:'201'}");
    }else{
      console.log(result[0]);
      res.send("{result:"+JSON.stringify(result[0])+", status:'200'}");
    }
  });
});

router.put('/regist', function (req, res, next) {
  console.log('searching...');
  let params = req.query;
  let name = params['name'];
  let password = params['password'];
  console.log('userName:'+name);
  conn.query(userSql.regist,[name,password],function (err, result) {
    // console.log(err);
    if(err){
      console.log(err);
      res.send("{result:'error', status:'201'}");
    }else{
      res.send("{result:'ok', status:'200'}");
    }
  });

});


module.exports = router;
