/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * monoco core system
 * @property {MonocoSystem} system
 */
var system = {
    "name": "monoco",
    "version": "0.8.3",
    "description": "A Model and a NoSQL Database for Components",
    "_id": "e89c617b6b15d24",
    "schemas": {
        "MonocoSchema": {
            "load": "method",
            "ready": "event",
            "_id": "MonocoSchema",
            "_name": "MonocoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "system": "method",
            "warning": "event"
        },
        "Monoco": {
            "load": {
                "params": [{
                    "name": "url",
                    "type": "string"
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }]
            },
            "ready": {},
            "_id": "Monoco",
            "_name": "Monoco",
            "_schema": "MonocoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "warning": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "system": {
                "params": [{
                    "name": "name",
                    "type": "string",
                    "mandatory": false
                }],
                "result": "object"
            }
        },
        "MonocoBehavior": {
            "_id": "MonocoBehavior",
            "_name": "MonocoBehavior",
            "_schema": "MonocoBehaviorSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "core": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "useCoreAPI": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "component": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "action": {
                "type": "javascript",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "MonocoBehaviorSchema": {
            "_id": "MonocoBehaviorSchema",
            "_name": "MonocoBehaviorSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "MonocoChannel": {
            "_id": "MonocoChannel",
            "_name": "MonocoChannel",
            "_schema": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponent",
                "MonocoChannelEvent"
            ],
            "_core": true,
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "MonocoChannelEvent": {
            "_id": "MonocoChannelEvent",
            "_name": "MonocoChannelEvent",
            "_schema": "MonocoChannelEventSchema"
        },
        "MonocoChannelEventSchema": {
            "_id": "MonocoChannelEventSchema",
            "_name": "MonocoChannelEventSchema"
        },
        "MonocoChannelSchema": {
            "_id": "MonocoChannelSchema",
            "_name": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponentSchema",
                "MonocoChannelEventSchema"
            ],
            "_core": true,
            "send": "event"
        },
        "MonocoClassInfo": {
            "_id": "MonocoClassInfo",
            "_name": "MonocoClassInfo",
            "_schema": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "metamodel": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "model": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            },
            "property": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "properties": {
                "result": "array"
            },
            "method": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "methods": {
                "result": "array"
            },
            "collection": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "collections": {
                "result": "array"
            },
            "event": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "events": {
                "result": "array"
            }
        },
        "MonocoClassInfoSchema": {
            "_id": "MonocoClassInfoSchema",
            "_name": "MonocoClassInfoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "collections": "method",
            "collection": "method",
            "event": "method",
            "events": "method"
        },
        "MonocoComponent": {
            "_id": "MonocoComponent",
            "_name": "MonocoComponent",
            "_schema": "MonocoComponentSchema",
            "_core": true,
            "on": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "handler",
                    "type": "function"
                }, {
                    "name": "useCoreAPI",
                    "type": "boolean",
                    "mandatory": false
                }]
            },
            "off": {
                "params": [{
                    "name": "state",
                    "type": "string"
                }, {
                    "name": "behaviorId",
                    "type": "string",
                    "mandatory": false
                }]
            },
            "require": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "destroy": {
                "params": []
            },
            "classInfo": {
                "type": "@MonocoClassInfo",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "init": {
                "params": [{
                    "name": "conf",
                    "type": "object"
                }]
            },
            "error": {
                "params": [{
                    "name": "data",
                    "type": "errorParam"
                }]
            }
        },
        "MonocoComponentSchema": {
            "_id": "MonocoComponentSchema",
            "_name": "MonocoComponentSchema",
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "MonocoDatabase": {
            "_id": "MonocoDatabase",
            "_name": "MonocoDatabase",
            "_schema": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "system": {
                "params": [{
                    "name": "system",
                    "type": "object",
                    "mandatory": false
                }],
                "result": "string"
            },
            "subsystem": {
                "params": [{
                    "name": "params",
                    "type": "object"
                }],
                "result": "string"
            },
            "collections": {
                "result": "object"
            },
            "insert": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "object"
                }]
            },
            "update": {
                "params": [{
                    "name": "schema",
                    "type": "string"
                }, {
                    "name": "componentId",
                    "type": "string"
                }, {
                    "name": "attributeName",
                    "type": "string"
                }, {
                    "name": "attributeValue",
                    "type": "object"
                }]
            },
            "remove": {
                "params": [{
                    "name": "classId",
                    "type": "string"
                }, {
                    "name": "object",
                    "type": "string"
                }]
            }
        },
        "MonocoDatabaseSchema": {
            "_id": "MonocoDatabaseSchema",
            "_name": "MonocoDatabaseSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "MonocoMessage": {
            "_id": "MonocoMessage",
            "_name": "MonocoMessage",
            "_schema": "MonocoMessageSchema",
            "_core": true,
            "event": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "from": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "data": {
                "type": "array",
                "readOnly": false,
                "mandatory": true,
                "default": []
            }
        },
        "MonocoMessageSchema": {
            "_id": "MonocoMessageSchema",
            "_name": "MonocoMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "MonocoMetamodel": {
            "_id": "MonocoMetamodel",
            "_name": "MonocoMetamodel",
            "_schema": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }]
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }]
            },
            "create": {
                "params": []
            }
        },
        "MonocoMetamodelSchema": {
            "_id": "MonocoMetamodelSchema",
            "_name": "MonocoMetamodelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "MonocoState": {
            "_id": "MonocoState",
            "_name": "MonocoState",
            "_schema": "MonocoStateSchema",
            "_class": false,
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "parameters": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            }
        },
        "MonocoStateSchema": {
            "_id": "MonocoStateSchema",
            "_name": "MonocoStateSchema",
            "_core": true,
            "name": "property",
            "parameters": "property"
        },
        "MonocoSystem": {
            "_id": "MonocoSystem",
            "_name": "MonocoSystem",
            "_schema": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "name": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            },
            "master": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "subsystem": {
                "type": "boolean",
                "readOnly": false,
                "mandatory": false,
                "default": false
            },
            "version": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "0.0.1"
            },
            "description": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "schemas": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "behaviors": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "types": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "components": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "ready": {},
            "sync": {},
            "main": {}
        },
        "MonocoSystemSchema": {
            "_id": "MonocoSystemSchema",
            "_name": "MonocoSystemSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "sync": "method",
            "main": "method",
            "ready": "event"
        }
    },
    "types": {
        "html": {
            "name": "html",
            "type": "string",
            "core": true
        },
        "css": {
            "name": "css",
            "type": "string",
            "core": true
        },
        "collection": {
            "name": "collection",
            "type": "object",
            "schema": {
                "type": {
                    "type": [
                        "string"
                    ],
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "errorParam": {
            "name": "errorParam",
            "type": "object",
            "schema": {
                "message": {
                    "type": "string",
                    "mandatory": true
                },
                "error": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "event": {
            "name": "event",
            "type": "object",
            "schema": {
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "javascript": {
            "name": "javascript",
            "type": "string",
            "core": true
        },
        "message": {
            "name": "message",
            "type": "object",
            "schema": {
                "event": {
                    "type": "string",
                    "mandatory": true
                },
                "from": {
                    "type": "string",
                    "mandatory": false
                },
                "data": {
                    "type": "object",
                    "mandatory": true
                }
            },
            "core": true
        },
        "method": {
            "name": "method",
            "type": "object",
            "schema": {
                "result": {
                    "type": "string",
                    "mandatory": false
                },
                "params": {
                    "type": [
                        "parameter"
                    ],
                    "mandatory": false
                }
            },
            "core": true
        },
        "parameter": {
            "name": "parameter",
            "type": "object",
            "schema": {
                "name": {
                    "type": "string",
                    "mandatory": true
                },
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": false
                },
                "default": {
                    "type": "@type",
                    "mandatory": false
                }
            },
            "core": true
        },
        "property": {
            "name": "property",
            "type": "object",
            "schema": {
                "type": {
                    "type": "string",
                    "mandatory": true
                },
                "readOnly": {
                    "type": "boolean",
                    "mandatory": true
                },
                "mandatory": {
                    "type": "boolean",
                    "mandatory": true
                },
                "default": {
                    "type": "@type",
                    "mandatory": true
                }
            },
            "core": true
        }
    },
    "behaviors": {
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "monoco",
            "state": "load",
            "action": "function load(url, async) {\n    var xhr = null,\n    callbackLoad = null;\n    xhr = new XMLHttpRequest();\n    \n    callbackLoad = function callbackLoad(system) {\n        var sysId = $db.system(system),\n        sys = $component.get(sysId),\n        systems = document.querySelectorAll('link[rel=system]'),\n        nbSubsystem = $db.MonocoSystem.find({\n            'subsystem': true\n        }); \n        if (sys) {\n            sys.main();\n        } \n        if (systems.length + 1 + nbSubsystem.length === $db.MonocoSystem.count()) {\n            $component.get('monoco').ready();\n        }\n    };\n    \n    if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    callbackLoad(JSON.parse(xhr.response));\n                }\n            }\n        };\n        xhr.send(null);\n    } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n            callbackLoad(JSON.parse(xhr.response));\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {\n    var subsystems = [],\n    systems = [],\n    system = null,\n    i = 0,\n    length = 0;\n    \n    subsystems = $db.MonocoSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('monoco').load(system.href, false);\n            } else {\n                this.require('monoco').load(system.href, true);\n            }\n        }\n        if (length === 0) {\n            this.require('monoco').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1c2f41acb315c8c": {
            "_id": "1c2f41acb315c8c",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) {\n    console.error('monoco: ' + data.message, data.error);\n}",
            "core": true
        },
        "13bab17ef013b8a": {
            "_id": "13bab17ef013b8a",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('MonocoSystem');\n        system = new System(conf);\n    } else {\n        result = $db.MonocoSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "174381507119687": {
            "_id": "174381507119687",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) {\n    console.warn('monoco: ' + message);\n}",
            "core": true
        },
        "1ae2318e731d752": {
            "_id": "1ae2318e731d752",
            "component": "MonocoClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "1186c141a51599e": {
            "_id": "1186c141a51599e",
            "component": "MonocoClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "1c7f31751112a50": {
            "_id": "1c7f31751112a50",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "12e951cdaa1e7dc": {
            "_id": "12e951cdaa1e7dc",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "1011c161d21748a": {
            "_id": "1011c161d21748a",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "1ea35140d5159f5": {
            "_id": "1ea35140d5159f5",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1b71c16ec7135e2": {
            "_id": "1b71c16ec7135e2",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "111961a1471bb58": {
            "_id": "111961a1471bb58",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1bc2e1a34e1b349": {
            "_id": "1bc2e1a34e1b349",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "12c4b1bb8d130c5": {
            "_id": "12c4b1bb8d130c5",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) {\n        if ($metamodel.isValidState(state, this.constructor.name)) {\n            $behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state});\n        } else { $helper.getMonoco().warning({ \"message\":\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"}); \n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1063f1f67d1196d": {
            "_id": "1063f1f67d1196d",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1fea61d6521c94a": {
            "_id": "1fea61d6521c94a",
            "component": "MonocoDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Monoco') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f4c216ebc1401e": {
            "_id": "1f4c216ebc1401e",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1df5b1ecbd1a4a8": {
            "_id": "1df5b1ecbd1a4a8",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f1511041a12190": {
            "_id": "1f1511041a12190",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() {\n    $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1cd01165a911d04": {
            "_id": "1cd01165a911d04",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1abb01ed9b1a9d5": {
            "_id": "1abb01ed9b1a9d5",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) {\n    $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "178e4178b116350": {
            "_id": "178e4178b116350",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Monoco": {
            "monoco": {
                "_id": "monoco",
                "version": "0.8.3"
            }
        },
        "MonocoDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "MonocoMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "MonocoSystem": {
            "133421d0c313d2d": {
                "_id": "133421d0c313d2d",
                "name": "web",
                "version": "0.1.0",
                "description": "Add behaviors for web",
                "subsystem": true,
                "master": false
            },
            "1f6ff194df1c37a": {
                "_id": "1f6ff194df1c37a",
                "name": "webType",
                "version": "0.1.0",
                "description": "Add types for web",
                "subsystem": true,
                "master": false
            }
        }
    }
};

/* exports  */


/**
 * This module contains monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static 
 */


/**
 * monoco core system
 * @property {MonocoSystem} system
 */
exports.system = system;
