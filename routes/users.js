let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let userSql = require('../mysql/user_table');
let addressSql = require('../mysql/address_table');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    console.log(Date.now()+':user login');
  let params = req.query;
  let phone = params['phone'];
  let password = params['password'];
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    let isEmpty =(phone == null || password == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else {
        conn.query(userSql.login, [phone, password], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                if(result!=null && result.length > 0) {
                    console.log(result[0]);
                    let userId = result[0]['_id'];
                    let userInfo = result[0];
                    conn.query(userSql.getAllAddress,[userId],function (err,result) {
                        userInfo['address'] = result;
                        console.log(result);
                        res.jsonp({'result':userInfo, 'status':errorCode.loginSuccess});
                        conn.query(userSql.updateLastLogin,[Date.now(),userId]);//记录登录时间
                    });
                }else{
                    res.jsonp({'result':null, 'status':errorCode.loginFailed});
                }

            }
        });
    }
});

router.post('/regist', function (req, res, next) {
  console.log(Date.now()+':user regist');
  let params = req.body;
  // let params = req.query;
  let name = params['name'];
  let phone = params['phone'];
  let password = params['password'];
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(name == null);
  let isEmpty =(name == null || phone == null || password == null);
  if(isEmpty){
      res.jsonp({'result':'error', 'status':errorCode.parametersError});
  }else{
      conn.query(userSql.isPhoneExist, [phone], function (err, result) {
          if (err) {
              console.log(err);
              res.jsonp({'result':'error', 'status':errorCode.dbError});
          } else {
              console.log(result);
              if(result!=null && result.length === 0) {
                  conn.query(userSql.regist, [name, password, phone,Date.now(),Date.now(),1,1,0,0,0.0], function (err, result) {
                      if (err) {
                          res.jsonp({'result':'error', 'status':errorCode.dbError});
                      } else {
                          res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
                      }
                  });
              }else{
                  res.jsonp({'result':'error','status':errorCode.accountAlreadyExist});
              }
          }
      });

  }

});

router.post('/addAddress', function (req, res, next) {
    console.log(Date.now()+':user add address');
    let params = req.body;
    // let params = req.query;
    let name = params['name'];
    let phone = params['phone'];
    let cusId = params['id'];
    let address = params['address'];
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    console.log(name == null);
    let isEmpty =(name == null || phone == null || cusId == null || address == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(userSql.addAddress, [cusId,name,phone,address,'1',Date.now()], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }
});

router.post('/updateAddress', function (req, res, next) {
    // 修改地址 POST: /updateAddress?id=[address id]&name=[new name]&phone=[new phone]&status=[new status]&address=[new address]
    console.log(Date.now()+':user update address');
    let params = req.body;
    // let params = req.query;
    let id = params['id'];
    let cusId = params['cusId'];
    let name = params['name'];
    let phone = params['phone'];
    let status = params['status'];
    let address = params['address'];
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    console.log(name == null);
    let isEmpty =(id==null ||cusId==null || name == null || phone == null || status == null || address == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{

        conn.query(userSql.updateAddress, [name,phone,address,status,Date.now(),id], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                console.log("----");
                console.log(status==="2");
                if(status === "2"){
                    conn.query(addressSql.UpdateDefaultAddress, [cusId,id], function (err, result) {
                        if (err) {
                            console.log(err);
                            res.jsonp({'result':'error', 'status':errorCode.dbError});
                        } else {
                            res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
                        }
                    });
                }else{
                    res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
                }
            }
        });
    }
});

router.post('/deleteAddress', function (req, res, next) {
    //删除地址 POST: /deleteAddress?id=[address id]&status=[new status]
    console.log(Date.now()+':user delete address');
    let params = req.body;
    let id = params['id'];
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    let isEmpty =(id==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(userSql.deleteAddress, [Date.now(),id], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });

    }
});

router.get('/getAllAddress', function (req, res, next) {
    console.log(Date.now()+':user get all address');
    // let params = req.body;
    let params = req.query;
    let cusId = params['id'];
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    console.log(cusId == null);
    let isEmpty =(cusId == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(userSql.getAllAddress, [cusId], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });

    }
});

router.get('/upload', function (req, res, next) {
    console.log(Date.now()+':user get all address');
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req.formData());
    // // let params = req.body;
    // let params = req.query;
    // let cusId = params['id'];
    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.query);
    // console.log(cusId == null);
    // let isEmpty =(cusId == null);
    // if(isEmpty){
    //     res.jsonp({'result':'error', 'status':errorCode.parametersError});
    // }else{
    //     conn.query(userSql.getAllAddress, [cusId], function (err, result) {
    //         if (err) {
    //             console.log(err);
    //             res.jsonp({'result':'error', 'status':errorCode.dbError});
    //         } else {
    //             res.jsonp({'result':result, 'status':errorCode.loginSuccess});
    //         }
    //     });
    //
    // }
});


module.exports = router;
