let user = {
    'regist':"insert into User(name, password,phone) values(?,?,?)",
    'login':'select * from User where phone =? and password=?',
    'isPhoneExist': 'select * from User where phone = ?',
};

module.exports = user;