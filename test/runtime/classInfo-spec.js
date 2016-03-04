describe('a Runtime ClassInfo instance', function () {

    // init
    if (typeof window === 'undefined') {
        runtime = require('../../src/runtime.js');
    }

    it('can show its model', function () {
        var model = runtime.classInfo().model();
        expect(model).toBeDefined();
    });

    it('can show its metamodel', function () {
        var metamodel = runtime.classInfo().metamodel();
        expect(metamodel).toBeDefined();
    });

    it('can show a definition of a property', function () {
        var property = runtime.classInfo().property('version');
        expect(property.type).toBe('string');
    });

    it('can show its properties', function () {
        var properties = runtime.classInfo().properties();
        expect(Array.isArray(properties)).toBe(true);
    });

    it('can show a definition of a link', function () {
        var link = runtime.classInfo().property('version');
        expect(link.type).toBe('string');
    });

    it('can show its links', function () {
        var links = runtime.classInfo().links();
        expect(Array.isArray(links)).toBe(true);
    });

    it('can show a definition of a method', function () {
        var method = runtime.classInfo().method('system');
        expect(method.result).toBe('object');
    });

    it('can show its methods', function () {
        var methods = runtime.classInfo().methods();
        expect(Array.isArray(methods)).toBe(true);
    });

    it('can show a definition of a collection', function () {
        var collection = runtime.classInfo().collection('system');
        expect(collection.result).toBe(undefined);
    });

    it('can show its collections', function () {
        var collections = runtime.classInfo().collections();
        expect(Array.isArray(collections)).toBe(true);
    });

    it('can show the definition of an event', function () {
        var event = runtime.classInfo().event('error');
        expect(event.params[0].name).toBe('data');
    });

    it('can show its events', function () {
        var events = runtime.classInfo().events();
        expect(Array.isArray(events)).toBe(true);
    });

});