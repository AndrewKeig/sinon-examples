var assert = require('assert');
var should = require('should');
var sinon = require('sinon');

describe('when we stub a single dependency', function () {
  var expected = "warn: this is a warning";
  var logger = new require('./apps/lib/logger');
  var stub = sinon.stub(logger, "log").returns(expected);
  var app = require('./apps/app');

  it('should respond with a stubbed response', function(done){
    assert.equal(app.status(), expected);
    stub.restore();
    done();
  });
});