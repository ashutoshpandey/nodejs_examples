// if our user.js file is at app/models/user.js
var User = require('./models/user');

var creating = false;

if(creating) {

    // create new users
    var ashutosh = new User({
        name: 'Ashutosh',
        password: 'password',
        email: "ashutosh@gmail.com"
    });

    var shiva = new User({
        name: 'Shiva',
        password: 'password',
        email: "shiva@gmail.com"
    });

    ashutosh.toString(function (err, data) {

        if (err) throw err;

        console.log(data);
    });
    shiva.toString(function (err, data) {

        if (err) throw err;

        console.log(data);
    });

    // save the records to database
    ashutosh.save(function (err) {
        if (err)
            console.log("Error saving the record : " + err);
        else
            console.log("First record saved");
    });
    shiva.save(function (err) {
        if (err)
            console.log("Error saving the record");
        else
            console.log("Second record saved");
    });
}
else{

    // find and read records

    console.log("Showing all records");

    // get all the users
    User.find({}, function(err, users) {

        if (err) throw err;

        users.forEach(function(user){
            console.log("Record ***********************");
            console.log(user);
        });
    });

    console.log("Finding record by attribute");

    // get the user shiva
    User.find({ email: 'shiva@gmail.com' }, function(err, user) {
        if (err) throw err;

        // object of the user
        console.log("Single Record ***********************");
        console.log(user);
    });

    console.log("Finding record by id");

    // get a user with ID of 1
    User.findById('57fedf1417544128149104b6', function(err, user) {
        if (err) throw err;

        // show the one user
        console.log("By id");
        console.log(user);

        // if we want to update record
        user.password = 'abc';
        user.save(function(err){
            if(err) throw err;

            console.log('Record updated');
        });

        // if we want to remove record
/*
        user.remove(function(err) {
            if (err) throw err;

            console.log('User successfully deleted!');
        });
*/
    });

    return;

    console.log("Running query");

    // get the date 1 month ago
    var monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    User.find({ name: 'Ashutosh' }).where('created_at').gt(monthAgo).exec(function(err, users) {
        if (err) throw err;

        // show the records in the past month
        console.log(users);
    });
}