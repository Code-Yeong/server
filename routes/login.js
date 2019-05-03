var express = require("express");
var routes = express.Router();

routes.get('/', function (req,res,next) {
    var name = req.query;
    console.log(name['name']);
    res.send('login success!');
});

module.exports = routes;