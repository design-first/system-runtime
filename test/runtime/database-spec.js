describe('a database instance', function () {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
  }

  it('exists', function () {
    var db = runtime.require('db');
    expect(db).toBeDefined();
  });

  it('can export the current system', function () {
    runtime.system('test1');
    var system = runtime.require('db').system();
    expect(system).toBeDefined();
  });

  it('can export a subsystem', function () {
    runtime.system('test2');
    var system = runtime.require('db').subsystem({});
    expect(system).toBeDefined();
  });

  it('can import a system', function () {
    runtime.system('test3');
    var system = runtime.require('db').system();
    runtime.require('db').system(JSON.parse(system));
    system = runtime.require('db').system();
    expect(system).toBeDefined();
  });

});