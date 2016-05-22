(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Runtime
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    "models": {
        "138a81fa1f16435": {
            "_id": "138a81fa1f16435",
            "_name": "RuntimeAdmin",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "start": {},
            "designerWindow": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": null
            }
        },
        "135c71078810af2": {
            "_id": "135c71078810af2",
            "_name": "RuntimeChannel",
            "_inherit": [
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
        "1f4141671514c2c": {
            "_id": "1f4141671514c2c",
            "_name": "RuntimeStorage",
            "get": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "set": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }, {
                    "name": "value",
                    "type": "any",
                    "mandatory": true,
                    "default": null
                }]
            },
            "changed": {
                "params": [{
                    "name": "changed",
                    "type": "object",
                    "mandatory": true,
                    "default": {}
                }]
            },
            "clear": {},
            "remove": {
                "params": [{
                    "name": "key",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "_core": true,
            "store": {
                "type": "object",
                "readOnly": false,
                "mandatory": false,
                "default": {}
            }
        },
        "14c7c105b31a160": {
            "_id": "14c7c105b31a160",
            "_name": "Runtime",
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
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
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
        "159c51826f1d89f": {
            "_name": "RuntimeBehavior",
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
            },
            "_id": "159c51826f1d89f"
        },
        "1dd5a1c8cf18c86": {
            "_name": "RuntimeClassInfo",
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
            },
            "_id": "1dd5a1c8cf18c86"
        },
        "123751cb591de26": {
            "_id": "123751cb591de26",
            "_name": "RuntimeComponent",
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
                    "mandatory": false,
                    "default": false
                }, {
                    "name": "isCore",
                    "type": "boolean",
                    "mandatory": false,
                    "default": false
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
        "110161183f1efc4": {
            "_name": "RuntimeDatabase",
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
            },
            "_id": "110161183f1efc4"
        },
        "1566910d0b1184c": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": {
                "type": "log",
                "readOnly": false,
                "mandatory": false,
                "default": "warn"
            },
            "debug": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "info": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "warn": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "error": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "_id": "1566910d0b1184c"
        },
        "1e27a1d63019e88": {
            "_name": "RuntimeMessage",
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
            },
            "_id": "1e27a1d63019e88"
        },
        "165eb1c384119a6": {
            "_name": "RuntimeMetamodel",
            "_core": true,
            "schema": {
                "params": [{
                    "name": "schema",
                    "type": "object"
                }],
                "result": "any"
            },
            "model": {
                "params": [{
                    "name": "model",
                    "type": "object"
                }],
                "result": "any"
            },
            "type": {
                "params": [{
                    "name": "type",
                    "type": "object"
                }],
                "result": "any"
            },
            "create": {
                "params": []
            },
            "_id": "165eb1c384119a6"
        },
        "1f9031945d12592": {
            "_name": "RuntimeState",
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
            },
            "_id": "1f9031945d12592"
        },
        "112ba16c2b10935": {
            "_name": "RuntimeSystem",
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
            "models": {
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
            "main": {},
            "_id": "112ba16c2b10935"
        }
    },
    "schemas": {
        "10374180581a41f": {
            "_id": "10374180581a41f",
            "_name": "RuntimeAdmin",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "designerWindow": "property",
            "start": "method"
        },
        "104ad1f48518376": {
            "_id": "104ad1f48518376",
            "_name": "RuntimeChannel",
            "_core": true,
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
                "RuntimeComponent"
            ],
            "send": "event"
        },
        "12fa8181ce127a0": {
            "_id": "12fa8181ce127a0",
            "_name": "RuntimeStorage",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "store": "property",
            "get": "method",
            "set": "method",
            "remove": "method",
            "clear": "method",
            "changed": "event"
        },
        "12e211d4cd120a6": {
            "_id": "12e211d4cd120a6",
            "_name": "Runtime",
            "load": "method",
            "ready": "event",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "version": "property",
            "system": "method"
        },
        "16d15172311924f": {
            "_name": "RuntimeBehavior",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "core": "property",
            "component": "property",
            "action": "property",
            "state": "property",
            "useCoreAPI": "property",
            "_id": "16d15172311924f"
        },
        "12aca190c914aea": {
            "_name": "RuntimeClassInfo",
            "_inherit": [
                "RuntimeComponent"
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
            "events": "method",
            "_id": "12aca190c914aea"
        },
        "111df11e2b19fde": {
            "_id": "111df11e2b19fde",
            "_name": "RuntimeComponent",
            "_inherit": [],
            "_core": true,
            "classInfo": "property",
            "on": "method",
            "off": "method",
            "require": "method",
            "destroy": "method",
            "init": "method",
            "error": "event"
        },
        "195571d3a91c5d6": {
            "_name": "RuntimeDatabase",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "system": "method",
            "subsystem": "method",
            "collections": "method",
            "insert": "event",
            "update": "event",
            "remove": "event",
            "_id": "195571d3a91c5d6"
        },
        "1b0931164113fd2": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": "property",
            "debug": "method",
            "info": "method",
            "warn": "method",
            "error": "method",
            "_id": "1b0931164113fd2"
        },
        "156691b73f10752": {
            "_name": "RuntimeMessage",
            "_inherit": [],
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property",
            "_id": "156691b73f10752"
        },
        "1c9691e8bf1fb47": {
            "_name": "RuntimeMetamodel",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "schema": "method",
            "model": "method",
            "type": "method",
            "create": "method",
            "_id": "1c9691e8bf1fb47"
        },
        "16c2b1279e1b2f5": {
            "_name": "RuntimeState",
            "_inherit": [],
            "_core": true,
            "_class": false,
            "name": "property",
            "parameters": "property",
            "_id": "16c2b1279e1b2f5"
        },
        "1cced12e02183a9": {
            "_name": "RuntimeSystem",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "name": "property",
            "master": "property",
            "subsystem": "property",
            "version": "property",
            "description": "property",
            "schemas": "property",
            "models": "property",
            "behaviors": "property",
            "types": "property",
            "components": "property",
            "sync": "method",
            "main": "method",
            "ready": "event",
            "_id": "1cced12e02183a9"
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
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "css": {
            "name": "css",
            "type": "string",
            "core": true
        },
        "date": {
            "name": "date",
            "type": "object",
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
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "html": {
            "name": "html",
            "type": "string",
            "core": true
        },
        "javascript": {
            "name": "javascript",
            "type": "string",
            "core": true
        },
        "json": {
            "name": "json",
            "type": "object",
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
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
                }
            },
            "core": true
        },
        "log": {
            "name": "log",
            "type": "string",
            "value": [
                "debug",
                "info",
                "warn",
                "error"
            ],
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
                },
                "description": {
                    "type": "string",
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
                },
                "description": {
                    "type": "string",
                    "mandatory": false
                },
                "label": {
                    "type": "string",
                    "mandatory": false
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
            "action": "function start() {\n    var RuntimeChannel = null,\n        runtimeChannel = null;\n\n    if (!this.require('channel-admin')) {\n        RuntimeChannel = this.require('RuntimeChannel');\n        runtimeChannel = new RuntimeChannel({\n            '_id': 'channel-admin',\n            '_core': true\n        });\n        \n        runtimeChannel.on('send', function send(message) {\n            this.require('admin').designerWindow().postMessage(JSON.stringify(message), '*');\n        }, false, true);\n        \n        // schema change events\n        runtimeChannel.on('createSchema', function createSchema(id, schema) {\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('updateSchema', function updateSchema(id, schema) {\n             this.require('metamodel').schema(schema);\n             this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('deleteSchema', function deleteSchema(id) {\n            var search = $db.RuntimeSchema.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeSchema.remove({ '_id': id });\n\n                search = $db.RuntimeModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n\n                search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n                this.require('metamodel').create();\n            }\n        }, false, true);\n        \n        // model change events\n        runtimeChannel.on('createModel', function createModel(id, model) {\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('updateModel', function updateModel(id, model) {\n             this.require('metamodel').model(model);\n             this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('deleteModel', function deleteModel(id) {\n            var search = $db.RuntimeModel.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeModel.remove({ '_id': id });\n                $component.removeFromMemory(modelName);\n            }\n\n            search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n            if (search.length) {\n                modelId = search[0]._id;\n                $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                $component.removeFromMemory(modelName);\n            }\n            this.require('metamodel').create();\n        }, true, true);\n        \n        // type change events\n        runtimeChannel.on('createType', function createType(id, type) {\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('updateType', function updateType(id, type) {\n             this.require('metamodel').type(type);\n             this.require('metamodel').create();\n        }, false, true);\n        \n        runtimeChannel.on('deleteType', function deleteType(id) {\n            $db.RuntimeType.remove({ 'name': id });\n            this.require('metamodel').create();\n        }, true, true);\n        \n        // component change events\n        runtimeChannel.on('createComponent', function createComponent(model, component) {\n            $db[model].insert(component);\n        }, true, true);\n        \n        runtimeChannel.on('updateComponent', function updateComponent(id, collection, component) {\n            $db[collection].update({'_id': id}, component);\n        }, true, true);\n        \n        runtimeChannel.on('deleteComponent', function deleteComponent(id, collection) {\n            $db[collection].remove({'_id': id});\n        }, true, true);\n        \n        // behavior change events\n        runtimeChannel.on('createBehavior', function createBehavior(component) {\n            $db.RuntimeBehavior.insert(component);\n        }, true, true);\n        \n        runtimeChannel.on('updateBehavior', function updateBehavior(id, behavior) {\n            this.require(id).action(behavior.action);\n        }, false, true);\n        \n        runtimeChannel.on('deleteBehavior', function deleteBehavior(id) {\n            $db.RuntimeBehavior.remove({'_id': id});                  \n        }, true, true);\n     \n        // System Designer event\n        runtimeChannel.on('sync', function sync() {\n            var designerWindow = this.require('admin').designerWindow(),\n                system = null;\n            \n            this.require('admin').designerWindow(null);\n            system = JSON.parse(this.require('db').system());\n            designerWindow = this.require('admin').designerWindow(designerWindow);\n            \n            this.loadSystem(system);\n        }, false, true);\n        \n        window.addEventListener('message', function (event) {\n            var data = null;\n            try {\n                data = JSON.parse(event.data);\n                if (data && data.event) {\n                    this.designerWindow(event.source);\n                    $db.RuntimeMessage.insert(data);\n                }\n            } catch(e) {\n            }\n        }.bind(this), false);\n        \n        this.require('logger').info('admin is started');\n    } else {\n        this.require('logger').info('admin is already started');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1ca0f1020412d4f": {
            "_id": "1ca0f1020412d4f",
            "component": "RuntimeStorage",
            "state": "get",
            "action": "function get(key) {\n    var result = null;\n    \n    if (typeof this.store()[key]) {\n        result = this.store()[key];\n    }\n    return result;\n}",
            "useCoreAPI": false,
            "core": true
        },
        "16764100d51b5f8": {
            "_id": "16764100d51b5f8",
            "component": "RuntimeStorage",
            "state": "set",
            "action": "function set(key, value) {\n    var store = this.store(),\n        item = {};\n    \n    store[key] = value;\n    this.store(store);\n    \n    item[key] = JSON.stringify(value);\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.setItem(key, JSON.stringify(value)); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "134b616b1016f60": {
            "_id": "134b616b1016f60",
            "component": "RuntimeStorage",
            "state": "clear",
            "action": "function clear() {\n    this.store({});\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.clear(); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "14c7f1a8431b3d5": {
            "_id": "14c7f1a8431b3d5",
            "component": "RuntimeStorage",
            "state": "init",
            "action": "function init(conf) {\n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            \n            // init \n            var keys = Object.keys(localStorage),\n                store = {},\n                i = 0,\n                length = 0;\n                \n            length = keys.length;    \n            for (i = 0; i < length; i++) {\n                try {\n                    store[keys[i]] = JSON.parse(localStorage[keys[i]]);\n                } catch (e) {\n                }\n            }\n            this.store(store);\n            \n            // event\n            window.addEventListener('storage', function (e) {\n                var obj = {},\n                    store = this.store();\n                    \n                try {\n                    store[e.key] = JSON.parse(e.newValue)\n                    this.store(store);\n                   \n                    obj[e.key] = {};\n                    obj[e.key].oldValue = JSON.parse(e.oldValue);\n                    obj[e.key].newValue = JSON.parse(e.newValue);\n                    \n                    this.changed(obj);\n                } catch (e) {\n                }\n            }.bind(this));\n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
        },
        "1a4921ac7112bd4": {
            "_id": "1a4921ac7112bd4",
            "component": "RuntimeStorage",
            "state": "remove",
            "action": "function remove(key) {\n    var store = this.store();\n    \n    delete store[key];\n    this.store(store);\n    \n    switch (true) {\n        case typeof localStorage !== 'undefined':\n            localStorage.removeItem(key); \n            break;\n        default:\n            break;\n    }\n}",
            "useCoreAPI": false,
            "core": true
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
            "action": "function main() {\n    var subsystems = [],\n        systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n    subsystems = $db.RuntimeSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        // logger\n        scripts = document.querySelectorAll('script[log]');\n        if (scripts.length) {\n            logLevel = scripts[0].getAttribute('log');\n            this.require('logger').level(logLevel);\n        }\n        \n        // systems\n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('runtime').load(system.href, false);\n            } else {\n                this.require('runtime').load(system.href, true);\n            }\n        }\n        \n        // designer\n        scripts = document.querySelectorAll('script[designer]');\n        if (scripts.length) {\n            this.require('admin').start();\n        }\n        \n        // ready event\n        if (length === 0) {\n           this.require('runtime').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "14192150461143b": {
            "_id": "14192150461143b",
            "component": "Runtime",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('RuntimeSystem');\n        system = new System(conf);\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "168fa1103318ba9": {
            "_id": "168fa1103318ba9",
            "component": "RuntimeClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "19dbc14ced1a469": {
            "_id": "19dbc14ced1a469",
            "component": "RuntimeClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "183031424910f73": {
            "_id": "183031424910f73",
            "component": "RuntimeClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1c01c1b1c41c825": {
            "_id": "1c01c1b1c41c825",
            "component": "RuntimeClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "15407188f51ad37": {
            "_id": "15407188f51ad37",
            "component": "RuntimeClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1228719b9318921": {
            "_id": "1228719b9318921",
            "component": "RuntimeClassInfo",
            "state": "links",
            "action": "function links() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1532b1ed7b11ca4": {
            "_id": "1532b1ed7b11ca4",
            "component": "RuntimeClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "172ca18b0e1e432": {
            "_id": "172ca18b0e1e432",
            "component": "RuntimeClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1cad51356b14a21": {
            "_id": "1cad51356b14a21",
            "component": "RuntimeClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "1c0331e42115a80": {
            "_id": "1c0331e42115a80",
            "component": "RuntimeClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1eb66156a61e53d": {
            "_id": "1eb66156a61e53d",
            "component": "RuntimeComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "189c51088a1ab72": {
            "_id": "189c51088a1ab72",
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 7; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e4c5184e113bfe": {
            "_id": "1e4c5184e113bfe",
            "component": "RuntimeComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "104941f7ab15ec8": {
            "_id": "104941f7ab15ec8",
            "component": "RuntimeDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Runtime') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1ffb61aa431fac8": {
            "_id": "1ffb61aa431fac8",
            "component": "RuntimeDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1c8e718b691e063": {
            "_id": "1c8e718b691e063",
            "component": "RuntimeDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1c3ec13c391ac45": {
            "_id": "1c3ec13c391ac45",
            "component": "RuntimeLogger",
            "state": "debug",
            "action": "function debug(message) {\n    if (this.level() === 'debug') {\n        console.log('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "18a991d0df10b17": {
            "_id": "18a991d0df10b17",
            "component": "RuntimeLogger",
            "state": "error",
            "action": "function error(message) {\n    console.error('runtime: ' + message);\n}",
            "core": true
        },
        "1af771cf1219187": {
            "_id": "1af771cf1219187",
            "component": "RuntimeLogger",
            "state": "info",
            "action": "function info(message) {\n    if (this.level() === 'info' || this.level() === 'debug') {\n        console.info('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "142a61d18218fd3": {
            "_id": "142a61d18218fd3",
            "component": "RuntimeLogger",
            "state": "level",
            "action": "function level(val) {\n    $log.level(val);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e6df1b3fc10d52": {
            "_id": "1e6df1b3fc10d52",
            "component": "RuntimeLogger",
            "state": "warn",
            "action": "function warn(message) {\n    if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n        console.warn('runtime: ' + message);\n    } \n}",
            "core": true
        },
        "16af81711318609": {
            "_id": "16af81711318609",
            "component": "RuntimeMetamodel",
            "state": "create",
            "action": "function create() {\n        $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1ffba18aff18461": {
            "_id": "1ffba18aff18461",
            "component": "RuntimeMetamodel",
            "state": "model",
            "action": "function model(model) {\n    return $metamodel.model(model);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e911155a91b1ff": {
            "_id": "1e911155a91b1ff",
            "component": "RuntimeMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    return $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1d14f1ebfd18662": {
            "_id": "1d14f1ebfd18662",
            "component": "RuntimeMetamodel",
            "state": "type",
            "action": "function type(type) {\n    return $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "178fa158db1c86e": {
            "_id": "178fa158db1c86e",
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
                "_core": true,
                "designerWindow": null
            }
        },
        "RuntimeStorage": {
            "storage": {
                "_id": "storage",
                "_core": true
            }
        },
        "Runtime": {
            "runtime": {
                "_id": "runtime",
                "version": "1.6.2"
            }
        },
        "RuntimeDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "RuntimeLogger": {
            "logger": {
                "_id": "logger"
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
                "version": "0.7.0",
                "description": "Runtime Component administration ",
                "subsystem": true,
                "master": false
            },
            "15de81d295153db": {
                "_id": "15de81d295153db",
                "name": "system-storage",
                "version": "0.1.0",
                "description": "Runtime storage system",
                "subsystem": true,
                "master": false
            },
            "133421d0c313d2d": {
                "_id": "133421d0c313d2d",
                "name": "web",
                "version": "0.2.0",
                "description": "Add behaviors for web",
                "subsystem": true,
                "master": false
            }
        }
    },
    "name": "runtime",
    "version": "1.6.2",
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
        params.push('$log');
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    NAME = '_name',
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
    arrDb.forEach(function(val) {
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

    /* Override sort method.
     * @sort
     * @param {Function} funct the sort function
     * @return {RuntimeArray} the current RuntimeArray
     */
    arr.sort = function sort(funct) {
        arrDb.sort(funct);
        return arr;
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

    params = $metamodel.getModel(id)[methodName].params;
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

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

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

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

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
 * Get the schema of a structure.
 * @method getStructureProperties
 * @param {String} name of the property
 * @param {String} name of the model
 * @return {Array} list of property schema of the structure type
 * @private
 */
function getStructureProperties(propertyName, model) {
    var modelDef = null,
        type = null,
        structure = null,
        result = [],
        propNames = [];

    modelDef = $metamodel.getModel(model);
    type = modelDef[propertyName].type;
    structure = $metamodel.getType(type);

    if (structure.schema) {
        propNames = Object.keys(structure.schema);
        propNames.forEach(function(name) {
            structure.schema[name].name = name;
            result.push(structure.schema[name]);
        });
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

    model = $metamodel.getModel(id);
    schema = $metamodel.getSchema(model[NAME]);

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
 * Get the value of a structure.
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path 
 * @return {Object} the value
 * @private
 */
function getStructureValue(model, id, path) {
    var result = null,
        doc = $db.store[model][id],
        subPath = path.split('.'),
        length = subPath.length,
        i = 0;

    result = doc;

    for (i = 0; i < length; i++) {
        result = result[subPath[i]];
    }
    return result;
}


/*
 * Set the value of a structure.
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path 
 * @param {String} value the value to set 
 * @private
 */
function setStructureValue(model, id, path, value) {
    var result = null,
        doc = $db.store[model][id],
        subPath = path.split('.'),
        length = subPath.length,
        i = 0;

    result = doc;

    for (i = 0; i < length - 1; i++) {
        result = result[subPath[i]];
    }
    result[subPath[i]] = value;
}


/*
 * Create a new class from a class definition.
 * @method createClasss
 * @param {String} classId name of the class
 * @return {Function} the class
 * @private
 */
function createClass(classId) {
    var body = function(config) {
        config = config || {};
        var body = {};

        if (config.constructor.name !== 'Object') {
            $log.invalidConctructorParameters(config, classId);
            config = {};
        }

        if (!$metamodel.isValidObject(config, $metamodel.getModel(classId), true, true)) {
            $log.invalidParameters(classId);
        }

        $metamodel.prepareObject(config, $metamodel.getModel(classId));

        if (typeof config._id === 'undefined') {
            config._id = $helper.generateId();
        }

        store[config._id] = this;

        // id
        body = function() {
            return config._id;
        };
        /* jshint -W054 */
        this.id = new Function("body", "return function id () { return body.call(this) };")(body);
        /* jshint +W054 */

        // classInfo
        if ($metamodel.inheritFrom(classId, 'RuntimeComponent')) {
            config.classInfo = classId + 'Info';
        }

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
    var body = function() {
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
                        switch (true) {
                            case propertyType.indexOf('@') !== -1:
                                propertyValue = get(component[propertyName]);
                                break;
                            case propertyType === 'date':
                                propertyValue = new Date(component[propertyName]);
                                break;
                            case $metamodel.isStructure(propertyName, classId):
                                propertyValue = addStructure('', propertyName, model, this.id());
                                break;
                            default:
                                propertyValue = component[propertyName];
                                break;
                        }
                        return propertyValue;
                    } else {
                        $log.destroyedComponentCall(propertyName, this.id());
                    }
                } else {
                    if (propertyReadOnly) {
                        $log.readOnlyProperty(this.id(), propertyName);
                    } else {
                        if ($metamodel.isValidType(value, propertyType)) {
                            search = $db[classId].find({ "_id": this.id() });
                            if (search.length) {
                                component = search[0];

                                switch (true) {
                                    case propertyType.indexOf('@') !== -1:
                                        component[propertyName] = value.id();
                                        break;
                                    case propertyType === 'date':
                                        component[propertyName] = value.toISOString();
                                        break;
                                    default:
                                        component[propertyName] = value;
                                        break;
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
 * Add structure properties to a component. All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 * @method addStructure
 * @param {String} path parent path
 * @param {String} name property name
 * @param {String} model model name
 * @param {String} id id of the component
 * @return {Object} object that cointains methods to access the structure 
 * @private
 */
function addStructure(path, name, model, id) {
    var properties = getStructureProperties(name, model),
        sructure = {};

    properties.forEach(function property(prop) {
        var body = {},
            propertyName = '',
            propertyType = '',
            propertyReadOnly = '';

        propertyName = prop.name;
        propertyType = prop.type;
        propertyReadOnly = prop.readOnly;

        body = function body(value) {
            var search = [],
                component = null,
                propertyValue = null,
                parentPath = '',
                fullPath = '';

            if (path) {
                parentPath = parentPath + '.' + name;
            } else {
                parentPath = name;
            }
            fullPath = parentPath + '.' + propertyName;

            if (typeof value === 'undefined') {
                component = $db.store[model][id];
                if (component) {
                    switch (true) {
                        case propertyType.indexOf('@') !== -1:
                            propertyValue = get(getStructureValue(model, id, fullPath));
                            break;
                        case propertyType === 'date':
                            propertyValue = new Date(getStructureValue(model, id, fullPath));
                            break;
                        case $metamodel.isStructure(propertyName, model):
                            propertyValue = addStructure(parentPath, propertyName, model, id);
                            break;
                        default:
                            propertyValue = getStructureValue(model, id, fullPath);
                            break;
                    }
                    return propertyValue;
                } else {
                    $log.destroyedComponentCall(fullPath, id);
                }
            } else {
                if (propertyReadOnly) {
                    $log.readOnlyProperty(id, fullPath);
                } else {
                    if ($metamodel.isValidType(value, propertyType)) {
                        search = $db[model].find({ "_id": id });
                        if (search.length) {
                            component = search[0];

                            switch (true) {
                                case propertyType.indexOf('@') !== -1:
                                    setStructureValue(model, id, fullPath, value.id());
                                    break;
                                case propertyType === 'date':
                                    setStructureValue(model, id, fullPath, value.toISOString());
                                    break;
                                default:
                                    setStructureValue(model, id, fullPath, value);
                                    break;
                            }

                            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                $helper.getRuntime().require('db').update(model, id, fullPath, value);
                            }

                            // case of RuntimeBehavior
                            if (model === 'RuntimeBehavior') {
                                $behavior.removeFromMemory(id);
                            }

                            $workflow.state({
                                "component": id,
                                "state": fullPath,
                                "data": [value]
                            });
                        }
                    } else {
                        $log.invalidPropertyName(id, fullPath, value, propertyType);
                    }
                }
            }
        };

        /* jshint -W054 */
        sructure[propertyName] = new Function("body", "return function " + propertyName + " (value) { return body.call(this,value) };")(body);
        /* jshint +W054 */
    });

    return sructure;
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
            body = function() {
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
            body = function() {
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
    var body = function(state, handler, useCoreAPI, isCore) {
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
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

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
    Class.prototype.on = new Function("body", "return function on (state,handler,useCoreAPI,isCore) { return body.call(this,state,handler,useCoreAPI,isCore) };")(body);
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
    var body = function(state, handler, useCoreAPI, isCore) {
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
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

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
    Class.on = new Function("body", "return function on (state,handler,useCoreAPI,isCore) { return body.call(this, state, handler, useCoreAPI,isCore) };")(body);
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
    var body = function(state, behaviorId) {
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
    var body = function() {
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
    var body = function() {
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
        'RuntimeModel',
        'RuntimeGeneratedModel',
        'RuntimeBehavior',
        'RuntimeState',
        'RuntimeType',
        'RuntimeMetamodel',
        'RuntimeDatabase',
        'RuntimeSystem',
        'RuntimeClassInfo',
        'RuntimeMessage',
        'RuntimeChannel',
        'RuntimeLogger'
    ],
    coreDb = [
        'RuntimeSchema',
        'RuntimeLogger',
        'RuntimeModel',
        'RuntimeGeneratedModel',
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
        model = null,
        collection = null,
        schemaId = '',
        modelId = '',
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

    // models
    dbDump.models = {};
    if (exports.RuntimeModel.count()) {
        for (modelId in store.RuntimeModel) {
            model = JSON.parse(JSON.stringify(store.RuntimeModel[modelId]));
            if (!model._core) {
                dbDump.models[modelId] = model;
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
    if ($metamodel.getSchema(name) || internalDB.indexOf(name) !== -1) {
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
            case this.name === 'RuntimeLogger':
            case this.name === 'RuntimeModel':
            case this.name === 'RuntimeType':
            case this.name === 'RuntimeGeneratedModel':
            case $metamodel.isValidObject(obj, $metamodel.getModel(this.name)):

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
        schema = $metamodel.getModel(this.name),
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
                    if (this.name !== 'RuntimeSchema' && this.name !== 'RuntimeModel' && this.name !== 'RuntimeGeneratedModel') {
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
                                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                                    $helper.getRuntime().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                                }
                                $workflow.state({
                                    "component": docs[i]._id,
                                    "state": attributeName,
                                    "data": [update[attributeName]]
                                });
                            } else {
                                $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName].type);
                            }
                        } else {
                            $log.unknownPropertyOnDbUpdate(attributeName, docs[i]._id);
                        }
                    } else {
                        // TODO more check in case of schema update
                        docs[i][attributeName] = update[attributeName];
                        updated = updated + 1;
                        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
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
        modelName = '',
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

        // add models
        for (modelName in importedSystem.models) {
            $metamodel.model(importedSystem.models[modelName]);
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
            result = "{}";
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
        model = null,
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

    // models
    system.models = {};
    if (params.models) {
        result = exports.RuntimeModel.find(params.models);

        length = result.length;
        for (i = 0; i < length; i++) {
            model = result[i];
            if (!model._core) {
                system.models[model._id] = model;
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    var runtimeId = '',
        result = null;

    if (!runtimeRef) {
        runtimeId = $db.Runtime.find()[0]._id;
        runtimeRef = $component.get(runtimeId);
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
            get: function() {
                var funcNameRegex = /function\s([^(]{1,})\(/;
                var results = (funcNameRegex).exec((this).toString());
                return (results && results.length > 1) ? results[1].trim() : "";
            },
            set: function(value) { }
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
var $workflow = require('./workflow.js');
var $metamodel = require('./metamodel.js');
var $db = require('./db.js');
var $component = require('./component.js');

/* Private properties */


var ID = '_id',
    currentLevel = 'warn',
    loggerRef = null,
    fakeLoggerRef = {
        debug: function debug(message) {
            if (currentLevel === 'debug') {
                console.log('runtime: ' + message);
            }
        },
        info: function info(message) {
            if (currentLevel === 'info' || currentLevel === 'debug') {
                console.info('runtime: ' + message);
            }
        },
        warn: function warning(message) {
            if (currentLevel === 'info' || currentLevel === 'warn' || currentLevel === 'debug') {
                console.warn('runtime: ' + message);
            }
        },
        error: function error(message) {
            console.error('runtime: ' + message);
        }
    };

/*
 * Get the RuntimeLogger instance.
 * @method getLogger
 * @return {RuntimeLogger} RuntimeLogger instance
 * @private
 */
function getLogger() {
    var loggerId = '',
        loggers = [],
        result = null;

    if (!$metamodel.getModel('RuntimeLogger')) {
        result = fakeLoggerRef;
    } else {
        loggers = $db.RuntimeLogger.find();
        if (loggers.length) {
            loggerId = loggers[0][ID];

            if ($component.get(loggerId)) {
                loggerRef = $component.get(loggerId);
                result = loggerRef;
            } else {
                result = fakeLoggerRef;
            }
        } else {
            result = fakeLoggerRef;
        }
    }

    return result;
}


/* Public methods */


/*
 * Set the level of the log.
 * @method level
 * @param {String} levelName name of the level
 */
function level(levelName) {
    currentLevel = levelName;
}


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
        message = "unknown property '" + propertyName + "' for a model";
    }

    getLogger().warn(message);
}


/*
 * Invalid type for a property.
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 */
function invalidPropertyType(propertyName, type, property) {
    getLogger().warn("invalid type for property '" + propertyName + "': expected type '" + type + "' instead of type '" + typeof property + "'");
}


/*
 * Invalid value for type enum.
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 */
function invalidEnumValue(value, type) {
    getLogger().warn("'" + value + "' is an invalid value for the type enum '" + type + "'");
}


/*
 * Invalid class name for a component.
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 */
function invalidClassName(componentId, type, constructorName) {
    getLogger().warn("invalid class name for component '" + componentId + "': expected '" + type + "' instead of '" + constructorName + "'");
}


/*
 * Missing a property.
 * @method missingProperty
 * @param {String} propertyName name of the property
 */
function missingProperty(propertyName) {
    getLogger().warn("missing property '" + propertyName + "'");
}


/*
 * A class definition is missing.
 * @method missingImplementation
 * @param {String} name name of the missing schema
 */
function missingImplementation(name) {
    getLogger().warn("schema '" + name + "' is missing.");
}


/*
 * Invalid type for a property of a class definition.
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function invalidTypeImp(property, className) {
    $workflow.stop({
        'error': false,
        'message': "the property '" + property + "' of the model '" + className + "' is invalid"
    });
}


/*
 * Missing a property for a class definition.
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 */
function missingPropertyImp(property, className) {
    getLogger().warn("missing property '" + property + "' for the definition of '" + className + "'");
}


/*
 * Unkown property for a class definition.
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 */
function unknownPropertyImp(property, schema) {
    $workflow.stop({
        'error': false,
        'message': "the model '" + schema + "' has an unknown property '" + property + "'"
    });
}


/*
 * Try to add an invalid type.
 * @method invalidTypeDefinition
 * @param {String} name a type definition
 */
function invalidTypeDefinition(name) {
    getLogger().warn("the type '" + name + "' is not valid");
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
    if (typeof type === 'string') {
        getLogger().warn("invalid type for property '" + propertyName + "' on component '" + id + "': expected '" + type.replace('@', '') + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    } else {
        getLogger().warn("invalid type for property type '" + propertyName + "' on component '" + id + "': expected 'string' instead of '" + typeof type + "' on component '" + id + "'");
    }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, propertyName) {
    getLogger().warn("can not set read-only property '" + propertyName + "' on component '" + id + "'");
}


/*
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
    getLogger().warn("invalid document '" + JSON.stringify(doc) + "' on an insert operation on collection '" + collectionName + "'");
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
        getLogger().warn("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        getLogger().warn("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}



/*
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function unknownPropertyOnDbUpdate(propertyName, id) {
    getLogger().warn("unknown property '" + propertyName + "' on an update operation on component '" + id + "'");
}


/*
 * Call an unknown method of a class.
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 */
function unknownMethod(classId, methodName) {
    getLogger().warn("try to call an unknown method '" + methodName + "' for the class '" + classId + "'");
}


/*
 * Try to create an invalid RuntimeDatabaseCollection.
 * @method invalidCollectionName
 * @param {String} name name of the collection
 */
function invalidCollectionName(name) {
    getLogger().warn("invalid name for creating the collection '" + name + "': there is no schema '" + name + "' in the metamodel");
}


/*
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 */
function invalidResultType(id, methodName, expectedType, type) {
    if (type) {
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "': expected type '" + expectedType + "' instead of type '" + type + "'");
    } else {
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "': expected type '" + expectedType + "'");
    }
}


/*
 * Unknown class.
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId if of the component
 */
function unknownComponent(className, componentId) {
    getLogger().warn("unkown class component '" + className + "' for component '" + componentId + "'");
}


/*
 * The Runtime workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    getLogger().warn('runtime has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumber(id, methodName) {
    getLogger().warn("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'");
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
    getLogger().warn("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'");
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
    getLogger().warn("try to add more than one behavior for the state '" + stateName + "' on component class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
    getLogger().warn("try to add a behavior with an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
    getLogger().warn("try to remove a behavior from an unkwown state '" + stateName + "' on component class '" + id + "'");
}


/*
 * The master system is not found.
 * @method masterSystemNotFound
 */
function masterSystemNotFound() {
    getLogger().warn("can not export the database because no system was defined");
}


/*
 * Invalid type.
 * @method invalidType
 * @param {Object} value value of the type
 * @param {String} typeName expectec type defined by the schema
 */
function invalidType(value, typeName) {
    getLogger().warn("invalid type for value '" + JSON.stringify(value) + "': expected '" + typeName + "'");
}


/*
 * Unknown type.
 * @method unknownType
 * @param {String} value value
 */
function unknownType(value) {
    getLogger().warn("unknown type for value '" + JSON.stringify(value) + "'");
}


/*
 * A component has not been alreay created.
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 */
function canNotYetValidate(id, className) {
    getLogger().info("can not yet validate if the component '" + id + "' is an instance of '" + className + "'");
}


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
function invalidChannelEvent(message, eventName, type) {
    getLogger().warn("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'");
}


/*
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumberMethodOn(id, methodName) {
    getLogger().warn("invalid number of parameters when adding an action on method '" + methodName + "' on component '" + id + "'");
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
        getLogger().warn("try to update a component of id '" + currentId + "' with the new id '" + newId + "' that is already used");
    } else {
        getLogger().warn("try to update a component of id '" + currentId + "' with the new id '" + newId + "'");
    }
}


/*
 * Try to change the state of a component that has been destroyed.
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 */
function invalidUseOfComponent(id) {
    getLogger().warn("try to change the state of the destroyed component '" + id + "'");
}


/*
 * Try to add an invalid schema.
 * @method invalidSchema
 * @param {String} name name of the schema
 */
function invalidSchema(name) {
    getLogger().warn("the schema '" + name + "' is not valid");
}


/*
 * Try to add an invalid model.
 * @method invalidModel
 * @param {String} name name of the model
 */
function invalidModel(name) {
    getLogger().warn("the model '" + name + "' is not valid");
}


/*
 * Invalid parameters set when creating an instance of a class.
 * @method invalidParameters
 * @param {String} classId class name of the component
 */
function invalidParameters(classId) {
    getLogger().warn("the parameters for creating a component of class '" + classId + "' are not compliant with the model");
}


/*
 * Try to get the property of a destroyed component.
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function destroyedComponentCall(propertyName, id) {
    getLogger().warn("trying to get the property '" + propertyName + "' on the destroyed component '" + id + "'");
}


/*
 * Invalid parameter type  when creating an instance of a class.
 * @method invalidConctructorParameters
 * @param {String} classId class name of the component
 * @param {String} name schema name
 */
function invalidConctructorParameters(object, name) {
    getLogger().warn("the constructor parameter '" + JSON.stringify(object) + "' for creating a component of class '" + name + "' is not an object");
}


/*
 * Get the information of an unkown model.
 * @method unknownModel
 * @param {String} classId id of the class
 */
function unknownModel(classId) {
    getLogger().warn("try get the information of an unknown model '" + classId + "'");
}


/*
 * A schema is missing.
 * @method missingSchema
 * @param {String} name name of the schema
 */
function missingSchema(name) {
    getLogger().warn("the schema '" + name + "' is missing");
}


/*
 * A cyclic dependency was found.
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 */
function cyclicDependency(name) {
    if (name) {
        $workflow.stop({
            'error': false,
            'message': 'a cyclic inheritance dependency with \’' + name + '\’ schema has been found, please check the \'_inherit\' properties of your schemas'
        });
    } else {
        $workflow.stop({
            'error': false,
            'message': 'a cyclic inheritance dependency has been found, please check the \'_inherit\' properties of your schemas'
        });
    }
}


/*
 * Invalid type for a type enum.
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 */
function invalidEnumType(value, typeName, type) {
    getLogger().warn("invalid type for enumerated type '" + typeName + "': expected type '" + type + "' instead of type '" + typeof value + "'");
}


/*
 * Load schema.
 * @method loadSchema
 * @param {String} name name of the schema
 */
function loadSchema(name) {
    getLogger().info("load schema '" + name + "'");
}


/*
 * Load model.
 * @method loadModel
 * @param {String} name name of the model
 */
function loadModel(name) {
    getLogger().info("load model '" + name + "'");
}


/*
 * Load type.
 * @method loadType
 * @param {String} name name of the type
 */
function loadType(name) {
    getLogger().info("load type '" + name + "'");
}


/*
 * Compile schema.
 * @method compileSchema
 * @param {String} name name of the schema
 */
function compileSchema(name) {
    getLogger().info("compile schema '" + name + "'...");
}


/*
 * Generate model.
 * @method generateModel
 * @param {String} name name of the model
 */
function generateModel(name) {
    getLogger().info("generate model '" + name + "'...");
}


/*
 * Check model.
 * @method checkModel
 * @param {String} name name of the model
 */
function checkModel(name) {
    getLogger().info("analyze model '" + name + "'...");
}


/*
 * Create collection.
 * @method createCollection
 * @param {String} name name of the collection
 */
function createCollection(name) {
    getLogger().info("create collection '" + name + "'");
}

/*
 * Create class.
 * @method createClass
 * @param {String} name name of the class
 */
function createClass(name) {
    getLogger().info("create class '" + name + "'");
}


/*
 * Begins model creation.
 * @method modelCreationBegin
 */
function modelCreationBegin() {
    getLogger().info("starting model creation...");
}


/*
 * End model creation.
 * @method modelCreationEnd
 */
function modelCreationEnd() {
    getLogger().info("model creation ended");
}


/*
 * An error happened when invoking a behavior.
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} message
 */
function actionInvokeError(state, id, message) {
    getLogger().error("error when trying to call the method '" + state + "' on component '" + id + "': " + message);
}


/*
 * Invalid name for the property of a schema.
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 */
function invalidSchemaProperty(name, propName) {
    getLogger().warn("invalid property '" + propName + "' for schema '" + name + "': only 'property', 'link', 'collection', 'method' and 'event' are allowed.");
}


/*
 * Invalid format for the definition of a property
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 */
function invalidPropertyFormat(obj) {
    getLogger().warn("invalid format for a definition of a property': '" + obj + "' is not an object");
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
 * Set the level of the log.
 * @method level
 * @param {String} levelName name of the level
 */
exports.level = level;


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
 * @param {String} name name of the missing schema
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
 * Try to add an invalid type.
 * @method invalidTypeDefinition
 * @param {String} name a type definition
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
 * Invalid type result of a method.
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
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


/**
 * Try to add an invalid schema.
 * @method invalidSchema
 * @param {String} name name of the schema
 */
exports.invalidSchema = invalidSchema;


/**
 * Try to add an invalid model.
 * @method invalidModel
 * @param {String} name name of the model
 */
exports.invalidModel = invalidModel;


/**
 * Invalid parameters set when creating an instance of a class.
 * @method invalidParameters
 * @param {String} classId class name of the component
 */
exports.invalidParameters = invalidParameters;


/**
 * Try to get the property of a destroyed component.
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
exports.destroyedComponentCall = destroyedComponentCall;


/**
 * Invalid parameter type  when creating an instance of a class.
 * @method invalidConctructorParameters
 * @param {String} classId class name of the component
 * @param {String} name schema name
 */
exports.invalidConctructorParameters = invalidConctructorParameters;


/**
 * Get the information of an unkown model.
 * @method unknownModel
 * @param {String} classId id of the class
 */
exports.unknownModel = unknownModel;


/**
 * A schema is missing.
 * @method missingSchema
 * @param {String} name name of the schema
 */
exports.missingSchema = missingSchema;


/**
 * A cyclic dependency was found.
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 */
exports.cyclicDependency = cyclicDependency;


/**
 * Invalid type for a type enum.
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 */
exports.invalidEnumType = invalidEnumType;


/**
 * Load schema.
 * @method loadSchema
 * @param {String} name name of the schema
 */
exports.loadSchema = loadSchema;


/**
 * Load model.
 * @method loadModel
 * @param {String} name name of the model
 */
exports.loadModel = loadModel;


/**
 * Load type.
 * @method loadType
 * @param {String} name name of the type
 */
exports.loadType = loadType;


/** 
 * Compile schema.
 * @method compileSchema
 * @param {String} name name of the schema
 */
exports.compileSchema = compileSchema;


/**
 * Generate model.
 * @method generateModel
 * @param {String} name name of the model
 */
exports.generateModel = generateModel;


/**
 * Check model.
 * @method checkModel
 * @param {String} name name of the model
 */
exports.checkModel = checkModel;


/**
 * Create collection.
 * @method createCollection
 * @param {String} name name of the collection
 */
exports.createCollection = createCollection;


/**
 * Create class.
 * @method createClass
 * @param {String} name name of the class
 */
exports.createClass = createClass;


/*
 * Begins model creation.
 * @method modelCreationBegin
 */
exports.modelCreationBegin = modelCreationBegin;


/*
 * End model creation.
 * @method modelCreationEnd
 */
exports.modelCreationEnd = modelCreationEnd;


/**
 * An error happened when invoking a behavior.
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} message
 */
exports.actionInvokeError = actionInvokeError;


/**
 * Invalid name for the property of a schema.
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 */
exports.invalidSchemaProperty = invalidSchemaProperty;


/**
 * Invalid format for the definition of a property
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 */
exports.invalidPropertyFormat = invalidPropertyFormat;

},{"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7,"./workflow.js":10}],7:[function(require,module,exports){
/*
 * Runtime
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
var $helper = require('./helper.js');


/* Private properties */


var ID = '_id',
    NAME = '_name',
    DESCRIPTION = '_description',
    INHERITS = '_inherit',
    CLASS = '_class',
    CORE = '_core',
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    PROPERTY_TYPE = 'property',
    LINK_TYPE = 'link',
    COLLECTION_TYPE = 'collection',
    internalTypes = ['property', 'collection', 'link', 'method', 'event'],
    defaultTypes = ['boolean', 'string', 'number', 'object', 'function', 'array', 'any'],
    store = {
        metadef: {},
        inheritance: {},
        inheritanceTree: {},
        schemas: {},
        compiledSchemas: {},
        models: {},
        generatedModels: {},
        states: {},
        type: {}
    };


/* Private methods */


/*
 * Generate the models.
 * @method generateModels
 * @private
 */
function generateModels() {
    var att = '',
        name = '',
        schemaName = '',
        schema = {},
        modelName = '',
        modelParent = null,
        modelExt = null,
        modelDef = null,
        model = {},
        models = {},
        mergedModel = {},
        parents = [],
        length = 0,
        i = 0;

    // default values
    for (schemaName in store.compiledSchemas) {
        schema = store.compiledSchemas[schemaName];

        // set model internal properties
        model = {
            "_name": schema._name,
        };

        // set _core
        if (typeof schema._core !== 'undefined') {
            model._core = schema._core;
        }

        // set inherit
        if (Array.isArray(schema._inherit)) {
            model._inherit = schema._inherit;
        }

        // set class
        if (typeof schema._class !== 'undefined') {
            model._class = schema._class;
        }

        // set description 
        if (typeof schema._description !== 'undefined') {
            model._description = schema._description;
        }

        //  set model default values
        for (att in schema) {
            switch (true) {
                case schema[att] === 'property':
                    model[att] = {
                        "type": "any",
                        "readOnly": false,
                        "mandatory": false,
                        "default": null,
                        "description": att,
                        "label": att
                    };
                    break;
                case schema[att] === 'link':
                    model[att] = {
                        "type": "@RuntimeComponent",
                        "readOnly": false,
                        "mandatory": false,
                        "default": {},
                        "description": att,
                        "label": att
                    };
                    break;
                case schema[att] === 'method':
                    model[att] = {
                        "params": [
                            {
                                "name": "param",
                                "type": "any",
                                "mandatory": false
                            }
                        ],
                        "result": "any",
                        "description": att
                    };
                    break;
                case schema[att] === 'event':
                    model[att] = {
                        "params": [
                            {
                                "name": "param",
                                "type": "any",
                                "mandatory": false
                            }
                        ],
                        "description": att
                    };
                    break;
                case schema[att] === 'collection':
                    model[att] = {
                        "type": ["@RuntimeComponent"],
                        "readOnly": false,
                        "mandatory": false,
                        "default": [],
                        "description": att,
                        "label": att
                    };
                    break;
                default:
                    if (att.indexOf('_') !== 0) {
                        $log.invalidSchemaProperty(schema._name, att);
                    }
                    break;
            }
        }

        store.generatedModels[model._name] = model;
    }

    // models to override
    for (modelName in store.generatedModels) {
        model = store.generatedModels[modelName];
        name = model[NAME];
        modelExt = store.models[name];
        if (modelExt) {
            mergedModel = merge(modelExt, model);
            delete mergedModel._id;
            store.generatedModels[name] = mergedModel;
        }
    }

    // inheritance
    for (modelName in store.generatedModels) {
        model = store.generatedModels[modelName];
        parents = getParents(modelName);
        parents.reverse();

        var modelToMerge = JSON.parse(JSON.stringify(model));

        length = parents.length;
        for (i = 0; i < length; i++) {
            name = parents[i];
            modelParent = store.generatedModels[name];
            if (modelParent) {
                mergedModel = merge(modelParent, model);
                delete mergedModel._id;
                store.generatedModels[modelName] = mergedModel;
            }
        }

        // last inherit 
        // is the overriden model
        modelExt = store.models[modelName];
        if (modelExt) {
            mergedModel = merge(modelExt, store.generatedModels[modelName]);
            delete mergedModel._id;
            store.generatedModels[modelName] = mergedModel;
        }
    }

    // save 
    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        $db.RuntimeGeneratedModel.insert(modelDef);

        if (!modelDef._core) {
            $log.generateModel(modelName);
        }
    }
}

/*
 * Load schemas and types in memory.
 * @method loadInMemory
 * @private
 */
function loadInMemory() {
    var schemas = [],
        types = [],
        schema = null,
        model = {},
        models = [],
        type = null,
        id = '',
        name = '',
        inherit = '',
        i = 0,
        length = 0;

    // init store
    store.inheritance = {};
    store.inheritanceTree = {};
    store.schemas = {};
    store.compiledSchemas = {};
    store.models = {};
    store.generatedModels = {};
    store.states = {};
    store.type = {};

    // load schemas
    schemas = $db.RuntimeSchema.find({});

    length = schemas.length;
    for (i = 0; i < length; i++) {
        schema = schemas[i];

        name = schema[NAME];
        inherit = schema[INHERITS];

        store.schemas[name] = schema;
        if (inherit) {
            store.inheritance[name] = inherit;
        }

        if (!schema._core) {
            $log.loadSchema(name);
        }
    }

    // load models
    models = $db.RuntimeModel.find({});

    length = models.length;
    for (i = 0; i < length; i++) {
        model = models[i];
        name = model[NAME];

        store.models[name] = model;

        if (!model._core) {
            $log.loadModel(name);
        }
    }

    // load types
    types = $db.RuntimeType.find({});

    length = types.length;
    for (i = 0; i < length; i++) {
        type = types[i];
        store.type[type.name] = type;

        if (!type.core) {
            $log.loadType(type.name);
        }
    }
}


/*
 * Create the inheritance tree.
 * @method createInheritanceTree
 * @private
 */
function createInheritanceTree() {
    var name = '',
        c3linerization = [],
        ancestors = [];

    /*
     * Check if we have finisehd to linerize.
     * @param {Array} elts array of elts
     * @return {Boolean} true if all the arrays are empty
     * @private
     */
    function _isEmpty(elts) {
        var i = 0,
            length = 0,
            result = true;

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].length) {
                result = false;
            }
        }
        return result;
    }

    /*
     * Remove an elt from all the arrays.
     * @param {String} elt element to remove
     * @param {Array} elts array of elts
     * @private
     */
    function _removeCandidate(elt, elts) {
        var i = 0,
            length = 0,
            arr = [];

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].indexOf(elt) === 0) {
                arr = elts[i];
                arr.reverse();
                arr.pop();
                arr.reverse();
                elts[i] = arr;
            }
        }
    }

    /*
     * Check the element is a good candidate.
     * @param {String} elt element to remove
     * @param {Array} elts array of elts
     * @return {Boolean} true if the element is a good candidate.
     * @private
     */
    function _isCandidate(elt, elts) {
        var result = true,
            i = 0,
            length = 0;

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (elts[i].indexOf(elt) > 0) {
                result = false;
            }
        }

        return result;
    }

    /*
     * Find a candidate and return it.
     * @param {Array} elts array of elts
     * @return {Array} array containing the candidate
     * @private
     */
    function _findCandidate(elts) {
        var i = 0,
            length = 0,
            result = [];

        length = elts.length;
        for (i = 0; i < length; i++) {
            if (_isCandidate(elts[i][0], elts)) {
                result.push(elts[i][0]);
                _removeCandidate(elts[i][0], elts);
                break;
            }
        }
        return result;
    }

    /*
     * Merge the arrays.
     * @param {Array} elts array of elts
     * @return {Array} list of candidates returned by the merge
     * @private
     */
    function _merge(elts) {
        var result = [],
            candidates = [];

        candidates = _findCandidate(elts);
        while (candidates[0] !== undefined) {
            result = result.concat(candidates);
            candidates = _findCandidate(elts);
        }

        if (!_isEmpty(elts)) {
            $log.cyclicDependency();
        }
        return result;
    }

    /*
     * Start the linerieation from an element.
     * @param {String} name name of the element
     * @return {Array} list of candidates
     * @private
     */
    function _linerize(name) {
        var result = [],
            parents = [],
            i = 0,
            length = 0;

        /*
         * Check if there is a cyclic dependency. 
         * @param {String} name
         * @param {String} item
         * @return {Boolean} true if there is a cyclic dependency
         * @private 
         */
        function _checkCyclicDep(name, item) {
            var isCyclicDeb = false;

            if (Array.isArray(store.inheritance[item]) && store.inheritance[item].indexOf(name) !== -1) {
                $log.cyclicDependency(name);
                isCyclicDeb = true;
            }
            return isCyclicDeb;
        }

        if (Array.isArray(store.inheritance[name])) {
            parents = store.inheritance[name].slice();
        } else {
            $log.missingSchema(name);
        }

        length = parents.length;
        for (i = 0; i < length; i++) {
            if (_checkCyclicDep(name, parents[i])) {
                parents = [];
                break;
            }
        }

        if (parents.length) {
            result = [name].concat(_merge(parents.map(_linerize).concat([parents])));
        } else {
            result = [name];
        }
        return result;
    }

    for (name in store.inheritance) {
        c3linerization = _linerize(name);
        ancestors = c3linerization.reverse();
        ancestors.pop();
        if (ancestors.length) {
            store.inheritanceTree[name] = ancestors;
        }
    }
}


/*
 * Extend a schema with the properties of its parent.
 * @method extend
 * @param {String} name name of the schema to extend
 * @return {JSON} object extended with the properties of its parent
 * @private
 */
function extend(name) {
    var sonExtend = {},
        son = store.schemas[name],
        ancestors = store.inheritanceTree[name],
        length = 0,
        i = 0,
        ancestor = null,
        prop = '';

    if (ancestors) {
        length = ancestors.length;
        ancestors.reverse();
    }
    for (i = 0; i < length; i++) {
        ancestor = store.schemas[ancestors[i]];
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
 * @method compileSchemas
 * @private
 */
function compileSchemas() {
    var name = '';
    for (name in store.schemas) {
        if (!store.schemas[name]._core) {
            $log.compileSchema(name);
        }

        store.compiledSchemas[name] = extend(name);
    }
}


/*
 * Test if all the models are compliants with their schemas.
 * @method checkModels
 * @private
 */
function checkModels() {
    var name = '',
        classDef = null,
        schema = '';

    for (name in store.generatedModels) {
        classDef = store.generatedModels[name];
        if (classDef) {
            schema = store.compiledSchemas[name];
            if (schema) {
                if (!classDef._core) {
                    $log.checkModel(name);
                }
                checkImp(classDef, schema);
            } else {
                $log.missingImplementation(name);
            }
        }
    }
}


/*
 * Get all the states of a schema.
 * @method getStates
 * @private
 */
function getStates() {
    var name = '',
        schema = null,
        type = '',
        states = [],
        attribute = '';

    for (name in store.compiledSchemas) {
        states = [];
        schema = store.compiledSchemas[name];
        if (schema) {
            for (attribute in schema) {
                type = schema[attribute];
                if (attribute.indexOf('_') !== 0 && internalTypes.indexOf(type) !== -1) {
                    states.push(attribute);
                }
            }
        }
        store.states[name] = states;
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
            property !== DESCRIPTION &&
            property !== INHERITS &&
            property !== CLASS &&
            property !== CORE) {
            if (typeof classDef[property] !== 'undefined') {
                value = classDef[property];
                if (!checkSchema(value, classImp[property])) {
                    $log.invalidTypeImp(property, classDef[NAME]);
                }
            } else {
                $log.missingPropertyImp(property, classDef[NAME]);
            }
        }
    }
    // check if all properties are there
    for (property in classDef) {
        if (property !== ID &&
            property !== NAME &&
            property !== DESCRIPTION &&
            property !== INHERITS &&
            property !== CLASS &&
            property !== CORE) {
            if (typeof classImp[property] === 'undefined') {
                $log.unknownPropertyImp(property, classDef[NAME]);
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
    $db.collection('RuntimeLogger');
    $db.collection('RuntimeSchema');
    $db.collection('RuntimeModel');
    $db.collection('RuntimeGeneratedModel');
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

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        if (typeof $db[modelDef[NAME]] === 'undefined' &&
            modelDef[CLASS] !== false) {
            $db.collection(modelDef[NAME]);

            if (!modelDef._core) {
                $log.createCollection(modelDef[NAME]);
            }
        }
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

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        if (modelDef[CLASS] !== false) {
            $component.create({
                "model": modelName
            });
            if (!modelDef._core) {
                $log.createClass(modelName);
            }
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
        name = '';

    for (modelName in store.generatedModels) {
        modelDef = store.generatedModels[modelName];
        name = modelDef[NAME] + 'Info';

        if (
            modelDef[CLASS] !== false &&
            inheritFrom(modelDef[NAME], 'RuntimeComponent')
        ) {
            if (!$component.get(name)) {
                $db.RuntimeClassInfo.insert({
                    "_id": name,
                    "metamodel": store.compiledSchemas[modelName],
                    "model": modelDef
                });
            } else {
                $db.RuntimeClassInfo.update({
                    "_id": name
                }, {
                        "_id": name,
                        "metamodel": store.compiledSchemas[modelName],
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
 * @method getRealType
 * @param {type} value
 * @return {String} type of the value
 * @private
 */
function getRealType(value) {
    var type = '';

    if (Array.isArray(value)) {
        type = 'array';
    } else {
        type = typeof value;
    }
    if (value === 'any') {
        type = 'any';
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
        case 'any':
            result = true;
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
        componentSchema = store.generatedModels[id],
        attributeType = '';

    if (componentSchema && componentSchema[NAME]) {
        componentSchema = store.compiledSchemas[componentSchema[NAME]];
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
 * @param {Boolean} merge also private properties
 * @return {Object} merged schema
 */
function merge(source, target, all) {
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
    var id = null,
        result = [],
        schema = null,
        name = '',
        mergedSchema = {},
        schemas = [];

    schema = JSON.parse(JSON.stringify(importedSchema));
    name = schema[NAME];

    if (typeof schema[ID] === 'undefined') {
        schema[ID] = $helper.generateId();
    }
    if (typeof schema[INHERITS] === 'undefined') {
        schema[INHERITS] = ['RuntimeComponent'];
    }

    // check if schema is compliant with the meta meta model
    if (isValidObject(schema, store.metadef.schema, false)) {
        schemas = $db.RuntimeSchema.find({ '_name': name });
        if (schemas.length) {
            mergedSchema = merge(schema, schemas[0]);
            delete mergedSchema._id;
            $db.RuntimeSchema.update({ '_name': name }, mergedSchema);
            id = schemas[0]._id;
        } else {
            result = $db.RuntimeSchema.insert(schema);
            id = result[0];
        }
    } else {
        $log.invalidSchema(schema[NAME]);
    }

    return id;
}


/*
 * Add a new model.
 * @method model
 * @param {JSON} importedModel model to add
 */
function model(importedModel) {
    var model = null,
        id = null,
        result = [],
        inherit = '',
        name = '',
        mergedModel = {},
        models = [];

    model = JSON.parse(JSON.stringify(importedModel));
    name = model[NAME];

    if (typeof model[ID] === 'undefined') {
        model[ID] = $helper.generateId();
    }

    // check if model is compliant with the meta meta model
    if (isValidObject(model, store.metadef.model, false)) {
        models = $db.RuntimeModel.find({ '_name': name });
        if (models.length) {
            mergedModel = merge(model, models[0]);
            delete mergedModel._id;
            $db.RuntimeModel.update({ '_name': name }, mergedModel);
            id = models[0]._id;
        } else {
            result = $db.RuntimeModel.insert(model);
            id = result[0];
        }
    } else {
        $log.invalidModel(model[NAME]);
    }

    return id;
}

/*
 * Add a new type.
 * @method type
 * @param {JSON} importedType type to add
 */
function type(importedType) {
    var id = null,
        result = [],
        name = importedType.name;

    // check if type is compliant with the meta meta model
    if (isValidObject(importedType, store.metadef.type)) {
        result = $db.RuntimeType.insert(importedType);
        id = result[0];
    } else {
        $log.invalidTypeDefinition(name);
    }

    return id;
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
                "mandatory": false,
                "default": ["RuntimeComponent"]
            },
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            },
            "_description": {
                "type": "string",
                "mandatory": false
            }
        },
        model: {
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
            "_class": {
                "type": "boolean",
                "mandatory": false
            },
            "_core": {
                "type": "boolean",
                "mandatory": false
            },
            "_description": {
                "type": "string",
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
            },
            "_description": {
                "type": "string",
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
        inheritance: {},
        inheritanceTree: {},
        schemas: {},
        compiledSchemas: {},
        models: {},
        generatedModels: {},
        states: {},
        type: {}
    };
}


/*
 * Create the metamodel.
 * @method create
 */
function create() {
    $log.modelCreationBegin();
    loadInMemory();
    createInheritanceTree();
    compileSchemas();
    generateModels();
    checkModels();
    getStates();
    createDbStructure();
    createClass();
    createClassInfo();
    $log.modelCreationEnd();
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
 * Check if an attribute of the schema is a structure.
 * @method isStructure
 * @param {String} name name of the propertys
 * @param {String} id component id
 * @return {Boolean} true if the property is a structure
 */
function isStructure(name, id) {
    var result = false,
        model = store.generatedModels[id],
        attributeType = '',
        type = '';

    if (model[name]) {
        type = store.type[model[name].type];
    }

    if (type && type.schema) {
        result = true;
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
        componentSchema = store.generatedModels[id],
        state = {};

    if (componentSchema && componentSchema[NAME]) {
        componentSchema = store.generatedModels[componentSchema[NAME]];
    }
    state = store.states[componentSchema[NAME]];

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


    function _isValidCustomType(value, typeName) {
        var typeDef = store.type[typeName],
            result = true;

        if (Array.isArray(typeDef.value) && typeDef.value.indexOf(value) === -1) {
            result = false;
        }

        if (result === false) {
            $log.invalidEnumValue(value, typeName);
        }
        return result;
    }

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

        realType = getRealType(typeName);
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
        return isValid;
    }

    if (hasType(typeName, 'string')) {
        switch (true) {
            case isCustomType(typeName):
                result = checkCustomSchema(value, typeName);

                if (!result) {
                    $log.invalidEnumType(value, typeName, store.type[typeName].type);
                }

                if (result) {
                    result = _isValidCustomType(value, typeName);
                }
                break;
            case isReference(typeName):
                result = _checkReference(value, typeName);
                break;
            default:
                result = _isValidType(value, typeName);
                break;
        }
    } else {
        result = false;
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
                    // TODO maybe have a more strict validation than just a type checking
                } else {
                    isValid = hasType(field, typeRef);
                }
            }
        }
        if (!isValid) {
            $log.invalidPropertyType(fieldName, typeRef, field);
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

        realType = getRealType(typeSchema);
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

    if (hasType(object, 'object')) {
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
            if (!result) {
                break;
            }
        }

        // mandatory
        for (fieldName in schema) {
            field = schema[fieldName];
            mandatory = field.mandatory;
            if (mandatory === true && (hasType(object[fieldName], 'undefined') && object[fieldName] !== undefined)) {
                $log.missingProperty(fieldName);
                result = false;
                break;
            }
        }
    } else {
        result = false;
        $log.invalidPropertyFormat(object);
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
                //if (getClassName(comp) !== typeRef) { uncomment this line for a strict mode
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

        realType = getRealType(typeSchema);
        switch (realType) {
            case 'any':
                break;
            case 'string':
                if (isCustomType(realType)) {
                    isValid = isValidObject(field, typeSchema);
                } else {
                    if (typeSchema === 'array') {
                        if (getRealType(field) !== 'array') {
                            $log.invalidPropertyType(fieldName, typeSchema, field);
                            isValid = false;
                            break;
                        }
                    } else {
                        if (getRealType(field) !== typeSchema) {
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
                                if (getRealType(field[i]) !== typeArray) {
                                    $log.invalidPropertyType(field[i], typeArray, field[i]);
                                    isValid = false;
                                    break;
                                }
                            } else {
                                if (getRealType(field[i]) === 'string') {
                                    // Case of an import of a system
                                    if ($component.get(field[i])) {
                                        if (getClassName($component.get(field[i])) !== getReference(typeArray)) {
                                            $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName(field[i]));
                                            isValid = false;
                                            break;
                                        }
                                    } else {
                                        $log.canNotYetValidate(field[i], getReference(typeArray));
                                    }
                                } else {
                                    if (!inheritFrom(getClassName(field[i]), getReference(typeArray))) {
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
 * @method getSchema
 * @param {String} name of the schema
 * @return {Object} the schema
 */
function getSchema(name) {
    var result = null;
    if (store.compiledSchemas[name]) {
        result = store.compiledSchemas[name];
    }
    return result;
}


/*
 * Get a model.
 * @method getModel
 * @param {String} name of the model
 * @return {Object} the model
 */
function getModel(name) {
    var result = null;
    if (store.generatedModels[name]) {
        result = store.generatedModels[name];
    }
    return result;
}


/*
 * Get a type.
 * @method getType
 * @param {String} name of the type
 * @return {Object} the type
 */
function getType(name) {
    var result = null;
    if (store.type[name] && store.type[name]) {
        result = JSON.parse(JSON.stringify(store.type[name]));
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
 * Get parents of a schema if any.
 * @method get
 * @param {String} id id of the schema
 * @return {Array} id id of the parents
 */
function getParents(id) {
    var result = [];

    if (!store.inheritanceTree[id]) {
        result = [];
    } else {
        result = store.inheritanceTree[id].slice();
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
 * Add a new model.
 * @method model
 * @param {JSON} importedModel a mode to add
 */
exports.model = model;


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
 * @method getSchema
 * @param {String} name name of the schema
 * @return {Object} the schema
 */
exports.getSchema = getSchema;


/**
 * Get a model.
 * @method getModel
 * @param {String} name name of the model
 * @return {Object} the model
 */
exports.getModel = getModel;


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


/**
 * Check if an attribute of the schema is a structure.
 * @method isStructure
 * @param {String} name name of the propertys
 * @param {String} id component id
 * @return {Boolean} true if the property is a structure
 */
exports.isStructure = isStructure;


/**
 * Get a type.
 * @method getType
 * @param {String} name of the type
 * @return {Object} the type
 */
exports.getType = getType;
},{"./component.js":3,"./db.js":4,"./helper.js":5,"./log.js":6,"./workflow.js":10}],8:[function(require,module,exports){
/*
 * Runtime
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
 * The System Runtime Environment
 * https://system-runtime.github.io
 * @ecarriou
 * 
 * Copyright 2014-2016 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

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

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

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

    method = $metamodel.getModel(id)[methodName];
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

    if ($metamodel.getModel(id)) {
        resultType = $metamodel.getModel(id)[methodName].result;
    } else {
        $log.unknownModel(id);
    }

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

    if ($metamodel.getModel(id)) {
        method = $metamodel.getModel(id)[methodName];
    } else {
        $log.unknownModel(id);
    }

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
        switch (true) {
            case returnType === 'any':
                break;
            case returnType === 'array':
                if (!Array.isArray(methodResult)) {
                    result = false;
                    $log.invalidResultType(component.id(), methodName, returnType, null);
                }
                break;
            default:
                if (typeof methodResult !== returnType) {
                    result = false;
                    $log.invalidResultType(component.id(), methodName, returnType, typeof methodResult);
                }
                break;
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
            injectedParams.push($log);
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
            $log.actionInvokeError(state, component.id(), e.message);
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
            paramsType = ['number', $metamodel.getModel(componentClassName)[methodName].type[0], 'string'];
            paramsNumber = [3, 3];
            break;
        case isProperty:
            paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
            paramsNumber = [1, 1];
            break;
        case isLink:
            paramsType = [$metamodel.getModel(componentClassName)[methodName].type];
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
    
    if (length < paramsNumber[0] || paramsNumber[1] < length) {
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

    exports.state = function() {
    };

    if (params.error) {
        if (params.message) {
            throw new RuntimeError('runtime has been stopped because ' + params.message);
        } else {
            throw new RuntimeError('runtime has been stopped because of an unknown error');
        }
    } else {
        if (params.message) {
            console.error('runtime: runtime has been stopped because ' + params.message);
        } else {
            console.error('runtime: runtime has been stopped');
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbjZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzV0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1dEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFJ1bnRpbWVcbiAqIFRoZSBTeXN0ZW0gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3lzdGVtXG4gKiBAY2xhc3MgcnVudGltZS1zeXN0ZW1cbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qIFB1YmxpYyBwcm9wZXJ0aWVzICovXG5cblxuLypcbiAqIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7UnVudGltZVN5c3RlbX0gc3lzdGVtXG4gKi9cbnZhciBzeXN0ZW0gPSB7XG4gICAgXCJtb2RlbHNcIjoge1xuICAgICAgICBcIjEzOGE4MWZhMWYxNjQzNVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzOGE4MWZhMWYxNjQzNVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVBZG1pblwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IHt9LFxuICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjEzNWM3MTA3ODgxMGFmMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzNWM3MTA3ODgxMGFmMlwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjcmVhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZU1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVsZXRlTW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVCZWhhdmlvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlbGV0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzZW5kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxZjQxNDE2NzE1MTRjMmNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjQxNDE2NzE1MTRjMmNcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJrZXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsZWFyXCI6IHt9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2MxMDViMzFhMTYwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2MxMDViMzFhMTYwXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJsb2FkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjE1OWM1MTgyNmYxZDg5ZlwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUJlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTljNTE4MjZmMWQ4OWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIjFkZDVhMWM4Y2YxOGM4NlwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxpbmtcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxZGQ1YTFjOGNmMThjODZcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyMzc1MWNiNTkxZGUyNlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMzc1MWNiNTkxZGUyNlwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYW5kbGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInVzZUNvcmVBUElcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpc0NvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9mZlwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvcklkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTEwMTYxMTgzZjFlZmM0XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudElkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhdHRyaWJ1dGVWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNsYXNzSWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTAxNjExODNmMWVmYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE1NjY5MTBkMGIxMTg0Y1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibG9nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJ3YXJuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlYnVnXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2FyblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTY2OTEwZDBiMTE4NGNcIlxuICAgICAgICB9LFxuICAgICAgICBcIjFlMjdhMWQ2MzAxOWU4OFwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlMjdhMWQ2MzAxOWU4OFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTY1ZWIxYzM4NDExOWE2XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYW55XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2NWViMWMzODQxMTlhNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY5MDMxOTQ1ZDEyNTkyXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY5MDMxOTQ1ZDEyNTkyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTJiYTE2YzJiMTA5MzVcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiMC4wLjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibWFpblwiOiB7fSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTEyYmExNmMyYjEwOTM1XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgXCIxMDM3NDE4MDU4MWE0MWZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDM3NDE4MDU4MWE0MWZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDRhZDFmNDg1MTgzNzZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDRhZDFmNDg1MTgzNzZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwibG9hZFN5c3RlbVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlTW9kZWxcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZVR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiZGVsZXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImNyZWF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJkZWxldGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VuZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmZhODE4MWNlMTI3YTBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmZhODE4MWNlMTI3YTBcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0b3JlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZ2V0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInNldFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2xlYXJcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmUyMTFkNGNkMTIwYTZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmUyMTFkNGNkMTIwYTZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcImxvYWRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE2ZDE1MTcyMzExOTI0ZlwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUJlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2ZDE1MTcyMzExOTI0ZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJhY2ExOTBjOTE0YWVhXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRob2RcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImxpbmtcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibGlua3NcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJhY2ExOTBjOTE0YWVhXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTFkZjExZTJiMTlmZGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTFkZjExZTJiMTlmZGVcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJvZmZcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluaXRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTk1NTcxZDNhOTFjNWQ2XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25zXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluc2VydFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInJlbW92ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5NTU3MWQzYTkxYzVkNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWIwOTMxMTY0MTEzZmQyXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImxldmVsXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVidWdcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5mb1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ3YXJuXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiMDkzMTE2NDExM2ZkMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU2NjkxYjczZjEwNzUyXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmcm9tXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE1NjY5MWI3M2YxMDc1MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWM5NjkxZThiZjFmYjQ3XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjOTY5MWU4YmYxZmI0N1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTZjMmIxMjc5ZTFiMmY1XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW10sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInBhcmFtZXRlcnNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxNmMyYjEyNzllMWIyZjVcIlxuICAgICAgICB9LFxuICAgICAgICBcIjFjY2VkMTJlMDIxODNhOVwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN5c3RlbVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibW9kZWxzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3luY1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtYWluXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInJlYWR5XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNjZWQxMmUwMjE4M2E5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjc3NcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3NzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXJyb3JQYXJhbVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJlcnJvclBhcmFtXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJodG1sXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImh0bWxcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJqYXZhc2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJqc29uXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImpzb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImxpbmtcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImxvZ1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJsb2dcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgXCJkZWJ1Z1wiLFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgIFwid2FyblwiLFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFtZXRlclwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbWV0ZXJcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICBcIjFjMDBjMTA3ZTAxYzliM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDBjMTA3ZTAxYzliM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gICAgdmFyIFJ1bnRpbWVDaGFubmVsID0gbnVsbCxcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsID0gbnVsbDtcXG5cXG4gICAgaWYgKCF0aGlzLnJlcXVpcmUoJ2NoYW5uZWwtYWRtaW4nKSkge1xcbiAgICAgICAgUnVudGltZUNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ1J1bnRpbWVDaGFubmVsJyk7XFxuICAgICAgICBydW50aW1lQ2hhbm5lbCA9IG5ldyBSdW50aW1lQ2hhbm5lbCh7XFxuICAgICAgICAgICAgJ19pZCc6ICdjaGFubmVsLWFkbWluJyxcXG4gICAgICAgICAgICAnX2NvcmUnOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3NlbmQnLCBmdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coKS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgJyonKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gc2NoZW1hIGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVTY2hlbWEnLCBmdW5jdGlvbiBjcmVhdGVTY2hlbWEoaWQsIHNjaGVtYSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3VwZGF0ZVNjaGVtYScsIGZ1bmN0aW9uIHVwZGF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVTY2hlbWEnLCBmdW5jdGlvbiBkZWxldGVTY2hlbWEoaWQpIHtcXG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gJGRiLlJ1bnRpbWVTY2hlbWEuZmluZCh7ICdfaWQnOiBpZCB9KSxcXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lID0gJycsXFxuICAgICAgICAgICAgICAgIG1vZGVsSWQgPSAnJztcXG5cXG4gICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWUgPSBzZWFyY2hbMF0uX25hbWU7XFxuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lU2NoZW1hLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG5cXG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHsgJ19uYW1lJzogbW9kZWxOYW1lIH0pO1xcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxJZCA9IHNlYXJjaFswXS5faWQ7XFxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1vZGVsLnJlbW92ZSh7ICdfaWQnOiBtb2RlbElkIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVGcm9tTWVtb3J5KG1vZGVsTmFtZSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiLlJ1bnRpbWVHZW5lcmF0ZWRNb2RlbC5maW5kKHsgJ19uYW1lJzogbW9kZWxOYW1lIH0pO1xcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxJZCA9IHNlYXJjaFswXS5faWQ7XFxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLnJlbW92ZSh7ICdfaWQnOiBtb2RlbElkIH0pO1xcbiAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC5yZW1vdmVGcm9tTWVtb3J5KG1vZGVsTmFtZSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIG1vZGVsIGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVNb2RlbCcsIGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykubW9kZWwobW9kZWwpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCd1cGRhdGVNb2RlbCcsIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLm1vZGVsKG1vZGVsKTtcXG4gICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2RlbGV0ZU1vZGVsJywgZnVuY3Rpb24gZGVsZXRlTW9kZWwoaWQpIHtcXG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHsgJ19pZCc6IGlkIH0pLFxcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWUgPSAnJyxcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9ICcnO1xcblxcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9IHNlYXJjaFswXS5fbmFtZTtcXG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzZWFyY2ggPSAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLmZpbmQoeyAnX25hbWUnOiBtb2RlbE5hbWUgfSk7XFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9IHNlYXJjaFswXS5faWQ7XFxuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwucmVtb3ZlKHsgJ19pZCc6IG1vZGVsSWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIHR5cGUgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZVR5cGUnLCBmdW5jdGlvbiBjcmVhdGVUeXBlKGlkLCB0eXBlKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS50eXBlKHR5cGUpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCd1cGRhdGVUeXBlJywgZnVuY3Rpb24gdXBkYXRlVHlwZShpZCwgdHlwZSkge1xcbiAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnR5cGUodHlwZSk7XFxuICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdkZWxldGVUeXBlJywgZnVuY3Rpb24gZGVsZXRlVHlwZShpZCkge1xcbiAgICAgICAgICAgICRkYi5SdW50aW1lVHlwZS5yZW1vdmUoeyAnbmFtZSc6IGlkIH0pO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gY29tcG9uZW50IGNoYW5nZSBldmVudHNcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdjcmVhdGVDb21wb25lbnQnLCBmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQobW9kZWwsIGNvbXBvbmVudCkge1xcbiAgICAgICAgICAgICRkYlttb2RlbF0uaW5zZXJ0KGNvbXBvbmVudCk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ3VwZGF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbiwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnVwZGF0ZSh7J19pZCc6IGlkfSwgY29tcG9uZW50KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbignZGVsZXRlQ29tcG9uZW50JywgZnVuY3Rpb24gZGVsZXRlQ29tcG9uZW50KGlkLCBjb2xsZWN0aW9uKSB7XFxuICAgICAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnJlbW92ZSh7J19pZCc6IGlkfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gYmVoYXZpb3IgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgcnVudGltZUNoYW5uZWwub24oJ2NyZWF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gY3JlYXRlQmVoYXZpb3IoY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoY29tcG9uZW50KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbigndXBkYXRlQmVoYXZpb3InLCBmdW5jdGlvbiB1cGRhdGVCZWhhdmlvcihpZCwgYmVoYXZpb3IpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoaWQpLmFjdGlvbihiZWhhdmlvci5hY3Rpb24pO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcbiAgICAgICAgXFxuICAgICAgICBydW50aW1lQ2hhbm5lbC5vbignZGVsZXRlQmVoYXZpb3InLCBmdW5jdGlvbiBkZWxldGVCZWhhdmlvcihpZCkge1xcbiAgICAgICAgICAgICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHsnX2lkJzogaWR9KTsgICAgICAgICAgICAgICAgICBcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcbiAgICAgXFxuICAgICAgICAvLyBTeXN0ZW0gRGVzaWduZXIgZXZlbnRcXG4gICAgICAgIHJ1bnRpbWVDaGFubmVsLm9uKCdzeW5jJywgZnVuY3Rpb24gc3luYygpIHtcXG4gICAgICAgICAgICB2YXIgZGVzaWduZXJXaW5kb3cgPSB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coKSxcXG4gICAgICAgICAgICAgICAgc3lzdGVtID0gbnVsbDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3cobnVsbCk7XFxuICAgICAgICAgICAgc3lzdGVtID0gSlNPTi5wYXJzZSh0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKCkpO1xcbiAgICAgICAgICAgIGRlc2lnbmVyV2luZG93ID0gdGhpcy5yZXF1aXJlKCdhZG1pbicpLmRlc2lnbmVyV2luZG93KGRlc2lnbmVyV2luZG93KTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB0aGlzLmxvYWRTeXN0ZW0oc3lzdGVtKTtcXG4gICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcXG4gICAgICAgIFxcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG51bGw7XFxuICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XFxuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXZlbnQpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXJXaW5kb3coZXZlbnQuc291cmNlKTtcXG4gICAgICAgICAgICAgICAgICAgICRkYi5SdW50aW1lTWVzc2FnZS5pbnNlcnQoZGF0YSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcXG4gICAgICAgIFxcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5pbmZvKCdhZG1pbiBpcyBzdGFydGVkJyk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmluZm8oJ2FkbWluIGlzIGFscmVhZHkgc3RhcnRlZCcpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjYTBmMTAyMDQxMmQ0ZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYTBmMTAyMDQxMmQ0ZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImdldFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBnZXQoa2V5KSB7XFxuICAgIHZhciByZXN1bHQgPSBudWxsO1xcbiAgICBcXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0b3JlKClba2V5XSkge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZSgpW2tleV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE2NzY0MTAwZDUxYjVmOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2NzY0MTAwZDUxYjVmOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInNldFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xcbiAgICB2YXIgc3RvcmUgPSB0aGlzLnN0b3JlKCksXFxuICAgICAgICBpdGVtID0ge307XFxuICAgIFxcbiAgICBzdG9yZVtrZXldID0gdmFsdWU7XFxuICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICBcXG4gICAgaXRlbVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xcbiAgICBcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTsgXFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMzRiNjE2YjEwMTZmNjBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMzRiNjE2YjEwMTZmNjBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjbGVhclwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjbGVhcigpIHtcXG4gICAgdGhpcy5zdG9yZSh7fSk7XFxuICAgIFxcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7IFxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2YxYTg0MzFiM2Q1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2YxYTg0MzFiM2Q1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiaW5pdFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbml0KGNvbmYpIHtcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIGluaXQgXFxuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHt9LFxcbiAgICAgICAgICAgICAgICBpID0gMCxcXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7ICAgIFxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVba2V5c1tpXV0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXlzW2ldXSk7XFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnN0b3JlKHN0b3JlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyBldmVudFxcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9LFxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLnN0b3JlKCk7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlW2Uua2V5XSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIG9ialtlLmtleV0gPSB7fTtcXG4gICAgICAgICAgICAgICAgICAgIG9ialtlLmtleV0ub2xkVmFsdWUgPSBKU09OLnBhcnNlKGUub2xkVmFsdWUpO1xcbiAgICAgICAgICAgICAgICAgICAgb2JqW2Uua2V5XS5uZXdWYWx1ZSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZChvYmopO1xcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWE0OTIxYWM3MTEyYmQ0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWE0OTIxYWM3MTEyYmQ0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcXG4gICAgdmFyIHN0b3JlID0gdGhpcy5zdG9yZSgpO1xcbiAgICBcXG4gICAgZGVsZXRlIHN0b3JlW2tleV07XFxuICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICBcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7IFxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWFhZWUxZTYzMTFmZjM5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFhZWUxZTYzMTFmZjM5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcInJ1bnRpbWVcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsb2FkXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxvYWQodXJsLCBhc3luYykge1xcbiAgICB2YXIgeGhyID0gbnVsbCxcXG4gICAgY2FsbGJhY2tMb2FkID0gbnVsbDtcXG4gICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XFxuICAgIFxcbiAgICBjYWxsYmFja0xvYWQgPSBmdW5jdGlvbiBjYWxsYmFja0xvYWQoc3lzdGVtKSB7XFxuICAgICAgICB2YXIgc3lzSWQgPSAkZGIuc3lzdGVtKHN5c3RlbSksXFxuICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpLFxcbiAgICAgICAgbmJTdWJzeXN0ZW0gPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcXG4gICAgICAgICAgICAnc3Vic3lzdGVtJzogdHJ1ZVxcbiAgICAgICAgfSk7IFxcbiAgICAgICAgaWYgKHN5cykge1xcbiAgICAgICAgICAgIHN5cy5tYWluKCk7XFxuICAgICAgICB9IFxcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoICsgMSArIG5iU3Vic3lzdGVtLmxlbmd0aCA9PT0gJGRiLlJ1bnRpbWVTeXN0ZW0uY291bnQoKSkge1xcbiAgICAgICAgICAgICRjb21wb25lbnQuZ2V0KCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgfTtcXG4gICAgXFxuICAgIGlmIChhc3luYykge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuICAgICAgICB4aHIuc2VuZChudWxsKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmNjAwMTc3M2ExODc5MVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmNjAwMTc3M2ExODc5MVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtYWluXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1haW4oKSB7XFxuICAgIHZhciBzdWJzeXN0ZW1zID0gW10sXFxuICAgICAgICBzeXN0ZW1zID0gW10sXFxuICAgICAgICBzeXN0ZW0gPSBudWxsLFxcbiAgICAgICAgc2NyaXB0cyA9IFtdLFxcbiAgICAgICAgc2NyaXB0ID0gbnVsbCxcXG4gICAgICAgIGxvZ0xldmVsID0gJ3dhcm4nLFxcbiAgICAgICAgaSA9IDAsXFxuICAgICAgICBsZW5ndGggPSAwO1xcbiAgICBcXG4gICAgc3Vic3lzdGVtcyA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgJ3N1YnN5c3RlbSc6IHRydWVcXG4gICAgfSk7XFxuICAgIHN1YnN5c3RlbXMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic3lzdGVtKSB7XFxuICAgICAgICB2YXIgc3Vic3lzdGVtSWQgPSBzdWJzeXN0ZW0uX2lkO1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKHN1YnN5c3RlbUlkKS5tYWluKCk7XFxuICAgIH0sIHRoaXMpOyBcXG4gICAgXFxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICAgICAgICBcXG4gICAgICAgIC8vIGxvZ2dlclxcbiAgICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtsb2ddJyk7XFxuICAgICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICAgICAgICBsb2dMZXZlbCA9IHNjcmlwdHNbMF0uZ2V0QXR0cmlidXRlKCdsb2cnKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKGxvZ0xldmVsKTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLy8gc3lzdGVtc1xcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBpZiAoc3lzdGVtLmdldEF0dHJpYnV0ZSgnYXN5bmMnKSA9PT0gJ2ZhbHNlJykge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ3J1bnRpbWUnKS5sb2FkKHN5c3RlbS5ocmVmLCBmYWxzZSk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykubG9hZChzeXN0ZW0uaHJlZiwgdHJ1ZSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAvLyBkZXNpZ25lclxcbiAgICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtkZXNpZ25lcl0nKTtcXG4gICAgICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnYWRtaW4nKS5zdGFydCgpO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAvLyByZWFkeSBldmVudFxcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNDE5MjE1MDQ2MTE0M2JcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNDE5MjE1MDQ2MTE0M2JcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0obmFtZSkge1xcbiAgICB2YXIgU3lzdGVtID0gbnVsbCxcXG4gICAgc3lzdGVtID0ge30sXFxuICAgIHN5c3RlbUlkID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBjb25mID0ge307XFxuICAgIFxcbiAgICBpZiAobmFtZSkge1xcbiAgICAgICAgY29uZi5tYXN0ZXIgPSB0cnVlO1xcbiAgICAgICAgY29uZi5uYW1lID0gbmFtZTtcXG4gICAgICAgIFN5c3RlbSA9IHRoaXMucmVxdWlyZSgnUnVudGltZVN5c3RlbScpO1xcbiAgICAgICAgc3lzdGVtID0gbmV3IFN5c3RlbShjb25mKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgICAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gc3lzdGVtO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNjhmYTExMDMzMThiYTlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNjhmYTExMDMzMThiYTlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICB9IFxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDsgXFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOWRiYzE0Y2VkMWE0NjlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOWRiYzE0Y2VkMWE0NjlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25zXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKCkge1xcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldOyBcXG4gICAgICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE4MzAzMTQyNDkxMGY3M1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE4MzAzMTQyNDkxMGY3M1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnQobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIFxcbiAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ2V2ZW50Jykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICB9IFxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjMDFjMWIxYzQxYzgyNVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDFjMWIxYzQxYzgyNVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50cygpIHtcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ2V2ZW50Jykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU0MDcxODhmNTFhZDM3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU0MDcxODhmNTFhZDM3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxpbmsobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIFxcbiAgICBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyMjg3MTliOTMxODkyMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMjg3MTliOTMxODkyMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibGlua3NcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGlua3MoKSB7IFxcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTMyYjFlZDdiMTFjYTRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTMyYjFlZDdiMTFjYTRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2QobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnbWV0aG9kJykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNzJjYTE4YjBlMWU0MzJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNzJjYTE4YjBlMWU0MzJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kcygpIHtcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdtZXRob2QnKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH0gXFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNhZDUxMzU2YjE0YTIxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNhZDUxMzU2YjE0YTIxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0aWVzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnRpZXMoKSB7IFxcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWMwMzMxZTQyMTE1YTgwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWMwMzMxZTQyMTE1YTgwXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAncHJvcGVydHknKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlYjY2MTU2YTYxZTUzZFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlYjY2MTU2YTYxZTUzZFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZXN0cm95KCkge1xcbiAgICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTg5YzUxMDg4YTFhYjcyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTg5YzUxMDg4YTFhYjcyXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJvZmZcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICAgIHZhciBhcmdzID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDc7IGkrKykge1xcbiAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICAgIH1cXG4gICAgXFxuICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xcbiAgICAgICAgXFxcImNvbXBvbmVudFxcXCI6IHRoaXMsIFxcbiAgICAgICAgXFxcIm1ldGhvZE5hbWVcXFwiOiBcXFwib2ZmXFxcIiwgXFxuICAgICAgICBcXFwiYXJnc1xcXCI6IGFyZ3NcXG4gICAgICAgIH0pKSB7XFxuICAgICAgICBcXG4gICAgICAgIGlmIChzdGF0ZSB8fCBiZWhhdmlvcklkKSB7XFxuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7XFxuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICAgICAgXFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLCBcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSwgXFxuICAgICAgICAgICAgICAgICAgICBcXFwic3RhdGVcXFwiOiBzdGF0ZVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9IGVsc2UgeyBcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS53YXJuKFxcXCJpbnZva2UgXFxcXCdvZmZcXFxcJyBtZXRob2Qgb2YgY29tcG9uZW50ICdcXFwiICsgdGhpcy5pZCgpICsgXFxcIicgd2l0aCBhbiBpbnZhbGlkIHN0YXRlICdcXFwiICsgc3RhdGUgKyBcXFwiJ1xcXCIpOyBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKClcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTRjNTE4NGUxMTNiZmVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTRjNTE4NGUxMTNiZmVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlcXVpcmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgICByZXR1cm4gJGNvbXBvbmVudC5nZXQoaWQpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDQ5NDFmN2FiMTVlYzhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDQ5NDFmN2FiMTVlYzhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY29sbGVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbnMoKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG4gICAgXFxuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgICAgICBpZiAoJGRiLnN0b3JlLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSAmJiBjb2xsZWN0aW9uTmFtZS5pbmRleE9mKCdSdW50aW1lJykgIT09IDApIHtcXG4gICAgICAgICAgICByZXN1bHRbY29sbGVjdGlvbk5hbWVdID0gJGRiW2NvbGxlY3Rpb25OYW1lXTtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZmZiNjFhYTQzMWZhYzhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZmZiNjFhYTQzMWZhYzhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3Vic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHtcXG4gICAgcmV0dXJuICRkYi5zdWJzeXN0ZW0ocGFyYW1zKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWM4ZTcxOGI2OTFlMDYzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWM4ZTcxOGI2OTFlMDYzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0oc3lzdGVtKSB7XFxuICAgIHJldHVybiAkZGIuc3lzdGVtKHN5c3RlbSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjM2VjMTNjMzkxYWM0NVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjM2VjMTNjMzkxYWM0NVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVidWdcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xcbiAgICBpZiAodGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgICAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOGE5OTFkMGRmMTBiMTdcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOGE5OTFkMGRmMTBiMTdcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcXG4gICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWFmNzcxY2YxMjE5MTg3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFmNzcxY2YxMjE5MTg3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJpbmZvXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xcbiAgICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQyYTYxZDE4MjE4ZmQzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQyYTYxZDE4MjE4ZmQzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsZXZlbFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsZXZlbCh2YWwpIHtcXG4gICAgJGxvZy5sZXZlbCh2YWwpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTZkZjFiM2ZjMTBkNTJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTZkZjFiM2ZjMTBkNTJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIndhcm5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XFxuICAgIGlmICh0aGlzLmxldmVsKCkgPT09ICdpbmZvJyB8fCB0aGlzLmxldmVsKCkgPT09ICd3YXJuJyB8fCB0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgICB9IFxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTZhZjgxNzExMzE4NjA5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTZhZjgxNzExMzE4NjA5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjcmVhdGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY3JlYXRlKCkge1xcbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWZmYmExOGFmZjE4NDYxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWZmYmExOGFmZjE4NDYxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtb2RlbFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtb2RlbChtb2RlbCkge1xcbiAgICByZXR1cm4gJG1ldGFtb2RlbC5tb2RlbChtb2RlbCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlOTExMTU1YTkxYjFmZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlOTExMTU1YTkxYjFmZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHtcXG4gICAgcmV0dXJuICRtZXRhbW9kZWwuc2NoZW1hKHNjaGVtYSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkMTRmMWViZmQxODY2MlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkMTRmMWViZmQxODY2MlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiB0eXBlKHR5cGUpIHtcXG4gICAgcmV0dXJuICRtZXRhbW9kZWwudHlwZSh0eXBlKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTc4ZmExNThkYjFjODZlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTc4ZmExNThkYjFjODZlXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeW5jXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5bmMoKSB7XFxuICAgIHZhciBzeXN0ZW0gPSBKU09OLnBhcnNlKCRkYi5zeXN0ZW0oKSk7XFxuICAgIFxcbiAgICB0aGlzLnNjaGVtYXMoc3lzdGVtLnNjaGVtYXMpO1xcbiAgICB0aGlzLnR5cGVzKHN5c3RlbS50eXBlcyk7XFxuICAgIHRoaXMuYmVoYXZpb3JzKHN5c3RlbS5iZWhhdmlvcnMpO1xcbiAgICB0aGlzLmNvbXBvbmVudHMoc3lzdGVtLmNvbXBvbmVudHMpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJSdW50aW1lQWRtaW5cIjoge1xuICAgICAgICAgICAgXCJhZG1pblwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJhZG1pblwiLFxuICAgICAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlc2lnbmVyV2luZG93XCI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwic3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcInJ1bnRpbWVcIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjYuMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZURhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiZGJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVMb2dnZXJcIjoge1xuICAgICAgICAgICAgXCJsb2dnZXJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibG9nZ2VyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIm1ldGFtb2RlbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZVN5c3RlbVwiOiB7XG4gICAgICAgICAgICBcIjE4ZWQ4MWRlMzMxMjUyY1wiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCIxOGVkODFkZTMzMTI1MmNcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW0tYWRtaW5cIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjcuMFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSdW50aW1lIENvbXBvbmVudCBhZG1pbmlzdHJhdGlvbiBcIixcbiAgICAgICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFzdGVyXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIxNWRlODFkMjk1MTUzZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiMTVkZTgxZDI5NTE1M2RiXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3lzdGVtLXN0b3JhZ2VcIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjEuMFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSdW50aW1lIHN0b3JhZ2Ugc3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hc3RlclwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMTMzNDIxZDBjMzEzZDJkXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcIjEzMzQyMWQwYzMxM2QyZFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIndlYlwiLFxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMi4wXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBiZWhhdmlvcnMgZm9yIHdlYlwiLFxuICAgICAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYXN0ZXJcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwicnVudGltZVwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuNi4yXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlJ1bnRpbWVcIixcbiAgICBcIl9pZFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgIFwibWFzdGVyXCI6IGZhbHNlLFxuICAgIFwic3Vic3lzdGVtXCI6IGZhbHNlXG59O1xuXG4vKiBleHBvcnRzICAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zeXN0ZW1cbiAqIEBjbGFzcyBydW50aW1lLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG5cbi8qKlxuICogUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtSdW50aW1lU3lzdGVtfSBzeXN0ZW1cbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG4iLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBcbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEBjbGFzcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgZnVuY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNyZWF0ZWQgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uKG5hbWUsIGZ1bmMsIGNvcmUsIHVzZUNvcmVBUEkpIHtcbiAgICB2YXIgZnVuY05hbWUgPSAnJyxcbiAgICAgICAgYmVnaW5Cb2R5ID0gLTEsXG4gICAgICAgIGZ1bmNQYXJhbXMgPSAnJyxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHBhcmFtc0NsZWFuID0gW10sXG4gICAgICAgIGZ1bmNCb2R5ID0gJycsXG4gICAgICAgIGhlYWRlciA9ICcnLFxuICAgICAgICBhY3Rpb24gPSBudWxsO1xuXG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcblxuICAgIGZ1bmNOYW1lID0gaGVhZGVyLnNwbGl0KCcoJylbMF0ucmVwbGFjZSgnZnVuY3Rpb24nLCAnJykudHJpbSgpO1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIuc3BsaXQoJygnKVsxXS5yZXBsYWNlKCcpJywgJycpLnRyaW0oKTtcblxuICAgIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgcGFyYW1zQ2xlYW4ucHVzaChwYXJhbS50cmltKCkpO1xuICAgIH0pO1xuXG4gICAgZnVuY0JvZHkgPSBmdW5jLnN1YnN0cmluZyhiZWdpbkJvZHkgKyAxKTtcbiAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygwLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG5cbiAgICBmdW5jTmFtZSA9IGZ1bmNOYW1lIHx8IG5hbWU7XG5cbiAgICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgICAgICBwYXJhbXMgPSBbXTtcbiAgICB9XG4gICAgaWYgKHVzZUNvcmVBUEkpIHtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRjb21wb25lbnQnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJG1ldGFtb2RlbCcpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJHdvcmtmbG93Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRzdGF0ZScpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGxvZycpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNbMF0gIT09ICcnKSB7XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgZnVuY05hbWUgKyBcIiAoXCIgKyBwYXJhbXMuam9pbignLCcpICsgXCIpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbignXCIgKyBwYXJhbXMuam9pbihcIicsJ1wiKSArIFwiJywgYm9keSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9O1wiKShmdW5jQm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgZnVuY05hbWUgKyBcIiAoKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oYm9keSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9O1wiKShmdW5jQm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBSdW50aW1lIGRhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGlkIG9mIHRoZSBiZWhhdmlvciBjcmVhdGVkIGluIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gYWRkKGlkLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBjb3JlKSB7XG4gICAgdmFyIGJlaGF2aW9ySWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKSxcbiAgICAgICAgc3RyQWN0aW9uID0gYWN0aW9uLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAodHlwZW9mIGNvcmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvcmUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB1c2VDb3JlQVBJID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB1c2VDb3JlQVBJID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oc3RhdGUsIHN0ckFjdGlvbiwgY29yZSwgdXNlQ29yZUFQSSk7XG5cbiAgICBzdG9yZVtiZWhhdmlvcklkXSA9IGFjdGlvbjtcblxuICAgICRkYi5SdW50aW1lQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICAgICAgXCJfaWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgIFwic3RhdGVcIjogc3RhdGUsXG4gICAgICAgIFwiYWN0aW9uXCI6IHN0ckFjdGlvbixcbiAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHVzZUNvcmVBUEksXG4gICAgICAgIFwiY29yZVwiOiBjb3JlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKHBhcmFtcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuYmVoYXZpb3JJZCA9IHBhcmFtcy5iZWhhdmlvcklkIHx8ICcnO1xuICAgIHBhcmFtcy5jb21wb25lbnRJZCA9IHBhcmFtcy5jb21wb25lbnRJZCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudElkKSB7XG4gICAgICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVbcGFyYW1zLmJlaGF2aW9ySWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgICBkZWxldGUgc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoaWQsIHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBkYlJlc3VsdCA9IFtdLFxuICAgICAgICBhY3Rpb24gPSBudWxsO1xuXG4gICAgZGJSZXN1bHQgPSAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgZGJSZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoYmVoYXZpb3IpIHtcbiAgICAgICAgYWN0aW9uID0gc3RvcmVbYmVoYXZpb3IuX2lkXTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihiZWhhdmlvci5zdGF0ZSwgYmVoYXZpb3IuYWN0aW9uLCBiZWhhdmlvci5jb3JlLCBiZWhhdmlvci51c2VDb3JlQVBJKTtcbiAgICAgICAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICAgICAgICBcImFjdGlvblwiOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKlxuICogR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm4ge0JlaGF2aW9yfSB0aGUgYmVoYXZpb3JcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQGNsYXNzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBSdW50aW1lIGRhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGlkIG9mIHRoZSBiZWhhdmlvciBjcmVhdGVkIGluIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5hZGQgPSBhZGQ7XG5cblxuLyoqXG4gKiBHZXQgYSBiZWhhdmlvciBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybiB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuXG5cbi8qKlxuICogR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICovXG5leHBvcnRzLmdldEFjdGlvbnMgPSBnZXRBY3Rpb25zO1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIHN0b3JlZCBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gcmVtb3ZlRnJvbU1lbW9yeTsiLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy4gXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBSdW50aW1lLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEBjbGFzcyBydW50aW1lLWNvbXBvbmVudFxuICogQHN0YXRpYyBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkd29ya2xvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuICAgIExJTktfVFlQRSA9ICdsaW5rJyxcbiAgICBDT0xMRUNUSU9OX1RZUEUgPSAnY29sbGVjdGlvbicsXG4gICAgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbiAgICBFVkVOVF9UWVBFID0gJ2V2ZW50JyxcbiAgICBOQU1FID0gJ19uYW1lJyxcbiAgICBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgcHVzaCBhbmQgcG9wIG1ldGhvZCBvZiBBcnJheSBDbGFzcy5cbiAqIEBjbGFzcyBSdW50aW1lQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gUnVudGltZUFycmF5KGNvbmYpIHtcbiAgICB2YXIgYXJyID0gW10sXG4gICAgICAgIGFyckRiID0gW10sXG4gICAgICAgIHR5cGUgPSAnJyxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICAgIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICAgIGNvbmYgPSBjb25mIHx8IHt9O1xuICAgIHR5cGUgPSBjb25mLnR5cGUgfHwgJyc7XG4gICAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICAgIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICAgIGFyckRiID0gY29uZi5hcnIgfHwgW107XG5cbiAgICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlzUmVhZE9ubHkgPSBjb25mLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIC8vIGluaXRcbiAgICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBpZiAodHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogT3ZlcnJpZGUgcHVzaCBtZXRob2QuXG4gICAgICogQHB1c2hcbiAgICAgKiBAcGFyYW0ge1J1bnRpbWVDb21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIGFyci5wdXNoID0gZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICAgICAgdmFyIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcblxuICAgICAgICAgICAgaXNDbGFzcyA9IHR5cGUuaW5kZXhPZignQCcpICE9PSAtMTtcblxuICAgICAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUucmVwbGFjZSgnQCcsICcnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwuaWQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW2FyckRiLmxlbmd0aCwgdmFsLmlkKCksICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgdmFsLmlkKCksIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFthcnJEYi5sZW5ndGgsIHZhbCwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyRGIubGVuZ3RoO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBwb3AgbWV0aG9kLlxuICAgICAqIEBwb3BcbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICAgKi9cbiAgICBhcnIucG9wID0gZnVuY3Rpb24gcG9wKCkge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgdmFsID0gbnVsbCxcbiAgICAgICAgICAgIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGlmIChhcnJEYi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBhcnJEYi5wb3AoKTtcblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFthcnJEYi5sZW5ndGgsIHZhbCwgJ3JlbW92ZSddXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpc0NsYXNzID0gdHlwZS5pbmRleE9mKCdAJykgIT09IC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc3RvcmVbdmFsXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qIE92ZXJyaWRlIHNvcnQgbWV0aG9kLlxuICAgICAqIEBzb3J0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3QgdGhlIHNvcnQgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQXJyYXl9IHRoZSBjdXJyZW50IFJ1bnRpbWVBcnJheVxuICAgICAqL1xuICAgIGFyci5zb3J0ID0gZnVuY3Rpb24gc29ydChmdW5jdCkge1xuICAgICAgICBhcnJEYi5zb3J0KGZ1bmN0KTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFycjtcbn1cblxuLyoganNoaW50IC1XMDU4ICovXG5SdW50aW1lQXJyYXkucHJvdG90eXBlID0gbmV3IEFycmF5O1xuLyoganNoaW50ICtXMDU4ICovXG5cblxuLypcbiAqIEdldCBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzLlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG5hbWVzIG9mIG1ldGhvZCBwYXJhbWV0ZXJzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgcGFyYW1zID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgcHJvcGVydHkgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0UHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBMSU5LX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IENPTExFQ1RJT05fVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgcHJvcE5hbWVzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHNjaGVtYSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVByb3BlcnRpZXMocHJvcGVydHlOYW1lLCBtb2RlbCkge1xuICAgIHZhciBtb2RlbERlZiA9IG51bGwsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBzdHJ1Y3R1cmUgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgcHJvcE5hbWVzID0gW107XG5cbiAgICBtb2RlbERlZiA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwobW9kZWwpO1xuICAgIHR5cGUgPSBtb2RlbERlZltwcm9wZXJ0eU5hbWVdLnR5cGU7XG4gICAgc3RydWN0dXJlID0gJG1ldGFtb2RlbC5nZXRUeXBlKHR5cGUpO1xuXG4gICAgaWYgKHN0cnVjdHVyZS5zY2hlbWEpIHtcbiAgICAgICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc3RydWN0dXJlLnNjaGVtYSk7XG4gICAgICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgZXZlbnQgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0RXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBldmVudHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRFdmVudHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmUuXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgICAgICBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXSxcbiAgICAgICAgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKSxcbiAgICAgICAgbGVuZ3RoID0gc3ViUGF0aC5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgcmVzdWx0ID0gZG9jO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIHRvIHNldCBcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCwgdmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgZG9jID0gJGRiLnN0b3JlW21vZGVsXVtpZF0sXG4gICAgICAgIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyksXG4gICAgICAgIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIHJlc3VsdCA9IGRvYztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICAgIH1cbiAgICByZXN1bHRbc3ViUGF0aFtpXV0gPSB2YWx1ZTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICB2YXIgYm9keSA9IHt9O1xuXG4gICAgICAgIGlmIChjb25maWcuY29uc3RydWN0b3IubmFtZSAhPT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyhjb25maWcsIGNsYXNzSWQpO1xuICAgICAgICAgICAgY29uZmlnID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCksIHRydWUsIHRydWUpKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVbY29uZmlnLl9pZF0gPSB0aGlzO1xuXG4gICAgICAgIC8vIGlkXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuX2lkO1xuICAgICAgICB9O1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgdGhpcy5pZCA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gaWQgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cblxuICAgICAgICAvLyBjbGFzc0luZm9cbiAgICAgICAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ1J1bnRpbWVDb21wb25lbnQnKSkge1xuICAgICAgICAgICAgY29uZmlnLmNsYXNzSW5mbyA9IGNsYXNzSWQgKyAnSW5mbyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoY2xhc3NJZCwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgY2xhc3NJZCArIFwiIChjb25maWcpIHsgYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzSWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5pZCA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gaWQgKHByb3AsIHZhbCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHByb3AsIHZhbCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQGV4YW1wbGVcbiAqIGxhdXJlLmFnZSgpOyAvLyBnZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogbGF1cmUuYWdlKDIyKTsgLy8gc2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIEBtZXRob2QgYWRkUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkUHJvcGVydGllcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGJvZHkgPSB7fSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlID0gJycsXG4gICAgICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkpIHsgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVBcnIgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVBcnIgPSBuZXcgUnVudGltZUFycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5TmFtZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBwcm9wZXJ0eVJlYWRPbmx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NJZFwiOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBwcm9wZXJ0eVR5cGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcnJcIjogJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydW50aW1lQXJyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxWYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGVbMF0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsdWUuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlUeXBlWzBdLnJlcGxhY2UoJ0AnLCAnJykpICYmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IHRoaXMuaWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHJlYWxWYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFtwb3NpdGlvbiwgcmVhbFZhbCwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHBvc2l0aW9uLHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgcG9zaXRpb24sIHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXQoY29tcG9uZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbmV3IERhdGUoY29tcG9uZW50W3Byb3BlcnR5TmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNTdHJ1Y3R1cmUocHJvcGVydHlOYW1lLCBjbGFzc0lkKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZSgnJywgcHJvcGVydHlOYW1lLCBtb2RlbCwgdGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKHByb3BlcnR5TmFtZSwgdGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7IFwiX2lkXCI6IHRoaXMuaWQoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgUnVudGltZUJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiICh2YWx1ZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIHN0cnVjdHVyZSBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhcmVudCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gb2JqZWN0IHRoYXQgY29pbnRhaW5zIG1ldGhvZHMgdG8gYWNjZXNzIHRoZSBzdHJ1Y3R1cmUgXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRTdHJ1Y3R1cmUocGF0aCwgbmFtZSwgbW9kZWwsIGlkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzKG5hbWUsIG1vZGVsKSxcbiAgICAgICAgc3J1Y3R1cmUgPSB7fTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9ICcnLFxuICAgICAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9ICcnLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBuYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bGxQYXRoID0gcGFyZW50UGF0aCArICcuJyArIHByb3BlcnR5TmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0KGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gYWRkU3RydWN0dXJlKHBhcmVudFBhdGgsIHByb3BlcnR5TmFtZSwgbW9kZWwsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChmdWxsUGF0aCwgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7IFwiX2lkXCI6IGlkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBSdW50aW1lQmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWwgPT09ICdSdW50aW1lQmVoYXZpb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgZnVsbFBhdGgsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICBzcnVjdHVyZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiICh2YWx1ZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9KTtcblxuICAgIHJldHVybiBzcnVjdHVyZTtcbn1cblxuLypcbiAqIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBtZXRob2RzID0gZ2V0TWV0aG9kcyhtb2RlbCk7XG5cbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gbWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpLFxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogbWV0aG9kTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgZXZlbnRzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGFkZEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBldmVudHMgPSBnZXRFdmVudHMobW9kZWwpO1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIGV2ZW50KG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpLFxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtSWQgPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gLTEsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUNoYW5uZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbUlkID0gc3lzdGVtc1swXS5faWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZnJvbSA9IHN5c3RlbUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXZlbnQgPSBtZXRob2ROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1lc3NhZ2UuaW5zZXJ0KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwic2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50XCI6IG1lc3NhZ2UuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbVwiOiBtZXNzYWdlLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGEgb24gbWV0aG9kIHRvIGEgY29tcG9uZW50IHRvIGFkZCBiZWhhdmlvcnMgdG8gdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgYWRkT25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT24oQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICAgICAgdmFyIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBzdGF0ZSA9PT0gY3VycmVudFN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuYWN0aW9uKGJlaGF2aW9ySWQsIGN1cnJlbnRTdGF0ZS5wYXJhbWV0ZXJzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKHRoaXMuaWQoKSwgc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVoYXZpb3JJZDtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLnByb3RvdHlwZS5vbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSxpc0NvcmUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSxpc0NvcmUpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24oc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgICAgICB2YXIgYmVoYXZpb3JJZCA9ICcnLFxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzRXZlbnQoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHdvcmtsb3cudmFsaWRQYXJhbU51bWJlcnMoY2xhc3NJZCwgc3RhdGUsIGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcklkID0gJGJlaGF2aW9yLmFkZCh0aGlzLmlkKCksIHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIHN0YXRlID09PSBjdXJyZW50U3RhdGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24odGhpcy5pZCgpLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWhhdmlvcklkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksaXNDb3JlKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzLlxuICogQG1ldGhvZCBhZGRPZmZDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uKHN0YXRlLCBiZWhhdmlvcklkKSB7XG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImJlaGF2aW9ySWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRJZFwiOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuSW52YWxpZFN0YXRlT2ZmKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvZmYgKHN0YXRlLCBiZWhhdmlvcklkKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgc3RhdGUsIGJlaGF2aW9ySWQpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZERlc3Ryb3lDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKCksXG4gICAgICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICAvLyBpZiBub3QgdmlydHVhbCBjb21wb25lbnRcbiAgICAgICAgaWYgKCRkYltpZF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICRkYltpZF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuXG4gICAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAnY29tcG9uZW50SWQnOiBpZFxuICAgICAgICB9KTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICdjb21wb25lbnRJZCc6IHJlc3VsdFtpXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuZGVzdHJveSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gZGVzdHJveSAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXQodGhpcy5pZCgpICsgJ0luZm8nKTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmNsYXNzSW5mbyA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gY2xhc3NJbmZvICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGZhY3RvcnlcbiAqIEBwYXJhbSB7SlNPTn0gY29uZmlnIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSB0aGUgY3JlYXRlZCBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZhY3RvcnkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgdmFyIENsYXNzID0ge30sXG4gICAgICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgICB9XG5cbiAgICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gICAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICAgIGFkZElkKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZFByb3BlcnRpZXMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRFdmVudHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBwcm9wZXJ0aWVzL21ldGhvZHMgb25seSBpZiB0aGUgY29tcG9uZW50XG4gICAgLy8gaW5oZXJpdCBmcm9tIFJ1bnRpbWVDb21wb25lbnRcbiAgICBpZiAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShjbGFzc0lkLCAnUnVudGltZUNvbXBvbmVudCcpKSB7XG4gICAgICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcbiAgICAgICAgYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICAgICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICAgICAgYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpO1xuICAgIH1cblxuICAgIE9iamVjdC5mcmVlemUoQ2xhc3MpO1xuXG4gICAgcmV0dXJuIENsYXNzO1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEdldCBhIGNvbXBvbmVudCBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgPGJyPlxuICoge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZSA8YnI+XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgICByZXR1cm4gZmFjdG9yeShjb25maWcpO1xufVxuXG5cbi8qXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc3RvcmVbaWRdLFxuICAgICAgICBjbGFzc0lkID0gJyc7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICAgIGNsYXNzSWQgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgJGRiW2NsYXNzSWRdLnJlbW92ZSh7XG4gICAgICAgICAgICBcIl9pZFwiOiBpZFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgJ2NvbXBvbmVudElkJzogaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FzZSBvZiBCZWhhdmlvclxuICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVCZWhhdmlvcicpIHtcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgY29tcG9uZW50IHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFJ1bnRpbWUuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIDxicj5cbiAqIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWUgPGJyPlxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGNvbXBvbmVudCB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IHJlbW92ZUZyb21NZW1vcnk7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZC5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnQgdG8gZGVzdHJveVxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTsiLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBSdW50aW1lIGRhdGFiYXNlLiA8YnI+XG4gKiBSdW50aW1lIGRhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogUnVudGltZSBEYXRhYmFzZSBpcyBjbG9zZWx5IGxpbmtlZCB0byBSdW50aW1lIG1ldGFtb2RlbCBhbmQgUnVudGltZSBjb21wb25lbnRzIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1kYlxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9LFxuICAgIGNvbGxlY3Rpb25zID0gW10sXG4gICAgaW50ZXJuYWxEQiA9IFtcbiAgICAgICAgJ1J1bnRpbWUnLFxuICAgICAgICAnUnVudGltZVNjaGVtYScsXG4gICAgICAgICdSdW50aW1lTW9kZWwnLFxuICAgICAgICAnUnVudGltZUdlbmVyYXRlZE1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVCZWhhdmlvcicsXG4gICAgICAgICdSdW50aW1lU3RhdGUnLFxuICAgICAgICAnUnVudGltZVR5cGUnLFxuICAgICAgICAnUnVudGltZU1ldGFtb2RlbCcsXG4gICAgICAgICdSdW50aW1lRGF0YWJhc2UnLFxuICAgICAgICAnUnVudGltZVN5c3RlbScsXG4gICAgICAgICdSdW50aW1lQ2xhc3NJbmZvJyxcbiAgICAgICAgJ1J1bnRpbWVNZXNzYWdlJyxcbiAgICAgICAgJ1J1bnRpbWVDaGFubmVsJyxcbiAgICAgICAgJ1J1bnRpbWVMb2dnZXInXG4gICAgXSxcbiAgICBjb3JlRGIgPSBbXG4gICAgICAgICdSdW50aW1lU2NoZW1hJyxcbiAgICAgICAgJ1J1bnRpbWVMb2dnZXInLFxuICAgICAgICAnUnVudGltZU1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcsXG4gICAgICAgICdSdW50aW1lU3RhdGUnLFxuICAgICAgICAnUnVudGltZVR5cGUnXG4gICAgXTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogRHVtcCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGR1bXAoKSB7XG4gICAgdmFyIGRiRHVtcCA9IHt9LFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgICAgICBiZWhhdmlvcklkID0gJycsXG4gICAgICAgIHR5cGVJZCA9ICcnLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgYmVoYXZpb3IgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBtb2RlbCA9IG51bGwsXG4gICAgICAgIGNvbGxlY3Rpb24gPSBudWxsLFxuICAgICAgICBzY2hlbWFJZCA9ICcnLFxuICAgICAgICBtb2RlbElkID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBpZCA9ICcnO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIGRiRHVtcC5zY2hlbWFzID0ge307XG4gICAgaWYgKGV4cG9ydHMuUnVudGltZVNjaGVtYS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAoc2NoZW1hSWQgaW4gc3RvcmUuUnVudGltZVNjaGVtYSkge1xuICAgICAgICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lU2NoZW1hW3NjaGVtYUlkXSkpO1xuICAgICAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAuc2NoZW1hc1tzY2hlbWFJZF0gPSBzY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RlbHNcbiAgICBkYkR1bXAubW9kZWxzID0ge307XG4gICAgaWYgKGV4cG9ydHMuUnVudGltZU1vZGVsLmNvdW50KCkpIHtcbiAgICAgICAgZm9yIChtb2RlbElkIGluIHN0b3JlLlJ1bnRpbWVNb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVNb2RlbFttb2RlbElkXSkpO1xuICAgICAgICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5tb2RlbHNbbW9kZWxJZF0gPSBtb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHR5cGVzXG4gICAgZGJEdW1wLnR5cGVzID0ge307XG4gICAgaWYgKGV4cG9ydHMuUnVudGltZVR5cGUuY291bnQoKSkge1xuICAgICAgICBmb3IgKHR5cGVJZCBpbiBzdG9yZS5SdW50aW1lVHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuUnVudGltZVR5cGVbdHlwZUlkXSkpO1xuICAgICAgICAgICAgZGVsZXRlIHR5cGUuX2lkO1xuICAgICAgICAgICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAudHlwZXNbdHlwZS5uYW1lXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gICAgZm9yIChiZWhhdmlvcklkIGluIHN0b3JlLlJ1bnRpbWVCZWhhdmlvcikge1xuICAgICAgICBiZWhhdmlvciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuUnVudGltZUJlaGF2aW9yW2JlaGF2aW9ySWRdKSk7XG4gICAgICAgIGRlbGV0ZSBiZWhhdmlvci5jbGFzc0luZm87XG5cbiAgICAgICAgaWYgKCFiZWhhdmlvci5jb3JlKSB7XG4gICAgICAgICAgICBkYkR1bXAuYmVoYXZpb3JzW2JlaGF2aW9ySWRdID0gYmVoYXZpb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRzXG4gICAgZGJEdW1wLmNvbXBvbmVudHMgPSB7fTtcbiAgICBsZW5ndGggPSBjb2xsZWN0aW9ucy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbnNbaV07XG4gICAgICAgIGlmIChleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5jb3VudCgpKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZVtjb2xsZWN0aW9uTmFtZV0pKTtcblxuICAgICAgICAgICAgZm9yIChpZCBpbiBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbGxlY3Rpb25baWRdLmNsYXNzSW5mbztcblxuICAgICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uW2lkXS5fY29yZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoY29sbGVjdGlvbikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdID0gY29sbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYkR1bXA7XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYW4gb2JqZWN0IGNvbnRhaW5zIGFub3RoZXIgb25lLlxuICogQG1ldGhvZCBjb250YWluc1xuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugb2JqZWN0IFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCB0YXJnZXQgb2JqZWN0IFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc291cmNlIG9iamVjdCBjb250YWlucyB0aGUgdGFyZ2V0IG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgcHJvcGVydHkgPSAnJztcblxuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eV0ubWF0Y2goc291cmNlW3Byb3BlcnR5XSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eV0gIT09IHNvdXJjZVtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiogXG4gKiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgUnVudGltZS4gPGJyPlxuICogSW50ZXJuYWwgY29sbGVjdGlvbnMgbWFuYWdlIGNvcmUgb2JqZWN0cyBvZiBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuIDxicj5cbiAqIFB1YmxpYyBjb2xsZWN0aW9ucyBtYW5hZ2UgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy4gPGJyPlxuICogXG4gKiBAY2xhc3MgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICovXG52YXIgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBzdG9yZVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoW3tcIm5hbWVcIjogXCJyZW5lXCJ9LCB7XCJuYW1lXCI6IFwicm9iZXJ0XCJ9XSk7XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgb2JqZWN0ID0ge307XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi4gPGJyPlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIFJ1bnRpbWUgY2hlY2tzIHRoYXQgdGhlIGRvY3VtZW50IGlzIGNvbXBsaWFudFxuICogd2l0aCBpdHMgY2xhc3MgZGVmaW5pdGlvbi4gPGJyPiBcbiAqIFRoZW4sIGFmdGVyIGluc2VydGluZyBpdCwgd2UgY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGluc2VydFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGRvY3VtZW50IGEgbmV3IG9iamVjdCB0byBhZGRcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5pbnNlcnQoezxicj5cbiAqICAgICAgXCJuYW1lXCI6IFwiYm9iXCIsIDxicj5cbiAqICAgICAgXCJmaXJzdE5hbWVcIjogXCJTYWludC1DbGFyXCIsIDxicj5cbiAqICAgICAgXCJhZ2VcIjogNDMgPGJyPlxuICogfSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oZG9jdW1lbnQpIHtcbiAgICB2YXIgZG9jID0gW10sXG4gICAgICAgIENvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnQpKSB7XG4gICAgICAgIGRvYyA9IGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvYy5wdXNoKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICBkb2MuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9pbnNlcnQob2JqKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgY2hhbm5lbHMgPSBbXSxcbiAgICAgICAgICAgIGNoYW5uZWwgPSBudWxsLFxuICAgICAgICAgICAgc3lzdGVtcyA9IFtdO1xuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lU2NoZW1hJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZUxvZ2dlcic6XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVNb2RlbCc6XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVUeXBlJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZUdlbmVyYXRlZE1vZGVsJzpcbiAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTpcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0b3JlW3RoaXMubmFtZV1bb2JqLl9pZF0gPSBvYmo7XG5cbiAgICAgICAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChvYmopO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQuaWQoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5pbnNlcnQodGhpcy5uYW1lLCBvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVNZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN5c3RlbXMubGVuZ3RoIHx8IChzeXN0ZW1zLmxlbmd0aCAmJiBzeXN0ZW1zWzBdLl9pZCAhPT0gb2JqLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHMgPSBleHBvcnRzLlJ1bnRpbWVDaGFubmVsLmZpbmQoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSBjaGFubmVscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsID0gJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZShjaGFubmVsc1tpXS5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY2hhbm5lbHNbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBvYmouZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogb2JqLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBVcGRhdGUgZG9jdW1lbnRzIGludG8gYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIHVwZGF0ZSB0byBtYWtlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBcbiAqIHtCb29sZWFufSB1cHNlcnQgdHJ1ZSBpZiB3ZSBjcmVhdGUgYSBkb2N1bWVudCB3aGVuIG5vIGRvY3VtZW50IGlzIGZvdW5kIGJ5IHRoZSBxdWVyeVxuICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgZG9jdW1lbnRzIHVwZGF0ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuQ2Fycy51cGRhdGUoe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy51cGRhdGUoW3tcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcImNvZGVcIjogXCJBWkQtNjVcIn1dLCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSwge1widXBzZXJ0XCI6IHRydWV9KTsgPGJyPlxuICovXG5SdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihxdWVyeSwgdXBkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpLFxuICAgICAgICB1cGRhdGVkID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGRvY3MubGVuZ3RoLFxuICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJycsXG4gICAgICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSxcbiAgICAgICAgdHlwZSA9ICcnO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG5cbiAgICAgICAgLy8gdXBzZXJ0IGNhc2VcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjYXNlIG9mIHVwZGF0ZSBvZiBfaWRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXBkYXRlLl9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXBkYXRlLl9pZCAhPT0gZG9jc1tpXS5faWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVwZGF0ZVV1aWQoZG9jc1tpXS5faWQsIHVwZGF0ZS5faWQsIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGUuX2lkKSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lICE9PSAnUnVudGltZVNjaGVtYScgJiYgdGhpcy5uYW1lICE9PSAnUnVudGltZU1vZGVsJyAmJiB0aGlzLm5hbWUgIT09ICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKGF0dHJpYnV0ZU5hbWUsIGRvY3NbaV0uX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gbW9yZSBjaGVjayBpbiBjYXNlIG9mIHNjaGVtYSB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVkO1xufTtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGRvY3VtZW50IGZyb20gdGhlIGNvbGxsZWN0aW9uLiA8YnI+XG4gKiBXaGVuIGEgZG9jdW1lbnQgaXMgcmVtb3ZlZCwgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byByZW1vdmVcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIGRvY3VtZW50cyBpZCByZW1vdmVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLkNhcnMucmVtb3ZlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy5yZW1vdmUoW3tcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcImNvZGVcIjogXCJBWkQtNjVcIn1dKTsgPGJyPlxuICovXG5SdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgb2JqZWN0ID0ge307XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9yZW1vdmUoY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjb3VudFxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgICAgIG9iamVjdElkID0gJyc7XG4gICAgZm9yIChvYmplY3RJZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiUnVudGltZURhdGFiYXNlQ29sbGVjdGlvblwifX17ey9jcm9zc0xpbmt9fS5cbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XG4gICAgZXhwb3J0c1tuYW1lXSA9IG5ldyBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufVxuXG5cbi8qXG4gKiBJbXBvcnQvRXhwb3J0IGEgUnVudGltZSBzeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZVxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBSdW50aW1lIHN5c3RlbSBvciB0aGUgaWYgb2YgdGhlIGN1cnJlbnQgUnVudGltZSBzeXN0ZW1cbiAqL1xuZnVuY3Rpb24gc3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgICAgICBjb21wb25lbnRJZCA9ICcnLFxuICAgICAgICB0eXBlTmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWFOYW1lID0gJycsXG4gICAgICAgIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBiZWhhdmlvcklkID0gJycsXG4gICAgICAgIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgaWQgPSBudWxsLFxuICAgICAgICBkYkR1bXAgPSBudWxsLFxuICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIG1vZGVsc1xuICAgICAgICBmb3IgKG1vZGVsTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5tb2RlbHMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwubW9kZWwoaW1wb3J0ZWRTeXN0ZW0ubW9kZWxzW21vZGVsTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuaW5zZXJ0KGltcG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IGluZm8gaWYgYWxyZWFkeSBhIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnNlcnQgdGhlIHN5c3RlbSBpbiBEQlxuICAgICAgICBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uaW5zZXJ0KGltcG9ydGVkU3lzdGVtKTtcblxuICAgICAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG5cbiAgICB9IGVsc2UgeyAvLyBleHBvcnRcbiAgICAgICAgLy8gZ2V0IGlkIG9mIHRoZSBtYXN0ZXIgc3lzdGVtXG4gICAgICAgIHN5c3RlbXMgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbWFzdGVyc3lzdGVtID0gc3lzdGVtc1swXTtcbiAgICAgICAgICAgIGlkID0gbWFzdGVyc3lzdGVtLl9pZDtcblxuICAgICAgICAgICAgLy8gcHJvcFxuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uX2lkID0gaWQ7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5kZXNjcmlwdGlvbiA9IG1hc3RlcnN5c3RlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLnZlcnNpb24gPSBtYXN0ZXJzeXN0ZW0udmVyc2lvbjtcblxuICAgICAgICAgICAgLy8gZHVtcFxuICAgICAgICAgICAgZGJEdW1wID0gZHVtcCgpO1xuICAgICAgICAgICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiBkYkR1bXApIHtcbiAgICAgICAgICAgICAgICBpZiAoZGJEdW1wLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZFN5c3RlbVtjb2xsZWN0aW9uTmFtZV0gPSBkYkR1bXBbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGV4cG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdO1xuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yLmNvbXBvbmVudCA9IGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCJ7fVwiO1xuICAgICAgICAgICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIFJ1bnRpbWUgc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgUnVudGltZSBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICAgIHZhciBzeXN0ZW0gPSB7fSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGRlZmF1bHROYW1lID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgICB9XG5cbiAgICBzeXN0ZW0ubmFtZSA9IHBhcmFtcy5uYW1lIHx8ICdzdWJfJyArIGRlZmF1bHROYW1lO1xuICAgIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgICBzeXN0ZW0uZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgICBzeXN0ZW0uc3Vic3lzdGVtID0gdHJ1ZTtcblxuICAgIC8vIHNjaGVtYXNcbiAgICBzeXN0ZW0uc2NoZW1hcyA9IHt9O1xuICAgIGlmIChwYXJhbXMuc2NoZW1hcykge1xuICAgICAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVTY2hlbWEuZmluZChwYXJhbXMuc2NoZW1hKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hLl9pZF0gPSBzY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RlbHNcbiAgICBzeXN0ZW0ubW9kZWxzID0ge307XG4gICAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lTW9kZWwuZmluZChwYXJhbXMubW9kZWxzKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5tb2RlbHNbbW9kZWwuX2lkXSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVR5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS50eXBlc1t0eXBlLl9pZF0gPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3JzXG4gICAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JzKSB7XG4gICAgICAgIGJlaGF2aW9yID0gZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuZmluZChwYXJhbXMuYmVoYXZpb3JzKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJlaGF2aW9yID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFiZWhhdmlvci5jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRzXG4gICAgc3lzdGVtLmNvbXBvbmVudHMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgZm9yIChjbGFzc05hbWUgaW4gcGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzW2NsYXNzTmFtZV0uZmluZChwYXJhbXMuY29tcG9uZW50c1tjbGFzc05hbWVdKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV1bY29tcG9uZW50Ll9pZF0gPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cblxuLypcbiAqIENsZWFyIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gICAgLy8gcmVtb3ZlIGNvbGxlY3Rpb25zXG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgICBsZW5ndGggPSBpbnRlcm5hbERCLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBpbnRlcm5hbERCW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXQgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHJ1bnRpbWVTeXN0ZW1JZCA9ICcnLFxuICAgICAgICBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICAgIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICdfaWQnOiAnZTg5YzYxN2I2YjE1ZDI0J1xuICAgIH0pWzBdO1xuXG4gICAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICAgIGV4cG9ydHMuY2xlYXIoKTtcbiAgICAkY29tcG9uZW50LmNsZWFyKCk7XG4gICAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAgICRzdGF0ZS5jbGVhcigpO1xuICAgICRiZWhhdmlvci5jbGVhcigpO1xuXG4gICAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgICAkbWV0YW1vZGVsLmluaXQoKTtcblxuICAgIC8vIHJlaW1wb3J0IFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgICBydW50aW1lU3lzdGVtSWQgPSBleHBvcnRzLnN5c3RlbShydW50aW1lU3lzdGVtKTtcbiAgICAkY29tcG9uZW50LmdldChydW50aW1lU3lzdGVtSWQpLm1haW4oKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgZGF0YWJhc2UuIDxicj5cbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBSdW50aW1lIGRhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFJ1bnRpbWUgbWV0YW1vZGVsIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICAgXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIlJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKlxuICogSW1wb3J0L0V4cG9ydCBhIFJ1bnRpbWUgc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFJ1bnRpbWUgc3lzdGVtIG9yIHRoZSBjdXJyZW50IFJ1bnRpbWUgc3lzdGVtICBcbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG5cblxuLyoqXG4gKiBFeHBvcnQgYSBSdW50aW1lIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIFJ1bnRpbWUgc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmV4cG9ydHMuc3Vic3lzdGVtID0gc3Vic3lzdGVtO1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBJbml0IHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0OyIsIi8qXG4gKiBSdW50aW1lXG4gKiBUaGUgU3lzdGVtIFJ1bnRpbWUgRW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqIFxuICogQ29weXJpZ2h0IDIwMTQtMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAY2xhc3MgcnVudGltZS1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xuXG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0cy5cbiAqIEBtZXRob2QgaXNSdW50aW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc1J1bnRpbWUoKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKCRkYi5SdW50aW1lICYmICRkYi5SdW50aW1lLmZpbmQoKS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm4ge1J1bnRpbWV9IFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgICB2YXIgcnVudGltZUlkID0gJycsXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoIXJ1bnRpbWVSZWYpIHtcbiAgICAgICAgcnVudGltZUlkID0gJGRiLlJ1bnRpbWUuZmluZCgpWzBdLl9pZDtcbiAgICAgICAgcnVudGltZVJlZiA9ICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bnRpbWVSZWY7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIGEgdXVpZC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHV1aWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIHJldHVybiBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59XG5cblxuLypcbiAqIEFkZCBQb2x5ZmlsbFxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcblxuICAgIC8vIGZpeGluZyBjb25zdHJ1Y3Rvci5uYW1lIHByb3BlcnR5IGluIElFXG4gICAgLy8gdGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1MTQwNzIzL2NvbnN0cnVjdG9yLW5hbWUtaXMtdW5kZWZpbmVkLWluLWludGVybmV0LWV4cGxvcmVyXG4gICAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ25hbWUnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygodGhpcykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkgeyB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAY2xhc3MgcnVudGltZS1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogR2V0IFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm4ge1J1bnRpbWV9IFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZXhwb3J0cy5nZXRSdW50aW1lID0gZ2V0UnVudGltZTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdHMuXG4gKiBAbWV0aG9kIGlzUnVudGltZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqL1xuZXhwb3J0cy5pc1J1bnRpbWUgPSBpc1J1bnRpbWU7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHV1aWQuXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGdlbmVyYXRlSWQ7XG5cblxuLyoqXG4gKiBBZGQgUG9seWZpbGxcbiAqIEBtZXRob2QgcG9seWZpbGxcbiAqL1xuZXhwb3J0cy5wb2x5ZmlsbCA9IHBvbHlmaWxsOyIsIi8qXG4gKiBSdW50aW1lXG4gKiBUaGUgU3lzdGVtIFJ1bnRpbWUgRW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBAZWNhcnJpb3VcbiAqIFxuICogQ29weXJpZ2h0IDIwMTQtMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQGNsYXNzIHJ1bnRpbWUtbG9nXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgSUQgPSAnX2lkJyxcbiAgICBjdXJyZW50TGV2ZWwgPSAnd2FybicsXG4gICAgbG9nZ2VyUmVmID0gbnVsbCxcbiAgICBmYWtlTG9nZ2VyUmVmID0ge1xuICAgICAgICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGluZm86IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8IGN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXJuOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCBjdXJyZW50TGV2ZWwgPT09ICd3YXJuJyB8fCBjdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8qXG4gKiBHZXQgdGhlIFJ1bnRpbWVMb2dnZXIgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHJldHVybiB7UnVudGltZUxvZ2dlcn0gUnVudGltZUxvZ2dlciBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICAgIHZhciBsb2dnZXJJZCA9ICcnLFxuICAgICAgICBsb2dnZXJzID0gW10sXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoISRtZXRhbW9kZWwuZ2V0TW9kZWwoJ1J1bnRpbWVMb2dnZXInKSkge1xuICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcnMgPSAkZGIuUnVudGltZUxvZ2dlci5maW5kKCk7XG4gICAgICAgIGlmIChsb2dnZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VySWQgPSBsb2dnZXJzWzBdW0lEXTtcblxuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsb2dnZXJSZWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2cuXG4gKiBAbWV0aG9kIGxldmVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGV2ZWxOYW1lIG5hbWUgb2YgdGhlIGxldmVsXG4gKi9cbmZ1bmN0aW9uIGxldmVsKGxldmVsTmFtZSkge1xuICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbn1cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKHNjaGVtYVtJRF0pIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mIFwiICsgc2NoZW1hW0lEXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgYSBtb2RlbFwiO1xuICAgIH1cblxuICAgIGdldExvZ2dlcigpLndhcm4obWVzc2FnZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUocHJvcGVydHlOYW1lLCB0eXBlLCBwcm9wZXJ0eSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgdHlwZSAnXCIgKyB0eXBlb2YgcHJvcGVydHkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdmFsdWUgZm9yIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIHR5cGUgZW51bSAnXCIgKyB0eXBlICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2xhc3NOYW1lKGNvbXBvbmVudElkLCB0eXBlLCBjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBjbGFzcyBuYW1lIGZvciBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50SWQgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyBjb25zdHJ1Y3Rvck5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdJbXBsZW1lbnRhdGlvbihuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmcuXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICdlcnJvcic6IGZhbHNlLFxuICAgICAgICAnbWVzc2FnZSc6IFwidGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIG9mIHRoZSBtb2RlbCAnXCIgKyBjbGFzc05hbWUgKyBcIicgaXMgaW52YWxpZFwiXG4gICAgfSk7XG59XG5cblxuLypcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAnZXJyb3InOiBmYWxzZSxcbiAgICAgICAgJ21lc3NhZ2UnOiBcInRoZSBtb2RlbCAnXCIgKyBzY2hlbWEgKyBcIicgaGFzIGFuIHVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIidcIlxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZURlZmluaXRpb24obmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgdHlwZSAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCB2YWxpZFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwcm9wZXJ0eSBuYW1lLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUucmVwbGFjZSgnQCcsICcnKSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSB0eXBlICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIic6IGV4cGVjdGVkICdzdHJpbmcnIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHR5cGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gcmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgUnVudGltZSBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChkb2MsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgZG9jdW1lbnQgJ1wiICsgSlNPTi5zdHJpbmdpZnkoZG9jKSArIFwiJyBvbiBhbiBpbnNlcnQgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoXCIjXCIpICE9PSAtMSkge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuXG4vKlxuICogVW5rb253IHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKHByb3BlcnR5TmFtZSwgaWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgZm9yIHRoZSBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgbmFtZSBmb3IgY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaW4gdGhlIG1ldGFtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKGlkLCBtZXRob2ROYW1lLCBleHBlY3RlZFR5cGUsIHR5cGUpIHtcbiAgICBpZiAodHlwZSkge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyBleHBlY3RlZFR5cGUgKyBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArIHR5cGUgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgZXhwZWN0ZWRUeXBlICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInVua293biBjbGFzcyBjb21wb25lbnQgJ1wiICsgY2xhc3NOYW1lICsgXCInIGZvciBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50SWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybigncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn1cblxuXG4vKlxuICogaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihpZCwgbWV0aG9kTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtVHlwZShpZCwgbWV0aG9kTmFtZSwgcGFyYW1OYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZS5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFN0YXRlT24oaWQsIHN0YXRlTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiB1bmt3b3duIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZC5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRTdGF0ZU9mZihpZCwgc3RhdGVOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiY2FuIG5vdCBleHBvcnQgdGhlIGRhdGFiYXNlIGJlY2F1c2Ugbm8gc3lzdGVtIHdhcyBkZWZpbmVkXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KG1lc3NhZ2UsIGV2ZW50TmFtZSwgdHlwZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSBtZXNzYWdlICdcIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpICsgXCInOiBleHBlY3RlZCB0eXBlICdcIiArIHR5cGUgKyBcIicgZm9yIGV2ZW50ICdcIiArIGV2ZW50TmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhbiBhY3Rpb24gYWRkIHdpdGggb24gbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbihpZCwgbWV0aG9kTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gYWRkaW5nIGFuIGFjdGlvbiBvbiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICsgY3VycmVudElkICsgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgKyBuZXdJZCArIFwiJyB0aGF0IGlzIGFscmVhZHkgdXNlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgKyBjdXJyZW50SWQgKyBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArIG5ld0lkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQgdGhhdCBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gKiBAbWV0aG9kIGludmFsaWRVc2VPZkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFNjaGVtYShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBtb2RlbC5cbiAqIEBtZXRob2QgaW52YWxpZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcGFyYW1ldGVycyBzZXQgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBnZXQgdGhlIHByb3BlcnR5IG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZGVzdHJveWVkQ29tcG9uZW50Q2FsbFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGVzdHJveWVkQ29tcG9uZW50Q2FsbChwcm9wZXJ0eU5hbWUsIGlkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeWluZyB0byBnZXQgdGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMob2JqZWN0LCBuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgJ1wiICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSArIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgYW4gb2JqZWN0XCIpO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua293biBtb2RlbC5cbiAqIEBtZXRob2QgdW5rbm93bk1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1vZGVsKGNsYXNzSWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IGdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rbm93biBtb2RlbCAnXCIgKyBjbGFzc0lkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIHNjaGVtYSBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1NjaGVtYShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBtaXNzaW5nXCIpO1xufVxuXG5cbi8qXG4gKiBBIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZC5cbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHdoZXJlIHRoZSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqL1xuZnVuY3Rpb24gY3ljbGljRGVwZW5kZW5jeShuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgJ2Vycm9yJzogZmFsc2UsXG4gICAgICAgICAgICAnbWVzc2FnZSc6ICdhIGN5Y2xpYyBpbmhlcml0YW5jZSBkZXBlbmRlbmN5IHdpdGggXFzigJknICsgbmFtZSArICdcXOKAmSBzY2hlbWEgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgXFwnX2luaGVyaXRcXCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXMnXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgICdlcnJvcic6IGZhbHNlLFxuICAgICAgICAgICAgJ21lc3NhZ2UnOiAnYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSBoYXMgYmVlbiBmb3VuZCwgcGxlYXNlIGNoZWNrIHRoZSBcXCdfaW5oZXJpdFxcJyBwcm9wZXJ0aWVzIG9mIHlvdXIgc2NoZW1hcydcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlTmFtZSBvZiB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCB0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgZW51bWVyYXRlZCB0eXBlICdcIiArIHR5cGVOYW1lICsgXCInOiBleHBlY3RlZCB0eXBlICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArIHR5cGVvZiB2YWx1ZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTG9hZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGxvYWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBsb2FkU2NoZW1hKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwibG9hZCBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTG9hZCBtb2RlbC5cbiAqIEBtZXRob2QgbG9hZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBsb2FkTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJsb2FkIG1vZGVsICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIExvYWQgdHlwZS5cbiAqIEBtZXRob2QgbG9hZFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gbG9hZFR5cGUobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJsb2FkIHR5cGUgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQ29tcGlsZSBzY2hlbWEuXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBjb21waWxlU2NoZW1hKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwiY29tcGlsZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn1cblxuXG4vKlxuICogR2VuZXJhdGUgbW9kZWwuXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmluZm8oXCJnZW5lcmF0ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBtb2RlbC5cbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbChuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImFuYWx5emUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29sbGVjdGlvbihuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImNyZWF0ZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cbi8qXG4gKiBDcmVhdGUgY2xhc3MuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcImNyZWF0ZSBjbGFzcyAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBCZWdpbnMgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25CZWdpblxuICovXG5mdW5jdGlvbiBtb2RlbENyZWF0aW9uQmVnaW4oKSB7XG4gICAgZ2V0TG9nZ2VyKCkuaW5mbyhcInN0YXJ0aW5nIG1vZGVsIGNyZWF0aW9uLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBFbmQgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25FbmRcbiAqL1xuZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkVuZCgpIHtcbiAgICBnZXRMb2dnZXIoKS5pbmZvKFwibW9kZWwgY3JlYXRpb24gZW5kZWRcIik7XG59XG5cblxuLypcbiAqIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvci5cbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gYWN0aW9uSW52b2tlRXJyb3Ioc3RhdGUsIGlkLCBtZXNzYWdlKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInOiBcIiArIG1lc3NhZ2UpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIG5hbWUgZm9yIHRoZSBwcm9wZXJ0eSBvZiBhIHNjaGVtYS5cbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU2NoZW1hUHJvcGVydHkobmFtZSwgcHJvcE5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBwcm9wTmFtZSArIFwiJyBmb3Igc2NoZW1hICdcIiArIG5hbWUgKyBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgZm9ybWF0IGZvciBhIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eSc6ICdcIiArIG9iaiArIFwiJyBpcyBub3QgYW4gb2JqZWN0XCIpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAY2xhc3MgcnVudGltZS1sb2dcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogU2V0IHRoZSBsZXZlbCBvZiB0aGUgbG9nLlxuICogQG1ldGhvZCBsZXZlbFxuICogQHBhcmFtIHtTdHJpbmd9IGxldmVsTmFtZSBuYW1lIG9mIHRoZSBsZXZlbFxuICovXG5leHBvcnRzLmxldmVsID0gbGV2ZWw7XG5cblxuLyoqXG4gKiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgdGhlIHNjaGVtYSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5ID0gdW5rbm93blByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlID0gaW52YWxpZFByb3BlcnR5VHlwZTtcblxuXG4vKipcbiAqIEludmFsaWQgdmFsdWUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVZhbHVlID0gaW52YWxpZEVudW1WYWx1ZTtcblxuXG4vKipcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzTmFtZSA9IGludmFsaWRDbGFzc05hbWU7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IG1pc3NpbmdQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKi9cbmV4cG9ydHMubWlzc2luZ0ltcGxlbWVudGF0aW9uID0gbWlzc2luZ0ltcGxlbWVudGF0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlSW1wID0gaW52YWxpZFR5cGVJbXA7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHlJbXAgPSBtaXNzaW5nUHJvcGVydHlJbXA7XG5cblxuLyoqXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eUltcCA9IHVua25vd25Qcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gaW52YWxpZFR5cGVEZWZpbml0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCBwcm9wZXJ0eSB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eU5hbWUgPSBpbnZhbGlkUHJvcGVydHlOYW1lO1xuXG5cbi8qKlxuICogVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5yZWFkT25seVByb3BlcnR5ID0gcmVhZE9ubHlQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgZG9jdW1lbnQgb24gYSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0O1xuXG5cbi8qKlxuICogSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gdW5rbm93bk1ldGhvZDtcblxuXG4vKipcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBpbnZhbGlkQ29sbGVjdGlvbk5hbWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgcmVzdWx0IG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb3QgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGV4cGVjdGVkVHlwZSBleHBlY3RlZCB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBjdXJyZW50IHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUmVzdWx0VHlwZSA9IGludmFsaWRSZXN1bHRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gdW5rbm93bkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZXhwb3J0cy53b3JrZmxvd1Jlc3RhcnRlZCA9IHdvcmtmbG93UmVzdGFydGVkO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyID0gaW52YWxpZFBhcmFtTnVtYmVyO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGludmFsaWRQYXJhbVR5cGU7XG5cblxuLyoqXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBiZWhhdmlvck5vdFVuaXF1ZTtcblxuXG4vKipcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gaW52YWxpZFN0YXRlT247XG5cblxuLyoqXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGludmFsaWRTdGF0ZU9mZjtcblxuXG4vKipcbiAqIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IG1hc3RlclN5c3RlbU5vdEZvdW5kO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGludmFsaWRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSB1bmtub3duVHlwZTtcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBjYW5Ob3RZZXRWYWxpZGF0ZTtcblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGludmFsaWRDaGFubmVsRXZlbnQ7XG5cblxuLyoqXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbjtcblxuXG4vKipcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IHVwZGF0ZVV1aWQ7XG5cblxuLyoqXG4gKiBVbmtvbncgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSA9IHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICogQG1ldGhvZCBpbnZhbGlkZVVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRVc2VPZkNvbXBvbmVudCA9IGludmFsaWRVc2VPZkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBpbnZhbGlkU2NoZW1hO1xuXG5cbi8qKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIG1vZGVsLlxuICogQG1ldGhvZCBpbnZhbGlkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuaW52YWxpZE1vZGVsID0gaW52YWxpZE1vZGVsO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGludmFsaWRQYXJhbWV0ZXJzO1xuXG5cbi8qKlxuICogVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50LlxuICogQG1ldGhvZCBkZXN0cm95ZWRDb21wb25lbnRDYWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmRlc3Ryb3llZENvbXBvbmVudENhbGwgPSBkZXN0cm95ZWRDb21wb25lbnRDYWxsO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyA9IGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnM7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua293biBtb2RlbC5cbiAqIEBtZXRob2QgdW5rbm93bk1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSB1bmtub3duTW9kZWw7XG5cblxuLyoqXG4gKiBBIHNjaGVtYSBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5taXNzaW5nU2NoZW1hID0gbWlzc2luZ1NjaGVtYTtcblxuXG4vKipcbiAqIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5leHBvcnRzLmN5Y2xpY0RlcGVuZGVuY3kgPSBjeWNsaWNEZXBlbmRlbmN5O1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1UeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZU5hbWUgb2YgdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVR5cGUgPSBpbnZhbGlkRW51bVR5cGU7XG5cblxuLyoqXG4gKiBMb2FkIHNjaGVtYS5cbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMubG9hZFNjaGVtYSA9IGxvYWRTY2hlbWE7XG5cblxuLyoqXG4gKiBMb2FkIG1vZGVsLlxuICogQG1ldGhvZCBsb2FkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMubG9hZE1vZGVsID0gbG9hZE1vZGVsO1xuXG5cbi8qKlxuICogTG9hZCB0eXBlLlxuICogQG1ldGhvZCBsb2FkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICovXG5leHBvcnRzLmxvYWRUeXBlID0gbG9hZFR5cGU7XG5cblxuLyoqIFxuICogQ29tcGlsZSBzY2hlbWEuXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmNvbXBpbGVTY2hlbWEgPSBjb21waWxlU2NoZW1hO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgbW9kZWwuXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVNb2RlbCA9IGdlbmVyYXRlTW9kZWw7XG5cblxuLyoqXG4gKiBDaGVjayBtb2RlbC5cbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja01vZGVsID0gY2hlY2tNb2RlbDtcblxuXG4vKipcbiAqIENyZWF0ZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ29sbGVjdGlvbiA9IGNyZWF0ZUNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5leHBvcnRzLmNyZWF0ZUNsYXNzID0gY3JlYXRlQ2xhc3M7XG5cblxuLypcbiAqIEJlZ2lucyBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkJlZ2luXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkJlZ2luID0gbW9kZWxDcmVhdGlvbkJlZ2luO1xuXG5cbi8qXG4gKiBFbmQgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25FbmRcbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uRW5kID0gbW9kZWxDcmVhdGlvbkVuZDtcblxuXG4vKipcbiAqIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvci5cbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZXhwb3J0cy5hY3Rpb25JbnZva2VFcnJvciA9IGFjdGlvbkludm9rZUVycm9yO1xuXG5cbi8qKlxuICogSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHkgPSBpbnZhbGlkU2NoZW1hUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGZvcm1hdCBmb3IgdGhlIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlGb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5Rm9ybWF0ID0gaW52YWxpZFByb3BlcnR5Rm9ybWF0O1xuIiwiLypcbiAqIFJ1bnRpbWVcbiAqIFRoZSBTeXN0ZW0gUnVudGltZSBFbnZpcm9ubWVudFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIEBlY2FycmlvdVxuICogXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBtZXRhbW9kZWwuIDxicj5cbiAqIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAY2xhc3MgcnVudGltZS1tZXRhbW9kZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnLFxuICAgIE5BTUUgPSAnX25hbWUnLFxuICAgIERFU0NSSVBUSU9OID0gJ19kZXNjcmlwdGlvbicsXG4gICAgSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuICAgIENMQVNTID0gJ19jbGFzcycsXG4gICAgQ09SRSA9ICdfY29yZScsXG4gICAgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbiAgICBFVkVOVF9UWVBFID0gJ2V2ZW50JyxcbiAgICBQUk9QRVJUWV9UWVBFID0gJ3Byb3BlcnR5JyxcbiAgICBMSU5LX1RZUEUgPSAnbGluaycsXG4gICAgQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuICAgIGludGVybmFsVHlwZXMgPSBbJ3Byb3BlcnR5JywgJ2NvbGxlY3Rpb24nLCAnbGluaycsICdtZXRob2QnLCAnZXZlbnQnXSxcbiAgICBkZWZhdWx0VHlwZXMgPSBbJ2Jvb2xlYW4nLCAnc3RyaW5nJywgJ251bWJlcicsICdvYmplY3QnLCAnZnVuY3Rpb24nLCAnYXJyYXknLCAnYW55J10sXG4gICAgc3RvcmUgPSB7XG4gICAgICAgIG1ldGFkZWY6IHt9LFxuICAgICAgICBpbmhlcml0YW5jZToge30sXG4gICAgICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgICAgIHNjaGVtYXM6IHt9LFxuICAgICAgICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICAgICAgICBtb2RlbHM6IHt9LFxuICAgICAgICBnZW5lcmF0ZWRNb2RlbHM6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fVxuICAgIH07XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIEdlbmVyYXRlIHRoZSBtb2RlbHMuXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGVscygpIHtcbiAgICB2YXIgYXR0ID0gJycsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWEgPSB7fSxcbiAgICAgICAgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsUGFyZW50ID0gbnVsbCxcbiAgICAgICAgbW9kZWxFeHQgPSBudWxsLFxuICAgICAgICBtb2RlbERlZiA9IG51bGwsXG4gICAgICAgIG1vZGVsID0ge30sXG4gICAgICAgIG1vZGVscyA9IHt9LFxuICAgICAgICBtZXJnZWRNb2RlbCA9IHt9LFxuICAgICAgICBwYXJlbnRzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gc3RvcmUuY29tcGlsZWRTY2hlbWFzKSB7XG4gICAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgICAgICAvLyBzZXQgbW9kZWwgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgICAgICBtb2RlbCA9IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogc2NoZW1hLl9uYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldCBfY29yZVxuICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5fY29yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1vZGVsLl9jb3JlID0gc2NoZW1hLl9jb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGluaGVyaXRcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLl9pbmhlcml0KSkge1xuICAgICAgICAgICAgbW9kZWwuX2luaGVyaXQgPSBzY2hlbWEuX2luaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgY2xhc3NcbiAgICAgICAgaWYgKHR5cGVvZiBzY2hlbWEuX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbW9kZWwuX2NsYXNzID0gc2NoZW1hLl9jbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBkZXNjcmlwdGlvbiBcbiAgICAgICAgaWYgKHR5cGVvZiBzY2hlbWEuX2Rlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbW9kZWwuX2Rlc2NyaXB0aW9uID0gc2NoZW1hLl9kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBzZXQgbW9kZWwgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAncHJvcGVydHknOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYXR0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2xpbmsnOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQFJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYXR0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ21ldGhvZCc6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYXR0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYXJhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2NvbGxlY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcIkBSdW50aW1lQ29tcG9uZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0LmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHkoc2NoZW1hLl9uYW1lLCBhdHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsLl9uYW1lXSA9IG1vZGVsO1xuICAgIH1cblxuICAgIC8vIG1vZGVscyB0byBvdmVycmlkZVxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgICAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICBuYW1lID0gbW9kZWxbTkFNRV07XG4gICAgICAgIG1vZGVsRXh0ID0gc3RvcmUubW9kZWxzW25hbWVdO1xuICAgICAgICBpZiAobW9kZWxFeHQpIHtcbiAgICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxFeHQsIG1vZGVsKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaGVyaXRhbmNlXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZGVsTmFtZSk7XG4gICAgICAgIHBhcmVudHMucmV2ZXJzZSgpO1xuXG4gICAgICAgIHZhciBtb2RlbFRvTWVyZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmFtZSA9IHBhcmVudHNbaV07XG4gICAgICAgICAgICBtb2RlbFBhcmVudCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChtb2RlbFBhcmVudCkge1xuICAgICAgICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWxQYXJlbnQsIG1vZGVsKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVyZ2VkTW9kZWwuX2lkO1xuICAgICAgICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsYXN0IGluaGVyaXQgXG4gICAgICAgIC8vIGlzIHRoZSBvdmVycmlkZW4gbW9kZWxcbiAgICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgICAgICBkZWxldGUgbWVyZ2VkTW9kZWwuX2lkO1xuICAgICAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNhdmUgXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwuaW5zZXJ0KG1vZGVsRGVmKTtcblxuICAgICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICAgICAkbG9nLmdlbmVyYXRlTW9kZWwobW9kZWxOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAqIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgICB2YXIgc2NoZW1hcyA9IFtdLFxuICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBtb2RlbCA9IHt9LFxuICAgICAgICBtb2RlbHMgPSBbXSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgaW5oZXJpdCA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIC8vIGluaXQgc3RvcmVcbiAgICBzdG9yZS5pbmhlcml0YW5jZSA9IHt9O1xuICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZSA9IHt9O1xuICAgIHN0b3JlLnNjaGVtYXMgPSB7fTtcbiAgICBzdG9yZS5jb21waWxlZFNjaGVtYXMgPSB7fTtcbiAgICBzdG9yZS5tb2RlbHMgPSB7fTtcbiAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMgPSB7fTtcbiAgICBzdG9yZS5zdGF0ZXMgPSB7fTtcbiAgICBzdG9yZS50eXBlID0ge307XG5cbiAgICAvLyBsb2FkIHNjaGVtYXNcbiAgICBzY2hlbWFzID0gJGRiLlJ1bnRpbWVTY2hlbWEuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSBzY2hlbWFzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hc1tpXTtcblxuICAgICAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuICAgICAgICBpbmhlcml0ID0gc2NoZW1hW0lOSEVSSVRTXTtcblxuICAgICAgICBzdG9yZS5zY2hlbWFzW25hbWVdID0gc2NoZW1hO1xuICAgICAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0gPSBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICRsb2cubG9hZFNjaGVtYShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvYWQgbW9kZWxzXG4gICAgbW9kZWxzID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHt9KTtcblxuICAgIGxlbmd0aCA9IG1vZGVscy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vZGVsID0gbW9kZWxzW2ldO1xuICAgICAgICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgICAgICAgc3RvcmUubW9kZWxzW25hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICAgICAgJGxvZy5sb2FkTW9kZWwobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb2FkIHR5cGVzXG4gICAgdHlwZXMgPSAkZGIuUnVudGltZVR5cGUuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSB0eXBlcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlc1tpXTtcbiAgICAgICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcblxuICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgJGxvZy5sb2FkVHlwZSh0eXBlLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG4gKiBAbWV0aG9kIGNyZWF0ZUluaGVyaXRhbmNlVHJlZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCkge1xuICAgIHZhciBuYW1lID0gJycsXG4gICAgICAgIGMzbGluZXJpemF0aW9uID0gW10sXG4gICAgICAgIGFuY2VzdG9ycyA9IFtdO1xuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiB3ZSBoYXZlIGZpbmlzZWhkIHRvIGxpbmVyaXplLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYWxsIHRoZSBhcnJheXMgYXJlIGVtcHR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNFbXB0eShlbHRzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgYW4gZWx0IGZyb20gYWxsIHRoZSBhcnJheXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3JlbW92ZUNhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgICAgIGFyciA9IFtdO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFyciA9IGVsdHNbaV07XG4gICAgICAgICAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBlbHRzW2ldID0gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGaW5kIGEgY2FuZGlkYXRlIGFuZCByZXR1cm4gaXQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFycmF5IGNvbnRhaW5pbmcgdGhlIGNhbmRpZGF0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2ZpbmRDYW5kaWRhdGUoZWx0cykge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9pc0NhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsdHNbaV1bMF0pO1xuICAgICAgICAgICAgICAgIF9yZW1vdmVDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE1lcmdlIHRoZSBhcnJheXMuXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlcyByZXR1cm5lZCBieSB0aGUgbWVyZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tZXJnZShlbHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgICAgIHdoaWxlIChjYW5kaWRhdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2FuZGlkYXRlcyk7XG4gICAgICAgICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV9pc0VtcHR5KGVsdHMpKSB7XG4gICAgICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9saW5lcml6ZShuYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5LiBcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1cbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgICAgICAqIEBwcml2YXRlIFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2NoZWNrQ3ljbGljRGVwKG5hbWUsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpc0N5Y2xpY0RlYiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtpdGVtXSkgJiYgc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgICAgICAgICAgaXNDeWNsaWNEZWIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzQ3ljbGljRGViO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0pKSB7XG4gICAgICAgICAgICBwYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0uc2xpY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cubWlzc2luZ1NjaGVtYShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfY2hlY2tDeWNsaWNEZXAobmFtZSwgcGFyZW50c1tpXSkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtuYW1lXS5jb25jYXQoX21lcmdlKHBhcmVudHMubWFwKF9saW5lcml6ZSkuY29uY2F0KFtwYXJlbnRzXSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgICAgICBjM2xpbmVyaXphdGlvbiA9IF9saW5lcml6ZShuYW1lKTtcbiAgICAgICAgYW5jZXN0b3JzID0gYzNsaW5lcml6YXRpb24ucmV2ZXJzZSgpO1xuICAgICAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV0gPSBhbmNlc3RvcnM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEV4dGVuZCBhIHNjaGVtYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnQuXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybiB7SlNPTn0gb2JqZWN0IGV4dGVuZGVkIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG5hbWUpIHtcbiAgICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgICAgIHNvbiA9IHN0b3JlLnNjaGVtYXNbbmFtZV0sXG4gICAgICAgIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGFuY2VzdG9yID0gbnVsbCxcbiAgICAgICAgcHJvcCA9ICcnO1xuXG4gICAgaWYgKGFuY2VzdG9ycykge1xuICAgICAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgICAgICBhbmNlc3RvcnMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgICAgIGZvciAocHJvcCBpbiBhbmNlc3Rvcikge1xuICAgICAgICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHNvbikge1xuICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBzb25FeHRlbmQ7XG59XG5cblxuLypcbiAqIEFkZCB0aGUgbW9kZWxzLlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNjaGVtYXMoKSB7XG4gICAgdmFyIG5hbWUgPSAnJztcbiAgICBmb3IgKG5hbWUgaW4gc3RvcmUuc2NoZW1hcykge1xuICAgICAgICBpZiAoIXN0b3JlLnNjaGVtYXNbbmFtZV0uX2NvcmUpIHtcbiAgICAgICAgICAgICRsb2cuY29tcGlsZVNjaGVtYShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSA9IGV4dGVuZChuYW1lKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYWxsIHRoZSBtb2RlbHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzLlxuICogQG1ldGhvZCBjaGVja01vZGVsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbHMoKSB7XG4gICAgdmFyIG5hbWUgPSAnJyxcbiAgICAgICAgY2xhc3NEZWYgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSAnJztcblxuICAgIGZvciAobmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgY2xhc3NEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChjbGFzc0RlZikge1xuICAgICAgICAgICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgICAgICAgICAgaWYgKHNjaGVtYSkge1xuICAgICAgICAgICAgICAgIGlmICghY2xhc3NEZWYuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5jaGVja01vZGVsKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGVja0ltcChjbGFzc0RlZiwgc2NoZW1hKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIHN0YXRlcyBvZiBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0U3RhdGVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRTdGF0ZXMoKSB7XG4gICAgdmFyIG5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgdHlwZSA9ICcnLFxuICAgICAgICBzdGF0ZXMgPSBbXSxcbiAgICAgICAgYXR0cmlidXRlID0gJyc7XG5cbiAgICBmb3IgKG5hbWUgaW4gc3RvcmUuY29tcGlsZWRTY2hlbWFzKSB7XG4gICAgICAgIHN0YXRlcyA9IFtdO1xuICAgICAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgICAgIGZvciAoYXR0cmlidXRlIGluIHNjaGVtYSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlLmluZGV4T2YoJ18nKSAhPT0gMCAmJiBpbnRlcm5hbFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0b3JlLnN0YXRlc1tuYW1lXSA9IHN0YXRlcztcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3QgXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gICAgdmFyIHByb3BlcnR5ID0gJycsXG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjbGFzc0RlZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaGVja1NjaGVtYSh2YWx1ZSwgY2xhc3NJbXBbcHJvcGVydHldKSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVyZVxuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBERVNDUklQVElPTiAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IElOSEVSSVRTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDT1JFKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzSW1wW3Byb3BlcnR5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrU2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtPYmplY3R9IHR5cGUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTY2hlbWEodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoaGFzVHlwZSh0eXBlLCAnc3RyaW5nJykgJiYgZGVmYXVsdFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyBjb3JyZWN0IGN1c3RvbSB0eXBlLlxuICogQG1ldGhvZCBjaGVja0N1c3RvbVNjaGVtYVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpZiAoIWhhc1R5cGUodHlwZURlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAodHlwZURlZi50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1R5cGUodHlwZURlZi5zY2hlbWEsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZVtpXSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFR5cGUodmFsdWVbaV0sIHR5cGVEZWYudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1R5cGUodHlwZURlZi5zY2hlbWEsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkU2NoZW1hKHZhbHVlLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVEZWYudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBEYXRhYmFzZSBzdHVjdHVyZS5cbiAqIEBtZXRob2QgaW5pdERiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0RGJTdHJ1Y3R1cmUoKSB7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVMb2dnZXInKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZVNjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lTW9kZWwnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUdlbmVyYXRlZE1vZGVsJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVDbGFzc0luZm8nKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUJlaGF2aW9yJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVTdGF0ZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lVHlwZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lTWVzc2FnZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQ2hhbm5lbCcpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uKS5cbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxEZWYgPSB7fTtcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mICRkYlttb2RlbERlZltOQU1FXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltOQU1FXSk7XG5cbiAgICAgICAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmNyZWF0ZUNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxEZWYgPSB7fTtcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICBpZiAobW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGNvbXBvbmVudC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmNyZWF0ZUNsYXNzKG1vZGVsTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIENsYXNzSW5mbyBvZiB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzSW5mb1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3NJbmZvKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxEZWYgPSB7fSxcbiAgICAgICAgbmFtZSA9ICcnO1xuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIG5hbWUgPSBtb2RlbERlZltOQU1FXSArICdJbmZvJztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlICYmXG4gICAgICAgICAgICBpbmhlcml0RnJvbShtb2RlbERlZltOQU1FXSwgJ1J1bnRpbWVDb21wb25lbnQnKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghJGNvbXBvbmVudC5nZXQobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZUNsYXNzSW5mby5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbERlZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZUNsYXNzSW5mby51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiBuYW1lXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfaWRcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbERlZlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0IC8gdHlwZS5cbiAqIEBtZXRob2QgZ2V0UmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSAmJlxuICAgICAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgICAgICFpc1JlZmVyZW5jZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSByZWZlcmVuY2UuXG4gKiBAbWV0aG9kIGlzUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKCdAJykgIT09IC0xO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHJlYWwgdHlwZSBvZiBhIHZhbHVlLlxuICogQG1ldGhvZCBnZXRSZWFsVHlwZVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSB0eXBlIG9mIHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVhbFR5cGUodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9ICcnO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHR5cGUgPSAnYXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJ2FueScpIHtcbiAgICAgICAgdHlwZSA9ICdhbnknO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0LlxuICogQG1ldGhvZCBnZXRDbGFzc05hbWVcbiAqIEBwYXJhbSB7dHlwZX0gb2JqIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBlbnVtIHZhbHVlLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbnknOlxuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGUgPT09IHR5cGVvZiB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBoYXMgYSBzcGVjaWZpYyB0eXBlLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaGFzIGZvciB0eXBlIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgICAgICBhdHRyaWJ1dGVUeXBlID0gJyc7XG5cbiAgICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVtOQU1FXSkge1xuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcbiAgICB9XG5cbiAgICBpZiAoY29tcG9uZW50U2NoZW1hKSB7XG4gICAgICAgIGF0dHJpYnV0ZVR5cGUgPSBjb21wb25lbnRTY2hlbWFbbmFtZV07XG4gICAgICAgIGlmIChhdHRyaWJ1dGVUeXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIE1lcmdlIHR3byBzY2hlbWFzLlxuICogQG1ldGhvZCBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWVyZ2UgYWxzbyBwcml2YXRlIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge09iamVjdH0gbWVyZ2VkIHNjaGVtYVxuICovXG5mdW5jdGlvbiBtZXJnZShzb3VyY2UsIHRhcmdldCwgYWxsKSB7XG4gICAgdmFyIHByb3BOYW1lID0gJycsXG4gICAgICAgIHJlc3VsdCA9IHRhcmdldDtcblxuICAgIGZvciAocHJvcE5hbWUgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQWRkIGEgbmV3IHNjaGVtYS5cbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU2NoZW1hIHNjaGVtYSB0byBhZGRcbiAqL1xuZnVuY3Rpb24gc2NoZW1hKGltcG9ydGVkU2NoZW1hKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgbWVyZ2VkU2NoZW1hID0ge30sXG4gICAgICAgIHNjaGVtYXMgPSBbXTtcblxuICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRTY2hlbWEpKTtcbiAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuXG4gICAgaWYgKHR5cGVvZiBzY2hlbWFbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzY2hlbWFbSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NoZW1hW0lOSEVSSVRTXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2NoZW1hW0lOSEVSSVRTXSA9IFsnUnVudGltZUNvbXBvbmVudCddO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3Qoc2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG4gICAgICAgIHNjaGVtYXMgPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHsgJ19uYW1lJzogbmFtZSB9KTtcbiAgICAgICAgaWYgKHNjaGVtYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZXJnZWRTY2hlbWEgPSBtZXJnZShzY2hlbWEsIHNjaGVtYXNbMF0pO1xuICAgICAgICAgICAgZGVsZXRlIG1lcmdlZFNjaGVtYS5faWQ7XG4gICAgICAgICAgICAkZGIuUnVudGltZVNjaGVtYS51cGRhdGUoeyAnX25hbWUnOiBuYW1lIH0sIG1lcmdlZFNjaGVtYSk7XG4gICAgICAgICAgICBpZCA9IHNjaGVtYXNbMF0uX2lkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVTY2hlbWEuaW5zZXJ0KHNjaGVtYSk7XG4gICAgICAgICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFNjaGVtYShzY2hlbWFbTkFNRV0pO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuXG4vKlxuICogQWRkIGEgbmV3IG1vZGVsLlxuICogQG1ldGhvZCBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZE1vZGVsIG1vZGVsIHRvIGFkZFxuICovXG5mdW5jdGlvbiBtb2RlbChpbXBvcnRlZE1vZGVsKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgaWQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgaW5oZXJpdCA9ICcnLFxuICAgICAgICBuYW1lID0gJycsXG4gICAgICAgIG1lcmdlZE1vZGVsID0ge30sXG4gICAgICAgIG1vZGVscyA9IFtdO1xuXG4gICAgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGltcG9ydGVkTW9kZWwpKTtcbiAgICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgICBpZiAodHlwZW9mIG1vZGVsW0lEXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kZWxbSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICAgICAgbW9kZWxzID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHsgJ19uYW1lJzogbmFtZSB9KTtcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lcmdlZE1vZGVsID0gbWVyZ2UobW9kZWwsIG1vZGVsc1swXSk7XG4gICAgICAgICAgICBkZWxldGUgbWVyZ2VkTW9kZWwuX2lkO1xuICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC51cGRhdGUoeyAnX25hbWUnOiBuYW1lIH0sIG1lcmdlZE1vZGVsKTtcbiAgICAgICAgICAgIGlkID0gbW9kZWxzWzBdLl9pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lTW9kZWwuaW5zZXJ0KG1vZGVsKTtcbiAgICAgICAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkTW9kZWwobW9kZWxbTkFNRV0pO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuLypcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkVHlwZSB0eXBlIHRvIGFkZFxuICovXG5mdW5jdGlvbiB0eXBlKGltcG9ydGVkVHlwZSkge1xuICAgIHZhciBpZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBuYW1lID0gaW1wb3J0ZWRUeXBlLm5hbWU7XG5cbiAgICAvLyBjaGVjayBpZiB0eXBlIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgICBpZiAoaXNWYWxpZE9iamVjdChpbXBvcnRlZFR5cGUsIHN0b3JlLm1ldGFkZWYudHlwZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVUeXBlLmluc2VydChpbXBvcnRlZFR5cGUpO1xuICAgICAgICBpZCA9IHJlc3VsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlRGVmaW5pdGlvbihuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWQ7XG59XG5cblxuLypcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNsZWFyKCk7XG4gICAgc3RvcmUubWV0YWRlZiA9IHtcbiAgICAgICAgc2NoZW1hOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX25hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBbXCJSdW50aW1lQ29tcG9uZW50XCJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgXCJfaWRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9uYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9kZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgaW5pdERiU3RydWN0dXJlKCk7XG59XG5cblxuLypcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7XG4gICAgICAgIG1ldGFkZWY6IHt9LFxuICAgICAgICBpbmhlcml0YW5jZToge30sXG4gICAgICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgICAgIHNjaGVtYXM6IHt9LFxuICAgICAgICBjb21waWxlZFNjaGVtYXM6IHt9LFxuICAgICAgICBtb2RlbHM6IHt9LFxuICAgICAgICBnZW5lcmF0ZWRNb2RlbHM6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fVxuICAgIH07XG59XG5cblxuLypcbiAqIENyZWF0ZSB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICRsb2cubW9kZWxDcmVhdGlvbkJlZ2luKCk7XG4gICAgbG9hZEluTWVtb3J5KCk7XG4gICAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gICAgY29tcGlsZVNjaGVtYXMoKTtcbiAgICBnZW5lcmF0ZU1vZGVscygpO1xuICAgIGNoZWNrTW9kZWxzKCk7XG4gICAgZ2V0U3RhdGVzKCk7XG4gICAgY3JlYXRlRGJTdHJ1Y3R1cmUoKTtcbiAgICBjcmVhdGVDbGFzcygpO1xuICAgIGNyZWF0ZUNsYXNzSW5mbygpO1xuICAgICRsb2cubW9kZWxDcmVhdGlvbkVuZCgpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudC5cbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICovXG5mdW5jdGlvbiBpc0V2ZW50KG5hbWUsIGlkKSB7XG4gICAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgRVZFTlRfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGlzUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpc1Byb3BlcnR5KG5hbWUsIGlkKSB7XG4gICAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgUFJPUEVSVFlfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGluay5cbiAqIEBtZXRob2QgaXNMaW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICovXG5mdW5jdGlvbiBpc0xpbmsobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBMSU5LX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpc0NvbGxlY3Rpb24obmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBDT0xMRUNUSU9OX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaXNNZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGlzTWV0aG9kKG5hbWUsIGlkKSB7XG4gICAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgTUVUSE9EX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgaXNTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgYSBzdHJ1Y3R1cmVcbiAqL1xuZnVuY3Rpb24gaXNTdHJ1Y3R1cmUobmFtZSwgaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXSxcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9ICcnLFxuICAgICAgICB0eXBlID0gJyc7XG5cbiAgICBpZiAobW9kZWxbbmFtZV0pIHtcbiAgICAgICAgdHlwZSA9IHN0b3JlLnR5cGVbbW9kZWxbbmFtZV0udHlwZV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5zY2hlbWEpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXSxcbiAgICAgICAgc3RhdGUgPSB7fTtcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHN0YXRlLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cblxuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAgICAgdmFyIHR5cGVEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZURlZi52YWx1ZSkgJiYgdHlwZURlZi52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NoZWNrUmVmZXJlbmNlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIHZhciB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVOYW1lKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKGNvbXBvbmVudCkgIT09IHR5cGVSZWYgJiYgSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50KSAhPT0gJ3t9Jykge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUucmVwbGFjZSgnQCcsICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICByZWFsVHlwZSA9ICcnLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZU5hbWUpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBfY2hlY2tSZWZlcmVuY2UodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1R5cGUodHlwZU5hbWUsICdzdHJpbmcnKSkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCBzdG9yZS50eXBlW3R5cGVOYW1lXS50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBfaXNJbnN0YW5jZU9mKGNvbXBvbmVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnO1xuXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgICAgIGlmIChjb21wb25lbnRDbGFzc05hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGNvbXBvbmVudENsYXNzTmFtZSA9PT0gY2xhc3NOYW1lO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVmZXJlbmNlKHNjaGVtYS50eXBlKSkge1xuICAgICAgICByZXN1bHQgPSBfaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVmZXJlbmNlKHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgICAgICBmaWVsZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgICAgIHR5cGVTY2hlbWEgPSAnJyxcbiAgICAgICAgdHlwZVJlZiA9ICcnLFxuICAgICAgICByZWFsVHlwZSA9ICcnLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFJlZmVyZW5jZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgZW51bVZhbHVlID0gW107XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgfHwgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIG1heWJlIGhhdmUgYSBtb3JlIHN0cmljdCB2YWxpZGF0aW9uIHRoYW4ganVzdCBhIHR5cGUgY2hlY2tpbmdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVJlZiwgZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgICAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGQsIHR5cGVTY2hlbWEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkW2ldLCBzdG9yZS50eXBlW3R5cGVTY2hlbWFbMF1dLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdLCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvLyB0eXBlXG5cbiAgICBpZiAoaGFzVHlwZShvYmplY3QsICdvYmplY3QnKSkge1xuICAgICAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICAgICAgICAgIGlmIChoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRSZWZlcmVuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hbmRhdG9yeVxuICAgICAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlICYmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykgJiYgb2JqZWN0W2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5Rm9ybWF0KG9iamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICogQG1ldGhvZCBpc1ZhbGlkT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3QgdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHN0cmljdFxuICogQHBhcmFtIHtCb29sZWFufSBjbGVhblJlZiB0cnVlIGlmIHdlIHJlbW92ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qob2JqZWN0LCBzY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgICAgICB0eXBlUmVmID0gJycsXG4gICAgICAgIHJlYWxUeXBlID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKGhhc1R5cGUoc3RyaWN0LCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgY3VzdG9tIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICByZWFsVHlwZSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICAgICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW0oZmllbGQsIHJlYWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRUeXBlKGZpZWxkLCByZWFsVHlwZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbXAgPSBudWxsLFxuICAgICAgICAgICAgaXNDb21wb25lbnQgPSBmYWxzZTtcblxuICAgICAgICB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVTY2hlbWEpO1xuICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgICAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAoIWluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgICAgICAgICAvL2lmIChnZXRDbGFzc05hbWUoY29tcCkgIT09IHR5cGVSZWYpIHsgdW5jb21tZW50IHRoaXMgbGluZSBmb3IgYSBzdHJpY3QgbW9kZVxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tcG9uZW50ICYmIGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gY29tcC5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3QgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmIGZpZWxkICE9PSBudWxsICYmIE9iamVjdC5rZXlzKGZpZWxkKS5sZW5ndGggPiAwKTpcbiAgICAgICAgICAgICAgICBjYXNlIGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTpcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgdHlwZUFycmF5ID0gJyc7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYW55JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGQpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZUFycmF5XS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGRbaV0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzZSBvZiBhbiBpbXBvcnQgb2YgYSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkgIT09IGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoZmllbGRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGRbaV0sIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5oZXJpdEZyb20oZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCAnYXJyYXknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25UeXBlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSB8fCBmaWVsZE5hbWUgPT09ICdfY29yZScpIHtcblxuICAgICAgICAgICAgLy8gY2FzZSBvZiBfY29yZVxuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gJ19jb3JlJykge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlU2NoZW1hID0gJ2Jvb2xlYW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYXMgb2YgX2lkXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lID09PSAnX2lkJykge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYW5kYXRvcnlcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHkoZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVPYmplY3Qob2JqZWN0LCBzY2hlbWEpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgICAvLyBtYW5kYXRvcnkgJiBkZWZhdWx0IHZhbHVlXG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICAgICAgaWYgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgIWhhc1R5cGUoZGVmYXVsdFZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogR2V0IGEgc2NoZW1hLlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBnZXRTY2hlbWEobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYSBtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gZ2V0TW9kZWwobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYSB0eXBlLlxuICogQG1ldGhvZCBnZXRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgdHlwZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBnZXRUeXBlKG5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBpZiAoc3RvcmUudHlwZVtuYW1lXSAmJiBzdG9yZS50eXBlW25hbWVdKSB7XG4gICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUudHlwZVtuYW1lXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TWV0YURlZlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICovXG5mdW5jdGlvbiBnZXRNZXRhRGVmKCkge1xuICAgIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgcGFyZW50cyBvZiBhIHNjaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge0FycmF5fSBpZCBpZCBvZiB0aGUgcGFyZW50c1xuICovXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0uc2xpY2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gKiBAbWV0aG9kIGluaGVyaXRGcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgbmFtZSBvZiB0aGUgcGFyZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXRGcm9tKG5hbWUsIHBhcmVudE5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAvKlxuICAgICAqIFxuICAgICAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICAgICAqIEBtZXRob2QgX3NlYXJjaFBhcmVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYW5jZXN0b3JOYW1lIG9mIHRoZSBwYXJlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9IGZhbHNlLFxuICAgICAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIHBhcmVudHMgPSBnZXRQYXJlbnRzKGNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihhbmNlc3Rvck5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICAgIH1cblxuICAgIGlmIChuYW1lICE9PSBwYXJlbnROYW1lKSB7XG4gICAgICAgIHBhcmVudHMgPSBnZXRQYXJlbnRzKG5hbWUpO1xuICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcblxuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YocGFyZW50TmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgcGFyZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBtZXRhbW9kZWwuIDxicj5cbiAqIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAY2xhc3MgcnVudGltZS1tZXRhbW9kZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRhdGEgb2YgdGhlIG1ldGFtb2RlbCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyBzY2hlbWEuXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFNjaGVtYSBhIHNjaGVtYSB0byBhZGRcbiAqL1xuZXhwb3J0cy5zY2hlbWEgPSBzY2hlbWE7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgbW9kZWwuXG4gKiBAbWV0aG9kIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkTW9kZWwgYSBtb2RlIHRvIGFkZFxuICovXG5leHBvcnRzLm1vZGVsID0gbW9kZWw7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgdHlwZS5cbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFR5cGUgdHlwZSB0byBhZGRcbiAqL1xuZXhwb3J0cy50eXBlID0gdHlwZTtcblxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5nZXRTY2hlbWEgPSBnZXRTY2hlbWE7XG5cblxuLyoqXG4gKiBHZXQgYSBtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmdldE1vZGVsID0gZ2V0TW9kZWw7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgZ2V0TWV0YURlZlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbWV0YWRlZmluaXRpb24gb2YgdGhlIG1ldGFtb2RlbFxuICovXG5leHBvcnRzLmdldE1ldGFEZWYgPSBnZXRNZXRhRGVmO1xuXG5cbi8qKlxuICogR2V0IHBhcmVudHMgb2YgYSBzaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFBhcmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZ2V0UGFyZW50cztcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gaW5oZXJpdEZyb207XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdCB0cnVlIGlmIHZhbGlkYXRpb24gaXMgc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmIHRydWUgaWYgd2UgcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkT2JqZWN0ID0gaXNWYWxpZE9iamVjdDtcblxuXG4vKipcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byBwcmVwYXJlXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHNjaGVtYSB0aGF0IHZhbGlkYXRlcyB0aGUgb2JqZWN0XG4gKi9cbmV4cG9ydHMucHJlcGFyZU9iamVjdCA9IHByZXBhcmVPYmplY3Q7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBpc1ZhbGlkVHlwZTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gaXNWYWxpZEVudW07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gaXNWYWxpZFN0YXRlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGlzRXZlbnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gaXNQcm9wZXJ0eTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbGluay5cbiAqIEBtZXRob2QgaXNMaW5rXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbGlua1xuICovXG5leHBvcnRzLmlzTGluayA9IGlzTGluaztcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaXNDb2xsZWN0aW9uID0gaXNDb2xsZWN0aW9uO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGlzTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5leHBvcnRzLmlzTWV0aG9kID0gaXNNZXRob2Q7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgaXNTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgcHJvcGVydHkgaXMgYSBzdHJ1Y3R1cmVcbiAqL1xuZXhwb3J0cy5pc1N0cnVjdHVyZSA9IGlzU3RydWN0dXJlO1xuXG5cbi8qKlxuICogR2V0IGEgdHlwZS5cbiAqIEBtZXRob2QgZ2V0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHR5cGVcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5nZXRUeXBlID0gZ2V0VHlwZTsiLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIFJ1bnRpbWUuIDxicj5cbiAqIEl0IGluaXRzIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBsb2FkcyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1zeXN0ZW1cbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQG1haW4gcnVudGltZVxuICogQGNsYXNzIHJ1bnRpbWVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJHN5c3RlbSA9IHJlcXVpcmUoJy4uL2J1aWxkL3N5c3RlbS9zeXN0ZW0uanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuXG4vKiBQcml2YXRlIFByb3BlcnR5ICovXG5cbnZhciBzeXRlbUlkID0gJycsXG4gICAgc3lzdGVtID0gJyc7XG5cblxuLyogUG9seWZpbGwgKi9cbiRoZWxwZXIucG9seWZpbGwoKTtcblxuLyogSW5pdCBNZXRhbW9kZWwgKi9cblxuXG4kbWV0YW1vZGVsLmluaXQoKTtcblxuXG4vKiBJbml0IHJ1bnRpbWUgZnJvbSBhIHN5c3RlbSAqL1xuXG5cbnN5dGVtSWQgPSAkZGIuc3lzdGVtKCRzeXN0ZW0uc3lzdGVtKTtcbnN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5dGVtSWQpO1xuc3lzdGVtLm1haW4oKTtcblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgUnVudGltZS4gPGJyPlxuICogSXQgaW5pdHMgUnVudGltZSBtZXRhbW9kZWwgYW5kIGxvYWRzIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN5c3RlbVxuICogQG1haW4gcnVudGltZVxuICogQGNsYXNzIHJ1bnRpbWVcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogUnVudGltZSBpbnN0YW5jZS5cbiAqIEBwcm9wZXJ0eSBydW50aW1lXG4gKiBAdHlwZSBSdW50aW1lXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKTsiLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZWNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSwgcGFyYW1ldGVycykge1xuICAgIHN0b3JlW2lkXSA9IHtcbiAgICAgICAgXCJuYW1lXCI6IHN0YXRlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICAgICAgfVxuICAgIH07XG4gICAgJGRiLnN0b3JlLlJ1bnRpbWVTdGF0ZVtpZF0gPSB7XG4gICAgICAgIFwibmFtZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIFwiZGF0YVwiOiBwYXJhbWV0ZXJzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGUgY29tcG9uZW50cy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAY2xhc3MgcnVudGltZS1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IHNldDtcblxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjsiLCIvKlxuICogUnVudGltZVxuICogVGhlIFN5c3RlbSBSdW50aW1lIEVudmlyb25tZW50XG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogQGVjYXJyaW91XG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LTIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgUnVudGltZS4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBydW50aW1lLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtd29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLyoqXG4gKiBUaGUgUnVudGltZUVycm9yIGNsYXNzLlxuICogQGNsYXNzIFJ1bnRpbWVFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIG9mIHRoZSBlcnJvclxuICovXG5mdW5jdGlvbiBSdW50aW1lRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5uYW1lID0gXCJSdW50aW1lRXJyb3JcIjtcbn1cblJ1bnRpbWVFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblJ1bnRpbWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSdW50aW1lRXJyb3I7XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXIgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgbWV0aG9kIGZvciB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgICAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbWluID0gMCxcbiAgICAgICAgbWF4ID0gMDtcblxuICAgIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgICAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSAndW5kZWZpbmVkJyB8fCBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IG1pbiArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1heCA9IG1heCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gobWluKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobWF4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFxuICogU2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBub24gbWFuZGF0b3J5IHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybiB7QXJyYXl9IGFyZ3VtZW50cyB3aXRoIGRlZmF1bHQgdmFsdWVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0eXBlIHJldHVybmVkIGJ5IHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJldHVyblR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcmVzdWx0VHlwZSA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICAgICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQG1ldGhvZCBnZXRQYXJhbVR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtVHlwZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgICAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25Nb2RlbChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBvdXRwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBtZXRob2QgY2hlY2tSZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9ucyBvbiBvdXB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tSZXN1bHQocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbCxcbiAgICAgICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnLFxuICAgICAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIHJldHVyblR5cGUgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgcmV0dXJuVHlwZSA9PT0gJ2FueSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhcnJheSc6XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIHR5cGVvZiBtZXRob2RSZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgYWN0aW9ucyBvZiB0aGUgc3BlY2lmaWVkIHN0YXRlXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnQgYSBSdW50aW1lIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCB0cnVlIGlmIHRoZSBzdGF0ZSBpcyBhbiBldmVudFxuICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgdGhlIGFjdGlvbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoY29tcG9uZW50LCBuYW1lLCBpc0V2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9ICRiZWhhdmlvci5nZXRBY3Rpb25zKGNvbXBvbmVudC5pZCgpLCBuYW1lKSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcGFyZW50ID0gbnVsbDtcblxuICAgIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50cyA9ICRtZXRhbW9kZWwuZ2V0UGFyZW50cyhjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gYW5kIG1ha2Ugc29tZSBEZXBlbmRlbmN5IEluamVjdGlvbiBpZiBpdCBpcyBhIGNvcmUgYWN0aW9uXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNhbGxBY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMsIGlzRXZlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgaW5qZWN0ZWRQYXJhbXMgPSBbXSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGlmICghJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJiAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkpIHtcbiAgICAgICAgcGFyYW1zID0gc2V0RGVmYXVsdFZhbHVlKGNvbXBvbmVudENsYXNzTmFtZSwgc3RhdGUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKHBhcmFtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi51c2VDb3JlQVBJKSB7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjb21wb25lbnQpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkZGIpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbWV0YW1vZGVsKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goZXhwb3J0cyk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRiZWhhdmlvcik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRzdGF0ZSk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRsb2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KGFjdGlvbi5hY3Rpb24sIFtjb21wb25lbnRdLmNvbmNhdChpbmplY3RlZFBhcmFtcykpLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgUnVudGltZUVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuZ2V0UnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGxvZy5hY3Rpb25JbnZva2VFcnJvcihzdGF0ZSwgY29tcG9uZW50LmlkKCksIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXIuXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzTmFtZSwgc3RhdGUsIGFjdGlvbikge1xuICAgIHZhciBmdW5jID0gJycsXG4gICAgICAgIGJlZ2luQm9keSA9IC0xLFxuICAgICAgICBoZWFkZXIgPSAnJyxcbiAgICAgICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcGFyYW1OdW1iZXIgPSAwLFxuICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gW10sXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAgICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cbiAgICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMywgM107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzTGluazpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBnZXRQYXJhbU51bWJlcihjbGFzc05hbWUsIHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIGNvbXBhcmVcbiAgICBpZiAobW9kZWxOdW1iZXJQYXJhbVswXSA8PSBwYXJhbU51bWJlciAmJiBwYXJhbU51bWJlciA8PSBtb2RlbE51bWJlclBhcmFtWzFdKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUGFyYW1zKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICAgICAgYXJncyA9IHBhcmFtcy5hcmdzIHx8ICcnLFxuICAgICAgICBwYXJhbXNOYW1lID0gW10sXG4gICAgICAgIHBhcmFtc1R5cGUgPSBbXSxcbiAgICAgICAgcGFyYW1zTnVtYmVyID0gW10sXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBsZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHBhcmFtID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24obWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgICAgICAgcGFyYW1zVHlwZSA9IFsnbnVtYmVyJywgJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF0sICdzdHJpbmcnXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFszLCAzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzTGluazpcbiAgICAgICAgICAgIHBhcmFtc1R5cGUgPSBbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVdO1xuICAgICAgICAgICAgcGFyYW1zTnVtYmVyID0gWzEsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gZ2V0UGFyYW1UeXBlcyhjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgcGFyYW1zTnVtYmVyID0gZ2V0UGFyYW1OdW1iZXIoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIFxuICAgIGlmIChsZW5ndGggPCBwYXJhbXNOdW1iZXJbMF0gfHwgcGFyYW1zTnVtYmVyWzFdIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcmFtID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChpIDwgcGFyYW1zTnVtYmVyWzBdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXIoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShwYXJhbSwgcGFyYW1zVHlwZVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbVR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUsIHBhcmFtc05hbWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gdGhhdCBjb21lcyBmcm9tIGFuIGV2ZW50LlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gYWN0aW9uKGJlaGF2aW9ySWQsIHBhcmFtcykge1xuICAgIHZhciBpc0V2ZW50ID0gZmFsc2UsXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICBiZWhhdmlvcnMgPSBbXSxcbiAgICAgICAgYmVoYXZpb3IgPSBudWxsLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICAgICAgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgICBiZWhhdmlvcnMgPSAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkXG4gICAgfSk7XG5cbiAgICBhY3Rpb25Gcm9tTWVtb3J5ID0gJGJlaGF2aW9yLmdldChiZWhhdmlvcklkKTtcblxuICAgIGlmIChiZWhhdmlvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJlaGF2aW9yID0gYmVoYXZpb3JzWzBdO1xuXG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGJlaGF2aW9yLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNDb2xsZWN0aW9uIHx8IGlzTGluaykge1xuICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBiZWhhdmlvci5zdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBcInVzZUNvcmVBUElcIjogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogYWN0aW9uRnJvbU1lbW9yeVxuICAgICAgICAgICAgICAgIH0sIHBhcmFtcywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCwgYSBwcm9wZXJ0eSBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFjdGlvbnMgZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBpbnB1dHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA2LiBJZiBhIG1ldGhvZCwgY2hlY2sgaWYgdGhlIG91dHB1dCBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNy4gSWYgYWxsIGlzIG9rLCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIDxicj5cbiAqIDguIFJldHVybiB0aGUgcmVzdWx0IDxicj5cbiAqIFxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZSA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbXTtcblxuICAgIHZhciBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBjdXJyZW50U3RhdGUgPSAnJyxcbiAgICAgICAgYWN0aW9ucyA9IFtdLFxuICAgICAgICBhY3Rpb24gPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBudWxsLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2UsXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICBpc0V2ZW50ID0gZmFsc2U7XG5cbiAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcblxuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgYWN0aW9ucyA9IGdldEFjdGlvbnMoY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGlzRXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChjaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgXCJhcmdzXCI6IHBhcmFtcy5kYXRhXG4gICAgICAgIH0pKSB7XG5cbiAgICAgICAgICAgIGlmICghaXNFdmVudCAmJlxuICAgICAgICAgICAgICAgICFpc1Byb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgIWlzTGluayAmJlxuICAgICAgICAgICAgICAgICFpc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zWzBdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFJlc3VsdFwiOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsQWN0aW9uKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBhY3Rpb24sIHBhcmFtcy5kYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0xpbmsgfHwgaXNDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmZ1bmN0aW9uIHN0b3AocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmFtcy5lcnJvciA9IGZhbHNlO1xuICAgIH1cbiAgICBwYXJhbXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8ICcnO1xuXG4gICAgZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLmVycm9yKSB7XG4gICAgICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcigncnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoJ3J1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIG9mIGFuIHVua25vd24gZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgICAkbG9nLndvcmtmbG93UmVzdGFydGVkKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgUnVudGltZS4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBvZiBSdW50aW1lIGluc3RhbmNlLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtd29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFuIGFjdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgbm90IGFuIG9mIGV2ZW50LCBjaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IHN0YXRlO1xuXG5cbi8qKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZXhwb3J0cy5zdG9wID0gc3RvcDtcblxuXG4vKipcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmV4cG9ydHMucmVzdGFydCA9IHJlc3RhcnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja1BhcmFtcyA9IGNoZWNrUGFyYW1zO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlci5cbiAqIEBtZXRob2QgdmFsaWRQYXJhbU51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGFjdGlvbiBpcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0cy52YWxpZFBhcmFtTnVtYmVycyA9IHZhbGlkUGFyYW1OdW1iZXJzO1xuXG5cbi8qKlxuICogQ2FsbCBhbiBhY3Rpb24gdGhhdCBjb21lcyBmcm9tIGFuIGV2ZW50LlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0cy5hY3Rpb24gPSBhY3Rpb247Il19
