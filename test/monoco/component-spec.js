describe('a monoco component', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../../src/monoco.js');
    }
    var share = '';

    beforeEach(function () {
        var metamodel = monoco.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'children': 'collection',
            'firstName': 'property',
            'lastName': 'property',
            'father': 'property'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'children': {
                'type': ['@Person'],
                'readOnly': false,
                'mandatory': false,
                'default': []
            },
            'firstName': {
                'type': 'string',
                'readOnly': false,
                'mandatory': true,
                'default': ''
            },
            'lastName': {
                'type': 'string',
                'readOnly': false,
                'mandatory': true,
                'default': ''
            },
            'father': {
                'type': '@Person',
                'readOnly': false,
                'mandatory': false,
                'default': {}
            }
        });
        metamodel.create();

    });

    it('can show its id', function () {
        var id = monoco.id();
        expect(id).toBe('monoco');
    });

    it('can require a component', function () {
        var db = monoco.require('db');
        expect(db).toBeDefined();
    });

    it('can show its classInfo', function () {
        var db = monoco.require('db');
        var classInfo = db.classInfo();
        expect(classInfo).toBeDefined();
    });

    it('can add an event', function (done) {
        var db = monoco.require('db');
        db.on('init', function (conf) {
            share = share + 'ok';
        });
        db.init({});

        setTimeout(function () {
            expect(share).toBe('ok');
            done();
        }, 1);
    });

    it('can remove an event', function (done) {
        var db = monoco.require('db');
        db.off('init');
        db.init({});

        setTimeout(function () {
            expect(share).toBe('ok');
            done();
        }, 1);
    });

    it('can add an event on a property change', function (done) {
        var system = monoco.system('testEventAdd');
        share = '';

        system.on('version', function (val) {
            share = share + 'version';
        });
        system.version('0.0.0');

        setTimeout(function () {
            expect(share).toBe('version');
            done();
        }, 1);
    });

    it('can remove an event on a property change', function (done) {
        var system = monoco.system('testEventRemove');
        system.off('version');

        system.version('0.0.0');

        setTimeout(function () {
            expect(share).toBe('version');
            done();
        }, 1);
    });

    it('can navigate threw relationships bewteen components', function () {
        var Person = monoco.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        anakin.children().push(luke);

        var leia = new Person({
            'firstName': 'Leia Amidala',
            'lastName': 'Skywalker'
        });

        leia.father(anakin);

        expect(leia.father().children(0).firstName()).toBe('Luke');
    });

    it('can get a property', function (done) {
        setTimeout(function () {
            var anakin = monoco.find('Person', { 'firstName': 'Anakin' })[0];
            expect(anakin.firstName()).toBe('Anakin');
            done();
        }, 1);
    });

    it('can set a property', function (done) {
        var anakin = monoco.find('Person', { 'firstName': 'Anakin' })[0];
        anakin.lastName('Vador');

        setTimeout(function () {
            var anakin = monoco.find('Person', { 'firstName': 'Anakin' })[0];
            expect(anakin.lastName()).toBe('Vador');
            done();
        }, 1);
    });

    it('can get a collection', function (done) {
        setTimeout(function () {
            var anakin = monoco.find('Person', { 'firstName': 'Anakin' })[0];
            expect(anakin.children().length).toBe(1);
            done();
        }, 1);
    });

    it('can destroy itself', function (done) {
        var anakin = monoco.find('Person', { 'firstName': 'Anakin' })[0];
        anakin.destroy();

        setTimeout(function () {
            var result = monoco.find('Person', { 'firstName': 'Anakin' });
            expect(result.length).toBe(0);
            done();
        }, 1);
    });

    it('can destroy a class', function (done) {
        var Person = monoco.require('Person');
        Person.destroy();

        setTimeout(function () {
            var result = monoco.find('Person', {});
            expect(result.length).toBe(0);
            done();
        }, 1);
    });

});