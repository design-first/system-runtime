/**
 * Example 02 - Export "hello world" example as a system.
 *
 */


// create the system
monoco.system('example02');

// create the model
var metamodel = monoco.require('metamodel');

metamodel.schema({
    "_name": "Example02Schema",
    "_inherit": ["MonocoComponentSchema"],
    "hello": "method"
});

metamodel.schema({
    "_name": "Example02",
    "_schema": "Example02Schema",
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
var Example02 = monoco.require('Example02');

Example02.on('hello', function (name) {
    return 'Hello ' + name + '!';
});

// create the component
var example = new Example02();
var message = example.hello('world');

console.log(message);

// export the system. All the models, components and behaviors will be exported
console.log(monoco.require('db').system());