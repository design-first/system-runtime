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
            "start": {}
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
        "1df53118861e8c6": {
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
            "_id": "1df53118861e8c6"
        },
        "10a05183f21d11f": {
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
            "_id": "10a05183f21d11f"
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
        "185b6193a317bee": {
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
            "_id": "185b6193a317bee"
        },
        "1f42d161a617c02": {
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
            "_id": "1f42d161a617c02"
        },
        "1d9f6184e31cd74": {
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
            "_id": "1d9f6184e31cd74"
        },
        "1f10014f6311478": {
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
            "_id": "1f10014f6311478"
        },
        "1fa8b15f7d16e42": {
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
            "_id": "1fa8b15f7d16e42"
        },
        "1b83c16bcc1f9b7": {
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
            "_id": "1b83c16bcc1f9b7"
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
            "start": "method"
        },
        "104ad1f48518376": {
            "_id": "104ad1f48518376",
            "_name": "RuntimeChannel",
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
            "_core": true,
            "send": "event"
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
        "15f3f19905106b5": {
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
            "_id": "15f3f19905106b5"
        },
        "1a4c612c811f2f0": {
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
            "_id": "1a4c612c811f2f0"
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
        "169ae1bb3714dd5": {
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
            "_id": "169ae1bb3714dd5"
        },
        "10b2d14dcd1c48b": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": "property",
            "debug": "method",
            "info": "method",
            "warn": "method",
            "error": "method",
            "_id": "10b2d14dcd1c48b"
        },
        "19ebb102421027f": {
            "_name": "RuntimeMessage",
            "_inherit": [],
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property",
            "_id": "19ebb102421027f"
        },
        "1f3ff1da071e859": {
            "_name": "RuntimeMetamodel",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "schema": "method",
            "model": "method",
            "type": "method",
            "create": "method",
            "_id": "1f3ff1da071e859"
        },
        "1855e12f4111de8": {
            "_name": "RuntimeState",
            "_inherit": [],
            "_core": true,
            "_class": false,
            "name": "property",
            "parameters": "property",
            "_id": "1855e12f4111de8"
        },
        "1084a1ebf414cc7": {
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
            "_id": "1084a1ebf414cc7"
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
            "action": "function start() {\n    var RuntimeChannel = null,\n        runtimeChannel = null;\n        \n    if (!this.require('channel-admin')) {\n        RuntimeChannel = this.require('RuntimeChannel');\n        runtimeChannel = new RuntimeChannel({\n            '_id': 'channel-admin',\n            '_core': true\n        });\n        \n        runtimeChannel.on('send', function send(message) {\n            localStorage.setItem('system-designer-message', JSON.stringify(message));\n        });\n        \n        // schema change events\n        runtimeChannel.on('createSchema', function createSchema(id, schema) {\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('updateSchema', function updateSchema(id, schema) {\n             this.require('metamodel').type(schema);\n             this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('deleteSchema', function deleteSchema(id) {\n            $db.Runtime.remove({'_id': id});\n            this.require('metamodel').create();\n        }, true);\n        \n        // model change events\n        runtimeChannel.on('createModel', function createModel(id, model) {\n            this.require('metamodel').schema(model);\n            this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('updateModel', function updateModel(id, model) {\n             this.require('metamodel').type(model);\n             this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('deleteModel', function deleteModel(id) {\n            $db['Runtime'].remove({'_id': id});\n            this.require('metamodel').create();\n            $component.removeFromMemory(id);\n        }, true);\n        \n        // type change events\n        runtimeChannel.on('createType', function createType(id, type) {\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('updateType', function updateType(id, type) {\n             this.require('metamodel').type(type);\n             this.require('metamodel').create();\n        }, true);\n        \n        runtimeChannel.on('deleteType', function deleteType(id) {\n            $db.RuntimeType.remove({'_id': id});\n            this.require('metamodel').create();\n        }, true);\n        \n        // component change events\n        runtimeChannel.on('createComponent', function createComponent(model, component) {\n            $db[model].insert(component);\n        }, true);\n        \n        runtimeChannel.on('updateComponent', function updateComponent(id, collection, component) {\n            $db[collection].update({'_id': id}, component);\n        }, true);\n        \n        runtimeChannel.on('deleteComponent', function deleteComponent(id, collection) {\n            $db[collection].remove({'_id': id});\n        }, true);\n        \n        // behavior change events\n        runtimeChannel.on('createBehavior', function createBehavior(component) {\n            $db.RuntimeBehavior.insert(component);\n        }, true);\n        runtimeChannel.on('updateBehavior', function updateBehavior(id, behavior) {\n            this.require(id).action(behavior.action);\n        });\n        runtimeChannel.on('deleteBehavior', function deleteBehavior(id) {\n            $db.RuntimeBehavior.remove({'_id': id});                  \n        }, true);\n     \n        // System Designer event\n        runtimeChannel.on('sync', function sync() {\n            this.loadSystem(JSON.parse(this.require('db').system()));\n        });\n\n        window.addEventListener('storage', function (e) {\n            if (e.key === 'system-designer-message') {\n                $db.RuntimeMessage.insert(JSON.parse(e.newValue));\n            }\n        });\n        \n        this.require('logger').info('admin is started');\n    } else {\n        this.require('logger').info('admin is already started');\n    }\n}",
            "useCoreAPI": true,
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
            "action": "function main() {\n    var subsystems = [],\n        systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n    subsystems = $db.RuntimeSystem.find({\n        'subsystem': true\n    });\n    subsystems.forEach(function (subsystem) {\n        var subsystemId = subsystem._id;\n        this.require(subsystemId).main();\n    }, this); \n    \n    if (typeof document !== 'undefined') {\n        systems = document.querySelectorAll('link[rel=system]');\n        length = systems.length;\n        \n        // logger\n        scripts = document.querySelectorAll('script[log]');\n        if (scripts.length) {\n            logLevel = scripts[0].getAttribute('log');\n            this.require('logger').level(logLevel);\n        }\n        \n        // systems\n        for (i = 0; i < length; i++) {\n            system = systems[i];\n            \n            if (system.getAttribute('async') === 'false') {\n                this.require('runtime').load(system.href, false);\n            } else {\n                this.require('runtime').load(system.href, true);\n            }\n        }\n        \n        // debug\n        scripts = document.querySelectorAll('script[debug]');\n        if (scripts.length) {\n            this.require('admin').start();\n        }\n        \n        // ready event\n        if (length === 0) {\n           this.require('runtime').ready();\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "18bf61a96817464": {
            "_id": "18bf61a96817464",
            "component": "Runtime",
            "state": "system",
            "action": "function system(name) {\n    var System = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        System = this.require('RuntimeSystem');\n        system = new System(conf);\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1be291b7dc1a504": {
            "_id": "1be291b7dc1a504",
            "component": "RuntimeClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "1b8361b5db12877": {
            "_id": "1b8361b5db12877",
            "component": "RuntimeClassInfo",
            "state": "collections",
            "action": "function collections() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.metamodel()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "1326f1513012b57": {
            "_id": "1326f1513012b57",
            "component": "RuntimeClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "17921117211c8e2": {
            "_id": "17921117211c8e2",
            "component": "RuntimeClassInfo",
            "state": "events",
            "action": "function events() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "1f89f10a1e10e22": {
            "_id": "1f89f10a1e10e22",
            "component": "RuntimeClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1df9516be01e535": {
            "_id": "1df9516be01e535",
            "component": "RuntimeClassInfo",
            "state": "links",
            "action": "function links() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "186241c1b71fe89": {
            "_id": "186241c1b71fe89",
            "component": "RuntimeClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.metamodel()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "1b6e015c4317f52": {
            "_id": "1b6e015c4317f52",
            "component": "RuntimeClassInfo",
            "state": "methods",
            "action": "function methods() {\n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1e4e512b0619bef": {
            "_id": "1e4e512b0619bef",
            "component": "RuntimeClassInfo",
            "state": "properties",
            "action": "function properties() { \n    var keys = Object.keys(this.metamodel()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.metamodel()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "18b6a141061eebe": {
            "_id": "18b6a141061eebe",
            "component": "RuntimeClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.metamodel()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1e712114c018e5c": {
            "_id": "1e712114c018e5c",
            "component": "RuntimeComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e542197011dade": {
            "_id": "1e542197011dade",
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 7; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "17b2c1694113fe5": {
            "_id": "17b2c1694113fe5",
            "component": "RuntimeComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "17bd8116991929b": {
            "_id": "17bd8116991929b",
            "component": "RuntimeDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Runtime') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1d4f9159a4190fb": {
            "_id": "1d4f9159a4190fb",
            "component": "RuntimeDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "15280119d017b2a": {
            "_id": "15280119d017b2a",
            "component": "RuntimeDatabase",
            "state": "system",
            "action": "function system(system) {\n    return $db.system(system);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1b9501d71c1eea7": {
            "_id": "1b9501d71c1eea7",
            "component": "RuntimeLogger",
            "state": "debug",
            "action": "function debug(message) {\n    if (this.level() === 'debug') {\n        console.log('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "18b891eb7f1b70f": {
            "_id": "18b891eb7f1b70f",
            "component": "RuntimeLogger",
            "state": "error",
            "action": "function error(message) {\n    console.error('runtime: ' + message);\n}",
            "core": true
        },
        "1dee4116b417466": {
            "_id": "1dee4116b417466",
            "component": "RuntimeLogger",
            "state": "info",
            "action": "function info(message) {\n    if (this.level() === 'info' || this.level() === 'debug') {\n        console.info('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "1e4f11503b110e4": {
            "_id": "1e4f11503b110e4",
            "component": "RuntimeLogger",
            "state": "level",
            "action": "function level(val) {\n    $log.level(val);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1afdd1bdff1b3ba": {
            "_id": "1afdd1bdff1b3ba",
            "component": "RuntimeLogger",
            "state": "warn",
            "action": "function warn(message) {\n    if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n        console.warn('runtime: ' + message);\n    } \n}",
            "core": true
        },
        "163fe14de012e28": {
            "_id": "163fe14de012e28",
            "component": "RuntimeMetamodel",
            "state": "create",
            "action": "function create() {\n        $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "17351110a71c96b": {
            "_id": "17351110a71c96b",
            "component": "RuntimeMetamodel",
            "state": "model",
            "action": "function model(model) {\n    return $metamodel.model(model);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "155b21b728172ce": {
            "_id": "155b21b728172ce",
            "component": "RuntimeMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    return $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1201f1536818bdd": {
            "_id": "1201f1536818bdd",
            "component": "RuntimeMetamodel",
            "state": "type",
            "action": "function type(type) {\n    return $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1a5111889919316": {
            "_id": "1a5111889919316",
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
                "version": "1.5.5"
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
                "version": "0.5.0",
                "description": "Runtime Component administration ",
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
    "version": "1.5.5",
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
