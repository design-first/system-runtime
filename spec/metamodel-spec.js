describe('Monoco Metamodel instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../src/monoco.js');
    }

    it('exists', function () {
        var metamodel = monoco.require('metamodel');
        expect(metamodel).toBeDefined();
    });

    it('can add a schema', function () {
        var metamodel = monoco.require('metamodel');
        metamodel.schema({
            '_id': 'PersonTestSchema',
            '_name': 'PersonTestSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'firstName': 'property'
        });

        metamodel.schema({
            '_id': 'PersonTest',
            '_name': 'PersonTest',
            '_schema': 'PersonTestSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'firstName': {
                'type': 'string',
                'readOnly': false,
                'mandatory': true,
                'default': ''
            }
        });

        metamodel.create();
        expect(metamodel.require('PersonTest')).toBeDefined();
    });

    it('can add a type', function () {
        var metamodel = monoco.require('metamodel');

        metamodel.type({
            'name': 'address',
            'type': 'object',
            'schema': {
                'planet': {'type': 'string', 'mandatory': true}
            }
        });

        metamodel.type({
            'name': 'sex',
            'type': 'string',
            'value': ['male', 'female']
        });

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'sex': 'property',
            'firstName': 'property',
            'lastName': 'property',
            'address': 'property'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'sex': {
                'type': 'sex',
                'readOnly': true,
                'mandatory': true,
                'default': 'male'
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
            'address': {
                'type': 'address',
                'readOnly': true,
                'mandatory': false,
                'default': {
                    planet: ''
                }
            }
        });

        metamodel.create();

        var Person = monoco.require('Person');

        var yoda = new Person({
            'sex': 'male',
            'firstName': 'Yoda',
            'lastName': 'Master',
            'address': {
                'planet': 'Dagobah'
            }
        });

        expect(yoda.address().planet).toBe('Dagobah');
    });

    it('can create a one to one relationship', function () {
        var metamodel = monoco.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'sex': 'property',
            'firstName': 'property',
            'lastName': 'property',
            'address': 'property',
            'father': 'property'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'sex': {
                'type': 'sex',
                'readOnly': true,
                'mandatory': true,
                'default': 'male'
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
            'address': {
                'type': 'address',
                'readOnly': true,
                'mandatory': false,
                'default': {
                    planet: ''
                }
            },
            'father': {
                'type': '@Person',
                'readOnly': false,
                'mandatory': false,
                'default': {}
            }
        });

        metamodel.create();

        var Person = monoco.require('Person');

        var anakin = new Person({
            'sex': 'male',
            'firstName': 'Anakin',
            'lastName': 'Skywalker'
        });

        var luke = new Person({
            'sex': 'male',
            'firstName': 'Luke',
            'lastName': 'Skywalkers',
            'father': anakin
        });

        expect(luke.father().firstName()).toBe('Anakin');
    });


    it('can can create a one to many relationship', function () {
        var metamodel = monoco.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'children': 'collection',
            'sex': 'property',
            'firstName': 'property',
            'lastName': 'property',
            'address': 'property',
            'father': 'property'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'sex': {
                'type': 'sex',
                'readOnly': true,
                'mandatory': true,
                'default': 'male'
            },
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
            'address': {
                'type': 'address',
                'readOnly': true,
                'mandatory': false,
                'default': {
                    planet: ''
                }
            },
            'father': {
                'type': '@Person',
                'readOnly': false,
                'mandatory': false,
                'default': {}
            }
        });

        metamodel.create();

        var Person = monoco.require('Person');

        var leia = new Person({
            'sex': 'female',
            'firstName': 'Leia Amidala',
            'lastName': 'Skywalker'
        });

        var luke = new Person({
            'sex': 'male',
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var padme = new Person({
            'sex': 'female',
            'firstName': 'Padme',
            'lastName': 'Amidala',
            'children': [luke, leia]
        });

        expect(padme.children(1).firstName()).toBe('Leia Amidala');
    });


    it('can create navigation threw model', function () {
        var metamodel = monoco.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['MonocoComponentSchema'],
            'description': 'string',
            'children': 'collection',
            'sex': 'property',
            'firstName': 'property',
            'lastName': 'property',
            'address': 'property',
            'father': 'property',
            'son': 'property'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['MonocoComponent'],
            'description': 'a person',
            'sex': {
                'type': 'sex',
                'readOnly': true,
                'mandatory': true,
                'default': 'male'
            },
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
            },
            'address': {
                'type': 'address',
                'readOnly': true,
                'mandatory': false,
                'default': {
                    planet: ''
                }
            },
            'son': {
                'type': '@Person',
                'readOnly': false,
                'mandatory': false,
                'default': {}
            }
        });

        metamodel.create();

        var Person = monoco.require('Person');

        var luke = new Person({
            'sex': 'male',
            'firstName': 'Luke',
            'lastName': 'Skywalker'
        });

        var anakin = new Person({
            'sex': 'male',
            'firstName': 'Anakin',
            'lastName': 'Skywalker',
            'son': luke
        });

        var leia = new Person({
            'sex': 'female',
            'firstName': 'Leia Amidala',
            'lastName': 'Skywalker',
            'father': anakin
        });

        expect(leia.father().son().firstName()).toBe('Luke');
    });
});