(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.monoco = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    "version": "0.7.0",
    "description": "A Model and a NoSQL Database for Components",
    "_id": "e89c617b6b15d24",
    "schemas": {
        "MonocoSchema": {
            "ready": "event",
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
            "warning": "event"
        },
        "Monoco": {
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
            "on": "method",
            "classInfo": "property",
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
            "ready": "event",
            "sync": "method",
            "main": "method"
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
            "action": "function load(url, async) {    var xhr = null, callbackLoad = null;    xhr = new XMLHttpRequest();    callbackLoad = function callbackLoad(system) {        var sysId = $db.system(system);        var sys = $component.get(sysId);        var systems = document.querySelectorAll('link[rel=system]');        if (sys) {            sys.main();        }        if (systems.length + 1 === $db.MonocoSystem.count() ) {            $component.get('monoco').ready();            }    };    if (async) {        xhr.open('GET', url, true);        xhr.onreadystatechange = function () {            if (xhr.readyState === 4) {                if (xhr.status === 200) {                    callbackLoad(JSON.parse(xhr.response));                }            }        };        xhr.send(null);    } else {        xhr.open('GET', url, false);        xhr.send(null);        if (xhr.status === 200) {            callbackLoad(JSON.parse(xhr.response));        }    }}",
            "core": true,
            "useCoreAPI": true
        },
        "1f6001773a18791": {
            "_id": "1f6001773a18791",
            "component": "e89c617b6b15d24",
            "state": "main",
            "action": "function main() {    var systems = [],        system = null,        i = 0,        length = 0;    if (typeof document !== 'undefined') {        systems = document.querySelectorAll('link[rel=system]');        length = systems.length;        for (i = 0; i < length; i++) {            system = systems[i];            if (system.getAttribute('async') === 'true') {                this.require('monoco').load(system.href, true);            } else {                this.require('monoco').load(system.href, false);            }        }        if (length === 0) {            this.require('monoco').ready();        }    }}",
            "core": true
        },
        "17170134f512376": {
            "_id": "17170134f512376",
            "component": "Monoco",
            "state": "error",
            "action": "function error(data) { console.error('monoco: ' + data.message, data.error); }",
            "core": true
        },
        "1387a1461d1abbc": {
            "_id": "1387a1461d1abbc",
            "component": "Monoco",
            "state": "find",
            "action": "function find(Class, query) { return $component.find(Class, query);}",
            "core": true,
            "useCoreAPI": true
        },
        "149c819caa196fc": {
            "_id": "149c819caa196fc",
            "component": "Monoco",
            "state": "system",
            "action": "function system(name) { var System = null, system = {}, result = [], conf = {}; if (name) { conf.master = true; conf.name = name; System = this.require('MonocoSystem'); system = new System(conf); } else { result = this.find('MonocoSystem', {'master': true}); if (result.length) { system = result[0]; } } return system; }",
            "core": true
        },
        "1452a105031ce6c": {
            "_id": "1452a105031ce6c",
            "component": "Monoco",
            "state": "warning",
            "action": "function warning(message) { console.warn('monoco: ' + message); }",
            "core": true
        },
        "12c5117b3f1383a": {
            "_id": "12c5117b3f1383a",
            "component": "MonocoChannel",
            "state": "listen",
            "action": "function listen(event, action) { $channel.listen(event, action); }",
            "core": true,
            "useCoreAPI": true
        },
        "18657117a419699": {
            "_id": "18657117a419699",
            "component": "MonocoChannel",
            "state": "send",
            "action": "function send(message) { return $channel.send(message); }",
            "core": true,
            "useCoreAPI": true
        },
        "185901b58d10aaa": {
            "_id": "185901b58d10aaa",
            "component": "MonocoClassInfo",
            "state": "collection",
            "action": "function collection(name) { var result = {}; if (this.metamodel()[name] === 'collection') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1630910862176bf": {
            "_id": "1630910862176bf",
            "component": "MonocoClassInfo",
            "state": "collections",
            "action": "function collections() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'collection') { result.push(item); } } return result; }",
            "core": true
        },
        "1f9b51f1b01a94f": {
            "_id": "1f9b51f1b01a94f",
            "component": "MonocoClassInfo",
            "state": "event",
            "action": "function event(name) { var result = {}; if (this.metamodel()[name] === 'event') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1535217f4710222": {
            "_id": "1535217f4710222",
            "component": "MonocoClassInfo",
            "state": "events",
            "action": "function events() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'event') { result.push(item); } } return result; }",
            "core": true
        },
        "1605f1dd971f215": {
            "_id": "1605f1dd971f215",
            "component": "MonocoClassInfo",
            "state": "method",
            "action": "function method(name) { var result = {}; if (this.metamodel()[name] === 'method') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "1cabd1801c18723": {
            "_id": "1cabd1801c18723",
            "component": "MonocoClassInfo",
            "state": "methods",
            "action": "function methods() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'method') { result.push(item); } } return result; }",
            "core": true
        },
        "10cfb1adc919bc7": {
            "_id": "10cfb1adc919bc7",
            "component": "MonocoClassInfo",
            "state": "properties",
            "action": "function properties() { var keys = Object.keys(this.metamodel()), item = '', result = [], i = 0, length = 0; length = keys.length; for (i = 0; i < length; i++) { item = keys[i]; if (this.metamodel()[item] === 'property') { result.push(item); } } return result; }",
            "core": true
        },
        "167db1426a1ad1f": {
            "_id": "167db1426a1ad1f",
            "component": "MonocoClassInfo",
            "state": "property",
            "action": "function property(name) { var result = {}; if (this.metamodel()[name] === 'property') { result = this.model()[name]; } return result; }",
            "core": true
        },
        "144431a2a814cb0": {
            "_id": "144431a2a814cb0",
            "component": "MonocoComponent",
            "state": "destroy",
            "action": "function destroy() { $component.destroy(this.id()); }",
            "core": true,
            "useCoreAPI": true
        },
        "10c0a16b2c1d307": {
            "_id": "10c0a16b2c1d307",
            "component": "MonocoComponent",
            "state": "off",
            "action": "function off(state, behaviorId) { var args = [], i = 0, length = 0; length = arguments.length; for (i = 0; i < length - 7; i++) { args.push(arguments[i]); } if ($workflow.checkParams({\"component\": this, \"methodName\": \"off\", \"args\": args})) { if ($metamodel.isValidState(state, this.constructor.name)) {$behavior.remove({\"behaviorId\": behaviorId, \"componentId\": this.id(), \"state\": state}); } else { $helper.getMonoco().warning({ \"message\":\"invoke 'off' method of component '\" + this.id() + \"' with an invalid state '\" + state + \"'\"}); } } }",
            "core": true,
            "useCoreAPI": true
        },
        "104881aa5f1e842": {
            "_id": "104881aa5f1e842",
            "component": "MonocoComponent",
            "state": "require",
            "action": "function require(id) { return $component.get(id); }",
            "core": true,
            "useCoreAPI": true
        },
        "17e8213e041beca": {
            "_id": "17e8213e041beca",
            "component": "MonocoDatabase",
            "state": "subsystem",
            "action": "function subsystem(params) { return $db.subsystem(params); }",
            "core": true,
            "useCoreAPI": true
        },
        "161d41128614a0d": {
            "_id": "161d41128614a0d",
            "component": "MonocoDatabase",
            "state": "system",
            "action": "function system(system) { return $db.system(system); }",
            "core": true,
            "useCoreAPI": true
        },
        "1af171cd5c184ad": {
            "_id": "1af171cd5c184ad",
            "component": "MonocoMetamodel",
            "state": "create",
            "action": "function create() { $metamodel.create(); }",
            "core": true,
            "useCoreAPI": true
        },
        "179cf1b56d11b43": {
            "_id": "179cf1b56d11b43",
            "component": "MonocoMetamodel",
            "state": "schema",
            "action": "function schema(schema) { $metamodel.schema(schema); }",
            "core": true,
            "useCoreAPI": true
        },
        "11bf91aff3117df": {
            "_id": "11bf91aff3117df",
            "component": "MonocoMetamodel",
            "state": "type",
            "action": "function type(type) { $metamodel.type(type); }",
            "core": true,
            "useCoreAPI": true
        },
        "1158e1937619fb8": {
            "_id": "1158e1937619fb8",
            "component": "MonocoSystem",
            "state": "sync",
            "action": "function sync() { var dump = $db.dump(); this.schemas(dump.schemas); this.types(dump.types); this.behaviors(dump.behaviors); this.components(dump.components); }",
            "core": true,
            "useCoreAPI": true
        }
    },
    "components": {
        "Monoco": {
            "monoco": {
                "_id": "monoco",
                "version": "0.7.0"
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
 * @requires monoco-channel
 * @class monoco-behavior
 * @static
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');
var $channel = require('./channel.js');


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
        params.push('$channel');
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
 * Add a behavior that will be stored in monoco database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in monoco database
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

    if (useCoreAPI) {
        action = createFunction(state, strAction, core, useCoreAPI);
    }
    
    store[behaviorId] = action;

    $db.MonocoBehavior.insert({
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
            $db.MonocoBehavior.remove({
                "_id": params.behaviorId,
                "component": params.componentId,
                "state": params.state
            });
            delete store[params.behaviorId];
        } else {
            result = $db.MonocoBehavior.remove({
                "component": params.componentId,
                "state": params.state
            });
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
 * @param {String} id
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
 * @module monoco
 * @submodule monoco-behavior
 * @requires monoco-db
 * @requires monoco-helper
 * @requires monoco-channel
 * @class monoco-behavior
 * @static
 */


/**
 * Add a behavior that will be stored in monoco database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, monoco core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in monoco database
 */
exports.add = add;


/**
 * Get a behavior by its id.
 * @method get
 * @param {String} id
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
},{"./channel.js":3,"./db.js":5,"./helper.js":6}],3:[function(require,module,exports){
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
 * This module manages the channel.
 * 
 * @module monoco
 * @submodule monoco-channel
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-log
 * @requires monoco-helper
 * @class monoco-channel
 * @static
 */

'use strict';

var $db = require('./db.js');
var $metamodel = require('./metamodel.js');
var $behavior = require('./behavior.js');
var $log = require('./log.js');
var $helper = require('./helper.js');


/* Public methods */

/*
 * Listen to an event.
 * @method listen
 * @param {String} event name of the event
 * @param {Function} action code to execute
 */
function listen(event, action) {
    $behavior.add('channel', event, action, true);
}


/*
 * Send a message into the channel.
 * @method send
 * @param {type} message
 * @returns {Boolean} true if the message was sent
 */
function send(message) {
    var messages = [],
        result = true,
        systemId = '',
        systems = [];

    if ($helper.isMonoco()) {
        systems = $helper.getMonoco().find('MonocoSystem', { 'master': true });
        if (systems.length) {
            systemId = systems[0].id();
        }
    }

    message.from = systemId;

    messages = $db.MonocoMessage.insert(message);

    if (!messages.length) {
        result = false;
    }
    return result;
}


/* exports */


/**
 * This module manages the channel.
 * 
 * @module monoco
 * @submodule monoco-channel
 * @requires monoco-db
 * @requires monoco-metamodel
 * @requires monoco-behavior
 * @requires monoco-log
 * @requires monoco-helper
 * @class monoco-channel
 * @static
 */


/**
 * Listen to an event.
 * @method listen
 * @param {String} event name of the event
 * @param {Function} action code to execute
 */
exports.listen = listen;


/**
 * Send a message into the channel.
 * @method send
 * @param {type} message
 * @return {Boolean} true if the message was sent
 */
exports.send = send;
},{"./behavior.js":2,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8}],4:[function(require,module,exports){
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
 * It is the factory of all the components that are created by monoco.
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
var $worklow = require('./workflow.js');
var $state = require('./state.js');

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
        type = '',
        id = '',
        propertyName = '';

    conf = conf || {};
    type = conf.type || '';
    id = conf.id || '';
    propertyName = conf.propertyName || '';
    arrDb = conf.arr || [];

    arrDb.forEach(function (val) {
        if (type.indexOf('@') !== -1) {
            arr.push(monoco.require(val));
        } else {
            arr.push(val);
        }
    });

    arr.push = function (val) {
        var isValid = false,
            isClass = false;

        isClass = type.indexOf('@') !== -1;

        if (isClass) {
            if (val && (val.constructor.name === type.replace('@', ''))) {
                this[this.length] = val;
                arrDb.push(val.id());

                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [arrDb.length, val.id(), 'add']
                });
            }
        } else { // TODO collection of object usefull ?
            if (val && $metamodel.isValidType(val, type)) {
                this[this.length] = val;
                arrDb.push(val);

                $workflow.state({
                    "component": id,
                    "state": propertyName,
                    "data": [arrDb.length, val, 'add']
                });
            }
        }
    };

    arr.pop = function () {
        var result = null;
        arrDb.pop();
        if (this.length !== 0) {
            var data = this[this.length - 1];
            result = this.splice(this.length - 1, 1);
            $workflow.state({
                "component": id,
                "state": propertyName,
                "data": [arrDb.length - 1, data, 'remove']
            });
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
        if (schema[propNames[i]] === PROPERTY_TYPE || schema[propNames[i]] === COLLECTION_TYPE) {
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

        if (typeof store[config._id] !== 'undefined') {
            $log.idAlreadyUsed(config._id);
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
                    val = null,
                    realVal = null;

                if (typeof value === 'undefined') {
                    if (typeof position === 'undefined') {

                        monocoArr = new monocoArray({
                            "id": this.id(),
                            "propertyName": propertyName,
                            "classId": classId,
                            "type": propertyType[0],
                            "arr": $db.store[classId][this.id()][propertyName]
                        });

                        return monocoArr;
                    } else {
                        val = $db.store[classId][this.id()][propertyName][position];
                        if (val) {
                            if (propertyType[0].indexOf('@') !== -1) {
                                realVal = monoco.require(val);
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
                        if ($metamodel.isValidType(value, propertyType[0])) {
                            search = $db[classId].find({ "_id": this.id() });
                            if (search.length) {

                                if (propertyType[0].indexOf('@') !== -1) {
                                    realVal = value.id();
                                } else {
                                    realVal = value;
                                }

                                component = search[0];
                                component[propertyName][position] = realVal;

                                if ($helper.isMonoco()) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, realVal);
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

                                if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                                    $helper.getMonoco().require('db').update(classId, this.id(), propertyName, value);
                                }
                                
                                // case of MonocoBehavior
                                if (classId === 'MonocoBehavior') {
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
                    !$metamodel.isCollection(state, classId) &&
                    $db.MonocoBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, behaviorId);
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
                    !$metamodel.isCollection(state, classId) &&
                    $db.MonocoBehavior.find({
                        "component": this.id(),
                        "state": state
                    }).length >= 1) {
                    $log.behaviorNotUnique(classId, state);
                } else {
                    if ($worklow.validParamNumbers(classId, state, handler)) {
                        behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI);

                        currentState = $state.get(this.id());
                        if (currentState && state === currentState.name) {
                            $workflow.action(behaviorId, behaviorId);
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
    if (
        $metamodel.inheritFrom(classId, 'MonocoComponent') ||
        classId === 'MonocoComponent'
        ) {
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
 * Find components with a query.
 * @method find
 * @param {String} Class class name of the component to search
 * @param {Object|Array} query query
 * @return {Array} components found
 *
 * @example 
 * $component.find("Student", {"name": "laure"}); <br>
 * $component.find("Student", {"name": "laure", "age" : 24}); <br>
 * $component.find("Student", [{"name": "rene"}, {"name": "robert"}]);
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
        // case of Behavior
        if (classId === 'MonocoBehavior') {
            $behavior.removeFromMemory(id);
        }
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
 * It is the factory of all the components that are created by monoco.
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
 * @param {String} Class class name of the component to search
 * @param {Object|Array} query query
 * @return {Array} components found
 *
 * @example 
 * $component.find("Student", {"name": "laure"}); <br>
 * $component.find("Student", {"name": "laure", "age" : 24}); <br>
 * $component.find("Student", [{"name": "rene"}, {"name": "robert"}]);
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
},{"./behavior.js":2,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8,"./state.js":10,"./workflow.js":11}],5:[function(require,module,exports){
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
 * This module manages monoco database. <br>
 * monoco database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * monoco Database is closely linked to monoco metamodel and monoco components because: <br>
 * - all operations done by monoco database must be compliant with the model before being finished, <br>
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
var $behavior = require('./behavior.js');
var $state = require('./state.js');
var $worklow = require('./workflow.js');


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
        'MonocoClassInfo',
        'MonocoMessage',
        'MonocoChannel'
    ];


/* Private methods */


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
 * A collection of documents managed by monoco. <br>
 * Internal collections manage core objects of monoco (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class MonocoDatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var MonocoDatabaseCollection = function (name) {
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
 * Before inserting the document, monoco checks that the document is compliant
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

        switch (true) {
            case this.name === 'MonocoSchema':
            case this.name === 'MonocoType':
            case this.name === 'MonocoExtendedSchema':
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
                    if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                        $helper.getMonoco().require('db').insert(this.name, obj);
                    }
                }

                if (this.name === 'MonocoMessage') {
                    if ($helper.isMonoco() && $helper.getMonoco().require('channel')) {
                        $helper.getMonoco().require('channel')[obj.event](obj.data);
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
MonocoDatabaseCollection.prototype.update = function (query, update, options) {
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
                            if ($helper.isMonoco()) {
                                $helper.getMonoco().require('db').update(this.name, docs[i]._id, attributeName, update[attributeName]);
                            }
                        } else {
                            $log.invalidPropertyTypeOnDbUpdate(this.name, docs[i]._id, attributeName, update[attributeName], schema[attributeName]);
                        }
                    } else {
                        $log.unknownPropertyOnDbUpdate(attributeName, docs[i]._id);
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
MonocoDatabaseCollection.prototype.remove = function (query) {
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
                        if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                            $helper.getMonoco().require('db').remove(this.name, id);
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
                    if ($helper.isMonoco() && $helper.getMonoco().require('db')) {
                        $helper.getMonoco().require('db').remove(this.name, id);
                    }
                    result.push(id);
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
 * Import/Export a monoco system into/from the database
 * @method system
 * @param {JSON} importedSystem a monoco system to import
 * @return {String} the id of the imported monoco system or the if of the current monoco system
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
        systems = exports.MonocoSystem.find({ 'master': true });
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
        systems = exports.MonocoSystem.find({ 'master': true });

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
 * Export a monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified monoco sub-system
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
    system.description = params.description || '';

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
    var monocoSystemId = '',
        monocoSystem = null;

    monocoSystem = exports.MonocoSystem.find({ '_id': 'e89c617b6b15d24' })[0];

    // clear all the data in memory
    exports.clear();
    $component.clear();
    $metamodel.clear();
    $state.clear();
    $behavior.clear();

    // init metamodel
    $metamodel.init();
    
    // reimport monoco core system
    monocoSystemId = exports.system(monocoSystem);
    $component.get(monocoSystemId).main();
}


/* exports */


/**
 * This module manages monoco database. <br>
 * monoco database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * monoco database is closely linked to monoco metamodel because: <br>
 * - all operations done by monoco database must be compliant with the model before being finished, <br>
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
 * monoco database store that list all the collections.
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
 * Import/Export a monoco system into/from the database.
 * @method system
 * @param {JSON} importedSystem a monoco system to import
 * @return {String} the id of the imported monoco system or the current monoco system  
 */
exports.system = system;


/**
 * Export a monoco sub-system.
 * @method subsystem
 * @param {JSON} params parameters
 * @return {String} a stringified monoco sub-system
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
},{"./behavior.js":2,"./component.js":4,"./helper.js":6,"./log.js":7,"./metamodel.js":8,"./state.js":10,"./workflow.js":11}],6:[function(require,module,exports){
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
 * Check if a monoco instance exists.
 * @method isMonoco
 * @return {Boolean} true if a monoco instance exist
 */
function isMonoco() {
    var result = false;

    if ($db.Monoco && $db.Monoco.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the monoco instance.
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
 * Get monoco instance.
 * @method getMonoco
 * @return {Monoco} monoco instance
 */
exports.getMonoco = getMonoco;


/**
 * Check if a monoco instance exists.
 * @method isMonoco
 * @return {Boolean} true if a monoco instance exist
 */
exports.isMonoco = isMonoco;


/**
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
exports.generateId = generateId;
},{"./component.js":4,"./db.js":5}],7:[function(require,module,exports){
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
    $helper.getMonoco().warning("unknown property '" + property + "' for the definition of '" + schema + "'");
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
    $helper.getMonoco().warning("can not set read-only property '" + propertyName + "' on component '" + id + "'");
}


/*
 * Invalid document on a monoco database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
    $helper.getMonoco().warning("invalid document " + JSON.stringify(doc) + " on an insert operation on collection " + collectionName);
}


/*
 * Invalid property on a monoco database update operation.
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the colllection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 */
function invalidPropertyTypeOnDbUpdate(collectionName, id, propertyName, propertyValue, type) {
    if (type.indexOf("#") !== -1) {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + propertyValue + "' on component '" + id + "'");
    } else {
        $helper.getMonoco().warning("invalid type for property '" + propertyName + "' on an update operation on collection '" + collectionName + "': expected '" + type + "' instead of '" + typeof propertyValue + "' on component '" + id + "'");
    }
}



/*
 * Unkonw property on a monoco database update operation.
 * @method unknownPropertyOnDbUpdate
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 */
function unknownPropertyOnDbUpdate(propertyName, id) {
    $helper.getMonoco().warning("unknown property '" + propertyName + "' on an update operation on component '" + id + "'");
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
 * The monoco workflow has been restarted.
 * @method workflowRestarted
 */
function workflowRestarted() {
    $helper.getMonoco().warning('monoco has been restarted');
}


/*
 * invalid parameter number for a method.
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} methodName name of the component
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
 * The master system is not found.
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
    $helper.getMonoco().warning("invalid type for the message '" + JSON.stringify(message) + "': expected type '" + type + "' for event '" + eventName + "'");
}


/*
 * invalid parameter number for an action add with on method.
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} methodName name of the component
 */
function invalidParamNumberMethodOn(id, methodName) {
    $helper.getMonoco().warning("invalid number of parameters when adding an action on method '" + methodName + "' on component '" + id + "'");
}


/*
 * Create a component with an id that is already used.
 * @method idAlreadyUsed
 * @param {String} id id of the component
 */
function idAlreadyUsed(id) {
    $helper.getMonoco().warning("try to create a component with the id '" + id + "' that is already used by another component");
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
        $helper.getMonoco().warning("try to update a component of id '" + currentId + "' with the new id '" + newId + "' that is already used");
    } else {
        $helper.getMonoco().warning("try to update a component of id '" + currentId + "' with the new id '" + newId + "'");
    }
}

/*
 * Try to change the state of a component that has been destroyed
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 */
function invalidUseOfComponent(id) {
    $helper.getMonoco().warning("try to change the state of the destroyed component '" + id + "'");
}


/* exports */


/**
 * This module contains all the functions that write a log.
 * 
 * @module monoco
 * @submodule monoco-log
 * @requires monoco-helper
 * @class monoco-log
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
 * Invalid document on a monoco database insert operation.
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the colllection
 */
exports.invalidDocumentOnDbInsert = invalidDocumentOnDbInsert;


/**
 * Invalid property on a monoco database update operation.
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
 * The monoco workflow has been restarted.
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
 * Create a component with an id that is already used.
 * @method idAlreadyUsed
 * @param {String} id id of the component
 */
exports.idAlreadyUsed = idAlreadyUsed;


/**
 * Change the id of a component.
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 */
exports.updateUuid = updateUuid;


/**
 * Unkonw property on a monoco database update operation.
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
},{"./helper.js":6}],8:[function(require,module,exports){
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
 * This module manages monoco metamodel. <br>
 * monoco metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
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
    METHOD_TYPE = 'method',
    EVENT_TYPE = 'event',
    PROPERTY_TYPE = 'property',
    COLLECTION_TYPE = 'collection',
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
    $db.collection('MonocoSchema');
    $db.collection('MonocoExtendedSchema');
    $db.collection('MonocoClassInfo');
    $db.collection('MonocoBehavior');
    $db.collection('MonocoState');
    $db.collection('MonocoType');
    $db.collection('MonocoMessage');
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
        modelDef = {},
        id = '';

    for (modelName in store.model) {
        modelDef = store.model[modelName];
        id = modelDef._id + 'Info';

        if (
            typeof modelDef[SCHEMA] !== 'undefined' &&
            modelDef[CLASS] !== false &&
            !$component.get(id)
            ) {
            $db.MonocoClassInfo.insert({
                "_id": id,
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
    return checkType(name, id, EVENT_TYPE);
}


/*
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
function isProperty(name, id) {
    return checkType(name, id, PROPERTY_TYPE);
}


/*
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
function isCollection(name, id) {
    return checkType(name, id, COLLECTION_TYPE);
}


/*
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name
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
 * @param {Object} value
 * @param {String} typeName
 * @return {Boolean} true if the object is compliant with the type
 */
function isValidType(value, typeName) {
    var result = true;

    function _checkReference(value, typeName) {
        var isValid = true;
        var typeRef = getReference(typeName);
        if (hasType(value, 'string')) {
            value = $component.get(value);
        }
        if (getClassName(value) !== typeRef) {
            isValid = false;
            $log.invalidType(value, typeName.replace('@', ''));
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
 * This module manages monoco metamodel. <br>
 * monoco metamodel loads schemas and types, analyzes them and creates the component classes and related MonocoDatabaseCollections.
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
 * Get the definition of the metamodel.
 * @method getMetaDef
 * @return {Object} the metadefinition of the metamodel
 */
exports.getMetaDef = getMetaDef;


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


/**
 * Check if an attribute of the schema is a property.
 * @method isProperty
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a property
 */
exports.isProperty = isProperty;


/**
 * Check if an attribute of the schema is a collection.
 * @method isCollection
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a collection
 */
exports.isCollection = isCollection;


/**
 * Check if an attribute of the schema is a method.
 * @method isMethod
 * @param {String} name
 * @param {String} id component id
 * @return {Boolean} true if the attribute is a method
 */
exports.isMethod = isMethod;
},{"./component.js":4,"./db.js":5,"./log.js":7,"./workflow.js":11}],9:[function(require,module,exports){
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
 * This module is the main module of monoco. <br>
 * It inits monoco metamodel and loads monoco core system.
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


/* Init monoco from a  system */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of monoco. <br>
 * It inits monoco metamodel and loads monoco core system.
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
 * monoco instance.
 * @property monoco
 * @type Monoco
 */
module.exports = $component.get('monoco');
},{"../build/system/system.js":1,"./component.js":4,"./db.js":5,"./metamodel.js":8}],10:[function(require,module,exports){
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
 * @param {Object} parameters parameters
 */
function set(id, state, parameters) {
    store[id] = {
        "name": state,
        "parameters": {
            "data": parameters
        }
    };
    $db.store.MonocoState[id] = {
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
},{"./db.js":5}],11:[function(require,module,exports){
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
 * This module manages the workflow of monoco. It behaves like a workflow engine. <br>
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
 * @requires monoco-channel
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
var $channel = require('./channel.js');
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
 * @param {Object} component a monoco component
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
        i = 0,
        length = 0;

    if (!$metamodel.isProperty(state, component.constructor.name) && !$metamodel.isCollection(state, component.constructor.name)) {
        params = setDefaultValue(component.constructor.name, state, params);
    }

    try {
        if (action.useCoreAPI) {
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
            injectedParams.push($channel);

            if (isEvent) {
                setTimeout(action.action.bind.apply(action.action, [component].concat(injectedParams)), 0);
            } else {
                result = action.action.apply(component, injectedParams);
            }
        } else {
            if (isEvent) {
                setTimeout(action.action.bind.apply(action.action, [component].concat(params)), 0);
            } else {
                result = action.action.apply(component, params);
            }
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
    isCollection = $metamodel.isCollection(state, className);

    switch (true) {
        case isCollection:
            modelNumberParam = [3, 3];
            break;
        case isProperty:
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
        isCollection = false;

    if (component.constructor.name === 'Function') {
        componentClassName = component.name;
    } else {
        componentClassName = component.constructor.name;
    }

    isProperty = $metamodel.isProperty(methodName, componentClassName);
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
        isCollection = false,
        behaviors = [],
        behavior = null,
        component = null,
        actionFromMemory = null;

    behaviors = $db.MonocoBehavior.find({
        "_id": behaviorId
    });

    actionFromMemory = $behavior.get(behaviorId);

    if (behaviors.length === 1) {
        behavior = behaviors[0];

        component = $component.get(behavior.component);
        if (component) {
            isEvent = $metamodel.isEvent(behavior.state, component.constructor.name);
            isProperty = $metamodel.isProperty(behavior.state, component.constructor.name);
            isCollection = $metamodel.isCollection(behavior.state, component.constructor.name);

            if (isEvent || isProperty || isCollection) {
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
        isProperty = false,
        isCollection = false,
        isEvent = false;

    currentState = $state.get(params.component);

    if (currentState === 'destroy') {
        $log.invalidUseOfComponent(params.component);
    }

    component = $component.get(params.component);
    if (component) {
        isEvent = $metamodel.isEvent(params.state, component.constructor.name);
        isProperty = $metamodel.isProperty(params.state, component.constructor.name);
        isCollection = $metamodel.isCollection(params.state, component.constructor.name);
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
        if (component && (isEvent || isProperty || isCollection)) {
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
 * This module manages the workflow of monoco. It behaves like a workflow engine. <br>
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
 * @requires monoco-channel
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
},{"./behavior.js":2,"./channel.js":3,"./component.js":4,"./db.js":5,"./helper.js":6,"./log.js":7,"./metamodel.js":8,"./state.js":10}]},{},[9])(9)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zeXN0ZW0vc3lzdGVtLmpzIiwic3JjL2JlaGF2aW9yLmpzIiwic3JjL2NoYW5uZWwuanMiLCJzcmMvY29tcG9uZW50LmpzIiwic3JjL2RiLmpzIiwic3JjL2hlbHBlci5qcyIsInNyYy9sb2cuanMiLCJzcmMvbWV0YW1vZGVsLmpzIiwic3JjL21vbm9jby5qcyIsInNyYy9zdGF0ZS5qcyIsInNyYy93b3JrZmxvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2OUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbitCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3eUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3h2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3lzdGVtXG4gKiBAY2xhc3MgbW9ub2NvLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyogUHVibGljIHByb3BlcnRpZXMgKi9cblxuXG4vKlxuICogbW9ub2NvIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge01vbm9jb1N5c3RlbX0gc3lzdGVtXG4gKi9cbnZhciBzeXN0ZW0gPSB7XG4gICAgXCJuYW1lXCI6IFwibW9ub2NvXCIsXG4gICAgXCJ2ZXJzaW9uXCI6IFwiMC43LjBcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1wiLFxuICAgIFwiX2lkXCI6IFwiZTg5YzYxN2I2YjE1ZDI0XCIsXG4gICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgXCJNb25vY29TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJyZWFkeVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImZpbmRcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwibG9hZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwid2FybmluZ1wiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29cIjoge1xuICAgICAgICAgICAgXCJyZWFkeVwiOiB7fSxcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInZlcnNpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZpbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibG9hZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQmVoYXZpb3JcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29CZWhhdmlvclwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0JlaGF2aW9yXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29CZWhhdmlvclNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29CZWhhdmlvclNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0JlaGF2aW9yU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQmVoYXZpb3JTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImNvcmVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2hhbm5lbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DaGFubmVsXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29DaGFubmVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsaXN0ZW5cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNlbmRcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJib29sZWFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DaGFubmVsU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ2hhbm5lbFNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NoYW5uZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImxpc3RlblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJzZW5kXCI6IFwibWV0aG9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29DbGFzc0luZm9cIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0NsYXNzSW5mb1NjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWV0YW1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1vZGVsXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IHtcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcImFycmF5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb2xsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjogXCJhcnJheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ2xhc3NJbmZvU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFNjaGVtYVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJtb2RlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm1ldGhvZFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJtZXRob2RzXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnR5XCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvbnNcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiY29sbGVjdGlvblwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJtZXRob2RcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaGFuZGxlclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ1c2VDb3JlQVBJXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwib2ZmXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmVoYXZpb3JJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVxdWlyZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQE1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb25mXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImVycm9yUGFyYW1cIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9uXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNsYXNzSW5mb1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcIm9mZlwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImRlc3Ryb3lcIjogXCJtZXRob2RcIixcbiAgICAgICAgICAgIFwiaW5pdFwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcImV2ZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29EYXRhYmFzZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb0RhdGFiYXNlXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvRGF0YWJhc2VcIixcbiAgICAgICAgICAgIFwiX3NjaGVtYVwiOiBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBcInJlc3VsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhcmFtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwicmVzdWx0XCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImluc2VydFwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2xhc3NJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW3tcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wb25lbnRJZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYXR0cmlidXRlVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjbGFzc0lkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlU2NoZW1hXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvRGF0YWJhc2VTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29EYXRhYmFzZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfaW5oZXJpdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJNb25vY29Db21wb25lbnRTY2hlbWFcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic3lzdGVtXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJpbnNlcnRcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJyZW1vdmVcIjogXCJldmVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXNzYWdlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29NZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImZyb21cIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01lc3NhZ2VTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29NZXNzYWdlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvTWVzc2FnZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImZyb21cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwicHJvcGVydHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJfc2NoZW1hXCI6IFwiTW9ub2NvTWV0YW1vZGVsU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9pbmhlcml0XCI6IFtcbiAgICAgICAgICAgICAgICBcIk1vbm9jb0NvbXBvbmVudFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJfY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbe1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29NZXRhbW9kZWxTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIm1ldGhvZFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TdGF0ZVwiLFxuICAgICAgICAgICAgXCJfbmFtZVwiOiBcIk1vbm9jb1N0YXRlXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TdGF0ZVNjaGVtYVwiLFxuICAgICAgICAgICAgXCJfY2xhc3NcIjogZmFsc2UsXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29TdGF0ZVNjaGVtYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIk1vbm9jb1N0YXRlU2NoZW1hXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3RhdGVTY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2NvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcInBhcmFtZXRlcnNcIjogXCJwcm9wZXJ0eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiTW9ub2NvU3lzdGVtXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcIl9uYW1lXCI6IFwiTW9ub2NvU3lzdGVtXCIsXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibWFzdGVyXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWFkT25seVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN1YnN5c3RlbVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIjAuMC4xXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVhZHlcIjoge30sXG4gICAgICAgICAgICBcInN5bmNcIjoge30sXG4gICAgICAgICAgICBcIm1haW5cIjoge31cbiAgICAgICAgfSxcbiAgICAgICAgXCJNb25vY29TeXN0ZW1TY2hlbWFcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX25hbWVcIjogXCJNb25vY29TeXN0ZW1TY2hlbWFcIixcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjogW1xuICAgICAgICAgICAgICAgIFwiTW9ub2NvQ29tcG9uZW50U2NoZW1hXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIl9jb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJtYXN0ZXJcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzdWJzeXN0ZW1cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJzY2hlbWFzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwiYmVoYXZpb3JzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwidHlwZXNcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJzeW5jXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcIm1haW5cIjogXCJtZXRob2RcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcInR5cGVzXCI6IHtcbiAgICAgICAgXCJodG1sXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImh0bWxcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjc3NcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3NzXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29sbGVjdGlvblwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcnJvclBhcmFtXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImVycm9yUGFyYW1cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJzY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJldmVudFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImphdmFzY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiamF2YXNjcmlwdFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZyb21cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIm1ldGhvZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJyZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXJhbWV0ZXJcIjoge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwicGFyYW1ldGVyXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwic2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQHR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwicmVhZE9ubHlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJAdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiYmVoYXZpb3JzXCI6IHtcbiAgICAgICAgXCIxYWFlZTFlNjMxMWZmMzlcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWFlZTFlNjMxMWZmMzlcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibG9hZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBsb2FkKHVybCwgYXN5bmMpIHsgICAgdmFyIHhociA9IG51bGwsIGNhbGxiYWNrTG9hZCA9IG51bGw7ICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAgICBjYWxsYmFja0xvYWQgPSBmdW5jdGlvbiBjYWxsYmFja0xvYWQoc3lzdGVtKSB7ICAgICAgICB2YXIgc3lzSWQgPSAkZGIuc3lzdGVtKHN5c3RlbSk7ICAgICAgICB2YXIgc3lzID0gJGNvbXBvbmVudC5nZXQoc3lzSWQpOyAgICAgICAgdmFyIHN5c3RlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zeXN0ZW1dJyk7ICAgICAgICBpZiAoc3lzKSB7ICAgICAgICAgICAgc3lzLm1haW4oKTsgICAgICAgIH0gICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCArIDEgPT09ICRkYi5Nb25vY29TeXN0ZW0uY291bnQoKSApIHsgICAgICAgICAgICAkY29tcG9uZW50LmdldCgnbW9ub2NvJykucmVhZHkoKTsgICAgICAgICAgICB9ICAgIH07ICAgIGlmIChhc3luYykgeyAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7ICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgeyAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7ICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0xvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTsgICAgICAgICAgICAgICAgfSAgICAgICAgICAgIH0gICAgICAgIH07ICAgICAgICB4aHIuc2VuZChudWxsKTsgICAgfSBlbHNlIHsgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTsgICAgICAgIHhoci5zZW5kKG51bGwpOyAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkgeyAgICAgICAgICAgIGNhbGxiYWNrTG9hZChKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpOyAgICAgICAgfSAgICB9fVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFmNjAwMTc3M2ExODc5MVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFmNjAwMTc3M2ExODc5MVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJlODljNjE3YjZiMTVkMjRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtYWluXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1haW4oKSB7ICAgIHZhciBzeXN0ZW1zID0gW10sICAgICAgICBzeXN0ZW0gPSBudWxsLCAgICAgICAgaSA9IDAsICAgICAgICBsZW5ndGggPSAwOyAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgeyAgICAgICAgc3lzdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPXN5c3RlbV0nKTsgICAgICAgIGxlbmd0aCA9IHN5c3RlbXMubGVuZ3RoOyAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgc3lzdGVtID0gc3lzdGVtc1tpXTsgICAgICAgICAgICBpZiAoc3lzdGVtLmdldEF0dHJpYnV0ZSgnYXN5bmMnKSA9PT0gJ3RydWUnKSB7ICAgICAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbW9ub2NvJykubG9hZChzeXN0ZW0uaHJlZiwgdHJ1ZSk7ICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgdGhpcy5yZXF1aXJlKCdtb25vY28nKS5sb2FkKHN5c3RlbS5ocmVmLCBmYWxzZSk7ICAgICAgICAgICAgfSAgICAgICAgfSAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkgeyAgICAgICAgICAgIHRoaXMucmVxdWlyZSgnbW9ub2NvJykucmVhZHkoKTsgICAgICAgIH0gICAgfX1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTcxNzAxMzRmNTEyMzc2XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTcxNzAxMzRmNTEyMzc2XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImVycm9yXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGVycm9yKGRhdGEpIHsgY29uc29sZS5lcnJvcignbW9ub2NvOiAnICsgZGF0YS5tZXNzYWdlLCBkYXRhLmVycm9yKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxMzg3YTE0NjFkMWFiYmNcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxMzg3YTE0NjFkMWFiYmNcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZmluZFwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBmaW5kKENsYXNzLCBxdWVyeSkgeyByZXR1cm4gJGNvbXBvbmVudC5maW5kKENsYXNzLCBxdWVyeSk7fVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE0OWM4MTljYWExOTZmY1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE0OWM4MTljYWExOTZmY1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc3lzdGVtKG5hbWUpIHsgdmFyIFN5c3RlbSA9IG51bGwsIHN5c3RlbSA9IHt9LCByZXN1bHQgPSBbXSwgY29uZiA9IHt9OyBpZiAobmFtZSkgeyBjb25mLm1hc3RlciA9IHRydWU7IGNvbmYubmFtZSA9IG5hbWU7IFN5c3RlbSA9IHRoaXMucmVxdWlyZSgnTW9ub2NvU3lzdGVtJyk7IHN5c3RlbSA9IG5ldyBTeXN0ZW0oY29uZik7IH0gZWxzZSB7IHJlc3VsdCA9IHRoaXMuZmluZCgnTW9ub2NvU3lzdGVtJywgeydtYXN0ZXInOiB0cnVlfSk7IGlmIChyZXN1bHQubGVuZ3RoKSB7IHN5c3RlbSA9IHJlc3VsdFswXTsgfSB9IHJldHVybiBzeXN0ZW07IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTQ1MmExMDUwMzFjZTZjXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTQ1MmExMDUwMzFjZTZjXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7IGNvbnNvbGUud2FybignbW9ub2NvOiAnICsgbWVzc2FnZSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTJjNTExN2IzZjEzODNhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTJjNTExN2IzZjEzODNhXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJsaXN0ZW5cIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBhY3Rpb24pIHsgJGNoYW5uZWwubGlzdGVuKGV2ZW50LCBhY3Rpb24pOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTg2NTcxMTdhNDE5Njk5XCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTg2NTcxMTdhNDE5Njk5XCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NoYW5uZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzZW5kXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHNlbmQobWVzc2FnZSkgeyByZXR1cm4gJGNoYW5uZWwuc2VuZChtZXNzYWdlKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE4NTkwMWI1OGQxMGFhYVwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE4NTkwMWI1OGQxMGFhYVwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJjb2xsZWN0aW9uXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb24obmFtZSkgeyB2YXIgcmVzdWx0ID0ge307IGlmICh0aGlzLm1ldGFtb2RlbCgpW25hbWVdID09PSAnY29sbGVjdGlvbicpIHsgcmVzdWx0ID0gdGhpcy5tb2RlbCgpW25hbWVdOyB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTYzMDkxMDg2MjE3NmJmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTYzMDkxMDg2MjE3NmJmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImNvbGxlY3Rpb25zXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNvbGxlY3Rpb25zKCkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YW1vZGVsKCkpLCBpdGVtID0gJycsIHJlc3VsdCA9IFtdLCBpID0gMCwgbGVuZ3RoID0gMDsgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBpdGVtID0ga2V5c1tpXTsgaWYgKHRoaXMubWV0YW1vZGVsKClbaXRlbV0gPT09ICdjb2xsZWN0aW9uJykgeyByZXN1bHQucHVzaChpdGVtKTsgfSB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMWY5YjUxZjFiMDFhOTRmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMWY5YjUxZjFiMDFhOTRmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcImV2ZW50XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50KG5hbWUpIHsgdmFyIHJlc3VsdCA9IHt9OyBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ2V2ZW50JykgeyByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNTM1MjE3ZjQ3MTAyMjJcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNTM1MjE3ZjQ3MTAyMjJcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZXZlbnRzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGV2ZW50cygpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFtb2RlbCgpKSwgaXRlbSA9ICcnLCByZXN1bHQgPSBbXSwgaSA9IDAsIGxlbmd0aCA9IDA7IGxlbmd0aCA9IGtleXMubGVuZ3RoOyBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgaXRlbSA9IGtleXNbaV07IGlmICh0aGlzLm1ldGFtb2RlbCgpW2l0ZW1dID09PSAnZXZlbnQnKSB7IHJlc3VsdC5wdXNoKGl0ZW0pOyB9IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNjA1ZjFkZDk3MWYyMTVcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNjA1ZjFkZDk3MWYyMTVcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ2xhc3NJbmZvXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwibWV0aG9kXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZChuYW1lKSB7IHZhciByZXN1bHQgPSB7fTsgaWYgKHRoaXMubWV0YW1vZGVsKClbbmFtZV0gPT09ICdtZXRob2QnKSB7IHJlc3VsdCA9IHRoaXMubW9kZWwoKVtuYW1lXTsgfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjFjYWJkMTgwMWMxODcyM1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjFjYWJkMTgwMWMxODcyM1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJtZXRob2RzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIG1ldGhvZHMoKSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksIGl0ZW0gPSAnJywgcmVzdWx0ID0gW10sIGkgPSAwLCBsZW5ndGggPSAwOyBsZW5ndGggPSBrZXlzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGl0ZW0gPSBrZXlzW2ldOyBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ21ldGhvZCcpIHsgcmVzdWx0LnB1c2goaXRlbSk7IH0gfSByZXR1cm4gcmVzdWx0OyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwY2ZiMWFkYzkxOWJjN1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwY2ZiMWFkYzkxOWJjN1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29DbGFzc0luZm9cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwcm9wZXJ0aWVzXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnRpZXMoKSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhbW9kZWwoKSksIGl0ZW0gPSAnJywgcmVzdWx0ID0gW10sIGkgPSAwLCBsZW5ndGggPSAwOyBsZW5ndGggPSBrZXlzLmxlbmd0aDsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IGl0ZW0gPSBrZXlzW2ldOyBpZiAodGhpcy5tZXRhbW9kZWwoKVtpdGVtXSA9PT0gJ3Byb3BlcnR5JykgeyByZXN1bHQucHVzaChpdGVtKTsgfSB9IHJldHVybiByZXN1bHQ7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTY3ZGIxNDI2YTFhZDFmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTY3ZGIxNDI2YTFhZDFmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NsYXNzSW5mb1wiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInByb3BlcnR5XCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHByb3BlcnR5KG5hbWUpIHsgdmFyIHJlc3VsdCA9IHt9OyBpZiAodGhpcy5tZXRhbW9kZWwoKVtuYW1lXSA9PT0gJ3Byb3BlcnR5JykgeyByZXN1bHQgPSB0aGlzLm1vZGVsKClbbmFtZV07IH0gcmV0dXJuIHJlc3VsdDsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxNDQ0MzFhMmE4MTRjYjBcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxNDQ0MzFhMmE4MTRjYjBcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBkZXN0cm95KCkgeyAkY29tcG9uZW50LmRlc3Ryb3kodGhpcy5pZCgpKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjEwYzBhMTZiMmMxZDMwN1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjEwYzBhMTZiMmMxZDMwN1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29Db21wb25lbnRcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJvZmZcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gb2ZmKHN0YXRlLCBiZWhhdmlvcklkKSB7IHZhciBhcmdzID0gW10sIGkgPSAwLCBsZW5ndGggPSAwOyBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoIC0gNzsgaSsrKSB7IGFyZ3MucHVzaChhcmd1bWVudHNbaV0pOyB9IGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xcXCJjb21wb25lbnRcXFwiOiB0aGlzLCBcXFwibWV0aG9kTmFtZVxcXCI6IFxcXCJvZmZcXFwiLCBcXFwiYXJnc1xcXCI6IGFyZ3N9KSkgeyBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIHRoaXMuY29uc3RydWN0b3IubmFtZSkpIHskYmVoYXZpb3IucmVtb3ZlKHtcXFwiYmVoYXZpb3JJZFxcXCI6IGJlaGF2aW9ySWQsIFxcXCJjb21wb25lbnRJZFxcXCI6IHRoaXMuaWQoKSwgXFxcInN0YXRlXFxcIjogc3RhdGV9KTsgfSBlbHNlIHsgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKHsgXFxcIm1lc3NhZ2VcXFwiOlxcXCJpbnZva2UgJ29mZicgbWV0aG9kIG9mIGNvbXBvbmVudCAnXFxcIiArIHRoaXMuaWQoKSArIFxcXCInIHdpdGggYW4gaW52YWxpZCBzdGF0ZSAnXFxcIiArIHN0YXRlICsgXFxcIidcXFwifSk7IH0gfSB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTA0ODgxYWE1ZjFlODQyXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTA0ODgxYWE1ZjFlODQyXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInJlcXVpcmVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gcmVxdWlyZShpZCkgeyByZXR1cm4gJGNvbXBvbmVudC5nZXQoaWQpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTdlODIxM2UwNDFiZWNhXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTdlODIxM2UwNDFiZWNhXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb0RhdGFiYXNlXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwic3Vic3lzdGVtXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHsgcmV0dXJuICRkYi5zdWJzeXN0ZW0ocGFyYW1zKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE2MWQ0MTEyODYxNGEwZFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE2MWQ0MTEyODYxNGEwZFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29EYXRhYmFzZVwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInN5c3RlbVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJmdW5jdGlvbiBzeXN0ZW0oc3lzdGVtKSB7IHJldHVybiAkZGIuc3lzdGVtKHN5c3RlbSk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCIxYWYxNzFjZDVjMTg0YWRcIjoge1xuICAgICAgICAgICAgXCJfaWRcIjogXCIxYWYxNzFjZDVjMTg0YWRcIixcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFwiTW9ub2NvTWV0YW1vZGVsXCIsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiY3JlYXRlXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIGNyZWF0ZSgpIHsgJG1ldGFtb2RlbC5jcmVhdGUoKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjE3OWNmMWI1NmQxMWI0M1wiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjE3OWNmMWI1NmQxMWI0M1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29NZXRhbW9kZWxcIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzY2hlbWFcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gc2NoZW1hKHNjaGVtYSkgeyAkbWV0YW1vZGVsLnNjaGVtYShzY2hlbWEpOyB9XCIsXG4gICAgICAgICAgICBcImNvcmVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidXNlQ29yZUFQSVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiMTFiZjkxYWZmMzExN2RmXCI6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IFwiMTFiZjkxYWZmMzExN2RmXCIsXG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBcIk1vbm9jb01ldGFtb2RlbFwiLFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiBcInR5cGVcIixcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwiZnVuY3Rpb24gdHlwZSh0eXBlKSB7ICRtZXRhbW9kZWwudHlwZSh0eXBlKTsgfVwiLFxuICAgICAgICAgICAgXCJjb3JlXCI6IHRydWUsXG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIjExNThlMTkzNzYxOWZiOFwiOiB7XG4gICAgICAgICAgICBcIl9pZFwiOiBcIjExNThlMTkzNzYxOWZiOFwiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogXCJNb25vY29TeXN0ZW1cIixcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJzeW5jXCIsXG4gICAgICAgICAgICBcImFjdGlvblwiOiBcImZ1bmN0aW9uIHN5bmMoKSB7IHZhciBkdW1wID0gJGRiLmR1bXAoKTsgdGhpcy5zY2hlbWFzKGR1bXAuc2NoZW1hcyk7IHRoaXMudHlwZXMoZHVtcC50eXBlcyk7IHRoaXMuYmVoYXZpb3JzKGR1bXAuYmVoYXZpb3JzKTsgdGhpcy5jb21wb25lbnRzKGR1bXAuY29tcG9uZW50cyk7IH1cIixcbiAgICAgICAgICAgIFwiY29yZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJjb21wb25lbnRzXCI6IHtcbiAgICAgICAgXCJNb25vY29cIjoge1xuICAgICAgICAgICAgXCJtb25vY29cIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwibW9ub2NvXCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC43LjBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0NoYW5uZWxcIjoge1xuICAgICAgICAgICAgXCJjaGFubmVsXCI6IHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBcImNoYW5uZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb0RhdGFiYXNlXCI6IHtcbiAgICAgICAgICAgIFwiZGJcIjoge1xuICAgICAgICAgICAgICAgIFwiX2lkXCI6IFwiZGJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbm9jb01ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogXCJtZXRhbW9kZWxcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyogZXhwb3J0cyAgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3lzdGVtXG4gKiBAY2xhc3MgbW9ub2NvLXN5c3RlbVxuICogQHN0YXRpYyBcbiAqL1xuXG5cbi8qKlxuICogbW9ub2NvIGNvcmUgc3lzdGVtXG4gKiBAcHJvcGVydHkge01vbm9jb1N5c3RlbX0gc3lzdGVtXG4gKi9cbmV4cG9ydHMuc3lzdGVtID0gc3lzdGVtO1xuIiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGJlaGF2aW9ycyBvZiBhbGwgY29tcG9uZW50cy4gXG4gKiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9ucyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgXG4gKiB3aGVuIGEgc3BlY2lmaWMgc3RhdGUgb2YgYSBjb21wb25lbnQgd2lsbCBjaGFuZ2UuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1iZWhhdmlvclxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tY2hhbm5lbFxuICogQGNsYXNzIG1vbm9jby1iZWhhdmlvclxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcbnZhciAkY2hhbm5lbCA9IHJlcXVpcmUoJy4vY2hhbm5lbC5qcycpO1xuXG5cbi8qIFByaXZhdGUgcHJvcGVydGllcyAqL1xuXG5cbnZhciBzdG9yZSA9IHt9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiBmcm9tIGEgc3RyaW5nLlxuICogVGhlIGNyZWF0ZWQgZnVuY3Rpb246XG4gKiAtIHdpbGwgYmUgYSBuYW1lZCBmdW5jdGlvbixcbiAqIC0gaGFzIHRoZSBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgYW5kXG4gKiAtIGNhbiBoYXZlIHNvbWUgY29yZSBtb2R1bGVzIGluamVjdGVkIGFzIHBhcmFtZXRlcnMuXG4gKiBAbWV0aG9kIGNyZWF0ZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBkZWZhdWx0IG5hbWUgb2YgdGhlIGZ1bmN0aW9uIFxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmMgYSBzdHJpbmdpZmllZCBmdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIHRoZSBiZWhhdmlvciB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBtb25vY28gY29yZSBiZWhhdmlvci5cbiAqIEluIHRoYXQgY2FzZSwgdGhlIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWQgaW4gYSBzeXN0ZW0gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNvcmVBUEkgaWYgdHJ1ZSwgbW9ub2NvIGNvcmUgbW9kdWxlcyB3aWxsIGJlIGluamVjdGVkIGFzIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bmN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBjcmVhdGVkIGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbihuYW1lLCBmdW5jLCBjb3JlLCB1c2VDb3JlQVBJKSB7XG4gICAgdmFyIGZ1bmNOYW1lID0gJycsXG4gICAgICAgIGJlZ2luQm9keSA9IC0xLFxuICAgICAgICBmdW5jUGFyYW1zID0gJycsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbXNDbGVhbiA9IFtdLFxuICAgICAgICBmdW5jQm9keSA9ICcnLFxuICAgICAgICBoZWFkZXIgPSAnJyxcbiAgICAgICAgYWN0aW9uID0gbnVsbDtcblxuICAgIGJlZ2luQm9keSA9IGZ1bmMuaW5kZXhPZigneycpO1xuICAgIGhlYWRlciA9IGZ1bmMuc3Vic3RyaW5nKDAsIGJlZ2luQm9keSk7XG5cbiAgICBmdW5jTmFtZSA9IGhlYWRlci5zcGxpdCgnKCcpWzBdLnJlcGxhY2UoJ2Z1bmN0aW9uJywgJycpLnRyaW0oKTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG5cbiAgICBwYXJhbXMgPSBmdW5jUGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHBhcmFtc0NsZWFuLnB1c2gocGFyYW0udHJpbSgpKTtcbiAgICB9KTtcblxuICAgIGZ1bmNCb2R5ID0gZnVuYy5zdWJzdHJpbmcoYmVnaW5Cb2R5ICsgMSk7XG4gICAgZnVuY0JvZHkgPSBmdW5jQm9keS5zdWJzdHJpbmcoMCwgZnVuY0JvZHkubGFzdEluZGV4T2YoJ30nKSkudHJpbSgpO1xuXG4gICAgZnVuY05hbWUgPSBmdW5jTmFtZSB8fCBuYW1lO1xuXG4gICAgLy8gZm9yIGFjY2Vzc2luZyBtb25vY28gY29yZSBBUElzXG4gICAgaWYgKHVzZUNvcmVBUEkpIHtcbiAgICAgICAgaWYgKHBhcmFtc1swXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5wdXNoKCckY29tcG9uZW50Jyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckZGInKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyRtZXRhbW9kZWwnKTtcbiAgICAgICAgcGFyYW1zLnB1c2goJyR3b3JrZmxvdycpO1xuICAgICAgICBwYXJhbXMucHVzaCgnJGJlaGF2aW9yJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckbG9nJyk7XG4gICAgICAgIHBhcmFtcy5wdXNoKCckY2hhbm5lbCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNbMF0gIT09ICcnKSB7XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgZnVuY05hbWUgKyBcIiAoXCIgKyBwYXJhbXMuam9pbignLCcpICsgXCIpIHsgcmV0dXJuIG5ldyBGdW5jdGlvbignXCIgKyBwYXJhbXMuam9pbihcIicsJ1wiKSArIFwiJywgYm9keSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9O1wiKShmdW5jQm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgICAgICBhY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgZnVuY05hbWUgKyBcIiAoKSB7IHJldHVybiBuZXcgRnVuY3Rpb24oYm9keSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSB9O1wiKShmdW5jQm9keSk7XG4gICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG59XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQWRkIGEgYmVoYXZpb3IgdGhhdCB3aWxsIGJlIHN0b3JlZCBpbiBtb25vY28gZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSB0aGUgc3RhdGUgb24gd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiB0aGUgYWN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29tcG9uZW50IHdpbGwgaGF2ZSBhIHNwZWNpZmljIHN0YXRlIFxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDb3JlQVBJIGlmIHRydWUsIG1vbm9jbyBjb3JlIG1vZHVsZXMgd2lsbCBiZSBpbmplY3RlZCBhcyBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb24gKGRlZmF1bHQgZmFsc2UpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvcmUgaWYgdHJ1ZSwgYmVoYXZpb3IgY2FuIG5vdCBiZSBleHBvcnRlZFxuICogQHJldHVybiB7U3RyaW5nfSBpZCBvZiB0aGUgYmVoYXZpb3IgY3JlYXRlZCBpbiBtb25vY28gZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gYWRkKGlkLCBzdGF0ZSwgYWN0aW9uLCB1c2VDb3JlQVBJLCBjb3JlKSB7XG4gICAgdmFyIGJlaGF2aW9ySWQgPSAkaGVscGVyLmdlbmVyYXRlSWQoKSxcbiAgICBzdHJBY3Rpb24gPSBhY3Rpb24udG9TdHJpbmcoKTtcblxuICAgIGlmICh0eXBlb2YgY29yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29yZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHVzZUNvcmVBUEkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVzZUNvcmVBUEkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodXNlQ29yZUFQSSkge1xuICAgICAgICBhY3Rpb24gPSBjcmVhdGVGdW5jdGlvbihzdGF0ZSwgc3RyQWN0aW9uLCBjb3JlLCB1c2VDb3JlQVBJKTtcbiAgICB9XG4gICAgXG4gICAgc3RvcmVbYmVoYXZpb3JJZF0gPSBhY3Rpb247XG5cbiAgICAkZGIuTW9ub2NvQmVoYXZpb3IuaW5zZXJ0KHtcbiAgICAgICAgXCJfaWRcIjogYmVoYXZpb3JJZCxcbiAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgIFwic3RhdGVcIjogc3RhdGUsXG4gICAgICAgIFwiYWN0aW9uXCI6IHN0ckFjdGlvbixcbiAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IHVzZUNvcmVBUEksXG4gICAgICAgIFwiY29yZVwiOiBjb3JlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYmVoYXZpb3JJZDtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGEgYmVoYXZpb3Igd2l0aCBpdHMgaWQgb3IgcmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIGZvciBhIHNwZWNpZmljIHN0YXRlXG4gKiBvZiB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yIChvcHRpb25hbCkpIDxicj5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKHBhcmFtcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBwYXJhbXMuYmVoYXZpb3JJZCA9IHBhcmFtcy5iZWhhdmlvcklkIHx8ICcnO1xuICAgIHBhcmFtcy5jb21wb25lbnRJZCA9IHBhcmFtcy5jb21wb25lbnRJZCB8fCAnJztcbiAgICBwYXJhbXMuc3RhdGUgPSBwYXJhbXMuc3RhdGUgfHwgJyc7XG5cbiAgICBpZiAocGFyYW1zLmNvbXBvbmVudElkKSB7XG4gICAgICAgIGlmIChwYXJhbXMuYmVoYXZpb3JJZCkge1xuICAgICAgICAgICAgJGRiLk1vbm9jb0JlaGF2aW9yLnJlbW92ZSh7XG4gICAgICAgICAgICAgICAgXCJfaWRcIjogcGFyYW1zLmJlaGF2aW9ySWQsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogcGFyYW1zLmNvbXBvbmVudElkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcGFyYW1zLnN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVtwYXJhbXMuYmVoYXZpb3JJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAkZGIuTW9ub2NvQmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBwYXJhbXMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwYXJhbXMuc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgYSBiZWhhdmlvciB3aXRoIGl0cyBpZCBmcm9tIHRoZSBtZW1vcnkuXG4gKiBAbWV0aG9kIHJlbW92ZUZyb21NZW1vcnlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUZyb21NZW1vcnkoaWQpIHtcbiAgICBkZWxldGUgc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBhY3Rpb25zIG9mIGEgYmVoYXZpb3IgZm9yIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXRBY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBhY3Rpb25zIHRoYXQgaGF2ZSB0byBiZSBleGVjdXRlZCBmb3IgYSBzcGVjaWZpYyBjb21wb25lbnQgYW5kIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGlvbnMoaWQsIHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBkYlJlc3VsdCA9IFtdLFxuICAgICAgICBhY3Rpb24gPSBudWxsO1xuXG4gICAgZGJSZXN1bHQgPSAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICBcInN0YXRlXCI6IHN0YXRlXG4gICAgfSk7XG5cbiAgICBkYlJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChiZWhhdmlvcikge1xuICAgICAgICBhY3Rpb24gPSBzdG9yZVtiZWhhdmlvci5faWRdO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGNyZWF0ZUZ1bmN0aW9uKGJlaGF2aW9yLnN0YXRlLCBiZWhhdmlvci5hY3Rpb24sIGJlaGF2aW9yLmNvcmUsIGJlaGF2aW9yLnVzZUNvcmVBUEkpO1xuICAgICAgICAgICAgc3RvcmVbYmVoYXZpb3IuX2lkXSA9IGFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBcInVzZUNvcmVBUElcIjogYmVoYXZpb3IudXNlQ29yZUFQSSxcbiAgICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvblxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBzdG9yZWQgaW4gbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHt9O1xufVxuXG5cbi8qXG4gKiBHZXQgYSBiZWhhdmlvciBieSBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtCZWhhdmlvcn0gdGhlIGJlaGF2aW9yXG4gKi9cbmZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiBzdG9yZVtpZF07XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgYmVoYXZpb3JzIG9mIGFsbCBjb21wb25lbnRzLiBBIGJlaGF2aW9yIGlzIGEgbWVjYW5pc20gdGhhdCBhbGxvdyB1c2VycyB0byBhZGQgYWN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBcbiAqIHdoZW4gYSBzcGVjaWZpYyBzdGF0ZSBvZiBhIGNvbXBvbmVudCB3aWxsIGNoYW5nZS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1jaGFubmVsXG4gKiBAY2xhc3MgbW9ub2NvLWJlaGF2aW9yXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEFkZCBhIGJlaGF2aW9yIHRoYXQgd2lsbCBiZSBzdG9yZWQgaW4gbW9ub2NvIGRhdGFiYXNlLlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdGhlIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIGhhdmUgYSBzcGVjaWZpYyBzdGF0ZSBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ29yZUFQSSBpZiB0cnVlLCBtb25vY28gY29yZSBtb2R1bGVzIHdpbGwgYmUgaW5qZWN0ZWQgYXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uIChkZWZhdWx0IGZhbHNlKVxuICogQHBhcmFtIHtCb29sZWFufSBjb3JlIGlmIHRydWUsIGJlaGF2aW9yIGNhbiBub3QgYmUgZXhwb3J0ZWRcbiAqIEByZXR1cm4ge1N0cmluZ30gaWQgb2YgdGhlIGJlaGF2aW9yIGNyZWF0ZWQgaW4gbW9ub2NvIGRhdGFiYXNlXG4gKi9cbmV4cG9ydHMuYWRkID0gYWRkO1xuXG5cbi8qKlxuICogR2V0IGEgYmVoYXZpb3IgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7QmVoYXZpb3J9IHRoZSBiZWhhdmlvclxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIG9yIHJlbW92ZSBhbGwgdGhlIGJlaGF2aW9ycyBmb3IgYSBzcGVjaWZpYyBzdGF0ZVxuICogb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIDxicj5cbiAqIHtTdHJpbmd9IGNvbXBvbmVudElkIGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBiZWhhdmlvcklkIGlkIG9mIHRoZSBiZWhhdmlvciAob3B0aW9uYWwpKSA8YnI+XG4gKi9cbmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xuXG5cbi8qKlxuICogR2V0IGFsbCB0aGUgYWN0aW9ucyBvZiBhIGJlaGF2aW9yIGZvciBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICogQHJldHVybiB7QXJyYXl9IGFsbCB0aGUgYWN0aW9ucyB0aGF0IGhhdmUgdG8gYmUgZXhlY3V0ZWQgZm9yIGEgc3BlY2lmaWMgY29tcG9uZW50IGFuZCBzdGF0ZVxuICovXG5leHBvcnRzLmdldEFjdGlvbnMgPSBnZXRBY3Rpb25zO1xuXG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgYmVoYXZpb3JzIHN0b3JlZCBpbiBtZW1vcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcblxuXG4vKipcbiAqIFJlbW92ZSBhIGJlaGF2aW9yIHdpdGggaXRzIGlkIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgcmVtb3ZlRnJvbU1lbW9yeVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5yZW1vdmVGcm9tTWVtb3J5ID0gcmVtb3ZlRnJvbU1lbW9yeTsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjaGFubmVsLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tY2hhbm5lbFxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28tbG9nXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQGNsYXNzIG1vbm9jby1jaGFubmVsXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJGRiID0gcmVxdWlyZSgnLi9kYi5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG4vKlxuICogTGlzdGVuIHRvIGFuIGV2ZW50LlxuICogQG1ldGhvZCBsaXN0ZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGNvZGUgdG8gZXhlY3V0ZVxuICovXG5mdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGFjdGlvbikge1xuICAgICRiZWhhdmlvci5hZGQoJ2NoYW5uZWwnLCBldmVudCwgYWN0aW9uLCB0cnVlKTtcbn1cblxuXG4vKlxuICogU2VuZCBhIG1lc3NhZ2UgaW50byB0aGUgY2hhbm5lbC5cbiAqIEBtZXRob2Qgc2VuZFxuICogQHBhcmFtIHt0eXBlfSBtZXNzYWdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSB3YXMgc2VudFxuICovXG5mdW5jdGlvbiBzZW5kKG1lc3NhZ2UpIHtcbiAgICB2YXIgbWVzc2FnZXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgc3lzdGVtSWQgPSAnJyxcbiAgICAgICAgc3lzdGVtcyA9IFtdO1xuXG4gICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSkge1xuICAgICAgICBzeXN0ZW1zID0gJGhlbHBlci5nZXRNb25vY28oKS5maW5kKCdNb25vY29TeXN0ZW0nLCB7ICdtYXN0ZXInOiB0cnVlIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN5c3RlbUlkID0gc3lzdGVtc1swXS5pZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVzc2FnZS5mcm9tID0gc3lzdGVtSWQ7XG5cbiAgICBtZXNzYWdlcyA9ICRkYi5Nb25vY29NZXNzYWdlLmluc2VydChtZXNzYWdlKTtcblxuICAgIGlmICghbWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIGNoYW5uZWwuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1jaGFubmVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1iZWhhdmlvclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWNoYW5uZWxcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogTGlzdGVuIHRvIGFuIGV2ZW50LlxuICogQG1ldGhvZCBsaXN0ZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGNvZGUgdG8gZXhlY3V0ZVxuICovXG5leHBvcnRzLmxpc3RlbiA9IGxpc3RlbjtcblxuXG4vKipcbiAqIFNlbmQgYSBtZXNzYWdlIGludG8gdGhlIGNoYW5uZWwuXG4gKiBAbWV0aG9kIHNlbmRcbiAqIEBwYXJhbSB7dHlwZX0gbWVzc2FnZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbWVzc2FnZSB3YXMgc2VudFxuICovXG5leHBvcnRzLnNlbmQgPSBzZW5kOyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBodHRwOi8vbW9ub2NvLmlvL1xuICogQGVjYXJyaW91XG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IC0gRXJ3YW4gQ2FycmlvdVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IG1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJHdvcmtmbG93ID0gcmVxdWlyZSgnLi93b3JrZmxvdy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkYmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9yLmpzJyk7XG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG52YXIgJGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJyk7XG52YXIgJHdvcmtsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xuXG4vKiBQcml2YXRlIHByb3BlcnRpZXMgKi9cblxuXG52YXIgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eScsXG4gICAgQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuICAgIE1FVEhPRF9UWVBFID0gJ21ldGhvZCcsXG4gICAgRVZFTlRfVFlQRSA9ICdldmVudCcsXG4gICAgc3RvcmUgPSB7fTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU3ViIGNsYXNzIHRvIG92ZXJyaWRlIHB1c2ggYW5kIHBvcCBtZXRob2Qgb2YgQXJyYXkgQ2xhc3MuXG4gKiBAY2xhc3MgbW9ub2NvQXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25mXG4gKiB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiB7U3RyaW5nfSB0eXBlIHR5cGUgb2YgdGhlIGFycmF5XG4gKiB7QXJyYXl9IGFyciBhcnJheVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbW9ub2NvQXJyYXkoY29uZikge1xuICAgIHZhciBhcnIgPSBbXSxcbiAgICAgICAgYXJyRGIgPSBbXSxcbiAgICAgICAgdHlwZSA9ICcnLFxuICAgICAgICBpZCA9ICcnLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJztcblxuICAgIGNvbmYgPSBjb25mIHx8IHt9O1xuICAgIHR5cGUgPSBjb25mLnR5cGUgfHwgJyc7XG4gICAgaWQgPSBjb25mLmlkIHx8ICcnO1xuICAgIHByb3BlcnR5TmFtZSA9IGNvbmYucHJvcGVydHlOYW1lIHx8ICcnO1xuICAgIGFyckRiID0gY29uZi5hcnIgfHwgW107XG5cbiAgICBhcnJEYi5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKHR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgYXJyLnB1c2gobW9ub2NvLnJlcXVpcmUodmFsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnIucHVzaCh2YWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhcnIucHVzaCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGlzQ2xhc3MgPSBmYWxzZTtcblxuICAgICAgICBpc0NsYXNzID0gdHlwZS5pbmRleE9mKCdAJykgIT09IC0xO1xuXG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAodmFsICYmICh2YWwuY29uc3RydWN0b3IubmFtZSA9PT0gdHlwZS5yZXBsYWNlKCdAJywgJycpKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy5sZW5ndGhdID0gdmFsO1xuICAgICAgICAgICAgICAgIGFyckRiLnB1c2godmFsLmlkKCkpO1xuXG4gICAgICAgICAgICAgICAgJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW2FyckRiLmxlbmd0aCwgdmFsLmlkKCksICdhZGQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBUT0RPIGNvbGxlY3Rpb24gb2Ygb2JqZWN0IHVzZWZ1bGwgP1xuICAgICAgICAgICAgaWYgKHZhbCAmJiAkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbCwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW3RoaXMubGVuZ3RoXSA9IHZhbDtcbiAgICAgICAgICAgICAgICBhcnJEYi5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbYXJyRGIubGVuZ3RoLCB2YWwsICdhZGQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFyci5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICBhcnJEYi5wb3AoKTtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IGlkLFxuICAgICAgICAgICAgICAgIFwic3RhdGVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBbYXJyRGIubGVuZ3RoIC0gMSwgZGF0YSwgJ3JlbW92ZSddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoganNoaW50IC1XMTAzICovXG4gICAgYXJyLl9fcHJvdG9fXyA9IG1vbm9jb0FycmF5LnByb3RvdHlwZTtcbiAgICAvKiBqc2hpbnQgK1cxMDMgKi9cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKiBqc2hpbnQgLVcwNTggKi9cbm1vbm9jb0FycmF5LnByb3RvdHlwZSA9IG5ldyBBcnJheTtcbi8qIGpzaGludCArVzA1OCAqL1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycy5cbiAqIEBtZXRob2QgZ2V0UGFyYW1OYW1lc1xuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBuYW1lcyBvZiBtZXRob2QgcGFyYW1ldGVycyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIHBhcmFtcyA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXS5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBwcm9wZXJ0eSBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRQcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtBcnJheX0gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHByb3BOYW1lcyA9ICcnLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0KGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldChtb2RlbC5fc2NoZW1hKTtcblxuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IFBST1BFUlRZX1RZUEUgfHwgc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IENPTExFQ1RJT05fVFlQRSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBwcm9wTmFtZXNbaV0sXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0udHlwZSxcbiAgICAgICAgICAgICAgICBcInJlYWRPbmx5XCI6IG1vZGVsW3Byb3BOYW1lc1tpXV0ucmVhZE9ubHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IGFsbCB0aGUgbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIGdldE1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIG1ldGhvZHMgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRNZXRob2RzKGlkKSB7XG4gICAgdmFyIG1vZGVsID0gbnVsbCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgcHJvcE5hbWVzID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIG1vZGVsID0gJG1ldGFtb2RlbC5nZXQoaWQpO1xuICAgIHNjaGVtYSA9ICRtZXRhbW9kZWwuZ2V0KG1vZGVsLl9zY2hlbWEpO1xuXG4gICAgcHJvcE5hbWVzID0gT2JqZWN0LmtleXMoc2NoZW1hKTtcblxuICAgIGxlbmd0aCA9IHByb3BOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY2hlbWFbcHJvcE5hbWVzW2ldXSA9PT0gTUVUSE9EX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBldmVudCBvZiBhIGNsYXNzLlxuICogQG1ldGhvZCBnZXRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0FycmF5fSBhbGwgdGhlIGV2ZW50cyBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldEV2ZW50cyhpZCkge1xuICAgIHZhciBtb2RlbCA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHByb3BOYW1lcyA9ICcnLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBtb2RlbCA9ICRtZXRhbW9kZWwuZ2V0KGlkKTtcbiAgICBzY2hlbWEgPSAkbWV0YW1vZGVsLmdldChtb2RlbC5fc2NoZW1hKTtcblxuICAgIHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYSk7XG5cbiAgICBsZW5ndGggPSBwcm9wTmFtZXMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2NoZW1hW3Byb3BOYW1lc1tpXV0gPT09IEVWRU5UX1RZUEUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BOYW1lc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcgY2xhc3MgZnJvbSBhIGNsYXNzIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICB2YXIgYm9keSA9IHt9O1xuXG4gICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRPYmplY3QoY29uZmlnLCAkbWV0YW1vZGVsLmdldChjbGFzc0lkKSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwucHJlcGFyZU9iamVjdChjb25maWcsICRtZXRhbW9kZWwuZ2V0KGNsYXNzSWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwidGhlIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgY29tcG9uZW50IG9mIGNsYXNzICdcIiArIGNsYXNzSWQgKyBcIicgYXJlIG5vdCBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5faWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25maWcuX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHN0b3JlW2NvbmZpZy5faWRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgJGxvZy5pZEFscmVhZHlVc2VkKGNvbmZpZy5faWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVbY29uZmlnLl9pZF0gPSB0aGlzO1xuXG4gICAgICAgIC8vIGlkXG4gICAgICAgIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLl9pZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGlkICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG5cbiAgICAgICAgLy8gY2xhc3NJbmZvXG4gICAgICAgIGNvbmZpZy5jbGFzc0luZm8gPSBjbGFzc0lkICsgJ0luZm8nO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBsaW5rIHRvIGRiXG4gICAgICAgICRkYi5zdG9yZVtjbGFzc0lkXVtjb25maWcuX2lkXSA9IGNvbmZpZztcblxuICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpICYmICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLmluc2VydChjbGFzc0lkLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBjbGFzc0lkICsgXCIgKGNvbmZpZykgeyBib2R5LmNhbGwodGhpcyxjb25maWcpIH07XCIpKGJvZHkpO1xuICAgIC8qIGpzaGludCArVzA1NCAqL1xufVxuXG5cbi8qXG4gKiBBZGQgYW4gaWQgbWV0aG9kIHRvIGEgY2xhc3MgdGhhdCB3aWxsIHJldHVybiBpdHMgaWQuXG4gKiBAbWV0aG9kIGFkZElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkSWQoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzSWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5pZCA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gaWQgKHByb3AsIHZhbCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHByb3AsIHZhbCkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBwcm9wZXJ0aWVzIHRvIGEgY29tcG9uZW50LiBBbGwgdGhlc2UgcHJvcGVydGllcyB3aWxsIGJlIGFjY2Vzc2VkIGJ5IGEgbWV0aG9kIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAqIFNvbWUgY2hlY2tzIGNhbiBiZSBkb25lIGluIG9yZGVyIHRvIHNlZSBpZiB0aGUgc2V0IG9mIHByb3BlcnRpZXMgaXMgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQGV4YW1wbGVcbiAqIGxhdXJlLmFnZSgpOyAvLyBnZXQgdGhlIGFnZSBvZiBhIHBlcnNvblxuICogbGF1cmUuYWdlKDIyKTsgLy8gc2V0IHRoZSBhZ2Ugb2YgYSBwZXJzb25cbiAqIEBtZXRob2QgYWRkUHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IG1vZGVsIG1vZGVsIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkUHJvcGVydGllcyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXMobW9kZWwpO1xuXG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIHByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGJvZHkgPSB7fSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9ICcnLFxuICAgICAgICAgICAgcHJvcGVydHlUeXBlID0gJycsXG4gICAgICAgICAgICBwcm9wZXJ0eVJlYWRPbmx5ID0gJyc7XG5cbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcC5uYW1lO1xuICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wLnR5cGU7XG4gICAgICAgIHByb3BlcnR5UmVhZE9ubHkgPSBwcm9wLnJlYWRPbmx5O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5VHlwZSkpIHsgLy8gaW4gY2FzZSBvZiBhcnJheSwgcmV0dXJuIGEgc3ViIGFycmF5XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keShwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VhcmNoID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG1vbm9jb0FyciA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlYWxWYWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub2NvQXJyID0gbmV3IG1vbm9jb0FycmF5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5TmFtZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0lkXCI6IGNsYXNzSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IHByb3BlcnR5VHlwZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyclwiOiAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXVtwcm9wZXJ0eU5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbm9jb0FycjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9ICRkYi5zdG9yZVtjbGFzc0lkXVt0aGlzLmlkKCldW3Byb3BlcnR5TmFtZV1bcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gbW9ub2NvLnJlcXVpcmUodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhbFZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nLnJlYWRPbmx5UHJvcGVydHkodGhpcy5pZCgpLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRtZXRhbW9kZWwuaXNWYWxpZFR5cGUodmFsdWUsIHByb3BlcnR5VHlwZVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2ggPSAkZGJbY2xhc3NJZF0uZmluZCh7IFwiX2lkXCI6IHRoaXMuaWQoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGVbMF0uaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbFZhbCA9IHZhbHVlLmlkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsVmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBzZWFyY2hbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdW3Bvc2l0aW9uXSA9IHJlYWxWYWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLnVwZGF0ZShjbGFzc0lkLCB0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgcmVhbFZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3Bvc2l0aW9uLCByZWFsVmFsLCAnYWRkJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUHJvcGVydHlOYW1lKHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJvcGVydHlUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAocG9zaXRpb24sdmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLCBwb3NpdGlvbiwgdmFsdWUpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gYm9keSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzZWFyY2ggPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkZGIuc3RvcmVbY2xhc3NJZF1bdGhpcy5pZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlUeXBlLmluZGV4T2YoJ0AnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZ2V0KHByb3BlcnR5VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRyeWluZyB0byBnZXQgdGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBvbiB0aGUgZGVzdHJveWVkIGNvbXBvbmVudCAnXCIgKyB0aGlzLmlkKCkgKyBcIidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlSZWFkT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5yZWFkT25seVByb3BlcnR5KHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHZhbHVlLCBwcm9wZXJ0eVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gJGRiW2NsYXNzSWRdLmZpbmQoeyBcIl9pZFwiOiB0aGlzLmlkKCkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gc2VhcmNoWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eVR5cGUuaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZS5pZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkaGVscGVyLmlzTW9ub2NvKCkgJiYgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykudXBkYXRlKGNsYXNzSWQsIHRoaXMuaWQoKSwgcHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgTW9ub2NvQmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzSWQgPT09ICdNb25vY29CZWhhdmlvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRiZWhhdmlvci5yZW1vdmVGcm9tTWVtb3J5KHRoaXMuaWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5TmFtZSh0aGlzLmlkKCksIHByb3BlcnR5TmFtZSwgdmFsdWUsIHByb3BlcnR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbcHJvcGVydHlOYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIiAodmFsdWUpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHZhbHVlKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBtZXRob2RzIHRvIGEgY29tcG9uZW50LlxuICogVGhlIGNhbGwgdG8gdGhlc2UgbWV0aG9kcyB3aWxsIGludm9rZSB0aGUgd29ya2Zsb3cgaW4gb3JkZXIgdG8gY2hlY2sgdGhhdCBpbnBvdXRzIC8gb3V0cHV0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRNZXRob2RzXG4gKiBAcGFyYW0ge1N0cmluZ30gbW9kZWwgbW9kZWwgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRNZXRob2RzKG1vZGVsLCBDbGFzcywgY2xhc3NJZCkge1xuICAgIHZhciBtZXRob2RzID0gZ2V0TWV0aG9kcyhtb2RlbCk7XG5cbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gbWV0aG9kKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNsYXNzSWQsIG1ldGhvZE5hbWUpLFxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zTmFtZS5qb2luKCcsJyksXG4gICAgICAgICAgICBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJHdvcmtmbG93LnN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcy5pZCgpLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKFwiICsgcGFyYW1zICsgXCIpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLFwiICsgcGFyYW1zICsgXCIpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICAgICAgICAgIENsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gXCIgKyBtZXRob2ROYW1lICsgXCIgKCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMpIH07XCIpKGJvZHkpO1xuICAgICAgICAgICAgLyoganNoaW50ICtXMDU0ICovXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG4vKlxuICogQWRkIGV2ZW50cyB0byBhIGNvbXBvbmVudC5cbiAqIFRoZSBjYWxsIHRvIHRoZXNlIG1ldGhvZHMgd2lsbCBpbnZva2UgdGhlIHdvcmtmbG93IGluIG9yZGVyIHRvIGNoZWNrIHRoYXQgaW5wb3V0cyBhcmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsLlxuICogQG1ldGhvZCBhZGRFdmVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBtb2RlbCBtb2RlbCBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50cyhtb2RlbCwgQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG1vZGVsKTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiBldmVudChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBwYXJhbXNOYW1lID0gZ2V0UGFyYW1OYW1lcyhjbGFzc0lkLCBtZXRob2ROYW1lKSxcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtc05hbWUuam9pbignLCcpLFxuICAgICAgICAgICAgYm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiB0aGlzLmlkKCksXG4gICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogbWV0aG9kTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiIChcIiArIHBhcmFtcyArIFwiKSB7IHJldHVybiBib2R5LmNhbGwodGhpcyxcIiArIHBhcmFtcyArIFwiKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbWV0aG9kTmFtZSArIFwiICgpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzKSB9O1wiKShib2R5KTtcbiAgICAgICAgICAgIC8qIGpzaGludCArVzA1NCAqL1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLypcbiAqIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGFkZE9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDbGFzcyBDbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZE9uKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEkpIHtcbiAgICAgICAgdmFyIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5Nb25vY29CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgc3RhdGUgPT09IGN1cnJlbnRTdGF0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBiZWhhdmlvcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbih0aGlzLmlkKCksIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5wcm90b3R5cGUub24gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIG9uIChzdGF0ZSxoYW5kbGVyLHVzZUNvcmVBUEkpIHsgcmV0dXJuIGJvZHkuY2FsbCh0aGlzLHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSkgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCBhIG9uIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byBhZGQgYmVoYXZpb3JzIHRvIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgYWRkT25DbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2xhc3MgQ2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIG5hbWUgb2YgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRPbkNsYXNzKENsYXNzLCBjbGFzc0lkKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoc3RhdGUsIGhhbmRsZXIsIHVzZUNvcmVBUEkpIHtcbiAgICAgICAgdmFyIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICcnO1xuXG4gICAgICAgIGlmICgkd29ya2Zsb3cuY2hlY2tQYXJhbXMoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogdGhpcyxcbiAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBcIm9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogYXJndW1lbnRzXG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkU3RhdGUoc3RhdGUsIGNsYXNzSWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0V2ZW50KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHN0YXRlLCBjbGFzc0lkKSAmJlxuICAgICAgICAgICAgICAgICAgICAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNsYXNzSWQpICYmXG4gICAgICAgICAgICAgICAgICAgICRkYi5Nb25vY29CZWhhdmlvci5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMuaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjogc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5iZWhhdmlvck5vdFVuaXF1ZShjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3b3JrbG93LnZhbGlkUGFyYW1OdW1iZXJzKGNsYXNzSWQsIHN0YXRlLCBoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JJZCA9ICRiZWhhdmlvci5hZGQodGhpcy5pZCgpLCBzdGF0ZSwgaGFuZGxlciwgdXNlQ29yZUFQSSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQodGhpcy5pZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgc3RhdGUgPT09IGN1cnJlbnRTdGF0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdvcmtmbG93LmFjdGlvbihiZWhhdmlvcklkLCBiZWhhdmlvcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPbih0aGlzLmlkKCksIHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkU3RhdGVPbihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJlaGF2aW9ySWQ7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5vbiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb24gKHN0YXRlLGhhbmRsZXIsdXNlQ29yZUFQSSkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHN0YXRlLCBoYW5kbGVyLCB1c2VDb3JlQVBJKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGEgb2ZmIG1ldGhvZCB0byBhIGNsYXNzIGNvbXBvbmVudCB0byByZW1vdmUgYmVoYXZpb3JzIGZyb20gdGhlIGNsYXNzLlxuICogQG1ldGhvZCBhZGRPZmZDbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NJZCBuYW1lIG9mIHRoZSBjbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkT2ZmQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpIHtcbiAgICB2YXIgYm9keSA9IGZ1bmN0aW9uIChzdGF0ZSwgYmVoYXZpb3JJZCkge1xuICAgICAgICBpZiAoJHdvcmtmbG93LmNoZWNrUGFyYW1zKHtcbiAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IHRoaXMsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogXCJvZmZcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBhcmd1bWVudHNcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmlzVmFsaWRTdGF0ZShzdGF0ZSwgY2xhc3NJZCkpIHtcbiAgICAgICAgICAgICAgICAkYmVoYXZpb3IucmVtb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgXCJiZWhhdmlvcklkXCI6IGJlaGF2aW9ySWQsXG4gICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50SWRcIjogY2xhc3NJZCxcbiAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBzdGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLkludmFsaWRTdGF0ZU9mZihjbGFzc0lkLCBzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qIGpzaGludCAtVzA1NCAqL1xuICAgIENsYXNzLm9mZiA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gb2ZmIChzdGF0ZSwgYmVoYXZpb3JJZCkgeyByZXR1cm4gYm9keS5jYWxsKHRoaXMsIHN0YXRlLCBiZWhhdmlvcklkKSB9O1wiKShib2R5KTtcbiAgICAvKiBqc2hpbnQgK1cwNTQgKi9cbn1cblxuXG4vKlxuICogQWRkIGEgZGVzdHJveSBtZXRob2QgdG8gYSBjbGFzcyBjb21wb25lbnQgdG8gZGV0cm95IHRoZSBjbGFzcyBhbmQgYWxsIHRoZSBjb21wb25lbnRzIG9mIHRoZSBzYW1lIGNsYXNzLlxuICogQG1ldGhvZCBhZGREZXN0cm95Q2xhc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBDbGFzcyBDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkRGVzdHJveUNsYXNzKENsYXNzKSB7XG4gICAgdmFyIGJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQoKTtcbiAgICAgICAgLy8gaWYgbm90IHZpcnR1YWwgY29tcG9uZW50XG4gICAgICAgIGlmICgkZGJbaWRdKSB7XG4gICAgICAgICAgICAkZGJbaWRdLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0b3JlW2lkXTtcblxuICAgICAgICAkd29ya2Zsb3cuc3RhdGUoe1xuICAgICAgICAgICAgXCJjb21wb25lbnRcIjogaWQsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiZGVzdHJveVwiXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoganNoaW50IC1XMDU0ICovXG4gICAgQ2xhc3MuZGVzdHJveSA9IG5ldyBGdW5jdGlvbihcImJvZHlcIiwgXCJyZXR1cm4gZnVuY3Rpb24gZGVzdHJveSAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIEFkZCB0aGUgYWRkQ2xhc3NJbmZvIG1ldGhvZCBvbiBhIGNsYXNzLlxuICogQG1ldGhvZCBhZGRDbGFzc0luZm9DbGFzc1xuICogQHBhcmFtIHtPYmplY3R9IENsYXNzIENsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRDbGFzc0luZm9DbGFzcyhDbGFzcykge1xuICAgIHZhciBib2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMuaWQoKSArICdJbmZvJyk7XG4gICAgfTtcbiAgICAvKiBqc2hpbnQgLVcwNTQgKi9cbiAgICBDbGFzcy5jbGFzc0luZm8gPSBuZXcgRnVuY3Rpb24oXCJib2R5XCIsIFwicmV0dXJuIGZ1bmN0aW9uIGNsYXNzSW5mbyAoKSB7IHJldHVybiBib2R5LmNhbGwodGhpcykgfTtcIikoYm9keSk7XG4gICAgLyoganNoaW50ICtXMDU0ICovXG59XG5cblxuLypcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBmYWN0b3J5XG4gKiBAcGFyYW0ge0pTT059IGNvbmZpZyBjb25maWd1cmF0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAqIEByZXR1cm4ge0NvbXBvbmVudH0gdGhlIGNyZWF0ZWQgY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBmYWN0b3J5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIHZhciBDbGFzcyA9IHt9LFxuICAgICAgICBjbGFzc0lkID0gJyc7XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5tb2RlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2xhc3NJZCA9ICRoZWxwZXIuZ2VuZXJhdGVJZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzSWQgPSBjb25maWcubW9kZWw7XG4gICAgfVxuXG4gICAgQ2xhc3MgPSBjcmVhdGVDbGFzcyhjbGFzc0lkKTtcblxuICAgIHN0b3JlW2NsYXNzSWRdID0gQ2xhc3M7XG5cbiAgICBhZGRJZChDbGFzcywgY2xhc3NJZCk7XG5cbiAgICBhZGRQcm9wZXJ0aWVzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuICAgIGFkZE1ldGhvZHMoY29uZmlnLm1vZGVsLCBDbGFzcywgY2xhc3NJZCk7XG4gICAgYWRkRXZlbnRzKGNvbmZpZy5tb2RlbCwgQ2xhc3MsIGNsYXNzSWQpO1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgcHJvcGVydGllcy9tZXRob2RzIG9ubHkgaWYgdGhlIGNvbXBvbmVudFxuICAgIC8vIGluaGVyaXQgZnJvbSBNb25vY29Db21wb25lbnRcbiAgICBpZiAoXG4gICAgICAgICRtZXRhbW9kZWwuaW5oZXJpdEZyb20oY2xhc3NJZCwgJ01vbm9jb0NvbXBvbmVudCcpIHx8XG4gICAgICAgIGNsYXNzSWQgPT09ICdNb25vY29Db21wb25lbnQnXG4gICAgICAgICkge1xuICAgICAgICBhZGRPbihDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZE9uQ2xhc3MoQ2xhc3MsIGNsYXNzSWQpO1xuICAgICAgICBhZGRPZmZDbGFzcyhDbGFzcywgY2xhc3NJZCk7XG4gICAgICAgIGFkZERlc3Ryb3lDbGFzcyhDbGFzcyk7XG4gICAgICAgIGFkZENsYXNzSW5mb0NsYXNzKENsYXNzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZnJlZXplKENsYXNzKTtcblxuICAgIHJldHVybiBDbGFzcztcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gc3RvcmVbaWRdO1xufVxuXG5cbi8qXG4gKiBGaW5kIGNvbXBvbmVudHMgd2l0aCBhIHF1ZXJ5LlxuICogQG1ldGhvZCBmaW5kXG4gKiBAcGFyYW0ge1N0cmluZ30gQ2xhc3MgY2xhc3MgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRvIHNlYXJjaFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gY29tcG9uZW50cyBmb3VuZFxuICpcbiAqIEBleGFtcGxlIFxuICogJGNvbXBvbmVudC5maW5kKFwiU3R1ZGVudFwiLCB7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkY29tcG9uZW50LmZpbmQoXCJTdHVkZW50XCIsIHtcIm5hbWVcIjogXCJsYXVyZVwiLCBcImFnZVwiIDogMjR9KTsgPGJyPlxuICogJGNvbXBvbmVudC5maW5kKFwiU3R1ZGVudFwiLCBbe1wibmFtZVwiOiBcInJlbmVcIn0sIHtcIm5hbWVcIjogXCJyb2JlcnRcIn1dKTtcbiAqL1xuZnVuY3Rpb24gZmluZChDbGFzcywgcXVlcnkpIHtcbiAgICB2YXIgZG9jdW1lbnRzID0gW10sXG4gICAgICAgIGNvbXBvbmVudHMgPSBbXSxcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICBpZiAoJGRiW0NsYXNzXSkge1xuICAgICAgICBkb2N1bWVudHMgPSAkZGJbQ2xhc3NdLmZpbmQocXVlcnkpO1xuICAgICAgICBsZW5ndGggPSBkb2N1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGV4cG9ydHMuZ2V0KGRvY3VtZW50c1tpXS5faWQpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgZnJvbSBpdHMgY29uZmlndXJhdGlvbi5cbiAqIEBtZXRob2QgY3JlYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShjb25maWcpIHtcbiAgICByZXR1cm4gZmFjdG9yeShjb25maWcpO1xufVxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lLlxuICogQG1ldGhvZCBpc0luc3RhbmNlT2ZcbiAqIEBwYXJhbSB7dHlwZX0gY29tcG9uZW50IGNvbXBvbmVudFxuICogQHBhcmFtIHt0eXBlfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lICBcbiAqL1xuZnVuY3Rpb24gaXNJbnN0YW5jZU9mKGNvbXBvbmVudCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSAnJztcblxuICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gY29tcG9uZW50ID09PSBjbGFzc05hbWU7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBEZXN0cm95IGEgY29tcG9uZW50IGZyb20gaXRzIGlkLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudCB0byBkZXN0cm95XG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koaWQpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gc3RvcmVbaWRdLFxuICAgICAgICBjbGFzc0lkID0gJyc7XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yZVtpZF07XG4gICAgICAgIGNsYXNzSWQgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgJGRiW2NsYXNzSWRdLnJlbW92ZSh7XG4gICAgICAgICAgICBcIl9pZFwiOiBpZFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY2FzZSBvZiBCZWhhdmlvclxuICAgICAgICBpZiAoY2xhc3NJZCA9PT0gJ01vbm9jb0JlaGF2aW9yJykge1xuICAgICAgICAgICAgJGJlaGF2aW9yLnJlbW92ZUZyb21NZW1vcnkoaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLypcbiAqIFJlbW92ZSBhbGwgdGhlIGNvbXBvbmVudHMgc3RvcmUgaW4gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBjb21wb25lbnRzLiBcbiAqIEl0IGlzIHRoZSBmYWN0b3J5IG9mIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IG1vbm9jby5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tYmVoYXZpb3JcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1jb21wb25lbnRcbiAqIEBzdGF0aWMgXG4gKi9cblxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCBmcm9tIGl0cyBjb25maWd1cmF0aW9uLlxuICogQG1ldGhvZCBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cblxuLyoqXG4gKiBHZXQgYSBjb21wb25lbnQgYnkgaXRzIGlkLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7Q29tcG9uZW50fVxuICovXG5leHBvcnRzLmdldCA9IGdldDtcblxuXG4vKipcbiAqIEZpbmQgY29tcG9uZW50cyB3aXRoIGEgcXVlcnkuXG4gKiBAbWV0aG9kIGZpbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBDbGFzcyBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gc2VhcmNoXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gcXVlcnkgcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBjb21wb25lbnRzIGZvdW5kXG4gKlxuICogQGV4YW1wbGUgXG4gKiAkY29tcG9uZW50LmZpbmQoXCJTdHVkZW50XCIsIHtcIm5hbWVcIjogXCJsYXVyZVwifSk7IDxicj5cbiAqICRjb21wb25lbnQuZmluZChcIlN0dWRlbnRcIiwge1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkY29tcG9uZW50LmZpbmQoXCJTdHVkZW50XCIsIFt7XCJuYW1lXCI6IFwicmVuZVwifSwge1wibmFtZVwiOiBcInJvYmVydFwifV0pO1xuICovXG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lLlxuICogQG1ldGhvZCBpc0luc3RhbmNlT2ZcbiAqIEBwYXJhbSB7dHlwZX0gY29tcG9uZW50IGNvbXBvbmVudFxuICogQHBhcmFtIHt0eXBlfSBjbGFzc05hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBoYXMgZm9yIGNsYXNzIG5hbWUgY2xhc3NOYW1lICBcbiAqL1xuZXhwb3J0cy5pc0luc3RhbmNlT2YgPSBpc0luc3RhbmNlT2Y7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xuXG5cbi8qKlxuICogRGVzdHJveSBhIGNvbXBvbmVudCBmcm9tIGl0cyBpZC5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnQgdG8gZGVzdHJveVxuICogQHJldHVybiB7Qm9vbGVhbn0gaWYgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAqL1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTsiLCIvKiBcbiAqIG1vbm9jb1xuICogQSBNb2RlbCBhbmQgYSBOb1NRTCBEYXRhYmFzZSBmb3IgQ29tcG9uZW50c1xuICogaHR0cDovL21vbm9jby5pby9cbiAqIEBlY2FycmlvdVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSAtIEVyd2FuIENhcnJpb3VcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBtb25vY28gZGF0YWJhc2UuIDxicj5cbiAqIG1vbm9jbyBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6IDxicj5cbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmQgPGJyPlxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLiA8YnI+XG4gKiBcbiAqIG1vbm9jbyBEYXRhYmFzZSBpcyBjbG9zZWx5IGxpbmtlZCB0byBtb25vY28gbWV0YW1vZGVsIGFuZCBtb25vY28gY29tcG9uZW50cyBiZWNhdXNlOiA8YnI+XG4gKiAtIGFsbCBvcGVyYXRpb25zIGRvbmUgYnkgbW9ub2NvIGRhdGFiYXNlIG11c3QgYmUgY29tcGxpYW50IHdpdGggdGhlIG1vZGVsIGJlZm9yZSBiZWluZyBmaW5pc2hlZCwgPGJyPlxuICogLSBpbnNlcnQgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBhIGNvbXBvbmVudCBhbmQgPGJyPlxuICogLSByZW1vdmUgb3BlcmF0aW9uIGF1dG9tYXRpY2FsbHkgZGVzdHJveSBhIGNvbXBvbmVudC5cbiAqICBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1kYlxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC5qcycpO1xudmFyICRtZXRhbW9kZWwgPSByZXF1aXJlKCcuL21ldGFtb2RlbC5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRiZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3IuanMnKTtcbnZhciAkc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlLmpzJyk7XG52YXIgJHdvcmtsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge30sXG4gICAgY29sbGVjdGlvbnMgPSBbXSxcbiAgICBpbnRlcm5hbERCID0gW1xuICAgICAgICAnTW9ub2NvJyxcbiAgICAgICAgJ01vbm9jb1NjaGVtYScsXG4gICAgICAgICdNb25vY29FeHRlbmRlZFNjaGVtYScsXG4gICAgICAgICdNb25vY29CZWhhdmlvcicsXG4gICAgICAgICdNb25vY29TdGF0ZScsXG4gICAgICAgICdNb25vY29UeXBlJyxcbiAgICAgICAgJ01vbm9jb01ldGFtb2RlbCcsXG4gICAgICAgICdNb25vY29EYXRhYmFzZScsXG4gICAgICAgICdNb25vY29TeXN0ZW0nLFxuICAgICAgICAnTW9ub2NvQ2xhc3NJbmZvJyxcbiAgICAgICAgJ01vbm9jb01lc3NhZ2UnLFxuICAgICAgICAnTW9ub2NvQ2hhbm5lbCdcbiAgICBdO1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBUZXN0IGlmIGFuIG9iamVjdCBjb250YWlucyBhbm90aGVyIG9uZS5cbiAqIEBtZXRob2QgY29udGFpbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2Ugc291cmNlIG9iamVjdCBcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgdGFyZ2V0IG9iamVjdCBcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHNvdXJjZSBvYmplY3QgY29udGFpbnMgdGhlIHRhcmdldCBvYmplY3RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIHByb3BlcnR5ID0ge307XG5cbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnIHx8IHRhcmdldFtwcm9wZXJ0eV0gIT09IHNvdXJjZVtwcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiogXG4gKiBBIGNvbGxlY3Rpb24gb2YgZG9jdW1lbnRzIG1hbmFnZWQgYnkgbW9ub2NvLiA8YnI+XG4gKiBJbnRlcm5hbCBjb2xsZWN0aW9ucyBtYW5hZ2UgY29yZSBvYmplY3RzIG9mIG1vbm9jbyAoc2NoZW1hLCB0eXBlLCAuLi4pLiA8YnI+XG4gKiBQdWJsaWMgY29sbGVjdGlvbnMgbWFuYWdlIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgY2xhc3MuIDxicj5cbiAqIFxuICogQGNsYXNzIE1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBuZXcgY29sbGVjdGlvblxuICovXG52YXIgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoJG1ldGFtb2RlbC5nZXQobmFtZSkgfHwgaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICBzdG9yZVtuYW1lXSA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoaW50ZXJuYWxEQi5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChuYW1lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cuaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBGaW5kIGEgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgZmluZFxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgZG9jdW1lbnRzIHRoYXQgbWFwIHRoZSBxdWVyeVxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5QZXJzb24uZmluZCh7XCJuYW1lXCI6IFwibGF1cmVcIn0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoe1wibmFtZVwiOiBcImxhdXJlXCIsIFwiYWdlXCIgOiAyNH0pOyA8YnI+XG4gKiAkZGIuUGVyc29uLmZpbmQoW3tcIm5hbWVcIjogXCJyZW5lXCJ9LCB7XCJuYW1lXCI6IFwicm9iZXJ0XCJ9XSk7XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgaWQgPSAnJyxcbiAgICAgICAgb2JqZWN0ID0ge307XG5cbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IG51bGw7XG5cbiAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfc2VhcmNoKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMoY3JpdGVyaWEsIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zKHF1ZXJ5LCBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBzdG9yZVt0aGlzLm5hbWVdW2lkXTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIEluc2VydCBhbiBuZXcgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvbi4gPGJyPlxuICogQmVmb3JlIGluc2VydGluZyB0aGUgZG9jdW1lbnQsIG1vbm9jbyBjaGVja3MgdGhhdCB0aGUgZG9jdW1lbnQgaXMgY29tcGxpYW50XG4gKiB3aXRoIGl0cyBjbGFzcyBkZWZpbml0aW9uLiA8YnI+IFxuICogVGhlbiwgYWZ0ZXIgaW5zZXJ0aW5nIGl0LCB3ZSBjcmVhdGUgdGhlIGNvbXBvbmVudC5cbiAqIEBtZXRob2QgaW5zZXJ0XG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gZG9jdW1lbnQgYSBuZXcgb2JqZWN0IHRvIGFkZFxuICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIGlkIGNyZWF0ZWRcbiAqIFxuICogQGV4YW1wbGUgXG4gKiAkZGIuUGVyc29uLmluc2VydCh7PGJyPlxuICogICAgICBcIm5hbWVcIjogXCJib2JcIiwgPGJyPlxuICogICAgICBcImZpcnN0TmFtZVwiOiBcIlNhaW50LUNsYXJcIiwgPGJyPlxuICogICAgICBcImFnZVwiOiA0MyA8YnI+XG4gKiB9KTsgPGJyPlxuICovXG5Nb25vY29EYXRhYmFzZUNvbGxlY3Rpb24ucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICAgIHZhciBkb2MgPSBbXSxcbiAgICAgICAgQ29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkb2N1bWVudCkpIHtcbiAgICAgICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLnB1c2goZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIGRvYy5mb3JFYWNoKGZ1bmN0aW9uIG11bHRpX2luc2VydChvYmopIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ01vbm9jb1NjaGVtYSc6XG4gICAgICAgICAgICBjYXNlIHRoaXMubmFtZSA9PT0gJ01vbm9jb1R5cGUnOlxuICAgICAgICAgICAgY2FzZSB0aGlzLm5hbWUgPT09ICdNb25vY29FeHRlbmRlZFNjaGVtYSc6XG4gICAgICAgICAgICBjYXNlICRtZXRhbW9kZWwuaXNWYWxpZE9iamVjdChvYmosICRtZXRhbW9kZWwuZ2V0KHRoaXMubmFtZSkpOlxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmouX2lkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBvYmouX2lkID0gJGhlbHBlci5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RvcmVbdGhpcy5uYW1lXVtvYmouX2lkXSA9IG9iajtcblxuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9ICRjb21wb25lbnQuZ2V0KHRoaXMubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG9iaik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudC5pZCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpICYmICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdkYicpLmluc2VydCh0aGlzLm5hbWUsIG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSAnTW9ub2NvTWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2NoYW5uZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS5yZXF1aXJlKCdjaGFubmVsJylbb2JqLmV2ZW50XShvYmouZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0KG9iaiwgdGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIFVwZGF0ZSBkb2N1bWVudHMgaW50byBhIGNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHF1ZXJ5IHF1ZXJ5IHRvIGZpbmQgdGhlIGRvY3VtZW50cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgdXBkYXRlIHRvIG1ha2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxuICoge0Jvb2xlYW59IHVwc2VydCB0cnVlIGlmIHdlIGNyZWF0ZSBhIGRvY3VtZW50IHdoZW4gbm8gZG9jdW1lbnQgaXMgZm91bmQgYnkgdGhlIHF1ZXJ5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE51bWJlciBvZiBkb2N1bWVudHMgdXBkYXRlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnVwZGF0ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJwcmljZVwiOiBcIjEwMDAwJFwifSk7IDxicj5cbiAqICRkYi5DYXJzLnVwZGF0ZShbe1wiY29kZVwiOiBcIkFaRC03MVwifSwge1wiY29kZVwiOiBcIkFaRC02NVwifV0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMudXBkYXRlKHtcImNvZGVcIjogXCJBWkQtNzFcIn0sIHtcInByaWNlXCI6IFwiMTAwMDAkXCJ9LCB7XCJ1cHNlcnRcIjogdHJ1ZX0pOyA8YnI+XG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHF1ZXJ5LCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZG9jcyA9IHRoaXMuZmluZChxdWVyeSksXG4gICAgICAgIHVwZGF0ZWQgPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gZG9jcy5sZW5ndGgsXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hID0gJG1ldGFtb2RlbC5nZXQodGhpcy5uYW1lKSxcbiAgICAgICAgdHlwZSA9ICcnO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVwc2VydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy51cHNlcnQgPSBvcHRpb25zLnVwc2VydCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG5cbiAgICAgICAgLy8gdXBzZXJ0IGNhc2VcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBvcHRpb25zLnVwc2VydCkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5Ll9pZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZS5faWQgPSBxdWVyeS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluc2VydCh1cGRhdGUpO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHVwZGF0ZWQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjYXNlIG9mIHVwZGF0ZSBvZiBfaWRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXBkYXRlLl9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdXBkYXRlLl9pZCAhPT0gZG9jc1tpXS5faWQpIHtcbiAgICAgICAgICAgICAgICAkbG9nLnVwZGF0ZVV1aWQoZG9jc1tpXS5faWQsIHVwZGF0ZS5faWQsIHR5cGVvZiAkY29tcG9uZW50LmdldCh1cGRhdGUuX2lkKSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZU5hbWUgaW4gdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2NzW2ldW2F0dHJpYnV0ZU5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBzY2hlbWFbYXR0cmlidXRlTmFtZV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAkbWV0YW1vZGVsLmdldE1ldGFEZWYoKVthdHRyaWJ1dGVOYW1lXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG1ldGFtb2RlbC5pc1ZhbGlkVHlwZSh1cGRhdGVbYXR0cmlidXRlTmFtZV0sIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jc1tpXVthdHRyaWJ1dGVOYW1lXSA9IHVwZGF0ZVthdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdXBkYXRlZCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykudXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKHRoaXMubmFtZSwgZG9jc1tpXS5faWQsIGF0dHJpYnV0ZU5hbWUsIHVwZGF0ZVthdHRyaWJ1dGVOYW1lXSwgc2NoZW1hW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5T25EYlVwZGF0ZShhdHRyaWJ1dGVOYW1lLCBkb2NzW2ldLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlZDtcbn07XG5cblxuLyoqXG4gKiBSZW1vdmUgYSBkb2N1bWVudCBmcm9tIHRoZSBjb2xsbGVjdGlvbi4gPGJyPlxuICogV2hlbiBhIGRvY3VtZW50IGlzIHJlbW92ZWQsIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBxdWVyeSBxdWVyeSB0byBmaW5kIHRoZSBkb2N1bWVudHMgdG8gcmVtb3ZlXG4gKiBAcmV0dXJuIHtBcnJheX0gbGlzdCBvZiBkb2N1bWVudHMgaWQgcmVtb3ZlZFxuICogXG4gKiBAZXhhbXBsZSBcbiAqICRkYi5DYXJzLnJlbW92ZSh7XCJjb2RlXCI6IFwiQVpELTcxXCJ9KTsgPGJyPlxuICogJGRiLkNhcnMucmVtb3ZlKFt7XCJjb2RlXCI6IFwiQVpELTcxXCJ9LCB7XCJjb2RlXCI6IFwiQVpELTY1XCJ9XSk7IDxicj5cbiAqL1xuTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGlkID0gJycsXG4gICAgICAgIGNvbXBvbmVudCA9IG51bGwsXG4gICAgICAgIG9iamVjdCA9IHt9O1xuXG4gICAgcXVlcnkgPSBxdWVyeSB8fCBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gbXVsdGlfcmVtb3ZlKGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdCA9IHN0b3JlW3RoaXMubmFtZV1baWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWlucyhjcml0ZXJpYSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpICYmICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gc3RvcmVbdGhpcy5uYW1lXVtpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbnMocXVlcnksIG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSAkY29tcG9uZW50LmdldChpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRoZWxwZXIuaXNNb25vY28oKSAmJiAkaGVscGVyLmdldE1vbm9jbygpLnJlcXVpcmUoJ2RiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaWQgaW4gc3RvcmVbdGhpcy5uYW1lXSkge1xuICAgICAgICAgICAgZGVsZXRlIHN0b3JlW3RoaXMubmFtZV1baWRdO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoaWQpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJGhlbHBlci5pc01vbm9jbygpICYmICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKSkge1xuICAgICAgICAgICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkucmVxdWlyZSgnZGInKS5yZW1vdmUodGhpcy5uYW1lLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBjb3VudFxuICogQHJldHVybiB7TnVtYmVyfSBudW1iZXIgb2YgZG9jdW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uXG4gKi9cbk1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbi5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IDAsXG4gICAgICAgIG9iamVjdElkID0gJyc7XG4gICAgZm9yIChvYmplY3RJZCBpbiBzdG9yZVt0aGlzLm5hbWVdKSB7XG4gICAgICAgIHJlc3VsdCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5mdW5jdGlvbiBjb2xsZWN0aW9uKG5hbWUpIHtcbiAgICBleHBvcnRzW25hbWVdID0gbmV3IE1vbm9jb0RhdGFiYXNlQ29sbGVjdGlvbihuYW1lKTtcbn1cblxuXG4vKlxuICogRHVtcCB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGR1bXBcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGR1bXAgb2YgdGhlIGRhdGFiYXNlLiBUaGUgZHVtcCBpcyBhbiBvYmplY3QgdGhhdCBjb250YWluczogPGJyPlxuICoge09iamVjdH0gc2NoZW1hcyB0aGUgc2NoZW1hcyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gdHlwZXMgdGhlIHR5cGVzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBiZWhhdmlvcnMgdGhlIGJlaGF2aW9ycyBzdG9yZSBpbiB0aGUgZGF0YWJhc2UgPGJyPlxuICoge09iamVjdH0gY29tcG9uZW50cyB0aGUgY29tcG9uZW50cyBzdG9yZSBpbiB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gZHVtcCgpIHtcbiAgICB2YXIgZGJEdW1wID0ge30sXG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gJycsXG4gICAgICAgIGJlaGF2aW9ySWQgPSAnJyxcbiAgICAgICAgdHlwZUlkID0gJycsXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIHNjaGVtYSA9IG51bGwsXG4gICAgICAgIHNjaGVtYUlkID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIGRiRHVtcC5zY2hlbWFzID0ge307XG4gICAgaWYgKGV4cG9ydHMuTW9ub2NvU2NoZW1hLmNvdW50KCkpIHtcbiAgICAgICAgZm9yIChzY2hlbWFJZCBpbiBzdG9yZS5Nb25vY29TY2hlbWEpIHtcbiAgICAgICAgICAgIHNjaGVtYSA9IHN0b3JlLk1vbm9jb1NjaGVtYVtzY2hlbWFJZF07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIGRiRHVtcC5zY2hlbWFzW3NjaGVtYUlkXSA9IHNjaGVtYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHR5cGVzXG4gICAgZGJEdW1wLnR5cGVzID0ge307XG4gICAgaWYgKGV4cG9ydHMuTW9ub2NvVHlwZS5jb3VudCgpKSB7XG4gICAgICAgIGZvciAodHlwZUlkIGluIHN0b3JlLk1vbm9jb1R5cGUpIHtcbiAgICAgICAgICAgIHR5cGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JlLk1vbm9jb1R5cGVbdHlwZUlkXSkpO1xuICAgICAgICAgICAgZGVsZXRlIHR5cGUuX2lkO1xuICAgICAgICAgICAgaWYgKCF0eXBlLmNvcmUpIHtcbiAgICAgICAgICAgICAgICBkYkR1bXAudHlwZXNbdHlwZS5uYW1lXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBkYkR1bXAuYmVoYXZpb3JzID0ge307XG4gICAgZm9yIChiZWhhdmlvcklkIGluIHN0b3JlLk1vbm9jb0JlaGF2aW9yKSB7XG4gICAgICAgIGJlaGF2aW9yID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yZS5Nb25vY29CZWhhdmlvcltiZWhhdmlvcklkXSkpO1xuICAgICAgICBpZiAoIWJlaGF2aW9yLmNvcmUpIHtcbiAgICAgICAgICAgIGRiRHVtcC5iZWhhdmlvcnNbYmVoYXZpb3JJZF0gPSBiZWhhdmlvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudHNcbiAgICBkYkR1bXAuY29tcG9uZW50cyA9IHt9O1xuICAgIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgICAgaWYgKGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmNvdW50KCkpIHtcbiAgICAgICAgICAgIGRiRHVtcC5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSA9IHN0b3JlW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYkR1bXA7XG59XG5cblxuLypcbiAqIEltcG9ydC9FeHBvcnQgYSBtb25vY28gc3lzdGVtIGludG8vZnJvbSB0aGUgZGF0YWJhc2VcbiAqIEBtZXRob2Qgc3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgbW9ub2NvIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBtb25vY28gc3lzdGVtIG9yIHRoZSBpZiBvZiB0aGUgY3VycmVudCBtb25vY28gc3lzdGVtXG4gKi9cbmZ1bmN0aW9uIHN5c3RlbShpbXBvcnRlZFN5c3RlbSkge1xuICAgIHZhciByZXN1bHQgPSAnJyxcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAnJyxcbiAgICAgICAgY29tcG9uZW50SWQgPSAnJyxcbiAgICAgICAgdHlwZU5hbWUgPSAnJyxcbiAgICAgICAgc2NoZW1hTmFtZSA9ICcnLFxuICAgICAgICBiZWhhdmlvcklkID0gJycsXG4gICAgICAgIHN5c3RlbXMgPSBbXSxcbiAgICAgICAgaWQgPSBudWxsLFxuICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBudWxsLFxuICAgICAgICBiZWhhdmlvciA9IG51bGwsXG4gICAgICAgIGV4cG9ydGVkU3lzdGVtID0ge307XG5cbiAgICBpZiAoaW1wb3J0ZWRTeXN0ZW0pIHsgLy8gaW1wb3J0XG5cbiAgICAgICAgLy8gYWRkIHR5cGVzXG4gICAgICAgIGZvciAodHlwZU5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0udHlwZXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwudHlwZShpbXBvcnRlZFN5c3RlbS50eXBlc1t0eXBlTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHNjaGVtYXNcbiAgICAgICAgZm9yIChzY2hlbWFOYW1lIGluIGltcG9ydGVkU3lzdGVtLnNjaGVtYXMpIHtcbiAgICAgICAgICAgICRtZXRhbW9kZWwuc2NoZW1hKGltcG9ydGVkU3lzdGVtLnNjaGVtYXNbc2NoZW1hTmFtZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJG1ldGFtb2RlbC5jcmVhdGUoKTtcblxuICAgICAgICAvL2FkZCBiZWhhdmlvcnNcbiAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGltcG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgZXhwb3J0cy5Nb25vY29CZWhhdmlvci5pbnNlcnQoaW1wb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBjb21wb25lbnRzXG4gICAgICAgIGZvciAoY29sbGVjdGlvbk5hbWUgaW4gaW1wb3J0ZWRTeXN0ZW0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb21wb25lbnRJZCBpbiBpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4cG9ydHNbY29sbGVjdGlvbk5hbWVdLmluc2VydChpbXBvcnRlZFN5c3RlbS5jb21wb25lbnRzW2NvbGxlY3Rpb25OYW1lXVtjb21wb25lbnRJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgaW5mbyBpZiBhbHJlYWR5IGEgbWFzdGVyIHN5c3RlbVxuICAgICAgICBzeXN0ZW1zID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7ICdtYXN0ZXInOiB0cnVlIH0pO1xuICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggJiYgc3lzdGVtc1swXS5faWQgPT09IGltcG9ydGVkU3lzdGVtLl9pZCkge1xuICAgICAgICAgICAgaW1wb3J0ZWRTeXN0ZW0ubWFzdGVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcG9ydGVkU3lzdGVtLm1hc3RlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5zZXJ0IHRoZSBzeXN0ZW0gaW4gREJcbiAgICAgICAgZXhwb3J0cy5Nb25vY29TeXN0ZW0uaW5zZXJ0KGltcG9ydGVkU3lzdGVtKTtcblxuICAgICAgICByZXN1bHQgPSBpbXBvcnRlZFN5c3RlbS5faWQ7XG5cbiAgICB9IGVsc2UgeyAvLyBleHBvcnRcbiAgICAgICAgZXhwb3J0ZWRTeXN0ZW0gPSBkdW1wKCk7XG5cbiAgICAgICAgLy8gZ2V0IGlkIG9mIHRoZSBtYXN0ZXIgc3lzdGVtXG4gICAgICAgIHN5c3RlbXMgPSBleHBvcnRzLk1vbm9jb1N5c3RlbS5maW5kKHsgJ21hc3Rlcic6IHRydWUgfSk7XG5cbiAgICAgICAgaWYgKHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtYXN0ZXJzeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgICAgICAgICAgaWQgPSBtYXN0ZXJzeXN0ZW0uX2lkO1xuICAgICAgICAgICAgZm9yIChiZWhhdmlvcklkIGluIGV4cG9ydGVkU3lzdGVtLmJlaGF2aW9ycykge1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yID0gZXhwb3J0ZWRTeXN0ZW0uYmVoYXZpb3JzW2JlaGF2aW9ySWRdO1xuICAgICAgICAgICAgICAgIGlmIChiZWhhdmlvci5zdGF0ZSA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yLmNvbXBvbmVudCA9IGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0ubmFtZSA9IG1hc3RlcnN5c3RlbS5uYW1lO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0udmVyc2lvbiA9IG1hc3RlcnN5c3RlbS52ZXJzaW9uO1xuICAgICAgICAgICAgZXhwb3J0ZWRTeXN0ZW0uZGVzY3JpcHRpb24gPSBtYXN0ZXJzeXN0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBleHBvcnRlZFN5c3RlbS5faWQgPSBpZDtcblxuICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZXhwb3J0ZWRTeXN0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxvZy5tYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEV4cG9ydCBhIG1vbm9jbyBzdWItc3lzdGVtLlxuICogQG1ldGhvZCBzdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmdpZmllZCBtb25vY28gc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHN1YnN5c3RlbShwYXJhbXMpIHtcbiAgICB2YXIgc3lzdGVtID0ge30sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBkZWZhdWx0TmFtZSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgc2NoZW1hID0gbnVsbCxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIHJlc3VsdCA9IG1vbm9jby5maW5kKCdNb25vY29TeXN0ZW0nLCB7XG4gICAgICAgICdtYXN0ZXInOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgZGVmYXVsdE5hbWUgPSByZXN1bHRbMF0ubmFtZSgpO1xuICAgIH1cblxuICAgIHN5c3RlbS5uYW1lID0gcGFyYW1zLm5hbWUgfHwgJ3N1Yl8nICsgZGVmYXVsdE5hbWU7XG4gICAgc3lzdGVtLnZlcnNpb24gPSBwYXJhbXMudmVyc2lvbiB8fCAnMC4wLjEnO1xuICAgIHN5c3RlbS5kZXNjcmlwdGlvbiA9IHBhcmFtcy5kZXNjcmlwdGlvbiB8fCAnJztcblxuICAgIHN5c3RlbS5zdWJzeXN0ZW0gPSB0cnVlO1xuXG4gICAgLy8gc2NoZW1hc1xuICAgIHN5c3RlbS5zY2hlbWFzID0ge307XG4gICAgaWYgKHBhcmFtcy5zY2hlbWFzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvU2NoZW1hLmZpbmQocGFyYW1zLnNjaGVtYSk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzY2hlbWEgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAoIXNjaGVtYS5fY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5zY2hlbWFzW3NjaGVtYS5faWRdID0gc2NoZW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHlwZXNcbiAgICBzeXN0ZW0udHlwZXMgPSB7fTtcbiAgICBpZiAocGFyYW1zLnR5cGVzKSB7XG4gICAgICAgIHJlc3VsdCA9IGV4cG9ydHMuTW9ub2NvVHlwZS5maW5kKHBhcmFtcy50eXBlcyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0eXBlID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgaWYgKCF0eXBlLl9jb3JlKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLnR5cGVzW3R5cGUuX2lkXSA9IHR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvcnNcbiAgICBzeXN0ZW0uYmVoYXZpb3JzID0ge307XG4gICAgaWYgKHBhcmFtcy5iZWhhdmlvcnMpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBleHBvcnRzLk1vbm9jb0JlaGF2aW9yLmZpbmQocGFyYW1zLmJlaGF2aW9ycyk7XG5cbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiZWhhdmlvciA9IHJlc3VsdFtpXTtcbiAgICAgICAgICAgIGlmICghYmVoYXZpb3IuY29yZSkge1xuICAgICAgICAgICAgICAgIHN5c3RlbS5iZWhhdmlvcnNbYmVoYXZpb3IuX2lkXSA9IGJlaGF2aW9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50c1xuICAgIHN5c3RlbS5jb21wb25lbnRzID0ge307XG4gICAgaWYgKHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgIGZvciAoY2xhc3NOYW1lIGluIHBhcmFtcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3J0c1tjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgc3lzdGVtLmNvbXBvbmVudHNbY2xhc3NOYW1lXSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZXhwb3J0c1tjbGFzc05hbWVdLmZpbmQocGFyYW1zLmNvbXBvbmVudHNbY2xhc3NOYW1lXSk7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVzdWx0W2ldO1xuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uY29tcG9uZW50c1tjbGFzc05hbWVdW2NvbXBvbmVudC5faWRdID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzeXN0ZW0pO1xufVxuXG5cbi8qXG4gKiBDbGVhciB0aGUgZGF0YWJhc2UuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSAnJztcblxuICAgIC8vIHJlbW92ZSBjb2xsZWN0aW9uc1xuICAgIGxlbmd0aCA9IGNvbGxlY3Rpb25zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgICAgICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGludGVybmFsIGNvbGxlY3Rpb25zXG4gICAgbGVuZ3RoID0gaW50ZXJuYWxEQi5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lID0gaW50ZXJuYWxEQltpXTtcbiAgICAgICAgZXhwb3J0c1tjb2xsZWN0aW9uTmFtZV0ucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBJbml0IHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBtb25vY29TeXN0ZW1JZCA9ICcnLFxuICAgICAgICBtb25vY29TeXN0ZW0gPSBudWxsO1xuXG4gICAgbW9ub2NvU3lzdGVtID0gZXhwb3J0cy5Nb25vY29TeXN0ZW0uZmluZCh7ICdfaWQnOiAnZTg5YzYxN2I2YjE1ZDI0JyB9KVswXTtcblxuICAgIC8vIGNsZWFyIGFsbCB0aGUgZGF0YSBpbiBtZW1vcnlcbiAgICBleHBvcnRzLmNsZWFyKCk7XG4gICAgJGNvbXBvbmVudC5jbGVhcigpO1xuICAgICRtZXRhbW9kZWwuY2xlYXIoKTtcbiAgICAkc3RhdGUuY2xlYXIoKTtcbiAgICAkYmVoYXZpb3IuY2xlYXIoKTtcblxuICAgIC8vIGluaXQgbWV0YW1vZGVsXG4gICAgJG1ldGFtb2RlbC5pbml0KCk7XG4gICAgXG4gICAgLy8gcmVpbXBvcnQgbW9ub2NvIGNvcmUgc3lzdGVtXG4gICAgbW9ub2NvU3lzdGVtSWQgPSBleHBvcnRzLnN5c3RlbShtb25vY29TeXN0ZW0pO1xuICAgICRjb21wb25lbnQuZ2V0KG1vbm9jb1N5c3RlbUlkKS5tYWluKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBtb25vY28gZGF0YWJhc2UuIDxicj5cbiAqIG1vbm9jbyBkYXRhYmFzZSBpcyBhIG1pY3JvIE5vU1FMIERhdGFiYXNlIHRoYXQgY29udGFpbnM6IDxicj5cbiAqIC0gY29sbGVjdGlvbnMgdG8gc3RvcmUgZG9jdW1lbnRzIChzY2hlbWFzLCB0eXBlcywgY29tcG9uZW50cywgLi4uKSBhbmQgPGJyPlxuICogLSBBUElzIHRvIGltcG9ydCBvciBleHBvcnQgZG9jdW1lbnRzLiA8YnI+XG4gKiBcbiAqIG1vbm9jbyBkYXRhYmFzZSBpcyBjbG9zZWx5IGxpbmtlZCB0byBtb25vY28gbWV0YW1vZGVsIGJlY2F1c2U6IDxicj5cbiAqIC0gYWxsIG9wZXJhdGlvbnMgZG9uZSBieSBtb25vY28gZGF0YWJhc2UgbXVzdCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGJlaW5nIGZpbmlzaGVkLCA8YnI+XG4gKiAtIGluc2VydCBvcGVyYXRpb24gYXV0b21hdGljYWxseSBjcmVhdGVzIGEgY29tcG9uZW50IGFuZCA8YnI+XG4gKiAtIHJlbW92ZSBvcGVyYXRpb24gYXV0b21hdGljYWxseSBkZXN0cm95IGEgY29tcG9uZW50LlxuICogICBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQGNsYXNzIG1vbm9jby1kYlxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcge3sjY3Jvc3NMaW5rIFwiTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uXCJ9fXt7L2Nyb3NzTGlua319LlxuICogQG1ldGhvZCBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuXG5cbi8qKlxuICogbW9ub2NvIGRhdGFiYXNlIHN0b3JlIHRoYXQgbGlzdCBhbGwgdGhlIGNvbGxlY3Rpb25zLlxuICogQHByb3BlcnR5IHtKU09OfSBzdG9yZVxuICovXG5leHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqXG4gKiBEdW1wIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2QgZHVtcFxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgZHVtcCBvZiB0aGUgZGF0YWJhc2UuIFRoZSBkdW1wIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zOiA8YnI+XG4gKiB7T2JqZWN0fSBzY2hlbWFzIHRoZSBzY2hlbWFzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSB0eXBlcyB0aGUgdHlwZXMgc3RvcmUgaW4gdGhlIGRhdGFiYXNlIDxicj5cbiAqIHtPYmplY3R9IGJlaGF2aW9ycyB0aGUgYmVoYXZpb3JzIHN0b3JlIGluIHRoZSBkYXRhYmFzZSA8YnI+XG4gKiB7T2JqZWN0fSBjb21wb25lbnRzIHRoZSBjb21wb25lbnRzIHN0b3JlIGluIHRoZSBkYXRhYmFzZVxuICovXG5leHBvcnRzLmR1bXAgPSBkdW1wO1xuXG5cbi8qKlxuICogSW1wb3J0L0V4cG9ydCBhIG1vbm9jbyBzeXN0ZW0gaW50by9mcm9tIHRoZSBkYXRhYmFzZS5cbiAqIEBtZXRob2Qgc3lzdGVtXG4gKiBAcGFyYW0ge0pTT059IGltcG9ydGVkU3lzdGVtIGEgbW9ub2NvIHN5c3RlbSB0byBpbXBvcnRcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGlkIG9mIHRoZSBpbXBvcnRlZCBtb25vY28gc3lzdGVtIG9yIHRoZSBjdXJyZW50IG1vbm9jbyBzeXN0ZW0gIFxuICovXG5leHBvcnRzLnN5c3RlbSA9IHN5c3RlbTtcblxuXG4vKipcbiAqIEV4cG9ydCBhIG1vbm9jbyBzdWItc3lzdGVtLlxuICogQG1ldGhvZCBzdWJzeXN0ZW1cbiAqIEBwYXJhbSB7SlNPTn0gcGFyYW1zIHBhcmFtZXRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmdpZmllZCBtb25vY28gc3ViLXN5c3RlbVxuICogXG4gKiBAZXhhbXBsZVxuICogJGRiLnN1YnN5c3RlbSh7XCJzY2hlbWFzXCI6e1wibmFtZVwiOlwiUGVyc29uXCJ9fSk7IC8vIGZpbHRlciBleHBvcnQgb24gc2NoZW1hcyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcInR5cGVzXCI6e1wibmFtZVwiOlwiYWRkcmVzc1wifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIHR5cGVzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wiYmVoYXZpb3JzXCI6e1wiY29tcG9uZW50XCI6XCJsYXVyZVwifX0pOyAvLyBmaWx0ZXIgZXhwb3J0IG9uIGJlaGF2aW9ycyA8YnI+XG4gKiAkZGIuc3Vic3lzdGVtKHtcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gZmlsdGVyIGV4cG9ydCBvbiBjb21wb25lbnRzIDxicj5cbiAqICRkYi5zdWJzeXN0ZW0oe1wic2NoZW1hc1wiOntcIm5hbWVcIjpcIlBlcnNvblwifSxcImNvbXBvbmVudHNcIjp7XCJQZXJzb25cIjoge1wiY291bnRyeVwiOiBcIkZyYW5jZVwifX19KTsgLy8gY29tYmluZSBmaWx0ZXJzXG4gKi9cbmV4cG9ydHMuc3Vic3lzdGVtID0gc3Vic3lzdGVtO1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG4gXG4gXG4vKipcbiAqIEluaXQgdGhlIGRhdGFiYXNlLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmV4cG9ydHMuaW5pdCA9IGluaXQ7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIHRoZSBtb2R1bGVzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQGNsYXNzIG1vbm9jby1oZWxwZXJcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcblxuXG4vKiBQcml2YXRlIHByb3BlcnR5ICovXG5cbnZhciBtb25vY29SZWYgPSBudWxsO1xuXG5cbi8qIFB1YmxpYyBtZXRob2QgKi9cblxuXG4vKlxuICogQ2hlY2sgaWYgYSBtb25vY28gaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc01vbm9jb1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIG1vbm9jbyBpbnN0YW5jZSBleGlzdFxuICovXG5mdW5jdGlvbiBpc01vbm9jbygpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoJGRiLk1vbm9jbyAmJiAkZGIuTW9ub2NvLmZpbmQoKS5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIG1vbm9jbyBpbnN0YW5jZS5cbiAqIEBtZXRob2QgZ2V0TW9ub2NvXG4gKiBAcmV0dXJuIHtNb25vY299IG1vbm9jbyBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBnZXRNb25vY28oKSB7XG4gICAgdmFyIG1vbm9jb0lkID0gJyc7XG5cbiAgICBpZiAoIW1vbm9jb1JlZikge1xuICAgICAgICBpZiAoaXNNb25vY28oKSkge1xuICAgICAgICAgICAgbW9ub2NvSWQgPSAkZGIuTW9ub2NvLmZpbmQoKVswXS5faWQ7XG4gICAgICAgICAgICBtb25vY29SZWYgPSAkY29tcG9uZW50LmdldChtb25vY29JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb25vY29SZWYgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdtb25vY286ICcgKyBlcnIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FybmluZzogZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbW9ub2NvOiAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb25vY29SZWY7XG59XG5cblxuLypcbiAqIEdlbmVyYXRlIGEgdXVpZC5cbiAqIEBtZXRob2QgZ2VuZXJhdGVJZFxuICogQHJldHVybiB7U3RyaW5nfSBhIHV1aWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHtcbiAgICBmdW5jdGlvbiBnZW4oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKS50b1N0cmluZygxNik7XG4gICAgfVxuICAgIHJldHVybiBnZW4oKSArIGdlbigpICsgZ2VuKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbnMgdXNlZCBieSBhbGwgdGhlIG1vZHVsZXMuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1oZWxwZXJcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAY2xhc3MgbW9ub2NvLWhlbHBlclxuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBHZXQgbW9ub2NvIGluc3RhbmNlLlxuICogQG1ldGhvZCBnZXRNb25vY29cbiAqIEByZXR1cm4ge01vbm9jb30gbW9ub2NvIGluc3RhbmNlXG4gKi9cbmV4cG9ydHMuZ2V0TW9ub2NvID0gZ2V0TW9ub2NvO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtb25vY28gaW5zdGFuY2UgZXhpc3RzLlxuICogQG1ldGhvZCBpc01vbm9jb1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBhIG1vbm9jbyBpbnN0YW5jZSBleGlzdFxuICovXG5leHBvcnRzLmlzTW9ub2NvID0gaXNNb25vY287XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHV1aWQuXG4gKiBAbWV0aG9kIGdlbmVyYXRlSWRcbiAqIEByZXR1cm4ge1N0cmluZ30gYSB1dWlkXG4gKi9cbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGdlbmVyYXRlSWQ7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWxvZ1xuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgJGhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCc7XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogQSBwcm9wZXJ0eSBvZiBhIHNjaGVtYSBpcyB1bmtub3duLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgdGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIHRoZSBzY2hlbWEgZGVmaW5pdGlvblxuICovXG5mdW5jdGlvbiB1bmtub3duUHJvcGVydHkocHJvcGVydHlOYW1lLCBzY2hlbWEpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuXG4gICAgaWYgKHNjaGVtYVtJRF0pIHtcbiAgICAgICAgbWVzc2FnZSA9IFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicgZm9yIHRoZSBkZWZpbml0aW9uIG9mIFwiICsgc2NoZW1hW0lEXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gXCJ1bmtub3duIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBmb3IgdGhlIG1ldGEgYXR0cmlidXRlIFwiICsgSlNPTi5zdHJpbmdpZnkoc2NoZW1hKTtcbiAgICB9XG5cbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcobWVzc2FnZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSBmb3IgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwZXJvcGV0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdGhlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGUocHJvcGVydHlOYW1lLCB0eXBlLCBwcm9wZXJ0eSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgSlNPTi5zdHJpbmdpZnkocHJvcGVydHlOYW1lKSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB2YWx1ZSBmb3IgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdmFsdWUgZm9yIHRoZSBlbnVtIHZhbHVlICdcIiArIHZhbHVlICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgXCIgKyB0eXBlb2YgdmFsdWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRDbGFzc05hbWUoY29tcG9uZW50SWQsIHR5cGUsIGNvbnN0cnVjdG9yTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgY2xhc3MgbmFtZSBmb3IgY29tcG9uZW50ICdcIiArIGNvbXBvbmVudElkICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgY29uc3RydWN0b3JOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBtaXNzaW5nUHJvcGVydHkocHJvcGVydHlOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwibWlzc2luZyBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NvdXJjZSBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NUb0ltcCB0aGUgY2xhc3MgdG8gaW1wbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1pc3NpbmdJbXBsZW1lbnRhdGlvbihjbGFzc1NvdXJjZSwgY2xhc3NUb0ltcCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImNsYXNzICdcIiArIGNsYXNzU291cmNlICsgXCInIGlzIG1pc3NpbmcgZm9yIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2xhc3MgJ1wiICsgY2xhc3NUb0ltcCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgY2xhc3NOYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZnVuY3Rpb24gbWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJtaXNzaW5nIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvciB0aGUgZGVmaW5pdGlvbiBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLypcbiAqIFVua293biBwcm9wZXJ0eSBmb3IgYSBjbGFzcyBkZWZpbml0aW9uLlxuICogQG1ldGhvZCB1bmtub3duUHJvcGVydHlJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hIGEgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eUltcChwcm9wZXJ0eSwgc2NoZW1hKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3IgdGhlIGRlZmluaXRpb24gb2YgJ1wiICsgc2NoZW1hICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBJbnZhbGlkIHR5cGUgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVEZWZpbml0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmIGEgdHlwZSBkZWZpbml0aW9uXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlRGVmaW5pdGlvbihkZWYpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjYW4gbm90IGxvYWQgdGhlIHR5cGUgZGVmaW5pdGlvbiBcIiArIGRlZik7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgbmFtZS5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5TmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFByb3BlcnR5TmFtZShpZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUuaW5kZXhPZihcIiNcIikgIT09IC0xKSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgbmFtZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlICsgXCInIGluc3RlYWQgb2YgJ1wiICsgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBuYW1lIGZvciBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIic6IGV4cGVjdGVkICdcIiArIHR5cGUgKyBcIicgaW5zdGVhZCBvZiAnXCIgKyB0eXBlb2YgcHJvcGVydHlWYWx1ZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiByZWFkT25seVByb3BlcnR5KGlkLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjYW4gbm90IHNldCByZWFkLW9ubHkgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIG1vbm9jbyBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZERvY3VtZW50T25EYkluc2VydChkb2MsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBkb2N1bWVudCBcIiArIEpTT04uc3RyaW5naWZ5KGRvYykgKyBcIiBvbiBhbiBpbnNlcnQgb3BlcmF0aW9uIG9uIGNvbGxlY3Rpb24gXCIgKyBjb2xsZWN0aW9uTmFtZSk7XG59XG5cblxuLypcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBtb25vY28gZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQcm9wZXJ0eVR5cGVPbkRiVXBkYXRlKGNvbGxlY3Rpb25OYW1lLCBpZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUuaW5kZXhPZihcIiNcIikgIT09IC0xKSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHByb3BlcnR5VmFsdWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJzogZXhwZWN0ZWQgJ1wiICsgdHlwZSArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHR5cGVvZiBwcm9wZXJ0eVZhbHVlICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cblxuXG4vKlxuICogVW5rb253IHByb3BlcnR5IG9uIGEgbW9ub2NvIGRhdGFiYXNlIHVwZGF0ZSBvcGVyYXRpb24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHVua25vd25Qcm9wZXJ0eU9uRGJVcGRhdGUocHJvcGVydHlOYW1lLCBpZCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInVua25vd24gcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIG9uIGFuIHVwZGF0ZSBvcGVyYXRpb24gb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIHVua25vd24gbWV0aG9kIG9mIGEgY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25NZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc0lkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIHVua25vd25NZXRob2QoY2xhc3NJZCwgbWV0aG9kTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBjYWxsIGFuIHVua25vd24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgZm9yIHRoZSBjbGFzcyAnXCIgKyBjbGFzc0lkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUcnkgdG8gY3JlYXRlIGFuIGludmFsaWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkQ29sbGVjdGlvbk5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqL1xuZnVuY3Rpb24gaW52YWxpZENvbGxlY3Rpb25OYW1lKG5hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJpbnZhbGlkIG5hbWUgZm9yIGNyZWF0aW5nIHRoZSBjb2xsZWN0aW9uICdcIiArIG5hbWUgKyBcIic6IHRoZXJlIGlzIG5vIHNjaGVtYSAnXCIgKyBuYW1lICsgXCInIGluIHRoZSBtZXRhbW9kZWxcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZSByZXN1bHQgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRSZXN1bHRUeXBlKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCB0eXBlIG9uIHRoZSByZXN1bHQgb2YgbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBVbmtub3duIGNsYXNzLlxuICogQG1ldGhvZCB1bmtub3duQ29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAqL1xuZnVuY3Rpb24gdW5rbm93bkNvbXBvbmVudChjbGFzc05hbWUsIGNvbXBvbmVudElkKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rb3duIGNsYXNzIGNvbXBvbmVudCAnXCIgKyBjbGFzc05hbWUgKyBcIicgZm9yIGNvbXBvbmVudCAnXCIgKyBjb21wb25lbnRJZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1vbm9jbyB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmZ1bmN0aW9uIHdvcmtmbG93UmVzdGFydGVkKCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZygnbW9ub2NvIGhhcyBiZWVuIHJlc3RhcnRlZCcpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaW52YWxpZFBhcmFtTnVtYmVyKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGNhbGxpbmcgdGhlIG1ldGhvZCAnXCIgKyBtZXRob2ROYW1lICsgXCInIG9uIGNvbXBvbmVudCAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogSW52YWxpZCB0eXBlIHBhcmFtZXRlcnMgZm9yIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1UeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICogXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbVR5cGUoaWQsIG1ldGhvZE5hbWUsIHBhcmFtTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIHBhcmFtZXRlciAnXCIgKyBwYXJhbU5hbWUgKyBcIicgd2hlbiBjYWxsaW5nIHRoZSBtZXRob2QgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBvbiBjb21wb25lbnQgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEFkZCBhIG1vcmUgdGhhbiBvbmUgYmVoYXZpb3IgdG8gYSBzdGF0ZS5cbiAqIEBtZXRob2QgYmVoYXZpb3JOb3RVbmlxdWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZnVuY3Rpb24gYmVoYXZpb3JOb3RVbmlxdWUoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBhZGQgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciBmb3IgdGhlIHN0YXRlICdcIiArIHN0YXRlTmFtZSArIFwiJyBvbiBjb21wb25lbnQgY2xhc3MgJ1wiICsgaWQgKyBcIidcIik7XG59XG5cblxuLypcbiAqIENhbiBub3QgYWRkIGEgYmVoYXZpb3Igd2l0aCBhbiBpbnZhbGlkIHN0YXRlLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPbihpZCwgc3RhdGVOYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gdW5rd293biBzdGF0ZSAnXCIgKyBzdGF0ZU5hbWUgKyBcIicgb24gY29tcG9uZW50IGNsYXNzICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBUaGUgY2FsbCB0byBhIHJlbW92ZSBzdGF0ZSBvZiB0aGUgYmVoYXZpb3IgbW9kdWxlIGlzIGludmFsaWQuXG4gKiBAbWV0aG9kIGludmFsaWRTdGF0ZU9mZlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkU3RhdGVPZmYoaWQsIHN0YXRlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byByZW1vdmUgYSBiZWhhdmlvciBmcm9tIGFuIHVua3dvd24gc3RhdGUgJ1wiICsgc3RhdGVOYW1lICsgXCInIG9uIGNvbXBvbmVudCBjbGFzcyAnXCIgKyBpZCArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVGhlIG1hc3RlciBzeXN0ZW0gaXMgbm90IGZvdW5kLlxuICogQG1ldGhvZCBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZFxuICovXG5mdW5jdGlvbiBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZCgpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJ0aGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmRcIik7XG59XG5cblxuLypcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdmFsdWUgJ1wiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgXCInOiBleHBlY3RlZCAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiKTtcbn1cblxuXG4vKlxuICogVW5rbm93biB0eXBlLlxuICogQG1ldGhvZCB1bmtub3duVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHVua25vd25UeXBlKHZhbHVlKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidW5rbm93biB0eXBlIGZvciB2YWx1ZSAnXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyBcIidcIik7XG59XG5cblxuLypcbiAqIEEgY29tcG9uZW50IGhhcyBub3QgYmVlbiBhbHJlYXkgY3JlYXRlZC5cbiAqIEBtZXRob2QgY2FuTm90WWV0VmFsaWRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGNhbk5vdFlldFZhbGlkYXRlKGlkLCBjbGFzc05hbWUpIHtcbiAgICAkaGVscGVyLmdldE1vbm9jbygpLndhcm5pbmcoXCJjYW4gbm90IHlldCB2YWxpZGF0ZSBpZiB0aGUgY29tcG9uZW50ICdcIiArIEpTT04uc3RyaW5naWZ5KGlkKSArIFwiJyBpcyBhbiBpbnN0YW5jZSBvZiAnXCIgKyBjbGFzc05hbWUgKyBcIidcIik7XG59XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5mdW5jdGlvbiBpbnZhbGlkQ2hhbm5lbEV2ZW50KG1lc3NhZ2UsIGV2ZW50TmFtZSwgdHlwZSkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcImludmFsaWQgdHlwZSBmb3IgdGhlIG1lc3NhZ2UgJ1wiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyBcIic6IGV4cGVjdGVkIHR5cGUgJ1wiICsgdHlwZSArIFwiJyBmb3IgZXZlbnQgJ1wiICsgZXZlbnROYW1lICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBpbnZhbGlkIHBhcmFtZXRlciBudW1iZXIgZm9yIGFuIGFjdGlvbiBhZGQgd2l0aCBvbiBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwiaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyB3aGVuIGFkZGluZyBhbiBhY3Rpb24gb24gbWV0aG9kICdcIiArIG1ldGhvZE5hbWUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgd2l0aCBhbiBpZCB0aGF0IGlzIGFscmVhZHkgdXNlZC5cbiAqIEBtZXRob2QgaWRBbHJlYWR5VXNlZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gaWRBbHJlYWR5VXNlZChpZCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBjcmVhdGUgYSBjb21wb25lbnQgd2l0aCB0aGUgaWQgJ1wiICsgaWQgKyBcIicgdGhhdCBpcyBhbHJlYWR5IHVzZWQgYnkgYW5vdGhlciBjb21wb25lbnRcIik7XG59XG5cblxuLypcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVV1aWQoY3VycmVudElkLCBuZXdJZCwgYWxyZWFkeVVzZWQpIHtcbiAgICBpZiAoYWxyZWFkeVVzZWQpIHtcbiAgICAgICAgJGhlbHBlci5nZXRNb25vY28oKS53YXJuaW5nKFwidHJ5IHRvIHVwZGF0ZSBhIGNvbXBvbmVudCBvZiBpZCAnXCIgKyBjdXJyZW50SWQgKyBcIicgd2l0aCB0aGUgbmV3IGlkICdcIiArIG5ld0lkICsgXCInIHRoYXQgaXMgYWxyZWFkeSB1c2VkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byB1cGRhdGUgYSBjb21wb25lbnQgb2YgaWQgJ1wiICsgY3VycmVudElkICsgXCInIHdpdGggdGhlIG5ldyBpZCAnXCIgKyBuZXdJZCArIFwiJ1wiKTtcbiAgICB9XG59XG5cbi8qXG4gKiBUcnkgdG8gY2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCB0aGF0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICogQG1ldGhvZCBpbnZhbGlkVXNlT2ZDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGludmFsaWRVc2VPZkNvbXBvbmVudChpZCkge1xuICAgICRoZWxwZXIuZ2V0TW9ub2NvKCkud2FybmluZyhcInRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBkZXN0cm95ZWQgY29tcG9uZW50ICdcIiArIGlkICsgXCInXCIpO1xufVxuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25zIHRoYXQgd3JpdGUgYSBsb2cuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAY2xhc3MgbW9ub2NvLWxvZ1xuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBBIHByb3BlcnR5IG9mIGEgc2NoZW1hIGlzIHVua25vd24uXG4gKiBAbWV0aG9kIHVua25vd25Qcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgdGhlIHNjaGVtYSBkZWZpbml0aW9uXG4gKi9cbmV4cG9ydHMudW5rbm93blByb3BlcnR5ID0gdW5rbm93blByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpbnZhbGlkUHJvcGVydHlUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHBlcm9wZXR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSB0aGUgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pbnZhbGlkUHJvcGVydHlUeXBlID0gaW52YWxpZFByb3BlcnR5VHlwZTtcblxuXG4vKipcbiAqIEludmFsaWQgdmFsdWUgZm9yIGEgdHlwZSBlbnVtLlxuICogQG1ldGhvZCBpbnZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5pbnZhbGlkRW51bVZhbHVlID0gaW52YWxpZEVudW1WYWx1ZTtcblxuXG4vKipcbiAqIEludmFsaWQgY2xhc3MgbmFtZSBmb3IgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGludmFsaWRDbGFzc05hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBkZWZpbmVkIGJ5IHRoZSBzY2hlbWFcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25zdHJ1Y3Rvck5hbWUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmV4cG9ydHMuaW52YWxpZENsYXNzTmFtZSA9IGludmFsaWRDbGFzc05hbWU7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkuXG4gKiBAbWV0aG9kIG1pc3NpbmdQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLm1pc3NpbmdQcm9wZXJ0eSA9IG1pc3NpbmdQcm9wZXJ0eTtcblxuXG4vKipcbiAqIEEgY2xhc3MgZGVmaW5pdGlvbiBpcyBtaXNzaW5nLlxuICogQG1ldGhvZCBtaXNzaW5nSW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NvdXJjZSBhIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NUb0ltcCB0aGUgY2xhc3MgdG8gaW1wbGVtZW50XG4gKi9cbmV4cG9ydHMubWlzc2luZ0ltcGxlbWVudGF0aW9uID0gbWlzc2luZ0ltcGxlbWVudGF0aW9uO1xuXG5cbi8qKlxuICogSW52YWxpZCB0eXBlIGZvciBhIHByb3BlcnR5IG9mIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVJbXBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eSBhIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGEgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmludmFsaWRUeXBlSW1wID0gaW52YWxpZFR5cGVJbXA7XG5cblxuLyoqXG4gKiBNaXNzaW5nIGEgcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgbWlzc2luZ1Byb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBhIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0cy5taXNzaW5nUHJvcGVydHlJbXAgPSBtaXNzaW5nUHJvcGVydHlJbXA7XG5cblxuLyoqXG4gKiBVbmtvd24gcHJvcGVydHkgZm9yIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5SW1wXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHkgYSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSBhIHNjaGVtYVxuICovXG5leHBvcnRzLnVua25vd25Qcm9wZXJ0eUltcCA9IHVua25vd25Qcm9wZXJ0eUltcDtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkVHlwZURlZmluaXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgYSB0eXBlIGRlZmluaXRpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkVHlwZURlZmluaXRpb24gPSBpbnZhbGlkVHlwZURlZmluaXRpb247XG5cblxuLyoqXG4gKiBJbnZhbGlkIHByb3BlcnR5IHR5cGUuXG4gKiBAbWV0aG9kIGludmFsaWRQcm9wZXJ0eU5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5TmFtZSA9IGludmFsaWRQcm9wZXJ0eU5hbWU7XG5cblxuLyoqXG4gKiBUcnlpbmcgdG8gc2V0IGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICogQG1ldGhvZCByZWFkT25seVByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICovXG5leHBvcnRzLnJlYWRPbmx5UHJvcGVydHkgPSByZWFkT25seVByb3BlcnR5O1xuXG5cbi8qKlxuICogSW52YWxpZCBkb2N1bWVudCBvbiBhIG1vbm9jbyBkYXRhYmFzZSBpbnNlcnQgb3BlcmF0aW9uLlxuICogQG1ldGhvZCBpbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0XG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jIGEgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqL1xuZXhwb3J0cy5pbnZhbGlkRG9jdW1lbnRPbkRiSW5zZXJ0ID0gaW52YWxpZERvY3VtZW50T25EYkluc2VydDtcblxuXG4vKipcbiAqIEludmFsaWQgcHJvcGVydHkgb24gYSBtb25vY28gZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xsZWN0aW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgY29sbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlWYWx1ZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIGV4cGVjdGVkIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFByb3BlcnR5VHlwZU9uRGJVcGRhdGUgPSBpbnZhbGlkUHJvcGVydHlUeXBlT25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIENhbGwgYW4gdW5rbm93biBtZXRob2Qgb2YgYSBjbGFzcy5cbiAqIEBtZXRob2QgdW5rbm93bk1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzSWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqL1xuZXhwb3J0cy51bmtub3duTWV0aG9kID0gdW5rbm93bk1ldGhvZDtcblxuXG4vKipcbiAqIFRyeSB0byBjcmVhdGUgYW4gaW52YWxpZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24uXG4gKiBAbWV0aG9kIGludmFsaWRDb2xsZWN0aW9uTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmludmFsaWRDb2xsZWN0aW9uTmFtZSA9IGludmFsaWRDb2xsZWN0aW9uTmFtZTtcblxuXG4vKipcbiAqIEludmFsaWQgcmVzdWx0IHR5cGUgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRSZXN1bHRUeXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvdCB0aGUgbWV0aG9kXG4gKi9cbmV4cG9ydHMuaW52YWxpZFJlc3VsdFR5cGUgPSBpbnZhbGlkUmVzdWx0VHlwZTtcblxuXG4vKipcbiAqIFVua25vd24gY2xhc3MuXG4gKiBAbWV0aG9kIHVua25vd25Db21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICovXG5leHBvcnRzLnVua25vd25Db21wb25lbnQgPSB1bmtub3duQ29tcG9uZW50O1xuXG5cbi8qKlxuICogVGhlIG1vbm9jbyB3b3JrZmxvdyBoYXMgYmVlbiByZXN0YXJ0ZWQuXG4gKiBAbWV0aG9kIHdvcmtmbG93UmVzdGFydGVkXG4gKi9cbmV4cG9ydHMud29ya2Zsb3dSZXN0YXJ0ZWQgPSB3b3JrZmxvd1Jlc3RhcnRlZDtcblxuXG4vKipcbiAqIEludmFsaWQgcGFyYW1ldGVyIG51bWJlciBmb3IgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGludmFsaWRQYXJhbU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlciA9IGludmFsaWRQYXJhbU51bWJlcjtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZSBwYXJhbWV0ZXJzIGZvciBhIG1ldGhvZC5cbiAqIEBtZXRob2QgaW52YWxpZFBhcmFtVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAqIFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbVR5cGUgPSBpbnZhbGlkUGFyYW1UeXBlO1xuXG5cbi8qKlxuICogQWRkIGEgbW9yZSB0aGFuIG9uZSBiZWhhdmlvciB0byBhIHN0YXRlLlxuICogQG1ldGhvZCBiZWhhdmlvck5vdFVuaXF1ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlTmFtZSBuYW1lIG9mIHRoZSBzdGF0ZVxuICovXG5leHBvcnRzLmJlaGF2aW9yTm90VW5pcXVlID0gYmVoYXZpb3JOb3RVbmlxdWU7XG5cblxuLyoqXG4gKiBDYW4gbm90IGFkZCBhIGJlaGF2aW9yIHdpdGggYW4gaW52YWxpZCBzdGF0ZS5cbiAqIEBtZXRob2QgaW52YWxpZFN0YXRlT25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU3RhdGVPbiA9IGludmFsaWRTdGF0ZU9uO1xuXG5cbi8qKlxuICogVGhlIGNhbGwgdG8gYSByZW1vdmUgc3RhdGUgb2YgdGhlIGJlaGF2aW9yIG1vZHVsZSBpcyBpbnZhbGlkLlxuICogQG1ldGhvZCBpbnZhbGlkU3RhdGVPZmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZU5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0cy5pbnZhbGlkU3RhdGVPZmYgPSBpbnZhbGlkU3RhdGVPZmY7XG5cblxuLyoqXG4gKiBUaGUgbWFzdGVyIHN5c3RlbSBpcyBub3QgZm91bmQuXG4gKiBAbWV0aG9kIG1hc3RlclN5c3RlbU5vdEZvdW5kXG4gKi9cbmV4cG9ydHMubWFzdGVyU3lzdGVtTm90Rm91bmQgPSBtYXN0ZXJTeXN0ZW1Ob3RGb3VuZDtcblxuXG4vKipcbiAqIEludmFsaWQgdHlwZS5cbiAqIEBtZXRob2QgaW52YWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBvZiB0aGUgdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lIGV4cGVjdGVjIHR5cGUgZGVmaW5lZCBieSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuaW52YWxpZFR5cGUgPSBpbnZhbGlkVHlwZTtcblxuXG4vKipcbiAqIFVua25vd24gdHlwZS5cbiAqIEBtZXRob2QgdW5rbm93blR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSB2YWx1ZVxuICovXG5leHBvcnRzLnVua25vd25UeXBlID0gdW5rbm93blR5cGU7XG5cblxuLyoqXG4gKiBBIGNvbXBvbmVudCBoYXMgbm90IGJlZW4gYWxyZWF5IGNyZWF0ZWQuXG4gKiBAbWV0aG9kIGNhbk5vdFlldFZhbGlkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIG9mIHRoZSBjbGFzc1xuICovXG5leHBvcnRzLmNhbk5vdFlldFZhbGlkYXRlID0gY2FuTm90WWV0VmFsaWRhdGU7XG5cblxuLyoqXG4gKiBBIG1lc3NhZ2Ugc2VuZCBieSB0aGUgY2hhbm5lbCBpcyBpbnZhbGlkXG4gKiBAbWV0aG9kIGludmFsaWRDaGFubmVsRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIG1lc3NhZ2Ugc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgZXhwZWN0ZWQgdHlwZVxuICovXG5leHBvcnRzLmludmFsaWRDaGFubmVsRXZlbnQgPSBpbnZhbGlkQ2hhbm5lbEV2ZW50O1xuXG5cbi8qKlxuICogaW52YWxpZCBwYXJhbWV0ZXIgbnVtYmVyIGZvciBhbiBhY3Rpb24gYWRkIHdpdGggb24gbWV0aG9kLlxuICogQG1ldGhvZCBpbnZhbGlkUGFyYW1OdW1iZXJNZXRob2RPblxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICovXG5leHBvcnRzLmludmFsaWRQYXJhbU51bWJlck1ldGhvZE9uID0gaW52YWxpZFBhcmFtTnVtYmVyTWV0aG9kT247XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgd2l0aCBhbiBpZCB0aGF0IGlzIGFscmVhZHkgdXNlZC5cbiAqIEBtZXRob2QgaWRBbHJlYWR5VXNlZFxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5pZEFscmVhZHlVc2VkID0gaWRBbHJlYWR5VXNlZDtcblxuXG4vKipcbiAqIENoYW5nZSB0aGUgaWQgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIHVwZGF0ZVV1aWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW50SWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5ld0lkIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxyZWFkeVVzZWQgbmV3SWQgYWxyZWFkeSB1c2VkXG4gKi9cbmV4cG9ydHMudXBkYXRlVXVpZCA9IHVwZGF0ZVV1aWQ7XG5cblxuLyoqXG4gKiBVbmtvbncgcHJvcGVydHkgb24gYSBtb25vY28gZGF0YWJhc2UgdXBkYXRlIG9wZXJhdGlvbi5cbiAqIEBtZXRob2QgdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy51bmtub3duUHJvcGVydHlPbkRiVXBkYXRlID0gdW5rbm93blByb3BlcnR5T25EYlVwZGF0ZTtcblxuXG4vKipcbiAqIFRyeSB0byBjaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50IHRoYXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gKiBAbWV0aG9kIGludmFsaWRlVXNlT2ZDb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaW52YWxpZFVzZU9mQ29tcG9uZW50ID0gaW52YWxpZFVzZU9mQ29tcG9uZW50OyIsIi8qIFxuICogbW9ub2NvXG4gKiBBIE1vZGVsIGFuZCBhIE5vU1FMIERhdGFiYXNlIGZvciBDb21wb25lbnRzXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgbW9ub2NvIG1ldGFtb2RlbC4gPGJyPlxuICogbW9ub2NvIG1ldGFtb2RlbCBsb2FkcyBzY2hlbWFzIGFuZCB0eXBlcywgYW5hbHl6ZXMgdGhlbSBhbmQgY3JlYXRlcyB0aGUgY29tcG9uZW50IGNsYXNzZXMgYW5kIHJlbGF0ZWQgTW9ub2NvRGF0YWJhc2VDb2xsZWN0aW9ucy5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEBzdWJtb2R1bGUgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLXdvcmtmbG93XG4gKiBAY2xhc3MgbW9ub2NvLW1ldGFtb2RlbFxuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkbG9nID0gcmVxdWlyZSgnLi9sb2cuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkd29ya2Zsb3cgPSByZXF1aXJlKCcuL3dvcmtmbG93LmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIElEID0gJ19pZCcsXG4gICAgTkFNRSA9ICdfbmFtZScsXG4gICAgSU5IRVJJVFMgPSAnX2luaGVyaXQnLFxuICAgIFNDSEVNQSA9ICdfc2NoZW1hJyxcbiAgICBDTEFTUyA9ICdfY2xhc3MnLFxuICAgIENPUkUgPSAnX2NvcmUnLFxuICAgIE1FVEhPRF9UWVBFID0gJ21ldGhvZCcsXG4gICAgRVZFTlRfVFlQRSA9ICdldmVudCcsXG4gICAgUFJPUEVSVFlfVFlQRSA9ICdwcm9wZXJ0eScsXG4gICAgQ09MTEVDVElPTl9UWVBFID0gJ2NvbGxlY3Rpb24nLFxuICAgIGludGVybmFsVHlwZXMgPSBbJ3Byb3BlcnR5JywgJ2NvbGxlY3Rpb24nLCAnbWV0aG9kJywgJ2V2ZW50J10sXG4gICAgZGVmYXVsdFR5cGVzID0gWydib29sZWFuJywgJ3N0cmluZycsICdudW1iZXInLCAnb2JqZWN0JywgJ2Z1bmN0aW9uJywgJ2FycmF5J10sXG4gICAgc3RvcmUgPSB7XG4gICAgICAgIG1ldGFkZWY6IHt9LFxuICAgICAgICBjYXRhbG9nOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2U6IHt9LFxuICAgICAgICBpbmhlcml0YW5jZVRyZWU6IHt9LFxuICAgICAgICBtb2RlbDoge30sXG4gICAgICAgIHN0YXRlczoge30sXG4gICAgICAgIHR5cGU6IHt9LFxuICAgICAgICBpbXBsZW1lbnRhdGlvbjoge31cbiAgICB9O1xuXG5cbi8qIFByaXZhdGUgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG4gKiBAbWV0aG9kIGNyZWF0ZUluaGVyaXRhbmNlVHJlZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCkge1xuICAgIHZhciBpZCA9IG51bGwsXG4gICAgICAgIGZhdGhlcklkID0gbnVsbCxcbiAgICAgICAgbmV3SWQgPSBudWxsO1xuXG4gICAgZm9yIChpZCBpbiBzdG9yZS5pbmhlcml0YW5jZSkge1xuICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW2lkXTtcbiAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXSA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChmYXRoZXJJZCkge1xuICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VUcmVlW2lkXS5wdXNoKGZhdGhlcklkKTtcbiAgICAgICAgICAgIG5ld0lkID0gZmF0aGVySWQ7XG4gICAgICAgICAgICBmYXRoZXJJZCA9IHN0b3JlLmluaGVyaXRhbmNlW25ld0lkXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogRXh0ZW5kIGEgc2NoZW1hIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgaXRzIHBhcmVudC5cbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge3R5cGV9IGlkIGlkIG9mIHRoZSBzY2hlbWEgdG8gZXh0ZW5kXG4gKiBAcmV0dXJuIHtKU09OfSBvYmplY3QgZXh0ZW5kZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBpdHMgcGFyZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleHRlbmQoaWQpIHtcbiAgICB2YXIgc29uRXh0ZW5kID0ge30sXG4gICAgICAgIHNvbiA9IHN0b3JlLmNhdGFsb2dbaWRdLFxuICAgICAgICBhbmNlc3RvcnMgPSBzdG9yZS5pbmhlcml0YW5jZVRyZWVbaWRdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgYW5jZXN0b3IgPSBudWxsLFxuICAgICAgICBwcm9wID0gJyc7XG5cbiAgICBpZiAoYW5jZXN0b3JzKSB7XG4gICAgICAgIGxlbmd0aCA9IGFuY2VzdG9ycy5sZW5ndGg7XG4gICAgICAgIGFuY2VzdG9ycy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhbmNlc3RvciA9IHN0b3JlLmNhdGFsb2dbYW5jZXN0b3JzW2ldXTtcbiAgICAgICAgZm9yIChwcm9wIGluIGFuY2VzdG9yKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5pbmRleE9mKCdfJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzb25FeHRlbmRbcHJvcF0gPSBhbmNlc3Rvcltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gc29uKSB7XG4gICAgICAgIHNvbkV4dGVuZFtwcm9wXSA9IHNvbltwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIHNvbkV4dGVuZDtcbn1cblxuXG4vKlxuICogQWRkIHRoZSBtb2RlbHMuXG4gKiBAbWV0aG9kIGNyZWF0ZU1vZGVsXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVNb2RlbCgpIHtcbiAgICB2YXIgaWQgPSAnJztcbiAgICBmb3IgKGlkIGluIHN0b3JlLmNhdGFsb2cpIHtcbiAgICAgICAgc3RvcmUubW9kZWxbaWRdID0gZXh0ZW5kKGlkKTtcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYWxsIHRoZSBzY2hlbWEgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGVpciBzY2hlbWFzLlxuICogQG1ldGhvZCBjaGVja0ltcGxlbWVudGF0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0ltcGxlbWVudGF0aW9uKCkge1xuICAgIHZhciBpZCA9ICcnLFxuICAgICAgICBjbGFzc0RlZiA9IG51bGwsXG4gICAgICAgIGNsYXNzSW1wID0gJyc7XG5cbiAgICBmb3IgKGlkIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIGNsYXNzRGVmID0gc3RvcmUubW9kZWxbaWRdO1xuICAgICAgICBpZiAoY2xhc3NEZWYgJiYgdHlwZW9mIGNsYXNzRGVmW1NDSEVNQV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjbGFzc0ltcCA9IHN0b3JlLm1vZGVsW2NsYXNzRGVmW1NDSEVNQV1dO1xuICAgICAgICAgICAgaWYgKGNsYXNzSW1wKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5pbXBsZW1lbnRhdGlvbltjbGFzc0RlZltJRF1dID0gY2xhc3NJbXBbSURdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbG9nLm1pc3NpbmdJbXBsZW1lbnRhdGlvbihjbGFzc0RlZltTQ0hFTUFdLCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgc2NoZW1hIGlzIGNvbXBsaWFudCB3aXRoIGl0cyBzY2hlbWEuXG4gKiBAbWV0aG9kIGNoZWNrU3RhdGVzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1N0YXRlcygpIHtcbiAgICB2YXIgaWQgPSAnJyxcbiAgICAgICAgY2xhc3NEZWYgPSBudWxsLFxuICAgICAgICB0eXBlID0gJycsXG4gICAgICAgIHN0YXRlcyA9IFtdLFxuICAgICAgICBhdHRyaWJ1dGUgPSAnJztcblxuICAgIGZvciAoaWQgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgc3RhdGVzID0gW107XG4gICAgICAgIGNsYXNzRGVmID0gc3RvcmUubW9kZWxbaWRdO1xuICAgICAgICBpZiAoY2xhc3NEZWYgJiYgdHlwZW9mIGNsYXNzRGVmW1NDSEVNQV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGF0dHJpYnV0ZSBpbiBjbGFzc0RlZikge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBjbGFzc0RlZlthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuaW5kZXhPZignXycpICE9PSAwICYmIGludGVybmFsVHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuc3RhdGVzW2lkXSA9IHN0YXRlcztcbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggaXRzIHNjaGVtYS5cbiAqIEBtZXRob2QgY2hlY2tJbXBcbiAqIEBwYXJhbSB7SlNPTn0gY2xhc3NEZWYgc2NoZW1hIHRvIHRlc3QgXG4gKiBAcGFyYW0ge0pTT059IGNsYXNzSW1wIHNjaGVtYSB0byB2YWxpZGF0ZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tJbXAoY2xhc3NEZWYsIGNsYXNzSW1wKSB7XG4gICAgdmFyIHByb3BlcnR5ID0gJycsXG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICBmb3IgKHByb3BlcnR5IGluIGNsYXNzSW1wKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPT0gSUQgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBOQU1FICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gSU5IRVJJVFMgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBTQ0hFTUEgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBDTEFTUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENPUkUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZbcHJvcGVydHldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gY2xhc3NEZWZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tTY2hlbWEodmFsdWUsIGNsYXNzSW1wW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZUltcChwcm9wZXJ0eSwgY2xhc3NEZWZbSURdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsb2cubWlzc2luZ1Byb3BlcnR5SW1wKHByb3BlcnR5LCBjbGFzc0RlZltJRF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIGFsbCBwcm9wZXJ0aWVzIGFyZSB0aGVyZVxuICAgIGZvciAocHJvcGVydHkgaW4gY2xhc3NEZWYpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBJRCAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IE5BTUUgJiZcbiAgICAgICAgICAgIHByb3BlcnR5ICE9PSBJTkhFUklUUyAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IFNDSEVNQSAmJlxuICAgICAgICAgICAgcHJvcGVydHkgIT09IENMQVNTICYmXG4gICAgICAgICAgICBwcm9wZXJ0eSAhPT0gQ09SRSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc0ltcFtwcm9wZXJ0eV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duUHJvcGVydHlJbXAocHJvcGVydHksIGNsYXNzRGVmW0lEXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIFRlc3QgaWYgYSB2YWx1ZSBoYXMgdGhlIGNvcnJlY3QgdHlwZS5cbiAqIEBtZXRob2QgY2hlY2tTY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1NjaGVtYSh2YWx1ZSwgdHlwZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuICAgIGlmIChoYXNUeXBlKHR5cGUsICdzdHJpbmcnKSAmJiBkZWZhdWx0VHlwZXMuaW5kZXhPZih0eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gaGFzVHlwZSh2YWx1ZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBUZXN0IGlmIGEgdmFsdWUgaGFzIGNvcnJlY3QgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGNoZWNrQ3VzdG9tU2NoZW1hXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIHZhbHVlIHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlTmFtZSB0eXBlIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIHZhbHVlIGhhcyB0aGUgY29ycmVjdCB0eXBlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja0N1c3RvbVNjaGVtYSh2YWx1ZSwgdHlwZU5hbWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgdHlwZURlZiA9IHN0b3JlLnR5cGVbdHlwZU5hbWVdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgaWYgKCFoYXNUeXBlKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlRGVmLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkU2NoZW1hKHZhbHVlW2ldLCB0eXBlRGVmLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkVHlwZSh2YWx1ZVtpXSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZSh0eXBlRGVmLnNjaGVtYSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzVmFsaWRTY2hlbWEodmFsdWUsIHR5cGVEZWYuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpc1ZhbGlkVHlwZSh2YWx1ZSwgdHlwZURlZi50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEluaXQgdGhlIERhdGFiYXNlIHN0dWN0dXJlLlxuICogQG1ldGhvZCBpbml0RGJTdHJ1Y3R1cmVcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXREYlN0cnVjdHVyZSgpIHtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvU2NoZW1hJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb0V4dGVuZGVkU2NoZW1hJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb0NsYXNzSW5mbycpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29CZWhhdmlvcicpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29TdGF0ZScpO1xuICAgICRkYi5jb2xsZWN0aW9uKCdNb25vY29UeXBlJyk7XG4gICAgJGRiLmNvbGxlY3Rpb24oJ01vbm9jb01lc3NhZ2UnKTtcbiAgICAkZGIuY29sbGVjdGlvbignTW9ub2NvQ2hhbm5lbCcpO1xufVxuXG5cbi8qXG4gKiBDcmVhdGUgdGhlIERhdGFiYXNlIHN0cnVjdHVyZSAoaS5lLiBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb24pLlxuICogQG1ldGhvZCBjcmVhdGVEYlN0cnVjdHVyZVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGJTdHJ1Y3R1cmUoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBtb2RlbERlZiA9IHt9LFxuICAgICAgICB0eXBlTmFtZSA9ICcnO1xuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUuY2F0YWxvZykge1xuICAgICAgICBtb2RlbERlZiA9IHN0b3JlLmNhdGFsb2dbbW9kZWxOYW1lXTtcbiAgICAgICAgJGRiLk1vbm9jb1NjaGVtYS5pbnNlcnQobW9kZWxEZWYpO1xuICAgICAgICBpZiAodHlwZW9mIG1vZGVsRGVmW1NDSEVNQV0gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgJGRiW21vZGVsRGVmW0lEXV0gPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAkZGIuY29sbGVjdGlvbihtb2RlbERlZltJRF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5tb2RlbFttb2RlbE5hbWVdO1xuICAgICAgICAkZGIuTW9ub2NvRXh0ZW5kZWRTY2hlbWEuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG5cbiAgICBmb3IgKHR5cGVOYW1lIGluIHN0b3JlLnR5cGUpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS50eXBlW3R5cGVOYW1lXTtcbiAgICAgICAgbW9kZWxEZWYuX2lkID0gbW9kZWxEZWYubmFtZTtcbiAgICAgICAgJGRiLk1vbm9jb1R5cGUuaW5zZXJ0KG1vZGVsRGVmKTtcbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIGNsYXNzZXMgb2YgdGhlIG1vZGVsLlxuICogQG1ldGhvZCBjcmVhdGVDbGFzc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3MoKSB7XG4gICAgdmFyIG1vZGVsTmFtZSA9ICcnLFxuICAgICAgICBtb2RlbERlZiA9IHt9O1xuXG4gICAgZm9yIChtb2RlbE5hbWUgaW4gc3RvcmUubW9kZWwpIHtcbiAgICAgICAgbW9kZWxEZWYgPSBzdG9yZS5tb2RlbFttb2RlbE5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIG1vZGVsRGVmW1NDSEVNQV0gIT09ICd1bmRlZmluZWQnICYmIG1vZGVsRGVmW0NMQVNTXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICRjb21wb25lbnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLypcbiAqIENyZWF0ZSBhbGwgdGhlIENsYXNzSW5mbyBvZiB0aGUgbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZUNsYXNzSW5mb1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2xhc3NJbmZvKCkge1xuICAgIHZhciBtb2RlbE5hbWUgPSAnJyxcbiAgICAgICAgbW9kZWxEZWYgPSB7fSxcbiAgICAgICAgaWQgPSAnJztcblxuICAgIGZvciAobW9kZWxOYW1lIGluIHN0b3JlLm1vZGVsKSB7XG4gICAgICAgIG1vZGVsRGVmID0gc3RvcmUubW9kZWxbbW9kZWxOYW1lXTtcbiAgICAgICAgaWQgPSBtb2RlbERlZi5faWQgKyAnSW5mbyc7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIG1vZGVsRGVmW1NDSEVNQV0gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBtb2RlbERlZltDTEFTU10gIT09IGZhbHNlICYmXG4gICAgICAgICAgICAhJGNvbXBvbmVudC5nZXQoaWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICRkYi5Nb25vY29DbGFzc0luZm8uaW5zZXJ0KHtcbiAgICAgICAgICAgICAgICBcIl9pZFwiOiBpZCxcbiAgICAgICAgICAgICAgICBcIm1ldGFtb2RlbFwiOiBzdG9yZS5tb2RlbFttb2RlbERlZltTQ0hFTUFdXSxcbiAgICAgICAgICAgICAgICBcIm1vZGVsXCI6IG1vZGVsRGVmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgcmVhbCBuYW1lIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0IC8gdHlwZS5cbiAqIEBtZXRob2QgZ2V0UmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ30gcmVhbCBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgnQCcsICcnKTtcbn1cblxuXG4vKlxuICogSXMgdGhlIHZhbHVlIGEgY3VzdG9tIHR5cGUuXG4gKiBAbWV0aG9kIGlzQ3VzdG9tVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNDdXN0b21UeXBlKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGhhc1R5cGUodmFsdWUsICdzdHJpbmcnKSAmJlxuICAgICAgICBkZWZhdWx0VHlwZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmXG4gICAgICAgICFpc1JlZmVyZW5jZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBJcyB0aGUgdmFsdWUgYSByZWZlcmVuY2UuXG4gKiBAbWV0aG9kIGlzUmVmZXJlbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZmVyZW5jZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKCdAJykgIT09IC0xO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIHJlYWwgdHlwZSBvZiBhIHZhbHVlLlxuICogQG1ldGhvZCBnZXRUeXBlXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGUgb2YgdGhlIHZhbHVlXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRUeXBlKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSAnJztcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0eXBlID0gJ2FycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xufVxuXG5cbi8qXG4gKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0LlxuICogQG1ldGhvZCBnZXRDbGFzc05hbWVcbiAqIEBwYXJhbSB7dHlwZX0gb2JqIG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSB2YWxpZCBlbnVtIHZhbHVlLlxuICogQG1ldGhvZCBpc1ZhbGlkRW51bVZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXl9IGVudW1WYWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVudW1WYWx1ZSh2YWx1ZSwgZW51bVZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1WYWx1ZS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGEgdmFsdWUgaGFzIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAqIEBwYXJhbSB7dHlwZX0gdmFsdWVcbiAqIEBwYXJhbSB7dHlwZX0gdHlwZVxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaXMgdmFsdWUgaGFzIHR5cGUgJ3R5cGUnXG4gKi9cbmZ1bmN0aW9uIGhhc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICByZXN1bHQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGUgPT09IHR5cGVvZiB2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBoYXMgYSBzcGVjaWZpYyB0eXBlLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0eXBlIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaGFzIGZvciB0eXBlIHR5cGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tUeXBlKG5hbWUsIGlkLCB0eXBlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRTY2hlbWEgPSBzdG9yZS5tb2RlbFtpZF0sXG4gICAgICAgIGF0dHJpYnV0ZVR5cGUgPSAnJztcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEpIHtcbiAgICAgICAgYXR0cmlidXRlVHlwZSA9IGNvbXBvbmVudFNjaGVtYVtuYW1lXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qIFB1YmxpYyBtZXRob2RzICovXG5cblxuLypcbiAqIEFkZCBhIG5ldyBzY2hlbWEuXG4gKiBAbWV0aG9kIHNjaGVtYVxuICogQHBhcmFtIHtKU09OfSBpbXBvcnRlZFNjaGVtYSBzY2hlbWEgdG8gYWRkXG4gKi9cbmZ1bmN0aW9uIHNjaGVtYShpbXBvcnRlZFNjaGVtYSkge1xuICAgIHZhciBpZCA9IGltcG9ydGVkU2NoZW1hW0lEXSxcbiAgICAgICAgaW5oZXJpdCA9IGltcG9ydGVkU2NoZW1hW0lOSEVSSVRTXSxcbiAgICAgICAgbmFtZSA9IGltcG9ydGVkU2NoZW1hW05BTUVdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIC8vIGlmIG5vIGlkLCBpdCB3aWxsIGJlIHRoZSBuYW1lIGJ5IGRlZmF1bHRcbiAgICBpZiAoaGFzVHlwZShpZCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIGlkID0gbmFtZTtcbiAgICAgICAgaW1wb3J0ZWRTY2hlbWFbSURdID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkU2NoZW1hLCBzdG9yZS5tZXRhZGVmLnNjaGVtYSwgZmFsc2UpKSB7XG5cbiAgICAgICAgc3RvcmUuY2F0YWxvZ1tpZF0gPSBpbXBvcnRlZFNjaGVtYTtcbiAgICAgICAgaWYgKGluaGVyaXQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGluaGVyaXQubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuaW5oZXJpdGFuY2VbaWRdID0gaW5oZXJpdFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICR3b3JrZmxvdy5zdG9wKHtcbiAgICAgICAgICAgIFwiZXJyb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcInRoZSBzY2hlbWEgJ1wiICsgSlNPTi5zdHJpbmdpZnkoaW1wb3J0ZWRTY2hlbWEpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAbWV0aG9kIHR5cGVcbiAqIEBwYXJhbSB7SlNPTn0gaW1wb3J0ZWRUeXBlXG4gKi9cbmZ1bmN0aW9uIHR5cGUoaW1wb3J0ZWRUeXBlKSB7XG4gICAgdmFyIG5hbWUgPSBpbXBvcnRlZFR5cGUubmFtZTtcblxuICAgIC8vIGNoZWNrIGlmIHR5cGUgaXMgY29tcGxpYW50IHdpdGggdGhlIG1ldGEgbWV0YSBtb2RlbFxuICAgIGlmIChpc1ZhbGlkT2JqZWN0KGltcG9ydGVkVHlwZSwgc3RvcmUubWV0YWRlZi50eXBlKSkge1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgc3RvcmUudHlwZVtuYW1lXSA9IGltcG9ydGVkVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGVEZWZpbml0aW9uKGltcG9ydGVkVHlwZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkd29ya2Zsb3cuc3RvcCh7XG4gICAgICAgICAgICBcImVycm9yXCI6IHRydWUsXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJ0aGUgdHlwZSAnXCIgKyBKU09OLnN0cmluZ2lmeShpbXBvcnRlZFR5cGUpICsgXCInIGlzIG5vdCB2YWxpZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKlxuICogSW5pdCB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBpbml0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBzdG9yZS5tZXRhZGVmID0ge1xuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIFwiX2lkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfbmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2luaGVyaXRcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBbXCJzdHJpbmdcIl0sXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIl9zY2hlbWFcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJfY2xhc3NcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiX2NvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICBcIm1hbmRhdG9yeVwiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVtYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogW1wic3RyaW5nXCJdLFxuICAgICAgICAgICAgICAgIFwibWFuZGF0b3J5XCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICAgICAgICAgICAgXCJtYW5kYXRvcnlcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcbiAgICBpbml0RGJTdHJ1Y3R1cmUoKTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzdG9yZSA9IHtcbiAgICAgICAgY2F0YWxvZzoge30sXG4gICAgICAgIGluaGVyaXRhbmNlOiB7fSxcbiAgICAgICAgaW5oZXJpdGFuY2VUcmVlOiB7fSxcbiAgICAgICAgbW9kZWw6IHt9LFxuICAgICAgICBzdGF0ZXM6IHt9LFxuICAgICAgICB0eXBlOiB7fSxcbiAgICAgICAgaW1wbGVtZW50YXRpb246IHt9XG4gICAgfTtcbn1cblxuXG4vKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgY3JlYXRlSW5oZXJpdGFuY2VUcmVlKCk7XG4gICAgY3JlYXRlTW9kZWwoKTtcbiAgICBjaGVja0ltcGxlbWVudGF0aW9uKCk7XG4gICAgY2hlY2tTdGF0ZXMoKTtcbiAgICBjcmVhdGVEYlN0cnVjdHVyZSgpO1xuICAgIGNyZWF0ZUNsYXNzKCk7XG4gICAgY3JlYXRlQ2xhc3NJbmZvKCk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGFuIGV2ZW50LlxuICogQG1ldGhvZCBpc0V2ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnQobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBFVkVOVF9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBwcm9wZXJ0eS5cbiAqIEBtZXRob2QgaXNQcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGlzUHJvcGVydHkobmFtZSwgaWQpIHtcbiAgICByZXR1cm4gY2hlY2tUeXBlKG5hbWUsIGlkLCBQUk9QRVJUWV9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYSBjb2xsZWN0aW9uLlxuICogQG1ldGhvZCBpc0NvbGxlY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBhdHRyaWJ1dGUgaXMgYSBjb2xsZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIGlzQ29sbGVjdGlvbihuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIENPTExFQ1RJT05fVFlQRSk7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5mdW5jdGlvbiBpc01ldGhvZChuYW1lLCBpZCkge1xuICAgIHJldHVybiBjaGVja1R5cGUobmFtZSwgaWQsIE1FVEhPRF9UWVBFKTtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICogQG1ldGhvZCBpc1ZhbGlkU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBuYW1lIGlzIGEgY29ycmVjdCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU3RhdGUobmFtZSwgaWQpIHtcbiAgICB2YXIgcmVzdWx0ID0gZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudFNjaGVtYSA9IHN0b3JlLm1vZGVsW2lkXSxcbiAgICAgICAgc3RhdGUgPSB7fTtcblxuICAgIGlmIChjb21wb25lbnRTY2hlbWEgJiYgY29tcG9uZW50U2NoZW1hW1NDSEVNQV0pIHtcbiAgICAgICAgY29tcG9uZW50U2NoZW1hID0gc3RvcmUubW9kZWxbY29tcG9uZW50U2NoZW1hW1NDSEVNQV1dO1xuICAgIH1cbiAgICBzdGF0ZSA9IHN0b3JlLnN0YXRlc1tjb21wb25lbnRTY2hlbWFbSURdXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICByZXN1bHQgPSBzdGF0ZS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGNvbXBsaWFudCB3aXRoIGEgdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZFR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVOYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHR5cGVcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZFR5cGUodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBfY2hlY2tSZWZlcmVuY2UodmFsdWUsIHR5cGVOYW1lKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHR5cGVSZWYgPSBnZXRSZWZlcmVuY2UodHlwZU5hbWUpO1xuICAgICAgICBpZiAoaGFzVHlwZSh2YWx1ZSwgJ3N0cmluZycpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICRjb21wb25lbnQuZ2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKHZhbHVlKSAhPT0gdHlwZVJlZikge1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZSh2YWx1ZSwgdHlwZU5hbWUucmVwbGFjZSgnQCcsICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNUeXBlKHR5cGVOYW1lLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlTmFtZSk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tDdXN0b21TY2hlbWEodmFsdWUsIHR5cGVOYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXNSZWZlcmVuY2UodHlwZU5hbWUpOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9jaGVja1JlZmVyZW5jZSh2YWx1ZSwgdHlwZU5hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBoYXNUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAkbG9nLmludmFsaWRUeXBlKHZhbHVlLCB0eXBlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIGVudW0gdHlwZS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRW51bSh2YWx1ZSwgc2NoZW1hKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICBpZiAoaXNSZWZlcmVuY2Uoc2NoZW1hLnR5cGUpKSB7XG4gICAgICAgIHJlc3VsdCA9ICRjb21wb25lbnQuaXNJbnN0YW5jZU9mKCRjb21wb25lbnQuZ2V0KHZhbHVlKSwgZ2V0UmVmZXJlbmNlKHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gKGhhc1R5cGUodmFsdWUsIHNjaGVtYS50eXBlKSkgJiYgc2NoZW1hLnZhbHVlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZEVudW1WYWx1ZSh2YWx1ZSwgc2NoZW1hLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogQ2hlY2sgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogVXNlIGl0IHRvIHRlc3QgaWYgYSBzY2hlbWEgaXMgY29tcGxpYW50IHdpdGggYSBzY2hlbWFcbiAqIGl0IGlzIHN1cHBvc2VkIHRvIHZhbGlkYXRlLlxuICogQG1ldGhvZCBpc1ZhbGlkU2NoZW1hXG4gKiBAcGFyYW0ge0pTT059IG9iamVjdFxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkU2NoZW1hKG9iamVjdCwgc2NoZW1hKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9ICcnLFxuICAgICAgICBmaWVsZCA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIG1hbmRhdG9yeSA9IHRydWUsXG4gICAgICAgIHR5cGVTY2hlbWEgPSAnJyxcbiAgICAgICAgdHlwZVJlZiA9ICcnLFxuICAgICAgICByZWFsVHlwZSA9ICcnLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMDtcblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZSBvZiB0aGUgcmVmZXJlbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFJlZmVyZW5jZSgpIHtcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlLFxuICAgICAgICAgICAgZW51bVZhbHVlID0gW107XG5cbiAgICAgICAgdHlwZVJlZiA9IGdldFJlZmVyZW5jZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgdHlwZVJlZiA9IG9iamVjdFt0eXBlUmVmXTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlUmVmKSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlLnR5cGVbdHlwZVJlZl0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUudHlwZVt0eXBlUmVmXS5zY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHN0b3JlLnR5cGVbdHlwZVJlZl0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCBzdG9yZS50eXBlW3R5cGVSZWZdLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGVudW1WYWx1ZSA9IHN0b3JlLnR5cGVbdHlwZVJlZl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnVtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkRW51bVZhbHVlKGZpZWxkLCBlbnVtVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZVJlZiA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBBcnJheS5pc0FycmF5KGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVmZXJlbmNlKHR5cGVSZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBoYXNUeXBlKGZpZWxkLCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGhhc1R5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZCwgdHlwZVJlZiwgZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaXNWYWxpZFR5cGUoKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgICAgICByZWFsVHlwZSA9IGdldFR5cGUodHlwZVNjaGVtYSk7XG4gICAgICAgIHN3aXRjaCAocmVhbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZShyZWFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGZpZWxkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRTY2hlbWEoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZVNjaGVtYVswXV0uc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzVHlwZShmaWVsZFtpXSwgdHlwZVNjaGVtYVswXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGRbaV0sIHR5cGVTY2hlbWFbMF0sIGZpZWxkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIC8vIHR5cGVcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgZmllbGQgPSBvYmplY3RbZmllbGROYW1lXTtcblxuICAgICAgICBpZiAoaGFzVHlwZShzY2hlbWFbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLnVua25vd25Qcm9wZXJ0eShmaWVsZE5hbWUsIHNjaGVtYSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0eXBlU2NoZW1hID0gc2NoZW1hW2ZpZWxkTmFtZV0udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFR5cGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1hbmRhdG9yeVxuICAgIGZvciAoZmllbGROYW1lIGluIHNjaGVtYSkge1xuICAgICAgICBmaWVsZCA9IHNjaGVtYVtmaWVsZE5hbWVdO1xuICAgICAgICBtYW5kYXRvcnkgPSBmaWVsZC5tYW5kYXRvcnk7XG4gICAgICAgIGlmIChtYW5kYXRvcnkgPT09IHRydWUgJiYgaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICAkbG9nLm1pc3NpbmdQcm9wZXJ0eShmaWVsZE5hbWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYS5cbiAqIFVzZSBpdCB0byB0ZXN0IGlmIHRoZSBjb25zdHJ1Y3RvciBvZiBhbiBvYmplY3QgaXMgY29tcGxpYW50XG4gKiB3aXRoIHRoZSBkZWZpbml0aW9uIG9mIHRoZSBjbGFzcy5cbiAqIEBtZXRob2QgaXNWYWxpZE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtCb29sZWFufSBzdHJpY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xlYW5SZWZcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaXMgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3Qob2JqZWN0LCBzY2hlbWEsIHN0cmljdCwgY2xlYW5SZWYpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgdHlwZVNjaGVtYSA9ICcnLFxuICAgICAgICB0eXBlUmVmID0gJycsXG4gICAgICAgIHJlYWxUeXBlID0gJycsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgaWYgKGhhc1R5cGUoc3RyaWN0LCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgc3RyaWN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVHlwZShjbGVhblJlZiwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHN0cmljdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ2hlY2sgaWYgYSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCBhIGN1c3RvbSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgY3VzdG9tIHR5cGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkQ3VzdG9tVHlwZShmaWVsZCwgdHlwZVNjaGVtYSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IHRydWUsXG4gICAgICAgICAgICByZWFsVHlwZSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gc3RvcmUudHlwZVt0eXBlU2NoZW1hXTtcbiAgICAgICAgaWYgKHJlYWxUeXBlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICFoYXNUeXBlKHJlYWxUeXBlLnNjaGVtYSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgcmVhbFR5cGUuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAhaGFzVHlwZShyZWFsVHlwZS52YWx1ZSwgJ3VuZGVmaW5lZCcpOlxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZEVudW0oZmllbGQsIHJlYWxUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRUeXBlKGZpZWxkLCByZWFsVHlwZS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBhIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdGhlIGZpZWxkIGlzIGNvbXBsaWFudCB3aXRoIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc1ZhbGlkUmVmZXJlbmNlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIGNvbXAgPSBudWxsLFxuICAgICAgICAgICAgaXNDb21wb25lbnQgPSBmYWxzZTtcblxuICAgICAgICB0eXBlUmVmID0gZ2V0UmVmZXJlbmNlKHR5cGVTY2hlbWEpO1xuICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQuaWQpIHtcbiAgICAgICAgICAgIGNvbXAgPSBmaWVsZDtcbiAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAgPSAkY29tcG9uZW50LmdldChmaWVsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc1R5cGUoY29tcCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKGNvbXApICE9PSB0eXBlUmVmKSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFR5cGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wb25lbnQgJiYgY2xlYW5SZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkTmFtZV0gPSBjb21wLmlkKCk7IC8vIHN0b3JlIHRoZSBpZCBpbnN0ZWFkIHRoZSBmdWxsIG9iamVjdCBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGVmYXVsdCB2YWx1ZSBvZiBhbiBvYmplY3QgKHt9IG9yIG51bGwpXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChoYXNUeXBlKGZpZWxkLCAnb2JqZWN0JykgJiYgZmllbGQgIT09IG51bGwgJiYgT2JqZWN0LmtleXMoZmllbGQpLmxlbmd0aCk6XG4gICAgICAgICAgICAgICAgY2FzZSBoYXNUeXBlKGZpZWxkLCAnc3RyaW5nJyk6XG4gICAgICAgICAgICAgICAgICAgICRsb2cuY2FuTm90WWV0VmFsaWRhdGUoZmllbGQsIHR5cGVSZWYpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIENoZWNrIGlmIGEgZmllbGQgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRoZSBmaWVsZCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2lzVmFsaWRUeXBlKGZpZWxkLCB0eXBlU2NoZW1hKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVBcnJheSA9ICcnO1xuXG4gICAgICAgIHJlYWxUeXBlID0gZ2V0VHlwZSh0eXBlU2NoZW1hKTtcbiAgICAgICAgc3dpdGNoIChyZWFsVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXN0b21UeXBlKHJlYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZE9iamVjdChmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVTY2hlbWEgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkKSAhPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZE5hbWUsIHR5cGVTY2hlbWEsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VHlwZShmaWVsZCkgIT09IHR5cGVTY2hlbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQcm9wZXJ0eVR5cGUoZmllbGROYW1lLCB0eXBlU2NoZW1hLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBmaWVsZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheSA9IHR5cGVTY2hlbWFbMF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tVHlwZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWRPYmplY3QoZmllbGRbaV0sIHN0b3JlLnR5cGVbdHlwZUFycmF5XS5zY2hlbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVmZXJlbmNlKHR5cGVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFR5cGUoZmllbGRbaV0pICE9PSB0eXBlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFByb3BlcnR5VHlwZShmaWVsZFtpXSwgdHlwZUFycmF5LCBmaWVsZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRUeXBlKGZpZWxkW2ldKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhc2Ugb2YgYW4gaW1wb3J0IG9mIGEgc3lzdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xhc3NOYW1lKCRjb21wb25lbnQuZ2V0KGZpZWxkW2ldKSkgIT09IGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkQ2xhc3NOYW1lKEpTT04uc3RyaW5naWZ5KGZpZWxkW2ldKSwgZ2V0UmVmZXJlbmNlKHR5cGVBcnJheSksIGdldENsYXNzTmFtZShmaWVsZFtpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRDbGFzc05hbWUoZmllbGRbaV0pICE9PSBnZXRSZWZlcmVuY2UodHlwZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZENsYXNzTmFtZShKU09OLnN0cmluZ2lmeShmaWVsZFtpXSksIGdldFJlZmVyZW5jZSh0eXBlQXJyYXkpLCBnZXRDbGFzc05hbWUoZmllbGRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGVhblJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXSA9IGZpZWxkW2ldLmlkKCk7IC8vIHN0b3JlIHRoZSBpZCBpbnN0ZWFkIHRoZSBmdWxsIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkVHlwZShmaWVsZCwgJ2FycmF5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy51bmtub3duVHlwZShmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG5cbiAgICAvLyB0eXBlXG4gICAgZm9yIChmaWVsZE5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICAgIGZpZWxkID0gb2JqZWN0W2ZpZWxkTmFtZV07XG5cbiAgICAgICAgaWYgKCFoYXNUeXBlKHNjaGVtYVtmaWVsZE5hbWVdLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgIHR5cGVTY2hlbWEgPSBzY2hlbWFbZmllbGROYW1lXS50eXBlO1xuXG4gICAgICAgICAgICAvLyBjYXMgb2YgX2lkXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lID09PSAnX2lkJykge1xuICAgICAgICAgICAgICAgIHR5cGVTY2hlbWEgPSAnc3RyaW5nJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgICAgICRsb2cudW5rbm93blByb3BlcnR5KGZpZWxkTmFtZSwgc2NoZW1hKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIGlzQ3VzdG9tVHlwZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZEN1c3RvbVR5cGUoZmllbGQsIHR5cGVTY2hlbWEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBpc1JlZmVyZW5jZSh0eXBlU2NoZW1hKTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfaXNWYWxpZFJlZmVyZW5jZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkVHlwZShmaWVsZCwgdHlwZVNjaGVtYSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYW5kYXRvcnlcbiAgICBmb3IgKGZpZWxkTmFtZSBpbiBzY2hlbWEpIHtcbiAgICAgICAgZmllbGQgPSBzY2hlbWFbZmllbGROYW1lXTtcbiAgICAgICAgbWFuZGF0b3J5ID0gZmllbGQubWFuZGF0b3J5O1xuICAgICAgICBpZiAoaGFzVHlwZShvYmplY3RbZmllbGROYW1lXSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5taXNzaW5nUHJvcGVydHkoZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIFByZXBhcmUgdGhlIG9iamVjdCBpbiBvcmRlciB0byBiZSBjb21wbGlhbnQgd2l0aCB0aGUgc2NoZW1hLlxuICogQG1ldGhvZCBwcmVwYXJlT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVPYmplY3Qob2JqZWN0LCBzY2hlbWEpIHtcbiAgICB2YXIgZmllbGROYW1lID0gJycsXG4gICAgICAgIGZpZWxkID0gbnVsbCxcbiAgICAgICAgbWFuZGF0b3J5ID0gdHJ1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG5cbiAgICAvLyBtYW5kYXRvcnkgJiBkZWZhdWx0IHZhbHVlXG4gICAgZm9yIChmaWVsZE5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGZpZWxkID0gc2NoZW1hW2ZpZWxkTmFtZV07XG4gICAgICAgIG1hbmRhdG9yeSA9IGZpZWxkLm1hbmRhdG9yeTtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gZmllbGQuZGVmYXVsdDtcbiAgICAgICAgaWYgKGhhc1R5cGUob2JqZWN0W2ZpZWxkTmFtZV0sICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSA9PT0gZmFsc2UgJiYgIWhhc1R5cGUoZGVmYXVsdFZhbHVlLCAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgICAgICBvYmplY3RbZmllbGROYW1lXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKlxuICogR2V0IGEgc2NoZW1hLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBzY2hlbWFcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHN0b3JlLm1vZGVsW2lkXSkge1xuICAgICAgICByZXN1bHQgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsLlxuICogQG1ldGhvZCBnZXRNZXRhRGVmXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtZXRhZGVmaW5pdGlvbiBvZiB0aGUgbWV0YW1vZGVsXG4gKi9cbmZ1bmN0aW9uIGdldE1ldGFEZWYoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHN0b3JlLm1ldGFkZWYuc2NoZW1hO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBvZiB0aGUgc2NoZW1hXG4gKiBAcmV0dXJuIHtBcnJheX0gaWQgb2YgdGhlIHBhcmVudHNcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50cyhpZCkge1xuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgbW9kZWwgPSBudWxsO1xuXG4gICAgbW9kZWwgPSBzdG9yZS5tb2RlbFtpZF07XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIHJlc3VsdCA9IG1vZGVsW0lOSEVSSVRTXTtcbiAgICB9XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5mdW5jdGlvbiBpbmhlcml0RnJvbShuYW1lLCBwYXJlbnROYW1lKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICBwYXJlbnRzID0gW10sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgLypcbiAgICAgKiBcbiAgICAgKiBDaGVjayBpZiBhIGNsYXNzIGluaGVyaXRzIGZyb20gYW5vdGhlciBvbmVcbiAgICAgKiBAbWV0aG9kIF9zZWFyY2hQYXJlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIG5hbWUgb2YgdGhlIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFuY2VzdG9yTmFtZSBvZiB0aGUgcGFyZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGNvbXBvbmVudCBpbmhlcml0IGZyb20gdGhlIHNwZWNpZmljIGNsYXNzIG5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9zZWFyY2hQYXJlbnQoY2xhc3NOYW1lLCBhbmNlc3Rvck5hbWUpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgICBwYXJlbnRzID0gZ2V0UGFyZW50cyhjbGFzc05hbWUpO1xuICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmluZGV4T2YoYW5jZXN0b3JOYW1lKSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGlzQW5jZXN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBbmNlc3RvciA9IF9zZWFyY2hQYXJlbnQocGFyZW50c1tpXSwgYW5jZXN0b3JOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQW5jZXN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FuY2VzdG9yO1xuICAgIH1cblxuICAgIHBhcmVudHMgPSBnZXRQYXJlbnRzKG5hbWUpO1xuICAgIGlmIChwYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKHBhcmVudE5hbWUpICE9PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX3NlYXJjaFBhcmVudChwYXJlbnRzW2ldLCBwYXJlbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyBtb25vY28gbWV0YW1vZGVsLiA8YnI+XG4gKiBtb25vY28gbWV0YW1vZGVsIGxvYWRzIHNjaGVtYXMgYW5kIHR5cGVzLCBhbmFseXplcyB0aGVtIGFuZCBjcmVhdGVzIHRoZSBjb21wb25lbnQgY2xhc3NlcyBhbmQgcmVsYXRlZCBNb25vY29EYXRhYmFzZUNvbGxlY3Rpb25zLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWRiXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1jb21wb25lbnRcbiAqIEByZXF1aXJlcyBtb25vY28td29ya2Zsb3dcbiAqIEBjbGFzcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAc3RhdGljXG4gKi9cblxuXG4vKipcbiAqIEluaXQgdGhlIG1ldGFtb2RlbC5cbiAqIEBtZXRob2QgaW5pdFxuICovXG5leHBvcnRzLmluaXQgPSBpbml0O1xuXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkYXRhIG9mIHRoZSBtZXRhbW9kZWwgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5cblxuLyoqXG4gKiBBZGQgYSBuZXcgc2NoZW1hLlxuICogQHBhcmFtIHtKU09OfSBzY2hlbWFcbiAqIEBtZXRob2Qgc2NoZW1hXG4gKi9cbmV4cG9ydHMuc2NoZW1hID0gc2NoZW1hO1xuXG5cbi8qKlxuICogQWRkIGEgbmV3IHR5cGUuXG4gKiBAcGFyYW0ge0pTT059IHR5cGVcbiAqIEBtZXRob2QgdHlwZVxuICovXG5leHBvcnRzLnR5cGUgPSB0eXBlO1xuXG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGNyZWF0ZVxuICovXG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxuXG4vKipcbiAqIEdldCBhIHNjaGVtYS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgc2NoZW1hXG4gKi9cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuXG5cbi8qKlxuICogR2V0IHRoZSBkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWwuXG4gKiBAbWV0aG9kIGdldE1ldGFEZWZcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIG1ldGFkZWZpbml0aW9uIG9mIHRoZSBtZXRhbW9kZWxcbiAqL1xuZXhwb3J0cy5nZXRNZXRhRGVmID0gZ2V0TWV0YURlZjtcblxuXG4vKipcbiAqIEdldCBwYXJlbnRzIG9mIGEgc2hlbWEgaWYgYW55LlxuICogQG1ldGhvZCBnZXRQYXJlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgb2YgdGhlIHNjaGVtYVxuICogQHJldHVybiB7QXJyYXl9IGlkIG9mIHRoZSBwYXJlbnRzXG4gKi9cbmV4cG9ydHMuZ2V0UGFyZW50cyA9IGdldFBhcmVudHM7XG5cblxuLypcbiAqIENoZWNrIGlmIGEgY2xhc3MgaW5oZXJpdHMgZnJvbSBhbm90aGVyIG9uZVxuICogQG1ldGhvZCBpbmhlcml0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnROYW1lIG5hbWUgb2YgdGhlIHBhcmVudFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGluaGVyaXQgZnJvbSB0aGUgc3BlY2lmaWMgY2xhc3MgbmFtZVxuICovXG5leHBvcnRzLmluaGVyaXRGcm9tID0gaW5oZXJpdEZyb207XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBVc2UgaXQgdG8gdGVzdCBpZiB0aGUgY29uc3RydWN0b3Igb2YgYW4gb2JqZWN0IGlzIGNvbXBsaWFudFxuICogd2l0aCB0aGUgZGVmaW5pdGlvbiBvZiB0aGUgY2xhc3MuXG4gKiBAbWV0aG9kIGlzVmFsaWRPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3RyaWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsZWFuUmVmXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIHRoZSBvYmplY3QgaXMgY29tcGxpYW50IHdpdGggdGhlIHNjaGVtYVxuICovXG5leHBvcnRzLmlzVmFsaWRPYmplY3QgPSBpc1ZhbGlkT2JqZWN0O1xuXG5cbi8qKlxuICogUHJlcGFyZSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGJlIGNvbXBsaWFudCB3aXRoIHRoZSBzY2hlbWEuXG4gKiBAbWV0aG9kIHByZXBhcmVPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqL1xuZXhwb3J0cy5wcmVwYXJlT2JqZWN0ID0gcHJlcGFyZU9iamVjdDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgY29tcGxpYW50IHdpdGggYSB0eXBlLlxuICogQG1ldGhvZCBpc1ZhbGlkVHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgdHlwZVxuICovXG5leHBvcnRzLmlzVmFsaWRUeXBlID0gaXNWYWxpZFR5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBjb21wbGlhbnQgd2l0aCBhIHR5cGUgZW51bS5cbiAqIEBtZXRob2QgaXNWYWxpZEVudW1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdmFsdWVcbiAqIEBwYXJhbSB7U2NoZW1hfSBzY2hlbWFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBpcyBjb21wbGlhbnQgd2l0aCB0aGUgZW51bVxuICovXG5leHBvcnRzLmlzVmFsaWRFbnVtID0gaXNWYWxpZEVudW07XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbmFtZSBpcyBhIGNvcnJlY3Qgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGlzVmFsaWRTdGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG5hbWUgaXMgYSBjb3JyZWN0IHN0YXRlIGZvciB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydHMuaXNWYWxpZFN0YXRlID0gaXNWYWxpZFN0YXRlO1xuXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG9mIHRoZSBzY2hlbWEgaXMgYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGlzRXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGFuIGV2ZW50XG4gKi9cbmV4cG9ydHMuaXNFdmVudCA9IGlzRXZlbnQ7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgb2YgdGhlIHNjaGVtYSBpcyBhIHByb3BlcnR5LlxuICogQG1ldGhvZCBpc1Byb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgcHJvcGVydHlcbiAqL1xuZXhwb3J0cy5pc1Byb3BlcnR5ID0gaXNQcm9wZXJ0eTtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgY29sbGVjdGlvbi5cbiAqIEBtZXRob2QgaXNDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGNvbXBvbmVudCBpZFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYXR0cmlidXRlIGlzIGEgY29sbGVjdGlvblxuICovXG5leHBvcnRzLmlzQ29sbGVjdGlvbiA9IGlzQ29sbGVjdGlvbjtcblxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBvZiB0aGUgc2NoZW1hIGlzIGEgbWV0aG9kLlxuICogQG1ldGhvZCBpc01ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBjb21wb25lbnQgaWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIGF0dHJpYnV0ZSBpcyBhIG1ldGhvZFxuICovXG5leHBvcnRzLmlzTWV0aG9kID0gaXNNZXRob2Q7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBtb25vY28uIDxicj5cbiAqIEl0IGluaXRzIG1vbm9jbyBtZXRhbW9kZWwgYW5kIGxvYWRzIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcbnZhciAkY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQuanMnKTtcbnZhciAkbWV0YW1vZGVsID0gcmVxdWlyZSgnLi9tZXRhbW9kZWwuanMnKTtcbnZhciAkc3lzdGVtID0gcmVxdWlyZSgnLi4vYnVpbGQvc3lzdGVtL3N5c3RlbS5qcycpO1xuXG5cbi8qIFByaXZhdGUgUHJvcGVydHkgKi9cblxudmFyIHN5dGVtSWQgPSAnJyxcbiAgICBzeXN0ZW0gPSAnJztcblxuXG4vKiBJbml0IE1ldGFtb2RlbCAqL1xuXG5cbiRtZXRhbW9kZWwuaW5pdCgpO1xuXG5cbi8qIEluaXQgbW9ub2NvIGZyb20gYSAgc3lzdGVtICovXG5cblxuc3l0ZW1JZCA9ICRkYi5zeXN0ZW0oJHN5c3RlbS5zeXN0ZW0pO1xuc3lzdGVtID0gJGNvbXBvbmVudC5nZXQoc3l0ZW1JZCk7XG5zeXN0ZW0ubWFpbigpO1xuXG5cbi8qIGV4cG9ydHMgKi9cblxuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIHRoZSBtYWluIG1vZHVsZSBvZiBtb25vY28uIDxicj5cbiAqIEl0IGluaXRzIG1vbm9jbyBtZXRhbW9kZWwgYW5kIGxvYWRzIG1vbm9jbyBjb3JlIHN5c3RlbS5cbiAqIFxuICogQG1vZHVsZSBtb25vY29cbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLW1ldGFtb2RlbFxuICogQHJlcXVpcmVzIG1vbm9jby1zeXN0ZW1cbiAqIEBtYWluIG1vbm9jb1xuICogQGNsYXNzIG1vbm9jb1xuICogQHN0YXRpY1xuICovXG5cblxuLyoqXG4gKiBtb25vY28gaW5zdGFuY2UuXG4gKiBAcHJvcGVydHkgbW9ub2NvXG4gKiBAdHlwZSBNb25vY29cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAkY29tcG9uZW50LmdldCgnbW9ub2NvJyk7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgc3RhdGVzIG9mIGFsbCB0aGVjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3RhdGVcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28tc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkZGIgPSByZXF1aXJlKCcuL2RiLmpzJyk7XG5cblxuLyogUHJpdmF0ZSBwcm9wZXJ0aWVzICovXG5cblxudmFyIHN0b3JlID0ge307XG5cblxuLyogUHVibGljIG1ldGhvZHMgKi9cblxuXG4vKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIHBhcmFtZXRlcnNcbiAqL1xuZnVuY3Rpb24gc2V0KGlkLCBzdGF0ZSwgcGFyYW1ldGVycykge1xuICAgIHN0b3JlW2lkXSA9IHtcbiAgICAgICAgXCJuYW1lXCI6IHN0YXRlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICAgICAgfVxuICAgIH07XG4gICAgJGRiLnN0b3JlLk1vbm9jb1N0YXRlW2lkXSA9IHtcbiAgICAgICAgXCJuYW1lXCI6IHN0YXRlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJkYXRhXCI6IHBhcmFtZXRlcnNcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuLypcbiAqIEdldCB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKiBAbWV0aG9kIGdldCBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHN0b3JlW2lkXTtcbn1cblxuXG4vKlxuICogUmVtb3ZlIGFsbCB0aGUgc3RhdGVzIG9mIHRoZSBjb21wb25lbnRzIGZyb20gdGhlIG1lbW9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc3RvcmUgPSB7fTtcbn1cblxuXG4vKiBleHBvcnRzICovXG5cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBtYW5hZ2VzIHRoZSBzdGF0ZXMgb2YgYWxsIHRoZSBjb21wb25lbnRzLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28tc3RhdGVcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28tc3RhdGVcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogU2V0IHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgY29tcG9uZW50IGlkIG9uIHdoaWNoIGNoYW5nZSB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSB0aGUgbmV3IHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0cy5zZXQgPSBzZXQ7XG5cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogQG1ldGhvZCBnZXQgXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNvbXBvbmVudFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0cy5nZXQgPSBnZXQ7XG5cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudHMgZnJvbSB0aGUgbWVtb3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7IiwiLyogXG4gKiBtb25vY29cbiAqIEEgTW9kZWwgYW5kIGEgTm9TUUwgRGF0YWJhc2UgZm9yIENvbXBvbmVudHNcbiAqIGh0dHA6Ly9tb25vY28uaW8vXG4gKiBAZWNhcnJpb3VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgLSBFcndhbiBDYXJyaW91XG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIG1hbmFnZXMgdGhlIHdvcmtmbG93IG9mIG1vbm9jby4gSXQgYmVoYXZlcyBsaWtlIGEgd29ya2Zsb3cgZW5naW5lLiA8YnI+XG4gKiBJdCBjaGVja3MgaWYgdGhlIGNoYW5nZSBvZiBzdGF0dXMgb2YgYSBjb21wb25lbnQgaXMgdmFsaWQgdG8gYmUgZXhlY3V0ZWQuIEJ5IHZhbGlkLCBpdCBtZWFucyB0aGF0Ojxicj5cbiAqIC0gdGhlIHN0YXRlIGlzIHZhbGlkIGZvciB0aGUgY29tcG9uZW50LCA8YnI+XG4gKiAtIHRoZSBpbnB1dCAoaS5lLiBwYXJhbWV0ZXJzKSBvZiBhbGwgYWN0aW9ucyBmb3IgdGhlIHN0YXRlIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1vZGVsIGFuZCA8YnI+XG4gKiAtIHRoZSBvdXRwdXQgb2YgYWxsIGFjdGlvbnMgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwuIDxicj5cbiAqIFxuICogSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgd29ya2Zsb3cgd2lsbCBjYWxsIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGFuZCBtb25vY28uIDxicj5cbiAqIElmIHRoZSBlcnJvciBjYW4gYnJlYWsgdGhlIGNvbnNpc3RlbmN5IG9mIHRoZSBjdXJyZW50IHN5c3RlbSwgdGhlIHdvcmtsb3cgd2lsbCBzdG9wLlxuICogXG4gKiBAbW9kdWxlIG1vbm9jb1xuICogQHN1Ym1vZHVsZSBtb25vY28td29ya2Zsb3dcbiAqIEByZXF1aXJlcyBtb25vY28tbWV0YW1vZGVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNvbXBvbmVudFxuICogQHJlcXVpcmVzIG1vbm9jby1iZWhhdmlvclxuICogQHJlcXVpcmVzIG1vbm9jby1jaGFubmVsXG4gKiBAcmVxdWlyZXMgbW9ub2NvLXN0YXRlXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWhlbHBlclxuICogQHJlcXVpcmVzIG1vbm9jby1sb2dcbiAqIEByZXF1aXJlcyBtb25vY28tZGJcbiAqIEBjbGFzcyBtb25vY28td29ya2Zsb3cgXG4gKiBAc3RhdGljXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJG1ldGFtb2RlbCA9IHJlcXVpcmUoJy4vbWV0YW1vZGVsLmpzJyk7XG52YXIgJGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50LmpzJyk7XG52YXIgJGJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvci5qcycpO1xudmFyICRjaGFubmVsID0gcmVxdWlyZSgnLi9jaGFubmVsLmpzJyk7XG52YXIgJHN0YXRlID0gcmVxdWlyZSgnLi9zdGF0ZS5qcycpO1xudmFyICRoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xudmFyICRsb2cgPSByZXF1aXJlKCcuL2xvZy5qcycpO1xudmFyICRkYiA9IHJlcXVpcmUoJy4vZGIuanMnKTtcblxuXG4vKiBQcml2YXRlIG1ldGhvZHMgKi9cblxuXG4vKipcbiAqIFRoZSBNb25vY29FcnJvciBjbGFzcy5cbiAqIEBjbGFzcyBNb25vY29FcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBtZXNzYWdlIG9mIHRoZSBlcnJvclxuICovXG5mdW5jdGlvbiBNb25vY29FcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm5hbWUgPSBcIk1vbm9jb0Vycm9yXCI7XG59XG5Nb25vY29FcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbk1vbm9jb0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1vbm9jb0Vycm9yO1xuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSBuYW1lcyBvZiB0aGUgcGFyYW1ldGVyIG9mIGEgbWV0aG9kLlxuICogQG1ldGhvZCBnZXRQYXJhbU5hbWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIG1ldGhvZCBmb3IgdGhlIGNsYXNzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGlkLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIG1ldGhvZCA9IG51bGwsXG4gICAgICAgIHBhcmFtcyA9IFtdLFxuICAgICAgICByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBtZXRob2QgPSAkbWV0YW1vZGVsLmdldChpZClbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBwYXJhbXMgPSBtZXRob2QucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxvZy51bmtub3duTWV0aG9kKGlkLCBtZXRob2ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgYSBtZXRob2QuXG4gKiBAbWV0aG9kIGdldFBhcmFtTnVtYmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEByZXR1cm4ge0FycmF5fSBudW1iZXIgb2YgcGFyYW1ldGVycyBtaW4gYW5kIG1heCBmb3IgdGhlIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1OdW1iZXIoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gbnVsbCxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbWluID0gMCxcbiAgICAgICAgbWF4ID0gMDtcblxuICAgIG1ldGhvZCA9ICRtZXRhbW9kZWwuZ2V0KGlkKVttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIHBhcmFtcyA9IG1ldGhvZC5wYXJhbXM7XG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09ICd1bmRlZmluZWQnIHx8IHBhcmFtc1tpXS5tYW5kYXRvcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gbWluICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4ID0gbWF4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChtaW4pO1xuICAgICAgICByZXN1bHQucHVzaChtYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLyogXG4gKiBTZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIG5vbiBtYW5kYXRvcnkgcGFyYW1ldGVycyBvZiBhIG1ldGhvZC5cbiAqIEBtZXRob2Qgc2V0RGVmYXVsdFZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgaWQgb2YgdGhlIGNsYXNzXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSBuYW1lIG9mIHRoZSBtZXRob2RcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgYXJndW1lbnRzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJndW1lbnRzIHdpdGggZGVmYXVsdCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRWYWx1ZShpZCwgbWV0aG9kTmFtZSwgYXJncykge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXNbaV0ubWFuZGF0b3J5ID09PSBmYWxzZSAmJiB0eXBlb2YgYXJnc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW1zW2ldLmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIEdldCB0aGUgdHlwZSByZXR1cm5lZCBieSBhIG1ldGhvZC5cbiAqIEBtZXRob2QgZ2V0UmV0dXJuVHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIGlkIG9mIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0eXBlIHJldHVybmVkIGJ5IHRoZSBtZXRob2RcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFJldHVyblR5cGUoaWQsIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgcmVzdWx0VHlwZSA9IG51bGwsXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG5cbiAgICByZXN1bHRUeXBlID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdLnJlc3VsdDtcbiAgICBpZiAocmVzdWx0VHlwZSkge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBHZXQgYWxsIHRoZSB0eXBlIG9mIHRoZSBwYXJhbWV0ZXJzIG9mIGEgbWV0aG9kXG4gKiBAbWV0aG9kIGdldFBhcmFtVHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBpZCBvZiB0aGUgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIG5hbWUgb2YgdGhlIG1ldGhvZFxuICogQHJldHVybiB7QXJyYXl9IHRoZSB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBvZiBhIG1ldGhvZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyYW1UeXBlcyhpZCwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBudWxsLFxuICAgICAgICBwYXJhbXMgPSBbXSxcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgbWV0aG9kID0gJG1ldGFtb2RlbC5nZXQoaWQpW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgcGFyYW1zID0gbWV0aG9kLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcmFtc1tpXS50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgICRsb2cudW5rbm93bk1ldGhvZChpZCwgbWV0aG9kTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuLypcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gb3V0cHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsXG4gKiBAbWV0aG9kIGNoZWNrUmVzdWx0XG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNvbmRpdGlvbnMgb24gb3VwdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWxcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBjb21wb25lbnQgPSBwYXJhbXMuY29tcG9uZW50IHx8IG51bGwsXG4gICAgICAgIG1ldGhvZE5hbWUgPSBwYXJhbXMubWV0aG9kTmFtZSB8fCAnJyxcbiAgICAgICAgbWV0aG9kUmVzdWx0ID0gcGFyYW1zLm1ldGhvZFJlc3VsdCB8fCB1bmRlZmluZWQsXG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9ICcnLFxuICAgICAgICByZXR1cm5UeXBlID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgIGlmIChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRDbGFzc05hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm5UeXBlID0gZ2V0UmV0dXJuVHlwZShjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKHJldHVyblR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJldHVyblR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtZXRob2RSZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5pbnZhbGlkUmVzdWx0VHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZFJlc3VsdCAhPT0gcmV0dXJuVHlwZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFJlc3VsdFR5cGUoY29tcG9uZW50LmlkKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuICogR2V0IHRoZSBhY3Rpb25zIG9mIHRoZSBzcGVjaWZpZWQgc3RhdGVcbiAqIEBtZXRob2QgZ2V0QWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBhIG1vbm9jbyBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgdHJ1ZSBpZiB0aGUgc3RhdGUgaXMgYW4gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIHRoZSBhY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25zKGNvbXBvbmVudCwgbmFtZSwgaXNFdmVudCkge1xuICAgIHZhciBhY3Rpb24gPSAkYmVoYXZpb3IuZ2V0QWN0aW9ucyhjb21wb25lbnQuaWQoKSwgbmFtZSksXG4gICAgICAgIHBhcmVudHMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHBhcmVudCA9IG51bGw7XG5cbiAgICBpZiAoIWFjdGlvbi5sZW5ndGggfHwgaXNFdmVudCkge1xuICAgICAgICBpZiAoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucygkY29tcG9uZW50LmdldChjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSksIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudHMgPSAkbWV0YW1vZGVsLmdldFBhcmVudHMoY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkY29tcG9uZW50LmdldChwYXJlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbi5jb25jYXQoZ2V0QWN0aW9ucyhwYXJlbnQsIG5hbWUsIGlzRXZlbnQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLnVua25vd25Db21wb25lbnQocGFyZW50c1tpXSwgY29tcG9uZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG59XG5cblxuLypcbiAqIENhbGwgYW4gYWN0aW9uIGFuZCBtYWtlIHNvbWUgRGVwZW5kZW5jeSBJbmplY3Rpb24gaWYgaXQgaXMgYSBjb3JlIGFjdGlvblxuICogQG1ldGhvZCBjYWxsQWN0aW9uXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgbmFtZSBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVycyBvZiB0aGUgYWN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXZlbnQgaXMgdGhlIGFjdGlvbiBhIGNhbGxiYWNrIG9mIGFuIGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufSByZXN1bHQgb2YgdGhlIGFjdGlvblxuICovXG5mdW5jdGlvbiBjYWxsQWN0aW9uKGNvbXBvbmVudCwgc3RhdGUsIGFjdGlvbiwgcGFyYW1zLCBpc0V2ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGwsXG4gICAgICAgIGluamVjdGVkUGFyYW1zID0gW10sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgaWYgKCEkbWV0YW1vZGVsLmlzUHJvcGVydHkoc3RhdGUsIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSAmJiAhJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oc3RhdGUsIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKSkge1xuICAgICAgICBwYXJhbXMgPSBzZXREZWZhdWx0VmFsdWUoY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUsIHN0YXRlLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChhY3Rpb24udXNlQ29yZUFQSSkge1xuICAgICAgICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2gocGFyYW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRkYik7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRtZXRhbW9kZWwpO1xuICAgICAgICAgICAgaW5qZWN0ZWRQYXJhbXMucHVzaChleHBvcnRzKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGJlaGF2aW9yKTtcbiAgICAgICAgICAgIGluamVjdGVkUGFyYW1zLnB1c2goJGxvZyk7XG4gICAgICAgICAgICBpbmplY3RlZFBhcmFtcy5wdXNoKCRjaGFubmVsKTtcblxuICAgICAgICAgICAgaWYgKGlzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFjdGlvbi5hY3Rpb24uYmluZC5hcHBseShhY3Rpb24uYWN0aW9uLCBbY29tcG9uZW50XS5jb25jYXQoaW5qZWN0ZWRQYXJhbXMpKSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBpbmplY3RlZFBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNFdmVudCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYWN0aW9uLmFjdGlvbi5iaW5kLmFwcGx5KGFjdGlvbi5hY3Rpb24sIFtjb21wb25lbnRdLmNvbmNhdChwYXJhbXMpKSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFjdGlvbi5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vbm9jb0Vycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJlcnJvciB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCRoZWxwZXIuZ2V0TW9ub2NvKCkpIHtcbiAgICAgICAgICAgICAgICAkaGVscGVyLmdldE1vbm9jbygpLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiZXJyb3Igd2hlbiB3aGVuIHRyeWluZyB0byBjYWxsIHRoZSBtZXRob2QgJ1wiICsgc3RhdGUgKyBcIicgb24gY29tcG9uZW50ICdcIiArIGNvbXBvbmVudC5pZCgpICsgXCInXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3JcIjogZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKiBQdWJsaWMgbWV0aG9kcyAqL1xuXG5cbi8qXG4gKiBDaGVjayBpZiBhbiBhY3Rpb24gaGFzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyLlxuICogQG1ldGhvZCB2YWxpZFBhcmFtTnVtYmVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gYXBwbGllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYWN0aW9uIGlzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiB2YWxpZFBhcmFtTnVtYmVycyhjbGFzc05hbWUsIHN0YXRlLCBhY3Rpb24pIHtcbiAgICB2YXIgZnVuYyA9ICcnLFxuICAgICAgICBiZWdpbkJvZHkgPSAtMSxcbiAgICAgICAgaGVhZGVyID0gJycsXG4gICAgICAgIGZ1bmNQYXJhbXMgPSAnJyxcbiAgICAgICAgcGFyYW1zID0gW10sXG4gICAgICAgIHBhcmFtTnVtYmVyID0gMCxcbiAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFtdLFxuICAgICAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlLFxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIG51bWJlciBvZiBwYXJhbWV0ZXJzIG9mIHRoZSBhY3Rpb25cbiAgICBmdW5jID0gYWN0aW9uLnRvU3RyaW5nKCk7XG4gICAgYmVnaW5Cb2R5ID0gZnVuYy5pbmRleE9mKCd7Jyk7XG4gICAgaGVhZGVyID0gZnVuYy5zdWJzdHJpbmcoMCwgYmVnaW5Cb2R5KTtcbiAgICBmdW5jUGFyYW1zID0gaGVhZGVyLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKS50cmltKCk7XG4gICAgcGFyYW1zID0gZnVuY1BhcmFtcy5zcGxpdCgnLCcpO1xuICAgIGlmIChwYXJhbXNbMF0gPT09ICcnKSB7XG4gICAgICAgIHBhcmFtcyA9IFtdO1xuICAgIH1cbiAgICBwYXJhbU51bWJlciA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgICAvLyBnZXQgdGhlIG51bWJlciBtaW4gYW5kIG1heCBvZiB2YWxpZCBwYXJhbWV0ZXJzXG4gICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShzdGF0ZSwgY2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihzdGF0ZSwgY2xhc3NOYW1lKTtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGlzQ29sbGVjdGlvbjpcbiAgICAgICAgICAgIG1vZGVsTnVtYmVyUGFyYW0gPSBbMywgM107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBpc1Byb3BlcnR5OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IFsxLCAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbW9kZWxOdW1iZXJQYXJhbSA9IGdldFBhcmFtTnVtYmVyKGNsYXNzTmFtZSwgc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZVxuICAgIGlmIChtb2RlbE51bWJlclBhcmFtWzBdIDw9IHBhcmFtTnVtYmVyICYmIHBhcmFtTnVtYmVyIDw9IG1vZGVsTnVtYmVyUGFyYW1bMV0pIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDaGVjayBpZiBjb25kaXRpb25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWwgYmVmb3JlIGNhbGxpbmcgdGhlIGFjdGlvbi5cbiAqIEBtZXRob2QgY2hlY2tQYXJhbXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY29uZGl0aW9uIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbW9kZWxcbiAqL1xuZnVuY3Rpb24gY2hlY2tQYXJhbXMocGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgbnVsbCxcbiAgICAgICAgbWV0aG9kTmFtZSA9IHBhcmFtcy5tZXRob2ROYW1lIHx8ICcnLFxuICAgICAgICBhcmdzID0gcGFyYW1zLmFyZ3MgfHwgJycsXG4gICAgICAgIHBhcmFtc05hbWUgPSBbXSxcbiAgICAgICAgcGFyYW1zVHlwZSA9IFtdLFxuICAgICAgICBwYXJhbXNOdW1iZXIgPSBbXSxcbiAgICAgICAgY29tcG9uZW50Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcGFyYW0gPSBudWxsLFxuICAgICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgICBpc1Byb3BlcnR5ID0gZmFsc2UsXG4gICAgICAgIGlzQ29sbGVjdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudENsYXNzTmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIGlzUHJvcGVydHkgPSAkbWV0YW1vZGVsLmlzUHJvcGVydHkobWV0aG9kTmFtZSwgY29tcG9uZW50Q2xhc3NOYW1lKTtcbiAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihtZXRob2ROYW1lLCBjb21wb25lbnRDbGFzc05hbWUpO1xuICAgIHBhcmFtc05hbWUgPSBnZXRQYXJhbU5hbWVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBpc0NvbGxlY3Rpb246XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWydudW1iZXInLCAkbWV0YW1vZGVsLmdldChjb21wb25lbnRDbGFzc05hbWUpW21ldGhvZE5hbWVdLnR5cGVbMF0sICdzdHJpbmcnXTtcbiAgICAgICAgICAgIHBhcmFtc051bWJlciA9IFszLCAzXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGlzUHJvcGVydHk6XG4gICAgICAgICAgICBwYXJhbXNUeXBlID0gWyRtZXRhbW9kZWwuZ2V0KGNvbXBvbmVudENsYXNzTmFtZSlbbWV0aG9kTmFtZV0udHlwZV07XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBbMSwgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHBhcmFtc1R5cGUgPSBnZXRQYXJhbVR5cGVzKGNvbXBvbmVudENsYXNzTmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICBwYXJhbXNOdW1iZXIgPSBnZXRQYXJhbU51bWJlcihjb21wb25lbnRDbGFzc05hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gY2FzZSBvZiBvYmplY3RcbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zTnVtYmVyLmluZGV4T2YobGVuZ3RoKSA9PT0gLTEpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICRsb2cuaW52YWxpZFBhcmFtTnVtYmVyKGNvbXBvbmVudC5pZCgpLCBtZXRob2ROYW1lKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyYW0gPSBhcmdzW2ldO1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJhbXNOdW1iZXJbMF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmludmFsaWRQYXJhbU51bWJlcihjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEkbWV0YW1vZGVsLmlzVmFsaWRUeXBlKHBhcmFtLCBwYXJhbXNUeXBlW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuaW52YWxpZFBhcmFtVHlwZShjb21wb25lbnQuaWQoKSwgbWV0aG9kTmFtZSwgcGFyYW1zTmFtZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8qXG4gKiBDYWxsIGFuIGFjdGlvbiB0aGF0IGNvbWVzIGZyb20gYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICovXG5mdW5jdGlvbiBhY3Rpb24oYmVoYXZpb3JJZCwgcGFyYW1zKSB7XG4gICAgdmFyIGlzRXZlbnQgPSBmYWxzZSxcbiAgICAgICAgaXNQcm9wZXJ0eSA9IGZhbHNlLFxuICAgICAgICBpc0NvbGxlY3Rpb24gPSBmYWxzZSxcbiAgICAgICAgYmVoYXZpb3JzID0gW10sXG4gICAgICAgIGJlaGF2aW9yID0gbnVsbCxcbiAgICAgICAgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgYWN0aW9uRnJvbU1lbW9yeSA9IG51bGw7XG5cbiAgICBiZWhhdmlvcnMgPSAkZGIuTW9ub2NvQmVoYXZpb3IuZmluZCh7XG4gICAgICAgIFwiX2lkXCI6IGJlaGF2aW9ySWRcbiAgICB9KTtcblxuICAgIGFjdGlvbkZyb21NZW1vcnkgPSAkYmVoYXZpb3IuZ2V0KGJlaGF2aW9ySWQpO1xuXG4gICAgaWYgKGJlaGF2aW9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYmVoYXZpb3IgPSBiZWhhdmlvcnNbMF07XG5cbiAgICAgICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQoYmVoYXZpb3IuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgaXNFdmVudCA9ICRtZXRhbW9kZWwuaXNFdmVudChiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgaXNQcm9wZXJ0eSA9ICRtZXRhbW9kZWwuaXNQcm9wZXJ0eShiZWhhdmlvci5zdGF0ZSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgaXNDb2xsZWN0aW9uID0gJG1ldGFtb2RlbC5pc0NvbGxlY3Rpb24oYmVoYXZpb3Iuc3RhdGUsIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKGlzRXZlbnQgfHwgaXNQcm9wZXJ0eSB8fCBpc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYWxsQWN0aW9uKGNvbXBvbmVudCwgYmVoYXZpb3Iuc3RhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VDb3JlQVBJXCI6IGJlaGF2aW9yLnVzZUNvcmVBUEksXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IGFjdGlvbkZyb21NZW1vcnlcbiAgICAgICAgICAgICAgICB9LCBwYXJhbXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBDaGFuZ2UgdGhlIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICogXG4gKiBXb3JrbG93Ojxicj5cbiAqIDxicj5cbiAqIDAuIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBiZWVuIGRlc3Ryb3llZCA8YnI+XG4gKiAxLiBDaGVjayBpZiB0aGUgc3RhdGUgaXMgYSBtZXRob2QsIGEgcHJvcGVydHkgb3IgYW4gZXZlbnQgPGJyPlxuICogMi4gU2VhcmNoIGlmIHRoZXJlIGlzIGEgYmVoYXZpb3Igd2l0aCBhY3Rpb25zIGZvciB0aGUgbmV3IHN0YXRlIDxicj5cbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA0LiBDaGVjayBpZiB0aGUgaW5wdXRzIGFyZSBjb21wbGlhbnRzIHdpdGggdGhlIG1ldGFtb2RlbCA8YnI+XG4gKiA1LiBDYWxsIHRoZSBhY3Rpb24ocykgPGJyPlxuICogNi4gSWYgYSBtZXRob2QsIGNoZWNrIGlmIHRoZSBvdXRwdXQgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDcuIElmIGFsbCBpcyBvaywgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgaXMgdXBkYXRlZCA8YnI+XG4gKiA4LiBSZXR1cm4gdGhlIHJlc3VsdCA8YnI+XG4gKiBcbiAqIEBtZXRob2Qgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1zIHRvIGNoYW5nZSB0aGUgc3RhdGUgPGJyPlxuICoge1N0cmluZ30gY29tcG9uZW50IGlkIG9mIHRoZSBjb21wb25lbnQgPGJyPlxuICoge1N0cmluZ30gc3RhdGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7QXJyYXl9IGRhdGEgcGFyYW1ldGVycyB0byBzZW5kIHRvIHRoZSBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gc3RhdGUocGFyYW1zKSB7XG5cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgcGFyYW1zLmNvbXBvbmVudCA9IHBhcmFtcy5jb21wb25lbnQgfHwgJyc7XG4gICAgcGFyYW1zLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICcnO1xuICAgIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwgW107XG5cbiAgICB2YXIgY29tcG9uZW50ID0gbnVsbCxcbiAgICAgICAgY3VycmVudFN0YXRlID0gJycsXG4gICAgICAgIGFjdGlvbnMgPSBbXSxcbiAgICAgICAgYWN0aW9uID0gbnVsbCxcbiAgICAgICAgcmVzdWx0ID0gbnVsbCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIGlzUHJvcGVydHkgPSBmYWxzZSxcbiAgICAgICAgaXNDb2xsZWN0aW9uID0gZmFsc2UsXG4gICAgICAgIGlzRXZlbnQgPSBmYWxzZTtcblxuICAgIGN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG5cbiAgICBpZiAoY3VycmVudFN0YXRlID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgJGxvZy5pbnZhbGlkVXNlT2ZDb21wb25lbnQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50ID0gJGNvbXBvbmVudC5nZXQocGFyYW1zLmNvbXBvbmVudCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBpc0V2ZW50ID0gJG1ldGFtb2RlbC5pc0V2ZW50KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBpc1Byb3BlcnR5ID0gJG1ldGFtb2RlbC5pc1Byb3BlcnR5KHBhcmFtcy5zdGF0ZSwgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICBpc0NvbGxlY3Rpb24gPSAkbWV0YW1vZGVsLmlzQ29sbGVjdGlvbihwYXJhbXMuc3RhdGUsIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgYWN0aW9ucyA9IGdldEFjdGlvbnMoY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGlzRXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgICAgIGlmIChjaGVja1BhcmFtcyh7XG4gICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICBcIm1ldGhvZE5hbWVcIjogcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgXCJhcmdzXCI6IHBhcmFtcy5kYXRhXG4gICAgICAgIH0pKSB7XG5cbiAgICAgICAgICAgIGlmICghaXNFdmVudCAmJlxuICAgICAgICAgICAgICAgICFpc1Byb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgIWlzQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbEFjdGlvbihjb21wb25lbnQsIHBhcmFtcy5zdGF0ZSwgYWN0aW9uLCBwYXJhbXMuZGF0YSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tSZXN1bHQoe1xuICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kTmFtZVwiOiBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwibWV0aG9kUmVzdWx0XCI6IHJlc3VsdFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNhbGxBY3Rpb24oY29tcG9uZW50LCBwYXJhbXMuc3RhdGUsIGFjdGlvbiwgcGFyYW1zLmRhdGEsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCAmJiAoaXNFdmVudCB8fCBpc1Byb3BlcnR5IHx8IGlzQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICRzdGF0ZS5zZXQoY29tcG9uZW50LmlkKCksIHBhcmFtcy5zdGF0ZSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG4gKiBTdG9wIHRoZSB3b3JrZmxvdyBlbmdpbmUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVycyA8YnI+XG4gKiB7Qm9vbGVhbn0gZXJyb3IgdHJ1ZSBpZiB0aGUgc3RvcCBvZiB0aGUgd29ya2Zsb3cgaXMgZHVlIHRvIGFuIGVycm9yIChkZWZhdWx0IGZhbHNlKSA8YnI+XG4gKiB7U3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdG8gbG9nIChkZWZhdWx0ICcnKVxuICovXG5mdW5jdGlvbiBzdG9wKHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwYXJhbXMuZXJyb3IgPSBmYWxzZTtcbiAgICB9XG4gICAgcGFyYW1zLm1lc3NhZ2UgPSBwYXJhbXMubWVzc2FnZSB8fCAnJztcblxuICAgIGV4cG9ydHMuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMuZXJyb3IpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9ub2NvRXJyb3IoXCJtb25vY28gaGFzIGJlZW4gc3RvcHBlZCBiZWNhdXNlIFwiICsgcGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1vbm9jb0Vycm9yKFwibW9ub2NvIGhhcyBiZWVuIHN0b3BwZWQgYmVjYXVzZSBvZiBhbiB1bmtub3duIGVycm9yXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdtb25vY286IG1vbm9jbyBoYXMgYmVlbiBzdG9wcGVkJyk7XG4gICAgfVxufVxuXG5cbi8qXG4gKiBSZXN0YXJ0IHRoZSB3b3JrZmxvdyBlbmdpbmUgZnJvbSB0aGUgbGFzdCBzdGF0ZS5cbiAqIEBtZXRob2QgcmVzdGFydFxuICovXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGV4cG9ydHMuc3RhdGUgPSBzdGF0ZTtcbiAgICAkbG9nLndvcmtmbG93UmVzdGFydGVkKCk7XG59XG5cblxuLyogZXhwb3J0cyAqL1xuXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgbWFuYWdlcyB0aGUgd29ya2Zsb3cgb2YgbW9ub2NvLiBJdCBiZWhhdmVzIGxpa2UgYSB3b3JrZmxvdyBlbmdpbmUuIDxicj5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgY2hhbmdlIG9mIHN0YXR1cyBvZiBhIGNvbXBvbmVudCBpcyB2YWxpZCB0byBiZSBleGVjdXRlZC4gQnkgdmFsaWQsIGl0IG1lYW5zIHRoYXQ6PGJyPlxuICogLSB0aGUgc3RhdGUgaXMgdmFsaWQgZm9yIHRoZSBjb21wb25lbnQsIDxicj5cbiAqIC0gdGhlIGlucHV0IChpLmUuIHBhcmFtZXRlcnMpIG9mIGFsbCBhY3Rpb25zIGZvciB0aGUgc3RhdGUgYXJlIGNvbXBsaWFudHMgd2l0aCB0aGUgbW9kZWwgYW5kIDxicj5cbiAqIC0gdGhlIG91dHB1dCBvZiBhbGwgYWN0aW9ucyBhcmUgY29tcGxpYW50cyB3aXRoIHRoZSBtb2RlbC4gPGJyPlxuICogXG4gKiBJZiBhbiBlcnJvciBvY2N1cnMsIHRoZSB3b3JrZmxvdyB3aWxsIGNhbGwgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgYW5kIG1vbm9jby4gPGJyPlxuICogSWYgdGhlIGVycm9yIGNhbiBicmVhayB0aGUgY29uc2lzdGVuY3kgb2YgdGhlIGN1cnJlbnQgc3lzdGVtLCB0aGUgd29ya2xvdyB3aWxsIHN0b3AuXG4gKiBcbiAqIEBtb2R1bGUgbW9ub2NvXG4gKiBAc3VibW9kdWxlIG1vbm9jby13b3JrZmxvd1xuICogQHJlcXVpcmVzIG1vbm9jby1tZXRhbW9kZWxcbiAqIEByZXF1aXJlcyBtb25vY28tY29tcG9uZW50XG4gKiBAcmVxdWlyZXMgbW9ub2NvLWJlaGF2aW9yXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWNoYW5uZWxcbiAqIEByZXF1aXJlcyBtb25vY28tc3RhdGVcbiAqIEByZXF1aXJlcyBtb25vY28taGVscGVyXG4gKiBAcmVxdWlyZXMgbW9ub2NvLWxvZ1xuICogQHJlcXVpcmVzIG1vbm9jby1kYlxuICogQGNsYXNzIG1vbm9jby13b3JrZmxvdyBcbiAqIEBzdGF0aWNcbiAqL1xuXG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqIFxuICogV29ya2xvdzo8YnI+XG4gKiA8YnI+XG4gKiAwLiBDaGVjayBpZiB0aGUgY29tcG9uZW50IGhhcyBub3QgYmVlbiBkZXN0cm95ZWQgPGJyPlxuICogMS4gQ2hlY2sgaWYgdGhlIHN0YXRlIGlzIGEgbWV0aG9kIG9yIGFuIGV2ZW50IDxicj5cbiAqIDIuIFNlYXJjaCBpZiB0aGVyZSBpcyBhIGJlaGF2aW9yIHdpdGggYW4gYWN0aW9uIGZvciB0aGUgbmV3IHN0YXRlIDxicj5cbiAqIDMuIElmIHNvLCBnZXQgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA0LiBDaGVjayBpZiB0aGUgY29uZGl0b25zIG9uIGlucHV0IGFyZSBjb21wbGlhbnQgd2l0aCB0aGUgbWV0YW1vZGVsIDxicj5cbiAqIDUuIENhbGwgdGhlIGFjdGlvbihzKSA8YnI+XG4gKiA2LiBJZiBub3QgYW4gb2YgZXZlbnQsIGNoZWNrIGlmIHRoZSBjb25kaXRvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtZXRhbW9kZWwgPGJyPlxuICogNy4gSWYgYWxsIGlzIG9rLCB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIDxicj5cbiAqIDguIFJldHVybiB0aGUgcmVzdWx0IDxicj5cbiAqIFxuICogQG1ldGhvZCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBwYXJhbXMgdG8gY2hhbmdlIHRoZSBzdGF0ZSA8YnI+XG4gKiB7U3RyaW5nfSBjb21wb25lbnQgaWQgb2YgdGhlIGNvbXBvbmVudCA8YnI+XG4gKiB7U3RyaW5nfSBzdGF0ZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IDxicj5cbiAqIHtBcnJheX0gZGF0YSBwYXJhbWV0ZXJzIHRvIHNlbmQgdG8gdGhlIGFjdGlvblxuICovXG5leHBvcnRzLnN0YXRlID0gc3RhdGU7XG5cblxuLyoqXG4gKiBTdG9wIHRoZSB3b3JrZmxvdyBlbmdpbmUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgcGFyYW1ldGVycyA8YnI+XG4gKiB7Qm9vbGVhbn0gZXJyb3IgdHJ1ZSBpZiB0aGUgc3RvcCBvZiB0aGUgd29ya2Zsb3cgaXMgZHVlIHRvIGFuIGVycm9yIChkZWZhdWx0IGZhbHNlKSA8YnI+XG4gKiB7U3RyaW5nfSBtZXNzYWdlIGVycm9yIG1lc3NhZ2UgdG8gbG9nIChkZWZhdWx0ICcnKVxuICovXG5leHBvcnRzLnN0b3AgPSBzdG9wO1xuXG5cbi8qKlxuICogUmVzdGFydCB0aGUgd29ya2Zsb3cgZW5naW5lIGZyb20gdGhlIGxhc3Qgc3RhdGUuXG4gKiBAbWV0aG9kIHJlc3RhcnRcbiAqL1xuZXhwb3J0cy5yZXN0YXJ0ID0gcmVzdGFydDtcblxuXG4vKipcbiAqIENoZWNrIGlmIGNvbmRpdGlvbnMgb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbCBiZWZvcmUgY2FsbGluZyB0aGUgYWN0aW9uLlxuICogQG1ldGhvZCBjaGVja1BhcmFtc1xuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjb25kaXRpb24gb24gaW5wdXQgYXJlIGNvbXBsaWFudCB3aXRoIHRoZSBtb2RlbFxuICovXG5leHBvcnRzLmNoZWNrUGFyYW1zID0gY2hlY2tQYXJhbXM7XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhY3Rpb24gaGFzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyLlxuICogQG1ldGhvZCB2YWxpZFBhcmFtTnVtYmVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBuYW1lIHRoZSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIHN0YXRlIG9uIHdoaWNoIHRoZSBhY3Rpb24gYXBwbGllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgYWN0aW9uIGlzIHRoZSB2YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVyc1xuICovXG5leHBvcnRzLnZhbGlkUGFyYW1OdW1iZXJzID0gdmFsaWRQYXJhbU51bWJlcnM7XG5cblxuLyoqXG4gKiBDYWxsIGFuIGFjdGlvbiB0aGF0IGNvbWVzIGZyb20gYW4gZXZlbnQuXG4gKiBAbWV0aG9kIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGJlaGF2aW9ySWQgaWQgb2YgdGhlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgcGFyYW1ldGVyc1xuICovXG5leHBvcnRzLmFjdGlvbiA9IGFjdGlvbjsiXX0=
