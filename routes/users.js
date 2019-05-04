let express = require('express');
let conn = require('../mysql/mysql');
let userSql = require('../mysql/user_table');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    console.log(Date.now()+':user login');
  let params = req.query;
  let name = params['name'];
  let password = params['password'];
    let isEmpty =(name == null || password == null);
    if(isEmpty){
        res.send("{result:'error', status:'101'}");
    }else {
        conn.query(userSql.login, [name, password], function (err, result) {
            if (err) {
                console.log(err);
                res.send("{result:'error', status:'201'}");
            } else {
                console.log(result[0]);
                res.send("{result:" + JSON.stringify(result[0]) + ", status:'200'}");
            }
        });
    }
});

router.post('/regist', function (req, res, next) {
  console.log(Date.now()+':user regist');
  let params = req.body;
  let name = params['name'];
  let phone = params['phone'];
  let password = params['password'];
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(name == null);
  let isEmpty =(name == null || phone == null || password == null);
  if(isEmpty){
      res.send("{result:'error', status:'101'}");
  }else{
      conn.query(userSql.login, [name, password], function (err, result) {
          if (err) {
              console.log(err);
              res.send("{result:'error', status:'201'}");
          } else {
              console.log(result);
              // res.send("{result:" + JSON.stringify(result[0]) + ", status:'200'}");
              conn.query(userSql.regist,[name,password, phone],function (err, result) {
                  if(err){
                      res.send("{result:'error', status:'102'}");
                  }else{
                      res.send("{result:'ok', status:'100'}");
                  }
              });
          }
      });

  }

});


module.exports = router;
