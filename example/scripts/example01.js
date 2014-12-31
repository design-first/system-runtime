/**
 * Example 01 - A basic "hello world".
 * 
 */


// create the model
var metamodel = monoco.require('metamodel');

metamodel.schema({
    "_name": "Example01Schema",
    "_inherit": ["MonocoComponentSchema"],
    "hello": "method"
});

metamodel.schema({
    "_name": "Example01",
    "_schema": "Example01Schema",
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

// require the class
var Example01 = monoco.require('Example01');

// add the behavior
Example01.on('hello', function (name) {
    return 'Hello ' + name + '!';
});

// create the component 
var example = new Example01();
var message = example.hello('world');

console.log(message);