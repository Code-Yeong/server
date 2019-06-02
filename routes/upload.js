let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let userSql = require('../mysql/user_table');
let barberSql = require('../mysql/barber_table');
let router = express.Router();
let multer = require("multer");


// 设置图片存储路径
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images');
    },
    filename: function (req, file, cb) {
        let originalName= file.originalname;
        let arr = originalName.split('.');
        if(arr!=null&&arr.length>0){
            originalName = arr[arr.length-1];
        }
        cb(null, `${Date.now()}.${originalName}`);
    }
});

// let upload = multer({dest:"../public/images"});

let upload = multer({ storage: storage });

// 文件上传请求处理，upload.array 支持多文件上传，第二个参数是上传文件数目
router.post('/upload/avatar', upload.array('image',1),function (req, res, next) {
    console.log('begin...');
    let params = req.body;
    let userId= params.id;
    console.log(userId);
    let role = params.role;//0:会员， 1：理发师， 2：店铺
    console.log(role);
    let isEmpty =(userId == null || role == null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else {
        console.log('开始上传图片');
        // 读取上传的图片信息
        let files = req.files;
        // 设置返回结果
        let result = {};
        if (files == null || files.length === 0 || !files[0]) {
            result.status = errorCode.uploadFailed;
            result.errMsg = '上传失败1';
        } else {
            result.status = errorCode.uploadSuccess;
            let filePath = `http://wd.chivan.cn:3000/images/${files[0].filename}`;
            if(role==='0'){
                conn.query(userSql.changeAvatar,[filePath,userId],function (err,re) {
                    if (err) {
                        console.log(err);
                        result.status = errorCode.uploadFailed;
                        result.errMsg = '上传失败2';
                    } else {
                        result.data = {
                            url: filePath
                        };
                        result.errMsg = '上传成功';
                    }
                    res.end(JSON.stringify(result));
                });
            }else if(role ==='1'){
                conn.query(barberSql.changeAvatar,[filePath,userId],function (err,re) {
                    if (err) {
                        console.log(err);
                        result.status = errorCode.uploadFailed;
                        result.errMsg = '上传失败3';
                    } else {
                        result.data = {
                            url: filePath
                        };
                        result.errMsg = '上传成功';
                    }
                    res.end(JSON.stringify(result));
                });
            }else{
                result.status = errorCode.uploadFailed;
                result.errMsg = '上传失败';
                res.end(JSON.stringify(result));
            }
        }
    }
});

module.exports = router;