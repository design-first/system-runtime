(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
            "_core": true,
            "$editorUpdateSchemaName": {
                "params": [{
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "id",
                        "type": "string"
                    }
                ]
            },
            "$designerSync": {},
            "$appLoadSystem": {
                "params": [{
                    "name": "system",
                    "type": "object"
                }]
            },
            "$designerCreateBehavior": {
                "params": [{
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "$editorUpdateBehavior": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "behavior",
                        "type": "object"
                    }
                ]
            },
            "$designerUpdateBehavior": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "behavior",
                        "type": "object"
                    }
                ]
            },
            "$editorDeleteBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "$designerDeleteBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "$designerCreateComponent": {
                "params": [{
                        "name": "collection",
                        "type": "string"
                    },
                    {
                        "name": "component",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    },
                    {
                        "name": "component",
                        "type": "object"
                    }
                ]
            },
            "$designerUpdateComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    },
                    {
                        "name": "component",
                        "type": "object"
                    }
                ]
            },
            "$editorDeleteComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    }
                ]
            },
            "$designerDeleteComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    }
                ]
            },
            "$designerCreateType": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "type",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateType": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "type",
                        "type": "object"
                    }
                ]
            },
            "$editorDeleteType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "$designerCreateSchema": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "schema",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateSchema": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "schema",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateSchemaId": {
                "params": [{
                        "name": "oldId",
                        "type": "string"
                    },
                    {
                        "name": "newId",
                        "type": "string"
                    }
                ]
            },
            "$designerDeleteSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "$designerCreateModel": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "model",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateModel": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "model",
                        "type": "object"
                    }
                ]
            },
            "$designerUpdateModel": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "model",
                        "type": "object"
                    }
                ]
            },
            "$editorUpdateModelId": {
                "params": [{
                        "name": "oldId",
                        "type": "string"
                    },
                    {
                        "name": "newId",
                        "type": "string"
                    }
                ]
            },
            "$designerDeleteModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }]
            },
            "$editorUpdateSystem": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "system",
                        "type": "object"
                    }
                ]
            },
            "$appLogDebug": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "$appLogInfo": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "$appLogWarn": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "$appLogError": {
                "params": [{
                    "name": "message",
                    "type": "string"
                }]
            },
            "$runtimeCreateComponent": {
                "params": [{
                        "name": "collection",
                        "type": "string"
                    },
                    {
                        "name": "component",
                        "type": "object"
                    }
                ]
            },
            "$runtimeDeleteComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    }
                ]
            },
            "$runtimeUpdateComponent": {
                "params": [{
                        "name": "id",
                        "type": "string"
                    },
                    {
                        "name": "collection",
                        "type": "string"
                    },
                    {
                        "name": "field",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "any"
                    }
                ]
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "message"
                }]
            },
            "$systemInstalled": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "$systemResolved": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "$systemUninstalled": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "$systemStarted": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "$systemStopped": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
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
                    },
                    {
                        "name": "value",
                        "type": "any",
                        "mandatory": true,
                        "default": null
                    }
                ]
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
            "_core": true,
            "version": {
                "type": "string",
                "readOnly": true,
                "mandatory": true,
                "default": "0.0.0"
            },
            "system": {
                "params": [{
                    "name": "params",
                    "type": "any",
                    "mandatory": false
                }],
                "result": "object"
            },
            "message": {
                "params": [{
                    "name": "msg",
                    "type": "message",
                    "mandatory": true
                }]
            },
            "ready": {}
        },
        "166971fd9d107fd": {
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
            "_id": "166971fd9d107fd"
        },
        "158321dced1014a": {
            "_name": "RuntimeClassInfo",
            "_core": true,
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
            "_id": "158321dced1014a",
            "schema": {
                "type": "object",
                "readOnly": true,
                "mandatory": true,
                "default": {}
            }
        },
        "123751cb591de26": {
            "_id": "123751cb591de26",
            "_name": "RuntimeComponent",
            "_core": true,
            "on": {
                "params": [{
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "name": "handler",
                        "type": "function"
                    },
                    {
                        "name": "useCoreAPI",
                        "type": "boolean",
                        "mandatory": false,
                        "default": false
                    },
                    {
                        "name": "isCore",
                        "type": "boolean",
                        "mandatory": false,
                        "default": false
                    }
                ]
            },
            "off": {
                "params": [{
                        "name": "state",
                        "type": "string",
                        "mandatory": false
                    },
                    {
                        "name": "behaviorId",
                        "type": "string",
                        "mandatory": false
                    }
                ]
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
        "18a51169d7112d4": {
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
                    "name": "event",
                    "type": "dbInsertEvent"
                }]
            },
            "update": {
                "params": [{
                    "name": "event",
                    "type": "dbUpdateEvent"
                }]
            },
            "remove": {
                "params": [{
                    "name": "event",
                    "type": "dbRemoveEvent"
                }]
            },
            "_id": "18a51169d7112d4"
        },
        "16b9d1ac2216ffe": {
            "_id": "16b9d1ac2216ffe",
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
                    "type": "any"
                }]
            },
            "info": {
                "params": [{
                    "name": "message",
                    "type": "any"
                }]
            },
            "warn": {
                "params": [{
                    "name": "message",
                    "type": "any"
                }]
            },
            "error": {
                "params": [{
                    "name": "message",
                    "type": "any"
                }]
            }
        },
        "1d9b6139411aa91": {
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
            "_id": "1d9b6139411aa91"
        },
        "1628c13c22152e6": {
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
            "_id": "1628c13c22152e6"
        },
        "177ac136891629f": {
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
            "_id": "177ac136891629f"
        },
        "170521b88614387": {
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
            "_id": "170521b88614387"
        },
        "100b91ed2211b15": {
            "_id": "100b91ed2211b15",
            "_name": "RuntimeOSGi",
            "install": {
                "params": [{
                        "name": "url",
                        "type": "any",
                        "mandatory": true,
                        "default": ""
                    },
                    {
                        "name": "async",
                        "type": "boolean",
                        "mandatory": false,
                        "default": true
                    }
                ],
                "result": "string"
            },
            "uninstall": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "start": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "stop": {
                "params": [{
                    "name": "id",
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }]
            },
            "status": {
                "result": "object"
            },
            "_core": true,
            "bundle": {
                "result": "string"
            }
        },
        "1b2811b092143f5": {
            "_id": "1b2811b092143f5",
            "_name": "RuntimeSystemOSGi",
            "start": {},
            "stop": {},
            "_core": true,
            "state": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": "none"
            },
            "location": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "uninstall": {},
            "bundle": {
                "result": "string"
            }
        },
        "o1e1e01e6b41cec3": {
            "_id": "o1e1e01e6b41cec3",
            "_name": "RuntimeLog",
            "action": {
                "type": "dbAction",
                "readOnly": false,
                "mandatory": false,
                "default": "insert"
            },
            "collection": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "id": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "field": {
                "type": "string",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "value": {
                "type": "any",
                "readOnly": false,
                "mandatory": false,
                "default": ""
            },
            "order": {
                "type": "number",
                "readOnly": false,
                "mandatory": false,
                "default": 0
            },
            "_core": true
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
            "$editorUpdateSystem": "event",
            "$editorUpdateSchema": "event",
            "$editorUpdateSchemaId": "event",
            "$editorUpdateSchemaName": "event",
            "$editorUpdateModel": "event",
            "$editorUpdateModelId": "event",
            "$editorUpdateType": "event",
            "$editorDeleteType": "event",
            "$editorUpdateBehavior": "event",
            "$editorDeleteBehavior": "event",
            "$editorUpdateComponent": "event",
            "$editorDeleteComponent": "event",
            "$appLogDebug": "event",
            "$appLogInfo": "event",
            "$appLogWarn": "event",
            "$appLogError": "event",
            "$appLoadSystem": "event",
            "$designerSync": "event",
            "$designerCreateBehavior": "event",
            "$designerCreateComponent": "event",
            "$designerCreateType": "event",
            "$designerCreateSchema": "event",
            "$designerCreateModel": "event",
            "$designerDeleteSchema": "event",
            "$designerDeleteModel": "event",
            "$designerDeleteType": "event",
            "$designerDeleteBehavior": "event",
            "$designerDeleteComponent": "event",
            "$designerUpdateComponent": "event",
            "$designerUpdateModel": "event",
            "$designerUpdateBehavior": "event",
            "$runtimeCreateComponent": "event",
            "$runtimeDeleteComponent": "event",
            "$runtimeUpdateComponent": "event",
            "_inherit": [
                "RuntimeComponent"
            ],
            "send": "event",
            "$systemInstalled": "event",
            "$systemResolved": "event",
            "$systemStarted": "event",
            "$systemStopped": "event",
            "$systemUninstalled": "event"
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
            "_inherit": [
                "RuntimeOSGi"
            ],
            "_core": true,
            "version": "property",
            "system": "method",
            "message": "method",
            "ready": "event"
        },
        "1ac07185641fa9f": {
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
            "_id": "1ac07185641fa9f"
        },
        "1c00b13a1b1bc92": {
            "_name": "RuntimeClassInfo",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "model": "property",
            "schema": "property",
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
            "_id": "1c00b13a1b1bc92"
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
        "1723516a30132ac": {
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
            "_id": "1723516a30132ac"
        },
        "1268f1dddd1fea7": {
            "_name": "RuntimeLogger",
            "_core": true,
            "level": "property",
            "debug": "method",
            "info": "method",
            "warn": "method",
            "error": "method",
            "_id": "1268f1dddd1fea7"
        },
        "14caa1c46414ee1": {
            "_name": "RuntimeMessage",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "event": "property",
            "from": "property",
            "data": "property",
            "_id": "14caa1c46414ee1"
        },
        "193f1166eb16609": {
            "_name": "RuntimeMetamodel",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "schema": "method",
            "model": "method",
            "type": "method",
            "create": "method",
            "_id": "193f1166eb16609"
        },
        "158711d6f215e4b": {
            "_name": "RuntimeState",
            "_inherit": [],
            "_core": true,
            "_class": false,
            "name": "property",
            "parameters": "property",
            "_id": "158711d6f215e4b"
        },
        "1cb761fa4510dca": {
            "_id": "1cb761fa4510dca",
            "_name": "RuntimeSystem",
            "_inherit": [
                "RuntimeSystemOSGi"
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
            "ready": "event"
        },
        "157931f7a31b61d": {
            "_id": "157931f7a31b61d",
            "_name": "RuntimeOSGi",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "install": "method",
            "uninstall": "method",
            "start": "method",
            "stop": "method",
            "status": "method",
            "bundle": "method"
        },
        "145fe10c7514298": {
            "_id": "145fe10c7514298",
            "_name": "RuntimeSystemOSGi",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "state": "property",
            "location": "property",
            "start": "method",
            "stop": "method",
            "uninstall": "method",
            "bundle": "method"
        },
        "f1a10d1067d1b23a": {
            "_id": "f1a10d1067d1b23a",
            "_name": "RuntimeLog",
            "_inherit": [
                "RuntimeComponent"
            ],
            "_core": true,
            "action": "property",
            "collection": "property",
            "id": "property",
            "field": "property",
            "value": "property",
            "order": "property"
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
        },
        "osgiStates": {
            "name": "osgiStates",
            "type": "string",
            "value": [
                "none",
                "installed",
                "resolved",
                "starting",
                "active",
                "stopping",
                "uninstalled"
            ],
            "core": true
        },
        "text": {
            "name": "text",
            "type": "string",
            "core": true
        },
        "dbInsertEvent": {
            "_id": "148ef1e19810e6d",
            "core": true,
            "name": "dbInsertEvent",
            "type": "object",
            "schema": {
                "collection": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                },
                "document": {
                    "type": "object",
                    "mandatory": true,
                    "default": {}
                }
            }
        },
        "dbRemoveEvent": {
            "_id": "1952e1ac4213f4a",
            "name": "dbRemoveEvent",
            "type": "object",
            "core": true,
            "schema": {
                "collection": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                },
                "id": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                }
            }
        },
        "dbUpdateEvent": {
            "_id": "1f5c41309711752",
            "core": true,
            "name": "dbUpdateEvent",
            "type": "object",
            "schema": {
                "collection": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                },
                "id": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                },
                "field": {
                    "type": "string",
                    "mandatory": true,
                    "default": ""
                },
                "value": {
                    "type": "any",
                    "mandatory": true,
                    "default": null
                }
            }
        },
        "dbAction": {
            "_id": "e1950e16f2914da9",
            "core": true,
            "name": "dbAction",
            "type": "string",
            "value": [
                "insert",
                "update",
                "remove"
            ]
        }
    },
    "behaviors": {
        "1c00c107e01c9b3": {
            "_id": "1c00c107e01c9b3",
            "component": "RuntimeAdmin",
            "state": "start",
            "action": "function start() {\n    var RuntimeChannel = null,\n        channel = null,\n        db = this.require('db');\n\n    if (!this.require('channel-admin')) {\n        RuntimeChannel = this.require('RuntimeChannel');\n        channel = new RuntimeChannel({\n            '_id': 'channel-admin',\n            '_core': true\n        });\n        \n        // for jquery compatibility in electron\n        if (typeof global !== 'undefined' && typeof window !== 'undefined') {\n            delete module;\n        }\n\n        channel.on('send', function send(message) {\n            this.require('admin').designerWindow().postMessage(JSON.stringify(message), '*');\n        }, false, true);\n\n        // schema change events\n        channel.on('$designerCreateSchema', function $designerCreateSchema(id, schema) {\n            this.require('logger').level('warn');\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$editorUpdateSchema', function $editorUpdateSchema(id, schema) {\n            this.require('logger').level('warn');\n            this.require('metamodel').schema(schema);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$designerDeleteSchema', function $designerDeleteSchema(id) {\n            this.require('logger').level('warn');\n            var search = $db.RuntimeSchema.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeSchema.remove({ '_id': id });\n\n                search = $db.RuntimeModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n\n                search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n                if (search.length) {\n                    modelId = search[0]._id;\n                    $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                    $component.removeFromMemory(modelName);\n                }\n                this.require('metamodel').create();\n            }\n            this.require('logger').level('debug');\n        }, true, true);\n\n        // model change events\n        channel.on('$designerCreateModel', function $designerCreateModel(id, model) {\n            this.require('logger').level('warn');\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$editorUpdateModel', function $editorUpdateModel(id, model) {\n            this.require('logger').level('warn');\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$designerUpdateModel', function $designerUpdateModel(id, model) {\n            this.require('logger').level('warn');\n            this.require('metamodel').model(model);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$designerDeleteModel', function $designerDeleteModel(id) {\n            this.require('logger').level('warn');\n            var search = $db.RuntimeModel.find({ '_id': id }),\n                modelName = '',\n                modelId = '';\n\n            if (search.length) {\n                modelName = search[0]._name;\n                $db.RuntimeModel.remove({ '_id': id });\n                $component.removeFromMemory(modelName);\n            }\n\n            search = $db.RuntimeGeneratedModel.find({ '_name': modelName });\n            if (search.length) {\n                modelId = search[0]._id;\n                $db.RuntimeGeneratedModel.remove({ '_id': modelId });\n                $component.removeFromMemory(modelName);\n            }\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        // type change events\n        channel.on('$designerCreateType', function $designerCreateType(id, type) {\n            this.require('logger').level('warn');\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$editorUpdateType', function $editorUpdateType(id, type) {\n            this.require('logger').level('warn');\n            this.require('metamodel').type(type);\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n\n        }, true, true);\n\n        channel.on('$editorDeleteType', function $editorDeleteType(id) {\n            this.require('logger').level('warn');\n            $db.RuntimeType.remove({ 'name': id });\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        channel.on('$designerDeleteType', function $designerDeleteType(id) {\n            this.require('logger').level('warn');\n            $db.RuntimeType.remove({ 'name': id });\n            this.require('metamodel').create();\n            this.require('logger').level('debug');\n        }, true, true);\n\n        // component change events\n        channel.on('$designerCreateComponent', function $designerCreateComponent(model, component) {\n            $db[model].insert(component);\n        }, true, true);\n\n        channel.on('$editorUpdateComponent', function $editorUpdateComponent(id, collection, component) {\n            $db[collection].update({ '_id': id }, component, { 'upsert': true });\n        }, true, true);\n\n        channel.on('$designerUpdateComponent', function $editorUpdateComponent(id, collection, component) {\n            $db[collection].update({ '_id': id }, component, { 'upsert': true });\n        }, true, true);\n\n        channel.on('$editorDeleteComponent', function $editorDeleteComponent(id, collection) {\n            $db[collection].remove({ '_id': id });\n        }, true, true);\n\n        channel.on('$designerDeleteComponent', function $designerDeleteComponent(id, collection) {\n            $db[collection].remove({ '_id': id });\n        }, true, true);\n\n        // behavior change events\n        channel.on('$designerCreateBehavior', function createBehavior(component) {\n            $db.RuntimeBehavior.insert(component);\n        }, true, true);\n\n        channel.on('$editorUpdateBehavior', function $editorUpdateBehavior(id, behavior) {\n            if (this.require(id)) {\n                this.require(id).action(behavior.action);\n                if (behavior.state === 'main') {\n                    this.require(behavior.component).main();\n                }\n                if (behavior.state === 'start') {\n                    this.require(behavior.component).start();\n                }\n            }\n        }, true, true);\n\n        channel.on('$designerUpdateBehavior', function $designerUpdateBehavior(id, behavior) {\n            if (this.require(id)) {\n                this.require(id).action(behavior.action);\n                if (behavior.state === 'main') {\n                    this.require(behavior.component).main();\n                }\n                if (behavior.state === 'start') {\n                    this.require(behavior.component).start();\n                }\n            }\n        }, true, true);\n\n        channel.on('$editorDeleteBehavior', function $editorDeleteBehavior(id) {\n            $db.RuntimeBehavior.remove({ '_id': id });\n        }, true, true);\n\n        channel.on('$designerDeleteBehavior', function $editorDeleteBehavior(id) {\n            $db.RuntimeBehavior.remove({ '_id': id });\n        }, true, true);\n\n        // System Designer event\n        channel.on('$designerSync', function sync() {\n            var designerWindow = this.require('admin').designerWindow(),\n                system = null;\n\n            this.require('admin').designerWindow(null);\n            system = JSON.parse(this.require('db').system());\n            designerWindow = this.require('admin').designerWindow(designerWindow);\n\n            this.$appLoadSystem(system);\n        }, false, true);\n        \n        // Database insert event\n        db.on('insert', function insert(event) {\n          if (event.collection.indexOf('Runtime') !== 0) {\n            this.require('channel').$runtimeCreateComponent(event.collection, event.document);\n          }\n        });\n        \n         // Database remove event\n        db.on('remove', function remove(event) {\n          if (event.collection.indexOf('Runtime') !== 0) {\n            this.require('channel').$runtimeDeleteComponent(event.id, event.collection);\n          }\n        });\n        \n         // Database update event\n        db.on('update', function update(event) {\n          if (event.collection.indexOf('Runtime') !== 0) {\n            this.require('channel').$runtimeUpdateComponent(event.id, event.collecion, event.field, event.value);\n          }\n        });\n\n        window.addEventListener('message', function (event) {\n            var data = null;\n            try {\n                data = JSON.parse(event.data);\n                if (data &&\n                    typeof data.event !== 'undefined' &&\n                    typeof data.from !== 'undefined' &&\n                    typeof data.data !== 'undefined') {\n                    this.designerWindow(event.source);\n                    $db.RuntimeMessage.insert(data);\n                }\n            } catch (e) {\n            }\n        }.bind(this), false);\n\n        this.require('logger').info('admin is started');\n    } else {\n        this.require('logger').info('admin is already started');\n    }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1ca0f1020412d4f": {
            "_id": "1ca0f1020412d4f",
            "component": "RuntimeStorage",
            "state": "get",
            "action": "function get(key) {\n  var result = null;\n  \n  if (typeof this.store()[key]) {\n    result = this.store()[key];\n  }\n  return result;\n}",
            "useCoreAPI": false,
            "core": true
        },
        "16764100d51b5f8": {
            "_id": "16764100d51b5f8",
            "component": "RuntimeStorage",
            "state": "set",
            "action": "function set(key, value) {\n    var store = this.store(),\n        item = {};\n    \n    store[key] = value;\n    this.store(store);\n\n    item[key] = JSON.stringify(value);\n    \n    try {\n      switch (true) {\n        case typeof localStorage !== 'undefined':\n          localStorage.setItem(key, JSON.stringify(value)); \n          break;\n        default:\n          break;\n      }\n    } catch(e) {}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "134b616b1016f60": {
            "_id": "134b616b1016f60",
            "component": "RuntimeStorage",
            "state": "clear",
            "action": "function clear() {\n  this.store({});\n  try {  \n    switch (true) {\n      case typeof localStorage !== 'undefined':\n        localStorage.clear(); \n        break;\n      default:\n        break;\n    }\n  }  catch(e) {}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "14c7f1a8431b3d5": {
            "_id": "14c7f1a8431b3d5",
            "component": "RuntimeStorage",
            "state": "init",
            "action": "function init(conf) {\n  try {\n    switch (true) {\n      case typeof localStorage !== 'undefined':\n        // init \n        var keys = Object.keys(localStorage),\n            store = {},\n            i = 0,\n            length = 0;\n            \n        length = keys.length;    \n        for (i = 0; i < length; i++) {\n            try {\n              store[keys[i]] = JSON.parse(localStorage[keys[i]]);\n            } catch (e) {}\n        }\n        this.store(store);\n        \n        // event\n        window.addEventListener('storage', function (e) {\n          var obj = {},\n              store = this.store();\n              \n          try {\n            store[e.key] = JSON.parse(e.newValue);\n            this.store(store);\n           \n            obj[e.key] = {};\n            obj[e.key].oldValue = JSON.parse(e.oldValue);\n            obj[e.key].newValue = JSON.parse(e.newValue);\n            \n            this.changed(obj);\n          } catch (e) {}\n        }.bind(this));\n        break;\n      default:\n        break;\n    }\n  } catch (e) {}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "1a4921ac7112bd4": {
            "_id": "1a4921ac7112bd4",
            "component": "RuntimeStorage",
            "state": "remove",
            "action": "function remove(key) {\n  var store = this.store();\n  \n  delete store[key];\n  this.store(store);\n  \n  try {\n    switch (true) {\n      case typeof localStorage !== 'undefined':\n        localStorage.removeItem(key); \n        break;\n      default:\n        break;\n    }\n  } catch(e) {}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "13010167f313f87": {
            "_id": "13010167f313f87",
            "component": "Runtime",
            "state": "system",
            "action": "function system(params) {\n    var RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (params) {\n        if (typeof params === 'string') {\n          conf.master = true;\n          conf.name = params;\n        } else {\n          conf = params;\n          conf.master = true;\n        }\n        RuntimeSystem = this.require('RuntimeSystem');\n        system = new RuntimeSystem(conf);\n        system.state('active');\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "155141e40312cd8": {
            "_id": "155141e40312cd8",
            "component": "RuntimeClassInfo",
            "state": "collection",
            "action": "function collection(name) {\n    var result = {};\n    if (this.schema()[name] === 'collection') {\n        result = this.model()[name];\n    } \n    \n    return result; \n}",
            "core": true
        },
        "1f6941a0c012c1f": {
            "_id": "1f6941a0c012c1f",
            "component": "RuntimeClassInfo",
            "state": "collections",
            "action": "function collections(name) {\n    var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length; \n    \n    for (i = 0; i < length; i++) { \n        item = keys[i]; \n        if (this.schema()[item] === 'collection') {\n            result.push(item);\n        }\n    }\n    \n    return result;\n}",
            "core": true
        },
        "1ef711b4171c849": {
            "_id": "1ef711b4171c849",
            "component": "RuntimeClassInfo",
            "state": "event",
            "action": "function event(name) {\n    var result = {};\n    \n    if (this.schema()[name] === 'event') {\n        result = this.model()[name];\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1bae51b6ed1d25c": {
            "_id": "1bae51b6ed1d25c",
            "component": "RuntimeClassInfo",
            "state": "events",
            "action": "function events(name) {\n    var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    \n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.schema()[item] === 'event') {\n            result.push(item);\n        }\n    } \n    return result;\n}",
            "core": true
        },
        "19ac2125221528b": {
            "_id": "19ac2125221528b",
            "component": "RuntimeClassInfo",
            "state": "link",
            "action": "function link(name) {\n    var result = {};\n    \n    if (this.schema()[name] === 'link') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "17ed21dfc01b8e8": {
            "_id": "17ed21dfc01b8e8",
            "component": "RuntimeClassInfo",
            "state": "links",
            "action": "function links(name) { \n    var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.schema()[item] === 'link') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "11ce318a561ac61": {
            "_id": "11ce318a561ac61",
            "component": "RuntimeClassInfo",
            "state": "method",
            "action": "function method(name) {\n    var result = {};\n    if (this.schema()[name] === 'method') {\n        result = this.model()[name];\n        \n    }\n    \n    return result;\n}",
            "core": true
        },
        "12ff2190a018046": {
            "_id": "12ff2190a018046",
            "component": "RuntimeClassInfo",
            "state": "methods",
            "action": "function methods(name) {\n    var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.schema()[item] === 'method') {\n            result.push(item);\n        }\n    } \n    \n    return result;\n}",
            "core": true
        },
        "1028d1681e1fd58": {
            "_id": "1028d1681e1fd58",
            "component": "RuntimeClassInfo",
            "state": "properties",
            "action": "function properties(name) { \n    var keys = Object.keys(this.schema()),\n    item = '',\n    result = [],\n    i = 0,\n    length = 0;\n    length = keys.length;\n    \n    for (i = 0; i < length; i++) {\n        item = keys[i];\n        if (this.schema()[item] === 'property') {\n            result.push(item);\n        }\n    } return result;\n}",
            "core": true
        },
        "18eeb10c5319368": {
            "_id": "18eeb10c5319368",
            "component": "RuntimeClassInfo",
            "state": "property",
            "action": "function property(name) {\n    var result = {};\n    \n    if (this.schema()[name] === 'property') {\n        result = this.model()[name];\n    }\n    return result;\n}",
            "core": true
        },
        "1ba721201114b6b": {
            "_id": "1ba721201114b6b",
            "component": "RuntimeComponent",
            "state": "destroy",
            "action": "function destroy() {\n    $component.destroy(this.id());\n}",
            "core": true,
            "useCoreAPI": true
        },
        "15486186f41a48c": {
            "_id": "15486186f41a48c",
            "component": "RuntimeComponent",
            "state": "off",
            "action": "function off(state, behaviorId) {\n    var args = [],\n    i = 0,\n    length = 0;\n    length = arguments.length;\n    \n    for (i = 0; i < length - 7; i++) {\n        args.push(arguments[i]);\n    }\n    \n    if ($workflow.checkParams({\n        \"component\": this, \n        \"methodName\": \"off\", \n        \"args\": args\n        })) {\n        \n        if (state || behaviorId) {\n            if ($metamodel.isValidState(state, this.constructor.name)) {\n                $behavior.remove({\n                    \"behaviorId\": behaviorId, \n                    \"componentId\": this.id(), \n                    \"state\": state\n                });\n            } else { \n                this.require('logger').warn(\"invoke \\'off\\' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); \n            }\n        } else {\n            $behavior.remove({\n                \"componentId\": this.id()\n            });\n        }\n    }\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1da0a17878104c3": {
            "_id": "1da0a17878104c3",
            "component": "RuntimeComponent",
            "state": "require",
            "action": "function require(id) {\n    return $component.get(id);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1a5111d17a1800c": {
            "_id": "1a5111d17a1800c",
            "component": "RuntimeDatabase",
            "state": "collections",
            "action": "function collections() {\n    var result = {},\n    collectionName = '';\n    \n    for (collectionName in $db.store) {\n        if ($db.store.hasOwnProperty(collectionName) && collectionName.indexOf('Runtime') !== 0) {\n            result[collectionName] = $db[collectionName];\n            \n        }\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1e5bf167ca1b61e": {
            "_id": "1e5bf167ca1b61e",
            "component": "RuntimeDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) {\n    return $db.subsystem(params);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "15ab1112e81b1b4": {
            "_id": "15ab1112e81b1b4",
            "component": "RuntimeDatabase",
            "state": "system",
            "action": "function system(system) {\n    var result  = '';\n    \n    if (system) {\n      result = $db.system(system);\n      this.require(result).state('active');\n    } else {\n      result = $db.system();\n    }\n    return result;\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1d993108fa18ef2": {
            "_id": "1d993108fa18ef2",
            "component": "RuntimeLogger",
            "state": "debug",
            "action": "function debug(message) {\n    if (this.level() === 'debug') {\n        console.log('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "1a37a188e11fe73": {
            "_id": "1a37a188e11fe73",
            "component": "RuntimeLogger",
            "state": "error",
            "action": "function error(message) {\n    console.error('runtime: ' + message);\n}",
            "core": true
        },
        "1edd21e12a16534": {
            "_id": "1edd21e12a16534",
            "component": "RuntimeLogger",
            "state": "info",
            "action": "function info(message) {\n    if (this.level() === 'info' || this.level() === 'debug') {\n        console.info('runtime: ' + message);\n    }\n}",
            "core": true
        },
        "141f2143d3122a4": {
            "_id": "141f2143d3122a4",
            "component": "RuntimeLogger",
            "state": "level",
            "action": "function level(val) {\n    $log.level(val);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "192401bab21304e": {
            "_id": "192401bab21304e",
            "component": "RuntimeLogger",
            "state": "warn",
            "action": "function warn(message) {\n    if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n        console.warn('runtime: ' + message);\n    } \n}",
            "core": true
        },
        "11fc715e2f1a31e": {
            "_id": "11fc715e2f1a31e",
            "component": "RuntimeMetamodel",
            "state": "create",
            "action": "function create() {\n        $metamodel.create();\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1232f1f107142cf": {
            "_id": "1232f1f107142cf",
            "component": "RuntimeMetamodel",
            "state": "model",
            "action": "function model(model) {\n    return $metamodel.model(model);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1365412f69153d2": {
            "_id": "1365412f69153d2",
            "component": "RuntimeMetamodel",
            "state": "schema",
            "action": "function schema(schema) {\n    return $metamodel.schema(schema);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "194db147fe161a2": {
            "_id": "194db147fe161a2",
            "component": "RuntimeMetamodel",
            "state": "type",
            "action": "function type(type) {\n    return $metamodel.type(type);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "129f71568717a22": {
            "_id": "129f71568717a22",
            "component": "RuntimeSystem",
            "state": "sync",
            "action": "function sync() {\n    var system = JSON.parse($db.system());\n    \n    this.schemas(system.schemas);\n    this.types(system.types);\n    this.behaviors(system.behaviors);\n    this.components(system.components);\n}",
            "core": true,
            "useCoreAPI": true
        },
        "1ef951f1411b895": {
            "_id": "1ef951f1411b895",
            "component": "RuntimeOSGi",
            "state": "install",
            "action": "function install(url, async) { \n  var importedSystem = null,\n      system = {},\n      systemId = '',\n      callbackLoad = null,\n      xhr = null,\n      result = '',\n      channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n  \n  if (importedSystem) {\n    systemId = this.require('db').system(importedSystem); \n    if (systemId) {\n      system = this.require(systemId);\n      \n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');    \n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n      \n      result = systemId;\n    }\n  } else {   \n    if (typeof global !== 'undefined' && typeof window === 'undefined') {\n      if (url.indexOf('.json') !== -1) {\n        system = global.require(global.process.env.PWD + '/' + url);\n      } else {\n        system = global.require(url);\n      }\n      systemId = this.require('db').system(system);\n      system = this.require(systemId);\n      \n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');    \n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n      \n      result = systemId;\n    } else {\n      xhr = new XMLHttpRequest();\n      callbackLoad = function callbackLoad(system, url) {\n        var sysId = $db.system(system),\n            sys = $component.get(sysId),\n            channel = $component.get('channel');\n            \n        if (typeof url === 'string') {    \n          sys.location(url);    \n        }\n        sys.state('installed');    \n        channel.$systemInstalled(sysId);\n        sys.state('resolved');\n        channel.$systemResolved(sysId);\n        \n        result = sysId;\n      };\n      \n      if (async) {\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function () {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200) {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        };\n        xhr.send(null);\n      } else {\n        xhr.open('GET', url, false);\n        xhr.send(null);\n        if (xhr.status === 200) {\n          callbackLoad(JSON.parse(xhr.response), url);\n        }\n      }\n    }\n  }\n  return result;\n}",
            "useCoreAPI": true,
            "core": true
        },
        "14c1517b711cb78": {
            "_id": "14c1517b711cb78",
            "component": "RuntimeOSGi",
            "state": "uninstall",
            "action": "function uninstall(id) { \n\tvar search = {},\n\t    system = null,\n\t    behaviorId = '',\n\t    collection =  '',\n\t    componentId = '',\n\t    length = 0,\n\t    i = 0,\n\t    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\t\n\tsearch = $db.RuntimeSystem.find({\n\t  '_id': id\n\t});\n\t\n\tif (search.length) {\n\t  system = search[0];\n\t  // remove behaviors\n\t  if (system.behaviors) {\n\t    for (behaviorId in system.behaviors) {\n\t      $db.RuntimeBehavior.remove({ \n\t        '_id': system.behaviors[behaviorId]._id\n\t      });\n\t    }\n\t  }\n\t  // remove components\n\t  if (system.components) {\n\t    for (collection in system.components) {\n\t      for (componentId in system.components[collection]) {\n\t        if (coreComponents.indexOf(componentId) === -1) {\n  \t        $db[collection].remove({ \n  \t          '_id': componentId\n  \t        });\n\t        }\n\t      }\n\t    }\n\t  }\n\t}\n\t\n\tthis.require(id).state('uninstalled');\n\tchannel.$systemUninstalled(id);\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1cb9d103d41dd97": {
            "_id": "1cb9d103d41dd97",
            "component": "e89c617b6b15d24",
            "state": "start",
            "action": "function start() {\n  var subsystems = [],\n    systems = [],\n    system = null,\n    scripts = [],\n    script = null,\n    mode = '',\n    logLevel = 'warn',\n    i = 0,\n    length = 0;\n\n  // in a browser\n  if (typeof document !== 'undefined') {\n    systems = document.querySelectorAll('link[rel=system]');\n    length = systems.length;\n\n    // logger\n    scripts = document.querySelectorAll('script[log]');\n    if (scripts.length) {\n      logLevel = scripts[0].getAttribute('log');\n      this.require('logger').level(logLevel);\n    }\n\n    // mode\n    scripts = document.querySelectorAll('script[mode]');\n    if (scripts.length) {\n      mode = scripts[0].getAttribute('mode');\n      \n      if (mode === 'dev') {\n        document.addEventListener('dragenter', function (e) {\n          e.stopPropagation();\n          e.preventDefault();\n        }, false);\n\n        document.addEventListener('dragover', function (e) {\n          e.stopPropagation();\n          e.preventDefault();\n        }, false);\n\n        document.addEventListener('drop', function (e) {\n          e.stopPropagation();\n          e.preventDefault();\n          var files = e.dataTransfer.files;\n          var reader = new FileReader();\n          var json = '';\n          reader.onload = function (event) {\n            json += event.target.result;\n          };\n          reader.onloadend = function () {\n            var sys = JSON.parse(json);\n            runtime.install(sys);\n          };\n          reader.readAsText(files[0], 'UTF-8');\n        });\n      }\n      if (mode === 'design') {\n        this.require('admin').start();\n      }\n    }\n\n    // systems\n    for (i = 0; i < length; i++) {\n      system = systems[i];\n\n      if (system.getAttribute('async') === 'false') {\n        this.require('runtime').install(system.href, false);\n      } else {\n        this.require('runtime').install(system.href, true);\n      }\n    }\n\n    // designer (deprecated)\n    scripts = document.querySelectorAll('script[designer]');\n    if (scripts.length) {\n      this.require('admin').start();\n    }\n\n    // ready event\n    if (length === 0) {\n      this.require('runtime').ready();\n    }\n  }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "105f219c6813643": {
            "_id": "105f219c6813643",
            "component": "RuntimeOSGi",
            "state": "start",
            "action": "function start(id) { \n\tvar system = this.require(id),\n\t    channel = this.require('channel');\n\t\n\tif (system.state() === 'resolved' || system.state() === 'installed') {\n  \tsystem.state('starting');\n  \tif (system.main) {\n  \t  system.main();\n  \t}\n  \tif (system.start) {\n  \t  system.start();\n  \t}\n  \tchannel.$systemStarted(id);\n  \tsystem.state('active');\n\t}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "1a81a1f00d17269": {
            "_id": "1a81a1f00d17269",
            "component": "RuntimeOSGi",
            "state": "stop",
            "action": "function stop(id) { \n\tvar system = this.require(id),\n\t    channel = this.require('channel');\n\t    \n\tif (system.state() === 'active') {\n  \tsystem.state('stopping');\n  \tif (system.stop) {\n  \t  system.stop();\n  \t}\n  \tchannel.$systemStopped(id);\n  \tsystem.state('resolved');\n  \tchannel.$systemResolved(id);\n\t}\n}",
            "useCoreAPI": false,
            "core": true
        },
        "116851b602128d1": {
            "_id": "116851b602128d1",
            "component": "RuntimeOSGi",
            "state": "status",
            "action": "function status() { \n\tvar result = {},\n\t    system = null,\n\t    length = 0,\n\t    i = 0;\n\t\n\tsystems = $db.RuntimeSystem.find({});\n\t\n\tlength = systems.length;\n\tfor (i = 0; i < length; i++) {\n\t    system = systems[i];\n\t    result[system.name] = {\n\t      'id': system._id,\n\t      'state': system.state,\n\t      'name': system.name,\n\t      'version': system.version,\n\t      'location': system.location,\n\t      'master': system.master\n\t    };\n\t}\n\t\n\treturn result;\n}",
            "useCoreAPI": true,
            "core": true
        },
        "12e491859c13918": {
            "_id": "12e491859c13918",
            "component": "RuntimeChannel",
            "state": "$systemStarted",
            "action": "function $systemStarted(id) { \n  var systems = null;\n    \n  if (id !== 'e89c617b6b15d24') {\n    if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n         \n      if ($state.get('runtime') && $state.get('runtime').name === 'ready') {    \n      } else {\n        if (systems.length + 1 === $db.RuntimeSystem.count()) {\n          $component.get('runtime').ready();\n        }\n      }\n    }\n  }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1e9021bd4e1bc6e": {
            "_id": "1e9021bd4e1bc6e",
            "component": "RuntimeChannel",
            "state": "$systemInstalled",
            "action": "function $systemInstalled(id) {\n    var systems = null,\n        dependencies = [],\n        master = [],\n        canStart = true;\n\n    if (id !== 'e89c617b6b15d24') {\n      // if all systems are installed\n      systems = $db.RuntimeSystem.find({});\n\n      systems.forEach(function (system) {\n          var sys = this.require(system._id);\n          if (sys.state() === 'none') {\n              canStart = false;\n          }\n      }.bind(this));\n\n      // start all the systems\n      if (canStart) {\n          dependencies = $db.RuntimeSystem.find({\n              'master': false\n          });\n\n          dependencies.forEach(function (dep) {\n              var system = this.require(dep._id);\n              channel = this.require('channel');\n              \n              if (system.state() === 'resolved') {\n                system.state('starting');\n                system.start();\n                channel.$systemStarted(dep._id);\n                system.state('active');\n              }\n          }.bind(this));\n\n          master = $db.RuntimeSystem.find({\n              'master': true\n          });\n\n          master.forEach(function (dep) {\n              var system = this.require(dep._id);\n              channel = this.require('channel');\n              \n              if (system.state() === 'resolved') {\n                system.state('starting');\n                system.start();\n                channel.$systemStarted(dep._id);\n                system.state('active');\n              }\n          }.bind(this));\n      }\n  }\n}",
            "useCoreAPI": true,
            "core": true
        },
        "1cfa4145f614da8": {
            "_id": "1cfa4145f614da8",
            "component": "Runtime",
            "state": "message",
            "action": "function message(msg) { \n\t$db.RuntimeMessage.insert(msg);\n}",
            "useCoreAPI": true,
            "core": true
        },
        "182c51edc31ad97": {
            "_id": "182c51edc31ad97",
            "component": "RuntimeSystemOSGi",
            "state": "uninstall",
            "action": "function uninstall() { \n\tthis.require('runtime').uninstall(this.id());\n}",
            "useCoreAPI": false,
            "core": true
        },
        "19cf317d7217331": {
            "_id": "19cf317d7217331",
            "component": "RuntimeOSGi",
            "state": "bundle",
            "action": "function bundle() { \n\tvar result = this.require('db').system();\n\treturn result;\n}",
            "useCoreAPI": false,
            "core": true
        },
        "14b77144911ce48": {
            "_id": "14b77144911ce48",
            "component": "RuntimeSystemOSGi",
            "state": "bundle",
            "action": "function bundle() { \n\tvar result = '',\n\tsystem = [];\n\t\n\tsystems = $db.RuntimeSystem.find({\n    '_id': this.id()\n  });\n  \n  if (systems.length) {\n    result = JSON.stringify(systems[0]);\n  }\n  \n\treturn result;\n}",
            "useCoreAPI": true,
            "core": true
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
                "version": "2.0.0-alpha.1"
            }
        },
        "RuntimeDatabase": {
            "db": {
                "_id": "db"
            }
        },
        "RuntimeLogger": {
            "logger": {
                "_id": "logger",
                "level": "warn"
            }
        },
        "RuntimeMetamodel": {
            "metamodel": {
                "_id": "metamodel"
            }
        },
        "RuntimeSystem": {},
        "RuntimeChannel": {
            "channel": {
                "_id": "channel"
            }
        }
    },
    "name": "system-runtime",
    "version": "2.0.0-alpha.1",
    "description": "System Runtime",
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
    classId = '',
    propertyName = '',
    isReadOnly = false;

  conf = conf || {};
  type = conf.type || '';
  id = conf.id || '';
  propertyName = conf.propertyName || '';
  arrDb = conf.arr || [];
  classId = conf.classId || '';

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

  function _add(val, action, start, deleteCount) {
    var isClass = false,
      i = 0,
      length = 0,
      del = [];

    if (!isReadOnly) {

      isClass = type.indexOf('@') !== -1;

      if (isClass) {
        if (val && $metamodel.inheritFrom(val.constructor.name, type.replace('@', ''))) {
          switch (true) {
            case action === 'push':
              arrDb.push(val.id());
              break;
            case action === 'unshift':
              arrDb.unshift(val.id());
              break;
            case action === 'splice':
              del = arrDb.splice(start, deleteCount, val);

              length = del.length;
              for (i = 0; i < length; i++) {
                $workflow.state({
                  "component": id,
                  "state": propertyName,
                  "data": [store[del[i]], 'remove']
                });
              }
              break;
            default:
              break;
          }

          if ($helper.isRuntime()) {
            $helper.getRuntime().require('db').update({
              'collection': classId,
              'id': id,
              'field': propertyName,
              'value': arrDb
            });
          }

          $workflow.state({
            "component": id,
            "state": propertyName,
            "data": [val, 'add']
          });
        } else {
          if (typeof val.id !== 'undefined') {
            $log.invalidPropertyName(id, classId, propertyName, val.id(), type);
          } else {
            $log.invalidPropertyName(id, classId, propertyName, val, type);
          }
        }
      } else {
        if (val && $metamodel.isValidType(val, type)) {
          switch (true) {
            case action === 'push':
              arrDb.push(val);
              break;
            case action === 'unshift':
              arrDb.unshift(val);
              break;
            case action === 'splice':
              arrDb.splice(start, deleteCount, val);
              break;
            default:
              break;
          }

          if ($helper.isRuntime()) {
            $helper.getRuntime().require('db').update({
              'collection': classId,
              'id': id,
              'field': propertyName,
              'value': arrDb
            });
          }

          $workflow.state({
            "component": id,
            "state": propertyName,
            "data": [val, 'add']
          });
        } else {
          $log.invalidPropertyName(id, classId, propertyName, val, type);
        }
      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName);
    }
    return arrDb.length;
  }

  function _remove(action) {
    var result,
      val = null,
      isClass = false;

    if (!isReadOnly) {
      if (arrDb.length !== 0) {

        switch (true) {
          case action === 'pop':
            val = arrDb.pop();
            break;
          case action === 'shift':
            val = arrDb.shift();
            break;
          default:
            break;
        }

        if ($helper.isRuntime()) {
          $helper.getRuntime().require('db').update({
            'collection': classId,
            'id': id,
            'field': propertyName,
            'value': arrDb
          });
        }

        isClass = type.indexOf('@') !== -1;

        if (isClass) {
          result = store[val];
        } else {
          result = val;
        }

        $workflow.state({
          "component": id,
          "state": propertyName,
          "data": [result, 'remove']
        });

      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName);
    }
    return result;
  }

  /* Override push method.
   * @push
   * @param {RuntimeComponent|Object} val
   */
  arr.push = function push(val) {
    return _add(val, 'push');
  };

  /* Override unshift method.
   * @unshift
   * @param {RuntimeComponent|Object} val
   */
  arr.unshift = function unshift(val) {
    return _add(val, 'unshift');
  };

  /* Override concat method.
   * @push
   * @param {RuntimeComponent|Object} arr
   */
  arr.concat = function concat(arr) {
    var i = 0,
      length = 0;

    if (Array.isArray(arr)) {
      length = arr.length;
      for (i = 0; i < length; i++) {
        _add(arr[i], 'push');
      }
    }

    conf.arr = arrDb;
    return new RuntimeArray(conf);
  };

  /* Override pop method.
   * @pop
   * @return {RuntimeComponent|Object} value
   */
  arr.pop = function pop() {
    return _remove('pop');
  };

  /* Override shift method.
   * @shift
   * @return {RuntimeComponent|Object} value
   */
  arr.shift = function shift() {
    return _remove('shift');
  };

  /* Override sort method.
   * @sort
   * @param {Function} funct the sort function
   * @return {RuntimeArray} the current RuntimeArray
   */
  arr.sort = function sort(funct) {
    arrDb.sort(funct);

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db').update({
        'collection': classId,
        'id': id,
        'field': propertyName,
        'value': arrDb
      });
    }

    return arr;
  };

  /* Override reverse method.
   * @reverse
   * @return {RuntimeArray} the reversed RuntimeArray
   */
  arr.reverse = function reverse() {
    arrDb.reverse();

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db').update({
        'collection': classId,
        'id': id,
        'field': propertyName,
        'value': arrDb
      });
    }
    return arr;
  };

  /* Override splice method.
   * @splice
   * @return {RuntimeArray} the spliced RuntimeArray
   */
  arr.splice = function splice(start, deleteCount, val) {
    var result = [],
      i = 0,
      length = 0,
      isClass = false,
      data = null;

    if (typeof val !== 'undefined') {
      _add(val, 'splice', start, deleteCount);
    } else {
      result = arrDb.splice(start, deleteCount);

      if ($helper.isRuntime()) {
        $helper.getRuntime().require('db').update({
          'collection': classId,
          'id': id,
          'field': propertyName,
          'value': arrDb
        });
      }

      length = result.length;
      for (i = 0; i < length; i++) {

        isClass = type.indexOf('@') !== -1;
        if (isClass) {
          data = store[result[i]];
        } else {
          data = result[i];
        }

        $workflow.state({
          "component": id,
          "state": propertyName,
          "data": [data, 'remove']
        });
      }
    }
    return result;
  };

  /* Override slice method.
   * @slice
   * @return {RuntimeArray} the sliced RuntimeArray
   */
  arr.slice = function slice(begin, end) {
    var result = arrDb.slice(begin, end);
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
    propNames.forEach(function (name) {
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
  var body = function (config) {
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
    body = function () {
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

    $db.createLog('insert', classId, config._id, '', config);

    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
      $helper.getRuntime().require('db').insert({
        collection: classId,
        document: config
      });
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

    function _isValidCollection(coll, type) {
      var result = true;

      coll.forEach(function (val) {
        if (
          !(
            $metamodel.isValidType(val, type) &&
            ($metamodel.inheritFrom(val.constructor.name, type.replace('@', '')) && (type.indexOf('@') !== -1)))
        ) {
          result = result && false;
        }
      });

      return true;
    }

    function _getRealCollection(coll, type) {
      var result = [];

      coll.forEach(function (val) {
        if (type[0].indexOf('@') !== -1) {
          switch (true) {
            case typeof val === 'string':
              result.push(val);
              break;
            case typeof val.id !== 'undefined':
              result.push(val.id());
              break;
            default:
              result.push(null);
              break;
          }
        } else {
          result.push(val);
        }
      });

      return result;
    }

    if (Array.isArray(propertyType)) { // in case of array, return a sub array
      body = function body(position, value) {
        var search = [],
          component = null,
          runtimeArr = null,
          val = null,
          realVal = null,
          i = 0,
          length = 0;

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
            if (Array.isArray(position)) { // we replace the collection
              if (_isValidCollection(position, propertyType[0])) {
                search = $db[classId].find({
                  "_id": this.id()
                });
                if (search.length) {

                  component = search[0];
                  realVal = _getRealCollection(position, propertyType[0]);

                  $workflow.state({
                    "component": this.id(),
                    "state": propertyName,
                    "data": [position, 'reset']
                  });

                  component[propertyName] = realVal;

                  if ($helper.isRuntime()) {
                    $helper.getRuntime().require('db').update({
                      'collection': classId,
                      'id': this.id(),
                      'field': propertyName,
                      'value': component[propertyName]
                    });
                  }
                }
              } else {
                $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, position, propertyType);
              }
            } else {
              if (typeof position === 'number') {
                val = $db.store[classId][this.id()][propertyName][position];
                if (val) {
                  if (propertyType[0].indexOf('@') !== -1) {
                    realVal = $helper.getRuntime().require(val);
                  } else {
                    realVal = val;
                  }
                  return realVal;
                }
              } else {
                $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, position, 'number');
              }
            }
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(this.id(), this.constructor.name, propertyName);
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
                  switch (true) {
                    case typeof value === 'string':
                      realVal = value;
                      break;
                    case typeof value.id !== 'undefined':
                      realVal = value.id();
                      break;
                    default:
                      realVal = '';
                      break;
                  }
                } else {
                  realVal = value;
                }

                component = search[0];
                component[propertyName][position] = realVal;

                if ($helper.isRuntime()) {
                  $helper.getRuntime().require('db').update({
                    'collection': classId,
                    'id': this.id(),
                    'field': propertyName,
                    'value': component[propertyName]
                  });
                }

                $workflow.state({
                  "component": this.id(),
                  "state": propertyName,
                  "data": [value, 'add']
                });
              }
            } else {
              $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, value, propertyType);
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
            $log.readOnlyProperty(this.id(), this.constructor.name, propertyName);
          } else {
            if ($metamodel.isValidType(value, propertyType)) {
              search = $db[classId].find({ "_id": this.id() });
              if (search.length) {
                component = search[0];

                switch (true) {
                  case propertyType.indexOf('@') !== -1:
                    if (value === null) {
                      component[propertyName] = value;
                    } else {
                      component[propertyName] = value.id();
                    }
                    break;
                  case propertyType === 'date':
                    if (typeof value === 'string') {
                      component[propertyName] = value;
                    } else {
                      component[propertyName] = value.toISOString();
                    }
                    break;
                  default:
                    component[propertyName] = value;
                    break;
                }

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper.getRuntime().require('db').update({
                    'collection': classId,
                    'id': this.id(),
                    'field': propertyName,
                    'value': value
                  });
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
              $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, value, propertyType);
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
          if (propertyValue === undefined && prop.default !== undefined) {
            propertyValue = prop.default;
          }
          return propertyValue;
        } else {
          $log.destroyedComponentCall(fullPath, id);
        }
      } else {
        if (propertyReadOnly) {
          $log.readOnlyProperty(id, model, fullPath);
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
                $helper.getRuntime().require('db').update({
                  'collection': model,
                  'id': id,
                  'field': fullPath,
                  'value': value
                });
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
            $log.invalidPropertyName(id, model, fullPath, value, propertyType);
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
          systemId = 'e89c617b6b15d24',
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
          }

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
  var body = function (state, handler, useCoreAPI, isCore) {
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
            $log.invalidParamNumberMethodOn(this.id(), this.constructor.name, state);
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
  var body = function (state, handler, useCoreAPI, isCore) {
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
            $log.invalidParamNumberMethodOn(this.id(), this.constructor.name, state);
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
    'RuntimeLogger',
    'RuntimeLog'
  ],
  coreDb = [
    'RuntimeLog',
    'RuntimeSchema',
    'RuntimeLogger',
    'RuntimeModel',
    'RuntimeGeneratedModel',
    'RuntimeState',
    'RuntimeType'
  ],
  logOrder = 0;


/* Private methods */


/*
 * Increment Log
 * @method incLogOrder
 */
function incLogOrder() {
  return logOrder++;
}


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
    findInArray = false,
    property = '',
    i = 0,
    length = 0;

  for (property in source) {
    if (typeof target[property] !== 'undefined') {
      if (source[property] instanceof RegExp) {
        if (Array.isArray(target[property]) && !Array.isArray(source[property])) {
          length = target[property].length;
          for (i = 0; i < length; i++) {
            if (target[property][i].toString().match(source[property]) !== null) {
              findInArray = true;
              break;
            }
          }
          result = findInArray;
        } else {
          if (target[property].toString().match(source[property]) === null) {
            result = false;
            break;
          }
        }
      } else {
        if (Array.isArray(target[property]) && !Array.isArray(source[property])) {
          if (target[property].indexOf(source[property]) === -1) {
            result = false;
            break;
          }
        } else {
          if (target[property] !== source[property]) {
            result = false;
            break;
          }
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
var RuntimeDatabaseCollection = function (name) {
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
RuntimeDatabaseCollection.prototype.find = function (query) {
  var result = [],
    resultId = {},
    id = '',
    object = {};

  query = query || null;

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(function multi_search(criteria) {
        for (id in store[this.name]) {
          object = store[this.name][id];
          if (contains(criteria, object)) {
            if (typeof resultId[id] === 'undefined') {
              result.push(object);
              resultId[id] = true;
            }
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
RuntimeDatabaseCollection.prototype.insert = function (document) {
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

        $metamodel.prepareObject(obj, $metamodel.getModel(this.name));

        store[this.name][obj._id] = obj;

        Component = $component.get(this.name);
        if (Component) {
          component = new Component(obj);
          result.push(component.id());
        } else {
          createLog('insert', this.name, obj._id, '', obj);

          if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').insert({
              collection: this.name,
              document: obj
            });
          }
        }

        if (this.name === 'RuntimeMessage') {
          if ($helper.isRuntime()) {
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
RuntimeDatabaseCollection.prototype.update = function (query, update, options) {
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

                createLog('update', this.name, docs[i]._id, attributeName, update[attributeName]);

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper.getRuntime().require('db').update({
                    'collection': this.name,
                    'id': docs[i]._id,
                    'field': attributeName,
                    'value': update[attributeName]
                  });
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
              $log.unknownPropertyOnDbUpdate(this.name, attributeName, docs[i]._id);
            }
          } else {
            // TODO more check in case of schema update
            docs[i][attributeName] = update[attributeName];

            createLog('update', this.name, docs[i]._id, attributeName, update[attributeName]);

            updated = updated + 1;
            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper.getRuntime().require('db').update({
                'collection': this.name,
                'id': docs[i]._id,
                'field': attributeName,
                'value': update[attributeName]
              });
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
RuntimeDatabaseCollection.prototype.remove = function (query) {
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

            createLog('remove', this.name, id, '', '');

            component = $component.get(id);
            if (component) {
              component.destroy();
            }
            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper.getRuntime().require('db').remove({
                'collection': this.name,
                'id': id
              });
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

          createLog('remove', this.name, id, '', '');

          component = $component.get(id);
          if (component) {
            component.destroy();
          }
          if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').remove({
              'collection': this.name,
              'id': id
            });
          }
          result.push(id);
        }
      }
    }
  } else {
    for (id in store[this.name]) {
      delete store[this.name][id];

      createLog('remove', this.name, id, '', '');

      if (coreDb.indexOf(this.name) == -1) {
        component = $component.get(id);
        if (component) {
          component.destroy();
        }
      }
      if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
        $helper.getRuntime().require('db').remove({
          'collection': this.name,
          'id': id
        });
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
RuntimeDatabaseCollection.prototype.count = function () {
  var result = 0,
    objectId = '';
  for (objectId in store[this.name]) {
    result++;
  }
  return result;
};


/* Public methods */


/*
 * Create a Log
 * @method createLog
 * @param {String} action CRUD action that happenned
 * @param {String} collection collection of the 
 * @param {String} id id of the component
 * @param {String} field field of the component
 * @param {String} value value of the field of the component
 */
function createLog(action, collection, id, field, value) {
  var logId = $helper.generateId();

  collection = collection || '';
  id = id || '';
  field = field || '';
  value = value || '';

  // clean log every 1000 logs
  if (Object.keys(store.RuntimeLog).length > 1000) {
    store.RuntimeLog = {};
  }

  store.RuntimeLog[logId] = {
    _id: logId,
    action: action,
    collection: collection,
    id: id,
    field: field,
    value: value,
    order: incLogOrder()
  };
}


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
        importedSystem.master = true;
        systems[0].master = false;
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
      exportedSystem.master = true;
      exportedSystem.subsystem = false;

      // dump
      dbDump = dump();
      for (collectionName in dbDump) {
        if (dbDump.hasOwnProperty(collectionName)) {
          exportedSystem[collectionName] = dbDump[collectionName];
        }
      }

      for (behaviorId in exportedSystem.behaviors) {
        behavior = exportedSystem.behaviors[behaviorId];
        if (behavior.state === 'main' || behavior.state === 'start' || behavior.state === 'stop') {
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
 * Create a Log
 * @method createLog
 * @param {String} action CRUD action that happenned
 * @param {String} collection collection of the 
 * @param {String} id id of the component
 * @param {String} field field of the component
 * @param {String} value value of the field of the component
 */
exports.createLog = createLog;

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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
  function getPrefix() {
    var validPrefix = 'abcdefghijklmnopqrstuvwxyz';
    return validPrefix.charAt(Math.floor(Math.random() * validPrefix.length));
  }

  return getPrefix() + gen() + gen() + gen();
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
  NAME = '_name',
  currentLevel = 'warn',
  loggerRef = null,
  fakeLoggerRef = {
    currentLevel: 'warn',
    level: function debug(levelName) {
      if (levelName) {
        this.currentLevel = levelName;
      }
      return this.currentLevel;
    },
    debug: function debug(message) {
      if (this.currentLevel === 'debug') {
        console.log('runtime: ' + message);
      }
    },
    info: function info(message) {
      if (this.currentLevel === 'info' || this.currentLevel === 'debug') {
        console.info('runtime: ' + message);
      }
    },
    warn: function warning(message) {
      if (this.currentLevel === 'info' || this.currentLevel === 'warn' || this.currentLevel === 'debug') {
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

  if (schema[NAME]) {
    message = "unknown property '" + propertyName + "' for the definition of '" + schema[NAME] + "'";
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
  getLogger().error("the property '" + property + "' of the model '" + className + "' is invalid");
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
  getLogger().error("the model '" + schema + "' has an unknown property '" + property + "'");
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
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
function invalidPropertyName(id, className, propertyName, propertyValue, type) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  if (typeof type === 'string') {
    getLogger().warn("invalid type for property '" + propertyName + "' on component '" + id + "'" + classInfo + ": expected '" + type.replace('@', '') + "' instead of '" + typeof propertyValue + "'");
  } else {
    getLogger().warn("invalid type for property type '" + propertyName + "' on component '" + classInfo + ": expected 'string' instead of '" + typeof type + "'");
  }
}


/*
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 */
function readOnlyProperty(id, className, propertyName) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  getLogger().warn("can not set read-only property '" + propertyName + "' on component '" + id + "'" + classInfo);
}


/*
 * Invalid document on a Runtime database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
  getLogger().warn("invalid document '" + JSON.stringify(doc).replace(/,/g, ', ') + "' on an insert operation on collection '" + collectionName + "'");
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
  getLogger().warn("invalid type when trying to update the property '" + propertyName + "' of document '" + id + "' (collection '" + collectionName + "') with the value '" + JSON.stringify(propertyValue) + "': expected type '" + type + "'");
}

/*
 * Unkonw property on a Runtime database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function unknownPropertyOnDbUpdate(propertyName, collectionName, id) {
  getLogger().warn("unknown property '" + propertyName + "' on an update operation on collection '" + collectionName + "' with component '" + id + "'");
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
 * @param {String} className class name of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 */
function invalidResultType(id, className, methodName, expectedType, type) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  if (type) {
    getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "'" + classInfo + ": expected type '" + expectedType.replace('@', '') + "' instead of type '" + type + "'");
  } else {
    getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "'" + classInfo + ": expected type '" + expectedType.replace('@', '') + "'");
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
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumber(id, className, methodName) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }

  getLogger().warn("invalid number of parameters when calling the method '" + methodName + "' on component '" + id + "'" + classInfo);
}


/*
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * 
 */
function invalidParamType(id, className, methodName, paramName) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  if (paramName !== undefined) {
    getLogger().warn("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'" + classInfo);
  } else {
    getLogger().warn("invalid type for a parameter when calling the method '" + methodName + "' on component '" + id + "'" + classInfo);
  }
}


/*
 * Add a more than one behavior to a state.
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function behaviorNotUnique(id, stateName) {
  getLogger().warn("try to add more than one behavior for the state '" + stateName + "' on class '" + id + "'");
}


/*
 * Can not add a behavior with an invalid state.
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOn(id, stateName) {
  getLogger().warn("try to add a behavior with an unkwown state '" + stateName + "' on class '" + id + "'");
}


/*
 * The call to a remove state of the behavior module is invalid.
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 */
function invalidStateOff(id, stateName) {
  getLogger().warn("try to remove a behavior from an unkwown state '" + stateName + "' on class '" + id + "'");
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
  getLogger().debug("can not yet validate if the component '" + id + "' is an instance of '" + className + "'");
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
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumberMethodOn(id, className, methodName) {
  var classInfo = '';

  if (className !== 'Function') {
    classInfo = " (class '" + className + "')";
  }
  getLogger().warn("invalid number of parameters when adding an action on method '" + methodName + "' on component '" + id + "'" + classInfo);
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
 * @param {String} object configuration
 * @param {String} name schema name
 */
function invalidConctructorParameters(object, name) {
  getLogger().warn("the constructor parameter '" + JSON.stringify(object).replace(/,/g, ', ') + "' for creating a component of class '" + name + "' is not an object");
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
    getLogger().error('a cyclic inheritance dependency with \’' + name + '\’ schema has been found, please check the \'_inherit\' properties of your schemas');
  } else {
    getLogger().error('a cyclic inheritance dependency has been found, please check the \'_inherit\' properties of your schemas');
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
  if (type !== typeof value) {
    getLogger().warn("invalid type for enumerated type '" + typeName + "': expected type '" + type + "' instead of type '" + typeof value + "'");
  } else {
    getLogger().warn("invalid type for enumerated type '" + typeName + "'");
  }
}


/*
 * Load schema.
 * @method loadSchema
 * @param {String} name name of the schema
 */
function loadSchema(name) {
  getLogger().debug("load schema '" + name + "'");
}


/*
 * Load model.
 * @method loadModel
 * @param {String} name name of the model
 */
function loadModel(name) {
  getLogger().debug("load model '" + name + "'");
}


/*
 * Load type.
 * @method loadType
 * @param {String} name name of the type
 */
function loadType(name) {
  getLogger().debug("load type '" + name + "'");
}


/*
 * Compile schema.
 * @method compileSchema
 * @param {String} name name of the schema
 */
function compileSchema(name) {
  getLogger().debug("compile schema '" + name + "'...");
}


/*
 * Generate model.
 * @method generateModel
 * @param {String} name name of the model
 */
function generateModel(name) {
  getLogger().debug("generate model '" + name + "'...");
}


/*
 * Check model.
 * @method checkModel
 * @param {String} name name of the model
 */
function checkModel(name) {
  getLogger().debug("analyze model '" + name + "'...");
}


/*
 * Create collection.
 * @method createCollection
 * @param {String} name name of the collection
 */
function createCollection(name) {
  getLogger().debug("create collection '" + name + "'");
}

/*
 * Create class.
 * @method createClass
 * @param {String} name name of the class
 */
function createClass(name) {
  getLogger().debug("create class '" + name + "'");
}


/*
 * Begins model creation.
 * @method modelCreationBegin
 */
function modelCreationBegin() {
  getLogger().debug("starting model creation...");
}


/*
 * End model creation.
 * @method modelCreationEnd
 */
function modelCreationEnd() {
  getLogger().debug("model creation ended");
}


/*
 * An error happened when invoking a behavior.
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} className component class name
 * @param {String} message
 */
function actionInvokeError(state, id, className, message) {
  if (className !== 'Function') {
    getLogger().error("error when trying to call the method '" + state + "' on component '" + id + "' (class '" + className + "'): " + message);
  } else {
    getLogger().error("error when trying to call the method '" + state + "' on component '" + id + "': " + message);
  }
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
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 */
exports.invalidPropertyName = invalidPropertyName;


/**
 * Trying to set a read-only property.
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} className class name of the component
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
 *  * @param {String} className class name of the component
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
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 */
exports.invalidParamNumber = invalidParamNumber;


/**
 * Invalid type parameters for a method.
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} className class name of the component
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
 * @param {String} className class name of the component
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
 * @param {String} collectionName the name of the colllection
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
 * @param {String} object configuration
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
 * @param {String} className component class name
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
  defaultTypes = ['boolean', 'string', 'number', 'object', 'function', 'array', 'date', 'any'],
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
    i = 0,
    j = 0,
    nbAncestors = 0,
    sortInheritTree = [];

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
            "default": "",
            "description": att,
            "label": att
          };
          break;
        case schema[att] === 'link':
          model[att] = {
            "type": "@RuntimeComponent",
            "readOnly": false,
            "mandatory": false,
            "default": "",
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
      store.generatedModels[name] = mergedModel;
    }
  }

  // inheritance
  sortInheritTree = sortInheritanceTree();

  nbAncestors = sortInheritTree.length;
  for (i = 0; i < nbAncestors; i++) {
    modelName = sortInheritTree[i];
    model = store.generatedModels[modelName];

    if (model) {
      parents = getParents(modelName);
      parents.reverse();

      var modelToMerge = JSON.parse(JSON.stringify(model));

      length = parents.length;
      for (j = 0; j < length; j++) {
        name = parents[j];
        modelParent = store.generatedModels[name];
        if (modelParent) {
          mergedModel = merge(modelParent, model);
          store.generatedModels[modelName] = mergedModel;
        }
      }

      // last inherit 
      // is the overriden model
      modelExt = store.models[modelName];
      if (modelExt) {
        mergedModel = merge(modelExt, store.generatedModels[modelName]);
        store.generatedModels[modelName] = mergedModel;
      }
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
 * Get sorted InheritanceTree structure.
 * @method sortInheritanceTree
 * @return {Array} sorted InheritanceTree structure
 * @private
 */
function sortInheritanceTree() {
  var result = [],
    temp = {},
    keys = [],
    modelName = '',
    nbAncestors = 0;

  for (modelName in store.inheritanceTree) {
    nbAncestors = store.inheritanceTree[modelName].length;
    if (typeof temp[nbAncestors] === 'undefined') {
      temp[nbAncestors] = [];
    }
    temp[nbAncestors].push(modelName);
  }

  keys = Object.keys(temp).sort();
  keys.forEach(function (index) {
    temp[index].forEach(function (model) {
      result.push(model);
    });
  });

  return result;
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
  $db.collection('RuntimeLog');
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
          "schema": store.compiledSchemas[modelName],
          "model": modelDef
        });
      } else {
        $db.RuntimeClassInfo.update({
          "_id": name
        }, {
            "_id": name,
            "schema": store.compiledSchemas[modelName],
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
  var result = '';

  if (obj && obj.constructor) {
    result = obj.constructor.name;
  }
  return result;
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
  var result = true,
    date = null;

  switch (type) {
    case 'array':
      result = Array.isArray(value);
      break;
    case 'date':
      if (typeof value === 'string') {
        date = new Date(value);
        result = !isNaN(date.getDate());
      } else {
        result = value instanceof Date;
      }
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

  function _removeDuplicate(inherits) {
    var filteredList = [],
      list = {};

    inherits.forEach(function (name) {
      if (typeof list[name] === 'undefined') {
        list[name] = name;
        filteredList.push(name);
      }
    });

    return filteredList;
  }

  schema[INHERITS] = _removeDuplicate(schema[INHERITS]);

  // check if schema is compliant with the meta meta model
  if (isValidObject(schema, store.metadef.schema, false)) {
    schemas = $db.RuntimeSchema.find({ '_name': name });
    if (schemas.length) {
      mergedSchema = merge(schema, schemas[0]);
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
      "_id": {
        "type": "string",
        "mandatory": false
      },
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
        "type": ["any"],
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

    if (value !== '' && value !== null) {
      if (hasType(value, 'string')) {
        component = $component.get(value);
      }
      if (getClassName(component) !== typeRef && JSON.stringify(component) !== '{}') {
        isValid = false;
        $log.invalidType(value, typeName.replace('@', ''));
      }
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
      $log.invalidEnumValue(value, schema.name);
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
        case hasType(field, 'string') && field !== '':
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
      date = null,
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
            if (typeSchema === 'date') {
              date = new Date(field);
              isValid = !isNaN(date.getDate());
              if (!isValid) {
                $log.invalidPropertyType(fieldName, typeSchema, field);
                break;
              }
            } else {
              if (getRealType(field) !== typeSchema && getRealType(field) !== 'any') {
                $log.invalidPropertyType(fieldName, typeSchema, field);
                isValid = false;
                break;
              }
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
              isValid = _isValidCustomType(field[i], typeArray);
            } else {
              if (!isReference(typeArray)) {
                if (getRealType(field[i]) !== typeArray && typeArray !== 'any') {
                  $log.invalidPropertyType(field[i], typeArray, field[i]);
                  isValid = false;
                  break;
                }
              } else {
                if (getRealType(field[i]) === 'string') {
                  // Case of an import of a system
                  if ($component.get(field[i])) {
                    if (!inheritFrom(getClassName($component.get(field[i])), getReference(typeArray))) {
                      $log.invalidClassName(JSON.stringify(field[i]), getReference(typeArray), getClassName($component.get(field[i])));
                      isValid = false;
                      break;
                    }
                  } else {
                    if (field[i] !== '') {
                      $log.canNotYetValidate(field[i], getReference(typeArray));
                    }
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
(function (global){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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

// add require at global level
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  global.require = require;
}

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');
var $helper = require('./helper.js');


/* Private Property */

var sytemId = '',
  system = '',
  channel = null;


/* Polyfill */
$helper.polyfill();

/* Init Metamodel */


$metamodel.init();


/* Init runtime from a system */


sytemId = $db.system($system.system);

system = $component.get(sytemId);
channel = $component.get('channel');

system.state('installed');
channel.$systemInstalled(sytemId);
system.state('resolved');
channel.$systemResolved(sytemId);
system.state('starting');
channel.$systemStarted(sytemId);

system.main(); // deprecated
system.start();

system.state('active');


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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../build/system/system.js":1,"./component.js":3,"./db.js":4,"./helper.js":5,"./metamodel.js":7}],9:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
 * System Runtime
 * 
 * https://designfirst.io/systemruntime/
 * 
 * Copyright 2017 Erwan Carriou
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
    methodResult = null,
    componentClassName = '',
    returnType = null,
    result = true;

  if (typeof params.methodResult !== 'undefined') {
    methodResult = params.methodResult;
  } else {
    methodResult = undefined;
  }

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
          $log.invalidResultType(component.id(), component.constructor.name, methodName, returnType, null);
        }
        break;
      default:
        if (typeof methodResult !== returnType) {
          result = false;
          $log.invalidResultType(component.id(), component.constructor.name, methodName, returnType, typeof methodResult);
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
      /* jshint -W054 */
      if (new Function() === undefined) {
        /* jshint +W054 */
        console.error('runtime: can not execute new Function() instruction in the current context.');
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
        $log.actionInvokeError(state, component.id(), component.constructor.name, e.message);
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
      modelNumberParam = [2, 2];
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
      if (args && args[1] && args[1] === 'reset') {
        paramsType = [[$metamodel.getModel(componentClassName)[methodName].type[0]], 'string'];
      } else {
        paramsType = [$metamodel.getModel(componentClassName)[methodName].type[0], 'string'];
      }
      paramsNumber = [2, 2];
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
    $log.invalidParamNumber(component.id(), component.constructor.name, methodName);
  }

  for (i = 0; i < length; i++) {
    param = args[i];
    if (typeof param === 'undefined') {
      if (i < paramsNumber[0]) {
        result = false;
        $log.invalidParamNumber(component.id(), component.constructor.name, methodName);
      } else {
        continue;
      }
    } else {
      if (!$metamodel.isValidType(param, paramsType[i])) {
        result = false;
        $log.invalidParamType(component.id(), component.constructor.name, methodName, paramsName[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3Y4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9oREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3eUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zeXN0ZW1cbiAqIEBjbGFzcyBydW50aW1lLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuXG4vKlxuICogUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtSdW50aW1lU3lzdGVtfSBzeXN0ZW1cbiAqL1xudmFyIHN5c3RlbSA9IHtcbiAgICBcIm1vZGVsc1wiOiB7XG4gICAgICAgIFwiMTM4YTgxZmExZjE2NDM1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTM4YTgxZmExZjE2NDM1XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUFkbWluXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RhcnRcIjoge30sXG4gICAgICAgICAgICBcImRlc2lnbmVyV2luZG93XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTM1YzcxMDc4ODEwYWYyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTM1YzcxMDc4ODEwYWYyXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlU2NoZW1hTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyU3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwiJGFwcExvYWRTeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVCZWhhdmlvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyVXBkYXRlQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lckRlbGV0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lckNyZWF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVUeXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlVHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVNjaGVtYUlkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2xkSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5ld0lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyRGVsZXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZU1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZU1vZGVsSWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmV3SWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkYXBwTG9nRGVidWdcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ0luZm9cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ1dhcm5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ0Vycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRydW50aW1lQ3JlYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJHJ1bnRpbWVEZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRydW50aW1lVXBkYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRzeXN0ZW1JbnN0YWxsZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtUmVzb2x2ZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtVW5pbnN0YWxsZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRzeXN0ZW1TdG9wcGVkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFmNDE0MTY3MTUxNGMyY1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmNDE0MTY3MTUxNGMyY1wiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwia2V5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJrZXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2hhbmdlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsZWFyXCI6IHt9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2MxMDViMzFhMTYwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2MxMDViMzFhMTYwXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTY2OTcxZmQ5ZDEwN2ZkXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2Njk3MWZkOWQxMDdmZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU4MzIxZGNlZDEwMTRhXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU4MzIxZGNlZDEwMTRhXCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIzNzUxY2I1OTFkZTI2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTIzNzUxY2I1OTFkZTI2XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYW5kbGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInVzZUNvcmVBUElcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlzQ29yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9mZlwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9ySWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlcXVpcmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkBSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXJyb3JQYXJhbVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxOGE1MTE2OWQ3MTEyZDRcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnNlcnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiSW5zZXJ0RXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiVXBkYXRlRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiUmVtb3ZlRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxOGE1MTE2OWQ3MTEyZDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE2YjlkMWFjMjIxNmZmZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2YjlkMWFjMjIxNmZmZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGV2ZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxvZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwid2FyblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWJ1Z1wiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndhcm5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFkOWI2MTM5NDExYWE5MVwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkOWI2MTM5NDExYWE5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTYyOGMxM2MyMjE1MmU2XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYW55XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2MjhjMTNjMjIxNTJlNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTc3YWMxMzY4OTE2MjlmXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTc3YWMxMzY4OTE2MjlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNzA1MjFiODg2MTQzODdcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiMC4wLjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibWFpblwiOiB7fSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcwNTIxYjg4NjE0Mzg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDBiOTFlZDIyMTFiMTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDBiOTFlZDIyMTFiMTVcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lT1NHaVwiLFxuICAgICAgICAgICAgXCJpbnN0YWxsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bmluc3RhbGxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGFydFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0dXNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImJ1bmRsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFiMjgxMWIwOTIxNDNmNVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiMjgxMWIwOTIxNDNmNVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1PU0dpXCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IHt9LFxuICAgICAgICAgICAgXCJzdG9wXCI6IHt9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJub25lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1bmluc3RhbGxcIjoge30sXG4gICAgICAgICAgICBcImJ1bmRsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm8xZTFlMDFlNmI0MWNlYzNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJvMWUxZTAxZTZiNDFjZWMzXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUxvZ1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiQWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJpbnNlcnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpZWxkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib3JkZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgXCIxMDM3NDE4MDU4MWE0MWZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDM3NDE4MDU4MWE0MWZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDRhZDFmNDg1MTgzNzZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDRhZDFmNDg1MTgzNzZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlU3lzdGVtXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVTY2hlbWFJZFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVTY2hlbWFOYW1lXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZU1vZGVsSWRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JEZWxldGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvckRlbGV0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JEZWxldGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkYXBwTG9nRGVidWdcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkYXBwTG9nSW5mb1wiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRhcHBMb2dXYXJuXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGFwcExvZ0Vycm9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGFwcExvYWRTeXN0ZW1cIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJTeW5jXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlU2NoZW1hXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlTW9kZWxcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVTY2hlbWFcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lckRlbGV0ZVR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lckRlbGV0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyVXBkYXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkcnVudGltZUNyZWF0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRydW50aW1lRGVsZXRlQ29tcG9uZW50XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHJ1bnRpbWVVcGRhdGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNlbmRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkc3lzdGVtSW5zdGFsbGVkXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHN5c3RlbVJlc29sdmVkXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHN5c3RlbVN0YXJ0ZWRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkc3lzdGVtU3RvcHBlZFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRzeXN0ZW1Vbmluc3RhbGxlZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmZhODE4MWNlMTI3YTBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmZhODE4MWNlMTI3YTBcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0b3JlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZ2V0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInNldFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2xlYXJcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2hhbmdlZFwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmUyMTFkNGNkMTIwYTZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmUyMTFkNGNkMTIwYTZcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVPU0dpXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZWFkeVwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWMwNzE4NTY0MWZhOWZcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVCZWhhdmlvclwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWMwNzE4NTY0MWZhOWZcIlxuICAgICAgICB9LFxuICAgICAgICBcIjFjMDBiMTNhMWIxYmM5MlwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWV0aG9kXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1ldGhvZHNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJsaW5rXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImxpbmtzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25zXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXZlbnRzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDBiMTNhMWIxYmM5MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTExZGYxMWUyYjE5ZmRlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTExZGYxMWUyYjE5ZmRlXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwib25cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwib2ZmXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInJlcXVpcmVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZGVzdHJveVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJpbml0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiZXZlbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE3MjM1MTZhMzAxMzJhY1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJpbnNlcnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxNzIzNTE2YTMwMTMyYWNcIlxuICAgICAgICB9LFxuICAgICAgICBcIjEyNjhmMWRkZGQxZmVhN1wiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsZXZlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImRlYnVnXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImluZm9cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwid2FyblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxMjY4ZjFkZGRkMWZlYTdcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE0Y2FhMWM0NjQxNGVlMVwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImZyb21cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjYWExYzQ2NDE0ZWUxXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOTNmMTE2NmViMTY2MDlcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibW9kZWxcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTkzZjExNjZlYjE2NjA5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTg3MTFkNmYyMTVlNGJcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTdGF0ZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE1ODcxMWQ2ZjIxNWU0YlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNiNzYxZmE0NTEwZGNhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNiNzYxZmE0NTEwZGNhXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN5c3RlbVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lU3lzdGVtT1NHaVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWFzdGVyXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1vZGVsc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInR5cGVzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN5bmNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWFpblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZWFkeVwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTc5MzFmN2EzMWI2MWRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTc5MzFmN2EzMWI2MWRcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lT1NHaVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImluc3RhbGxcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidW5pbnN0YWxsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN0b3BcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImJ1bmRsZVwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQ1ZmUxMGM3NTE0Mjk4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQ1ZmUxMGM3NTE0Mjk4XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN5c3RlbU9TR2lcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImxvY2F0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3RhcnRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwic3RvcFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ1bmluc3RhbGxcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiYnVuZGxlXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmMWExMGQxMDY3ZDFiMjNhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiZjFhMTBkMTA2N2QxYjIzYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVMb2dcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmaWVsZFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwib3JkZXJcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidHlwZXNcIjoge1xuICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3NzXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNzc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImRhdGVcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVycm9yUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHRtbFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJodG1sXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiamF2YXNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwianNvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqc29uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlua1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJsb2dcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibG9nXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIixcbiAgICAgICAgICAgICAgICBcIndhcm5cIixcbiAgICAgICAgICAgICAgICBcImVycm9yXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZyb21cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwib3NnaVN0YXRlc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvc2dpU3RhdGVzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5zdGFsbGVkXCIsXG4gICAgICAgICAgICAgICAgXCJyZXNvbHZlZFwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRpbmdcIixcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwic3RvcHBpbmdcIixcbiAgICAgICAgICAgICAgICBcInVuaW5zdGFsbGVkXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImRiSW5zZXJ0RXZlbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNDhlZjFlMTk4MTBlNmRcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJJbnNlcnRFdmVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRvY3VtZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYlJlbW92ZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTk1MmUxYWM0MjEzZjRhXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJkYlJlbW92ZUV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYlVwZGF0ZUV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY1YzQxMzA5NzExNzUyXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRiVXBkYXRlRXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkYkFjdGlvblwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcImUxOTUwZTE2ZjI5MTRkYTlcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJBY3Rpb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBbXG4gICAgICAgICAgICAgICAgXCJpbnNlcnRcIixcbiAgICAgICAgICAgICAgICBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIFwicmVtb3ZlXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICBcIjFjMDBjMTA3ZTAxYzliM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDBjMTA3ZTAxYzliM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gICAgdmFyIFJ1bnRpbWVDaGFubmVsID0gbnVsbCxcXG4gICAgICAgIGNoYW5uZWwgPSBudWxsLFxcbiAgICAgICAgZGIgPSB0aGlzLnJlcXVpcmUoJ2RiJyk7XFxuXFxuICAgIGlmICghdGhpcy5yZXF1aXJlKCdjaGFubmVsLWFkbWluJykpIHtcXG4gICAgICAgIFJ1bnRpbWVDaGFubmVsID0gdGhpcy5yZXF1aXJlKCdSdW50aW1lQ2hhbm5lbCcpO1xcbiAgICAgICAgY2hhbm5lbCA9IG5ldyBSdW50aW1lQ2hhbm5lbCh7XFxuICAgICAgICAgICAgJ19pZCc6ICdjaGFubmVsLWFkbWluJyxcXG4gICAgICAgICAgICAnX2NvcmUnOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gZm9yIGpxdWVyeSBjb21wYXRpYmlsaXR5IGluIGVsZWN0cm9uXFxuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICAgICAgICBkZWxldGUgbW9kdWxlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY2hhbm5lbC5vbignc2VuZCcsIGZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnYWRtaW4nKS5kZXNpZ25lcldpbmRvdygpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCAnKicpO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcblxcbiAgICAgICAgLy8gc2NoZW1hIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZVNjaGVtYScsIGZ1bmN0aW9uICRkZXNpZ25lckNyZWF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yVXBkYXRlU2NoZW1hJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJEZWxldGVTY2hlbWEnLCBmdW5jdGlvbiAkZGVzaWduZXJEZWxldGVTY2hlbWEoaWQpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgdmFyIHNlYXJjaCA9ICRkYi5SdW50aW1lU2NoZW1hLmZpbmQoeyAnX2lkJzogaWQgfSksXFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9ICcnLFxcbiAgICAgICAgICAgICAgICBtb2RlbElkID0gJyc7XFxuXFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lID0gc2VhcmNoWzBdLl9uYW1lO1xcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZVNjaGVtYS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuXFxuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYi5SdW50aW1lTW9kZWwuZmluZCh7ICdfbmFtZSc6IG1vZGVsTmFtZSB9KTtcXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBzZWFyY2hbMF0uX2lkO1xcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC5yZW1vdmUoeyAnX2lkJzogbW9kZWxJZCB9KTtcXG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwuZmluZCh7ICdfbmFtZSc6IG1vZGVsTmFtZSB9KTtcXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBzZWFyY2hbMF0uX2lkO1xcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVHZW5lcmF0ZWRNb2RlbC5yZW1vdmUoeyAnX2lkJzogbW9kZWxJZCB9KTtcXG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIG1vZGVsIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZU1vZGVsJywgZnVuY3Rpb24gJGRlc2lnbmVyQ3JlYXRlTW9kZWwoaWQsIG1vZGVsKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykubW9kZWwobW9kZWwpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZU1vZGVsJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLm1vZGVsKG1vZGVsKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lclVwZGF0ZU1vZGVsJywgZnVuY3Rpb24gJGRlc2lnbmVyVXBkYXRlTW9kZWwoaWQsIG1vZGVsKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykubW9kZWwobW9kZWwpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlTW9kZWwnLCBmdW5jdGlvbiAkZGVzaWduZXJEZWxldGVNb2RlbChpZCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHsgJ19pZCc6IGlkIH0pLFxcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWUgPSAnJyxcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9ICcnO1xcblxcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9IHNlYXJjaFswXS5fbmFtZTtcXG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzZWFyY2ggPSAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLmZpbmQoeyAnX25hbWUnOiBtb2RlbE5hbWUgfSk7XFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9IHNlYXJjaFswXS5faWQ7XFxuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwucmVtb3ZlKHsgJ19pZCc6IG1vZGVsSWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIHR5cGUgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyQ3JlYXRlVHlwZScsIGZ1bmN0aW9uICRkZXNpZ25lckNyZWF0ZVR5cGUoaWQsIHR5cGUpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS50eXBlKHR5cGUpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZVR5cGUnLCBmdW5jdGlvbiAkZWRpdG9yVXBkYXRlVHlwZShpZCwgdHlwZSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnR5cGUodHlwZSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcblxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlVHlwZScsIGZ1bmN0aW9uICRlZGl0b3JEZWxldGVUeXBlKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgICRkYi5SdW50aW1lVHlwZS5yZW1vdmUoeyAnbmFtZSc6IGlkIH0pO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlVHlwZScsIGZ1bmN0aW9uICRkZXNpZ25lckRlbGV0ZVR5cGUoaWQpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVUeXBlLnJlbW92ZSh7ICduYW1lJzogaWQgfSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICAvLyBjb21wb25lbnQgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyQ3JlYXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGRlc2lnbmVyQ3JlYXRlQ29tcG9uZW50KG1vZGVsLCBjb21wb25lbnQpIHtcXG4gICAgICAgICAgICAkZGJbbW9kZWxdLmluc2VydChjb21wb25lbnQpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yVXBkYXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbiwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnVwZGF0ZSh7ICdfaWQnOiBpZCB9LCBjb21wb25lbnQsIHsgJ3Vwc2VydCc6IHRydWUgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lclVwZGF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uICRlZGl0b3JVcGRhdGVDb21wb25lbnQoaWQsIGNvbGxlY3Rpb24sIGNvbXBvbmVudCkge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS51cGRhdGUoeyAnX2lkJzogaWQgfSwgY29tcG9uZW50LCB7ICd1cHNlcnQnOiB0cnVlIH0pO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGVkaXRvckRlbGV0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbikge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckRlbGV0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uICRkZXNpZ25lckRlbGV0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbikge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIGJlaGF2aW9yIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gY3JlYXRlQmVoYXZpb3IoY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoY29tcG9uZW50KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZUJlaGF2aW9yKGlkLCBiZWhhdmlvcikge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmUoaWQpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5tYWluKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnc3RhcnQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJVcGRhdGVCZWhhdmlvcicsIGZ1bmN0aW9uICRkZXNpZ25lclVwZGF0ZUJlaGF2aW9yKGlkLCBiZWhhdmlvcikge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmUoaWQpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5tYWluKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnc3RhcnQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlQmVoYXZpb3InLCBmdW5jdGlvbiAkZWRpdG9yRGVsZXRlQmVoYXZpb3IoaWQpIHtcXG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlQmVoYXZpb3InLCBmdW5jdGlvbiAkZWRpdG9yRGVsZXRlQmVoYXZpb3IoaWQpIHtcXG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgLy8gU3lzdGVtIERlc2lnbmVyIGV2ZW50XFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJTeW5jJywgZnVuY3Rpb24gc3luYygpIHtcXG4gICAgICAgICAgICB2YXIgZGVzaWduZXJXaW5kb3cgPSB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coKSxcXG4gICAgICAgICAgICAgICAgc3lzdGVtID0gbnVsbDtcXG5cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3cobnVsbCk7XFxuICAgICAgICAgICAgc3lzdGVtID0gSlNPTi5wYXJzZSh0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKCkpO1xcbiAgICAgICAgICAgIGRlc2lnbmVyV2luZG93ID0gdGhpcy5yZXF1aXJlKCdhZG1pbicpLmRlc2lnbmVyV2luZG93KGRlc2lnbmVyV2luZG93KTtcXG5cXG4gICAgICAgICAgICB0aGlzLiRhcHBMb2FkU3lzdGVtKHN5c3RlbSk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIERhdGFiYXNlIGluc2VydCBldmVudFxcbiAgICAgICAgZGIub24oJ2luc2VydCcsIGZ1bmN0aW9uIGluc2VydChldmVudCkge1xcbiAgICAgICAgICBpZiAoZXZlbnQuY29sbGVjdGlvbi5pbmRleE9mKCdSdW50aW1lJykgIT09IDApIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKS4kcnVudGltZUNyZWF0ZUNvbXBvbmVudChldmVudC5jb2xsZWN0aW9uLCBldmVudC5kb2N1bWVudCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgXFxuICAgICAgICAgLy8gRGF0YWJhc2UgcmVtb3ZlIGV2ZW50XFxuICAgICAgICBkYi5vbigncmVtb3ZlJywgZnVuY3Rpb24gcmVtb3ZlKGV2ZW50KSB7XFxuICAgICAgICAgIGlmIChldmVudC5jb2xsZWN0aW9uLmluZGV4T2YoJ1J1bnRpbWUnKSAhPT0gMCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpLiRydW50aW1lRGVsZXRlQ29tcG9uZW50KGV2ZW50LmlkLCBldmVudC5jb2xsZWN0aW9uKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuICAgICAgICBcXG4gICAgICAgICAvLyBEYXRhYmFzZSB1cGRhdGUgZXZlbnRcXG4gICAgICAgIGRiLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiB1cGRhdGUoZXZlbnQpIHtcXG4gICAgICAgICAgaWYgKGV2ZW50LmNvbGxlY3Rpb24uaW5kZXhPZignUnVudGltZScpICE9PSAwKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdjaGFubmVsJykuJHJ1bnRpbWVVcGRhdGVDb21wb25lbnQoZXZlbnQuaWQsIGV2ZW50LmNvbGxlY2lvbiwgZXZlbnQuZmllbGQsIGV2ZW50LnZhbHVlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xcbiAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcXG4gICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiZcXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuZnJvbSAhPT0gJ3VuZGVmaW5lZCcgJiZcXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyV2luZG93KGV2ZW50LnNvdXJjZSk7XFxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1lc3NhZ2UuaW5zZXJ0KGRhdGEpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xcblxcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5pbmZvKCdhZG1pbiBpcyBzdGFydGVkJyk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmluZm8oJ2FkbWluIGlzIGFscmVhZHkgc3RhcnRlZCcpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjYTBmMTAyMDQxMmQ0ZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYTBmMTAyMDQxMmQ0ZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImdldFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBnZXQoa2V5KSB7XFxuICB2YXIgcmVzdWx0ID0gbnVsbDtcXG4gIFxcbiAgaWYgKHR5cGVvZiB0aGlzLnN0b3JlKClba2V5XSkge1xcbiAgICByZXN1bHQgPSB0aGlzLnN0b3JlKClba2V5XTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNjc2NDEwMGQ1MWI1ZjhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNjc2NDEwMGQ1MWI1ZjhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzZXRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcXG4gICAgdmFyIHN0b3JlID0gdGhpcy5zdG9yZSgpLFxcbiAgICAgICAgaXRlbSA9IHt9O1xcbiAgICBcXG4gICAgc3RvcmVba2V5XSA9IHZhbHVlO1xcbiAgICB0aGlzLnN0b3JlKHN0b3JlKTtcXG5cXG4gICAgaXRlbVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xcbiAgICBcXG4gICAgdHJ5IHtcXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTsgXFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9IGNhdGNoKGUpIHt9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMzRiNjE2YjEwMTZmNjBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMzRiNjE2YjEwMTZmNjBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjbGVhclwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjbGVhcigpIHtcXG4gIHRoaXMuc3RvcmUoe30pO1xcbiAgdHJ5IHsgIFxcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7IFxcbiAgICAgICAgYnJlYWs7XFxuICAgICAgZGVmYXVsdDpcXG4gICAgICAgIGJyZWFrO1xcbiAgICB9XFxuICB9ICBjYXRjaChlKSB7fVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2YxYTg0MzFiM2Q1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2YxYTg0MzFiM2Q1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiaW5pdFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbml0KGNvbmYpIHtcXG4gIHRyeSB7XFxuICAgIHN3aXRjaCAodHJ1ZSkge1xcbiAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAvLyBpbml0IFxcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxcbiAgICAgICAgICAgIHN0b3JlID0ge30sXFxuICAgICAgICAgICAgaSA9IDAsXFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoOyAgICBcXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICBzdG9yZVtrZXlzW2ldXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleXNbaV1dKTtcXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5zdG9yZShzdG9yZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIGV2ZW50XFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uIChlKSB7XFxuICAgICAgICAgIHZhciBvYmogPSB7fSxcXG4gICAgICAgICAgICAgIHN0b3JlID0gdGhpcy5zdG9yZSgpO1xcbiAgICAgICAgICAgICAgXFxuICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgc3RvcmVbZS5rZXldID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcXG4gICAgICAgICAgICB0aGlzLnN0b3JlKHN0b3JlKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIG9ialtlLmtleV0gPSB7fTtcXG4gICAgICAgICAgICBvYmpbZS5rZXldLm9sZFZhbHVlID0gSlNPTi5wYXJzZShlLm9sZFZhbHVlKTtcXG4gICAgICAgICAgICBvYmpbZS5rZXldLm5ld1ZhbHVlID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQob2JqKTtcXG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XFxuICAgICAgICBicmVhaztcXG4gICAgICBkZWZhdWx0OlxcbiAgICAgICAgYnJlYWs7XFxuICAgIH1cXG4gIH0gY2F0Y2ggKGUpIHt9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTQ5MjFhYzcxMTJiZDRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTQ5MjFhYzcxMTJiZDRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xcbiAgdmFyIHN0b3JlID0gdGhpcy5zdG9yZSgpO1xcbiAgXFxuICBkZWxldGUgc3RvcmVba2V5XTtcXG4gIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgXFxuICB0cnkge1xcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTsgXFxuICAgICAgICBicmVhaztcXG4gICAgICBkZWZhdWx0OlxcbiAgICAgICAgYnJlYWs7XFxuICAgIH1cXG4gIH0gY2F0Y2goZSkge31cXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzMDEwMTY3ZjMxM2Y4N1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzMDEwMTY3ZjMxM2Y4N1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5c3RlbShwYXJhbXMpIHtcXG4gICAgdmFyIFJ1bnRpbWVTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG4gICAgXFxuICAgIGlmIChwYXJhbXMpIHtcXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgICAgICAgIGNvbmYubmFtZSA9IHBhcmFtcztcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIGNvbmYgPSBwYXJhbXM7XFxuICAgICAgICAgIGNvbmYubWFzdGVyID0gdHJ1ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIFJ1bnRpbWVTeXN0ZW0gPSB0aGlzLnJlcXVpcmUoJ1J1bnRpbWVTeXN0ZW0nKTtcXG4gICAgICAgIHN5c3RlbSA9IG5ldyBSdW50aW1lU3lzdGVtKGNvbmYpO1xcbiAgICAgICAgc3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG4gICAgfSBlbHNlIHtcXG4gICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XFxuICAgICAgICAgICAgc3lzdGVtSWQgPSByZXN1bHRbMF0uX2lkO1xcbiAgICAgICAgICAgIHN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5c3RlbUlkKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gc3lzdGVtO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTUxNDFlNDAzMTJjZDhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTUxNDFlNDAzMTJjZDhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICB9IFxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDsgXFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZjY5NDFhMGMwMTJjMWZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjY5NDFhMGMwMTJjMWZcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25zXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKG5hbWUpIHtcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDsgXFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgXFxuICAgICAgICBpdGVtID0ga2V5c1tpXTsgXFxuICAgICAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ2NvbGxlY3Rpb24nKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZWY3MTFiNDE3MWM4NDlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZWY3MTFiNDE3MWM4NDlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50KG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdldmVudCcpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYmFlNTFiNmVkMWQyNWNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYmFlNTFiNmVkMWQyNWNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50c1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudHMobmFtZSkge1xcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgXFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnZXZlbnQnKSB7XFxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XFxuICAgICAgICB9XFxuICAgIH0gXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOWFjMjEyNTIyMTUyOGJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOWFjMjEyNTIyMTUyOGJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxpbmtcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGluayhuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnbGluaycpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTdlZDIxZGZjMDFiOGU4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTdlZDIxZGZjMDFiOGU4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaW5rc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsaW5rcyhuYW1lKSB7IFxcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdsaW5rJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMWNlMzE4YTU2MWFjNjFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMWNlMzE4YTU2MWFjNjFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtZXRob2QobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnbWV0aG9kJykge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmZmMjE5MGEwMTgwNDZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmZmMjE5MGEwMTgwNDZcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kcyhuYW1lKSB7XFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnbWV0aG9kJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IFxcbiAgICBcXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwMjhkMTY4MWUxZmQ1OFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwMjhkMTY4MWUxZmQ1OFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydGllc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0aWVzKG5hbWUpIHsgXFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ3Byb3BlcnR5Jykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOGVlYjEwYzUzMTkzNjhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOGVlYjEwYzUzMTkzNjhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnR5KG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBcXG4gICAgaWYgKHRoaXMuc2NoZW1hKClbbmFtZV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWJhNzIxMjAxMTE0YjZiXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWJhNzIxMjAxMTE0YjZiXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlc3Ryb3koKSB7XFxuICAgICRjb21wb25lbnQuZGVzdHJveSh0aGlzLmlkKCkpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTQ4NjE4NmY0MWE0OGNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTQ4NjE4NmY0MWE0OGNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBvZmYoc3RhdGUsIGJlaGF2aW9ySWQpIHtcXG4gICAgdmFyIGFyZ3MgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gNzsgaSsrKSB7XFxuICAgICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcXG4gICAgfVxcbiAgICBcXG4gICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XFxuICAgICAgICBcXFwiY29tcG9uZW50XFxcIjogdGhpcywgXFxuICAgICAgICBcXFwibWV0aG9kTmFtZVxcXCI6IFxcXCJvZmZcXFwiLCBcXG4gICAgICAgIFxcXCJhcmdzXFxcIjogYXJnc1xcbiAgICAgICAgfSkpIHtcXG4gICAgICAgIFxcbiAgICAgICAgaWYgKHN0YXRlIHx8IGJlaGF2aW9ySWQpIHtcXG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHtcXG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgICAgICAgICAgICBcXFwiYmVoYXZpb3JJZFxcXCI6IGJlaGF2aW9ySWQsIFxcbiAgICAgICAgICAgICAgICAgICAgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpLCBcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJzdGF0ZVxcXCI6IHN0YXRlXFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0gZWxzZSB7IFxcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLndhcm4oXFxcImludm9rZSBcXFxcJ29mZlxcXFwnIG1ldGhvZCBvZiBjb21wb25lbnQgJ1xcXCIgKyB0aGlzLmlkKCkgKyBcXFwiJyB3aXRoIGFuIGludmFsaWQgc3RhdGUgJ1xcXCIgKyBzdGF0ZSArIFxcXCInXFxcIik7IFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XFxuICAgICAgICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKVxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkYTBhMTc4NzgxMDRjM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkYTBhMTc4NzgxMDRjM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicmVxdWlyZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiByZXF1aXJlKGlkKSB7XFxuICAgIHJldHVybiAkY29tcG9uZW50LmdldChpZCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFhNTExMWQxN2ExODAwY1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFhNTExMWQxN2ExODAwY1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucygpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9LFxcbiAgICBjb2xsZWN0aW9uTmFtZSA9ICcnO1xcbiAgICBcXG4gICAgZm9yIChjb2xsZWN0aW9uTmFtZSBpbiAkZGIuc3RvcmUpIHtcXG4gICAgICAgIGlmICgkZGIuc3RvcmUuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpICYmIGNvbGxlY3Rpb25OYW1lLmluZGV4T2YoJ1J1bnRpbWUnKSAhPT0gMCkge1xcbiAgICAgICAgICAgIHJlc3VsdFtjb2xsZWN0aW9uTmFtZV0gPSAkZGJbY29sbGVjdGlvbk5hbWVdO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlNWJmMTY3Y2ExYjYxZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlNWJmMTY3Y2ExYjYxZVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdWJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xcbiAgICByZXR1cm4gJGRiLnN1YnN5c3RlbShwYXJhbXMpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNWFiMTExMmU4MWIxYjRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNWFiMTExMmU4MWIxYjRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5c3RlbShzeXN0ZW0pIHtcXG4gICAgdmFyIHJlc3VsdCAgPSAnJztcXG4gICAgXFxuICAgIGlmIChzeXN0ZW0pIHtcXG4gICAgICByZXN1bHQgPSAkZGIuc3lzdGVtKHN5c3RlbSk7XFxuICAgICAgdGhpcy5yZXF1aXJlKHJlc3VsdCkuc3RhdGUoJ2FjdGl2ZScpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIHJlc3VsdCA9ICRkYi5zeXN0ZW0oKTtcXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZDk5MzEwOGZhMThlZjJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZDk5MzEwOGZhMThlZjJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlYnVnXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcXG4gICAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICAgICAgY29uc29sZS5sb2coJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWEzN2ExODhlMTFmZTczXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWEzN2ExODhlMTFmZTczXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJlcnJvclwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XFxuICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlZGQyMWUxMmExNjUzNFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlZGQyMWUxMmExNjUzNFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHtcXG4gICAgaWYgKHRoaXMubGV2ZWwoKSA9PT0gJ2luZm8nIHx8IHRoaXMubGV2ZWwoKSA9PT0gJ2RlYnVnJykge1xcbiAgICAgICAgY29uc29sZS5pbmZvKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XFxuICAgIH1cXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0MWYyMTQzZDMxMjJhNFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0MWYyMTQzZDMxMjJhNFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibGV2ZWxcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGV2ZWwodmFsKSB7XFxuICAgICRsb2cubGV2ZWwodmFsKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTkyNDAxYmFiMjEzMDRlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTkyNDAxYmFiMjEzMDRlXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ3YXJuXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xcbiAgICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnd2FybicgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gICAgfSBcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjExZmM3MTVlMmYxYTMxZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjExZmM3MTVlMmYxYTMxZVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY3JlYXRlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNyZWF0ZSgpIHtcXG4gICAgICAgICRtZXRhbW9kZWwuY3JlYXRlKCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyMzJmMWYxMDcxNDJjZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyMzJmMWYxMDcxNDJjZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibW9kZWxcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbW9kZWwobW9kZWwpIHtcXG4gICAgcmV0dXJuICRtZXRhbW9kZWwubW9kZWwobW9kZWwpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMzY1NDEyZjY5MTUzZDJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMzY1NDEyZjY5MTUzZDJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzY2hlbWEoc2NoZW1hKSB7XFxuICAgIHJldHVybiAkbWV0YW1vZGVsLnNjaGVtYShzY2hlbWEpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOTRkYjE0N2ZlMTYxYTJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOTRkYjE0N2ZlMTYxYTJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU1ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInR5cGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdHlwZSh0eXBlKSB7XFxuICAgIHJldHVybiAkbWV0YW1vZGVsLnR5cGUodHlwZSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyOWY3MTU2ODcxN2EyMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyOWY3MTU2ODcxN2EyMlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3lzdGVtXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3luY1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeW5jKCkge1xcbiAgICB2YXIgc3lzdGVtID0gSlNPTi5wYXJzZSgkZGIuc3lzdGVtKCkpO1xcbiAgICBcXG4gICAgdGhpcy5zY2hlbWFzKHN5c3RlbS5zY2hlbWFzKTtcXG4gICAgdGhpcy50eXBlcyhzeXN0ZW0udHlwZXMpO1xcbiAgICB0aGlzLmJlaGF2aW9ycyhzeXN0ZW0uYmVoYXZpb3JzKTtcXG4gICAgdGhpcy5jb21wb25lbnRzKHN5c3RlbS5jb21wb25lbnRzKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWVmOTUxZjE0MTFiODk1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWVmOTUxZjE0MTFiODk1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVPU0dpXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiaW5zdGFsbFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbnN0YWxsKHVybCwgYXN5bmMpIHsgXFxuICB2YXIgaW1wb3J0ZWRTeXN0ZW0gPSBudWxsLFxcbiAgICAgIHN5c3RlbSA9IHt9LFxcbiAgICAgIHN5c3RlbUlkID0gJycsXFxuICAgICAgY2FsbGJhY2tMb2FkID0gbnVsbCxcXG4gICAgICB4aHIgPSBudWxsLFxcbiAgICAgIHJlc3VsdCA9ICcnLFxcbiAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcblxcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XFxuICAgIGltcG9ydGVkU3lzdGVtID0gdXJsO1xcbiAgfSBlbHNlIHtcXG4gICAgaWYgKHVybC5pbmRleE9mKCd7JykgPT09IDApIHtcXG4gICAgICBpbXBvcnRlZFN5c3RlbSA9IEpTT04ucGFyc2UodXJsKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHtcXG4gICAgc3lzdGVtSWQgPSB0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKGltcG9ydGVkU3lzdGVtKTsgXFxuICAgIGlmIChzeXN0ZW1JZCkge1xcbiAgICAgIHN5c3RlbSA9IHRoaXMucmVxdWlyZShzeXN0ZW1JZCk7XFxuICAgICAgXFxuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XFxuICAgICAgICBzeXN0ZW0ubG9jYXRpb24odXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTsgICAgXFxuICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c3RlbUlkKTtcXG4gICAgICBzeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgY2hhbm5lbC4kc3lzdGVtUmVzb2x2ZWQoc3lzdGVtSWQpO1xcbiAgICAgIFxcbiAgICAgIHJlc3VsdCA9IHN5c3RlbUlkO1xcbiAgICB9XFxuICB9IGVsc2UgeyAgIFxcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBpZiAodXJsLmluZGV4T2YoJy5qc29uJykgIT09IC0xKSB7XFxuICAgICAgICBzeXN0ZW0gPSBnbG9iYWwucmVxdWlyZShnbG9iYWwucHJvY2Vzcy5lbnYuUFdEICsgJy8nICsgdXJsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgc3lzdGVtID0gZ2xvYmFsLnJlcXVpcmUodXJsKTtcXG4gICAgICB9XFxuICAgICAgc3lzdGVtSWQgPSB0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKHN5c3RlbSk7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG4gICAgICBcXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpOyAgICBcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzdGVtSWQpO1xcbiAgICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXN0ZW1JZCk7XFxuICAgICAgXFxuICAgICAgcmVzdWx0ID0gc3lzdGVtSWQ7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XFxuICAgICAgY2FsbGJhY2tMb2FkID0gZnVuY3Rpb24gY2FsbGJhY2tMb2FkKHN5c3RlbSwgdXJsKSB7XFxuICAgICAgICB2YXIgc3lzSWQgPSAkZGIuc3lzdGVtKHN5c3RlbSksXFxuICAgICAgICAgICAgc3lzID0gJGNvbXBvbmVudC5nZXQoc3lzSWQpLFxcbiAgICAgICAgICAgIGNoYW5uZWwgPSAkY29tcG9uZW50LmdldCgnY2hhbm5lbCcpO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7ICAgIFxcbiAgICAgICAgICBzeXMubG9jYXRpb24odXJsKTsgICAgXFxuICAgICAgICB9XFxuICAgICAgICBzeXMuc3RhdGUoJ2luc3RhbGxlZCcpOyAgICBcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXNJZCk7XFxuICAgICAgICBzeXMuc3RhdGUoJ3Jlc29sdmVkJyk7XFxuICAgICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXNJZCk7XFxuICAgICAgICBcXG4gICAgICAgIHJlc3VsdCA9IHN5c0lkO1xcbiAgICAgIH07XFxuICAgICAgXFxuICAgICAgaWYgKGFzeW5jKSB7XFxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcXG4gICAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcXG4gICAgICAgIHhoci5zZW5kKG51bGwpO1xcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLCB1cmwpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjMTUxN2I3MTFjYjc4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjMTUxN2I3MTFjYjc4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVPU0dpXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwidW5pbnN0YWxsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHVuaW5zdGFsbChpZCkgeyBcXG5cXHR2YXIgc2VhcmNoID0ge30sXFxuXFx0ICAgIHN5c3RlbSA9IG51bGwsXFxuXFx0ICAgIGJlaGF2aW9ySWQgPSAnJyxcXG5cXHQgICAgY29sbGVjdGlvbiA9ICAnJyxcXG5cXHQgICAgY29tcG9uZW50SWQgPSAnJyxcXG5cXHQgICAgbGVuZ3RoID0gMCxcXG5cXHQgICAgaSA9IDAsXFxuXFx0ICAgIGNvcmVDb21wb25lbnRzID0gWydhZG1pbicsICdjaGFubmVsJywgJ2RiJywgJ2xvZ2dlcicsICdtZXRhbW9kZWwnLCAncnVudGltZSddO1xcblxcdFxcblxcdHNlYXJjaCA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcblxcdCAgJ19pZCc6IGlkXFxuXFx0fSk7XFxuXFx0XFxuXFx0aWYgKHNlYXJjaC5sZW5ndGgpIHtcXG5cXHQgIHN5c3RlbSA9IHNlYXJjaFswXTtcXG5cXHQgIC8vIHJlbW92ZSBiZWhhdmlvcnNcXG5cXHQgIGlmIChzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuXFx0ICAgIGZvciAoYmVoYXZpb3JJZCBpbiBzeXN0ZW0uYmVoYXZpb3JzKSB7XFxuXFx0ICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoeyBcXG5cXHQgICAgICAgICdfaWQnOiBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdLl9pZFxcblxcdCAgICAgIH0pO1xcblxcdCAgICB9XFxuXFx0ICB9XFxuXFx0ICAvLyByZW1vdmUgY29tcG9uZW50c1xcblxcdCAgaWYgKHN5c3RlbS5jb21wb25lbnRzKSB7XFxuXFx0ICAgIGZvciAoY29sbGVjdGlvbiBpbiBzeXN0ZW0uY29tcG9uZW50cykge1xcblxcdCAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gc3lzdGVtLmNvbXBvbmVudHNbY29sbGVjdGlvbl0pIHtcXG5cXHQgICAgICAgIGlmIChjb3JlQ29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudElkKSA9PT0gLTEpIHtcXG4gIFxcdCAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnJlbW92ZSh7IFxcbiAgXFx0ICAgICAgICAgICdfaWQnOiBjb21wb25lbnRJZFxcbiAgXFx0ICAgICAgICB9KTtcXG5cXHQgICAgICAgIH1cXG5cXHQgICAgICB9XFxuXFx0ICAgIH1cXG5cXHQgIH1cXG5cXHR9XFxuXFx0XFxuXFx0dGhpcy5yZXF1aXJlKGlkKS5zdGF0ZSgndW5pbnN0YWxsZWQnKTtcXG5cXHRjaGFubmVsLiRzeXN0ZW1Vbmluc3RhbGxlZChpZCk7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjYjlkMTAzZDQxZGQ5N1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYjlkMTAzZDQxZGQ5N1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gIHZhciBzdWJzeXN0ZW1zID0gW10sXFxuICAgIHN5c3RlbXMgPSBbXSxcXG4gICAgc3lzdGVtID0gbnVsbCxcXG4gICAgc2NyaXB0cyA9IFtdLFxcbiAgICBzY3JpcHQgPSBudWxsLFxcbiAgICBtb2RlID0gJycsXFxuICAgIGxvZ0xldmVsID0gJ3dhcm4nLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG5cXG4gIC8vIGluIGEgYnJvd3NlclxcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTtcXG4gICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuXFxuICAgIC8vIGxvZ2dlclxcbiAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2xvZ10nKTtcXG4gICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XFxuICAgICAgbG9nTGV2ZWwgPSBzY3JpcHRzWzBdLmdldEF0dHJpYnV0ZSgnbG9nJyk7XFxuICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbChsb2dMZXZlbCk7XFxuICAgIH1cXG5cXG4gICAgLy8gbW9kZVxcbiAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W21vZGVdJyk7XFxuICAgIGlmIChzY3JpcHRzLmxlbmd0aCkge1xcbiAgICAgIG1vZGUgPSBzY3JpcHRzWzBdLmdldEF0dHJpYnV0ZSgnbW9kZScpO1xcbiAgICAgIFxcbiAgICAgIGlmIChtb2RlID09PSAnZGV2Jykge1xcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xcbiAgICAgICAgfSwgZmFsc2UpO1xcblxcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jdGlvbiAoZSkge1xcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XFxuICAgICAgICB9LCBmYWxzZSk7XFxuXFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xcbiAgICAgICAgICB2YXIgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcXG4gICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XFxuICAgICAgICAgIHZhciBqc29uID0gJyc7XFxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcXG4gICAgICAgICAgICBqc29uICs9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgICAgdmFyIHN5cyA9IEpTT04ucGFyc2UoanNvbik7XFxuICAgICAgICAgICAgcnVudGltZS5pbnN0YWxsKHN5cyk7XFxuICAgICAgICAgIH07XFxuICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGVzWzBdLCAnVVRGLTgnKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgICBpZiAobW9kZSA9PT0gJ2Rlc2lnbicpIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgnYWRtaW4nKS5zdGFydCgpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyBzeXN0ZW1zXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgIHN5c3RlbSA9IHN5c3RlbXNbaV07XFxuXFxuICAgICAgaWYgKHN5c3RlbS5nZXRBdHRyaWJ1dGUoJ2FzeW5jJykgPT09ICdmYWxzZScpIHtcXG4gICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmluc3RhbGwoc3lzdGVtLmhyZWYsIGZhbHNlKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykuaW5zdGFsbChzeXN0ZW0uaHJlZiwgdHJ1ZSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIGRlc2lnbmVyIChkZXByZWNhdGVkKVxcbiAgICBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2Rlc2lnbmVyXScpO1xcbiAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuc3RhcnQoKTtcXG4gICAgfVxcblxcbiAgICAvLyByZWFkeSBldmVudFxcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XFxuICAgICAgdGhpcy5yZXF1aXJlKCdydW50aW1lJykucmVhZHkoKTtcXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDVmMjE5YzY4MTM2NDNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDVmMjE5YzY4MTM2NDNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydChpZCkgeyBcXG5cXHR2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGlkKSxcXG5cXHQgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcdFxcblxcdGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJyB8fCBzeXN0ZW0uc3RhdGUoKSA9PT0gJ2luc3RhbGxlZCcpIHtcXG4gIFxcdHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gIFxcdGlmIChzeXN0ZW0ubWFpbikge1xcbiAgXFx0ICBzeXN0ZW0ubWFpbigpO1xcbiAgXFx0fVxcbiAgXFx0aWYgKHN5c3RlbS5zdGFydCkge1xcbiAgXFx0ICBzeXN0ZW0uc3RhcnQoKTtcXG4gIFxcdH1cXG4gIFxcdGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoaWQpO1xcbiAgXFx0c3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG5cXHR9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTgxYTFmMDBkMTcyNjlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTgxYTFmMDBkMTcyNjlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdG9wXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0b3AoaWQpIHsgXFxuXFx0dmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuXFx0ICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXHQgICAgXFxuXFx0aWYgKHN5c3RlbS5zdGF0ZSgpID09PSAnYWN0aXZlJykge1xcbiAgXFx0c3lzdGVtLnN0YXRlKCdzdG9wcGluZycpO1xcbiAgXFx0aWYgKHN5c3RlbS5zdG9wKSB7XFxuICBcXHQgIHN5c3RlbS5zdG9wKCk7XFxuICBcXHR9XFxuICBcXHRjaGFubmVsLiRzeXN0ZW1TdG9wcGVkKGlkKTtcXG4gIFxcdHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gIFxcdGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKGlkKTtcXG5cXHR9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTY4NTFiNjAyMTI4ZDFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTY4NTFiNjAyMTI4ZDFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RhdHVzKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0ge30sXFxuXFx0ICAgIHN5c3RlbSA9IG51bGwsXFxuXFx0ICAgIGxlbmd0aCA9IDAsXFxuXFx0ICAgIGkgPSAwO1xcblxcdFxcblxcdHN5c3RlbXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHt9KTtcXG5cXHRcXG5cXHRsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG5cXHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG5cXHQgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG5cXHQgICAgcmVzdWx0W3N5c3RlbS5uYW1lXSA9IHtcXG5cXHQgICAgICAnaWQnOiBzeXN0ZW0uX2lkLFxcblxcdCAgICAgICdzdGF0ZSc6IHN5c3RlbS5zdGF0ZSxcXG5cXHQgICAgICAnbmFtZSc6IHN5c3RlbS5uYW1lLFxcblxcdCAgICAgICd2ZXJzaW9uJzogc3lzdGVtLnZlcnNpb24sXFxuXFx0ICAgICAgJ2xvY2F0aW9uJzogc3lzdGVtLmxvY2F0aW9uLFxcblxcdCAgICAgICdtYXN0ZXInOiBzeXN0ZW0ubWFzdGVyXFxuXFx0ICAgIH07XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyZTQ5MTg1OWMxMzkxOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyZTQ5MTg1OWMxMzkxOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIiRzeXN0ZW1TdGFydGVkXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLm5hbWUgPT09ICdyZWFkeScpIHsgICAgXFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCArIDEgPT09ICRkYi5SdW50aW1lU3lzdGVtLmNvdW50KCkpIHtcXG4gICAgICAgICAgJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTkwMjFiZDRlMWJjNmVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTkwMjFiZDRlMWJjNmVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCIkc3lzdGVtSW5zdGFsbGVkXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gICAgdmFyIHN5c3RlbXMgPSBudWxsLFxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgICAgICBtYXN0ZXIgPSBbXSxcXG4gICAgICAgIGNhblN0YXJ0ID0gdHJ1ZTtcXG5cXG4gICAgaWYgKGlkICE9PSAnZTg5YzYxN2I2YjE1ZDI0Jykge1xcbiAgICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgICBzeXN0ZW1zID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7fSk7XFxuXFxuICAgICAgc3lzdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzeXN0ZW0pIHtcXG4gICAgICAgICAgdmFyIHN5cyA9IHRoaXMucmVxdWlyZShzeXN0ZW0uX2lkKTtcXG4gICAgICAgICAgaWYgKHN5cy5zdGF0ZSgpID09PSAnbm9uZScpIHtcXG4gICAgICAgICAgICAgIGNhblN0YXJ0ID0gZmFsc2U7XFxuICAgICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICAgIGlmIChjYW5TdGFydCkge1xcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcXG4gICAgICAgICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xcbiAgICAgICAgICAgICAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShkZXAuX2lkKTtcXG4gICAgICAgICAgICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgaWYgKHN5c3RlbS5zdGF0ZSgpID09PSAncmVzb2x2ZWQnKSB7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgICAgICAgICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgICAgICAgICAgICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoZGVwLl9pZCk7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgICAgICAgIG1hc3RlciA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgIG1hc3Rlci5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJykge1xcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICBjaGFubmVsLiRzeXN0ZW1TdGFydGVkKGRlcC5faWQpO1xcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xcbiAgICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNmYTQxNDVmNjE0ZGE4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNmYTQxNDVmNjE0ZGE4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7IFxcblxcdCRkYi5SdW50aW1lTWVzc2FnZS5pbnNlcnQobXNnKTtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTgyYzUxZWRjMzFhZDk3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTgyYzUxZWRjMzFhZDk3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTeXN0ZW1PU0dpXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwidW5pbnN0YWxsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHVuaW5zdGFsbCgpIHsgXFxuXFx0dGhpcy5yZXF1aXJlKCdydW50aW1lJykudW5pbnN0YWxsKHRoaXMuaWQoKSk7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOWNmMzE3ZDcyMTczMzFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOWNmMzE3ZDcyMTczMzFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJidW5kbGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gYnVuZGxlKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0gdGhpcy5yZXF1aXJlKCdkYicpLnN5c3RlbSgpO1xcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNGI3NzE0NDkxMWNlNDhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNGI3NzE0NDkxMWNlNDhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN5c3RlbU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJidW5kbGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gYnVuZGxlKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0gJycsXFxuXFx0c3lzdGVtID0gW107XFxuXFx0XFxuXFx0c3lzdGVtcyA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAnX2lkJzogdGhpcy5pZCgpXFxuICB9KTtcXG4gIFxcbiAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XFxuICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHN5c3RlbXNbMF0pO1xcbiAgfVxcbiAgXFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiY29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwiUnVudGltZUFkbWluXCI6IHtcbiAgICAgICAgICAgIFwiYWRtaW5cIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiYWRtaW5cIixcbiAgICAgICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZXNpZ25lcldpbmRvd1wiOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZVN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcInN0b3JhZ2VcIixcbiAgICAgICAgICAgICAgICBcIl9jb3JlXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lXCI6IHtcbiAgICAgICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJydW50aW1lXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi4wLjAtYWxwaGEuMVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZURhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiZGJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVMb2dnZXJcIjoge1xuICAgICAgICAgICAgXCJsb2dnZXJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibG9nZ2VyXCIsXG4gICAgICAgICAgICAgICAgXCJsZXZlbFwiOiBcIndhcm5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVNZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibWV0YW1vZGVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU3lzdGVtXCI6IHt9LFxuICAgICAgICBcIlJ1bnRpbWVDaGFubmVsXCI6IHtcbiAgICAgICAgICAgIFwiY2hhbm5lbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJjaGFubmVsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJuYW1lXCI6IFwic3lzdGVtLXJ1bnRpbWVcIixcbiAgICBcInZlcnNpb25cIjogXCIyLjAuMC1hbHBoYS4xXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlN5c3RlbSBSdW50aW1lXCIsXG4gICAgXCJfaWRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcbiAgICBcIm1hc3RlclwiOiBmYWxzZSxcbiAgICBcInN1YnN5c3RlbVwiOiBmYWxzZVxufTtcblxuLyogZXhwb3J0cyAgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtc3lzdGVtXG4gKiBAY2xhc3MgcnVudGltZS1zeXN0ZW1cbiAqIEBzdGF0aWMgXG4gKi9cblxuXG4vKipcbiAqIFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAqIEBwcm9wZXJ0eSB7UnVudGltZVN5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gc3lzdGVtO1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBcbiAqIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEBjbGFzcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBSdW50aW1lIGNvcmUgYmVoYXZpb3IuXG4gKiBJbiB0aGF0IGNhc2UsIHRoZSBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkIGluIGEgc3lzdGVtIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgZnVuY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNyZWF0ZWQgZnVuY3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uKG5hbWUsIGZ1bmMsIGNvcmUsIHVzZUNvcmVBUEkpIHtcbiAgdmFyIGZ1bmNOYW1lID0gJycsXG4gICAgYmVnaW5Cb2R5ID0gLTEsXG4gICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHBhcmFtc0NsZWFuID0gW10sXG4gICAgZnVuY0JvZHkgPSAnJyxcbiAgICBoZWFkZXIgPSAnJyxcbiAgICBhY3Rpb24gPSBudWxsO1xuXG4gIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gIGZ1bmNOYW1lID0gaGVhZGVyLnNwbGl0KCcoJylbMF0ucmVwbGFjZSgnZnVuY3Rpb24nLCAnJykudHJpbSgpO1xuICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG5cbiAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gIH0pO1xuXG4gIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMSk7XG4gIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcblxuICBmdW5jTmFtZSA9IGZ1bmNOYW1lIHx8IG5hbWU7XG5cbiAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICBwYXJhbXMgPSBbXTtcbiAgfVxuICBpZiAodXNlQ29yZUFQSSkge1xuICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgcGFyYW1zLnB1c2goJyRsb2cnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXNbMF0gIT09ICcnKSB7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKFwiICsgcGFyYW1zLmpvaW4oJywnKSArIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICsgcGFyYW1zLmpvaW4oXCInLCdcIikgKyBcIicsIGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xuICB9IGVsc2Uge1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgfVxuXG4gIHJldHVybiBhY3Rpb247XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBSdW50aW1lIGRhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBSdW50aW1lIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29yZSBpZiB0cnVlLCBiZWhhdmlvciBjYW4gbm90IGJlIGV4cG9ydGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGlkIG9mIHRoZSBiZWhhdmlvciBjcmVhdGVkIGluIFJ1bnRpbWUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gYWRkKGlkLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBjb3JlKSB7XG4gIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCksXG4gICAgc3RyQWN0aW9uID0gYWN0aW9uLnRvU3RyaW5nKCk7XG5cbiAgaWYgKHR5cGVvZiBjb3JlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvcmUgPSBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdXNlQ29yZUFQSSA9IGZhbHNlO1xuICB9XG5cbiAgYWN0aW9uID0gY3JlYXRlRnVuY3Rpb24oc3RhdGUsIHN0ckFjdGlvbiwgY29yZSwgdXNlQ29yZUFQSSk7XG5cbiAgc3RvcmVbYmVoYXZpb3JJZF0gPSBhY3Rpb247XG5cbiAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoe1xuICAgIFwiX2lkXCI6IGJlaGF2aW9ySWQsXG4gICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgXCJzdGF0ZVwiOiBzdGF0ZSxcbiAgICBcImFjdGlvblwiOiBzdHJBY3Rpb24sXG4gICAgXCJ1c2VDb3JlQVBJXCI6IHVzZUNvcmVBUEksXG4gICAgXCJjb3JlXCI6IGNvcmVcbiAgfSk7XG5cbiAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICBcIl9pZFwiOiBwYXJhbXMuYmVoYXZpb3JJZCxcbiAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgfSk7XG4gICAgICBkZWxldGUgc3RvcmVbcGFyYW1zLmJlaGF2aW9ySWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGRiUmVzdWx0ID0gW10sXG4gICAgYWN0aW9uID0gbnVsbDtcblxuICBkYlJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICB9KTtcblxuICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChiZWhhdmlvcikge1xuICAgIGFjdGlvbiA9IHN0b3JlW2JlaGF2aW9yLl9pZF07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihiZWhhdmlvci5zdGF0ZSwgYmVoYXZpb3IuYWN0aW9uLCBiZWhhdmlvci5jb3JlLCBiZWhhdmlvci51c2VDb3JlQVBJKTtcbiAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgIFwidXNlQ29yZUFQSVwiOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgXCJhY3Rpb25cIjogYWN0aW9uXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKlxuICogR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm4ge0JlaGF2aW9yfSB0aGUgYmVoYXZpb3JcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEBjbGFzcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gUnVudGltZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIHRoZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIHRoZSBhY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCBoYXZlIGEgc3BlY2lmaWMgc3RhdGUgXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBSdW50aW1lIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gYWRkO1xuXG5cbi8qKlxuICogR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEByZXR1cm4ge0JlaGF2aW9yfSB0aGUgYmVoYXZpb3JcbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKSkgPGJyPlxuICovXG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcblxuXG4vKipcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZXhwb3J0cy5nZXRBY3Rpb25zID0gZ2V0QWN0aW9ucztcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMucmVtb3ZlRnJvbU1lbW9yeSA9IHJlbW92ZUZyb21NZW1vcnk7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy4gXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBSdW50aW1lLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEBjbGFzcyBydW50aW1lLWNvbXBvbmVudFxuICogQHN0YXRpYyBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkd29ya2xvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuICBMSU5LX1RZUEUgPSAnbGluaycsXG4gIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJyxcbiAgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbiAgRVZFTlRfVFlQRSA9ICdldmVudCcsXG4gIE5BTUUgPSAnX25hbWUnLFxuICBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTdWIgY2xhc3MgdG8gb3ZlcnJpZGUgcHVzaCBhbmQgcG9wIG1ldGhvZCBvZiBBcnJheSBDbGFzcy5cbiAqIEBjbGFzcyBSdW50aW1lQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gUnVudGltZUFycmF5KGNvbmYpIHtcbiAgdmFyIGFyciA9IFtdLFxuICAgIGFyckRiID0gW10sXG4gICAgdHlwZSA9ICcnLFxuICAgIGlkID0gJycsXG4gICAgY2xhc3NJZCA9ICcnLFxuICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgIGlzUmVhZE9ubHkgPSBmYWxzZTtcblxuICBjb25mID0gY29uZiB8fCB7fTtcbiAgdHlwZSA9IGNvbmYudHlwZSB8fCAnJztcbiAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICBwcm9wZXJ0eU5hbWUgPSBjb25mLnByb3BlcnR5TmFtZSB8fCAnJztcbiAgYXJyRGIgPSBjb25mLmFyciB8fCBbXTtcbiAgY2xhc3NJZCA9IGNvbmYuY2xhc3NJZCB8fCAnJztcblxuICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNSZWFkT25seSA9IGNvbmYucmVhZE9ubHk7XG4gIH1cblxuICAvLyBpbml0XG4gIGFyckRiLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgIGFyci5wdXNoKCRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyci5wdXNoKHZhbCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfYWRkKHZhbCwgYWN0aW9uLCBzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICB2YXIgaXNDbGFzcyA9IGZhbHNlLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW5ndGggPSAwLFxuICAgICAgZGVsID0gW107XG5cbiAgICBpZiAoIWlzUmVhZE9ubHkpIHtcblxuICAgICAgaXNDbGFzcyA9IHR5cGUuaW5kZXhPZignQCcpICE9PSAtMTtcblxuICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlLnJlcGxhY2UoJ0AnLCAnJykpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3B1c2gnOlxuICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3Vuc2hpZnQnOlxuICAgICAgICAgICAgICBhcnJEYi51bnNoaWZ0KHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgIGRlbCA9IGFyckRiLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHZhbCk7XG5cbiAgICAgICAgICAgICAgbGVuZ3RoID0gZGVsLmxlbmd0aDtcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3N0b3JlW2RlbFtpXV0sICdyZW1vdmUnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAnaWQnOiBpZCxcbiAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAndmFsdWUnOiBhcnJEYlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBcImRhdGFcIjogW3ZhbCwgJ2FkZCddXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwuaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLmlkKCksIHR5cGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWwgJiYgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWwsIHR5cGUpKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3B1c2gnOlxuICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICdpZCc6IGlkLFxuICAgICAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICd2YWx1ZSc6IGFyckRiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsLCAnYWRkJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSwgdmFsLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJEYi5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlKGFjdGlvbikge1xuICAgIHZhciByZXN1bHQsXG4gICAgICB2YWwgPSBudWxsLFxuICAgICAgaXNDbGFzcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICBpZiAoYXJyRGIubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwb3AnOlxuICAgICAgICAgICAgdmFsID0gYXJyRGIucG9wKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NoaWZ0JzpcbiAgICAgICAgICAgIHZhbCA9IGFyckRiLnNoaWZ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgICAgICdpZCc6IGlkLFxuICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgJ3ZhbHVlJzogYXJyRGJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzQ2xhc3MgPSB0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG5cbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICByZXN1bHQgPSBzdG9yZVt2YWxdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgXCJkYXRhXCI6IFtyZXN1bHQsICdyZW1vdmUnXVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiBPdmVycmlkZSBwdXNoIG1ldGhvZC5cbiAgICogQHB1c2hcbiAgICogQHBhcmFtIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gdmFsXG4gICAqL1xuICBhcnIucHVzaCA9IGZ1bmN0aW9uIHB1c2godmFsKSB7XG4gICAgcmV0dXJuIF9hZGQodmFsLCAncHVzaCcpO1xuICB9O1xuXG4gIC8qIE92ZXJyaWRlIHVuc2hpZnQgbWV0aG9kLlxuICAgKiBAdW5zaGlmdFxuICAgKiBAcGFyYW0ge1J1bnRpbWVDb21wb25lbnR8T2JqZWN0fSB2YWxcbiAgICovXG4gIGFyci51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2YWwpIHtcbiAgICByZXR1cm4gX2FkZCh2YWwsICd1bnNoaWZ0Jyk7XG4gIH07XG5cbiAgLyogT3ZlcnJpZGUgY29uY2F0IG1ldGhvZC5cbiAgICogQHB1c2hcbiAgICogQHBhcmFtIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gYXJyXG4gICAqL1xuICBhcnIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0KGFycikge1xuICAgIHZhciBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9hZGQoYXJyW2ldLCAncHVzaCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmYuYXJyID0gYXJyRGI7XG4gICAgcmV0dXJuIG5ldyBSdW50aW1lQXJyYXkoY29uZik7XG4gIH07XG5cbiAgLyogT3ZlcnJpZGUgcG9wIG1ldGhvZC5cbiAgICogQHBvcFxuICAgKiBAcmV0dXJuIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gdmFsdWVcbiAgICovXG4gIGFyci5wb3AgPSBmdW5jdGlvbiBwb3AoKSB7XG4gICAgcmV0dXJuIF9yZW1vdmUoJ3BvcCcpO1xuICB9O1xuXG4gIC8qIE92ZXJyaWRlIHNoaWZ0IG1ldGhvZC5cbiAgICogQHNoaWZ0XG4gICAqIEByZXR1cm4ge1J1bnRpbWVDb21wb25lbnR8T2JqZWN0fSB2YWx1ZVxuICAgKi9cbiAgYXJyLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgcmV0dXJuIF9yZW1vdmUoJ3NoaWZ0Jyk7XG4gIH07XG5cbiAgLyogT3ZlcnJpZGUgc29ydCBtZXRob2QuXG4gICAqIEBzb3J0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0IHRoZSBzb3J0IGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge1J1bnRpbWVBcnJheX0gdGhlIGN1cnJlbnQgUnVudGltZUFycmF5XG4gICAqL1xuICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQoZnVuY3QpIHtcbiAgICBhcnJEYi5zb3J0KGZ1bmN0KTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICdmaWVsZCc6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgJ3ZhbHVlJzogYXJyRGJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgLyogT3ZlcnJpZGUgcmV2ZXJzZSBtZXRob2QuXG4gICAqIEByZXZlcnNlXG4gICAqIEByZXR1cm4ge1J1bnRpbWVBcnJheX0gdGhlIHJldmVyc2VkIFJ1bnRpbWVBcnJheVxuICAgKi9cbiAgYXJyLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIGFyckRiLnJldmVyc2UoKTtcblxuICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICdmaWVsZCc6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgJ3ZhbHVlJzogYXJyRGJcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIC8qIE92ZXJyaWRlIHNwbGljZSBtZXRob2QuXG4gICAqIEBzcGxpY2VcbiAgICogQHJldHVybiB7UnVudGltZUFycmF5fSB0aGUgc3BsaWNlZCBSdW50aW1lQXJyYXlcbiAgICovXG4gIGFyci5zcGxpY2UgPSBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDAsXG4gICAgICBpc0NsYXNzID0gZmFsc2UsXG4gICAgICBkYXRhID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgX2FkZCh2YWwsICdzcGxpY2UnLCBzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhcnJEYi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgICAnaWQnOiBpZCxcbiAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgJ3ZhbHVlJzogYXJyRGJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpc0NsYXNzID0gdHlwZS5pbmRleE9mKCdAJykgIT09IC0xO1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgIGRhdGEgPSBzdG9yZVtyZXN1bHRbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSByZXN1bHRbaV07XG4gICAgICAgIH1cblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIFwiZGF0YVwiOiBbZGF0YSwgJ3JlbW92ZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qIE92ZXJyaWRlIHNsaWNlIG1ldGhvZC5cbiAgICogQHNsaWNlXG4gICAqIEByZXR1cm4ge1J1bnRpbWVBcnJheX0gdGhlIHNsaWNlZCBSdW50aW1lQXJyYXlcbiAgICovXG4gIGFyci5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgcmVzdWx0ID0gYXJyRGIuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cblJ1bnRpbWVBcnJheS5wcm90b3R5cGUgPSBuZXcgQXJyYXk7XG4vKiBqc2hpbnQgK1cwNTggKi9cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdLnBhcmFtcztcbiAgaWYgKHBhcmFtcykge1xuICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0ubmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIHByb3BlcnR5IG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTElOS19UWVBFIHx8IHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8IHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBDT0xMRUNUSU9OX1RZUEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgXCJuYW1lXCI6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgXCJ0eXBlXCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgXCJyZWFkT25seVwiOiBtb2RlbFtwcm9wTmFtZXNbaV1dLnJlYWRPbmx5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICBzY2hlbWEgPSBudWxsLFxuICAgIHByb3BOYW1lcyA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDAsXG4gICAgcmVzdWx0ID0gW107XG5cbiAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRTY2hlbWEobW9kZWxbTkFNRV0pO1xuXG4gIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBNRVRIT0RfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHNjaGVtYSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHByb3BlcnR5IHNjaGVtYSBvZiB0aGUgc3RydWN0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVByb3BlcnRpZXMocHJvcGVydHlOYW1lLCBtb2RlbCkge1xuICB2YXIgbW9kZWxEZWYgPSBudWxsLFxuICAgIHR5cGUgPSBudWxsLFxuICAgIHN0cnVjdHVyZSA9IG51bGwsXG4gICAgcmVzdWx0ID0gW10sXG4gICAgcHJvcE5hbWVzID0gW107XG5cbiAgbW9kZWxEZWYgPSAkbWV0YW1vZGVsLmdldE1vZGVsKG1vZGVsKTtcbiAgdHlwZSA9IG1vZGVsRGVmW3Byb3BlcnR5TmFtZV0udHlwZTtcbiAgc3RydWN0dXJlID0gJG1ldGFtb2RlbC5nZXRUeXBlKHR5cGUpO1xuXG4gIGlmIChzdHJ1Y3R1cmUuc2NoZW1hKSB7XG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc3RydWN0dXJlLnNjaGVtYSk7XG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGV2ZW50IG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgZXZlbnRzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGlkKSB7XG4gIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gIG1vZGVsID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZCk7XG4gIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gRVZFTlRfVFlQRSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB2YWx1ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBwYXRoKSB7XG4gIHZhciByZXN1bHQgPSBudWxsLFxuICAgIGRvYyA9ICRkYi5zdG9yZVttb2RlbF1baWRdLFxuICAgIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyksXG4gICAgbGVuZ3RoID0gc3ViUGF0aC5sZW5ndGgsXG4gICAgaSA9IDA7XG5cbiAgcmVzdWx0ID0gZG9jO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2V0IFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBwYXRoLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXSxcbiAgICBzdWJQYXRoID0gcGF0aC5zcGxpdCgnLicpLFxuICAgIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoLFxuICAgIGkgPSAwO1xuXG4gIHJlc3VsdCA9IGRvYztcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICB9XG4gIHJlc3VsdFtzdWJQYXRoW2ldXSA9IHZhbHVlO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcgY2xhc3MgZnJvbSBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIHZhciBib2R5ID0ge307XG5cbiAgICBpZiAoY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnKSB7XG4gICAgICAkbG9nLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMoY29uZmlnLCBjbGFzc0lkKTtcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgICRsb2cuaW52YWxpZFBhcmFtZXRlcnMoY2xhc3NJZCk7XG4gICAgfVxuXG4gICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXRNb2RlbChjbGFzc0lkKSk7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfVxuXG4gICAgc3RvcmVbY29uZmlnLl9pZF0gPSB0aGlzO1xuXG4gICAgLy8gaWRcbiAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG5cbiAgICAvLyBjbGFzc0luZm9cbiAgICBpZiAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShjbGFzc0lkLCAnUnVudGltZUNvbXBvbmVudCcpKSB7XG4gICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICRkYi5zdG9yZVtjbGFzc0lkXVtjb25maWcuX2lkXSA9IGNvbmZpZztcblxuICAgICRkYi5jcmVhdGVMb2coJ2luc2VydCcsIGNsYXNzSWQsIGNvbmZpZy5faWQsICcnLCBjb25maWcpO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoe1xuICAgICAgICBjb2xsZWN0aW9uOiBjbGFzc0lkLFxuICAgICAgICBkb2N1bWVudDogY29uZmlnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgfVxuICB9O1xuICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBjbGFzc0lkICsgXCIgKGNvbmZpZykgeyBib2R5LmNhbGwodGhpcyxjb25maWcpIH07XCIpKGJvZHkpO1xuICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjbGFzc0lkO1xuICB9O1xuICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkIChwcm9wLCB2YWwpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwcm9wLCB2YWwpIH07XCIpKGJvZHkpO1xuICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuIEFsbCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWNjZXNzZWQgYnkgYSBtZXRob2Qgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICogU29tZSBjaGVja3MgY2FuIGJlIGRvbmUgaW4gb3JkZXIgdG8gc2VlIGlmIHRoZSBzZXQgb2YgcHJvcGVydGllcyBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgdmFyIGJvZHkgPSB7fSxcbiAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgcHJvcGVydHlUeXBlID0gJycsXG4gICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSAmJlxuICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUucmVwbGFjZSgnQCcsICcnKSkgJiYgKHR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVhbENvbGxlY3Rpb24oY29sbCwgdHlwZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAodHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbC5pZCAhPT0gJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkpIHsgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgcnVudGltZUFyciA9IG51bGwsXG4gICAgICAgICAgdmFsID0gbnVsbCxcbiAgICAgICAgICByZWFsVmFsID0gbnVsbCxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgcnVudGltZUFyciA9IG5ldyBSdW50aW1lQXJyYXkoe1xuICAgICAgICAgICAgICBcImlkXCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgXCJwcm9wZXJ0eU5hbWVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHByb3BlcnR5UmVhZE9ubHksXG4gICAgICAgICAgICAgIFwiY2xhc3NJZFwiOiBjbGFzc0lkLFxuICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICBcImFyclwiOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWVBcnI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSkgeyAvLyB3ZSByZXBsYWNlIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgIGlmIChfaXNWYWxpZENvbGxlY3Rpb24ocG9zaXRpb24sIHByb3BlcnR5VHlwZVswXSkpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICBcIl9pZFwiOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgICByZWFsVmFsID0gX2dldFJlYWxDb2xsZWN0aW9uKHBvc2l0aW9uLCBwcm9wZXJ0eVR5cGVbMF0pO1xuXG4gICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3Bvc2l0aW9uLCAncmVzZXQnXVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gcmVhbFZhbDtcblxuICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAnaWQnOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSwgcG9zaXRpb24sIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWxWYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lLCBwb3NpdGlvbiwgJ251bWJlcicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkodGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlWzBdKSB8fFxuICAgICAgICAgICAgICAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbSh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lLCBwcm9wZXJ0eVR5cGVbMF0ucmVwbGFjZSgnQCcsICcnKSkgJiYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogdGhpcy5pZCgpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUuaWQgIT09ICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWx1ZS5pZCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXVtwb3NpdGlvbl0gPSByZWFsVmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICdmaWVsZCc6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogY29tcG9uZW50W3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsdWUsICdhZGQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAocG9zaXRpb24sdmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChjb21wb25lbnRbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgY2xhc3NJZCk6XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGFkZFN0cnVjdHVyZSgnJywgcHJvcGVydHlOYW1lLCBtb2RlbCwgdGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gY29tcG9uZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKHByb3BlcnR5TmFtZSwgdGhpcy5pZCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoeyBcIl9pZFwiOiB0aGlzLmlkKCkgfSk7XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xOlxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIFJ1bnRpbWVCZWhhdmlvclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbHVlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAodmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH1cbiAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBzdHJ1Y3R1cmUgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBwYXJlbnQgcGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iamVjdCB0aGF0IGNvaW50YWlucyBtZXRob2RzIHRvIGFjY2VzcyB0aGUgc3RydWN0dXJlIFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkU3RydWN0dXJlKHBhdGgsIG5hbWUsIG1vZGVsLCBpZCkge1xuICB2YXIgcHJvcGVydGllcyA9IGdldFN0cnVjdHVyZVByb3BlcnRpZXMobmFtZSwgbW9kZWwpLFxuICAgIHNydWN0dXJlID0ge307XG5cbiAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BlcnR5KHByb3ApIHtcbiAgICB2YXIgYm9keSA9IHt9LFxuICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgcGFyZW50UGF0aCA9ICcnLFxuICAgICAgICBmdWxsUGF0aCA9ICcnO1xuXG4gICAgICBpZiAocGF0aCkge1xuICAgICAgICBwYXJlbnRQYXRoID0gcGFyZW50UGF0aCArICcuJyArIG5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgIH1cbiAgICAgIGZ1bGxQYXRoID0gcGFyZW50UGF0aCArICcuJyArIHByb3BlcnR5TmFtZTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW21vZGVsXVtpZF07XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBnZXQoZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBuZXcgRGF0ZShnZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgbW9kZWwpOlxuICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gYWRkU3RydWN0dXJlKHBhcmVudFBhdGgsIHByb3BlcnR5TmFtZSwgbW9kZWwsIGlkKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHByb3AuZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gcHJvcC5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkbG9nLmRlc3Ryb3llZENvbXBvbmVudENhbGwoZnVsbFBhdGgsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIG1vZGVsLCBmdWxsUGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7IFwiX2lkXCI6IGlkIH0pO1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE6XG4gICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS5pZCgpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAnZmllbGQnOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBjYXNlIG9mIFJ1bnRpbWVCZWhhdmlvclxuICAgICAgICAgICAgICBpZiAobW9kZWwgPT09ICdSdW50aW1lQmVoYXZpb3InKSB7XG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IGZ1bGxQYXRoLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsdWVdXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIG1vZGVsLCBmdWxsUGF0aCwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHNydWN0dXJlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG4gIH0pO1xuXG4gIHJldHVybiBzcnVjdHVyZTtcbn1cblxuLypcbiAqIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiBtZXRob2QobWV0aG9kTmFtZSkge1xuICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCcpLFxuICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiIChcIiArIHBhcmFtcyArIFwiKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxcIiArIHBhcmFtcyArIFwiKSB9O1wiKShib2R5KTtcbiAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfVxuICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIGV2ZW50cyA9IGdldEV2ZW50cyhtb2RlbCk7XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIGV2ZW50KG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSksXG4gICAgICBwYXJhbXMgPSBwYXJhbXNOYW1lLmpvaW4oJywnKSxcbiAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzeXN0ZW1zID0gW10sXG4gICAgICAgICAgc3lzdGVtSWQgPSAnZTg5YzYxN2I2YjE1ZDI0JyxcbiAgICAgICAgICBkYXRhID0gW10sXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgbGVuZ3RoID0gLTEsXG4gICAgICAgICAgbWVzc2FnZSA9IHt9O1xuXG4gICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUNoYW5uZWwnKSB7XG4gICAgICAgICAgc3lzdGVtcyA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN5c3RlbUlkID0gc3lzdGVtc1swXS5faWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVzc2FnZS5mcm9tID0gc3lzdGVtSWQ7XG4gICAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIG1lc3NhZ2UuZXZlbnQgPSBtZXRob2ROYW1lO1xuXG4gICAgICAgICAgJGRiLlJ1bnRpbWVNZXNzYWdlLmluc2VydChtZXNzYWdlKTtcblxuICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2VuZFwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFt7XG4gICAgICAgICAgICAgIFwiZXZlbnRcIjogbWVzc2FnZS5ldmVudCxcbiAgICAgICAgICAgICAgXCJmcm9tXCI6IG1lc3NhZ2UuZnJvbSxcbiAgICAgICAgICAgICAgXCJkYXRhXCI6IG1lc3NhZ2UuZGF0YVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH1cbiAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGFkZE9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9uKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnLFxuICAgICAgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgIH0pKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKTtcblxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBzdGF0ZSA9PT0gY3VycmVudFN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUucGFyYW1ldGVycy5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKHRoaXMuaWQoKSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gIH07XG4gIC8qIGpzaGludCAtVzA1NCAqL1xuICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEksaXNDb3JlKSB9O1wiKShib2R5KTtcbiAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT25DbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICcnLFxuICAgICAgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJvblwiLFxuICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgIH0pKSB7XG4gICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICAgIH0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKTtcblxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBzdGF0ZSA9PT0gY3VycmVudFN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBjdXJyZW50U3RhdGUucGFyYW1ldGVycy5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKHRoaXMuaWQoKSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBzdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gIH07XG4gIC8qIGpzaGludCAtVzA1NCAqL1xuICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSxpc0NvcmUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSxpc0NvcmUpIH07XCIpKGJvZHkpO1xuICAvKiBqc2hpbnQgLVcwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzLlxuICogQG1ldGhvZCBhZGRPZmZDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICBcIm1ldGhvZE5hbWVcIjogXCJvZmZcIixcbiAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICB9KSkge1xuICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICBcImJlaGF2aW9ySWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgICBcImNvbXBvbmVudElkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuSW52YWxpZFN0YXRlT2ZmKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qIGpzaGludCAtVzA1NCAqL1xuICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTtcIikoYm9keSk7XG4gIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZERlc3Ryb3lDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpIHtcbiAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZCgpLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAvLyBpZiBub3QgdmlydHVhbCBjb21wb25lbnRcbiAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgcmVzdWx0ID0gJGRiW2lkXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgc3RvcmVbaWRdO1xuXG4gICAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xuICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgJ2NvbXBvbmVudElkJzogaWRcbiAgICB9KTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgJ2NvbXBvbmVudElkJzogcmVzdWx0W2ldXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiXG4gICAgfSk7XG4gIH07XG4gIC8qIGpzaGludCAtVzA1NCAqL1xuICBDbGFzcy5kZXN0cm95ID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBkZXN0cm95ICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gIH07XG4gIC8qIGpzaGludCAtVzA1NCAqL1xuICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgZmFjdG9yeVxuICogQHBhcmFtIHtKU09OfSBjb25maWcgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gIHZhciBDbGFzcyA9IHt9LFxuICAgIGNsYXNzSWQgPSAnJztcblxuICBpZiAodHlwZW9mIGNvbmZpZy5tb2RlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgfVxuXG4gIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICBhZGRJZChDbGFzcywgY2xhc3NJZCk7XG5cbiAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgLy8gaW5oZXJpdCBmcm9tIFJ1bnRpbWVDb21wb25lbnRcbiAgaWYgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ1J1bnRpbWVDb21wb25lbnQnKSkge1xuICAgIGFkZE9uKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkRGVzdHJveUNsYXNzKENsYXNzKTtcbiAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICByZXR1cm4gQ2xhc3M7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgPGJyPlxuICoge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZSA8YnI+XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn1cblxuXG4vKlxuICogRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZC5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnQgdG8gZGVzdHJveVxuICovXG5mdW5jdGlvbiBkZXN0cm95KGlkKSB7XG4gIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF0sXG4gICAgY2xhc3NJZCA9ICcnO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgIGNsYXNzSWQgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgIFwiX2lkXCI6IGlkXG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAnY29tcG9uZW50SWQnOiBpZFxuICAgIH0pO1xuXG4gICAgLy8gY2FzZSBvZiBCZWhhdmlvclxuICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy4gXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBSdW50aW1lLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEBjbGFzcyBydW50aW1lLWNvbXBvbmVudFxuICogQHN0YXRpYyBcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyA8YnI+XG4gKiB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lIDxicj5cbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG5cbi8qKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZUZyb21NZW1vcnkgPSByZW1vdmVGcm9tTWVtb3J5O1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlmIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKi9cbmV4cG9ydHMuZGVzdHJveSA9IGRlc3Ryb3k7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBSdW50aW1lIGRhdGFiYXNlLiA8YnI+XG4gKiBSdW50aW1lIGRhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogUnVudGltZSBEYXRhYmFzZSBpcyBjbG9zZWx5IGxpbmtlZCB0byBSdW50aW1lIG1ldGFtb2RlbCBhbmQgUnVudGltZSBjb21wb25lbnRzIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1kYlxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9LFxuICBjb2xsZWN0aW9ucyA9IFtdLFxuICBpbnRlcm5hbERCID0gW1xuICAgICdSdW50aW1lJyxcbiAgICAnUnVudGltZVNjaGVtYScsXG4gICAgJ1J1bnRpbWVNb2RlbCcsXG4gICAgJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcsXG4gICAgJ1J1bnRpbWVCZWhhdmlvcicsXG4gICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgJ1J1bnRpbWVUeXBlJyxcbiAgICAnUnVudGltZU1ldGFtb2RlbCcsXG4gICAgJ1J1bnRpbWVEYXRhYmFzZScsXG4gICAgJ1J1bnRpbWVTeXN0ZW0nLFxuICAgICdSdW50aW1lQ2xhc3NJbmZvJyxcbiAgICAnUnVudGltZU1lc3NhZ2UnLFxuICAgICdSdW50aW1lQ2hhbm5lbCcsXG4gICAgJ1J1bnRpbWVMb2dnZXInLFxuICAgICdSdW50aW1lTG9nJ1xuICBdLFxuICBjb3JlRGIgPSBbXG4gICAgJ1J1bnRpbWVMb2cnLFxuICAgICdSdW50aW1lU2NoZW1hJyxcbiAgICAnUnVudGltZUxvZ2dlcicsXG4gICAgJ1J1bnRpbWVNb2RlbCcsXG4gICAgJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcsXG4gICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgJ1J1bnRpbWVUeXBlJ1xuICBdLFxuICBsb2dPcmRlciA9IDA7XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIEluY3JlbWVudCBMb2dcbiAqIEBtZXRob2QgaW5jTG9nT3JkZXJcbiAqL1xuZnVuY3Rpb24gaW5jTG9nT3JkZXIoKSB7XG4gIHJldHVybiBsb2dPcmRlcisrO1xufVxuXG5cbi8qXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgdmFyIGRiRHVtcCA9IHt9LFxuICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgYmVoYXZpb3JJZCA9ICcnLFxuICAgIHR5cGVJZCA9ICcnLFxuICAgIHR5cGUgPSBudWxsLFxuICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICBzY2hlbWEgPSBudWxsLFxuICAgIG1vZGVsID0gbnVsbCxcbiAgICBjb2xsZWN0aW9uID0gbnVsbCxcbiAgICBzY2hlbWFJZCA9ICcnLFxuICAgIG1vZGVsSWQgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIGlkID0gJyc7XG5cbiAgLy8gc2NoZW1hc1xuICBkYkR1bXAuc2NoZW1hcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5SdW50aW1lU2NoZW1hLmNvdW50KCkpIHtcbiAgICBmb3IgKHNjaGVtYUlkIGluIHN0b3JlLlJ1bnRpbWVTY2hlbWEpIHtcbiAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuUnVudGltZVNjaGVtYVtzY2hlbWFJZF0pKTtcbiAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgZGJEdW1wLm1vZGVscyA9IHt9O1xuICBpZiAoZXhwb3J0cy5SdW50aW1lTW9kZWwuY291bnQoKSkge1xuICAgIGZvciAobW9kZWxJZCBpbiBzdG9yZS5SdW50aW1lTW9kZWwpIHtcbiAgICAgIG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lTW9kZWxbbW9kZWxJZF0pKTtcbiAgICAgIGlmICghbW9kZWwuX2NvcmUpIHtcbiAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIGRiRHVtcC50eXBlcyA9IHt9O1xuICBpZiAoZXhwb3J0cy5SdW50aW1lVHlwZS5jb3VudCgpKSB7XG4gICAgZm9yICh0eXBlSWQgaW4gc3RvcmUuUnVudGltZVR5cGUpIHtcbiAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVUeXBlW3R5cGVJZF0pKTtcbiAgICAgIGlmICghdHlwZS5jb3JlKSB7XG4gICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBiZWhhdmlvcnNcbiAgZGJEdW1wLmJlaGF2aW9ycyA9IHt9O1xuICBmb3IgKGJlaGF2aW9ySWQgaW4gc3RvcmUuUnVudGltZUJlaGF2aW9yKSB7XG4gICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVCZWhhdmlvcltiZWhhdmlvcklkXSkpO1xuICAgIGRlbGV0ZSBiZWhhdmlvci5jbGFzc0luZm87XG5cbiAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICB9XG4gIH1cblxuICAvLyBjb21wb25lbnRzXG4gIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgY29sbGVjdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmVbY29sbGVjdGlvbk5hbWVdKSk7XG5cbiAgICAgIGZvciAoaWQgaW4gY29sbGVjdGlvbikge1xuICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF0uY2xhc3NJbmZvO1xuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uW2lkXS5fY29yZSkge1xuICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoY29sbGVjdGlvbikubGVuZ3RoKSB7XG4gICAgICAgIGRiRHVtcC5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSA9IGNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRiRHVtcDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhbiBvYmplY3QgY29udGFpbnMgYW5vdGhlciBvbmUuXG4gKiBAbWV0aG9kIGNvbnRhaW5zXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBvYmplY3QgXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBvYmplY3QgXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBzb3VyY2Ugb2JqZWN0IGNvbnRhaW5zIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb250YWlucyhzb3VyY2UsIHRhcmdldCkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICBmaW5kSW5BcnJheSA9IGZhbHNlLFxuICAgIHByb3BlcnR5ID0gJycsXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BlcnR5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldFtwcm9wZXJ0eV0pICYmICFBcnJheS5pc0FycmF5KHNvdXJjZVtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgbGVuZ3RoID0gdGFyZ2V0W3Byb3BlcnR5XS5sZW5ndGg7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XVtpXS50b1N0cmluZygpLm1hdGNoKHNvdXJjZVtwcm9wZXJ0eV0pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGZpbmRJbkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdCA9IGZpbmRJbkFycmF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHldLnRvU3RyaW5nKCkubWF0Y2goc291cmNlW3Byb3BlcnR5XSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRbcHJvcGVydHldKSAmJiAhQXJyYXkuaXNBcnJheShzb3VyY2VbcHJvcGVydHldKSkge1xuICAgICAgICAgIGlmICh0YXJnZXRbcHJvcGVydHldLmluZGV4T2Yoc291cmNlW3Byb3BlcnR5XSkgPT09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XSAhPT0gc291cmNlW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiogXG4gKiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgUnVudGltZS4gPGJyPlxuICogSW50ZXJuYWwgY29sbGVjdGlvbnMgbWFuYWdlIGNvcmUgb2JqZWN0cyBvZiBSdW50aW1lIChzY2hlbWEsIHR5cGUsIC4uLikuIDxicj5cbiAqIFB1YmxpYyBjb2xsZWN0aW9ucyBtYW5hZ2UgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy4gPGJyPlxuICogXG4gKiBAY2xhc3MgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICovXG52YXIgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICgkbWV0YW1vZGVsLmdldFNjaGVtYShuYW1lKSB8fCBpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgc3RvcmVbbmFtZV0gPSB7fTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEZpbmQgYSBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5maW5kKHtcIm5hbWVcIjogXCJsYXVyZVwifSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIiwgXCJhZ2VcIiA6IDI0fSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZChbe1wibmFtZVwiOiBcInJlbmVcIn0sIHtcIm5hbWVcIjogXCJyb2JlcnRcIn1dKTtcbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgcmVzdWx0SWQgPSB7fSxcbiAgICBpZCA9ICcnLFxuICAgIG9iamVjdCA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9zZWFyY2goY3JpdGVyaWEpIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdElkW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgcmVzdWx0SWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgcmVzdWx0LnB1c2gob2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi4gPGJyPlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIFJ1bnRpbWUgY2hlY2tzIHRoYXQgdGhlIGRvY3VtZW50IGlzIGNvbXBsaWFudFxuICogd2l0aCBpdHMgY2xhc3MgZGVmaW5pdGlvbi4gPGJyPiBcbiAqIFRoZW4sIGFmdGVyIGluc2VydGluZyBpdCwgd2UgY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGluc2VydFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGRvY3VtZW50IGEgbmV3IG9iamVjdCB0byBhZGRcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBpZCBjcmVhdGVkXG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5pbnNlcnQoezxicj5cbiAqICAgICAgXCJuYW1lXCI6IFwiYm9iXCIsIDxicj5cbiAqICAgICAgXCJmaXJzdE5hbWVcIjogXCJTYWludC1DbGFyXCIsIDxicj5cbiAqICAgICAgXCJhZ2VcIjogNDMgPGJyPlxuICogfSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBbXSxcbiAgICBDb21wb25lbnQgPSBudWxsLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRvY3VtZW50KSkge1xuICAgIGRvYyA9IGRvY3VtZW50O1xuICB9IGVsc2Uge1xuICAgIGRvYy5wdXNoKGRvY3VtZW50KTtcbiAgfVxuXG4gIGRvYy5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX2luc2VydChvYmopIHtcbiAgICB2YXIgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgIGNoYW5uZWxzID0gW10sXG4gICAgICBjaGFubmVsID0gbnVsbCxcbiAgICAgIHN5c3RlbXMgPSBbXTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lU2NoZW1hJzpcbiAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZUxvZ2dlcic6XG4gICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVNb2RlbCc6XG4gICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVUeXBlJzpcbiAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZUdlbmVyYXRlZE1vZGVsJzpcbiAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTpcblxuICAgICAgICBpZiAodHlwZW9mIG9iai5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgb2JqLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTtcblxuICAgICAgICBzdG9yZVt0aGlzLm5hbWVdW29iai5faWRdID0gb2JqO1xuXG4gICAgICAgIENvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50LmlkKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyZWF0ZUxvZygnaW5zZXJ0JywgdGhpcy5uYW1lLCBvYmouX2lkLCAnJywgb2JqKTtcblxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBkb2N1bWVudDogb2JqXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnUnVudGltZU1lc3NhZ2UnKSB7XG4gICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgIGNoYW5uZWxzID0gZXhwb3J0cy5SdW50aW1lQ2hhbm5lbC5maW5kKHt9KTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBjaGFubmVscy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY2hhbm5lbHNbaV0uX2lkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogb2JqLmV2ZW50LFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBvYmouZGF0YVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9LCB7XCJ1cHNlcnRcIjogdHJ1ZX0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChxdWVyeSwgdXBkYXRlLCBvcHRpb25zKSB7XG4gIHZhciBkb2NzID0gdGhpcy5maW5kKHF1ZXJ5KSxcbiAgICB1cGRhdGVkID0gMCxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSBkb2NzLmxlbmd0aCxcbiAgICBhdHRyaWJ1dGVOYW1lID0gJycsXG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpLFxuICAgIHR5cGUgPSAnJztcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLnVwc2VydCA9IG9wdGlvbnMudXBzZXJ0IHx8IGZhbHNlO1xuICB9XG5cbiAgaWYgKHVwZGF0ZSkge1xuXG4gICAgLy8gdXBzZXJ0IGNhc2VcbiAgICBpZiAobGVuZ3RoID09PSAwICYmIG9wdGlvbnMudXBzZXJ0KSB7XG4gICAgICBpZiAocXVlcnkuX2lkKSB7XG4gICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICB9XG4gICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gY2FzZSBvZiB1cGRhdGUgb2YgX2lkXG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZS5faWQgIT09ICd1bmRlZmluZWQnICYmIHVwZGF0ZS5faWQgIT09IGRvY3NbaV0uX2lkKSB7XG4gICAgICAgICRsb2cudXBkYXRlVXVpZChkb2NzW2ldLl9pZCwgdXBkYXRlLl9pZCwgdHlwZW9mICRjb21wb25lbnQuZ2V0KHVwZGF0ZS5faWQpICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoYXR0cmlidXRlTmFtZSBpbiB1cGRhdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmICh0aGlzLm5hbWUgIT09ICdSdW50aW1lU2NoZW1hJyAmJiB0aGlzLm5hbWUgIT09ICdSdW50aW1lTW9kZWwnICYmIHRoaXMubmFtZSAhPT0gJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuXG4gICAgICAgICAgICAgICAgY3JlYXRlTG9nKCd1cGRhdGUnLCB0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgICdmaWVsZCc6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUodGhpcy5uYW1lLCBkb2NzW2ldLl9pZCwgYXR0cmlidXRlTmFtZSwgdXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSh0aGlzLm5hbWUsIGF0dHJpYnV0ZU5hbWUsIGRvY3NbaV0uX2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVE9ETyBtb3JlIGNoZWNrIGluIGNhc2Ugb2Ygc2NoZW1hIHVwZGF0ZVxuICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcblxuICAgICAgICAgICAgY3JlYXRlTG9nKCd1cGRhdGUnLCB0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0pO1xuXG4gICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAnaWQnOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAnZmllbGQnOiBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdXBkYXRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi4gPGJyPlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnJlbW92ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMucmVtb3ZlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICBpZCA9ICcnLFxuICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgb2JqZWN0ID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfcmVtb3ZlKGNyaXRlcmlhKSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgIGNyZWF0ZUxvZygncmVtb3ZlJywgdGhpcy5uYW1lLCBpZCwgJycsICcnKTtcblxuICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgJ2lkJzogaWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgY3JlYXRlTG9nKCdyZW1vdmUnLCB0aGlzLm5hbWUsIGlkLCAnJywgJycpO1xuXG4gICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHtcbiAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICdpZCc6IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICBjcmVhdGVMb2coJ3JlbW92ZScsIHRoaXMubmFtZSwgaWQsICcnLCAnJyk7XG5cbiAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09IC0xKSB7XG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUoe1xuICAgICAgICAgICdjb2xsZWN0aW9uJzogdGhpcy5uYW1lLFxuICAgICAgICAgICdpZCc6IGlkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGNvdW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZXN1bHQgPSAwLFxuICAgIG9iamVjdElkID0gJyc7XG4gIGZvciAob2JqZWN0SWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgIHJlc3VsdCsrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIExvZ1xuICogQG1ldGhvZCBjcmVhdGVMb2dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gQ1JVRCBhY3Rpb24gdGhhdCBoYXBwZW5uZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uIGNvbGxlY3Rpb24gb2YgdGhlIFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZCBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWUgb2YgdGhlIGZpZWxkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTG9nKGFjdGlvbiwgY29sbGVjdGlvbiwgaWQsIGZpZWxkLCB2YWx1ZSkge1xuICB2YXIgbG9nSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcblxuICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbiB8fCAnJztcbiAgaWQgPSBpZCB8fCAnJztcbiAgZmllbGQgPSBmaWVsZCB8fCAnJztcbiAgdmFsdWUgPSB2YWx1ZSB8fCAnJztcblxuICAvLyBjbGVhbiBsb2cgZXZlcnkgMTAwMCBsb2dzXG4gIGlmIChPYmplY3Qua2V5cyhzdG9yZS5SdW50aW1lTG9nKS5sZW5ndGggPiAxMDAwKSB7XG4gICAgc3RvcmUuUnVudGltZUxvZyA9IHt9O1xuICB9XG5cbiAgc3RvcmUuUnVudGltZUxvZ1tsb2dJZF0gPSB7XG4gICAgX2lkOiBsb2dJZCxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgIGlkOiBpZCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9yZGVyOiBpbmNMb2dPcmRlcigpXG4gIH07XG59XG5cblxuLypcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgZXhwb3J0c1tuYW1lXSA9IG5ldyBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufVxuXG5cbi8qXG4gKiBJbXBvcnQvRXhwb3J0IGEgUnVudGltZSBzeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZVxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBSdW50aW1lIHN5c3RlbSBvciB0aGUgaWYgb2YgdGhlIGN1cnJlbnQgUnVudGltZSBzeXN0ZW1cbiAqL1xuZnVuY3Rpb24gc3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gIHZhciByZXN1bHQgPSAnJyxcbiAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgIGNvbXBvbmVudElkID0gJycsXG4gICAgdHlwZU5hbWUgPSAnJyxcbiAgICBzY2hlbWFOYW1lID0gJycsXG4gICAgbW9kZWxOYW1lID0gJycsXG4gICAgYmVoYXZpb3JJZCA9ICcnLFxuICAgIHN5c3RlbXMgPSBbXSxcbiAgICBpZCA9IG51bGwsXG4gICAgZGJEdW1wID0gbnVsbCxcbiAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICBleHBvcnRlZFN5c3RlbSA9IHt9O1xuXG4gIGlmIChpbXBvcnRlZFN5c3RlbSkgeyAvLyBpbXBvcnRcblxuICAgIC8vIGFkZCB0eXBlc1xuICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBzY2hlbWFzXG4gICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBtb2RlbHNcbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5tb2RlbHMpIHtcbiAgICAgICRtZXRhbW9kZWwubW9kZWwoaW1wb3J0ZWRTeXN0ZW0ubW9kZWxzW21vZGVsTmFtZV0pO1xuICAgIH1cblxuICAgICRtZXRhbW9kZWwuY3JlYXRlKCk7XG5cbiAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICBleHBvcnRzLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldCBpbmZvIGlmIGFscmVhZHkgYSBtYXN0ZXIgc3lzdGVtXG4gICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAoc3lzdGVtc1swXS5faWQgPT09IGltcG9ydGVkU3lzdGVtLl9pZCkge1xuICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgc3lzdGVtc1swXS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnNlcnQgdGhlIHN5c3RlbSBpbiBEQlxuICAgIGV4cG9ydHMuUnVudGltZVN5c3RlbS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0pO1xuXG4gICAgcmVzdWx0ID0gaW1wb3J0ZWRTeXN0ZW0uX2lkO1xuXG4gIH0gZWxzZSB7IC8vIGV4cG9ydFxuICAgIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICAgIHN5c3RlbXMgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG5cbiAgICAgIG1hc3RlcnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgICBpZCA9IG1hc3RlcnN5c3RlbS5faWQ7XG5cbiAgICAgIC8vIHByb3BcbiAgICAgIGV4cG9ydGVkU3lzdGVtLl9pZCA9IGlkO1xuICAgICAgZXhwb3J0ZWRTeXN0ZW0ubmFtZSA9IG1hc3RlcnN5c3RlbS5uYW1lO1xuICAgICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgICBleHBvcnRlZFN5c3RlbS52ZXJzaW9uID0gbWFzdGVyc3lzdGVtLnZlcnNpb247XG4gICAgICBleHBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgZXhwb3J0ZWRTeXN0ZW0uc3Vic3lzdGVtID0gZmFsc2U7XG5cbiAgICAgIC8vIGR1bXBcbiAgICAgIGRiRHVtcCA9IGR1bXAoKTtcbiAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICAgIGlmIChkYkR1bXAuaGFzT3duUHJvcGVydHkoY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgZXhwb3J0ZWRTeXN0ZW1bY29sbGVjdGlvbk5hbWVdID0gZGJEdW1wW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICAgIGJlaGF2aW9yID0gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdO1xuICAgICAgICBpZiAoYmVoYXZpb3Iuc3RhdGUgPT09ICdtYWluJyB8fCBiZWhhdmlvci5zdGF0ZSA9PT0gJ3N0YXJ0JyB8fCBiZWhhdmlvci5zdGF0ZSA9PT0gJ3N0b3AnKSB7XG4gICAgICAgICAgYmVoYXZpb3IuY29tcG9uZW50ID0gaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBcInt9XCI7XG4gICAgICAkbG9nLm1hc3RlclN5c3RlbU5vdEZvdW5kKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIFJ1bnRpbWUgc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgUnVudGltZSBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICB2YXIgc3lzdGVtID0ge30sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgZGVmYXVsdE5hbWUgPSAnJyxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgdHlwZSA9IG51bGwsXG4gICAgbW9kZWwgPSBudWxsLFxuICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICBjb21wb25lbnQgPSBudWxsLFxuICAgIGNsYXNzTmFtZSA9ICcnO1xuXG4gIC8vIGRlZmF1bHQgdmFsdWVzXG4gIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAnbWFzdGVyJzogdHJ1ZVxuICB9KTtcbiAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICBkZWZhdWx0TmFtZSA9IHJlc3VsdFswXS5uYW1lO1xuICB9XG5cbiAgc3lzdGVtLm5hbWUgPSBwYXJhbXMubmFtZSB8fCAnc3ViXycgKyBkZWZhdWx0TmFtZTtcbiAgc3lzdGVtLnZlcnNpb24gPSBwYXJhbXMudmVyc2lvbiB8fCAnMC4wLjEnO1xuICBzeXN0ZW0uZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgc3lzdGVtLnN1YnN5c3RlbSA9IHRydWU7XG5cbiAgLy8gc2NoZW1hc1xuICBzeXN0ZW0uc2NoZW1hcyA9IHt9O1xuICBpZiAocGFyYW1zLnNjaGVtYXMpIHtcbiAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVTY2hlbWEuZmluZChwYXJhbXMuc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICBzeXN0ZW0uc2NoZW1hc1tzY2hlbWEuX2lkXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBtb2RlbHNcbiAgc3lzdGVtLm1vZGVscyA9IHt9O1xuICBpZiAocGFyYW1zLm1vZGVscykge1xuICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZU1vZGVsLmZpbmQocGFyYW1zLm1vZGVscyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbW9kZWwgPSByZXN1bHRbaV07XG4gICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgIHN5c3RlbS5tb2RlbHNbbW9kZWwuX2lkXSA9IG1vZGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGVzXG4gIHN5c3RlbS50eXBlcyA9IHt9O1xuICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICBzeXN0ZW0udHlwZXNbdHlwZS5faWRdID0gdHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBiZWhhdmlvcnNcbiAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICBpZiAocGFyYW1zLmJlaGF2aW9ycykge1xuICAgIGJlaGF2aW9yID0gZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuZmluZChwYXJhbXMuYmVoYXZpb3JzKTtcblxuICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBiZWhhdmlvciA9IHJlc3VsdFtpXTtcbiAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICBzeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9yLl9pZF0gPSBiZWhhdmlvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjb21wb25lbnRzXG4gIHN5c3RlbS5jb21wb25lbnRzID0ge307XG4gIGlmIChwYXJhbXMuY29tcG9uZW50cykge1xuICAgIGZvciAoY2xhc3NOYW1lIGluIHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICBpZiAoZXhwb3J0c1tjbGFzc05hbWVdKSB7XG4gICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV0gPSB7fTtcblxuICAgICAgICByZXN1bHQgPSBleHBvcnRzW2NsYXNzTmFtZV0uZmluZChwYXJhbXMuY29tcG9uZW50c1tjbGFzc05hbWVdKTtcbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29tcG9uZW50ID0gcmVzdWx0W2ldO1xuICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV1bY29tcG9uZW50Ll9pZF0gPSBjb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3lzdGVtKTtcbn1cblxuXG4vKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgdmFyIGxlbmd0aCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcblxuICAvLyByZW1vdmUgY29sbGVjdGlvbnNcbiAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIGludGVybmFsIGNvbGxlY3Rpb25zXG4gIGxlbmd0aCA9IGludGVybmFsREIubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb2xsZWN0aW9uTmFtZSA9IGludGVybmFsREJbaV07XG4gICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gIH1cbn1cblxuXG4vKlxuICogSW5pdCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHJ1bnRpbWVTeXN0ZW1JZCA9ICcnLFxuICAgIHJ1bnRpbWVTeXN0ZW0gPSBudWxsO1xuXG4gIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgJ19pZCc6ICdlODljNjE3YjZiMTVkMjQnXG4gIH0pWzBdO1xuXG4gIC8vIGNsZWFyIGFsbCB0aGUgZGF0YSBpbiBtZW1vcnlcbiAgZXhwb3J0cy5jbGVhcigpO1xuICAkY29tcG9uZW50LmNsZWFyKCk7XG4gICRtZXRhbW9kZWwuY2xlYXIoKTtcbiAgJHN0YXRlLmNsZWFyKCk7XG4gICRiZWhhdmlvci5jbGVhcigpO1xuXG4gIC8vIGluaXQgbWV0YW1vZGVsXG4gICRtZXRhbW9kZWwuaW5pdCgpO1xuXG4gIC8vIHJlaW1wb3J0IFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgcnVudGltZVN5c3RlbUlkID0gZXhwb3J0cy5zeXN0ZW0ocnVudGltZVN5c3RlbSk7XG4gICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVTeXN0ZW1JZCkubWFpbigpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBkYXRhYmFzZS4gPGJyPlxuICogUnVudGltZSBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6IDxicj5cbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmQgPGJyPlxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLiA8YnI+XG4gKiBcbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gUnVudGltZSBtZXRhbW9kZWwgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogICBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1kYlxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBMb2dcbiAqIEBtZXRob2QgY3JlYXRlTG9nXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uIENSVUQgYWN0aW9uIHRoYXQgaGFwcGVubmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbiBjb2xsZWN0aW9uIG9mIHRoZSBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGQgZmllbGQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlIG9mIHRoZSBmaWVsZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuY3JlYXRlTG9nID0gY3JlYXRlTG9nO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuXG5cbi8qKlxuICogUnVudGltZSBkYXRhYmFzZSBzdG9yZSB0aGF0IGxpc3RzIGFsbCB0aGUgY29sbGVjdGlvbnMuXG4gKiBAcHJvcGVydHkge0pTT059IHN0b3JlXG4gKi9cbmV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKipcbiAqIEltcG9ydC9FeHBvcnQgYSBSdW50aW1lIHN5c3RlbSBpbnRvL2Zyb20gdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBSdW50aW1lIHN5c3RlbSBvciB0aGUgY3VycmVudCBSdW50aW1lIHN5c3RlbSAgXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gc3lzdGVtO1xuXG5cbi8qKlxuICogRXhwb3J0IGEgUnVudGltZSBzdWItc3lzdGVtLlxuICogQG1ldGhvZCBzdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmdpZmllZCBSdW50aW1lIHN1Yi1zeXN0ZW1cbiAqIFxuICogQGV4YW1wbGVcbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJ0eXBlc1wiOntcIm5hbWVcIjpcImFkZHJlc3NcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiB0eXBlcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImJlaGF2aW9yc1wiOntcImNvbXBvbmVudFwiOlwibGF1cmVcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGZpbHRlciBleHBvcnQgb24gY29tcG9uZW50cyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn0sXCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5leHBvcnRzLnN1YnN5c3RlbSA9IHN1YnN5c3RlbTtcblxuXG4vKipcbiAqIENsZWFyIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogSW5pdCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZXhwb3J0cy5pbml0ID0gaW5pdDsiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNyBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAY2xhc3MgcnVudGltZS1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xuXG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0cy5cbiAqIEBtZXRob2QgaXNSdW50aW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc1J1bnRpbWUoKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICBpZiAoJGRiLlJ1bnRpbWUgJiYgJGRiLlJ1bnRpbWUuZmluZCgpLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm4ge1J1bnRpbWV9IFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgdmFyIHJ1bnRpbWVJZCA9ICcnLFxuICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCFydW50aW1lUmVmKSB7XG4gICAgcnVudGltZUlkID0gJGRiLlJ1bnRpbWUuZmluZCgpWzBdLl9pZDtcbiAgICBydW50aW1lUmVmID0gJGNvbXBvbmVudC5nZXQocnVudGltZUlkKTtcbiAgfVxuXG4gIHJldHVybiBydW50aW1lUmVmO1xufVxuXG5cbi8qXG4gKiBHZW5lcmF0ZSBhIHV1aWQuXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1dWlkXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG4gIGZ1bmN0aW9uIGdlbigpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFByZWZpeCgpIHtcbiAgICB2YXIgdmFsaWRQcmVmaXggPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuICAgIHJldHVybiB2YWxpZFByZWZpeC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRQcmVmaXgubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UHJlZml4KCkgKyBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59XG5cblxuLypcbiAqIEFkZCBQb2x5ZmlsbFxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcblxuICAvLyBmaXhpbmcgY29uc3RydWN0b3IubmFtZSBwcm9wZXJ0eSBpbiBJRVxuICAvLyB0YWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjUxNDA3MjMvY29uc3RydWN0b3ItbmFtZS1pcy11bmRlZmluZWQtaW4taW50ZXJuZXQtZXhwbG9yZXJcbiAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvblxccyhbXihdezEsfSlcXCgvO1xuICAgICAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKCh0aGlzKS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQGNsYXNzIHJ1bnRpbWUtaGVscGVyXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEdldCBSdW50aW1lIGluc3RhbmNlLlxuICogQG1ldGhvZCBnZXRSdW50aW1lXG4gKiBAcmV0dXJuIHtSdW50aW1lfSBSdW50aW1lIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0UnVudGltZSA9IGdldFJ1bnRpbWU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc1J1bnRpbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0XG4gKi9cbmV4cG9ydHMuaXNSdW50aW1lID0gaXNSdW50aW1lO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgYSB1dWlkLlxuICogQG1ldGhvZCBnZW5lcmF0ZUlkXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgdXVpZFxuICovXG5leHBvcnRzLmdlbmVyYXRlSWQgPSBnZW5lcmF0ZUlkO1xuXG5cbi8qKlxuICogQWRkIFBvbHlmaWxsXG4gKiBAbWV0aG9kIHBvbHlmaWxsXG4gKi9cbmV4cG9ydHMucG9seWZpbGwgPSBwb2x5ZmlsbDsiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9kZXNpZ25maXJzdC5pby9zeXN0ZW1ydW50aW1lL1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNyBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQGNsYXNzIHJ1bnRpbWUtbG9nXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgSUQgPSAnX2lkJyxcbiAgTkFNRSA9ICdfbmFtZScsXG4gIGN1cnJlbnRMZXZlbCA9ICd3YXJuJyxcbiAgbG9nZ2VyUmVmID0gbnVsbCxcbiAgZmFrZUxvZ2dlclJlZiA9IHtcbiAgICBjdXJyZW50TGV2ZWw6ICd3YXJuJyxcbiAgICBsZXZlbDogZnVuY3Rpb24gZGVidWcobGV2ZWxOYW1lKSB7XG4gICAgICBpZiAobGV2ZWxOYW1lKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gbGV2ZWxOYW1lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xuICAgIH0sXG4gICAgZGVidWc6IGZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5mbzogZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhcm46IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAnaW5mbycgfHwgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICd3YXJuJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4vKlxuICogR2V0IHRoZSBSdW50aW1lTG9nZ2VyIGluc3RhbmNlLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEByZXR1cm4ge1J1bnRpbWVMb2dnZXJ9IFJ1bnRpbWVMb2dnZXIgaW5zdGFuY2VcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldExvZ2dlcigpIHtcbiAgdmFyIGxvZ2dlcklkID0gJycsXG4gICAgbG9nZ2VycyA9IFtdLFxuICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgaWYgKCEkbWV0YW1vZGVsLmdldE1vZGVsKCdSdW50aW1lTG9nZ2VyJykpIHtcbiAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlcnMgPSAkZGIuUnVudGltZUxvZ2dlci5maW5kKCk7XG4gICAgaWYgKGxvZ2dlcnMubGVuZ3RoKSB7XG4gICAgICBsb2dnZXJJZCA9IGxvZ2dlcnNbMF1bSURdO1xuXG4gICAgICBpZiAoJGNvbXBvbmVudC5nZXQobG9nZ2VySWQpKSB7XG4gICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgcmVzdWx0ID0gbG9nZ2VyUmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFrZUxvZ2dlclJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIFNldCB0aGUgbGV2ZWwgb2YgdGhlIGxvZy5cbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqL1xuZnVuY3Rpb24gbGV2ZWwobGV2ZWxOYW1lKSB7XG4gIGN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbn1cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICBpZiAoc2NoZW1hW05BTUVdKSB7XG4gICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArIHNjaGVtYVtOQU1FXSArIFwiJ1wiO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2UgPSBcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGZvciBhIG1vZGVsXCI7XG4gIH1cblxuICBnZXRMb2dnZXIoKS53YXJuKG1lc3NhZ2UpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlKHByb3BlcnR5TmFtZSwgdHlwZSwgcHJvcGVydHkpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInOiBleHBlY3RlZCB0eXBlICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiB0eXBlICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiJ1wiICsgdmFsdWUgKyBcIicgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIHR5cGUgZW51bSAnXCIgKyB0eXBlICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2xhc3NOYW1lKGNvbXBvbmVudElkLCB0eXBlLCBjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWlzc2luZyBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmcuXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlSW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXCJ0aGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgb2YgdGhlIG1vZGVsICdcIiArIGNsYXNzTmFtZSArIFwiJyBpcyBpbnZhbGlkXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mICdcIiArIGNsYXNzTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rb3duIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBzY2hlbWEpIHtcbiAgZ2V0TG9nZ2VyKCkuZXJyb3IoXCJ0aGUgbW9kZWwgJ1wiICsgc2NoZW1hICsgXCInIGhhcyBhbiB1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZURlZmluaXRpb24obmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHR5cGUgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgbmFtZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzTmFtZSwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIgKyBjbGFzc0luZm8gKyBcIjogZXhwZWN0ZWQgJ1wiICsgdHlwZS5yZXBsYWNlKCdAJywgJycpICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHByb3BlcnR5VmFsdWUgKyBcIidcIik7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgdHlwZSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNsYXNzSW5mbyArIFwiOiBleHBlY3RlZCAnc3RyaW5nJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiB0eXBlICsgXCInXCIpO1xuICB9XG59XG5cblxuLypcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiByZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc05hbWUsIHByb3BlcnR5TmFtZSkge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cbiAgZ2V0TG9nZ2VyKCkud2FybihcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIgKyBjbGFzc0luZm8pO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgUnVudGltZSBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChkb2MsIGNvbGxlY3Rpb25OYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIGRvY3VtZW50ICdcIiArIEpTT04uc3RyaW5naWZ5KGRvYykucmVwbGFjZSgvLC9nLCAnLCAnKSArIFwiJyBvbiBhbiBpbnNlcnQgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIHdoZW4gdHJ5aW5nIHRvIHVwZGF0ZSB0aGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9mIGRvY3VtZW50ICdcIiArIGlkICsgXCInIChjb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInKSB3aXRoIHRoZSB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eVZhbHVlKSArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyB0eXBlICsgXCInXCIpO1xufVxuXG4vKlxuICogVW5rb253IHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKHByb3BlcnR5TmFtZSwgY29sbGVjdGlvbk5hbWUsIGlkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgd2l0aCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gY2FsbCBhbiB1bmtub3duIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIGZvciB0aGUgY2xhc3MgJ1wiICsgY2xhc3NJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBuYW1lIGZvciBjcmVhdGluZyB0aGUgY29sbGVjdGlvbiAnXCIgKyBuYW1lICsgXCInOiB0aGVyZSBpcyBubyBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpbiB0aGUgbWV0YW1vZGVsXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgcmVzdWx0IG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKGlkLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUsIGV4cGVjdGVkVHlwZSwgdHlwZSkge1xuICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gIH1cblxuICBpZiAodHlwZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHRoZSByZXN1bHQgb2YgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIgKyBjbGFzc0luZm8gKyBcIjogZXhwZWN0ZWQgdHlwZSAnXCIgKyBleHBlY3RlZFR5cGUucmVwbGFjZSgnQCcsICcnKSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZSArIFwiJ1wiKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvICsgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICsgZXhwZWN0ZWRUeXBlLnJlcGxhY2UoJ0AnLCAnJykgKyBcIidcIik7XG4gIH1cbn1cblxuXG4vKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArIGNsYXNzTmFtZSArIFwiJyBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgUnVudGltZSB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmZ1bmN0aW9uIHdvcmtmbG93UmVzdGFydGVkKCkge1xuICBnZXRMb2dnZXIoKS53YXJuKCdydW50aW1lIGhhcyBiZWVuIHJlc3RhcnRlZCcpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlcihpZCwgY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuXG4gIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gY2FsbGluZyB0aGUgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIgKyBjbGFzc0luZm8pO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoaWQsIGNsYXNzTmFtZSwgbWV0aG9kTmFtZSwgcGFyYW1OYW1lKSB7XG4gIHZhciBjbGFzc0luZm8gPSAnJztcblxuICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgfVxuICBpZiAocGFyYW1OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcGFyYW1ldGVyICdcIiArIHBhcmFtTmFtZSArIFwiJyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBhIHBhcmFtZXRlciB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvKTtcbiAgfVxufVxuXG5cbi8qXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGJlaGF2aW9yTm90VW5pcXVlKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBhZGQgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciBmb3IgdGhlIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQ2FuIG5vdCBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIGludmFsaWQgc3RhdGUuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRTdGF0ZU9uKGlkLCBzdGF0ZU5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHJlbW92ZSBhIGJlaGF2aW9yIGZyb20gYW4gdW5rd293biBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZnVuY3Rpb24gbWFzdGVyU3lzdGVtTm90Rm91bmQoKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJjYW4gbm90IGV4cG9ydCB0aGUgZGF0YWJhc2UgYmVjYXVzZSBubyBzeXN0ZW0gd2FzIGRlZmluZWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInVua25vd24gdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gYWxyZWF5IGNyZWF0ZWQuXG4gKiBAbWV0aG9kIGNhbk5vdFlldFZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBjYW5Ob3RZZXRWYWxpZGF0ZShpZCwgY2xhc3NOYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiY2FuIG5vdCB5ZXQgdmFsaWRhdGUgaWYgdGhlIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KG1lc3NhZ2UsIGV2ZW50TmFtZSwgdHlwZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgbWVzc2FnZSAnXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyB0eXBlICsgXCInIGZvciBldmVudCAnXCIgKyBldmVudE5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYW4gYWN0aW9uIGFkZCB3aXRoIG9uIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKGlkLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICB9XG4gIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gYWRkaW5nIGFuIGFjdGlvbiBvbiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIiArIGNsYXNzSW5mbyk7XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgaWYgKGFscmVhZHlVc2VkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICsgY3VycmVudElkICsgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgKyBuZXdJZCArIFwiJyB0aGF0IGlzIGFscmVhZHkgdXNlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgKyBjdXJyZW50SWQgKyBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArIG5ld0lkICsgXCInXCIpO1xuICB9XG59XG5cblxuLypcbiAqIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkLlxuICogQG1ldGhvZCBpbnZhbGlkVXNlT2ZDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRVc2VPZkNvbXBvbmVudChpZCkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU2NoZW1hKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBtb2RlbC5cbiAqIEBtZXRob2QgaW52YWxpZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIG1vZGVsICdcIiArIG5hbWUgKyBcIicgaXMgbm90IHZhbGlkXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHBhcmFtZXRlcnMgc2V0IHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1ldGVycyhjbGFzc0lkKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICsgY2xhc3NJZCArIFwiJyBhcmUgbm90IGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50LlxuICogQG1ldGhvZCBkZXN0cm95ZWRDb21wb25lbnRDYWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkZXN0cm95ZWRDb21wb25lbnRDYWxsKHByb3BlcnR5TmFtZSwgaWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRyeWluZyB0byBnZXQgdGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0IGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMob2JqZWN0LCBuYW1lKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgY29uc3RydWN0b3IgcGFyYW1ldGVyICdcIiArIEpTT04uc3RyaW5naWZ5KG9iamVjdCkucmVwbGFjZSgvLC9nLCAnLCAnKSArIFwiJyBmb3IgY3JlYXRpbmcgYSBjb21wb25lbnQgb2YgY2xhc3MgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgYW4gb2JqZWN0XCIpO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua293biBtb2RlbC5cbiAqIEBtZXRob2QgdW5rbm93bk1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1vZGVsKGNsYXNzSWQpIHtcbiAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSBnZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua25vd24gbW9kZWwgJ1wiICsgY2xhc3NJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQSBzY2hlbWEgaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59XG5cblxuLypcbiAqIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5mdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgaWYgKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcignYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSB3aXRoIFxc4oCZJyArIG5hbWUgKyAnXFzigJkgc2NoZW1hIGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlIFxcJ19pbmhlcml0XFwnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoJ2EgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgXFwnX2luaGVyaXRcXCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXMnKTtcbiAgfVxufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlTmFtZSBvZiB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCB0eXBlKSB7XG4gIGlmICh0eXBlICE9PSB0eXBlb2YgdmFsdWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZW9mIHZhbHVlICsgXCInXCIpO1xuICB9IGVsc2Uge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIGVudW1lcmF0ZWQgdHlwZSAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbiAgfVxufVxuXG5cbi8qXG4gKiBMb2FkIHNjaGVtYS5cbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGxvYWRTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgc2NoZW1hICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIExvYWQgbW9kZWwuXG4gKiBAbWV0aG9kIGxvYWRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gbG9hZE1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJsb2FkIG1vZGVsICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIExvYWQgdHlwZS5cbiAqIEBtZXRob2QgbG9hZFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gbG9hZFR5cGUobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgdHlwZSAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDb21waWxlIHNjaGVtYS5cbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTY2hlbWEobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNvbXBpbGUgc2NoZW1hICdcIiArIG5hbWUgKyBcIicuLi5cIik7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIG1vZGVsLlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZU1vZGVsKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJnZW5lcmF0ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBtb2RlbC5cbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbChuYW1lKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwiYW5hbHl6ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKG5hbWUpIHtcbiAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjcmVhdGUgY29sbGVjdGlvbiAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG4vKlxuICogQ3JlYXRlIGNsYXNzLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZSkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNyZWF0ZSBjbGFzcyAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBCZWdpbnMgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25CZWdpblxuICovXG5mdW5jdGlvbiBtb2RlbENyZWF0aW9uQmVnaW4oKSB7XG4gIGdldExvZ2dlcigpLmRlYnVnKFwic3RhcnRpbmcgbW9kZWwgY3JlYXRpb24uLi5cIik7XG59XG5cblxuLypcbiAqIEVuZCBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICovXG5mdW5jdGlvbiBtb2RlbENyZWF0aW9uRW5kKCkge1xuICBnZXRMb2dnZXIoKS5kZWJ1ZyhcIm1vZGVsIGNyZWF0aW9uIGVuZGVkXCIpO1xufVxuXG5cbi8qXG4gKiBBbiBlcnJvciBoYXBwZW5lZCB3aGVuIGludm9raW5nIGEgYmVoYXZpb3IuXG4gKiBAbWV0aG9kIGFjdGlvbkludm9rZUVycm9yXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY29tcG9uZW50IGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIGFjdGlvbkludm9rZUVycm9yKHN0YXRlLCBpZCwgY2xhc3NOYW1lLCBtZXNzYWdlKSB7XG4gIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICBnZXRMb2dnZXIoKS5lcnJvcihcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIicgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJyk6IFwiICsgbWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInOiBcIiArIG1lc3NhZ2UpO1xuICB9XG59XG5cblxuLypcbiAqIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRTY2hlbWFQcm9wZXJ0eShuYW1lLCBwcm9wTmFtZSkge1xuICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBwcm9wTmFtZSArIFwiJyBmb3Igc2NoZW1hICdcIiArIG5hbWUgKyBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqKSB7XG4gIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIGZvcm1hdCBmb3IgYSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHknOiAnXCIgKyBvYmogKyBcIicgaXMgbm90IGFuIG9iamVjdFwiKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQGNsYXNzIHJ1bnRpbWUtbG9nXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIFNldCB0aGUgbGV2ZWwgb2YgdGhlIGxvZy5cbiAqIEBtZXRob2QgbGV2ZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbE5hbWUgbmFtZSBvZiB0aGUgbGV2ZWxcbiAqL1xuZXhwb3J0cy5sZXZlbCA9IGxldmVsO1xuXG5cbi8qKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eSA9IHVua25vd25Qcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZSA9IGludmFsaWRQcm9wZXJ0eVR5cGU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHZhbHVlIGZvciBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1WYWx1ZSA9IGludmFsaWRFbnVtVmFsdWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGNsYXNzIG5hbWUgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnZhbGlkQ2xhc3NOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uc3RydWN0b3JOYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnRzLmludmFsaWRDbGFzc05hbWUgPSBpbnZhbGlkQ2xhc3NOYW1lO1xuXG5cbi8qKlxuICogTWlzc2luZyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHkgPSBtaXNzaW5nUHJvcGVydHk7XG5cblxuLyoqXG4gKiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtaXNzaW5nIHNjaGVtYVxuICovXG5leHBvcnRzLm1pc3NpbmdJbXBsZW1lbnRhdGlvbiA9IG1pc3NpbmdJbXBsZW1lbnRhdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eSBvZiBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlSW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZUltcCA9IGludmFsaWRUeXBlSW1wO1xuXG5cbi8qKlxuICogTWlzc2luZyBhIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5SW1wID0gbWlzc2luZ1Byb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogVW5rb3duIHByb3BlcnR5IGZvciBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgYSBzY2hlbWFcbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlJbXAgPSB1bmtub3duUHJvcGVydHlJbXA7XG5cblxuLyoqXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGludmFsaWRUeXBlRGVmaW5pdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5TmFtZSA9IGludmFsaWRQcm9wZXJ0eU5hbWU7XG5cblxuLyoqXG4gKiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5yZWFkT25seVByb3BlcnR5ID0gcmVhZE9ubHlQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEludmFsaWQgZG9jdW1lbnQgb24gYSBSdW50aW1lIGRhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0O1xuXG5cbi8qKlxuICogSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gdW5rbm93bk1ldGhvZDtcblxuXG4vKipcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBpbnZhbGlkQ29sbGVjdGlvbk5hbWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgcmVzdWx0IG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFR5cGUgZXhwZWN0ZWQgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgY3VycmVudCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFJlc3VsdFR5cGUgPSBpbnZhbGlkUmVzdWx0VHlwZTtcblxuXG4vKipcbiAqIFVua25vd24gY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25Db21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZiBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudW5rbm93bkNvbXBvbmVudCA9IHVua25vd25Db21wb25lbnQ7XG5cblxuLyoqXG4gKiBUaGUgUnVudGltZSB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSB3b3JrZmxvd1Jlc3RhcnRlZDtcblxuXG4vKipcbiAqIEludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1OdW1iZXIgPSBpbnZhbGlkUGFyYW1OdW1iZXI7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgcGFyYW1ldGVycyBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGludmFsaWRQYXJhbVR5cGU7XG5cblxuLyoqXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBiZWhhdmlvck5vdFVuaXF1ZTtcblxuXG4vKipcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gaW52YWxpZFN0YXRlT247XG5cblxuLyoqXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGludmFsaWRTdGF0ZU9mZjtcblxuXG4vKipcbiAqIFRoZSBtYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IG1hc3RlclN5c3RlbU5vdEZvdW5kO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGludmFsaWRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSB1bmtub3duVHlwZTtcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBjYW5Ob3RZZXRWYWxpZGF0ZTtcblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGludmFsaWRDaGFubmVsRXZlbnQ7XG5cblxuLyoqXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uID0gaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT247XG5cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIGlkIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCB1cGRhdGVVdWlkXG4gKiBAcGFyYW0ge1N0cmluZ30gY3VycmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdJZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFscmVhZHlVc2VkIG5ld0lkIGFscmVhZHkgdXNlZFxuICovXG5leHBvcnRzLnVwZGF0ZVV1aWQgPSB1cGRhdGVVdWlkO1xuXG5cbi8qKlxuICogVW5rb253IHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUgPSB1bmtub3duUHJvcGVydHlPbkRiVXBkYXRlO1xuXG5cbi8qKlxuICogVHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQgdGhhdCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAqIEBtZXRob2QgaW52YWxpZGVVc2VPZkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVXNlT2ZDb21wb25lbnQgPSBpbnZhbGlkVXNlT2ZDb21wb25lbnQ7XG5cblxuLyoqXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hID0gaW52YWxpZFNjaGVtYTtcblxuXG4vKipcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBtb2RlbC5cbiAqIEBtZXRob2QgaW52YWxpZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmludmFsaWRNb2RlbCA9IGludmFsaWRNb2RlbDtcblxuXG4vKipcbiAqIEludmFsaWQgcGFyYW1ldGVycyBzZXQgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtZXRlcnMgPSBpbnZhbGlkUGFyYW1ldGVycztcblxuXG4vKipcbiAqIFRyeSB0byBnZXQgdGhlIHByb3BlcnR5IG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZGVzdHJveWVkQ29tcG9uZW50Q2FsbFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ZWRDb21wb25lbnRDYWxsID0gZGVzdHJveWVkQ29tcG9uZW50Q2FsbDtcblxuXG4vKipcbiAqIEludmFsaWQgcGFyYW1ldGVyIHR5cGUgIHdoZW4gY3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IG9iamVjdCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBzY2hlbWEgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMgPSBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzO1xuXG5cbi8qKlxuICogR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtvd24gbW9kZWwuXG4gKiBAbWV0aG9kIHVua25vd25Nb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMudW5rbm93bk1vZGVsID0gdW5rbm93bk1vZGVsO1xuXG5cbi8qKlxuICogQSBzY2hlbWEgaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMubWlzc2luZ1NjaGVtYSA9IG1pc3NpbmdTY2hlbWE7XG5cblxuLyoqXG4gKiBBIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZC5cbiAqIEBtZXRob2QgbWlzc2luZ1NjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHdoZXJlIHRoZSBjeWNsaWMgZGVwZW5kZW5jeSB3YXMgZm91bmRcbiAqL1xuZXhwb3J0cy5jeWNsaWNEZXBlbmRlbmN5ID0gY3ljbGljRGVwZW5kZW5jeTtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVOYW1lIG9mIHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZEVudW1UeXBlID0gaW52YWxpZEVudW1UeXBlO1xuXG5cbi8qKlxuICogTG9hZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGxvYWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmxvYWRTY2hlbWEgPSBsb2FkU2NoZW1hO1xuXG5cbi8qKlxuICogTG9hZCBtb2RlbC5cbiAqIEBtZXRob2QgbG9hZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmxvYWRNb2RlbCA9IGxvYWRNb2RlbDtcblxuXG4vKipcbiAqIExvYWQgdHlwZS5cbiAqIEBtZXRob2QgbG9hZFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5sb2FkVHlwZSA9IGxvYWRUeXBlO1xuXG5cbi8qKiBcbiAqIENvbXBpbGUgc2NoZW1hLlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5jb21waWxlU2NoZW1hID0gY29tcGlsZVNjaGVtYTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIG1vZGVsLlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmdlbmVyYXRlTW9kZWwgPSBnZW5lcmF0ZU1vZGVsO1xuXG5cbi8qKlxuICogQ2hlY2sgbW9kZWwuXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tNb2RlbCA9IGNoZWNrTW9kZWw7XG5cblxuLyoqXG4gKiBDcmVhdGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmNyZWF0ZUNvbGxlY3Rpb24gPSBjcmVhdGVDb2xsZWN0aW9uO1xuXG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jcmVhdGVDbGFzcyA9IGNyZWF0ZUNsYXNzO1xuXG5cbi8qXG4gKiBCZWdpbnMgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25CZWdpblxuICovXG5leHBvcnRzLm1vZGVsQ3JlYXRpb25CZWdpbiA9IG1vZGVsQ3JlYXRpb25CZWdpbjtcblxuXG4vKlxuICogRW5kIG1vZGVsIGNyZWF0aW9uLlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uRW5kXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkVuZCA9IG1vZGVsQ3JlYXRpb25FbmQ7XG5cblxuLyoqXG4gKiBBbiBlcnJvciBoYXBwZW5lZCB3aGVuIGludm9raW5nIGEgYmVoYXZpb3IuXG4gKiBAbWV0aG9kIGFjdGlvbkludm9rZUVycm9yXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY29tcG9uZW50IGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gKi9cbmV4cG9ydHMuYWN0aW9uSW52b2tlRXJyb3IgPSBhY3Rpb25JbnZva2VFcnJvcjtcblxuXG4vKipcbiAqIEludmFsaWQgbmFtZSBmb3IgdGhlIHByb3BlcnR5IG9mIGEgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFNjaGVtYVByb3BlcnR5ID0gaW52YWxpZFNjaGVtYVByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eUZvcm1hdCA9IGludmFsaWRQcm9wZXJ0eUZvcm1hdDtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE3IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBtZXRhbW9kZWwuIDxicj5cbiAqIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAY2xhc3MgcnVudGltZS1tZXRhbW9kZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnLFxuICBOQU1FID0gJ19uYW1lJyxcbiAgREVTQ1JJUFRJT04gPSAnX2Rlc2NyaXB0aW9uJyxcbiAgSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuICBDTEFTUyA9ICdfY2xhc3MnLFxuICBDT1JFID0gJ19jb3JlJyxcbiAgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbiAgRVZFTlRfVFlQRSA9ICdldmVudCcsXG4gIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuICBMSU5LX1RZUEUgPSAnbGluaycsXG4gIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJyxcbiAgaW50ZXJuYWxUeXBlcyA9IFsncHJvcGVydHknLCAnY29sbGVjdGlvbicsICdsaW5rJywgJ21ldGhvZCcsICdldmVudCddLFxuICBkZWZhdWx0VHlwZXMgPSBbJ2Jvb2xlYW4nLCAnc3RyaW5nJywgJ251bWJlcicsICdvYmplY3QnLCAnZnVuY3Rpb24nLCAnYXJyYXknLCAnZGF0ZScsICdhbnknXSxcbiAgc3RvcmUgPSB7XG4gICAgbWV0YWRlZjoge30sXG4gICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgc2NoZW1hczoge30sXG4gICAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgICBtb2RlbHM6IHt9LFxuICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fVxuICB9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBHZW5lcmF0ZSB0aGUgbW9kZWxzLlxuICogQG1ldGhvZCBnZW5lcmF0ZU1vZGVsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVNb2RlbHMoKSB7XG4gIHZhciBhdHQgPSAnJyxcbiAgICBuYW1lID0gJycsXG4gICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgIHNjaGVtYSA9IHt9LFxuICAgIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsUGFyZW50ID0gbnVsbCxcbiAgICBtb2RlbEV4dCA9IG51bGwsXG4gICAgbW9kZWxEZWYgPSBudWxsLFxuICAgIG1vZGVsID0ge30sXG4gICAgbW9kZWxzID0ge30sXG4gICAgbWVyZ2VkTW9kZWwgPSB7fSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBqID0gMCxcbiAgICBuYkFuY2VzdG9ycyA9IDAsXG4gICAgc29ydEluaGVyaXRUcmVlID0gW107XG5cbiAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgZm9yIChzY2hlbWFOYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgIC8vIHNldCBtb2RlbCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgbW9kZWwgPSB7XG4gICAgICBcIl9uYW1lXCI6IHNjaGVtYS5fbmFtZSxcbiAgICB9O1xuXG4gICAgLy8gc2V0IF9jb3JlXG4gICAgaWYgKHR5cGVvZiBzY2hlbWEuX2NvcmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2RlbC5fY29yZSA9IHNjaGVtYS5fY29yZTtcbiAgICB9XG5cbiAgICAvLyBzZXQgaW5oZXJpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5faW5oZXJpdCkpIHtcbiAgICAgIG1vZGVsLl9pbmhlcml0ID0gc2NoZW1hLl9pbmhlcml0O1xuICAgIH1cblxuICAgIC8vIHNldCBjbGFzc1xuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9jbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9jbGFzcyA9IHNjaGVtYS5fY2xhc3M7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlc2NyaXB0aW9uIFxuICAgIGlmICh0eXBlb2Ygc2NoZW1hLl9kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vZGVsLl9kZXNjcmlwdGlvbiA9IHNjaGVtYS5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy8gIHNldCBtb2RlbCBkZWZhdWx0IHZhbHVlc1xuICAgIGZvciAoYXR0IGluIHNjaGVtYSkge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdwcm9wZXJ0eSc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dCxcbiAgICAgICAgICAgIFwibGFiZWxcIjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2xpbmsnOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJAUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dCxcbiAgICAgICAgICAgIFwibGFiZWxcIjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ21ldGhvZCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYW55XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Ugc2NoZW1hW2F0dF0gPT09ICdldmVudCc6XG4gICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2NvbGxlY3Rpb24nOlxuICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogW1wiQFJ1bnRpbWVDb21wb25lbnRcIl0sXG4gICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogW10sXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dCxcbiAgICAgICAgICAgIFwibGFiZWxcIjogYXR0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoYXR0LmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hUHJvcGVydHkoc2NoZW1hLl9uYW1lLCBhdHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWwuX25hbWVdID0gbW9kZWw7XG4gIH1cblxuICAvLyBtb2RlbHMgdG8gb3ZlcnJpZGVcbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBuYW1lID0gbW9kZWxbTkFNRV07XG4gICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbmFtZV07XG4gICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBtb2RlbCk7XG4gICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICB9XG4gIH1cblxuICAvLyBpbmhlcml0YW5jZVxuICBzb3J0SW5oZXJpdFRyZWUgPSBzb3J0SW5oZXJpdGFuY2VUcmVlKCk7XG5cbiAgbmJBbmNlc3RvcnMgPSBzb3J0SW5oZXJpdFRyZWUubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbmJBbmNlc3RvcnM7IGkrKykge1xuICAgIG1vZGVsTmFtZSA9IHNvcnRJbmhlcml0VHJlZVtpXTtcbiAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuXG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2RlbE5hbWUpO1xuICAgICAgcGFyZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgIHZhciBtb2RlbFRvTWVyZ2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZGVsKSk7XG5cbiAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIG5hbWUgPSBwYXJlbnRzW2pdO1xuICAgICAgICBtb2RlbFBhcmVudCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICAgICAgaWYgKG1vZGVsUGFyZW50KSB7XG4gICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbFBhcmVudCwgbW9kZWwpO1xuICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbGFzdCBpbmhlcml0IFxuICAgICAgLy8gaXMgdGhlIG92ZXJyaWRlbiBtb2RlbFxuICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsRXh0LCBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXSk7XG4gICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2F2ZSBcbiAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLmluc2VydChtb2RlbERlZik7XG5cbiAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAkbG9nLmdlbmVyYXRlTW9kZWwobW9kZWxOYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLypcbiAqIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgdmFyIHNjaGVtYXMgPSBbXSxcbiAgICB0eXBlcyA9IFtdLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgbW9kZWwgPSB7fSxcbiAgICBtb2RlbHMgPSBbXSxcbiAgICB0eXBlID0gbnVsbCxcbiAgICBpZCA9ICcnLFxuICAgIG5hbWUgPSAnJyxcbiAgICBpbmhlcml0ID0gJycsXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICAvLyBpbml0IHN0b3JlXG4gIHN0b3JlLmluaGVyaXRhbmNlID0ge307XG4gIHN0b3JlLmluaGVyaXRhbmNlVHJlZSA9IHt9O1xuICBzdG9yZS5zY2hlbWFzID0ge307XG4gIHN0b3JlLmNvbXBpbGVkU2NoZW1hcyA9IHt9O1xuICBzdG9yZS5tb2RlbHMgPSB7fTtcbiAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzID0ge307XG4gIHN0b3JlLnN0YXRlcyA9IHt9O1xuICBzdG9yZS50eXBlID0ge307XG5cbiAgLy8gbG9hZCBzY2hlbWFzXG4gIHNjaGVtYXMgPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHt9KTtcblxuICBsZW5ndGggPSBzY2hlbWFzLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc2NoZW1hID0gc2NoZW1hc1tpXTtcblxuICAgIG5hbWUgPSBzY2hlbWFbTkFNRV07XG4gICAgaW5oZXJpdCA9IHNjaGVtYVtJTkhFUklUU107XG5cbiAgICBzdG9yZS5zY2hlbWFzW25hbWVdID0gc2NoZW1hO1xuICAgIGlmIChpbmhlcml0KSB7XG4gICAgICBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSA9IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICRsb2cubG9hZFNjaGVtYShuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkIG1vZGVsc1xuICBtb2RlbHMgPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoe30pO1xuXG4gIGxlbmd0aCA9IG1vZGVscy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIG1vZGVsID0gbW9kZWxzW2ldO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICAgIHN0b3JlLm1vZGVsc1tuYW1lXSA9IG1vZGVsO1xuXG4gICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgJGxvZy5sb2FkTW9kZWwobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZCB0eXBlc1xuICB0eXBlcyA9ICRkYi5SdW50aW1lVHlwZS5maW5kKHt9KTtcblxuICBsZW5ndGggPSB0eXBlcy5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHR5cGUgPSB0eXBlc1tpXTtcbiAgICBzdG9yZS50eXBlW3R5cGUubmFtZV0gPSB0eXBlO1xuXG4gICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICRsb2cubG9hZFR5cGUodHlwZS5uYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBpbmhlcml0YW5jZSB0cmVlLlxuICogQG1ldGhvZCBjcmVhdGVJbmhlcml0YW5jZVRyZWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpIHtcbiAgdmFyIG5hbWUgPSAnJyxcbiAgICBjM2xpbmVyaXphdGlvbiA9IFtdLFxuICAgIGFuY2VzdG9ycyA9IFtdO1xuXG4gIC8qXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgZmluaXNlaGQgdG8gbGluZXJpemUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGFsbCB0aGUgYXJyYXlzIGFyZSBlbXB0eVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzRW1wdHkoZWx0cykge1xuICAgIHZhciBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDAsXG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZWx0c1tpXS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKlxuICAgKiBSZW1vdmUgYW4gZWx0IGZyb20gYWxsIHRoZSBhcnJheXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfcmVtb3ZlQ2FuZGlkYXRlKGVsdCwgZWx0cykge1xuICAgIHZhciBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDAsXG4gICAgICBhcnIgPSBbXTtcblxuICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGVsdHNbaV0uaW5kZXhPZihlbHQpID09PSAwKSB7XG4gICAgICAgIGFyciA9IGVsdHNbaV07XG4gICAgICAgIGFyci5yZXZlcnNlKCk7XG4gICAgICAgIGFyci5wb3AoKTtcbiAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgZWx0c1tpXSA9IGFycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZWx0IGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA+IDApIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qXG4gICAqIEZpbmQgYSBjYW5kaWRhdGUgYW5kIHJldHVybiBpdC5cbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBjb250YWluaW5nIHRoZSBjYW5kaWRhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9maW5kQ2FuZGlkYXRlKGVsdHMpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICBsZW5ndGggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBsZW5ndGggPSBlbHRzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfaXNDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZWx0c1tpXVswXSk7XG4gICAgICAgIF9yZW1vdmVDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLypcbiAgICogTWVyZ2UgdGhlIGFycmF5cy5cbiAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXMgcmV0dXJuZWQgYnkgdGhlIG1lcmdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfbWVyZ2UoZWx0cykge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgIGNhbmRpZGF0ZXMgPSBfZmluZENhbmRpZGF0ZShlbHRzKTtcbiAgICB3aGlsZSAoY2FuZGlkYXRlc1swXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcyA9IF9maW5kQ2FuZGlkYXRlKGVsdHMpO1xuICAgIH1cblxuICAgIGlmICghX2lzRW1wdHkoZWx0cykpIHtcbiAgICAgICRsb2cuY3ljbGljRGVwZW5kZW5jeSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLypcbiAgICogU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGVsZW1lbnRcbiAgICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2xpbmVyaXplKG5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICBwYXJlbnRzID0gW10sXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3kuIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIGlzIGEgY3ljbGljIGRlcGVuZGVuY3lcbiAgICAgKiBAcHJpdmF0ZSBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hlY2tDeWNsaWNEZXAobmFtZSwgaXRlbSkge1xuICAgICAgdmFyIGlzQ3ljbGljRGViID0gZmFsc2U7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JlLmluaGVyaXRhbmNlW2l0ZW1dKSAmJiBzdG9yZS5pbmhlcml0YW5jZVtpdGVtXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgIGlzQ3ljbGljRGViID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc0N5Y2xpY0RlYjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtuYW1lXSkpIHtcbiAgICAgIHBhcmVudHMgPSBzdG9yZS5pbmhlcml0YW5jZVtuYW1lXS5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nLm1pc3NpbmdTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoX2NoZWNrQ3ljbGljRGVwKG5hbWUsIHBhcmVudHNbaV0pKSB7XG4gICAgICAgIHBhcmVudHMgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBbbmFtZV0uY29uY2F0KF9tZXJnZShwYXJlbnRzLm1hcChfbGluZXJpemUpLmNvbmNhdChbcGFyZW50c10pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgIGMzbGluZXJpemF0aW9uID0gX2xpbmVyaXplKG5hbWUpO1xuICAgIGFuY2VzdG9ycyA9IGMzbGluZXJpemF0aW9uLnJldmVyc2UoKTtcbiAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgaWYgKGFuY2VzdG9ycy5sZW5ndGgpIHtcbiAgICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSA9IGFuY2VzdG9ycztcbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuICogRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudC5cbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJuIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQobmFtZSkge1xuICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgc29uID0gc3RvcmUuc2NoZW1hc1tuYW1lXSxcbiAgICBhbmNlc3RvcnMgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV0sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBhbmNlc3RvciA9IG51bGwsXG4gICAgcHJvcCA9ICcnO1xuXG4gIGlmIChhbmNlc3RvcnMpIHtcbiAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAocHJvcCBpbiBzb24pIHtcbiAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gIH1cbiAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuXG4vKlxuICogR2V0IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlLlxuICogQG1ldGhvZCBzb3J0SW5oZXJpdGFuY2VUcmVlXG4gKiBAcmV0dXJuIHtBcnJheX0gc29ydGVkIEluaGVyaXRhbmNlVHJlZSBzdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNvcnRJbmhlcml0YW5jZVRyZWUoKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICB0ZW1wID0ge30sXG4gICAga2V5cyA9IFtdLFxuICAgIG1vZGVsTmFtZSA9ICcnLFxuICAgIG5iQW5jZXN0b3JzID0gMDtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZVRyZWUpIHtcbiAgICBuYkFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVttb2RlbE5hbWVdLmxlbmd0aDtcbiAgICBpZiAodHlwZW9mIHRlbXBbbmJBbmNlc3RvcnNdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGVtcFtuYkFuY2VzdG9yc10gPSBbXTtcbiAgICB9XG4gICAgdGVtcFtuYkFuY2VzdG9yc10ucHVzaChtb2RlbE5hbWUpO1xuICB9XG5cbiAga2V5cyA9IE9iamVjdC5rZXlzKHRlbXApLnNvcnQoKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHRlbXBbaW5kZXhdLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICByZXN1bHQucHVzaChtb2RlbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEFkZCB0aGUgbW9kZWxzLlxuICogQG1ldGhvZCBjb21waWxlU2NoZW1hc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNjaGVtYXMoKSB7XG4gIHZhciBuYW1lID0gJyc7XG4gIGZvciAobmFtZSBpbiBzdG9yZS5zY2hlbWFzKSB7XG4gICAgaWYgKCFzdG9yZS5zY2hlbWFzW25hbWVdLl9jb3JlKSB7XG4gICAgICAkbG9nLmNvbXBpbGVTY2hlbWEobmFtZSk7XG4gICAgfVxuXG4gICAgc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdID0gZXh0ZW5kKG5hbWUpO1xuICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYWxsIHRoZSBtb2RlbHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzLlxuICogQG1ldGhvZCBjaGVja01vZGVsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tNb2RlbHMoKSB7XG4gIHZhciBuYW1lID0gJycsXG4gICAgY2xhc3NEZWYgPSBudWxsLFxuICAgIHNjaGVtYSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBjbGFzc0RlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXTtcbiAgICBpZiAoY2xhc3NEZWYpIHtcbiAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgaWYgKCFjbGFzc0RlZi5fY29yZSkge1xuICAgICAgICAgICRsb2cuY2hlY2tNb2RlbChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja0ltcChjbGFzc0RlZiwgc2NoZW1hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cubWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBzdGF0ZXMgb2YgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFN0YXRlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICB2YXIgbmFtZSA9ICcnLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgdHlwZSA9ICcnLFxuICAgIHN0YXRlcyA9IFtdLFxuICAgIGF0dHJpYnV0ZSA9ICcnO1xuXG4gIGZvciAobmFtZSBpbiBzdG9yZS5jb21waWxlZFNjaGVtYXMpIHtcbiAgICBzdGF0ZXMgPSBbXTtcbiAgICBzY2hlbWEgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgaWYgKHNjaGVtYSkge1xuICAgICAgZm9yIChhdHRyaWJ1dGUgaW4gc2NoZW1hKSB7XG4gICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5pbmRleE9mKCdfJykgIT09IDAgJiYgaW50ZXJuYWxUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmUuc3RhdGVzW25hbWVdID0gc3RhdGVzO1xuICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3QgXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gIHZhciBwcm9wZXJ0eSA9ICcnLFxuICAgIHZhbHVlID0gbnVsbDtcbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0ltcCkge1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZltwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICBpZiAoIWNoZWNrU2NoZW1hKHZhbHVlLCBjbGFzc0ltcFtwcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0RlZikge1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc0ltcFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltOQU1FXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tTY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1NjaGVtYSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmIGRlZmF1bHRUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgaWYgKCFoYXNUeXBlKHR5cGVEZWYsICd1bmRlZmluZWQnKSkge1xuICAgIGlmICghaGFzVHlwZSh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAodHlwZURlZi50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFR5cGUodmFsdWVbaV0sIHR5cGVEZWYudHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEluaXQgdGhlIERhdGFiYXNlIHN0dWN0dXJlLlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXREYlN0cnVjdHVyZSgpIHtcbiAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVMb2dnZXInKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVTY2hlbWEnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVNb2RlbCcpO1xuICAkZGIuY29sbGVjdGlvbignUnVudGltZUdlbmVyYXRlZE1vZGVsJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQ2xhc3NJbmZvJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQmVoYXZpb3InKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVTdGF0ZScpO1xuICAkZGIuY29sbGVjdGlvbignUnVudGltZVR5cGUnKTtcbiAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVNZXNzYWdlJyk7XG4gICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQ2hhbm5lbCcpO1xuICAkZGIuY29sbGVjdGlvbignUnVudGltZUxvZycpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uKS5cbiAqIEBtZXRob2QgY3JlYXRlRGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURiU3RydWN0dXJlKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmICh0eXBlb2YgJGRiW21vZGVsRGVmW05BTUVdXSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICRkYi5jb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcblxuICAgICAgaWYgKCFtb2RlbERlZi5fY29yZSkge1xuICAgICAgICAkbG9nLmNyZWF0ZUNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBjbGFzc2VzIG9mIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKCkge1xuICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgbW9kZWxEZWYgPSB7fTtcblxuICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmIChtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgIFwibW9kZWxcIjogbW9kZWxOYW1lXG4gICAgICB9KTtcbiAgICAgIGlmICghbW9kZWxEZWYuX2NvcmUpIHtcbiAgICAgICAgJGxvZy5jcmVhdGVDbGFzcyhtb2RlbE5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge30sXG4gICAgbmFtZSA9ICcnO1xuXG4gIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgbmFtZSA9IG1vZGVsRGVmW05BTUVdICsgJ0luZm8nO1xuXG4gICAgaWYgKFxuICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSAmJlxuICAgICAgaW5oZXJpdEZyb20obW9kZWxEZWZbTkFNRV0sICdSdW50aW1lQ29tcG9uZW50JylcbiAgICApIHtcbiAgICAgIGlmICghJGNvbXBvbmVudC5nZXQobmFtZSkpIHtcbiAgICAgICAgJGRiLlJ1bnRpbWVDbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICBcIl9pZFwiOiBuYW1lLFxuICAgICAgICAgIFwic2NoZW1hXCI6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxEZWZcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZGIuUnVudGltZUNsYXNzSW5mby51cGRhdGUoe1xuICAgICAgICAgIFwiX2lkXCI6IG5hbWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJfaWRcIjogbmFtZSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1ttb2RlbE5hbWVdLFxuICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbERlZlxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qIFxuICogR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QgLyB0eXBlLlxuICogQG1ldGhvZCBnZXRSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykgJiZcbiAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgIWlzUmVmZXJlbmNlKHZhbHVlKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSByZWZlcmVuY2UuXG4gKiBAbWV0aG9kIGlzUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuaW5kZXhPZignQCcpICE9PSAtMTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZS5cbiAqIEBtZXRob2QgZ2V0UmVhbFR5cGVcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWxUeXBlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdHlwZSA9ICdhcnJheSc7XG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT09ICdhbnknKSB7XG4gICAgdHlwZSA9ICdhbnknO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cblxuLypcbiAqIEdldCB0aGUgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QuXG4gKiBAbWV0aG9kIGdldENsYXNzTmFtZVxuICogQHBhcmFtIHt0eXBlfSBvYmogb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShvYmopIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGlmIChvYmogJiYgb2JqLmNvbnN0cnVjdG9yKSB7XG4gICAgcmVzdWx0ID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgdmFsaWQgZW51bSB2YWx1ZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1WYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSBlbnVtVmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtVmFsdWUodmFsdWUsIGVudW1WYWx1ZSkge1xuICByZXR1cm4gZW51bVZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBoYXMgdGhlIHNwZWNpZmllZCB0eXBlLlxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZVxuICogQHBhcmFtIHt0eXBlfSB0eXBlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpcyB2YWx1ZSBoYXMgdHlwZSAndHlwZSdcbiAqL1xuZnVuY3Rpb24gaGFzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICBkYXRlID0gbnVsbDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgcmVzdWx0ID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FueSc6XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlc3VsdCA9ICh0eXBlID09PSB0eXBlb2YgdmFsdWUpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBoYXMgYSBzcGVjaWZpYyB0eXBlLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaGFzIGZvciB0eXBlIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICBpZiAoY29tcG9uZW50U2NoZW1hICYmIGNvbXBvbmVudFNjaGVtYVtOQU1FXSkge1xuICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuICB9XG5cbiAgaWYgKGNvbXBvbmVudFNjaGVtYSkge1xuICAgIGF0dHJpYnV0ZVR5cGUgPSBjb21wb25lbnRTY2hlbWFbbmFtZV07XG4gICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIE1lcmdlIHR3byBzY2hlbWFzLlxuICogQG1ldGhvZCBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWVyZ2UgYWxzbyBwcml2YXRlIHByb3BlcnRpZXNcbiAqIEByZXR1cm4ge09iamVjdH0gbWVyZ2VkIHNjaGVtYVxuICovXG5mdW5jdGlvbiBtZXJnZShzb3VyY2UsIHRhcmdldCwgYWxsKSB7XG4gIHZhciBwcm9wTmFtZSA9ICcnLFxuICAgIHJlc3VsdCA9IHRhcmdldDtcblxuICBmb3IgKHByb3BOYW1lIGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIHByb3BOYW1lLmluZGV4T2YoJ18nKSAhPT0gMCkge1xuICAgICAgcmVzdWx0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIG5ldyBzY2hlbWEuXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFNjaGVtYSBzY2hlbWEgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIHNjaGVtYShpbXBvcnRlZFNjaGVtYSkge1xuICB2YXIgaWQgPSBudWxsLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgbmFtZSA9ICcnLFxuICAgIG1lcmdlZFNjaGVtYSA9IHt9LFxuICAgIHNjaGVtYXMgPSBbXTtcblxuICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGltcG9ydGVkU2NoZW1hKSk7XG4gIG5hbWUgPSBzY2hlbWFbTkFNRV07XG5cbiAgaWYgKHR5cGVvZiBzY2hlbWFbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgIHNjaGVtYVtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgfVxuICBpZiAodHlwZW9mIHNjaGVtYVtJTkhFUklUU10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc2NoZW1hW0lOSEVSSVRTXSA9IFsnUnVudGltZUNvbXBvbmVudCddO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUR1cGxpY2F0ZShpbmhlcml0cykge1xuICAgIHZhciBmaWx0ZXJlZExpc3QgPSBbXSxcbiAgICAgIGxpc3QgPSB7fTtcblxuICAgIGluaGVyaXRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdFtuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGlzdFtuYW1lXSA9IG5hbWU7XG4gICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbiAgfVxuXG4gIHNjaGVtYVtJTkhFUklUU10gPSBfcmVtb3ZlRHVwbGljYXRlKHNjaGVtYVtJTkhFUklUU10pO1xuXG4gIC8vIGNoZWNrIGlmIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChpc1ZhbGlkT2JqZWN0KHNjaGVtYSwgc3RvcmUubWV0YWRlZi5zY2hlbWEsIGZhbHNlKSkge1xuICAgIHNjaGVtYXMgPSAkZGIuUnVudGltZVNjaGVtYS5maW5kKHsgJ19uYW1lJzogbmFtZSB9KTtcbiAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZFNjaGVtYSA9IG1lcmdlKHNjaGVtYSwgc2NoZW1hc1swXSk7XG4gICAgICAkZGIuUnVudGltZVNjaGVtYS51cGRhdGUoeyAnX25hbWUnOiBuYW1lIH0sIG1lcmdlZFNjaGVtYSk7XG4gICAgICBpZCA9IHNjaGVtYXNbMF0uX2lkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAkZGIuUnVudGltZVNjaGVtYS5pbnNlcnQoc2NoZW1hKTtcbiAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLmludmFsaWRTY2hlbWEoc2NoZW1hW05BTUVdKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuXG4vKlxuICogQWRkIGEgbmV3IG1vZGVsLlxuICogQG1ldGhvZCBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZE1vZGVsIG1vZGVsIHRvIGFkZFxuICovXG5mdW5jdGlvbiBtb2RlbChpbXBvcnRlZE1vZGVsKSB7XG4gIHZhciBtb2RlbCA9IG51bGwsXG4gICAgaWQgPSBudWxsLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGluaGVyaXQgPSAnJyxcbiAgICBuYW1lID0gJycsXG4gICAgbWVyZ2VkTW9kZWwgPSB7fSxcbiAgICBtb2RlbHMgPSBbXTtcblxuICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRNb2RlbCkpO1xuICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgaWYgKHR5cGVvZiBtb2RlbFtJRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kZWxbSURdID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gIH1cblxuICAvLyBjaGVjayBpZiBtb2RlbCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gIGlmIChpc1ZhbGlkT2JqZWN0KG1vZGVsLCBzdG9yZS5tZXRhZGVmLm1vZGVsLCBmYWxzZSkpIHtcbiAgICBtb2RlbHMgPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoeyAnX25hbWUnOiBuYW1lIH0pO1xuICAgIGlmIChtb2RlbHMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsLCBtb2RlbHNbMF0pO1xuICAgICAgJGRiLlJ1bnRpbWVNb2RlbC51cGRhdGUoeyAnX25hbWUnOiBuYW1lIH0sIG1lcmdlZE1vZGVsKTtcbiAgICAgIGlkID0gbW9kZWxzWzBdLl9pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVNb2RlbC5pbnNlcnQobW9kZWwpO1xuICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZE1vZGVsKG1vZGVsW05BTUVdKTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cblxuLypcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkVHlwZSB0eXBlIHRvIGFkZFxuICovXG5mdW5jdGlvbiB0eXBlKGltcG9ydGVkVHlwZSkge1xuICB2YXIgaWQgPSBudWxsLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAvLyBjaGVjayBpZiB0eXBlIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgaWYgKGlzVmFsaWRPYmplY3QoaW1wb3J0ZWRUeXBlLCBzdG9yZS5tZXRhZGVmLnR5cGUpKSB7XG4gICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVUeXBlLmluc2VydChpbXBvcnRlZFR5cGUpO1xuICAgIGlkID0gcmVzdWx0WzBdO1xuICB9IGVsc2Uge1xuICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY2xlYXIoKTtcbiAgc3RvcmUubWV0YWRlZiA9IHtcbiAgICBzY2hlbWE6IHtcbiAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcIl9uYW1lXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgIFwiZGVmYXVsdFwiOiBbXCJSdW50aW1lQ29tcG9uZW50XCJdXG4gICAgICB9LFxuICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICB9LFxuICAgICAgXCJfY29yZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICBcIl9kZXNjcmlwdGlvblwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcIl9uYW1lXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICBcIl9jbGFzc1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICBcIl9jb3JlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwiX2Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICBcIl9pZFwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICBcInR5cGVcIjogW1wiYW55XCJdLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICBcIl9kZXNjcmlwdGlvblwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9O1xuICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgc3RvcmUgPSB7XG4gICAgbWV0YWRlZjoge30sXG4gICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgIGluaGVyaXRhbmNlVHJlZToge30sXG4gICAgc2NoZW1hczoge30sXG4gICAgY29tcGlsZWRTY2hlbWFzOiB7fSxcbiAgICBtb2RlbHM6IHt9LFxuICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fVxuICB9O1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgJGxvZy5tb2RlbENyZWF0aW9uQmVnaW4oKTtcbiAgbG9hZEluTWVtb3J5KCk7XG4gIGNyZWF0ZUluaGVyaXRhbmNlVHJlZSgpO1xuICBjb21waWxlU2NoZW1hcygpO1xuICBnZW5lcmF0ZU1vZGVscygpO1xuICBjaGVja01vZGVscygpO1xuICBnZXRTdGF0ZXMoKTtcbiAgY3JlYXRlRGJTdHJ1Y3R1cmUoKTtcbiAgY3JlYXRlQ2xhc3MoKTtcbiAgY3JlYXRlQ2xhc3NJbmZvKCk7XG4gICRsb2cubW9kZWxDcmVhdGlvbkVuZCgpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudC5cbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICovXG5mdW5jdGlvbiBpc0V2ZW50KG5hbWUsIGlkKSB7XG4gIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIEVWRU5UX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gaXNQcm9wZXJ0eShuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rLlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKi9cbmZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBMSU5LX1RZUEUpO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpc0NvbGxlY3Rpb24obmFtZSwgaWQpIHtcbiAgcmV0dXJuIGNoZWNrVHlwZShuYW1lLCBpZCwgQ09MTEVDVElPTl9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGlzTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBpc01ldGhvZChuYW1lLCBpZCkge1xuICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBNRVRIT0RfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBpc1N0cnVjdHVyZShuYW1lLCBpZCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgIGF0dHJpYnV0ZVR5cGUgPSAnJyxcbiAgICB0eXBlID0gJyc7XG5cbiAgaWYgKG1vZGVsW25hbWVdKSB7XG4gICAgdHlwZSA9IHN0b3JlLnR5cGVbbW9kZWxbbmFtZV0udHlwZV07XG4gIH1cblxuICBpZiAodHlwZSAmJiB0eXBlLnNjaGVtYSkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTdGF0ZShuYW1lLCBpZCkge1xuICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2lkXSxcbiAgICBzdGF0ZSA9IHt9O1xuXG4gIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gIH1cbiAgc3RhdGUgPSBzdG9yZS5zdGF0ZXNbY29tcG9uZW50U2NoZW1hW05BTUVdXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG5cbiAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV0sXG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZURlZi52YWx1ZSkgJiYgdHlwZURlZi52YWx1ZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG4gICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgIHZhciBjb21wb25lbnQgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdldENsYXNzTmFtZShjb21wb25lbnQpICE9PSB0eXBlUmVmICYmIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudCkgIT09ICd7fScpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZS5yZXBsYWNlKCdAJywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKlxuICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAqIEBwcml2YXRlXG4gICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICByZWFsVHlwZSA9ICcnLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW5ndGggPSAwO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlTmFtZSk7XG4gICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZVswXSk6XG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZVtpXSwgdHlwZU5hbWVbMF0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWVbMF0pOlxuICAgICAgICAgICAgICBpc1ZhbGlkID0gX2NoZWNrUmVmZXJlbmNlKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUodmFsdWVbaV0sIHR5cGVOYW1lWzBdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkRW51bVR5cGUodmFsdWUsIHR5cGVOYW1lLCBzdG9yZS50eXBlW3R5cGVOYW1lXS50eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgcmVzdWx0ID0gX2NoZWNrUmVmZXJlbmNlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGlzVmFsaWRFbnVtXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hIHNjaGVtYSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIF9pc0luc3RhbmNlT2YoY29tcG9uZW50LCBjbGFzc05hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfVxuICAgIHJlc3VsdCA9IGNvbXBvbmVudENsYXNzTmFtZSA9PT0gY2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChpc1JlZmVyZW5jZShzY2hlbWEudHlwZSkpIHtcbiAgICByZXN1bHQgPSBfaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVmZXJlbmNlKHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IChoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqIEBtZXRob2QgaXNWYWxpZFNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBvYmplY3RcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgZmllbGQgPSBudWxsLFxuICAgIHJlc3VsdCA9IHRydWUsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgdHlwZVJlZiA9ICcnLFxuICAgIHJlYWxUeXBlID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAvKlxuICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFJlZmVyZW5jZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICBlbnVtVmFsdWUgPSBbXTtcblxuICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUmVmZXJlbmNlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSB8fCBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk7XG4gICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdHJpY3QgdmFsaWRhdGlvbiB0aGFuIGp1c3QgYSB0eXBlIGNoZWNraW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVJlZiwgZmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qXG4gICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG5cbiAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVTY2hlbWEpO1xuICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc1R5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8vIHR5cGVcblxuICBpZiAoaGFzVHlwZShvYmplY3QsICdvYmplY3QnKSkge1xuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgaWYgKGhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpICYmIG9iamVjdFtmaWVsZE5hbWVdICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgJGxvZy5pbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KG9iamVjdCwgc2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKSB7XG4gIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICBmaWVsZCA9IG51bGwsXG4gICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgIHR5cGVTY2hlbWEgPSAnJyxcbiAgICB0eXBlUmVmID0gJycsXG4gICAgcmVhbFR5cGUgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgc3RyaWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChoYXNUeXBlKGNsZWFuUmVmLCAndW5kZWZpbmVkJykpIHtcbiAgICBzdHJpY3QgPSBmYWxzZTtcbiAgfVxuXG4gIC8qXG4gICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSBjdXN0b20gdHlwZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBjdXN0b20gdHlwZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgcmVhbFR5cGUgPSAnJztcblxuICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICBpZiAocmVhbFR5cGUpIHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCByZWFsVHlwZS5zY2hlbWEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnZhbHVlLCAndW5kZWZpbmVkJyk6XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtKGZpZWxkLCByZWFsVHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRUeXBlKGZpZWxkLCByZWFsVHlwZS50eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIC8qXG4gICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgY29tcCA9IG51bGwsXG4gICAgICBpc0NvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcCA9ICRjb21wb25lbnQuZ2V0KGZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBpZiAoIWluaGVyaXRGcm9tKGNvbXAuY29uc3RydWN0b3IubmFtZSwgdHlwZVJlZikpIHtcbiAgICAgICAgLy9pZiAoZ2V0Q2xhc3NOYW1lKGNvbXApICE9PSB0eXBlUmVmKSB7IHVuY29tbWVudCB0aGlzIGxpbmUgZm9yIGEgc3RyaWN0IG1vZGVcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gY29tcC5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3QgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgKGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSAmJiBmaWVsZCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMCk6XG4gICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpICYmIGZpZWxkICE9PSAnJzpcbiAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAvKlxuICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICBkYXRlID0gbnVsbCxcbiAgICAgIHR5cGVBcnJheSA9ICcnO1xuXG4gICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICBzd2l0Y2ggKHJlYWxUeXBlKSB7XG4gICAgICBjYXNlICdhbnknOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlU2NoZW1hID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGQpICE9PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZmllbGQpO1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoZ2V0UmVhbFR5cGUoZmllbGQpICE9PSB0eXBlU2NoZW1hICYmIGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FueScpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgdHlwZUFycmF5ID0gdHlwZVNjaGVtYVswXTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICBpc1ZhbGlkID0gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkW2ldLCB0eXBlQXJyYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKCFpc1JlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmIHR5cGVBcnJheSAhPT0gJ2FueScpIHtcbiAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkW2ldKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIC8vIENhc2Ugb2YgYW4gaW1wb3J0IG9mIGEgc3lzdGVtXG4gICAgICAgICAgICAgICAgICBpZiAoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5oZXJpdEZyb20oZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoJGNvbXBvbmVudC5nZXQoZmllbGRbaV0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRbaV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGxvZy5jYW5Ob3RZZXRWYWxpZGF0ZShmaWVsZFtpXSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmICghaW5oZXJpdEZyb20oZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoZmllbGRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW2ldID0gZmllbGRbaV0uaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsICdhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAkbG9nLnVua25vd25UeXBlKGZpZWxkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cblxuICAvLyB0eXBlXG4gIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICBpZiAoIWhhc1R5cGUoc2NoZW1hW2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSB8fCBmaWVsZE5hbWUgPT09ICdfY29yZScpIHtcblxuICAgICAgLy8gY2FzZSBvZiBfY29yZVxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gJ19jb3JlJykge1xuICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFuZGF0b3J5XG4gIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHkoZmllbGROYW1lKTtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHByZXBhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU9iamVjdChvYmplY3QsIHNjaGVtYSkge1xuICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgZmllbGQgPSBudWxsLFxuICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgLy8gbWFuZGF0b3J5ICYgZGVmYXVsdCB2YWx1ZVxuICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIGlmIChtYW5kYXRvcnkgPT09IGZhbHNlICYmICFoYXNUeXBlKGRlZmF1bHRWYWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldFNjaGVtYShuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICBpZiAoc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIG1vZGVsLlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBnZXRNb2RlbChuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuICBpZiAoc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdKSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIHR5cGUuXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUobmFtZSkge1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgaWYgKHN0b3JlLnR5cGVbbmFtZV0gJiYgc3RvcmUudHlwZVtuYW1lXSkge1xuICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUudHlwZVtuYW1lXSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gIHZhciByZXN1bHQgPSBzdG9yZS5tZXRhZGVmLnNjaGVtYTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHBhcmVudHMgb2YgYSBzY2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtBcnJheX0gaWQgaWQgb2YgdGhlIHBhcmVudHNcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdKSB7XG4gICAgcmVzdWx0ID0gW107XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbmhlcml0RnJvbShuYW1lLCBwYXJlbnROYW1lKSB7XG4gIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICAvKlxuICAgKiBcbiAgICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAqIEBtZXRob2QgX3NlYXJjaFBhcmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gX3NlYXJjaFBhcmVudChjbGFzc05hbWUsIGFuY2VzdG9yTmFtZSkge1xuICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2UsXG4gICAgICBwYXJlbnRzID0gW10sXG4gICAgICBpID0gMCxcbiAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhjbGFzc05hbWUpO1xuICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihhbmNlc3Rvck5hbWUpICE9PSAtMSkge1xuICAgICAgICBpc0FuY2VzdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlzQW5jZXN0b3IgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIGFuY2VzdG9yTmFtZSk7XG4gICAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNBbmNlc3RvcjtcbiAgfVxuXG4gIGlmIChuYW1lICE9PSBwYXJlbnROYW1lKSB7XG4gICAgcGFyZW50cyA9IGdldFBhcmVudHMobmFtZSk7XG4gICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YocGFyZW50TmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQgPSBfc2VhcmNoUGFyZW50KHBhcmVudHNbaV0sIHBhcmVudE5hbWUpO1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgbWV0YW1vZGVsLiA8YnI+XG4gKiBSdW50aW1lIG1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbnMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS13b3JrZmxvd1xuICogQGNsYXNzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgYSBzY2hlbWEgdG8gYWRkXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gc2NoZW1hO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IG1vZGVsLlxuICogQG1ldGhvZCBtb2RlbFxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZE1vZGVsIGEgbW9kZSB0byBhZGRcbiAqL1xuZXhwb3J0cy5tb2RlbCA9IG1vZGVsO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlIHR5cGUgdG8gYWRkXG4gKi9cbmV4cG9ydHMudHlwZSA9IHR5cGU7XG5cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG5cbi8qKlxuICogR2V0IGEgc2NoZW1hLlxuICogQG1ldGhvZCBnZXRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuZ2V0U2NoZW1hID0gZ2V0U2NoZW1hO1xuXG5cbi8qKlxuICogR2V0IGEgbW9kZWwuXG4gKiBAbWV0aG9kIGdldE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNb2RlbCA9IGdldE1vZGVsO1xuXG5cbi8qKlxuICogR2V0IHRoZSBkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGdldE1ldGFEZWZcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1ldGFkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNZXRhRGVmID0gZ2V0TWV0YURlZjtcblxuXG4vKipcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRQYXJlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmV4cG9ydHMuZ2V0UGFyZW50cyA9IGdldFBhcmVudHM7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5pbmhlcml0RnJvbSA9IGluaGVyaXRGcm9tO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICogQG1ldGhvZCBpc1ZhbGlkT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3QgdHJ1ZSBpZiB2YWxpZGF0aW9uIGlzIHN0cmljdFxuICogQHBhcmFtIHtCb29sZWFufSBjbGVhblJlZiB0cnVlIGlmIHdlIHJlbW92ZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaXNWYWxpZE9iamVjdCA9IGlzVmFsaWRPYmplY3Q7XG5cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gcHJlcGFyZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBzY2hlbWEgdGhhdCB2YWxpZGF0ZXMgdGhlIG9iamVjdFxuICovXG5leHBvcnRzLnByZXBhcmVPYmplY3QgPSBwcmVwYXJlT2JqZWN0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5leHBvcnRzLmlzVmFsaWRUeXBlID0gaXNWYWxpZFR5cGU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTY2hlbWF9IHNjaGVtYSBzY2hlbWEgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqL1xuZXhwb3J0cy5pc1ZhbGlkRW51bSA9IGlzVmFsaWRFbnVtO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmlzVmFsaWRTdGF0ZSA9IGlzVmFsaWRTdGF0ZTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhbiBldmVudFxuICovXG5leHBvcnRzLmlzRXZlbnQgPSBpc0V2ZW50O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaXNQcm9wZXJ0eSA9IGlzUHJvcGVydHk7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGxpbmsuXG4gKiBAbWV0aG9kIGlzTGlua1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGxpbmtcbiAqL1xuZXhwb3J0cy5pc0xpbmsgPSBpc0xpbms7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmlzQ29sbGVjdGlvbiA9IGlzQ29sbGVjdGlvbjtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBtZXRob2RcbiAqL1xuZXhwb3J0cy5pc01ldGhvZCA9IGlzTWV0aG9kO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBzdHJ1Y3R1cmUuXG4gKiBAbWV0aG9kIGlzU3RydWN0dXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHByb3BlcnR5IGlzIGEgc3RydWN0dXJlXG4gKi9cbmV4cG9ydHMuaXNTdHJ1Y3R1cmUgPSBpc1N0cnVjdHVyZTtcblxuXG4vKipcbiAqIEdldCBhIHR5cGUuXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMuZ2V0VHlwZSA9IGdldFR5cGU7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIFJ1bnRpbWUuIDxicj5cbiAqIEl0IGluaXRzIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBsb2FkcyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1zeXN0ZW1cbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQG1haW4gcnVudGltZVxuICogQGNsYXNzIHJ1bnRpbWVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGFkZCByZXF1aXJlIGF0IGdsb2JhbCBsZXZlbFxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdsb2JhbC5yZXF1aXJlID0gcmVxdWlyZTtcbn1cblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbiAgc3lzdGVtID0gJycsXG4gIGNoYW5uZWwgPSBudWxsO1xuXG5cbi8qIFBvbHlmaWxsICovXG4kaGVscGVyLnBvbHlmaWxsKCk7XG5cbi8qIEluaXQgTWV0YW1vZGVsICovXG5cblxuJG1ldGFtb2RlbC5pbml0KCk7XG5cblxuLyogSW5pdCBydW50aW1lIGZyb20gYSBzeXN0ZW0gKi9cblxuXG5zeXRlbUlkID0gJGRiLnN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5cbnN5c3RlbSA9ICRjb21wb25lbnQuZ2V0KHN5dGVtSWQpO1xuY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XG5cbnN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7XG5jaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3l0ZW1JZCk7XG5zeXN0ZW0uc3RhdGUoJ3Jlc29sdmVkJyk7XG5jaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcbmNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoc3l0ZW1JZCk7XG5cbnN5c3RlbS5tYWluKCk7IC8vIGRlcHJlY2F0ZWRcbnN5c3RlbS5zdGFydCgpO1xuXG5zeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBSdW50aW1lLiA8YnI+XG4gKiBJdCBpbml0cyBSdW50aW1lIG1ldGFtb2RlbCBhbmQgbG9hZHMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBSdW50aW1lIGluc3RhbmNlLlxuICogQHByb3BlcnR5IHJ1bnRpbWVcbiAqIEB0eXBlIFJ1bnRpbWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgncnVudGltZScpOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL2Rlc2lnbmZpcnN0LmlvL3N5c3RlbXJ1bnRpbWUvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE3IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zdGF0ZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXN0YXRlXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHNldChpZCwgc3RhdGUsIHBhcmFtZXRlcnMpIHtcbiAgc3RvcmVbaWRdID0ge1xuICAgIFwibmFtZVwiOiBzdGF0ZSxcbiAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICB9XG4gIH07XG4gICRkYi5zdG9yZS5SdW50aW1lU3RhdGVbaWRdID0ge1xuICAgIFwibmFtZVwiOiBzdGF0ZSxcbiAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICB9XG4gIH07XG59XG5cblxuLypcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHN0YXRlcyBvZiBhbGwgdGhlIGNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5zZXQgPSBzZXQ7XG5cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vZGVzaWduZmlyc3QuaW8vc3lzdGVtcnVudGltZS9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTcgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgUnVudGltZS4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBydW50aW1lLiA8YnI+XG4gKiBJZiB0aGUgZXJyb3IgY2FuIGJyZWFrIHRoZSBjb25zaXN0ZW5jeSBvZiB0aGUgY3VycmVudCBzeXN0ZW0sIHRoZSB3b3JrbG93IHdpbGwgc3RvcC5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtc3RhdGVcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtd29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLyoqXG4gKiBUaGUgUnVudGltZUVycm9yIGNsYXNzLlxuICogQGNsYXNzIFJ1bnRpbWVFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIG9mIHRoZSBlcnJvclxuICovXG5mdW5jdGlvbiBSdW50aW1lRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSBcIlJ1bnRpbWVFcnJvclwiO1xufVxuUnVudGltZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuUnVudGltZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJ1bnRpbWVFcnJvcjtcblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBtZXRob2QgZm9yIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gIHZhciBtZXRob2QgPSBudWxsLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDAsXG4gICAgbWluID0gMCxcbiAgICBtYXggPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSAndW5kZWZpbmVkJyB8fCBwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgfVxuICAgICAgICBtYXggPSBtYXggKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChtaW4pO1xuICAgIHJlc3VsdC5wdXNoKG1heCk7XG4gIH0gZWxzZSB7XG4gICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFxuICogU2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBub24gbWFuZGF0b3J5IHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIHNldERlZmF1bHRWYWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIGFyZ3VtZW50c1xuICogQHJldHVybiB7QXJyYXl9IGFyZ3VtZW50cyB3aXRoIGRlZmF1bHQgdmFsdWVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREZWZhdWx0VmFsdWUoaWQsIG1ldGhvZE5hbWUsIGFyZ3MpIHtcbiAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgaWYgKG1ldGhvZCkge1xuICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgdHlwZW9mIGFyZ3NbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSB0eXBlIHJldHVybmVkIGJ5IGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRSZXR1cm5UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgcmVzdWx0VHlwZSA9IG51bGwsXG4gICAgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICByZXN1bHRUeXBlID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV0ucmVzdWx0O1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChyZXN1bHRUeXBlKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0VHlwZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gIGlmICgkbWV0YW1vZGVsLmdldE1vZGVsKGlkKSkge1xuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpW21ldGhvZE5hbWVdO1xuICB9IGVsc2Uge1xuICAgICRsb2cudW5rbm93bk1vZGVsKGlkKTtcbiAgfVxuXG4gIGlmIChtZXRob2QpIHtcbiAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLnR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbCxcbiAgICBtZXRob2ROYW1lID0gcGFyYW1zLm1ldGhvZE5hbWUgfHwgJycsXG4gICAgbWV0aG9kUmVzdWx0ID0gbnVsbCxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLm1ldGhvZFJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgcmV0dXJuVHlwZSA9IGdldFJldHVyblR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcblxuICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSByZXR1cm5UeXBlID09PSAnYW55JzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHJldHVyblR5cGUgPT09ICdhcnJheSc6XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSwgbWV0aG9kTmFtZSwgcmV0dXJuVHlwZSwgdHlwZW9mIG1ldGhvZFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBhY3Rpb25zIG9mIHRoZSBzcGVjaWZpZWQgc3RhdGVcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIFJ1bnRpbWUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0V2ZW50IHRydWUgaWYgdGhlIHN0YXRlIGlzIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiB0aGUgYWN0aW9uc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhjb21wb25lbnQsIG5hbWUsIGlzRXZlbnQpIHtcbiAgdmFyIGFjdGlvbiA9ICRiZWhhdmlvci5nZXRBY3Rpb25zKGNvbXBvbmVudC5pZCgpLCBuYW1lKSxcbiAgICBwYXJlbnRzID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICBwYXJlbnQgPSBudWxsO1xuXG4gIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMoJGNvbXBvbmVudC5nZXQoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpLCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gJGNvbXBvbmVudC5nZXQocGFyZW50c1tpXSk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24uY29uY2F0KGdldEFjdGlvbnMocGFyZW50LCBuYW1lLCBpc0V2ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxvZy51bmtub3duQ29tcG9uZW50KHBhcmVudHNbaV0sIGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi5sZW5ndGgpIHtcbiAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gYW5kIG1ha2Ugc29tZSBEZXBlbmRlbmN5IEluamVjdGlvbiBpZiBpdCBpcyBhIGNvcmUgYWN0aW9uXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNFdmVudCBpcyB0aGUgYWN0aW9uIGEgY2FsbGJhY2sgb2YgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHJlc3VsdCBvZiB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNhbGxBY3Rpb24oY29tcG9uZW50LCBzdGF0ZSwgYWN0aW9uLCBwYXJhbXMsIGlzRXZlbnQpIHtcbiAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgaW5qZWN0ZWRQYXJhbXMgPSBbXSxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwO1xuXG4gIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgaWYgKCEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiYgISRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpICYmICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSkge1xuICAgIHBhcmFtcyA9IHNldERlZmF1bHRWYWx1ZShjb21wb25lbnRDbGFzc05hbWUsIHN0YXRlLCBwYXJhbXMpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChwYXJhbXNbaV0pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnVzZUNvcmVBUEkpIHtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJHN0YXRlKTtcbiAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGxvZyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KGFjdGlvbi5hY3Rpb24sIFtjb21wb25lbnRdLmNvbmNhdChpbmplY3RlZFBhcmFtcykpLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYWN0aW9uLmFjdGlvbi5hcHBseShjb21wb25lbnQsIGluamVjdGVkUGFyYW1zKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFJ1bnRpbWVFcnJvcikge1xuICAgICAgdGhyb3cgZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICBpZiAobmV3IEZ1bmN0aW9uKCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogY2FuIG5vdCBleGVjdXRlIG5ldyBGdW5jdGlvbigpIGluc3RydWN0aW9uIGluIHRoZSBjdXJyZW50IGNvbnRleHQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGhlbHBlci5nZXRSdW50aW1lKCkpIHtcbiAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5lcnJvcih7XG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAkbG9nLmFjdGlvbkludm9rZUVycm9yKHN0YXRlLCBjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhY3Rpb24gaGFzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyLlxuICogQG1ldGhvZCB2YWxpZFBhcmFtTnVtYmVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gYXBwbGllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYWN0aW9uIGlzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB2YWxpZFBhcmFtTnVtYmVycyhjbGFzc05hbWUsIHN0YXRlLCBhY3Rpb24pIHtcbiAgdmFyIGZ1bmMgPSAnJyxcbiAgICBiZWdpbkJvZHkgPSAtMSxcbiAgICBoZWFkZXIgPSAnJyxcbiAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgcGFyYW1zID0gW10sXG4gICAgcGFyYW1OdW1iZXIgPSAwLFxuICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbXSxcbiAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgaXNMaW5rID0gZmFsc2UsXG4gICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG4gIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICBwYXJhbXMgPSBbXTtcbiAgfVxuICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgLy8gZ2V0IHRoZSBudW1iZXIgbWluIGFuZCBtYXggb2YgdmFsaWQgcGFyYW1ldGVyc1xuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc05hbWUpO1xuICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gWzIsIDJdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNMaW5rOlxuICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtb2RlbE51bWJlclBhcmFtID0gZ2V0UGFyYW1OdW1iZXIoY2xhc3NOYW1lLCBzdGF0ZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNvbXBhcmVcbiAgaWYgKG1vZGVsTnVtYmVyUGFyYW1bMF0gPD0gcGFyYW1OdW1iZXIgJiYgcGFyYW1OdW1iZXIgPD0gbW9kZWxOdW1iZXJQYXJhbVsxXSkge1xuICAgIHJlc3VsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tQYXJhbXMocGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsLFxuICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJycsXG4gICAgcGFyYW1zTmFtZSA9IFtdLFxuICAgIHBhcmFtc1R5cGUgPSBbXSxcbiAgICBwYXJhbXNOdW1iZXIgPSBbXSxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICBsZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICBpID0gMCxcbiAgICBwYXJhbSA9IG51bGwsXG4gICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgaXNMaW5rID0gZmFsc2UsXG4gICAgaXNDb2xsZWN0aW9uID0gZmFsc2U7XG5cbiAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICBpZiAoYXJncyAmJiBhcmdzWzFdICYmIGFyZ3NbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtbJG1ldGFtb2RlbC5nZXRNb2RlbChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF1dLCAnc3RyaW5nJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdLCAnc3RyaW5nJ107XG4gICAgICB9XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMiwgMl07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaXNMaW5rOlxuICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIGNhc2Ugb2Ygb2JqZWN0XG4gIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICBpZiAobGVuZ3RoIDwgcGFyYW1zTnVtYmVyWzBdIHx8IHBhcmFtc051bWJlclsxXSA8IGxlbmd0aCkge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSwgbWV0aG9kTmFtZSk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwYXJhbSA9IGFyZ3NbaV07XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChpIDwgcGFyYW1zTnVtYmVyWzBdKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZShwYXJhbSwgcGFyYW1zVHlwZVtpXSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUsIHBhcmFtc05hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENhbGwgYW4gYWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhbiBldmVudC5cbiAqIEBtZXRob2QgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIGFjdGlvbihiZWhhdmlvcklkLCBwYXJhbXMpIHtcbiAgdmFyIGlzRXZlbnQgPSBmYWxzZSxcbiAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgaXNMaW5rID0gZmFsc2UsXG4gICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgYmVoYXZpb3JzID0gW10sXG4gICAgYmVoYXZpb3IgPSBudWxsLFxuICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgYmVoYXZpb3JzID0gJGRiLlJ1bnRpbWVCZWhhdmlvci5maW5kKHtcbiAgICBcIl9pZFwiOiBiZWhhdmlvcklkXG4gIH0pO1xuXG4gIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gIGlmIChiZWhhdmlvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChiZWhhdmlvci5jb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsoYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0NvbGxlY3Rpb24gfHwgaXNMaW5rKSB7XG4gICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBiZWhhdmlvci5zdGF0ZSwge1xuICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBiZWhhdmlvci51c2VDb3JlQVBJLFxuICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvbkZyb21NZW1vcnlcbiAgICAgICAgfSwgcGFyYW1zLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kLCBhIHByb3BlcnR5IG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYWN0aW9ucyBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGlucHV0cyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIGEgbWV0aG9kLCBjaGVjayBpZiB0aGUgb3V0cHV0IGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHN0YXRlKHBhcmFtcykge1xuXG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgcGFyYW1zLmNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgJyc7XG4gIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcbiAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbXTtcblxuICB2YXIgY29tcG9uZW50ID0gbnVsbCxcbiAgICBjdXJyZW50U3RhdGUgPSAnJyxcbiAgICBhY3Rpb25zID0gW10sXG4gICAgYWN0aW9uID0gbnVsbCxcbiAgICByZXN1bHQgPSBudWxsLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2UsXG4gICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgIGlzTGluayA9IGZhbHNlLFxuICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgIGlzRXZlbnQgPSBmYWxzZTtcblxuICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuXG4gIGlmIChjdXJyZW50U3RhdGUgPT09ICdkZXN0cm95Jykge1xuICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQpIHtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24ocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIGFjdGlvbnMgPSBnZXRBY3Rpb25zKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBpc0V2ZW50KTtcbiAgfVxuXG4gIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgaWYgKGNoZWNrUGFyYW1zKHtcbiAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICBcImFyZ3NcIjogcGFyYW1zLmRhdGFcbiAgICB9KSkge1xuXG4gICAgICBpZiAoIWlzRXZlbnQgJiZcbiAgICAgICAgIWlzUHJvcGVydHkgJiZcbiAgICAgICAgIWlzTGluayAmJlxuICAgICAgICAhaXNDb2xsZWN0aW9uKSB7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIGZhbHNlKTtcblxuICAgICAgICBjaGVja1Jlc3VsdCh7XG4gICAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgXCJtZXRob2RSZXN1bHRcIjogcmVzdWx0XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGxlbmd0aCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zW2ldO1xuICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzTGluayB8fCBpc0NvbGxlY3Rpb24pKSB7XG4gICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZnVuY3Rpb24gc3RvcChwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgIHBhcmFtcy5lcnJvciA9IGZhbHNlO1xuICB9XG4gIHBhcmFtcy5tZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UgfHwgJyc7XG5cbiAgZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcblxuICBpZiAocGFyYW1zLmVycm9yKSB7XG4gICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKCdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSAnICsgcGFyYW1zLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKCdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbXMubWVzc2FnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkIGJlY2F1c2UgJyArIHBhcmFtcy5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigncnVudGltZTogcnVudGltZSBoYXMgYmVlbiBzdG9wcGVkJyk7XG4gICAgfVxuICB9XG59XG5cblxuLypcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgJGxvZy53b3JrZmxvd1Jlc3RhcnRlZCgpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFJ1bnRpbWUuIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgb2YgUnVudGltZSBpbnN0YW5jZS4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogXG4gKiBXb3JrbG93Ojxicj5cbiAqIDxicj5cbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZCA8YnI+XG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2Qgb3IgYW4gZXZlbnQgPGJyPlxuICogMi4gU2VhcmNoIGlmIHRoZXJlIGlzIGEgYmVoYXZpb3Igd2l0aCBhbiBhY3Rpb24gZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIG5vdCBhbiBvZiBldmVudCwgY2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcblxuXG4vKipcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG5cblxuLyoqXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5leHBvcnRzLnJlc3RhcnQgPSByZXN0YXJ0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBjaGVja1BhcmFtcztcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXIuXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMudmFsaWRQYXJhbU51bWJlcnMgPSB2YWxpZFBhcmFtTnVtYmVycztcblxuXG4vKipcbiAqIENhbGwgYW4gYWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhbiBldmVudC5cbiAqIEBtZXRob2QgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMuYWN0aW9uID0gYWN0aW9uOyJdfQ==
