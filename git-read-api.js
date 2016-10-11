var https = require('https');

var username = 'ashutoshpandey';

var options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers : {
        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    }
};

var request = https.request(options, function(response){

    var body = '';

    response.on("data", function(chunk){

        body += chunk.toString('utf8');
    });

    response.on("end", function(){

        var json = JSON.parse(body);

        console.log("Count = " + json.length);

        json.forEach(function(repo){
            console.log(repo.name);
        });

        //console.log(body);
    });

});

request.end();