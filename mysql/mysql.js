let mysql = require( 'mysql');  //导入mysql模块

let connection = mysql.createConnection({   //配置连接参数
    host : 'localhost',
    user : 'root',
    password : 'Chivan@2019',
    database : 'zxs',
    multipleStatements: true
});

connection.connect();

module.exports = connection;