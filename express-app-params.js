var fs = require("fs");
var express = require("express");

var config = JSON.parse(fs.readFileSync("files/json/server-config.json"));

var port = config.port;

var express = require('express');
var app = express();

/************* routes *********************/

app.get("/hello/:name", function (request, response) {

    var name = request.params.name;

    response.send("Hello " + name);
});

app.get("/add/:a/:b", function (request, response) {

    var a = request.params.a;
    var b = request.params.b;

    var sum = parseInt(a)+parseInt(b);

    response.send("Sum of " + a + " and " + b + " is " + sum);
});

/************* routes *********************/

var server = app.listen(port, function () {
    console.log("Server running on port %s", port);
});