/**
 * Example 09 - Create a component class with MSON (Metamodel JavaScript Object Notation)
 * 
 * To create a component class, we need to define 2 MSON objects:
 * 
 * - the metaclass schema that defines the properties, methods and events of the class
 * - the class schema that defines the input / output of the methods, types of the properties,
 * types of the parameters, ...
 * 
 */
 
 
// create the system
monoco.system('exemple09');

// create the model
var metamodel = monoco.require('metamodel');

metamodel.schema({
    '_name': 'PersonSchema',
    'description': 'string',
    'firstName': 'property'
});

metamodel.schema({
    '_name': 'Person',
    '_schema': 'PersonSchema',
    'description': 'a person',
    'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
    }
});

metamodel.create();

// add some code
monoco.system().on('main', function () {
    console.log(this.require('Person').name);
});

// run the system
monoco.system().main();