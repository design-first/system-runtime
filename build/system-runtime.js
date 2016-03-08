(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module contains Runtime core system.
 *
 * @module runtime
 * @submodule runtime-system
 * @class runtime-system
 * @static 
 */

'use strict';


/* Public properties */


/*
 * Runtime core system
 * @property {RuntimeSystem} system
 */
var system = {
    "schemas": {
        "Worker": {
            "_id": "Worker",
            "_name": "Worker",
            "_schema": "WorkerSchema",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "worker": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "WorkerSchema": {
            "_id": "WorkerSchema",
            "_name": "WorkerSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "worker": "property",
            "send": "method"
        },
        "RuntimeAdminSchema": {
            "_id": "RuntimeAdminSchema",
            "_name": "RuntimeAdminSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "start": "method",
            "stop": "method"
        },
        "RuntimeAdmin": {
            "_id": "RuntimeAdmin",
            "_name": "RuntimeAdmin",
            "_schema": "RuntimeAdminSchema",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "start": {
                "params": [{
                    "name": "path",
                    "type": "string",
                    "mandatory": false,
                    "default": ""
                }]
            },
            "stop": {}
        },
        "RuntimeChannelSchema": {
            "_id": "RuntimeChannelSchema",
            "_name": "RuntimeChannelSchema",
            "sync": "event",
            "loadSystem": "event",
            "createSchema": "event",
            "updateSchema": "event",
            "deleteSchema": "event",
            "createModel": "event",
            "updateModel": "event",
            "deleteModel": "event",
            "createType": "event",
            "updateType": "event",
            "deleteType": "event",
            "createComponent": "event",
            "updateComponent": "event",
            "deleteComponent": "event",
            "createBehavior": "event",
            "updateBehavior": "event",
            "deleteBehavior": "event",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "send": "event"
        },
        "RuntimeChannel": {
            "_id": "RuntimeChannel",
            "_name": "RuntimeChannel",
            "_schema": "RuntimeChannelSchema",
            "_inherit": [
                "RuntimeComponent",
                "RuntimeComponent"
            ],
            "sync": {},
            "loadSystem": {
                "params": [{
                    "name": "system",
                    "type": "object"
                }]
            },
            "createSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "updateSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "deleteSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "updateModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "deleteModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "updateType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "deleteType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "createComponent": {
                "params": [{
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "updateComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "deleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "createBehavior": {
                "params": [{
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "updateBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "deleteBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "_core": true,
            "send": {
                "params": [{
                    "name": "message",
                    "type": "object"
                }]
            }
        },
        "RuntimeSchema": {
            "load": "method",
            "ready": "event",
            "_id": "RuntimeSchema",
            "_name": "RuntimeSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "version": "property",
            "system": "method",
            "warning": "event"
        },
        "Runtime": {
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
            "_id": "Runtime",
            "_name": "Runtime",
            "_schema": "RuntimeSchema",
            "_inherit": [
                "RuntimeComponent"
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
        "RuntimeBehavior": {
            "_id": "RuntimeBehavior",
            "_name": "RuntimeBehavior",
            "_schema": "RuntimeBehaviorSchema",
            "_inherit": [
                "RuntimeComponent"
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
        "RuntimeBehaviorSchema": {
            "_id": "RuntimeBehaviorSchema",
            "_name": "RuntimeBehaviorSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property"
        },
        "RuntimeClassInfo": {
            "_id": "RuntimeClassInfo",
            "_name": "RuntimeClassInfo",
            "_schema": "RuntimeClassInfoSchema",
            "_inherit": [
                "RuntimeComponent"
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
            "link": {
                "params": [{
                    "name": "name",
                    "type": "string"
                }],
                "result": "object"
            },
            "links": {
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
        "RuntimeClassInfoSchema": {
            "_id": "RuntimeClassInfoSchema",
            "_name": "RuntimeClassInfoSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "model": "property",
            "metamodel": "property",
            "method": "method",
            "methods": "method",
            "property": "method",
            "properties": "method",
            "link": "method",
            "links": "method",
            "collections": "method",
            "collection": "method",
            "event": "method",
            "events": "method"
        },
        "RuntimeComponent": {
            "_id": "RuntimeComponent",
            "_name": "RuntimeComponent",
            "_schema": "RuntimeComponentSchema",
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
                    "type": "string",
                    "mandatory": false
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
                "type": "@RuntimeClassInfo",
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
        "RuntimeComponentSchema": {
            "_id": "RuntimeComponentSchema",
            "_name": "RuntimeComponentSchema",
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "RuntimeDatabase": {
            "_id": "RuntimeDatabase",
            "_name": "RuntimeDatabase",
            "_schema": "RuntimeDatabaseSchema",
            "_inherit": [
                "RuntimeComponent"
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
        "RuntimeDatabaseSchema": {
            "_id": "RuntimeDatabaseSchema",
            "_name": "RuntimeDatabaseSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event"
        },
        "RuntimeMessage": {
            "_id": "RuntimeMessage",
            "_name": "RuntimeMessage",
            "_schema": "RuntimeMessageSchema",
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
        "RuntimeMessageSchema": {
            "_id": "RuntimeMessageSchema",
            "_name": "RuntimeMessageSchema",
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property"
        },
        "RuntimeMetamodel": {
            "_id": "RuntimeMetamodel",
            "_name": "RuntimeMetamodel",
            "_schema": "RuntimeMetamodelSchema",
            "_inherit": [
                "RuntimeComponent"
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
        "RuntimeMetamodelSchema": {
            "_id": "RuntimeMetamodelSchema",
            "_name": "RuntimeMetamodelSchema",
            "_inherit": [
                "RuntimeComponentSchema"
            ],
            "_core": true,
            "schema": "method",
            "type": "method",
            "create": "method"
        },
        "RuntimeState": {
            "_id": "RuntimeState",
            "_name": "RuntimeState",
            "_schema": "RuntimeStateSchema",
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
        "RuntimeStateSchema": {
            "_id": "RuntimeStateSchema",
            "_name": "RuntimeStateSchema",
            "_core": true,
            "name": "property",
            "parameters": "property"
        },
        "RuntimeSystem": {
            "_id": "RuntimeSystem",
            "_name": "RuntimeSystem",
            "_schema": "RuntimeSystemSchema",
            "_inherit": [
                "RuntimeComponent"
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
        "RuntimeSystemSchema": {
            "_id": "RuntimeSystemSchema",
            "_name": "RuntimeSystemSchema",
            "_inherit": [
                "RuntimeComponentSchema"
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
        "json": {
            "name": "json",
            "type": "string",
            "core": true
        },
        "link": {
            "name": "link",
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
        "1c00c107e01c9b3": {
            "_id": "1c00c107e01c9b3",
            "component": "RuntimeAdmin",
            "state": "start",
            "action": "function start(path) {\n    var Worker = null,\n    worker = null,\n    workerPath = '',\n    RuntimeChannel = null,\n    runtimeChannel = null;\n    \n    if (path) {\n        workerPath = path + '/scripts/worker.js';\n        workerPath = workerPath.replace(/\\/\\//g,'/');\n    } else {\n        workerPath = '/designer/scripts/worker.js';\n    }\n    \n    if (typeof SharedWorker !== 'undefined') {\n        \n        if (!this.require('channel-admin')) {\n            RuntimeChannel = this.require('RuntimeChannel');\n            runtimeChannel = new RuntimeChannel({\n                '_id': 'channel-admin',\n                '_core': true\n            });\n            \n            runtimeChannel.on('send', function send(message) {\n                this.require('worker-admin').worker().port.postMessage(message);\n            });\n            \n            // schema change events\n            runtimeChannel.on('createSchema', function createSchema(id, schema) {\n                this.require('metamodel').schema(schema);\n                this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('updateSchema', function updateSchema(id, schema) {\n                 this.require('metamodel').type(schema);\n                 this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('deleteSchema', function deleteSchema(id) {\n                $db['RuntimeSchema'].remove({'_id': id});\n                this.require('metamodel').create();\n            }, true);\n            \n            // model change events\n            runtimeChannel.on('createModel', function createModel(id, model) {\n                this.require('metamodel').schema(model);\n                this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('updateModel', function updateModel(id, model) {\n                 this.require('metamodel').type(model);\n                 this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('deleteModel', function deleteModel(id) {\n                $db['RuntimeSchema'].remove({'_id': id});\n                this.require('metamodel').create();\n                $component.removeFromMemory(id);\n            }, true);\n            \n            // type change events\n            runtimeChannel.on('createType', function createType(id, type) {\n                this.require('metamodel').type(type);\n                this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('updateType', function updateType(id, type) {\n                 this.require('metamodel').type(type);\n                 this.require('metamodel').create();\n            }, true);\n            \n            runtimeChannel.on('deleteType', function deleteType(id) {\n                $db['RuntimeType'].remove({'_id': id});\n                this.require('metamodel').create();\n            }, true);\n            \n            // component change events\n            runtimeChannel.on('createComponent', function createComponent(model, component) {\n                $db[model].insert(component);\n            }, true);\n            \n            runtimeChannel.on('updateComponent', function updateComponent(id, collection, component) {\n                $db[collection].update({'_id': id}, component);\n            }, true);\n            \n            runtimeChannel.on('deleteComponent', function deleteComponent(id, collection) {\n                $db[collection].remove({'_id': id});\n            }, true);\n            \n            // behavior change events\n            runtimeChannel.on('createBehavior', function createBehavior(component) {\n                $db['RuntimeBehavior'].insert(component);\n            }, true);\n            runtimeChannel.on('updateBehavior', function updateBehavior(id, behavior) {\n                this.require(id).action(behavior.action);\n            });\n            runtimeChannel.on('deleteBehavior', function deleteBehavior(id) {\n                $db['RuntimeBehavior'].remove({'_id': id});                  \n            }, true);\n         \n            // System Designer event\n            runtimeChannel.on('sync', function sync() {\n                this.loadSystem(JSON.parse(this.require('db').system()));\n            });\n    \n            Worker = this.require('Worker');\n            worker = new Worker({\n                '_id': 'worker-admin',\n                '_core': true,\n                'worker': new SharedWorker(workerPath),\n            });\n            \n            worker.worker().port.onmessage = function (e) {\n              $db.RuntimeMessage.insert(e.data);\n            };\n            \n            console.info('runtime: admin is started');\n        } else {\n            console.info('runtime: admin is already started');\n        }\n    } else {\n        console.info('runtime: the browser can not run admin features');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1d7151dd2d1558f": {
            "_id": "1d7151dd2d1558f",
            "component": "RuntimeAdmin",
            "state": "stop",
            "action": "function stop() {\n    var worker = null,\n    channel = null;\n    \n    worker = this.require('worker-admin');\n    if (worker && worker.worker()) {\n        worker.worker().port.onmessage = function () {};\n        worker.destroy();\n        \n        channel = this.require('channel-admin');\n        if (channel) {\n            channel.destroy();\n        }\n        \n        console.info('runtime: admin is stopped');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1fc101c23918773": {
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                console.warn(\"runtime: invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1aaee1e6311ff39": {
            "_id": "1aaee1e6311ff39",
            "component": "runtime",
            "state": "load",
            "action": "function load(url, async) {\n    var xhr = null,\n    callbackLoad = null;\n    xhr = new XMLHttpRequest();\n    \n    callbackLoad = function callbackLoad(system) {\n        var sysId = $db.system(system),\n        sys = $component.get(sysId),\n        systems = document.querySelectorAll('link[rel=system]'),\n        nbSubsystem = $db.RuntimeSystem.find({\n            'subsystem': true\n        }); \n        if (sys) {\n            sys.main();\n        } \n        if (systems.length + 1 + nbSubsystem.length === $db.RuntimeSystem.count()) {\n            $component.get('runtime').ready();\n        }\n    };\n    \n    if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    callbackLoad(JSON.parse(xhr.response));\n                }\n            }\n        };\n        xhr.send(null);\n    } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n            callbackLoad(JSON.parse(xhr.response));\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {\n    var subsystems = [],\n    systems = [],\n    system = null,\n    i = 0,\n    length = 0;\n    \n    subsystems = $db.RuntimeSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('runtime').load(system.href, false);\n            } else {\n                this.require('runtime').load(system.href, true);\n            }\n        }\n        if (length === 0) {\n            this.require('runtime').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1ed84139b91a4d6": {
            "_id": "1ed84139b91a4d6",
            "component": "Runtime",
            "state": "error",
            "action": "function error(data) {\n    console.error('runtime: ' + data.message, data.error);\n}",
            "core": true
        },
        "167d5108df1e663": {
            "_id": "167d5108df1e663",
            "component": "Runtime",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('RuntimeSystem');\n        system = new System(conf);\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "112fa1c2ce10dbc": {
            "_id": "112fa1c2ce10dbc",
            "component": "Runtime",
            "state": "warning",
            "action": "function warning(message) {\n    console.warn('runtime: ' + message);\n}",
            "core": true
        },
        "18460125071f76d": {
            "_id": "18460125071f76d",
            "component": "RuntimeClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "12905142381cf59": {
            "_id": "12905142381cf59",
            "component": "RuntimeClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "180751695118a25": {
            "_id": "180751695118a25",
            "component": "RuntimeClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "196df1f3d31a02b": {
            "_id": "196df1f3d31a02b",
            "component": "RuntimeClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "1d78e19f1410de5": {
            "_id": "1d78e19f1410de5",
            "component": "RuntimeClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1c22a1edde11ece": {
            "_id": "1c22a1edde11ece",
            "component": "RuntimeClassInfo",
            "state": "links",
            "action": "function links() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1d1f513dbf1fbd5": {
            "_id": "1d1f513dbf1fbd5",
            "component": "RuntimeClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "184821c1241f9ec": {
            "_id": "184821c1241f9ec",
            "component": "RuntimeClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1208a1fc0e12af7": {
            "_id": "1208a1fc0e12af7",
            "component": "RuntimeClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1457a1423e17dc1": {
            "_id": "1457a1423e17dc1",
            "component": "RuntimeClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1e12718b5a1ba9d": {
            "_id": "1e12718b5a1ba9d",
            "component": "RuntimeComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "143cc11cff14239": {
            "_id": "143cc11cff14239",
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 6; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                console.warn(\"runtime: invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "112781d1c81d904": {
            "_id": "112781d1c81d904",
            "component": "RuntimeComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1916e1ccf810a92": {
            "_id": "1916e1ccf810a92",
            "component": "RuntimeDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Runtime') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1af20102a81445e": {
            "_id": "1af20102a81445e",
            "component": "RuntimeDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1151f1a0211d9fd": {
            "_id": "1151f1a0211d9fd",
            "component": "RuntimeDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "104c3199c316519": {
            "_id": "104c3199c316519",
            "component": "RuntimeMetamodel",
            "state": "create",
            "action": "function create() {\n    $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1710b1b08a1b665": {
            "_id": "1710b1b08a1b665",
            "component": "RuntimeMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "12df717c5015705": {
            "_id": "12df717c5015705",
            "component": "RuntimeMetamodel",
            "state": "type",
            "action": "function type(type) {\n    $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e45918c2e10e96": {
            "_id": "1e45918c2e10e96",
            "component": "RuntimeSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "RuntimeAdmin": {
            "admin": {
                "_id": "admin",
                "_core": true
            }
        },
        "Runtime": {
            "runtime": {
                "_id": "runtime",
                "version": "1.0.2"
            }
        },
        "RuntimeDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "RuntimeMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "RuntimeSystem": {
            "18ed81de331252c": {
                "_id": "18ed81de331252c",
                "name": "system-admin",
                "version": "0.1.1",
                "description": "Runtime Component administration ",
                "subsystem": true,
                "master": false
            },
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
    },
    "name": "runtime",
    "version": "1.0.2",
    "description": "Runtime",
    "_id": "e89c617b6b15d24",
    "master": false,
    "subsystem": false
};

/* exports  */


/**
 * This module contains Runtime core system.
 *
 * @module runtime
 * @submodule runtime-system
 * @class runtime-system
 * @static 
 */


/**
 * Runtime core system
 * @property {RuntimeSystem} system
 */
exports.system = system;

},{}],2:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages the behaviors of all components. 
 * A behavior is a mecanism that allow users to add actions that will be executed 
 * when a specific state of a component will change.
 * 
 * @module runtime
 * @submodule runtime-behavior
 * @requires runtime-db
 * @requires runtime-helper
 * @requires runtime-channel
 * @class runtime-behavior
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
 * @param {Boolean} core if true, the behavior will be treated as a Runtime core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the function (default false)
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

    if (params[0] === '') {
        params = [];
    }
    if (useCoreAPI) {
        params.push('$component');
        params.push('$db');
        params.push('$metamodel');
        params.push('$workflow');
        params.push('$behavior');
        params.push('$state');
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
 * Add a behavior that will be stored in Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in Runtime database
 */
function add(id, state, action, useCoreAPI, core) {
    var behaviorId = $helper.generateId(),
        strAction = action.toString();

    if (typeof core === 'undefined') {
        core = false;
    }
    if (typeof useCoreAPI === 'undefined') {
        useCoreAPI = false;
    }

    action = createFunction(state, strAction, core, useCoreAPI);

    store[behaviorId] = action;

    $db.RuntimeBehavior.insert({
        "_id": behaviorId,
        "component": id,
        "state": state,
        "action": strAction,
        "useCoreAPI": useCoreAPI,
        "core": core
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
    var result = [];

    params = params || {};
    params.behaviorId = params.behaviorId || '';
    params.componentId = params.componentId || '';
    params.state = params.state || '';

    if (params.componentId) {
        if (params.behaviorId) {
            $db.RuntimeBehavior.remove({
                "_id": params.behaviorId,
                "component": params.componentId,
                "state": params.state
            });
            delete store[params.behaviorId];
        } else {
            if (params.state) {
                result = $db.RuntimeBehavior.remove({
                    "component": params.componentId,
                    "state": params.state
                });
            } else {
                result = $db.RuntimeBehavior.remove({
                    "component": params.componentId
                });
            }
            result.forEach(function (id) {
                delete store[id];
            });
        }
    }
}


/*
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
function removeFromMemory(id) {
    delete store[id];
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

    dbResult = $db.RuntimeBehavior.find({
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
            "useCoreAPI": behavior.useCoreAPI,
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


/*
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
function get(id) {
    return store[id];
}


/* exports */


/**
 * This module manages the behaviors of all components. A behavior is a mecanism that allow users to add action that will be executed 
 * when a specific state of a component will change.
 * 
 * @module runtime
 * @submodule runtime-behavior
 * @requires runtime-db
 * @requires runtime-helper
 * @requires runtime-channel
 * @class runtime-behavior
 * @static
 */


/**
 * Add a behavior that will be stored in Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in Runtime database
 */
exports.add = add;


/**
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
exports.get = get;


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


/**
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
exports.removeFromMemory = removeFromMemory;
},{"./db.js":4,"./helper.js":5}],3:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages the components. 
 * It is the factory of all the components that are created by Runtime.
 * 
 * @module runtime
 * @submodule runtime-component
 * @requires runtime-workflow
 * @requires runtime-db
 * @requires runtime-metamodel
 * @requires runtime-behavior
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-component
 * @static 
 */

'use strict';

var $workflow = require('./workflow.js');
var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $worklow = require('./workflow.js');
var $state = require('./state.js');


/* Private properties */


var PROPERTY_TYPE = 'property',
    LINK_TYPE = 'link',
    COLLECTION_TYPE = 'collection',
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    store = {};
    

/* Private methods */


/*
 * Sub class to override push and pop method of Array Class.
 * @class RuntimeArray
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 */
function RuntimeArray(conf) {
    var arr = [],
        arrDb = [],
        type = '',
        id = '',
        propertyName = '',
        isReadOnly = false;

    conf = conf || {};
    type = conf.type || '';
    id = conf.id || '';
    propertyName = conf.propertyName || '';
    arrDb = conf.arr || [];

    if (typeof conf.readOnly !== 'undefined') {
        isReadOnly = conf.readOnly;
    }

    // init
    arrDb.forEach(function (val) {
        if (type.indexOf('@') !== -1) {
            arr.push($helper.getRuntime().require(val));
        } else {
            arr.push(val);
        }
    });

    /* Override push method.
     * @push
     * @param {RuntimeComponent|Object} value
     */
    arr.push = function push(val) {
        var isClass = false;

        if (!isReadOnly) {

            isClass = type.indexOf('@') !== -1;

            if (isClass) {
                if (val && $metamodel.inheritFrom(val.constructor.name, type.replace('@', ''))) {
                    arrDb.push(val.id());

                    $workflow.state({
                        "component": id,
                        "state": propertyName,
                        "data": [arrDb.length, val.id(), 'add']
                    });
                } else {
                    $log.invalidPropertyName(id, propertyName, val.id(), type);
                }
            } else {
                if (val && $metamodel.isValidType(val, type)) {
                    arrDb.push(val);

                    $workflow.state({
                        "component": id,
                        "state": propertyName,
                        "data": [arrDb.length, val, 'add']
                    });
                } else {
                    $log.invalidPropertyName(id, propertyName, val, type);
                }
            }
        } else {
            $log.readOnlyProperty(id, propertyName);
        }
        return arrDb.length;
    };

    /* Override pop method.
     * @pop
     * @return {RuntimeComponent|Object} value
     */
    arr.pop = function pop() {
        var result,
            val = null,
            isClass = false;

        if (!isReadOnly) {
            if (arrDb.length !== 0) {
                val = arrDb.pop();

                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [arrDb.length, val, 'remove']
                });

                isClass = type.indexOf('@') !== -1;

                if (isClass) {
                    result = store[val];
                } else {
                    result = val;
                }
            }
        } else {
            $log.readOnlyProperty(id, propertyName);
        }
        return result;
    };

    return arr;
}

/* jshint -W058 */
RuntimeArray.prototype = new Array;
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
        propNames = [],
        length = 0,
        i = 0,
        result = [];

    model = $metamodel.get(id);
    schema = $metamodel.get(model._schema);

    propNames = Object.keys(schema);

    length = propNames.length;
    for (i = 0; i < length; i++) {
        if (schema[propNames[i]] === LINK_TYPE || schema[propNames[i]] === PROPERTY_TYPE || schema[propNames[i]] === COLLECTION_TYPE) {
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
        propNames = [],
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
        propNames = [],
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

        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').insert(classId, config);
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
                    runtimeArr = null,
                    val = null,
                    realVal = null;

                if (typeof value === 'undefined') {
                    if (typeof position === 'undefined') {

                        runtimeArr = new RuntimeArray({
                            "id": this.id(),
                            "propertyName": propertyName,
                            "readOnly": propertyReadOnly,
                            "classId": classId,
                            "type": propertyType[0],
                            "arr": $db.store[classId][this.id()][propertyName]
                        });

                        return runtimeArr;
                    } else {
                        val = $db.store[classId][this.id()][propertyName][position];
                        if (val) {
                            if (propertyType[0].indexOf('@') !== -1) {
                                realVal = $helper.getRuntime().require(val);
                            } else {
                                realVal = val;
                            }
                            return realVal;
                        }
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if (
                            $metamodel.isValidType(value, propertyType[0]) ||
                            ($metamodel.inheritFrom(value.constructor.name, propertyType[0].replace('@', '')) && (propertyType[0].indexOf('@') !== -1))
                            ) {
                            search = $db[classId].find({
                                "_id": this.id()
                            });
                            if (search.length) {

                                if (propertyType[0].indexOf('@') !== -1) {
                                    realVal = value.id();
                                } else {
                                    realVal = value;
                                }

                                component = search[0];
                                component[propertyName][position] = realVal;

                                if ($helper.isRuntime()) {
                                    $helper.getRuntime().require('db').update(classId, this.id(), propertyName, realVal);
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": [position, realVal, 'add']
                                });
                            } else {
                                $log.invalidPropertyName(this.id(), propertyName, value, propertyType);
                            }
                        }
                    }
                }
            };
            /* jshint -W054 */
            Class.prototype[propertyName] = new Function("body", "return function " + propertyName + " (position,value) { return body.call(this, position, value) };")(body);
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
                            search = $db[classId].find({ "_id": this.id() });
                            if (search.length) {
                                component = search[0];

                                if (propertyType.indexOf('@') !== -1) {
                                    component[propertyName] = value.id();
                                } else {
                                    component[propertyName] = value;
                                }

                                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                    $helper.getRuntime().require('db').update(classId, this.id(), propertyName, value);
                                }
                                
                                // case of RuntimeBehavior
                                if (classId === 'RuntimeBehavior') {
                                    $behavior.removeFromMemory(this.id());
                                }

                                $workflow.state({
                                    "component": this.id(),
                                    "state": propertyName,
                                    "data": [value]
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
                var systems = [],
                    systemId = -1,
                    data = [],
                    i = 0,
                    length = -1,
                    message = {};

                if (classId === 'RuntimeChannel') {
                    systems = $db.RuntimeSystem.find({
                        'master': true
                    });
                    if (systems.length) {
                        systemId = systems[0]._id;

                        message.from = systemId;
                        length = arguments.length;
                        for (i = 0; i < length; i++) {
                            data.push(arguments[i]);
                        }
                        message.data = data;
                        message.event = methodName;

                        $db.RuntimeMessage.insert(message);

                        $workflow.state({
                            "component": this.id(),
                            "state": "send",
                            "data": [{
                                "event": message.event,
                                "from": message.from,
                                "data": message.data
                            }]
                        });
                    }
                } else {
                    $workflow.state({
                        "component": this.id(),
                        "state": methodName,
                        "data": arguments
                    });
                }
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
        var behaviorId = '',
            currentState = '';

        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                    !$metamodel.isEvent(state, classId) &&
                    !$metamodel.isProperty(state, classId) &&
                    !$metamodel.isLink(state, classId) &&
                    !$metamodel.isCollection(state, classId) &&
                    $db.RuntimeBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, currentState.parameters.data);
                        }

                    } else {
                        $log.invalidParamNumberMethodOn(this.id(), state);
                    }
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return behaviorId;
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
        var behaviorId = '',
            currentState = '';

        if ($workflow.checkParams({
            "component": this,
            "methodName": "on",
            "args": arguments
        })) {
            if ($metamodel.isValidState(state, classId)) {
                if (
                    !$metamodel.isEvent(state, classId) &&
                    !$metamodel.isProperty(state, classId) &&
                    !$metamodel.isLink(state, classId) &&
                    !$metamodel.isCollection(state, classId) &&
                    $db.RuntimeBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, currentState.parameters.data);
                        }

                    } else {
                        $log.invalidParamNumberMethodOn(this.id(), state);
                    }
                }
            } else {
                $log.invalidStateOn(classId, state);
            }
        }
        return behaviorId;
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
        var id = this.id(),
            result = [],
            i = 0,
            length = 0;
        
        // if not virtual component
        if ($db[id]) {
            result = $db[id].remove();
        }

        delete store[id];
        
        // remove behaviors
        $behavior.remove({
            'componentId': id
        });

        length = result.length;
        for (i = 0; i < length; i++) {
            // remove behaviors
            $behavior.remove({
                'componentId': result[i]
            });
        }

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
    // inherit from RuntimeComponent
    if ($metamodel.inheritFrom(classId, 'RuntimeComponent')) {
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
 * @param {String} id of the component
 * @return {Component} component
 */
function get(id) {
    return store[id];
}


/*
 * Create a component from its configuration.
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @return {Component}
 */
function create(config) {
    return factory(config);
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
        
        // remove behaviors
        $behavior.remove({
            'componentId': id
        });
        
        // case of Behavior
        if (classId === 'RuntimeBehavior') {
            $behavior.removeFromMemory(id);
        }
    }
}


/*
 * Remove a component with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
function removeFromMemory(id) {
    delete store[id];
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
 * It is the factory of all the components that are created by Runtime.
 * 
 * @module runtime
 * @submodule runtime-component
 * @requires runtime-workflow
 * @requires runtime-db
 * @requires runtime-metamodel
 * @requires runtime-behavior
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-component
 * @static 
 */


/**
 * Create a component from its configuration.
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @return {Component} component
 */
exports.create = create;


/**
 * Get a component by its id.
 * @method get
 * @param {String} id id of the component
 * @return {Component} component
 */
exports.get = get;


/**
 * Remove a component with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
exports.removeFromMemory = removeFromMemory;


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
},{"./behavior.js":2,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],4:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages Runtime database. <br>
 * Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Runtime Database is closely linked to Runtime metamodel and Runtime components because: <br>
 * - all operations done by Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *  
 * @module runtime
 * @submodule runtime-db
 * @requires runtime-component
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-db
 * @static
 */

'use strict';

var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $helper = require('./helper.js');
var $log = require('./log.js');
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $workflow = require('./workflow.js');


/* Private properties */


var store = {},
    collections = [],
    internalDB = [
        'Runtime',
        'RuntimeSchema',
        'RuntimeExtendedSchema',
        'RuntimeBehavior',
        'RuntimeState',
        'RuntimeType',
        'RuntimeMetamodel',
        'RuntimeDatabase',
        'RuntimeSystem',
        'RuntimeClassInfo',
        'RuntimeMessage',
        'RuntimeChannel'
    ],
    coreDb = [
        'RuntimeSchema',
        'RuntimeExtendedSchema',
        'RuntimeState',
        'RuntimeType'
    ];


/* Private methods */


/*
 * Dump the database.
 * @method dump
 * @return {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 * @private
 */
function dump() {
    var dbDump = {},
        collectionName = '',
        behaviorId = '',
        typeId = '',
        type = null,
        behavior = null,
        schema = null,
        collection = null,
        schemaId = '',
        length = 0,
        i = 0,
        id = '';

    // schemas
    dbDump.schemas = {};
    if (exports.RuntimeSchema.count()) {
        for (schemaId in store.RuntimeSchema) {
            schema = JSON.parse(JSON.stringify(store.RuntimeSchema[schemaId]));
            if (!schema._core) {
                dbDump.schemas[schemaId] = schema;
            }
        }
    }

    // types
    dbDump.types = {};
    if (exports.RuntimeType.count()) {
        for (typeId in store.RuntimeType) {
            type = JSON.parse(JSON.stringify(store.RuntimeType[typeId]));
            delete type._id;
            if (!type.core) {
                dbDump.types[type.name] = type;
            }
        }
    }

    // behaviors
    dbDump.behaviors = {};
    for (behaviorId in store.RuntimeBehavior) {
        behavior = JSON.parse(JSON.stringify(store.RuntimeBehavior[behaviorId]));
        delete behavior.classInfo;

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
            collection = JSON.parse(JSON.stringify(store[collectionName]));

            for (id in collection) {
                delete collection[id].classInfo;

                if (collection[id]._core) {
                    delete collection[id];
                }
            }
            
            if (Object.keys(collection).length) {
                dbDump.components[collectionName] = collection;
            }
        }
    }

    return dbDump;
}


/*
 * Test if an object contains another one.
 * @method contains
 * @param {Object} source source object 
 * @param {Object} target target object 
 * @return {Boolean} true if the source object contains the target object
 * @private
 */
function contains(source, target) {
    var result = true,
        property = '';

    for (property in source) {
        if (typeof target[property] !== 'undefined') {
            if (source[property] instanceof RegExp) {
                if (target[property].match(source[property]) === null) {
                    result = false;
                    break;
                }
            } else {
                if (target[property] !== source[property]) {
                    result = false;
                    break;
                }
            }
        } else {
            result = false;
            break;
        }
    }
    return result;
}


/** 
 * A collection of documents managed by Runtime. <br>
 * Internal collections manage core objects of Runtime (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class RuntimeDatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var RuntimeDatabaseCollection = function(name) {
    if ($metamodel.get(name) || internalDB.indexOf(name) !== -1) {
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
RuntimeDatabaseCollection.prototype.find = function(query) {
    var result = [],
        id = '',
        object = {};

    query = query || null;

    if (query && Object.keys(query).length) {
        if (Array.isArray(query)) {
            query.forEach(function multi_search(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];
                    if (contains(criteria, object)) {
                        result.push(object);
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];
                if (contains(query, object)) {
                    result.push(object);
                }
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
 * Before inserting the document, Runtime checks that the document is compliant
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
RuntimeDatabaseCollection.prototype.insert = function(document) {
    var doc = [],
        Component = null,
        result = [];

    if (Array.isArray(document)) {
        doc = document;
    } else {
        doc.push(document);
    }

    doc.forEach(function multi_insert(obj) {
        var component = null,
            channels = [],
            channel = null,
            systems = [];

        switch (true) {
            case this.name === 'RuntimeSchema':
            case this.name === 'RuntimeType':
            case this.name === 'RuntimeExtendedSchema':
            case $metamodel.isValidObject(obj, $metamodel.get(this.name)):

                if (typeof obj._id === 'undefined') {
                    obj._id = $helper.generateId();
                }

                store[this.name][obj._id] = obj;

                Component = $component.get(this.name);
                if (Component) {
                    component = new Component(obj);
                    result.push(component.id());
                } else {
                    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                        $helper.getRuntime().require('db').insert(this.name, obj);
                    }
                }

                if (this.name === 'RuntimeMessage') {
                    if ($helper.isRuntime()) {
                        systems = exports.RuntimeSystem.find({
                            'master': true
                        });
                        if (!systems.length || (systems.length && systems[0]._id !== obj.from)) {
                            channels = exports.RuntimeChannel.find({});
                            var length = channels.length;
                            for (var i = 0; i < length; i++) {
                                channel = $helper.getRuntime().require(channels[i]._id);
                                $workflow.state({
                                    "component": channels[i]._id,
                                    "state": obj.event,
                                    "data": obj.data
                                });
                            }
                        }
                    }
                }

                break;
            default:
                $log.invalidDocumentOnDbInsert(obj, this.name);
                break;
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
RuntimeDatabaseCollection.prototype.update = function(query, update, options) {
    var docs = this.find(query),
        updated = 0,
        i = 0,
        length = docs.length,
        attributeName = '',
        schema = $metamodel.get(this.name),
        type = '';

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
            // case of update of _id
            if (typeof update._id !== 'undefined' && update._id !== docs[i]._id) {
                $log.updateUuid(docs[i]._id, update._id, typeof $component.get(update._id) !== 'undefined');
            }

            for (attributeName in update) {
                if (typeof docs[i][attributeName] !== 'undefined') {
                    if (this.name !== 'RuntimeSchema') {
                        // check type
                        type = '';
                        if (attributeName.indexOf('_') !== 0) {
                            type = schema[attributeName].type;
                        } else {
                            if ($metamodel.getMetaDef()[attributeName]) {
                                type = $metamodel.getMetaDef()[attributeName].type;
                            }
                        }
                        if (type) {
                            if ($metamodel.isValidType(update[attributeName], type)) {
                                docs[i][attributeName] = update[attributeName];
                                updated = updated + 1;
                                if ($helper.isRuntime()) {
                                    $helper.getRuntime().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                                }
                                $workflow.state({
                                    "component": docs[i]._id,
                                    "state": attributeName,
                                    "data": [update[attributeName]]
                                });
                                $workflow.state({
                                    "component": this.name,
                                    "state": attributeName,
                                    "data": [update[attributeName]]
                                });
                            } else {
                                $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName]);
                            }
                        } else {
                            $log.unknownPropertyOnDbUpdate(attributeName, docs[i]._id);
                        }
                    } else {
                        // TODO more check in case of schema update
                        docs[i][attributeName] = update[attributeName];
                        updated = updated + 1;
                        if ($helper.isRuntime()) {
                            $helper.getRuntime().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                        }
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
 * @return {Array} list of documents id removed
 * 
 * @example 
 * $db.Cars.remove({"code": "AZD-71"}); <br>
 * $db.Cars.remove([{"code": "AZD-71"}, {"code": "AZD-65"}]); <br>
 */
RuntimeDatabaseCollection.prototype.remove = function(query) {
    var result = [],
        id = '',
        component = null,
        object = {};

    query = query || null;

    if (query && Object.keys(query).length) {

        if (Array.isArray(query)) {
            query.forEach(function multi_remove(criteria) {
                for (id in store[this.name]) {
                    object = store[this.name][id];

                    if (contains(criteria, object)) {
                        delete store[this.name][id];
                        component = $component.get(id);
                        if (component) {
                            component.destroy();
                        }
                        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                            $helper.getRuntime().require('db').remove(this.name, id);
                        }
                        result.push(id);
                    }
                }
            }.bind(this));
        } else {
            for (id in store[this.name]) {
                object = store[this.name][id];

                if (contains(query, object)) {
                    delete store[this.name][id];
                    component = $component.get(id);
                    if (component) {
                        component.destroy();
                    }
                    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                        $helper.getRuntime().require('db').remove(this.name, id);
                    }
                    result.push(id);
                }
            }
        }
    } else {
        for (id in store[this.name]) {
            delete store[this.name][id];

            if (coreDb.indexOf(this.name) == -1) {
                component = $component.get(id);
                if (component) {
                    component.destroy();
                }
            }
            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                $helper.getRuntime().require('db').remove(this.name, id);
            }
            result.push(id);
        }
    }

    return result;
};


/**
 * Count the number of documents in the collection.
 * @method count
 * @return {Number} number of documents in the collection
 */
RuntimeDatabaseCollection.prototype.count = function() {
    var result = 0,
        objectId = '';
    for (objectId in store[this.name]) {
        result++;
    }
    return result;
};


/* Public methods */


/*
 * Create a new {{#crossLink "RuntimeDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
function collection(name) {
    exports[name] = new RuntimeDatabaseCollection(name);
}


/*
 * Import/Export a Runtime system into/from the database
 * @method system
 * @param {JSON} importedSystem a Runtime system to import
 * @return {String} the id of the imported Runtime system or the if of the current Runtime system
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
        dbDump = null,
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
            exports.RuntimeBehavior.insert(importedSystem.behaviors[behaviorId]);
        }

        // add components
        for (collectionName in importedSystem.components) {
            for (componentId in importedSystem.components[collectionName]) {
                exports[collectionName].insert(importedSystem.components[collectionName][componentId]);
            }
        }

        // reset info if already a master system
        systems = exports.RuntimeSystem.find({
            'master': true
        });
        if (systems.length) {
            if (systems[0]._id === importedSystem._id) {
                importedSystem.master = true;
            } else {
                importedSystem.master = false;
            }
        }

        // insert the system in DB
        exports.RuntimeSystem.insert(importedSystem);

        result = importedSystem._id;

    } else { // export
        // get id of the master system
        systems = exports.RuntimeSystem.find({
            'master': true
        });

        if (systems.length) {
                        
            mastersystem = systems[0];
            id = mastersystem._id;
            
            // prop
            exportedSystem._id = id;
            exportedSystem.name = mastersystem.name;
            exportedSystem.description = mastersystem.description;
            exportedSystem.version = mastersystem.version;
            
            // dump
            dbDump = dump();
            for (collectionName in dbDump) {
                if (dbDump.hasOwnProperty(collectionName)) {
                    exportedSystem[collectionName] = dbDump[collectionName];
                }
            }

            for (behaviorId in exportedSystem.behaviors) {
                behavior = exportedSystem.behaviors[behaviorId];
                if (behavior.state === 'main') {
                    behavior.component = id;
                }
            }
            
            result = JSON.stringify(exportedSystem);
        } else {
            $log.masterSystemNotFound();
        }
    }
    return result;
}


/*
 * Export a Runtime sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Runtime sub-system
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
    result = exports.RuntimeSystem.find({
        'master': true
    });
    if (result.length) {
        defaultName = result[0].name;
    }

    system.name = params.name || 'sub_' + defaultName;
    system.version = params.version || '0.0.1';
    system.description = params.description || '';

    system.subsystem = true;

    // schemas
    system.schemas = {};
    if (params.schemas) {
        result = exports.RuntimeSchema.find(params.schema);

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
        result = exports.RuntimeType.find(params.types);

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
        behavior = exports.RuntimeBehavior.find(params.behaviors);

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


/*
 * Clear the database.
 * @method clear
 */
function clear() {
    var length = 0,
        i = 0,
        collectionName = '';

    // remove collections
    length = collections.length;
    for (i = 0; i < length; i++) {
        collectionName = collections[i];
        exports[collectionName].remove();
    }

    // remove internal collections
    length = internalDB.length;
    for (i = 0; i < length; i++) {
        collectionName = internalDB[i];
        exports[collectionName].remove();
    }
}


/*
 * Init the database.
 * @method init
 */
function init() {
    var runtimeSystemId = '',
        runtimeSystem = null;

    runtimeSystem = exports.RuntimeSystem.find({
        '_id': 'e89c617b6b15d24'
    })[0];

    // clear all the data in memory
    exports.clear();
    $component.clear();
    $metamodel.clear();
    $state.clear();
    $behavior.clear();

    // init metamodel
    $metamodel.init();

    // reimport Runtime core system
    runtimeSystemId = exports.system(runtimeSystem);
    $component.get(runtimeSystemId).main();
}


/* exports */


/**
 * This module manages Runtime database. <br>
 * Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * Runtime database is closely linked to Runtime metamodel because: <br>
 * - all operations done by Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *   
 * @module runtime
 * @submodule runtime-db
 * @requires runtime-component
 * @requires runtime-helper
 * @requires runtime-log
 * @class runtime-db
 * @static
 */


/**
 * Create a new {{#crossLink "RuntimeDatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
exports.collection = collection;


/**
 * Runtime database store that lists all the collections.
 * @property {JSON} store
 */
exports.store = store;


/**
 * Import/Export a Runtime system into/from the database.
 * @method system
 * @param {JSON} importedSystem a Runtime system to import
 * @return {String} the id of the imported Runtime system or the current Runtime system  
 */
exports.system = system;


/**
 * Export a Runtime sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified Runtime sub-system
 * 
 * @example
 * $db.subsystem({"schemas":{"name":"Person"}}); // filter export on schemas <br>
 * $db.subsystem({"types":{"name":"address"}}); // filter export on types <br>
 * $db.subsystem({"behaviors":{"component":"laure"}}); // filter export on behaviors <br>
 * $db.subsystem({"components":{"Person": {"country": "France"}}}); // filter export on components <br>
 * $db.subsystem({"schemas":{"name":"Person"},"components":{"Person": {"country": "France"}}}); // combine filters
 */
exports.subsystem = subsystem;


/**
 * Clear the database.
 * @method clear
 */
exports.clear = clear;


/**
 * Init the database.
 * @method init
 */
exports.init = init;
},{"./behavior.js":2,"./component.js":3,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9,"./workflow.js":10}],5:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module contains all the functions used by all the modules.
 * 
 * @module runtime
 * @submodule runtime-helper
 * @requires runtime-db
 * @requires runtime-component
 * @class runtime-helper
 * @static
 */


'use strict';

var $db = require('./db.js');
var $component = require('./component.js');


/* Private property */


var runtimeRef = null;


/* Public method */


/*
 * Check if a Runtime instance exists.
 * @method isRuntime
 * @return {Boolean} true if a Runtime instance exist
 */
function isRuntime() {
    var result = false;

    if ($db.Runtime && $db.Runtime.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the Runtime instance.
 * @method getRuntime
 * @return {Runtime} Runtime instance
 */
function getRuntime() {
    var runtimeId = '';

    if (!runtimeRef) {
        if (isRuntime()) {
            runtimeId = $db.Runtime.find()[0]._id;
            runtimeRef = $component.get(runtimeId);
        } else {
            runtimeRef = {
                error: function error(err, data) {
                    console.error('runtime: ' + err, data);
                },
                warning: function warning(message) {
                    console.warn('runtime: ' + message);
                }
            };
        }
    }

    return runtimeRef;
}


/*
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
function generateId() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }
    return gen() + gen() + gen();
}


/*
 * Add Polyfill
 * @method polyfill
 */
function polyfill() {

    // fixing constructor.name property in IE
    // taken from http://stackoverflow.com/questions/25140723/constructor-name-is-undefined-in-internet-explorer
    if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
        Object.defineProperty(Function.prototype, 'name', {
            get: function () {
                var funcNameRegex = /function\s([^(]{1,})\(/;
                var results = (funcNameRegex).exec((this).toString());
                return (results && results.length > 1) ? results[1].trim() : "";
            },
            set: function (value) { }
        });
    }
}


/* exports */


/**
 * This module contains all the functions used by all the modules.
 * 
 * @module runtime
 * @submodule runtime-helper
 * @requires runtime-db
 * @requires runtime-component
 * @class runtime-helper
 * @static
 */


/**
 * Get Runtime instance.
 * @method getRuntime
 * @return {Runtime} Runtime instance
 */
exports.getRuntime = getRuntime;


/**
 * Check if a Runtime instance exists.
 * @method isRuntime
 * @return {Boolean} true if a Runtime instance exist
 */
exports.isRuntime = isRuntime;


/**
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
exports.generateId = generateId;


/**
 * Add Polyfill
 * @method polyfill
 */
exports.polyfill = polyfill;
},{"./component.js":3,"./db.js":4}],6:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module contains all the functions that write a log.
 * 
 * @module runtime
 * @submodule runtime-log
 * @requires runtime-helper
 * @class runtime-log
 * @static
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

    $helper.getRuntime().warning(message);
}


/*
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
function invalidPropertyType(propertyName, type, property) {
    $helper.getRuntime().warning("invalid type for property '" + JSON.stringify(propertyName) + "': expected '" + type + "' instead of '" + typeof property + "'");
}


/*
 * Invalid value for type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
function invalidEnumValue(value, type) {
    $helper.getRuntime().warning("invalid value for the enum value '" + value + "': expected '" + type + "' instead of '" + typeof value + "'");
}


/*
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
function invalidClassName(componentId, type, constructorName) {
    $helper.getRuntime().warning("invalid class name for component '" + componentId + "': expected '" + type + "' instead of '" + constructorName + "'");
}


/*
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
function missingProperty(propertyName) {
    $helper.getRuntime().warning("missing property '" + propertyName + "'");
}


/*
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} classSource a class
 * @param {String} classToImp the class to implement
 */
function missingImplementation(classSource, classToImp) {
    $helper.getRuntime().warning("class '" + classSource + "' is missing for the implementation of the class '" + classToImp + "'");
}


/*
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function invalidTypeImp(property, className) {
    $helper.getRuntime().warning("invalid type for property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function missingPropertyImp(property, className) {
    $helper.getRuntime().warning("missing property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
function unknownPropertyImp(property, schema) {
    $helper.getRuntime().warning("unknown property '" + property + "' for the definition of '" + schema + "'");
}


/*
 * Invalid type definition.
 * @method invalidTypeDefinition
 * @param {Object} def a type definition
 */
function invalidTypeDefinition(def) {
    $helper.getRuntime().warning("can not load the definition of type '" + def + "'");
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
        $helper.getRuntime().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getRuntime().warning("invalid name for property '" + propertyName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, propertyName) {
    $helper.getRuntime().warning("can not set read-only property '" + propertyName + "' on component '" + id + "'");
}


/*
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
    $helper.getRuntime().warning("invalid document '" + JSON.stringify(doc) + "' on an insert operation on collection '" + collectionName + "'");
}


/*
 * Invalid property on a Runtime database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
function invalidPropertyTypeOnDbUpdate(collectionName, id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getRuntime().warning("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getRuntime().warning("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}



/*
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function unknownPropertyOnDbUpdate(propertyName, id) {
    $helper.getRuntime().warning("unknown property '" + propertyName + "' on an update operation on component '" + id + "'");
}


/*
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
function unknownMethod(classId, methodName) {
    $helper.getRuntime().warning("try to call an unknown method '" + methodName + "' for the class '" + classId + "'");
}


/*
 * Try to create an invalid RuntimeDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
function invalidCollectionName(name) {
    $helper.getRuntime().warning("invalid name for creating the collection '" + name + "': there is no schema '" + name + "' in the metamodel");
}


/*
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 */
function invalidResultType(id, methodName) {
    $helper.getRuntime().warning("invalid type on the result of method '" + methodName + "' on component '" + id + "'");
}


/*
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId if of the component
 */
function unknownComponent(className, componentId) {
    $helper.getRuntime().warning("unkown class component '" + className + "' for component '" + componentId + "'");
}


/*
 * The Runtime workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    $helper.getRuntime().warning('runtime has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumber(id, methodName) {
    $helper.getRuntime().warning("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'");
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
    $helper.getRuntime().warning("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
    $helper.getRuntime().warning("try to add more than one behavior for the state '" + stateName + "' on component class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
    $helper.getRuntime().warning("try to add a behavior with an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
    $helper.getRuntime().warning("try to remove a behavior from an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The master system is not found.
 * @method masterSystemNotFound
 */
function masterSystemNotFound() {
    $helper.getRuntime().warning("the master system is not found");
}


/*
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
function invalidType(value, typeName) {
    $helper.getRuntime().warning("invalid type for value '" + JSON.stringify(value) + "': expected '" + typeName + "'");
}


/*
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
function unknownType(value) {
    $helper.getRuntime().warning("unknown type for value '" + JSON.stringify(value) + "'");
}


/*
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
function canNotYetValidate(id, className) {
    $helper.getRuntime().warning("can not yet validate if the component '" + JSON.stringify(id) + "' is an instance of '" + className + "'");
}


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
function invalidChannelEvent(message, eventName, type) {
    $helper.getRuntime().warning("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'");
}


/*
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumberMethodOn(id, methodName) {
    $helper.getRuntime().warning("invalid number of parameters when adding an action on method '" + methodName + "' on component '" + id + "'");
}


/*
 * Change the id of a component.
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 */
function updateUuid(currentId, newId, alreadyUsed) {
    if (alreadyUsed) {
        $helper.getRuntime().warning("try to update a component of id '" + currentId + "' with the new id '" + newId + "' that is already used");
    } else {
        $helper.getRuntime().warning("try to update a component of id '" + currentId + "' with the new id '" + newId + "'");
    }
}

/*
 * Try to change the state of a component that has been destroyed
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 */
function invalidUseOfComponent(id) {
    $helper.getRuntime().warning("try to change the state of the destroyed component '" + id + "'");
}


/* exports */


/**
 * This module contains all the functions that write a log.
 * 
 * @module runtime
 * @submodule runtime-log
 * @requires runtime-helper
 * @class runtime-log
 * @static
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
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
exports.invalidDocumentOnDbInsert = invalidDocumentOnDbInsert;


/**
 * Invalid property on a Runtime database update operation.
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
 * Try to create an invalid RuntimeDatabaseCollection.
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
 * @param {String} componentId if of the component
 */
exports.unknownComponent = unknownComponent;


/**
 * The Runtime workflow has been restarted.
 * @method workflowRestarted
 */
exports.workflowRestarted = workflowRestarted;


/**
 * Invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
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
 * The master system is not found.
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
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
exports.invalidChannelEvent = invalidChannelEvent;


/**
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
exports.invalidParamNumberMethodOn = invalidParamNumberMethodOn;


/**
 * Change the id of a component.
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 */
exports.updateUuid = updateUuid;


/**
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
exports.unknownPropertyOnDbUpdate = unknownPropertyOnDbUpdate;


/**
 * Try to change the state of a component that has been destroyed
 * @method invalideUseOfComponent
 * @param {String} id id of the component
 */
exports.invalidUseOfComponent = invalidUseOfComponent;
},{"./helper.js":5}],7:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages Runtime metamodel. <br>
 * Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related RuntimeDatabaseCollections.
 * 
 * @module runtime
 * @submodule runtime-metamodel
 * @requires runtime-db
 * @requires runtime-log
 * @requires runtime-component
 * @requires runtime-workflow
 * @class runtime-metamodel
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
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    PROPERTY_TYPE = 'property',
    LINK_TYPE = 'link',
    COLLECTION_TYPE = 'collection',
    internalTypes = ['property', 'collection', 'link', 'method', 'event'],
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
 * Load schemas and types in memory.
 * @method loadInMemory
 * @private
 */
function loadInMemory() {
    var schemas = [],
        types = [],
        schema = null,
        type = null,
        id = '',
        inherit = '',
        i = 0,
        length = 0;
        
    // init store
    store.catalog = {};
    store.inheritance = {};
    store.inheritanceTree = {};
    store.model = {};
    store.states = {};
    store.type = {};
    store.implementation = {};

    // load schemas
    schemas = $db.RuntimeSchema.find({});

    length = schemas.length;
    for (i = 0; i < length; i++) {
        schema = schemas[i];

        id = schema[ID];
        inherit = schema[INHERITS];

        store.catalog[id] = schema;
        if (inherit) {
            store.inheritance[id] = inherit;
        }
    }
    
    // load types
    types = $db.RuntimeType.find({});

    length = types.length;
    for (i = 0; i < length; i++) {
        type = types[i];
        store.type[type.name] = type;
    }
}


/*
 * Create the inheritance tree.
 * @method createInheritanceTree
 * @private
 */
function createInheritanceTree() {
    var id = null,
        ancestorId = null,
        i = 0,
        nbParents = 0;

    function _getAncestors(id, ancestorId) {
        var i = 0,
            nbParents = 0;

        if (store.inheritance[ancestorId]) {
            nbParents = store.inheritance[ancestorId].length;
            if (nbParents) {
                store.inheritanceTree[id] = store.inheritanceTree[id].concat(store.inheritance[ancestorId]);
                for (i = 0; i < nbParents; i++) {
                    _getAncestors(id, store.inheritance[ancestorId][i]);
                }
            }
        }
    }

    for (id in store.inheritance) {

        nbParents = store.inheritance[id].length;
        if (nbParents) {
            store.inheritanceTree[id] = store.inheritance[id];
        }
        for (i = 0; i < nbParents; i++) {
            ancestorId = store.inheritance[id][i];

            _getAncestors(id, ancestorId);
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
                    if (!hasType(typeDef.schema, 'undefined')) {
                        result = isValidSchema(value[i], typeDef.schema);
                    } else {
                        result = isValidType(value[i], typeDef.type);
                    }
                    if (result === false) {
                        break;
                    }
                }
            } else {
                if (!hasType(typeDef.schema, 'undefined')) {
                    result = isValidSchema(value, typeDef.schema);
                } else {
                    result = isValidType(value, typeDef.type);
                }
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
    $db.collection('RuntimeSchema');
    $db.collection('RuntimeExtendedSchema');
    $db.collection('RuntimeClassInfo');
    $db.collection('RuntimeBehavior');
    $db.collection('RuntimeState');
    $db.collection('RuntimeType');
    $db.collection('RuntimeMessage');
    $db.collection('RuntimeChannel');
}


/*
 * Create the Database structure (i.e. RuntimeDatabaseCollection).
 * @method createDbStructure
 * @private
 */
function createDbStructure() {
    var modelName = '',
        modelDef = {};

    for (modelName in store.catalog) {
        modelDef = store.catalog[modelName];
        if (typeof modelDef[SCHEMA] !== 'undefined' &&
            typeof $db[modelDef[ID]] === 'undefined' &&
            modelDef[CLASS] !== false) {
            $db.collection(modelDef[ID]);
        }
    }

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        $db.RuntimeExtendedSchema.insert(modelDef);
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
        modelDef = {},
        id = '';

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        id = modelDef._id + 'Info';

        if (
            typeof modelDef[SCHEMA] !== 'undefined' &&
            modelDef[CLASS] !== false
            ) {
            if (!$component.get(id)) {
                $db.RuntimeClassInfo.insert({
                    "_id": id,
                    "metamodel": store.model[modelDef[SCHEMA]],
                    "model": modelDef
                });
            } else {
                $db.RuntimeClassInfo.update({
                    "_id": id
                }, {
                        "_id": id,
                        "metamodel": store.model[modelDef[SCHEMA]],
                        "model": modelDef
                    });
            }
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


/*
 * Check if an attribute of the schema has a specific type.
 * @method isCollection
 * @param {String} name
 * @param {String} id component id
 * @param {String} type type to check
 * @return {Boolean} true if the attribute has for type type
 */
function checkType(name, id, type) {
    var result = false,
        componentSchema = store.model[id],
        attributeType = '';

    if (componentSchema && componentSchema[SCHEMA]) {
        componentSchema = store.model[componentSchema[SCHEMA]];
    }

    if (componentSchema) {
        attributeType = componentSchema[name];
        if (attributeType === type) {
            result = true;
        }
    }

    return result;
}

/*
 * Merge two schemas.
 * @method merge
 * @param {Object} source source schema
 * @param {Object} target target schema
 * @return {Object} merged schema
 */
function merge(source, target) {
    var propName = '',
        result = target;

    for (propName in source) {
        if (source.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
            result[propName] = source[propName];
        }
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
    var schema = null,
        id = '',
        inherit = '',
        name = '',
        schemas = [];

    schema = JSON.parse(JSON.stringify(importedSchema));

    id = schema[ID];
    name = schema[NAME];
    inherit = schema[INHERITS];

    // if no id, it will be the name by default
    if (hasType(id, 'undefined')) {
        id = name;
        schema[ID] = name;
    }

    // check if schema is compliant with the meta meta model
    if (isValidObject(schema, store.metadef.schema, false)) {

        schemas = $db.RuntimeSchema.find({ '_id': id });
        if (schemas.length) {
            $db.RuntimeSchema.update({ '_id': id }, merge(schema, schemas[0]));
        } else {
            $db.RuntimeSchema.insert(schema);
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
 * @param {JSON} importedType type to add
 */
function type(importedType) {
    var name = importedType.name;

    // check if type is compliant with the meta meta model
    if (isValidObject(importedType, store.metadef.type)) {
        if (name) {
            $db.RuntimeType.insert(importedType);
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
        metadef: {},
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
    loadInMemory();
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
    return checkType(name, id, EVENT_TYPE);
}


/*
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
function isProperty(name, id) {
    return checkType(name, id, PROPERTY_TYPE);
}


/*
 * Check if an attribute of the schema is a link.
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a link
 */
function isLink(name, id) {
    return checkType(name, id, LINK_TYPE);
}


/*
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
function isCollection(name, id) {
    return checkType(name, id, COLLECTION_TYPE);
}


/*
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a method
 */
function isMethod(name, id) {
    return checkType(name, id, METHOD_TYPE);
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
 * @param {Object} object object to validate
 * @param {String} type type to use for validation
 * @return {Boolean} true if the object is compliant with the type
 */
function isValidType(value, typeName) {
    var result = true;

    function _checkReference(value, typeName) {
        var isValid = true;
        var typeRef = getReference(typeName);
        var component = value;

        if (hasType(value, 'string')) {
            component = $component.get(value);
        }
        if (getClassName(component) !== typeRef && JSON.stringify(component) !== '{}') {
            isValid = false;
            $log.invalidType(value, typeName.replace('@', ''));
        }
        return isValid;
    }
    
    /*
    * Check if an object is compliant with a type.
    * @return {Boolean} the object is compliant with the type
    * @private
    */
    function _isValidType(value, typeName) {
        var isValid = true,
            realType = '',
            i = 0,
            length = 0;

        realType = getType(typeName);
        switch (realType) {
            case 'string':
                isValid = hasType(value, typeName);
                break;
            case 'array':
                length = value.length;
                for (i = 0; i < length; i++) {
                    switch (true) {
                        case isCustomType(typeName[0]):
                            isValid = checkCustomSchema(value[i], typeName[0]);
                            break;
                        case isReference(typeName[0]):
                            isValid = _checkReference(value[i], typeName[0]);
                            break;
                        default:
                            isValid = hasType(value[i], typeName[0]);
                            break;
                    }
                }
                break;
            default:
                break;
        }
        return true;
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
                result = _isValidType(value, typeName);
                break;
        }
    } else {
        $log.invalidType(value, typeName);
    }

    return result;
}


/*
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
 * @return {Boolean} true if the object is compliant with the enum
 */
function isValidEnum(value, schema) {
    var result = true;

    function _isInstanceOf(component, className) {
        var result = false,
            componentClassName = '';

        componentClassName = component.constructor.name;

        if (componentClassName === 'Function') {
            componentClassName = component.name;
        }
        result = componentClassName === className;

        return result;
    }

    if (isReference(schema.type)) {
        result = _isInstanceOf($component.get(value), getReference(schema.type)) && schema.value.indexOf(value) !== -1;
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
                    isValid = hasType(field, 'object') || hasType(field, 'string');
                    // TODO maybe have a more stict validation that just a type checking
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
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
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
    function _isValidCustomType(field, typeSchema) {
        var isValid = true,
            realType = '';

        realType = store.type[typeSchema];
        if (realType) {
            switch (true) {
                case !hasType(realType.schema, 'undefined'):
                    isValid = isValidObject(field, realType.schema);
                    break;
                case !hasType(realType.value, 'undefined'):
                    isValid = isValidEnum(field, realType);
                    break;
                default:
                    isValid = isValidType(field, realType.type);
                    break;
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
    function _isValidReference(field, typeSchema) {
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
            if (!inheritFrom(comp.constructor.name, typeRef)) {
                //if (getClassName(comp) !== typeRef) { uncomment this case if we want a strict mode
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
                case (hasType(field, 'object') && field !== null && Object.keys(field).length > 0):
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
    function _isValidType(field, typeSchema) {
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

        if (!hasType(schema[fieldName], 'undefined') || fieldName === '_core') {
            
            // case of _core
            if (fieldName !== '_core') {
                typeSchema = schema[fieldName].type;
            } else {
                typeSchema = 'boolean';
            }

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
                result = _isValidCustomType(field, typeSchema);
                break;
            case isReference(typeSchema):
                result = _isValidReference(field, typeSchema);
                break;
            default:
                result = _isValidType(field, typeSchema);
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
 * @param {Object} object object to prepate
 * @param {Object} schema schema that validates the object
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
 * Get the definition of the metamodel.
 * @method getMetaDef
 * @return {Object} the metadefinition of the metamodel
 */
function getMetaDef() {
    var result = store.metadef.schema;
    return result;
}


/*
 * Get parents of a shema if any.
 * @method get
 * @param {String} id id of the schema
 * @return {Array} id id of the parents
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
            if (parents.indexOf(ancestorName) !== -1) {
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

    if (name !== parentName) {
        parents = getParents(name);
        length = parents.length;

        if (parents.length !== 0) {
            if (parents.indexOf(parentName) !== -1) {
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
    } else {
        result = true;
    }

    return result;
}


/* exports */


/**
 * This module manages Runtime metamodel. <br>
 * Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related RuntimeDatabaseCollections.
 * 
 * @module runtime
 * @submodule runtime-metamodel
 * @requires runtime-db
 * @requires runtime-log
 * @requires runtime-component
 * @requires runtime-workflow
 * @class runtime-metamodel
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
 * @method schema
 * @param {JSON} importedSchema a schema to add
 */
exports.schema = schema;


/**
 * Add a new type.
 * @method type
 * @param {JSON} importedType type to add
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
 * @param {String} id id of the schema
 * @return {Object} the schema
 */
exports.get = get;


/**
 * Get the definition of the metamodel.
 * @method getMetaDef
 * @return {Object} the metadefinition of the metamodel
 */
exports.getMetaDef = getMetaDef;


/**
 * Get parents of a shema if any.
 * @method getParents
 * @param {String} id id of the schema
 * @return {Array} id id of the parents
 */
exports.getParents = getParents;


/**
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
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
 * @return {Boolean} true is the object is compliant with the schema
 */
exports.isValidObject = isValidObject;


/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object object to prepare
 * @param {Object} schema schema that validates the object
 */
exports.prepareObject = prepareObject;


/**
 * Check if a value is compliant with a type.
 * @method isValidType
 * @param {Object} object object to validate
 * @param {String} type type to use for validation
 * @return {Boolean} true if the object is compliant with the type
 */
exports.isValidType = isValidType;


/**
 * Check if a value is compliant with a type enum.
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
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


/**
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
exports.isProperty = isProperty;


/**
 * Check if an attribute of the schema is a link.
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a link
 */
exports.isLink = isLink;


/**
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
exports.isCollection = isCollection;


/**
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a method
 */
exports.isMethod = isMethod;
},{"./component.js":3,"./db.js":4,"./log.js":6,"./workflow.js":10}],8:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module is the main module of Runtime. <br>
 * It inits Runtime metamodel and loads Runtime core system.
 * 
 * @module runtime
 * @requires runtime-component
 * @requires runtime-metamodel
 * @requires runtime-system
 * @requires runtime-helper
 * @main runtime
 * @class runtime
 * @static
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');
var $helper = require('./helper.js');


/* Private Property */

var sytemId = '',
    system = '';


/* Polyfill */
$helper.polyfill();

/* Init Metamodel */


$metamodel.init();


/* Init runtime from a system */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of Runtime. <br>
 * It inits Runtime metamodel and loads Runtime core system.
 * 
 * @module runtime
 * @requires runtime-component
 * @requires runtime-metamodel
 * @requires runtime-system
 * @main runtime
 * @class runtime
 * @static
 */


/**
 * Runtime instance.
 * @property runtime
 * @type Runtime
 */
module.exports = $component.get('runtime');
},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7}],9:[function(require,module,exports){
/*
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages the states of all thecomponents.
 * 
 * @module runtime
 * @submodule runtime-state
 * @requires runtime-db
 * @class runtime-state
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
 * @param {Object} parameters parameters
 */
function set(id, state, parameters) {
    store[id] = {
        "name": state,
        "parameters": {
            "data": parameters
        }
    };
    $db.store.RuntimeState[id] = {
        "name": state,
        "parameters": {
            "data": parameters
        }
    };
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
 * @module runtime
 * @submodule runtime-state
 * @requires runtime-db
 * @class runtime-state
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
 * Runtime
 * The JSON Runtime Environment
 * https://system-runtime.github.io
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
 * This module manages the workflow of Runtime. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and runtime. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module runtime
 * @submodule runtime-workflow
 * @requires runtime-metamodel
 * @requires runtime-component
 * @requires runtime-behavior
 * @requires runtime-channel
 * @requires runtime-state
 * @requires runtime-helper
 * @requires runtime-log
 * @requires runtime-db
 * @class runtime-workflow 
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
 * The RuntimeError class.
 * @class RuntimeError
 * @constructor
 * @param {String} message message of the error
 */
function RuntimeError(message) {
    this.message = message;
    this.name = "RuntimeError";
}
RuntimeError.prototype = new Error();
RuntimeError.prototype.constructor = RuntimeError;


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
        methodName = params.methodName || '',
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
 * Get the actions of the specified state
 * @method getActions
 * @param {Object} component a Runtime component
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
 * @param {Object} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @return {Boolean} result of the action
 */
function callAction(component, state, action, params, isEvent) {
    var result = null,
        injectedParams = [],
        componentClassName = '',
        i = 0,
        length = 0;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    if (!$metamodel.isProperty(state, componentClassName) && !$metamodel.isLink(state, componentClassName) && !$metamodel.isCollection(state, componentClassName)) {
        params = setDefaultValue(componentClassName, state, params);
    }

    try {
        length = params.length;
        for (i = 0; i < length; i++) {
            injectedParams.push(params[i]);
        }
        if (action.useCoreAPI) {
            injectedParams.push($component);
            injectedParams.push($db);
            injectedParams.push($metamodel);
            injectedParams.push(exports);
            injectedParams.push($behavior);
            injectedParams.push($state);
        }

        if (isEvent) {
            setTimeout(action.action.bind.apply(action.action, [component].concat(injectedParams)), 0);
        } else {
            result = action.action.apply(component, injectedParams);
        }
    } catch (e) {
        if (e instanceof RuntimeError) {
            throw e;
        } else {
            if (component && component.error) {
                component.error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
            if ($helper.getRuntime()) {
                $helper.getRuntime().error({
                    "message": "error when trying to call the method '" + state + "' on component '" + component.id() + "'",
                    "error": e
                });
            }
        }
    }

    return result;
}


/* Public methods */


/*
 * Check if an action has the valid number of parameter.
 * @method validParamNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @return {Boolean} true if the action is the valid number of parameters
 */
function validParamNumbers(className, state, action) {
    var func = '',
        beginBody = -1,
        header = '',
        funcParams = '',
        params = [],
        paramNumber = 0,
        modelNumberParam = [],
        isProperty = false,
        isLink = false,
        isCollection = false,
        result = false;

    // check number of parameters of the action
    func = action.toString();
    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);
    funcParams = header.split('(')[1].replace(')', '').trim();
    params = funcParams.split(',');
    if (params[0] === '') {
        params = [];
    }
    paramNumber = params.length;

    // get the number min and max of valid parameters
    isProperty = $metamodel.isProperty(state, className);
    isLink = $metamodel.isLink(state, className);
    isCollection = $metamodel.isCollection(state, className);

    switch (true) {
        case isCollection:
            modelNumberParam = [3, 3];
            break;
        case isProperty:
            modelNumberParam = [1, 1];
            break;
        case isLink:
            modelNumberParam = [1, 1];
            break;
        default:
            modelNumberParam = getParamNumber(className, state);
            break;
    }

    // compare
    if (modelNumberParam[0] <= paramNumber && paramNumber <= modelNumberParam[1]) {
        result = true;
    }

    return result;
}


/*
 * Check if conditions on input are compliant with the model before calling the action.
 * @method checkParams
 * @param {Object} params
 * @return {Boolean} true if condition on input are compliant with the model
 */
function checkParams(params) {
    params = params || {};

    var component = params.component || null,
        methodName = params.methodName || '',
        args = params.args || '',
        paramsName = [],
        paramsType = [],
        paramsNumber = [],
        componentClassName = '',
        length = args.length,
        i = 0,
        param = null,
        result = true,
        isProperty = false,
        isLink = false,
        isCollection = false;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    isProperty = $metamodel.isProperty(methodName, componentClassName);
    isLink = $metamodel.isLink(methodName, componentClassName);
    isCollection = $metamodel.isCollection(methodName, componentClassName);
    paramsName = getParamNames(componentClassName, methodName);

    switch (true) {
        case isCollection:
            paramsType = ['number', $metamodel.get(componentClassName)[methodName].type[0], 'string'];
            paramsNumber = [3, 3];
            break;
        case isProperty:
            paramsType = [$metamodel.get(componentClassName)[methodName].type];
            paramsNumber = [1, 1];
            break;
        case isLink:
            paramsType = [$metamodel.get(componentClassName)[methodName].type];
            paramsNumber = [1, 1];
            break;
        default:
            paramsType = getParamTypes(componentClassName, methodName);
            paramsNumber = getParamNumber(componentClassName, methodName);
            break;
    }

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


/*
 * Call an action that comes from an event.
 * @method action
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 */
function action(behaviorId, params) {
    var isEvent = false,
        isProperty = false,
        isLink = false,
        isCollection = false,
        behaviors = [],
        behavior = null,
        component = null,
        componentClassName = '',
        actionFromMemory = null;

    behaviors = $db.RuntimeBehavior.find({
        "_id": behaviorId
    });

    actionFromMemory = $behavior.get(behaviorId);

    if (behaviors.length === 1) {
        behavior = behaviors[0];

        component = $component.get(behavior.component);
        if (component) {

            if (component.constructor.name === 'Function') {
                componentClassName = component.name;
            } else {
                componentClassName = component.constructor.name;
            }

            isEvent = $metamodel.isEvent(behavior.state, componentClassName);
            isProperty = $metamodel.isProperty(behavior.state, componentClassName);
            isLink = $metamodel.isLink(behavior.state, componentClassName);
            isCollection = $metamodel.isCollection(behavior.state, componentClassName);

            if (isEvent || isProperty || isCollection || isLink) {
                callAction(component, behavior.state, {
                    "useCoreAPI": behavior.useCoreAPI,
                    "action": actionFromMemory
                }, params, true);
            }
        }
    }
}


/*
 * Change the state of a component.
 * 
 * Worklow:<br>
 * <br>
 * 0. Check if the component has not been destroyed <br>
 * 1. Check if the state is a method, a property or an event <br>
 * 2. Search if there is a behavior with actions for the new state <br>
 * 3. If so, get the action(s) <br>
 * 4. Check if the inputs are compliants with the metamodel <br>
 * 5. Call the action(s) <br>
 * 6. If a method, check if the output are compliants with the metamodel <br>
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
        componentClassName = false,
        isProperty = false,
        isLink = false,
        isCollection = false,
        isEvent = false;

    currentState = $state.get(params.component);

    if (currentState === 'destroy') {
        $log.invalidUseOfComponent(params.component);
    }

    component = $component.get(params.component);
    if (component) {

        if (component.constructor.name === 'Function') {
            componentClassName = component.name;
        } else {
            componentClassName = component.constructor.name;
        }
        isEvent = $metamodel.isEvent(params.state, componentClassName);
        isProperty = $metamodel.isProperty(params.state, componentClassName);
        isLink = $metamodel.isLink(params.state, componentClassName);
        isCollection = $metamodel.isCollection(params.state, componentClassName);
        actions = getActions(component, params.state, isEvent);
    }

    if (actions.length) {

        if (checkParams({
            "component": component,
            "methodName": params.state,
            "args": params.data
        })) {

            if (!isEvent &&
                !isProperty &&
                !isLink &&
                !isCollection) {
                action = actions[0];
                result = callAction(component, params.state, action, params.data, false);

                checkResult({
                    "component": component,
                    "methodName": params.state,
                    "methodResult": result
                });

            } else {

                length = actions.length;
                for (i = 0; i < length; i++) {
                    action = actions[i];
                    callAction(component, params.state, action, params.data, true);
                }

                $state.set(component.id(), params.state, params.data);
            }
        }
        return result;
    } else {
        if (component && (isEvent || isProperty || isLink || isCollection)) {
            $state.set(component.id(), params.state, params.data);
        }
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
            throw new RuntimeError("runtime has been stopped because " + params.message);
        } else {
            throw new RuntimeError("runtime has been stopped because of an unknown error");
        }
    } else {
        console.warn('runtime: runtime has been stopped');
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
 * This module manages the workflow of Runtime. It behaves like a workflow engine. <br>
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:<br>
 * - the state is valid for the component, <br>
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and <br>
 * - the output of all actions are compliants with the model. <br>
 * 
 * If an error occurs, the workflow will call the error state of the component and of Runtime instance. <br>
 * If the error can break the consistency of the current system, the worklow will stop.
 * 
 * @module runtime
 * @submodule runtime-workflow
 * @requires runtime-metamodel
 * @requires runtime-component
 * @requires runtime-behavior
 * @requires runtime-channel
 * @requires runtime-state
 * @requires runtime-helper
 * @requires runtime-log
 * @requires runtime-db
 * @class runtime-workflow 
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


/**
 * Check if an action has the valid number of parameter.
 * @method validParamNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @return {Boolean} true if the action is the valid number of parameters
 */
exports.validParamNumbers = validParamNumbers;


/**
 * Call an action that comes from an event.
 * @method action
 * @param {String} behaviorId id of the behavior
 * @param {Array} params parameters
 */
exports.action = action;
},{"./behavior.js":2,"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./metamodel.js":7,"./state.js":9}]},{},[8])(8)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Z0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2o0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM3VCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFJ1bnRpbWVcbiAqIFRoZSBKU09OIFJ1bnRpbWUgRW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqICBcbiAqIENvcHlyaWdodCAoYykgMjAxNiBFcndhbiBDYXJyaW91XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS4gXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICpcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN5c3RlbVxuICogQGNsYXNzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAc3RhdGljIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKiBQdWJsaWMgcHJvcGVydGllcyAqL1xuXG5cbi8qXG4gKiBSdW50aW1lIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge1J1bnRpbWVTeXN0ZW19IHN5c3RlbVxuICovXG52YXIgc3lzdGVtID0ge1xuICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgIFwiV29ya2VyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiV29ya2VyXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiV29ya2VyXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJXb3JrZXJTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JrZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJXb3JrZXJTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJXb3JrZXJTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJXb3JrZXJTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JrZXJcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzZW5kXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lQWRtaW5TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lQWRtaW5TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQWRtaW5TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdG9wXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lQWRtaW5cIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVBZG1pblNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXRoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3RvcFwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVDaGFubmVsU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZUNoYW5uZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2hhbm5lbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlTW9kZWxcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGVsZXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VuZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lQ2hhbm5lbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVDaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVDaGFubmVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjcmVhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZU1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlTW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVCZWhhdmlvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzZW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwibG9hZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZWFkeVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IFwiZXZlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgXCJsb2FkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiUnVudGltZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVCZWhhdmlvclNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZUJlaGF2aW9yU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZUJlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUJlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBcInByb3BlcnR5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lQ2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVDbGFzc0luZm9TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxpbmtcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZUNsYXNzSW5mb1NjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRob2RcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibGlua3NcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiUnVudGltZUNvbXBvbmVudFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXNlQ29yZUFQSVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9mZlwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvcklkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZUNvbXBvbmVudFNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm9uXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm9mZlwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5pdFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lRGF0YWJhc2VcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVEYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluc2VydFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2xhc3NJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVEYXRhYmFzZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVEYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVEYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IFwiZXZlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiUnVudGltZU1lc3NhZ2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTWVzc2FnZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVNZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmcm9tXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcInByb3BlcnR5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTWV0YW1vZGVsU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZU1ldGFtb2RlbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVTdGF0ZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTdGF0ZVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiUnVudGltZVN0YXRlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVTdGF0ZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVTdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiOiBcInByb3BlcnR5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU3lzdGVtXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiUnVudGltZVN5c3RlbVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIlJ1bnRpbWVTeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hc3RlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJzeW5jXCI6IHt9LFxuICAgICAgICAgICAgXCJtYWluXCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZVN5c3RlbVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIlJ1bnRpbWVTeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1hc3RlclwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInNjaGVtYXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1haW5cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidHlwZXNcIjoge1xuICAgICAgICBcImh0bWxcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaHRtbFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImNzc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJjc3NcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVycm9yUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiamF2YXNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwianNvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqc29uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlua1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmcm9tXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1ldGhvZFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGFyYW1ldGVyXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtZXRlclwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgIFwiMWMwMGMxMDdlMDFjOWIzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWMwMGMxMDdlMDFjOWIzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVBZG1pblwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0YXJ0KHBhdGgpIHtcXG4gICAgdmFyIFdvcmtlciA9IG51bGwsXFxuICAgIHdvcmtlciA9IG51bGwsXFxuICAgIHdvcmtlclBhdGggPSAnJyxcXG4gICAgUnVudGltZUNoYW5uZWwgPSBudWxsLFxcbiAgICBydW50aW1lQ2hhbm5lbCA9IG51bGw7XFxuICAgIFxcbiAgICBpZiAocGF0aCkge1xcbiAgICAgICAgd29ya2VyUGF0aCA9IHBhdGggKyAnL3NjcmlwdHMvd29ya2VyLmpzJztcXG4gICAgICAgIHdvcmtlclBhdGggPSB3b3JrZXJQYXRoLnJlcGxhY2UoL1xcXFwvXFxcXC8vZywnLycpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgd29ya2VyUGF0aCA9ICcvZGVzaWduZXIvc2NyaXB0cy93b3JrZXIuanMnO1xcbiAgICB9XFxuICAgIFxcbiAgICBpZiAodHlwZW9mIFNoYXJlZFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICAgIFxcbiAgICAgICAgaWYgKCF0aGlzLnJlcXVpcmUoJ2NoYW5uZWwtYWRtaW4nKSkge1xcbiAgICAgICAgICAgIFJ1bnRpbWVDaGFubmVsID0gdGhpcy5yZXF1aXJlKCdSdW50aW1lQ2hhbm5lbCcpO1xcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsID0gbmV3IFJ1bnRpbWVDaGFubmVsKHtcXG4gICAgICAgICAgICAgICAgJ19pZCc6ICdjaGFubmVsLWFkbWluJyxcXG4gICAgICAgICAgICAgICAgJ19jb3JlJzogdHJ1ZVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdzZW5kJywgZnVuY3Rpb24gc2VuZChtZXNzYWdlKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnd29ya2VyLWFkbWluJykud29ya2VyKCkucG9ydC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyBzY2hlbWEgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVTY2hlbWEnLCBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoaWQsIHNjaGVtYSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnNjaGVtYShzY2hlbWEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIH0sIHRydWUpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCd1cGRhdGVTY2hlbWEnLCBmdW5jdGlvbiB1cGRhdGVTY2hlbWEoaWQsIHNjaGVtYSkge1xcbiAgICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS50eXBlKHNjaGVtYSk7XFxuICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIH0sIHRydWUpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVTY2hlbWEnLCBmdW5jdGlvbiBkZWxldGVTY2hlbWEoaWQpIHtcXG4gICAgICAgICAgICAgICAgJGRiWydSdW50aW1lU2NoZW1hJ10ucmVtb3ZlKHsnX2lkJzogaWR9KTtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB9LCB0cnVlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyBtb2RlbCBjaGFuZ2UgZXZlbnRzXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZU1vZGVsJywgZnVuY3Rpb24gY3JlYXRlTW9kZWwoaWQsIG1vZGVsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKG1vZGVsKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB9LCB0cnVlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBydW50aW1lQ2hhbm5lbC5vbigndXBkYXRlTW9kZWwnLCBmdW5jdGlvbiB1cGRhdGVNb2RlbChpZCwgbW9kZWwpIHtcXG4gICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykudHlwZShtb2RlbCk7XFxuICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIH0sIHRydWUpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVNb2RlbCcsIGZ1bmN0aW9uIGRlbGV0ZU1vZGVsKGlkKSB7XFxuICAgICAgICAgICAgICAgICRkYlsnUnVudGltZVNjaGVtYSddLnJlbW92ZSh7J19pZCc6IGlkfSk7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShpZCk7XFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgLy8gdHlwZSBjaGFuZ2UgZXZlbnRzXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZVR5cGUnLCBmdW5jdGlvbiBjcmVhdGVUeXBlKGlkLCB0eXBlKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykudHlwZSh0eXBlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB9LCB0cnVlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBydW50aW1lQ2hhbm5lbC5vbigndXBkYXRlVHlwZScsIGZ1bmN0aW9uIHVwZGF0ZVR5cGUoaWQsIHR5cGUpIHtcXG4gICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykudHlwZSh0eXBlKTtcXG4gICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2RlbGV0ZVR5cGUnLCBmdW5jdGlvbiBkZWxldGVUeXBlKGlkKSB7XFxuICAgICAgICAgICAgICAgICRkYlsnUnVudGltZVR5cGUnXS5yZW1vdmUoeydfaWQnOiBpZH0pO1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIH0sIHRydWUpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCBjaGFuZ2UgZXZlbnRzXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChtb2RlbCwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgICAgICRkYlttb2RlbF0uaW5zZXJ0KGNvbXBvbmVudCk7XFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3VwZGF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbiwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS51cGRhdGUoeydfaWQnOiBpZH0sIGNvbXBvbmVudCk7XFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2RlbGV0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uIGRlbGV0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHsnX2lkJzogaWR9KTtcXG4gICAgICAgICAgICB9LCB0cnVlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBjaGFuZ2UgZXZlbnRzXFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gY3JlYXRlQmVoYXZpb3IoY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgICAgICRkYlsnUnVudGltZUJlaGF2aW9yJ10uaW5zZXJ0KGNvbXBvbmVudCk7XFxuICAgICAgICAgICAgfSwgdHJ1ZSk7XFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3VwZGF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gdXBkYXRlQmVoYXZpb3IoaWQsIGJlaGF2aW9yKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2RlbGV0ZUJlaGF2aW9yJywgZnVuY3Rpb24gZGVsZXRlQmVoYXZpb3IoaWQpIHtcXG4gICAgICAgICAgICAgICAgJGRiWydSdW50aW1lQmVoYXZpb3InXS5yZW1vdmUoeydfaWQnOiBpZH0pOyAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH0sIHRydWUpO1xcbiAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIFN5c3RlbSBEZXNpZ25lciBldmVudFxcbiAgICAgICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdzeW5jJywgZnVuY3Rpb24gc3luYygpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3lzdGVtKEpTT04ucGFyc2UodGhpcy5yZXF1aXJlKCdkYicpLnN5c3RlbSgpKSk7XFxuICAgICAgICAgICAgfSk7XFxuICAgIFxcbiAgICAgICAgICAgIFdvcmtlciA9IHRoaXMucmVxdWlyZSgnV29ya2VyJyk7XFxuICAgICAgICAgICAgd29ya2VyID0gbmV3IFdvcmtlcih7XFxuICAgICAgICAgICAgICAgICdfaWQnOiAnd29ya2VyLWFkbWluJyxcXG4gICAgICAgICAgICAgICAgJ19jb3JlJzogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgJ3dvcmtlcic6IG5ldyBTaGFyZWRXb3JrZXIod29ya2VyUGF0aCksXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgd29ya2VyLndvcmtlcigpLnBvcnQub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgICAgICRkYi5SdW50aW1lTWVzc2FnZS5pbnNlcnQoZS5kYXRhKTtcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogYWRtaW4gaXMgc3RhcnRlZCcpO1xcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6IGFkbWluIGlzIGFscmVhZHkgc3RhcnRlZCcpO1xcbiAgICAgICAgfVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiB0aGUgYnJvd3NlciBjYW4gbm90IHJ1biBhZG1pbiBmZWF0dXJlcycpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkNzE1MWRkMmQxNTU4ZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkNzE1MWRkMmQxNTU4ZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdG9wXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0b3AoKSB7XFxuICAgIHZhciB3b3JrZXIgPSBudWxsLFxcbiAgICBjaGFubmVsID0gbnVsbDtcXG4gICAgXFxuICAgIHdvcmtlciA9IHRoaXMucmVxdWlyZSgnd29ya2VyLWFkbWluJyk7XFxuICAgIGlmICh3b3JrZXIgJiYgd29ya2VyLndvcmtlcigpKSB7XFxuICAgICAgICB3b3JrZXIud29ya2VyKCkucG9ydC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7fTtcXG4gICAgICAgIHdvcmtlci5kZXN0cm95KCk7XFxuICAgICAgICBcXG4gICAgICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwtYWRtaW4nKTtcXG4gICAgICAgIGlmIChjaGFubmVsKSB7XFxuICAgICAgICAgICAgY2hhbm5lbC5kZXN0cm95KCk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogYWRtaW4gaXMgc3RvcHBlZCcpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmYzEwMWMyMzkxODc3M1wiOiB7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJvZmZcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICAgIHZhciBhcmdzID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDY7IGkrKykge1xcbiAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICAgIH1cXG4gICAgXFxuICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xcbiAgICAgICAgXFxcImNvbXBvbmVudFxcXCI6IHRoaXMsIFxcbiAgICAgICAgXFxcIm1ldGhvZE5hbWVcXFwiOiBcXFwib2ZmXFxcIiwgXFxuICAgICAgICBcXFwiYXJnc1xcXCI6IGFyZ3NcXG4gICAgICAgIH0pKSB7XFxuICAgICAgICBcXG4gICAgICAgIGlmIChzdGF0ZSB8fCBiZWhhdmlvcklkKSB7XFxuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7XFxuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICAgICAgXFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLCBcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSwgXFxuICAgICAgICAgICAgICAgICAgICBcXFwic3RhdGVcXFwiOiBzdGF0ZVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9IGVsc2UgeyBcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxcXCJydW50aW1lOiBpbnZva2UgXFxcXCdvZmZcXFxcJyBtZXRob2Qgb2YgY29tcG9uZW50ICdcXFwiICsgdGhpcy5pZCgpICsgXFxcIicgd2l0aCBhbiBpbnZhbGlkIHN0YXRlICdcXFwiICsgc3RhdGUgKyBcXFwiJ1xcXCIpOyBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKClcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWFlZTFlNjMxMWZmMzlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWFlZTFlNjMxMWZmMzlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwicnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxvYWRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbG9hZCh1cmwsIGFzeW5jKSB7XFxuICAgIHZhciB4aHIgPSBudWxsLFxcbiAgICBjYWxsYmFja0xvYWQgPSBudWxsO1xcbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcXG4gICAgXFxuICAgIGNhbGxiYWNrTG9hZCA9IGZ1bmN0aW9uIGNhbGxiYWNrTG9hZChzeXN0ZW0pIHtcXG4gICAgICAgIHZhciBzeXNJZCA9ICRkYi5zeXN0ZW0oc3lzdGVtKSxcXG4gICAgICAgIHN5cyA9ICRjb21wb25lbnQuZ2V0KHN5c0lkKSxcXG4gICAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyksXFxuICAgICAgICBuYlN1YnN5c3RlbSA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICdzdWJzeXN0ZW0nOiB0cnVlXFxuICAgICAgICB9KTsgXFxuICAgICAgICBpZiAoc3lzKSB7XFxuICAgICAgICAgICAgc3lzLm1haW4oKTtcXG4gICAgICAgIH0gXFxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggKyAxICsgbmJTdWJzeXN0ZW0ubGVuZ3RoID09PSAkZGIuUnVudGltZVN5c3RlbS5jb3VudCgpKSB7XFxuICAgICAgICAgICAgJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgICAgfVxcbiAgICB9O1xcbiAgICBcXG4gICAgaWYgKGFzeW5jKSB7XFxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XFxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgICAgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY2MDAxNzczYTE4NzkxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY2MDAxNzczYTE4NzkxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1haW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWFpbigpIHtcXG4gICAgdmFyIHN1YnN5c3RlbXMgPSBbXSxcXG4gICAgc3lzdGVtcyA9IFtdLFxcbiAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgIHN1YnN5c3RlbXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcXG4gICAgICAgICdzdWJzeXN0ZW0nOiB0cnVlXFxuICAgIH0pO1xcbiAgICBzdWJzeXN0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHN1YnN5c3RlbSkge1xcbiAgICAgICAgdmFyIHN1YnN5c3RlbUlkID0gc3Vic3lzdGVtLl9pZDtcXG4gICAgICAgIHRoaXMucmVxdWlyZShzdWJzeXN0ZW1JZCkubWFpbigpO1xcbiAgICB9LCB0aGlzKTsgXFxuICAgIFxcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xcbiAgICAgICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTtcXG4gICAgICAgIGxlbmd0aCA9IHN5c3RlbXMubGVuZ3RoO1xcbiAgICAgICAgXFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGlmIChzeXN0ZW0uZ2V0QXR0cmlidXRlKCdhc3luYycpID09PSAnZmFsc2UnKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmxvYWQoc3lzdGVtLmhyZWYsIGZhbHNlKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5sb2FkKHN5c3RlbS5ocmVmLCB0cnVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZWQ4NDEzOWI5MWE0ZDZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZWQ4NDEzOWI5MWE0ZDZcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKGRhdGEpIHtcXG4gICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIGRhdGEubWVzc2FnZSwgZGF0YS5lcnJvcik7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNjdkNTEwOGRmMWU2NjNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNjdkNTEwOGRmMWU2NjNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0obmFtZSkge1xcbiAgICB2YXIgU3lzdGVtID0gbnVsbCxcXG4gICAgc3lzdGVtID0ge30sXFxuICAgIHN5c3RlbUlkID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBjb25mID0ge307XFxuICAgIFxcbiAgICBpZiAobmFtZSkge1xcbiAgICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICAgICAgY29uZi5uYW1lID0gbmFtZTtcXG4gICAgICAgIFN5c3RlbSA9IHRoaXMucmVxdWlyZSgnUnVudGltZVN5c3RlbScpO1xcbiAgICAgICAgc3lzdGVtID0gbmV3IFN5c3RlbShjb25mKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgICAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gc3lzdGVtO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTJmYTFjMmNlMTBkYmNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTJmYTFjMmNlMTBkYmNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XFxuICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTg0NjAxMjUwNzFmNzZkXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTg0NjAxMjUwNzFmNzZkXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7IFxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTI5MDUxNDIzODFjZjU5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTI5MDUxNDIzODFjZjU5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDsgXFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgXFxuICAgICAgICBpdGVtID0ga2V5c1tpXTsgXFxuICAgICAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ2NvbGxlY3Rpb24nKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxODA3NTE2OTUxMThhMjVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxODA3NTE2OTUxMThhMjVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50KG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBcXG4gICAgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOTZkZjFmM2QzMWEwMmJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOTZkZjFmM2QzMWEwMmJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudHMoKSB7XFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdldmVudCcpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkNzhlMTlmMTQxMGRlNVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkNzhlMTlmMTQxMGRlNVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibGlua1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsaW5rKG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBcXG4gICAgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdsaW5rJykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICB9XFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYzIyYTFlZGRlMTFlY2VcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYzIyYTFlZGRlMTFlY2VcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxpbmtzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxpbmtzKCkgeyBcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnbGluaycpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWQxZjUxM2RiZjFmYmQ1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWQxZjUxM2RiZjFmYmQ1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kKG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTg0ODIxYzEyNDFmOWVjXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTg0ODIxYzEyNDFmOWVjXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZHMoKSB7XFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnbWV0aG9kJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IFxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyMDhhMWZjMGUxMmFmN1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMDhhMWZjMGUxMmFmN1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydGllc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0aWVzKCkgeyBcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH0gcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0NTdhMTQyM2UxN2RjMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0NTdhMTQyM2UxN2RjMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydHkobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIFxcbiAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICB9XFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTEyNzE4YjVhMWJhOWRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTEyNzE4YjVhMWJhOWRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZGVzdHJveSgpIHtcXG4gICAgJGNvbXBvbmVudC5kZXN0cm95KHRoaXMuaWQoKSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0M2NjMTFjZmYxNDIzOVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0M2NjMTFjZmYxNDIzOVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG9mZihzdGF0ZSwgYmVoYXZpb3JJZCkge1xcbiAgICB2YXIgYXJncyA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSA2OyBpKyspIHtcXG4gICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xcbiAgICB9XFxuICAgIFxcbiAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcXG4gICAgICAgIFxcXCJjb21wb25lbnRcXFwiOiB0aGlzLCBcXG4gICAgICAgIFxcXCJtZXRob2ROYW1lXFxcIjogXFxcIm9mZlxcXCIsIFxcbiAgICAgICAgXFxcImFyZ3NcXFwiOiBhcmdzXFxuICAgICAgICB9KSkge1xcbiAgICAgICAgXFxuICAgICAgICBpZiAoc3RhdGUgfHwgYmVoYXZpb3JJZCkge1xcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSkge1xcbiAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJiZWhhdmlvcklkXFxcIjogYmVoYXZpb3JJZCwgXFxuICAgICAgICAgICAgICAgICAgICBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKCksIFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInN0YXRlXFxcIjogc3RhdGVcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSBlbHNlIHsgXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcXFwicnVudGltZTogaW52b2tlIFxcXFwnb2ZmXFxcXCcgbWV0aG9kIG9mIGNvbXBvbmVudCAnXFxcIiArIHRoaXMuaWQoKSArIFxcXCInIHdpdGggYW4gaW52YWxpZCBzdGF0ZSAnXFxcIiArIHN0YXRlICsgXFxcIidcXFwiKTsgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcXG4gICAgICAgICAgICAgICAgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTEyNzgxZDFjODFkOTA0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTEyNzgxZDFjODFkOTA0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlcXVpcmUoaWQpIHtcXG4gICAgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTkxNmUxY2NmODEwYTkyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTkxNmUxY2NmODEwYTkyXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25zXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKCkge1xcbiAgICB2YXIgcmVzdWx0ID0ge30sXFxuICAgIGNvbGxlY3Rpb25OYW1lID0gJyc7XFxuICAgIFxcbiAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluICRkYi5zdG9yZSkge1xcbiAgICAgICAgaWYgKCRkYi5zdG9yZS5oYXNPd25Qcm9wZXJ0eShjb2xsZWN0aW9uTmFtZSkgJiYgY29sbGVjdGlvbk5hbWUuaW5kZXhPZignUnVudGltZScpICE9PSAwKSB7XFxuICAgICAgICAgICAgcmVzdWx0W2NvbGxlY3Rpb25OYW1lXSA9ICRkYltjb2xsZWN0aW9uTmFtZV07XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWFmMjAxMDJhODE0NDVlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFmMjAxMDJhODE0NDVlXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN1YnN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdWJzeXN0ZW0ocGFyYW1zKSB7XFxuICAgIHJldHVybiAkZGIuc3Vic3lzdGVtKHBhcmFtcyk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjExNTFmMWEwMjExZDlmZFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjExNTFmMWEwMjExZDlmZFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKHN5c3RlbSkge1xcbiAgICByZXR1cm4gJGRiLnN5c3RlbShzeXN0ZW0pO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDRjMzE5OWMzMTY1MTlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDRjMzE5OWMzMTY1MTlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjcmVhdGUoKSB7XFxuICAgICRtZXRhbW9kZWwuY3JlYXRlKCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE3MTBiMWIwOGExYjY2NVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE3MTBiMWIwOGExYjY2NVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHtcXG4gICAgJG1ldGFtb2RlbC5zY2hlbWEoc2NoZW1hKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJkZjcxN2M1MDE1NzA1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJkZjcxN2M1MDE1NzA1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHR5cGUodHlwZSkge1xcbiAgICAkbWV0YW1vZGVsLnR5cGUodHlwZSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlNDU5MThjMmUxMGU5NlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlNDU5MThjMmUxMGU5NlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3lzdGVtXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3luY1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeW5jKCkge1xcbiAgICB2YXIgc3lzdGVtID0gSlNPTi5wYXJzZSgkZGIuc3lzdGVtKCkpO1xcbiAgICBcXG4gICAgdGhpcy5zY2hlbWFzKHN5c3RlbS5zY2hlbWFzKTtcXG4gICAgdGhpcy50eXBlcyhzeXN0ZW0udHlwZXMpO1xcbiAgICB0aGlzLmJlaGF2aW9ycyhzeXN0ZW0uYmVoYXZpb3JzKTtcXG4gICAgdGhpcy5jb21wb25lbnRzKHN5c3RlbS5jb21wb25lbnRzKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiY29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiUnVudGltZUFkbWluXCI6IHtcbiAgICAgICAgICAgIFwiYWRtaW5cIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiYWRtaW5cIixcbiAgICAgICAgICAgICAgICBcIl9jb3JlXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lXCI6IHtcbiAgICAgICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJydW50aW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVEYXRhYmFzZVwiOiB7XG4gICAgICAgICAgICBcImRiXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImRiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIm1ldGFtb2RlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZVN5c3RlbVwiOiB7XG4gICAgICAgICAgICBcIjE4ZWQ4MWRlMzMxMjUyY1wiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCIxOGVkODFkZTMzMTI1MmNcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW0tYWRtaW5cIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjEuMVwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSdW50aW1lIENvbXBvbmVudCBhZG1pbmlzdHJhdGlvbiBcIixcbiAgICAgICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFzdGVyXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIxMzM0MjFkMGMzMTNkMmRcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiMTMzNDIxZDBjMzEzZDJkXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwid2ViXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkIGJlaGF2aW9ycyBmb3Igd2ViXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hc3RlclwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMWY2ZmYxOTRkZjFjMzdhXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIjFmNmZmMTk0ZGYxYzM3YVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIndlYlR5cGVcIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjEuMFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZGQgdHlwZXMgZm9yIHdlYlwiLFxuICAgICAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYXN0ZXJcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwicnVudGltZVwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuMC4yXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJ1bnRpbWVcIixcbiAgICBcIl9pZFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgIFwibWFzdGVyXCI6IGZhbHNlLFxuICAgIFwic3Vic3lzdGVtXCI6IGZhbHNlXG59O1xuXG4vKiBleHBvcnRzICAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zeXN0ZW1cbiAqIEBjbGFzcyBydW50aW1lLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG5cbi8qKlxuICogUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtSdW50aW1lU3lzdGVtfSBzeXN0ZW1cbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG4iLCIvKlxuICogUnVudGltZVxuICogVGhlIEpTT04gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogIFxuICogQ29weXJpZ2h0IChjKSAyMDE2IEVyd2FuIENhcnJpb3VcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLiBcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy4gXG4gKiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiB3aGVuIGEgc3BlY2lmaWMgc3RhdGUgb2YgYSBjb21wb25lbnQgd2lsbCBjaGFuZ2UuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jaGFubmVsXG4gKiBAY2xhc3MgcnVudGltZS1iZWhhdmlvclxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gZnJvbSBhIHN0cmluZy5cbiAqIFRoZSBjcmVhdGVkIGZ1bmN0aW9uOlxuICogLSB3aWxsIGJlIGEgbmFtZWQgZnVuY3Rpb24sXG4gKiAtIGhhcyB0aGUgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IGFuZFxuICogLSBjYW4gaGF2ZSBzb21lIGNvcmUgbW9kdWxlcyBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzLlxuICogQG1ldGhvZCBjcmVhdGVGdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgZGVmYXVsdCBuYW1lIG9mIHRoZSBmdW5jdGlvbiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBmdW5jIGEgc3RyaW5naWZpZWQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCB0aGUgYmVoYXZpb3Igd2lsbCBiZSB0cmVhdGVkIGFzIGEgUnVudGltZSBjb3JlIGJlaGF2aW9yLlxuICogSW4gdGhhdCBjYXNlLCB0aGUgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZCBpbiBhIHN5c3RlbSAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBjcmVhdGVkIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbihuYW1lLCBmdW5jLCBjb3JlLCB1c2VDb3JlQVBJKSB7XG4gICAgdmFyIGZ1bmNOYW1lID0gJycsXG4gICAgICAgIGJlZ2luQm9keSA9IC0xLFxuICAgICAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbXNDbGVhbiA9IFtdLFxuICAgICAgICBmdW5jQm9keSA9ICcnLFxuICAgICAgICBoZWFkZXIgPSAnJyxcbiAgICAgICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICAgIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG5cbiAgICBmdW5jTmFtZSA9IGhlYWRlci5zcGxpdCgnKCcpWzBdLnJlcGxhY2UoJ2Z1bmN0aW9uJywgJycpLnRyaW0oKTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG5cbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHBhcmFtc0NsZWFuLnB1c2gocGFyYW0udHJpbSgpKTtcbiAgICB9KTtcblxuICAgIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMSk7XG4gICAgZnVuY0JvZHkgPSBmdW5jQm9keS5zdWJzdHJpbmcoMCwgZnVuY0JvZHkubGFzdEluZGV4T2YoJ30nKSkudHJpbSgpO1xuXG4gICAgZnVuY05hbWUgPSBmdW5jTmFtZSB8fCBuYW1lO1xuXG4gICAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuICAgIGlmICh1c2VDb3JlQVBJKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckZGInKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRtZXRhbW9kZWwnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckc3RhdGUnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKFwiICsgcGFyYW1zLmpvaW4oJywnKSArIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICsgcGFyYW1zLmpvaW4oXCInLCdcIikgKyBcIicsIGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKCkgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gUnVudGltZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGUgXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBSdW50aW1lIGRhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGFkZChpZCwgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgY29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCksXG4gICAgICAgIHN0ckFjdGlvbiA9IGFjdGlvbi50b1N0cmluZygpO1xuXG4gICAgaWYgKHR5cGVvZiBjb3JlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb3JlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdXNlQ29yZUFQSSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKHN0YXRlLCBzdHJBY3Rpb24sIGNvcmUsIHVzZUNvcmVBUEkpO1xuXG4gICAgc3RvcmVbYmVoYXZpb3JJZF0gPSBhY3Rpb247XG5cbiAgICAkZGIuUnVudGltZUJlaGF2aW9yLmluc2VydCh7XG4gICAgICAgIFwiX2lkXCI6IGJlaGF2aW9ySWQsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICBcInN0YXRlXCI6IHN0YXRlLFxuICAgICAgICBcImFjdGlvblwiOiBzdHJBY3Rpb24sXG4gICAgICAgIFwidXNlQ29yZUFQSVwiOiB1c2VDb3JlQVBJLFxuICAgICAgICBcImNvcmVcIjogY29yZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgICBwYXJhbXMuY29tcG9uZW50SWQgPSBwYXJhbXMuY29tcG9uZW50SWQgfHwgJyc7XG4gICAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgICAgICBpZiAocGFyYW1zLmJlaGF2aW9ySWQpIHtcbiAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBwYXJhbXMuYmVoYXZpb3JJZCxcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3BhcmFtcy5iZWhhdmlvcklkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGlkLCBzdGF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgZGJSZXN1bHQgPSBbXSxcbiAgICAgICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGRiUmVzdWx0ID0gJGRiLlJ1bnRpbWVCZWhhdmlvci5maW5kKHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICB9KTtcblxuICAgIGRiUmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGJlaGF2aW9yKSB7XG4gICAgICAgIGFjdGlvbiA9IHN0b3JlW2JlaGF2aW9yLl9pZF07XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oYmVoYXZpb3Iuc3RhdGUsIGJlaGF2aW9yLmFjdGlvbiwgYmVoYXZpb3IuY29yZSwgYmVoYXZpb3IudXNlQ29yZUFQSSk7XG4gICAgICAgICAgICBzdG9yZVtiZWhhdmlvci5faWRdID0gYWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIHN0b3JlZCBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLypcbiAqIEdldCBhIGJlaGF2aW9yIGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJuIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEBjbGFzcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gUnVudGltZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGUgXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBSdW50aW1lIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gYWRkO1xuXG5cbi8qKlxuICogR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm4ge0JlaGF2aW9yfSB0aGUgYmVoYXZpb3JcbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKSkgPGJyPlxuICovXG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcblxuXG4vKipcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZ2V0QWN0aW9ucztcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IHJlbW92ZUZyb21NZW1vcnk7IiwiLypcbiAqIFJ1bnRpbWVcbiAqIFRoZSBKU09OIFJ1bnRpbWUgRW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqICBcbiAqIENvcHlyaWdodCAoYykgMjAxNiBFcndhbiBDYXJyaW91XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS4gXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFJ1bnRpbWUuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICR3b3JrbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eScsXG4gICAgTElOS19UWVBFID0gJ2xpbmsnLFxuICAgIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJyxcbiAgICBNRVRIT0RfVFlQRSA9ICdtZXRob2QnLFxuICAgIEVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuICAgIHN0b3JlID0ge307XG4gICAgXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgcHVzaCBhbmQgcG9wIG1ldGhvZCBvZiBBcnJheSBDbGFzcy5cbiAqIEBjbGFzcyBSdW50aW1lQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gUnVudGltZUFycmF5KGNvbmYpIHtcbiAgICB2YXIgYXJyID0gW10sXG4gICAgICAgIGFyckRiID0gW10sXG4gICAgICAgIHR5cGUgPSAnJyxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICAgIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICAgIGNvbmYgPSBjb25mIHx8IHt9O1xuICAgIHR5cGUgPSBjb25mLnR5cGUgfHwgJyc7XG4gICAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICAgIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICAgIGFyckRiID0gY29uZi5hcnIgfHwgW107XG5cbiAgICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlzUmVhZE9ubHkgPSBjb25mLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIC8vIGluaXRcbiAgICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qIE92ZXJyaWRlIHB1c2ggbWV0aG9kLlxuICAgICAqIEBwdXNoXG4gICAgICogQHBhcmFtIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICAgKi9cbiAgICBhcnIucHVzaCA9IGZ1bmN0aW9uIHB1c2godmFsKSB7XG4gICAgICAgIHZhciBpc0NsYXNzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG5cbiAgICAgICAgICAgIGlzQ2xhc3MgPSB0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG5cbiAgICAgICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlLnJlcGxhY2UoJ0AnLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyckRiLnB1c2godmFsLmlkKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFthcnJEYi5sZW5ndGgsIHZhbC5pZCgpLCAnYWRkJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBwcm9wZXJ0eU5hbWUsIHZhbC5pZCgpLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyckRiLnB1c2godmFsKTtcblxuICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbYXJyRGIubGVuZ3RoLCB2YWwsICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyckRiLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgLyogT3ZlcnJpZGUgcG9wIG1ldGhvZC5cbiAgICAgKiBAcG9wXG4gICAgICogQHJldHVybiB7UnVudGltZUNvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAgICovXG4gICAgYXJyLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbCA9IG51bGwsXG4gICAgICAgICAgICBpc0NsYXNzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBpZiAoYXJyRGIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gYXJyRGIucG9wKCk7XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbYXJyRGIubGVuZ3RoLCB2YWwsICdyZW1vdmUnXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaXNDbGFzcyA9IHR5cGUuaW5kZXhPZignQCcpICE9PSAtMTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0b3JlW3ZhbF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cblJ1bnRpbWVBcnJheS5wcm90b3R5cGUgPSBuZXcgQXJyYXk7XG4vKiBqc2hpbnQgK1cwNTggKi9cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBwYXJhbXMgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV0ucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgcHJvcGVydHkgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0UHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBMSU5LX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IENPTExFQ1RJT05fVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgcHJvcE5hbWVzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXQoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KG1vZGVsLl9zY2hlbWEpO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHByb3BOYW1lcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0KGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldChtb2RlbC5fc2NoZW1hKTtcblxuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcgY2xhc3MgZnJvbSBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICB2YXIgYm9keSA9IHt9O1xuXG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldChjbGFzc0lkKSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0KGNsYXNzSWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidGhlIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZVtjb25maWcuX2lkXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gaWRcbiAgICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuX2lkO1xuICAgICAgICB9O1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgdGhpcy5pZCA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cblxuICAgICAgICAvLyBjbGFzc0luZm9cbiAgICAgICAgY29uZmlnLmNsYXNzSW5mbyA9IGNsYXNzSWQgKyAnSW5mbyc7XG5cbiAgICAgICAgLy8gY3JlYXRlIGxpbmsgdG8gZGJcbiAgICAgICAgJGRiLnN0b3JlW2NsYXNzSWRdW2NvbmZpZy5faWRdID0gY29uZmlnO1xuXG4gICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykuaW5zZXJ0KGNsYXNzSWQsIGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdChjb25maWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGNsYXNzSWQgKyBcIiAoY29uZmlnKSB7IGJvZHkuY2FsbCh0aGlzLGNvbmZpZykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhbiBpZCBtZXRob2QgdG8gYSBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGl0cyBpZC5cbiAqIEBtZXRob2QgYWRkSWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRJZChDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xhc3NJZDtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAocHJvcCwgdmFsKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgcHJvcCwgdmFsKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuIEFsbCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWNjZXNzZWQgYnkgYSBtZXRob2Qgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICogU29tZSBjaGVja3MgY2FuIGJlIGRvbmUgaW4gb3JkZXIgdG8gc2VlIGlmIHRoZSBzZXQgb2YgcHJvcGVydGllcyBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyhtb2RlbCk7XG5cbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIgYm9keSA9IHt9LFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydHlUeXBlKSkgeyAvLyBpbiBjYXNlIG9mIGFycmF5LCByZXR1cm4gYSBzdWIgYXJyYXlcbiAgICAgICAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZUFyciA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBSdW50aW1lQXJyYXkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlOYW1lXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0lkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHByb3BlcnR5VHlwZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyclwiOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVBcnI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlUeXBlWzBdLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9ICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhbFZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZVswXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbSh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lLCBwcm9wZXJ0eVR5cGVbMF0ucmVwbGFjZSgnQCcsICcnKSkgJiYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IHRoaXMuaWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHJlYWxWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFtwb3NpdGlvbiwgcmVhbFZhbCwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHBvc2l0aW9uLHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgcG9zaXRpb24sIHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0cnlpbmcgdG8gZ2V0IHRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgdGhpcy5pZCgpICsgXCInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHsgXCJfaWRcIjogdGhpcy5pZCgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZShjbGFzc0lkLCB0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIFJ1bnRpbWVCZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVCZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAodmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBtZXRob2RzID0gZ2V0TWV0aG9kcyhtb2RlbCk7XG5cbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gbWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpLFxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiBldmVudChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCcpLFxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3lzdGVtcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1JZCA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzSWQgPT09ICdSdW50aW1lQ2hhbm5lbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtcyA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3lzdGVtSWQgPSBzeXN0ZW1zWzBdLl9pZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mcm9tID0gc3lzdGVtSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5ldmVudCA9IG1ldGhvZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lTWVzc2FnZS5pbnNlcnQobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogXCJzZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogbWVzc2FnZS5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCI6IG1lc3NhZ2UuZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG1lc3NhZ2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciBiZWhhdmlvcklkID0gJycsXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAnJztcblxuICAgICAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd29ya2xvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9ySWQgPSAkYmVoYXZpb3IuYWRkKHRoaXMuaWQoKSwgc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIHN0YXRlID09PSBjdXJyZW50U3RhdGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24odGhpcy5pZCgpLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWhhdmlvcklkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciBiZWhhdmlvcklkID0gJycsXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAnJztcblxuICAgICAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkd29ya2xvdy52YWxpZFBhcmFtTnVtYmVycyhjbGFzc0lkLCBzdGF0ZSwgaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9ySWQgPSAkYmVoYXZpb3IuYWRkKHRoaXMuaWQoKSwgc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIHN0YXRlID09PSBjdXJyZW50U3RhdGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24odGhpcy5pZCgpLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWhhdmlvcklkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudElkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5JbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIGRlc3Ryb3kgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGRldHJveSB0aGUgY2xhc3MgYW5kIGFsbCB0aGUgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkRGVzdHJveUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZERlc3Ryb3lDbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKCksXG4gICAgICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgICAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJGRiW2lkXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgJ2NvbXBvbmVudElkJzogaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50SWQnOiByZXN1bHRbaV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgdGhlIGFkZENsYXNzSW5mbyBtZXRob2Qgb24gYSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkQ2xhc3NJbmZvQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLmlkKCkgKyAnSW5mbycpO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuY2xhc3NJbmZvID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBjbGFzc0luZm8gKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgZmFjdG9yeVxuICogQHBhcmFtIHtKU09OfSBjb25maWcgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICB2YXIgQ2xhc3MgPSB7fSxcbiAgICAgICAgY2xhc3NJZCA9ICcnO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNsYXNzSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0lkID0gY29uZmlnLm1vZGVsO1xuICAgIH1cblxuICAgIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgICBzdG9yZVtjbGFzc0lkXSA9IENsYXNzO1xuXG4gICAgYWRkSWQoQ2xhc3MsIGNsYXNzSWQpO1xuXG4gICAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRNZXRob2RzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZEV2ZW50cyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgICAvLyBpbmhlcml0IGZyb20gUnVudGltZUNvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdSdW50aW1lQ29tcG9uZW50JykpIHtcbiAgICAgICAgYWRkT24oQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICAgICAgYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpO1xuICAgICAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZShDbGFzcyk7XG5cbiAgICByZXR1cm4gQ2xhc3M7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyA8YnI+XG4gKiB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lIDxicj5cbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuICAgIHJldHVybiBmYWN0b3J5KGNvbmZpZyk7XG59XG5cblxuLypcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gZGVzdHJveShpZCkge1xuICAgIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF0sXG4gICAgICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgICAgICAgIFwiX2lkXCI6IGlkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICdjb21wb25lbnRJZCc6IGlkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gY2FzZSBvZiBCZWhhdmlvclxuICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVCZWhhdmlvcicpIHtcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgY29tcG9uZW50IHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFJ1bnRpbWUuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGNvbXBvbmVudCB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IHJlbW92ZUZyb21NZW1vcnk7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZC5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnQgdG8gZGVzdHJveVxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTsiLCIvKlxuICogUnVudGltZVxuICogVGhlIEpTT04gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogIFxuICogQ29weXJpZ2h0IChjKSAyMDE2IEVyd2FuIENhcnJpb3VcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLiBcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBkYXRhYmFzZS4gPGJyPlxuICogUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6IDxicj5cbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmQgPGJyPlxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLiA8YnI+XG4gKiBcbiAqIFJ1bnRpbWUgRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gUnVudGltZSBtZXRhbW9kZWwgYW5kIFJ1bnRpbWUgY29tcG9uZW50cyBiZWNhdXNlOiA8YnI+XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgUnVudGltZSBkYXRhYmFzZSBtdXN0IGJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgYmVpbmcgZmluaXNoZWQsIDxicj5cbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kIDxicj5cbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKiAgXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fSxcbiAgICBjb2xsZWN0aW9ucyA9IFtdLFxuICAgIGludGVybmFsREIgPSBbXG4gICAgICAgICdSdW50aW1lJyxcbiAgICAgICAgJ1J1bnRpbWVTY2hlbWEnLFxuICAgICAgICAnUnVudGltZUV4dGVuZGVkU2NoZW1hJyxcbiAgICAgICAgJ1J1bnRpbWVCZWhhdmlvcicsXG4gICAgICAgICdSdW50aW1lU3RhdGUnLFxuICAgICAgICAnUnVudGltZVR5cGUnLFxuICAgICAgICAnUnVudGltZU1ldGFtb2RlbCcsXG4gICAgICAgICdSdW50aW1lRGF0YWJhc2UnLFxuICAgICAgICAnUnVudGltZVN5c3RlbScsXG4gICAgICAgICdSdW50aW1lQ2xhc3NJbmZvJyxcbiAgICAgICAgJ1J1bnRpbWVNZXNzYWdlJyxcbiAgICAgICAgJ1J1bnRpbWVDaGFubmVsJ1xuICAgIF0sXG4gICAgY29yZURiID0gW1xuICAgICAgICAnUnVudGltZVNjaGVtYScsXG4gICAgICAgICdSdW50aW1lRXh0ZW5kZWRTY2hlbWEnLFxuICAgICAgICAnUnVudGltZVN0YXRlJyxcbiAgICAgICAgJ1J1bnRpbWVUeXBlJ1xuICAgIF07XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIER1bXAgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBkdW1wXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBkdW1wIG9mIHRoZSBkYXRhYmFzZS4gVGhlIGR1bXAgaXMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnM6IDxicj5cbiAqIHtPYmplY3R9IHNjaGVtYXMgdGhlIHNjaGVtYXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IHR5cGVzIHRoZSB0eXBlcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gYmVoYXZpb3JzIHRoZSBiZWhhdmlvcnMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGNvbXBvbmVudHMgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkdW1wKCkge1xuICAgIHZhciBkYkR1bXAgPSB7fSxcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICAgICAgYmVoYXZpb3JJZCA9ICcnLFxuICAgICAgICB0eXBlSWQgPSAnJyxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgY29sbGVjdGlvbiA9IG51bGwsXG4gICAgICAgIHNjaGVtYUlkID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBpZCA9ICcnO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIGRiRHVtcC5zY2hlbWFzID0ge307XG4gICAgaWYgKGV4cG9ydHMuUnVudGltZVNjaGVtYS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAoc2NoZW1hSWQgaW4gc3RvcmUuUnVudGltZVNjaGVtYSkge1xuICAgICAgICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lU2NoZW1hW3NjaGVtYUlkXSkpO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAuc2NoZW1hc1tzY2hlbWFJZF0gPSBzY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0eXBlc1xuICAgIGRiRHVtcC50eXBlcyA9IHt9O1xuICAgIGlmIChleHBvcnRzLlJ1bnRpbWVUeXBlLmNvdW50KCkpIHtcbiAgICAgICAgZm9yICh0eXBlSWQgaW4gc3RvcmUuUnVudGltZVR5cGUpIHtcbiAgICAgICAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVUeXBlW3R5cGVJZF0pKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0eXBlLl9pZDtcbiAgICAgICAgICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLnR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3JzXG4gICAgZGJEdW1wLmJlaGF2aW9ycyA9IHt9O1xuICAgIGZvciAoYmVoYXZpb3JJZCBpbiBzdG9yZS5SdW50aW1lQmVoYXZpb3IpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVCZWhhdmlvcltiZWhhdmlvcklkXSkpO1xuICAgICAgICBkZWxldGUgYmVoYXZpb3IuY2xhc3NJbmZvO1xuXG4gICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgZGJEdW1wLmJlaGF2aW9yc1tiZWhhdmlvcklkXSA9IGJlaGF2aW9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmVbY29sbGVjdGlvbk5hbWVdKSk7XG5cbiAgICAgICAgICAgIGZvciAoaWQgaW4gY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXS5jbGFzc0luZm87XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbltpZF0uX2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbGxlY3Rpb25baWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSA9IGNvbGxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGJEdW1wO1xufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGFuIG9iamVjdCBjb250YWlucyBhbm90aGVyIG9uZS5cbiAqIEBtZXRob2QgY29udGFpbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIG9iamVjdCBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IG9iamVjdCBcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNvdXJjZSBvYmplY3QgY29udGFpbnMgdGhlIHRhcmdldCBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIHByb3BlcnR5ID0gJyc7XG5cbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHldLm1hdGNoKHNvdXJjZVtwcm9wZXJ0eV0pID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHldICE9PSBzb3VyY2VbcHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqIFxuICogQSBjb2xsZWN0aW9uIG9mIGRvY3VtZW50cyBtYW5hZ2VkIGJ5IFJ1bnRpbWUuIDxicj5cbiAqIEludGVybmFsIGNvbGxlY3Rpb25zIG1hbmFnZSBjb3JlIG9iamVjdHMgb2YgUnVudGltZSAoc2NoZW1hLCB0eXBlLCAuLi4pLiA8YnI+XG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuIDxicj5cbiAqIFxuICogQGNsYXNzIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbmV3IGNvbGxlY3Rpb25cbiAqL1xudmFyIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0KG5hbWUpIHx8IGludGVybmFsREIuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgc3RvcmVbbmFtZV0gPSB7fTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKGludGVybmFsREIuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogRmluZCBhIGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeVxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIGRvY3VtZW50cyB0aGF0IG1hcCB0aGUgcXVlcnlcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCJ9KTsgPGJyPlxuICogJGRiLlBlcnNvbi5maW5kKHtcIm5hbWVcIjogXCJsYXVyZVwiLCBcImFnZVwiIDogMjR9KTsgPGJyPlxuICogJGRiLlBlcnNvbi5maW5kKFt7XCJuYW1lXCI6IFwicmVuZVwifSwge1wibmFtZVwiOiBcInJvYmVydFwifV0pO1xuICovXG5SdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX3NlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBJbnNlcnQgYW4gbmV3IGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24uIDxicj5cbiAqIEJlZm9yZSBpbnNlcnRpbmcgdGhlIGRvY3VtZW50LCBSdW50aW1lIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uIDxicj4gXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnNlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBkb2N1bWVudCBhIG5ldyBvYmplY3QgdG8gYWRkXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgaWQgY3JlYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uaW5zZXJ0KHs8YnI+XG4gKiAgICAgIFwibmFtZVwiOiBcImJvYlwiLCA8YnI+XG4gKiAgICAgIFwiZmlyc3ROYW1lXCI6IFwiU2FpbnQtQ2xhclwiLCA8YnI+XG4gKiAgICAgIFwiYWdlXCI6IDQzIDxicj5cbiAqIH0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGRvY3VtZW50KSB7XG4gICAgdmFyIGRvYyA9IFtdLFxuICAgICAgICBDb21wb25lbnQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRvY3VtZW50KSkge1xuICAgICAgICBkb2MgPSBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2MucHVzaChkb2N1bWVudCk7XG4gICAgfVxuXG4gICAgZG9jLmZvckVhY2goZnVuY3Rpb24gbXVsdGlfaW5zZXJ0KG9iaikge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgICAgIGNoYW5uZWxzID0gW10sXG4gICAgICAgICAgICBjaGFubmVsID0gbnVsbCxcbiAgICAgICAgICAgIHN5c3RlbXMgPSBbXTtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZVNjaGVtYSc6XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVUeXBlJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZUV4dGVuZGVkU2NoZW1hJzpcbiAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXQodGhpcy5uYW1lKSk6XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iai5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdG9yZVt0aGlzLm5hbWVdW29iai5faWRdID0gb2JqO1xuXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50LmlkKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykuaW5zZXJ0KHRoaXMubmFtZSwgb2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdSdW50aW1lTWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbXMgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzeXN0ZW1zLmxlbmd0aCB8fCAoc3lzdGVtcy5sZW5ndGggJiYgc3lzdGVtc1swXS5faWQgIT09IG9iai5mcm9tKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxzID0gZXhwb3J0cy5SdW50aW1lQ2hhbm5lbC5maW5kKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gY2hhbm5lbHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbCA9ICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoY2hhbm5lbHNbaV0uX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGNoYW5uZWxzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogb2JqLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG9iai5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQob2JqLCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogVXBkYXRlIGRvY3VtZW50cyBpbnRvIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnkgdG8gZmluZCB0aGUgZG9jdW1lbnRzIHRvIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZSB1cGRhdGUgdG8gbWFrZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXG4gKiB7Qm9vbGVhbn0gdXBzZXJ0IHRydWUgaWYgd2UgY3JlYXRlIGEgZG9jdW1lbnQgd2hlbiBubyBkb2N1bWVudCBpcyBmb3VuZCBieSB0aGUgcXVlcnlcbiAqIEByZXR1cm4ge051bWJlcn0gTnVtYmVyIG9mIGRvY3VtZW50cyB1cGRhdGVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy51cGRhdGUoe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0sIHtcInVwc2VydFwiOiB0cnVlfSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ocXVlcnksIHVwZGF0ZSwgb3B0aW9ucykge1xuICAgIHZhciBkb2NzID0gdGhpcy5maW5kKHF1ZXJ5KSxcbiAgICAgICAgdXBkYXRlZCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSBkb2NzLmxlbmd0aCxcbiAgICAgICAgYXR0cmlidXRlTmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldCh0aGlzLm5hbWUpLFxuICAgICAgICB0eXBlID0gJyc7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXBzZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnVwc2VydCA9IG9wdGlvbnMudXBzZXJ0IHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGUpIHtcblxuICAgICAgICAvLyB1cHNlcnQgY2FzZVxuICAgICAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICAgICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlLl9pZCA9IHF1ZXJ5Ll9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHVwZGF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNhc2Ugb2YgdXBkYXRlIG9mIF9pZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGUuX2lkICE9PSAndW5kZWZpbmVkJyAmJiB1cGRhdGUuX2lkICE9PSBkb2NzW2ldLl9pZCkge1xuICAgICAgICAgICAgICAgICRsb2cudXBkYXRlVXVpZChkb2NzW2ldLl9pZCwgdXBkYXRlLl9pZCwgdHlwZW9mICRjb21wb25lbnQuZ2V0KHVwZGF0ZS5faWQpICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoYXR0cmlidXRlTmFtZSBpbiB1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdSdW50aW1lU2NoZW1hJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICRtZXRhbW9kZWwuZ2V0TWV0YURlZigpW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGRvY3NbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt1cGRhdGVbYXR0cmlidXRlTmFtZV1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt1cGRhdGVbYXR0cmlidXRlTmFtZV1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCBzY2hlbWFbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKGF0dHJpYnV0ZU5hbWUsIGRvY3NbaV0uX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gbW9yZSBjaGVjayBpbiBjYXNlIG9mIHNjaGVtYSB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi4gPGJyPlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnJlbW92ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMucmVtb3ZlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfcmVtb3ZlKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhjcml0ZXJpYSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICBpZiAoY29yZURiLmluZGV4T2YodGhpcy5uYW1lKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY291bnRcbiAqIEByZXR1cm4ge051bWJlcn0gbnVtYmVyIG9mIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICovXG5SdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSAwLFxuICAgICAgICBvYmplY3RJZCA9ICcnO1xuICAgIGZvciAob2JqZWN0SWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICByZXN1bHQrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIlJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICAgIGV4cG9ydHNbbmFtZV0gPSBuZXcgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn1cblxuXG4vKlxuICogSW1wb3J0L0V4cG9ydCBhIFJ1bnRpbWUgc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2VcbiAqIEBtZXRob2Qgc3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgUnVudGltZSBzeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgUnVudGltZSBzeXN0ZW0gb3IgdGhlIGlmIG9mIHRoZSBjdXJyZW50IFJ1bnRpbWUgc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIHN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICAgIHZhciByZXN1bHQgPSAnJyxcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICAgICAgY29tcG9uZW50SWQgPSAnJyxcbiAgICAgICAgdHlwZU5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgICAgICBiZWhhdmlvcklkID0gJycsXG4gICAgICAgIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgaWQgPSBudWxsLFxuICAgICAgICBkYkR1bXAgPSBudWxsLFxuICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuaW5zZXJ0KGltcG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IGluZm8gaWYgYWxyZWFkeSBhIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnNlcnQgdGhlIHN5c3RlbSBpbiBEQlxuICAgICAgICBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uaW5zZXJ0KGltcG9ydGVkU3lzdGVtKTtcblxuICAgICAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG5cbiAgICB9IGVsc2UgeyAvLyBleHBvcnRcbiAgICAgICAgLy8gZ2V0IGlkIG9mIHRoZSBtYXN0ZXIgc3lzdGVtXG4gICAgICAgIHN5c3RlbXMgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFzdGVyc3lzdGVtID0gc3lzdGVtc1swXTtcbiAgICAgICAgICAgIGlkID0gbWFzdGVyc3lzdGVtLl9pZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcHJvcFxuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uX2lkID0gaWQ7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5kZXNjcmlwdGlvbiA9IG1hc3RlcnN5c3RlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLnZlcnNpb24gPSBtYXN0ZXJzeXN0ZW0udmVyc2lvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZHVtcFxuICAgICAgICAgICAgZGJEdW1wID0gZHVtcCgpO1xuICAgICAgICAgICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiBkYkR1bXApIHtcbiAgICAgICAgICAgICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGV4cG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdO1xuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yLmNvbXBvbmVudCA9IGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIFJ1bnRpbWUgc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgUnVudGltZSBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICAgIHZhciBzeXN0ZW0gPSB7fSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGRlZmF1bHROYW1lID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgYmVoYXZpb3IgPSBudWxsLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgIGRlZmF1bHROYW1lID0gcmVzdWx0WzBdLm5hbWU7XG4gICAgfVxuXG4gICAgc3lzdGVtLm5hbWUgPSBwYXJhbXMubmFtZSB8fCAnc3ViXycgKyBkZWZhdWx0TmFtZTtcbiAgICBzeXN0ZW0udmVyc2lvbiA9IHBhcmFtcy52ZXJzaW9uIHx8ICcwLjAuMSc7XG4gICAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgc3lzdGVtLnN1YnN5c3RlbSA9IHRydWU7XG5cbiAgICAvLyBzY2hlbWFzXG4gICAgc3lzdGVtLnNjaGVtYXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnNjaGVtYXMpIHtcbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5zY2hlbWFzW3NjaGVtYS5faWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVR5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS50eXBlc1t0eXBlLl9pZF0gPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3JzXG4gICAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JzKSB7XG4gICAgICAgIGJlaGF2aW9yID0gZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuZmluZChwYXJhbXMuYmVoYXZpb3JzKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJlaGF2aW9yID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFiZWhhdmlvci5jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRzXG4gICAgc3lzdGVtLmNvbXBvbmVudHMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgZm9yIChjbGFzc05hbWUgaW4gcGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzW2NsYXNzTmFtZV0uZmluZChwYXJhbXMuY29tcG9uZW50c1tjbGFzc05hbWVdKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV1bY29tcG9uZW50Ll9pZF0gPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cblxuLypcbiAqIENsZWFyIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gICAgLy8gcmVtb3ZlIGNvbGxlY3Rpb25zXG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgICBsZW5ndGggPSBpbnRlcm5hbERCLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBpbnRlcm5hbERCW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXQgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHJ1bnRpbWVTeXN0ZW1JZCA9ICcnLFxuICAgICAgICBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICAgIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICdfaWQnOiAnZTg5YzYxN2I2YjE1ZDI0J1xuICAgIH0pWzBdO1xuXG4gICAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICAgIGV4cG9ydHMuY2xlYXIoKTtcbiAgICAkY29tcG9uZW50LmNsZWFyKCk7XG4gICAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAgICRzdGF0ZS5jbGVhcigpO1xuICAgICRiZWhhdmlvci5jbGVhcigpO1xuXG4gICAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgICAkbWV0YW1vZGVsLmluaXQoKTtcblxuICAgIC8vIHJlaW1wb3J0IFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgICBydW50aW1lU3lzdGVtSWQgPSBleHBvcnRzLnN5c3RlbShydW50aW1lU3lzdGVtKTtcbiAgICAkY29tcG9uZW50LmdldChydW50aW1lU3lzdGVtSWQpLm1haW4oKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgZGF0YWJhc2UuIDxicj5cbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBSdW50aW1lIGRhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFJ1bnRpbWUgbWV0YW1vZGVsIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICAgXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIlJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKlxuICogSW1wb3J0L0V4cG9ydCBhIFJ1bnRpbWUgc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFJ1bnRpbWUgc3lzdGVtIG9yIHRoZSBjdXJyZW50IFJ1bnRpbWUgc3lzdGVtICBcbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG5cblxuLyoqXG4gKiBFeHBvcnQgYSBSdW50aW1lIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIFJ1bnRpbWUgc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmV4cG9ydHMuc3Vic3lzdGVtID0gc3Vic3lzdGVtO1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBJbml0IHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0OyIsIi8qXG4gKiBSdW50aW1lXG4gKiBUaGUgSlNPTiBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiAgXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRXJ3YW4gQ2FycmlvdVxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuIFxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQGNsYXNzIHJ1bnRpbWUtaGVscGVyXG4gKiBAc3RhdGljXG4gKi9cblxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0eSAqL1xuXG5cbnZhciBydW50aW1lUmVmID0gbnVsbDtcblxuXG4vKiBQdWJsaWMgbWV0aG9kICovXG5cblxuLypcbiAqIENoZWNrIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdHMuXG4gKiBAbWV0aG9kIGlzUnVudGltZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqL1xuZnVuY3Rpb24gaXNSdW50aW1lKCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmICgkZGIuUnVudGltZSAmJiAkZGIuUnVudGltZS5maW5kKCkubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBSdW50aW1lIGluc3RhbmNlLlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJuIHtSdW50aW1lfSBSdW50aW1lIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gICAgdmFyIHJ1bnRpbWVJZCA9ICcnO1xuXG4gICAgaWYgKCFydW50aW1lUmVmKSB7XG4gICAgICAgIGlmIChpc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgcnVudGltZUlkID0gJGRiLlJ1bnRpbWUuZmluZCgpWzBdLl9pZDtcbiAgICAgICAgICAgIHJ1bnRpbWVSZWYgPSAkY29tcG9uZW50LmdldChydW50aW1lSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcnVudGltZVJlZiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBlcnIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVudGltZVJlZjtcbn1cblxuXG4vKlxuICogR2VuZXJhdGUgYSB1dWlkLlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgdXVpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICAgIGZ1bmN0aW9uIGdlbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbigpICsgZ2VuKCkgKyBnZW4oKTtcbn1cblxuXG4vKlxuICogQWRkIFBvbHlmaWxsXG4gKiBAbWV0aG9kIHBvbHlmaWxsXG4gKi9cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuXG4gICAgLy8gZml4aW5nIGNvbnN0cnVjdG9yLm5hbWUgcHJvcGVydHkgaW4gSUVcbiAgICAvLyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUxNDA3MjMvY29uc3RydWN0b3ItbmFtZS1pcy11bmRlZmluZWQtaW4taW50ZXJuZXQtZXhwbG9yZXJcbiAgICBpZiAoRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygodGhpcykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQGNsYXNzIHJ1bnRpbWUtaGVscGVyXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEdldCBSdW50aW1lIGluc3RhbmNlLlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJuIHtSdW50aW1lfSBSdW50aW1lIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0UnVudGltZSA9IGdldFJ1bnRpbWU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0XG4gKi9cbmV4cG9ydHMuaXNSdW50aW1lID0gaXNSdW50aW1lO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSB1dWlkLlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgdXVpZFxuICovXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBnZW5lcmF0ZUlkO1xuXG5cbi8qKlxuICogQWRkIFBvbHlmaWxsXG4gKiBAbWV0aG9kIHBvbHlmaWxsXG4gKi9cbmV4cG9ydHMucG9seWZpbGwgPSBwb2x5ZmlsbDsiLCIvKlxuICogUnVudGltZVxuICogVGhlIEpTT04gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogIFxuICogQ29weXJpZ2h0IChjKSAyMDE2IEVyd2FuIENhcnJpb3VcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLiBcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAY2xhc3MgcnVudGltZS1sb2dcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnO1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5KHByb3BlcnR5TmFtZSwgc2NoZW1hKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChzY2hlbWFbSURdKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiBcIiArIHNjaGVtYVtJRF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBtZXRhIGF0dHJpYnV0ZSBcIiArIEpTT04uc3RyaW5naWZ5KHNjaGVtYSk7XG4gICAgfVxuXG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhtZXNzYWdlKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZShwcm9wZXJ0eU5hbWUsIHR5cGUsIHByb3BlcnR5KSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlOYW1lKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIHZhbHVlIGZvciB0aGUgZW51bSB2YWx1ZSAnXCIgKyB2YWx1ZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiB2YWx1ZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gaW52YWxpZENsYXNzTmFtZShjb21wb25lbnRJZCwgdHlwZSwgY29uc3RydWN0b3JOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTb3VyY2UgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzVG9JbXAgdGhlIGNsYXNzIHRvIGltcGxlbWVudFxuICovXG5mdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24oY2xhc3NTb3VyY2UsIGNsYXNzVG9JbXApIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiY2xhc3MgJ1wiICsgY2xhc3NTb3VyY2UgKyBcIicgaXMgbWlzc2luZyBmb3IgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBjbGFzcyAnXCIgKyBjbGFzc1RvSW1wICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIHNjaGVtYSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgKyBzY2hlbWEgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgYSB0eXBlIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKGRlZikge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJjYW4gbm90IGxvYWQgdGhlIGRlZmluaXRpb24gb2YgdHlwZSAnXCIgKyBkZWYgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgbmFtZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5TmFtZShpZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUuaW5kZXhPZihcIiNcIikgIT09IC0xKSB7XG4gICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHJlYWRPbmx5UHJvcGVydHkoaWQsIHByb3BlcnR5TmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJjYW4gbm90IHNldCByZWFkLW9ubHkgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnQoZG9jLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArIEpTT04uc3RyaW5naWZ5KGRvYykgKyBcIicgb24gYW4gaW5zZXJ0IG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUoY29sbGVjdGlvbk5hbWUsIGlkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZS5pbmRleE9mKFwiI1wiKSAhPT0gLTEpIHtcbiAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfVxufVxuXG5cblxuLypcbiAqIFVua29udyBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShwcm9wZXJ0eU5hbWUsIGlkKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIHVua25vd25NZXRob2QoY2xhc3NJZCwgbWV0aG9kTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ0cnkgdG8gY2FsbCBhbiB1bmtub3duIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIGZvciB0aGUgY2xhc3MgJ1wiICsgY2xhc3NJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIic6IHRoZXJlIGlzIG5vIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGluIHRoZSBtZXRhbW9kZWxcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcImludmFsaWQgdHlwZSBvbiB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcInVua293biBjbGFzcyBjb21wb25lbnQgJ1wiICsgY2xhc3NOYW1lICsgXCInIGZvciBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50SWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZygncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn1cblxuXG4vKlxuICogaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtVHlwZShpZCwgbWV0aG9kTmFtZSwgcGFyYW1OYW1lKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZS5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFN0YXRlT24oaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ0cnkgdG8gYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiB1bmt3b3duIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZC5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRTdGF0ZU9mZihpZCwgc3RhdGVOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwidGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgKyBKU09OLnN0cmluZ2lmeShpZCkgKyBcIicgaXMgYW4gaW5zdGFuY2Ugb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qKlxuICogQSBtZXNzYWdlIHNlbmQgYnkgdGhlIGNoYW5uZWwgaXMgaW52YWxpZFxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZENoYW5uZWxFdmVudChtZXNzYWdlLCBldmVudE5hbWUsIHR5cGUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgbWVzc2FnZSAnXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyB0eXBlICsgXCInIGZvciBldmVudCAnXCIgKyBldmVudE5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYW4gYWN0aW9uIGFkZCB3aXRoIG9uIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24oaWQsIG1ldGhvZE5hbWUpIHtcbiAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS53YXJuaW5nKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhbiBhY3Rpb24gb24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDaGFuZ2UgdGhlIGlkIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICovXG5mdW5jdGlvbiB1cGRhdGVVdWlkKGN1cnJlbnRJZCwgbmV3SWQsIGFscmVhZHlVc2VkKSB7XG4gICAgaWYgKGFscmVhZHlVc2VkKSB7XG4gICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ0cnkgdG8gdXBkYXRlIGEgY29tcG9uZW50IG9mIGlkICdcIiArIGN1cnJlbnRJZCArIFwiJyB3aXRoIHRoZSBuZXcgaWQgJ1wiICsgbmV3SWQgKyBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkud2FybmluZyhcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICsgY3VycmVudElkICsgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgKyBuZXdJZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cbi8qXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICogQG1ldGhvZCBpbnZhbGlkVXNlT2ZDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRVc2VPZkNvbXBvbmVudChpZCkge1xuICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLndhcm5pbmcoXCJ0cnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQGNsYXNzIHJ1bnRpbWUtbG9nXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSB1bmtub3duUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlO1xuXG5cbi8qKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBpbnZhbGlkRW51bVZhbHVlO1xuXG5cbi8qKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gaW52YWxpZENsYXNzTmFtZTtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gbWlzc2luZ1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzU291cmNlIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1RvSW1wIHRoZSBjbGFzcyB0byBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBtaXNzaW5nSW1wbGVtZW50YXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBpbnZhbGlkVHlwZUltcDtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IG1pc3NpbmdQcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gdW5rbm93blByb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRlZiBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGludmFsaWRUeXBlRGVmaW5pdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gaW52YWxpZFByb3BlcnR5TmFtZTtcblxuXG4vKipcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IHJlYWRPbmx5UHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgUnVudGltZSBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gaW52YWxpZERvY3VtZW50T25EYkluc2VydDtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlID0gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmV4cG9ydHMudW5rbm93bk1ldGhvZCA9IHVua25vd25NZXRob2Q7XG5cblxuLyoqXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbGxlY3Rpb25OYW1lID0gaW52YWxpZENvbGxlY3Rpb25OYW1lO1xuXG5cbi8qKlxuICogSW52YWxpZCByZXN1bHQgdHlwZSBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUmVzdWx0VHlwZSA9IGludmFsaWRSZXN1bHRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gdW5rbm93bkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZXhwb3J0cy53b3JrZmxvd1Jlc3RhcnRlZCA9IHdvcmtmbG93UmVzdGFydGVkO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyID0gaW52YWxpZFBhcmFtTnVtYmVyO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGludmFsaWRQYXJhbVR5cGU7XG5cblxuLyoqXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBiZWhhdmlvck5vdFVuaXF1ZTtcblxuXG4vKipcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gaW52YWxpZFN0YXRlT247XG5cblxuLyoqXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGludmFsaWRTdGF0ZU9mZjtcblxuXG4vKipcbiAqIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IG1hc3RlclN5c3RlbU5vdEZvdW5kO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGludmFsaWRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSB1bmtub3duVHlwZTtcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBjYW5Ob3RZZXRWYWxpZGF0ZTtcblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGludmFsaWRDaGFubmVsRXZlbnQ7XG5cblxuLyoqXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbjtcblxuXG4vKipcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IHVwZGF0ZVV1aWQ7XG5cblxuLyoqXG4gKiBVbmtvbncgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSA9IHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICogQG1ldGhvZCBpbnZhbGlkZVVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRVc2VPZkNvbXBvbmVudCA9IGludmFsaWRVc2VPZkNvbXBvbmVudDsiLCIvKlxuICogUnVudGltZVxuICogVGhlIEpTT04gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogIFxuICogQ29weXJpZ2h0IChjKSAyMDE2IEVyd2FuIENhcnJpb3VcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLiBcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBtZXRhbW9kZWwuIDxicj5cbiAqIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAY2xhc3MgcnVudGltZS1tZXRhbW9kZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnLFxuICAgIE5BTUUgPSAnX25hbWUnLFxuICAgIElOSEVSSVRTID0gJ19pbmhlcml0JyxcbiAgICBTQ0hFTUEgPSAnX3NjaGVtYScsXG4gICAgQ0xBU1MgPSAnX2NsYXNzJyxcbiAgICBDT1JFID0gJ19jb3JlJyxcbiAgICBNRVRIT0RfVFlQRSA9ICdtZXRob2QnLFxuICAgIEVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuICAgIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuICAgIExJTktfVFlQRSA9ICdsaW5rJyxcbiAgICBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbicsXG4gICAgaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdsaW5rJywgJ21ldGhvZCcsICdldmVudCddLFxuICAgIGRlZmF1bHRUeXBlcyA9IFsnYm9vbGVhbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ29iamVjdCcsICdmdW5jdGlvbicsICdhcnJheSddLFxuICAgIHN0b3JlID0ge1xuICAgICAgICBtZXRhZGVmOiB7fSxcbiAgICAgICAgY2F0YWxvZzoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgbW9kZWw6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fSxcbiAgICAgICAgaW1wbGVtZW50YXRpb246IHt9XG4gICAgfTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuLypcbiAqIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgICB2YXIgc2NoZW1hcyA9IFtdLFxuICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgaW5oZXJpdCA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgLy8gaW5pdCBzdG9yZVxuICAgIHN0b3JlLmNhdGFsb2cgPSB7fTtcbiAgICBzdG9yZS5pbmhlcml0YW5jZSA9IHt9O1xuICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZSA9IHt9O1xuICAgIHN0b3JlLm1vZGVsID0ge307XG4gICAgc3RvcmUuc3RhdGVzID0ge307XG4gICAgc3RvcmUudHlwZSA9IHt9O1xuICAgIHN0b3JlLmltcGxlbWVudGF0aW9uID0ge307XG5cbiAgICAvLyBsb2FkIHNjaGVtYXNcbiAgICBzY2hlbWFzID0gJGRiLlJ1bnRpbWVTY2hlbWEuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSBzY2hlbWFzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hc1tpXTtcblxuICAgICAgICBpZCA9IHNjaGVtYVtJRF07XG4gICAgICAgIGluaGVyaXQgPSBzY2hlbWFbSU5IRVJJVFNdO1xuXG4gICAgICAgIHN0b3JlLmNhdGFsb2dbaWRdID0gc2NoZW1hO1xuICAgICAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaWRdID0gaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBsb2FkIHR5cGVzXG4gICAgdHlwZXMgPSAkZGIuUnVudGltZVR5cGUuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSB0eXBlcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlc1tpXTtcbiAgICAgICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZS5cbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICAgICAgYW5jZXN0b3JJZCA9IG51bGwsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBuYlBhcmVudHMgPSAwO1xuXG4gICAgZnVuY3Rpb24gX2dldEFuY2VzdG9ycyhpZCwgYW5jZXN0b3JJZCkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBuYlBhcmVudHMgPSAwO1xuXG4gICAgICAgIGlmIChzdG9yZS5pbmhlcml0YW5jZVthbmNlc3RvcklkXSkge1xuICAgICAgICAgICAgbmJQYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbYW5jZXN0b3JJZF0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG5iUGFyZW50cykge1xuICAgICAgICAgICAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0gPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdLmNvbmNhdChzdG9yZS5pbmhlcml0YW5jZVthbmNlc3RvcklkXSk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5iUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9nZXRBbmNlc3RvcnMoaWQsIHN0b3JlLmluaGVyaXRhbmNlW2FuY2VzdG9ySWRdW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGlkIGluIHN0b3JlLmluaGVyaXRhbmNlKSB7XG5cbiAgICAgICAgbmJQYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbaWRdLmxlbmd0aDtcbiAgICAgICAgaWYgKG5iUGFyZW50cykge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSA9IHN0b3JlLmluaGVyaXRhbmNlW2lkXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmJQYXJlbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGFuY2VzdG9ySWQgPSBzdG9yZS5pbmhlcml0YW5jZVtpZF1baV07XG5cbiAgICAgICAgICAgIF9nZXRBbmNlc3RvcnMoaWQsIGFuY2VzdG9ySWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBFeHRlbmQgYSBzY2hlbWEgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50LlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7dHlwZX0gaWQgaWQgb2YgdGhlIHNjaGVtYSB0byBleHRlbmRcbiAqIEByZXR1cm4ge0pTT059IG9iamVjdCBleHRlbmRlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChpZCkge1xuICAgIHZhciBzb25FeHRlbmQgPSB7fSxcbiAgICAgICAgc29uID0gc3RvcmUuY2F0YWxvZ1tpZF0sXG4gICAgICAgIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBhbmNlc3RvciA9IG51bGwsXG4gICAgICAgIHByb3AgPSAnJztcblxuICAgIGlmIChhbmNlc3RvcnMpIHtcbiAgICAgICAgbGVuZ3RoID0gYW5jZXN0b3JzLmxlbmd0aDtcbiAgICAgICAgYW5jZXN0b3JzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFuY2VzdG9yID0gc3RvcmUuY2F0YWxvZ1thbmNlc3RvcnNbaV1dO1xuICAgICAgICBmb3IgKHByb3AgaW4gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9wLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IGFuY2VzdG9yW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBzb24pIHtcbiAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gc29uW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gc29uRXh0ZW5kO1xufVxuXG5cbi8qXG4gKiBBZGQgdGhlIG1vZGVscy5cbiAqIEBtZXRob2QgY3JlYXRlTW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1vZGVsKCkge1xuICAgIHZhciBpZCA9ICcnO1xuICAgIGZvciAoaWQgaW4gc3RvcmUuY2F0YWxvZykge1xuICAgICAgICBzdG9yZS5tb2RlbFtpZF0gPSBleHRlbmQoaWQpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhbGwgdGhlIHNjaGVtYSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZWlyIHNjaGVtYXMuXG4gKiBAbWV0aG9kIGNoZWNrSW1wbGVtZW50YXRpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgdmFyIGlkID0gJycsXG4gICAgICAgIGNsYXNzRGVmID0gbnVsbCxcbiAgICAgICAgY2xhc3NJbXAgPSAnJztcblxuICAgIGZvciAoaWQgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgY2xhc3NEZWYgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgICAgIGlmIChjbGFzc0RlZiAmJiB0eXBlb2YgY2xhc3NEZWZbU0NIRU1BXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNsYXNzSW1wID0gc3RvcmUubW9kZWxbY2xhc3NEZWZbU0NIRU1BXV07XG4gICAgICAgICAgICBpZiAoY2xhc3NJbXApIHtcbiAgICAgICAgICAgICAgICBjaGVja0ltcChjbGFzc0RlZiwgY2xhc3NJbXApO1xuICAgICAgICAgICAgICAgIHN0b3JlLmltcGxlbWVudGF0aW9uW2NsYXNzRGVmW0lEXV0gPSBjbGFzc0ltcFtJRF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ0ltcGxlbWVudGF0aW9uKGNsYXNzRGVmW1NDSEVNQV0sIGNsYXNzRGVmW0lEXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tTdGF0ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU3RhdGVzKCkge1xuICAgIHZhciBpZCA9ICcnLFxuICAgICAgICBjbGFzc0RlZiA9IG51bGwsXG4gICAgICAgIHR5cGUgPSAnJyxcbiAgICAgICAgc3RhdGVzID0gW10sXG4gICAgICAgIGF0dHJpYnV0ZSA9ICcnO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBzdGF0ZXMgPSBbXTtcbiAgICAgICAgY2xhc3NEZWYgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgICAgIGlmIChjbGFzc0RlZiAmJiB0eXBlb2YgY2xhc3NEZWZbU0NIRU1BXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZvciAoYXR0cmlidXRlIGluIGNsYXNzRGVmKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGNsYXNzRGVmW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5pbmRleE9mKCdfJykgIT09IDAgJiYgaW50ZXJuYWxUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdG9yZS5zdGF0ZXNbaWRdID0gc3RhdGVzO1xuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hLlxuICogQG1ldGhvZCBjaGVja0ltcFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0RlZiBzY2hlbWEgdG8gdGVzdCBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NJbXAgc2NoZW1hIHRvIHZhbGlkYXRlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0ltcChjbGFzc0RlZiwgY2xhc3NJbXApIHtcbiAgICB2YXIgcHJvcGVydHkgPSAnJyxcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjbGFzc0RlZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja1NjaGVtYSh2YWx1ZSwgY2xhc3NJbXBbcHJvcGVydHldKSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW0lEXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgYWxsIHByb3BlcnRpZXMgYXJlIHRoZXJlXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgICAgICBpZiAocHJvcGVydHkgIT09IElEICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gU0NIRU1BICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDT1JFKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzSW1wW3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlLlxuICogQG1ldGhvZCBjaGVja1NjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2NoZW1hKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmIGRlZmF1bHRUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgY29ycmVjdCBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tDdXN0b21TY2hlbWFcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV0sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRUeXBlKHZhbHVlW2ldLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmUuXG4gKiBAbWV0aG9kIGluaXREYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lU2NoZW1hJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVFeHRlbmRlZFNjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQ2xhc3NJbmZvJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVCZWhhdmlvcicpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lU3RhdGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZVR5cGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZU1lc3NhZ2UnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUNoYW5uZWwnKTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbikuXG4gKiBAbWV0aG9kIGNyZWF0ZURiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYlN0cnVjdHVyZSgpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5jYXRhbG9nKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuY2F0YWxvZ1ttb2RlbE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1vZGVsRGVmW1NDSEVNQV0gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgJGRiW21vZGVsRGVmW0lEXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltJRF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5tb2RlbFttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuUnVudGltZUV4dGVuZGVkU2NoZW1hLmluc2VydChtb2RlbERlZik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxEZWYgPSB7fTtcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUubW9kZWxbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlbERlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJyAmJiBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbE5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsRGVmID0ge30sXG4gICAgICAgIGlkID0gJyc7XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgIGlkID0gbW9kZWxEZWYuX2lkICsgJ0luZm8nO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBtb2RlbERlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoISRjb21wb25lbnQuZ2V0KGlkKSkge1xuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lQ2xhc3NJbmZvLmluc2VydCh7XG4gICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBzdG9yZS5tb2RlbFttb2RlbERlZltTQ0hFTUFdXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbERlZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZUNsYXNzSW5mby51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBpZFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogc3RvcmUubW9kZWxbbW9kZWxEZWZbU0NIRU1BXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIFxuICogR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QgLyB0eXBlLlxuICogQG1ldGhvZCBnZXRSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKCdAJywgJycpO1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgaXNDdXN0b21UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbVR5cGUodmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpICYmXG4gICAgICAgIGRlZmF1bHRUeXBlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiZcbiAgICAgICAgIWlzUmVmZXJlbmNlKHZhbHVlKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIElzIHRoZSB2YWx1ZSBhIHJlZmVyZW5jZS5cbiAqIEBtZXRob2QgaXNSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIEdldCB0aGUgcmVhbCB0eXBlIG9mIGEgdmFsdWUuXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9ICcnO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG59XG5cblxuLypcbiAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QuXG4gKiBAbWV0aG9kIGdldENsYXNzTmFtZVxuICogQHBhcmFtIHt0eXBlfSBvYmogb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShvYmopIHtcbiAgICByZXR1cm4gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGVudW0gdmFsdWUuXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtBcnJheX0gZW51bVZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bVZhbHVlKHZhbHVlLCBlbnVtVmFsdWUpIHtcbiAgICByZXR1cm4gZW51bVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIHNwZWNpZmllZCB0eXBlLlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXN1bHQgPSAodHlwZSA9PT0gdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1R5cGUobmFtZSwgaWQsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLm1vZGVsW2lkXSxcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9ICcnO1xuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbU0NIRU1BXSkge1xuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtjb21wb25lbnRTY2hlbWFbU0NIRU1BXV07XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSkge1xuICAgICAgICBhdHRyaWJ1dGVUeXBlID0gY29tcG9uZW50U2NoZW1hW25hbWVdO1xuICAgICAgICBpZiAoYXR0cmlidXRlVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBNZXJnZSB0d28gc2NoZW1hcy5cbiAqIEBtZXRob2QgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIHNjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCB0YXJnZXQgc2NoZW1hXG4gKiBAcmV0dXJuIHtPYmplY3R9IG1lcmdlZCBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSAnJyxcbiAgICAgICAgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgc2NoZW1hIHRvIGFkZFxuICovXG5mdW5jdGlvbiBzY2hlbWEoaW1wb3J0ZWRTY2hlbWEpIHtcbiAgICB2YXIgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgaW5oZXJpdCA9ICcnLFxuICAgICAgICBuYW1lID0gJycsXG4gICAgICAgIHNjaGVtYXMgPSBbXTtcblxuICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRTY2hlbWEpKTtcblxuICAgIGlkID0gc2NoZW1hW0lEXTtcbiAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuICAgIGluaGVyaXQgPSBzY2hlbWFbSU5IRVJJVFNdO1xuXG4gICAgLy8gaWYgbm8gaWQsIGl0IHdpbGwgYmUgdGhlIG5hbWUgYnkgZGVmYXVsdFxuICAgIGlmIChoYXNUeXBlKGlkLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgaWQgPSBuYW1lO1xuICAgICAgICBzY2hlbWFbSURdID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KHNjaGVtYSwgc3RvcmUubWV0YWRlZi5zY2hlbWEsIGZhbHNlKSkge1xuXG4gICAgICAgIHNjaGVtYXMgPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHsgJ19pZCc6IGlkIH0pO1xuICAgICAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkYi5SdW50aW1lU2NoZW1hLnVwZGF0ZSh7ICdfaWQnOiBpZCB9LCBtZXJnZShzY2hlbWEsIHNjaGVtYXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRkYi5SdW50aW1lU2NoZW1hLmluc2VydChzY2hlbWEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidGhlIHNjaGVtYSAnXCIgKyBKU09OLnN0cmluZ2lmeShpbXBvcnRlZFNjaGVtYSkgKyBcIicgaXMgbm90IHZhbGlkXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBBZGQgYSBuZXcgdHlwZS5cbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFR5cGUgdHlwZSB0byBhZGRcbiAqL1xuZnVuY3Rpb24gdHlwZShpbXBvcnRlZFR5cGUpIHtcbiAgICB2YXIgbmFtZSA9IGltcG9ydGVkVHlwZS5uYW1lO1xuXG4gICAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3QoaW1wb3J0ZWRUeXBlLCBzdG9yZS5tZXRhZGVmLnR5cGUpKSB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAkZGIuUnVudGltZVR5cGUuaW5zZXJ0KGltcG9ydGVkVHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlRGVmaW5pdGlvbihpbXBvcnRlZFR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidGhlIHR5cGUgJ1wiICsgSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRUeXBlKSArIFwiJyBpcyBub3QgdmFsaWRcIlxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNsZWFyKCk7XG4gICAgc3RvcmUubWV0YWRlZiA9IHtcbiAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX25hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgaW5pdERiU3RydWN0dXJlKCk7XG59XG5cblxuLypcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7XG4gICAgICAgIG1ldGFkZWY6IHt9LFxuICAgICAgICBjYXRhbG9nOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgICAgICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICAgICAgICBtb2RlbDoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9LFxuICAgICAgICBpbXBsZW1lbnRhdGlvbjoge31cbiAgICB9O1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICBsb2FkSW5NZW1vcnkoKTtcbiAgICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgICBjcmVhdGVNb2RlbCgpO1xuICAgIGNoZWNrSW1wbGVtZW50YXRpb24oKTtcbiAgICBjaGVja1N0YXRlcygpO1xuICAgIGNyZWF0ZURiU3RydWN0dXJlKCk7XG4gICAgY3JlYXRlQ2xhc3MoKTtcbiAgICBjcmVhdGVDbGFzc0luZm8oKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqL1xuZnVuY3Rpb24gaXNFdmVudChuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIEVWRU5UX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gaXNQcm9wZXJ0eShuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIFBST1BFUlRZX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGxpbmsuXG4gKiBAbWV0aG9kIGlzTGlua1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGxpbmtcbiAqL1xuZnVuY3Rpb24gaXNMaW5rKG5hbWUsIGlkKSB7XG4gICAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgTElOS19UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaXNDb2xsZWN0aW9uKG5hbWUsIGlkKSB7XG4gICAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgQ09MTEVDVElPTl9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGlzTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBpc01ldGhvZChuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIE1FVEhPRF9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdGUobmFtZSwgaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLm1vZGVsW2lkXSxcbiAgICAgICAgc3RhdGUgPSB7fTtcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbSURdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gX2NoZWNrUmVmZXJlbmNlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIHZhciB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVOYW1lKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKGNvbXBvbmVudCkgIT09IHR5cGVSZWYgJiYgSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50KSAhPT0gJ3t9Jykge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUucmVwbGFjZSgnQCcsICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgcmVhbFR5cGUgPSAnJyxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFR5cGUodHlwZU5hbWUpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBfY2hlY2tSZWZlcmVuY2UodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVOYW1lLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTY2hlbWF9IHNjaGVtYSBzY2hlbWEgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW0odmFsdWUsIHNjaGVtYSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gX2lzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblxuICAgICAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjb21wb25lbnRDbGFzc05hbWUgPT09IGNsYXNzTmFtZTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc1JlZmVyZW5jZShzY2hlbWEudHlwZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gX2lzSW5zdGFuY2VPZigkY29tcG9uZW50LmdldCh2YWx1ZSksIGdldFJlZmVyZW5jZShzY2hlbWEudHlwZSkpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS50eXBlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IChoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqIEBtZXRob2QgaXNWYWxpZFNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBvYmplY3RcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICAgICAgZmllbGQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgICAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgICAgIHR5cGVSZWYgPSAnJyxcbiAgICAgICAgcmVhbFR5cGUgPSAnJyxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdGljdCB2YWxpZGF0aW9uIHRoYXQganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0VHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLy8gdHlwZVxuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgIGlmIChoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJiBoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICogQG1ldGhvZCBpc1ZhbGlkT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3QgdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHN0cmljdFxuICogQHBhcmFtIHtCb29sZWFufSBjbGVhblJlZiB0cnVlIGlmIHdlIHJlbW92ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qob2JqZWN0LCBzY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgICAgICB0eXBlUmVmID0gJycsXG4gICAgICAgIHJlYWxUeXBlID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKGhhc1R5cGUoc3RyaWN0LCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgY3VzdG9tIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICByZWFsVHlwZSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICAgICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW0oZmllbGQsIHJlYWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRUeXBlKGZpZWxkLCByZWFsVHlwZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbXAgPSBudWxsLFxuICAgICAgICAgICAgaXNDb21wb25lbnQgPSBmYWxzZTtcblxuICAgICAgICB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVTY2hlbWEpO1xuICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgICAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAoIWluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgICAgICAgICAvL2lmIChnZXRDbGFzc05hbWUoY29tcCkgIT09IHR5cGVSZWYpIHsgdW5jb21tZW50IHRoaXMgY2FzZSBpZiB3ZSB3YW50IGEgc3RyaWN0IG1vZGVcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkZWZhdWx0IHZhbHVlIG9mIGFuIG9iamVjdCAoe30gb3IgbnVsbClcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSAmJiBmaWVsZCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMCk6XG4gICAgICAgICAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk6XG4gICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVBcnJheSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0VHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZUFycmF5XS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGRbaV0pICE9PSB0eXBlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkW2ldKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhc2Ugb2YgYW4gaW1wb3J0IG9mIGEgc3lzdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkgIT09IGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoZmllbGRbaV0pICE9PSBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoZmllbGRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSA9IGZpZWxkW2ldLmlkKCk7IC8vIHN0b3JlIHRoZSBpZCBpbnN0ZWFkIHRoZSBmdWxsIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duVHlwZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG5cbiAgICAvLyB0eXBlXG4gICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICAgICAgaWYgKCFoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgfHwgZmllbGROYW1lID09PSAnX2NvcmUnKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNhc2Ugb2YgX2NvcmVcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgIT09ICdfY29yZScpIHtcbiAgICAgICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9ICdib29sZWFuJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2FzIG9mIF9pZFxuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJ19pZCcpIHtcbiAgICAgICAgICAgICAgICB0eXBlU2NoZW1hID0gJ3N0cmluZyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZVNjaGVtYSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZVNjaGVtYSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRSZWZlcmVuY2UoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgaWYgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gcHJlcGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICovXG5mdW5jdGlvbiBwcmVwYXJlT2JqZWN0KG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgICAgICBmaWVsZCA9IG51bGwsXG4gICAgICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG4gICAgLy8gbWFuZGF0b3J5ICYgZGVmYXVsdCB2YWx1ZVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IGZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IGZhbHNlICYmICFoYXNUeXBlKGRlZmF1bHRWYWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS5tb2RlbFtpZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUubW9kZWxbaWRdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TWV0YURlZlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICovXG5mdW5jdGlvbiBnZXRNZXRhRGVmKCkge1xuICAgIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgcGFyZW50cyBvZiBhIHNoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIG1vZGVsID0gbnVsbDtcblxuICAgIG1vZGVsID0gc3RvcmUubW9kZWxbaWRdO1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgICByZXN1bHQgPSBtb2RlbFtJTkhFUklUU107XG4gICAgfVxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgLypcbiAgICAgKiBcbiAgICAgKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAgICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFuY2VzdG9yTmFtZSBvZiB0aGUgcGFyZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zZWFyY2hQYXJlbnQoY2xhc3NOYW1lLCBhbmNlc3Rvck5hbWUpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YoYW5jZXN0b3JOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpc0FuY2VzdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIGFuY2VzdG9yTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBbmNlc3RvcjtcbiAgICB9XG5cbiAgICBpZiAobmFtZSAhPT0gcGFyZW50TmFtZSkge1xuICAgICAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhuYW1lKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIHBhcmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgbWV0YW1vZGVsLiA8YnI+XG4gKiBSdW50aW1lIG1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbnMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS13b3JrZmxvd1xuICogQGNsYXNzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgYSBzY2hlbWEgdG8gYWRkXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gc2NoZW1hO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlIHR5cGUgdG8gYWRkXG4gKi9cbmV4cG9ydHMudHlwZSA9IHR5cGU7XG5cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG5cbi8qKlxuICogR2V0IGEgc2NoZW1hLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TWV0YURlZlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLmdldE1ldGFEZWYgPSBnZXRNZXRhRGVmO1xuXG5cbi8qKlxuICogR2V0IHBhcmVudHMgb2YgYSBzaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFBhcmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZ2V0UGFyZW50cztcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gaW5oZXJpdEZyb207XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkT2JqZWN0ID0gaXNWYWxpZE9iamVjdDtcblxuXG4vKipcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXJlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmV4cG9ydHMucHJlcGFyZU9iamVjdCA9IHByZXBhcmVPYmplY3Q7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBpc1ZhbGlkVHlwZTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gaXNWYWxpZEVudW07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gaXNWYWxpZFN0YXRlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGlzRXZlbnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gaXNQcm9wZXJ0eTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGluay5cbiAqIEBtZXRob2QgaXNMaW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICovXG5leHBvcnRzLmlzTGluayA9IGlzTGluaztcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaXNDb2xsZWN0aW9uID0gaXNDb2xsZWN0aW9uO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGlzTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5leHBvcnRzLmlzTWV0aG9kID0gaXNNZXRob2Q7IiwiLypcbiAqIFJ1bnRpbWVcbiAqIFRoZSBKU09OIFJ1bnRpbWUgRW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqICBcbiAqIENvcHlyaWdodCAoYykgMjAxNiBFcndhbiBDYXJyaW91XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS4gXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgUnVudGltZS4gPGJyPlxuICogSXQgaW5pdHMgUnVudGltZSBtZXRhbW9kZWwgYW5kIGxvYWRzIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN5c3RlbVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbiAgICBzeXN0ZW0gPSAnJztcblxuXG4vKiBQb2x5ZmlsbCAqL1xuJGhlbHBlci5wb2x5ZmlsbCgpO1xuXG4vKiBJbml0IE1ldGFtb2RlbCAqL1xuXG5cbiRtZXRhbW9kZWwuaW5pdCgpO1xuXG5cbi8qIEluaXQgcnVudGltZSBmcm9tIGEgc3lzdGVtICovXG5cblxuc3l0ZW1JZCA9ICRkYi5zeXN0ZW0oJHN5c3RlbS5zeXN0ZW0pO1xuc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3l0ZW1JZCk7XG5zeXN0ZW0ubWFpbigpO1xuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBSdW50aW1lLiA8YnI+XG4gKiBJdCBpbml0cyBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBSdW50aW1lIGluc3RhbmNlLlxuICogQHByb3BlcnR5IHJ1bnRpbWVcbiAqIEB0eXBlIFJ1bnRpbWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgncnVudGltZScpOyIsIi8qXG4gKiBSdW50aW1lXG4gKiBUaGUgSlNPTiBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiAgXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRXJ3YW4gQ2FycmlvdVxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuIFxuICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSwgcGFyYW1ldGVycykge1xuICAgIHN0b3JlW2lkXSA9IHtcbiAgICAgICAgXCJuYW1lXCI6IHN0YXRlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICAgICAgfVxuICAgIH07XG4gICAgJGRiLnN0b3JlLlJ1bnRpbWVTdGF0ZVtpZF0gPSB7XG4gICAgICAgIFwibmFtZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIFwiZGF0YVwiOiBwYXJhbWV0ZXJzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGUgY29tcG9uZW50cy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAY2xhc3MgcnVudGltZS1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IHNldDtcblxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjsiLCIvKlxuICogUnVudGltZVxuICogVGhlIEpTT04gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogIFxuICogQ29weXJpZ2h0IChjKSAyMDE2IEVyd2FuIENhcnJpb3VcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLiBcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFJ1bnRpbWUuIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgcnVudGltZS4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qKlxuICogVGhlIFJ1bnRpbWVFcnJvciBjbGFzcy5cbiAqIEBjbGFzcyBSdW50aW1lRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqL1xuZnVuY3Rpb24gUnVudGltZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubmFtZSA9IFwiUnVudGltZUVycm9yXCI7XG59XG5SdW50aW1lRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5SdW50aW1lRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUnVudGltZUVycm9yO1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiB0aGUgcGFyYW1ldGVyIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIG1ldGhvZCBmb3IgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbWluID0gMCxcbiAgICAgICAgbWF4ID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtaW4pO1xuICAgICAgICByZXN1bHQucHVzaChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2Qgc2V0RGVmYXVsdFZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZShpZCwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0eXBlIHJldHVybmVkIGJ5IHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJldHVyblR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcmVzdWx0VHlwZSA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICByZXN1bHRUeXBlID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgICBpZiAocmVzdWx0VHlwZSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICAgICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdCB8fCB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKHJldHVyblR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJldHVyblR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBhY3Rpb25zIG9mIHRoZSBzcGVjaWZpZWQgc3RhdGVcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIFJ1bnRpbWUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0V2ZW50IHRydWUgaWYgdGhlIHN0YXRlIGlzIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhjb21wb25lbnQsIG5hbWUsIGlzRXZlbnQpIHtcbiAgICB2YXIgYWN0aW9uID0gJGJlaGF2aW9yLmdldEFjdGlvbnMoY29tcG9uZW50LmlkKCksIG5hbWUpLFxuICAgICAgICBwYXJlbnRzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBwYXJlbnQgPSBudWxsO1xuXG4gICAgaWYgKCFhY3Rpb24ubGVuZ3RoIHx8IGlzRXZlbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMoJGNvbXBvbmVudC5nZXQoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpLCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRzID0gJG1ldGFtb2RlbC5nZXRQYXJlbnRzKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIGFjdGlvbiBhbmQgbWFrZSBzb21lIERlcGVuZGVuY3kgSW5qZWN0aW9uIGlmIGl0IGlzIGEgY29yZSBhY3Rpb25cbiAqIEBtZXRob2QgY2FsbEFjdGlvblxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBpc0V2ZW50IGlzIHRoZSBhY3Rpb24gYSBjYWxsYmFjayBvZiBhbiBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0IG9mIHRoZSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gY2FsbEFjdGlvbihjb21wb25lbnQsIHN0YXRlLCBhY3Rpb24sIHBhcmFtcywgaXNFdmVudCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgICAgICBpbmplY3RlZFBhcmFtcyA9IFtdLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgaWYgKCEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiYgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSkge1xuICAgICAgICBwYXJhbXMgPSBzZXREZWZhdWx0VmFsdWUoY29tcG9uZW50Q2xhc3NOYW1lLCBzdGF0ZSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2gocGFyYW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLnVzZUNvcmVBUEkpIHtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShhY3Rpb24uYWN0aW9uLCBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpKSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFJ1bnRpbWVFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmdldFJ1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlci5cbiAqIEBtZXRob2QgdmFsaWRQYXJhbU51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGFjdGlvbiBpcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gdmFsaWRQYXJhbU51bWJlcnMoY2xhc3NOYW1lLCBzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdmFyIGZ1bmMgPSAnJyxcbiAgICAgICAgYmVnaW5Cb2R5ID0gLTEsXG4gICAgICAgIGhlYWRlciA9ICcnLFxuICAgICAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbU51bWJlciA9IDAsXG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbXSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICAgIGZ1bmMgPSBhY3Rpb24udG9TdHJpbmcoKTtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIuc3BsaXQoJygnKVsxXS5yZXBsYWNlKCcpJywgJycpLnRyaW0oKTtcbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuICAgIHBhcmFtTnVtYmVyID0gcGFyYW1zLmxlbmd0aDtcblxuICAgIC8vIGdldCB0aGUgbnVtYmVyIG1pbiBhbmQgbWF4IG9mIHZhbGlkIHBhcmFtZXRlcnNcbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc05hbWUpO1xuICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc05hbWUpO1xuICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc05hbWUpO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFszLCAzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgaXNMaW5rOlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IGdldFBhcmFtTnVtYmVyKGNsYXNzTmFtZSwgc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZVxuICAgIGlmIChtb2RlbE51bWJlclBhcmFtWzBdIDw9IHBhcmFtTnVtYmVyICYmIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV0pIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tQYXJhbXMocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbCxcbiAgICAgICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnLFxuICAgICAgICBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJycsXG4gICAgICAgIHBhcmFtc05hbWUgPSBbXSxcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtdLFxuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbXSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcGFyYW0gPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgICAgIGlzTGluayA9IGZhbHNlLFxuICAgICAgICBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsobWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWydudW1iZXInLCAkbWV0YW1vZGVsLmdldChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF0sICdzdHJpbmcnXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFszLCAzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0KGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc0xpbms6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0KGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHBhcmFtc1R5cGUgPSBnZXRQYXJhbVR5cGVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gY2FzZSBvZiBvYmplY3RcbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zTnVtYmVyLmluZGV4T2YobGVuZ3RoKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSwgcGFyYW1zTmFtZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIGFjdGlvbiB0aGF0IGNvbWVzIGZyb20gYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBhY3Rpb24oYmVoYXZpb3JJZCwgcGFyYW1zKSB7XG4gICAgdmFyIGlzRXZlbnQgPSBmYWxzZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIGJlaGF2aW9ycyA9IFtdLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBhY3Rpb25Gcm9tTWVtb3J5ID0gbnVsbDtcblxuICAgIGJlaGF2aW9ycyA9ICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiX2lkXCI6IGJlaGF2aW9ySWRcbiAgICB9KTtcblxuICAgIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gICAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgICAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0NvbGxlY3Rpb24gfHwgaXNMaW5rKSB7XG4gICAgICAgICAgICAgICAgY2FsbEFjdGlvbihjb21wb25lbnQsIGJlaGF2aW9yLnN0YXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBhY3Rpb25Gcm9tTWVtb3J5XG4gICAgICAgICAgICAgICAgfSwgcGFyYW1zLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kLCBhIHByb3BlcnR5IG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYWN0aW9ucyBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIGEgbWV0aG9kLCBjaGVjayBpZiB0aGUgb3V0cHV0IGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHN0YXRlKHBhcmFtcykge1xuXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtcy5jb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8ICcnO1xuICAgIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcbiAgICBwYXJhbXMuZGF0YSA9IHBhcmFtcy5kYXRhIHx8IFtdO1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnLFxuICAgICAgICBhY3Rpb25zID0gW10sXG4gICAgICAgIGFjdGlvbiA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBmYWxzZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIGlzRXZlbnQgPSBmYWxzZTtcblxuICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgICBpZiAoY3VycmVudFN0YXRlID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24ocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoKSB7XG5cbiAgICAgICAgaWYgKGNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICBcImFyZ3NcIjogcGFyYW1zLmRhdGFcbiAgICAgICAgfSkpIHtcblxuICAgICAgICAgICAgaWYgKCFpc0V2ZW50ICYmXG4gICAgICAgICAgICAgICAgIWlzUHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAhaXNMaW5rICYmXG4gICAgICAgICAgICAgICAgIWlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgYWN0aW9uLCBwYXJhbXMuZGF0YSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kUmVzdWx0XCI6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzTGluayB8fCBpc0NvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZnVuY3Rpb24gc3RvcChwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5lcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyYW1zLmVycm9yID0gZmFsc2U7XG4gICAgfVxuICAgIHBhcmFtcy5tZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UgfHwgJyc7XG5cbiAgICBleHBvcnRzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLmVycm9yKSB7XG4gICAgICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcInJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIFwiICsgcGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcInJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIG9mIGFuIHVua25vd24gZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCcpO1xuICAgIH1cbn1cblxuXG4vKlxuICogUmVzdGFydCB0aGUgd29ya2Zsb3cgZW5naW5lIGZyb20gdGhlIGxhc3Qgc3RhdGUuXG4gKiBAbWV0aG9kIHJlc3RhcnRcbiAqL1xuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICBleHBvcnRzLnN0YXRlID0gc3RhdGU7XG4gICAgJGxvZy53b3JrZmxvd1Jlc3RhcnRlZCgpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFJ1bnRpbWUuIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgb2YgUnVudGltZSBpbnN0YW5jZS4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogXG4gKiBXb3JrbG93Ojxicj5cbiAqIDxicj5cbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZCA8YnI+XG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2Qgb3IgYW4gZXZlbnQgPGJyPlxuICogMi4gU2VhcmNoIGlmIHRoZXJlIGlzIGEgYmVoYXZpb3Igd2l0aCBhbiBhY3Rpb24gZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIG5vdCBhbiBvZiBldmVudCwgY2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcblxuXG4vKipcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG5cblxuLyoqXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5leHBvcnRzLnJlc3RhcnQgPSByZXN0YXJ0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBjaGVja1BhcmFtcztcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXIuXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMudmFsaWRQYXJhbU51bWJlcnMgPSB2YWxpZFBhcmFtTnVtYmVycztcblxuXG4vKipcbiAqIENhbGwgYW4gYWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhbiBldmVudC5cbiAqIEBtZXRob2QgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMuYWN0aW9uID0gYWN0aW9uOyJdfQ==
