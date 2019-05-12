let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let orderSql = require('../mysql/order_table');
let router = express.Router();

// "addOrder":"INSERT INTO Reservation VALUES (?, ?, ?, ?, ?, 1, '', 0, 0, ?,'','')",
router.post('/addOrder',function (req,res,next) {
    let params=req.body;
    let cusId = params['cusId'];
    let barberId = params['barberId'];
    let shopId=params['shopId'];
    let serveTime=params['serveTime'];
    let money=params['money'];
    let serveName = params['serveName'];
    let isEmpty=(cusId==null || barberId ==null||shopId==null||serveTime==null||money==null||serveName == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.addOrder,[cusId,barberId,shopId,serveTime,serveName,money,Date.now(),Math.floor(Math.random()*10000)],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }


});
router.post('/updateOrderStatus',function (req,res,next) {
    let params=req.body;
    let id = params['id'];
    let status = params['status'];
    let isEmpty=(id==null || status ==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.updateOrderStatus,[status,id],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }


});

router.post('/commentOrder',function (req,res,next) {
    let params=req.body;
    let id = params['id'];
    let barberScore = params['barberScore'];
    let shopScore = params['shopScore'];
    let content = params['content'];
    let isEmpty=(id==null || barberScore ==null||shopScore==null || content ==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.commentOrder,[content,barberScore,shopScore,Date.now(),id],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }


});

router.get('/getCusOrder',function (req,res,next) {
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);
    let params=req.query;
    let cusId=params['cusId'];
    let isEmpty=(cusId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.getCusOrder,[cusId],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});
router.get('/getStaffOrder',function (req,res,next) {
    let params=req.query;
    let barberId=params['barberId'];
    let isEmpty=(barberId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.getStaffOrder,[barberId],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});

router.get('/getShopOrder',function (req,res,next) {
    let params=req.query;
    let shopId=params['shopId'];
    let isEmpty=(shopId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.getShopOrder,[shopId],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});

router.get('/getBarberOrder',function (req,res,next) {
    let params=req.query;
    let barberId=params['barberId'];
    let isEmpty=(barberId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.getBarberOrder,[barberId],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});
router.get('/getBarberUnStartOrder',function (req,res,next) {
    let params=req.query;
    let barberId=params['barberId'];
    let isEmpty=(barberId==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.getBarberUnStartOrder,[barberId],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':result, 'status':errorCode.loginSuccess});
            }
        });
    }
});

module.exports=router;