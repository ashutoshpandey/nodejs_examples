var http = require("http");
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("files/json/server-config.json"));

var host = config.host;
var port = config.port;

var server = http.createServer(function(request, response){
    console.log('Server created');
});

server.listen(port, host, function(){
    console.log('Server running on port ' + port);
});