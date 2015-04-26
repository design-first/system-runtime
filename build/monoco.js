!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.monoco=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    "version": "0.2.2",
    "description": "A Model and a NoSQL Database for Components",
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
        "MonocoChannel": {
            "_id": "MonocoChannel",
            "_name": "MonocoChannel",
            "_schema": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponent"
            ],
            "_core": true,
            "listen": {
                "params": [{
                    "name": "event",
                    "type": "string"
                }, {
                    "name": "callback",
                    "type": "function"
                }]
            },
            "send": {
                "params": [{
                    "name": "message",
                    "type": "message"
                }],
                "result": "boolean"
            }
        },
        "MonocoChannelEvent": {
            "_id": "MonocoChannelEvent",
            "_name": "MonocoChannelEvent",
            "_schema": "MonocoChannelEventSchema",
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
            "type": {
                "type": "string",
                "readOnly": false,
                "mandatory": true,
                "default": ""
            }
        },
        "MonocoChannelEventSchema": {
            "_id": "MonocoChannelEventSchema",
            "_name": "MonocoChannelEventSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "name": "property",
            "type": "property"
        },
        "MonocoChannelSchema": {
            "_id": "MonocoChannelSchema",
            "_name": "MonocoChannelSchema",
            "_inherit": [
                "MonocoComponentSchema"
            ],
            "_core": true,
            "listen": "method",
            "send": "method"
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
                "type": "object",
                "readOnly": false,
                "mandatory": true,
                "default": {}
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
                    "mandatory": true
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
        "17191121311a9a3": {
            "_id": "17191121311a9a3",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) { console.error('monoco: ' + data.message, data.error); }",
            "core": true
        },
        "12ee01122f1000f": {
            "_id": "12ee01122f1000f",
            "component": "Monoco",
            "state": "find",
            "action": "function find(Class, query) { return $component.find(Class, query);}",
            "core": true,
            "useCoreAPI": true
        },
        "1c8af1afa310ea9": {
            "_id": "1c8af1afa310ea9",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) { var System = null, system = {}, result = [], conf = {}; if (name) { conf.master = true; conf.name = name; System = monoco.require('MonocoSystem'); system = new System(conf); } else { result = monoco.find('MonocoSystem', {'master': true}); if (result.length) { system = result[0]; } } return system; }",
            "core": true
        },
        "192581bed6169eb": {
            "_id": "192581bed6169eb",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) { console.warn('monoco: ' + message); }",
            "core": true
        },
        "13897187c4115ab": {
            "_id": "13897187c4115ab",
            "component": "MonocoChannel",
            "state": "listen",
            "action": "function listen(event, action) { $behavior.add('db', 'insert', function channel_insert(collectionName, document) { if (collectionName === 'MonocoMessage') { if (document.event === event) { action(document); } } }, true, true); }",
            "core": true,
            "useCoreAPI": true
        },
        "139e610dbf1d372": {
            "_id": "139e610dbf1d372",
            "component": "MonocoChannel",
            "state": "send",
            "action": "function send(message) {var messages = [], events = [], result = true;    events = $db.MonocoChannelEvent.find({'name': message.event});    if (events.length && $metamodel.isValidType(message.data, events[0].type)) {        messages = $db.MonocoMessage.insert({'from': message.from, 'event': message.event, 'data': message.data});        if (!messages.length) {            result = false;        }    } else {        result = false;        $log.invalidChannelEvent(message.data, message.event, events[0].type);    }    return result;}",
            "core": true,
            "useCoreAPI": true
        },
        "1dc581addc1dd83": {
            "_id": "1dc581addc1dd83",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) { var result = {}; if (this.metamodel()[name] === 'event') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1ddfc1846b161e7": {
            "_id": "1ddfc1846b161e7",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'event') { result.push(item); } } return result; }",
            "core": true
        },
        "1c7141a36f1ccf6": {
            "_id": "1c7141a36f1ccf6",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) { var result = {}; if (this.metamodel()[name] === 'method') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "12d1a1687b1b5b8": {
            "_id": "12d1a1687b1b5b8",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'method') { result.push(item); } } return result; }",
            "core": true
        },
        "1df401828d10f7a": {
            "_id": "1df401828d10f7a",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'property') { result.push(item); } } return result; }",
            "core": true
        },
        "113561d8b01481a": {
            "_id": "113561d8b01481a",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) { var result = {}; if (this.metamodel()[name] === 'property') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1e3ad199d617b96": {
            "_id": "1e3ad199d617b96",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() { $component.destroy(this.id()); }",
            "core": true,
            "useCoreAPI": true
        },
        "1eda9107201c9b9": {
            "_id": "1eda9107201c9b9",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) { var args = [], i = 0, length = 0; length = arguments.length; for (i = 0; i < length - 6; i++) { args.push(arguments[i]); } if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) { if ($metamodel.isValidState(state, this.constructor.name)) {$behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state}); } else { $helper.getMonoco().warning(\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "1b8b61591115818": {
            "_id": "1b8b61591115818",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) { return $component.get(id); }",
            "core": true,
            "useCoreAPI": true
        },
        "1f3c917ce81c7e8": {
            "_id": "1f3c917ce81c7e8",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) { return $db.subsystem(params); }",
            "core": true,
            "useCoreAPI": true
        },
        "17fe816d6d1e287": {
            "_id": "17fe816d6d1e287",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) { return $db.system(system); }",
            "core": true,
            "useCoreAPI": true
        },
        "1bcb0137b51715a": {
            "_id": "1bcb0137b51715a",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() { $metamodel.create(); }",
            "core": true,
            "useCoreAPI": true
        },
        "13bbb1da2e1c444": {
            "_id": "13bbb1da2e1c444",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) { $metamodel.schema(schema); }",
            "core": true,
            "useCoreAPI": true
        },
        "1bcc71aad813af7": {
            "_id": "1bcc71aad813af7",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) { $metamodel.type(type); }",
            "core": true,
            "useCoreAPI": true
        },
        "19d281ed3818ea8": {
            "_id": "19d281ed3818ea8",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() { var dump = $db.dump(); this.schemas(dump.schemas); this.types(dump.types); this.behaviors(dump.behaviors); this.components(dump.components); }",
            "core": true,
            "useCoreAPI": true
        },
        "1441c144dd14dc2": {
            "_id": "1441c144dd14dc2",
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
                "version": "0.2.2"
            }
        },
        "MonocoChannel": {
            "channel": {
                "_id": "channel"
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
 * Add a behavior that will be stored in Monoco Database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in Monoco Database
 */
function add(id, state, action, useCoreAPI, core) {
    var behaviorId = $helper.generateId();

    if (typeof useCoreAPI === 'undefined') {
        useCoreAPI = false;
    }
    
    if (typeof core === 'undefined') {
        core = false;
    }

    store[behaviorId] = action;

    $db.MonocoBehavior.insert({
        "_id": behaviorId,
        "component": id,
        "state": state,
        "action": action.toString(),
        "useCoreAPI": useCoreAPI,
        "core":core
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
 * @param {Boolean} core if true, behavior can not be exported
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
 * Find  components with a query.
 * @method find
 * @param {String} query query
 * @return {Array} components found
 */
function find(Class, query) {
    var documents = [],
    components = [],
    component = null,
    i = 0,
    length = 0;

    if ($db[Class]) {
        documents = $db[Class].find(query);
        length = documents.length;
        for (i = 0; i < length; i++) {
            component = exports.get(documents[i]._id);
            if (component) {
                components.push(component);
            }
        }
    }
    return components;
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
 * Find components with a query.
 * @method find
 * @param {String} query query
 * @return {Array} components found
 */
exports.find = find;


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
collections = ['MonocoBus', 'MonocoChannelEvent'],
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
    'MonocoClassInfo',
    'MonocoMessage',
    'MonocoBus',
    'MonocoChannelEvent',
    'MonocoChannel'
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
            } else {
                if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                    $helper.getMonoco().require('db').insert(this.name, obj);
                }
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
                        if ($helper.isMonoco()) {
                            $helper.getMonoco().require('db').remove(this.name, id);
                        }
                        result++;
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
                    if ($helper.isMonoco()) {
                        $helper.getMonoco().require('db').remove(this.name, id);
                    }
                    result++;
                }
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


/**
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
function invalidChannelEvent(message, eventName, type) {
    $helper.getMonoco().warning("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'" );
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
 * A message send by the channel is invalid
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 */
exports.invalidChannelEvent = invalidChannelEvent;
},{"./helper.js":5}],7:[function(require,module,exports){
/* 
 * monoco
 * A Model and a NoSQL Database for Components
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
    $db.collection('MonocoMessage');
    $db.collection('MonocoBus');
    $db.collection('MonocoChannelEvent');
    $db.collection('MonocoChannel');
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
            injectedParams.push($log);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NvbXBvbmVudC5qcyIsInNyYy9kYi5qcyIsInNyYy9oZWxwZXIuanMiLCJzcmMvbG9nLmpzIiwic3JjL21ldGFtb2RlbC5qcyIsInNyYy9tb25vY28uanMiLCJzcmMvc3RhdGUuanMiLCJzcmMvd29ya2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6OEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDejNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2c0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDejNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHRoZSBNb25vY28gY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXN5c3RlbVxuICogQGNsYXNzIG1vbm9jby1zeXN0ZW1cbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuXG4vKlxuICogVGhlIE1vbm9jbyBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtNb25vY29TeXN0ZW19IHN5c3RlbVxuICovXG52YXIgc3lzdGVtID0ge1xuICAgIFwibmFtZVwiOiBcIm1vbm9jb1wiLFxuICAgIFwidmVyc2lvblwiOiBcIjAuMi4yXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcIixcbiAgICBcIl9pZFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgIFwiTW9ub2NvXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibG9hZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0JlaGF2aW9yXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQmVoYXZpb3JcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29CZWhhdmlvclwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvQmVoYXZpb3JTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQmVoYXZpb3JTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29CZWhhdmlvclNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0JlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2hhbm5lbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29DaGFubmVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsaXN0ZW5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJib29sZWFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DaGFubmVsRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DaGFubmVsRXZlbnRcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DaGFubmVsRXZlbnRcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0NoYW5uZWxFdmVudFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DaGFubmVsRXZlbnRTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DaGFubmVsRXZlbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DaGFubmVsRXZlbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NoYW5uZWxTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DaGFubmVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ2hhbm5lbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGlzdGVuXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInNlbmRcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NsYXNzSW5mb1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9kZWxcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1ldGhvZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1ldGhvZHNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NsYXNzSW5mb1NjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NsYXNzSW5mb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NsYXNzSW5mb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRhbW9kZWxcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtZXRob2RcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibWV0aG9kc1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImV2ZW50c1wiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29Db21wb25lbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYW5kbGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInVzZUNvcmVBUElcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJvZmZcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiZWhhdmlvcklkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXN0cm95XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJATW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbmZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZXJyb3JQYXJhbVwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29Db21wb25lbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29Db21wb25lbnRTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib25cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY2xhc3NJbmZvXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwib2ZmXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInJlcXVpcmVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiZGVzdHJveVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImluaXRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29EYXRhYmFzZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0RhdGFiYXNlXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluc2VydFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2xhc3NJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvRGF0YWJhc2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29EYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJpbnNlcnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXNzYWdlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29NZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZyb21cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01lc3NhZ2VTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29NZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvTWVzc2FnZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImZyb21cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvTWV0YW1vZGVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZmluZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJsb2FkXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TdGF0ZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N0YXRlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY2xhc3NcIjogZmFsc2UsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb1N0YXRlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3RhdGVTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb1N5c3RlbVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1N5c3RlbVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N5c3RlbVwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1hc3RlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCIwLjAuMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlYWR5XCI6IHt9LFxuICAgICAgICAgICAgXCJzeW5jXCI6IHt9LFxuICAgICAgICAgICAgXCJtYWluXCI6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3lzdGVtU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3lzdGVtU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwibWFzdGVyXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic3Vic3lzdGVtXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwic2NoZW1hc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImJlaGF2aW9yc1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInR5cGVzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInJlYWR5XCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwic3luY1wiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtYWluXCI6IFwiZXZlbnRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgXCJjb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVycm9yUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXJyb3JQYXJhbVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZnJvbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1ldGhvZFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicGFyYW1ldGVyXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtZXRlclwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkB0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImJlaGF2aW9yc1wiOiB7XG4gICAgICAgIFwiMWFhZWUxZTYzMTFmZjM5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWFhZWUxZTYzMTFmZjM5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIm1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImxvYWRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbG9hZCh1cmwsIGFzeW5jKSB7IHZhciB4aHIgPSBudWxsLCBjYWxsYmFja0xvYWQgPSBudWxsOyB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgY2FsbGJhY2tMb2FkID0gZnVuY3Rpb24gY2FsbGJhY2tMb2FkKHN5c3RlbSkgeyB2YXIgc3lzSWQgPSAkZGIuc3lzdGVtKHN5c3RlbSk7IHZhciBzeXMgPSAkY29tcG9uZW50LmdldChzeXNJZCk7IGlmIChzeXMpIHsgc3lzLm1haW4oKTsgfSB9OyBpZiAoYXN5bmMpIHsgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7IHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgeyBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7IGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpOyB9IH0gfTsgeGhyLnNlbmQobnVsbCk7IH0gZWxzZSB7IHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTsgeGhyLnNlbmQobnVsbCk7IGlmICh4aHIuc3RhdHVzID09PSAyMDApIHsgY2FsbGJhY2tMb2FkKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7IH0gfSB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY2MDAxNzczYTE4NzkxXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY2MDAxNzczYTE4NzkxXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIm1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlYWR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlYWR5KCkgeyB2YXIgc3lzdGVtcyA9IFtdLCBzeXN0ZW0gPSBudWxsLCBpID0gMCwgbGVuZ3RoID0gMDsgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHsgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTsgbGVuZ3RoID0gc3lzdGVtcy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBzeXN0ZW0gPSBzeXN0ZW1zW2ldOyB0aGlzLmxvYWQoc3lzdGVtLmhyZWYsIGZhbHNlKTsgfSB9IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTcxOTExMjEzMTFhOWEzXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcxOTExMjEzMTFhOWEzXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKGRhdGEpIHsgY29uc29sZS5lcnJvcignbW9ub2NvOiAnICsgZGF0YS5tZXNzYWdlLCBkYXRhLmVycm9yKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMmVlMDExMjJmMTAwMGZcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMmVlMDExMjJmMTAwMGZcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZmluZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBmaW5kKENsYXNzLCBxdWVyeSkgeyByZXR1cm4gJGNvbXBvbmVudC5maW5kKENsYXNzLCBxdWVyeSk7fVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjOGFmMWFmYTMxMGVhOVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjOGFmMWFmYTMxMGVhOVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKG5hbWUpIHsgdmFyIFN5c3RlbSA9IG51bGwsIHN5c3RlbSA9IHt9LCByZXN1bHQgPSBbXSwgY29uZiA9IHt9OyBpZiAobmFtZSkgeyBjb25mLm1hc3RlciA9IHRydWU7IGNvbmYubmFtZSA9IG5hbWU7IFN5c3RlbSA9IG1vbm9jby5yZXF1aXJlKCdNb25vY29TeXN0ZW0nKTsgc3lzdGVtID0gbmV3IFN5c3RlbShjb25mKTsgfSBlbHNlIHsgcmVzdWx0ID0gbW9ub2NvLmZpbmQoJ01vbm9jb1N5c3RlbScsIHsnbWFzdGVyJzogdHJ1ZX0pOyBpZiAocmVzdWx0Lmxlbmd0aCkgeyBzeXN0ZW0gPSByZXN1bHRbMF07IH0gfSByZXR1cm4gc3lzdGVtOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE5MjU4MWJlZDYxNjllYlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE5MjU4MWJlZDYxNjllYlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyBjb25zb2xlLndhcm4oJ21vbm9jbzogJyArIG1lc3NhZ2UpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzODk3MTg3YzQxMTVhYlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzODk3MTg3YzQxMTVhYlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DaGFubmVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibGlzdGVuXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGxpc3RlbihldmVudCwgYWN0aW9uKSB7ICRiZWhhdmlvci5hZGQoJ2RiJywgJ2luc2VydCcsIGZ1bmN0aW9uIGNoYW5uZWxfaW5zZXJ0KGNvbGxlY3Rpb25OYW1lLCBkb2N1bWVudCkgeyBpZiAoY29sbGVjdGlvbk5hbWUgPT09ICdNb25vY29NZXNzYWdlJykgeyBpZiAoZG9jdW1lbnQuZXZlbnQgPT09IGV2ZW50KSB7IGFjdGlvbihkb2N1bWVudCk7IH0gfSB9LCB0cnVlLCB0cnVlKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEzOWU2MTBkYmYxZDM3MlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEzOWU2MTBkYmYxZDM3MlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DaGFubmVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2VuZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHt2YXIgbWVzc2FnZXMgPSBbXSwgZXZlbnRzID0gW10sIHJlc3VsdCA9IHRydWU7ICAgIGV2ZW50cyA9ICRkYi5Nb25vY29DaGFubmVsRXZlbnQuZmluZCh7J25hbWUnOiBtZXNzYWdlLmV2ZW50fSk7ICAgIGlmIChldmVudHMubGVuZ3RoICYmICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUobWVzc2FnZS5kYXRhLCBldmVudHNbMF0udHlwZSkpIHsgICAgICAgIG1lc3NhZ2VzID0gJGRiLk1vbm9jb01lc3NhZ2UuaW5zZXJ0KHsnZnJvbSc6IG1lc3NhZ2UuZnJvbSwgJ2V2ZW50JzogbWVzc2FnZS5ldmVudCwgJ2RhdGEnOiBtZXNzYWdlLmRhdGF9KTsgICAgICAgIGlmICghbWVzc2FnZXMubGVuZ3RoKSB7ICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7ICAgICAgICB9ICAgIH0gZWxzZSB7ICAgICAgICByZXN1bHQgPSBmYWxzZTsgICAgICAgICRsb2cuaW52YWxpZENoYW5uZWxFdmVudChtZXNzYWdlLmRhdGEsIG1lc3NhZ2UuZXZlbnQsIGV2ZW50c1swXS50eXBlKTsgICAgfSAgICByZXR1cm4gcmVzdWx0O31cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxZGM1ODFhZGRjMWRkODNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxZGM1ODFhZGRjMWRkODNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXZlbnRcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnQobmFtZSkgeyB2YXIgcmVzdWx0ID0ge307IGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnZXZlbnQnKSB7IHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTsgfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFkZGZjMTg0NmIxNjFlN1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFkZGZjMTg0NmIxNjFlN1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJldmVudHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gZXZlbnRzKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdldmVudCcpIHsgcmVzdWx0LnB1c2goaXRlbSk7IH0gfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjNzE0MWEzNmYxY2NmNlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjNzE0MWEzNmYxY2NmNlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kKG5hbWUpIHsgdmFyIHJlc3VsdCA9IHt9OyBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ21ldGhvZCcpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJkMWExNjg3YjFiNWI4XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJkMWExNjg3YjFiNWI4XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1ldGhvZHNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWV0aG9kcygpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSwgaXRlbSA9ICcnLCByZXN1bHQgPSBbXSwgaSA9IDAsIGxlbmd0aCA9IDA7IGxlbmd0aCA9IGtleXMubGVuZ3RoOyBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgaXRlbSA9IGtleXNbaV07IGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnbWV0aG9kJykgeyByZXN1bHQucHVzaChpdGVtKTsgfSB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWRmNDAxODI4ZDEwZjdhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWRmNDAxODI4ZDEwZjdhXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnRpZXNcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydGllcygpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSwgaXRlbSA9ICcnLCByZXN1bHQgPSBbXSwgaSA9IDAsIGxlbmd0aCA9IDA7IGxlbmd0aCA9IGtleXMubGVuZ3RoOyBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgaXRlbSA9IGtleXNbaV07IGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAncHJvcGVydHknKSB7IHJlc3VsdC5wdXNoKGl0ZW0pOyB9IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMTM1NjFkOGIwMTQ4MWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMTM1NjFkOGIwMTQ4MWFcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcHJvcGVydHkobmFtZSkgeyB2YXIgcmVzdWx0ID0ge307IGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAncHJvcGVydHknKSB7IHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTsgfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFlM2FkMTk5ZDYxN2I5NlwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFlM2FkMTk5ZDYxN2I5NlwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGRlc3Ryb3koKSB7ICRjb21wb25lbnQuZGVzdHJveSh0aGlzLmlkKCkpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWVkYTkxMDcyMDFjOWI5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWVkYTkxMDcyMDFjOWI5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm9mZlwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBvZmYoc3RhdGUsIGJlaGF2aW9ySWQpIHsgdmFyIGFyZ3MgPSBbXSwgaSA9IDAsIGxlbmd0aCA9IDA7IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGggLSA2OyBpKyspIHsgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7IH0gaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XFxcImNvbXBvbmVudFxcXCI6IHRoaXMsIFxcXCJtZXRob2ROYW1lXFxcIjogXFxcIm9mZlxcXCIsIFxcXCJhcmdzXFxcIjogYXJnc30pKSB7IGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSkgeyRiZWhhdmlvci5yZW1vdmUoe1xcXCJiZWhhdmlvcklkXFxcIjogYmVoYXZpb3JJZCwgXFxcImNvbXBvbmVudElkXFxcIjogdGhpcy5pZCgpLCBcXFwic3RhdGVcXFwiOiBzdGF0ZX0pOyB9IGVsc2UgeyAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXFxcImludm9rZSAnb2ZmJyBtZXRob2Qgb2YgY29tcG9uZW50ICdcXFwiICsgdGhpcy5pZCgpICsgXFxcIicgd2l0aCBhbiBpbnZhbGlkIHN0YXRlICdcXFwiICsgc3RhdGUgKyBcXFwiJ1xcXCIpOyB9IH0gfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiOGI2MTU5MTExNTgxOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiOGI2MTU5MTExNTgxOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJyZXF1aXJlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHJlcXVpcmUoaWQpIHsgcmV0dXJuICRjb21wb25lbnQuZ2V0KGlkKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmM2M5MTdjZTgxYzdlOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmM2M5MTdjZTgxYzdlOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN1YnN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzdWJzeXN0ZW0ocGFyYW1zKSB7IHJldHVybiAkZGIuc3Vic3lzdGVtKHBhcmFtcyk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxN2ZlODE2ZDZkMWUyODdcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxN2ZlODE2ZDZkMWUyODdcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKHN5c3RlbSkgeyByZXR1cm4gJGRiLnN5c3RlbShzeXN0ZW0pOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWJjYjAxMzdiNTE3MTVhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWJjYjAxMzdiNTE3MTVhXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBjcmVhdGUoKSB7ICRtZXRhbW9kZWwuY3JlYXRlKCk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxM2JiYjFkYTJlMWM0NDRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxM2JiYjFkYTJlMWM0NDRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNjaGVtYShzY2hlbWEpIHsgJG1ldGFtb2RlbC5zY2hlbWEoc2NoZW1hKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFiY2M3MWFhZDgxM2FmN1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFiY2M3MWFhZDgxM2FmN1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29NZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHR5cGUodHlwZSkgeyAkbWV0YW1vZGVsLnR5cGUodHlwZSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxOWQyODFlZDM4MThlYThcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxOWQyODFlZDM4MThlYThcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3luY1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeW5jKCkgeyB2YXIgZHVtcCA9ICRkYi5kdW1wKCk7IHRoaXMuc2NoZW1hcyhkdW1wLnNjaGVtYXMpOyB0aGlzLnR5cGVzKGR1bXAudHlwZXMpOyB0aGlzLmJlaGF2aW9ycyhkdW1wLmJlaGF2aW9ycyk7IHRoaXMuY29tcG9uZW50cyhkdW1wLmNvbXBvbmVudHMpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQ0MWMxNDRkZDE0ZGMyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQ0MWMxNDRkZDE0ZGMyXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcImU4OWM2MTdiNmIxNWQyNFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIm1haW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbWFpbigpIHsgdmFyIG1vbm9jbyA9ICRjb21wb25lbnQuZ2V0KCdtb25vY28nKTsgbW9ub2NvLnJlYWR5KCk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJNb25vY29cIjoge1xuICAgICAgICAgICAgXCJtb25vY29cIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4yLjJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NoYW5uZWxcIjoge1xuICAgICAgICAgICAgXCJjaGFubmVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImNoYW5uZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiZGJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJtZXRhbW9kZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyogZXhwb3J0cyAgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHRoZSBNb25vY28gY29yZSBzeXN0ZW0uXG4gKlxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLXN5c3RlbVxuICogQGNsYXNzIG1vbm9jby1zeXN0ZW1cbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogVGhlIE1vbm9jbyBjb3JlIHN5c3RlbVxuICogQHByb3BlcnR5IHtNb25vY29TeXN0ZW19IHN5c3RlbVxuICovXG5leHBvcnRzLnN5c3RlbSA9IHN5c3RlbTtcbiIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIFxuICogQSBiZWhhdmlvciBpcyBhIG1lY2FuaXNtIHRoYXQgYWxsb3cgdXNlcnMgdG8gYWRkIGFjdGlvbnMgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBtb25vY28gY29yZSBiZWhhdmlvci5cbiAqIEluIHRoYXQgY2FzZSwgdGhlIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWQgaW4gYSBzeXN0ZW0gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgbW9ub2NvIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBjcmVhdGVkIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbihuYW1lLCBmdW5jLCBjb3JlLCB1c2VDb3JlQVBJKSB7XG4gICAgdmFyIGZ1bmNOYW1lID0gJycsXG4gICAgYmVnaW5Cb2R5ID0gLTEsXG4gICAgZnVuY1BhcmFtcyA9ICcnLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHBhcmFtc0NsZWFuID0gW10sXG4gICAgZnVuY0JvZHkgPSAnJyxcbiAgICBoZWFkZXIgPSAnJyxcbiAgICBhY3Rpb24gPSBudWxsO1xuXG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcblxuICAgIGZ1bmNOYW1lID0gaGVhZGVyLnNwbGl0KCcoJylbMF0ucmVwbGFjZSgnZnVuY3Rpb24nLCAnJykudHJpbSgpO1xuICAgIGZ1bmNQYXJhbXMgPSBoZWFkZXIuc3BsaXQoJygnKVsxXS5yZXBsYWNlKCcpJywgJycpLnRyaW0oKTtcblxuICAgIHBhcmFtcyA9IGZ1bmNQYXJhbXMuc3BsaXQoJywnKTtcbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgcGFyYW1zQ2xlYW4ucHVzaChwYXJhbS50cmltKCkpO1xuICAgIH0pO1xuXG4gICAgZnVuY0JvZHkgPSBmdW5jLnN1YnN0cmluZyhiZWdpbkJvZHkgKyAxKTtcbiAgICBmdW5jQm9keSA9IGZ1bmNCb2R5LnN1YnN0cmluZygwLCBmdW5jQm9keS5sYXN0SW5kZXhPZignfScpKS50cmltKCk7XG5cbiAgICBmdW5jTmFtZSA9IGZ1bmNOYW1lIHx8IG5hbWU7XG5cbiAgICAvLyBmb3IgYWNjZXNzaW5nIG1vbm9jbyBjb3JlIEFQSXNcbiAgICBpZiAodXNlQ29yZUFQSSkge1xuICAgICAgICBpZiAocGFyYW1zWzBdID09PSAnJykge1xuICAgICAgICAgICAgcGFyYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zLnB1c2goJyRjb21wb25lbnQnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRkYicpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJG1ldGFtb2RlbCcpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJHdvcmtmbG93Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckYmVoYXZpb3InKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRsb2cnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zWzBdICE9PSAnJykge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKFwiICsgcGFyYW1zLmpvaW4oJywnKSArIFwiKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oJ1wiICsgcGFyYW1zLmpvaW4oXCInLCdcIikgKyBcIicsIGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgYWN0aW9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIGZ1bmNOYW1lICsgXCIgKCkgeyByZXR1cm4gbmV3IEZ1bmN0aW9uKGJvZHkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfTtcIikoZnVuY0JvZHkpO1xuICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gTW9ub2NvIERhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBtb25vY28gY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gTW9ub2NvIERhdGFiYXNlXG4gKi9cbmZ1bmN0aW9uIGFkZChpZCwgc3RhdGUsIGFjdGlvbiwgdXNlQ29yZUFQSSwgY29yZSkge1xuICAgIHZhciBiZWhhdmlvcklkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG5cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjb3JlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb3JlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RvcmVbYmVoYXZpb3JJZF0gPSBhY3Rpb247XG5cbiAgICAkZGIuTW9ub2NvQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICAgICAgXCJfaWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgIFwic3RhdGVcIjogc3RhdGUsXG4gICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvbi50b1N0cmluZygpLFxuICAgICAgICBcInVzZUNvcmVBUElcIjogdXNlQ29yZUFQSSxcbiAgICAgICAgXCJjb3JlXCI6Y29yZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgcGFyYW1zLmJlaGF2aW9ySWQgPSBwYXJhbXMuYmVoYXZpb3JJZCB8fCAnJztcbiAgICBwYXJhbXMuY29tcG9uZW50SWQgPSBwYXJhbXMuY29tcG9uZW50SWQgfHwgJyc7XG4gICAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRJZCkge1xuICAgICAgICBpZiAocGFyYW1zLmJlaGF2aW9ySWQpIHtcbiAgICAgICAgICAgICRkYi5Nb25vY29CZWhhdmlvci5yZW1vdmUoe1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IHBhcmFtcy5iZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHBhcmFtcy5jb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHBhcmFtcy5zdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoaWQsIHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGRiUmVzdWx0ID0gW10sXG4gICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGRiUmVzdWx0ID0gJGRiLk1vbm9jb0JlaGF2aW9yLmZpbmQoe1xuICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgZGJSZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAoYmVoYXZpb3IpIHtcbiAgICAgICAgYWN0aW9uID0gc3RvcmVbYmVoYXZpb3IuX2lkXTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihiZWhhdmlvci5zdGF0ZSwgYmVoYXZpb3IuYWN0aW9uLCBiZWhhdmlvci5jb3JlLCBiZWhhdmlvci51c2VDb3JlQVBJKTtcbiAgICAgICAgICAgIHN0b3JlW2JlaGF2aW9yLl9pZF0gPSBhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgXCJjb3JlXCI6IGJlaGF2aW9yLmNvcmUsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBiZWhhdmlvcnMgb2YgYWxsIGNvbXBvbmVudHMuIEEgYmVoYXZpb3IgaXMgYSBtZWNhbmlzbSB0aGF0IGFsbG93IHVzZXJzIHRvIGFkZCBhY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIFxuICogd2hlbiBhIHNwZWNpZmljIHN0YXRlIG9mIGEgY29tcG9uZW50IHdpbGwgY2hhbmdlLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gTW9ub2NvIERhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBtb25vY28gY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gTW9ub2NvIERhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gYWRkO1xuXG5cbi8qKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5cblxuLyoqXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmV4cG9ydHMuZ2V0QWN0aW9ucyA9IGdldEFjdGlvbnM7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBiZWhhdmlvcnMgc3RvcmVkIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyOyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IE1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIFBST1BFUlRZX1RZUEUgPSAncHJvcGVydHknLFxuQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuTUVUSE9EX1RZUEUgPSAnbWV0aG9kJyxcbkVWRU5UX1RZUEUgPSAnZXZlbnQnLFxuc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU3ViIGNsYXNzIHRvIG92ZXJyaWRlIHB1c2ggYW5kIHBvcCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3MuXG4gKiBAY2xhc3MgbW9ub2NvQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbW9ub2NvQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICBhcnJEYiA9IFtdLFxuICAgIGNsYXNzSWQgPSAnJyxcbiAgICB0eXBlID0gJyc7XG5cbiAgICBjb25mID0gY29uZiB8fCB7fTtcbiAgICBjbGFzc0lkID0gY29uZi5jbGFzc0lkIHx8wqAnJztcbiAgICB0eXBlID0gY29uZi50eXBlIHx8wqAnJztcbiAgICBhcnJEYiA9IGNvbmYuYXJyIHx8IFtdO1xuXG4gICAgYXJyRGIuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh0eXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKG1vbm9jby5yZXF1aXJlKHZhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyLnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJyLnB1c2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICh2YWwgJiYgKHZhbC5jb25zdHJ1Y3Rvci5uYW1lID09PSBjbGFzc0lkIHx8ICRtZXRhbW9kZWwuY2hla1NjaGVtYSh2YWwsIGNsYXNzSWQpKSkge1xuICAgICAgICAgICAgdGhpc1t0aGlzLmxlbmd0aF0gPSB2YWw7XG4gICAgICAgICAgICBhcnJEYi5wdXNoKHZhbC5pZCgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhcnIucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgYXJyRGIucG9wKCk7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5zcGxpY2UodGhpcy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoganNoaW50IC1XMTAzICovXG4gICAgYXJyLl9fcHJvdG9fXyA9IG1vbm9jb0FycmF5LnByb3RvdHlwZTtcbiAgICAvKiBqc2hpbnQgK1cxMDMgKi9cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cbm1vbm9jb0FycmF5LnByb3RvdHlwZSA9IG5ldyBBcnJheTtcbi8qIGpzaGludCArVzA1OCAqL1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgcmVzdWx0ID0gW10sXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBQUk9QRVJUWV9UWVBFIHx8wqBzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gQ09MTEVDVElPTl9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHByb3BOYW1lc1tpXSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS50eXBlLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogbW9kZWxbcHJvcE5hbWVzW2ldXS5yZWFkT25seVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgZ2V0TWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGhvZHMoaWQpIHtcbiAgICB2YXIgbW9kZWwgPSBudWxsLFxuICAgIHNjaGVtYSA9IG51bGwsXG4gICAgcHJvcE5hbWVzID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMCxcbiAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXQoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KG1vZGVsLl9zY2hlbWEpO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBwcm9wTmFtZXMgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgbW9kZWwgPSAkbWV0YW1vZGVsLmdldChpZCk7XG4gICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQobW9kZWwuX3NjaGVtYSk7XG5cbiAgICBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWEpO1xuXG4gICAgbGVuZ3RoID0gcHJvcE5hbWVzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjaGVtYVtwcm9wTmFtZXNbaV1dID09PSBFVkVOVF9UWVBFKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgbmV3IGNsYXNzIGZyb20gYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgICAgdmFyIGJvZHkgPSB7fTtcblxuICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KGNvbmZpZywgJG1ldGFtb2RlbC5nZXQoY2xhc3NJZCksIHRydWUsIHRydWUpKSB7XG4gICAgICAgICAgICAkbWV0YW1vZGVsLnByZXBhcmVPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldChjbGFzc0lkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIGNvbXBvbmVudCBvZiBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInIGFyZSBub3QgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uZmlnLl9pZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JlW2NvbmZpZy5faWRdID0gdGhpcztcblxuICAgICAgICAvLyBpZFxuICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5faWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICB0aGlzLmlkID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBpZCAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuXG4gICAgICAgIC8vIGNsYXNzSW5mb1xuICAgICAgICBjb25maWcuY2xhc3NJbmZvID0gY2xhc3NJZCArICdJbmZvJztcblxuICAgICAgICAvLyBjcmVhdGUgbGluayB0byBkYlxuICAgICAgICAkZGIuc3RvcmVbY2xhc3NJZF1bY29uZmlnLl9pZF0gPSBjb25maWc7XG5cbiAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5pbnNlcnQoY2xhc3NJZCwgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgY2xhc3NJZCArIFwiIChjb25maWcpIHsgYm9keS5jYWxsKHRoaXMsY29uZmlnKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGFuIGlkIG1ldGhvZCB0byBhIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gaXRzIGlkLlxuICogQG1ldGhvZCBhZGRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZElkKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGFzc0lkO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkIChwcm9wLCB2YWwpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwcm9wLCB2YWwpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgcHJvcGVydGllcyB0byBhIGNvbXBvbmVudC4gQWxsIHRoZXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhY2Nlc3NlZCBieSBhIG1ldGhvZCB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gKiBTb21lIGNoZWNrcyBjYW4gYmUgZG9uZSBpbiBvcmRlciB0byBzZWUgaWYgdGhlIHNldCBvZiBwcm9wZXJ0aWVzIGlzIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBleGFtcGxlXG4gKiBsYXVyZS5hZ2UoKTsgLy8gZ2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIGxhdXJlLmFnZSgyMik7IC8vIHNldCB0aGUgYWdlIG9mIGEgcGVyc29uXG4gKiBAbWV0aG9kIGFkZFByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXMobW9kZWwsIENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKG1vZGVsKTtcblxuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiBwcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBib2R5ID0ge30sXG4gICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICBwcm9wZXJ0eVR5cGUgPSAnJyxcbiAgICAgICAgcHJvcGVydHlSZWFkT25seSA9ICcnO1xuXG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3AubmFtZTtcbiAgICAgICAgcHJvcGVydHlUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gcHJvcC5yZWFkT25seTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0eVR5cGUpKSB7IC8vIGluIGNhc2Ugb2YgYXJyYXksIHJldHVybiBhIHN1YiBhcnJheVxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uIGJvZHkocG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlYXJjaCA9IFtdLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbnVsbCxcbiAgICAgICAgICAgICAgICB2YWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbmV3IG1vbm9jb0FycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzSWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogcHJvcGVydHlUeXBlWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJyXCI6ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ub2NvQXJyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV1bcHJvcGVydHlOYW1lXVtwb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbm9jby5yZXF1aXJlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoe1wiX2lkXCI6IHRoaXMuaWQoKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHNlYXJjaFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV1bMF0gPSB2YWx1ZS5pZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLmlkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIChwb3NpdGlvbiwgdmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGRiLnN0b3JlW2NsYXNzSWRdW3RoaXMuaWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSBjb21wb25lbnRbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGdldChwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0cnlpbmcgdG8gZ2V0IHRoZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gdGhlIGRlc3Ryb3llZCBjb21wb25lbnQgJ1wiICsgdGhpcy5pZCgpICsgXCInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5UmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cucmVhZE9ubHlQcm9wZXJ0eSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh2YWx1ZSwgcHJvcGVydHlUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaCA9ICRkYltjbGFzc0lkXS5maW5kKHtcIl9pZFwiOiB0aGlzLmlkKCl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5VHlwZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS51cGRhdGUoY2xhc3NJZCwgdGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3b3JrZmxvdy5zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eU5hbWUodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUsIHZhbHVlLCBwcm9wZXJ0eVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW3Byb3BlcnR5TmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgcHJvcGVydHlOYW1lICsgXCIgKHZhbHVlKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyx2YWx1ZSkgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgbWV0aG9kcyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyAvIG91dHB1dHMgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbC5cbiAqIEBtZXRob2QgYWRkTWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTWV0aG9kcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgbWV0aG9kcyA9IGdldE1ldGhvZHMobW9kZWwpO1xuXG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIG1ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiBldmVudChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoXCIgKyBwYXJhbXMgKyBcIikgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsXCIgKyBwYXJhbXMgKyBcIikgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICAgICAgQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBcIiArIG1ldGhvZE5hbWUgKyBcIiAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgICAgICAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBhZGRPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbihDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MucHJvdG90eXBlLm9uID0gbmV3IEZ1bmN0aW9uKFwiYm9keVwiLCBcInJldHVybiBmdW5jdGlvbiBvbiAoc3RhdGUsaGFuZGxlcix1c2VDb3JlQVBJKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYSBvbiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gYWRkIGJlaGF2aW9ycyB0byB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGFkZE9uQ2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT25DbGFzcyhDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISRtZXRhbW9kZWwuaXNFdmVudChzdGF0ZSwgY2xhc3NJZCkgJiZcbiAgICAgICAgICAgICAgICAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZX0pLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuYmVoYXZpb3JOb3RVbmlxdWUoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRTdGF0ZU9uKGNsYXNzSWQsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3Mub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50IC1XMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9mZiBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gcmVtb3ZlIGJlaGF2aW9ycyBmcm9tIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT2ZmQ2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9mZkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGJlaGF2aW9ySWQpIHtcbiAgICAgICAgaWYgKCR3b3JrZmxvdy5jaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLFxuICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYmVoYXZpb3JJZFwiOiBiZWhhdmlvcklkLFxuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudElkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5JbnZhbGlkU3RhdGVPZmYoY2xhc3NJZCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vZmYgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9mZiAoc3RhdGUsIGJlaGF2aW9ySWQpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBzdGF0ZSwgYmVoYXZpb3JJZCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIGRlc3Ryb3kgbWV0aG9kIHRvIGEgY2xhc3MgY29tcG9uZW50IHRvIGRldHJveSB0aGUgY2xhc3MgYW5kIGFsbCB0aGUgY29tcG9uZW50cyBvZiB0aGUgc2FtZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkRGVzdHJveUNsYXNzXG4gKiBAcGFyYW0ge09iamVjdH0gQ2xhc3MgQ2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZERlc3Ryb3lDbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkKCk7XG4gICAgICAgIC8vIGlmIG5vdCB2aXJ0dWFsIGNvbXBvbmVudFxuICAgICAgICBpZiAoJGRiW2lkXSkge1xuICAgICAgICAgICAgJGRiW2lkXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG5cbiAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImRlc3Ryb3lcIlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLmRlc3Ryb3kgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGRlc3Ryb3kgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIHZhciBDbGFzcyA9IHt9LFxuICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjbGFzc0lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NJZCA9IGNvbmZpZy5tb2RlbDtcbiAgICB9XG5cbiAgICBDbGFzcyA9IGNyZWF0ZUNsYXNzKGNsYXNzSWQpO1xuXG4gICAgc3RvcmVbY2xhc3NJZF0gPSBDbGFzcztcblxuICAgIGFkZElkKENsYXNzLCBjbGFzc0lkKTtcblxuICAgIGFkZFByb3BlcnRpZXMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkTWV0aG9kcyhjb25maWcubW9kZWwsIENsYXNzLCBjbGFzc0lkKTtcbiAgICBhZGRFdmVudHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBwcm9wZXJ0aWVzL21ldGhvZHMgb25seSBpZiB0aGUgY29tcG9uZW50XG4gICAgLy8gaW5oZXJpdCBmcm9tIE1vbm9jb0NvbXBvbmVudFxuICAgIGlmICgkbWV0YW1vZGVsLmluaGVyaXRGcm9tKGNsYXNzSWQsICdNb25vY29Db21wb25lbnQnKSkge1xuICAgICAgICBhZGRPbihDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZERlc3Ryb3lDbGFzcyhDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICAgIHJldHVybiBDbGFzcztcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBGaW5kICBjb21wb25lbnRzIHdpdGggYSBxdWVyeS5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gY29tcG9uZW50cyBmb3VuZFxuICovXG5mdW5jdGlvbiBmaW5kKENsYXNzLCBxdWVyeSkge1xuICAgIHZhciBkb2N1bWVudHMgPSBbXSxcbiAgICBjb21wb25lbnRzID0gW10sXG4gICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwO1xuXG4gICAgaWYgKCRkYltDbGFzc10pIHtcbiAgICAgICAgZG9jdW1lbnRzID0gJGRiW0NsYXNzXS5maW5kKHF1ZXJ5KTtcbiAgICAgICAgbGVuZ3RoID0gZG9jdW1lbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBleHBvcnRzLmdldChkb2N1bWVudHNbaV0uX2lkKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuXG4vKlxuICogQ3JlYXRlIGEgY29tcG9uZW50IGZyb20gaXRzIGNvbmZpZ3VyYXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkoY29uZmlnKTtcbn1cblxuLypcbiAqIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZS5cbiAqIEBtZXRob2QgaXNJbnN0YW5jZU9mXG4gKiBAcGFyYW0ge3R5cGV9IGNvbXBvbmVudCBjb21wb25lbnRcbiAqIEBwYXJhbSB7dHlwZX0gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaGFzIGZvciBjbGFzcyBuYW1lIGNsYXNzTmFtZSAgXG4gKi9cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZihjb21wb25lbnQsIGNsYXNzTmFtZSkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50ID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc3RvcmVbaWRdLFxuICAgIGNsYXNzSWQgPSAnJztcblxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgY2xhc3NJZCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICAkZGJbY2xhc3NJZF0ucmVtb3ZlKHtcbiAgICAgICAgICAgIFwiX2lkXCI6IGlkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge307XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgY29tcG9uZW50cy4gXG4gKiBJdCBpcyB0aGUgZmFjdG9yeSBvZiBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBNb25vY28uXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tY29tcG9uZW50XG4gKiBAc3RhdGljIFxuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG5cbi8qKlxuICogR2V0IGEgY29tcG9uZW50IGJ5IGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBGaW5kIGNvbXBvbmVudHMgd2l0aCBhIHF1ZXJ5LlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBjb21wb25lbnRzIGZvdW5kXG4gKi9cbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWUuXG4gKiBAbWV0aG9kIGlzSW5zdGFuY2VPZlxuICogQHBhcmFtIHt0eXBlfSBjb21wb25lbnQgY29tcG9uZW50XG4gKiBAcGFyYW0ge3R5cGV9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGhhcyBmb3IgY2xhc3MgbmFtZSBjbGFzc05hbWUgIFxuICovXG5leHBvcnRzLmlzSW5zdGFuY2VPZiA9IGlzSW5zdGFuY2VPZjtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpZiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZFxuICovXG5leHBvcnRzLmRlc3Ryb3kgPSBkZXN0cm95OyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIE1vbm9jbyBEYXRhYmFzZS4gPGJyPlxuICogTW9ub2NvIERhdGFiYXNlIGlzIGEgbWljcm8gTm9TUUwgRGF0YWJhc2UgdGhhdCBjb250YWluczogPGJyPlxuICogLSBjb2xsZWN0aW9ucyB0byBzdG9yZSBkb2N1bWVudHMgKHNjaGVtYXMsIHR5cGVzLCBjb21wb25lbnRzLCAuLi4pIGFuZCA8YnI+XG4gKiAtIEFQSXMgdG8gaW1wb3J0IG9yIGV4cG9ydCBkb2N1bWVudHMuIDxicj5cbiAqIFxuICogTW9ub2NvIERhdGFiYXNlIGlzIGNsb3NlbHkgbGlua2VkIHRvIE1vbm9jbyBNZXRhbW9kZWwgYW5kIE1vbm9jbyBDb21wb25lbnQgYmVjYXVzZTogPGJyPlxuICogLSBhbGwgb3BlcmF0aW9ucyBkb25lIGJ5IE1vbm9jbyBEYXRhYmFzZSBtdXN0IGJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgYmVpbmcgZmluaXNoZWQsIDxicj5cbiAqIC0gaW5zZXJ0IG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgYSBjb21wb25lbnQgYW5kIDxicj5cbiAqIC0gcmVtb3ZlIG9wZXJhdGlvbiBhdXRvbWF0aWNhbGx5IGRlc3Ryb3kgYSBjb21wb25lbnQuXG4gKiAgXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgc3RvcmUgPSB7fSxcbmNvbGxlY3Rpb25zID0gWydNb25vY29CdXMnLCAnTW9ub2NvQ2hhbm5lbEV2ZW50J10sXG5pbnRlcm5hbERCID0gW1xuICAgICdNb25vY28nLFxuICAgICdNb25vY29TY2hlbWEnLFxuICAgICdNb25vY29FeHRlbmRlZFNjaGVtYScsXG4gICAgJ01vbm9jb0JlaGF2aW9yJyxcbiAgICAnTW9ub2NvU3RhdGUnLFxuICAgICdNb25vY29UeXBlJyxcbiAgICAnTW9ub2NvTWV0YW1vZGVsJyxcbiAgICAnTW9ub2NvRGF0YWJhc2UnLFxuICAgICdNb25vY29TeXN0ZW0nLFxuICAgICdNb25vY29DbGFzc0luZm8nLFxuICAgICdNb25vY29NZXNzYWdlJyxcbiAgICAnTW9ub2NvQnVzJyxcbiAgICAnTW9ub2NvQ2hhbm5lbEV2ZW50JyxcbiAgICAnTW9ub2NvQ2hhbm5lbCdcbl07XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIFRlc3QgaWYgYW4gb2JqZWN0IGNvbnRhaW5zIGFub3RoZXIgb25lLlxuICogQG1ldGhvZCBjb250YWluc1xuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBzb3VyY2Ugb2JqZWN0IFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBvdGFyZ2V0IGJqZWN0IFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgc291cmNlIG9iamVjdCBjb250YWlucyB0aGUgdGFyZ2V0IG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29udGFpbnMoc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICBwcm9wZXJ0eSA9IHt9O1xuXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcGVydHldID09PSAndW5kZWZpbmVkJyB8fCB0YXJnZXRbcHJvcGVydHldICE9PSBzb3VyY2VbcHJvcGVydHldKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyoqIFxuICogQSBjb2xsZWN0aW9uIG9mIGRvY3VtZW50cyBtYW5hZ2VkIGJ5IE1vbm9jby4gPGJyPlxuICogSW50ZXJuYWwgY29sbGVjdGlvbnMgbWFuYWdlIGNvcmUgb2JqZWN0cyBvZiBNb25vY28gKHNjaGVtYSwgdHlwZSwgLi4uKS4gPGJyPlxuICogUHVibGljIGNvbGxlY3Rpb25zIG1hbmFnZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzLiA8YnI+XG4gKiBcbiAqIEBjbGFzcyBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbmV3IGNvbGxlY3Rpb25cbiAqL1xudmFyIE1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKCRtZXRhbW9kZWwuZ2V0KG5hbWUpIHx8wqBpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgIHN0b3JlW25hbWVdID0ge307XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChpbnRlcm5hbERCLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSk7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIEZpbmQgYSBkb2N1bWVudCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBkb2N1bWVudHMgdGhhdCBtYXAgdGhlIHF1ZXJ5XG4gKiBcbiAqIEBleGFtcGxlIFxuICogJGRiLlBlcnNvbi5maW5kKHtcIm5hbWVcIjogXCJsYXVyZVwifSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIiwgXCJhZ2VcIiA6IDI0fSk7IDxicj5cbiAqICRkYi5QZXJzb24uZmluZChbe1wibmFtZVwiOiBcInJlbmVcIn0sIHtcIm5hbWVcIjogXCJyb2JlcnRcIn1dKTtcbiAqL1xuTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGlkID0gJycsXG4gICAgb2JqZWN0ID0ge307XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi4gPGJyPlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIE1vbm9jbyBjaGVja3MgdGhhdCB0aGUgZG9jdW1lbnQgaXMgY29tcGxpYW50XG4gKiB3aXRoIGl0cyBjbGFzcyBkZWZpbml0aW9uLiA8YnI+IFxuICogVGhlbiwgYWZ0ZXIgaW5zZXJ0aW5nIGl0LCB3ZSBjcmVhdGUgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIGlkIGNyZWF0ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuUGVyc29uLmluc2VydCh7PGJyPlxuICogICAgICBcIm5hbWVcIjogXCJib2JcIiwgPGJyPlxuICogICAgICBcImZpcnN0TmFtZVwiOiBcIlNhaW50LUNsYXJcIiwgPGJyPlxuICogICAgICBcImFnZVwiOiA0MyA8YnI+XG4gKiB9KTsgPGJyPlxuICovXG5Nb25vY29EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgIHZhciBkb2MgPSBbXSxcbiAgICBDb21wb25lbnQgPSBudWxsLFxuICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZG9jdW1lbnQpKSB7XG4gICAgICAgIGRvYyA9IGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvYy5wdXNoKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICBkb2MuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9pbnNlcnQob2JqKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnTW9ub2NvU2NoZW1hJyB8fCB0aGlzLm5hbWUgPT09ICdNb25vY29UeXBlJyB8fCB0aGlzLm5hbWUgPT09ICdNb25vY29FeHRlbmRlZFNjaGVtYScgfHwgJG1ldGFtb2RlbC5pc1ZhbGlkT2JqZWN0KG9iaiwgJG1ldGFtb2RlbC5nZXQodGhpcy5uYW1lKSkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqLl9pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvYmouX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3JlW3RoaXMubmFtZV1bb2JqLl9pZF0gPSBvYmo7XG4gICAgICAgICAgICBDb21wb25lbnQgPSAkY29tcG9uZW50LmdldCh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQob2JqKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQuaWQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkgJiYgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5pbnNlcnQodGhpcy5uYW1lLCBvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZERvY3VtZW50T25EYkluc2VydChvYmosIHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBVcGRhdGUgZG9jdW1lbnRzIGludG8gYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIHVwZGF0ZSB0byBtYWtlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBcbiAqIHtCb29sZWFufSB1cHNlcnQgdHJ1ZSBpZiB3ZSBjcmVhdGUgYSBkb2N1bWVudCB3aGVuIG5vIGRvY3VtZW50IGlzIGZvdW5kIGJ5IHRoZSBxdWVyeVxuICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgZG9jdW1lbnRzIHVwZGF0ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuQ2Fycy51cGRhdGUoe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wicHJpY2VcIjogXCIxMDAwMCRcIn0pOyA8YnI+XG4gKiAkZGIuQ2Fycy51cGRhdGUoW3tcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcImNvZGVcIjogXCJBWkQtNjVcIn1dLCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSwge1widXBzZXJ0XCI6IHRydWV9KTsgPGJyPlxuICovXG5Nb25vY29EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChxdWVyeSwgdXBkYXRlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRvY3MgPSB0aGlzLmZpbmQocXVlcnkpLFxuICAgIHVwZGF0ZWQgPSAwLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IGRvY3MubGVuZ3RoLFxuICAgIGF0dHJpYnV0ZU5hbWUgPSAnJyxcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldCh0aGlzLm5hbWUpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG5cbiAgICAgICAgLy8gdXBzZXJ0IGNhc2VcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hW2F0dHJpYnV0ZU5hbWVdICYmIHNjaGVtYVthdHRyaWJ1dGVOYW1lXS50eXBlICYmICRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodXBkYXRlW2F0dHJpYnV0ZU5hbWVdLCBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3NbaV1bYXR0cmlidXRlTmFtZV0gPSB1cGRhdGVbYXR0cmlidXRlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnVwZGF0ZSh0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZSh0aGlzLm5hbWUsIGRvY3NbaV0uX2lkLCBhdHRyaWJ1dGVOYW1lLCB1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHNjaGVtYVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi4gPGJyPlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IG51bWJlciBvZiBkb2N1bWVudHMgcmVtb3ZlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnJlbW92ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMucmVtb3ZlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSk7IDxicj5cbiAqL1xuTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gMCxcbiAgICBpZCA9ICcnLFxuICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgb2JqZWN0ID0ge307XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiBtdWx0aV9yZW1vdmUoY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKGNyaXRlcmlhLCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnJlbW92ZSh0aGlzLm5hbWUsIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGlkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykucmVtb3ZlKHRoaXMubmFtZSwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjb3VudFxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgb2JqZWN0SWQgPSAnJztcbiAgICBmb3IgKG9iamVjdElkIGluIHN0b3JlW3RoaXMubmFtZV0pIHtcbiAgICAgICAgcmVzdWx0Kys7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSBhIG5ldyB7eyNjcm9zc0xpbmsgXCJNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25cIn19e3svY3Jvc3NMaW5rfX0uXG4gKiBAbWV0aG9kIGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkge1xuICAgIGV4cG9ydHNbbmFtZV0gPSBuZXcgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uKG5hbWUpO1xufVxuXG5cbi8qXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICovXG5mdW5jdGlvbiBkdW1wKCkge1xuICAgIHZhciBkYkR1bXAgPSB7fSxcbiAgICBjb2xsZWN0aW9uTmFtZSA9ICcnLFxuICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICB0eXBlSWQgPSAnJyxcbiAgICB0eXBlID0gbnVsbCxcbiAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICBzY2hlbWFJZCA9ICcnLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICAvLyBzY2hlbWFzXG4gICAgZGJEdW1wLnNjaGVtYXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5Nb25vY29TY2hlbWEuY291bnQoKSkge1xuICAgICAgICBmb3IgKHNjaGVtYUlkIGluIHN0b3JlLk1vbm9jb1NjaGVtYSkge1xuICAgICAgICAgICAgc2NoZW1hID0gc3RvcmUuTW9ub2NvU2NoZW1hW3NjaGVtYUlkXTtcbiAgICAgICAgICAgIGlmICghc2NoZW1hLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgZGJEdW1wLnNjaGVtYXNbc2NoZW1hSWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBkYkR1bXAudHlwZXMgPSB7fTtcbiAgICBpZiAoZXhwb3J0cy5Nb25vY29UeXBlLmNvdW50KCkpIHtcbiAgICAgICAgZm9yICh0eXBlSWQgaW4gc3RvcmUuTW9ub2NvVHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RvcmUuTW9ub2NvVHlwZVt0eXBlSWRdKSk7XG4gICAgICAgICAgICBkZWxldGUgdHlwZS5faWQ7XG4gICAgICAgICAgICBpZiAoIXR5cGUuY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC50eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yc1xuICAgIGRiRHVtcC5iZWhhdmlvcnMgPSB7fTtcbiAgICBmb3IgKGJlaGF2aW9ySWQgaW4gc3RvcmUuTW9ub2NvQmVoYXZpb3IpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLk1vbm9jb0JlaGF2aW9yW2JlaGF2aW9ySWRdKSk7XG4gICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgZGJEdW1wLmJlaGF2aW9yc1tiZWhhdmlvcklkXSA9IGJlaGF2aW9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIGRiRHVtcC5jb21wb25lbnRzID0ge307XG4gICAgbGVuZ3RoID0gY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25zW2ldO1xuICAgICAgICBpZiAoZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0uY291bnQoKSkge1xuICAgICAgICAgICAgZGJEdW1wLmNvbXBvbmVudHNbY29sbGVjdGlvbk5hbWVdID0gc3RvcmVbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRiRHVtcDtcbn1cblxuXG4vKlxuICogSW1wb3J0L0V4cG9ydCBhIE1vbm9jbyBTeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZVxuICogQG1ldGhvZCBzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRTeXN0ZW0gYSBNb25vY28gU3lzdGVtIHRvIGltcG9ydFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgaWQgb2YgdGhlIGltcG9ydGVkIE1vbm9jbyBTeXN0ZW0gb3IgdGhlIGlmIG9mIHRoZSBjdXJyZW50IE1vbm9jbyBTeXN0ZW0gIFxuICovXG5mdW5jdGlvbiBzeXN0ZW0oaW1wb3J0ZWRTeXN0ZW0pIHtcbiAgICB2YXIgcmVzdWx0ID0gJycsXG4gICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICBjb21wb25lbnRJZCA9ICcnLFxuICAgIHR5cGVOYW1lID0gJycsXG4gICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICBzeXN0ZW1zID0gW10sXG4gICAgaWQgPSBudWxsLFxuICAgIG1hc3RlcnN5c3RlbSA9IG51bGwsXG4gICAgYmVoYXZpb3IgPSBudWxsLFxuICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5Nb25vY29CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjb21wb25lbnRzXG4gICAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmluc2VydChpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXVtjb21wb25lbnRJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7J21hc3Rlcic6IHRydWV9KTtcbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoICYmIHN5c3RlbXNbMF0uX2lkID09PSBpbXBvcnRlZFN5c3RlbS5faWQpIHtcbiAgICAgICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbXBvcnRlZFN5c3RlbS5tYXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluc2VydCB0aGUgc3lzdGVtIGluIERCXG4gICAgICAgIGV4cG9ydHMuTW9ub2NvU3lzdGVtLmluc2VydChpbXBvcnRlZFN5c3RlbSk7XG5cbiAgICAgICAgcmVzdWx0ID0gaW1wb3J0ZWRTeXN0ZW0uX2lkO1xuXG4gICAgfSBlbHNlIHsgLy8gZXhwb3J0XG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0gZHVtcCgpO1xuXG4gICAgICAgIC8vIGdldCBpZCBvZiB0aGUgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7J21hc3Rlcic6IHRydWV9KTtcblxuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1hc3RlcnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgICAgICAgICBpZCA9IG1hc3RlcnN5c3RlbS5faWQ7XG4gICAgICAgICAgICBmb3IgKGJlaGF2aW9ySWQgaW4gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzKSB7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRlZFN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3JJZF07XG4gICAgICAgICAgICAgICAgaWYgKGJlaGF2aW9yLnN0YXRlID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3IuY29tcG9uZW50ID0gaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5uYW1lID0gbWFzdGVyc3lzdGVtLm5hbWU7XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS52ZXJzaW9uID0gbWFzdGVyc3lzdGVtLnZlcnNpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5kZXNjcmlwdGlvbiA9IG1hc3RlcnN5c3RlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGV4cG9ydGVkU3lzdGVtLl9pZCA9IGlkO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShleHBvcnRlZFN5c3RlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLm1hc3RlclN5c3RlbU5vdEZvdW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogRXhwb3J0IGEgTW9ub2NvIHN1Yi1zeXN0ZW0uXG4gKiBAbWV0aG9kIHN1YnN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBwYXJhbXMgcGFyYW1ldGVyc1xuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZ2lmaWVkIE1vbm9jbyBzdWItc3lzdGVtXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBzY2hlbWFzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1widHlwZXNcIjp7XCJuYW1lXCI6XCJhZGRyZXNzXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gdHlwZXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJiZWhhdmlvcnNcIjp7XCJjb21wb25lbnRcIjpcImxhdXJlXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gYmVoYXZpb3JzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGNvbXBvbmVudHMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9LFwiY29tcG9uZW50c1wiOntcIlBlcnNvblwiOiB7XCJjb3VudHJ5XCI6IFwiRnJhbmNlXCJ9fX0pOyAvLyBjb21iaW5lIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gc3Vic3lzdGVtKHBhcmFtcykge1xuICAgIHZhciBzeXN0ZW0gPSB7fSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBkZWZhdWx0TmFtZSA9ICcnLFxuICAgIGkgPSAwLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgc2NoZW1hID0gbnVsbCxcbiAgICB0eXBlID0gbnVsbCxcbiAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgcmVzdWx0ID0gbW9ub2NvLmZpbmQoJ01vbm9jb1N5c3RlbScsIHtcbiAgICAgICAgJ21hc3Rlcic6IHRydWVcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICBkZWZhdWx0TmFtZSA9IHJlc3VsdFswXS5uYW1lKCk7XG4gICAgfVxuXG4gICAgc3lzdGVtLm5hbWUgPSBwYXJhbXMubmFtZSB8fCAnc3ViXycgKyBkZWZhdWx0TmFtZTtcbiAgICBzeXN0ZW0udmVyc2lvbiA9IHBhcmFtcy52ZXJzaW9uIHx8ICcwLjAuMSc7XG4gICAgc3lzdGVtLmRlc2NyaXB0aW9uID0gcGFyYW1zLmRlc2NyaXB0aW9uIHx8wqAnJztcblxuICAgIHN5c3RlbS5zdWJzeXN0ZW0gPSB0cnVlO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIHN5c3RlbS5zY2hlbWFzID0ge307XG4gICAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5zY2hlbWFzW3NjaGVtYS5faWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0eXBlID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCF0eXBlLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBzeXN0ZW0uYmVoYXZpb3JzID0ge307XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRzLk1vbm9jb0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiZWhhdmlvciA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3IuX2lkXSA9IGJlaGF2aW9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIHN5c3RlbS5jb21wb25lbnRzID0ge307XG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgIGZvciAoY2xhc3NOYW1lIGluIHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0c1tjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzeXN0ZW0pO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgTW9ub2NvIERhdGFiYXNlLiA8YnI+XG4gKiBNb25vY28gRGF0YWJhc2UgaXMgYSBtaWNybyBOb1NRTCBEYXRhYmFzZSB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiAtIGNvbGxlY3Rpb25zIHRvIHN0b3JlIGRvY3VtZW50cyAoc2NoZW1hcywgdHlwZXMsIGNvbXBvbmVudHMsIC4uLikgYW5kIDxicj5cbiAqIC0gQVBJcyB0byBpbXBvcnQgb3IgZXhwb3J0IGRvY3VtZW50cy4gPGJyPlxuICogXG4gKiBNb25vY28gRGF0YWJhc2UgaXMgY2xvc2VseSBsaW5rZWQgdG8gTW9ub2NvIE1ldGFtb2RlbCBiZWNhdXNlOiA8YnI+XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgTW9ub2NvIERhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICAgXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEBjbGFzcyBtb25vY28tZGJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHt7I2Nyb3NzTGluayBcIk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvblwifX17ey9jcm9zc0xpbmt9fS5cbiAqIEBtZXRob2QgY29sbGVjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblxuXG4vKipcbiAqIE1vbm9jbyBEYXRhYmFzZSBzdG9yZSB0aGF0IGxpc3QgYWxsIHRoZSBjb2xsZWN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7SlNPTn0gc3RvcmVcbiAqL1xuZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKlxuICogRHVtcCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqL1xuZXhwb3J0cy5kdW1wID0gZHVtcDtcblxuXG4vKipcbiAqIEltcG9ydC9FeHBvcnQgYSBNb25vY28gU3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIHN5c3RlbVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFN5c3RlbSBhIE1vbm9jbyBTeXN0ZW0gdG8gaW1wb3J0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBpZCBvZiB0aGUgaW1wb3J0ZWQgTW9ub2NvIFN5c3RlbSBvciB0aGUgY3VycmVudCBNb25vY28gU3lzdGVtICBcbiAqL1xuZXhwb3J0cy5zeXN0ZW0gPSBzeXN0ZW07XG5cblxuLyoqXG4gKiBFeHBvcnQgYSBNb25vY28gc3ViLXN5c3RlbS5cbiAqIEBtZXRob2Qgc3Vic3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IHBhcmFtcyBwYXJhbWV0ZXJzXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5naWZpZWQgTW9ub2NvIHN1Yi1zeXN0ZW1cbiAqIFxuICogQGV4YW1wbGVcbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHNjaGVtYXMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJ0eXBlc1wiOntcIm5hbWVcIjpcImFkZHJlc3NcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiB0eXBlcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImJlaGF2aW9yc1wiOntcImNvbXBvbmVudFwiOlwibGF1cmVcIn19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBiZWhhdmlvcnMgPGJyPlxuICogJGRiLnN1YnN5c3RlbSh7XCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGZpbHRlciBleHBvcnQgb24gY29tcG9uZW50cyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInNjaGVtYXNcIjp7XCJuYW1lXCI6XCJQZXJzb25cIn0sXCJjb21wb25lbnRzXCI6e1wiUGVyc29uXCI6IHtcImNvdW50cnlcIjogXCJGcmFuY2VcIn19fSk7IC8vIGNvbWJpbmUgZmlsdGVyc1xuICovXG5leHBvcnRzLnN1YnN5c3RlbSA9IHN1YnN5c3RlbTsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAY2xhc3MgbW9ub2NvLWhlbHBlclxuICogQHN0YXRpY1xuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydHkgKi9cblxudmFyIG1vbm9jb1JlZiA9IG51bGw7XG5cblxuLyogUHVibGljIG1ldGhvZCAqL1xuXG5cbi8qXG4gKiBDaGVjayBpZiBhIE1vbm9jbyBpbnN0YW5jZSBleGlzdHNcbiAqIEBtZXRob2QgaXNNb25vY29cbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBNb25vY28gaW5zdGFuY2UgZXhpc3RcbiAqL1xuZnVuY3Rpb24gaXNNb25vY28oKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKCRkYi5Nb25vY28gJiYgJGRiLk1vbm9jby5maW5kKCkubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBpbnN0YW5jZSBvZiBNb25vY29cbiAqIEBtZXRob2QgZ2V0TW9ub2NvXG4gKiBAcmV0dXJuIHtNb25vY299IG1vbm9jbyBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRNb25vY28oKSB7XG4gICAgdmFyIG1vbm9jb0lkID0gJyc7XG5cbiAgICBpZiAoIW1vbm9jb1JlZikge1xuICAgICAgICBpZiAoaXNNb25vY28oKSkge1xuICAgICAgICAgICAgbW9ub2NvSWQgPSAkZGIuTW9ub2NvLmZpbmQoKVswXS5faWQ7XG4gICAgICAgICAgICBtb25vY29SZWYgPSAkY29tcG9uZW50LmdldChtb25vY29JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb25vY29SZWYgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtb25vY286ICcgKyBlcnIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbW9ub2NvOiAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb25vY29SZWY7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIGEgdWlkXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1aWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIHJldHVybiBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAY2xhc3MgbW9ub2NvLWhlbHBlclxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBHZXQgdGhlIGluc3RhbmNlIG9mIE1vbm9jb1xuICogQG1ldGhvZCBnZXRNb25vY29cbiAqIEByZXR1cm4ge01vbm9jb30gbW9ub2NvIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0TW9ub2NvID0gZ2V0TW9ub2NvO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBNb25vY28gaW5zdGFuY2UgZXhpc3RzXG4gKiBAbWV0aG9kIGlzTW9ub2NvXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgTW9ub2NvIGluc3RhbmNlIGV4aXN0XG4gKi9cbmV4cG9ydHMuaXNNb25vY28gPSBpc01vbm9jbztcblxuXG4vKipcbiAqIEdlbmVyYXRlIGEgdWlkXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1aWRcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdGhhdCB3cml0ZSBhIGxvZy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEBjbGFzcyBtb25vY28tbG9nXG4gKiBAQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCc7XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKHNjaGVtYVtJRF0pIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mIFwiICsgc2NoZW1hW0lEXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgdGhlIG1ldGEgYXR0cmlidXRlIFwiICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKTtcbiAgICB9XG5cbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcobWVzc2FnZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUocHJvcGVydHlOYW1lLCB0eXBlLCBwcm9wZXJ0eSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlOYW1lKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdmFsdWUgZm9yIHRoZSBlbnVtIHZhbHVlICdcIiArIHZhbHVlICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgXCIgKyB0eXBlb2YgdmFsdWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoY29tcG9uZW50SWQsIHR5cGUsIGNvbnN0cnVjdG9yTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NvdXJjZSBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NUb0ltcCB0aGUgY2xhc3MgdG8gaW1wbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdJbXBsZW1lbnRhdGlvbihjbGFzc1NvdXJjZSwgY2xhc3NUb0ltcCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImNsYXNzICdcIiArIGNsYXNzU291cmNlICsgXCInIGlzIG1pc3NpbmcgZm9yIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2xhc3MgJ1wiICsgY2xhc3NUb0ltcCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgc2NoZW1hW0lEXSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRlZiBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZURlZmluaXRpb24oZGVmKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCBsb2FkIHRoZSB0eXBlIGRlZmluaXRpb24gXCIgKyBkZWYpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG5hbWUuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eU5hbWUoaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoXCIjXCIpICE9PSAtMSkge1xuICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbmFtZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgdHlwZW9mIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH1cbn1cblxuXG4vKlxuICogVHJ5aW5nIHRvIHNldCBhIHJlYWQtb25seSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgcmVhZE9ubHlQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gcmVhZE9ubHlQcm9wZXJ0eShpZCwgcHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiY2FuIG5vdCBzZXQgcmVhZC1vbmx5IHByb3BlcnR5IFwiICsgcHJvcGVydHlOYW1lICsgXCIgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgTW9ub2NvIERhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkT2JqZWN0T25JbnNlcnQoZG9jLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgZG9jdW1lbnQgXCIgKyBKU09OLnN0cmluZ2lmeShkb2MpICsgXCIgb24gYW4gaW5zZXJ0IG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uIFwiICsgY29sbGVjdGlvbk5hbWUpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgTW9ub2NvIERhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5mdW5jdGlvbiBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZShjb2xsZWN0aW9uTmFtZSwgaWQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0eXBlLmluZGV4T2YoXCIjXCIpICE9PSAtMSkge1xuICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgZm9yIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiBhbiB1cGRhdGUgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgb24gYW4gdXBkYXRlIG9wZXJhdGlvbiBvbiBjb2xsZWN0aW9uIFwiICsgY29sbGVjdGlvbk5hbWUgKyBcIjogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuLypcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gdW5rbm93bk1ldGhvZChjbGFzc0lkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIGNhbGwgYW4gdW5rbm93biBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBmb3IgdGhlIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ29sbGVjdGlvbk5hbWUobmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbmFtZSBmb3IgY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24gJ1wiICsgbmFtZSArIFwiJzogdGhlcmUgaXMgbm8gc2NoZW1hICdcIiArIG5hbWUgKyBcIicgaW4gdGhlIG1ldGFtb2RlbFwiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHJlc3VsdCBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFJlc3VsdFR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG90IHRoZSBtZXRob2RcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFJlc3VsdFR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIHR5cGUgb24gdGhlIHJlc3VsdCBvZiBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua25vd24gY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25Db21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICovXG5mdW5jdGlvbiB1bmtub3duQ29tcG9uZW50KGNsYXNzTmFtZSwgY29tcG9uZW50SWQpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ1bmtvd24gY2xhc3MgY29tcG9uZW50ICdcIiArIGNsYXNzTmFtZSArIFwiJyBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgTW9ub2NvIHdvcmtmbG93IGhhcyBiZWVuIHJlc3RhcnRlZC5cbiAqIEBtZXRob2Qgd29ya2Zsb3dSZXN0YXJ0ZWRcbiAqL1xuZnVuY3Rpb24gd29ya2Zsb3dSZXN0YXJ0ZWQoKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKCdtb25vY28gaGFzIGJlZW4gcmVzdGFydGVkJyk7XG59XG5cblxuLypcbiAqIGludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoaWQsIG1ldGhvZE5hbWUsIHBhcmFtTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBhZGQgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciBmb3IgdGhlIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gdW5rd293biBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIE1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ0aGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHVua25vd25UeXBlKHZhbHVlKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjYW4gbm90IHlldCB2YWxpZGF0ZSBpZiB0aGUgY29tcG9uZW50ICdcIiArIEpTT04uc3RyaW5naWZ5KGlkKSArIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KG1lc3NhZ2UsIGV2ZW50TmFtZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIG1lc3NhZ2UgJ1wiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBmb3IgZXZlbnQgJ1wiICsgZXZlbnROYW1lICsgXCInXCIgKTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdyaXRlIGEgbG9nLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQGNsYXNzIG1vbm9jby1sb2dcbiAqIEBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEEgcHJvcGVydHkgb2YgYSBzY2hlbWEgaXMgdW5rbm93bi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSB0aGUgc2NoZW1hIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHkgPSB1bmtub3duUHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcGVyb3BldHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlO1xuXG5cbi8qKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgYSB0eXBlIGVudW0uXG4gKiBAbWV0aG9kIGludmFsaWRFbnVtVmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRFbnVtVmFsdWUgPSBpbnZhbGlkRW51bVZhbHVlO1xuXG5cbi8qKlxuICogSW52YWxpZCBjbGFzcyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW52YWxpZENsYXNzTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHRoZSB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnN0cnVjdG9yTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ2xhc3NOYW1lID0gaW52YWxpZENsYXNzTmFtZTtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMubWlzc2luZ1Byb3BlcnR5ID0gbWlzc2luZ1Byb3BlcnR5O1xuXG5cbi8qKlxuICogQSBjbGFzcyBkZWZpbml0aW9uIGlzIG1pc3NpbmcuXG4gKiBAbWV0aG9kIG1pc3NpbmdJbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzU291cmNlIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1RvSW1wIHRoZSBjbGFzcyB0byBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0cy5taXNzaW5nSW1wbGVtZW50YXRpb24gPSBtaXNzaW5nSW1wbGVtZW50YXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHR5cGUgZm9yIGEgcHJvcGVydHkgb2YgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZUltcFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5IGEgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgYSBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGVJbXAgPSBpbnZhbGlkVHlwZUltcDtcblxuXG4vKipcbiAqIE1pc3NpbmcgYSBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBtaXNzaW5nUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eUltcCA9IG1pc3NpbmdQcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5SW1wID0gdW5rbm93blByb3BlcnR5SW1wO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRUeXBlRGVmaW5pdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRlZiBhIHR5cGUgZGVmaW5pdGlvblxuICovXG5leHBvcnRzLmludmFsaWRUeXBlRGVmaW5pdGlvbiA9IGludmFsaWRUeXBlRGVmaW5pdGlvbjtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlOYW1lID0gaW52YWxpZFByb3BlcnR5TmFtZTtcblxuXG4vKipcbiAqIFRyeWluZyB0byBzZXQgYSByZWFkLW9ubHkgcHJvcGVydHkuXG4gKiBAbWV0aG9kIHJlYWRPbmx5UHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydHMucmVhZE9ubHlQcm9wZXJ0eSA9IHJlYWRPbmx5UHJvcGVydHk7XG5cblxuLyoqXG4gKiBJbnZhbGlkIGRvY3VtZW50IG9uIGEgTW9ub2NvIERhdGFiYXNlIGluc2VydCBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWREb2N1bWVudE9uRGJJbnNlcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2MgYSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbGxlY3Rpb25OYW1lIHRoZSBuYW1lIG9mIHRoZSBjb2xsbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWREb2N1bWVudE9uRGJJbnNlcnQgPSBpbnZhbGlkT2JqZWN0T25JbnNlcnQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IG9uIGEgTW9ub2NvIERhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sbGVjdGlvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbGxsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5VmFsdWUgdmFsdWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlIGRlZmluZWQgYnkgdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlID0gaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGU7XG5cblxuLyoqXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmV4cG9ydHMudW5rbm93bk1ldGhvZCA9IHVua25vd25NZXRob2Q7XG5cblxuLyoqXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkQ29sbGVjdGlvbk5hbWUgPSBpbnZhbGlkQ29sbGVjdGlvbk5hbWU7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHJlc3VsdCB0eXBlIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUmVzdWx0VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb3QgdGhlIG1ldGhvZFxuICovXG5leHBvcnRzLmludmFsaWRSZXN1bHRUeXBlID0gaW52YWxpZFJlc3VsdFR5cGU7XG5cblxuLyoqXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAqL1xuZXhwb3J0cy51bmtub3duQ29tcG9uZW50ID0gdW5rbm93bkNvbXBvbmVudDtcblxuXG4vKipcbiAqIFRoZSBNb25vY28gd29ya2Zsb3cgaGFzIGJlZW4gcmVzdGFydGVkLlxuICogQG1ldGhvZCB3b3JrZmxvd1Jlc3RhcnRlZFxuICovXG5leHBvcnRzLndvcmtmbG93UmVzdGFydGVkID0gd29ya2Zsb3dSZXN0YXJ0ZWQ7XG5cblxuLyoqXG4gKiBJbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtTnVtYmVyID0gaW52YWxpZFBhcmFtTnVtYmVyO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmV4cG9ydHMuaW52YWxpZFBhcmFtVHlwZSA9IGludmFsaWRQYXJhbVR5cGU7XG5cblxuLyoqXG4gKiBBZGQgYSBtb3JlIHRoYW4gb25lIGJlaGF2aW9yIHRvIGEgc3RhdGUuXG4gKiBAbWV0aG9kIGJlaGF2aW9yTm90VW5pcXVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGVOYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKi9cbmV4cG9ydHMuYmVoYXZpb3JOb3RVbmlxdWUgPSBiZWhhdmlvck5vdFVuaXF1ZTtcblxuXG4vKipcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9uID0gaW52YWxpZFN0YXRlT247XG5cblxuLyoqXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmludmFsaWRTdGF0ZU9mZiA9IGludmFsaWRTdGF0ZU9mZjtcblxuXG4vKipcbiAqIFRoZSBNYXN0ZXIgc3lzdGVtIGlzIG5vdCBmb3VuZC5cbiAqIEBtZXRob2QgbWFzdGVyU3lzdGVtTm90Rm91bmRcbiAqL1xuZXhwb3J0cy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCA9IG1hc3RlclN5c3RlbU5vdEZvdW5kO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIHZhbHVlIG9mIHRoZSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgZXhwZWN0ZWMgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZSA9IGludmFsaWRUeXBlO1xuXG5cbi8qKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmV4cG9ydHMudW5rbm93blR5cGUgPSB1bmtub3duVHlwZTtcblxuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmV4cG9ydHMuY2FuTm90WWV0VmFsaWRhdGUgPSBjYW5Ob3RZZXRWYWxpZGF0ZTtcblxuXG4vKipcbiAqIEEgbWVzc2FnZSBzZW5kIGJ5IHRoZSBjaGFubmVsIGlzIGludmFsaWRcbiAqIEBtZXRob2QgaW52YWxpZENoYW5uZWxFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBzZW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBleHBlY3RlZCB0eXBlXG4gKi9cbmV4cG9ydHMuaW52YWxpZENoYW5uZWxFdmVudCA9IGludmFsaWRDaGFubmVsRXZlbnQ7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBNb25vY28gTWV0YW1vZGVsLiA8YnI+XG4gKiBNb25vY28gTWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEBjbGFzcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICR3b3JrZmxvdyA9IHJlcXVpcmUoJy4vd29ya2Zsb3cuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgSUQgPSAnX2lkJyxcbk5BTUUgPSAnX25hbWUnLFxuSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuU0NIRU1BID0gJ19zY2hlbWEnLFxuQ0xBU1MgPSAnX2NsYXNzJyxcbkNPUkUgPSAnX2NvcmUnLFxuRVZFTlRfVFlQRSA9ICdldmVudCcsXG5pbnRlcm5hbFR5cGVzID0gWydwcm9wZXJ0eScsICdjb2xsZWN0aW9uJywgJ21ldGhvZCcsICdldmVudCddLFxuZGVmYXVsdFR5cGVzID0gWydib29sZWFuJywgJ3N0cmluZycsICdudW1iZXInLCAnb2JqZWN0JywgJ2Z1bmN0aW9uJywgJ2FycmF5J10sXG5zdG9yZSA9IHtcbiAgICBtZXRhZGVmOiB7fSxcbiAgICBjYXRhbG9nOiB7fSxcbiAgICBpbmhlcml0YW5jZToge30sXG4gICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICBtb2RlbDoge30sXG4gICAgc3RhdGVzOiB7fSxcbiAgICB0eXBlOiB7fSxcbiAgICBpbXBsZW1lbnRhdGlvbjoge31cbn07XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLypcbiAqIENyZWF0ZSB0aGUgaW5oZXJpdGFuY2UgdHJlZS5cbiAqIEBtZXRob2QgY3JlYXRlSW5oZXJpdGFuY2VUcmVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKSB7XG4gICAgdmFyIGlkID0gbnVsbCxcbiAgICBmYXRoZXJJZCA9IG51bGwsXG4gICAgbmV3SWQgPSBudWxsO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW2lkXTtcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChmYXRoZXJJZCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5wdXNoKGZhdGhlcklkKTtcbiAgICAgICAgICAgIG5ld0lkID0gZmF0aGVySWQ7XG4gICAgICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW25ld0lkXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudC5cbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge3R5cGV9IGlkIGlkIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJuIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQoaWQpIHtcbiAgICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgc29uID0gc3RvcmUuY2F0YWxvZ1tpZF0sXG4gICAgYW5jZXN0b3JzID0gc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIGFuY2VzdG9yID0gbnVsbCxcbiAgICBwcm9wID0gJyc7XG5cbiAgICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgICAgIGxlbmd0aCA9IGFuY2VzdG9ycy5sZW5ndGg7XG4gICAgICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhbmNlc3RvciA9IHN0b3JlLmNhdGFsb2dbYW5jZXN0b3JzW2ldXTtcbiAgICAgICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IHNvbltwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuXG4vKlxuICogQWRkIHRoZSBtb2RlbHMuXG4gKiBAbWV0aG9kIGNyZWF0ZU1vZGVsXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVNb2RlbCgpIHtcbiAgICB2YXIgaWQgPSAnJztcbiAgICBmb3IgKGlkIGluIHN0b3JlLmNhdGFsb2cpIHtcbiAgICAgICAgc3RvcmUubW9kZWxbaWRdID0gZXh0ZW5kKGlkKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYWxsIHRoZSBzY2hlbWEgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzLlxuICogQG1ldGhvZCBjaGVja0ltcGxlbWVudGF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0ltcGxlbWVudGF0aW9uKCkge1xuICAgIHZhciBpZCA9ICcnLFxuICAgIGNsYXNzRGVmID0gbnVsbCxcbiAgICBjbGFzc0ltcCA9ICcnO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBjbGFzc0RlZiA9IHN0b3JlLm1vZGVsW2lkXTtcbiAgICAgICAgaWYgKGNsYXNzRGVmICYmIHR5cGVvZiBjbGFzc0RlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY2xhc3NJbXAgPSBzdG9yZS5tb2RlbFtjbGFzc0RlZltTQ0hFTUFdXTtcbiAgICAgICAgICAgIGlmIChjbGFzc0ltcCkge1xuICAgICAgICAgICAgICAgIGNoZWNrSW1wKGNsYXNzRGVmLCBjbGFzc0ltcCk7XG4gICAgICAgICAgICAgICAgc3RvcmUuaW1wbGVtZW50YXRpb25bY2xhc3NEZWZbSURdXSA9IGNsYXNzSW1wW0lEXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nSW1wbGVtZW50YXRpb24oY2xhc3NEZWZbU0NIRU1BXSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBpdHMgc2NoZW1hLlxuICogQG1ldGhvZCBjaGVja1N0YXRlc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTdGF0ZXMoKSB7XG4gICAgdmFyIGlkID0gJycsXG4gICAgY2xhc3NEZWYgPSBudWxsLFxuICAgIHR5cGUgPSAnJyxcbiAgICBzdGF0ZXMgPSBbXSxcbiAgICBhdHRyaWJ1dGUgPSAnJztcblxuICAgIGZvciAoaWQgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgc3RhdGVzID0gW107XG4gICAgICAgIGNsYXNzRGVmID0gc3RvcmUubW9kZWxbaWRdO1xuICAgICAgICBpZiAoY2xhc3NEZWYgJiYgdHlwZW9mIGNsYXNzRGVmW1NDSEVNQV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBjbGFzc0RlZikge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBjbGFzc0RlZlthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuaW5kZXhPZignXycpICE9PSAwICYmIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuc3RhdGVzW2lkXSA9IHN0YXRlcztcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3QgXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gICAgdmFyIHByb3BlcnR5ID0gJycsXG4gICAgdmFsdWUgPSBudWxsO1xuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NJbXApIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTY2hlbWEodmFsdWUsIGNsYXNzSW1wW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVyZVxuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gTkFNRSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICBwcm9wZXJ0eSAhPT0gQ0xBU1MgJiZcbiAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NJbXBbcHJvcGVydHldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIHRoZSBjb3JyZWN0IHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrU2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdmFsdWUgdG8gdGVzdFxuICogQHBhcmFtIHtPYmplY3R9IHR5cGUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tTY2hlbWEodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoaGFzVHlwZSh0eXBlLCAnc3RyaW5nJykgJiYgZGVmYXVsdFR5cGVzLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGNoZWNrQ3VzdG9tU2NoZW1hKHZhbHVlLCB0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogVGVzdCBpZiBhIHZhbHVlIGhhcyBjb3JyZWN0IGN1c3RvbSB0eXBlLlxuICogQG1ldGhvZCBjaGVja0N1c3RvbVNjaGVtYVxuICogQHBhcmFtIHt0eXBlfSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWUgdHlwZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBpZiAoIWhhc1R5cGUodHlwZURlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlmICghaGFzVHlwZSh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAodHlwZURlZi50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZFNjaGVtYSh2YWx1ZSwgdHlwZURlZi5zY2hlbWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBEYXRhYmFzZSBzdHVjdHVyZS5cbiAqIEBtZXRob2QgaW5pdERiU3RydWN0dXJlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpbml0RGJTdHJ1Y3R1cmUoKSB7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb1NjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29FeHRlbmRlZFNjaGVtYScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29DbGFzc0luZm8nKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvQmVoYXZpb3InKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvU3RhdGUnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvVHlwZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29NZXNzYWdlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb0J1cycpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29DaGFubmVsRXZlbnQnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvQ2hhbm5lbCcpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24pLlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGJTdHJ1Y3R1cmUoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgIG1vZGVsRGVmID0ge30sXG4gICAgdHlwZU5hbWUgPSAnJztcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLmNhdGFsb2cpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5jYXRhbG9nW21vZGVsTmFtZV07XG4gICAgICAgICRkYi5Nb25vY29TY2hlbWEuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlbERlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgJGRiW21vZGVsRGVmW0lEXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRkYi5jb2xsZWN0aW9uKG1vZGVsRGVmW0lEXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKG1vZGVsTmFtZSBpbiBzdG9yZS5tb2RlbCkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLm1vZGVsW21vZGVsTmFtZV07XG4gICAgICAgICRkYi5Nb25vY29FeHRlbmRlZFNjaGVtYS5pbnNlcnQobW9kZWxEZWYpO1xuICAgIH1cblxuICAgIGZvciAodHlwZU5hbWUgaW4gc3RvcmUudHlwZSkge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdO1xuICAgICAgICBtb2RlbERlZi5faWQgPSBtb2RlbERlZi5uYW1lO1xuICAgICAgICAkZGIuTW9ub2NvVHlwZS5pbnNlcnQobW9kZWxEZWYpO1xuICAgIH1cbn1cblxuXG4vKlxuICogQ3JlYXRlIGFsbCB0aGUgY2xhc3NlcyBvZiB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzcygpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgbW9kZWxEZWYgPSB7fTtcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUubW9kZWxbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlbERlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJyAmJiBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkY29tcG9uZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgXCJtb2RlbFwiOiBtb2RlbE5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDcmVhdGUgYWxsIHRoZSBDbGFzc0luZm8gb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc0luZm9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzSW5mbygpIHtcbiAgICB2YXIgbW9kZWxOYW1lID0gJycsXG4gICAgbW9kZWxEZWYgPSB7fTtcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUubW9kZWxbbW9kZWxOYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2RlbERlZltTQ0hFTUFdICE9PSAndW5kZWZpbmVkJyAmJiBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuTW9ub2NvQ2xhc3NJbmZvLmluc2VydCh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogbW9kZWxEZWYuX2lkICsgJ0luZm8nLFxuICAgICAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHN0b3JlLm1vZGVsW21vZGVsRGVmW1NDSEVNQV1dLFxuICAgICAgICAgICAgICAgIFwibW9kZWxcIjogbW9kZWxEZWZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIFxuICogR2V0IHRoZSByZWFsIG5hbWUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QgLyB0eXBlLlxuICogQG1ldGhvZCBnZXRSZWZlcmVuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfSByZWFsIG5hbWVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKCdAJywgJycpO1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSBjdXN0b20gdHlwZS5cbiAqIEBtZXRob2QgaXNDdXN0b21UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0N1c3RvbVR5cGUodmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpICYmXG4gICAgZGVmYXVsdFR5cGVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJlxuICAgICFpc1JlZmVyZW5jZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSByZWZlcmVuY2UuXG4gKiBAbWV0aG9kIGlzUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKCdAJykgIT09IC0xO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHJlYWwgdHlwZSBvZiBhIHZhbHVlLlxuICogQG1ldGhvZCBnZXRUeXBlXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGUgb2YgdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0LlxuICogQG1ldGhvZCBnZXRDbGFzc05hbWVcbiAqIEBwYXJhbSB7dHlwZX0gb2JqIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBlbnVtIHZhbHVlLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGUgPT09IHR5cGVvZiB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIG5ldyBzY2hlbWEuXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFNjaGVtYSBzY2hlbWEgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIHNjaGVtYShpbXBvcnRlZFNjaGVtYSkge1xuICAgIHZhciBpZCA9IGltcG9ydGVkU2NoZW1hW0lEXSxcbiAgICBpbmhlcml0ID0gaW1wb3J0ZWRTY2hlbWFbSU5IRVJJVFNdLFxuICAgIG5hbWUgPSBpbXBvcnRlZFNjaGVtYVtOQU1FXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgLy8gaWYgbm8gaWQsIGl0IHdpbGwgYmUgdGhlIG5hbWUgYnkgZGVmYXVsdFxuICAgIGlmIChoYXNUeXBlKGlkLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgaWQgPSBuYW1lO1xuICAgICAgICBpbXBvcnRlZFNjaGVtYVtJRF0gPSBuYW1lO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3QoaW1wb3J0ZWRTY2hlbWEsIHN0b3JlLm1ldGFkZWYuc2NoZW1hLCBmYWxzZSkpIHtcblxuICAgICAgICBzdG9yZS5jYXRhbG9nW2lkXSA9IGltcG9ydGVkU2NoZW1hO1xuICAgICAgICBpZiAoaW5oZXJpdCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gaW5oZXJpdC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5pbmhlcml0YW5jZVtpZF0gPSBpbmhlcml0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHdvcmtmbG93LnN0b3Aoe1xuICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidGhlIHNjaGVtYSAnXCIgKyBKU09OLnN0cmluZ2lmeShpbXBvcnRlZFNjaGVtYSkgKyBcIicgaXMgbm90IHZhbGlkXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBBZGQgYSBuZXcgdHlwZS5cbiAqIEBtZXRob2QgdHlwZVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFR5cGVcbiAqL1xuZnVuY3Rpb24gdHlwZShpbXBvcnRlZFR5cGUpIHtcbiAgICB2YXIgbmFtZSA9IGltcG9ydGVkVHlwZS5uYW1lO1xuXG4gICAgLy8gY2hlY2sgaWYgdHlwZSBpcyBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YSBtZXRhIG1vZGVsXG4gICAgaWYgKGlzVmFsaWRPYmplY3QoaW1wb3J0ZWRUeXBlLCBzdG9yZS5tZXRhZGVmLnR5cGUpKSB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBzdG9yZS50eXBlW25hbWVdID0gaW1wb3J0ZWRUeXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZURlZmluaXRpb24oaW1wb3J0ZWRUeXBlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSB0eXBlICdcIiArIEpTT04uc3RyaW5naWZ5KGltcG9ydGVkVHlwZSkgKyBcIicgaXMgbm90IHZhbGlkXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGluaXRcbiAqL1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjbGVhcigpO1xuICAgIHN0b3JlLm1ldGFkZWYgPSB7XG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgXCJfaWRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9uYW1lXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcInN0cmluZ1wiXSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9jbGFzc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuICAgIGluaXREYlN0cnVjdHVyZSgpO1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgdGhlIGRhdGEgb2YgdGhlIG1ldGFtb2RlbCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHN0b3JlID0ge1xuICAgICAgICBjYXRhbG9nOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgICAgICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICAgICAgICBtb2RlbDoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9LFxuICAgICAgICBpbXBsZW1lbnRhdGlvbjoge31cbiAgICB9O1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICBjcmVhdGVJbmhlcml0YW5jZVRyZWUoKTtcbiAgICBjcmVhdGVNb2RlbCgpO1xuICAgIGNoZWNrSW1wbGVtZW50YXRpb24oKTtcbiAgICBjaGVja1N0YXRlcygpO1xuICAgIGNyZWF0ZURiU3RydWN0dXJlKCk7XG4gICAgY3JlYXRlQ2xhc3MoKTtcbiAgICBjcmVhdGVDbGFzc0luZm8oKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqL1xuZnVuY3Rpb24gaXNFdmVudChuYW1lLCBpZCkge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZSxcbiAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtpZF0sXG4gICAgYXR0cmlidXRlVHlwZSA9ICcnO1xuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbU0NIRU1BXSkge1xuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtjb21wb25lbnRTY2hlbWFbU0NIRU1BXV07XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSkge1xuICAgICAgICBhdHRyaWJ1dGVUeXBlID0gY29tcG9uZW50U2NoZW1hW25hbWVdO1xuICAgICAgICBpZiAoYXR0cmlidXRlVHlwZSA9PT0gRVZFTlRfVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFN0YXRlKG5hbWUsIGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLm1vZGVsW2lkXSxcbiAgICBzdGF0ZSA9IHt9O1xuXG4gICAgaWYgKGNvbXBvbmVudFNjaGVtYSAmJiBjb21wb25lbnRTY2hlbWFbU0NIRU1BXSkge1xuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtjb21wb25lbnRTY2hlbWFbU0NIRU1BXV07XG4gICAgfVxuICAgIHN0YXRlID0gc3RvcmUuc3RhdGVzW2NvbXBvbmVudFNjaGVtYVtJRF1dO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHN0YXRlLmluZGV4T2YobmFtZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZU5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGZ1bmN0aW9uIF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICB2YXIgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlTmFtZSk7XG4gICAgICAgIGlmIChnZXRDbGFzc05hbWUodmFsdWUpICE9PSB0eXBlUmVmKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLmlkKCksIHR5cGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc1R5cGUodHlwZU5hbWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgIGNhc2UgaXNDdXN0b21UeXBlKHR5cGVOYW1lKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NoZWNrUmVmZXJlbmNlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgZW51bSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbnVtKHZhbHVlLCBzY2hlbWEpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmIChpc1JlZmVyZW5jZShzY2hlbWEudHlwZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gJGNvbXBvbmVudC5pc0luc3RhbmNlT2YoJGNvbXBvbmVudC5nZXQodmFsdWUpLCBnZXRSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAoaGFzVHlwZSh2YWx1ZSwgc2NoZW1hLnR5cGUpKSAmJiBzY2hlbWEudmFsdWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkRW51bVZhbHVlKHZhbHVlLCBzY2hlbWEudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiBhIHNjaGVtYSBpcyBjb21wbGlhbnQgd2l0aCBhIHNjaGVtYVxuICogaXQgaXMgc3VwcG9zZWQgdG8gdmFsaWRhdGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRTY2hlbWFcbiAqIEBwYXJhbSB7SlNPTn0gb2JqZWN0XG4gKiBAcGFyYW0ge0pTT059IHNjaGVtYVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRTY2hlbWEob2JqZWN0LCBzY2hlbWEpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgZmllbGQgPSBudWxsLFxuICAgIHJlc3VsdCA9IHRydWUsXG4gICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICB0eXBlU2NoZW1hID0gJycsXG4gICAgdHlwZVJlZiA9ICcnLFxuICAgIHJlYWxUeXBlID0gJycsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpID0gMDtcblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFJlZmVyZW5jZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICBlbnVtVmFsdWUgPSBbXTtcblxuICAgICAgICB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVTY2hlbWEpO1xuICAgICAgICB0eXBlUmVmID0gb2JqZWN0W3R5cGVSZWZdO1xuICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZS50eXBlW3R5cGVSZWZdLnNjaGVtYSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0udHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZW51bVZhbHVlID0gc3RvcmUudHlwZVt0eXBlUmVmXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudW1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtVmFsdWUoZmllbGQsIGVudW1WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlUmVmID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IEFycmF5LmlzQXJyYXkoZmllbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWZlcmVuY2UodHlwZVJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsICdvYmplY3QnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaGFzVHlwZShmaWVsZCwgdHlwZVJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkLCB0eXBlUmVmLCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0VHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHR5cGVTY2hlbWFbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZFNjaGVtYShmaWVsZFtpXSwgc3RvcmUudHlwZVt0eXBlU2NoZW1hWzBdXS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNUeXBlKGZpZWxkW2ldLCB0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLy8gdHlwZVxuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgIGlmIChoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSAmJiBoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgdGhlIGNvbnN0cnVjdG9yIG9mIGFuIG9iamVjdCBpcyBjb21wbGlhbnRcbiAqIHdpdGggdGhlIGRlZmluaXRpb24gb2YgdGhlIGNsYXNzLlxuICogQG1ldGhvZCBpc1ZhbGlkT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN0cmljdFxuICogQHBhcmFtIHtCb29sZWFufSBjbGVhblJlZlxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZE9iamVjdChvYmplY3QsIHNjaGVtYSwgc3RyaWN0LCBjbGVhblJlZikge1xuICAgIHZhciBmaWVsZE5hbWUgPSAnJyxcbiAgICBmaWVsZCA9IG51bGwsXG4gICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgIHR5cGVTY2hlbWEgPSAnJyxcbiAgICB0eXBlUmVmID0gJycsXG4gICAgcmVhbFR5cGUgPSAnJyxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgaWYgKGhhc1R5cGUoc3RyaWN0LCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgY3VzdG9tIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHR5cGVTY2hlbWEgPSBzdG9yZS50eXBlW3R5cGVTY2hlbWFdO1xuICAgICAgICBpZiAodHlwZVNjaGVtYSkge1xuICAgICAgICAgICAgaWYgKHR5cGVTY2hlbWEuc2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHR5cGVTY2hlbWEuc2NoZW1hKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRFbnVtKGZpZWxkLCB0eXBlU2NoZW1hKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGUgb2YgdGhlIHJlZmVyZW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRSZWZlcmVuY2UoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgY29tcCA9IG51bGwsXG4gICAgICAgIGlzQ29tcG9uZW50ID0gZmFsc2U7XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLmlkKSB7XG4gICAgICAgICAgICBjb21wID0gZmllbGQ7XG4gICAgICAgICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wID0gJGNvbXBvbmVudC5nZXQoZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNUeXBlKGNvbXAsICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKGdldENsYXNzTmFtZShjb21wKSAhPT0gdHlwZVJlZikge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRUeXBlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ29tcG9uZW50ICYmIGNsZWFuUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZE5hbWVdID0gY29tcC5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3QgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRlZmF1bHQgdmFsdWUgb2YgYW4gb2JqZWN0ICh7fSBvciBudWxsKVxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoaGFzVHlwZShmaWVsZCwgJ29iamVjdCcpICYmIGZpZWxkICE9PSBudWxsICYmIE9iamVjdC5rZXlzKGZpZWxkKS5sZW5ndGgpOlxuICAgICAgICAgICAgICAgIGNhc2UgaGFzVHlwZShmaWVsZCwgJ3N0cmluZycpOlxuICAgICAgICAgICAgICAgICAgICAkbG9nLmNhbk5vdFlldFZhbGlkYXRlKGZpZWxkLCB0eXBlUmVmKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgZmllbGQgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkVHlwZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICB0eXBlQXJyYXkgPSAnJztcblxuICAgICAgICByZWFsVHlwZSA9IGdldFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlU2NoZW1hID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZCkgIT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGQpICE9PSB0eXBlU2NoZW1hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlUeXBlKGZpZWxkTmFtZSwgdHlwZVNjaGVtYSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gZmllbGQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0eXBlQXJyYXkgPSB0eXBlU2NoZW1hWzBdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbVR5cGUodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkT2JqZWN0KGZpZWxkW2ldLCBzdG9yZS50eXBlW3R5cGVBcnJheV0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1JlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkW2ldKSAhPT0gdHlwZUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVBcnJheSwgZmllbGRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZFtpXSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXNlIG9mIGFuIGltcG9ydCBvZiBhIHN5c3RlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENsYXNzTmFtZSgkY29tcG9uZW50LmdldChmaWVsZFtpXSkpICE9PSBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoZmllbGRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSAhPT0gZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRDbGFzc05hbWUoSlNPTi5zdHJpbmdpZnkoZmllbGRbaV0pLCBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSwgZ2V0Q2xhc3NOYW1lKGZpZWxkW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbaV0gPSBmaWVsZFtpXS5pZCgpOyAvLyBzdG9yZSB0aGUgaWQgaW5zdGVhZCB0aGUgZnVsbCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsICdhcnJheScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blR5cGUoZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuXG4gICAgLy8gdHlwZVxuICAgIGZvciAoZmllbGROYW1lIGluIG9iamVjdCkge1xuICAgICAgICBmaWVsZCA9IG9iamVjdFtmaWVsZE5hbWVdO1xuXG4gICAgICAgIGlmICghaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcblxuICAgICAgICAgICAgLy8gY2FzIG9mIF9pZFxuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJ19pZCcpIHtcbiAgICAgICAgICAgICAgICB0eXBlU2NoZW1hID0gJ3N0cmluZyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc0N1c3RvbVR5cGUodHlwZVNjaGVtYSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2lzVmFsaWRDdXN0b21UeXBlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGlzUmVmZXJlbmNlKHR5cGVTY2hlbWEpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkUmVmZXJlbmNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFuZGF0b3J5XG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgaWYgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5KGZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICovXG5mdW5jdGlvbiBwcmVwYXJlT2JqZWN0KG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgIGZpZWxkID0gbnVsbCxcbiAgICBtYW5kYXRvcnkgPSB0cnVlLFxuICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuXG4gICAgLy8gbWFuZGF0b3J5ICYgZGVmYXVsdCB2YWx1ZVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IGZpZWxkLmRlZmF1bHQ7XG4gICAgICAgIGlmIChoYXNUeXBlKG9iamVjdFtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgPT09IGZhbHNlICYmICFoYXNUeXBlKGRlZmF1bHRWYWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChzdG9yZS5tb2RlbFtpZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gc3RvcmUubW9kZWxbaWRdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgcGFyZW50cyBvZiBhIHNoZW1hIGlmIGFueS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgbW9kZWwgPSBudWxsO1xuXG4gICAgbW9kZWwgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIHJlc3VsdCA9IG1vZGVsW0lOSEVSSVRTXTtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbmhlcml0RnJvbShuYW1lLCBwYXJlbnROYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgIHBhcmVudHMgPSBbXSxcbiAgICBpID0gMCxcbiAgICBsZW5ndGggPSAwO1xuXG4gICAgLypcbiAgICAgKiBcbiAgICAgKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAgICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFuY2VzdG9yTmFtZSBvZiB0aGUgcGFyZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zZWFyY2hQYXJlbnQoY2xhc3NOYW1lLCBhbmNlc3Rvck5hbWUpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSBmYWxzZSxcbiAgICAgICAgcGFyZW50cyA9IFtdLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YoYW5jZXN0b3JOYW1lKSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICAgIH1cblxuICAgIHBhcmVudHMgPSBnZXRQYXJlbnRzKG5hbWUpO1xuICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBNb25vY28gTWV0YW1vZGVsLiA8YnI+XG4gKiBNb25vY28gTWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEBjbGFzcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEBtZXRob2Qgc2NoZW1hXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gc2NoZW1hO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAcGFyYW0ge0pTT059IHR5cGVcbiAqIEBtZXRob2QgdHlwZVxuICovXG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuXG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogR2V0IHBhcmVudHMgb2YgYSBzaGVtYSBpZiBhbnkuXG4gKiBAbWV0aG9kIGdldFBhcmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtBcnJheX0gaWQgb2YgdGhlIHBhcmVudHNcbiAqL1xuZXhwb3J0cy5nZXRQYXJlbnRzID0gZ2V0UGFyZW50cztcblxuXG4vKlxuICogQ2hlY2sgaWYgYSBjbGFzcyBpbmhlcml0cyBmcm9tIGFub3RoZXIgb25lXG4gKiBAbWV0aG9kIGluaGVyaXRGcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmVudE5hbWUgbmFtZSBvZiB0aGUgcGFyZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaW5oZXJpdCBmcm9tIHRoZSBzcGVjaWZpYyBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydHMuaW5oZXJpdEZyb20gPSBpbmhlcml0RnJvbTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWZcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaXNWYWxpZE9iamVjdCA9IGlzVmFsaWRPYmplY3Q7XG5cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBvYmplY3QgaW4gb3JkZXIgdG8gYmUgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIEBtZXRob2QgcHJlcGFyZU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICovXG5leHBvcnRzLnByZXBhcmVPYmplY3QgPSBwcmVwYXJlT2JqZWN0O1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gKiBAbWV0aG9kIGlzVmFsaWRUeXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZFR5cGUgPSBpc1ZhbGlkVHlwZTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtTY2hlbWF9IHNjaGVtYVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBlbnVtXG4gKi9cbmV4cG9ydHMuaXNWYWxpZEVudW0gPSBpc1ZhbGlkRW51bTtcblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaXNWYWxpZFN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkU3RhdGUgPSBpc1ZhbGlkU3RhdGU7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhbiBldmVudC5cbiAqIEBtZXRob2QgaXNFdmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYW4gZXZlbnRcbiAqL1xuZXhwb3J0cy5pc0V2ZW50ID0gaXNFdmVudDsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIE1vbm9jby4gPGJyPlxuICogSXQgaW5pdHMgTW9ub2NvIE1ldGFtb2RlbCBhbmQgbG9hZHMgdGhlIE1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbnN5c3RlbSA9ICcnO1xuXG5cbi8qIEluaXQgTWV0YW1vZGVsICovXG5cblxuJG1ldGFtb2RlbC5pbml0KCk7XG5cblxuLyogSW5pdCBNb25vY28gZnJvbSBhIE1vbm9jbyBTeXN0ZW0gKi9cblxuXG5zeXRlbUlkID0gJGRiLnN5c3RlbSgkc3lzdGVtLnN5c3RlbSk7XG5zeXN0ZW0gPSAkY29tcG9uZW50LmdldChzeXRlbUlkKTtcbnN5c3RlbS5tYWluKCk7XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaXMgdGhlIG1haW4gbW9kdWxlIG9mIE1vbm9jby4gPGJyPlxuICogSXQgaW5pdHMgTW9ub2NvIE1ldGFtb2RlbCBhbmQgbG9hZHMgdGhlIE1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBNb25vY28gaW5zdGFuY2UuXG4gKiBAcHJvcGVydHkgbW9ub2NvXG4gKiBAdHlwZSBNb25vY29cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgnbW9ub2NvJyk7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3RhdGVcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28tc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSkge1xuICAgIHN0b3JlW2lkXSA9IHN0YXRlO1xuICAgICRkYi5zdG9yZS5Nb25vY29TdGF0ZVtpZF0gPSB7XCJuYW1lXCI6IHN0YXRlfTtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0IFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHN0YXRlcyBvZiBhbGwgdGhlIGNvbXBvbmVudHMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1zdGF0ZVxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQGNsYXNzIG1vbm9jby1zdGF0ZVxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBTZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWQgb24gd2hpY2ggY2hhbmdlIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLnNldCA9IHNldDtcblxuXG4vKipcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50cyBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgTW9ub2NvLiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuIDxicj5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6PGJyPlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsIDxicj5cbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kIDxicj5cbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC4gPGJyPlxuICogXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIG1vbm9jby4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28td29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRzdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBtZXRob2RzICovXG5cblxuLyoqXG4gKiBUaGUgTW9ub2NvRXJyb3IgY2xhc3MuXG4gKiBAY2xhc3MgTW9ub2NvRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgbWVzc2FnZSBvZiB0aGUgZXJyb3JcbiAqL1xuZnVuY3Rpb24gTW9ub2NvRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5uYW1lID0gXCJNb25vY29FcnJvclwiO1xufVxuTW9ub2NvRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5Nb25vY29FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb25vY29FcnJvcjtcblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbmFtZXMgb2YgdGhlIHBhcmFtZXRlciBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBtZXRob2QgZm9yIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwLFxuICAgIG1pbiA9IDAsXG4gICAgbWF4ID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtaW4pO1xuICAgICAgICByZXN1bHQucHVzaChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2Qgc2V0RGVmYXVsdFZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZShpZCwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgIHBhcmFtcyA9IFtdLFxuICAgIHJlc3VsdCA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IGZhbHNlICYmIHR5cGVvZiBhcmdzW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbXNbaV0uZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSB0eXBlIHJldHVybmVkIGJ5IGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRSZXR1cm5UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIHR5cGUgcmV0dXJuZWQgYnkgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UmV0dXJuVHlwZShpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciByZXN1bHRUeXBlID0gbnVsbCxcbiAgICByZXN1bHQgPSBudWxsO1xuXG4gICAgcmVzdWx0VHlwZSA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5yZXN1bHQ7XG4gICAgaWYgKHJlc3VsdFR5cGUpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgdHlwZSBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQG1ldGhvZCBnZXRQYXJhbVR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgb2YgYSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtVHlwZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICBwYXJhbXMgPSBbXSxcbiAgICByZXN1bHQgPSBbXSxcbiAgICBsZW5ndGggPSAwLFxuICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8wqAnJyxcbiAgICBtZXRob2RSZXN1bHQgPSBwYXJhbXMubWV0aG9kUmVzdWx0IHx8IHVuZGVmaW5lZCxcbiAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJyxcbiAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVyblR5cGUgPSBnZXRSZXR1cm5UeXBlKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAocmV0dXJuVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocmV0dXJuVHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1ldGhvZFJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRSZXN1bHRUeXBlKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kUmVzdWx0ICE9PSByZXR1cm5UeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGFjdGlvbnMgb2YgdGhlIHNwZWNpZmllZCBzdGFydGVcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIE1vbm9jbyBDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICAgIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSksXG4gICAgcGFyZW50cyA9IFtdLFxuICAgIGxlbmd0aCA9IDAsXG4gICAgaSA9IDAsXG4gICAgcGFyZW50ID0gbnVsbDtcblxuICAgIGlmICghYWN0aW9uLmxlbmd0aCB8fCBpc0V2ZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSAhPT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKCRjb21wb25lbnQuZ2V0KGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50cyA9ICRtZXRhbW9kZWwuZ2V0UGFyZW50cyhjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJlbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9ICRjb21wb25lbnQuZ2V0KHBhcmVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uLmNvbmNhdChnZXRBY3Rpb25zKHBhcmVudCwgbmFtZSwgaXNFdmVudCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cudW5rbm93bkNvbXBvbmVudChwYXJlbnRzW2ldLCBjb21wb25lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbn1cblxuXG4vKlxuICogQ2FsbCBhbiBhY3Rpb24gYW5kIG1ha2Ugc29tZSBEZXBlbmRlbmN5IEluamVjdGlvbiBpZiBpdCBpcyBhIGNvcmUgYWN0aW9uXG4gKiBAbWV0aG9kIGNhbGxBY3Rpb25cbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHBhcmFtIHtBcnJheX0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIHBhcmFtZXRlcnMgb2YgdGhlIGFjdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gcmVzdWx0IG9mIHRoZSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gY2FsbEFjdGlvbihjb21wb25lbnQsIHN0YXRlLCBhY3Rpb24sIHBhcmFtcykge1xuICAgIHZhciByZXN1bHQgPSBudWxsLFxuICAgIGluamVjdGVkUGFyYW1zID0gW10sXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMDtcblxuICAgIHBhcmFtcyA9IHNldERlZmF1bHRWYWx1ZShjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSwgc3RhdGUsIHBhcmFtcyk7XG5cbiAgICB0cnkge1xuICAgICAgICBpZiAoYWN0aW9uLmNvcmUpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKHBhcmFtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjb21wb25lbnQpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkZGIpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaCgkbWV0YW1vZGVsKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goZXhwb3J0cyk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRiZWhhdmlvcik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRsb2cpO1xuXG4gICAgICAgICAgICByZXN1bHQgPSBhY3Rpb24uYWN0aW9uLmFwcGx5KGNvbXBvbmVudCwgaW5qZWN0ZWRQYXJhbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gYWN0aW9uLmFjdGlvbi5hcHBseShjb21wb25lbnQsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW9ub2NvRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcImVycm9yIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50LmlkKCkgKyBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5nZXRNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHdoZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIG1ldGhvZCAnXCIgKyBzdGF0ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgY29tcG9uZW50LmlkKCkgKyBcIidcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiOiBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgY2FsbGluZyB0aGUgYWN0aW9uLlxuICogQG1ldGhvZCBjaGVja1BhcmFtc1xuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFxuICovXG5mdW5jdGlvbiBjaGVja1BhcmFtcyhwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCBudWxsLFxuICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fMKgJycsXG4gICAgYXJncyA9IHBhcmFtcy5hcmdzIHx8wqAnJyxcbiAgICBwYXJhbXNOYW1lID0gW10sXG4gICAgcGFyYW1zVHlwZSA9IFtdLFxuICAgIHBhcmFtc051bWJlciA9IFtdLFxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgIGkgPSAwLFxuICAgIHBhcmFtID0gbnVsbCxcbiAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgcGFyYW1zVHlwZSA9IGdldFBhcmFtVHlwZXMoY29tcG9uZW50Q2xhc3NOYW1lLCBtZXRob2ROYW1lKTtcbiAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgLy8gY2FzZSBvZiBvYmplY3RcbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zTnVtYmVyLmluZGV4T2YobGVuZ3RoKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSwgcGFyYW1zTmFtZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kIG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYW4gYWN0aW9uIGZvciB0aGUgbmV3IHN0YXRlIDxicj5cbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA0LiBDaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA2LiBJZiBub3QgYW4gb2YgZXZlbnQsIGNoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNy4gSWYgYWxsIGlzIG9rLCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIDxicj5cbiAqIDguIFJldHVybiB0aGUgcmVzdWx0IDxicj5cbiAqIFxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZSA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBzdGF0ZShwYXJhbXMpIHtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuY29tcG9uZW50ID0gcGFyYW1zLmNvbXBvbmVudCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG4gICAgcGFyYW1zLmRhdGEgPSBwYXJhbXMuZGF0YSB8fCBbXTtcblxuICAgIHZhciBjb21wb25lbnQgPSBudWxsLFxuICAgIGN1cnJlbnRTdGF0ZSA9ICcnLFxuICAgIGFjdGlvbnMgPSBbXSxcbiAgICBhY3Rpb24gPSBudWxsLFxuICAgIHJlc3VsdCA9IG51bGwsXG4gICAgaSA9IDAsXG4gICAgbGVuZ3RoID0gMCxcbiAgICBpc0V2ZW50ID0gZmFsc2U7XG5cbiAgICBjdXJyZW50U3RhdGUgPSAkc3RhdGUuZ2V0KHBhcmFtcy5jb21wb25lbnQpO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gJ2Rlc3Ryb3knKSB7XG5cbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlzRXZlbnQgPSAkbWV0YW1vZGVsLmlzRXZlbnQocGFyYW1zLnN0YXRlLCBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBhY3Rpb25zID0gZ2V0QWN0aW9ucyhjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgaXNFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgaWYgKGNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgXCJtZXRob2ROYW1lXCI6IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogcGFyYW1zLmRhdGFcbiAgICAgICAgICAgIH0pKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uc1swXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgYWN0aW9uLCBwYXJhbXMuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrUmVzdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1ldGhvZFJlc3VsdFwiOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQWN0aW9uKGNvbXBvbmVudCwgcGFyYW1zLnN0YXRlLCBhY3Rpb24sIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAkc3RhdGUuc2V0KGNvbXBvbmVudC5pZCgpLCBwYXJhbXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRyeWluZyB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyBwYXJhbXMuY29tcG9uZW50ICsgXCInXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBTdG9wIHRoZSB3b3JrZmxvdyBlbmdpbmUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVycyA8YnI+XG4gKiB7Qm9vbGVhbn0gZXJyb3IgdHJ1ZSBpZiB0aGUgc3RvcCBvZiB0aGUgd29ya2Zsb3cgaXMgZHVlIHRvIGFuIGVycm9yIChkZWZhdWx0IGZhbHNlKSA8YnI+XG4gKiB7U3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdG8gbG9nIChkZWZhdWx0ICcnKVxuICovXG5mdW5jdGlvbiBzdG9wKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJhbXMuZXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gICAgcGFyYW1zLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZSB8fCAnJztcblxuICAgIGV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9ub2NvRXJyb3IoXCJtb25vY28gaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIFwiICsgcGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1vbm9jb0Vycm9yKFwibW9ub2NvIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdtb25vY286IG1vbm9jbyBoYXMgYmVlbiBzdG9wcGVkJyk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgICAkbG9nLndvcmtmbG93UmVzdGFydGVkKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgTW9ub2NvLiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuIDxicj5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6PGJyPlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsIDxicj5cbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kIDxicj5cbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC4gPGJyPlxuICogXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIG1vbm9jby4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28td29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBcbiAqIFdvcmtsb3c6PGJyPlxuICogPGJyPlxuICogMC4gQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gZGVzdHJveWVkIDxicj5cbiAqIDEuIENoZWNrIGlmIHRoZSBzdGF0ZSBpcyBhIG1ldGhvZCBvciBhbiBldmVudCA8YnI+XG4gKiAyLiBTZWFyY2ggaWYgdGhlcmUgaXMgYSBiZWhhdmlvciB3aXRoIGFuIGFjdGlvbiBmb3IgdGhlIG5ldyBzdGF0ZSA8YnI+XG4gKiAzLiBJZiBzbywgZ2V0IHRoZSBhY3Rpb24ocykgPGJyPlxuICogNC4gQ2hlY2sgaWYgdGhlIGNvbmRpdG9ucyBvbiBpbnB1dCBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgbm90IGFuIG9mIGV2ZW50LCBjaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZXhwb3J0cy5zdGF0ZSA9IHN0YXRlO1xuXG5cbi8qKlxuICogU3RvcCB0aGUgd29ya2Zsb3cgZW5naW5lLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHBhcmFtZXRlcnMgPGJyPlxuICoge0Jvb2xlYW59IGVycm9yIHRydWUgaWYgdGhlIHN0b3Agb2YgdGhlIHdvcmtmbG93IGlzIGR1ZSB0byBhbiBlcnJvciAoZGVmYXVsdCBmYWxzZSkgPGJyPlxuICoge1N0cmluZ30gbWVzc2FnZSBlcnJvciBtZXNzYWdlIHRvIGxvZyAoZGVmYXVsdCAnJylcbiAqL1xuZXhwb3J0cy5zdG9wID0gc3RvcDtcblxuXG4vKipcbiAqIFJlc3RhcnQgdGhlIHdvcmtmbG93IGVuZ2luZSBmcm9tIHRoZSBsYXN0IHN0YXRlLlxuICogQG1ldGhvZCByZXN0YXJ0XG4gKi9cbmV4cG9ydHMucmVzdGFydCA9IHJlc3RhcnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZXhwb3J0cy5jaGVja1BhcmFtcyA9IGNoZWNrUGFyYW1zOyJdfQ==
