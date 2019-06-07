let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let serveSql = require('../mysql/serve_table');
let router = express.Router();

//查询所有服务类型
router.get('/list', function(req, res, next) {
    console.log(Date.now()+':shop get all serves');
    conn.query(serveSql.queryAllServe, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            res.jsonp({'result':result, 'status':errorCode.loginSuccess});
        }
    });
});


//查询指定id的服务类型
router.get('/',function (req,res,next) {
   let params=req.query;
   let serveId=params['id'];
   let isEmpty=(serveId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(serveSql.queryOneServe, [serveId], function (err, result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});

router.post('/update',function (req,res,next) {
    console.log('修改服务类型信息');
    let params=req.body;
    console.log(params);
    console.log(params.keys);
    console.log(params.values);
    res.jsonp({'key':params.keys,'values':params.values});
});


module.exports = router;