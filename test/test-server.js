var chai = require('chai');
var chaiHttp = require('chai-http');
var request = require('request');
var expect  = require("chai").expect;

chai.use(chaiHttp);

describe('Test welcome page', function() {
    it('should show welcome page on /welcome GET', function(done) {
        request('http://localhost:1234/welcome',function(err, res){
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});