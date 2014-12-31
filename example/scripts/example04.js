/**
 * Example 04 - Export a system with a main method
 *
 */


// create the system
var system = monoco.system('example04');

// create the model
var metamodel = monoco.require('metamodel');

metamodel.schema({
    "_name": "Example04Schema",
    "_inherit": ["MonocoComponentSchema"],
    "hello": "method"
});

metamodel.schema({
    "_name": "Example04",
    "_schema": "Example04Schema",
    "_inherit": ["MonocoComponent"],
    "hello": {
        "params": [
            {
                "name": "name",
                "type": "string"
            }
        ],
        "result": "string"
    }
});

metamodel.create();

// add the behavior
var Example04 = monoco.require('Example04');

Example04.on('hello', function (name) {
    return 'Hello ' + name + '!';
});

// add the code in the main method of the system
system.on('main', function () {
    var Example04 = this.require('Example04');

    var example04 = new Example04();
    var message = example04.hello('world');
    
    console.log(message);
});

// execute the code
system.main();

// export the system. All the models, components and behaviors will be exported
console.log(monoco.require('db').system());