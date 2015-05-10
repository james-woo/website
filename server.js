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

setInterval(function(){
	http.get("http://jameswoo.herokuapp.com");
}, 900000);

server.listen(PORT);
console.log("listening on port 8008");