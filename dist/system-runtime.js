(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.runtime = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * System Runtime
 * 
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
                }, {
                    "name": "id",
                    "type": "string"
                }]
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
                }, {
                    "name": "behavior",
                    "type": "object"
                }]
            },
            "$designerUpdateBehavior": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "behavior",
                    "type": "object"
                }]
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
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "$editorUpdateComponent": {
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
            "$designerUpdateComponent": {
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
            "$editorDeleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "$designerDeleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "$designerCreateType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
            },
            "$editorUpdateType": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "type",
                    "type": "object"
                }]
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
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "$editorUpdateSchema": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "schema",
                    "type": "object"
                }]
            },
            "$editorUpdateSchemaId": {
                "params": [{
                    "name": "oldId",
                    "type": "string"
                }, {
                    "name": "newId",
                    "type": "string"
                }]
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
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "$editorUpdateModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "$designerUpdateModel": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "model",
                    "type": "object"
                }]
            },
            "$editorUpdateModelId": {
                "params": [{
                    "name": "oldId",
                    "type": "string"
                }, {
                    "name": "newId",
                    "type": "string"
                }]
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
                }, {
                    "name": "system",
                    "type": "object"
                }]
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
                }, {
                    "name": "component",
                    "type": "object"
                }]
            },
            "$runtimeDeleteComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }]
            },
            "$runtimeUpdateComponent": {
                "params": [{
                    "name": "id",
                    "type": "string"
                }, {
                    "name": "collection",
                    "type": "string"
                }, {
                    "name": "field",
                    "type": "string"
                }, {
                    "name": "value",
                    "type": "any"
                }]
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
                }, {
                    "name": "async",
                    "type": "boolean",
                    "mandatory": false,
                    "default": true
                }],
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
        "13010167f313f87": {
            "_id": "13010167f313f87",
            "component": "Runtime",
            "state": "system",
            "action": "function system(name) {\n    var RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n    \n    if (name) {\n        conf.master = true;\n        conf.name = name;\n        RuntimeSystem = this.require('RuntimeSystem');\n        system = new RuntimeSystem(conf);\n    } else {\n        result = $db.RuntimeSystem.find({\n            'master': true\n        });\n        if (result.length) {\n            systemId = result[0]._id;\n            system = $component.get(systemId);\n        }\n    }\n    return system;\n}",
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
            "action": "function system(system) {\n    return $db.system(system);\n}",
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
            "action": "function start() { \n  var subsystems = [],\n      systems = [],\n      system = null,\n      scripts = [],\n      script = null,\n      logLevel = 'warn',\n      i = 0,\n      length = 0;\n  \n  // in a browser\n  if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n      length = systems.length;\n      \n      // logger\n      scripts = document.querySelectorAll('script[log]');\n      if (scripts.length) {\n          logLevel = scripts[0].getAttribute('log');\n          this.require('logger').level(logLevel);\n      }\n      \n      // systems\n      for (i = 0; i < length; i++) {\n          system = systems[i];\n          \n          if (system.getAttribute('async') === 'false') {\n              this.require('runtime').install(system.href, false);\n          } else {\n              this.require('runtime').install(system.href, true);\n          }\n      }\n      \n      // designer\n      scripts = document.querySelectorAll('script[designer]');\n      if (scripts.length) {\n          this.require('admin').start();\n      }\n      \n      // ready event\n      if (length === 0) {\n         this.require('runtime').ready();\n      }\n  }\t\n}",
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
        "15643114f31bf40": {
            "_id": "15643114f31bf40",
            "component": "RuntimeSystemOSGi",
            "state": "state",
            "action": "function state(value) { \n  if (this.require('logger')) {\n\t  this.require('logger').debug('the state of the system \\'' + this.name() + '\\' is now \\'' + value + '\\'');\n  }\t\n}",
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
                "version": "1.8.11"
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
        "RuntimeSystem": {},
        "RuntimeChannel": {
            "channel": {
                "_id": "channel"
            }
        }
    },
    "name": "system-runtime",
    "version": "1.8.11",
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
                                    "data": [del[i], 'remove']
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
                        "data": [val.id(), 'add']
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

                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [val, 'remove']
                });

                isClass = type.indexOf('@') !== -1;

                if (isClass) {
                    result = store[val];
                } else {
                    result = val;
                }
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
            length = 0;

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
                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [result[i], 'remove']
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

        if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').insert({
                collection: classId,
                document: JSON.parse(JSON.stringify(config))
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
                                        "data": [realVal, 'reset']
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
                                    "data": [realVal, 'add']
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
                    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                        $helper.getRuntime().require('db').insert({
                            collection: this.name,
                            document: JSON.parse(JSON.stringify(obj))
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
 * System Runtime
 * 
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "'" + classInfo + ": expected type '" + expectedType + "' instead of type '" + type + "'");
    } else {
        getLogger().warn("invalid type for the result of method '" + methodName + "' on component '" + id + "'" + classInfo + ": expected type '" + expectedType + "'");
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
    getLogger().warn("invalid type for the parameter '" + paramName + "' when calling the method '" + methodName + "' on component '" + id + "'" + classInfo);
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
    getLogger().warn("invalid type for enumerated type '" + typeName + "': expected type '" + type + "' instead of type '" + typeof value + "'");
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
            delete mergedModel._id;
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
                            isValid = isValidObject(field[i], store.type[typeArray].schema);
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
 * https://system-runtime.github.io
 * 
 * Copyright 2016 Erwan Carriou
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
            paramsType = [$metamodel.getModel(componentClassName)[methodName].type[0], 'string'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9ydW50aW1lLmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGhEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbjdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3Z3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcnlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogU3lzdGVtIFJ1bnRpbWVcbiAqIFxuICogaHR0cHM6Ly9zeXN0ZW0tcnVudGltZS5naXRodWIuaW9cbiAqIFxuICogQ29weXJpZ2h0IDIwMTYgRXJ3YW4gQ2FycmlvdVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgUnVudGltZSBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zeXN0ZW1cbiAqIEBjbGFzcyBydW50aW1lLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuXG4vKlxuICogUnVudGltZSBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtSdW50aW1lU3lzdGVtfSBzeXN0ZW1cbiAqL1xudmFyIHN5c3RlbSA9IHtcbiAgICBcIm1vZGVsc1wiOiB7XG4gICAgICAgIFwiMTM4YTgxZmExZjE2NDM1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTM4YTgxZmExZjE2NDM1XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUFkbWluXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RhcnRcIjoge30sXG4gICAgICAgICAgICBcImRlc2lnbmVyV2luZG93XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTM1YzcxMDc4ODEwYWYyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTM1YzcxMDc4ODEwYWYyXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlU2NoZW1hTmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyU3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwiJGFwcExvYWRTeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVCZWhhdmlvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyVXBkYXRlQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lckRlbGV0ZUJlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZUNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lckNyZWF0ZVR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVUeXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlVHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVTY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVNjaGVtYUlkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbGRJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmV3SWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyRGVsZXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJDcmVhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZU1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZU1vZGVsSWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9sZElkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuZXdJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVNb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkYXBwTG9nRGVidWdcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ0luZm9cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ1dhcm5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJGFwcExvZ0Vycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRydW50aW1lQ3JlYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJHJ1bnRpbWVEZWxldGVDb21wb25lbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRydW50aW1lVXBkYXRlQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRzeXN0ZW1JbnN0YWxsZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtUmVzb2x2ZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtVW5pbnN0YWxsZWRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIkc3lzdGVtU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIiRzeXN0ZW1TdG9wcGVkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFmNDE0MTY3MTUxNGMyY1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmNDE0MTY3MTUxNGMyY1wiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwia2V5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge30sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwia2V5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdG9yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxNGM3YzEwNWIzMWExNjBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNGM3YzEwNWIzMWExNjBcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTY2OTcxZmQ5ZDEwN2ZkXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2Njk3MWZkOWQxMDdmZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU4MzIxZGNlZDEwMTRhXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW5rXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU4MzIxZGNlZDEwMTRhXCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIzNzUxY2I1OTFkZTI2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTIzNzUxY2I1OTFkZTI2XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXNlQ29yZUFQSVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlzQ29yZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib2ZmXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJlaGF2aW9ySWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlcXVpcmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjbGFzc0luZm9cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkBSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXJyb3JQYXJhbVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCIxOGE1MTE2OWQ3MTEyZDRcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbnNlcnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiSW5zZXJ0RXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiVXBkYXRlRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRiUmVtb3ZlRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxOGE1MTE2OWQ3MTEyZDRcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE2YjlkMWFjMjIxNmZmZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2YjlkMWFjMjIxNmZmZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGV2ZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxvZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwid2FyblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWJ1Z1wiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhbnlcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndhcm5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIjFkOWI2MTM5NDExYWE5MVwiOiB7XG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkOWI2MTM5NDExYWE5MVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTYyOGMxM2MyMjE1MmU2XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhbnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYW55XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2MjhjMTNjMjIxNTJlNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTc3YWMxMzY4OTE2MjlmXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTc3YWMxMzY4OTE2MjlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNzA1MjFiODg2MTQzODdcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiMC4wLjFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtb2RlbHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fSxcbiAgICAgICAgICAgIFwic3luY1wiOiB7fSxcbiAgICAgICAgICAgIFwibWFpblwiOiB7fSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcwNTIxYjg4NjE0Mzg3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDBiOTFlZDIyMTFiMTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDBiOTFlZDIyMTFiMTVcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lT1NHaVwiLFxuICAgICAgICAgICAgXCJpbnN0YWxsXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVuaW5zdGFsbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXR1c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiYnVuZGxlXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMWIyODExYjA5MjE0M2Y1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWIyODExYjA5MjE0M2Y1XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN5c3RlbU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhcnRcIjoge30sXG4gICAgICAgICAgICBcInN0b3BcIjoge30sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIm5vbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVuaW5zdGFsbFwiOiB7fSxcbiAgICAgICAgICAgIFwiYnVuZGxlXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgIFwiMTAzNzQxODA1ODFhNDFmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTAzNzQxODA1ODFhNDFmXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUFkbWluXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGVzaWduZXJXaW5kb3dcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTA0YWQxZjQ4NTE4Mzc2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTA0YWQxZjQ4NTE4Mzc2XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVN5c3RlbVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVTY2hlbWFcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlU2NoZW1hSWRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZWRpdG9yVXBkYXRlU2NoZW1hTmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVNb2RlbElkXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGVkaXRvclVwZGF0ZVR5cGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JEZWxldGVCZWhhdmlvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRlZGl0b3JVcGRhdGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZWRpdG9yRGVsZXRlQ29tcG9uZW50XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGFwcExvZ0RlYnVnXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGFwcExvZ0luZm9cIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkYXBwTG9nV2FyblwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRhcHBMb2dFcnJvclwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRhcHBMb2FkU3lzdGVtXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyU3luY1wiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lckNyZWF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlQ29tcG9uZW50XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyQ3JlYXRlVHlwZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lckNyZWF0ZVNjaGVtYVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lckNyZWF0ZU1vZGVsXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyRGVsZXRlU2NoZW1hXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyRGVsZXRlTW9kZWxcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVUeXBlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJGRlc2lnbmVyRGVsZXRlQmVoYXZpb3JcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJEZWxldGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJVcGRhdGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkZGVzaWduZXJVcGRhdGVNb2RlbFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRkZXNpZ25lclVwZGF0ZUJlaGF2aW9yXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHJ1bnRpbWVDcmVhdGVDb21wb25lbnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkcnVudGltZURlbGV0ZUNvbXBvbmVudFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRydW50aW1lVXBkYXRlQ29tcG9uZW50XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZW5kXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHN5c3RlbUluc3RhbGxlZFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRzeXN0ZW1SZXNvbHZlZFwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIiRzeXN0ZW1TdGFydGVkXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiJHN5c3RlbVN0b3BwZWRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCIkc3lzdGVtVW5pbnN0YWxsZWRcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJmYTgxODFjZTEyN2EwXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJmYTgxODFjZTEyN2EwXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzdG9yZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImdldFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzZXRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNsZWFyXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNoYW5nZWRcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJlMjExZDRjZDEyMGE2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJlMjExZDRjZDEyMGE2XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lT1NHaVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWFjMDcxODU2NDFmYTlmXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFjMDcxODU2NDFmYTlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYzAwYjEzYTFiMWJjOTJcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtb2RlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1ldGhvZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibGlua1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJsaW5rc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImV2ZW50c1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxYzAwYjEzYTFiMWJjOTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIjExMWRmMTFlMmIxOWZkZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjExMWRmMTFlMmIxOWZkZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW10sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm9uXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm9mZlwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5pdFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNzIzNTE2YTMwMTMyYWNcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJSdW50aW1lQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5zZXJ0XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcyMzUxNmEzMDEzMmFjXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMjY4ZjFkZGRkMWZlYTdcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGV2ZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkZWJ1Z1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJpbmZvXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIndhcm5cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTI2OGYxZGRkZDFmZWE3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNGNhYTFjNDY0MTRlZTFcIjoge1xuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVNZXNzYWdlXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJmcm9tXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0Y2FhMWM0NjQxNGVlMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTkzZjExNjZlYjE2NjA5XCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1vZGVsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5M2YxMTY2ZWIxNjYwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU4NzExZDZmMjE1ZTRiXCI6IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJSdW50aW1lU3RhdGVcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW10sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInBhcmFtZXRlcnNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTg3MTFkNmYyMTVlNGJcIlxuICAgICAgICB9LFxuICAgICAgICBcIjFjYjc2MWZhNDUxMGRjYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYjc2MWZhNDUxMGRjYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZVN5c3RlbU9TR2lcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1hc3RlclwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInNjaGVtYXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtb2RlbHNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJiZWhhdmlvcnNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudHNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1haW5cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU3OTMxZjdhMzFiNjFkXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU3OTMxZjdhMzFiNjFkXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiUnVudGltZUNvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpbnN0YWxsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInVuaW5zdGFsbFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzdG9wXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJidW5kbGVcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIjE0NWZlMTBjNzUxNDI5OFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0NWZlMTBjNzUxNDI5OFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIlJ1bnRpbWVTeXN0ZW1PU0dpXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIlJ1bnRpbWVDb21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJsb2NhdGlvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN0b3BcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidW5pbnN0YWxsXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImJ1bmRsZVwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwidHlwZXNcIjoge1xuICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY29sbGVjdGlvblwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY3NzXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNzc1wiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImRhdGVcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVycm9yUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHRtbFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJodG1sXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiamF2YXNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqYXZhc2NyaXB0XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwianNvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJqc29uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlua1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJsb2dcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibG9nXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIFwiZGVidWdcIixcbiAgICAgICAgICAgICAgICBcImluZm9cIixcbiAgICAgICAgICAgICAgICBcIndhcm5cIixcbiAgICAgICAgICAgICAgICBcImVycm9yXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZyb21cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwib3NnaVN0YXRlc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJvc2dpU3RhdGVzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogW1xuICAgICAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIFwiaW5zdGFsbGVkXCIsXG4gICAgICAgICAgICAgICAgXCJyZXNvbHZlZFwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRpbmdcIixcbiAgICAgICAgICAgICAgICBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwic3RvcHBpbmdcIixcbiAgICAgICAgICAgICAgICBcInVuaW5zdGFsbGVkXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImRiSW5zZXJ0RXZlbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNDhlZjFlMTk4MTBlNmRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRiSW5zZXJ0RXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkb2N1bWVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGJSZW1vdmVFdmVudFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5NTJlMWFjNDIxM2Y0YVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJSZW1vdmVFdmVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImlkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRiVXBkYXRlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZjVjNDEzMDk3MTE3NTJcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRiVXBkYXRlRXZlbnRcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWVsZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJiZWhhdmlvcnNcIjoge1xuICAgICAgICBcIjFjMDBjMTA3ZTAxYzliM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjMDBjMTA3ZTAxYzliM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQWRtaW5cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydCgpIHtcXG4gICAgdmFyIFJ1bnRpbWVDaGFubmVsID0gbnVsbCxcXG4gICAgICAgIGNoYW5uZWwgPSBudWxsLFxcbiAgICAgICAgZGIgPSB0aGlzLnJlcXVpcmUoJ2RiJyk7XFxuXFxuICAgIGlmICghdGhpcy5yZXF1aXJlKCdjaGFubmVsLWFkbWluJykpIHtcXG4gICAgICAgIFJ1bnRpbWVDaGFubmVsID0gdGhpcy5yZXF1aXJlKCdSdW50aW1lQ2hhbm5lbCcpO1xcbiAgICAgICAgY2hhbm5lbCA9IG5ldyBSdW50aW1lQ2hhbm5lbCh7XFxuICAgICAgICAgICAgJ19pZCc6ICdjaGFubmVsLWFkbWluJyxcXG4gICAgICAgICAgICAnX2NvcmUnOiB0cnVlXFxuICAgICAgICB9KTtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gZm9yIGpxdWVyeSBjb21wYXRpYmlsaXR5IGluIGVsZWN0cm9uXFxuICAgICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICAgICAgICBkZWxldGUgbW9kdWxlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY2hhbm5lbC5vbignc2VuZCcsIGZ1bmN0aW9uIHNlbmQobWVzc2FnZSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnYWRtaW4nKS5kZXNpZ25lcldpbmRvdygpLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCAnKicpO1xcbiAgICAgICAgfSwgZmFsc2UsIHRydWUpO1xcblxcbiAgICAgICAgLy8gc2NoZW1hIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZVNjaGVtYScsIGZ1bmN0aW9uICRkZXNpZ25lckNyZWF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yVXBkYXRlU2NoZW1hJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZVNjaGVtYShpZCwgc2NoZW1hKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuc2NoZW1hKHNjaGVtYSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJEZWxldGVTY2hlbWEnLCBmdW5jdGlvbiAkZGVzaWduZXJEZWxldGVTY2hlbWEoaWQpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgdmFyIHNlYXJjaCA9ICRkYi5SdW50aW1lU2NoZW1hLmZpbmQoeyAnX2lkJzogaWQgfSksXFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9ICcnLFxcbiAgICAgICAgICAgICAgICBtb2RlbElkID0gJyc7XFxuXFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lID0gc2VhcmNoWzBdLl9uYW1lO1xcbiAgICAgICAgICAgICAgICAkZGIuUnVudGltZVNjaGVtYS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuXFxuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYi5SdW50aW1lTW9kZWwuZmluZCh7ICdfbmFtZSc6IG1vZGVsTmFtZSB9KTtcXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBzZWFyY2hbMF0uX2lkO1xcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC5yZW1vdmUoeyAnX2lkJzogbW9kZWxJZCB9KTtcXG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwuZmluZCh7ICdfbmFtZSc6IG1vZGVsTmFtZSB9KTtcXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBzZWFyY2hbMF0uX2lkO1xcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVHZW5lcmF0ZWRNb2RlbC5yZW1vdmUoeyAnX2lkJzogbW9kZWxJZCB9KTtcXG4gICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIG1vZGVsIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZU1vZGVsJywgZnVuY3Rpb24gJGRlc2lnbmVyQ3JlYXRlTW9kZWwoaWQsIG1vZGVsKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykubW9kZWwobW9kZWwpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZU1vZGVsJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZU1vZGVsKGlkLCBtb2RlbCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLm1vZGVsKG1vZGVsKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lclVwZGF0ZU1vZGVsJywgZnVuY3Rpb24gJGRlc2lnbmVyVXBkYXRlTW9kZWwoaWQsIG1vZGVsKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykubW9kZWwobW9kZWwpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlTW9kZWwnLCBmdW5jdGlvbiAkZGVzaWduZXJEZWxldGVNb2RlbChpZCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB2YXIgc2VhcmNoID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHsgJ19pZCc6IGlkIH0pLFxcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWUgPSAnJyxcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9ICcnO1xcblxcbiAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZSA9IHNlYXJjaFswXS5fbmFtZTtcXG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNb2RlbC5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBzZWFyY2ggPSAkZGIuUnVudGltZUdlbmVyYXRlZE1vZGVsLmZpbmQoeyAnX25hbWUnOiBtb2RlbE5hbWUgfSk7XFxuICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgbW9kZWxJZCA9IHNlYXJjaFswXS5faWQ7XFxuICAgICAgICAgICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwucmVtb3ZlKHsgJ19pZCc6IG1vZGVsSWQgfSk7XFxuICAgICAgICAgICAgICAgICRjb21wb25lbnQucmVtb3ZlRnJvbU1lbW9yeShtb2RlbE5hbWUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLmNyZWF0ZSgpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ2RlYnVnJyk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIHR5cGUgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyQ3JlYXRlVHlwZScsIGZ1bmN0aW9uICRkZXNpZ25lckNyZWF0ZVR5cGUoaWQsIHR5cGUpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS50eXBlKHR5cGUpO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZVR5cGUnLCBmdW5jdGlvbiAkZWRpdG9yVXBkYXRlVHlwZShpZCwgdHlwZSkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbG9nZ2VyJykubGV2ZWwoJ3dhcm4nKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ21ldGFtb2RlbCcpLnR5cGUodHlwZSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcblxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlVHlwZScsIGZ1bmN0aW9uICRlZGl0b3JEZWxldGVUeXBlKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnd2FybicpO1xcbiAgICAgICAgICAgICRkYi5SdW50aW1lVHlwZS5yZW1vdmUoeyAnbmFtZSc6IGlkIH0pO1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbWV0YW1vZGVsJykuY3JlYXRlKCk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5sZXZlbCgnZGVidWcnKTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlVHlwZScsIGZ1bmN0aW9uICRkZXNpZ25lckRlbGV0ZVR5cGUoaWQpIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCd3YXJuJyk7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVUeXBlLnJlbW92ZSh7ICduYW1lJzogaWQgfSk7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtZXRhbW9kZWwnKS5jcmVhdGUoKTtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKCdkZWJ1ZycpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICAvLyBjb21wb25lbnQgY2hhbmdlIGV2ZW50c1xcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyQ3JlYXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGRlc2lnbmVyQ3JlYXRlQ29tcG9uZW50KG1vZGVsLCBjb21wb25lbnQpIHtcXG4gICAgICAgICAgICAkZGJbbW9kZWxdLmluc2VydChjb21wb25lbnQpO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yVXBkYXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbiwgY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiW2NvbGxlY3Rpb25dLnVwZGF0ZSh7ICdfaWQnOiBpZCB9LCBjb21wb25lbnQsIHsgJ3Vwc2VydCc6IHRydWUgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lclVwZGF0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uICRlZGl0b3JVcGRhdGVDb21wb25lbnQoaWQsIGNvbGxlY3Rpb24sIGNvbXBvbmVudCkge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS51cGRhdGUoeyAnX2lkJzogaWQgfSwgY29tcG9uZW50LCB7ICd1cHNlcnQnOiB0cnVlIH0pO1xcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlQ29tcG9uZW50JywgZnVuY3Rpb24gJGVkaXRvckRlbGV0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbikge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckRlbGV0ZUNvbXBvbmVudCcsIGZ1bmN0aW9uICRkZXNpZ25lckRlbGV0ZUNvbXBvbmVudChpZCwgY29sbGVjdGlvbikge1xcbiAgICAgICAgICAgICRkYltjb2xsZWN0aW9uXS5yZW1vdmUoeyAnX2lkJzogaWQgfSk7XFxuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcXG5cXG4gICAgICAgIC8vIGJlaGF2aW9yIGNoYW5nZSBldmVudHNcXG4gICAgICAgIGNoYW5uZWwub24oJyRkZXNpZ25lckNyZWF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gY3JlYXRlQmVoYXZpb3IoY29tcG9uZW50KSB7XFxuICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoY29tcG9uZW50KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGVkaXRvclVwZGF0ZUJlaGF2aW9yJywgZnVuY3Rpb24gJGVkaXRvclVwZGF0ZUJlaGF2aW9yKGlkLCBiZWhhdmlvcikge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmUoaWQpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5tYWluKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnc3RhcnQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJVcGRhdGVCZWhhdmlvcicsIGZ1bmN0aW9uICRkZXNpZ25lclVwZGF0ZUJlaGF2aW9yKGlkLCBiZWhhdmlvcikge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcXVpcmUoaWQpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZShpZCkuYWN0aW9uKGJlaGF2aW9yLmFjdGlvbik7XFxuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5tYWluKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnc3RhcnQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVpcmUoYmVoYXZpb3IuY29tcG9uZW50KS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxuICAgICAgICBjaGFubmVsLm9uKCckZWRpdG9yRGVsZXRlQmVoYXZpb3InLCBmdW5jdGlvbiAkZWRpdG9yRGVsZXRlQmVoYXZpb3IoaWQpIHtcXG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgY2hhbm5lbC5vbignJGRlc2lnbmVyRGVsZXRlQmVoYXZpb3InLCBmdW5jdGlvbiAkZWRpdG9yRGVsZXRlQmVoYXZpb3IoaWQpIHtcXG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7ICdfaWQnOiBpZCB9KTtcXG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xcblxcbiAgICAgICAgLy8gU3lzdGVtIERlc2lnbmVyIGV2ZW50XFxuICAgICAgICBjaGFubmVsLm9uKCckZGVzaWduZXJTeW5jJywgZnVuY3Rpb24gc3luYygpIHtcXG4gICAgICAgICAgICB2YXIgZGVzaWduZXJXaW5kb3cgPSB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3coKSxcXG4gICAgICAgICAgICAgICAgc3lzdGVtID0gbnVsbDtcXG5cXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2FkbWluJykuZGVzaWduZXJXaW5kb3cobnVsbCk7XFxuICAgICAgICAgICAgc3lzdGVtID0gSlNPTi5wYXJzZSh0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKCkpO1xcbiAgICAgICAgICAgIGRlc2lnbmVyV2luZG93ID0gdGhpcy5yZXF1aXJlKCdhZG1pbicpLmRlc2lnbmVyV2luZG93KGRlc2lnbmVyV2luZG93KTtcXG5cXG4gICAgICAgICAgICB0aGlzLiRhcHBMb2FkU3lzdGVtKHN5c3RlbSk7XFxuICAgICAgICB9LCBmYWxzZSwgdHJ1ZSk7XFxuICAgICAgICBcXG4gICAgICAgIC8vIERhdGFiYXNlIGluc2VydCBldmVudFxcbiAgICAgICAgZGIub24oJ2luc2VydCcsIGZ1bmN0aW9uIGluc2VydChldmVudCkge1xcbiAgICAgICAgICBpZiAoZXZlbnQuY29sbGVjdGlvbi5pbmRleE9mKCdSdW50aW1lJykgIT09IDApIHtcXG4gICAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKS4kcnVudGltZUNyZWF0ZUNvbXBvbmVudChldmVudC5jb2xsZWN0aW9uLCBldmVudC5kb2N1bWVudCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgXFxuICAgICAgICAgLy8gRGF0YWJhc2UgcmVtb3ZlIGV2ZW50XFxuICAgICAgICBkYi5vbigncmVtb3ZlJywgZnVuY3Rpb24gcmVtb3ZlKGV2ZW50KSB7XFxuICAgICAgICAgIGlmIChldmVudC5jb2xsZWN0aW9uLmluZGV4T2YoJ1J1bnRpbWUnKSAhPT0gMCkge1xcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpLiRydW50aW1lRGVsZXRlQ29tcG9uZW50KGV2ZW50LmlkLCBldmVudC5jb2xsZWN0aW9uKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuICAgICAgICBcXG4gICAgICAgICAvLyBEYXRhYmFzZSB1cGRhdGUgZXZlbnRcXG4gICAgICAgIGRiLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiB1cGRhdGUoZXZlbnQpIHtcXG4gICAgICAgICAgaWYgKGV2ZW50LmNvbGxlY3Rpb24uaW5kZXhPZignUnVudGltZScpICE9PSAwKSB7XFxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdjaGFubmVsJykuJHJ1bnRpbWVVcGRhdGVDb21wb25lbnQoZXZlbnQuaWQsIGV2ZW50LmNvbGxlY2lvbiwgZXZlbnQuZmllbGQsIGV2ZW50LnZhbHVlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xcbiAgICAgICAgICAgIHZhciBkYXRhID0gbnVsbDtcXG4gICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiZcXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGRhdGEuZnJvbSAhPT0gJ3VuZGVmaW5lZCcgJiZcXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBkYXRhLmRhdGEgIT09ICd1bmRlZmluZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyV2luZG93KGV2ZW50LnNvdXJjZSk7XFxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZU1lc3NhZ2UuaW5zZXJ0KGRhdGEpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xcblxcbiAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS5pbmZvKCdhZG1pbiBpcyBzdGFydGVkJyk7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmluZm8oJ2FkbWluIGlzIGFscmVhZHkgc3RhcnRlZCcpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjYTBmMTAyMDQxMmQ0ZlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYTBmMTAyMDQxMmQ0ZlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImdldFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBnZXQoa2V5KSB7XFxuICAgIHZhciByZXN1bHQgPSBudWxsO1xcbiAgICBcXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0b3JlKClba2V5XSkge1xcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zdG9yZSgpW2tleV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE2NzY0MTAwZDUxYjVmOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2NzY0MTAwZDUxYjVmOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3RvcmFnZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInNldFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xcbiAgICB2YXIgc3RvcmUgPSB0aGlzLnN0b3JlKCksXFxuICAgICAgICBpdGVtID0ge307XFxuICAgIFxcbiAgICBzdG9yZVtrZXldID0gdmFsdWU7XFxuICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICBcXG4gICAgaXRlbVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xcbiAgICBcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTsgXFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMzRiNjE2YjEwMTZmNjBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMzRiNjE2YjEwMTZmNjBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN0b3JhZ2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjbGVhclwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjbGVhcigpIHtcXG4gICAgdGhpcy5zdG9yZSh7fSk7XFxuICAgIFxcbiAgICBzd2l0Y2ggKHRydWUpIHtcXG4gICAgICAgIGNhc2UgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCc6XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7IFxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTRjN2YxYTg0MzFiM2Q1XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTRjN2YxYTg0MzFiM2Q1XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiaW5pdFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBpbml0KGNvbmYpIHtcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC8vIGluaXQgXFxuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxcbiAgICAgICAgICAgICAgICBzdG9yZSA9IHt9LFxcbiAgICAgICAgICAgICAgICBpID0gMCxcXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7ICAgIFxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgICAgICB0cnkge1xcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVba2V5c1tpXV0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXlzW2ldXSk7XFxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB0aGlzLnN0b3JlKHN0b3JlKTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAvLyBldmVudFxcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24gKGUpIHtcXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9LFxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSB0aGlzLnN0b3JlKCk7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlW2Uua2V5XSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSlcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIG9ialtlLmtleV0gPSB7fTtcXG4gICAgICAgICAgICAgICAgICAgIG9ialtlLmtleV0ub2xkVmFsdWUgPSBKU09OLnBhcnNlKGUub2xkVmFsdWUpO1xcbiAgICAgICAgICAgICAgICAgICAgb2JqW2Uua2V5XS5uZXdWYWx1ZSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZChvYmopO1xcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWE0OTIxYWM3MTEyYmQ0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWE0OTIxYWM3MTEyYmQ0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTdG9yYWdlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcXG4gICAgdmFyIHN0b3JlID0gdGhpcy5zdG9yZSgpO1xcbiAgICBcXG4gICAgZGVsZXRlIHN0b3JlW2tleV07XFxuICAgIHRoaXMuc3RvcmUoc3RvcmUpO1xcbiAgICBcXG4gICAgc3dpdGNoICh0cnVlKSB7XFxuICAgICAgICBjYXNlIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnOlxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7IFxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTMwMTAxNjdmMzEzZjg3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTMwMTAxNjdmMzEzZjg3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKG5hbWUpIHtcXG4gICAgdmFyIFJ1bnRpbWVTeXN0ZW0gPSBudWxsLFxcbiAgICBzeXN0ZW0gPSB7fSxcXG4gICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGNvbmYgPSB7fTtcXG4gICAgXFxuICAgIGlmIChuYW1lKSB7XFxuICAgICAgICBjb25mLm1hc3RlciA9IHRydWU7XFxuICAgICAgICBjb25mLm5hbWUgPSBuYW1lO1xcbiAgICAgICAgUnVudGltZVN5c3RlbSA9IHRoaXMucmVxdWlyZSgnUnVudGltZVN5c3RlbScpO1xcbiAgICAgICAgc3lzdGVtID0gbmV3IFJ1bnRpbWVTeXN0ZW0oY29uZik7XFxuICAgIH0gZWxzZSB7XFxuICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcXG4gICAgICAgICAgICAnbWFzdGVyJzogdHJ1ZVxcbiAgICAgICAgfSk7XFxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xcbiAgICAgICAgICAgIHN5c3RlbUlkID0gcmVzdWx0WzBdLl9pZDtcXG4gICAgICAgICAgICBzeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXN0ZW1JZCk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIHN5c3RlbTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU1MTQxZTQwMzEyY2Q4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU1MTQxZTQwMzEyY2Q4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnY29sbGVjdGlvbicpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7IFxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY2OTQxYTBjMDEyYzFmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY2OTQxYTBjMDEyYzFmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjb2xsZWN0aW9ucyhuYW1lKSB7XFxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEoKSksXFxuICAgIGl0ZW0gPSAnJyxcXG4gICAgcmVzdWx0ID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IFxcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IFxcbiAgICAgICAgaXRlbSA9IGtleXNbaV07IFxcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdjb2xsZWN0aW9uJykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWVmNzExYjQxNzFjODQ5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWVmNzExYjQxNzFjODQ5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBldmVudChuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAnZXZlbnQnKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH0gXFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWJhZTUxYjZlZDFkMjVjXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWJhZTUxYjZlZDFkMjVjXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnRzKG5hbWUpIHtcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIFxcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcXG4gICAgXFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ2V2ZW50Jykge1xcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xcbiAgICAgICAgfVxcbiAgICB9IFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTlhYzIxMjUyMjE1MjhiXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTlhYzIxMjUyMjE1MjhiXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaW5rXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxpbmsobmFtZSkge1xcbiAgICB2YXIgcmVzdWx0ID0ge307XFxuICAgIFxcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ2xpbmsnKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE3ZWQyMWRmYzAxYjhlOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE3ZWQyMWRmYzAxYjhlOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibGlua3NcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGlua3MobmFtZSkgeyBcXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYSgpKSxcXG4gICAgaXRlbSA9ICcnLFxcbiAgICByZXN1bHQgPSBbXSxcXG4gICAgaSA9IDAsXFxuICAgIGxlbmd0aCA9IDA7XFxuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBpdGVtID0ga2V5c1tpXTtcXG4gICAgICAgIGlmICh0aGlzLnNjaGVtYSgpW2l0ZW1dID09PSAnbGluaycpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTFjZTMxOGE1NjFhYzYxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTFjZTMxOGE1NjFhYzYxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kKG5hbWUpIHtcXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xcbiAgICBpZiAodGhpcy5zY2hlbWEoKVtuYW1lXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICAgIHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJmZjIxOTBhMDE4MDQ2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJmZjIxOTBhMDE4MDQ2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZHMobmFtZSkge1xcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgaXRlbSA9IGtleXNbaV07XFxuICAgICAgICBpZiAodGhpcy5zY2hlbWEoKVtpdGVtXSA9PT0gJ21ldGhvZCcpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSBcXG4gICAgXFxuICAgIHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDI4ZDE2ODFlMWZkNThcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDI4ZDE2ODFlMWZkNThcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnRpZXNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydGllcyhuYW1lKSB7IFxcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hKCkpLFxcbiAgICBpdGVtID0gJycsXFxuICAgIHJlc3VsdCA9IFtdLFxcbiAgICBpID0gMCxcXG4gICAgbGVuZ3RoID0gMDtcXG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XFxuICAgIFxcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGl0ZW0gPSBrZXlzW2ldO1xcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hKClbaXRlbV0gPT09ICdwcm9wZXJ0eScpIHtcXG4gICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcXG4gICAgICAgIH1cXG4gICAgfSByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMThlZWIxMGM1MzE5MzY4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMThlZWIxMGM1MzE5MzY4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBwcm9wZXJ0eShuYW1lKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fTtcXG4gICAgXFxuICAgIGlmICh0aGlzLnNjaGVtYSgpW25hbWVdID09PSAncHJvcGVydHknKSB7XFxuICAgICAgICByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07XFxuICAgIH1cXG4gICAgcmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiYTcyMTIwMTExNGI2YlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiYTcyMTIwMTExNGI2YlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZXN0cm95KCkge1xcbiAgICAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTU0ODYxODZmNDFhNDhjXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTU0ODYxODZmNDFhNDhjXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJvZmZcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7XFxuICAgIHZhciBhcmdzID0gW10sXFxuICAgIGkgPSAwLFxcbiAgICBsZW5ndGggPSAwO1xcbiAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xcbiAgICBcXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aCAtIDc7IGkrKykge1xcbiAgICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XFxuICAgIH1cXG4gICAgXFxuICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xcbiAgICAgICAgXFxcImNvbXBvbmVudFxcXCI6IHRoaXMsIFxcbiAgICAgICAgXFxcIm1ldGhvZE5hbWVcXFwiOiBcXFwib2ZmXFxcIiwgXFxuICAgICAgICBcXFwiYXJnc1xcXCI6IGFyZ3NcXG4gICAgICAgIH0pKSB7XFxuICAgICAgICBcXG4gICAgICAgIGlmIChzdGF0ZSB8fCBiZWhhdmlvcklkKSB7XFxuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKSB7XFxuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICAgICAgXFxcImJlaGF2aW9ySWRcXFwiOiBiZWhhdmlvcklkLCBcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSwgXFxuICAgICAgICAgICAgICAgICAgICBcXFwic3RhdGVcXFwiOiBzdGF0ZVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9IGVsc2UgeyBcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdsb2dnZXInKS53YXJuKFxcXCJpbnZva2UgXFxcXCdvZmZcXFxcJyBtZXRob2Qgb2YgY29tcG9uZW50ICdcXFwiICsgdGhpcy5pZCgpICsgXFxcIicgd2l0aCBhbiBpbnZhbGlkIHN0YXRlICdcXFwiICsgc3RhdGUgKyBcXFwiJ1xcXCIpOyBcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xcbiAgICAgICAgICAgICAgICBcXFwiY29tcG9uZW50SWRcXFwiOiB0aGlzLmlkKClcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZGEwYTE3ODc4MTA0YzNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZGEwYTE3ODc4MTA0YzNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlcXVpcmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVxdWlyZShpZCkge1xcbiAgICByZXR1cm4gJGNvbXBvbmVudC5nZXQoaWQpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTUxMTFkMTdhMTgwMGNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTUxMTFkMTdhMTgwMGNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY29sbGVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY29sbGVjdGlvbnMoKSB7XFxuICAgIHZhciByZXN1bHQgPSB7fSxcXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJztcXG4gICAgXFxuICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gJGRiLnN0b3JlKSB7XFxuICAgICAgICBpZiAoJGRiLnN0b3JlLmhhc093blByb3BlcnR5KGNvbGxlY3Rpb25OYW1lKSAmJiBjb2xsZWN0aW9uTmFtZS5pbmRleE9mKCdSdW50aW1lJykgIT09IDApIHtcXG4gICAgICAgICAgICByZXN1bHRbY29sbGVjdGlvbk5hbWVdID0gJGRiW2NvbGxlY3Rpb25OYW1lXTtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTViZjE2N2NhMWI2MWVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTViZjE2N2NhMWI2MWVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZURhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3Vic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHtcXG4gICAgcmV0dXJuICRkYi5zdWJzeXN0ZW0ocGFyYW1zKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTVhYjExMTJlODFiMWI0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTVhYjExMTJlODFiMWI0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVEYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0oc3lzdGVtKSB7XFxuICAgIHJldHVybiAkZGIuc3lzdGVtKHN5c3RlbSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkOTkzMTA4ZmExOGVmMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkOTkzMTA4ZmExOGVmMlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTG9nZ2VyXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVidWdcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xcbiAgICBpZiAodGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgICAgICBjb25zb2xlLmxvZygncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgICB9XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTM3YTE4OGUxMWZlNzNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTM3YTE4OGUxMWZlNzNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcXG4gICAgY29uc29sZS5lcnJvcigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWVkZDIxZTEyYTE2NTM0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWVkZDIxZTEyYTE2NTM0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJpbmZvXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xcbiAgICBpZiAodGhpcy5sZXZlbCgpID09PSAnaW5mbycgfHwgdGhpcy5sZXZlbCgpID09PSAnZGVidWcnKSB7XFxuICAgICAgICBjb25zb2xlLmluZm8oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcXG4gICAgfVxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQxZjIxNDNkMzEyMmE0XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQxZjIxNDNkMzEyMmE0XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVMb2dnZXJcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsZXZlbFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsZXZlbCh2YWwpIHtcXG4gICAgJGxvZy5sZXZlbCh2YWwpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOTI0MDFiYWIyMTMwNGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOTI0MDFiYWIyMTMwNGVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUxvZ2dlclwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIndhcm5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XFxuICAgIGlmICh0aGlzLmxldmVsKCkgPT09ICdpbmZvJyB8fCB0aGlzLmxldmVsKCkgPT09ICd3YXJuJyB8fCB0aGlzLmxldmVsKCkgPT09ICdkZWJ1ZycpIHtcXG4gICAgICAgIGNvbnNvbGUud2FybigncnVudGltZTogJyArIG1lc3NhZ2UpO1xcbiAgICB9IFxcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTFmYzcxNWUyZjFhMzFlXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTFmYzcxNWUyZjFhMzFlXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjcmVhdGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gY3JlYXRlKCkge1xcbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTIzMmYxZjEwNzE0MmNmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTIzMmYxZjEwNzE0MmNmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVNZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtb2RlbFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBtb2RlbChtb2RlbCkge1xcbiAgICByZXR1cm4gJG1ldGFtb2RlbC5tb2RlbChtb2RlbCk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzNjU0MTJmNjkxNTNkMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzNjU0MTJmNjkxNTNkMlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHtcXG4gICAgcmV0dXJuICRtZXRhbW9kZWwuc2NoZW1hKHNjaGVtYSk7XFxufVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE5NGRiMTQ3ZmUxNjFhMlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5NGRiMTQ3ZmUxNjFhMlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwidHlwZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiB0eXBlKHR5cGUpIHtcXG4gICAgcmV0dXJuICRtZXRhbW9kZWwudHlwZSh0eXBlKTtcXG59XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTI5ZjcxNTY4NzE3YTIyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTI5ZjcxNTY4NzE3YTIyXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTeXN0ZW1cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeW5jXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5bmMoKSB7XFxuICAgIHZhciBzeXN0ZW0gPSBKU09OLnBhcnNlKCRkYi5zeXN0ZW0oKSk7XFxuICAgIFxcbiAgICB0aGlzLnNjaGVtYXMoc3lzdGVtLnNjaGVtYXMpO1xcbiAgICB0aGlzLnR5cGVzKHN5c3RlbS50eXBlcyk7XFxuICAgIHRoaXMuYmVoYXZpb3JzKHN5c3RlbS5iZWhhdmlvcnMpO1xcbiAgICB0aGlzLmNvbXBvbmVudHMoc3lzdGVtLmNvbXBvbmVudHMpO1xcbn1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZWY5NTFmMTQxMWI4OTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZWY5NTFmMTQxMWI4OTVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJpbnN0YWxsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGluc3RhbGwodXJsLCBhc3luYykgeyBcXG4gIHZhciBpbXBvcnRlZFN5c3RlbSA9IG51bGwsXFxuICAgICAgc3lzdGVtID0ge30sXFxuICAgICAgc3lzdGVtSWQgPSAnJyxcXG4gICAgICBjYWxsYmFja0xvYWQgPSBudWxsLFxcbiAgICAgIHhociA9IG51bGwsXFxuICAgICAgcmVzdWx0ID0gJycsXFxuICAgICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuXFxuICBpZiAodHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcXG4gICAgaW1wb3J0ZWRTeXN0ZW0gPSB1cmw7XFxuICB9IGVsc2Uge1xcbiAgICBpZiAodXJsLmluZGV4T2YoJ3snKSA9PT0gMCkge1xcbiAgICAgIGltcG9ydGVkU3lzdGVtID0gSlNPTi5wYXJzZSh1cmwpO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIGlmIChpbXBvcnRlZFN5c3RlbSkge1xcbiAgICBzeXN0ZW1JZCA9IHRoaXMucmVxdWlyZSgnZGInKS5zeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pOyBcXG4gICAgaWYgKHN5c3RlbUlkKSB7XFxuICAgICAgc3lzdGVtID0gdGhpcy5yZXF1aXJlKHN5c3RlbUlkKTtcXG4gICAgICBcXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcXG4gICAgICAgIHN5c3RlbS5sb2NhdGlvbih1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW0uc3RhdGUoJ2luc3RhbGxlZCcpOyAgICBcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1JbnN0YWxsZWQoc3lzdGVtSWQpO1xcbiAgICAgIHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICBjaGFubmVsLiRzeXN0ZW1SZXNvbHZlZChzeXN0ZW1JZCk7XFxuICAgICAgXFxuICAgICAgcmVzdWx0ID0gc3lzdGVtSWQ7XFxuICAgIH1cXG4gIH0gZWxzZSB7ICAgXFxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xcbiAgICAgIGlmICh1cmwuaW5kZXhPZignLmpzb24nKSAhPT0gLTEpIHtcXG4gICAgICAgIHN5c3RlbSA9IGdsb2JhbC5yZXF1aXJlKGdsb2JhbC5wcm9jZXNzLmVudi5QV0QgKyAnLycgKyB1cmwpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBzeXN0ZW0gPSBnbG9iYWwucmVxdWlyZSh1cmwpO1xcbiAgICAgIH1cXG4gICAgICBzeXN0ZW1JZCA9IHRoaXMucmVxdWlyZSgnZGInKS5zeXN0ZW0oc3lzdGVtKTtcXG4gICAgICBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoc3lzdGVtSWQpO1xcbiAgICAgIFxcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xcbiAgICAgICAgc3lzdGVtLmxvY2F0aW9uKHVybCk7XFxuICAgICAgfVxcbiAgICAgIHN5c3RlbS5zdGF0ZSgnaW5zdGFsbGVkJyk7ICAgIFxcbiAgICAgIGNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXN0ZW1JZCk7XFxuICAgICAgc3lzdGVtLnN0YXRlKCdyZXNvbHZlZCcpO1xcbiAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c3RlbUlkKTtcXG4gICAgICBcXG4gICAgICByZXN1bHQgPSBzeXN0ZW1JZDtcXG4gICAgfSBlbHNlIHtcXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcXG4gICAgICBjYWxsYmFja0xvYWQgPSBmdW5jdGlvbiBjYWxsYmFja0xvYWQoc3lzdGVtLCB1cmwpIHtcXG4gICAgICAgIHZhciBzeXNJZCA9ICRkYi5zeXN0ZW0oc3lzdGVtKSxcXG4gICAgICAgICAgICBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCksXFxuICAgICAgICAgICAgY2hhbm5lbCA9ICRjb21wb25lbnQuZ2V0KCdjaGFubmVsJyk7XFxuICAgICAgICAgICAgXFxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHsgICAgXFxuICAgICAgICAgIHN5cy5sb2NhdGlvbih1cmwpOyAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIHN5cy5zdGF0ZSgnaW5zdGFsbGVkJyk7ICAgIFxcbiAgICAgICAgY2hhbm5lbC4kc3lzdGVtSW5zdGFsbGVkKHN5c0lkKTtcXG4gICAgICAgIHN5cy5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gICAgICAgIGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5c0lkKTtcXG4gICAgICAgIFxcbiAgICAgICAgcmVzdWx0ID0gc3lzSWQ7XFxuICAgICAgfTtcXG4gICAgICBcXG4gICAgICBpZiAoYXN5bmMpIHtcXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XFxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICAgICAgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSwgdXJsKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuICAgICAgICB4aHIuc2VuZChudWxsKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7XFxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XFxuICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSksIHVybCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNGMxNTE3YjcxMWNiNzhcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNGMxNTE3YjcxMWNiNzhcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ1bmluc3RhbGxcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdW5pbnN0YWxsKGlkKSB7IFxcblxcdHZhciBzZWFyY2ggPSB7fSxcXG5cXHQgICAgc3lzdGVtID0gbnVsbCxcXG5cXHQgICAgYmVoYXZpb3JJZCA9ICcnLFxcblxcdCAgICBjb2xsZWN0aW9uID0gICcnLFxcblxcdCAgICBjb21wb25lbnRJZCA9ICcnLFxcblxcdCAgICBsZW5ndGggPSAwLFxcblxcdCAgICBpID0gMCxcXG5cXHQgICAgY29yZUNvbXBvbmVudHMgPSBbJ2FkbWluJywgJ2NoYW5uZWwnLCAnZGInLCAnbG9nZ2VyJywgJ21ldGFtb2RlbCcsICdydW50aW1lJ107XFxuXFx0XFxuXFx0c2VhcmNoID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XFxuXFx0ICAnX2lkJzogaWRcXG5cXHR9KTtcXG5cXHRcXG5cXHRpZiAoc2VhcmNoLmxlbmd0aCkge1xcblxcdCAgc3lzdGVtID0gc2VhcmNoWzBdO1xcblxcdCAgLy8gcmVtb3ZlIGJlaGF2aW9yc1xcblxcdCAgaWYgKHN5c3RlbS5iZWhhdmlvcnMpIHtcXG5cXHQgICAgZm9yIChiZWhhdmlvcklkIGluIHN5c3RlbS5iZWhhdmlvcnMpIHtcXG5cXHQgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7IFxcblxcdCAgICAgICAgJ19pZCc6IHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF0uX2lkXFxuXFx0ICAgICAgfSk7XFxuXFx0ICAgIH1cXG5cXHQgIH1cXG5cXHQgIC8vIHJlbW92ZSBjb21wb25lbnRzXFxuXFx0ICBpZiAoc3lzdGVtLmNvbXBvbmVudHMpIHtcXG5cXHQgICAgZm9yIChjb2xsZWN0aW9uIGluIHN5c3RlbS5jb21wb25lbnRzKSB7XFxuXFx0ICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBzeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uXSkge1xcblxcdCAgICAgICAgaWYgKGNvcmVDb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50SWQpID09PSAtMSkge1xcbiAgXFx0ICAgICAgICAkZGJbY29sbGVjdGlvbl0ucmVtb3ZlKHsgXFxuICBcXHQgICAgICAgICAgJ19pZCc6IGNvbXBvbmVudElkXFxuICBcXHQgICAgICAgIH0pO1xcblxcdCAgICAgICAgfVxcblxcdCAgICAgIH1cXG5cXHQgICAgfVxcblxcdCAgfVxcblxcdH1cXG5cXHRcXG5cXHR0aGlzLnJlcXVpcmUoaWQpLnN0YXRlKCd1bmluc3RhbGxlZCcpO1xcblxcdGNoYW5uZWwuJHN5c3RlbVVuaW5zdGFsbGVkKGlkKTtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNiOWQxMDNkNDFkZDk3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNiOWQxMDNkNDFkZDk3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN0YXJ0XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0YXJ0KCkgeyBcXG4gIHZhciBzdWJzeXN0ZW1zID0gW10sXFxuICAgICAgc3lzdGVtcyA9IFtdLFxcbiAgICAgIHN5c3RlbSA9IG51bGwsXFxuICAgICAgc2NyaXB0cyA9IFtdLFxcbiAgICAgIHNjcmlwdCA9IG51bGwsXFxuICAgICAgbG9nTGV2ZWwgPSAnd2FybicsXFxuICAgICAgaSA9IDAsXFxuICAgICAgbGVuZ3RoID0gMDtcXG4gIFxcbiAgLy8gaW4gYSBicm93c2VyXFxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xcbiAgICAgIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7XFxuICAgICAgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7XFxuICAgICAgXFxuICAgICAgLy8gbG9nZ2VyXFxuICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtsb2ddJyk7XFxuICAgICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XFxuICAgICAgICAgIGxvZ0xldmVsID0gc2NyaXB0c1swXS5nZXRBdHRyaWJ1dGUoJ2xvZycpO1xcbiAgICAgICAgICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmxldmVsKGxvZ0xldmVsKTtcXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLy8gc3lzdGVtc1xcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xcbiAgICAgICAgICBzeXN0ZW0gPSBzeXN0ZW1zW2ldO1xcbiAgICAgICAgICBcXG4gICAgICAgICAgaWYgKHN5c3RlbS5nZXRBdHRyaWJ1dGUoJ2FzeW5jJykgPT09ICdmYWxzZScpIHtcXG4gICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmluc3RhbGwoc3lzdGVtLmhyZWYsIGZhbHNlKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLmluc3RhbGwoc3lzdGVtLmhyZWYsIHRydWUpO1xcbiAgICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC8vIGRlc2lnbmVyXFxuICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtkZXNpZ25lcl0nKTtcXG4gICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcXG4gICAgICAgICAgdGhpcy5yZXF1aXJlKCdhZG1pbicpLnN0YXJ0KCk7XFxuICAgICAgfVxcbiAgICAgIFxcbiAgICAgIC8vIHJlYWR5IGV2ZW50XFxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xcbiAgICAgICAgIHRoaXMucmVxdWlyZSgncnVudGltZScpLnJlYWR5KCk7XFxuICAgICAgfVxcbiAgfVxcdFxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMDVmMjE5YzY4MTM2NDNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMDVmMjE5YzY4MTM2NDNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGFydFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGFydChpZCkgeyBcXG5cXHR2YXIgc3lzdGVtID0gdGhpcy5yZXF1aXJlKGlkKSxcXG5cXHQgICAgY2hhbm5lbCA9IHRoaXMucmVxdWlyZSgnY2hhbm5lbCcpO1xcblxcdFxcblxcdGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJyB8fCBzeXN0ZW0uc3RhdGUoKSA9PT0gJ2luc3RhbGxlZCcpIHtcXG4gIFxcdHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gIFxcdGlmIChzeXN0ZW0ubWFpbikge1xcbiAgXFx0ICBzeXN0ZW0ubWFpbigpO1xcbiAgXFx0fVxcbiAgXFx0aWYgKHN5c3RlbS5zdGFydCkge1xcbiAgXFx0ICBzeXN0ZW0uc3RhcnQoKTtcXG4gIFxcdH1cXG4gIFxcdGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoaWQpO1xcbiAgXFx0c3lzdGVtLnN0YXRlKCdhY3RpdmUnKTtcXG5cXHR9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYTgxYTFmMDBkMTcyNjlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYTgxYTFmMDBkMTcyNjlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdG9wXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN0b3AoaWQpIHsgXFxuXFx0dmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShpZCksXFxuXFx0ICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG5cXHQgICAgXFxuXFx0aWYgKHN5c3RlbS5zdGF0ZSgpID09PSAnYWN0aXZlJykge1xcbiAgXFx0c3lzdGVtLnN0YXRlKCdzdG9wcGluZycpO1xcbiAgXFx0aWYgKHN5c3RlbS5zdG9wKSB7XFxuICBcXHQgIHN5c3RlbS5zdG9wKCk7XFxuICBcXHR9XFxuICBcXHRjaGFubmVsLiRzeXN0ZW1TdG9wcGVkKGlkKTtcXG4gIFxcdHN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcXG4gIFxcdGNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKGlkKTtcXG5cXHR9XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTY4NTFiNjAyMTI4ZDFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTY4NTFiNjAyMTI4ZDFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3RhdHVzKCkgeyBcXG5cXHR2YXIgcmVzdWx0ID0ge30sXFxuXFx0ICAgIHN5c3RlbSA9IG51bGwsXFxuXFx0ICAgIGxlbmd0aCA9IDAsXFxuXFx0ICAgIGkgPSAwO1xcblxcdFxcblxcdHN5c3RlbXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHt9KTtcXG5cXHRcXG5cXHRsZW5ndGggPSBzeXN0ZW1zLmxlbmd0aDtcXG5cXHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcXG5cXHQgICAgc3lzdGVtID0gc3lzdGVtc1tpXTtcXG5cXHQgICAgcmVzdWx0W3N5c3RlbS5uYW1lXSA9IHtcXG5cXHQgICAgICAnaWQnOiBzeXN0ZW0uX2lkLFxcblxcdCAgICAgICdzdGF0ZSc6IHN5c3RlbS5zdGF0ZSxcXG5cXHQgICAgICAnbmFtZSc6IHN5c3RlbS5uYW1lLFxcblxcdCAgICAgICd2ZXJzaW9uJzogc3lzdGVtLnZlcnNpb24sXFxuXFx0ICAgICAgJ2xvY2F0aW9uJzogc3lzdGVtLmxvY2F0aW9uLFxcblxcdCAgICAgICdtYXN0ZXInOiBzeXN0ZW0ubWFzdGVyXFxuXFx0ICAgIH07XFxuXFx0fVxcblxcdFxcblxcdHJldHVybiByZXN1bHQ7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEyZTQ5MTg1OWMxMzkxOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEyZTQ5MTg1OWMxMzkxOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lQ2hhbm5lbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIiRzeXN0ZW1TdGFydGVkXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1TdGFydGVkKGlkKSB7IFxcbiAgdmFyIHN5c3RlbXMgPSBudWxsO1xcbiAgICBcXG4gIGlmIChpZCAhPT0gJ2U4OWM2MTdiNmIxNWQyNCcpIHtcXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcXG4gICAgICBzeXN0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9c3lzdGVtXScpO1xcbiAgICAgICAgIFxcbiAgICAgIGlmICgkc3RhdGUuZ2V0KCdydW50aW1lJykgJiYgJHN0YXRlLmdldCgncnVudGltZScpLm5hbWUgPT09ICdyZWFkeScpIHsgICAgXFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCArIDEgPT09ICRkYi5SdW50aW1lU3lzdGVtLmNvdW50KCkpIHtcXG4gICAgICAgICAgJGNvbXBvbmVudC5nZXQoJ3J1bnRpbWUnKS5yZWFkeSgpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZTkwMjFiZDRlMWJjNmVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZTkwMjFiZDRlMWJjNmVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZUNoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCIkc3lzdGVtSW5zdGFsbGVkXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uICRzeXN0ZW1JbnN0YWxsZWQoaWQpIHtcXG4gICAgdmFyIHN5c3RlbXMgPSBudWxsLFxcbiAgICAgICAgZGVwZW5kZW5jaWVzID0gW10sXFxuICAgICAgICBtYXN0ZXIgPSBbXSxcXG4gICAgICAgIGNhblN0YXJ0ID0gdHJ1ZTtcXG5cXG4gICAgaWYgKGlkICE9PSAnZTg5YzYxN2I2YjE1ZDI0Jykge1xcbiAgICAgIC8vIGlmIGFsbCBzeXN0ZW1zIGFyZSBpbnN0YWxsZWRcXG4gICAgICBzeXN0ZW1zID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7fSk7XFxuXFxuICAgICAgc3lzdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChzeXN0ZW0pIHtcXG4gICAgICAgICAgdmFyIHN5cyA9IHRoaXMucmVxdWlyZShzeXN0ZW0uX2lkKTtcXG4gICAgICAgICAgaWYgKHN5cy5zdGF0ZSgpID09PSAnbm9uZScpIHtcXG4gICAgICAgICAgICAgIGNhblN0YXJ0ID0gZmFsc2U7XFxuICAgICAgICAgIH1cXG4gICAgICB9LmJpbmQodGhpcykpO1xcblxcbiAgICAgIC8vIHN0YXJ0IGFsbCB0aGUgc3lzdGVtc1xcbiAgICAgIGlmIChjYW5TdGFydCkge1xcbiAgICAgICAgICBkZXBlbmRlbmNpZXMgPSAkZGIuUnVudGltZVN5c3RlbS5maW5kKHtcXG4gICAgICAgICAgICAgICdtYXN0ZXInOiBmYWxzZVxcbiAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xcbiAgICAgICAgICAgICAgdmFyIHN5c3RlbSA9IHRoaXMucmVxdWlyZShkZXAuX2lkKTtcXG4gICAgICAgICAgICAgIGNoYW5uZWwgPSB0aGlzLnJlcXVpcmUoJ2NoYW5uZWwnKTtcXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgaWYgKHN5c3RlbS5zdGF0ZSgpID09PSAncmVzb2x2ZWQnKSB7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnc3RhcnRpbmcnKTtcXG4gICAgICAgICAgICAgICAgc3lzdGVtLnN0YXJ0KCk7XFxuICAgICAgICAgICAgICAgIGNoYW5uZWwuJHN5c3RlbVN0YXJ0ZWQoZGVwLl9pZCk7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XFxuXFxuICAgICAgICAgIG1hc3RlciA9ICRkYi5SdW50aW1lU3lzdGVtLmZpbmQoe1xcbiAgICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcXG4gICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgIG1hc3Rlci5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcXG4gICAgICAgICAgICAgIHZhciBzeXN0ZW0gPSB0aGlzLnJlcXVpcmUoZGVwLl9pZCk7XFxuICAgICAgICAgICAgICBjaGFubmVsID0gdGhpcy5yZXF1aXJlKCdjaGFubmVsJyk7XFxuICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIGlmIChzeXN0ZW0uc3RhdGUoKSA9PT0gJ3Jlc29sdmVkJykge1xcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ3N0YXJ0aW5nJyk7XFxuICAgICAgICAgICAgICAgIHN5c3RlbS5zdGFydCgpO1xcbiAgICAgICAgICAgICAgICBjaGFubmVsLiRzeXN0ZW1TdGFydGVkKGRlcC5faWQpO1xcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc3RhdGUoJ2FjdGl2ZScpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xcbiAgICAgIH1cXG4gIH1cXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWNmYTQxNDVmNjE0ZGE4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWNmYTQxNDVmNjE0ZGE4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1lc3NhZ2UobXNnKSB7IFxcblxcdCRkYi5SdW50aW1lTWVzc2FnZS5pbnNlcnQobXNnKTtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTgyYzUxZWRjMzFhZDk3XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTgyYzUxZWRjMzFhZDk3XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIlJ1bnRpbWVTeXN0ZW1PU0dpXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwidW5pbnN0YWxsXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHVuaW5zdGFsbCgpIHsgXFxuXFx0dGhpcy5yZXF1aXJlKCdydW50aW1lJykudW5pbnN0YWxsKHRoaXMuaWQoKSk7XFxufVwiLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTY0MzExNGYzMWJmNDBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTY0MzExNGYzMWJmNDBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiUnVudGltZVN5c3RlbU9TR2lcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdGF0ZSh2YWx1ZSkgeyBcXG4gIGlmICh0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpKSB7XFxuXFx0ICB0aGlzLnJlcXVpcmUoJ2xvZ2dlcicpLmRlYnVnKCd0aGUgc3RhdGUgb2YgdGhlIHN5c3RlbSBcXFxcJycgKyB0aGlzLm5hbWUoKSArICdcXFxcJyBpcyBub3cgXFxcXCcnICsgdmFsdWUgKyAnXFxcXCcnKTtcXG4gIH1cXHRcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE5Y2YzMTdkNzIxNzMzMVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5Y2YzMTdkNzIxNzMzMVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lT1NHaVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImJ1bmRsZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBidW5kbGUoKSB7IFxcblxcdHZhciByZXN1bHQgPSB0aGlzLnJlcXVpcmUoJ2RiJykuc3lzdGVtKCk7XFxuXFx0cmV0dXJuIHJlc3VsdDtcXG59XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogZmFsc2UsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0Yjc3MTQ0OTExY2U0OFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0Yjc3MTQ0OTExY2U0OFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJSdW50aW1lU3lzdGVtT1NHaVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImJ1bmRsZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBidW5kbGUoKSB7IFxcblxcdHZhciByZXN1bHQgPSAnJyxcXG5cXHRzeXN0ZW0gPSBbXTtcXG5cXHRcXG5cXHRzeXN0ZW1zID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XFxuICAgICdfaWQnOiB0aGlzLmlkKClcXG4gIH0pO1xcbiAgXFxuICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcXG4gICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoc3lzdGVtc1swXSk7XFxuICB9XFxuICBcXG5cXHRyZXR1cm4gcmVzdWx0O1xcbn1cIixcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJSdW50aW1lQWRtaW5cIjoge1xuICAgICAgICAgICAgXCJhZG1pblwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJhZG1pblwiLFxuICAgICAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlc2lnbmVyV2luZG93XCI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwic3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVcIjoge1xuICAgICAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcInJ1bnRpbWVcIixcbiAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjguMTFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVEYXRhYmFzZVwiOiB7XG4gICAgICAgICAgICBcImRiXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImRiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJSdW50aW1lTG9nZ2VyXCI6IHtcbiAgICAgICAgICAgIFwibG9nZ2VyXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImxvZ2dlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUnVudGltZU1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJtZXRhbW9kZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIlJ1bnRpbWVTeXN0ZW1cIjoge30sXG4gICAgICAgIFwiUnVudGltZUNoYW5uZWxcIjoge1xuICAgICAgICAgICAgXCJjaGFubmVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImNoYW5uZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcIm5hbWVcIjogXCJzeXN0ZW0tcnVudGltZVwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuOC4xMVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJTeXN0ZW0gUnVudGltZVwiLFxuICAgIFwiX2lkXCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG4gICAgXCJtYXN0ZXJcIjogZmFsc2UsXG4gICAgXCJzdWJzeXN0ZW1cIjogZmFsc2Vcbn07XG5cbi8qIGV4cG9ydHMgICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICpcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN5c3RlbVxuICogQGNsYXNzIHJ1bnRpbWUtc3lzdGVtXG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBSdW50aW1lIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge1J1bnRpbWVTeXN0ZW19IHN5c3RlbVxuICovXG5leHBvcnRzLnN5c3RlbSA9IHN5c3RlbTtcbiIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIFxuICogQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1iZWhhdmlvclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY2hhbm5lbFxuICogQGNsYXNzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIGZyb20gYSBzdHJpbmcuXG4gKiBUaGUgY3JlYXRlZCBmdW5jdGlvbjpcbiAqIC0gd2lsbCBiZSBhIG5hbWVkIGZ1bmN0aW9uLFxuICogLSBoYXMgdGhlIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCBhbmRcbiAqIC0gY2FuIGhhdmUgc29tZSBjb3JlIG1vZHVsZXMgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgY3JlYXRlRnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGRlZmF1bHQgbmFtZSBvZiB0aGUgZnVuY3Rpb24gXG4gKiBAcGFyYW0ge1N0cmluZ30gZnVuYyBhIHN0cmluZ2lmaWVkIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgdGhlIGJlaGF2aW9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIFJ1bnRpbWUgY29yZSBiZWhhdmlvci5cbiAqIEluIHRoYXQgY2FzZSwgdGhlIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWQgaW4gYSBzeXN0ZW0gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgUnVudGltZSBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBmdW5jdGlvbiAoZGVmYXVsdCBmYWxzZSlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBmdW5jdGlvblxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb24obmFtZSwgZnVuYywgY29yZSwgdXNlQ29yZUFQSSkge1xuICAgIHZhciBmdW5jTmFtZSA9ICcnLFxuICAgICAgICBiZWdpbkJvZHkgPSAtMSxcbiAgICAgICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcGFyYW1zQ2xlYW4gPSBbXSxcbiAgICAgICAgZnVuY0JvZHkgPSAnJyxcbiAgICAgICAgaGVhZGVyID0gJycsXG4gICAgICAgIGFjdGlvbiA9IG51bGw7XG5cbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuXG4gICAgZnVuY05hbWUgPSBoZWFkZXIuc3BsaXQoJygnKVswXS5yZXBsYWNlKCdmdW5jdGlvbicsICcnKS50cmltKCk7XG4gICAgZnVuY1BhcmFtcyA9IGhlYWRlci5zcGxpdCgnKCcpWzFdLnJlcGxhY2UoJyknLCAnJykudHJpbSgpO1xuXG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBwYXJhbXNDbGVhbi5wdXNoKHBhcmFtLnRyaW0oKSk7XG4gICAgfSk7XG5cbiAgICBmdW5jQm9keSA9IGZ1bmMuc3Vic3RyaW5nKGJlZ2luQm9keSArIDEpO1xuICAgIGZ1bmNCb2R5ID0gZnVuY0JvZHkuc3Vic3RyaW5nKDAsIGZ1bmNCb2R5Lmxhc3RJbmRleE9mKCd9JykpLnRyaW0oKTtcblxuICAgIGZ1bmNOYW1lID0gZnVuY05hbWUgfHwgbmFtZTtcblxuICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cbiAgICBpZiAodXNlQ29yZUFQSSkge1xuICAgICAgICBwYXJhbXMucHVzaCgnJGNvbXBvbmVudCcpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGRiJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbWV0YW1vZGVsJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckd29ya2Zsb3cnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRiZWhhdmlvcicpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJHN0YXRlJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbG9nJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1swXSAhPT0gJycpIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiIChcIiArIHBhcmFtcy5qb2luKCcsJykgKyBcIikgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKCdcIiArIHBhcmFtcy5qb2luKFwiJywnXCIpICsgXCInLCBib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIGFjdGlvbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBmdW5jTmFtZSArIFwiICgpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbihib2R5KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIH07XCIpKGZ1bmNCb2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gUnVudGltZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBhZGQoaWQsIHN0YXRlLCBhY3Rpb24sIHVzZUNvcmVBUEksIGNvcmUpIHtcbiAgICB2YXIgYmVoYXZpb3JJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpLFxuICAgICAgICBzdHJBY3Rpb24gPSBhY3Rpb24udG9TdHJpbmcoKTtcblxuICAgIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29yZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihzdGF0ZSwgc3RyQWN0aW9uLCBjb3JlLCB1c2VDb3JlQVBJKTtcblxuICAgIHN0b3JlW2JlaGF2aW9ySWRdID0gYWN0aW9uO1xuXG4gICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5pbnNlcnQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJhY3Rpb25cIjogc3RyQWN0aW9uLFxuICAgICAgICBcInVzZUNvcmVBUElcIjogdXNlQ29yZUFQSSxcbiAgICAgICAgXCJjb3JlXCI6IGNvcmVcbiAgICB9KTtcblxuICAgIHJldHVybiBiZWhhdmlvcklkO1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBvciByZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgZm9yIGEgc3BlY2lmaWMgc3RhdGVcbiAqIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHJlbW92ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3IgKG9wdGlvbmFsKSkgPGJyPlxuICovXG5mdW5jdGlvbiByZW1vdmUocGFyYW1zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtcy5iZWhhdmlvcklkID0gcGFyYW1zLmJlaGF2aW9ySWQgfHwgJyc7XG4gICAgcGFyYW1zLmNvbXBvbmVudElkID0gcGFyYW1zLmNvbXBvbmVudElkIHx8ICcnO1xuICAgIHBhcmFtcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAnJztcblxuICAgIGlmIChwYXJhbXMuY29tcG9uZW50SWQpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5iZWhhdmlvcklkKSB7XG4gICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVtwYXJhbXMuYmVoYXZpb3JJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVCZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVbaWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRnJvbU1lbW9yeShpZCkge1xuICAgIGRlbGV0ZSBzdG9yZVtpZF07XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIGFjdGlvbnMgb2YgYSBiZWhhdmlvciBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldEFjdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGFjdGlvbnMgdGhhdCBoYXZlIHRvIGJlIGV4ZWN1dGVkIGZvciBhIHNwZWNpZmljIGNvbXBvbmVudCBhbmQgc3RhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0QWN0aW9ucyhpZCwgc3RhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGRiUmVzdWx0ID0gW10sXG4gICAgICAgIGFjdGlvbiA9IG51bGw7XG5cbiAgICBkYlJlc3VsdCA9ICRkYi5SdW50aW1lQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgfSk7XG5cbiAgICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChiZWhhdmlvcikge1xuICAgICAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKGJlaGF2aW9yLnN0YXRlLCBiZWhhdmlvci5hY3Rpb24sIGJlaGF2aW9yLmNvcmUsIGJlaGF2aW9yLnVzZUNvcmVBUEkpO1xuICAgICAgICAgICAgc3RvcmVbYmVoYXZpb3IuX2lkXSA9IGFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qXG4gKiBHZXQgYSBiZWhhdmlvciBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHJldHVybiB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy4gQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiB3aGVuIGEgc3BlY2lmaWMgc3RhdGUgb2YgYSBjb21wb25lbnQgd2lsbCBjaGFuZ2UuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jaGFubmVsXG4gKiBAY2xhc3MgcnVudGltZS1iZWhhdmlvclxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBBZGQgYSBiZWhhdmlvciB0aGF0IHdpbGwgYmUgc3RvcmVkIGluIFJ1bnRpbWUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIFJ1bnRpbWUgY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gUnVudGltZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmFkZCA9IGFkZDtcblxuXG4vKipcbiAqIEdldCBhIGJlaGF2aW9yIGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcmV0dXJuIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5cblxuLyoqXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmV4cG9ydHMuZ2V0QWN0aW9ucyA9IGdldEFjdGlvbnM7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnJlbW92ZUZyb21NZW1vcnkgPSByZW1vdmVGcm9tTWVtb3J5OyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IFJ1bnRpbWUuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICR3b3JrbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eScsXG4gICAgTElOS19UWVBFID0gJ2xpbmsnLFxuICAgIENPTExFQ1RJT05fVFlQRSA9ICdjb2xsZWN0aW9uJyxcbiAgICBNRVRIT0RfVFlQRSA9ICdtZXRob2QnLFxuICAgIEVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuICAgIE5BTUUgPSAnX25hbWUnLFxuICAgIHN0b3JlID0ge307XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIFN1YiBjbGFzcyB0byBvdmVycmlkZSBwdXNoIGFuZCBwb3AgbWV0aG9kIG9mIEFycmF5IENsYXNzLlxuICogQGNsYXNzIFJ1bnRpbWVBcnJheVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZcbiAqIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIHtTdHJpbmd9IHR5cGUgdHlwZSBvZiB0aGUgYXJyYXlcbiAqIHtBcnJheX0gYXJyIGFycmF5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBSdW50aW1lQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICAgICAgYXJyRGIgPSBbXSxcbiAgICAgICAgdHlwZSA9ICcnLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBjbGFzc0lkID0gJycsXG4gICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICBpc1JlYWRPbmx5ID0gZmFsc2U7XG5cbiAgICBjb25mID0gY29uZiB8fCB7fTtcbiAgICB0eXBlID0gY29uZi50eXBlIHx8ICcnO1xuICAgIGlkID0gY29uZi5pZCB8fCAnJztcbiAgICBwcm9wZXJ0eU5hbWUgPSBjb25mLnByb3BlcnR5TmFtZSB8fCAnJztcbiAgICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuICAgIGNsYXNzSWQgPSBjb25mLmNsYXNzSWQgfHwgJyc7XG5cbiAgICBpZiAodHlwZW9mIGNvbmYucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlzUmVhZE9ubHkgPSBjb25mLnJlYWRPbmx5O1xuICAgIH1cblxuICAgIC8vIGluaXRcbiAgICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgYXJyLnB1c2goJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSh2YWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIF9hZGQodmFsLCBhY3Rpb24sIHN0YXJ0LCBkZWxldGVDb3VudCkge1xuICAgICAgICB2YXIgaXNDbGFzcyA9IGZhbHNlLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICAgICAgZGVsID0gW107XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG5cbiAgICAgICAgICAgIGlzQ2xhc3MgPSB0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG5cbiAgICAgICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbC5jb25zdHJ1Y3Rvci5uYW1lLCB0eXBlLnJlcGxhY2UoJ0AnLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICdwdXNoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAndW5zaGlmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRGIudW5zaGlmdCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGRlbC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFtkZWxbaV0sICdyZW1vdmUnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGFyckRiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IFt2YWwuaWQoKSwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLmlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKGlkLCBjbGFzc0lkLCBwcm9wZXJ0eU5hbWUsIHZhbC5pZCgpLCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsICYmICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncHVzaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRGIucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBhY3Rpb24gPT09ICd1bnNoaWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJEYi51bnNoaWZ0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGFjdGlvbiA9PT0gJ3NwbGljZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogYXJyRGJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbCwgJ2FkZCddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lLCB2YWwsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eShpZCwgY2xhc3NJZCwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyRGIubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW1vdmUoYWN0aW9uKSB7XG4gICAgICAgIHZhciByZXN1bHQsXG4gICAgICAgICAgICB2YWwgPSBudWxsLFxuICAgICAgICAgICAgaXNDbGFzcyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgaWYgKGFyckRiLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAncG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGFyckRiLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYWN0aW9uID09PSAnc2hpZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gYXJyRGIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBhcnJEYlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsLCAncmVtb3ZlJ11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlzQ2xhc3MgPSB0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzdG9yZVt2YWxdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIGNsYXNzSWQsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiBPdmVycmlkZSBwdXNoIG1ldGhvZC5cbiAgICAgKiBAcHVzaFxuICAgICAqIEBwYXJhbSB7UnVudGltZUNvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgICAqL1xuICAgIGFyci5wdXNoID0gZnVuY3Rpb24gcHVzaCh2YWwpIHtcbiAgICAgICAgcmV0dXJuIF9hZGQodmFsLCAncHVzaCcpO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSB1bnNoaWZ0IG1ldGhvZC5cbiAgICAgKiBAdW5zaGlmdFxuICAgICAqIEBwYXJhbSB7UnVudGltZUNvbXBvbmVudHxPYmplY3R9IHZhbFxuICAgICAqL1xuICAgIGFyci51bnNoaWZ0ID0gZnVuY3Rpb24gdW5zaGlmdCh2YWwpIHtcbiAgICAgICAgcmV0dXJuIF9hZGQodmFsLCAndW5zaGlmdCcpO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBjb25jYXQgbWV0aG9kLlxuICAgICAqIEBwdXNoXG4gICAgICogQHBhcmFtIHtSdW50aW1lQ29tcG9uZW50fE9iamVjdH0gYXJyXG4gICAgICovXG4gICAgYXJyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdChhcnIpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2FkZChhcnJbaV0sICdwdXNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25mLmFyciA9IGFyckRiO1xuICAgICAgICByZXR1cm4gbmV3IFJ1bnRpbWVBcnJheShjb25mKTtcbiAgICB9O1xuXG4gICAgLyogT3ZlcnJpZGUgcG9wIG1ldGhvZC5cbiAgICAgKiBAcG9wXG4gICAgICogQHJldHVybiB7UnVudGltZUNvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAgICovXG4gICAgYXJyLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgcmV0dXJuIF9yZW1vdmUoJ3BvcCcpO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBzaGlmdCBtZXRob2QuXG4gICAgICogQHNoaWZ0XG4gICAgICogQHJldHVybiB7UnVudGltZUNvbXBvbmVudHxPYmplY3R9IHZhbHVlXG4gICAgICovXG4gICAgYXJyLnNoaWZ0ID0gZnVuY3Rpb24gc2hpZnQoKSB7XG4gICAgICAgIHJldHVybiBfcmVtb3ZlKCdzaGlmdCcpO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBzb3J0IG1ldGhvZC5cbiAgICAgKiBAc29ydFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0IHRoZSBzb3J0IGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7UnVudGltZUFycmF5fSB0aGUgY3VycmVudCBSdW50aW1lQXJyYXlcbiAgICAgKi9cbiAgICBhcnIuc29ydCA9IGZ1bmN0aW9uIHNvcnQoZnVuY3QpIHtcbiAgICAgICAgYXJyRGIuc29ydChmdW5jdCk7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGFyckRiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuICAgIC8qIE92ZXJyaWRlIHJldmVyc2UgbWV0aG9kLlxuICAgICAqIEByZXZlcnNlXG4gICAgICogQHJldHVybiB7UnVudGltZUFycmF5fSB0aGUgcmV2ZXJzZWQgUnVudGltZUFycmF5XG4gICAgICovXG4gICAgYXJyLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICBhcnJEYi5yZXZlcnNlKCk7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGFyckRiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBzcGxpY2UgbWV0aG9kLlxuICAgICAqIEBzcGxpY2VcbiAgICAgKiBAcmV0dXJuIHtSdW50aW1lQXJyYXl9IHRoZSBzcGxpY2VkIFJ1bnRpbWVBcnJheVxuICAgICAqL1xuICAgIGFyci5zcGxpY2UgPSBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCB2YWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgX2FkZCh2YWwsICdzcGxpY2UnLCBzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXJyRGIuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IGlkLFxuICAgICAgICAgICAgICAgICAgICAnZmllbGQnOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGFyckRiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbcmVzdWx0W2ldLCAncmVtb3ZlJ11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKiBPdmVycmlkZSBzbGljZSBtZXRob2QuXG4gICAgICogQHNsaWNlXG4gICAgICogQHJldHVybiB7UnVudGltZUFycmF5fSB0aGUgc2xpY2VkIFJ1bnRpbWVBcnJheVxuICAgICAqL1xuICAgIGFyci5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGFyckRiLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cblJ1bnRpbWVBcnJheS5wcm90b3R5cGUgPSBuZXcgQXJyYXk7XG4vKiBqc2hpbnQgK1cwNTggKi9cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGdldFBhcmFtTmFtZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbmFtZXMgb2YgbWV0aG9kIHBhcmFtZXRlcnMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBwYXJhbXMgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHByb3BOYW1lcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0U2NoZW1hKG1vZGVsW05BTUVdKTtcblxuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IExJTktfVFlQRSB8fCBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gUFJPUEVSVFlfVFlQRSB8fCBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBNRVRIT0RfVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcE5hbWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgc2NoZW1hIG9mIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgcHJvcGVydHkgc2NoZW1hIG9mIHRoZSBzdHJ1Y3R1cmUgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RydWN0dXJlUHJvcGVydGllcyhwcm9wZXJ0eU5hbWUsIG1vZGVsKSB7XG4gICAgdmFyIG1vZGVsRGVmID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHN0cnVjdHVyZSA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXTtcblxuICAgIG1vZGVsRGVmID0gJG1ldGFtb2RlbC5nZXRNb2RlbChtb2RlbCk7XG4gICAgdHlwZSA9IG1vZGVsRGVmW3Byb3BlcnR5TmFtZV0udHlwZTtcbiAgICBzdHJ1Y3R1cmUgPSAkbWV0YW1vZGVsLmdldFR5cGUodHlwZSk7XG5cbiAgICBpZiAoc3RydWN0dXJlLnNjaGVtYSkge1xuICAgICAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzdHJ1Y3R1cmUuc2NoZW1hKTtcbiAgICAgICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHN0cnVjdHVyZS5zY2hlbWFbbmFtZV0ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaChzdHJ1Y3R1cmUuc2NoZW1hW25hbWVdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgZXZlbnQgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0RXZlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBldmVudHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRFdmVudHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBwcm9wTmFtZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldFNjaGVtYShtb2RlbFtOQU1FXSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBzdHJ1Y3R1cmUuXG4gKiBAbWV0aG9kIGdldFN0cnVjdHVyZVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgICAgICBkb2MgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXSxcbiAgICAgICAgc3ViUGF0aCA9IHBhdGguc3BsaXQoJy4nKSxcbiAgICAgICAgbGVuZ3RoID0gc3ViUGF0aC5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgcmVzdWx0ID0gZG9jO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFtzdWJQYXRoW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogU2V0IHRoZSB2YWx1ZSBvZiBhIHN0cnVjdHVyZS5cbiAqIEBtZXRob2QgZ2V0U3RydWN0dXJlVmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBuYW1lIG9mIHRoZSBtb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGggXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIHRvIHNldCBcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgcGF0aCwgdmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgZG9jID0gJGRiLnN0b3JlW21vZGVsXVtpZF0sXG4gICAgICAgIHN1YlBhdGggPSBwYXRoLnNwbGl0KCcuJyksXG4gICAgICAgIGxlbmd0aCA9IHN1YlBhdGgubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIHJlc3VsdCA9IGRvYztcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3N1YlBhdGhbaV1dO1xuICAgIH1cbiAgICByZXN1bHRbc3ViUGF0aFtpXV0gPSB2YWx1ZTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdmFyIGJvZHkgPSB7fTtcblxuICAgICAgICBpZiAoY29uZmlnLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMoY29uZmlnLCBjbGFzc0lkKTtcbiAgICAgICAgICAgIGNvbmZpZyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldE1vZGVsKGNsYXNzSWQpLCB0cnVlLCB0cnVlKSkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1ldGVycyhjbGFzc0lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0TW9kZWwoY2xhc3NJZCkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgICAgICAvLyBpZFxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuXG4gICAgICAgIC8vIGNsYXNzSW5mb1xuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pbmhlcml0RnJvbShjbGFzc0lkLCAnUnVudGltZUNvbXBvbmVudCcpKSB7XG4gICAgICAgICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5rIHRvIGRiXG4gICAgICAgICRkYi5zdG9yZVtjbGFzc0lkXVtjb25maWcuX2lkXSA9IGNvbmZpZztcblxuICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLmluc2VydCh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25maWcpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdChjb25maWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGNsYXNzSWQgKyBcIiAoY29uZmlnKSB7IGJvZHkuY2FsbCh0aGlzLGNvbmZpZykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhbiBpZCBtZXRob2QgdG8gYSBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGl0cyBpZC5cbiAqIEBtZXRob2QgYWRkSWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRJZChDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xhc3NJZDtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAocHJvcCwgdmFsKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgcHJvcCwgdmFsKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIHByb3BlcnRpZXMgdG8gYSBjb21wb25lbnQuIEFsbCB0aGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWNjZXNzZWQgYnkgYSBtZXRob2Qgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICogU29tZSBjaGVja3MgY2FuIGJlIGRvbmUgaW4gb3JkZXIgdG8gc2VlIGlmIHRoZSBzZXQgb2YgcHJvcGVydGllcyBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAZXhhbXBsZVxuICogbGF1cmUuYWdlKCk7IC8vIGdldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBsYXVyZS5hZ2UoMjIpOyAvLyBzZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogQG1ldGhvZCBhZGRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRQcm9wZXJ0aWVzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyhtb2RlbCk7XG5cbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gcHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIgYm9keSA9IHt9LFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gJycsXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSAnJztcblxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wLm5hbWU7XG4gICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3AudHlwZTtcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9IHByb3AucmVhZE9ubHk7XG5cbiAgICAgICAgZnVuY3Rpb24gX2lzVmFsaWRDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgICAgICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsLCB0eXBlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCRtZXRhbW9kZWwuaW5oZXJpdEZyb20odmFsLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGUucmVwbGFjZSgnQCcsICcnKSkgJiYgKHR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2dldFJlYWxDb2xsZWN0aW9uKGNvbGwsIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgY29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZVswXS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsLmlkICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkpIHsgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWVBcnIgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICB2YWwgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lQXJyID0gbmV3IFJ1bnRpbWVBcnJheSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eU5hbWVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogcHJvcGVydHlSZWFkT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJyXCI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVudGltZUFycjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSkgeyAvLyB3ZSByZXBsYWNlIHRoZSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pc1ZhbGlkQ29sbGVjdGlvbihwb3NpdGlvbiwgcHJvcGVydHlUeXBlWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBfZ2V0UmVhbENvbGxlY3Rpb24ocG9zaXRpb24sIHByb3BlcnR5VHlwZVswXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbcmVhbFZhbCwgJ3Jlc2V0J11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZWxkJzogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKHRoaXMuaWQoKSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBwcm9wZXJ0eU5hbWUsIHBvc2l0aW9uLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhbFZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lLCBwb3NpdGlvbiwgJ251bWJlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkodGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUsIHByb3BlcnR5VHlwZVswXS5yZXBsYWNlKCdAJywgJycpKSAmJiAocHJvcGVydHlUeXBlWzBdLmluZGV4T2YoJ0AnKSAhPT0gLTEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9pZFwiOiB0aGlzLmlkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHZhbHVlLmlkICE9PSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmaWVsZCc6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBjb21wb25lbnRbcHJvcGVydHlOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3JlYWxWYWwsICdhZGQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIChwb3NpdGlvbix2YWx1ZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHBvc2l0aW9uLCB2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkgPSBmdW5jdGlvbiBib2R5KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0KGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUgPT09ICdkYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzU3RydWN0dXJlKHByb3BlcnR5TmFtZSwgY2xhc3NJZCk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBhZGRTdHJ1Y3R1cmUoJycsIHByb3BlcnR5TmFtZSwgbW9kZWwsIHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuZGVzdHJveWVkQ29tcG9uZW50Q2FsbChwcm9wZXJ0eU5hbWUsIHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7IFwiX2lkXCI6IHRoaXMuaWQoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWUuaWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHByb3BlcnR5VHlwZSA9PT0gJ2RhdGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmaWVsZCc6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIFJ1bnRpbWVCZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVCZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHRoaXMuY29uc3RydWN0b3IubmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiICh2YWx1ZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIHN0cnVjdHVyZSBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRTdHJ1Y3R1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIHBhcmVudCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gb2JqZWN0IHRoYXQgY29pbnRhaW5zIG1ldGhvZHMgdG8gYWNjZXNzIHRoZSBzdHJ1Y3R1cmUgXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRTdHJ1Y3R1cmUocGF0aCwgbmFtZSwgbW9kZWwsIGlkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRTdHJ1Y3R1cmVQcm9wZXJ0aWVzKG5hbWUsIG1vZGVsKSxcbiAgICAgICAgc3J1Y3R1cmUgPSB7fTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9ICcnLFxuICAgICAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9ICcnLFxuICAgICAgICAgICAgICAgIGZ1bGxQYXRoID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhcmVudFBhdGggKyAnLicgKyBuYW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRQYXRoID0gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bGxQYXRoID0gcGFyZW50UGF0aCArICcuJyArIHByb3BlcnR5TmFtZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbbW9kZWxdW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0KGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG5ldyBEYXRlKGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJG1ldGFtb2RlbC5pc1N0cnVjdHVyZShwcm9wZXJ0eU5hbWUsIG1vZGVsKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gYWRkU3RydWN0dXJlKHBhcmVudFBhdGgsIHByb3BlcnR5TmFtZSwgbW9kZWwsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcC5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBwcm9wLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5kZXN0cm95ZWRDb21wb25lbnRDYWxsKGZ1bGxQYXRoLCBpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkoaWQsIG1vZGVsLCBmdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYlttb2RlbF0uZmluZCh7IFwiX2lkXCI6IGlkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0cnVjdHVyZVZhbHVlKG1vZGVsLCBpZCwgZnVsbFBhdGgsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcHJvcGVydHlUeXBlID09PSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHJ1Y3R1cmVWYWx1ZShtb2RlbCwgaWQsIGZ1bGxQYXRoLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RydWN0dXJlVmFsdWUobW9kZWwsIGlkLCBmdWxsUGF0aCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmllbGQnOiBmdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgUnVudGltZUJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlRnJvbU1lbW9yeShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogZnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIG1vZGVsLCBmdWxsUGF0aCwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIHNydWN0dXJlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNydWN0dXJlO1xufVxuXG4vKlxuICogQWRkIG1ldGhvZHMgdG8gYSBjb21wb25lbnQuXG4gKiBUaGUgY2FsbCB0byB0aGVzZSBtZXRob2RzIHdpbGwgaW52b2tlIHRoZSB3b3JrZmxvdyBpbiBvcmRlciB0byBjaGVjayB0aGF0IGlucG91dHMgLyBvdXRwdXRzIGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGFkZE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE1ldGhvZHMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIG1ldGhvZHMgPSBnZXRNZXRob2RzKG1vZGVsKTtcblxuICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiBtZXRob2QobWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgcGFyYW1zTmFtZSA9IGdldFBhcmFtTmFtZXMoY2xhc3NJZCwgbWV0aG9kTmFtZSksXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXNOYW1lLmpvaW4oJywnKSxcbiAgICAgICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogbWV0aG9kTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgZXZlbnRzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGFkZEV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnRzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBldmVudHMgPSBnZXRFdmVudHMobW9kZWwpO1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIGV2ZW50KG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpLFxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzeXN0ZW1zID0gW10sXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbUlkID0gJ2U4OWM2MTdiNmIxNWQyNCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IC0xLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ1J1bnRpbWVDaGFubmVsJykge1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1zID0gJGRiLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFzdGVyJzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW1JZCA9IHN5c3RlbXNbMF0uX2lkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mcm9tID0gc3lzdGVtSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5ldmVudCA9IG1ldGhvZE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVNZXNzYWdlLmluc2VydChtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInNlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogbWVzc2FnZS5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21cIjogbWVzc2FnZS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBtZXNzYWdlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpIHtcbiAgICAgICAgdmFyIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVCZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSwgaXNDb3JlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJHN0YXRlLmdldCh0aGlzLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBzdGF0ZSA9PT0gY3VycmVudFN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuYWN0aW9uKGJlaGF2aW9ySWQsIGN1cnJlbnRTdGF0ZS5wYXJhbWV0ZXJzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKHRoaXMuaWQoKSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFN0YXRlT24oY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWhhdmlvcklkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJLGlzQ29yZSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJLGlzQ29yZSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT25DbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEksIGlzQ29yZSkge1xuICAgICAgICB2YXIgYmVoYXZpb3JJZCA9ICcnLFxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gJyc7XG5cbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzRXZlbnQoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICEkbWV0YW1vZGVsLmlzTGluayhzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmJlaGF2aW9yTm90VW5pcXVlKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHdvcmtsb3cudmFsaWRQYXJhbU51bWJlcnMoY2xhc3NJZCwgc3RhdGUsIGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcklkID0gJGJlaGF2aW9yLmFkZCh0aGlzLmlkKCksIHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJLCBpc0NvcmUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlICYmIHN0YXRlID09PSBjdXJyZW50U3RhdGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5hY3Rpb24oYmVoYXZpb3JJZCwgY3VycmVudFN0YXRlLnBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24odGhpcy5pZCgpLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSxpc0NvcmUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSxpc0NvcmUpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvZmYgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIHJlbW92ZSBiZWhhdmlvcnMgZnJvbSB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9mZkNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBiZWhhdmlvcklkKSB7XG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IGFyZ3VtZW50c1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFN0YXRlKHN0YXRlLCBjbGFzc0lkKSkge1xuICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICBcImJlaGF2aW9ySWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRJZFwiOiBjbGFzc0lkLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cuSW52YWxpZFN0YXRlT2ZmKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub2ZmID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvZmYgKHN0YXRlLCBiZWhhdmlvcklkKSB7IHJldHVybiBib2R5LmNhbGwodGhpcywgc3RhdGUsIGJlaGF2aW9ySWQpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBkZXN0cm95IG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBkZXRyb3kgdGhlIGNsYXNzIGFuZCBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZERlc3Ryb3lDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZCgpLFxuICAgICAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgICAgIGlmICgkZGJbaWRdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkZGJbaWRdLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICRiZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgJ2NvbXBvbmVudElkJzogaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgYmVoYXZpb3JzXG4gICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50SWQnOiByZXN1bHRbaV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgdGhlIGFkZENsYXNzSW5mbyBtZXRob2Qgb24gYSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkQ2xhc3NJbmZvQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkQ2xhc3NJbmZvQ2xhc3MoQ2xhc3MpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLmlkKCkgKyAnSW5mbycpO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuY2xhc3NJbmZvID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBjbGFzc0luZm8gKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgZmFjdG9yeVxuICogQHBhcmFtIHtKU09OfSBjb25maWcgY29uZmlndXJhdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IHRoZSBjcmVhdGVkIGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICB2YXIgQ2xhc3MgPSB7fSxcbiAgICAgICAgY2xhc3NJZCA9ICcnO1xuXG4gICAgaWYgKHR5cGVvZiBjb25maWcubW9kZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNsYXNzSWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0lkID0gY29uZmlnLm1vZGVsO1xuICAgIH1cblxuICAgIENsYXNzID0gY3JlYXRlQ2xhc3MoY2xhc3NJZCk7XG5cbiAgICBzdG9yZVtjbGFzc0lkXSA9IENsYXNzO1xuXG4gICAgYWRkSWQoQ2xhc3MsIGNsYXNzSWQpO1xuXG4gICAgYWRkUHJvcGVydGllcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRNZXRob2RzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZEV2ZW50cyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IHByb3BlcnRpZXMvbWV0aG9kcyBvbmx5IGlmIHRoZSBjb21wb25lbnRcbiAgICAvLyBpbmhlcml0IGZyb20gUnVudGltZUNvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdSdW50aW1lQ29tcG9uZW50JykpIHtcbiAgICAgICAgYWRkT24oQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKTtcbiAgICAgICAgYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGREZXN0cm95Q2xhc3MoQ2xhc3MpO1xuICAgICAgICBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmZyZWV6ZShDbGFzcyk7XG5cbiAgICByZXR1cm4gQ2xhc3M7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyA8YnI+XG4gKiB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lIDxicj5cbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZykge1xuICAgIHJldHVybiBmYWN0b3J5KGNvbmZpZyk7XG59XG5cblxuLypcbiAqIERlc3Ryb3kgYSBjb21wb25lbnQgZnJvbSBpdHMgaWQuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50IHRvIGRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gZGVzdHJveShpZCkge1xuICAgIHZhciBjb21wb25lbnQgPSBzdG9yZVtpZF0sXG4gICAgICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgICAgICAgIFwiX2lkXCI6IGlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBiZWhhdmlvcnNcbiAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAnY29tcG9uZW50SWQnOiBpZFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXNlIG9mIEJlaGF2aW9yXG4gICAgICAgIGlmIChjbGFzc0lkID09PSAnUnVudGltZUJlaGF2aW9yJykge1xuICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgd2l0aCBpdHMgaWQgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCByZW1vdmVGcm9tTWVtb3J5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tTWVtb3J5KGlkKSB7XG4gICAgZGVsZXRlIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGFsbCB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNvbXBvbmVudHMuIFxuICogSXQgaXMgdGhlIGZhY3Rvcnkgb2YgYWxsIHRoZSBjb21wb25lbnRzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgUnVudGltZS5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS13b3JrZmxvd1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAY2xhc3MgcnVudGltZS1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgPGJyPlxuICoge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZSA8YnI+XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIGNvbXBvbmVudCBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgY29tcG9uZW50IHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gcmVtb3ZlRnJvbU1lbW9yeTtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBkZXN0cm95OyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgZGF0YWJhc2UuIDxicj5cbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBSdW50aW1lIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBSdW50aW1lIGNvbXBvbmVudHMgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IFJ1bnRpbWUgZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtZGJcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEBjbGFzcyBydW50aW1lLWRiXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge30sXG4gICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICBpbnRlcm5hbERCID0gW1xuICAgICAgICAnUnVudGltZScsXG4gICAgICAgICdSdW50aW1lU2NoZW1hJyxcbiAgICAgICAgJ1J1bnRpbWVNb2RlbCcsXG4gICAgICAgICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnLFxuICAgICAgICAnUnVudGltZUJlaGF2aW9yJyxcbiAgICAgICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgICAgICdSdW50aW1lVHlwZScsXG4gICAgICAgICdSdW50aW1lTWV0YW1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVEYXRhYmFzZScsXG4gICAgICAgICdSdW50aW1lU3lzdGVtJyxcbiAgICAgICAgJ1J1bnRpbWVDbGFzc0luZm8nLFxuICAgICAgICAnUnVudGltZU1lc3NhZ2UnLFxuICAgICAgICAnUnVudGltZUNoYW5uZWwnLFxuICAgICAgICAnUnVudGltZUxvZ2dlcidcbiAgICBdLFxuICAgIGNvcmVEYiA9IFtcbiAgICAgICAgJ1J1bnRpbWVTY2hlbWEnLFxuICAgICAgICAnUnVudGltZUxvZ2dlcicsXG4gICAgICAgICdSdW50aW1lTW9kZWwnLFxuICAgICAgICAnUnVudGltZUdlbmVyYXRlZE1vZGVsJyxcbiAgICAgICAgJ1J1bnRpbWVTdGF0ZScsXG4gICAgICAgICdSdW50aW1lVHlwZSdcbiAgICBdO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgICB2YXIgZGJEdW1wID0ge30sXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgdHlwZUlkID0gJycsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIG1vZGVsID0gbnVsbCxcbiAgICAgICAgY29sbGVjdGlvbiA9IG51bGwsXG4gICAgICAgIHNjaGVtYUlkID0gJycsXG4gICAgICAgIG1vZGVsSWQgPSAnJyxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGlkID0gJyc7XG5cbiAgICAvLyBzY2hlbWFzXG4gICAgZGJEdW1wLnNjaGVtYXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lU2NoZW1hLmNvdW50KCkpIHtcbiAgICAgICAgZm9yIChzY2hlbWFJZCBpbiBzdG9yZS5SdW50aW1lU2NoZW1hKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLlJ1bnRpbWVTY2hlbWFbc2NoZW1hSWRdKSk7XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGVsc1xuICAgIGRiRHVtcC5tb2RlbHMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lTW9kZWwuY291bnQoKSkge1xuICAgICAgICBmb3IgKG1vZGVsSWQgaW4gc3RvcmUuUnVudGltZU1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuUnVudGltZU1vZGVsW21vZGVsSWRdKSk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLm1vZGVsc1ttb2RlbElkXSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5SdW50aW1lVHlwZS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAodHlwZUlkIGluIHN0b3JlLlJ1bnRpbWVUeXBlKSB7XG4gICAgICAgICAgICB0eXBlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lVHlwZVt0eXBlSWRdKSk7XG4gICAgICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yc1xuICAgIGRiRHVtcC5iZWhhdmlvcnMgPSB7fTtcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3RvcmUuUnVudGltZUJlaGF2aW9yKSB7XG4gICAgICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5SdW50aW1lQmVoYXZpb3JbYmVoYXZpb3JJZF0pKTtcbiAgICAgICAgZGVsZXRlIGJlaGF2aW9yLmNsYXNzSW5mbztcblxuICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICAgIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlW2NvbGxlY3Rpb25OYW1lXSkpO1xuXG4gICAgICAgICAgICBmb3IgKGlkIGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sbGVjdGlvbltpZF0uY2xhc3NJbmZvO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25baWRdLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2xsZWN0aW9uW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhjb2xsZWN0aW9uKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAuY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0gPSBjb2xsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRiRHVtcDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhbiBvYmplY3QgY29udGFpbnMgYW5vdGhlciBvbmUuXG4gKiBAbWV0aG9kIGNvbnRhaW5zXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBvYmplY3QgXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IHRhcmdldCBvYmplY3QgXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBzb3VyY2Ugb2JqZWN0IGNvbnRhaW5zIHRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb250YWlucyhzb3VyY2UsIHRhcmdldCkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICBwcm9wZXJ0eSA9ICcnO1xuXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XS5tYXRjaChzb3VyY2VbcHJvcGVydHldKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0W3Byb3BlcnR5XSAhPT0gc291cmNlW3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKiBcbiAqIEEgY29sbGVjdGlvbiBvZiBkb2N1bWVudHMgbWFuYWdlZCBieSBSdW50aW1lLiA8YnI+XG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIFJ1bnRpbWUgKHNjaGVtYSwgdHlwZSwgLi4uKS4gPGJyPlxuICogUHVibGljIGNvbGxlY3Rpb25zIG1hbmFnZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzLiA8YnI+XG4gKiBcbiAqIEBjbGFzcyBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG5ldyBjb2xsZWN0aW9uXG4gKi9cbnZhciBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRTY2hlbWEobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBzdG9yZVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoW3tcIm5hbWVcIjogXCJyZW5lXCJ9LCB7XCJuYW1lXCI6IFwicm9iZXJ0XCJ9XSk7XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX3NlYXJjaChjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhxdWVyeSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICByZXN1bHQucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBJbnNlcnQgYW4gbmV3IGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24uIDxicj5cbiAqIEJlZm9yZSBpbnNlcnRpbmcgdGhlIGRvY3VtZW50LCBSdW50aW1lIGNoZWNrcyB0aGF0IHRoZSBkb2N1bWVudCBpcyBjb21wbGlhbnRcbiAqIHdpdGggaXRzIGNsYXNzIGRlZmluaXRpb24uIDxicj4gXG4gKiBUaGVuLCBhZnRlciBpbnNlcnRpbmcgaXQsIHdlIGNyZWF0ZSB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpbnNlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBkb2N1bWVudCBhIG5ldyBvYmplY3QgdG8gYWRkXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgaWQgY3JlYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uaW5zZXJ0KHs8YnI+XG4gKiAgICAgIFwibmFtZVwiOiBcImJvYlwiLCA8YnI+XG4gKiAgICAgIFwiZmlyc3ROYW1lXCI6IFwiU2FpbnQtQ2xhclwiLCA8YnI+XG4gKiAgICAgIFwiYWdlXCI6IDQzIDxicj5cbiAqIH0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgIHZhciBkb2MgPSBbXSxcbiAgICAgICAgQ29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIGRvYy5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX2luc2VydChvYmopIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICBjaGFubmVscyA9IFtdLFxuICAgICAgICAgICAgY2hhbm5lbCA9IG51bGwsXG4gICAgICAgICAgICBzeXN0ZW1zID0gW107XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ1J1bnRpbWVTY2hlbWEnOlxuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lTG9nZ2VyJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZU1vZGVsJzpcbiAgICAgICAgICAgIGNhc2UgdGhpcy5uYW1lID09PSAnUnVudGltZVR5cGUnOlxuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnOlxuICAgICAgICAgICAgY2FzZSAkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3Qob2JqLCAkbWV0YW1vZGVsLmdldE1vZGVsKHRoaXMubmFtZSkpOlxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBvYmouX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJG1ldGFtb2RlbC5wcmVwYXJlT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXRNb2RlbCh0aGlzLm5hbWUpKTtcblxuICAgICAgICAgICAgICAgIHN0b3JlW3RoaXMubmFtZV1bb2JqLl9pZF0gPSBvYmo7XG5cbiAgICAgICAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChvYmopO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQuaWQoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnUnVudGltZU1lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVscyA9IGV4cG9ydHMuUnVudGltZUNoYW5uZWwuZmluZCh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gY2hhbm5lbHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwgPSAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKGNoYW5uZWxzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY2hhbm5lbHNbaV0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG9iai5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IG9iai5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9LCB7XCJ1cHNlcnRcIjogdHJ1ZX0pOyA8YnI+XG4gKi9cblJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChxdWVyeSwgdXBkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpLFxuICAgICAgICB1cGRhdGVkID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IGRvY3MubGVuZ3RoLFxuICAgICAgICBhdHRyaWJ1dGVOYW1lID0gJycsXG4gICAgICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0TW9kZWwodGhpcy5uYW1lKSxcbiAgICAgICAgdHlwZSA9ICcnO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG5cbiAgICAgICAgLy8gdXBzZXJ0IGNhc2VcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjYXNlIG9mIHVwZGF0ZSBvZiBfaWRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXBkYXRlLl9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXBkYXRlLl9pZCAhPT0gZG9jc1tpXS5faWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVwZGF0ZVV1aWQoZG9jc1tpXS5faWQsIHVwZGF0ZS5faWQsIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGUuX2lkKSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lICE9PSAnUnVudGltZVNjaGVtYScgJiYgdGhpcy5uYW1lICE9PSAnUnVudGltZU1vZGVsJyAmJiB0aGlzLm5hbWUgIT09ICdSdW50aW1lR2VuZXJhdGVkTW9kZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJG1ldGFtb2RlbC5nZXRNZXRhRGVmKClbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogZG9jc1tpXS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZWxkJzogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiB1cGRhdGVbYXR0cmlidXRlTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlKHRoaXMubmFtZSwgYXR0cmlidXRlTmFtZSwgZG9jc1tpXS5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBtb3JlIGNoZWNrIGluIGNhc2Ugb2Ygc2NoZW1hIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB1cGRhdGVkICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzUnVudGltZSgpICYmICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiBkb2NzW2ldLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpZWxkJzogYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogdXBkYXRlW2F0dHJpYnV0ZU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi4gPGJyPlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnJlbW92ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMucmVtb3ZlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSk7IDxicj5cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBvYmplY3QgPSB7fTtcblxuICAgIHF1ZXJ5ID0gcXVlcnkgfHwgbnVsbDtcblxuICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKSB7XG4gICAgICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX3JlbW92ZShjcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbGxlY3Rpb24nOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNSdW50aW1lKCkgJiYgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgIGlmIChjb3JlRGIuaW5kZXhPZih0aGlzLm5hbWUpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc1J1bnRpbWUoKSAmJiAkaGVscGVyLmdldFJ1bnRpbWUoKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgJGhlbHBlci5nZXRSdW50aW1lKCkucmVxdWlyZSgnZGInKS5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbic6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGNvdW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgaW4gdGhlIGNvbGxlY3Rpb25cbiAqL1xuUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgICAgIG9iamVjdElkID0gJyc7XG4gICAgZm9yIChvYmplY3RJZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiUnVudGltZURhdGFiYXNlQ29sbGVjdGlvblwifX17ey9jcm9zc0xpbmt9fS5cbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gY29sbGVjdGlvbihuYW1lKSB7XG4gICAgZXhwb3J0c1tuYW1lXSA9IG5ldyBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufVxuXG5cbi8qXG4gKiBJbXBvcnQvRXhwb3J0IGEgUnVudGltZSBzeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZVxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBSdW50aW1lIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBSdW50aW1lIHN5c3RlbSBvciB0aGUgaWYgb2YgdGhlIGN1cnJlbnQgUnVudGltZSBzeXN0ZW1cbiAqL1xuZnVuY3Rpb24gc3lzdGVtKGltcG9ydGVkU3lzdGVtKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgICAgICBjb21wb25lbnRJZCA9ICcnLFxuICAgICAgICB0eXBlTmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWFOYW1lID0gJycsXG4gICAgICAgIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBiZWhhdmlvcklkID0gJycsXG4gICAgICAgIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgaWQgPSBudWxsLFxuICAgICAgICBkYkR1bXAgPSBudWxsLFxuICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIG1vZGVsc1xuICAgICAgICBmb3IgKG1vZGVsTmFtZSBpbiBpbXBvcnRlZFN5c3RlbS5tb2RlbHMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwubW9kZWwoaW1wb3J0ZWRTeXN0ZW0ubW9kZWxzW21vZGVsTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuaW5zZXJ0KGltcG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGNvbGxlY3Rpb25OYW1lIGluIGltcG9ydGVkU3lzdGVtLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29tcG9uZW50SWQgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50c1tjb2xsZWN0aW9uTmFtZV1bY29tcG9uZW50SWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlc2V0IGluZm8gaWYgYWxyZWFkeSBhIG1hc3RlciBzeXN0ZW1cbiAgICAgICAgc3lzdGVtcyA9IGV4cG9ydHMuUnVudGltZVN5c3RlbS5maW5kKHtcbiAgICAgICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChzeXN0ZW1zWzBdLl9pZCA9PT0gaW1wb3J0ZWRTeXN0ZW0uX2lkKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzeXN0ZW1zWzBdLm1hc3RlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5zZXJ0IHRoZSBzeXN0ZW0gaW4gREJcbiAgICAgICAgZXhwb3J0cy5SdW50aW1lU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICAgICAgcmVzdWx0ID0gaW1wb3J0ZWRTeXN0ZW0uX2lkO1xuXG4gICAgfSBlbHNlIHsgLy8gZXhwb3J0XG4gICAgICAgIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5SdW50aW1lU3lzdGVtLmZpbmQoe1xuICAgICAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIG1hc3RlcnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgICAgICAgICBpZCA9IG1hc3RlcnN5c3RlbS5faWQ7XG5cbiAgICAgICAgICAgIC8vIHByb3BcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLl9pZCA9IGlkO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0ubmFtZSA9IG1hc3RlcnN5c3RlbS5uYW1lO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS52ZXJzaW9uID0gbWFzdGVyc3lzdGVtLnZlcnNpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5tYXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uc3Vic3lzdGVtID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIGR1bXBcbiAgICAgICAgICAgIGRiRHVtcCA9IGR1bXAoKTtcbiAgICAgICAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gZGJEdW1wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRiRHVtcC5oYXNPd25Qcm9wZXJ0eShjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW1bY29sbGVjdGlvbk5hbWVdID0gZGJEdW1wW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoYmVoYXZpb3JJZCBpbiBleHBvcnRlZFN5c3RlbS5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvciA9IGV4cG9ydGVkU3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvcklkXTtcbiAgICAgICAgICAgICAgICBpZiAoYmVoYXZpb3Iuc3RhdGUgPT09ICdtYWluJyB8fCBiZWhhdmlvci5zdGF0ZSA9PT0gJ3N0YXJ0JyB8fCBiZWhhdmlvci5zdGF0ZSA9PT0gJ3N0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yLmNvbXBvbmVudCA9IGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCJ7fVwiO1xuICAgICAgICAgICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIFJ1bnRpbWUgc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgUnVudGltZSBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICAgIHZhciBzeXN0ZW0gPSB7fSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGRlZmF1bHROYW1lID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZTtcbiAgICB9XG5cbiAgICBzeXN0ZW0ubmFtZSA9IHBhcmFtcy5uYW1lIHx8ICdzdWJfJyArIGRlZmF1bHROYW1lO1xuICAgIHN5c3RlbS52ZXJzaW9uID0gcGFyYW1zLnZlcnNpb24gfHwgJzAuMC4xJztcbiAgICBzeXN0ZW0uZGVzY3JpcHRpb24gPSBwYXJhbXMuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgICBzeXN0ZW0uc3Vic3lzdGVtID0gdHJ1ZTtcblxuICAgIC8vIHNjaGVtYXNcbiAgICBzeXN0ZW0uc2NoZW1hcyA9IHt9O1xuICAgIGlmIChwYXJhbXMuc2NoZW1hcykge1xuICAgICAgICByZXN1bHQgPSBleHBvcnRzLlJ1bnRpbWVTY2hlbWEuZmluZChwYXJhbXMuc2NoZW1hKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnNjaGVtYXNbc2NoZW1hLl9pZF0gPSBzY2hlbWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RlbHNcbiAgICBzeXN0ZW0ubW9kZWxzID0ge307XG4gICAgaWYgKHBhcmFtcy5tb2RlbHMpIHtcbiAgICAgICAgcmVzdWx0ID0gZXhwb3J0cy5SdW50aW1lTW9kZWwuZmluZChwYXJhbXMubW9kZWxzKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vZGVsID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5tb2RlbHNbbW9kZWwuX2lkXSA9IG1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuUnVudGltZVR5cGUuZmluZChwYXJhbXMudHlwZXMpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHlwZSA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghdHlwZS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS50eXBlc1t0eXBlLl9pZF0gPSB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3JzXG4gICAgc3lzdGVtLmJlaGF2aW9ycyA9IHt9O1xuICAgIGlmIChwYXJhbXMuYmVoYXZpb3JzKSB7XG4gICAgICAgIGJlaGF2aW9yID0gZXhwb3J0cy5SdW50aW1lQmVoYXZpb3IuZmluZChwYXJhbXMuYmVoYXZpb3JzKTtcblxuICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJlaGF2aW9yID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCFiZWhhdmlvci5jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmJlaGF2aW9yc1tiZWhhdmlvci5faWRdID0gYmVoYXZpb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRzXG4gICAgc3lzdGVtLmNvbXBvbmVudHMgPSB7fTtcbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgZm9yIChjbGFzc05hbWUgaW4gcGFyYW1zLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdID0ge307XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBleHBvcnRzW2NsYXNzTmFtZV0uZmluZChwYXJhbXMuY29tcG9uZW50c1tjbGFzc05hbWVdKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbS5jb21wb25lbnRzW2NsYXNzTmFtZV1bY29tcG9uZW50Ll9pZF0gPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN5c3RlbSk7XG59XG5cblxuLypcbiAqIENsZWFyIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9ICcnO1xuXG4gICAgLy8gcmVtb3ZlIGNvbGxlY3Rpb25zXG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgaW50ZXJuYWwgY29sbGVjdGlvbnNcbiAgICBsZW5ndGggPSBpbnRlcm5hbERCLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBpbnRlcm5hbERCW2ldO1xuICAgICAgICBleHBvcnRzW2NvbGxlY3Rpb25OYW1lXS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEluaXQgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIHJ1bnRpbWVTeXN0ZW1JZCA9ICcnLFxuICAgICAgICBydW50aW1lU3lzdGVtID0gbnVsbDtcblxuICAgIHJ1bnRpbWVTeXN0ZW0gPSBleHBvcnRzLlJ1bnRpbWVTeXN0ZW0uZmluZCh7XG4gICAgICAgICdfaWQnOiAnZTg5YzYxN2I2YjE1ZDI0J1xuICAgIH0pWzBdO1xuXG4gICAgLy8gY2xlYXIgYWxsIHRoZSBkYXRhIGluIG1lbW9yeVxuICAgIGV4cG9ydHMuY2xlYXIoKTtcbiAgICAkY29tcG9uZW50LmNsZWFyKCk7XG4gICAgJG1ldGFtb2RlbC5jbGVhcigpO1xuICAgICRzdGF0ZS5jbGVhcigpO1xuICAgICRiZWhhdmlvci5jbGVhcigpO1xuXG4gICAgLy8gaW5pdCBtZXRhbW9kZWxcbiAgICAkbWV0YW1vZGVsLmluaXQoKTtcblxuICAgIC8vIHJlaW1wb3J0IFJ1bnRpbWUgY29yZSBzeXN0ZW1cbiAgICBydW50aW1lU3lzdGVtSWQgPSBleHBvcnRzLnN5c3RlbShydW50aW1lU3lzdGVtKTtcbiAgICAkY29tcG9uZW50LmdldChydW50aW1lU3lzdGVtSWQpLm1haW4oKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIFJ1bnRpbWUgZGF0YWJhc2UuIDxicj5cbiAqIFJ1bnRpbWUgZGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBSdW50aW1lIGRhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIFJ1bnRpbWUgbWV0YW1vZGVsIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBSdW50aW1lIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICAgXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQGNsYXNzIHJ1bnRpbWUtZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIlJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBSdW50aW1lIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdHMgYWxsIHRoZSBjb2xsZWN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKlxuICogSW1wb3J0L0V4cG9ydCBhIFJ1bnRpbWUgc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIFJ1bnRpbWUgc3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIFJ1bnRpbWUgc3lzdGVtIG9yIHRoZSBjdXJyZW50IFJ1bnRpbWUgc3lzdGVtICBcbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG5cblxuLyoqXG4gKiBFeHBvcnQgYSBSdW50aW1lIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIFJ1bnRpbWUgc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmV4cG9ydHMuc3Vic3lzdGVtID0gc3Vic3lzdGVtO1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBJbml0IHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0OyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAY2xhc3MgcnVudGltZS1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cblxudmFyIHJ1bnRpbWVSZWYgPSBudWxsO1xuXG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYSBSdW50aW1lIGluc3RhbmNlIGV4aXN0cy5cbiAqIEBtZXRob2QgaXNSdW50aW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc1J1bnRpbWUoKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKCRkYi5SdW50aW1lICYmICRkYi5SdW50aW1lLmZpbmQoKS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm4ge1J1bnRpbWV9IFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgICB2YXIgcnVudGltZUlkID0gJycsXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoIXJ1bnRpbWVSZWYpIHtcbiAgICAgICAgcnVudGltZUlkID0gJGRiLlJ1bnRpbWUuZmluZCgpWzBdLl9pZDtcbiAgICAgICAgcnVudGltZVJlZiA9ICRjb21wb25lbnQuZ2V0KHJ1bnRpbWVJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bnRpbWVSZWY7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIGEgdXVpZC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHV1aWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIHJldHVybiBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59XG5cblxuLypcbiAqIEFkZCBQb2x5ZmlsbFxuICogQG1ldGhvZCBwb2x5ZmlsbFxuICovXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcblxuICAgIC8vIGZpeGluZyBjb25zdHJ1Y3Rvci5uYW1lIHByb3BlcnR5IGluIElFXG4gICAgLy8gdGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1MTQwNzIzL2NvbnN0cnVjdG9yLW5hbWUtaXMtdW5kZWZpbmVkLWluLWludGVybmV0LWV4cGxvcmVyXG4gICAgaWYgKEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSB1bmRlZmluZWQgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ25hbWUnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygodGhpcykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkgeyB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCB0aGUgbW9kdWxlcy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtaGVscGVyXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAY2xhc3MgcnVudGltZS1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogR2V0IFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldFJ1bnRpbWVcbiAqIEByZXR1cm4ge1J1bnRpbWV9IFJ1bnRpbWUgaW5zdGFuY2VcbiAqL1xuZXhwb3J0cy5nZXRSdW50aW1lID0gZ2V0UnVudGltZTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgUnVudGltZSBpbnN0YW5jZSBleGlzdHMuXG4gKiBAbWV0aG9kIGlzUnVudGltZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIFJ1bnRpbWUgaW5zdGFuY2UgZXhpc3RcbiAqL1xuZXhwb3J0cy5pc1J1bnRpbWUgPSBpc1J1bnRpbWU7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHV1aWQuXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGdlbmVyYXRlSWQ7XG5cblxuLyoqXG4gKiBBZGQgUG9seWZpbGxcbiAqIEBtZXRob2QgcG9seWZpbGxcbiAqL1xuZXhwb3J0cy5wb2x5ZmlsbCA9IHBvbHlmaWxsOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWhlbHBlclxuICogQGNsYXNzIHJ1bnRpbWUtbG9nXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgSUQgPSAnX2lkJyxcbiAgICBOQU1FID0gJ19uYW1lJyxcbiAgICBjdXJyZW50TGV2ZWwgPSAnd2FybicsXG4gICAgbG9nZ2VyUmVmID0gbnVsbCxcbiAgICBmYWtlTG9nZ2VyUmVmID0ge1xuICAgICAgICBjdXJyZW50TGV2ZWw6ICd3YXJuJyxcbiAgICAgICAgbGV2ZWw6IGZ1bmN0aW9uIGRlYnVnKGxldmVsTmFtZSkge1xuICAgICAgICAgICAgaWYgKGxldmVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gbGV2ZWxOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudExldmVsO1xuICAgICAgICB9LFxuICAgICAgICBkZWJ1ZzogZnVuY3Rpb24gZGVidWcobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5mbzogZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPT09ICdpbmZvJyB8fCB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygncnVudGltZTogJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXJuOiBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZXZlbCA9PT0gJ2luZm8nIHx8IHRoaXMuY3VycmVudExldmVsID09PSAnd2FybicgfHwgdGhpcy5jdXJyZW50TGV2ZWwgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8qXG4gKiBHZXQgdGhlIFJ1bnRpbWVMb2dnZXIgaW5zdGFuY2UuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHJldHVybiB7UnVudGltZUxvZ2dlcn0gUnVudGltZUxvZ2dlciBpbnN0YW5jZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICAgIHZhciBsb2dnZXJJZCA9ICcnLFxuICAgICAgICBsb2dnZXJzID0gW10sXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICBpZiAoISRtZXRhbW9kZWwuZ2V0TW9kZWwoJ1J1bnRpbWVMb2dnZXInKSkge1xuICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcnMgPSAkZGIuUnVudGltZUxvZ2dlci5maW5kKCk7XG4gICAgICAgIGlmIChsb2dnZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VySWQgPSBsb2dnZXJzWzBdW0lEXTtcblxuICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlclJlZiA9ICRjb21wb25lbnQuZ2V0KGxvZ2dlcklkKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsb2dnZXJSZWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZha2VMb2dnZXJSZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWtlTG9nZ2VyUmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBTZXQgdGhlIGxldmVsIG9mIHRoZSBsb2cuXG4gKiBAbWV0aG9kIGxldmVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbGV2ZWxOYW1lIG5hbWUgb2YgdGhlIGxldmVsXG4gKi9cbmZ1bmN0aW9uIGxldmVsKGxldmVsTmFtZSkge1xuICAgIGN1cnJlbnRMZXZlbCA9IGxldmVsTmFtZTtcbn1cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKHNjaGVtYVtOQU1FXSkge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgc2NoZW1hW05BTUVdICsgXCInXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIGEgbW9kZWxcIjtcbiAgICB9XG5cbiAgICBnZXRMb2dnZXIoKS53YXJuKG1lc3NhZ2UpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlKHByb3BlcnR5TmFtZSwgdHlwZSwgcHJvcGVydHkpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZW9mIHByb3BlcnR5ICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHZhbHVlIGZvciB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcIidcIiArIHZhbHVlICsgXCInIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSB0eXBlIGVudW0gJ1wiICsgdHlwZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZnVuY3Rpb24gaW52YWxpZENsYXNzTmFtZShjb21wb25lbnRJZCwgdHlwZSwgY29uc3RydWN0b3JOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcIm1pc3NpbmcgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBBIGNsYXNzIGRlZmluaXRpb24gaXMgbWlzc2luZy5cbiAqIEBtZXRob2QgbWlzc2luZ0ltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtaXNzaW5nIHNjaGVtYVxuICovXG5mdW5jdGlvbiBtaXNzaW5nSW1wbGVtZW50YXRpb24obmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBtaXNzaW5nLlwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZXJyb3IoXCJ0aGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgb2YgdGhlIG1vZGVsICdcIiArIGNsYXNzTmFtZSArIFwiJyBpcyBpbnZhbGlkXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIHNjaGVtYSkge1xuICAgIGdldExvZ2dlcigpLmVycm9yKFwidGhlIG1vZGVsICdcIiArIHNjaGVtYSArIFwiJyBoYXMgYW4gdW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgYSB0eXBlIGRlZmluaXRpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHR5cGUgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgbmFtZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIGNsYXNzTmFtZSwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIGNsYXNzSW5mbyA9ICcnO1xuXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjbGFzc0luZm8gPSBcIiAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKVwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvICsgXCI6IGV4cGVjdGVkICdcIiArIHR5cGUucmVwbGFjZSgnQCcsICcnKSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5IHR5cGUgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjbGFzc0luZm8gKyBcIjogZXhwZWN0ZWQgJ3N0cmluZycgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgdHlwZSArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiByZWFkT25seVByb3BlcnR5KGlkLCBjbGFzc05hbWUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBjbGFzc0luZm8gPSAnJztcblxuICAgIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgICB9XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImNhbiBub3Qgc2V0IHJlYWQtb25seSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIgKyBjbGFzc0luZm8pO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgUnVudGltZSBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChkb2MsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgZG9jdW1lbnQgJ1wiICsgSlNPTi5zdHJpbmdpZnkoZG9jKS5yZXBsYWNlKC8sL2csICcsICcpICsgXCInIG9uIGFuIGluc2VydCBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKGNvbGxlY3Rpb25OYW1lLCBpZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSB3aGVuIHRyeWluZyB0byB1cGRhdGUgdGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvZiBkb2N1bWVudCAnXCIgKyBpZCArIFwiJyAoY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJykgd2l0aCB0aGUgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlWYWx1ZSkgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJ1wiKTtcbn1cblxuLypcbiAqIFVua29udyBwcm9wZXJ0eSBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShwcm9wZXJ0eU5hbWUsIGNvbGxlY3Rpb25OYW1lLCBpZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgd2l0aCBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgZm9yIHRoZSBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZENvbGxlY3Rpb25OYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgbmFtZSBmb3IgY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaW4gdGhlIG1ldGFtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwZWN0ZWRUeXBlIGV4cGVjdGVkIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGN1cnJlbnQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUmVzdWx0VHlwZShpZCwgY2xhc3NOYW1lLCBtZXRob2ROYW1lLCBleHBlY3RlZFR5cGUsIHR5cGUpIHtcbiAgICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIiArIGNsYXNzSW5mbyArIFwiOiBleHBlY3RlZCB0eXBlICdcIiArIGV4cGVjdGVkVHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZSArIFwiJ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgcmVzdWx0IG9mIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvICsgXCI6IGV4cGVjdGVkIHR5cGUgJ1wiICsgZXhwZWN0ZWRUeXBlICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInVua293biBjbGFzcyBjb21wb25lbnQgJ1wiICsgY2xhc3NOYW1lICsgXCInIGZvciBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50SWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybigncnVudGltZSBoYXMgYmVlbiByZXN0YXJ0ZWQnKTtcbn1cblxuXG4vKlxuICogaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1OdW1iZXIoaWQsIGNsYXNzTmFtZSwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBjbGFzc0luZm8gPSAnJztcblxuICAgIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgICB9XG5cbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiICsgY2xhc3NJbmZvKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIFxuICovXG5mdW5jdGlvbiBpbnZhbGlkUGFyYW1UeXBlKGlkLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUsIHBhcmFtTmFtZSkge1xuICAgIHZhciBjbGFzc0luZm8gPSAnJztcblxuICAgIGlmIChjbGFzc05hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY2xhc3NJbmZvID0gXCIgKGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJylcIjtcbiAgICB9XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIiArIGNsYXNzSW5mbyk7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gYWRkIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgZm9yIHRoZSBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgdG8gcmVtb3ZlIGEgYmVoYXZpb3IgZnJvbSBhbiB1bmt3b3duIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiY2FuIG5vdCBleHBvcnQgdGhlIGRhdGFiYXNlIGJlY2F1c2Ugbm8gc3lzdGVtIHdhcyBkZWZpbmVkXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGVOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdW5rbm93blR5cGUodmFsdWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNhbiBub3QgeWV0IHZhbGlkYXRlIGlmIHRoZSBjb21wb25lbnQgJ1wiICsgaWQgKyBcIicgaXMgYW4gaW5zdGFuY2Ugb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qKlxuICogQSBtZXNzYWdlIHNlbmQgYnkgdGhlIGNoYW5uZWwgaXMgaW52YWxpZFxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqL1xuZnVuY3Rpb24gaW52YWxpZENoYW5uZWxFdmVudChtZXNzYWdlLCBldmVudE5hbWUsIHR5cGUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciB0aGUgbWVzc2FnZSAnXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArIFwiJzogZXhwZWN0ZWQgdHlwZSAnXCIgKyB0eXBlICsgXCInIGZvciBldmVudCAnXCIgKyBldmVudE5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYW4gYWN0aW9uIGFkZCB3aXRoIG9uIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKGlkLCBjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgY2xhc3NJbmZvID0gJyc7XG5cbiAgICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNsYXNzSW5mbyA9IFwiIChjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicpXCI7XG4gICAgfVxuICAgIGdldExvZ2dlcigpLndhcm4oXCJpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzIHdoZW4gYWRkaW5nIGFuIGFjdGlvbiBvbiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIiArIGNsYXNzSW5mbyk7XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICsgY3VycmVudElkICsgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgKyBuZXdJZCArIFwiJyB0aGF0IGlzIGFscmVhZHkgdXNlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS53YXJuKFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgKyBjdXJyZW50SWQgKyBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArIG5ld0lkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVHJ5IHRvIGNoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQgdGhhdCBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gKiBAbWV0aG9kIGludmFsaWRVc2VPZkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFVzZU9mQ29tcG9uZW50KGlkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gYWRkIGFuIGludmFsaWQgc2NoZW1hLlxuICogQG1ldGhvZCBpbnZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFNjaGVtYShuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBtb2RlbC5cbiAqIEBtZXRob2QgaW52YWxpZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBpbnZhbGlkTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0aGUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJyBpcyBub3QgdmFsaWRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcGFyYW1ldGVycyBzZXQgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbWV0ZXJzKGNsYXNzSWQpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBnZXQgdGhlIHByb3BlcnR5IG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZGVzdHJveWVkQ29tcG9uZW50Q2FsbFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGVzdHJveWVkQ29tcG9uZW50Q2FsbChwcm9wZXJ0eU5hbWUsIGlkKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRyeWluZyB0byBnZXQgdGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0IGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnMob2JqZWN0LCBuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcInRoZSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgJ1wiICsgSlNPTi5zdHJpbmdpZnkob2JqZWN0KS5yZXBsYWNlKC8sL2csICcsICcpICsgXCInIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCBhbiBvYmplY3RcIik7XG59XG5cblxuLypcbiAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgYW4gdW5rb3duIG1vZGVsLlxuICogQG1ldGhvZCB1bmtub3duTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiB1bmtub3duTW9kZWwoY2xhc3NJZCkge1xuICAgIGdldExvZ2dlcigpLndhcm4oXCJ0cnkgZ2V0IHRoZSBpbmZvcm1hdGlvbiBvZiBhbiB1bmtub3duIG1vZGVsICdcIiArIGNsYXNzSWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgc2NoZW1hIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBtaXNzaW5nU2NoZW1hKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwidGhlIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGlzIG1pc3NpbmdcIik7XG59XG5cblxuLypcbiAqIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5mdW5jdGlvbiBjeWNsaWNEZXBlbmRlbmN5KG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcignYSBjeWNsaWMgaW5oZXJpdGFuY2UgZGVwZW5kZW5jeSB3aXRoIFxc4oCZJyArIG5hbWUgKyAnXFzigJkgc2NoZW1hIGhhcyBiZWVuIGZvdW5kLCBwbGVhc2UgY2hlY2sgdGhlIFxcJ19pbmhlcml0XFwnIHByb3BlcnRpZXMgb2YgeW91ciBzY2hlbWFzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoJ2EgY3ljbGljIGluaGVyaXRhbmNlIGRlcGVuZGVuY3kgaGFzIGJlZW4gZm91bmQsIHBsZWFzZSBjaGVjayB0aGUgXFwnX2luaGVyaXRcXCcgcHJvcGVydGllcyBvZiB5b3VyIHNjaGVtYXMnKTtcbiAgICB9XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIG5hbWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGVOYW1lIG9mIHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRFbnVtVHlwZSh2YWx1ZSwgdHlwZU5hbWUsIHR5cGUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCB0eXBlIGZvciBlbnVtZXJhdGVkIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mIHR5cGUgJ1wiICsgdHlwZW9mIHZhbHVlICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBMb2FkIHNjaGVtYS5cbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGxvYWRTY2hlbWEobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogTG9hZCBtb2RlbC5cbiAqIEBtZXRob2QgbG9hZE1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBsb2FkTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwibG9hZCBtb2RlbCAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBMb2FkIHR5cGUuXG4gKiBAbWV0aG9kIGxvYWRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGxvYWRUeXBlKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImxvYWQgdHlwZSAnXCIgKyBuYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDb21waWxlIHNjaGVtYS5cbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTY2hlbWEobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwiY29tcGlsZSBzY2hlbWEgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn1cblxuXG4vKlxuICogR2VuZXJhdGUgbW9kZWwuXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwiZ2VuZXJhdGUgbW9kZWwgJ1wiICsgbmFtZSArIFwiJy4uLlwiKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgbW9kZWwuXG4gKiBAbWV0aG9kIGNoZWNrTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmZ1bmN0aW9uIGNoZWNrTW9kZWwobmFtZSkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwiYW5hbHl6ZSBtb2RlbCAnXCIgKyBuYW1lICsgXCInLi4uXCIpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS5kZWJ1ZyhcImNyZWF0ZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIidcIik7XG59XG5cbi8qXG4gKiBDcmVhdGUgY2xhc3MuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhuYW1lKSB7XG4gICAgZ2V0TG9nZ2VyKCkuZGVidWcoXCJjcmVhdGUgY2xhc3MgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogQmVnaW5zIG1vZGVsIGNyZWF0aW9uLlxuICogQG1ldGhvZCBtb2RlbENyZWF0aW9uQmVnaW5cbiAqL1xuZnVuY3Rpb24gbW9kZWxDcmVhdGlvbkJlZ2luKCkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwic3RhcnRpbmcgbW9kZWwgY3JlYXRpb24uLi5cIik7XG59XG5cblxuLypcbiAqIEVuZCBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkVuZFxuICovXG5mdW5jdGlvbiBtb2RlbENyZWF0aW9uRW5kKCkge1xuICAgIGdldExvZ2dlcigpLmRlYnVnKFwibW9kZWwgY3JlYXRpb24gZW5kZWRcIik7XG59XG5cblxuLypcbiAqIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvci5cbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjb21wb25lbnQgY2xhc3MgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gYWN0aW9uSW52b2tlRXJyb3Ioc3RhdGUsIGlkLCBjbGFzc05hbWUsIG1lc3NhZ2UpIHtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGdldExvZ2dlcigpLmVycm9yKFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJyAoY2xhc3MgJ1wiICsgY2xhc3NOYW1lICsgXCInKTogXCIgKyBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIic6IFwiICsgbWVzc2FnZSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBJbnZhbGlkIG5hbWUgZm9yIHRoZSBwcm9wZXJ0eSBvZiBhIHNjaGVtYS5cbiAqIEBtZXRob2QgaW52YWxpZFNjaGVtYVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU2NoZW1hUHJvcGVydHkobmFtZSwgcHJvcE5hbWUpIHtcbiAgICBnZXRMb2dnZXIoKS53YXJuKFwiaW52YWxpZCBwcm9wZXJ0eSAnXCIgKyBwcm9wTmFtZSArIFwiJyBmb3Igc2NoZW1hICdcIiArIG5hbWUgKyBcIic6IG9ubHkgJ3Byb3BlcnR5JywgJ2xpbmsnLCAnY29sbGVjdGlvbicsICdtZXRob2QnIGFuZCAnZXZlbnQnIGFyZSBhbGxvd2VkLlwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBmb3JtYXQgZm9yIHRoZSBkZWZpbml0aW9uIG9mIGEgcHJvcGVydHlcbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5Rm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlGb3JtYXQob2JqKSB7XG4gICAgZ2V0TG9nZ2VyKCkud2FybihcImludmFsaWQgZm9ybWF0IGZvciBhIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eSc6ICdcIiArIG9iaiArIFwiJyBpcyBub3QgYW4gb2JqZWN0XCIpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAY2xhc3MgcnVudGltZS1sb2dcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogU2V0IHRoZSBsZXZlbCBvZiB0aGUgbG9nLlxuICogQG1ldGhvZCBsZXZlbFxuICogQHBhcmFtIHtTdHJpbmd9IGxldmVsTmFtZSBuYW1lIG9mIHRoZSBsZXZlbFxuICovXG5leHBvcnRzLmxldmVsID0gbGV2ZWw7XG5cblxuLyoqXG4gKiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgdGhlIHNjaGVtYSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5ID0gdW5rbm93blByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlID0gaW52YWxpZFByb3BlcnR5VHlwZTtcblxuXG4vKipcbiAqIEludmFsaWQgdmFsdWUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVZhbHVlID0gaW52YWxpZEVudW1WYWx1ZTtcblxuXG4vKipcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzTmFtZSA9IGludmFsaWRDbGFzc05hbWU7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IG1pc3NpbmdQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1pc3Npbmcgc2NoZW1hXG4gKi9cbmV4cG9ydHMubWlzc2luZ0ltcGxlbWVudGF0aW9uID0gbWlzc2luZ0ltcGxlbWVudGF0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlSW1wID0gaW52YWxpZFR5cGVJbXA7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHlJbXAgPSBtaXNzaW5nUHJvcGVydHlJbXA7XG5cblxuLyoqXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eUltcCA9IHVua25vd25Qcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGEgdHlwZSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVEZWZpbml0aW9uID0gaW52YWxpZFR5cGVEZWZpbml0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCBwcm9wZXJ0eSB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gaW52YWxpZFByb3BlcnR5TmFtZTtcblxuXG4vKipcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSByZWFkT25seVByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIFJ1bnRpbWUgZGF0YWJhc2UgaW5zZXJ0IG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZERvY3VtZW50T25EYkluc2VydFxuICogQHBhcmFtIHtTdHJpbmd9IGRvYyBhIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKi9cbmV4cG9ydHMuaW52YWxpZERvY3VtZW50T25EYkluc2VydCA9IGludmFsaWREb2N1bWVudE9uRGJJbnNlcnQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgUnVudGltZSBkYXRhYmFzZSB1cGRhdGUgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZSA9IGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlO1xuXG5cbi8qKlxuICogQ2FsbCBhbiB1bmtub3duIG1ldGhvZCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duTWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICovXG5leHBvcnRzLnVua25vd25NZXRob2QgPSB1bmtub3duTWV0aG9kO1xuXG5cbi8qKlxuICogVHJ5IHRvIGNyZWF0ZSBhbiBpbnZhbGlkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGludmFsaWRDb2xsZWN0aW9uTmFtZTtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb3QgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGV4cGVjdGVkVHlwZSBleHBlY3RlZCB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBjdXJyZW50IHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUmVzdWx0VHlwZSA9IGludmFsaWRSZXN1bHRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bkNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlmIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gdW5rbm93bkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRoZSBSdW50aW1lIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZXhwb3J0cy53b3JrZmxvd1Jlc3RhcnRlZCA9IHdvcmtmbG93UmVzdGFydGVkO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlciA9IGludmFsaWRQYXJhbU51bWJlcjtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBwYXJhbWV0ZXJzIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWUgbmFtZSBvZiB0aGUgcGFyYW1ldGVyXG4gKiBcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1UeXBlID0gaW52YWxpZFBhcmFtVHlwZTtcblxuXG4vKipcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0cy5iZWhhdmlvck5vdFVuaXF1ZSA9IGJlaGF2aW9yTm90VW5pcXVlO1xuXG5cbi8qKlxuICogQ2FuIG5vdCBhZGQgYSBiZWhhdmlvciB3aXRoIGFuIGludmFsaWQgc3RhdGUuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT24gPSBpbnZhbGlkU3RhdGVPbjtcblxuXG4vKipcbiAqIFRoZSBjYWxsIHRvIGEgcmVtb3ZlIHN0YXRlIG9mIHRoZSBiZWhhdmlvciBtb2R1bGUgaXMgaW52YWxpZC5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT2ZmXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuaW52YWxpZFN0YXRlT2ZmID0gaW52YWxpZFN0YXRlT2ZmO1xuXG5cbi8qKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5leHBvcnRzLm1hc3RlclN5c3RlbU5vdEZvdW5kID0gbWFzdGVyU3lzdGVtTm90Rm91bmQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgb2YgdGhlIHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSBleHBlY3RlYyB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlID0gaW52YWxpZFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIHR5cGUuXG4gKiBAbWV0aG9kIHVua25vd25UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgdmFsdWVcbiAqL1xuZXhwb3J0cy51bmtub3duVHlwZSA9IHVua25vd25UeXBlO1xuXG5cbi8qKlxuICogQSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGFscmVheSBjcmVhdGVkLlxuICogQG1ldGhvZCBjYW5Ob3RZZXRWYWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy5jYW5Ob3RZZXRWYWxpZGF0ZSA9IGNhbk5vdFlldFZhbGlkYXRlO1xuXG5cbi8qKlxuICogQSBtZXNzYWdlIHNlbmQgYnkgdGhlIGNoYW5uZWwgaXMgaW52YWxpZFxuICogQG1ldGhvZCBpbnZhbGlkQ2hhbm5lbEV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2hhbm5lbEV2ZW50ID0gaW52YWxpZENoYW5uZWxFdmVudDtcblxuXG4vKipcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYW4gYWN0aW9uIGFkZCB3aXRoIG9uIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT24gPSBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbjtcblxuXG4vKipcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IHVwZGF0ZVV1aWQ7XG5cblxuLyoqXG4gKiBVbmtvbncgcHJvcGVydHkgb24gYSBSdW50aW1lIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZSA9IHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICogQG1ldGhvZCBpbnZhbGlkZVVzZU9mQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRVc2VPZkNvbXBvbmVudCA9IGludmFsaWRVc2VPZkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRyeSB0byBhZGQgYW4gaW52YWxpZCBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRTY2hlbWEgPSBpbnZhbGlkU2NoZW1hO1xuXG5cbi8qKlxuICogVHJ5IHRvIGFkZCBhbiBpbnZhbGlkIG1vZGVsLlxuICogQG1ldGhvZCBpbnZhbGlkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuaW52YWxpZE1vZGVsID0gaW52YWxpZE1vZGVsO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXJzIHNldCB3aGVuIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUGFyYW1ldGVycyA9IGludmFsaWRQYXJhbWV0ZXJzO1xuXG5cbi8qKlxuICogVHJ5IHRvIGdldCB0aGUgcHJvcGVydHkgb2YgYSBkZXN0cm95ZWQgY29tcG9uZW50LlxuICogQG1ldGhvZCBkZXN0cm95ZWRDb21wb25lbnRDYWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmRlc3Ryb3llZENvbXBvbmVudENhbGwgPSBkZXN0cm95ZWRDb21wb25lbnRDYWxsO1xuXG5cbi8qKlxuICogSW52YWxpZCBwYXJhbWV0ZXIgdHlwZSAgd2hlbiBjcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBpbnZhbGlkQ29uY3RydWN0b3JQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqZWN0IGNvbmZpZ3VyYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHNjaGVtYSBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZENvbmN0cnVjdG9yUGFyYW1ldGVycyA9IGludmFsaWRDb25jdHJ1Y3RvclBhcmFtZXRlcnM7XG5cblxuLyoqXG4gKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIGFuIHVua293biBtb2RlbC5cbiAqIEBtZXRob2QgdW5rbm93bk1vZGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBpZCBvZiB0aGUgY2xhc3NcbiAqL1xuZXhwb3J0cy51bmtub3duTW9kZWwgPSB1bmtub3duTW9kZWw7XG5cblxuLyoqXG4gKiBBIHNjaGVtYSBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5taXNzaW5nU2NoZW1hID0gbWlzc2luZ1NjaGVtYTtcblxuXG4vKipcbiAqIEEgY3ljbGljIGRlcGVuZGVuY3kgd2FzIGZvdW5kLlxuICogQG1ldGhvZCBtaXNzaW5nU2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWEgd2hlcmUgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5IHdhcyBmb3VuZFxuICovXG5leHBvcnRzLmN5Y2xpY0RlcGVuZGVuY3kgPSBjeWNsaWNEZXBlbmRlbmN5O1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaW52YWxpZEVudW1UeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZU5hbWUgb2YgdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVR5cGUgPSBpbnZhbGlkRW51bVR5cGU7XG5cblxuLyoqXG4gKiBMb2FkIHNjaGVtYS5cbiAqIEBtZXRob2QgbG9hZFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMubG9hZFNjaGVtYSA9IGxvYWRTY2hlbWE7XG5cblxuLyoqXG4gKiBMb2FkIG1vZGVsLlxuICogQG1ldGhvZCBsb2FkTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMubG9hZE1vZGVsID0gbG9hZE1vZGVsO1xuXG5cbi8qKlxuICogTG9hZCB0eXBlLlxuICogQG1ldGhvZCBsb2FkVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgdHlwZVxuICovXG5leHBvcnRzLmxvYWRUeXBlID0gbG9hZFR5cGU7XG5cblxuLyoqIFxuICogQ29tcGlsZSBzY2hlbWEuXG4gKiBAbWV0aG9kIGNvbXBpbGVTY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmNvbXBpbGVTY2hlbWEgPSBjb21waWxlU2NoZW1hO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgbW9kZWwuXG4gKiBAbWV0aG9kIGdlbmVyYXRlTW9kZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVNb2RlbCA9IGdlbmVyYXRlTW9kZWw7XG5cblxuLyoqXG4gKiBDaGVjayBtb2RlbC5cbiAqIEBtZXRob2QgY2hlY2tNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja01vZGVsID0gY2hlY2tNb2RlbDtcblxuXG4vKipcbiAqIENyZWF0ZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmV4cG9ydHMuY3JlYXRlQ29sbGVjdGlvbiA9IGNyZWF0ZUNvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5leHBvcnRzLmNyZWF0ZUNsYXNzID0gY3JlYXRlQ2xhc3M7XG5cblxuLypcbiAqIEJlZ2lucyBtb2RlbCBjcmVhdGlvbi5cbiAqIEBtZXRob2QgbW9kZWxDcmVhdGlvbkJlZ2luXG4gKi9cbmV4cG9ydHMubW9kZWxDcmVhdGlvbkJlZ2luID0gbW9kZWxDcmVhdGlvbkJlZ2luO1xuXG5cbi8qXG4gKiBFbmQgbW9kZWwgY3JlYXRpb24uXG4gKiBAbWV0aG9kIG1vZGVsQ3JlYXRpb25FbmRcbiAqL1xuZXhwb3J0cy5tb2RlbENyZWF0aW9uRW5kID0gbW9kZWxDcmVhdGlvbkVuZDtcblxuXG4vKipcbiAqIEFuIGVycm9yIGhhcHBlbmVkIHdoZW4gaW52b2tpbmcgYSBiZWhhdmlvci5cbiAqIEBtZXRob2QgYWN0aW9uSW52b2tlRXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBjb21wb25lbnQgY2xhc3MgbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZXhwb3J0cy5hY3Rpb25JbnZva2VFcnJvciA9IGFjdGlvbkludm9rZUVycm9yO1xuXG5cbi8qKlxuICogSW52YWxpZCBuYW1lIGZvciB0aGUgcHJvcGVydHkgb2YgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGludmFsaWRTY2hlbWFQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcE5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU2NoZW1hUHJvcGVydHkgPSBpbnZhbGlkU2NoZW1hUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGZvcm1hdCBmb3IgdGhlIGRlZmluaXRpb24gb2YgYSBwcm9wZXJ0eVxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlGb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogZGVmaW5pdGlvbiBvZiBhIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5Rm9ybWF0ID0gaW52YWxpZFByb3BlcnR5Rm9ybWF0O1xuIiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgUnVudGltZSBtZXRhbW9kZWwuIDxicj5cbiAqIFJ1bnRpbWUgbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBSdW50aW1lRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBydW50aW1lXG4gKiBAc3VibW9kdWxlIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbG9nXG4gKiBAcmVxdWlyZXMgcnVudGltZS1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBydW50aW1lLXdvcmtmbG93XG4gKiBAY2xhc3MgcnVudGltZS1tZXRhbW9kZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBJRCA9ICdfaWQnLFxuICAgIE5BTUUgPSAnX25hbWUnLFxuICAgIERFU0NSSVBUSU9OID0gJ19kZXNjcmlwdGlvbicsXG4gICAgSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuICAgIENMQVNTID0gJ19jbGFzcycsXG4gICAgQ09SRSA9ICdfY29yZScsXG4gICAgTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbiAgICBFVkVOVF9UWVBFID0gJ2V2ZW50JyxcbiAgICBQUk9QRVJUWV9UWVBFID0gJ3Byb3BlcnR5JyxcbiAgICBMSU5LX1RZUEUgPSAnbGluaycsXG4gICAgQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuICAgIGludGVybmFsVHlwZXMgPSBbJ3Byb3BlcnR5JywgJ2NvbGxlY3Rpb24nLCAnbGluaycsICdtZXRob2QnLCAnZXZlbnQnXSxcbiAgICBkZWZhdWx0VHlwZXMgPSBbJ2Jvb2xlYW4nLCAnc3RyaW5nJywgJ251bWJlcicsICdvYmplY3QnLCAnZnVuY3Rpb24nLCAnYXJyYXknLCAnZGF0ZScsICdhbnknXSxcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgbWV0YWRlZjoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgc2NoZW1hczoge30sXG4gICAgICAgIGNvbXBpbGVkU2NoZW1hczoge30sXG4gICAgICAgIG1vZGVsczoge30sXG4gICAgICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9XG4gICAgfTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogR2VuZXJhdGUgdGhlIG1vZGVscy5cbiAqIEBtZXRob2QgZ2VuZXJhdGVNb2RlbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTW9kZWxzKCkge1xuICAgIHZhciBhdHQgPSAnJyxcbiAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICBzY2hlbWFOYW1lID0gJycsXG4gICAgICAgIHNjaGVtYSA9IHt9LFxuICAgICAgICBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxQYXJlbnQgPSBudWxsLFxuICAgICAgICBtb2RlbEV4dCA9IG51bGwsXG4gICAgICAgIG1vZGVsRGVmID0gbnVsbCxcbiAgICAgICAgbW9kZWwgPSB7fSxcbiAgICAgICAgbW9kZWxzID0ge30sXG4gICAgICAgIG1lcmdlZE1vZGVsID0ge30sXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGogPSAwLFxuICAgICAgICBuYkFuY2VzdG9ycyA9IDAsXG4gICAgICAgIHNvcnRJbmhlcml0VHJlZSA9IFtdO1xuXG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICBmb3IgKHNjaGVtYU5hbWUgaW4gc3RvcmUuY29tcGlsZWRTY2hlbWFzKSB7XG4gICAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tzY2hlbWFOYW1lXTtcblxuICAgICAgICAvLyBzZXQgbW9kZWwgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgICAgICBtb2RlbCA9IHtcbiAgICAgICAgICAgIFwiX25hbWVcIjogc2NoZW1hLl9uYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldCBfY29yZVxuICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5fY29yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1vZGVsLl9jb3JlID0gc2NoZW1hLl9jb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGluaGVyaXRcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLl9pbmhlcml0KSkge1xuICAgICAgICAgICAgbW9kZWwuX2luaGVyaXQgPSBzY2hlbWEuX2luaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgY2xhc3NcbiAgICAgICAgaWYgKHR5cGVvZiBzY2hlbWEuX2NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbW9kZWwuX2NsYXNzID0gc2NoZW1hLl9jbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBkZXNjcmlwdGlvbiBcbiAgICAgICAgaWYgKHR5cGVvZiBzY2hlbWEuX2Rlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbW9kZWwuX2Rlc2NyaXB0aW9uID0gc2NoZW1hLl9kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBzZXQgbW9kZWwgZGVmYXVsdCB2YWx1ZXNcbiAgICAgICAgZm9yIChhdHQgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAncHJvcGVydHknOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYW55XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYXR0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2xpbmsnOlxuICAgICAgICAgICAgICAgICAgICBtb2RlbFthdHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQFJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnbWV0aG9kJzpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhdHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWFbYXR0XSA9PT0gJ2V2ZW50JzpcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxbYXR0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFueVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYVthdHRdID09PSAnY29sbGVjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsW2F0dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wiQFJ1bnRpbWVDb21wb25lbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGF0dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogYXR0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHQuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTY2hlbWFQcm9wZXJ0eShzY2hlbWEuX25hbWUsIGF0dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWwuX25hbWVdID0gbW9kZWw7XG4gICAgfVxuXG4gICAgLy8gbW9kZWxzIHRvIG92ZXJyaWRlXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcbiAgICAgICAgbW9kZWxFeHQgPSBzdG9yZS5tb2RlbHNbbmFtZV07XG4gICAgICAgIGlmIChtb2RlbEV4dCkge1xuICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgbW9kZWwpO1xuICAgICAgICAgICAgZGVsZXRlIG1lcmdlZE1vZGVsLl9pZDtcbiAgICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSA9IG1lcmdlZE1vZGVsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5oZXJpdGFuY2VcbiAgICBzb3J0SW5oZXJpdFRyZWUgPSBzb3J0SW5oZXJpdGFuY2VUcmVlKCk7XG5cbiAgICBuYkFuY2VzdG9ycyA9IHNvcnRJbmhlcml0VHJlZS5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IG5iQW5jZXN0b3JzOyBpKyspIHtcbiAgICAgICAgbW9kZWxOYW1lID0gc29ydEluaGVyaXRUcmVlW2ldO1xuICAgICAgICBtb2RlbCA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuXG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMobW9kZWxOYW1lKTtcbiAgICAgICAgICAgIHBhcmVudHMucmV2ZXJzZSgpO1xuXG4gICAgICAgICAgICB2YXIgbW9kZWxUb01lcmdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2RlbCkpO1xuXG4gICAgICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJlbnRzW2pdO1xuICAgICAgICAgICAgICAgIG1vZGVsUGFyZW50ID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbFBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBtZXJnZWRNb2RlbCA9IG1lcmdlKG1vZGVsUGFyZW50LCBtb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdID0gbWVyZ2VkTW9kZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsYXN0IGluaGVyaXQgXG4gICAgICAgICAgICAvLyBpcyB0aGUgb3ZlcnJpZGVuIG1vZGVsXG4gICAgICAgICAgICBtb2RlbEV4dCA9IHN0b3JlLm1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICAgICAgaWYgKG1vZGVsRXh0KSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbEV4dCwgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICAgICAgc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV0gPSBtZXJnZWRNb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNhdmUgXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW21vZGVsTmFtZV07XG4gICAgICAgICRkYi5SdW50aW1lR2VuZXJhdGVkTW9kZWwuaW5zZXJ0KG1vZGVsRGVmKTtcblxuICAgICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICAgICAkbG9nLmdlbmVyYXRlTW9kZWwobW9kZWxOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAqIExvYWQgc2NoZW1hcyBhbmQgdHlwZXMgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBsb2FkSW5NZW1vcnlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbk1lbW9yeSgpIHtcbiAgICB2YXIgc2NoZW1hcyA9IFtdLFxuICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICBzY2hlbWEgPSBudWxsLFxuICAgICAgICBtb2RlbCA9IHt9LFxuICAgICAgICBtb2RlbHMgPSBbXSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgaW5oZXJpdCA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIC8vIGluaXQgc3RvcmVcbiAgICBzdG9yZS5pbmhlcml0YW5jZSA9IHt9O1xuICAgIHN0b3JlLmluaGVyaXRhbmNlVHJlZSA9IHt9O1xuICAgIHN0b3JlLnNjaGVtYXMgPSB7fTtcbiAgICBzdG9yZS5jb21waWxlZFNjaGVtYXMgPSB7fTtcbiAgICBzdG9yZS5tb2RlbHMgPSB7fTtcbiAgICBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMgPSB7fTtcbiAgICBzdG9yZS5zdGF0ZXMgPSB7fTtcbiAgICBzdG9yZS50eXBlID0ge307XG5cbiAgICAvLyBsb2FkIHNjaGVtYXNcbiAgICBzY2hlbWFzID0gJGRiLlJ1bnRpbWVTY2hlbWEuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSBzY2hlbWFzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hc1tpXTtcblxuICAgICAgICBuYW1lID0gc2NoZW1hW05BTUVdO1xuICAgICAgICBpbmhlcml0ID0gc2NoZW1hW0lOSEVSSVRTXTtcblxuICAgICAgICBzdG9yZS5zY2hlbWFzW25hbWVdID0gc2NoZW1hO1xuICAgICAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0gPSBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzY2hlbWEuX2NvcmUpIHtcbiAgICAgICAgICAgICRsb2cubG9hZFNjaGVtYShuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvYWQgbW9kZWxzXG4gICAgbW9kZWxzID0gJGRiLlJ1bnRpbWVNb2RlbC5maW5kKHt9KTtcblxuICAgIGxlbmd0aCA9IG1vZGVscy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vZGVsID0gbW9kZWxzW2ldO1xuICAgICAgICBuYW1lID0gbW9kZWxbTkFNRV07XG5cbiAgICAgICAgc3RvcmUubW9kZWxzW25hbWVdID0gbW9kZWw7XG5cbiAgICAgICAgaWYgKCFtb2RlbC5fY29yZSkge1xuICAgICAgICAgICAgJGxvZy5sb2FkTW9kZWwobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsb2FkIHR5cGVzXG4gICAgdHlwZXMgPSAkZGIuUnVudGltZVR5cGUuZmluZCh7fSk7XG5cbiAgICBsZW5ndGggPSB0eXBlcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlc1tpXTtcbiAgICAgICAgc3RvcmUudHlwZVt0eXBlLm5hbWVdID0gdHlwZTtcblxuICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgJGxvZy5sb2FkVHlwZSh0eXBlLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG4gKiBAbWV0aG9kIGNyZWF0ZUluaGVyaXRhbmNlVHJlZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCkge1xuICAgIHZhciBuYW1lID0gJycsXG4gICAgICAgIGMzbGluZXJpemF0aW9uID0gW10sXG4gICAgICAgIGFuY2VzdG9ycyA9IFtdO1xuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiB3ZSBoYXZlIGZpbmlzZWhkIHRvIGxpbmVyaXplLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYWxsIHRoZSBhcnJheXMgYXJlIGVtcHR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNFbXB0eShlbHRzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZW1vdmUgYW4gZWx0IGZyb20gYWxsIHRoZSBhcnJheXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVsdCBlbGVtZW50IHRvIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGVsdHMgYXJyYXkgb2YgZWx0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3JlbW92ZUNhbmRpZGF0ZShlbHQsIGVsdHMpIHtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgICAgIGFyciA9IFtdO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFyciA9IGVsdHNbaV07XG4gICAgICAgICAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBhcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgYXJyLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBlbHRzW2ldID0gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayB0aGUgZWxlbWVudCBpcyBhIGdvb2QgY2FuZGlkYXRlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbHQgZWxlbWVudCB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBlbHRzIGFycmF5IG9mIGVsdHNcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGEgZ29vZCBjYW5kaWRhdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNDYW5kaWRhdGUoZWx0LCBlbHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgICAgIGxlbmd0aCA9IGVsdHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbHRzW2ldLmluZGV4T2YoZWx0KSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBGaW5kIGEgY2FuZGlkYXRlIGFuZCByZXR1cm4gaXQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGFycmF5IGNvbnRhaW5pbmcgdGhlIGNhbmRpZGF0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2ZpbmRDYW5kaWRhdGUoZWx0cykge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgICAgbGVuZ3RoID0gZWx0cy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF9pc0NhbmRpZGF0ZShlbHRzW2ldWzBdLCBlbHRzKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsdHNbaV1bMF0pO1xuICAgICAgICAgICAgICAgIF9yZW1vdmVDYW5kaWRhdGUoZWx0c1tpXVswXSwgZWx0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIE1lcmdlIHRoZSBhcnJheXMuXG4gICAgICogQHBhcmFtIHtBcnJheX0gZWx0cyBhcnJheSBvZiBlbHRzXG4gICAgICogQHJldHVybiB7QXJyYXl9IGxpc3Qgb2YgY2FuZGlkYXRlcyByZXR1cm5lZCBieSB0aGUgbWVyZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tZXJnZShlbHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIGNhbmRpZGF0ZXMgPSBbXTtcblxuICAgICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgICAgIHdoaWxlIChjYW5kaWRhdGVzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2FuZGlkYXRlcyk7XG4gICAgICAgICAgICBjYW5kaWRhdGVzID0gX2ZpbmRDYW5kaWRhdGUoZWx0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV9pc0VtcHR5KGVsdHMpKSB7XG4gICAgICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU3RhcnQgdGhlIGxpbmVyaWVhdGlvbiBmcm9tIGFuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgZWxlbWVudFxuICAgICAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIGNhbmRpZGF0ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9saW5lcml6ZShuYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5LiBcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1cbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSBpcyBhIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgICAgICAqIEBwcml2YXRlIFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX2NoZWNrQ3ljbGljRGVwKG5hbWUsIGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpc0N5Y2xpY0RlYiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZS5pbmhlcml0YW5jZVtpdGVtXSkgJiYgc3RvcmUuaW5oZXJpdGFuY2VbaXRlbV0uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmN5Y2xpY0RlcGVuZGVuY3kobmFtZSk7XG4gICAgICAgICAgICAgICAgaXNDeWNsaWNEZWIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzQ3ljbGljRGViO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0pKSB7XG4gICAgICAgICAgICBwYXJlbnRzID0gc3RvcmUuaW5oZXJpdGFuY2VbbmFtZV0uc2xpY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cubWlzc2luZ1NjaGVtYShuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfY2hlY2tDeWNsaWNEZXAobmFtZSwgcGFyZW50c1tpXSkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzID0gW107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtuYW1lXS5jb25jYXQoX21lcmdlKHBhcmVudHMubWFwKF9saW5lcml6ZSkuY29uY2F0KFtwYXJlbnRzXSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZvciAobmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgICAgICBjM2xpbmVyaXphdGlvbiA9IF9saW5lcml6ZShuYW1lKTtcbiAgICAgICAgYW5jZXN0b3JzID0gYzNsaW5lcml6YXRpb24ucmV2ZXJzZSgpO1xuICAgICAgICBhbmNlc3RvcnMucG9wKCk7XG4gICAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbmFtZV0gPSBhbmNlc3RvcnM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEV4dGVuZCBhIHNjaGVtYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGl0cyBwYXJlbnQuXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc2NoZW1hIHRvIGV4dGVuZFxuICogQHJldHVybiB7SlNPTn0gb2JqZWN0IGV4dGVuZGVkIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKG5hbWUpIHtcbiAgICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgICAgIHNvbiA9IHN0b3JlLnNjaGVtYXNbbmFtZV0sXG4gICAgICAgIGFuY2VzdG9ycyA9IHN0b3JlLmluaGVyaXRhbmNlVHJlZVtuYW1lXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGFuY2VzdG9yID0gbnVsbCxcbiAgICAgICAgcHJvcCA9ICcnO1xuXG4gICAgaWYgKGFuY2VzdG9ycykge1xuICAgICAgICBsZW5ndGggPSBhbmNlc3RvcnMubGVuZ3RoO1xuICAgICAgICBhbmNlc3RvcnMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYW5jZXN0b3IgPSBzdG9yZS5zY2hlbWFzW2FuY2VzdG9yc1tpXV07XG4gICAgICAgIGZvciAocHJvcCBpbiBhbmNlc3Rvcikge1xuICAgICAgICAgICAgaWYgKHByb3AuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgc29uRXh0ZW5kW3Byb3BdID0gYW5jZXN0b3JbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHNvbikge1xuICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBzb25bcHJvcF07XG4gICAgfVxuICAgIHJldHVybiBzb25FeHRlbmQ7XG59XG5cblxuLypcbiAqIEdldCBzb3J0ZWQgSW5oZXJpdGFuY2VUcmVlIHN0cnVjdHVyZS5cbiAqIEBtZXRob2Qgc29ydEluaGVyaXRhbmNlVHJlZVxuICogQHJldHVybiB7QXJyYXl9IHNvcnRlZCBJbmhlcml0YW5jZVRyZWUgc3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzb3J0SW5oZXJpdGFuY2VUcmVlKCkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgdGVtcCA9IHt9LFxuICAgICAgICBrZXlzID0gW10sXG4gICAgICAgIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBuYkFuY2VzdG9ycyA9IDA7XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5pbmhlcml0YW5jZVRyZWUpIHtcbiAgICAgICAgbmJBbmNlc3RvcnMgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbbW9kZWxOYW1lXS5sZW5ndGg7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcFtuYkFuY2VzdG9yc10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0ZW1wW25iQW5jZXN0b3JzXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBbbmJBbmNlc3RvcnNdLnB1c2gobW9kZWxOYW1lKTtcbiAgICB9XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXModGVtcCkuc29ydCgpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGVtcFtpbmRleF0uZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBBZGQgdGhlIG1vZGVscy5cbiAqIEBtZXRob2QgY29tcGlsZVNjaGVtYXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTY2hlbWFzKCkge1xuICAgIHZhciBuYW1lID0gJyc7XG4gICAgZm9yIChuYW1lIGluIHN0b3JlLnNjaGVtYXMpIHtcbiAgICAgICAgaWYgKCFzdG9yZS5zY2hlbWFzW25hbWVdLl9jb3JlKSB7XG4gICAgICAgICAgICAkbG9nLmNvbXBpbGVTY2hlbWEobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV0gPSBleHRlbmQobmFtZSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGFsbCB0aGUgbW9kZWxzIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlaXIgc2NoZW1hcy5cbiAqIEBtZXRob2QgY2hlY2tNb2RlbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrTW9kZWxzKCkge1xuICAgIHZhciBuYW1lID0gJycsXG4gICAgICAgIGNsYXNzRGVmID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gJyc7XG5cbiAgICBmb3IgKG5hbWUgaW4gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzKSB7XG4gICAgICAgIGNsYXNzRGVmID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW25hbWVdO1xuICAgICAgICBpZiAoY2xhc3NEZWYpIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChzY2hlbWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNsYXNzRGVmLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuY2hlY2tNb2RlbChuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hlY2tJbXAoY2xhc3NEZWYsIHNjaGVtYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ0ltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBzdGF0ZXMgb2YgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFN0YXRlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGVzKCkge1xuICAgIHZhciBuYW1lID0gJycsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHR5cGUgPSAnJyxcbiAgICAgICAgc3RhdGVzID0gW10sXG4gICAgICAgIGF0dHJpYnV0ZSA9ICcnO1xuXG4gICAgZm9yIChuYW1lIGluIHN0b3JlLmNvbXBpbGVkU2NoZW1hcykge1xuICAgICAgICBzdGF0ZXMgPSBbXTtcbiAgICAgICAgc2NoZW1hID0gc3RvcmUuY29tcGlsZWRTY2hlbWFzW25hbWVdO1xuICAgICAgICBpZiAoc2NoZW1hKSB7XG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gc2NoZW1hW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5pbmRleE9mKCdfJykgIT09IDAgJiYgaW50ZXJuYWxUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdG9yZS5zdGF0ZXNbbmFtZV0gPSBzdGF0ZXM7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGl0cyBzY2hlbWEuXG4gKiBAbWV0aG9kIGNoZWNrSW1wXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzRGVmIHNjaGVtYSB0byB0ZXN0IFxuICogQHBhcmFtIHtKU09OfSBjbGFzc0ltcCBzY2hlbWEgdG8gdmFsaWRhdGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCkge1xuICAgIHZhciBwcm9wZXJ0eSA9ICcnLFxuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBjbGFzc0ltcCkge1xuICAgICAgICBpZiAocHJvcGVydHkgIT09IElEICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IERFU0NSSVBUSU9OICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTY2hlbWEodmFsdWUsIGNsYXNzSW1wW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbTkFNRV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBpZiBhbGwgcHJvcGVydGllcyBhcmUgdGhlcmVcbiAgICBmb3IgKHByb3BlcnR5IGluIGNsYXNzRGVmKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gREVTQ1JJUFRJT04gJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc0ltcFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW05BTUVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlLlxuICogQG1ldGhvZCBjaGVja1NjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrU2NoZW1hKHZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKGhhc1R5cGUodHlwZSwgJ3N0cmluZycpICYmIGRlZmF1bHRUeXBlcy5pbmRleE9mKHR5cGUpICE9PSAtMSkge1xuICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgY29ycmVjdCBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tDdXN0b21TY2hlbWFcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIHR5cGUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlLFxuICAgICAgICB0eXBlRGVmID0gc3RvcmUudHlwZVt0eXBlTmFtZV0sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBpZiAoIWhhc1R5cGUodmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVEZWYudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWVbaV0sIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRUeXBlKHZhbHVlW2ldLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKHR5cGVEZWYuc2NoZW1hLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRUeXBlKHZhbHVlLCB0eXBlRGVmLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSW5pdCB0aGUgRGF0YWJhc2Ugc3R1Y3R1cmUuXG4gKiBAbWV0aG9kIGluaXREYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdERiU3RydWN0dXJlKCkge1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lTG9nZ2VyJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVTY2hlbWEnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZU1vZGVsJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVHZW5lcmF0ZWRNb2RlbCcpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lQ2xhc3NJbmZvJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ1J1bnRpbWVCZWhhdmlvcicpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdSdW50aW1lU3RhdGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZVR5cGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZU1lc3NhZ2UnKTtcbiAgICAkZGIuY29sbGVjdGlvbignUnVudGltZUNoYW5uZWwnKTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBEYXRhYmFzZSBzdHJ1Y3R1cmUgKGkuZS4gUnVudGltZURhdGFiYXNlQ29sbGVjdGlvbikuXG4gKiBAbWV0aG9kIGNyZWF0ZURiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVEYlN0cnVjdHVyZSgpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiAkZGJbbW9kZWxEZWZbTkFNRV1dID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgJGRiLmNvbGxlY3Rpb24obW9kZWxEZWZbTkFNRV0pO1xuXG4gICAgICAgICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5jcmVhdGVDb2xsZWN0aW9uKG1vZGVsRGVmW05BTUVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIGFsbCB0aGUgY2xhc3NlcyBvZiB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcygpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsRGVmID0ge307XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5nZW5lcmF0ZWRNb2RlbHMpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRjb21wb25lbnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIW1vZGVsRGVmLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5jcmVhdGVDbGFzcyhtb2RlbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgICAgIG1vZGVsRGVmID0ge30sXG4gICAgICAgIG5hbWUgPSAnJztcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmdlbmVyYXRlZE1vZGVscykge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1ttb2RlbE5hbWVdO1xuICAgICAgICBuYW1lID0gbW9kZWxEZWZbTkFNRV0gKyAnSW5mbyc7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbW9kZWxEZWZbQ0xBU1NdICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgaW5oZXJpdEZyb20obW9kZWxEZWZbTkFNRV0sICdSdW50aW1lQ29tcG9uZW50JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoISRjb21wb25lbnQuZ2V0KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVDbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgXCJfaWRcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzY2hlbWFcIjogc3RvcmUuY29tcGlsZWRTY2hlbWFzW21vZGVsTmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxEZWZcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGRiLlJ1bnRpbWVDbGFzc0luZm8udXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJfaWRcIjogbmFtZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX2lkXCI6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjaGVtYVwiOiBzdG9yZS5jb21waWxlZFNjaGVtYXNbbW9kZWxOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxEZWZcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyogXG4gKiBHZXQgdGhlIHJlYWwgbmFtZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCAvIHR5cGUuXG4gKiBAbWV0aG9kIGdldFJlZmVyZW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJlYWwgbmFtZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoJ0AnLCAnJyk7XG59XG5cblxuLypcbiAqIElzIHRoZSB2YWx1ZSBhIGN1c3RvbSB0eXBlLlxuICogQG1ldGhvZCBpc0N1c3RvbVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQ3VzdG9tVHlwZSh2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCAnc3RyaW5nJykgJiZcbiAgICAgICAgZGVmYXVsdFR5cGVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICAgICAhaXNSZWZlcmVuY2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgcmVmZXJlbmNlLlxuICogQG1ldGhvZCBpc1JlZmVyZW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZignQCcpICE9PSAtMTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSByZWFsIHR5cGUgb2YgYSB2YWx1ZS5cbiAqIEBtZXRob2QgZ2V0UmVhbFR5cGVcbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZSBvZiB0aGUgdmFsdWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWxUeXBlKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICdhbnknKSB7XG4gICAgICAgIHR5cGUgPSAnYW55JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdC5cbiAqIEBtZXRob2QgZ2V0Q2xhc3NOYW1lXG4gKiBAcGFyYW0ge3R5cGV9IG9iaiBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKG9iaikge1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGlmIChvYmogJiYgb2JqLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJlc3VsdCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBlbnVtIHZhbHVlLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgZGF0ZSA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgcmVzdWx0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUgaW5zdGFuY2VvZiBEYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXN1bHQgPSAodHlwZSA9PT0gdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGhhcyBhIHNwZWNpZmljIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBoYXMgZm9yIHR5cGUgdHlwZVxuICovXG5mdW5jdGlvbiBjaGVja1R5cGUobmFtZSwgaWQsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tpZF0sXG4gICAgICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW05BTUVdKSB7XG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tjb21wb25lbnRTY2hlbWFbTkFNRV1dO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKlxuICogTWVyZ2UgdHdvIHNjaGVtYXMuXG4gKiBAbWV0aG9kIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIHNvdXJjZSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBtZXJnZSBhbHNvIHByaXZhdGUgcHJvcGVydGllc1xuICogQHJldHVybiB7T2JqZWN0fSBtZXJnZWQgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHNvdXJjZSwgdGFyZ2V0LCBhbGwpIHtcbiAgICB2YXIgcHJvcE5hbWUgPSAnJyxcbiAgICAgICAgcmVzdWx0ID0gdGFyZ2V0O1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgcHJvcE5hbWUuaW5kZXhPZignXycpICE9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQG1ldGhvZCBzY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTY2hlbWEgc2NoZW1hIHRvIGFkZFxuICovXG5mdW5jdGlvbiBzY2hlbWEoaW1wb3J0ZWRTY2hlbWEpIHtcbiAgICB2YXIgaWQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgbmFtZSA9ICcnLFxuICAgICAgICBtZXJnZWRTY2hlbWEgPSB7fSxcbiAgICAgICAgc2NoZW1hcyA9IFtdO1xuXG4gICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbXBvcnRlZFNjaGVtYSkpO1xuICAgIG5hbWUgPSBzY2hlbWFbTkFNRV07XG5cbiAgICBpZiAodHlwZW9mIHNjaGVtYVtJRF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNjaGVtYVtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzY2hlbWFbSU5IRVJJVFNdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzY2hlbWFbSU5IRVJJVFNdID0gWydSdW50aW1lQ29tcG9uZW50J107XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhIG1ldGEgbW9kZWxcbiAgICBpZiAoaXNWYWxpZE9iamVjdChzY2hlbWEsIHN0b3JlLm1ldGFkZWYuc2NoZW1hLCBmYWxzZSkpIHtcbiAgICAgICAgc2NoZW1hcyA9ICRkYi5SdW50aW1lU2NoZW1hLmZpbmQoeyAnX25hbWUnOiBuYW1lIH0pO1xuICAgICAgICBpZiAoc2NoZW1hcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lcmdlZFNjaGVtYSA9IG1lcmdlKHNjaGVtYSwgc2NoZW1hc1swXSk7XG4gICAgICAgICAgICBkZWxldGUgbWVyZ2VkU2NoZW1hLl9pZDtcbiAgICAgICAgICAgICRkYi5SdW50aW1lU2NoZW1hLnVwZGF0ZSh7ICdfbmFtZSc6IG5hbWUgfSwgbWVyZ2VkU2NoZW1hKTtcbiAgICAgICAgICAgIGlkID0gc2NoZW1hc1swXS5faWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZVNjaGVtYS5pbnNlcnQoc2NoZW1hKTtcbiAgICAgICAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkU2NoZW1hKHNjaGVtYVtOQU1FXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBuZXcgbW9kZWwuXG4gKiBAbWV0aG9kIG1vZGVsXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkTW9kZWwgbW9kZWwgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIG1vZGVsKGltcG9ydGVkTW9kZWwpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgICAgICBpZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBpbmhlcml0ID0gJycsXG4gICAgICAgIG5hbWUgPSAnJyxcbiAgICAgICAgbWVyZ2VkTW9kZWwgPSB7fSxcbiAgICAgICAgbW9kZWxzID0gW107XG5cbiAgICBtb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRNb2RlbCkpO1xuICAgIG5hbWUgPSBtb2RlbFtOQU1FXTtcblxuICAgIGlmICh0eXBlb2YgbW9kZWxbSURdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2RlbFtJRF0gPSAkaGVscGVyLmdlbmVyYXRlSWQoKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBtb2RlbCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3QobW9kZWwsIHN0b3JlLm1ldGFkZWYubW9kZWwsIGZhbHNlKSkge1xuICAgICAgICBtb2RlbHMgPSAkZGIuUnVudGltZU1vZGVsLmZpbmQoeyAnX25hbWUnOiBuYW1lIH0pO1xuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgbWVyZ2VkTW9kZWwgPSBtZXJnZShtb2RlbCwgbW9kZWxzWzBdKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZXJnZWRNb2RlbC5faWQ7XG4gICAgICAgICAgICAkZGIuUnVudGltZU1vZGVsLnVwZGF0ZSh7ICdfbmFtZSc6IG5hbWUgfSwgbWVyZ2VkTW9kZWwpO1xuICAgICAgICAgICAgaWQgPSBtb2RlbHNbMF0uX2lkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gJGRiLlJ1bnRpbWVNb2RlbC5pbnNlcnQobW9kZWwpO1xuICAgICAgICAgICAgaWQgPSByZXN1bHRbMF07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRNb2RlbChtb2RlbFtOQU1FXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlkO1xufVxuXG4vKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlIHR5cGUgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIHR5cGUoaW1wb3J0ZWRUeXBlKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgICAgICByZXN1bHQgPSAkZGIuUnVudGltZVR5cGUuaW5zZXJ0KGltcG9ydGVkVHlwZSk7XG4gICAgICAgIGlkID0gcmVzdWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpZDtcbn1cblxuXG4vKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBzdG9yZS5tZXRhZGVmID0ge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFtcIlJ1bnRpbWVDb21wb25lbnRcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfZGVzY3JpcHRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX25hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wiYW55XCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9kZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgbWV0YWRlZjoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgc2NoZW1hczoge30sXG4gICAgICAgIGNvbXBpbGVkU2NoZW1hczoge30sXG4gICAgICAgIG1vZGVsczoge30sXG4gICAgICAgIGdlbmVyYXRlZE1vZGVsczoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9XG4gICAgfTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgJGxvZy5tb2RlbENyZWF0aW9uQmVnaW4oKTtcbiAgICBsb2FkSW5NZW1vcnkoKTtcbiAgICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgICBjb21waWxlU2NoZW1hcygpO1xuICAgIGdlbmVyYXRlTW9kZWxzKCk7XG4gICAgY2hlY2tNb2RlbHMoKTtcbiAgICBnZXRTdGF0ZXMoKTtcbiAgICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUNsYXNzKCk7XG4gICAgY3JlYXRlQ2xhc3NJbmZvKCk7XG4gICAgJGxvZy5tb2RlbENyZWF0aW9uRW5kKCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBFVkVOVF9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGlzUHJvcGVydHkobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rLlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKi9cbmZ1bmN0aW9uIGlzTGluayhuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIExJTktfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzQ29sbGVjdGlvbihuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIENPTExFQ1RJT05fVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gaXNNZXRob2QobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBNRVRIT0RfVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICovXG5mdW5jdGlvbiBpc1N0cnVjdHVyZShuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgbW9kZWwgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgICAgICBhdHRyaWJ1dGVUeXBlID0gJycsXG4gICAgICAgIHR5cGUgPSAnJztcblxuICAgIGlmIChtb2RlbFtuYW1lXSkge1xuICAgICAgICB0eXBlID0gc3RvcmUudHlwZVttb2RlbFtuYW1lXS50eXBlXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLnNjaGVtYSkge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFN0YXRlKG5hbWUsIGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbaWRdLFxuICAgICAgICBzdGF0ZSA9IHt9O1xuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbTkFNRV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUuZ2VuZXJhdGVkTW9kZWxzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtOQU1FXV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gc3RhdGUuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IG9iamVjdCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSB0byB1c2UgZm9yIHZhbGlkYXRpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRDdXN0b21UeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICAgICB2YXIgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlRGVmLnZhbHVlKSAmJiB0eXBlRGVmLnZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoY29tcG9uZW50KSAhPT0gdHlwZVJlZiAmJiBKU09OLnN0cmluZ2lmeShjb21wb25lbnQpICE9PSAne30nKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lLnJlcGxhY2UoJ0AnLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgcmVhbFR5cGUgPSAnJyxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFJlYWxUeXBlKHR5cGVOYW1lKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZVswXSk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVOYW1lWzBdKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gX2NoZWNrUmVmZXJlbmNlKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKHZhbHVlW2ldLCB0eXBlTmFtZVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIGlmIChoYXNUeXBlKHR5cGVOYW1lLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1UeXBlKHZhbHVlLCB0eXBlTmFtZSwgc3RvcmUudHlwZVt0eXBlTmFtZV0udHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVOYW1lKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtTY2hlbWF9IHNjaGVtYSBzY2hlbWEgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIGVudW1cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW0odmFsdWUsIHNjaGVtYSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gX2lzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcblxuICAgICAgICBpZiAoY29tcG9uZW50Q2xhc3NOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjb21wb25lbnRDbGFzc05hbWUgPT09IGNsYXNzTmFtZTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc1JlZmVyZW5jZShzY2hlbWEudHlwZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gX2lzSW5zdGFuY2VPZigkY29tcG9uZW50LmdldCh2YWx1ZSksIGdldFJlZmVyZW5jZShzY2hlbWEudHlwZSkpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS50eXBlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IChoYXNUeXBlKHZhbHVlLCBzY2hlbWEudHlwZSkpICYmIHNjaGVtYS52YWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRFbnVtVmFsdWUodmFsdWUsIHNjaGVtYS50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGEgc2NoZW1hXG4gKiBpdCBpcyBzdXBwb3NlZCB0byB2YWxpZGF0ZS5cbiAqIEBtZXRob2QgaXNWYWxpZFNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBvYmplY3RcbiAqIEBwYXJhbSB7SlNPTn0gc2NoZW1hXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFNjaGVtYShvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICAgICAgZmllbGQgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgICAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgICAgIHR5cGVSZWYgPSAnJyxcbiAgICAgICAgcmVhbFR5cGUgPSAnJyxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGVudW1WYWx1ZSA9IFtdO1xuXG4gICAgICAgIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZVNjaGVtYSk7XG4gICAgICAgIHR5cGVSZWYgPSBvYmplY3RbdHlwZVJlZl07XG4gICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZVJlZikpIHtcbiAgICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkU2NoZW1hKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS50eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBlbnVtVmFsdWUgPSBzdG9yZS50eXBlW3R5cGVSZWZdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW51bVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW1WYWx1ZShmaWVsZCwgZW51bVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVSZWYgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gQXJyYXkuaXNBcnJheShmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlZmVyZW5jZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpIHx8IGhhc1R5cGUoZmllbGQsICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBtYXliZSBoYXZlIGEgbW9yZSBzdHJpY3QgdmFsaWRhdGlvbiB0aGFuIGp1c3QgYSB0eXBlIGNoZWNraW5nXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVSZWYsIGZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKCkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWU7XG5cbiAgICAgICAgcmVhbFR5cGUgPSBnZXRSZWFsVHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLy8gdHlwZVxuXG4gICAgaWYgKGhhc1R5cGUob2JqZWN0LCAnb2JqZWN0JykpIHtcbiAgICAgICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZVNjaGVtYSk6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYW5kYXRvcnlcbiAgICAgICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpICYmIG9iamVjdFtmaWVsZE5hbWVdICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHkoZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eUZvcm1hdChvYmplY3QpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkT2JqZWN0KG9iamVjdCwgc2NoZW1hLCBzdHJpY3QsIGNsZWFuUmVmKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgICAgICBmaWVsZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgICAgIHR5cGVTY2hlbWEgPSAnJyxcbiAgICAgICAgdHlwZVJlZiA9ICcnLFxuICAgICAgICByZWFsVHlwZSA9ICcnLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmIChoYXNUeXBlKHN0cmljdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc1R5cGUoY2xlYW5SZWYsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBzdHJpY3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSBjdXN0b20gdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIGN1c3RvbSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgcmVhbFR5cGUgPSAnJztcblxuICAgICAgICByZWFsVHlwZSA9IHN0b3JlLnR5cGVbdHlwZVNjaGVtYV07XG4gICAgICAgIGlmIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS5zY2hlbWEsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHJlYWxUeXBlLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgIWhhc1R5cGUocmVhbFR5cGUudmFsdWUsICd1bmRlZmluZWQnKTpcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtKGZpZWxkLCByZWFsVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkVHlwZShmaWVsZCwgcmVhbFR5cGUudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFJlZmVyZW5jZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICBjb21wID0gbnVsbCxcbiAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLmlkKSB7XG4gICAgICAgICAgICBjb21wID0gZmllbGQ7XG4gICAgICAgICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wID0gJGNvbXBvbmVudC5nZXQoZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNUeXBlKGNvbXAsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKCFpbmhlcml0RnJvbShjb21wLmNvbnN0cnVjdG9yLm5hbWUsIHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgICAgLy9pZiAoZ2V0Q2xhc3NOYW1lKGNvbXApICE9PSB0eXBlUmVmKSB7IHVuY29tbWVudCB0aGlzIGxpbmUgZm9yIGEgc3RyaWN0IG1vZGVcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBvbmVudCAmJiBjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGNvbXAuaWQoKTsgLy8gc3RvcmUgdGhlIGlkIGluc3RlYWQgdGhlIGZ1bGwgb2JqZWN0IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkZWZhdWx0IHZhbHVlIG9mIGFuIG9iamVjdCAoe30gb3IgbnVsbClcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKGhhc1R5cGUoZmllbGQsICdvYmplY3QnKSAmJiBmaWVsZCAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhmaWVsZCkubGVuZ3RoID4gMCk6XG4gICAgICAgICAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJykgJiYgZmllbGQgIT09ICcnOlxuICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICBkYXRlID0gbnVsbCxcbiAgICAgICAgICAgIHR5cGVBcnJheSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0UmVhbFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FueSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUocmVhbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVNjaGVtYSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gIWlzTmFOKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEgJiYgZ2V0UmVhbFR5cGUoZmllbGQpICE9PSAnYW55Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZUFycmF5XS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFJlYWxUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5ICYmIHR5cGVBcnJheSAhPT0gJ2FueScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZWFsVHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5oZXJpdEZyb20oZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkW2ldICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKGZpZWxkW2ldLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmhlcml0RnJvbShnZXRDbGFzc05hbWUoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsICdhcnJheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuXG4gICAgLy8gdHlwZVxuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgIGlmICghaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpIHx8IGZpZWxkTmFtZSA9PT0gJ19jb3JlJykge1xuXG4gICAgICAgICAgICAvLyBjYXNlIG9mIF9jb3JlXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lICE9PSAnX2NvcmUnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9IHNjaGVtYVtmaWVsZE5hbWVdLnR5cGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSAnYm9vbGVhbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhcyBvZiBfaWRcbiAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgdHlwZVNjaGVtYSA9ICdzdHJpbmcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHkoZmllbGROYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHByZXBhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU9iamVjdChvYmplY3QsIHNjaGVtYSkge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICAgICAgZmllbGQgPSBudWxsLFxuICAgICAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcblxuICAgIC8vIG1hbmRhdG9yeSAmIGRlZmF1bHQgdmFsdWVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBkZWZhdWx0VmFsdWUgPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSBmYWxzZSAmJiAhaGFzVHlwZShkZWZhdWx0VmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYSBzY2hlbWEuXG4gKiBAbWV0aG9kIGdldFNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldFNjaGVtYShuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHN0b3JlLmNvbXBpbGVkU2NoZW1hc1tuYW1lXSkge1xuICAgICAgICByZXN1bHQgPSBzdG9yZS5jb21waWxlZFNjaGVtYXNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIG1vZGVsLlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIG1vZGVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBnZXRNb2RlbChuYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHN0b3JlLmdlbmVyYXRlZE1vZGVsc1tuYW1lXSkge1xuICAgICAgICByZXN1bHQgPSBzdG9yZS5nZW5lcmF0ZWRNb2RlbHNbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhIHR5cGUuXG4gKiBAbWV0aG9kIGdldFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUobmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS50eXBlW25hbWVdICYmIHN0b3JlLnR5cGVbbmFtZV0pIHtcbiAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS50eXBlW25hbWVdKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHN0b3JlLm1ldGFkZWYuc2NoZW1hO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2NoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoIXN0b3JlLmluaGVyaXRhbmNlVHJlZVtpZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qXG4gKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAqIEBtZXRob2QgaW5oZXJpdEZyb21cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyZW50TmFtZSBuYW1lIG9mIHRoZSBwYXJlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdEZyb20obmFtZSwgcGFyZW50TmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIC8qXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gICAgICogQG1ldGhvZCBfc2VhcmNoUGFyZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbmNlc3Rvck5hbWUgb2YgdGhlIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc2VhcmNoUGFyZW50KGNsYXNzTmFtZSwgYW5jZXN0b3JOYW1lKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gZmFsc2UsXG4gICAgICAgICAgICBwYXJlbnRzID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKGFuY2VzdG9yTmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaXNBbmNlc3RvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpc0FuY2VzdG9yID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBhbmNlc3Rvck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQW5jZXN0b3I7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgIT09IHBhcmVudE5hbWUpIHtcbiAgICAgICAgcGFyZW50cyA9IGdldFBhcmVudHMobmFtZSk7XG4gICAgICAgIGxlbmd0aCA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudHMuaW5kZXhPZihwYXJlbnROYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBSdW50aW1lIG1ldGFtb2RlbC4gPGJyPlxuICogUnVudGltZSBtZXRhbW9kZWwgbG9hZHMgc2NoZW1hcyBhbmQgdHlwZXMsIGFuYWx5emVzIHRoZW0gYW5kIGNyZWF0ZXMgdGhlIGNvbXBvbmVudCBjbGFzc2VzIGFuZCByZWxhdGVkIFJ1bnRpbWVEYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWRiXG4gKiBAcmVxdWlyZXMgcnVudGltZS1sb2dcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtd29ya2Zsb3dcbiAqIEBjbGFzcyBydW50aW1lLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZXhwb3J0cy5pbml0ID0gaW5pdDtcblxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGF0YSBvZiB0aGUgbWV0YW1vZGVsIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHNjaGVtYS5cbiAqIEBtZXRob2Qgc2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU2NoZW1hIGEgc2NoZW1hIHRvIGFkZFxuICovXG5leHBvcnRzLnNjaGVtYSA9IHNjaGVtYTtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyBtb2RlbC5cbiAqIEBtZXRob2QgbW9kZWxcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRNb2RlbCBhIG1vZGUgdG8gYWRkXG4gKi9cbmV4cG9ydHMubW9kZWwgPSBtb2RlbDtcblxuXG4vKipcbiAqIEFkZCBhIG5ldyB0eXBlLlxuICogQG1ldGhvZCB0eXBlXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkVHlwZSB0eXBlIHRvIGFkZFxuICovXG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuXG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0U2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmdldFNjaGVtYSA9IGdldFNjaGVtYTtcblxuXG4vKipcbiAqIEdldCBhIG1vZGVsLlxuICogQG1ldGhvZCBnZXRNb2RlbFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbW9kZWxcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TW9kZWwgPSBnZXRNb2RlbDtcblxuXG4vKipcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmV4cG9ydHMuZ2V0TWV0YURlZiA9IGdldE1ldGFEZWY7XG5cblxuLyoqXG4gKiBHZXQgcGFyZW50cyBvZiBhIHNoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0UGFyZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBzY2hlbWFcbiAqIEByZXR1cm4ge0FycmF5fSBpZCBpZCBvZiB0aGUgcGFyZW50c1xuICovXG5leHBvcnRzLmdldFBhcmVudHMgPSBnZXRQYXJlbnRzO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gKiBAbWV0aG9kIGluaGVyaXRGcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgbmFtZSBvZiB0aGUgcGFyZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW5oZXJpdEZyb20gPSBpbmhlcml0RnJvbTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0IHRydWUgaWYgdmFsaWRhdGlvbiBpcyBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWYgdHJ1ZSBpZiB3ZSByZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuXG5cbi8qKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3Qgb2JqZWN0IHRvIHByZXBhcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgc2NoZW1hIHRoYXQgdmFsaWRhdGVzIHRoZSBvYmplY3RcbiAqL1xuZXhwb3J0cy5wcmVwYXJlT2JqZWN0ID0gcHJlcGFyZU9iamVjdDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBvYmplY3QgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgdG8gdXNlIGZvciB2YWxpZGF0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkVHlwZSA9IGlzVmFsaWRUeXBlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWUgdmFsdWUgdG8gdmFsaWRhdGVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWEgc2NoZW1hIHRvIHVzZSBmb3IgdmFsaWRhdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKi9cbmV4cG9ydHMuaXNWYWxpZEVudW0gPSBpc1ZhbGlkRW51bTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBpc1ZhbGlkU3RhdGU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudC5cbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqL1xuZXhwb3J0cy5pc0V2ZW50ID0gaXNFdmVudDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGlzUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmlzUHJvcGVydHkgPSBpc1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBsaW5rLlxuICogQG1ldGhvZCBpc0xpbmtcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBsaW5rXG4gKi9cbmV4cG9ydHMuaXNMaW5rID0gaXNMaW5rO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pc0NvbGxlY3Rpb24gPSBpc0NvbGxlY3Rpb247XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaXNNZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaXNNZXRob2QgPSBpc01ldGhvZDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgc3RydWN0dXJlLlxuICogQG1ldGhvZCBpc1N0cnVjdHVyZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHN0cnVjdHVyZVxuICovXG5leHBvcnRzLmlzU3RydWN0dXJlID0gaXNTdHJ1Y3R1cmU7XG5cblxuLyoqXG4gKiBHZXQgYSB0eXBlLlxuICogQG1ldGhvZCBnZXRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgdHlwZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgdHlwZVxuICovXG5leHBvcnRzLmdldFR5cGUgPSBnZXRUeXBlOyIsIi8qXG4gKiBTeXN0ZW0gUnVudGltZVxuICogXG4gKiBodHRwczovL3N5c3RlbS1ydW50aW1lLmdpdGh1Yi5pb1xuICogXG4gKiBDb3B5cmlnaHQgMjAxNiBFcndhbiBDYXJyaW91XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyB0aGUgbWFpbiBtb2R1bGUgb2YgUnVudGltZS4gPGJyPlxuICogSXQgaW5pdHMgUnVudGltZSBtZXRhbW9kZWwgYW5kIGxvYWRzIFJ1bnRpbWUgY29yZSBzeXN0ZW0uXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN5c3RlbVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtaGVscGVyXG4gKiBAbWFpbiBydW50aW1lXG4gKiBAY2xhc3MgcnVudGltZVxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gYWRkIHJlcXVpcmUgYXQgZ2xvYmFsIGxldmVsXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwucmVxdWlyZSA9IHJlcXVpcmU7XG59XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJHN5c3RlbSA9IHJlcXVpcmUoJy4uL2J1aWxkL3N5c3RlbS9zeXN0ZW0uanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuXG4vKiBQcml2YXRlIFByb3BlcnR5ICovXG5cbnZhciBzeXRlbUlkID0gJycsXG4gICAgc3lzdGVtID0gJycsXG4gICAgY2hhbm5lbCA9IG51bGw7XG5cblxuLyogUG9seWZpbGwgKi9cbiRoZWxwZXIucG9seWZpbGwoKTtcblxuLyogSW5pdCBNZXRhbW9kZWwgKi9cblxuXG4kbWV0YW1vZGVsLmluaXQoKTtcblxuXG4vKiBJbml0IHJ1bnRpbWUgZnJvbSBhIHN5c3RlbSAqL1xuXG5cbnN5dGVtSWQgPSAkZGIuc3lzdGVtKCRzeXN0ZW0uc3lzdGVtKTtcblxuc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3l0ZW1JZCk7XG5jaGFubmVsID0gJGNvbXBvbmVudC5nZXQoJ2NoYW5uZWwnKTtcblxuc3lzdGVtLnN0YXRlKCdpbnN0YWxsZWQnKTtcbmNoYW5uZWwuJHN5c3RlbUluc3RhbGxlZChzeXRlbUlkKTtcbnN5c3RlbS5zdGF0ZSgncmVzb2x2ZWQnKTtcbmNoYW5uZWwuJHN5c3RlbVJlc29sdmVkKHN5dGVtSWQpO1xuc3lzdGVtLnN0YXRlKCdzdGFydGluZycpO1xuY2hhbm5lbC4kc3lzdGVtU3RhcnRlZChzeXRlbUlkKTtcblxuc3lzdGVtLm1haW4oKTsgLy8gZGVwcmVjYXRlZFxuc3lzdGVtLnN0YXJ0KCk7XG5cbnN5c3RlbS5zdGF0ZSgnYWN0aXZlJyk7XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIFJ1bnRpbWUuIDxicj5cbiAqIEl0IGluaXRzIFJ1bnRpbWUgbWV0YW1vZGVsIGFuZCBsb2FkcyBSdW50aW1lIGNvcmUgc3lzdGVtLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgcnVudGltZS1zeXN0ZW1cbiAqIEBtYWluIHJ1bnRpbWVcbiAqIEBjbGFzcyBydW50aW1lXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIFJ1bnRpbWUgaW5zdGFuY2UuXG4gKiBAcHJvcGVydHkgcnVudGltZVxuICogQHR5cGUgUnVudGltZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICRjb21wb25lbnQuZ2V0KCdydW50aW1lJyk7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIHJ1bnRpbWVcbiAqIEBzdWJtb2R1bGUgcnVudGltZS1zdGF0ZVxuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXN0YXRlXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIFNldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZCBvbiB3aGljaCBjaGFuZ2UgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgdGhlIG5ldyBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVycyBwYXJhbWV0ZXJzXG4gKi9cbmZ1bmN0aW9uIHNldChpZCwgc3RhdGUsIHBhcmFtZXRlcnMpIHtcbiAgICBzdG9yZVtpZF0gPSB7XG4gICAgICAgIFwibmFtZVwiOiBzdGF0ZSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIFwiZGF0YVwiOiBwYXJhbWV0ZXJzXG4gICAgICAgIH1cbiAgICB9O1xuICAgICRkYi5zdG9yZS5SdW50aW1lU3RhdGVbaWRdID0ge1xuICAgICAgICBcIm5hbWVcIjogc3RhdGUsXG4gICAgICAgIFwicGFyYW1ldGVyc1wiOiB7XG4gICAgICAgICAgICBcImRhdGFcIjogcGFyYW1ldGVyc1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0IFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHN0YXRlcyBvZiBhbGwgdGhlIGNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1kYlxuICogQGNsYXNzIHJ1bnRpbWUtc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5zZXQgPSBzZXQ7XG5cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7IiwiLypcbiAqIFN5c3RlbSBSdW50aW1lXG4gKiBcbiAqIGh0dHBzOi8vc3lzdGVtLXJ1bnRpbWUuZ2l0aHViLmlvXG4gKiBcbiAqIENvcHlyaWdodCAyMDE2IEVyd2FuIENhcnJpb3VcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFJ1bnRpbWUuIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgcnVudGltZS4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qKlxuICogVGhlIFJ1bnRpbWVFcnJvciBjbGFzcy5cbiAqIEBjbGFzcyBSdW50aW1lRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqL1xuZnVuY3Rpb24gUnVudGltZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubmFtZSA9IFwiUnVudGltZUVycm9yXCI7XG59XG5SdW50aW1lRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5SdW50aW1lRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUnVudGltZUVycm9yO1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiB0aGUgcGFyYW1ldGVyIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIG1ldGhvZCBmb3IgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICAgICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gbnVtYmVyIG9mIHBhcmFtZXRlcnMgbWluIGFuZCBtYXggZm9yIHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIG1pbiA9IDAsXG4gICAgICAgIG1heCA9IDA7XG5cbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICAgICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gJ3VuZGVmaW5lZCcgfHwgcGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBtaW4gKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXggPSBtYXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKG1pbik7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIFNldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgbm9uIG1hbmRhdG9yeSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBzZXREZWZhdWx0VmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBhcmd1bWVudHNcbiAqIEByZXR1cm4ge0FycmF5fSBhcmd1bWVudHMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdFZhbHVlKGlkLCBtZXRob2ROYW1lLCBhcmdzKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zW2ldLm1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgdHlwZW9mIGFyZ3NbaV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhcmdzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLnVua25vd25NZXRob2QoaWQsIG1ldGhvZE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHR5cGUgcmV0dXJuZWQgYnkgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFJldHVyblR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdHlwZSByZXR1cm5lZCBieSB0aGUgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZXR1cm5UeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIHJlc3VsdFR5cGUgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBudWxsO1xuXG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0TW9kZWwoaWQpKSB7XG4gICAgICAgIHJlc3VsdFR5cGUgPSAkbWV0YW1vZGVsLmdldE1vZGVsKGlkKVttZXRob2ROYW1lXS5yZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHRUeXBlKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFR5cGU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBhbGwgdGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBtZXRob2QgZ2V0UGFyYW1UeXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIHR5cGVzIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbVR5cGVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpZiAoJG1ldGFtb2RlbC5nZXRNb2RlbChpZCkpIHtcbiAgICAgICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXRNb2RlbChpZClbbWV0aG9kTmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTW9kZWwoaWQpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICAgICAgbWV0aG9kUmVzdWx0ID0gbnVsbCxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIHJldHVyblR5cGUgPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMubWV0aG9kUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1ldGhvZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuVHlwZSA9IGdldFJldHVyblR5cGUoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmIChyZXR1cm5UeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSByZXR1cm5UeXBlID09PSAnYW55JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgcmV0dXJuVHlwZSA9PT0gJ2FycmF5JzpcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWV0aG9kUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUsIHJldHVyblR5cGUsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2RSZXN1bHQgIT09IHJldHVyblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lLCBtZXRob2ROYW1lLCByZXR1cm5UeXBlLCB0eXBlb2YgbWV0aG9kUmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGF0ZVxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IGEgUnVudGltZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICAgIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSksXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHBhcmVudCA9IG51bGw7XG5cbiAgICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkY29tcG9uZW50LmdldChwYXJlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucyhwYXJlbnQsIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Db21wb25lbnQocGFyZW50c1tpXSwgY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG59XG5cblxuLypcbiAqIENhbGwgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICogQG1ldGhvZCBjYWxsQWN0aW9uXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgaXMgdGhlIGFjdGlvbiBhIGNhbGxiYWNrIG9mIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBjYWxsQWN0aW9uKGNvbXBvbmVudCwgc3RhdGUsIGFjdGlvbiwgcGFyYW1zLCBpc0V2ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIGluamVjdGVkUGFyYW1zID0gW10sXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBpZiAoISRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKSAmJiAhJG1ldGFtb2RlbC5pc0xpbmsoc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSkgJiYgISRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpKSB7XG4gICAgICAgIHBhcmFtcyA9IHNldERlZmF1bHRWYWx1ZShjb21wb25lbnRDbGFzc05hbWUsIHN0YXRlLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChwYXJhbXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24udXNlQ29yZUFQSSkge1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkY29tcG9uZW50KTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGRiKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJG1ldGFtb2RlbCk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKGV4cG9ydHMpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkYmVoYXZpb3IpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkc3RhdGUpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbG9nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V2ZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShhY3Rpb24uYWN0aW9uLCBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpKSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFJ1bnRpbWVFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkaGVscGVyLmdldFJ1bnRpbWUoKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0UnVudGltZSgpLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB0cnlpbmcgdG8gY2FsbCB0aGUgbWV0aG9kICdcIiArIHN0YXRlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnQuaWQoKSArIFwiJ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yXCI6IGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRsb2cuYWN0aW9uSW52b2tlRXJyb3Ioc3RhdGUsIGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSwgZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYWN0aW9uIGhhcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlci5cbiAqIEBtZXRob2QgdmFsaWRQYXJhbU51bWJlcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgbmFtZSB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvbiB3aGljaCB0aGUgYWN0aW9uIGFwcGxpZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGFjdGlvbiBpcyB0aGUgdmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gdmFsaWRQYXJhbU51bWJlcnMoY2xhc3NOYW1lLCBzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdmFyIGZ1bmMgPSAnJyxcbiAgICAgICAgYmVnaW5Cb2R5ID0gLTEsXG4gICAgICAgIGhlYWRlciA9ICcnLFxuICAgICAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbU51bWJlciA9IDAsXG4gICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbXSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0xpbmsgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgLy8gY2hlY2sgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICAgIGZ1bmMgPSBhY3Rpb24udG9TdHJpbmcoKTtcbiAgICBiZWdpbkJvZHkgPSBmdW5jLmluZGV4T2YoJ3snKTtcbiAgICBoZWFkZXIgPSBmdW5jLnN1YnN0cmluZygwLCBiZWdpbkJvZHkpO1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIuc3BsaXQoJygnKVsxXS5yZXBsYWNlKCcpJywgJycpLnRyaW0oKTtcbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuICAgIHBhcmFtTnVtYmVyID0gcGFyYW1zLmxlbmd0aDtcblxuICAgIC8vIGdldCB0aGUgbnVtYmVyIG1pbiBhbmQgbWF4IG9mIHZhbGlkIHBhcmFtZXRlcnNcbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc05hbWUpO1xuICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKHN0YXRlLCBjbGFzc05hbWUpO1xuICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHN0YXRlLCBjbGFzc05hbWUpO1xuXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgaXNDb2xsZWN0aW9uOlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsyLCAyXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBtb2RlbE51bWJlclBhcmFtID0gWzEsIDFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgaXNMaW5rOlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IGdldFBhcmFtTnVtYmVyKGNsYXNzTmFtZSwgc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZVxuICAgIGlmIChtb2RlbE51bWJlclBhcmFtWzBdIDw9IHBhcmFtTnVtYmVyICYmIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV0pIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tQYXJhbXMocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbCxcbiAgICAgICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnLFxuICAgICAgICBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJycsXG4gICAgICAgIHBhcmFtc05hbWUgPSBbXSxcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtdLFxuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbXSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcGFyYW0gPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgICAgIGlzTGluayA9IGZhbHNlLFxuICAgICAgICBpc0NvbGxlY3Rpb24gPSBmYWxzZTtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KG1ldGhvZE5hbWUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgaXNMaW5rID0gJG1ldGFtb2RlbC5pc0xpbmsobWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlWzBdLCAnc3RyaW5nJ107XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMiwgMl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgICAgICAgcGFyYW1zVHlwZSA9IFskbWV0YW1vZGVsLmdldE1vZGVsKGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc0xpbms6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0TW9kZWwoY29tcG9uZW50Q2xhc3NOYW1lKVttZXRob2ROYW1lXS50eXBlXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IGdldFBhcmFtTnVtYmVyKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBjYXNlIG9mIG9iamVjdFxuICAgIGlmICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsZW5ndGggPSAxO1xuICAgIH1cblxuICAgIGlmIChsZW5ndGggPCBwYXJhbXNOdW1iZXJbMF0gfHwgcGFyYW1zTnVtYmVyWzFdIDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUpO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJhbSA9IGFyZ3NbaV07XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaSA8IHBhcmFtc051bWJlclswXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIG1ldGhvZE5hbWUsIHBhcmFtc05hbWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gdGhhdCBjb21lcyBmcm9tIGFuIGV2ZW50LlxuICogQG1ldGhvZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvclxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gYWN0aW9uKGJlaGF2aW9ySWQsIHBhcmFtcykge1xuICAgIHZhciBpc0V2ZW50ID0gZmFsc2UsXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICBiZWhhdmlvcnMgPSBbXSxcbiAgICAgICAgYmVoYXZpb3IgPSBudWxsLFxuICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICAgICAgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgICBiZWhhdmlvcnMgPSAkZGIuUnVudGltZUJlaGF2aW9yLmZpbmQoe1xuICAgICAgICBcIl9pZFwiOiBiZWhhdmlvcklkXG4gICAgfSk7XG5cbiAgICBhY3Rpb25Gcm9tTWVtb3J5ID0gJGJlaGF2aW9yLmdldChiZWhhdmlvcklkKTtcblxuICAgIGlmIChiZWhhdmlvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJlaGF2aW9yID0gYmVoYXZpb3JzWzBdO1xuXG4gICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGJlaGF2aW9yLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50Lm5hbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlzTGluayA9ICRtZXRhbW9kZWwuaXNMaW5rKGJlaGF2aW9yLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChpc0V2ZW50IHx8IGlzUHJvcGVydHkgfHwgaXNDb2xsZWN0aW9uIHx8IGlzTGluaykge1xuICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBiZWhhdmlvci5zdGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICBcInVzZUNvcmVBUElcIjogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogYWN0aW9uRnJvbU1lbW9yeVxuICAgICAgICAgICAgICAgIH0sIHBhcmFtcywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCwgYSBwcm9wZXJ0eSBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFjdGlvbnMgZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBpbnB1dHMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA2LiBJZiBhIG1ldGhvZCwgY2hlY2sgaWYgdGhlIG91dHB1dCBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNy4gSWYgYWxsIGlzIG9rLCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIDxicj5cbiAqIDguIFJldHVybiB0aGUgcmVzdWx0IDxicj5cbiAqIFxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZSA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbXTtcblxuICAgIHZhciBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICBjdXJyZW50U3RhdGUgPSAnJyxcbiAgICAgICAgYWN0aW9ucyA9IFtdLFxuICAgICAgICBhY3Rpb24gPSBudWxsLFxuICAgICAgICByZXN1bHQgPSBudWxsLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gZmFsc2UsXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNMaW5rID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICBpc0V2ZW50ID0gZmFsc2U7XG5cbiAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgICRsb2cuaW52YWxpZFVzZU9mQ29tcG9uZW50KHBhcmFtcy5jb21wb25lbnQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuICAgIGlmIChjb21wb25lbnQpIHtcblxuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkocGFyYW1zLnN0YXRlLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgICAgICBpc0xpbmsgPSAkbWV0YW1vZGVsLmlzTGluayhwYXJhbXMuc3RhdGUsIGNvbXBvbmVudENsYXNzTmFtZSk7XG4gICAgICAgIGlzQ29sbGVjdGlvbiA9ICRtZXRhbW9kZWwuaXNDb2xsZWN0aW9uKHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgYWN0aW9ucyA9IGdldEFjdGlvbnMoY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGlzRXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChjaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgXCJhcmdzXCI6IHBhcmFtcy5kYXRhXG4gICAgICAgIH0pKSB7XG5cbiAgICAgICAgICAgIGlmICghaXNFdmVudCAmJlxuICAgICAgICAgICAgICAgICFpc1Byb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgIWlzTGluayAmJlxuICAgICAgICAgICAgICAgICFpc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zWzBdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFJlc3VsdFwiOiByZXN1bHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsQWN0aW9uKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBhY3Rpb24sIHBhcmFtcy5kYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgJiYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0xpbmsgfHwgaXNDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgJHN0YXRlLnNldChjb21wb25lbnQuaWQoKSwgcGFyYW1zLnN0YXRlLCBwYXJhbXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmZ1bmN0aW9uIHN0b3AocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmFtcy5lcnJvciA9IGZhbHNlO1xuICAgIH1cbiAgICBwYXJhbXMubWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8ICcnO1xuXG4gICAgZXhwb3J0cy5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcy5lcnJvcikge1xuICAgICAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoJ3J1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlICcgKyBwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKCdydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFyYW1zLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWU6IHJ1bnRpbWUgaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlICcgKyBwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lOiBydW50aW1lIGhhcyBiZWVuIHN0b3BwZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogUmVzdGFydCB0aGUgd29ya2Zsb3cgZW5naW5lIGZyb20gdGhlIGxhc3Qgc3RhdGUuXG4gKiBAbWV0aG9kIHJlc3RhcnRcbiAqL1xuZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICBleHBvcnRzLnN0YXRlID0gc3RhdGU7XG4gICAgJGxvZy53b3JrZmxvd1Jlc3RhcnRlZCgpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIFJ1bnRpbWUuIEl0IGJlaGF2ZXMgbGlrZSBhIHdvcmtmbG93IGVuZ2luZS4gPGJyPlxuICogSXQgY2hlY2tzIGlmIHRoZSBjaGFuZ2Ugb2Ygc3RhdHVzIG9mIGEgY29tcG9uZW50IGlzIHZhbGlkIHRvIGJlIGV4ZWN1dGVkLiBCeSB2YWxpZCwgaXQgbWVhbnMgdGhhdDo8YnI+XG4gKiAtIHRoZSBzdGF0ZSBpcyB2YWxpZCBmb3IgdGhlIGNvbXBvbmVudCwgPGJyPlxuICogLSB0aGUgaW5wdXQgKGkuZS4gcGFyYW1ldGVycykgb2YgYWxsIGFjdGlvbnMgZm9yIHRoZSBzdGF0ZSBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbCBhbmQgPGJyPlxuICogLSB0aGUgb3V0cHV0IG9mIGFsbCBhY3Rpb25zIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsLiA8YnI+XG4gKiBcbiAqIElmIGFuIGVycm9yIG9jY3VycywgdGhlIHdvcmtmbG93IHdpbGwgY2FsbCB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBhbmQgb2YgUnVudGltZSBpbnN0YW5jZS4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgcnVudGltZVxuICogQHN1Ym1vZHVsZSBydW50aW1lLXdvcmtmbG93XG4gKiBAcmVxdWlyZXMgcnVudGltZS1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIHJ1bnRpbWUtYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBydW50aW1lLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBydW50aW1lLXN0YXRlXG4gKiBAcmVxdWlyZXMgcnVudGltZS1oZWxwZXJcbiAqIEByZXF1aXJlcyBydW50aW1lLWxvZ1xuICogQHJlcXVpcmVzIHJ1bnRpbWUtZGJcbiAqIEBjbGFzcyBydW50aW1lLXdvcmtmbG93IFxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogXG4gKiBXb3JrbG93Ojxicj5cbiAqIDxicj5cbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZCA8YnI+XG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2Qgb3IgYW4gZXZlbnQgPGJyPlxuICogMi4gU2VhcmNoIGlmIHRoZXJlIGlzIGEgYmVoYXZpb3Igd2l0aCBhbiBhY3Rpb24gZm9yIHRoZSBuZXcgc3RhdGUgPGJyPlxuICogMy4gSWYgc28sIGdldCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDQuIENoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNS4gQ2FsbCB0aGUgYWN0aW9uKHMpIDxicj5cbiAqIDYuIElmIG5vdCBhbiBvZiBldmVudCwgY2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA3LiBJZiBhbGwgaXMgb2ssIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGlzIHVwZGF0ZWQgPGJyPlxuICogOC4gUmV0dXJuIHRoZSByZXN1bHQgPGJyPlxuICogXG4gKiBAbWV0aG9kIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtcyB0byBjaGFuZ2UgdGhlIHN0YXRlIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudCBpZCBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge0FycmF5fSBkYXRhIHBhcmFtZXRlcnMgdG8gc2VuZCB0byB0aGUgYWN0aW9uXG4gKi9cbmV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcblxuXG4vKipcbiAqIFN0b3AgdGhlIHdvcmtmbG93IGVuZ2luZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbWV0ZXJzIDxicj5cbiAqIHtCb29sZWFufSBlcnJvciB0cnVlIGlmIHRoZSBzdG9wIG9mIHRoZSB3b3JrZmxvdyBpcyBkdWUgdG8gYW4gZXJyb3IgKGRlZmF1bHQgZmFsc2UpIDxicj5cbiAqIHtTdHJpbmd9IG1lc3NhZ2UgZXJyb3IgbWVzc2FnZSB0byBsb2cgKGRlZmF1bHQgJycpXG4gKi9cbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG5cblxuLyoqXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5leHBvcnRzLnJlc3RhcnQgPSByZXN0YXJ0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgY29uZGl0aW9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBjYWxsaW5nIHRoZSBhY3Rpb24uXG4gKiBAbWV0aG9kIGNoZWNrUGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbiBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXG4gKi9cbmV4cG9ydHMuY2hlY2tQYXJhbXMgPSBjaGVja1BhcmFtcztcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFjdGlvbiBoYXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXIuXG4gKiBAbWV0aG9kIHZhbGlkUGFyYW1OdW1iZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiBhcHBsaWVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gYWN0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhY3Rpb24gaXMgdGhlIHZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMudmFsaWRQYXJhbU51bWJlcnMgPSB2YWxpZFBhcmFtTnVtYmVycztcblxuXG4vKipcbiAqIENhbGwgYW4gYWN0aW9uIHRoYXQgY29tZXMgZnJvbSBhbiBldmVudC5cbiAqIEBtZXRob2QgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYmVoYXZpb3JJZCBpZCBvZiB0aGUgYmVoYXZpb3JcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydHMuYWN0aW9uID0gYWN0aW9uOyJdfQ==
