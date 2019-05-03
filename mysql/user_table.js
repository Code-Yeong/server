let user = {
    'regist':"insert into User(name, password) values(?,?)",
    'login':'select * from User where name =? and password=?'
};

module.exports = user;