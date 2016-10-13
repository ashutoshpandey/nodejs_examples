// our first test
var request = require("request");

var base_url = "http://localhost:3000/";

describe("Static pages testing", function () {

    describe("GET /", function () {

        it ("returns status code 200", function () {

                request.get(base_url, function (error, response, body) {

                    expect(response.statusCode).toBe(200);

                    done();
                });
            });
    });

    describe("GET /contact-us", function () {

        it ("returns status code 200", function () {

            request.get(base_url + "contact-us", function (error, response, body) {

                expect(response.statusCode).toBe(201);

                done();
            });
        });

        it ("returns status code 404", function () {

            request.get(base_url + "contact-us", function (error, response, body) {

                expect(response.statusCode).toBe(404);

                done();
            });
        });
    });
});