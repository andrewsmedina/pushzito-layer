var app = require('express')();
var http = require('http').Server(app);
var mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:' + port);
});
