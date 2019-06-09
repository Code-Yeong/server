let adminSql = {
    'login':'select * from Admin where phone=? and password=?',
    'queryAllOrder':'select * from Reservation order by createTime desc',
};

module.exports = adminSql;