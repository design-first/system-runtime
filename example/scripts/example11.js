/**
 * Example 11 - Create a one to one relationship
 * 
 */
 
 
// create the system
monoco.system('example11');

// create the model
var metamodel = monoco.require('metamodel');

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
    'father': 'property'
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
        'type': '@Jedi', // create link
        'readOnly': false,
        'mandatory': false,
        'default': {}
    }
});

metamodel.create();

// add some code
monoco.system().on('main', function () {
    var Jedi = this.require('Jedi');

    var anakin = new Jedi({
        'sex': 'male',
        'firstName': 'Anakin',
        'lastName': 'Skywalker'
    });

    // add the reference to the object
    var luke = new Jedi({
        'sex': 'male',
        'firstName': 'Luke',
        'lastName': 'Skywalkers',
        'father': anakin
    });

    // or add the reference by APIs
    // padme.father(anakin);

    console.log(luke.father().firstName());
});

// run the system
monoco.system().main();