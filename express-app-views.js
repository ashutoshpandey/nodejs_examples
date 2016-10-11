// ejs => Embedded JavaScript, is a view engine for node
// before running this code, run:  npm install ejs

var fs = require("fs");
var express = require("express");

var config = JSON.parse(fs.readFileSync("files/json/server-config.json"));

var port = config.port;

var express = require('express');
var app = express();

// set 'views' folder as the location of our views
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + "/static"));

/************* routes *********************/

app.get("/", function (request, response) {

    response.render('index.ejs');
});

app.get("/person/:name", function (request, response) {

    var name = request.params.name;

    var json = {
        name: name,
        message: 'Welcome'
    };

    response.render('person.ejs', json);
});

/************* routes *********************/

var server = app.listen(port, function () {
    console.log("Server running on port %s", port);
});