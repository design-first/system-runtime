/**
 * Example 14 - Inheritance between components
 * 
 * Inheritance is defined at schema level. 
 * The call to a method will follow the prototype chain of the component and
 * at each level it finds if there is a behahior for the corresponding method (state).
 * 
 */


// create the system
monoco.system("example15");

// create the model
monoco.require('metamodel').schema({
    "_name": "PersonSchema",
    "_inherit": ["MonocoComponentSchema"], // you need to inherit from MonocoComponentSchema to have the 'on' method
    "description": "string",
    "firstName": "property",
    "lastName": "property",
    "getFullName": "method"
});

monoco.require('metamodel').schema({
    "_name": "Person",
    "_schema": "PersonSchema",
    "_inherit": ["MonocoComponent"], // you need to inherit from MonocoComponent to have the 'on' method
    "description": "a person",
    "firstName": {
        "type": "string",
        "readOnly": false,
        "mandatory": true,
        "default": ""
    },
    "lastName": {
        "type": "string",
        "readOnly": false,
        "mandatory": true,
        "default": ""
    },
    "getFullName": {
        "result": "string"
    }
});

monoco.require('metamodel').schema({
    "_name": "TeacherSchema",
    "_inherit": ["PersonSchema"] // inheritance is set at metaclass schema level
});

monoco.require('metamodel').schema({
    "_name": "Teacher",
    "_schema": "PersonSchema",
    "_inherit": ["Person"], // inheritance is set at class schema level
    "description": "a teacher"
});

monoco.require('metamodel').create();

// add some code
monoco.system().on('main', function () {

    var Person = this.require('Person');

    // 'getFullName' method is implemented for Person
    Person.on('getFullName', function () {
        return this.firstName() + ' ' + this.lastName();
    });

    var Teacher = this.require('Teacher');

    var eikichi = new Teacher({
        "firstName": "Eikichi",
        "lastName": "Onizuka"
    });

    console.log(eikichi.getFullName());
});

// run the system
monoco.system().main();