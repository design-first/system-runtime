describe('a syrup component', function () {

    // init
    if (typeof window === 'undefined') {
        syrup = require('../../src/syrup.js');
    }

    beforeEach(function () {
        var metamodel = syrup.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['SyrupComponentSchema'],
            'description': 'string',
            'children': 'collection',
            'firstName': 'property',
            'lastName': 'property',
            'father': 'property',
            'adress': 'property',
            'moving': 'event'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['SyrupComponent'],
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
        var id = syrup.id();
        expect(id).toBe('syrup');
    });

    it('can require a component', function () {
        var db = syrup.require('db');
        expect(db).toBeDefined();
    });

    it('can show its classInfo', function () {
        var db = syrup.require('db');
        var classInfo = db.classInfo();
        expect(classInfo).toBeDefined();
    });

    it('can add an event', function (done) {
        var Person = syrup.require('Person');
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
        var Person = syrup.require('Person');
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

    it('can add an event on a property change', function (done) {
        var Person = syrup.require('Person');
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
        var Person = syrup.require('Person');
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
        var Person = syrup.require('Person');

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
        var Person = syrup.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        expect(yoda.firstName()).toBe('Yoda');
    });

    it('can set a property', function () {
        var Person = syrup.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        yoda.lastName('Grand Jedi Master');

        expect(yoda.lastName()).toBe('Grand Jedi Master');
    });

    it('can add an item in a collection in the config', function () {
        var Person = syrup.require('Person');

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
        var Person = syrup.require('Person');

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

    it('can remove an item of a collection with pop', function () {
        var Person = syrup.require('Person');

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
        var Person = syrup.require('Person');

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

    it('can destroy itself', function () {
        var Person = syrup.require('Person');
        var yoda = new Person({
            'firstName': 'Yoda',
            'lastName': 'Master'
        });
        var id = yoda.id();
        yoda.destroy();

        expect(syrup.require(id)).toBe(undefined);
    });

    it('can destroy a class', function () {
        var Person = syrup.require('Person');
        Person.destroy();

        var result = syrup.require('Person');
        expect(result).toBe(undefined);
    });

});