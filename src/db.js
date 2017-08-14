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
 * This module manages System Runtime database. <br>
 * System Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * System Runtime Database is closely linked to System Runtime metamodel and System Runtime components because: <br>
 * - all operations done by System Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *  
 * @module db
 * @requires component
 * @requires helper
 * @requires log
 * @class db
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
    '_Runtime',
    '_Schema',
    '_Model',
    '_GeneratedModel',
    '_Behavior',
    '_State',
    '_Type',
    '_Metamodel',
    '_Database',
    '_System',
    '_ClassInfo',
    '_Message',
    '_Channel',
    '_Logger',
    '_Log'
  ],
  coreDb = [
    '_Log',
    '_Schema',
    '_Logger',
    '_Model',
    '_GeneratedModel',
    '_State',
    '_Type'
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
  if (exports._Schema.count()) {
    for (schemaId in store._Schema) {
      schema = JSON.parse(JSON.stringify(store._Schema[schemaId]));
      if (!schema._core) {
        dbDump.schemas[schemaId] = schema;
      }
    }
  }

  // models
  dbDump.models = {};
  if (exports._Model.count()) {
    for (modelId in store._Model) {
      model = JSON.parse(JSON.stringify(store._Model[modelId]));
      if (!model._core) {
        dbDump.models[modelId] = model;
      }
    }
  }

  // types
  dbDump.types = {};
  if (exports._Type.count()) {
    for (typeId in store._Type) {
      type = JSON.parse(JSON.stringify(store._Type[typeId]));
      if (!type.core) {
        dbDump.types[type.name] = type;
      }
    }
  }

  // behaviors
  dbDump.behaviors = {};
  for (behaviorId in store._Behavior) {
    behavior = JSON.parse(JSON.stringify(store._Behavior[behaviorId]));
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

/*
 * Import system into the database
 * @method impSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @return {String} the id of the imported System Runtime system
 * @private
 */
function impSystem(importedSystem) {
  var result = '',
    collectionName = '',
    componentId = '',
    typeName = '',
    schemaName = '',
    modelName = '',
    behaviorId = '',
    systems = [],
    id = null;

  if (importedSystem) {

    // remove deprecated property
    delete importedSystem.subsystem;

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
      exports._Behavior.insert(importedSystem.behaviors[behaviorId]);
    }

    // add components
    for (collectionName in importedSystem.components) {
      for (componentId in importedSystem.components[collectionName]) {
        exports[collectionName].insert(importedSystem.components[collectionName][componentId]);
      }
    }

    // reset info if already a master system
    systems = exports._System.find({
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
    exports._System.insert(importedSystem);

    result = importedSystem._id;

  }

  return result;
}

/*
 * Export a system from the database
 * @method expSystem
 * @return {String} a stringified system
 * @private
 */
function expSystem() {
  var result = '',
    collectionName = '',
    behaviorId = '',
    systems = [],
    id = null,
    dbDump = null,
    mastersystem = null,
    behavior = null,
    exportedSystem = {};


  // get id of the master system
  systems = exports._System.find({
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
    result = '{}';
    $log.masterSystemNotFound();
  }

  return result;
}


/*
 * Export a sub-system.
 * @method exportSubsystem
 * @param {JSON} params parameters
 * @return {String} a stringified sub-system
 * @private
 * 
 */
function expSubsystem(params) {
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
  result = exports._System.find({
    'master': true
  });
  if (result.length) {
    defaultName = result[0].name;
  }

  system.name = params.name || 'sub_' + defaultName;
  system.version = params.version || '0.0.1';
  system.description = params.description || '';

  // schemas
  system.schemas = {};
  if (params.schemas) {
    result = exports._Schema.find(params.schema);

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
    result = exports._Model.find(params.models);

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
    result = exports._Type.find(params.types);

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
    behavior = exports._Behavior.find(params.behaviors);

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


/* Public methods */


/** 
 * A collection of documents managed by System Runtime. <br>
 * Internal collections manage core objects of System Runtime (schema, type, ...). <br>
 * Public collections manage components of the same class. <br>
 * 
 * @class DatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 */
var DatabaseCollection = function (name) {
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
 * $db.Person.find({'name': 'laure'}); <br>
 * $db.Person.find({'name': 'laure', 'age' : 24}); <br>
 * $db.Person.find([{'name': 'rene'}, {'name': 'robert'}]);
 */
DatabaseCollection.prototype.find = function (query) {
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
 * Before inserting the document, System Runtime checks that the document is compliant
 * with its class definition. <br> 
 * Then, after inserting it, we create the component.
 * @method insert
 * @param {Object|Array} document a new object to add
 * @return {Array} array of id created
 * 
 * @example 
 * $db.Person.insert({<br>
 *      'name': 'bob', <br>
 *      'firstName': 'Saint-Clar', <br>
 *      'age': 43 <br>
 * }); <br>
 */
DatabaseCollection.prototype.insert = function (document) {
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
      case this.name === '_Schema':
      case this.name === '_Logger':
      case this.name === '_Model':
      case this.name === '_Type':
      case this.name === '_GeneratedModel':
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

        if (this.name === '_Message') {
          if ($helper.isRuntime()) {
            channels = exports._Channel.find({});
            var length = channels.length;
            for (var i = 0; i < length; i++) {
              channel = $helper.getRuntime().require(channels[i]._id);
              $workflow.state({
                'component': channels[i]._id,
                'state': obj.event,
                'data': obj.data
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
 * $db.Cars.update({'code': 'AZD-71'}, {'price': '10000$'}); <br>
 * $db.Cars.update([{'code': 'AZD-71'}, {'code': 'AZD-65'}], {'price': '10000$'}); <br>
 * $db.Cars.update({'code': 'AZD-71'}, {'price': '10000$'}, {'upsert': true}); <br>
 */
DatabaseCollection.prototype.update = function (query, update, options) {
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
          if (this.name !== '_Schema' && this.name !== '_Model' && this.name !== '_GeneratedModel') {
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
                  'component': docs[i]._id,
                  'state': attributeName,
                  'data': [update[attributeName]]
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
 * $db.Cars.remove({'code': 'AZD-71'}); <br>
 * $db.Cars.remove([{'code': 'AZD-71'}, {'code': 'AZD-65'}]); <br>
 */
DatabaseCollection.prototype.remove = function (query) {
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
DatabaseCollection.prototype.count = function () {
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
  if (Object.keys(store._Log).length > 1000) {
    store._Log = {};
  }

  store._Log[logId] = {
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
 * Create a new {{#crossLink "DatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
function collection(name) {
  exports[name] = new DatabaseCollection(name);
}


/*
 * Import a system into the database
 * @method importSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @return {String} the id of the imported System Runtime system
 */
function importSystem(importedSystem) {
  return impSystem(importedSystem);
}


/*
 * Export a system.
 * @method exportSystem
 * @param {JSON} params parameters
 * @return {String} a stringified system
 * 
 * @example
 * $db.exportSystem(); // export all the system <br>
 * $db.exportSystem({'schemas':{'name':'Person'}}); // filter export on schemas <br>
 * $db.exportSystem({'types':{'name':'address'}}); // filter export on types <br>
 * $db.exportSystem({'behaviors':{'component':'laure'}}); // filter export on behaviors <br>
 * $db.exportSystem({'components':{'Person': {'country': 'France'}}}); // filter export on components <br>
 * $db.exportSystem({'schemas':{'name':'Person'},'components':{'Person': {'country': 'France'}}}); // combine filters
 */
function exportSystem(params) {
  var result = '';
  if (params) {
    result = expSubsystem(params);
  } else {
    result = expSystem();
  }
  return result;
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

  runtimeSystem = exports._System.find({
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

  // reimport System Runtime core system
  runtimeSystemId = exports.importSystem(runtimeSystem);
  $component.get(runtimeSystemId).start();
}


/* exports */


/**
 * This module manages System Runtime database. <br>
 * System Runtime database is a micro NoSQL Database that contains: <br>
 * - collections to store documents (schemas, types, components, ...) and <br>
 * - APIs to import or export documents. <br>
 * 
 * System Runtime database is closely linked to System Runtime metamodel because: <br>
 * - all operations done by System Runtime database must be compliant with the model before being finished, <br>
 * - insert operation automatically creates a component and <br>
 * - remove operation automatically destroy a component.
 *   
 * @module db
 * @requires component
 * @requires helper
 * @requires log
 * @class db
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
 * Create a new {{#crossLink "DatabaseCollection"}}{{/crossLink}}.
 * @method collection
 * @param {String} name of the collection
 */
exports.collection = collection;


/**
 * System Runtime database store that lists all the collections.
 * @property {JSON} store
 */
exports.store = store;


/**
 * Import a system into the database
 * @method importSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @return {String} the id of the imported System Runtime system
 */
exports.importSystem = importSystem;


/**
 * Export a system.
 * @method exportSystem
 * @param {JSON} params parameters
 * @return {String} a stringified system
 * 
 * @example
 * $db.exportSystem(); // export all the system <br>
 * $db.exportSystem({'schemas':{'name':'Person'}}); // filter export on schemas <br>
 * $db.exportSystem({'types':{'name':'address'}}); // filter export on types <br>
 * $db.exportSystem({'behaviors':{'component':'laure'}}); // filter export on behaviors <br>
 * $db.exportSystem({'components':{'Person': {'country': 'France'}}}); // filter export on components <br>
 * $db.exportSystem({'schemas':{'name':'Person'},'components':{'Person': {'country': 'France'}}}); // combine filters
 */
exports.exportSystem = exportSystem;


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