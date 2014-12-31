/**
 * Example 10 - Create new types
 *
 */
 
 
// create the system
monoco.system('example10');

// create the model
var metamodel = monoco.require('metamodel');

// new adress type
metamodel.type({
    'name': 'address',
    'type': 'object',
    'schema': {
        'planet': {'type': 'string', 'mandatory': true}
    }
});

// new sex type
metamodel.type({
    'name': 'sex',
    'type': 'string',
    'value': ['male', 'female']
});

metamodel.schema({
    '_name': 'JediSchema',
    'description': 'string',
    'sex': 'property',
    'firstName': 'property',
    'lastName': 'property',
    'address': 'property'
});

metamodel.schema({
    '_name': 'Jedi',
    '_schema': 'JediSchema',
    'description': 'a jedi',
    'sex': {
        'type': 'sex', // enum type
        'readOnly': false,
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
        'readOnly': false,
        'mandatory': true,
        'default': ''
    },
    'address': {
        'type': 'address', // custom type
        'readOnly': false,
        'mandatory': false,
        'default': {
            planet: ''
        }
    }
});

metamodel.create();

// add some code
monoco.system().on('main', function () {
    var Jedi = this.require('Jedi');
    var yoda = new Jedi({
        'sex': 'male',
        'firstName': 'Yoda',
        'lastName': 'Master',
        'address': {
            'planet': 'Dagobah'
        }
    });
    console.log(yoda.address());
});

// run the system
monoco.system().main();