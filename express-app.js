var fs = require("fs");
var express = require("express");

var config = JSON.parse(fs.readFileSync("files/json/server-config.json"));

var port = config.port;

var express = require('express');
var app = express();

/************* routes *********************/

app.get('/welcome', function (request, response) {
    response.send('Hello World');
});

/************* routes *********************/

var server = app.listen(port, function () {
    console.log("Server running on port %s", port);
});