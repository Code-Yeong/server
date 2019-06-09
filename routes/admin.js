let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let barberSql = require('../mysql/barber_table');
let shopSql = require('../mysql/shop_table');
let adminSql = require('../mysql/admin_table');
let router = express.Router();


router.get('/login', function (req, res, next) {
    console.log(Date.now()+':user login');
    let params = req.query;
    let phone = params['phone'];
    let password = params['password'];
    console.log(req.body);
    let isEmpty =(phone == null || password == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else {
        conn.query(adminSql.login, [phone, password], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});


router.get('/search/shop', function(req, res, next) {
    console.log(Date.now()+':admin get all shop');
    conn.query(shopSql.getAllShops, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            let urls='';
            for(let m=0;m<result.length;m++){
                let shop = result[m];
                // urls.push('select * from Barber where shop='+shop['id']);
                urls+=('select * from Barber where shop='+shop['id'])
                urls+=';';
            }
            urls = urls.substring(0,urls.length-1);
            if(urls.length>0) {
                conn.query(urls, [], function (err, barbers) {
                    if (err) {
                        console.log(err);
                        res.jsonp({'result': 'error', 'status': errorCode.dbError});
                    } else {
                        for(let i=0;i<barbers.length;i++){
                            let str= JSON.stringify(result[i]);
                            let s = typeof str =='string'? JSON.parse(str):str;
                            s.barber = barbers[i];
                            result[i]=s;
                        }
                        res.jsonp({'result': result, 'status': errorCode.loginSuccess});
                    }
                });
            }else{
                res.jsonp({'result': result, 'status': errorCode.loginSuccess});
            }
        }
    });
});


router.post('/add/shop',function (req,res,next) {
    let params = req.body;
    let id = Date.now();
    let name = params.name;
    let owner = '0';
    let avatar = params.avatar;
    let level = params.level;
    let status='1';
    let address = params.address;
    let license = '1001';
    let authMethod = '0';
    let description = params.description;
    let registTime = Date.now();
    let lastModify = Date.now();
    let isEmpty = (name == null || avatar == null || level == null || address == null||description == null);

    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(shopSql.addShop, [id,name,owner,avatar,level,status,address,license,authMethod,description,registTime,lastModify], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }
});

router.get('/order/list', function (req, res, next) {
    console.log(Date.now()+':admin order list');
    console.log(req.body);
        conn.query(adminSql.queryAllOrder, [], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
});

router.get('/user/list', function (req, res, next) {
    console.log(Date.now()+':admin order list');
    console.log(req.body);
    conn.query(adminSql.queryAllUser, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            res.jsonp({'result':result, 'status':errorCode.loginSuccess});
        }
    });
});

router.get('/barber/list', function (req, res, next) {
    console.log(Date.now()+':admin order list');
    console.log(req.body);
    conn.query(adminSql.queryAllBarber, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            res.jsonp({'result':result, 'status':errorCode.loginSuccess});
        }
    });
});



module.exports = router;