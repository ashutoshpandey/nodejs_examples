var fs = require("fs");
var express = require("express");

var config = JSON.parse(fs.readFileSync("files/json/server-config.json"));

var port = config.port;

var express = require('express');
var app = express();

// public folder will contain static resources like js, css, images, fonts
// the URLs will have /static before actual static resource
// it is not necessary that URLs /static match with 'static' name of folder
// we can also write like this:
// app.use('/static', express.static(__dirname + "/public"));
app.use('/static', express.static(__dirname + "/static"));

// try to put an image in your project's static/images folder and call it like this:
// http://localhost:1234/static/images/test.jpg

var server = app.listen(port, function () {
    console.log("Server running on port %s", port);
});