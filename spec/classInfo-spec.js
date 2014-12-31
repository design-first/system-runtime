describe('A Monoco ClassInfo instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../src/monoco.js');
    }

    it('can show its model', function () {
        var model = monoco.classInfo().model();
        expect(model).toBeDefined();
    });

    it('can show its metamodel', function () {
        var metamodel = monoco.classInfo().metamodel();
        expect(metamodel).toBeDefined();
    });

    it('can show a definition of a property', function () {
        var property = monoco.classInfo().property('version');
        expect(property.type).toBe('string');
    });

    it('can show its properties', function () {
        var properties = monoco.classInfo().properties();
        expect(Array.isArray(properties)).toBe(true);
    });

    it('can show a definition of a method', function () {
        var method = monoco.classInfo().method('system');
        expect(method.result).toBe('object');
    });

    it('can show its methods', function () {
        var methods = monoco.classInfo().methods();
        expect(Array.isArray(methods)).toBe(true);
    });

    it('can show the definition of an event', function () {
        var event = monoco.classInfo().event('error');
        expect(event.params[0].name).toBe('data');
    });

    it('can show its events', function () {
        var events = monoco.classInfo().events();
        expect(Array.isArray(events)).toBe(true);
    });

});