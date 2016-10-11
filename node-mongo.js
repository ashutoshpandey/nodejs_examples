// run the command: npm install mongodb

var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var mongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/my_db';

// Use connect method to connect to the Server
mongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);

        var userCollection = db.collection("users");

        // create records
        var user1 = {
            id: "1",
            name: "Ashutosh",
            gender: "Male"
        };

        var user2 = {
            id: "2",
            name: "Shiva",
            gender: "Male"
        };

        userCollection.insert([user1, user2], function (error, result) {
            console.log("Records created");
        });

        // show all records
        userCollection.find(function (error, cursor) {

            cursor.toArray(function (error, users) {

                if (users.length == 0)
                    console.log("No records found");
                else {

                    users.forEach(function (user) {

                        console.log(user.id + " , " + user.name);
                    });
                }
            });
        });

        // find particular record
        userCollection.find({id: "2"}, function (error, cursor) {

            cursor.toArray(function (error, users) {

                if (users.length == 0)
                    console.log("No records found");
                else {

                    users.forEach(function (user) {

                        console.log(user.id + " , " + user.name);
                    });
                }
            });
        });

        db.close();
    }
});

