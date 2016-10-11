// our first test
var request = require("request");

describe("Hello World Test", function () {

    describe("GET /", function () {

        if ("returns status code 200", function () {

                request.get(base_url, function (error, response, body) {

                    expect(response.statusCode).toBe(200);
                    done();
                });
            });

    });
});