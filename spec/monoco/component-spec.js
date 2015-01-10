describe('A Monoco Component', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../../src/monoco.js');
    }
    var share = '';
    function _init() {
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
                'readOnly': true,
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
                'readOnly': true,
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

    }
    _init();

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

    it('can add an event', function () {
        var db = monoco.require('db');
        db.on('init', function () {
            share = share + 'ok';
        });
        db.init({});
        expect(share).toBe('ok');
    });

    it('can remove an event', function () {
        var db = monoco.require('db');
        db.off('init');
        db.init({});
        expect(share).toBe('ok');
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

    it('can destroy itself', function () {
        var anakin = monoco.find('Person', {'firstName': 'Anakin'})[0],
        result = [];

        anakin.destroy();

        result = monoco.find('Person', {'firstName': 'Anakin'});

        expect(result.length).toBe(0);
    });

    it('can destroy a class', function () {
        var Person = monoco.require('Person'),
        result = [];

        Person.destroy();

        result = monoco.find('Person', {});

        expect(result.length).toBe(0);
    });

});