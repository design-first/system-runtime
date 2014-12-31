/* 
 * Monoco
 * A Model and a NoSQL Database for your Components
 * http://monoco.io/
 * @monocojs
 *
 * Copyright (C) 2014 - Erwan Carriou
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
 * @method createClass
 * @param {Object} definition definition of the class
 * @param {String} classId name of the class
 * @return {Function} the class
 * @private
 */
function createClass(definition, classId) {
    var config = definition,
    body = function (config) {
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

    Class = createClass(config, classId);

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