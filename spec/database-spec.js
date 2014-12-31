describe('Monoco Database instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../src/monoco.js');
    }

    it('exists', function () {
        var db = monoco.require('db');
        expect(db).toBeDefined();
    });

    it('can export the current system', function () {
        monoco.system('test1');
        var system = monoco.require('db').system();
        expect(system).toBeDefined();
    });

    it('can export a subsystem', function () {
        monoco.system('test2');
        var system = monoco.require('db').subsystem({});
        expect(system).toBeDefined();
    });

    it('can import a system', function () {
        monoco.system('test3');
        var system = monoco.require('db').system();
        monoco.require('db').system(JSON.parse(system));
        system = monoco.require('db').system();
        expect(system).toBeDefined();
    });

});