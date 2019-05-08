let addressSql = {
    "UpdateDefaultAddress":'update Adderss set status=1 where cusId=? and status=2 and id<>?',
};

module.exports = addressSql;

