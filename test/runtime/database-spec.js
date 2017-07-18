describe('a database instance', function () {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
  }

  it('exists', function () {
    var db = runtime.require('db');
    expect(db).toBeDefined();
  });

});