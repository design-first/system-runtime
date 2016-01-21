describe('a syrup database instance', function () {

    // init
    if (typeof window === 'undefined') {
        syrup = require('../../src/syrup.js');
    }

    it('exists', function () {
        var db = syrup.require('db');
        expect(db).toBeDefined();
    });

    it('can export the current system', function () {
        syrup.system('test1');
        var system = syrup.require('db').system();
        expect(system).toBeDefined();
    });

    it('can export a subsystem', function () {
        syrup.system('test2');
        var system = syrup.require('db').subsystem({});
        expect(system).toBeDefined();
    });

    it('can import a system', function () {
        syrup.system('test3');
        var system = syrup.require('db').system();
        syrup.require('db').system(JSON.parse(system));
        system = syrup.require('db').system();
        expect(system).toBeDefined();
    });

});