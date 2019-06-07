let serveSql = {
    'addServeType':'insert into Serve(name,type,money,status,createTime) values(?,?,?,?,?)',
    'queryAllServe':'select * from Serve order by type ASC',
    'queryOneServe':'select * from Serve where id=?',
};

module.exports = serveSql;