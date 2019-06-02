let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
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
    console.log('开始上传图片');
    // 读取上传的图片信息
    let files = req.files;
    // 设置返回结果
    let result = {};
    if(files==null || files.length===0 || !files[0]) {
        result.status = errorCode.uploadFailed;
        result.errMsg = '上传失败';
    } else {
        result.status = errorCode.uploadSuccess;
        console.log(files[0]);
        // let filePath = files[0].path;
        //     ../public/images/1559494583561.jpg
        result.data = {
            url: files[0].path
        };
        result.errMsg = '上传成功';
    }
    res.end(JSON.stringify(result));
});

module.exports = router;