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
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

// let upload = multer({dest:"../public/images"});

let upload = multer({ storage: storage });

// 文件上传请求处理，upload.array 支持多文件上传，第二个参数是上传文件数目
router.post('/upload/img', upload.array('image',1),function (req, res, next) {
    // upload.array('file', 1),
    console.log('upload files');

    // 读取上传的图片信息
    let files = req.files;
    console.log(files);
    // 设置返回结果
    var result = {};
    if(files==null || files.length===0 || !files[0]) {
        result.status = errorCode.uploadFailed;
        result.errMsg = '上传失败';
    } else {
        result.status = errorCode.uploadSuccess;
        result.data = {
            url: files[0].path
        };
        result.errMsg = '上传成功';
    }
    res.end(JSON.stringify(result));
});

module.exports = router;