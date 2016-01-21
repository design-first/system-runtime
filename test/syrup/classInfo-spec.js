describe('a syrup ClassInfo instance', function () {

    // init
    if (typeof window === 'undefined') {
        syrup = require('../../src/syrup.js');
    }

    it('can show its model', function () {
        var model = syrup.classInfo().model();
        expect(model).toBeDefined();
    });

    it('can show its metamodel', function () {
        var metamodel = syrup.classInfo().metamodel();
        expect(metamodel).toBeDefined();
    });

    it('can show a definition of a property', function () {
        var property = syrup.classInfo().property('version');
        expect(property.type).toBe('string');
    });

    it('can show its properties', function () {
        var properties = syrup.classInfo().properties();
        expect(Array.isArray(properties)).toBe(true);
    });

    it('can show a definition of a method', function () {
        var method = syrup.classInfo().method('system');
        expect(method.result).toBe('object');
    });

    it('can show its methods', function () {
        var methods = syrup.classInfo().methods();
        expect(Array.isArray(methods)).toBe(true);
    });
    
    it('can show a definition of a collection', function () {
        var collection = syrup.classInfo().collection('system');
        expect(collection.result).toBe(undefined);
    });

    it('can show its collections', function () {
        var collections = syrup.classInfo().collections();
        expect(Array.isArray(collections)).toBe(true);
    });

    it('can show the definition of an event', function () {
        var event = syrup.classInfo().event('error');
        expect(event.params[0].name).toBe('data');
    });

    it('can show its events', function () {
        var events = syrup.classInfo().events();
        expect(Array.isArray(events)).toBe(true);
    });

});