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
 * @requires monoco-state
 * @requires monoco-behavior
 * @requires monoco-helper
 * @requires monoco-log
 * @class monoco-db
 * @static
 */

'use strict';

var $component = require('./component.js');
var $state = require('./state.js');
var $behavior = require('./behavior.js');
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


/*
 * Remove all the databases (including internal ones).
 * @method clear
 * @private
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
 * @requires monoco-state
 * @requires monoco-behavior
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