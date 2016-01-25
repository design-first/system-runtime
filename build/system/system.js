/*
 * SyrupJS
 * The System Runtime Platform
 * http://syrupjs.systemdesigner.io
 * @ecarriou
 *  
 * Copyright (c) 2016 Erwan Carriou
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. 
 */

/**
 * This module contains syrup core system.
 *
 * @module syrup
 * @submodule syrup-system
 * @class syrup-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * syrup core system
 * @property {SyrupSystem} system
 */
var system = {
    "name": "syrup",
    "version": "0.9.2",
    "description": "The System Runtime Platform",
    "_id": "e89c617b6b15d24",
    "schemas": {
        "SyrupSchema": {
            "load": "method",
            "ready": "event",
            "_id": "SyrupSchema",
            "_name": "SyrupSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "system": "method",
            "warning": "event"
        },
        "Syrup": {
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
            "_id": "Syrup",
            "_name": "Syrup",
            "_schema": "SyrupSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupBehavior": {
            "_id": "SyrupBehavior",
            "_name": "SyrupBehavior",
            "_schema": "SyrupBehaviorSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupBehaviorSchema": {
            "_id": "SyrupBehaviorSchema",
            "_name": "SyrupBehaviorSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "SyrupChannel": {
            "_id": "SyrupChannel",
            "_name": "SyrupChannel",
            "_schema": "SyrupChannelSchema",
            "_inherit": [
                "SyrupComponent",
                "SyrupChannelEvent"
            ],
            "_core": true,
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "SyrupChannelEvent": {
            "_id": "SyrupChannelEvent",
            "_name": "SyrupChannelEvent",
            "_schema": "SyrupChannelEventSchema"
        },
        "SyrupChannelEventSchema": {
            "_id": "SyrupChannelEventSchema",
            "_name": "SyrupChannelEventSchema"
        },
        "SyrupChannelSchema": {
            "_id": "SyrupChannelSchema",
            "_name": "SyrupChannelSchema",
            "_inherit": [
                "SyrupComponentSchema",
                "SyrupChannelEventSchema"
            ],
            "_core": true,
            "send": "event"
        },
        "SyrupClassInfo": {
            "_id": "SyrupClassInfo",
            "_name": "SyrupClassInfo",
            "_schema": "SyrupClassInfoSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupClassInfoSchema": {
            "_id": "SyrupClassInfoSchema",
            "_name": "SyrupClassInfoSchema",
            "_inherit": [
                "SyrupComponentSchema"
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
        "SyrupComponent": {
            "_id": "SyrupComponent",
            "_name": "SyrupComponent",
            "_schema": "SyrupComponentSchema",
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
                "type": "@SyrupClassInfo",
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
        "SyrupComponentSchema": {
            "_id": "SyrupComponentSchema",
            "_name": "SyrupComponentSchema",
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "SyrupDatabase": {
            "_id": "SyrupDatabase",
            "_name": "SyrupDatabase",
            "_schema": "SyrupDatabaseSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupDatabaseSchema": {
            "_id": "SyrupDatabaseSchema",
            "_name": "SyrupDatabaseSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "SyrupMessage": {
            "_id": "SyrupMessage",
            "_name": "SyrupMessage",
            "_schema": "SyrupMessageSchema",
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
        "SyrupMessageSchema": {
            "_id": "SyrupMessageSchema",
            "_name": "SyrupMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "SyrupMetamodel": {
            "_id": "SyrupMetamodel",
            "_name": "SyrupMetamodel",
            "_schema": "SyrupMetamodelSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupMetamodelSchema": {
            "_id": "SyrupMetamodelSchema",
            "_name": "SyrupMetamodelSchema",
            "_inherit": [
                "SyrupComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "SyrupState": {
            "_id": "SyrupState",
            "_name": "SyrupState",
            "_schema": "SyrupStateSchema",
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
        "SyrupStateSchema": {
            "_id": "SyrupStateSchema",
            "_name": "SyrupStateSchema",
            "_core": true,
            "name": "property",
            "parameters": "property"
        },
        "SyrupSystem": {
            "_id": "SyrupSystem",
            "_name": "SyrupSystem",
            "_schema": "SyrupSystemSchema",
            "_inherit": [
                "SyrupComponent"
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
        "SyrupSystemSchema": {
            "_id": "SyrupSystemSchema",
            "_name": "SyrupSystemSchema",
            "_inherit": [
                "SyrupComponentSchema"
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
            "component": "syrup",
            "state": "load",
            "action": "function load(url, async) {\n    var xhr = null,\n    callbackLoad = null;\n    xhr = new XMLHttpRequest();\n    \n    callbackLoad = function callbackLoad(system) {\n        var sysId = $db.system(system),\n        sys = $component.get(sysId),\n        systems = document.querySelectorAll('link[rel=system]'),\n        nbSubsystem = $db.SyrupSystem.find({\n            'subsystem': true\n        }); \n        if (sys) {\n            sys.main();\n        } \n        if (systems.length + 1 + nbSubsystem.length === $db.SyrupSystem.count()) {\n            $component.get('syrup').ready();\n        }\n    };\n    \n    if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    callbackLoad(JSON.parse(xhr.response));\n                }\n            }\n        };\n        xhr.send(null);\n    } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n            callbackLoad(JSON.parse(xhr.response));\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {\n    var subsystems = [],\n    systems = [],\n    system = null,\n    i = 0,\n    length = 0;\n    \n    subsystems = $db.SyrupSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('syrup').load(system.href, false);\n            } else {\n                this.require('syrup').load(system.href, true);\n            }\n        }\n        if (length === 0) {\n            this.require('syrup').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1375319b4a10504": {
            "_id": "1375319b4a10504",
            "component": "Syrup",
            "state": "error",
            "action": "function error(data) {\n    console.error('syrup: ' + data.message, data.error);\n}",
            "core": true
        },
        "16a711a3ef1e7fa": {
            "_id": "16a711a3ef1e7fa",
            "component": "Syrup",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('SyrupSystem');\n        system = new System(conf);\n    } else {\n        result = $db.SyrupSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1368510af819590": {
            "_id": "1368510af819590",
            "component": "Syrup",
            "state": "warning",
            "action": "function warning(message) {\n    console.warn('syrup: ' + message);\n}",
            "core": true
        },
        "1a6e41371d1ca60": {
            "_id": "1a6e41371d1ca60",
            "component": "SyrupClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "14469152cb1280c": {
            "_id": "14469152cb1280c",
            "component": "SyrupClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "193ef1f5b6180e6": {
            "_id": "193ef1f5b6180e6",
            "component": "SyrupClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "18a6d16c4c176bd": {
            "_id": "18a6d16c4c176bd",
            "component": "SyrupClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "1d10113518199d0": {
            "_id": "1d10113518199d0",
            "component": "SyrupClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "105fb15e2b13a1f": {
            "_id": "105fb15e2b13a1f",
            "component": "SyrupClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "18d3a19ae916cf8": {
            "_id": "18d3a19ae916cf8",
            "component": "SyrupClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1cd2e1dbbe19816": {
            "_id": "1cd2e1dbbe19816",
            "component": "SyrupClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "199e81bb871a859": {
            "_id": "199e81bb871a859",
            "component": "SyrupComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1dfd5199d61db88": {
            "_id": "1dfd5199d61db88",
            "component": "SyrupComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) {\n        if ($metamodel.isValidState(state, this.constructor.name)) {\n            $behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state});\n        } else { $helper.getSyrup().warning({ \"message\":\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"}); \n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1aec215fc111b02": {
            "_id": "1aec215fc111b02",
            "component": "SyrupComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "14134143c615504": {
            "_id": "14134143c615504",
            "component": "SyrupDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Syrup') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1b25d1295914b50": {
            "_id": "1b25d1295914b50",
            "component": "SyrupDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "147c016938199cd": {
            "_id": "147c016938199cd",
            "component": "SyrupDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1410814bc011e64": {
            "_id": "1410814bc011e64",
            "component": "SyrupMetamodel",
            "state": "create",
            "action": "function create() {\n    $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "17bcf1d54e11d93": {
            "_id": "17bcf1d54e11d93",
            "component": "SyrupMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "121d91e9611d6fd": {
            "_id": "121d91e9611d6fd",
            "component": "SyrupMetamodel",
            "state": "type",
            "action": "function type(type) {\n    $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1ceea11fb113cfb": {
            "_id": "1ceea11fb113cfb",
            "component": "SyrupSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Syrup": {
            "syrup": {
                "_id": "syrup",
                "version": "0.9.2"
            }
        },
        "SyrupDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "SyrupMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "SyrupSystem": {
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
 * This module contains syrup core system.
 *
 * @module syrup
 * @submodule syrup-system
 * @class syrup-system
 * @static 
 */


/**
 * syrup core system
 * @property {SyrupSystem} system
 */
exports.system = system;
