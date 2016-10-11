var fs = require("fs");

var content = "Hello world!";

//fs.writeFileSync("files/text/output.txt", content);

// asynchronous writing
// program will write in the background and Finished will be called first
fs.writeFile("files/text/output.txt", content, function(error){
    console.log("File saved");
});


console.log("Finished");