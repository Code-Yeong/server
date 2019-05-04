let user = {
    'regist':"insert into User(name, password,phone) values(?,?,?)",
    'login':'select * from User where name =? and password=?'
};

module.exports = user;