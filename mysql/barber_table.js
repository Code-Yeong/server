let barber = {
    'getAllBarber':'select * from Barber',
    'getShopBarber':'select * from Barber where shop=?',
};

module.exports = barber;