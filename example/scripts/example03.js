/**
 * Example 03 - Import the "hello world" example as a system
 * 
 */


// the system as it was exported in example 02
var exportedSystem = {
    "schemas": {
        "Example02Schema": {
            "_name": "Example02Schema",
            "_inherit": ["MonocoComponentSchema"],
            "hello": "method",
            "_id": "Example02Schema"
        },
        "Example02": {
            "_name": "Example02",
            "_schema": "Example02Schema",
            "_inherit": ["MonocoComponent"],
            "hello": {
                "params": [{
                        "name": "name",
                        "type": "string"
                    }],
                "result": "string"
            },
            "_id": "Example02"
        }
    },
    "types": {},
    "behaviors": {
        "1c6af17d801bdee": {
            "_id": "1c6af17d801bdee",
            "component": "Example02",
            "state": "hello",
            "action": "function (name) {\n    return 'Hello ' + name + '!';\n}",
            "useCoreAPI": false
        }
    },
    "components": {
        "Example02": {
            "1cb261be7919a16": {
                "classInfo": "Example02Info",
                "_id": "1cb261be7919a16"
            }
        }
    },
    "name": "example02",
    "version": "0.0.1",
    "description": "",
    "_id": "18bc51ce911d94a"
};

// import the system
monoco.require('db').system(exportedSystem);

// find the component
var example02 = monoco.require('Example02');

var message = example02.hello('world');

console.log(message);