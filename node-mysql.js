// npm install node-mysql

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ujjwal'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

var insertMode = true;

if(insertMode){

    var date = new Date();

    var teacher = { name: 'Abhimanyu', post: 'Teacher', status: 'active', created_at: date, updated_at: date, school_id: 1, current_user_id: 2 };
    connection.query('INSERT INTO teachers SET ?', teacher, function(err,res){
        if(err) throw err;

        console.log('Last insert ID:', res.insertId);
    });
}
else {
    connection.query('SELECT * from teachers', function (err, teachers, fields) {
        connection.end();
        if (!err) {
            teachers.forEach(function (teacher) {
                console.log("Hello " + teacher.name);
            });
        }
        else
            console.log('Error while performing Query.');
    });
}