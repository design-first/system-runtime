/*
 * System Runtime
 *
 * https://designfirst.io/systemruntime/
 *
 * Copyright 2022 Erwan Carriou
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
 * @module db
 * @requires component
 * @requires metamodel
 * @requires helper
 * @requires log
 * @requires behavior
 * @requires state
 * @requires workflow
 * @requires mson
 * @requires history
 * @description This module manages System Runtime database.
 * System Runtime database is a micro NoSQL Database that contains:
 * - collections to store documents (schemas, types, components, ...) and
 * - APIs to import or export documents.
 *
 * System Runtime Database is closely linked to System Runtime metamodel and System Runtime components because:
 * - all operations done by System Runtime database must be compliant with the model before being finished,
 * - insert operation automatically creates a component and
 * - remove operation automatically destroy a component.
 */

import $component from './component.js'
import $metamodel from './metamodel.js'
import $helper from './helper.js'
import $log from './log.js'
import $history from './history.js'
import $behavior from './behavior.js'
import $state from './state.js'
import $workflow from './workflow.js'
import $mson from './mson.js'

/* Private properties */

let collectionNames = []
let internalDB = [
  '_Runtime',
  '_Schema',
  '_GeneratedSchema',
  '_Model',
  '_GeneratedModel',
  '_Behavior',
  '_Type',
  '_Metamodel',
  '_Database',
  '_System',
  '_Message',
  '_Channel',
  '_Logger',
  '_History',
]
let coreDb = [
  '_Schema',
  '_GeneratedSchema',
  '_Logger',
  '_Model',
  '_GeneratedModel',
  '_Type',
  '_History',
]

/* Private methods */

/**
 * @method dump
 * @returns {Object} the dump of the database. The dump is an object that contains: <br>
 * {Object} schemas the schemas store in the database <br>
 * {Object} types the types store in the database <br>
 * {Object} behaviors the behaviors store in the database <br>
 * {Object} components the components store in the database
 * @private
 * @description Dump the database
 */
function dump() {
  let dbDump = {}
  let collectionName = ''
  let behaviorId = ''
  let typeId = ''
  let type = null
  let behavior = null
  let schema = null
  let model = null
  let collection = null
  let schemaId = ''
  let modelId = ''
  let length = 0
  let i = 0
  let id = ''

  // schemas
  dbDump.schemas = {}
  if (collections._Schema.count()) {
    for (schemaId in store._Schema) {
      if (!store._Schema[schemaId][$mson.CORE]) {
        schema = JSON.parse(JSON.stringify(store._Schema[schemaId]))
        dbDump.schemas[schemaId] = schema
      }
    }
  }

  // models
  dbDump.models = {}
  if (collections._Model.count()) {
    for (modelId in store._Model) {
      if (!store._Model[modelId][$mson.CORE]) {
        model = JSON.parse(JSON.stringify(store._Model[modelId]))
        dbDump.models[modelId] = model
      }
    }
  }

  // types
  dbDump.types = {}
  if (collections._Type.count()) {
    for (typeId in store._Type) {
      if (!store._Type[typeId].core) {
        type = JSON.parse(JSON.stringify(store._Type[typeId]))
        dbDump.types[type.name] = type
      }
    }
  }

  // behaviors
  dbDump.behaviors = {}
  for (behaviorId in store._Behavior) {
    if (!store._Behavior[behaviorId].core) {
      behavior = JSON.parse(JSON.stringify(store._Behavior[behaviorId]))
      dbDump.behaviors[behaviorId] = behavior
    }
  }

  // components
  dbDump.components = {}
  length = collectionNames.length
  for (i = 0; i < length; i++) {
    collectionName = collectionNames[i]
    if (collections[collectionName].count()) {
      collection = JSON.parse(JSON.stringify(store[collectionName]))

      for (id in collection) {
        if (collection[id][$mson.CORE]) {
          delete collection[id]
        }
      }

      if (Object.keys(collection).length) {
        dbDump.components[collectionName] = collection
      }
    }
  }

  return dbDump
}

/**
 * @class _Array
 * @private
 * @description Sub class to override sort method of Array Class
 */
function _Array() {
  let arr = []

  /**
   * @method sort
   * @param {Function|Object} param the sort function or the sort query
   * @returns {Array} the sorted array
   * @description Override sort method
   */
  arr.sort = function sort(param) {
    let field = ''
    let arrCopy = []

    // copy
    arr.forEach(function (val) {
      arrCopy.push(val)
    })

    if (param instanceof Function) {
      arrCopy.sort(param)
    } else {
      field = Object.keys(param)[0]
      arrCopy.sort(function (docA, docB) {
        if (docA[field] < docB[field]) {
          return param[field] === 1 ? -1 : 1
        }
        if (docA[field] > docB[field]) {
          return param[field] === 1 ? 1 : -1
        }
        return 0
      })
    }

    return arrCopy
  }

  return arr
}

_Array.prototype = []

/**
 * @method isValidWithSelectors
 * @param {Object} field field on which made the search
 * @param {Object} query query object
 * @param {Object} document document object
 * @returns {Boolean} true if the query  used for the search is valid with the document
 * @private
 * @description Test if the query used for the search is valid with the document
 */
function isValidWithSelectors(field, query, document) {
  let result = true
  let selector = ''

  search: for (selector in query) {
    switch (true) {
      case selector === '$eq':
        if (query[selector] instanceof RegExp) {
          if (document[field].toString().match(query[selector]) === null) {
            result = false
            break search
          }
        } else {
          if (document[field] !== query[selector]) {
            result = false
            break search
          }
        }
        break
      case selector === '$gt':
        if (document[field] <= query[selector]) {
          result = false
          break search
        }
        break
      case selector === '$gte':
        if (document[field] < query[selector]) {
          result = false
          break search
        }
        break
      case selector === '$lt':
        if (document[field] >= query[selector]) {
          result = false
          break search
        }
        break
      case selector === '$lte':
        if (document[field] > query[selector]) {
          result = false
          break search
        }
        break
      case selector === '$ne':
        if (document[field] === query[selector]) {
          result = false
          break search
        }
        break
      case selector === '$in':
        if (
          Array.isArray(query[selector]) &&
          query[selector].indexOf(document[field]) === -1
        ) {
          result = false
          break search
        }
        break
      case selector === '$nin':
        if (
          Array.isArray(query[selector]) &&
          query[selector].indexOf(document[field]) !== -1
        ) {
          result = false
          break search
        }
        break
      default:
        break
    }
  }
  return result
}

/**
 * @method isValid
 * @param {Object} query query object
 * @param {Object} document document object
 * @returns {Boolean} true if the query of search is valid with the document
 * @private
 * @description Test if the query of search is valid with the document
 */
function isValid(query, document) {
  let result = true
  let findInArray = false
  let field = ''
  let i = 0
  let length = 0

  search: for (field in query) {
    if (typeof document[field] !== 'undefined') {
      switch (true) {
        // regular expression
        case query[field] instanceof RegExp:
          if (Array.isArray(document[field]) && !Array.isArray(query[field])) {
            length = document[field].length
            for (i = 0; i < length; i++) {
              if (document[field][i].toString().match(query[field]) !== null) {
                findInArray = true
                break search
              }
            }
            result = findInArray
          } else {
            if (document[field].toString().match(query[field]) === null) {
              result = false
              break search
            }
          }
          break

        // query selectors
        case query[field] instanceof Object && !Array.isArray(query[field]):
          result = isValidWithSelectors(field, query[field], document)
          break

        // multiple query
        case Array.isArray(document[field]) && !Array.isArray(query[field]):
          if (document[field].indexOf(query[field]) === -1) {
            result = false
            break search
          }
          break

        // simple query
        default:
          if (document[field] !== query[field]) {
            result = false
            break search
          }
          break
      }
    } else {
      result = false
      break
    }
  }
  return result
}

/**
 * @method impSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @returns {String} the id of the imported System Runtime system
 * @private
 * @description Import system into the database
 */
function impSystem(importedSystem) {
  let result = ''
  let collectionName = ''
  let componentId = ''
  let typeName = ''
  let schemaName = ''
  let modelName = ''
  let behaviorId = ''
  let systems = []

  if (importedSystem) {
    // add types
    for (typeName in importedSystem.types) {
      $metamodel.type(importedSystem.types[typeName])
    }

    // add schemas
    for (schemaName in importedSystem.schemas) {
      $metamodel.schema(importedSystem.schemas[schemaName])
    }

    // add models
    for (modelName in importedSystem.models) {
      $metamodel.model(importedSystem.models[modelName])
    }

    $metamodel.create()

    // add behaviors
    for (behaviorId in importedSystem.behaviors) {
      collections._Behavior.insert(importedSystem.behaviors[behaviorId])
    }

    $log.initDb()

    // add components
    for (collectionName in importedSystem.components) {
      for (componentId in importedSystem.components[collectionName]) {
        collections[collectionName].insert(
          importedSystem.components[collectionName][componentId]
        )
      }
    }

    // reset info if already a master system
    systems = collections._System.find({
      master: true,
    })
    if (systems.length) {
      if (systems[0][$mson.ID] === importedSystem[$mson.ID]) {
        importedSystem.master = true
      } else {
        if (importedSystem.master) {
          systems[0].master = false
        }
      }
    }

    // insert the system in DB
    collections._System.insert(importedSystem)

    result = importedSystem[$mson.ID]
  }

  return result
}

/**
 * @method expSystem
 * @returns {String} a stringified system
 * @private
 * @description Export a system from the database
 */
function expSystem() {
  let result = ''
  let collectionName = ''
  let systems = []
  let id = null
  let dbDump = null
  let mastersystem = null
  let exportedSystem = {}

  // get id of the master system
  systems = collections._System.find({
    master: true,
  })

  if (systems.length) {
    mastersystem = systems[0]
    id = mastersystem[$mson.ID]

    // prop
    exportedSystem[$mson.ID] = id
    exportedSystem.name = mastersystem.name
    exportedSystem.description = mastersystem.description
    exportedSystem.version = mastersystem.version
    exportedSystem.master = true

    // dump
    dbDump = dump()
    for (collectionName in dbDump) {
      if (dbDump.hasOwnProperty(collectionName)) {
        exportedSystem[collectionName] = dbDump[collectionName]
      }
    }

    result = JSON.stringify(exportedSystem)
  } else {
    result = '{}'
    $log.masterSystemNotFound()
  }

  return result
}

/**
 * @method exportSubsystem
 * @param {JSON} params parameters
 * @returns {String} a stringified sub-system
 * @private
 * @description Export a sub-system
 */
function expSubsystem(params) {
  let system = {}
  let result = []
  let defaultName = ''
  let i = 0
  let length = 0
  let schema = null
  let type = null
  let model = null
  let behavior = null
  let component = null
  let className = ''

  // default values
  result = collections._System.find({
    master: true,
  })
  if (result.length) {
    defaultName = result[0].name
  }

  system.name = params.name || 'sub_' + defaultName
  system.version = params.version || '0.0.1'
  system.description = params.description || ''

  // schemas
  system.schemas = {}
  if (params.schemas) {
    result = collections._Schema.find(params.schema)

    length = result.length
    for (i = 0; i < length; i++) {
      schema = result[i]
      if (!schema[$mson.CORE]) {
        system.schemas[schema[$mson.ID]] = schema
      }
    }
  }

  // models
  system.models = {}
  if (params.models) {
    result = collections._Model.find(params.models)

    length = result.length
    for (i = 0; i < length; i++) {
      model = result[i]
      if (!model[$mson.CORE]) {
        system.models[model[$mson.ID]] = model
      }
    }
  }

  // types
  system.types = {}
  if (params.types) {
    result = collections._Type.find(params.types)

    length = result.length
    for (i = 0; i < length; i++) {
      type = result[i]
      if (!type[$mson.CORE]) {
        system.types[type[$mson.ID]] = type
      }
    }
  }

  // behaviors
  system.behaviors = {}
  if (params.behaviors) {
    behavior = collections._Behavior.find(params.behaviors)

    length = result.length
    for (i = 0; i < length; i++) {
      behavior = result[i]
      if (!behavior.core) {
        system.behaviors[behavior[$mson.ID]] = behavior
      }
    }
  }

  // components
  system.components = {}
  if (params.components) {
    for (className in params.components) {
      if (collections[className]) {
        system.components[className] = {}

        result = collections[className].find(params.components[className])
        length = result.length
        for (i = 0; i < length; i++) {
          component = result[i]
          system.components[className][component[$mson.ID]] = component
        }
      }
    }
  }

  return JSON.stringify(system)
}

/* Public properties */

/**
 * @property {JSON} store
 * @description System Runtime database store that lists all the collections
 */
const store = {}

/**
 * @property {JSON} store
 * @description System Runtime database store that lists all the collections
 */
const collections = {}

/* Public methods */

/**
 * @class DatabaseCollection
 * @constructor
 * @param {String} name name of the new collection
 * @@description A collection of documents managed by System Runtime.
 * Internal collections manage core objects of System Runtime (schema, type, ...).
 * Public collections manage components of the same class.
 */
let DatabaseCollection = function DatabaseCollection(name) {
  if ($metamodel.getSchema(name) || internalDB.indexOf(name) !== -1) {
    store[name] = {}
    this.name = name
    if (internalDB.indexOf(name) === -1) {
      collectionNames.push(name)
    }
  } else {
    $log.invalidCollectionName(name)
  }
}

/**
 * @method find
 * @param {Object|Array} query
 * @returns {Array} Array of documents that map the query
 * @description Find a document into the collection
 *
 * @example
 * $db.collections.Person.find({'name': 'laure'});
 * $db.collections.Person.find({'name': 'laure', 'age' : 24});
 * $db.collections.Person.find([{'name': 'rene'}, {'name': 'robert'}]);
 */
DatabaseCollection.prototype.find = function find(query) {
  let result = new _Array()
  let resultId = {}
  let id = ''
  let document = {}

  query = query || null

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(
        function multiSearch(criteria) {
          for (id in store[this.name]) {
            document = store[this.name][id]
            if (isValid(criteria, document)) {
              if (typeof resultId[id] === 'undefined') {
                result.push(document)
                resultId[id] = true
              }
            }
          }
        }.bind(this)
      )
    } else {
      for (id in store[this.name]) {
        document = store[this.name][id]
        if (isValid(query, document)) {
          result.push(document)
        }
      }
    }
  } else {
    for (id in store[this.name]) {
      document = store[this.name][id]
      result.push(document)
    }
  }

  return result
}

/**
 * @method insert
 * @param {Object|Array} document a new object to add
 * @returns {Array} array of id created
 * @description Insert an new document into the collection.
 * Before inserting the document, System Runtime checks that the document is compliant
 * with its class definition.
 * Then, after inserting it, we create the component.
 *
 * @example
 * $db.collections.Person.insert({
 *      'name': 'bob',
 *      'firstName': 'Saint-Clar',
 *      'age': 43
 * });
 */
DatabaseCollection.prototype.insert = function insert(document) {
  let doc = []
  let Component = null
  let result = []

  if (Array.isArray(document)) {
    doc = document
  } else {
    doc.push(document)
  }

  doc.forEach(
    function multiInsert(obj) {
      let channels = []

      switch (true) {
        case obj === null:
          $log.invalidDocumentOnDbInsert(obj, this.name)
          break
        case this.name === '_Schema':
        case this.name === '_Logger':
        case this.name === '_Model':
        case this.name === '_Type':
        case this.name === '_GeneratedModel':
        case this.name === '_GeneratedSchema':
        case $metamodel.isValidObject(obj, $metamodel.getModel(this.name)):
          if (typeof obj[$mson.ID] === 'undefined') {
            obj[$mson.ID] = $helper.generateId()
          }

          $metamodel.prepareObject(obj, $metamodel.getModel(this.name))

          store[this.name][obj[$mson.ID]] = obj

          result.push(obj[$mson.ID])

          Component = $component.get(this.name)
          if (Component) {
            new Component(obj)
          } else {
            if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
              $history.pushState({
                action: 'insert',
                collection: this.name,
                id: obj[$mson.ID],
                value: JSON.stringify(obj),
              })
            }

            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper.getRuntime().require('db').insert({
                collection: this.name,
                document: obj,
              })
            }
          }

          if (this.name === '_Message') {
            if ($helper.isRuntime()) {
              channels = collections._Channel.find({})
              let length = channels.length
              for (let i = 0; i < length; i++) {
                $helper.getRuntime().require(channels[i][$mson.ID])
                $workflow.process({
                  component: channels[i][$mson.ID],
                  state: obj.event,
                  data: obj.data,
                })
              }
            }
          }

          break
        default:
          $log.invalidDocumentOnDbInsert(obj, this.name)
          break
      }
    }.bind(this)
  )

  return result
}

/**
 * @method update
 * @param {Object|Array} query query to find the documents to update
 * @param {Object} update update to make
 * @param {Object} options
 * {Boolean} upsert true if we create a document when no document is found by the query
 * @returns {Array} array of id of updated documents
 * @description Update documents into a collection
 *
 * @example
 * $db.collections.Cars.update({'code': 'AZD-71'}, {'price': '10000$'});
 * $db.collections.Cars.update([{'code': 'AZD-71'}, {'code': 'AZD-65'}], {'price': '10000$'});
 * $db.collections.Cars.update({'code': 'AZD-71'}, {'price': '10000$'}, {'upsert': true});
 */
DatabaseCollection.prototype.update = function update(query, update, options) {
  let docs = this.find(query)
  let result = []
  let i = 0
  let length = docs.length
  let attributeName = ''
  let schema = $metamodel.getModel(this.name)
  let type = ''
  let createdDocumentId = []

  options = options || {}
  if (typeof options.upsert === 'undefined') {
    options.upsert = options.upsert || false
  }

  if (update) {
    // upsert case
    if (length === 0 && options.upsert) {
      if (query[$mson.ID]) {
        update[$mson.ID] = query[$mson.ID]
      }
      createdDocumentId = this.insert(update)
      if (createdDocumentId.length === 1) {
        result.push(createdDocumentId[0])
      }
    }

    for (i = 0; i < length; i++) {
      // case of update of _id
      if (
        typeof update[$mson.ID] !== 'undefined' &&
        update[$mson.ID] !== docs[i][$mson.ID]
      ) {
        $log.updateUuid(
          docs[i][$mson.ID],
          update[$mson.ID],
          typeof $component.get(update[$mson.ID]) !== 'undefined'
        )
      }

      for (attributeName in update) {
        if (typeof docs[i][attributeName.split('.')[0]] !== 'undefined') {
          if (
            this.name !== '_Schema' &&
            this.name !== '_GeneratedSchema' &&
            this.name !== '_Model' &&
            this.name !== '_GeneratedModel'
          ) {
            // check type
            type = ''
            if (attributeName.indexOf('_') !== 0) {
              if (attributeName.indexOf('.') !== -1) {
                type = $metamodel.getModelPathType(this.name, attributeName)
              } else {
                type = schema[attributeName].type
              }
            } else {
              if ($mson.SCHEMA_DEFINITION[attributeName]) {
                type = $mson.SCHEMA_DEFINITION[attributeName].type
              }
            }
            if (type) {
              if ($metamodel.isValidType(update[attributeName], type, true)) {
                if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
                  $history.pushState({
                    action: 'update',
                    collection: this.name,
                    id: docs[i][$mson.ID],
                    field: attributeName,
                    value: JSON.stringify(update[attributeName]),
                    oldValue: JSON.stringify(docs[i][attributeName]),
                  })
                }

                docs[i][attributeName] = update[attributeName]

                result.push(docs[i][$mson.ID])

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper.getRuntime().require('db').update({
                    collection: this.name,
                    id: docs[i][$mson.ID],
                    field: attributeName,
                    value: update[attributeName],
                  })
                }
                if (type === 'array') {
                  $workflow.process({
                    component: docs[i][$mson.ID],
                    state: attributeName,
                    data: [update[attributeName], 'reset'],
                  })
                } else {
                  $workflow.process({
                    component: docs[i][$mson.ID],
                    state: attributeName,
                    data: [update[attributeName]],
                  })
                }
              } else {
                $log.invalidPropertyTypeOnDbUpdate(
                  this.name,
                  docs[i][$mson.ID],
                  attributeName,
                  update[attributeName],
                  type
                )
              }
            } else {
              $log.unknownPropertyOnDbUpdate(
                this.name,
                attributeName,
                docs[i][$mson.ID]
              )
            }
          } else {
            // TODO more check in case of schema update
            if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
              $history.pushState({
                action: 'update',
                collection: this.name,
                id: docs[i][$mson.ID],
                field: attributeName,
                value: JSON.stringify(update[attributeName]),
                oldValue: JSON.stringify(docs[i][attributeName]),
              })
            }

            docs[i][attributeName] = update[attributeName]

            result.push(docs[i][$mson.ID])

            if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
              $helper.getRuntime().require('db').update({
                collection: this.name,
                id: docs[i][$mson.ID],
                field: attributeName,
                value: update[attributeName],
              })
            }
          }
        }
      }
    }
  }

  return result
}

/**
 * @method remove
 * @param {Object|Array} query query to find the documents to remove
 * @returns {Array} list of documents id removed
 * @description Remove a document from the collection.
 * When a document is removed, the component is destroyed.
 *
 * @example
 * $db.collections.Cars.remove({'code': 'AZD-71'});
 * $db.collections.Cars.remove([{'code': 'AZD-71'}, {'code': 'AZD-65'}]);
 */
DatabaseCollection.prototype.remove = function remove(query) {
  let result = []
  let id = ''
  let component = null
  let object = {}

  query = query || null

  if (query && Object.keys(query).length) {
    if (Array.isArray(query)) {
      query.forEach(
        function multiRemove(criteria) {
          for (id in store[this.name]) {
            object = store[this.name][id]

            if (isValid(criteria, object)) {
              if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
                $history.pushState({
                  action: 'remove',
                  collection: this.name,
                  id: id,
                  oldValue: JSON.stringify(store[this.name][id]),
                })
              }

              delete store[this.name][id]

              result.push(id)

              component = $component.get(id)
              if (component) {
                component.destroy()
              }
              if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                $helper.getRuntime().require('db').remove({
                  collection: this.name,
                  id: id,
                })
              }
            }
          }
        }.bind(this)
      )
    } else {
      for (id in store[this.name]) {
        object = store[this.name][id]

        if (isValid(query, object)) {
          if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
            $history.pushState({
              action: 'remove',
              collection: this.name,
              id: id,
              oldValue: JSON.stringify(store[this.name][id]),
            })
          }

          delete store[this.name][id]

          result.push(id)

          component = $component.get(id)
          if (component) {
            component.destroy()
          }
          if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
            $helper.getRuntime().require('db').remove({
              collection: this.name,
              id: id,
            })
          }
        }
      }
    }
  } else {
    for (id in store[this.name]) {
      if ($history.isEnabled() && this.name.indexOf('_') !== 0) {
        $history.pushState({
          action: 'remove',
          collection: this.name,
          id: id,
          oldValue: JSON.stringify(store[this.name][id]),
        })
      }

      delete store[this.name][id]

      if (coreDb.indexOf(this.name) === -1) {
        component = $component.get(id)
        if (component) {
          component.destroy()
        }
      }
      if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
        $helper.getRuntime().require('db').remove({
          collection: this.name,
          id: id,
        })
      }
      result.push(id)
    }
  }

  return result
}

/**
 * @method count
 * @returns {Number} number of documents in the collection
 * @description Count the number of documents in the collection
 */
DatabaseCollection.prototype.count = function count() {
  return store[this.name] ? Object.keys(store[this.name]).length : 0
}

/* Public methods */

/**
 * @method collection
 * @param {String} name of the collection
 * @description Create a new DatabaseCollection
 */
function collection(name) {
  collections[name] = new DatabaseCollection(name)
}

/**
 * @method importSystem
 * @param {JSON} importedSystem a System Runtime system to import
 * @returns {String} the id of the imported System Runtime system
 * @description Import a system into the database
 */
function importSystem(importedSystem) {
  return impSystem(importedSystem)
}

/**
 * @method exportSystem
 * @param {JSON} params parameters
 * @returns {String} a stringified system
 * @description Export a system
 *
 * @example
 * $db.exportSystem(); // export all the system
 * $db.exportSystem({'schemas':{'name':'Person'}}); // filter export on schemas
 * $db.exportSystem({'types':{'name':'address'}}); // filter export on types
 * $db.exportSystem({'behaviors':{'component':'laure'}}); // filter export on behaviors
 * $db.exportSystem({'components':{'Person': {'country': 'France'}}}); // filter export on components
 * $db.exportSystem({'schemas':{'name':'Person'},'components':{'Person': {'country': 'France'}}}); // combine filters
 */
function exportSystem(params) {
  let result = ''

  if (params) {
    result = expSubsystem(params)
  } else {
    result = expSystem()
  }
  return result
}

/**
 * @method clear
 * @description Clear the database
 */
function clear() {
  let length = 0
  let i = 0
  let collectionName = ''

  // remove collections
  length = collectionNames.length
  for (i = 0; i < length; i++) {
    collectionName = collectionNames[i]
    collections[collectionName].remove()
  }

  // remove internal collections
  length = internalDB.length
  for (i = 0; i < length; i++) {
    collectionName = internalDB[i]
    collections[collectionName].remove()
  }
}

/**
 * @method init
 * @description Init the database
 */
function init() {
  let runtimeSystemId = ''
  let runtimeSystem = null

  runtimeSystem = collections._System.find({
    _id: 'e89c617b6b15d24',
  })[0]

  // clear all the data in memory
  clear()
  $component.clear()
  $metamodel.clear()
  $state.clear()
  $behavior.clear()
  $history.clear()

  // init metamodel
  $metamodel.init()

  // reimport System Runtime core system
  runtimeSystemId = importSystem(runtimeSystem)
  $component.get(runtimeSystemId).start()
}

export default {
  store,
  collection,
  collections,
  importSystem,
  exportSystem,
  clear,
  init,
}
