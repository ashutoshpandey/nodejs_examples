var fs = require("fs");

fs.readFile("files/text/test.txt", function(error, data){
    console.log("" + data);
});

// run this file from command prompt as:

// node read-text-file.js