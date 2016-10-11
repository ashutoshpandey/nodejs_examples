// automatically detect file changes

var fs = require("fs");

function showFileData(){

    console.log("Showing students data");
    
    var students = JSON.parse(fs.readFileSync("files/json/students.json"));

    for(var i=0; i<students.length; i++){
        console.log(students[i].name + " , " + students[i].age);
    }
}

showFileData();

fs.watch("files/json/students.json", function(current, previous){
    showFileData(); 
});

// program will wait for file changes