/**
 * Example 13 - Navigate threw the model
 *  
 */


// create the system
monoco.system('example13');

// create the model
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
    '_name': 'JediSchema',
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
    '_name': 'Jedi',
    '_schema': 'JediSchema',
    'description': 'a jedi',
    'sex': {
        'type': 'sex',
        'readOnly': false,
        'mandatory': true,
        'default': 'male'
    },
    'children': {
        'type': ['@Jedi'],
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
        'type': '@Jedi',
        'readOnly': false,
        'mandatory': false,
        'default': {}
    },
    'address': {
        'type': 'address',
        'readOnly': false,
        'mandatory': false,
        'default': {
            planet: ''
        }
    },
    'son': {
        'type': '@Jedi',
        'readOnly': false,
        'mandatory': false,
        'default': {}
    }
});

metamodel.create();

// add some code
monoco.system().on('main', function () {
    var Jedi = this.require('Jedi');

    var luke = new Jedi({
        'sex': 'male',
        'firstName': 'Luke',
        'lastName': 'Skywalker'
    });

    var anakin = new Jedi({
        'sex': 'male',
        'firstName': 'Anakin',
        'lastName': 'Skywalker',
        'son': luke
    });

    var leia = new Jedi({
        'sex': 'female',
        'firstName': 'Leia Amidala',
        'lastName': 'Skywalker',
        'father': anakin
    });

    // navigate threw the links between components
    console.log(leia.father().son().firstName());
});

// run the system
monoco.system().main();