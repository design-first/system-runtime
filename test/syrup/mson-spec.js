describe('a MSON schema', function () {

    // init
    if (typeof window === 'undefined') {
        syrup = require('../../src/syrup.js');
    }

    it('can make inheritance at class level', function () {
        var metamodel = syrup.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema',
            '_name': 'PersonSchema',
            '_inherit': ['SyrupComponentSchema'],
            'description': 'string',
            'firstName': 'property',
            'lastName': 'property',
            'getFullName': 'method'
        });

        metamodel.schema({
            '_id': 'Person',
            '_name': 'Person',
            '_schema': 'PersonSchema',
            '_inherit': ['SyrupComponent'],
            'description': 'a person',
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
            'getFullName': {
                'result': 'string'
            }
        });

        metamodel.schema({
            '_id': 'TeacherSchema',
            '_name': 'TeacherSchema',
            '_inherit': ['SyrupComponentSchema', 'PersonSchema'],
            'description': 'string',
            'firstName': 'property',
            'lastName': 'property',
            'getFullName': 'method'
        });

        metamodel.schema({
            '_id': 'Teacher',
            '_name': 'Teacher',
            '_schema': 'PersonSchema',
            '_inherit': ['SyrupComponent', 'Person'],
            'description': 'a person',
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
            'getFullName': {
                'result': 'string'
            }
        });

        metamodel.create();

        var Person = syrup.require('Person');

        Person.off('getFullName');
        
        Person.on('getFullName', function () {
            return this.firstName() + ' ' + this.lastName();
        });

        var Teacher = syrup.require('Teacher');

        var eikichi = new Teacher({
            'firstName': 'Eikichi',
            'lastName': 'Onizuka'
        });

        expect(eikichi.getFullName()).toBe('Eikichi Onizuka');
    });
    
});