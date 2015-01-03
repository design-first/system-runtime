!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.monoco=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module contains the Monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static
 */

'use strict';


/* Public properties */


/*
 * The Monoco core system
 * @property {MonocoSystem} system
 */
var system = {
    "name": "monoco",
    "version": "0.1.2",
    "description": "A Model and a NoSQL Database for your Components",
    "_id": "e89c617b6b15d24",
    "schemas": {
        "Monoco": {
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
            "find": {
                "params": [{
                    "name": "Class",
                    "type": "string"
                }, {
                    "name": "query",
                    "type": "object",
                    "mandatory": false,
                    "default": {}
                }],
                "result": "array"
            },
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
            },
            "ready": {}
        },
        "MonocoBehavior": {
            "_id": "MonocoBehavior",
            "_name": "MonocoBehavior",
            "_schema": "MonocoBehaviorSchema",
            "_core": true,
            "_class": false,
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
                "type": "string",
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
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
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
            "on": "method",
            "classInfo": "property",
            "off": "method",
            "require": "method",
            "destroy": "event",
            "init": "event",
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
            "insert": "event",
            "update": "event",
            "remove": "event"
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
        "MonocoSchema": {
            "_id": "MonocoSchema",
            "_name": "MonocoSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "find": "method",
            "load": "method",
            "system": "method",
            "warning": "event",
            "ready": "event"
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
            }
        },
        "MonocoStateSchema": {
            "_id": "MonocoStateSchema",
            "_name": "MonocoStateSchema",
            "_core": true,
            "name": "property"
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
            "ready": "event",
            "sync": "method",
            "main": "event"
        }
    },
    "types": {
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
            "action": "function load(url, async) { var xhr = null, callbackLoad = null; xhr = new XMLHttpRequest(); callbackLoad = function callbackLoad(system) { var sysId = $db.system(system); var sys = $component.get(sysId); if (sys) { sys.main(); } }; if (async) { xhr.open('GET', url, true); xhr.onreadystatechange = function () { if (xhr.readyState === 4) { if (xhr.status === 200) { callbackLoad(JSON.parse(xhr.response)); } } }; xhr.send(null); } else { xhr.open('GET', url, false); xhr.send(null); if (xhr.status === 200) { callbackLoad(JSON.parse(xhr.response)); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "monoco",
            "state": "ready",
            "action": "function ready() { var systems = [], system = null, i = 0, length = 0; if (typeof document !== 'undefined') { systems = document.querySelectorAll('link[rel=system]'); length = systems.length; for (i = 0; i < length; i++) { system = systems[i]; this.load(system.href, false); } } }",
            "core": true
        },
        "12d1c1d42315102": {
            "_id": "12d1c1d42315102",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) { console.error('monoco: ' + data.message, data.error); }",
            "core": true
        },
        "10b8d126f3189b1": {
            "_id": "10b8d126f3189b1",
            "component": "Monoco",
            "state": "find",
            "action": "function find(Class, query) { var documents = [], components = [], component = null, i = 0, length = 0; if ($db[Class]) { documents = $db[Class].find(query); length = documents.length; for (i = 0; i < length; i++) { component = $component.get(documents[i]._id); if (component) { components.push(component); } } } return components; }",
            "core": true,
            "useCoreAPI": true
        },
        "1bc141642118f09": {
            "_id": "1bc141642118f09",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) { var System = null, system = {}, result = [], conf = {}; if (name) { conf.master = true; conf.name = name; System = monoco.require('MonocoSystem'); system = new System(conf); } else { result = monoco.find('MonocoSystem', {'master': true}); if (result.length) { system = result[0]; } } return system; }",
            "core": true
        },
        "1f41c11bbe17f3a": {
            "_id": "1f41c11bbe17f3a",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) { console.warn('monoco: ' + message); }",
            "core": true
        },
        "12491129c21b0e1": {
            "_id": "12491129c21b0e1",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) { var result = {}; if (this.metamodel()[name] === 'event') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "18cd516e94191f7": {
            "_id": "18cd516e94191f7",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'event') { result.push(item); } } return result; }",
            "core": true
        },
        "14abc104b712246": {
            "_id": "14abc104b712246",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) { var result = {}; if (this.metamodel()[name] === 'method') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1b5641dcc417b07": {
            "_id": "1b5641dcc417b07",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'method') { result.push(item); } } return result; }",
            "core": true
        },
        "16eb11912719983": {
            "_id": "16eb11912719983",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'property') { result.push(item); } } return result; }",
            "core": true
        },
        "163d115ac71adf1": {
            "_id": "163d115ac71adf1",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) { var result = {}; if (this.metamodel()[name] === 'property') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "134f1176381a513": {
            "_id": "134f1176381a513",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() { $component.destroy(this.id()); }",
            "core": true,
            "useCoreAPI": true
        },
        "1adde1fd7415e10": {
            "_id": "1adde1fd7415e10",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) { var args = [], i = 0, length = 0; length = arguments.length; for (i = 0; i < length - 5; i++) { args.push(arguments[i]); } if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) { if ($metamodel.isValidState(state, this.constructor.name)) {$behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state}); } else { $helper.getMonoco().warning(\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "120ea1b49914275": {
            "_id": "120ea1b49914275",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) { return $component.get(id); }",
            "core": true,
            "useCoreAPI": true
        },
        "170001fb2712478": {
            "_id": "170001fb2712478",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) { return $db.subsystem(params); }",
            "core": true,
            "useCoreAPI": true
        },
        "13bd01e7121a6f9": {
            "_id": "13bd01e7121a6f9",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) { return $db.system(system); }",
            "core": true,
            "useCoreAPI": true
        },
        "1081b17667153fa": {
            "_id": "1081b17667153fa",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() { $metamodel.create(); }",
            "core": true,
            "useCoreAPI": true
        },
        "1e50d1aa7f14b9b": {
            "_id": "1e50d1aa7f14b9b",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) { $metamodel.schema(schema); }",
            "core": true,
            "useCoreAPI": true
        },
        "1806e143d91a458": {
            "_id": "1806e143d91a458",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) { $metamodel.type(type); }",
            "core": true,
            "useCoreAPI": true
        },
        "1f8e4133ec10c9b": {
            "_id": "1f8e4133ec10c9b",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() { var dump = $db.dump(); this.schemas(dump.schemas); this.types(dump.types); this.behaviors(dump.behaviors); this.components(dump.components); }",
            "core": true,
            "useCoreAPI": true
        },
        "1d86414af71eb1b": {
            "_id": "1d86414af71eb1b",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() { var monoco = $component.get('monoco'); monoco.ready(); }",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Monoco": {
            "monoco": {
                "_id": "monoco",
                "version": "0.1.2"
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
        }
    }
};

/* exports  */


/**
 * This module contains the Monoco core system.
 *
 * @module monoco
 * @submodule monoco-system
 * @class monoco-system
 * @static
 */


/**
 * The Monoco core system
 * @property {MonocoSystem} system
 */
exports.system = system;

},{}],2:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module manages the behaviors of all components. 
 * A behavior is a mecanism that allow users to add actions that will be executed 
 * when a specific state of a component will change.
 * 
 * @module monoco
 * @submodule monoco-behavior
 * @requires monoco-db
 * @requires monoco-helper
 * @class monoco-behavior
 * @static
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');


/* Private properties */


var store = {};


/* Private methods */


/*
 * Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters.
 * @method createFunction
 * @param {String} name default name of the function 
 * @param {String} func a stringified function
 * @param {Boolean} core if true, the behavior will be treated as a monoco core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the function (default false)
 * @return {Function} the created function
 * @private
 */
function createFunction(name, func, core, useCoreAPI) {
    var funcName = '',
    beginBody = -1,
    funcParams = '',
    params = [],
    paramsClean = [],
    funcBody = '',
    header = '',
    action = null;

    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);

    funcName = header.split('(')[0].replace('function', '').trim();
    funcParams = header.split('(')[1].replace(')', '').trim();

    params = funcParams.split(',');
    params.forEach(function (param) {
        paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 1);
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim();

    funcName = funcName || name;

    // for accessing monoco core APIs
    if (useCoreAPI) {
        if (params[0] === '') {
            params = [];
        }
        params.push('$component');
        params.push('$db');
        params.push('$metamodel');
        params.push('$workflow');
        params.push('$behavior');
    }

    if (params[0] !== '') {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " (" + params.join(',') + ") { return new Function('" + params.join("','") + "', body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    } else {
        /* jshint -W054 */
        action = new Function("body", "return function " + funcName + " () { return new Function(body).apply(this, arguments) };")(funcBody);
        /* jshint +W054 */
    }

    return action;
}


/* Public methods */


/*
 * Add a behavior that will be stored in Monoco Database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @return {String} id of the behavior created in Monoco Database
 */
function add(id, state, action, useCoreAPI) {
    var behaviorId = $helper.generateId();

    if (typeof useCoreAPI === 'undefined') {
        useCoreAPI = false;
    }

    store[behaviorId] = action;

    $db.MonocoBehavior.insert({
        "_id": behaviorId,
        "component": id,
        "state": state,
        "action": action.toString(),
        "useCoreAPI": useCoreAPI
    });

    return behaviorId;
}


/*
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
function remove(params) {
    params = params || {};
    params.behaviorId = params.behaviorId || '';
    params.componentId = params.componentId || '';
    params.state = params.state || '';

    if (params.componentId) {
        if (params.behaviorId) {
            $db.MonocoBehavior.remove({
                "_id": params.behaviorId,
                "component": params.componentId,
                "state": params.state
            });
        } else {
            $db.MonocoBehavior.remove({
                "component": params.componentId,
                "state": params.state
            });
        }
    }
}


/*
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
function getActions(id, state) {
    var result = [],
    dbResult = [],
    action = null;

    dbResult = $db.MonocoBehavior.find({
        "component": id,
        "state": state
    });

    dbResult.forEach(function (behavior) {
        action = store[behavior._id];
        if (typeof action === 'undefined') {
            action = createFunction(behavior.state, behavior.action, behavior.core, behavior.useCoreAPI);
            store[behavior._id] = action;
        }
        result.push({
            "core": behavior.core,
            "action": action
        });
    });

    return result;
}


/*
 * Remove all the behaviors stored in memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the behaviors of all components. A behavior is a mecanism that allow users to add action that will be executed 
 * when a specific state of a component will change.
 * 
 * @module monoco
 * @submodule monoco-behavior
 * @requires monoco-db
 * @requires monoco-helper
 * @class monoco-behavior
 * @static
 */


/**
 * Add a behavior that will be stored in Monoco Database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @return {String} id of the behavior created in Monoco Database
 */
exports.add = add;


/**
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
exports.remove = remove;


/**
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
exports.getActions = getActions;


/**
 * Remove all the behaviors stored in memory.
 * @method clear
 */
exports.clear = clear;
},{"./db.js":4,"./helper.js":5}],3:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module manages the components. 
 * It is the factory of all the components that are created by Monoco.
 * 
 * @module monoco
 * @submodule monoco-component
 * @requires monoco-workflow
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-component
 * @static 
 */

'use strict';

var $workflow = require('./workflow.js');
var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $helper = require('./helper.js');
var $log = require('./log.js');


/* Private properties */


var PROPERTY_TYPE = 'property',
COLLECTION_TYPE = 'collection',
METHOD_TYPE = 'method',
EVENT_TYPE = 'event',
store = {};


/* Private methods */


/*
 * Sub class to override push and pop method of Array Class.
 * @class monocoArray
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 */
function monocoArray(conf) {
    var arr = [],
    arrDb = [],
    classId = '',
    type = '';

    conf = conf || {};
    classId = conf.classId || '';
    type = conf.type || '';
    arrDb = conf.arr || [];

    arrDb.forEach(function (val) {
        if (type.indexOf('@') !== -1) {
            arr.push(monoco.require(val));
        } else {
            arr.push(val);
        }
    });

    arr.push = function (val) {
        if (val && (val.constructor.name === classId || $metamodel.chekSchema(val, classId))) {
            this[this.length] = val;
            arrDb.push(val.id());
        }
    };

    arr.pop = function () {
        var result = null;
        arrDb.pop();
        if (this.length !== 0) {
            result = this.splice(this.length - 1, 1);
        } else {
            result = this;
        }
        return result;
    };

    /* jshint -W103 */
    arr.__proto__ = monocoArray.prototype;
    /* jshint +W103 */
    return arr;
}

/* jshint -W058 */
monocoArray.prototype = new Array;
/* jshint +W058 */


/*
 * Get all the names of method parameters.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} all the names of method parameters of the class
 * @private
 */
function getParamNames(id, methodName) {
    var params = [],
    result = [],
    length = 0,
    i = 0;

    params = $metamodel.get(id)[methodName].params;
    if (params) {
        length = params.length;
        for (i = 0; i < length; i++) {
            result.push(params[i].name);
        }
    }
    return result;
}


/*
 * Get all the property of a class.
 * @method getProperties
 * @param {String} id id of the class
 * @return {Array} all the properties of the class
 * @private
 */
function getProperties(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === PROPERTY_TYPE || schema[propNames[i]] === COLLECTION_TYPE) {
            result.push({
                "name": propNames[i],
                "type": model[propNames[i]].type,
                "readOnly": model[propNames[i]].readOnly
            });
        }
    }

    return result;
}


/*
 * Get all the method of a class.
 * @method getMethods
 * @param {String} id id of the class
 * @return {Array} all the methods of the class
 * @private
 */
function getMethods(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === METHOD_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}


/*
 * Get all the event of a class.
 * @method getEvents
 * @param {String} id id of the class
 * @return {Array} all the events of the class
 * @private
 */
function getEvents(id) {
    var model = null,
    schema = null,
    propNames = '',
    length = 0,
    i = 0,
    result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === EVENT_TYPE) {
            result.push(propNames[i]);
        }
    }

    return result;
}


/*
 * Create a new class from a class definition.
 * @method createClasss
 * @param {String} classId name of the class
 * @return {Function} the class
 * @private
 */
function createClass(classId) {
    var body = function (config) {
        config = config || {};
        var body = {};

        if ($metamodel.isValidObject(config, $metamodel.get(classId), true, true)) {
            $metamodel.prepareObject(config, $metamodel.get(classId));
        } else {
            $workflow.stop({
                "error": true,
                "message": "the parameters for creating a component of class '" + classId + "' are not compliant with the model"
            });
        }

        if (typeof config._id === 'undefined') {
            config._id = $helper.generateId();
        }
        store[config._id] = this;

        // id
        body = function () {
            return config._id;
        };
        /* jshint -W054 */
        this.id = new Function("body", "return function id () { return body.call(this) };")(body);
        /* jshint +W054 */

        // classInfo
        config.classInfo = classId + 'Info';

        // create link to db
        $db.store[classId][config._id] = config;

        if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
            $helper.getMonoco().require('db').insert(classId, config);
        }

        Object.freeze(this);

        if (this.init) {
            this.init(config);
        }
    };
    /* jshint -W054 */
    return new Function("body", "return function " + classId + " (config) { body.call(this,config) };")(body);
    /* jshint +W054 */
}


/*
 * Add an id method to a class that will return its id.
 * @method addId
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 */
function addId(Class, classId) {
    var body = function () {
        return classId;
    };
    /* jshint -W054 */
    Class.id = new Function("body", "return function id (prop, val) { return body.call(this, prop, val) };")(body);
    /* jshint +W054 */
}


/*
 * Add properties to a component. All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 * @example
 * laure.age(); // get the age of a person
 * laure.age(22); // set the age of a person
 * @method addProperties
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addProperties(model, Class, classId) {
    var properties = getProperties(model);

    properties.forEach(function property(prop) {
        var body = {},
        propertyName = '',
        propertyType = '',
        propertyReadOnly = '';

        propertyName = prop.name;
        propertyType = prop.type;
        propertyReadOnly = prop.readOnly;

        if (Array.isArray(propertyType)) { // in case of array, return a sub array
            body = function body(position, value) {
                var search = [],
                component = null,
                monocoArr = null,
                val = null;

                if (typeof value === 'undefined') {
                    if (typeof position === 'undefined') {

                        monocoArr = new monocoArray({
                            "classId": classId,
                            "type": propertyType[0],
                            "arr": $db.store[classId][this.id()][propertyName]
                        });

                        return monocoArr;
                    } else {
                        val = $db.store[classId][this.id()][propertyName][position];
                        if (val) {
                            return monoco.require(val);
                        }
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({"_id": this.id()});
                            if (search.length) {
                                component = search[0];
                                component[propertyName][0] = value.id();

                                if ($helper.isMonoco()) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, value.id());
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": arguments
                                });
                            } else {
                                $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                            }
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (position, value) { return body.call(this, position, value) };")(body);
            /* jshint +W054 */
        } else {
            body = function body(value) {
                var search = [],
                component = null,
                propertyValue = null;

                if (typeof value === 'undefined') {
                    component = $db.store[classId][this.id()];
                    if (component) {
                        propertyValue = component[propertyName];

                        if (propertyType.indexOf('@') !== -1) {
                            propertyValue = get(propertyValue);
                        }
                        return propertyValue;
                    } else {
                        $workflow.stop({
                            "error": true,
                            "message": "trying to get the property '" + propertyName + "' on the destroyed component '" + this.id() + "'"
                        });
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({"_id": this.id()});
                            if (search.length) {
                                component = search[0];

                                if (propertyType.indexOf('@') !== -1) {
                                    component[propertyName] = value.id();
                                } else {
                                    component[propertyName] = value;
                                }

                                if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, value);
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": arguments
                                });
                            }
                        } else {
                            $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (value) { return body.call(this,value) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 * @method addMethods
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addMethods(model, Class, classId) {
    var methods = getMethods(model);

    methods.forEach(function method(methodName) {
        var paramsName = getParamNames(classId, methodName),
        params = paramsName.join(','),
        body = function () {
            var result = null;

            result = $workflow.state({
                "component": this.id(),
                "state": methodName,
                "data": arguments
            });

            return result;
        };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add events to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts are compliant with the model.
 * @method addEvents
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addEvents(model, Class, classId) {
    var events = getEvents(model);
    events.forEach(function event(methodName) {
        var paramsName = getParamNames(classId, methodName),
        params = paramsName.join(','),
        body = function () {
            $workflow.state({
                "component": this.id(),
                "state": methodName,
                "data": arguments
            });
        };
        if (params) {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " (" + params + ") { return body.call(this," + params + ") };")(body);
            /* jshint +W054 */
        } else {
            /* jshint -W054 */
            Class.prototype[methodName] = new Function("body", "return function " + methodName + " () { return body.call(this) };")(body);
            /* jshint +W054 */
        }
    });
}


/*
 * Add a on method to a component to add behaviors to the component.
 * @method addOn
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOn(Class, classId) {
    var body = function (state, handler, useCoreAPI) {
        var result = '';
        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                !$metamodel.isEvent(state, classId) &&
                $db.MonocoBehavior.find({
                    "component": this.id(),
                    "state": state}).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    result = $behavior.add(this.id(), state, handler, useCoreAPI);
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return result;
    };
    /* jshint -W054 */
    Class.prototype.on = new Function("body", "return function on (state,handler,useCoreAPI) { return body.call(this,state,handler,useCoreAPI) };")(body);
    /* jshint +W054 */
}


/*
 * Add a on method to a class component to add behaviors to the class.
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOnClass(Class, classId) {
    var body = function (state, handler, useCoreAPI) {
        var result = '';
        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                !$metamodel.isEvent(state, classId) &&
                $db.MonocoBehavior.find({
                    "component": this.id(),
                    "state": state}).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    result = $behavior.add(this.id(), state, handler, useCoreAPI);
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return result;
    };
    /* jshint -W054 */
    Class.on = new Function("body", "return function on (state,handler,useCoreAPI) { return body.call(this, state, handler, useCoreAPI) };")(body);
    /* jshint -W054 */
}


/*
 * Add a off method to a class component to remove behaviors from the class.
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 */
function addOffClass(Class, classId) {
    var body = function (state, behaviorId) {
        if ($workflow.checkParams({
            "component": this,
            "methodName": "off",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                $behavior.remove({
                    "behaviorId": behaviorId,
                    "componentId": classId,
                    "state": state
                });
            } else {
                $log.InvalidStateOff(classId, state);
            }
        }
    };
    /* jshint -W054 */
    Class.off = new Function("body", "return function off (state, behaviorId) { return body.call(this, state, behaviorId) };")(body);
    /* jshint +W054 */
}


/*
 * Add a destroy method to a class component to detroy the class and all the components of the same class.
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 */
function addDestroyClass(Class) {
    var body = function () {
        var id = this.id();
        // if not virtual component
        if ($db[id]) {
            $db[id].remove();
        }

        delete store[id];

        $workflow.state({
            "component": id,
            "state": "destroy"
        });
    };
    /* jshint -W054 */
    Class.destroy = new Function("body", "return function destroy () { return body.call(this) };")(body);
    /* jshint +W054 */
}



/*
 * Add the addClassInfo method on a class.
 * @method addClassInfoClass
 * @param {Object} Class Class
 * @private
 */
function addClassInfoClass(Class) {
    var body = function () {
        return get(this.id() + 'Info');
    };
    /* jshint -W054 */
    Class.classInfo = new Function("body", "return function classInfo () { return body.call(this) };")(body);
    /* jshint +W054 */
}


/*
 * Create a component from its configuration.
 * @method factory
 * @param {JSON} config configuration of the component
 * @return {Component} the created component
 * @private
 */
function factory(config) {
    config = config || {};

    var Class = {},
    classId = '';

    if (typeof config.model === 'undefined') {
        classId = $helper.generateId();
    } else {
        classId = config.model;
    }

    Class = createClass(classId);

    store[classId] = Class;

    addId(Class, classId);

    addProperties(config.model, Class, classId);
    addMethods(config.model, Class, classId);
    addEvents(config.model, Class, classId);

    // add default properties/methods only if the component
    // inherit from MonocoComponent
    if ($metamodel.inheritFrom(classId, 'MonocoComponent')) {
        addOn(Class, classId);
        addOnClass(Class, classId);
        addOffClass(Class, classId);
        addDestroyClass(Class);
        addClassInfoClass(Class);
    }

    Object.freeze(Class);

    return Class;
}


/* Public methods */


/*
 * Get a component by its id.
 * @method get
 * @param {String} id
 * @return {Component}
 */
function get(id) {
    return store[id];
}


/*
 * Create a component from its configuration.
 * @method create
 * @param {Object} config
 * @return {Component}
 */
function create(config) {
    return factory(config);
}

/*
 * Check if the component has for class name className.
 * @method isInstanceOf
 * @param {type} component component
 * @param {type} className name of the class
 * @return {Boolean} true if the component has for class name className  
 */
function isInstanceOf(component, className) {
    var result = false,
    componentClassName = '';

    componentClassName = component.constructor.name;

    if (componentClassName === 'Function') {
        componentClassName = component.name;
    }
    result = component === className;

    return result;
}


/*
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 */
function destroy(id) {
    var component = store[id],
    classId = '';

    if (component) {
        delete store[id];
        classId = component.constructor.name;
        $db[classId].remove({
            "_id": id
        });
    }
}



/*
 * Remove all the components store in the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the components. 
 * It is the factory of all the components that are created by Monoco.
 * 
 * @module monoco
 * @submodule monoco-component
 * @requires monoco-workflow
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-component
 * @static 
 */


/**
 * Create a component from its configuration.
 * @method create
 * @param {Object} config
 * @return {Component}
 */
exports.create = create;


/**
 * Get a component by its id.
 * @method get
 * @param {String} id
 * @return {Component}
 */
exports.get = get;


/**
 * Check if the component has for class name className.
 * @method isInstanceOf
 * @param {type} component component
 * @param {type} className name of the class
 * @return {Boolean} true if the component has for class name className  
 */
exports.isInstanceOf = isInstanceOf;


/**
 * Remove all the components store in memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Destroy a component from its id.
 * @method destroy
 * @param {String} id id of the component to destroy
 * @return {Boolean} if the component has been destroyed
 */
exports.destroy = destroy;
},{"./behavior.js":2,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./workflow.js":10}],4:[function(require,module,exports){
/*
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module manages Monoco Database. <br>
 * Monoco Database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Monoco Database is closely linked to Monoco Metamodel and Monoco Component because: <br>
 * - all operations done by Monoco Database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *  
 * @module monoco
 * @submodule monoco-db
 * @requires monoco-component
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-db
 * @static
 */

'use strict';

var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $helper = require('./helper.js');
var $log = require('./log.js');


/* Private properties */


var store = {},
collections = [],
internalDB = [
    'Monoco',
    'MonocoSchema',
    'MonocoExtendedSchema',
    'MonocoBehavior',
    'MonocoState',
    'MonocoType',
    'MonocoMetamodel',
    'MonocoDatabase',
    'MonocoSystem',
    'MonocoClassInfo'
];


/* Private methods */


/*
 * Test if an object contains another one.
 * @method contains
 * @param {Object} source source object 
 * @param {Object} target otarget bject 
 * @return {Boolean} true if the source object contains the target object
 * @private
 */
function contains(source, target) {
    var result = true,
    property = {};

    for (property in source) {
        if (typeof target[property] === 'undefined' || target[property] !== source[property]) {
            result = false;
            break;
        }
    }
    return result;
}


/** 
 * A collection of documents managed by Monoco. <br>
 * Internal collections manage core objects of Monoco (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class MonocoDatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var MonocoDatabaseCollection = function (name) {
    if ($metamodel.get(name) || internalDB.indexOf(name) !== -1) {
        store[name] = {};
        this.name = name;
        if (internalDB.indexOf(name) === -1) {
            collections.push(name);
        }
    } else {
        $log.invalidCollectionName(name);
    }
};


/**
 * Find a document into the collection.
 * @method find
 * @param {Object|Array} query
 * @return {Array} Array of documents that map the query
 * 
 * @example 
 * $db.Person.find({"name": "laure"}); <br>
 * $db.Person.find({"name": "laure", "age" : 24}); <br>
 * $db.Person.find([{"name": "rene"}, {"name": "robert"}]);
 */
MonocoDatabaseCollection.prototype.find = function (query) {
    var result = [],
    id = '',
    object = {};

    query = query || null;

    if (query && Object.keys(query).length) {
        for (id in store[this.name]) {
            object = store[this.name][id];
            if (contains(query, object)) {
                result.push(object);
            }
        }
    } else {
        for (id in store[this.name]) {
            object = store[this.name][id];
            result.push(object);
        }
    }

    return result;
};


/**
 * Insert an new document into the collection. <br>
 * Before inserting the document, Monoco checks that the document is compliant
 * with its class definition. <br> 
 * Then, after inserting it, we create the component.
 * @method insert
 * @param {Object|Array} document a new object to add
 * @return {Array} array of id created
 * 
 * @example 
 * $db.Person.insert({<br>
 *      "name": "bob", <br>
 *      "firstName": "Saint-Clar", <br>
 *      "age": 43 <br>
 * }); <br>
 */
MonocoDatabaseCollection.prototype.insert = function (document) {
    var doc = [],
    Component = null,
    result = [];

    if (Array.isArray(document)) {
        doc = document;
    } else {
        doc.push(document);
    }

    doc.forEach(function multi_insert(obj) {
        var component = null;
        if (this.name === 'MonocoSchema' || this.name === 'MonocoType' || this.name === 'MonocoExtendedSchema' || $metamodel.isValidObject(obj, $metamodel.get(this.name))) {
            if (typeof obj._id === 'undefined') {
                obj._id = $helper.generateId();
            }

            store[this.name][obj._id] = obj;
            Component = $component.get(this.name);
            if (Component) {
                component = new Component(obj);
                result.push(component.id());
            }

            if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                $helper.getMonoco().require('db').insert(this.name, obj);
            }

        } else {
            $log.invalidDocumentOnDbInsert(obj, this.name);
        }
    }.bind(this));

    return result;
};


/**
 * Update documents into a collection.
 * @method update
 * @param {Object|Array} query query to find the documents to update
 * @param {Object} update update to make
 * @param {Object} options 
 * {Boolean} upsert true if we create a document when no document is found by the query
 * @return {Number} Number of documents updated
 * 
 * @example 
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}); <br>
 * $db.Cars.update([{"code": "AZD-71"}, {"code": "AZD-65"}], {"price": "10000$"}); <br>
 * $db.Cars.update({"code": "AZD-71"}, {"price": "10000$"}, {"upsert": true}); <br>
 */
MonocoDatabaseCollection.prototype.update = function (query, update, options) {
    var docs = this.find(query),
    updated = 0,
    i = 0,
    length = docs.length,
    attributeName = '',
    schema = $metamodel.get(this.name);

    options = options || {};
    if (typeof options.upsert === 'undefined') {
        options.upsert = options.upsert || false;
    }

    if (update) {

        // upsert case
        if (length === 0 && options.upsert) {
            if (query._id) {
                update._id = query._id;
            }
            this.insert(update);
            updated = updated + 1;
        }

        for (i = 0; i < length; i++) {
            for (attributeName in update) {
                if (typeof docs[i][attributeName] !== 'undefined') {
                    if (schema[attributeName] && schema[attributeName].type && $metamodel.isValidType(update[attributeName], schema[attributeName].type)) {
                        docs[i][attributeName] = update[attributeName];
                        updated = updated + 1;
                        if ($helper.isMonoco()) {
                            $helper.getMonoco().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                        }
                    } else {
                        $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName]);
                    }
                }
            }
        }
    }

    return updated;
};


/**
 * Remove a document from the colllection. <br>
 * When a document is removed, the component is destroyed.
 * @method remove
 * @param {Object|Array} query query to find the documents to remove
 * @return {Number} number of documents removed
 * 
 * @example 
 * $db.Cars.remove({"code": "AZD-71"}); <br>
 * $db.Cars.remove([{"code": "AZD-71"}, {"code": "AZD-65"}]); <br>
 */
MonocoDatabaseCollection.prototype.remove = function (query) {
    var result = 0,
    id = '',
    component = null,
    object = {};

    query = query || null;

    if (query && Object.keys(query).length) {

        for (id in store[this.name]) {
            object = store[this.name][id];

            if (contains(query, object)) {
                delete store[this.name][id];
                component = $component.get(id);
                if (component) {
                    component.destroy();
                }
                if ($helper.isMonoco()) {
                    $helper.getMonoco().require('db').remove(this.name, id);
                }
                result++;
            }
        }
    } else {
        for (id in store[this.name]) {
            delete store[this.name][id];
            component = $component.get(id);
            if (component) {
                component.destroy();
            }
            if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                $helper.getMonoco().require('db').remove(this.name, id);
            }
            result++;
        }
    }

    return result;
};


/**
 * Count the number of documents in the collection.
 * @method count
 * @return {Number} number of documents in the collection
 */
MonocoDatabaseCollection.prototype.count = function () {
    var result = 0,
    objectId = '';
    for (objectId in store[this.name]) {
        result++;
    }
    return result;
};


/* Public methods */


/*
 * Create a new {{#crossLink "MonocoDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
function collection(name) {
    exports[name] = new MonocoDatabaseCollection(name);
}


/*
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 */
function dump() {
    var dbDump = {},
    collectionName = '',
    behaviorId = '',
    typeId = '',
    type = null,
    behavior = null,
    schema = null,
    schemaId = '',
    length = 0,
    i = 0;

    // schemas
    dbDump.schemas = {};
    if (exports.MonocoSchema.count()) {
        for (schemaId in store.MonocoSchema) {
            schema = store.MonocoSchema[schemaId];
            if (!schema._core) {
                dbDump.schemas[schemaId] = schema;
            }
        }
    }

    // types
    dbDump.types = {};
    if (exports.MonocoType.count()) {
        for (typeId in store.MonocoType) {
            type = JSON.parse(JSON.stringify(store.MonocoType[typeId]));
            delete type._id;
            if (!type.core) {
                dbDump.types[type.name] = type;
            }
        }
    }

    // behaviors
    dbDump.behaviors = {};
    for (behaviorId in store.MonocoBehavior) {
        behavior = JSON.parse(JSON.stringify(store.MonocoBehavior[behaviorId]));
        if (!behavior.core) {
            dbDump.behaviors[behaviorId] = behavior;
        }
    }

    // components
    dbDump.components = {};
    length = collections.length;
    for (i = 0; i < length; i++) {
        collectionName = collections[i];
        if (exports[collectionName].count()) {
            dbDump.components[collectionName] = store[collectionName];
        }
    }

    return dbDump;
}


/*
 * Import/Export a Monoco System into/from the database
 * @method system
 * @param {JSON} importedSystem a Monoco System to import
 * @return {String} the id of the imported Monoco System or the if of the current Monoco System  
 */
function system(importedSystem) {
    var result = '',
    collectionName = '',
    componentId = '',
    typeName = '',
    schemaName = '',
    behaviorId = '',
    systems = [],
    id = null,
    mastersystem = null,
    behavior = null,
    exportedSystem = {};

    if (importedSystem) { // import

        // add types
        for (typeName in importedSystem.types) {
            $metamodel.type(importedSystem.types[typeName]);
        }

        // add schemas
        for (schemaName in importedSystem.schemas) {
            $metamodel.schema(importedSystem.schemas[schemaName]);
        }

        $metamodel.create();

        //add behaviors
        for (behaviorId in importedSystem.behaviors) {
            exports.MonocoBehavior.insert(importedSystem.behaviors[behaviorId]);
        }

        // add components
        for (collectionName in importedSystem.components) {
            for (componentId in importedSystem.components[collectionName]) {
                exports[collectionName].insert(importedSystem.components[collectionName][componentId]);
            }
        }

        // reset info if already a master system
        systems = exports.MonocoSystem.find({'master': true});
        if (systems.length && systems[0]._id === importedSystem._id) {
            importedSystem.master = true;
        } else {
            importedSystem.master = false;
        }

        // insert the system in DB
        exports.MonocoSystem.insert(importedSystem);

        result = importedSystem._id;

    } else { // export
        exportedSystem = dump();

        // get id of the master system
        systems = exports.MonocoSystem.find({'master': true});

        if (systems.length) {
            mastersystem = systems[0];
            id = mastersystem._id;
            for (behaviorId in exportedSystem.behaviors) {
                behavior = exportedSystem.behaviors[behaviorId];
                if (behavior.state === 'main') {
                    behavior.component = id;
                }
            }

            exportedSystem.name = mastersystem.name;
            exportedSystem.version = mastersystem.version;
            exportedSystem.description = mastersystem.description;
            exportedSystem._id = id;

            result = JSON.stringify(exportedSystem);
        } else {
            $log.masterSystemNotFound();
        }
    }
    return result;
}


/*
 * Export a Monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Monoco sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
function subsystem(params) {
    var system = {},
    result = [],
    defaultName = '',
    i = 0,
    length = 0,
    schema = null,
    type = null,
    behavior = null,
    component = null,
    className = '';

    // default values
    result = monoco.find('MonocoSystem', {
        'master': true
    });
    if (result.length) {
        defaultName = result[0].name();
    }

    system.name = params.name || 'sub_' + defaultName;
    system.version = params.version || '0.0.1';
    system.description = params.description || '';

    system.subsystem = true;

    // schemas
    system.schemas = {};
    if (params.schemas) {
        result = exports.MonocoSchema.find(params.schema);

        length = result.length;
        for (i = 0; i < length; i++) {
            schema = result[i];
            if (!schema._core) {
                system.schemas[schema._id] = schema;
            }
        }
    }

    // types
    system.types = {};
    if (params.types) {
        result = exports.MonocoType.find(params.types);

        length = result.length;
        for (i = 0; i < length; i++) {
            type = result[i];
            if (!type._core) {
                system.types[type._id] = type;
            }
        }
    }

    // behaviors
    system.behaviors = {};
    if (params.behaviors) {
        behavior = exports.MonocoBehavior.find(params.behaviors);

        length = result.length;
        for (i = 0; i < length; i++) {
            behavior = result[i];
            if (!behavior.core) {
                system.behaviors[behavior._id] = behavior;
            }
        }
    }

    // components
    system.components = {};
    if (params.components) {
        for (className in params.components) {
            if (exports[className]) {
                system.components[className] = {};

                result = exports[className].find(params.components[className]);
                length = result.length;
                for (i = 0; i < length; i++) {
                    component = result[i];
                    system.components[className][component._id] = component;
                }
            }
        }
    }

    return JSON.stringify(system);
}


/* exports */


/**
 * This module manages Monoco Database. <br>
 * Monoco Database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Monoco Database is closely linked to Monoco Metamodel because: <br>
 * - all operations done by Monoco Database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *   
 * @module monoco
 * @submodule monoco-db
 * @requires monoco-component
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-db
 * @static
 */


/**
 * Create a new {{#crossLink "MonocoDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
exports.collection = collection;


/**
 * Monoco Database store that list all the collections.
 * @property {JSON} store
 */
exports.store = store;


/**
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 */
exports.dump = dump;


/**
 * Import/Export a Monoco System into/from the database.
 * @method system
 * @param {JSON} importedSystem a Monoco System to import
 * @return {String} the id of the imported Monoco System or the current Monoco System  
 */
exports.system = system;


/**
 * Export a Monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Monoco sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
exports.subsystem = subsystem;
},{"./component.js":3,"./helper.js":5,"./log.js":6,"./metamodel.js":7}],5:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module contains all the functions used by all the modules.
 * 
 * @module monoco
 * @submodule monoco-helper
 * @requires monoco-db
 * @requires monoco-component
 * @class monoco-helper
 * @static
 */


'use strict';

var $db = require('./db.js');
var $component = require('./component.js');


/* Private property */

var monocoRef = null;


/* Public method */


/*
 * Check if a Monoco instance exists
 * @method isMonoco
 * @return {Boolean} true if a Monoco instance exist
 */
function isMonoco() {
    var result = false;

    if ($db.Monoco && $db.Monoco.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the instance of Monoco
 * @method getMonoco
 * @return {Monoco} monoco instance
 */
function getMonoco() {
    var monocoId = '';

    if (!monocoRef) {
        if (isMonoco()) {
            monocoId = $db.Monoco.find()[0]._id;
            monocoRef = $component.get(monocoId);
        } else {
            monocoRef = {
                error: function error(err, data) {
                    console.error('monoco: ' + err, data);
                },
                warning: function warning(message) {
                    console.warn('monoco: ' + message);
                }
            };
        }
    }

    return monocoRef;
}


/*
 * Generate a uid
 * @method generateId
 * @return {String} a uid
 */
function generateId() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }
    return gen() + gen() + gen();
}


/* exports */


/**
 * This module contains all the functions used by all the modules.
 * 
 * @module monoco
 * @submodule monoco-helper
 * @requires monoco-db
 * @requires monoco-component
 * @class monoco-helper
 * @static
 */


/**
 * Get the instance of Monoco
 * @method getMonoco
 * @return {Monoco} monoco instance
 */
exports.getMonoco = getMonoco;


/**
 * Check if a Monoco instance exists
 * @method isMonoco
 * @return {Boolean} true if a Monoco instance exist
 */
exports.isMonoco = isMonoco;


/**
 * Generate a uid
 * @method generateId
 * @return {String} a uid
 */
exports.generateId = generateId;
},{"./component.js":3,"./db.js":4}],6:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module contains all the functions that write a log.
 * 
 * @module monoco
 * @submodule monoco-log
 * @requires monoco-helper
 * @class monoco-log
 * @@static
 */

'use strict';


var $helper = require('./helper.js');


/* Private properties */


var ID = '_id';


/* Public methods */


/*
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
function unknownProperty(propertyName, schema) {
    var message = '';

    if (schema[ID]) {
        message = "unknown property '" + propertyName + "' for the definition of " + schema[ID];
    } else {
        message = "unknown property '" + propertyName + "' for the meta attribute " + JSON.stringify(schema);
    }

    $helper.getMonoco().warning(message);
}


/*
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
function invalidPropertyType(propertyName, type, property) {
    $helper.getMonoco().warning("invalid type for property '" + JSON.stringify(propertyName) + "': expected '" + type + "' instead of '" + typeof property + "'");
}


/*
 * Invalid value for type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
function invalidEnumValue(value, type) {
    $helper.getMonoco().warning("invalid value for the enum value '" + value + "': expected '" + type + "' instead of " + typeof value + "'");
}


/*
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
function invalidClassName(componentId, type, constructorName) {
    $helper.getMonoco().warning("invalid class name for component '" + componentId + "': expected '" + type + "' instead of '" + constructorName + "'");
}


/*
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
function missingProperty(propertyName) {
    $helper.getMonoco().warning("missing property '" + propertyName + "'");
}


/*
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} classSource a class
 * @param {String} classToImp the class to implement
 */
function missingImplementation(classSource, classToImp) {
    $helper.getMonoco().warning("class '" + classSource + "' is missing for the implementation of the class '" + classToImp + "'");
}


/*
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function invalidTypeImp(property, className) {
    $helper.getMonoco().warning("invalid type for property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function missingPropertyImp(property, className) {
    $helper.getMonoco().warning("missing property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
function unknownPropertyImp(property, schema) {
    $helper.getMonoco().warning("unknown property '" + property + "' for the definition of '" + schema[ID] + "'");
}


/*
 * Invalid type definition.
 * @method invalidTypeDefinition
 * @param {Object} def a type definition
 */
function invalidTypeDefinition(def) {
    $helper.getMonoco().warning("can not load the type definition " + def);
}


/*
 * Invalid property name.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
function invalidPropertyName(id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getMonoco().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getMonoco().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, propertyName) {
    $helper.getMonoco().warning("can not set read-only property " + propertyName + " on component '" + id + "'");
}


/*
 * Invalid document on a Monoco Database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidObjectOnInsert(doc, collectionName) {
    $helper.getMonoco().warning("invalid document " + JSON.stringify(doc) + " on an insert operation on collection " + collectionName);
}


/*
 * Invalid property on a Monoco Database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
function invalidPropertyTypeOnDbUpdate(collectionName, id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection " + collectionName + ": expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection " + collectionName + ": expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}


/*
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
function unknownMethod(classId, methodName) {
    $helper.getMonoco().warning("try to call an unknown method '" + methodName + "' for the class '" + classId + "'");
}


/*
 * Try to create an invalid MonocoDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
function invalidCollectionName(name) {
    $helper.getMonoco().warning("invalid name for creating the collection '" + name + "': there is no schema '" + name + "' in the metamodel");
}


/*
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 */
function invalidResultType(id, methodName) {
    $helper.getMonoco().warning("invalid type on the result of method '" + methodName + "' on component '" + id + "'");
}


/*
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId
 */
function unknownComponent(className, componentId) {
    $helper.getMonoco().warning("unkown class component '" + className + "' for component '" + componentId + "'");
}


/*
 * The Monoco workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    $helper.getMonoco().warning('monoco has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @@param {String} methodName name of the component
 */
function invalidParamNumber(id, methodName) {
    $helper.getMonoco().warning("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
function invalidParamType(id, methodName, paramName) {
    $helper.getMonoco().warning("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
    $helper.getMonoco().warning("try to add more than one behavior for the state '" + stateName + "' on component class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
    $helper.getMonoco().warning("try to add a behavior with an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
    $helper.getMonoco().warning("try to remove a behavior from an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The Master system is not found.
 * @method masterSystemNotFound
 */
function masterSystemNotFound() {
    $helper.getMonoco().warning("the master system is not found");
}


/*
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
function invalidType(value, typeName) {
    $helper.getMonoco().warning("invalid type for value '" + JSON.stringify(value) + "': expected '" + typeName + "'");
}


/*
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
function unknownType(value) {
    $helper.getMonoco().warning("unknown type for value '" + JSON.stringify(value) + "'");
}


/*
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
function canNotYetValidate(id, className) {
    $helper.getMonoco().warning("can not yet validate if the component '" + JSON.stringify(id) + "' is an instance of '" + className + "'");
}


/*
 * Component already destroyed.
 * @method componentDestroyed
 * @param {String} id id of the component
 */
function componentDestroyed(id) {
    $helper.getMonoco().warning("can not call a method on component '" + id + "': the component has been destroyed");
}

/* exports */


/**
 * This module contains all the functions that write a log.
 * 
 * @module monoco
 * @submodule monoco-log
 * @requires monoco-helper
 * @class monoco-log
 * @@static
 */


/**
 * A property of a schema is unknown.
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 */
exports.unknownProperty = unknownProperty;


/**
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
exports.invalidPropertyType = invalidPropertyType;


/**
 * Invalid value for a type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
exports.invalidEnumValue = invalidEnumValue;


/**
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
exports.invalidClassName = invalidClassName;


/**
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
exports.missingProperty = missingProperty;


/**
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} classSource a class
 * @param {String} classToImp the class to implement
 */
exports.missingImplementation = missingImplementation;


/**
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.invalidTypeImp = invalidTypeImp;


/**
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
exports.missingPropertyImp = missingPropertyImp;


/**
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
exports.unknownPropertyImp = unknownPropertyImp;


/**
 * Invalid type definition.
 * @method invalidTypeDefinition
 * @param {Object} def a type definition
 */
exports.invalidTypeDefinition = invalidTypeDefinition;


/**
 * Invalid property type.
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
exports.invalidPropertyName = invalidPropertyName;


/**
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
exports.readOnlyProperty = readOnlyProperty;


/**
 * Invalid document on a Monoco Database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
exports.invalidDocumentOnDbInsert = invalidObjectOnInsert;


/**
 * Invalid property on a Monoco Database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
exports.invalidPropertyTypeOnDbUpdate = invalidPropertyTypeOnDbUpdate;


/**
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
exports.unknownMethod = unknownMethod;


/**
 * Try to create an invalid MonocoDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
exports.invalidCollectionName = invalidCollectionName;


/**
 * Invalid result type of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 */
exports.invalidResultType = invalidResultType;


/**
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId
 */
exports.unknownComponent = unknownComponent;


/**
 * The Monoco workflow has been restarted.
 * @method workflowRestarted
 */
exports.workflowRestarted = workflowRestarted;


/**
 * Invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @@param {String} methodName name of the component
 */
exports.invalidParamNumber = invalidParamNumber;


/**
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
exports.invalidParamType = invalidParamType;


/**
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.behaviorNotUnique = behaviorNotUnique;


/**
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOn = invalidStateOn;


/**
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
exports.invalidStateOff = invalidStateOff;


/**
 * The Master system is not found.
 * @method masterSystemNotFound
 */
exports.masterSystemNotFound = masterSystemNotFound;


/**
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
exports.invalidType = invalidType;


/**
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
exports.unknownType = unknownType;


/**
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
exports.canNotYetValidate = canNotYetValidate;


/**
 * Component already destroyed.
 * @method componentDestroyed
 * @param {String} id id of the component
 */
exports.componentDestroyed = componentDestroyed;
},{"./helper.js":5}],7:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module manages Monoco Metamodel. <br>
 * Monoco Metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
 * 
 * @module monoco
 * @submodule monoco-metamodel
 * @requires monoco-db
 * @requires monoco-log
 * @requires monoco-component
 * @requires monoco-workflow
 * @class monoco-metamodel
 * @static
 */

'use strict';

var $db = require('./db.js');
var $log = require('./log.js');
var $component = require('./component.js');
var $workflow = require('./workflow.js');


/* Private properties */


var ID = '_id',
NAME = '_name',
INHERITS = '_inherit',
SCHEMA = '_schema',
CLASS = '_class',
CORE = '_core',
EVENT_TYPE = 'event',
internalTypes = ['property', 'collection', 'method', 'event'],
defaultTypes = ['boolean', 'string', 'number', 'object', 'function', 'array'],
store = {
    metadef: {},
    catalog: {},
    inheritance: {},
    inheritanceTree: {},
    model: {},
    states: {},
    type: {},
    implementation: {}
};


/* Private methods */


/*
 * Create the inheritance tree.
 * @method createInheritanceTree
 * @private
 */
function createInheritanceTree() {
    var id = null,
    fatherId = null,
    newId = null;

    for (id in store.inheritance) {
        fatherId = store.inheritance[id];
        store.inheritanceTree[id] = [];

        while (fatherId) {
            store.inheritanceTree[id].push(fatherId);
            newId = fatherId;
            fatherId = store.inheritance[newId];
        }
    }
}


/*
 * Extend a schema with the properties of its parent.
 * @method extend
 * @param {type} id id of the schema to extend
 * @return {JSON} object extended with the properties of its parent
 * @private
 */
function extend(id) {
    var sonExtend = {},
    son = store.catalog[id],
    ancestors = store.inheritanceTree[id],
    length = 0,
    i = 0,
    ancestor = null,
    prop = '';

    if (ancestors) {
        length = ancestors.length;
        ancestors.reverse();
    }
    for (i = 0; i < length; i++) {
        ancestor = store.catalog[ancestors[i]];
        for (prop in ancestor) {
            if (prop.indexOf('_') !== 0) {
                sonExtend[prop] = ancestor[prop];
            }
        }
    }
    for (prop in son) {
        sonExtend[prop] = son[prop];
    }
    return sonExtend;
}


/*
 * Add the models.
 * @method createModel
 * @private
 */
function createModel() {
    var id = '';
    for (id in store.catalog) {
        store.model[id] = extend(id);
    }
}


/*
 * Test if all the schema are compliants with their schemas.
 * @method checkImplementation
 * @private
 */
function checkImplementation() {
    var id = '',
    classDef = null,
    classImp = '';

    for (id in store.model) {
        classDef = store.model[id];
        if (classDef && typeof classDef[SCHEMA] !== 'undefined') {
            classImp = store.model[classDef[SCHEMA]];
            if (classImp) {
                checkImp(classDef, classImp);
                store.implementation[classDef[ID]] = classImp[ID];
            } else {
                $log.missingImplementation(classDef[SCHEMA], classDef[ID]);
            }
        }
    }
}


/*
 * Test if a schema is compliant with its schema.
 * @method checkStates
 * @private
 */
function checkStates() {
    var id = '',
    classDef = null,
    type = '',
    states = [],
    attribute = '';

    for (id in store.model) {
        states = [];
        classDef = store.model[id];
        if (classDef && typeof classDef[SCHEMA] === 'undefined') {
            for (attribute in classDef) {
                type = classDef[attribute];
                if (attribute.indexOf('_') !== 0 && internalTypes.indexOf(type) !== -1) {
                    states.push(attribute);
                }
            }
        }
        store.states[id] = states;
    }
}


/*
 * Test if a schema is compliant with its schema.
 * @method checkImp
 * @param {JSON} classDef schema to test 
 * @param {JSON} classImp schema to validate
 * @private
 */
function checkImp(classDef, classImp) {
    var property = '',
    value = null;
    for (property in classImp) {
        if (property !== ID &&
        property !== NAME &&
        property !== INHERITS &&
        property !== SCHEMA &&
        property !== CLASS &&
        property !== CORE) {
            if (typeof classDef[property] !== 'undefined') {
                value = classDef[property];
                if (!checkSchema(value, classImp[property])) {
                    $log.invalidTypeImp(property, classDef[ID]);
                }
            } else {
                $log.missingPropertyImp(property, classDef[ID]);
            }
        }
    }
    // check if all properties are there
    for (property in classDef) {
        if (property !== ID &&
        property !== NAME &&
        property !== INHERITS &&
        property !== SCHEMA &&
        property !== CLASS &&
        property !== CORE) {
            if (typeof classImp[property] === 'undefined') {
                $log.unknownPropertyImp(property, classDef[ID]);
            }
        }
    }
}


/*
 * Test if a value has the correct type.
 * @method checkSchema
 * @param {Object} value value to test
 * @param {Object} type type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkSchema(value, type) {
    var result = true;
    if (hasType(type, 'string') && defaultTypes.indexOf(type) !== -1) {
        result = hasType(value, type);
    } else {
        result = checkCustomSchema(value, type);
    }
    return result;
}


/*
 * Test if a value has correct custom type.
 * @method checkCustomSchema
 * @param {type} value value to test
 * @param {String} typeName type to test
 * @return {Boolean} true if the value has the correct type
 * @private
 */
function checkCustomSchema(value, typeName) {
    var result = true,
    typeDef = store.type[typeName],
    length = 0,
    i = 0;

    if (!hasType(typeDef, 'undefined')) {
        if (!hasType(value, 'undefined')) {
            if (typeDef.type === 'array') {
                length = value.length;
                for (i = 0; i < length; i++) {
                    result = isValidSchema(value[i], typeDef.schema);
                    if (result === false) {
                        break;
                    }
                }
            } else {
                result = isValidSchema(value, typeDef.schema);
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }

    return result;
}


/*
 * Init the Database stucture.
 * @method initDbStructure
 * @private
 */
function initDbStructure() {
    $db.collection('MonocoSchema');
    $db.collection('MonocoExtendedSchema');
    $db.collection('MonocoClassInfo');
    $db.collection('MonocoBehavior');
    $db.collection('MonocoState');
    $db.collection('MonocoType');
}


/*
 * Create the Database structure (i.e. MonocoDatabaseCollection).
 * @method createDbStructure
 * @private
 */
function createDbStructure() {
    var modelName = '',
    modelDef = {},
    typeName = '';

    for (modelName in store.catalog) {
        modelDef = store.catalog[modelName];
        $db.MonocoSchema.insert(modelDef);
        if (typeof modelDef[SCHEMA] !== 'undefined' &&
        typeof $db[modelDef[ID]] === 'undefined' &&
        modelDef[CLASS] !== false) {
            $db.collection(modelDef[ID]);
        }
    }

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        $db.MonocoExtendedSchema.insert(modelDef);
    }

    for (typeName in store.type) {
        modelDef = store.type[typeName];
        modelDef._id = modelDef.name;
        $db.MonocoType.insert(modelDef);
    }
}


/*
 * Create all the classes of the model.
 * @method createClass
 * @private
 */
function createClass() {
    var modelName = '',
    modelDef = {};

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        if (typeof modelDef[SCHEMA] !== 'undefined' && modelDef[CLASS] !== false) {
            $component.create({
                "model": modelName
            });
        }
    }
}


/*
 * Create all the ClassInfo of the model.
 * @method createClassInfo
 * @private
 */
function createClassInfo() {
    var modelName = '',
    modelDef = {};

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        if (typeof modelDef[SCHEMA] !== 'undefined' && modelDef[CLASS] !== false) {
            $db.MonocoClassInfo.insert({
                "_id": modelDef._id + 'Info',
                "metamodel": store.model[modelDef[SCHEMA]],
                "model": modelDef
            });
        }
    }
}


/* 
 * Get the real name of the reference object / type.
 * @method getReference
 * @param {String} value
 * @return {String} real name
 * @private
 */
function getReference(value) {
    return value.replace('@', '');
}


/*
 * Is the value a custom type.
 * @method isCustomType
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isCustomType(value) {
    var result = hasType(value, 'string') &&
    defaultTypes.indexOf(value) === -1 &&
    !isReference(value);

    return result;
}


/*
 * Is the value a reference.
 * @method isReference
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isReference(value) {
    return value.indexOf('@') !== -1;
}


/*
 * Get the real type of a value.
 * @method getType
 * @param {type} value
 * @return {String} type of the value
 * @private
 */
function getType(value) {
    var type = '';

    if (Array.isArray(value)) {
        type = 'array';
    } else {
        type = typeof value;
    }

    return type;
}


/*
 * Get the class name of an object.
 * @method getClassName
 * @param {type} obj object
 * @return {String} the class name of the object
 * @private
 */
function getClassName(obj) {
    return obj.constructor.name;
}


/*
 * Check if the value is a valid enum value.
 * @method isValidEnumValue
 * @param {String} value
 * @param {Array} enumValue
 * @return {Boolean} the class name of the object
 * @private
 */
function isValidEnumValue(value, enumValue) {
    return enumValue.indexOf(value) !== -1;
}


/*
 * Check if a value has the specified type.
 * @param {type} value
 * @param {type} type
 * @returns {Boolean} true is value has type 'type'
 */
function hasType(value, type) {
    var result = true;

    switch (type) {
        case 'array':
            result = Array.isArray(value);
            break;
        default:
            result = (type === typeof value);
            break;
    }

    return result;
}


/* Public methods */


/*
 * Add a new schema.
 * @method schema
 * @param {JSON} importedSchema schema to add
 */
function schema(importedSchema) {
    var id = importedSchema[ID],
    inherit = importedSchema[INHERITS],
    name = importedSchema[NAME],
    length = 0,
    i = 0;

    // if no id, it will be the name by default
    if (hasType(id, 'undefined')) {
        id = name;
        importedSchema[ID] = name;
    }

    // check if schema is compliant with the meta meta model
    if (isValidObject(importedSchema, store.metadef.schema, false)) {

        store.catalog[id] = importedSchema;
        if (inherit) {
            length = inherit.length;
            for (i = 0; i < length; i++) {
                store.inheritance[id] = inherit[i];
            }
        }
    } else {
        $workflow.stop({
            "error": true,
            "message": "the schema '" + JSON.stringify(importedSchema) + "' is not valid"
        });
    }
}


/*
 * Add a new type.
 * @method type
 * @param {JSON} importedType
 */
function type(importedType) {
    var name = importedType.name;

    // check if type is compliant with the meta meta model
    if (isValidObject(importedType, store.metadef.type)) {
        if (name) {
            store.type[name] = importedType;
        } else {
            $log.invalidTypeDefinition(importedType);
        }
    } else {
        $workflow.stop({
            "error": true,
            "message": "the type '" + JSON.stringify(importedType) + "' is not valid"
        });
    }
}


/*
 * Init the metamodel.
 * @method init
 */
function init() {
    clear();
    store.metadef = {
        schema: {
            "_id": {
                "type": "string",
                "mandatory": true
            },
            "_name": {
                "type": "string",
                "mandatory": true
            },
            "_inherit": {
                "type": ["string"],
                "mandatory": false
            },
            "_schema": {
                "type": "string",
                "mandatory": false
            },
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            }
        },
        type: {
            "name": {
                "type": "string",
                "mandatory": true
            },
            "type": {
                "type": "string",
                "mandatory": true
            },
            "schema": {
                "type": "object",
                "mandatory": false
            },
            "value": {
                "type": ["string"],
                "mandatory": false
            },
            "core": {
                "type": "boolean",
                "mandatory": false
            }
        }

    };
    initDbStructure();
}


/*
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
function clear() {
    store = {
        catalog: {},
        inheritance: {},
        inheritanceTree: {},
        model: {},
        states: {},
        type: {},
        implementation: {}
    };
}


/*
 * Create the metamodel.
 * @method create
 */
function create() {
    createInheritanceTree();
    createModel();
    checkImplementation();
    checkStates();
    createDbStructure();
    createClass();
    createClassInfo();
}


/*
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
function isEvent(name, id) {
    var result = false,
    componentSchema = store.model[id],
    attributeType = '';

    if (componentSchema && componentSchema[SCHEMA]) {
        componentSchema = store.model[componentSchema[SCHEMA]];
    }

    if (componentSchema) {
        attributeType = componentSchema[name];
        if (attributeType === EVENT_TYPE) {
            result = true;
        }
    }

    return result;
}


/*
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
function isValidState(name, id) {
    var result = false,
    componentSchema = store.model[id],
    state = {};

    if (componentSchema && componentSchema[SCHEMA]) {
        componentSchema = store.model[componentSchema[SCHEMA]];
    }
    state = store.states[componentSchema[ID]];

    if (Array.isArray(state)) {
        result = state.indexOf(name) !== -1;
    }

    return result;
}


/*
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} value
 * @param {String} typeName
 * @return {Boolean} true if the object is compliant with the type
 */
function isValidType(value, typeName) {
    var result = true;

    function _checkReference(value, typeName) {
        var isValid = true;
        var typeRef = getReference(typeName);
        if (getClassName(value) !== typeRef) {
            isValid = false;
            $log.invalidType(value.id(), typeName);
        }
        return isValid;
    }

    if (!hasType(typeName, 'undefined')) {
        switch (true) {
            case isCustomType(typeName):
                result = checkCustomSchema(value, typeName);
                break;
            case isReference(typeName):
                result = _checkReference(value, typeName);
                break;
            default:
                result = hasType(value, typeName);
                break;
        }
    } else {
        $log.invalidType(value, typeName);
    }

    return result;
}


/*
 * Check if a value is compliant with a enum type.
 * @method isValidEnum
 * @param {String|Object} value
 * @param {Object} schema
 * @return {Boolean} true if the object is compliant with the enum
 */
function isValidEnum(value, schema) {
    var result = true;

    if (isReference(schema.type)) {
        result = $component.isInstanceOf($component.get(value), getReference(schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    } else {
        result = (hasType(value, schema.type)) && schema.value.indexOf(value) !== -1;
        if (!result) {
            $log.invalidEnumValue(value, schema.type);
        }
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if a schema is compliant with a schema
 * it is supposed to validate.
 * @method isValidSchema
 * @param {JSON} object
 * @param {JSON} schema
 * @return {Boolean}
 * @private
 */
function isValidSchema(object, schema) {
    var fieldName = '',
    field = null,
    result = true,
    mandatory = true,
    typeSchema = '',
    typeRef = '',
    realType = '',
    length = 0,
    i = 0;

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference() {
        var isValid = true,
        enumValue = [];

        typeRef = getReference(typeSchema);
        typeRef = object[typeRef];
        if (isCustomType(typeRef)) {
            if (store.type[typeRef]) {
                if (store.type[typeRef].schema) {
                    isValid = isValidSchema(field, store.type[typeRef].schema);
                } else {
                    // check type
                    isValid = hasType(field, store.type[typeRef].type);

                    // check value
                    enumValue = store.type[typeRef].value;
                    if (enumValue) {
                        isValid = isValidEnumValue(field, enumValue);
                    }
                }
            } else {
                isValid = false;
            }
        } else {
            if (typeRef === 'array') {
                isValid = Array.isArray(field);
            } else {
                if (isReference(typeRef)) {
                    isValid = hasType(field, 'object');
                } else {
                    isValid = hasType(field, typeRef);
                }
            }
        }
        if (!isValid) {
            $log.invalidPropertyType(field, typeRef, field);
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType() {
        var isValid = true;

        realType = getType(typeSchema);
        switch (realType) {
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidSchema(field, typeSchema);
                } else {
                    if (!hasType(field, typeSchema)) {
                        $log.invalidPropertyType(fieldName, typeSchema, field);
                        isValid = false;
                        break;
                    }
                }
                break;
            case 'array':
                length = field.length;
                for (i = 0; i < length; i++) {
                    if (isCustomType(typeSchema[0])) {
                        isValid = isValidSchema(field[i], store.type[typeSchema[0]].schema);
                    } else {
                        if (!hasType(field[i], typeSchema[0])) {
                            $log.invalidPropertyType(field[i], typeSchema[0], field[i]);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            default:
                break;
        }
        return isValid;
    }

    // type
    for (fieldName in object) {
        field = object[fieldName];

        if (hasType(schema[fieldName], 'undefined')) {
            $log.unknownProperty(fieldName, schema);
            return false;
        } else {
            typeSchema = schema[fieldName].type;
        }

        switch (true) {
            case isReference(typeSchema):
                result = _isValidReference();
                break;
            default:
                result = _isValidType();
                break;
        }
    }

    // mandatory
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        if (mandatory === true && hasType(object[fieldName], 'undefined')) {
            $log.missingProperty(fieldName);
            result = false;
            break;
        }
    }

    return result;
}


/*
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object
 * @param {Object} schema
 * @param {Boolean} strict
 * @param {Boolean} cleanRef
 * @return {Boolean} true is the object is compliant with the schema
 */
function isValidObject(object, schema, strict, cleanRef) {
    var fieldName = '',
    field = null,
    result = true,
    mandatory = true,
    typeSchema = '',
    typeRef = '',
    realType = '',
    length = 0,
    i = 0;

    if (hasType(strict, 'undefined')) {
        strict = true;
    }

    if (hasType(cleanRef, 'undefined')) {
        strict = false;
    }

    /*
     * Check if a field is compliant with a custom type.
     * @return {Boolean} the field is compliant with the custom type
     * @private
     */
    function _isValidCustomType() {
        var isValid = true;

        typeSchema = store.type[typeSchema];
        if (typeSchema) {
            if (typeSchema.schema) {
                isValid = isValidObject(field, typeSchema.schema);
            } else {
                isValid = isValidEnum(field, typeSchema);
            }
        } else {
            isValid = false;
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with the type of the reference.
     * @return {Boolean} the field is compliant with the type of the reference
     * @private
     */
    function _isValidReference() {
        var isValid = true,
        comp = null,
        isComponent = false;

        typeRef = getReference(typeSchema);
        if (field && field.id) {
            comp = field;
            isComponent = true;
        } else {
            comp = $component.get(field);
        }

        if (!hasType(comp, 'undefined')) {
            if (getClassName(comp) !== typeRef) {
                isValid = false;
                $log.invalidType(field, typeRef);
            } else {
                if (isComponent && cleanRef) {
                    object[fieldName] = comp.id(); // store the id instead the full object 
                }
            }
        } else {
            // check for default value of an object ({} or null)
            switch (true) {
                case (hasType(field, 'object') && field !== null && Object.keys(field).length):
                case hasType(field, 'string'):
                    $log.canNotYetValidate(field, typeRef);
                    break;
                default:
                    break;
            }
        }
        return isValid;
    }

    /*
     * Check if a field is compliant with a type.
     * @return {Boolean} the field is compliant with the type
     * @private
     */
    function _isValidType() {
        var isValid = true,
        typeArray = '';

        realType = getType(typeSchema);
        switch (realType) {
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidObject(field, typeSchema);
                } else {
                    if (typeSchema === 'array') {
                        if (getType(field) !== 'array') {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    } else {
                        if (getType(field) !== typeSchema) {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    }
                }
                break;
            case 'array':
                if (Array.isArray(field)) {
                    length = field.length;
                    typeArray = typeSchema[0];
                    for (i = 0; i < length; i++) {
                        if (isCustomType(typeArray)) {
                            isValid = isValidObject(field[i], store.type[typeArray].schema);
                        } else {
                            if (!isReference(typeArray)) {
                                if (getType(field[i]) !== typeArray) {
                                    $log.invalidPropertyType(field[i], typeArray, field[i]);
                                    isValid = false;
                                    break;
                                }
                            } else {
                                if (getType(field[i]) === 'string') {
                                    // Case of an import of a system
                                    if (getClassName($component.get(field[i])) !== getReference(typeArray)) {
                                        $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                        isValid = false;
                                        break;
                                    }
                                } else {
                                    if (getClassName(field[i]) !== getReference(typeArray)) {
                                        $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                        isValid = false;
                                        break;
                                    } else {
                                        if (cleanRef) {
                                            field[i] = field[i].id(); // store the id instead the full object
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    isValid = false;
                    $log.invalidType(field, 'array');
                }
                break;
            default:
                isValid = false;
                $log.unknownType(field);
                break;
        }
        return isValid;
    }


    // type
    for (fieldName in object) {
        field = object[fieldName];

        if (!hasType(schema[fieldName], 'undefined')) {
            typeSchema = schema[fieldName].type;

            // cas of _id
            if (fieldName === '_id') {
                typeSchema = 'string';
            }

        } else {
            if (strict) {
                $log.unknownProperty(fieldName, schema);
                return false;
            } else {
                continue;
            }
        }

        switch (true) {
            case isCustomType(typeSchema):
                result = _isValidCustomType();
                break;
            case isReference(typeSchema):
                result = _isValidReference();
                break;
            default:
                result = _isValidType();
                break;
        }
    }

    // mandatory
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === true) {
                $log.missingProperty(fieldName);
                result = false;
            }
        }
    }

    return result;
}


/*
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object
 * @param {Object} schema
 */
function prepareObject(object, schema) {
    var fieldName = '',
    field = null,
    mandatory = true,
    defaultValue = '';

    // mandatory & default value
    for (fieldName in schema) {
        field = schema[fieldName];
        mandatory = field.mandatory;
        defaultValue = field.default;
        if (hasType(object[fieldName], 'undefined')) {
            if (mandatory === false && !hasType(defaultValue, 'undefined')) {
                object[fieldName] = defaultValue;
            }
        }
    }
}


/*
 * Get a schema.
 * @method get
 * @param {String} id of the schema
 * @return {Object} the schema
 */
function get(id) {
    var result = null;
    if (store.model[id]) {
        result = store.model[id];
    }
    return result;
}


/*
 * Get parents of a shema if any.
 * @method get
 * @param {String} id of the schema
 * @return {Array} id of the parents
 */
function getParents(id) {
    var result = [],
    model = null;

    model = store.model[id];
    if (model) {
        result = model[INHERITS];
    }
    if (!result) {
        result = [];
    }

    return result;
}

/*
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
function inheritFrom(name, parentName) {
    var result = false,
    parents = [],
    i = 0,
    length = 0;

    /*
     * 
     * Check if a class inherits from another one
     * @method _searchParent
     * @param {String} className name of the class
     * @param {String} ancestorName of the parent
     * @returns {Boolean} true if the component inherit from the specific class name
     * @private
     */
    function _searchParent(className, ancestorName) {
        var isAncestor = false,
        parents = [],
        i = 0,
        length = 0;

        parents = getParents(className);
        if (parents.length !== 0) {
            if (parents.indexOf(ancestorName) !== 1) {
                isAncestor = true;
            } else {
                for (i = 0; i < length; i++) {
                    isAncestor = _searchParent(parents[i], ancestorName);
                    if (isAncestor) {
                        break;
                    }
                }
            }
        }
        return isAncestor;
    }

    parents = getParents(name);
    if (parents.length !== 0) {
        if (parents.indexOf(parentName) !== 1) {
            result = true;
        } else {
            for (i = 0; i < length; i++) {
                result = _searchParent(parents[i], parentName);
                if (result) {
                    break;
                }
            }
        }
    }

    return result;
}


/* exports */


/**
 * This module manages Monoco Metamodel. <br>
 * Monoco Metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
 * 
 * @module monoco
 * @submodule monoco-metamodel
 * @requires monoco-db
 * @requires monoco-log
 * @requires monoco-component
 * @requires monoco-workflow
 * @class monoco-metamodel
 * @static
 */


/**
 * Init the metamodel.
 * @method init
 */
exports.init = init;


/**
 * Remove the data of the metamodel from the memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Add a new schema.
 * @param {JSON} schema
 * @method schema
 */
exports.schema = schema;


/**
 * Add a new type.
 * @param {JSON} type
 * @method type
 */
exports.type = type;


/**
 * Create the metamodel.
 * @method create
 */
exports.create = create;


/**
 * Get a schema.
 * @method get
 * @param {String} id of the schema
 * @return {Object} the schema
 */
exports.get = get;


/**
 * Get parents of a shema if any.
 * @method getParents
 * @param {String} id of the schema
 * @return {Array} id of the parents
 */
exports.getParents = getParents;


/*
 * Check if a class inherits from another one
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @return {Boolean} true if the component inherit from the specific class name
 */
exports.inheritFrom = inheritFrom;


/**
 * Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 * @method isValidObject
 * @param {Object} object
 * @param {Object} schema
 * @param {Boolean} strict
 * @param {Boolean} cleanRef
 * @return {Boolean} true is the object is compliant with the schema
 */
exports.isValidObject = isValidObject;


/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object
 * @param {Object} schema
 */
exports.prepareObject = prepareObject;


/**
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} object
 * @param {String} type
 * @return {Boolean} true if the object is compliant with the type
 */
exports.isValidType = isValidType;

/**
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value
 * @param {Schema} schema
 * @return {Boolean} true if the object is compliant with the enum
 */
exports.isValidEnum = isValidEnum;


/**
 * Check if the name is a correct state for the component.
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @return {Boolean} true if the name is a correct state for the component
 */
exports.isValidState = isValidState;


/**
 * Check if an attribute of the schema is an event.
 * @method isEvent
 * @param {String} name name of the attribute
 * @param {String} id component id
 * @return {Boolean} true if the attribute is an event
 */
exports.isEvent = isEvent;
},{"./component.js":3,"./db.js":4,"./log.js":6,"./workflow.js":10}],8:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module is the main module of Monoco. <br>
 * It inits Monoco Metamodel and loads the Monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');


/* Private Property */

var sytemId = '',
system = '';


/* Init Metamodel */


$metamodel.init();


/* Init Monoco from a Monoco System */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of Monoco. <br>
 * It inits Monoco Metamodel and loads the Monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */


/**
 * Monoco instance.
 * @property monoco
 * @type Monoco
 */
module.exports = $component.get('monoco');
},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./metamodel.js":7}],9:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/**
 * This module manages the states of all thecomponents.
 * 
 * @module monoco
 * @submodule monoco-state
 * @requires monoco-db
 * @class monoco-state
 * @static
 */

'use strict';

var $db = require('./db.js');


/* Private properties */


var store = {};


/* Public methods */


/*
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 */
function set(id, state) {
    store[id] = state;
    $db.store.MonocoState[id] = {"name": state};
}


/*
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} state of the component
 */
function get(id) {
    return store[id];
}


/*
 * Remove all the states of the components from the memory.
 * @method clear
 */
function clear() {
    store = {};
}


/* exports */


/**
 * This module manages the states of all the components.
 * 
 * @module monoco
 * @submodule monoco-state
 * @requires monoco-db
 * @class monoco-state
 * @static
 */


/**
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 */
exports.set = set;


/**
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} the state of the component.
 */
exports.get = get;


/**
 * Remove all the states of the components from the memory.
 * @method clear
 */
exports.clear = clear;
},{"./db.js":4}],10:[function(require,module,exports){
/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * This module manages the workflow of Monoco. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and monoco. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module monoco
 * @submodule monoco-workflow
 * @requires monoco-metamodel
 * @requires monoco-component
 * @requires monoco-behavior
 * @requires monoco-state
 * @requires monoco-helper
 * @requires monoco-log
 * @requires monoco-db
 * @class monoco-workflow 
 * @static
 */

'use strict';

var $metamodel = require('./metamodel.js');
var $component = require('./component.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $db = require('./db.js');


/* Private methods */


/**
 * The MonocoError class.
 * @class MonocoError
 * @constructor
 * @param {String} message message of the error
 */
function MonocoError(message) {
    this.message = message;
    this.name = "MonocoError";
}
MonocoError.prototype = new Error();
MonocoError.prototype.constructor = MonocoError;


/*
 * Get all the names of the parameter of a method.
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the names of all parameters of the method for the class
 * @private
 */
function getParamNames(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].name);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Get the number of parameters of a method.
 * @method getParamNumber
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} number of parameters min and max for the method
 * @private
 */
function getParamNumber(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0,
    min = 0,
    max = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (typeof params[i].mandatory === 'undefined' || params[i].mandatory === true) {
                    min = min + 1;
                }
                max = max + 1;
            }
        }
        result.push(min);
        result.push(max);
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/* 
 * Set the default value of the non mandatory parameters of a method.
 * @method setDefaultValue
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @param {Array} args arguments
 * @return {Array} arguments with default values
 * @private
 */
function setDefaultValue(id, methodName, args) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                if (params[i].mandatory === false && typeof args[i] === 'undefined') {
                    result.push(params[i].default);
                } else {
                    result.push(args[i]);
                }
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Get the type returned by a method.
 * @method getReturnType
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {String} the type returned by the method
 * @private
 */
function getReturnType(id, methodName) {
    var resultType = null,
    result = null;

    resultType = $metamodel.get(id)[methodName].result;
    if (resultType) {
        result = resultType;
    }
    return result;
}


/*
 * Get all the type of the parameters of a method
 * @method getParamTypes
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @return {Array} the types of the parameters of a method
 * @private
 */
function getParamTypes(id, methodName) {
    var method = null,
    params = [],
    result = [],
    length = 0,
    i = 0;

    method = $metamodel.get(id)[methodName];
    if (method) {
        params = method.params;
        if (params) {
            length = params.length;
            for (i = 0; i < length; i++) {
                result.push(params[i].type);
            }
        }
    } else {
        $log.unknownMethod(id, methodName);
    }
    return result;
}


/*
 * Check if conditions on output are compliant with the metamodel
 * @method checkResult
 * @param {Object} params
 * @return {Boolean} true if conditions on ouput are compliant with the metamodel
 * @private
 */
function checkResult(params) {
    params = params || {};

    var component = params.component || null,
    methodName = params.methodName || '',
    methodResult = params.methodResult || undefined,
    componentClassName = '',
    returnType = null,
    result = true;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    returnType = getReturnType(componentClassName, methodName);

    if (returnType !== null) {
        if (returnType === 'array') {
            if (!Array.isArray(methodResult)) {
                result = false;
                $log.invalidResultType(component.id(), methodName);
            }
        } else {
            if (typeof methodResult !== returnType) {
                result = false;
                $log.invalidResultType(component.id(), methodName);
            }
        }
    }

    return result;
}


/*
 * Get the actions of the specified starte
 * @method getActions
 * @param {Object} component a Monoco Component
 * @param {String} name name of the state
 * @param {Boolean} isEvent true if the state is an event
 * @return {Array} list of the actions
 * @private
 */
function getActions(component, name, isEvent) {
    var action = $behavior.getActions(component.id(), name),
    parents = [],
    length = 0,
    i = 0,
    parent = null;

    if (!action.length || isEvent) {
        if (component.constructor.name !== 'Function') {
            action = action.concat(getActions($component.get(component.constructor.name), name, isEvent));
        } else {
            parents = $metamodel.getParents(component.name);
            length = parents.length;
            for (i = 0; i < length; i++) {
                parent = $component.get(parents[i]);
                if (parent) {
                    action = action.concat(getActions(parent, name, isEvent));
                } else {
                    $log.unknownComponent(parents[i], component.name);
                }
                if (action.length) {
                    break;
                }
            }
        }
    }

    if (action.length) {
        action.reverse();
    }

    return action;
}


/*
 * Call an action and make some Dependency Injection if it is a core action
 * @method callAction
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Array} action action
 * @param {Array} params parameters of the action
 * @return {Boolean} result of the action
 */
function callAction(component, state, action, params) {
    var result = null,
    injectedParams = [],
    i = 0,
    length = 0;

    params = setDefaultValue(component.constructor.name, state, params);

    try {
        if (action.core) {
            length = params.length;
            for (i = 0; i < length; i++) {
                injectedParams.push(params[i]);
            }
            injectedParams.push($component);
            injectedParams.push($db);
            injectedParams.push($metamodel);
            injectedParams.push(exports);
            injectedParams.push($behavior);

            result = action.action.apply(component, injectedParams);
        } else {
            result = action.action.apply(component, params);
        }
    } catch (e) {
        if (e instanceof MonocoError) {
            throw e;
        } else {
            if (component && component.error) {
                component.error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
            if ($helper.getMonoco()) {
                $helper.getMonoco().error({
                    "message": "error when when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
        }
    }

    return result;
}


/* Public methods */


/*
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
function checkParams(params) {
    params = params || {};

    var component = params.component || null,
    methodName = params.methodName || '',
    args = params.args || '',
    paramsName = [],
    paramsType = [],
    paramsNumber = [],
    componentClassName = '',
    length = args.length,
    i = 0,
    param = null,
    result = true;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    paramsName = getParamNames(componentClassName, methodName);
    paramsType = getParamTypes(componentClassName, methodName);
    paramsNumber = getParamNumber(componentClassName, methodName);

    // case of object
    if (typeof length === 'undefined') {
        length = 1;
    }

    if (paramsNumber.indexOf(length) === -1) {
        result = false;
        $log.invalidParamNumber(component.id(), methodName);
    }

    for (i = 0; i < length; i++) {
        param = args[i];
        if (typeof param === 'undefined') {
            if (i < paramsNumber[0]) {
                result = false;
                $log.invalidParamNumber(component.id(), methodName);
            } else {
                continue;
            }
        } else {
            if (!$metamodel.isValidType(param, paramsType[i])) {
                result = false;
                $log.invalidParamType(component.id(), methodName, paramsName[i]);
            }
        }
    }

    return result;
}


/**
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method or an event <br>
 * 2. Search if there is a behavior with an action for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the conditons on input are compliant with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If not an of event, check if the conditons on input are compliant with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
function state(params) {

    params = params || {};
    params.component = params.component || '';
    params.state = params.state || '';
    params.data = params.data || [];

    var component = null,
    currentState = '',
    actions = [],
    action = null,
    result = null,
    i = 0,
    length = 0,
    isEvent = false;

    currentState = $state.get(params.component);

    if (currentState !== 'destroy') {

        component = $component.get(params.component);
        if (component) {
            isEvent = $metamodel.isEvent(params.state, component.constructor.name);
            actions = getActions(component, params.state, isEvent);
        }

        if (actions.length) {

            if (checkParams({
                "component": component,
                "methodName": params.state,
                "args": params.data
            })) {

                if (!isEvent) {
                    action = actions[0];
                    result = callAction(component, params.state, action, params.data);

                    if (checkResult({
                        "component": component,
                        "methodName": params.state,
                        "methodResult": result
                    })) {
                        $state.set(component.id(), params.state);
                    }
                } else {

                    length = actions.length;
                    for (i = 0; i < length; i++) {
                        action = actions[i];
                        callAction(component, params.state, action, params.data);
                    }

                    $state.set(component.id(), params.state);
                }
            }
            return result;
        } else {
            if (component) {
                $state.set(component.id(), params.state);
            }
        }
    } else {
        exports.stop({
            "error": true,
            "message": "trying to change the state of a destroyed component '" + params.component + "'"
        });
    }
}


/*
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
function stop(params) {
    params = params || {};

    if (typeof params.error === 'undefined') {
        params.error = false;
    }
    params.message = params.message || '';

    exports.state = function () {
    };

    if (params.error) {
        if (params.message) {
            throw new MonocoError("monoco has been stopped because " + params.message);
        } else {
            throw new MonocoError("monoco has been stopped because of an unknown error");
        }
    } else {
        console.warn('monoco: monoco has been stopped');
    }
}


/*
 * Restart the workflow engine from the last state.
 * @method restart
 */
function restart() {
    exports.state = state;
    $log.workflowRestarted();
}


/* exports */


/**
 * This module manages the workflow of Monoco. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and monoco. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module monoco
 * @submodule monoco-workflow
 * @requires monoco-metamodel
 * @requires monoco-component
 * @requires monoco-behavior
 * @requires monoco-state
 * @requires monoco-helper
 * @requires monoco-log
 * @requires monoco-db
 * @class monoco-workflow 
 * @static
 */


/**
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method or an event <br>
 * 2. Search if there is a behavior with an action for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the conditons on input are compliant with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If not an of event, check if the conditons on input are compliant with the metamodel <br>
 * 7. If all is ok, the state of the component is updated <br>
 * 8. Return the result <br>
 * 
 * @method state
 * @param {Object} params params to change the state <br>
 * {String} component id of the component <br>
 * {String} state state of the component <br>
 * {Array} data parameters to send to the action
 */
exports.state = state;


/**
 * Stop the workflow engine.
 * @method stop
 * @param {Object} params parameters <br>
 * {Boolean} error true if the stop of the workflow is due to an error (default false) <br>
 * {String} message error message to log (default '')
 */
exports.stop = stop;


/**
 * Restart the workflow engine from the last state.
 * @method restart
 */
exports.restart = restart;


/**
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
exports.checkParams = checkParams;
},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9tb25vY28uanMiLCJzcmMvc3RhdGUuanMiLCJzcmMvd29ya2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcDBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIFxuICogTW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciB5b3VyIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAbW9ub2NvanNcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHRoZSBNb25vY28gY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXN5c3RlbVxuICogQGNsYXNzIG1vbm9jby1zeXN0ZW1cbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuXG4vKlxuICogVGhlIE1vbm9jbyBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtNb25vY29TeXN0ZW19IHN5c3RlbVxuICovXG52YXIgc3lzdGVtID0ge1xuICAgIFwibmFtZVwiOiBcIm1vbm9jb1wiLFxuICAgIFwidmVyc2lvblwiOiBcIjAuMS4yXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIHlvdXIgQ29tcG9uZW50c1wiLFxuICAgIFwiX2lkXCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG4gICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgXCJNb25vY29cIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiMC4wLjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZmluZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsb2FkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29CZWhhdmlvclwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0JlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29CZWhhdmlvclNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJfY2xhc3NcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29CZWhhdmlvclNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0JlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQmVoYXZpb3JTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBcInByb3BlcnR5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DbGFzc0luZm9cIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0NsYXNzSW5mb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DbGFzc0luZm9TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DbGFzc0luZm9TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DbGFzc0luZm9TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWV0aG9kXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1ldGhvZHNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaGFuZGxlclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1c2VDb3JlQVBJXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib2ZmXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQE1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9uXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm9mZlwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJpbml0XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvRGF0YWJhc2VcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0RhdGFiYXNlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29EYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnNlcnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNsYXNzSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50SWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dHJpYnV0ZU5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImF0dHJpYnV0ZVZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2xhc3NJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29EYXRhYmFzZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvRGF0YWJhc2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IFwiZXZlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvTWV0YW1vZGVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZmluZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJsb2FkXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TdGF0ZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N0YXRlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY2xhc3NcIjogZmFsc2UsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb1N0YXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3RhdGVTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb1N5c3RlbVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1N5c3RlbVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N5c3RlbVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hc3RlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJzeW5jXCI6IHt9LFxuICAgICAgICAgICAgXCJtYWluXCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3lzdGVtU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWFzdGVyXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInR5cGVzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInJlYWR5XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwic3luY1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtYWluXCI6IFwiZXZlbnRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVycm9yUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYmVoYXZpb3JzXCI6IHtcbiAgICAgICAgXCIxYWFlZTFlNjMxMWZmMzlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWFlZTFlNjMxMWZmMzlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibG9hZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsb2FkKHVybCwgYXN5bmMpIHsgdmFyIHhociA9IG51bGwsIGNhbGxiYWNrTG9hZCA9IG51bGw7IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyBjYWxsYmFja0xvYWQgPSBmdW5jdGlvbiBjYWxsYmFja0xvYWQoc3lzdGVtKSB7IHZhciBzeXNJZCA9ICRkYi5zeXN0ZW0oc3lzdGVtKTsgdmFyIHN5cyA9ICRjb21wb25lbnQuZ2V0KHN5c0lkKTsgaWYgKHN5cykgeyBzeXMubWFpbigpOyB9IH07IGlmIChhc3luYykgeyB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTsgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7IGlmICh4aHIuc3RhdHVzID09PSAyMDApIHsgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7IH0gfSB9OyB4aHIuc2VuZChudWxsKTsgfSBlbHNlIHsgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpOyB4aHIuc2VuZChudWxsKTsgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkgeyBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTsgfSB9IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZjYwMDE3NzNhMTg3OTFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjYwMDE3NzNhMTg3OTFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicmVhZHlcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVhZHkoKSB7IHZhciBzeXN0ZW1zID0gW10sIHN5c3RlbSA9IG51bGwsIGkgPSAwLCBsZW5ndGggPSAwOyBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgeyBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpOyBsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IHN5c3RlbSA9IHN5c3RlbXNbaV07IHRoaXMubG9hZChzeXN0ZW0uaHJlZiwgZmFsc2UpOyB9IH0gfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmQxYzFkNDIzMTUxMDJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmQxYzFkNDIzMTUxMDJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXJyb3IoZGF0YSkgeyBjb25zb2xlLmVycm9yKCdtb25vY286ICcgKyBkYXRhLm1lc3NhZ2UsIGRhdGEuZXJyb3IpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwYjhkMTI2ZjMxODliMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwYjhkMTI2ZjMxODliMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJmaW5kXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGZpbmQoQ2xhc3MsIHF1ZXJ5KSB7IHZhciBkb2N1bWVudHMgPSBbXSwgY29tcG9uZW50cyA9IFtdLCBjb21wb25lbnQgPSBudWxsLCBpID0gMCwgbGVuZ3RoID0gMDsgaWYgKCRkYltDbGFzc10pIHsgZG9jdW1lbnRzID0gJGRiW0NsYXNzXS5maW5kKHF1ZXJ5KTsgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGRvY3VtZW50c1tpXS5faWQpOyBpZiAoY29tcG9uZW50KSB7IGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpOyB9IH0gfSByZXR1cm4gY29tcG9uZW50czsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiYzE0MTY0MjExOGYwOVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiYzE0MTY0MjExOGYwOVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKG5hbWUpIHsgdmFyIFN5c3RlbSA9IG51bGwsIHN5c3RlbSA9IHt9LCByZXN1bHQgPSBbXSwgY29uZiA9IHt9OyBpZiAobmFtZSkgeyBjb25mLm1hc3RlciA9IHRydWU7IGNvbmYubmFtZSA9IG5hbWU7IFN5c3RlbSA9IG1vbm9jby5yZXF1aXJlKCdNb25vY29TeXN0ZW0nKTsgc3lzdGVtID0gbmV3IFN5c3RlbShjb25mKTsgfSBlbHNlIHsgcmVzdWx0ID0gbW9ub2NvLmZpbmQoJ01vbm9jb1N5c3RlbScsIHsnbWFzdGVyJzogdHJ1ZX0pOyBpZiAocmVzdWx0Lmxlbmd0aCkgeyBzeXN0ZW0gPSByZXN1bHRbMF07IH0gfSByZXR1cm4gc3lzdGVtOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmNDFjMTFiYmUxN2YzYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmNDFjMTFiYmUxN2YzYVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyBjb25zb2xlLndhcm4oJ21vbm9jbzogJyArIG1lc3NhZ2UpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyNDkxMTI5YzIxYjBlMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyNDkxMTI5YzIxYjBlMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudChuYW1lKSB7IHZhciByZXN1bHQgPSB7fTsgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdldmVudCcpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMThjZDUxNmU5NDE5MWY3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMThjZDUxNmU5NDE5MWY3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudHMoKSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksIGl0ZW0gPSAnJywgcmVzdWx0ID0gW10sIGkgPSAwLCBsZW5ndGggPSAwOyBsZW5ndGggPSBrZXlzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGl0ZW0gPSBrZXlzW2ldOyBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ2V2ZW50JykgeyByZXN1bHQucHVzaChpdGVtKTsgfSB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRhYmMxMDRiNzEyMjQ2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRhYmMxMDRiNzEyMjQ2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2QobmFtZSkgeyB2YXIgcmVzdWx0ID0ge307IGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnbWV0aG9kJykgeyByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYjU2NDFkY2M0MTdiMDdcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYjU2NDFkY2M0MTdiMDdcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWV0aG9kc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2RzKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdtZXRob2QnKSB7IHJlc3VsdC5wdXNoKGl0ZW0pOyB9IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNmViMTE5MTI3MTk5ODNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNmViMTE5MTI3MTk5ODNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydGllc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0aWVzKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdwcm9wZXJ0eScpIHsgcmVzdWx0LnB1c2goaXRlbSk7IH0gfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE2M2QxMTVhYzcxYWRmMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2M2QxMTVhYzcxYWRmMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7IHZhciByZXN1bHQgPSB7fTsgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTM0ZjExNzYzODFhNTEzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTM0ZjExNzYzODFhNTEzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZGVzdHJveSgpIHsgJGNvbXBvbmVudC5kZXN0cm95KHRoaXMuaWQoKSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWRkZTFmZDc0MTVlMTBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWRkZTFmZDc0MTVlMTBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG9mZihzdGF0ZSwgYmVoYXZpb3JJZCkgeyB2YXIgYXJncyA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDU7IGkrKykgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfSBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXFwiY29tcG9uZW50XFxcIjogdGhpcywgXFxcIm1ldGhvZE5hbWVcXFwiOiBcXFwib2ZmXFxcIiwgXFxcImFyZ3NcXFwiOiBhcmdzfSkpIHsgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7JGJlaGF2aW9yLnJlbW92ZSh7XFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLCBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKCksIFxcXCJzdGF0ZVxcXCI6IHN0YXRlfSk7IH0gZWxzZSB7ICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcXFwiaW52b2tlICdvZmYnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIik7IH0gfSB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIwZWExYjQ5OTE0Mjc1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTIwZWExYjQ5OTE0Mjc1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlcXVpcmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVxdWlyZShpZCkgeyByZXR1cm4gJGNvbXBvbmVudC5nZXQoaWQpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTcwMDAxZmIyNzEyNDc4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcwMDAxZmIyNzEyNDc4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0RhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3Vic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHsgcmV0dXJuICRkYi5zdWJzeXN0ZW0ocGFyYW1zKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzYmQwMWU3MTIxYTZmOVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzYmQwMWU3MTIxYTZmOVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0oc3lzdGVtKSB7IHJldHVybiAkZGIuc3lzdGVtKHN5c3RlbSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDgxYjE3NjY3MTUzZmFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDgxYjE3NjY3MTUzZmFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY3JlYXRlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNyZWF0ZSgpIHsgJG1ldGFtb2RlbC5jcmVhdGUoKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlNTBkMWFhN2YxNGI5YlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlNTBkMWFhN2YxNGI5YlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29NZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc2NoZW1hKHNjaGVtYSkgeyAkbWV0YW1vZGVsLnNjaGVtYShzY2hlbWEpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTgwNmUxNDNkOTFhNDU4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTgwNmUxNDNkOTFhNDU4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInR5cGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdHlwZSh0eXBlKSB7ICRtZXRhbW9kZWwudHlwZSh0eXBlKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmOGU0MTMzZWMxMGM5YlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmOGU0MTMzZWMxMGM5YlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29TeXN0ZW1cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeW5jXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5bmMoKSB7IHZhciBkdW1wID0gJGRiLmR1bXAoKTsgdGhpcy5zY2hlbWFzKGR1bXAuc2NoZW1hcyk7IHRoaXMudHlwZXMoZHVtcC50eXBlcyk7IHRoaXMuYmVoYXZpb3JzKGR1bXAuYmVoYXZpb3JzKTsgdGhpcy5jb21wb25lbnRzKGR1bXAuY29tcG9uZW50cyk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZDg2NDE0YWY3MWViMWJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZDg2NDE0YWY3MWViMWJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWFpblwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtYWluKCkgeyB2YXIgbW9ub2NvID0gJGNvbXBvbmVudC5nZXQoJ21vbm9jbycpOyBtb25vY28ucmVhZHkoKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICBcIk1vbm9jb1wiOiB7XG4gICAgICAgICAgICBcIm1vbm9jb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJtb25vY29cIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjEuMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvRGF0YWJhc2VcIjoge1xuICAgICAgICAgICAgXCJkYlwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJkYlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvTWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIm1ldGFtb2RlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKiBleHBvcnRzICAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdGhlIE1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3lzdGVtXG4gKiBAY2xhc3MgbW9ub2NvLXN5c3RlbVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBUaGUgTW9ub2NvIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge01vbm9jb1N5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gc3lzdGVtO1xuIiwiLyogXG4gKiBNb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIHlvdXIgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBtb25vY29qc1xuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBcbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQGNsYXNzIG1vbm9jby1iZWhhdmlvclxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gZnJvbSBhIHN0cmluZy5cbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uOlxuICogLSB3aWxsIGJlIGEgbmFtZWQgZnVuY3Rpb24sXG4gKiAtIGhhcyB0aGUgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IGFuZFxuICogLSBjYW4gaGF2ZSBzb21lIGNvcmUgbW9kdWxlcyBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzLlxuICogQG1ldGhvZCBjcmVhdGVGdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgZGVmYXVsdCBuYW1lIG9mIHRoZSBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBmdW5jIGEgc3RyaW5naWZpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCB0aGUgYmVoYXZpb3Igd2lsbCBiZSB0cmVhdGVkIGFzIGEgbW9ub2NvIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIG1vbm9jbyBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBmdW5jdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICAgIHZhciBmdW5jTmFtZSA9ICcnLFxuICAgIGJlZ2luQm9keSA9IC0xLFxuICAgIGZ1bmNQYXJhbXMgPSAnJyxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICBwYXJhbXNDbGVhbiA9IFtdLFxuICAgIGZ1bmNCb2R5ID0gJycsXG4gICAgaGVhZGVyID0gJycsXG4gICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICAgIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG5cbiAgICBmdW5jTmFtZSA9IGhlYWRlci5zcGxpdCgnKCcpWzBdLnJlcGxhY2UoJ2Z1bmN0aW9uJywgJycpLnRyaW0oKTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG5cbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHBhcmFtc0NsZWFuLnB1c2gocGFyYW0udHJpbSgpKTtcbiAgICB9KTtcblxuICAgIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMSk7XG4gICAgZnVuY0JvZHkgPSBmdW5jQm9keS5zdWJzdHJpbmcoMCwgZnVuY0JvZHkubGFzdEluZGV4T2YoJ30nKSkudHJpbSgpO1xuXG4gICAgZnVuY05hbWUgPSBmdW5jTmFtZSB8fCBuYW1lO1xuXG4gICAgLy8gZm9yIGFjY2Vzc2luZyBtb25vY28gY29yZSBBUElzXG4gICAgaWYgKHVzZUNvcmVBUEkpIHtcbiAgICAgICAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckZGInKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRtZXRhbW9kZWwnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1swXSAhPT0gJycpIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiIChcIiArIHBhcmFtcy5qb2luKCcsJykgKyBcIikgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKCdcIiArIHBhcmFtcy5qb2luKFwiJywnXCIpICsgXCInLCBib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIE1vbm9jbyBEYXRhYmFzZS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGUgXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgbW9ub2NvIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gTW9ub2NvIERhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGFkZChpZCwgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG5cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdG9yZVtiZWhhdmlvcklkXSA9IGFjdGlvbjtcblxuICAgICRkYi5Nb25vY29CZWhhdmlvci5pbnNlcnQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJhY3Rpb25cIjogYWN0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgIFwidXNlQ29yZUFQSVwiOiB1c2VDb3JlQVBJXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuYmVoYXZpb3JJZCA9IHBhcmFtcy5iZWhhdmlvcklkIHx8ICcnO1xuICAgIHBhcmFtcy5jb21wb25lbnRJZCA9IHBhcmFtcy5jb21wb25lbnRJZCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudElkKSB7XG4gICAgICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgICAgICAgJGRiLk1vbm9jb0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRkYi5Nb25vY29CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgZGJSZXN1bHQgPSBbXSxcbiAgICBhY3Rpb24gPSBudWxsO1xuXG4gICAgZGJSZXN1bHQgPSAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgfSk7XG5cbiAgICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChiZWhhdmlvcikge1xuICAgICAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKGJlaGF2aW9yLnN0YXRlLCBiZWhhdmlvci5hY3Rpb24sIGJlaGF2aW9yLmNvcmUsIGJlaGF2aW9yLnVzZUNvcmVBUEkpO1xuICAgICAgICAgICAgc3RvcmVbYmVoYXZpb3IuX2lkXSA9IGFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBcImNvcmVcIjogYmVoYXZpb3IuY29yZSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy4gQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiB3aGVuIGEgc3BlY2lmaWMgc3RhdGUgb2YgYSBjb21wb25lbnQgd2lsbCBjaGFuZ2UuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1iZWhhdmlvclxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEBjbGFzcyBtb25vY28tYmVoYXZpb3JcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBNb25vY28gRGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIG1vbm9jbyBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGlkIG9mIHRoZSBiZWhhdmlvciBjcmVhdGVkIGluIE1vbm9jbyBEYXRhYmFzZVxuICovXG5leHBvcnRzLmFkZCA9IGFkZDtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuXG5cbi8qKlxuICogR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICovXG5leHBvcnRzLmdldEFjdGlvbnMgPSBnZXRBY3Rpb25zO1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIHN0b3JlZCBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjsiLCIvKiBcbiAqIE1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgeW91ciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQG1vbm9jb2pzXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IE1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbkVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU3ViIGNsYXNzIHRvIG92ZXJyaWRlIHB1c2ggYW5kIHBvcCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3MuXG4gKiBAY2xhc3MgbW9ub2NvQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbW9ub2NvQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICBhcnJEYiA9IFtdLFxuICAgIGNsYXNzSWQgPSAnJyxcbiAgICB0eXBlID0gJyc7XG5cbiAgICBjb25mID0gY29uZiB8fCB7fTtcbiAgICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8wqAnJztcbiAgICB0eXBlID0gY29uZi50eXBlIHx8wqAnJztcbiAgICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKG1vbm9jby5yZXF1aXJlKHZhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJyLnB1c2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHZhbC5jb25zdHJ1Y3Rvci5uYW1lID09PSBjbGFzc0lkIHx8ICRtZXRhbW9kZWwuY2hla1NjaGVtYSh2YWwsIGNsYXNzSWQpKSkge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aF0gPSB2YWw7XG4gICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhcnIucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgYXJyRGIucG9wKCk7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoganNoaW50IC1XMTAzICovXG4gICAgYXJyLl9fcHJvdG9fXyA9IG1vbm9jb0FycmF5LnByb3RvdHlwZTtcbiAgICAvKiBqc2hpbnQgK1cxMDMgKi9cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cbm1vbm9jb0FycmF5LnByb3RvdHlwZSA9IG5ldyBBcnJheTtcbi8qIGpzaGludCArVzA1OCAqL1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8wqBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgcHJvcE5hbWVzID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXQoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KG1vZGVsLl9zY2hlbWEpO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdmFyIGJvZHkgPSB7fTtcblxuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXQoY2xhc3NJZCksIHRydWUsIHRydWUpKSB7XG4gICAgICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldChjbGFzc0lkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInIGFyZSBub3QgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgICAgICAvLyBpZFxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuXG4gICAgICAgIC8vIGNsYXNzSW5mb1xuICAgICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcblxuICAgICAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoY2xhc3NJZCwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgY2xhc3NJZCArIFwiIChjb25maWcpIHsgYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGFzc0lkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkIChwcm9wLCB2YWwpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwcm9wLCB2YWwpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKG1vZGVsKTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpKSB7IC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbnVsbCxcbiAgICAgICAgICAgICAgICB2YWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbmV3IG1vbm9jb0FycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJyXCI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ub2NvQXJyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbm9jby5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1wiX2lkXCI6IHRoaXMuaWQoKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bMF0gPSB2YWx1ZS5pZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0cnlpbmcgdG8gZ2V0IHRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgdGhpcy5pZCgpICsgXCInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcIl9pZFwiOiB0aGlzLmlkKCl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIG1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiBldmVudChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudElkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5JbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIGRlc3Ryb3kgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGRldHJveSB0aGUgY2xhc3MgYW5kIGFsbCB0aGUgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkRGVzdHJveUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZERlc3Ryb3lDbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKCk7XG4gICAgICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgICAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgICAgICAgJGRiW2lkXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIHZhciBDbGFzcyA9IHt9LFxuICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgICB9XG5cbiAgICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gICAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICAgIGFkZElkKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZFByb3BlcnRpZXMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRFdmVudHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBwcm9wZXJ0aWVzL21ldGhvZHMgb25seSBpZiB0aGUgY29tcG9uZW50XG4gICAgLy8gaW5oZXJpdCBmcm9tIE1vbm9jb0NvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdNb25vY29Db21wb25lbnQnKSkge1xuICAgICAgICBhZGRPbihDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZERlc3Ryb3lDbGFzcyhDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICAgIHJldHVybiBDbGFzcztcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgICByZXR1cm4gZmFjdG9yeShjb25maWcpO1xufVxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lLlxuICogQG1ldGhvZCBpc0luc3RhbmNlT2ZcbiAqIEBwYXJhbSB7dHlwZX0gY29tcG9uZW50IGNvbXBvbmVudFxuICogQHBhcmFtIHt0eXBlfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lICBcbiAqL1xuZnVuY3Rpb24gaXNJbnN0YW5jZU9mKGNvbXBvbmVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH1cbiAgICByZXN1bHQgPSBjb21wb25lbnQgPT09IGNsYXNzTmFtZTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gZGVzdHJveShpZCkge1xuICAgIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF0sXG4gICAgY2xhc3NJZCA9ICcnO1xuXG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgICAgICBjbGFzc0lkID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICRkYltjbGFzc0lkXS5yZW1vdmUoe1xuICAgICAgICAgICAgXCJfaWRcIjogaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IE1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZS5cbiAqIEBtZXRob2QgaXNJbnN0YW5jZU9mXG4gKiBAcGFyYW0ge3R5cGV9IGNvbXBvbmVudCBjb21wb25lbnRcbiAqIEBwYXJhbSB7dHlwZX0gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZSAgXG4gKi9cbmV4cG9ydHMuaXNJbnN0YW5jZU9mID0gaXNJbnN0YW5jZU9mO1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuZGVzdHJveSA9IGRlc3Ryb3k7IiwiLypcbiAqIE1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgeW91ciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQG1vbm9jb2pzXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIE1vbm9jbyBEYXRhYmFzZS4gPGJyPlxuICogTW9ub2NvIERhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogTW9ub2NvIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIE1vbm9jbyBNZXRhbW9kZWwgYW5kIE1vbm9jbyBDb21wb25lbnQgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IE1vbm9jbyBEYXRhYmFzZSBtdXN0IGJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgYmVpbmcgZmluaXNoZWQsIDxicj5cbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kIDxicj5cbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKiAgXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fSxcbmNvbGxlY3Rpb25zID0gW10sXG5pbnRlcm5hbERCID0gW1xuICAgICdNb25vY28nLFxuICAgICdNb25vY29TY2hlbWEnLFxuICAgICdNb25vY29FeHRlbmRlZFNjaGVtYScsXG4gICAgJ01vbm9jb0JlaGF2aW9yJyxcbiAgICAnTW9ub2NvU3RhdGUnLFxuICAgICdNb25vY29UeXBlJyxcbiAgICAnTW9ub2NvTWV0YW1vZGVsJyxcbiAgICAnTW9ub2NvRGF0YWJhc2UnLFxuICAgICdNb25vY29TeXN0ZW0nLFxuICAgICdNb25vY29DbGFzc0luZm8nXG5dO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBUZXN0IGlmIGFuIG9iamVjdCBjb250YWlucyBhbm90aGVyIG9uZS5cbiAqIEBtZXRob2QgY29udGFpbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIG9iamVjdCBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgb3RhcmdldCBiamVjdCBcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNvdXJjZSBvYmplY3QgY29udGFpbnMgdGhlIHRhcmdldCBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgcHJvcGVydHkgPSB7fTtcblxuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGFyZ2V0W3Byb3BlcnR5XSAhPT0gc291cmNlW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKiBcbiAqIEEgY29sbGVjdGlvbiBvZiBkb2N1bWVudHMgbWFuYWdlZCBieSBNb25vY28uIDxicj5cbiAqIEludGVybmFsIGNvbGxlY3Rpb25zIG1hbmFnZSBjb3JlIG9iamVjdHMgb2YgTW9ub2NvIChzY2hlbWEsIHR5cGUsIC4uLikuIDxicj5cbiAqIFB1YmxpYyBjb2xsZWN0aW9ucyBtYW5hZ2UgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy4gPGJyPlxuICogXG4gKiBAY2xhc3MgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG5ldyBjb2xsZWN0aW9uXG4gKi9cbnZhciBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICgkbWV0YW1vZGVsLmdldChuYW1lKSB8fMKgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBzdG9yZVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoW3tcIm5hbWVcIjogXCJyZW5lXCJ9LCB7XCJuYW1lXCI6IFwicm9iZXJ0XCJ9XSk7XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICBpZCA9ICcnLFxuICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogSW5zZXJ0IGFuIG5ldyBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLiA8YnI+XG4gKiBCZWZvcmUgaW5zZXJ0aW5nIHRoZSBkb2N1bWVudCwgTW9ub2NvIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uIDxicj4gXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnNlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBkb2N1bWVudCBhIG5ldyBvYmplY3QgdG8gYWRkXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgaWQgY3JlYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uaW5zZXJ0KHs8YnI+XG4gKiAgICAgIFwibmFtZVwiOiBcImJvYlwiLCA8YnI+XG4gKiAgICAgIFwiZmlyc3ROYW1lXCI6IFwiU2FpbnQtQ2xhclwiLCA8YnI+XG4gKiAgICAgIFwiYWdlXCI6IDQzIDxicj5cbiAqIH0pOyA8YnI+XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgdmFyIGRvYyA9IFtdLFxuICAgIENvbXBvbmVudCA9IG51bGwsXG4gICAgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIGRvYy5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX2luc2VydChvYmopIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdNb25vY29TY2hlbWEnIHx8IHRoaXMubmFtZSA9PT0gJ01vbm9jb1R5cGUnIHx8IHRoaXMubmFtZSA9PT0gJ01vbm9jb0V4dGVuZGVkU2NoZW1hJyB8fCAkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldCh0aGlzLm5hbWUpKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9iai5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmVbdGhpcy5uYW1lXVtvYmouX2lkXSA9IG9iajtcbiAgICAgICAgICAgIENvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChvYmopO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykuaW5zZXJ0KHRoaXMubmFtZSwgb2JqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9LCB7XCJ1cHNlcnRcIjogdHJ1ZX0pOyA8YnI+XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZG9jcyA9IHRoaXMuZmluZChxdWVyeSksXG4gICAgdXBkYXRlZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gZG9jcy5sZW5ndGgsXG4gICAgYXR0cmlidXRlTmFtZSA9ICcnLFxuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KHRoaXMubmFtZSk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnVwc2VydCA9IG9wdGlvbnMudXBzZXJ0IHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUpIHtcblxuICAgICAgICAvLyB1cHNlcnQgY2FzZVxuICAgICAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICAgICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLl9pZCA9IHF1ZXJ5Ll9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHVwZGF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoYXR0cmlidXRlTmFtZSBpbiB1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFbYXR0cmlidXRlTmFtZV0gJiYgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGUgJiYgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkO1xufTtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGRvY3VtZW50IGZyb20gdGhlIGNvbGxsZWN0aW9uLiA8YnI+XG4gKiBXaGVuIGEgZG9jdW1lbnQgaXMgcmVtb3ZlZCwgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byByZW1vdmVcbiAqIEByZXR1cm4ge051bWJlcn0gbnVtYmVyIG9mIGRvY3VtZW50cyByZW1vdmVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLkNhcnMucmVtb3ZlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy5yZW1vdmUoW3tcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcImNvZGVcIjogXCJBWkQtNjVcIn1dKTsgPGJyPlxuICovXG5Nb25vY29EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSAwLFxuICAgIGlkID0gJycsXG4gICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICBvYmplY3QgPSB7fTtcblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG5cbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjb3VudFxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgb2JqZWN0SWQgPSAnJztcbiAgICBmb3IgKG9iamVjdElkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgcmVzdWx0Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICAgIGV4cG9ydHNbbmFtZV0gPSBuZXcgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufVxuXG5cbi8qXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBkdW1wKCkge1xuICAgIHZhciBkYkR1bXAgPSB7fSxcbiAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICB0eXBlSWQgPSAnJyxcbiAgICB0eXBlID0gbnVsbCxcbiAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBzY2hlbWFJZCA9ICcnLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICAvLyBzY2hlbWFzXG4gICAgZGJEdW1wLnNjaGVtYXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5Nb25vY29TY2hlbWEuY291bnQoKSkge1xuICAgICAgICBmb3IgKHNjaGVtYUlkIGluIHN0b3JlLk1vbm9jb1NjaGVtYSkge1xuICAgICAgICAgICAgc2NoZW1hID0gc3RvcmUuTW9ub2NvU2NoZW1hW3NjaGVtYUlkXTtcbiAgICAgICAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLnNjaGVtYXNbc2NoZW1hSWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5Nb25vY29UeXBlLmNvdW50KCkpIHtcbiAgICAgICAgZm9yICh0eXBlSWQgaW4gc3RvcmUuTW9ub2NvVHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuTW9ub2NvVHlwZVt0eXBlSWRdKSk7XG4gICAgICAgICAgICBkZWxldGUgdHlwZS5faWQ7XG4gICAgICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yc1xuICAgIGRiRHVtcC5iZWhhdmlvcnMgPSB7fTtcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3RvcmUuTW9ub2NvQmVoYXZpb3IpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLk1vbm9jb0JlaGF2aW9yW2JlaGF2aW9ySWRdKSk7XG4gICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgZGJEdW1wLmJlaGF2aW9yc1tiZWhhdmlvcklkXSA9IGJlaGF2aW9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgICAgICAgZGJEdW1wLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdID0gc3RvcmVbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRiRHVtcDtcbn1cblxuXG4vKlxuICogSW1wb3J0L0V4cG9ydCBhIE1vbm9jbyBTeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZVxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBNb25vY28gU3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIE1vbm9jbyBTeXN0ZW0gb3IgdGhlIGlmIG9mIHRoZSBjdXJyZW50IE1vbm9jbyBTeXN0ZW0gIFxuICovXG5mdW5jdGlvbiBzeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gJycsXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICBjb21wb25lbnRJZCA9ICcnLFxuICAgIHR5cGVOYW1lID0gJycsXG4gICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICBzeXN0ZW1zID0gW10sXG4gICAgaWQgPSBudWxsLFxuICAgIG1hc3RlcnN5c3RlbSA9IG51bGwsXG4gICAgYmVoYXZpb3IgPSBudWxsLFxuICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5Nb25vY29CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjb21wb25lbnRzXG4gICAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmluc2VydChpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXVtjb21wb25lbnRJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7J21hc3Rlcic6IHRydWV9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoICYmIHN5c3RlbXNbMF0uX2lkID09PSBpbXBvcnRlZFN5c3RlbS5faWQpIHtcbiAgICAgICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgICAgIGV4cG9ydHMuTW9ub2NvU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICAgICAgcmVzdWx0ID0gaW1wb3J0ZWRTeXN0ZW0uX2lkO1xuXG4gICAgfSBlbHNlIHsgLy8gZXhwb3J0XG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0gZHVtcCgpO1xuXG4gICAgICAgIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7J21hc3Rlcic6IHRydWV9KTtcblxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1hc3RlcnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgICAgICAgICBpZCA9IG1hc3RlcnN5c3RlbS5faWQ7XG4gICAgICAgICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRlZFN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF07XG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IuY29tcG9uZW50ID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS52ZXJzaW9uID0gbWFzdGVyc3lzdGVtLnZlcnNpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5kZXNjcmlwdGlvbiA9IG1hc3RlcnN5c3RlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLl9pZCA9IGlkO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShleHBvcnRlZFN5c3RlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLm1hc3RlclN5c3RlbU5vdEZvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogRXhwb3J0IGEgTW9ub2NvIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIE1vbm9jbyBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICAgIHZhciBzeXN0ZW0gPSB7fSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBkZWZhdWx0TmFtZSA9ICcnLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICB0eXBlID0gbnVsbCxcbiAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgcmVzdWx0ID0gbW9ub2NvLmZpbmQoJ01vbm9jb1N5c3RlbScsIHtcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICBkZWZhdWx0TmFtZSA9IHJlc3VsdFswXS5uYW1lKCk7XG4gICAgfVxuXG4gICAgc3lzdGVtLm5hbWUgPSBwYXJhbXMubmFtZSB8fCAnc3ViXycgKyBkZWZhdWx0TmFtZTtcbiAgICBzeXN0ZW0udmVyc2lvbiA9IHBhcmFtcy52ZXJzaW9uIHx8ICcwLjAuMSc7XG4gICAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8wqAnJztcblxuICAgIHN5c3RlbS5zdWJzeXN0ZW0gPSB0cnVlO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIHN5c3RlbS5zY2hlbWFzID0ge307XG4gICAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5zY2hlbWFzW3NjaGVtYS5faWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0eXBlID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCF0eXBlLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBzeXN0ZW0uYmVoYXZpb3JzID0ge307XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRzLk1vbm9jb0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiZWhhdmlvciA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3IuX2lkXSA9IGJlaGF2aW9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIHN5c3RlbS5jb21wb25lbnRzID0ge307XG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgIGZvciAoY2xhc3NOYW1lIGluIHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0c1tjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzeXN0ZW0pO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgTW9ub2NvIERhdGFiYXNlLiA8YnI+XG4gKiBNb25vY28gRGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBNb25vY28gRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gTW9ub2NvIE1ldGFtb2RlbCBiZWNhdXNlOiA8YnI+XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgTW9ub2NvIERhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICAgXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvblwifX17ey9jcm9zc0xpbmt9fS5cbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblxuXG4vKipcbiAqIE1vbm9jbyBEYXRhYmFzZSBzdG9yZSB0aGF0IGxpc3QgYWxsIHRoZSBjb2xsZWN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKlxuICogRHVtcCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5kdW1wID0gZHVtcDtcblxuXG4vKipcbiAqIEltcG9ydC9FeHBvcnQgYSBNb25vY28gU3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIE1vbm9jbyBTeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgTW9ub2NvIFN5c3RlbSBvciB0aGUgY3VycmVudCBNb25vY28gU3lzdGVtICBcbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG5cblxuLyoqXG4gKiBFeHBvcnQgYSBNb25vY28gc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgTW9ub2NvIHN1Yi1zeXN0ZW1cbiAqIFxuICogQGV4YW1wbGVcbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJ0eXBlc1wiOntcIm5hbWVcIjpcImFkZHJlc3NcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiB0eXBlcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImJlaGF2aW9yc1wiOntcImNvbXBvbmVudFwiOlwibGF1cmVcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGZpbHRlciBleHBvcnQgb24gY29tcG9uZW50cyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn0sXCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5leHBvcnRzLnN1YnN5c3RlbSA9IHN1YnN5c3RlbTsiLCIvKiBcbiAqIE1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgeW91ciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQG1vbm9jb2pzXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEBjbGFzcyBtb25vY28taGVscGVyXG4gKiBAc3RhdGljXG4gKi9cblxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0eSAqL1xuXG52YXIgbW9ub2NvUmVmID0gbnVsbDtcblxuXG4vKiBQdWJsaWMgbWV0aG9kICovXG5cblxuLypcbiAqIENoZWNrIGlmIGEgTW9ub2NvIGluc3RhbmNlIGV4aXN0c1xuICogQG1ldGhvZCBpc01vbm9jb1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIE1vbm9jbyBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc01vbm9jbygpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoJGRiLk1vbm9jbyAmJiAkZGIuTW9ub2NvLmZpbmQoKS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGluc3RhbmNlIG9mIE1vbm9jb1xuICogQG1ldGhvZCBnZXRNb25vY29cbiAqIEByZXR1cm4ge01vbm9jb30gbW9ub2NvIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGdldE1vbm9jbygpIHtcbiAgICB2YXIgbW9ub2NvSWQgPSAnJztcblxuICAgIGlmICghbW9ub2NvUmVmKSB7XG4gICAgICAgIGlmIChpc01vbm9jbygpKSB7XG4gICAgICAgICAgICBtb25vY29JZCA9ICRkYi5Nb25vY28uZmluZCgpWzBdLl9pZDtcbiAgICAgICAgICAgIG1vbm9jb1JlZiA9ICRjb21wb25lbnQuZ2V0KG1vbm9jb0lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbm9jb1JlZiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ21vbm9jbzogJyArIGVyciwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdtb25vY286ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbm9jb1JlZjtcbn1cblxuXG4vKlxuICogR2VuZXJhdGUgYSB1aWRcbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHVpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICAgIGZ1bmN0aW9uIGdlbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEBjbGFzcyBtb25vY28taGVscGVyXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgTW9ub2NvXG4gKiBAbWV0aG9kIGdldE1vbm9jb1xuICogQHJldHVybiB7TW9ub2NvfSBtb25vY28gaW5zdGFuY2VcbiAqL1xuZXhwb3J0cy5nZXRNb25vY28gPSBnZXRNb25vY287XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIE1vbm9jbyBpbnN0YW5jZSBleGlzdHNcbiAqIEBtZXRob2QgaXNNb25vY29cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBNb25vY28gaW5zdGFuY2UgZXhpc3RcbiAqL1xuZXhwb3J0cy5pc01vbm9jbyA9IGlzTW9ub2NvO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSB1aWRcbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHVpZFxuICovXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBnZW5lcmF0ZUlkOyIsIi8qIFxuICogTW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciB5b3VyIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAbW9ub2NvanNcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWxvZ1xuICogQEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnO1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5KHByb3BlcnR5TmFtZSwgc2NoZW1hKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChzY2hlbWFbSURdKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiBcIiArIHNjaGVtYVtJRF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBtZXRhIGF0dHJpYnV0ZSBcIiArIEpTT04uc3RyaW5naWZ5KHNjaGVtYSk7XG4gICAgfVxuXG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKG1lc3NhZ2UpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlKHByb3BlcnR5TmFtZSwgdHlwZSwgcHJvcGVydHkpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIEpTT04uc3RyaW5naWZ5KHByb3BlcnR5TmFtZSkgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgcHJvcGVydHkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdmFsdWUgZm9yIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHZhbHVlIGZvciB0aGUgZW51bSB2YWx1ZSAnXCIgKyB2YWx1ZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mIFwiICsgdHlwZW9mIHZhbHVlICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2xhc3NOYW1lKGNvbXBvbmVudElkLCB0eXBlLCBjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIGNvbnN0cnVjdG9yTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTWlzc2luZyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5KHByb3BlcnR5TmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTb3VyY2UgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzVG9JbXAgdGhlIGNsYXNzIHRvIGltcGxlbWVudFxuICovXG5mdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24oY2xhc3NTb3VyY2UsIGNsYXNzVG9JbXApIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjbGFzcyAnXCIgKyBjbGFzc1NvdXJjZSArIFwiJyBpcyBtaXNzaW5nIGZvciB0aGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIGNsYXNzICdcIiArIGNsYXNzVG9JbXAgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIHNjaGVtYSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArIHNjaGVtYVtJRF0gKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgYSB0eXBlIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKGRlZikge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImNhbiBub3QgbG9hZCB0aGUgdHlwZSBkZWZpbml0aW9uIFwiICsgZGVmKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwcm9wZXJ0eSBuYW1lLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZS5pbmRleE9mKFwiI1wiKSAhPT0gLTEpIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBuYW1lIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkoaWQsIHByb3BlcnR5TmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSBcIiArIHByb3BlcnR5TmFtZSArIFwiIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIE1vbm9jbyBEYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZE9iamVjdE9uSW5zZXJ0KGRvYywgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIGRvY3VtZW50IFwiICsgSlNPTi5zdHJpbmdpZnkoZG9jKSArIFwiIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiBcIiArIGNvbGxlY3Rpb25OYW1lKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwcm9wZXJ0eSBvbiBhIE1vbm9jbyBEYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoY29sbGVjdGlvbk5hbWUsIGlkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZS5pbmRleE9mKFwiI1wiKSAhPT0gLTEpIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uIFwiICsgY29sbGVjdGlvbk5hbWUgKyBcIjogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29sbGVjdGlvbiBcIiArIGNvbGxlY3Rpb25OYW1lICsgXCI6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIHVua25vd25NZXRob2QoY2xhc3NJZCwgbWV0aG9kTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgZm9yIHRoZSBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIic6IHRoZXJlIGlzIG5vIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGluIHRoZSBtZXRhbW9kZWxcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIG9uIHRoZSByZXN1bHQgb2YgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rb3duIGNsYXNzIGNvbXBvbmVudCAnXCIgKyBjbGFzc05hbWUgKyBcIicgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIE1vbm9jbyB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmZ1bmN0aW9uIHdvcmtmbG93UmVzdGFydGVkKCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZygnbW9ub2NvIGhhcyBiZWVuIHJlc3RhcnRlZCcpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBwYXJhbWV0ZXJzIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1UeXBlKGlkLCBtZXRob2ROYW1lLCBwYXJhbU5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBwYXJhbWV0ZXIgJ1wiICsgcGFyYW1OYW1lICsgXCInIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGJlaGF2aW9yTm90VW5pcXVlKGlkLCBzdGF0ZU5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZS5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFN0YXRlT24oaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPZmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFN0YXRlT2ZmKGlkLCBzdGF0ZU5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ0cnkgdG8gcmVtb3ZlIGEgYmVoYXZpb3IgZnJvbSBhbiB1bmt3b3duIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBNYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZnVuY3Rpb24gbWFzdGVyU3lzdGVtTm90Rm91bmQoKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHZhbHVlICdcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua25vd24gdHlwZS5cbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICovXG5mdW5jdGlvbiB1bmtub3duVHlwZSh2YWx1ZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInVua25vd24gdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gYWxyZWF5IGNyZWF0ZWQuXG4gKiBAbWV0aG9kIGNhbk5vdFlldFZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgKyBKU09OLnN0cmluZ2lmeShpZCkgKyBcIicgaXMgYW4gaW5zdGFuY2Ugb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDb21wb25lbnQgYWxyZWFkeSBkZXN0cm95ZWQuXG4gKiBAbWV0aG9kIGNvbXBvbmVudERlc3Ryb3llZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50RGVzdHJveWVkKGlkKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCBjYWxsIGEgbWV0aG9kIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJzogdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWRcIik7XG59XG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWxvZ1xuICogQEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eSA9IHVua25vd25Qcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZSA9IGludmFsaWRQcm9wZXJ0eVR5cGU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHZhbHVlIGZvciBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1WYWx1ZSA9IGludmFsaWRFbnVtVmFsdWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDbGFzc05hbWUgPSBpbnZhbGlkQ2xhc3NOYW1lO1xuXG5cbi8qKlxuICogTWlzc2luZyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHkgPSBtaXNzaW5nUHJvcGVydHk7XG5cblxuLyoqXG4gKiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTb3VyY2UgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzVG9JbXAgdGhlIGNsYXNzIHRvIGltcGxlbWVudFxuICovXG5leHBvcnRzLm1pc3NpbmdJbXBsZW1lbnRhdGlvbiA9IG1pc3NpbmdJbXBsZW1lbnRhdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZUltcCA9IGludmFsaWRUeXBlSW1wO1xuXG5cbi8qKlxuICogTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5SW1wID0gbWlzc2luZ1Byb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogVW5rb3duIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlJbXAgPSB1bmtub3duUHJvcGVydHlJbXA7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmIGEgdHlwZSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gaW52YWxpZFR5cGVEZWZpbml0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCBwcm9wZXJ0eSB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eU5hbWUgPSBpbnZhbGlkUHJvcGVydHlOYW1lO1xuXG5cbi8qKlxuICogVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5yZWFkT25seVByb3BlcnR5ID0gcmVhZE9ubHlQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgZG9jdW1lbnQgb24gYSBNb25vY28gRGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZERvY3VtZW50T25EYkluc2VydCA9IGludmFsaWRPYmplY3RPbkluc2VydDtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBNb25vY28gRGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gdW5rbm93bk1ldGhvZDtcblxuXG4vKipcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGludmFsaWRDb2xsZWN0aW9uTmFtZTtcblxuXG4vKipcbiAqIEludmFsaWQgcmVzdWx0IHR5cGUgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFJlc3VsdFR5cGUgPSBpbnZhbGlkUmVzdWx0VHlwZTtcblxuXG4vKipcbiAqIFVua25vd24gY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25Db21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICovXG5leHBvcnRzLnVua25vd25Db21wb25lbnQgPSB1bmtub3duQ29tcG9uZW50O1xuXG5cbi8qKlxuICogVGhlIE1vbm9jbyB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSB3b3JrZmxvd1Jlc3RhcnRlZDtcblxuXG4vKipcbiAqIEludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBpbnZhbGlkUGFyYW1OdW1iZXI7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gaW52YWxpZFBhcmFtVHlwZTtcblxuXG4vKipcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0cy5iZWhhdmlvck5vdFVuaXF1ZSA9IGJlaGF2aW9yTm90VW5pcXVlO1xuXG5cbi8qKlxuICogQ2FuIG5vdCBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIGludmFsaWQgc3RhdGUuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBpbnZhbGlkU3RhdGVPbjtcblxuXG4vKipcbiAqIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZC5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gaW52YWxpZFN0YXRlT2ZmO1xuXG5cbi8qKlxuICogVGhlIE1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gbWFzdGVyU3lzdGVtTm90Rm91bmQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gaW52YWxpZFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZXhwb3J0cy51bmtub3duVHlwZSA9IHVua25vd25UeXBlO1xuXG5cbi8qKlxuICogQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkLlxuICogQG1ldGhvZCBjYW5Ob3RZZXRWYWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jYW5Ob3RZZXRWYWxpZGF0ZSA9IGNhbk5vdFlldFZhbGlkYXRlO1xuXG5cbi8qKlxuICogQ29tcG9uZW50IGFscmVhZHkgZGVzdHJveWVkLlxuICogQG1ldGhvZCBjb21wb25lbnREZXN0cm95ZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuY29tcG9uZW50RGVzdHJveWVkID0gY29tcG9uZW50RGVzdHJveWVkOyIsIi8qIFxuICogTW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciB5b3VyIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAbW9ub2NvanNcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgTW9ub2NvIE1ldGFtb2RlbC4gPGJyPlxuICogTW9ub2NvIE1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLXdvcmtmbG93XG4gKiBAY2xhc3MgbW9ub2NvLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCcsXG5OQU1FID0gJ19uYW1lJyxcbklOSEVSSVRTID0gJ19pbmhlcml0JyxcblNDSEVNQSA9ICdfc2NoZW1hJyxcbkNMQVNTID0gJ19jbGFzcycsXG5DT1JFID0gJ19jb3JlJyxcbkVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdtZXRob2QnLCAnZXZlbnQnXSxcbmRlZmF1bHRUeXBlcyA9IFsnYm9vbGVhbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ29iamVjdCcsICdmdW5jdGlvbicsICdhcnJheSddLFxuc3RvcmUgPSB7XG4gICAgbWV0YWRlZjoge30sXG4gICAgY2F0YWxvZzoge30sXG4gICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgbW9kZWw6IHt9LFxuICAgIHN0YXRlczoge30sXG4gICAgdHlwZToge30sXG4gICAgaW1wbGVtZW50YXRpb246IHt9XG59O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG4gKiBAbWV0aG9kIGNyZWF0ZUluaGVyaXRhbmNlVHJlZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCkge1xuICAgIHZhciBpZCA9IG51bGwsXG4gICAgZmF0aGVySWQgPSBudWxsLFxuICAgIG5ld0lkID0gbnVsbDtcblxuICAgIGZvciAoaWQgaW4gc3RvcmUuaW5oZXJpdGFuY2UpIHtcbiAgICAgICAgZmF0aGVySWQgPSBzdG9yZS5pbmhlcml0YW5jZVtpZF07XG4gICAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0gPSBbXTtcblxuICAgICAgICB3aGlsZSAoZmF0aGVySWQpIHtcbiAgICAgICAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0ucHVzaChmYXRoZXJJZCk7XG4gICAgICAgICAgICBuZXdJZCA9IGZhdGhlcklkO1xuICAgICAgICAgICAgZmF0aGVySWQgPSBzdG9yZS5pbmhlcml0YW5jZVtuZXdJZF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEV4dGVuZCBhIHNjaGVtYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnQuXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHt0eXBlfSBpZCBpZCBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybiB7SlNPTn0gb2JqZWN0IGV4dGVuZGVkIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGlkKSB7XG4gICAgdmFyIHNvbkV4dGVuZCA9IHt9LFxuICAgIHNvbiA9IHN0b3JlLmNhdGFsb2dbaWRdLFxuICAgIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBhbmNlc3RvciA9IG51bGwsXG4gICAgcHJvcCA9ICcnO1xuXG4gICAgaWYgKGFuY2VzdG9ycykge1xuICAgICAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgICAgICBhbmNlc3RvcnMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYW5jZXN0b3IgPSBzdG9yZS5jYXRhbG9nW2FuY2VzdG9yc1tpXV07XG4gICAgICAgIGZvciAocHJvcCBpbiBhbmNlc3Rvcikge1xuICAgICAgICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHNvbikge1xuICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBzb25FeHRlbmQ7XG59XG5cblxuLypcbiAqIEFkZCB0aGUgbW9kZWxzLlxuICogQG1ldGhvZCBjcmVhdGVNb2RlbFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW9kZWwoKSB7XG4gICAgdmFyIGlkID0gJyc7XG4gICAgZm9yIChpZCBpbiBzdG9yZS5jYXRhbG9nKSB7XG4gICAgICAgIHN0b3JlLm1vZGVsW2lkXSA9IGV4dGVuZChpZCk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGFsbCB0aGUgc2NoZW1hIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlaXIgc2NoZW1hcy5cbiAqIEBtZXRob2QgY2hlY2tJbXBsZW1lbnRhdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICB2YXIgaWQgPSAnJyxcbiAgICBjbGFzc0RlZiA9IG51bGwsXG4gICAgY2xhc3NJbXAgPSAnJztcblxuICAgIGZvciAoaWQgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgY2xhc3NEZWYgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgICAgIGlmIChjbGFzc0RlZiAmJiB0eXBlb2YgY2xhc3NEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNsYXNzSW1wID0gc3RvcmUubW9kZWxbY2xhc3NEZWZbU0NIRU1BXV07XG4gICAgICAgICAgICBpZiAoY2xhc3NJbXApIHtcbiAgICAgICAgICAgICAgICBjaGVja0ltcChjbGFzc0RlZiwgY2xhc3NJbXApO1xuICAgICAgICAgICAgICAgIHN0b3JlLmltcGxlbWVudGF0aW9uW2NsYXNzRGVmW0lEXV0gPSBjbGFzc0ltcFtJRF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ0ltcGxlbWVudGF0aW9uKGNsYXNzRGVmW1NDSEVNQV0sIGNsYXNzRGVmW0lEXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tTdGF0ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU3RhdGVzKCkge1xuICAgIHZhciBpZCA9ICcnLFxuICAgIGNsYXNzRGVmID0gbnVsbCxcbiAgICB0eXBlID0gJycsXG4gICAgc3RhdGVzID0gW10sXG4gICAgYXR0cmlidXRlID0gJyc7XG5cbiAgICBmb3IgKGlkIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIHN0YXRlcyA9IFtdO1xuICAgICAgICBjbGFzc0RlZiA9IHN0b3JlLm1vZGVsW2lkXTtcbiAgICAgICAgaWYgKGNsYXNzRGVmICYmIHR5cGVvZiBjbGFzc0RlZltTQ0hFTUFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gY2xhc3NEZWYpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gY2xhc3NEZWZbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlLmluZGV4T2YoJ18nKSAhPT0gMCAmJiBpbnRlcm5hbFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0b3JlLnN0YXRlc1tpZF0gPSBzdGF0ZXM7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGl0cyBzY2hlbWEuXG4gKiBAbWV0aG9kIGNoZWNrSW1wXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzRGVmIHNjaGVtYSB0byB0ZXN0IFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0ltcCBzY2hlbWEgdG8gdmFsaWRhdGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCkge1xuICAgIHZhciBwcm9wZXJ0eSA9ICcnLFxuICAgIHZhbHVlID0gbnVsbDtcbiAgICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICAgIHByb3BlcnR5ICE9PSBTQ0hFTUEgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgIHByb3BlcnR5ICE9PSBDT1JFKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzRGVmW3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNsYXNzRGVmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVJbXAocHJvcGVydHksIGNsYXNzRGVmW0lEXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgICBmb3IgKHByb3BlcnR5IGluIGNsYXNzRGVmKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICAgIHByb3BlcnR5ICE9PSBTQ0hFTUEgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgIHByb3BlcnR5ICE9PSBDT1JFKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzSW1wW3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlLlxuICogQG1ldGhvZCBjaGVja1NjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2NoZW1hKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmIGRlZmF1bHRUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgY29ycmVjdCBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tDdXN0b21TY2hlbWFcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZVtpXSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmUuXG4gKiBAbWV0aG9kIGluaXREYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29TY2hlbWEnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvRXh0ZW5kZWRTY2hlbWEnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvQ2xhc3NJbmZvJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb0JlaGF2aW9yJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb1N0YXRlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb1R5cGUnKTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uKS5cbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICBtb2RlbERlZiA9IHt9LFxuICAgIHR5cGVOYW1lID0gJyc7XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5jYXRhbG9nKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuY2F0YWxvZ1ttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuTW9ub2NvU2NoZW1hLmluc2VydChtb2RlbERlZik7XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mICRkYlttb2RlbERlZltJRF1dID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltJRF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5tb2RlbFttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuTW9ub2NvRXh0ZW5kZWRTY2hlbWEuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG5cbiAgICBmb3IgKHR5cGVOYW1lIGluIHN0b3JlLnR5cGUpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgICAgICAgbW9kZWxEZWYuX2lkID0gbW9kZWxEZWYubmFtZTtcbiAgICAgICAgJGRiLk1vbm9jb1R5cGUuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGNvbXBvbmVudC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIGFsbCB0aGUgQ2xhc3NJbmZvIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NJbmZvXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0luZm8oKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kZWxEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGRiLk1vbm9jb0NsYXNzSW5mby5pbnNlcnQoe1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IG1vZGVsRGVmLl9pZCArICdJbmZvJyxcbiAgICAgICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBzdG9yZS5tb2RlbFttb2RlbERlZltTQ0hFTUFdXSxcbiAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0IC8gdHlwZS5cbiAqIEBtZXRob2QgZ2V0UmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSAmJlxuICAgIGRlZmF1bHRUeXBlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAhaXNSZWZlcmVuY2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgcmVmZXJlbmNlLlxuICogQG1ldGhvZCBpc1JlZmVyZW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZignQCcpICE9PSAtMTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZS5cbiAqIEBtZXRob2QgZ2V0VHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSB0eXBlIG9mIHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gJyc7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdC5cbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG9iaikge1xuICAgIHJldHVybiBvYmouY29uc3RydWN0b3IubmFtZTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBlbnVtVmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtVmFsdWUodmFsdWUsIGVudW1WYWx1ZSkge1xuICAgIHJldHVybiBlbnVtVmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGhhcyB0aGUgc3BlY2lmaWVkIHR5cGUuXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcGFyYW0ge3R5cGV9IHR5cGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlzIHZhbHVlIGhhcyB0eXBlICd0eXBlJ1xuICovXG5mdW5jdGlvbiBoYXNUeXBlKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgcmVzdWx0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlc3VsdCA9ICh0eXBlID09PSB0eXBlb2YgdmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgc2NoZW1hIHRvIGFkZFxuICovXG5mdW5jdGlvbiBzY2hlbWEoaW1wb3J0ZWRTY2hlbWEpIHtcbiAgICB2YXIgaWQgPSBpbXBvcnRlZFNjaGVtYVtJRF0sXG4gICAgaW5oZXJpdCA9IGltcG9ydGVkU2NoZW1hW0lOSEVSSVRTXSxcbiAgICBuYW1lID0gaW1wb3J0ZWRTY2hlbWFbTkFNRV0sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIC8vIGlmIG5vIGlkLCBpdCB3aWxsIGJlIHRoZSBuYW1lIGJ5IGRlZmF1bHRcbiAgICBpZiAoaGFzVHlwZShpZCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlkID0gbmFtZTtcbiAgICAgICAgaW1wb3J0ZWRTY2hlbWFbSURdID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkU2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG5cbiAgICAgICAgc3RvcmUuY2F0YWxvZ1tpZF0gPSBpbXBvcnRlZFNjaGVtYTtcbiAgICAgICAgaWYgKGluaGVyaXQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGluaGVyaXQubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaWRdID0gaW5oZXJpdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBzY2hlbWEgJ1wiICsgSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRTY2hlbWEpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlXG4gKi9cbmZ1bmN0aW9uIHR5cGUoaW1wb3J0ZWRUeXBlKSB7XG4gICAgdmFyIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgc3RvcmUudHlwZVtuYW1lXSA9IGltcG9ydGVkVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKGltcG9ydGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0aGUgdHlwZSAnXCIgKyBKU09OLnN0cmluZ2lmeShpbXBvcnRlZFR5cGUpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBzdG9yZS5tZXRhZGVmID0ge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgY2F0YWxvZzoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgbW9kZWw6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fSxcbiAgICAgICAgaW1wbGVtZW50YXRpb246IHt9XG4gICAgfTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gICAgY3JlYXRlTW9kZWwoKTtcbiAgICBjaGVja0ltcGxlbWVudGF0aW9uKCk7XG4gICAgY2hlY2tTdGF0ZXMoKTtcbiAgICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUNsYXNzKCk7XG4gICAgY3JlYXRlQ2xhc3NJbmZvKCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbaWRdLFxuICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtpZF0sXG4gICAgc3RhdGUgPSB7fTtcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbSURdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKHZhbHVlKSAhPT0gdHlwZVJlZikge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZSh2YWx1ZS5pZCgpLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVOYW1lLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIGVudW0gdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoaXNSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9ICRjb21wb25lbnQuaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVmZXJlbmNlKHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgIGZpZWxkID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlLFxuICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgIHR5cGVSZWYgPSAnJyxcbiAgICByZWFsVHlwZSA9ICcnLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgZW51bVZhbHVlID0gW107XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZCwgdHlwZVJlZiwgZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWZcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qob2JqZWN0LCBzY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgZmllbGQgPSBudWxsLFxuICAgIHJlc3VsdCA9IHRydWUsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgdHlwZVJlZiA9ICcnLFxuICAgIHJlYWxUeXBlID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1R5cGUoY2xlYW5SZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBzdHJpY3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSBjdXN0b20gdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIGN1c3RvbSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICB0eXBlU2NoZW1hID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICAgICAgaWYgKHR5cGVTY2hlbWEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hLnNjaGVtYSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hLnNjaGVtYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKCkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgIGNvbXAgPSBudWxsLFxuICAgICAgICBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5pZCkge1xuICAgICAgICAgICAgY29tcCA9IGZpZWxkO1xuICAgICAgICAgICAgaXNDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzVHlwZShjb21wLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcCkgIT09IHR5cGVSZWYpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkZWZhdWx0IHZhbHVlIG9mIGFuIG9iamVjdCAoe30gb3IgbnVsbClcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSAmJiBmaWVsZCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoKTpcbiAgICAgICAgICAgICAgICBjYXNlIGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTpcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgdHlwZUFycmF5ID0gJyc7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBnZXRUeXBlKHR5cGVTY2hlbWEpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGQpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkKSAhPT0gdHlwZVNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFycmF5ID0gdHlwZVNjaGVtYVswXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlQXJyYXldLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZFtpXSkgIT09IHR5cGVBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkW2ldLCB0eXBlQXJyYXksIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGRbaV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzZSBvZiBhbiBpbXBvcnQgb2YgYSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSAhPT0gZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENsYXNzTmFtZShmaWVsZFtpXSkgIT09IGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCAnYXJyYXknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25UeXBlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU9iamVjdChvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICBmaWVsZCA9IG51bGwsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICBkZWZhdWx0VmFsdWUgPSAnJztcblxuICAgIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAoc3RvcmUubW9kZWxbaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IHN0b3JlLm1vZGVsW2lkXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHBhcmVudHMgb2YgYSBzaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge0FycmF5fSBpZCBvZiB0aGUgcGFyZW50c1xuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIG1vZGVsID0gbnVsbDtcblxuICAgIG1vZGVsID0gc3RvcmUubW9kZWxbaWRdO1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgICByZXN1bHQgPSBtb2RlbFtJTkhFUklUU107XG4gICAgfVxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICAgIC8qXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAgICogQG1ldGhvZCBfc2VhcmNoUGFyZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2VhcmNoUGFyZW50KGNsYXNzTmFtZSwgYW5jZXN0b3JOYW1lKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2UsXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBpc0FuY2VzdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIGFuY2VzdG9yTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBbmNlc3RvcjtcbiAgICB9XG5cbiAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhuYW1lKTtcbiAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihwYXJlbnROYW1lKSAhPT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgcGFyZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgTW9ub2NvIE1ldGFtb2RlbC4gPGJyPlxuICogTW9ub2NvIE1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLXdvcmtmbG93XG4gKiBAY2xhc3MgbW9ub2NvLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHNjaGVtYS5cbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAbWV0aG9kIHNjaGVtYVxuICovXG5leHBvcnRzLnNjaGVtYSA9IHNjaGVtYTtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQHBhcmFtIHtKU09OfSB0eXBlXG4gKiBAbWV0aG9kIHR5cGVcbiAqL1xuZXhwb3J0cy50eXBlID0gdHlwZTtcblxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRQYXJlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmV4cG9ydHMuZ2V0UGFyZW50cyA9IGdldFBhcmVudHM7XG5cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gaW5oZXJpdEZyb207XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuXG5cbi8qKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5wcmVwYXJlT2JqZWN0ID0gcHJlcGFyZU9iamVjdDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5leHBvcnRzLmlzVmFsaWRUeXBlID0gaXNWYWxpZFR5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gaXNWYWxpZEVudW07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gaXNWYWxpZFN0YXRlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGlzRXZlbnQ7IiwiLyogXG4gKiBNb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIHlvdXIgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBtb25vY29qc1xuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIE1vbm9jby4gPGJyPlxuICogSXQgaW5pdHMgTW9ub2NvIE1ldGFtb2RlbCBhbmQgbG9hZHMgdGhlIE1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbnN5c3RlbSA9ICcnO1xuXG5cbi8qIEluaXQgTWV0YW1vZGVsICovXG5cblxuJG1ldGFtb2RlbC5pbml0KCk7XG5cblxuLyogSW5pdCBNb25vY28gZnJvbSBhIE1vbm9jbyBTeXN0ZW0gKi9cblxuXG5zeXRlbUlkID0gJGRiLnN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5zeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXRlbUlkKTtcbnN5c3RlbS5tYWluKCk7XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIE1vbm9jby4gPGJyPlxuICogSXQgaW5pdHMgTW9ub2NvIE1ldGFtb2RlbCBhbmQgbG9hZHMgdGhlIE1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBNb25vY28gaW5zdGFuY2UuXG4gKiBAcHJvcGVydHkgbW9ub2NvXG4gKiBAdHlwZSBNb25vY29cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgnbW9ub2NvJyk7IiwiLyogXG4gKiBNb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIHlvdXIgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBtb25vY29qc1xuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQGNsYXNzIG1vbm9jby1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXQoaWQsIHN0YXRlKSB7XG4gICAgc3RvcmVbaWRdID0gc3RhdGU7XG4gICAgJGRiLnN0b3JlLk1vbm9jb1N0YXRlW2lkXSA9IHtcIm5hbWVcIjogc3RhdGV9O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGUgY29tcG9uZW50cy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAY2xhc3MgbW9ub2NvLXN0YXRlXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuc2V0ID0gc2V0O1xuXG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0IFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyOyIsIi8qIFxuICogTW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciB5b3VyIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAbW9ub2NvanNcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIE1vbm9jby4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBtb25vY28uIDxicj5cbiAqIElmIHRoZSBlcnJvciBjYW4gYnJlYWsgdGhlIGNvbnNpc3RlbmN5IG9mIHRoZSBjdXJyZW50IHN5c3RlbSwgdGhlIHdvcmtsb3cgd2lsbCBzdG9wLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28td29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby1iZWhhdmlvclxuICogQHJlcXVpcmVzIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAY2xhc3MgbW9ub2NvLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qKlxuICogVGhlIE1vbm9jb0Vycm9yIGNsYXNzLlxuICogQGNsYXNzIE1vbm9jb0Vycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugb2YgdGhlIGVycm9yXG4gKi9cbmZ1bmN0aW9uIE1vbm9jb0Vycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubmFtZSA9IFwiTW9ub2NvRXJyb3JcIjtcbn1cbk1vbm9jb0Vycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuTW9ub2NvRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTW9ub2NvRXJyb3I7XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXIgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgbWV0aG9kIGZvciB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBtaW4gPSAwLFxuICAgIG1heCA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSAndW5kZWZpbmVkJyB8fCBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IG1pbiArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1heCA9IG1heCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gobWluKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobWF4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFxuICogU2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBub24gbWFuZGF0b3J5IHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybiB7QXJyYXl9IGFyZ3VtZW50cyB3aXRoIGRlZmF1bHQgdmFsdWVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0eXBlIHJldHVybmVkIGJ5IHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJldHVyblR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcmVzdWx0VHlwZSA9IG51bGwsXG4gICAgcmVzdWx0ID0gbnVsbDtcblxuICAgIHJlc3VsdFR5cGUgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV0ucmVzdWx0O1xuICAgIGlmIChyZXN1bHRUeXBlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFR5cGU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBtZXRob2QgZ2V0UGFyYW1UeXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIHR5cGVzIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbVR5cGVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0udHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIG91dHB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbFxuICogQG1ldGhvZCBjaGVja1Jlc3VsdFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb25zIG9uIG91cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Jlc3VsdChwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsLFxuICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fMKgJycsXG4gICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdCB8fCB1bmRlZmluZWQsXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgcmV0dXJuVHlwZSA9IG51bGwsXG4gICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKHJldHVyblR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJldHVyblR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBhY3Rpb25zIG9mIHRoZSBzcGVjaWZpZWQgc3RhcnRlXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBNb25vY28gQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0V2ZW50IHRydWUgaWYgdGhlIHN0YXRlIGlzIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhjb21wb25lbnQsIG5hbWUsIGlzRXZlbnQpIHtcbiAgICB2YXIgYWN0aW9uID0gJGJlaGF2aW9yLmdldEFjdGlvbnMoY29tcG9uZW50LmlkKCksIG5hbWUpLFxuICAgIHBhcmVudHMgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHBhcmVudCA9IG51bGw7XG5cbiAgICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkY29tcG9uZW50LmdldChwYXJlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucyhwYXJlbnQsIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Db21wb25lbnQocGFyZW50c1tpXSwgY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG59XG5cblxuLypcbiAqIENhbGwgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICogQG1ldGhvZCBjYWxsQWN0aW9uXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNhbGxBY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICBpbmplY3RlZFBhcmFtcyA9IFtdLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJhbXMgPSBzZXREZWZhdWx0VmFsdWUoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIHN0YXRlLCBwYXJhbXMpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGFjdGlvbi5jb3JlKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChwYXJhbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkY29tcG9uZW50KTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGRiKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJG1ldGFtb2RlbCk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKGV4cG9ydHMpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkYmVoYXZpb3IpO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYWN0aW9uLmFjdGlvbi5hcHBseShjb21wb25lbnQsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ub2NvRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50LmlkKCkgKyBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5nZXRNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50LmlkKCkgKyBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgY2FsbGluZyB0aGUgYWN0aW9uLlxuICogQG1ldGhvZCBjaGVja1BhcmFtc1xuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjaGVja1BhcmFtcyhwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsLFxuICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fMKgJycsXG4gICAgYXJncyA9IHBhcmFtcy5hcmdzIHx8wqAnJyxcbiAgICBwYXJhbXNOYW1lID0gW10sXG4gICAgcGFyYW1zVHlwZSA9IFtdLFxuICAgIHBhcmFtc051bWJlciA9IFtdLFxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgIGkgPSAwLFxuICAgIHBhcmFtID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgLy8gY2FzZSBvZiBvYmplY3RcbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zTnVtYmVyLmluZGV4T2YobGVuZ3RoKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSwgcGFyYW1zTmFtZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kIG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYW4gYWN0aW9uIGZvciB0aGUgbmV3IHN0YXRlIDxicj5cbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA0LiBDaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA2LiBJZiBub3QgYW4gb2YgZXZlbnQsIGNoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNy4gSWYgYWxsIGlzIG9rLCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIDxicj5cbiAqIDguIFJldHVybiB0aGUgcmVzdWx0IDxicj5cbiAqIFxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZSA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbXTtcblxuICAgIHZhciBjb21wb25lbnQgPSBudWxsLFxuICAgIGN1cnJlbnRTdGF0ZSA9ICcnLFxuICAgIGFjdGlvbnMgPSBbXSxcbiAgICBhY3Rpb24gPSBudWxsLFxuICAgIHJlc3VsdCA9IG51bGwsXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpc0V2ZW50ID0gZmFsc2U7XG5cbiAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gJ2Rlc3Ryb3knKSB7XG5cbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQocGFyYW1zLnN0YXRlLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgaWYgKGNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogcGFyYW1zLmRhdGFcbiAgICAgICAgICAgIH0pKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uc1swXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgYWN0aW9uLCBwYXJhbXMuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFJlc3VsdFwiOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQWN0aW9uKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBhY3Rpb24sIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRyeWluZyB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBwYXJhbXMuY29tcG9uZW50ICsgXCInXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBTdG9wIHRoZSB3b3JrZmxvdyBlbmdpbmUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVycyA8YnI+XG4gKiB7Qm9vbGVhbn0gZXJyb3IgdHJ1ZSBpZiB0aGUgc3RvcCBvZiB0aGUgd29ya2Zsb3cgaXMgZHVlIHRvIGFuIGVycm9yIChkZWZhdWx0IGZhbHNlKSA8YnI+XG4gKiB7U3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdG8gbG9nIChkZWZhdWx0ICcnKVxuICovXG5mdW5jdGlvbiBzdG9wKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJhbXMuZXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gICAgcGFyYW1zLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZSB8fCAnJztcblxuICAgIGV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9ub2NvRXJyb3IoXCJtb25vY28gaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIFwiICsgcGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1vbm9jb0Vycm9yKFwibW9ub2NvIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdtb25vY286IG1vbm9jbyBoYXMgYmVlbiBzdG9wcGVkJyk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgICAkbG9nLndvcmtmbG93UmVzdGFydGVkKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgTW9ub2NvLiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuIDxicj5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6PGJyPlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsIDxicj5cbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kIDxicj5cbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC4gPGJyPlxuICogXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIG1vbm9jby4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28td29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFuIGFjdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgbm90IGFuIG9mIGV2ZW50LCBjaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IHN0YXRlO1xuXG5cbi8qKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZXhwb3J0cy5zdG9wID0gc3RvcDtcblxuXG4vKipcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmV4cG9ydHMucmVzdGFydCA9IHJlc3RhcnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja1BhcmFtcyA9IGNoZWNrUGFyYW1zOyJdfQ==
