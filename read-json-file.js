var fs = require("fs");

var content = fs.readFileSync("files/json/config.json");

var config = JSON.parse(content);

console.log("Hello " + config.name);
console.log("You are " + config.age + " years fold");

// run this file from command prompt as:

// node read-json-file.js