let adminSql = {
    'login':'select * from Admin where phone=? and password=?',
};

module.exports = adminSql;