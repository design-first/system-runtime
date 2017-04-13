var runtime = require('../src/runtime.js');

        runtime.require('logger').level('debug');
        
        var metamodel = runtime.require('metamodel');

        metamodel.type({
            'name': 'address',
            'type': 'object',
            'schema': {
                'planet': { 'type': 'string', 'mandatory': true }
            }
        });

        metamodel.type({
            'name': 'sex',
            'type': 'string',
            'value': ['male', 'female']
        });

        metamodel.schema({
            '_name': 'Person',
            '_inherit': ['RuntimeComponent'],
            'sex': 'property',
            'firstName': 'property',
            'lastName': 'property',
            'address': 'property'
        });

        metamodel.model({
            '_name': 'Person',
            '_inherit': ['RuntimeComponent'],
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

        var Person = runtime.require('Person');

        var yoda = new Person({
            'sex': 'male',
            'firstName': 'Yoda',
            'lastName': 'Master',
            'address': {
                'planet': 'Dagobah'
            }
        });

        console.log(yoda.address().planet());