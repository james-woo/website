var PORT = process.env.PORT ? process.env.PORT : 8008;

var express = require('express'),
    app = express();
    http = require('http'),
    server = http.createServer(app),
    path = require('path'),

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
    res.render('index')
});

server.listen(PORT);

