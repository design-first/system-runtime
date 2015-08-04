describe('a monoco system', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../../src/monoco.js');
    }
    var system = monoco.system('test5');

    it('has a name', function () {
        expect(system.name()).toBe('test5');
    });

    it('has a description', function () {
        expect(typeof system.description()).toBe('string');
    });

    it('has a version', function () {
        expect(system.version()).toBeDefined();
    });

    it('can tell if it is a subsystem', function () {
        expect(system.subsystem()).toBe(false);
    });

    it('has schemas', function () {
        expect(system.schemas()).toBeDefined();
    });

    it('has behaviors', function () {
        expect(system.behaviors()).toBeDefined();
    });

    it('has types', function () {
        expect(system.types()).toBeDefined();
    });

    it('has components', function () {
        expect(system.components()).toBeDefined();
    });

    it('can sync', function () {
        system.sync();
        expect(system).toBeDefined();
    });

});