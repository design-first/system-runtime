describe('a MSON schema', function () {

    // init
    if (typeof window === 'undefined') {
        runtime = require('../../src/runtime.js');
    }

    it('can make inheritance at class level', function () {
        var metamodel = runtime.require('metamodel');

        metamodel.schema({
            '_id': 'PersonSchema_test',
            '_name': 'PersonSchema_test',
            '_inherit': ['RuntimeComponentSchema'],
            'description': 'string',
            'firstName': 'property',
            'lastName': 'property',
            'getFullName': 'method'
        });

        metamodel.schema({
            '_id': 'Person_test',
            '_name': 'Person_test',
            '_schema': 'PersonSchema_test',
            '_inherit': ['RuntimeComponent'],
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
            '_id': 'TeacherSchema_test',
            '_name': 'TeacherSchema_test',
            '_inherit': ['RuntimeComponentSchema', 'PersonSchema_test'],
            'description': 'string',
            'firstName': 'property',
            'lastName': 'property',
            'getFullName': 'method'
        });

        metamodel.schema({
            '_id': 'Teacher_test',
            '_name': 'Teacher_test',
            '_schema': 'PersonSchema_test',
            '_inherit': ['RuntimeComponent', 'Person_test'],
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

        var Person = runtime.require('Person_test');

        Person.off('getFullName');

        Person.on('getFullName', function () {
            return this.firstName() + ' ' + this.lastName();
        });

        var Teacher = runtime.require('Teacher_test');

        var eikichi = new Teacher({
            'firstName': 'Eikichi',
            'lastName': 'Onizuka'
        });

        expect(eikichi.getFullName()).toBe('Eikichi Onizuka');
    });

});