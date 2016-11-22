describe('a component', function () {

    // init
    if (typeof window === 'undefined') {
        runtime = require('../../src/runtime.js');
    }

    beforeEach(function () {
        runtime.system('component-spec');
        var metamodel = runtime.require('metamodel');

        metamodel.schema({
            '_name': 'Person',
            '_inherit': ['RuntimeComponent'],
            'children': 'collection',
            'firstName': 'property',
            'lastName': 'property',
            'father': 'link',
            'adress': 'property',
            'moving': 'event'
        });

        metamodel.model({
            '_name': 'Person',
            '_inherit': ['RuntimeComponent'],
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
            },
            'adress': {
                'type': 'string',
                'readOnly': false,
                'mandatory': false,
                'default': ''
            },
            'moving': {}
        });
        metamodel.create();

    });

    it('can show its id', function () {
        var id = runtime.id();
        expect(id).toBe('runtime');
    });

    it('can require a component', function () {
        var db = runtime.require('db');
        expect(db).toBeDefined();
    });

    it('can show its classInfo', function () {
        var db = runtime.require('db');
        var classInfo = db.classInfo();
        expect(classInfo).toBeDefined();
    });

    it('can add an event', function (done) {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });

        yoda.on('moving', function () {
            this.adress('Dagobah');
        });
        yoda.moving();

        setTimeout(function () {
            expect(yoda.adress()).toBe('Dagobah');
            done();
        }, 1);
    });

    it('can remove an event', function (done) {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });

        yoda.on('moving', function () {
            this.adress('Dagobah');
        });
        yoda.off('moving');

        yoda.moving();

        setTimeout(function () {
            expect(yoda.adress()).toBe('');
            done();
        }, 1);
    });

    it('can remove all event', function (done) {
        var Person = runtime.require('Person');
        var yoda2 = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });

        yoda2.on('moving', function () {
            this.adress('Dagobah');
        });
        yoda2.off();

        yoda2.moving();

        setTimeout(function () {
            expect(yoda2.adress()).toBe('');
            done();
        }, 1);
    });

    it('can remove an event with its id', function (done) {
        var Person = runtime.require('Person');
        var yoda3 = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });

        var behaviorId = yoda3.on('moving', function () {
            this.adress('Dagobah');
        });

        yoda3.require(behaviorId).destroy();

        yoda3.moving();

        setTimeout(function () {
            expect(yoda3.adress()).toBe('');
            done();
        }, 1);
    });

    it('can add an event on a property change', function (done) {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        })

        yoda.on('lastName', function (val) {
            this.adress('Dagobah');
        });

        yoda.lastName('Grand Jedi Master');

        setTimeout(function () {
            expect(yoda.adress()).toBe('Dagobah');
            done();
        }, 1);
    });

    it('can remove an event on a property change', function (done) {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        })

        yoda.on('lastName', function (val) {
            this.adress('Dagobah');
        });

        yoda.off('lastName');

        yoda.lastName('Grand Jedi Master');

        setTimeout(function () {
            expect(yoda.adress()).toBe('');
            done();
        }, 1);
    });

    it('can navigate threw relationships bewteen components', function () {
        var Person = runtime.require('Person');

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

    it('can get a property', function () {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        expect(yoda.firstName()).toBe('Yoda');
    });

    it('can set a property', function () {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        yoda.lastName('Grand Jedi Master');

        expect(yoda.lastName()).toBe('Grand Jedi Master');
    });

    it('can not set an invalid value', function () {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        yoda.lastName(42);

        expect(yoda.lastName()).toBe('Master');
    });

    it('can add an item in a collection in the config', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker',
            'children': [luke]
        });

        expect(anakin.children(0).id()).toBe(luke.id());
    });

    it('can add an item in a collection with api', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        anakin.children(0, luke);

        expect(anakin.children(0).id()).toBe(luke.id());
    });

    it('can add items in a collection with api', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        anakin.children([luke, anakin]);

        expect(anakin.children().length).toBe(2);
    });

    it('can remove an item of a collection with pop', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker',
            'children': [luke]
        });

        expect(anakin.children().pop().id()).toBe(luke.id());
    });

    it('can add a item of a collection with push', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        anakin.children().push(luke);

        expect(anakin.children(0).id()).toBe(luke.id());
    });

    it('can clear a collection with api', function () {
        var Person = runtime.require('Person');

        var luke = new Person({
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        anakin.children([luke, anakin]);
        anakin.children([]);

        expect(anakin.children().length).toBe(0);
    });

    it('can destroy itself', function () {
        var Person = runtime.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        var id = yoda.id();
        yoda.destroy();

        expect(runtime.require(id)).toBe(undefined);
    });

    it('can destroy a class', function () {
        var Person = runtime.require('Person');
        Person.destroy();

        var result = runtime.require('Person');
        expect(result).toBe(undefined);
    });


    it('can create a core object', function () {
        var Person = runtime.require('Person');
        var shadow = new Person({
            'firstName': 'Shadow',
            'lastName': 'Object',
            '_core': true
        });

        expect(runtime.require('db').system().indexOf('Shadow')).toBe(-1);
    });

});