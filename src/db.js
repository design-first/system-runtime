/*
 * System Runtime
 * Design | Create | Compose
 * https://system-runtime.github.io
 * @ecarriou
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
                            $log.unknownPropertyOnDbUpdate(this.name, attributeName, docs[i]._id);
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