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
 * @module metamodel
 * @requires db
 * @requires log
 * @requires component
 * @requires workflow
 * @requires helper
 * @requires mson
 * @description This module manages System Runtime metamodel.
 * System Runtime metamodel loads schemas and types, analyzes them and
 * creates the component classes and related DatabaseCollections.
 */

import $db from './db.js'
import $log from './log.js'
import $component from './component.js'
import $helper from './helper.js'
import $mson from './mson.js'

/* Private properties */

let store = {
  inheritance: {},
  inheritanceTree: {},
  schemas: {},
  generatedSchemas: {},
  models: {},
  generatedModels: {},
  states: {},
  type: {},
}

/* Private methods */

/**
 * @method isInternalName
 * @param {String} name
 * @private
 * @description is name an internal name
 */
function isInternalName(name) {
  let result = true

  if ($mson.INTERNAL_NAMES.indexOf(name) === -1) {
    result = false
  }
  return result
}

/**
 * @method generateModels
 * @private
 * @description Generate the models
 */
function generateModels() {
  let att = ''
  let name = ''
  let schemaName = ''
  let schema = {}
  let schemaDef = null
  let modelName = ''
  let modelParent = null
  let modelExt = null
  let modelDef = null
  let model = {}
  let mergedModel = {}
  let parents = []
  let length = 0
  let i = 0
  let j = 0
  let nbAncestors = 0
  let sortInheritTree = []

  // default values
  for (schemaName in store.generatedSchemas) {
    schema = store.generatedSchemas[schemaName]

    // set model internal properties
    model = {
      _name: schema[$mson.NAME],
    }

    // set _core
    if (typeof schema[$mson.CORE] !== 'undefined') {
      model[$mson.CORE] = schema[$mson.CORE]
    }

    // set inherit
    if (Array.isArray(schema[$mson.INHERIT])) {
      model[$mson.INHERIT] = schema[$mson.INHERIT]
    }

    // set class
    if (typeof schema[$mson.CLASS] !== 'undefined') {
      model[$mson.CLASS] = schema[$mson.CLASS]
    }

    // set description
    if (typeof schema[$mson.DESCRIPTION] !== 'undefined') {
      model[$mson.DESCRIPTION] = schema[$mson.DESCRIPTION]
    }

    // check valid name
    for (att in schema) {
      if (!isInternalName(att) && att.indexOf('_') === 0) {
        $log.invalidSchemaPropertyName(schema[$mson.NAME], att)
      }
    }

    //  set model default values
    for (att in schema) {
      switch (true) {
        case schema[att] === 'property':
          model[att] = {
            type: 'any',
            readOnly: false,
            mandatory: false,
            default: '',
            description: att,
            label: att,
          }
          break
        case schema[att] === 'link':
          model[att] = {
            type: '_Component',
            readOnly: false,
            mandatory: false,
            default: '',
            description: att,
            label: att,
          }
          break
        case schema[att] === 'method':
          model[att] = {
            params: [
              {
                name: 'param1',
                type: 'any',
                mandatory: false,
                default: null,
              },
              {
                name: 'param2',
                type: 'any',
                mandatory: false,
                default: null,
              },
              {
                name: 'param3',
                type: 'any',
                mandatory: false,
                default: null,
              },
            ],
            result: 'any',
            description: att,
          }
          break
        case schema[att] === 'event':
          model[att] = {
            params: [
              {
                name: 'param1',
                type: 'any',
                mandatory: false,
                default: null,
              },
              {
                name: 'param2',
                type: 'any',
                mandatory: false,
                default: null,
              },
              {
                name: 'param3',
                type: 'any',
                mandatory: false,
                default: null,
              },
            ],
            description: att,
          }
          break
        case schema[att] === 'collection':
          model[att] = {
            type: ['_Component'],
            readOnly: false,
            mandatory: false,
            default: [],
            description: att,
            label: att,
          }
          break
        default:
          if (!isInternalName(att)) {
            $log.invalidSchemaProperty(schema[$mson.NAME], att)
          }
          break
      }
    }

    store.generatedModels[model[$mson.NAME]] = model
  }

  // models to override
  for (modelName in store.generatedModels) {
    model = store.generatedModels[modelName]
    name = model[$mson.NAME]
    modelExt = store.models[name]
    if (modelExt) {
      mergedModel = merge(modelExt, model)
      store.generatedModels[name] = mergedModel
    }
  }

  // inheritance
  sortInheritTree = sortInheritanceTree()

  nbAncestors = sortInheritTree.length
  for (i = 0; i < nbAncestors; i++) {
    modelName = sortInheritTree[i]
    model = store.generatedModels[modelName]

    if (model) {
      parents = getParents(modelName)
      parents.reverse()

      length = parents.length
      for (j = 0; j < length; j++) {
        name = parents[j]
        modelParent = store.generatedModels[name]
        if (modelParent) {
          mergedModel = merge(modelParent, model)
          store.generatedModels[modelName] = mergedModel
        }
      }

      // last inherit
      // is the overriden model
      modelExt = store.models[modelName]
      if (modelExt) {
        mergedModel = merge(modelExt, store.generatedModels[modelName])
        store.generatedModels[modelName] = mergedModel
      }
    }
  }

  // save
  for (schemaName in store.generatedSchemas) {
    schemaDef = store.generatedSchemas[schemaName]
    $db.collections._GeneratedSchema.insert(schemaDef)
  }
  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName]
    $db.collections._GeneratedModel.insert(modelDef)
  }
}

/**
 * @method loadInMemory
 * @private
 * @description Load schemas and types in memory
 */
function loadInMemory() {
  let schemas = []
  let types = []
  let schema = null
  let model = {}
  let models = []
  let type = null
  let name = ''
  let inherit = ''
  let i = 0
  let length = 0

  // init store
  store.inheritance = {}
  store.inheritanceTree = {}
  store.schemas = {}
  store.generatedSchemas = {}
  store.models = {}
  store.generatedModels = {}
  store.states = {}
  store.type = {}

  // load schemas
  schemas = $db.collections._Schema.find({})

  length = schemas.length
  for (i = 0; i < length; i++) {
    schema = schemas[i]

    name = schema[$mson.NAME]
    inherit = schema[$mson.INHERIT]

    store.schemas[name] = schema
    if (inherit) {
      store.inheritance[name] = inherit
    }

    if (!schema[$mson.CORE]) {
      $log.loadSchema(name)
    }
  }

  // load models
  models = $db.collections._Model.find({})

  length = models.length
  for (i = 0; i < length; i++) {
    model = models[i]
    name = model[$mson.NAME]

    store.models[name] = model

    if (!model[$mson.CORE]) {
      $log.loadModel(name)
    }
  }

  // load types
  types = $db.collections._Type.find({})

  length = types.length
  for (i = 0; i < length; i++) {
    type = types[i]
    store.type[type.name] = type

    if (!type.core) {
      $log.loadType(type.name)
    }
  }
}

/**
 * @method createInheritanceTree
 * @private
 * @description Create the inheritance tree
 */
function createInheritanceTree() {
  let name = ''
  let c3linerization = []
  let ancestors = []

  /**
   *
   * @param {Array} elts array of elts
   * @returns {Boolean} true if all the arrays are empty
   * @private
   * @description  Check if we have finisehd to linerize
   */
  function _isEmpty(elts) {
    let i = 0
    let length = 0
    let result = true

    length = elts.length
    for (i = 0; i < length; i++) {
      if (elts[i].length) {
        result = false
      }
    }
    return result
  }

  /**
   * @param {String} elt element to remove
   * @param {Array} elts array of elts
   * @private
   * @description Remove an elt from all the arrays
   */
  function _removeCandidate(elt, elts) {
    let i = 0
    let length = 0
    let arr = []

    length = elts.length
    for (i = 0; i < length; i++) {
      if (elts[i].indexOf(elt) === 0) {
        arr = elts[i]
        arr.reverse()
        arr.pop()
        arr.reverse()
        elts[i] = arr
      }
    }
  }

  /**
   * @method _isCandidate
   * @param {String} elt element to remove
   * @param {Array} elts array of elts
   * @returns {Boolean} true if the element is a good candidate.
   * @private
   * @description Check the element is a good candidate
   */
  function _isCandidate(elt, elts) {
    let result = true
    let i = 0
    let length = 0

    length = elts.length
    for (i = 0; i < length; i++) {
      if (elts[i].indexOf(elt) > 0) {
        result = false
      }
    }

    return result
  }

  /**
   * @method _findCandidate
   * @param {Array} elts array of elts
   * @returns {Array} array containing the candidate
   * @private
   * @description Find a candidate and return it.
   */
  function _findCandidate(elts) {
    let i = 0
    let length = 0
    let result = []

    length = elts.length
    for (i = 0; i < length; i++) {
      if (_isCandidate(elts[i][0], elts)) {
        result.push(elts[i][0])
        _removeCandidate(elts[i][0], elts)
        break
      }
    }
    return result
  }

  /**
   * @method _merge
   * @param {Array} elts array of elts
   * @returns {Array} list of candidates returned by the merge
   * @private
   * @description Merge the arrays
   */
  function _merge(elts) {
    let result = []
    let candidates = []

    candidates = _findCandidate(elts)
    while (candidates[0] !== undefined) {
      result = result.concat(candidates)
      candidates = _findCandidate(elts)
    }

    if (!_isEmpty(elts)) {
      $log.cyclicDependency()
    }
    return result
  }

  /**
   * @method _linerize
   * @param {String} name name of the element
   * @returns {Array} list of candidates
   * @private
   * @description Start the linerieation from an element
   */
  function _linerize(name) {
    let result = []
    let parents = []
    let i = 0
    let length = 0

    /**
     * @method _checkCyclicDep
     * @param {String} name
     * @param {String} item
     * @returns {Boolean} true if there is a cyclic dependency
     * @private
     * @description Check if there is a cyclic dependency
     */
    function _checkCyclicDep(name, item) {
      let isCyclicDeb = false

      if (
        Array.isArray(store.inheritance[item]) &&
        store.inheritance[item].indexOf(name) !== -1
      ) {
        $log.cyclicDependency(name)
        isCyclicDeb = true
      }
      return isCyclicDeb
    }

    if (Array.isArray(store.inheritance[name])) {
      parents = store.inheritance[name].slice()
    } else {
      $log.missingSchema(name)
    }

    length = parents.length
    for (i = 0; i < length; i++) {
      if (_checkCyclicDep(name, parents[i])) {
        parents = []
        break
      }
    }

    if (parents.length) {
      result = [name].concat(_merge(parents.map(_linerize).concat([parents])))
    } else {
      result = [name]
    }
    return result
  }

  for (name in store.inheritance) {
    c3linerization = _linerize(name)
    ancestors = c3linerization.reverse()
    ancestors.pop()
    if (ancestors.length) {
      store.inheritanceTree[name] = ancestors
    }
  }
}

/**
 * @method extend
 * @param {String} name name of the schema to extend
 * @returns {JSON} object extended with the properties of its parent
 * @private
 * @description Extend a schema with the properties of its parent
 */
function extend(name) {
  let sonExtend = {}
  let son = store.schemas[name]
  let ancestors = store.inheritanceTree[name]
  let length = 0
  let i = 0
  let ancestor = null
  let prop = ''

  if (ancestors) {
    length = ancestors.length
    ancestors.reverse()
  }
  for (i = 0; i < length; i++) {
    ancestor = store.schemas[ancestors[i]]
    for (prop in ancestor) {
      if (prop.indexOf('_') !== 0) {
        sonExtend[prop] = ancestor[prop]
      }
    }
  }
  for (prop in son) {
    sonExtend[prop] = son[prop]
  }
  return sonExtend
}

/**
 * @method sortInheritanceTree
 * @returns {Array} sorted InheritanceTree structure
 * @private
 * @description Get sorted InheritanceTree structure
 */
function sortInheritanceTree() {
  let result = []
  let temp = {}
  let keys = []
  let modelName = ''
  let nbAncestors = 0

  for (modelName in store.inheritanceTree) {
    nbAncestors = store.inheritanceTree[modelName].length
    if (typeof temp[nbAncestors] === 'undefined') {
      temp[nbAncestors] = []
    }
    temp[nbAncestors].push(modelName)
  }

  keys = Object.keys(temp).sort()
  keys.forEach(function (index) {
    temp[index].forEach(function (model) {
      result.push(model)
    })
  })

  return result
}

/**
 * @method generateSchemas
 * @private
 * @description Generate the schemas
 */
function generateSchemas() {
  let name = ''

  for (name in store.schemas) {
    if (!store.schemas[name][$mson.CORE]) {
      $log.generatingSchema(name)
    }

    store.generatedSchemas[name] = extend(name)
  }
}

/**
 * @method checkModels
 * @private
 * @description Test if all the models are compliants with their schemas
 */
function checkModels() {
  let name = ''
  let classDef = null
  let schema = ''

  for (name in store.generatedModels) {
    classDef = store.generatedModels[name]
    if (classDef) {
      schema = store.generatedSchemas[name]
      if (schema) {
        if (!classDef[$mson.CORE]) {
          $log.checkModel(name)
        }
        checkImp(classDef, schema)
      } else {
        $log.missingImplementation(name)
      }
    }
  }
}

/**
 * @method getStates
 * @private
 * @description Get all the states of a schema
 */
function getStates() {
  let name = ''
  let schema = null
  let type = ''
  let states = []
  let attribute = ''

  for (name in store.generatedSchemas) {
    states = []
    schema = store.generatedSchemas[name]
    if (schema) {
      for (attribute in schema) {
        type = schema[attribute]
        if (
          attribute.indexOf('_') !== 0 &&
          $mson.INTERNAL_TYPES.indexOf(type) !== -1
        ) {
          states.push(attribute)
        }
      }
    }
    store.states[name] = states
  }
}

/**
 * @method checkImp
 * @param {JSON} classDef schema to test
 * @param {JSON} classImp schema to validate
 * @private
 * @description Test if a schema is compliant with its schema
 */
function checkImp(classDef, classImp) {
  let property = ''
  let value = null

  for (property in classImp) {
    if (
      property !== $mson.ID &&
      property !== $mson.NAME &&
      property !== $mson.DESCRIPTION &&
      property !== $mson.INHERIT &&
      property !== $mson.CLASS &&
      property !== $mson.CORE
    ) {
      if (typeof classDef[property] !== 'undefined') {
        value = classDef[property]
        if (!checkSchema(value, classImp[property])) {
          $log.invalidTypeImp(property, classDef[$mson.NAME])
        }
      } else {
        $log.missingPropertyImp(property, classDef[$mson.NAME])
      }
    }
  }
  // check if all properties are there
  for (property in classDef) {
    if (
      property !== $mson.ID &&
      property !== $mson.NAME &&
      property !== $mson.DESCRIPTION &&
      property !== $mson.INHERIT &&
      property !== $mson.CLASS &&
      property !== $mson.CORE
    ) {
      if (typeof classImp[property] === 'undefined') {
        $log.unknownPropertyImp(property, classDef[$mson.NAME])
      }
    }
  }
}

/**
 * @method checkSchema
 * @param {Object} value value to test
 * @param {Object} type type to test
 * @returns {Boolean} true if the value has the correct type
 * @private
 * @description Test if a value has the correct type
 */
function checkSchema(value, type) {
  let result = true

  if (hasType(type, 'string') && $mson.DEFAULT_TYPES.indexOf(type) !== -1) {
    result = hasType(value, type)
  } else {
    result = checkCustomSchema(value, type)
  }
  return result
}

/**
 * @method checkCustomSchema
 * @param {type} value value to test
 * @param {String} typeName type to test
 * @returns {Boolean} true if the value has the correct type
 * @private
 * @description Test if a value has correct custom type
 */
function checkCustomSchema(value, typeName) {
  let result = true
  let typeDef = store.type[typeName]
  let length = 0
  let i = 0

  if (!hasType(typeDef, 'undefined')) {
    if (!hasType(value, 'undefined')) {
      if (typeDef.type === 'array') {
        length = value.length
        for (i = 0; i < length; i++) {
          if (!hasType(typeDef.schema, 'undefined')) {
            result = isValidSchema(value[i], typeDef.schema)
          } else {
            result = isValidType(value[i], typeDef.type)
          }
          if (result === false) {
            break
          }
        }
      } else {
        if (!hasType(typeDef.schema, 'undefined')) {
          result = isValidSchema(value, typeDef.schema)
        } else {
          result = isValidType(value, typeDef.type)
        }
      }
    } else {
      result = false
    }
  } else {
    result = false
  }

  return result
}

/**
 * @method initDbStructure
 * @private
 * @description Init the Database stucture
 */
function initDbStructure() {
  $db.collection('_Logger')
  $db.collection('_Schema')
  $db.collection('_GeneratedSchema')
  $db.collection('_Model')
  $db.collection('_GeneratedModel')
  $db.collection('_Behavior')
  $db.collection('_Type')
  $db.collection('_Message')
  $db.collection('_Channel')
  $db.collection('_History')
}

/**
 * @method createDbStructure
 * @private
 * @description Create the Database structure (i.e. DatabaseCollection)
 */
function createDbStructure() {
  let modelName = ''
  let modelDef = {}

  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName]
    if (
      typeof $db.collections[modelDef[$mson.NAME]] === 'undefined' &&
      modelDef[$mson.CLASS] !== false
    ) {
      $db.collection(modelDef[$mson.NAME])
    }
  }
}

/**
 * @method createClass
 * @private
 * @description Create all the classes of the model
 */
function createClass() {
  let modelName = ''
  let modelDef = {}

  for (modelName in store.generatedModels) {
    modelDef = store.generatedModels[modelName]
    if (modelDef[$mson.CLASS] !== false) {
      $component.create({
        model: modelName,
      })
      if (!modelDef[$mson.CORE]) {
        $log.createClass(modelName)
      }
    }
  }
}

/**
 * @method getRealClassName
 * @param {String} value
 * @returns {String} real name
 * @private
 * @description Get the real name of the referenced class
 */
function getRealClassName(value) {
  return value.trim()
}

/**
 * @method getRealTypeName
 * @param {String} value
 * @returns {String} real name
 * @private
 * @description Get the real name of the referenced type
 */
function getRealTypeName(value) {
  return value.replace('{', '').replace('}', '').trim()
}

/**
 * @method isCustomType
 * @param {String} value
 * @returns {Boolean}
 * @private
 * @description Is the value a custom type
 */
function isCustomType(value) {
  let result =
    hasType(value, 'string') &&
    $mson.DEFAULT_TYPES.indexOf(value) === -1 &&
    !isClassName(value)

  return result
}

/**
 * @method isTypeReference
 * @param {String} value
 * @returns {Boolean}
 * @description Is the value reference a type value
 */
function isTypeReference(value) {
  return value.indexOf('{') !== -1
}

/**
 * @method isModelPath
 * @param {String} value
 * @returns {Boolean}
 * @private
 * @description Is the value a model path
 */
function isModelPath(value) {
  return value.indexOf('.') !== -1
}

/**
 * @method getRealType
 * @param {type} value
 * @returns {String} type of the value
 * @private
 * @description Get the real type of a value
 */
function getRealType(value) {
  let type = ''

  if (Array.isArray(value)) {
    type = 'array'
  } else {
    type = typeof value
  }
  if (value === 'any') {
    type = 'any'
  }

  return type
}

/**
 * @method getClassName
 * @param {type} obj object
 * @returns {String} the class name of the object
 * @private
 * @description Get the class name of an object
 */
function getClassName(obj) {
  let result = ''

  if (obj && obj.constructor) {
    result = obj.constructor.name
  } else {
    result = typeof obj
  }
  return result
}

/**
 * @method isValidEnumValue
 * @param {String} value
 * @param {Array} enumValue
 * @returns {Boolean} the class name of the object
 * @private
 * @description Check if the value is a valid enum value
 */
function isValidEnumValue(value, enumValue) {
  return enumValue.indexOf(value) !== -1
}

/**
 * @param {type} value
 * @param {type} type
 * @returns {Boolean} true is value has type 'type'
 * @description Check if a value has the specified type
 */
function hasType(value, type) {
  let result = true
  let date = null

  switch (type) {
    case 'array':
      result = Array.isArray(value)
      break
    case 'date':
      if (typeof value === 'string') {
        date = new Date(value)
        result = !isNaN(date.getDate())
      } else {
        result = value instanceof Date
      }
      break
    case 'any':
      result = true
      break
    default:
      result = type === typeof value
      break
  }

  return result
}

/**
 * @method checkType
 * @param {String} name
 * @param {String} id component id
 * @param {String} type type to check
 * @returns {Boolean} true if the attribute has for type type
 * @description Check if an attribute of the schema has a specific type
 */
function checkType(name, id, type) {
  let result = false
  let componentSchema = store.generatedModels[id]
  let attributeType = ''

  if (componentSchema && componentSchema[$mson.NAME]) {
    componentSchema = store.generatedSchemas[componentSchema[$mson.NAME]]
  }

  if (componentSchema) {
    attributeType = componentSchema[name.split('.')[0]]
    if (attributeType === type) {
      result = true
    }
  }

  return result
}

/**
 * @method merge
 * @param {Object} source source schema
 * @param {Object} target target schema
 * @returns {Object} merged schema
 * @description Merge two schemas
 */
function merge(source, target) {
  let propName = ''
  let result = target

  for (propName in source) {
    if (source.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
      result[propName] = source[propName]
    }
  }
  return result
}

/**
 * @method initConfiguration
 * @param {String} name name of the object to configure
 * @param {String} type type of the object to configure
 * @param {Boolean} isMethod is a method
 * @returns {Object} a configuration
 * @description Init a configuration depending of the context
 */
function initConfiguration(name, type, isMethod) {
  let result = null
  let typeDef = []
  let schemaDef = []
  let defaultValue = ''

  switch (true) {
    case name === '=>':
      break
    case typeof type === 'string' && type === 'boolean':
      if (isMethod) {
        result = {
          name: name,
          type: 'boolean',
          mandatory: false,
          default: false,
        }
      } else {
        result = {
          type: 'boolean',
          readOnly: false,
          mandatory: false,
          default: false,
        }
      }
      break
    case typeof type === 'string' && type === 'string':
      if (isMethod) {
        result = {
          name: name,
          type: 'string',
          mandatory: false,
          default: '',
        }
      } else {
        result = {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: '',
        }
      }
      break
    case typeof type === 'string' && type === 'number':
      if (isMethod) {
        result = {
          name: name,
          type: 'number',
          mandatory: false,
          default: 0,
        }
      } else {
        result = {
          type: 'number',
          readOnly: false,
          mandatory: false,
          default: 0,
        }
      }
      break
    case typeof type === 'string' && type === 'object':
      if (isMethod) {
        result = {
          name: name,
          type: 'object',
          mandatory: false,
          default: {},
        }
      } else {
        result = {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        }
      }
      break
    case typeof type === 'string' && type === 'array':
      if (isMethod) {
        result = {
          name: name,
          type: 'array',
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: 'array',
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case typeof type === 'string' && type === 'date':
      if (isMethod) {
        result = {
          name: name,
          type: 'date',
          mandatory: false,
          default: '1970-01-01T00:00:00.000Z',
        }
      } else {
        result = {
          type: 'date',
          readOnly: false,
          mandatory: false,
          default: '1970-01-01T00:00:00.000Z',
        }
      }
      break
    case typeof type === 'string' && type === 'any':
      if (isMethod) {
        result = {
          name: name,
          type: 'any',
          mandatory: false,
          default: null,
        }
      } else {
        result = {
          type: 'any',
          readOnly: false,
          mandatory: false,
          default: '',
        }
      }
      break
    // link / custom type
    case typeof type === 'string':
      defaultValue = {}

      // case of enumeration
      typeDef = $db.collections._Type.find({
        name: type,
      })
      if (typeDef.length) {
        if (typeDef[0].value) {
          defaultValue = typeDef[0].value[0]
        }
      }

      // case of link
      schemaDef = $db.collections._Schema.find({
        _name: type,
      })
      if (schemaDef.length) {
        defaultValue = ''
      }

      if (isMethod) {
        result = {
          name: name,
          type: type,
          mandatory: false,
          default: defaultValue,
        }
      } else {
        result = {
          type: type,
          readOnly: false,
          mandatory: false,
          default: defaultValue,
        }
      }
      break
    case Array.isArray(type) && type[0] === 'boolean':
      if (isMethod) {
        result = {
          name: name,
          type: ['boolean'],
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: ['boolean'],
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case Array.isArray(type) && type[0] === 'string':
      if (isMethod) {
        result = {
          name: name,
          type: ['string'],
          mandatory: false,
          default: '',
        }
      } else {
        result = {
          type: ['string'],
          readOnly: false,
          mandatory: false,
          default: '',
        }
      }
      break
    case Array.isArray(type) && type[0] === 'number':
      if (isMethod) {
        result = {
          name: name,
          type: ['number'],
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: ['number'],
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case Array.isArray(type) && type[0] === 'object':
      if (isMethod) {
        result = {
          name: name,
          type: ['object'],
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: ['object'],
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case Array.isArray(type) && type[0] === 'date':
      if (isMethod) {
        result = {
          name: name,
          type: ['date'],
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: ['date'],
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case Array.isArray(type) && type[0] === 'any':
      if (isMethod) {
        result = {
          name: name,
          type: ['any'],
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: ['any'],
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    case Array.isArray(type):
      if (isMethod) {
        result = {
          name: name,
          type: type,
          mandatory: false,
          default: [],
        }
      } else {
        result = {
          type: type,
          readOnly: false,
          mandatory: false,
          default: [],
        }
      }
      break
    default:
      break
  }

  return result
}

/**
 * @method generateConfiguration
 * @param {JSON} model definition of the model
 * @returns {Object} generated model
 * @description Create a full model definition from a model
 */
function generateConfiguration(model) {
  let propName = ''
  let paramPropName = ''
  let methodConf = {}

  model = JSON.parse(JSON.stringify(model))

  for (propName in model) {
    if (model.hasOwnProperty(propName) && propName.indexOf('_') !== 0) {
      switch (true) {
        // property type
        case typeof model[propName] === 'string' ||
          Array.isArray(model[propName]):
          model[propName] = initConfiguration(propName, model[propName], false)
          break

        // property configuration
        case typeof model[propName] === 'object' &&
          typeof model[propName]['=>'] === 'undefined':
          model[propName] = merge(
            model[propName],
            initConfiguration(propName, model[propName].type || 'any')
          )
          break

        // method / event
        case typeof model[propName] === 'object' &&
          typeof model[propName]['=>'] !== 'undefined':
          methodConf = {
            params: [],
            result: 'any',
          }

          for (paramPropName in model[propName]) {
            // parameter type
            if (typeof model[propName][paramPropName] === 'string') {
              if (paramPropName === '=>') {
                methodConf.result = model[propName][paramPropName]
              } else {
                methodConf.params.push(
                  initConfiguration(
                    paramPropName,
                    model[propName][paramPropName],
                    true
                  )
                )
              }
            }
            // parameter configuration
            if (typeof model[propName][paramPropName] === 'object') {
              methodConf.params.push(
                merge(model[propName][paramPropName]),
                initConfiguration(
                  paramPropName,
                  model[propName][paramPropName].type || 'any'
                )
              )
            }
          }
          model[propName] = methodConf
          break
        default:
          break
      }
    }
  }
  return model
}

/* Public methods */

/**
 * @method schema
 * @param {String} name name of the schema
 * @param {JSON} schema definition of the schema
 * @returns {String} id of the schema
 * @description Add a new schema to the metamodel
 */
function schema(name, schema) {
  let id = null
  let result = []
  let schemaName = ''
  let mergedSchema = {}
  let schemas = []

  if (typeof schema === 'undefined' || Object.keys(schema).length === 0) {
    if (typeof name === 'string') {
      schema = {}
      schema[$mson.NAME] = name
      schemaName = name
    } else {
      schema = JSON.parse(JSON.stringify(name))
      schemaName = schema[$mson.NAME]
    }
  } else {
    schema = JSON.parse(JSON.stringify(schema))
    schema[$mson.NAME] = name
    schemaName = schema[$mson.NAME]
  }

  if (typeof schema[$mson.ID] === 'undefined') {
    schema[$mson.ID] = $helper.generateId()
  }
  if (typeof schema[$mson.INHERIT] === 'undefined') {
    schema[$mson.INHERIT] = ['_Component']
  }

  /**
   * @method _removeDuplicate
   * @param {Array} inherits list of parents
   * @private
   * @description remove duplicate parents in the list of parents
   */
  function _removeDuplicate(inherits) {
    let filteredList = []
    let list = {}

    inherits.forEach(function (name) {
      let cleanName = name.trim()
      if (typeof list[cleanName] === 'undefined') {
        list[cleanName] = cleanName
        filteredList.push(cleanName)
      }
    })

    return filteredList
  }

  schema[$mson.INHERIT] = _removeDuplicate(schema[$mson.INHERIT])

  // check if schema is compliant with the meta meta model
  if (isValidObject(schema, $mson.SCHEMA_DEFINITION, false)) {
    schemas = $db.collections._Schema.find({
      _name: schemaName,
    })
    if (schemas.length) {
      mergedSchema = merge(schema, schemas[0])
      $db.collections._Schema.update(
        {
          _name: schemaName,
        },
        mergedSchema
      )
      id = schemas[0][$mson.ID]
    } else {
      result = $db.collections._Schema.insert(schema)
      id = result[0]
    }
  } else {
    $log.invalidSchema(schema[$mson.NAME])
  }

  return id
}

/**
 * @method model
 * @param {String} name name of the model
 * @param {JSON} model definition of the model
 * @returns {String} id of the model
 * @description Add a new model to the metamodel
 */
function model(name, model) {
  let id = null
  let result = []
  let modelName = ''
  let mergedModel = {}
  let models = []

  if (typeof model === 'undefined' || Object.keys(model).length === 0) {
    model = JSON.parse(JSON.stringify(name))
    modelName = model[$mson.NAME]
  } else {
    model = JSON.parse(JSON.stringify(model))
    model[$mson.NAME] = name
    model = generateConfiguration(model)
    modelName = model[$mson.NAME]
  }

  if (typeof model[$mson.ID] === 'undefined') {
    model[$mson.ID] = $helper.generateId()
  }

  // check if model is compliant with the meta meta model
  if (isValidObject(model, $mson.MODEL_DEFINITION, false)) {
    models = $db.collections._Model.find({
      _name: modelName,
    })
    if (models.length) {
      mergedModel = merge(model, models[0])
      $db.collections._Model.update(
        {
          _name: modelName,
        },
        mergedModel
      )
      id = models[0][$mson.ID]
    } else {
      result = $db.collections._Model.insert(model)
      id = result[0]
    }
  } else {
    $log.invalidModel(model[$mson.NAME])
  }

  return id
}

/**
 * @method type
 * @param {String} name name of the type
 * @param {JSON} type type to add
 * @returns {String} id of the type
 * @description Add a new type
 */
function type(name, type) {
  let id = null
  let result = []
  let typeName = ''
  let typeDef = {}

  if (typeof type === 'undefined' || Object.keys(type).length === 0) {
    typeDef = JSON.parse(JSON.stringify(name))
    typeName = typeDef.name
  } else {
    if (Array.isArray(type)) {
      type = JSON.parse(JSON.stringify(type))
      typeDef.value = type
      typeDef.name = name
      typeDef.type = typeof type[0] || 'any'
      typeName = typeDef.name
    } else {
      type = JSON.parse(JSON.stringify(type))
      typeDef.schema = generateConfiguration(type)
      typeDef.name = name
      typeDef.type = 'object'
      typeName = typeDef.name
    }
  }

  if (typeof typeDef[$mson.ID] === 'undefined') {
    typeDef[$mson.ID] = $helper.generateId()
  }

  // check if type is compliant with the meta meta model
  if (isValidObject(typeDef, $mson.TYPE_DEFINITION)) {
    result = $db.collections._Type.insert(typeDef)
    id = result[0]
  } else {
    $log.invalidTypeDefinition(typeName)
  }

  return id
}

/**
 * @method init
 * @description Init the metamodel
 */
function init() {
  clear()
  initDbStructure()
}

/**
 * @method clear
 * @description Remove the data of the metamodel from the memory
 */
function clear() {
  store = {
    inheritance: {},
    inheritanceTree: {},
    schemas: {},
    generatedSchemas: {},
    models: {},
    generatedModels: {},
    states: {},
    type: {},
  }
}

/**
 * @method create
 * @description Create the metamodel
 */
function create() {
  loadInMemory()
  createInheritanceTree()
  generateSchemas()
  generateModels()
  checkModels()
  getStates()
  createDbStructure()
  createClass()
}

/**
 * @method isEvent
 * @param {String} name
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is an event
 * @description Check if an attribute of the schema is an event
 */
function isEvent(name, id) {
  return checkType(name, id, $mson.EVENT_TYPE)
}

/**
 * @method isProperty
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a property
 * @description Check if an attribute of the schema is a property
 */
function isProperty(name, id) {
  return checkType(name, id, $mson.PROPERTY_TYPE)
}

/**
 * @method isLink
 * @param {String} name name of the property
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a link
 * @description Check if an attribute of the schema is a link
 */
function isLink(name, id) {
  return checkType(name, id, $mson.LINK_TYPE)
}

/**
 * @method isCollection
 * @param {String} name name of the collection
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a collection
 * @description Check if an attribute of the schema is a collection
 */
function isCollection(name, id) {
  return checkType(name, id, $mson.COLLECTION_TYPE)
}

/**
 * @method isMethod
 * @param {String} name name of the method
 * @param {String} id component id
 * @returns {Boolean} true if the attribute is a method
 * @description Check if an attribute of the schema is a method
 */
function isMethod(name, id) {
  return checkType(name, id, $mson.METHOD_TYPE)
}

/**
 * @method isStructure
 * @param {String} path path of the property
 * @param {String} modelName model name
 * @returns {Boolean} true if the property is a structure
 * @description Check if an attribute of the schema is a structure
 */
function isStructure(path, modelName) {
  let result = false
  let structure = null
  let type = ''

  type = getModelPathType(modelName, path)

  if (Array.isArray(structure)) {
    structure = getType(type[0])
  } else {
    structure = getType(type)
  }

  if (structure && structure.schema) {
    result = true
  }

  return result
}

/**
 * @method isValidState
 * @param {String} name name of the state
 * @param {String} id component id
 * @returns {Boolean} true if the name is a correct state for the component
 * @description Check if the name is a correct state for the component
 */
function isValidState(name, id) {
  let result = false
  let componentSchema = store.generatedModels[id]
  let state = {}

  if (isModelPath(name)) {
    result = isValidModelPath(id, name)
  } else {
    if (componentSchema && componentSchema[$mson.NAME]) {
      componentSchema = store.generatedModels[componentSchema[$mson.NAME]]
    }
    state = store.states[componentSchema[$mson.NAME]]

    if (Array.isArray(state)) {
      result = state.indexOf(name) !== -1
    }
  }

  return result
}

/**
 * @method isValidType
 * @param {Object} value value to validate
 * @param {String} type type to use for validation
 * @param {Boolean} isDocument is the value from a document
 * @returns {Boolean} true if the object is compliant with the type
 * @description Check if a value is compliant with a type
 */
function isValidType(value, typeName, isDocument) {
  let result = true

  /**
   * @method _isValidCustomType
   * @param {String} value
   * @param {String} typeName
   * @private
   * @description Check if a value has the correct type
   */
  function _isValidCustomType(value, typeName) {
    let typeDef = store.type[typeName]
    let result = true

    if (Array.isArray(typeDef.value) && typeDef.value.indexOf(value) === -1) {
      result = false
    }

    if (result === false) {
      $log.invalidEnumValue(value, typeName)
    }
    return result
  }

  /**
   * @method _isValidType
   * @param {String} value
   * @param {String} typeName
   * @param {Boolean} isDocument is the value to validate from a document
   * @returns {Boolean} the object is compliant with the type
   * @private
   * @description Check if an object is compliant with a type
   */
  function _isValidType(value, typeName, isDocument) {
    let isValid = true
    let realType = ''
    let i = 0
    let length = 0

    realType = getRealType(typeName)
    switch (realType) {
      case 'string':
        isValid = hasType(value, typeName)
        break
      case 'array':
        if (Array.isArray(value)) {
          length = value.length
          for (i = 0; i < length; i++) {
            switch (true) {
              case isCustomType(typeName[0]):
                isValid = checkCustomSchema(value[i], typeName[0])
                break
              case isClassName(typeName[0]):
                if (!isDocument) {
                  if (
                    value[i] !== '' &&
                    value[i] !== null &&
                    typeof value[i] !== 'string'
                  ) {
                    isValid = inheritFrom(getClassName(value[i]), typeName[0])
                  }
                } else {
                  isValid = false
                }
                break
              default:
                isValid = hasType(value[i], typeName[0])
                break
            }
          }
        } else {
          isValid = false
        }
        break
      default:
        break
    }
    return isValid
  }

  switch (true) {
    case isCustomType(typeName):
      result = checkCustomSchema(value, typeName)

      if (!result) {
        if (store.type[typeName]) {
          $log.invalidEnumType(value, typeName, store.type[typeName].type)
        } else {
          $log.invalidEnumType(value, typeName)
        }
      }

      if (result) {
        result = _isValidCustomType(value, typeName)
      }
      break
    case isClassName(typeName):
      if (!isDocument) {
        if (value !== null && typeof value !== 'string') {
          result = inheritFrom(getClassName(value), typeName)
        } else {
          if (value !== null) {
            result = false
          }
        }
      }
      break
    default:
      result = _isValidType(value, typeName, isDocument)
      break
  }

  return result
}

/**
 * @method isValidEnum
 * @param {String|Object} value value to validate
 * @param {Schema} schema schema to use for validation
 * @returns {Boolean} true if the object is compliant with the enum
 * @description Check if a value is compliant with a type enum.
 */
function isValidEnum(value, schema) {
  let result = true

  /**
   * @method _isInstanceOf
   * @param {String} component
   * @param {String} className
   * @private Check if the component has for class name className
   */
  function _isInstanceOf(component, className) {
    let result = false
    let componentClassName = ''

    componentClassName = component.constructor.name

    if (componentClassName === 'Function') {
      componentClassName = component.name
    }
    result = componentClassName === className

    return result
  }

  if (isClassName(schema.type)) {
    result =
      _isInstanceOf($component.get(value), getRealClassName(schema.type)) &&
      schema.value.indexOf(value) !== -1
    if (!result) {
      $log.invalidEnumValue(value, schema.type)
    }
  } else {
    result = hasType(value, schema.type) && schema.value.indexOf(value) !== -1
    if (!result) {
      $log.invalidEnumValue(value, schema.name)
    }
  }

  return result
}

/**
 * @method isValidSchema
 * @param {JSON} object
 * @param {JSON} schema
 * @returns {Boolean}
 * @description Check if the object is compliant with the schema.
 * Use it to test if a schema is compliant with a schema
 * it is supposed to validate.
 */
function isValidSchema(object, schema) {
  let fieldName = ''
  let field = null
  let result = true
  let mandatory = true
  let typeSchema = ''
  let typeRef = ''
  let realType = ''
  let length = 0
  let i = 0

  /**
   * @method _isValidClassName
   * @returns {Boolean} the field is compliant with the type of the class
   * @private
   * @description Check if a field is compliant with the type of the class name
   */
  function _isValidClassName() {
    let isValid = true
    let enumValue = []

    typeRef = getClassName(typeSchema)
    typeRef = object[typeRef]
    if (isCustomType(typeRef)) {
      if (store.type[typeRef]) {
        if (store.type[typeRef].schema) {
          isValid = isValidSchema(field, store.type[typeRef].schema)
        } else {
          // check type
          isValid = hasType(field, store.type[typeRef].type)

          // check value
          enumValue = store.type[typeRef].value
          if (enumValue) {
            isValid = isValidEnumValue(field, enumValue)
          }
        }
      } else {
        isValid = false
      }
    } else {
      if (typeRef === 'array') {
        isValid = Array.isArray(field)
      } else {
        if (isClassName(typeRef)) {
          isValid = hasType(field, 'object') || hasType(field, 'string')
          // TODO maybe have a more strict validation than just a type checking
        } else {
          isValid = hasType(field, typeRef)
        }
      }
    }
    if (!isValid) {
      $log.invalidPropertyType(fieldName, typeRef, field)
    }
    return isValid
  }

  /**
   * @method _isValidTypeReference
   * @returns {Boolean} the field is compliant with the type of the references type
   * @private
   * @description Check if a field is compliant with the type of the references type
   */
  function _isValidTypeReference() {
    let isValid = true
    let enumValue = []

    typeRef = getRealTypeName(typeSchema)
    typeRef = object[typeRef]

    switch (true) {
      case typeof typeRef === 'string':
        if (isCustomType(typeRef)) {
          if (store.type[typeRef]) {
            if (store.type[typeRef].schema) {
              isValid = isValidSchema(field, store.type[typeRef].schema)
            } else {
              // check type
              isValid = hasType(field, store.type[typeRef].type)

              // check value
              enumValue = store.type[typeRef].value
              if (enumValue) {
                isValid = isValidEnumValue(field, enumValue)
              }
            }
          } else {
            isValid = false
          }
        } else {
          if (typeRef === 'array') {
            isValid = Array.isArray(field)
          } else {
            if (isClassName(typeRef)) {
              isValid = hasType(field, 'object') || hasType(field, 'string')
              // TODO maybe have a more strict validation than just a type checking
            } else {
              isValid = hasType(field, typeRef)
            }
          }
        }
        break

      case Array.isArray(typeRef):
        if (!Array.isArray(field)) {
          isValid = false
        }
        break

      default:
        isValid = false
        break
    }

    if (!isValid) {
      $log.invalidPropertyType(fieldName, typeRef, field)
    }
    return isValid
  }

  /**
   * @method _isValidType
   * @returns {Boolean} the field is compliant with the type
   * @private
   * @description Check if a field is compliant with a type
   */
  function _isValidType() {
    let isValid = true

    realType = getRealType(typeSchema)
    switch (realType) {
      case 'string':
        if (isCustomType(realType)) {
          isValid = isValidSchema(field, typeSchema)
        } else {
          if (!hasType(field, typeSchema)) {
            $log.invalidPropertyType(fieldName, typeSchema, field)
            isValid = false
            break
          }
        }
        break
      case 'array':
        if (Array.isArray(field)) {
          length = field.length
          for (i = 0; i < length; i++) {
            if (isCustomType(typeSchema[0])) {
              isValid = isValidSchema(
                field[i],
                store.type[typeSchema[0]].schema
              )
            } else {
              if (!hasType(field[i], typeSchema[0])) {
                $log.invalidPropertyType(fieldName, typeSchema[0], field[i])
                isValid = false
                break
              }
            }
          }
        } else {
          isValid = false
        }
        break
      default:
        break
    }
    return isValid
  }

  // type
  if (hasType(object, 'object')) {
    for (fieldName in object) {
      field = object[fieldName]

      if (hasType(schema[fieldName], 'undefined')) {
        $log.unknownProperty(fieldName, schema)
        return false
      } else {
        typeSchema = schema[fieldName].type
      }

      switch (true) {
        case isClassName(typeSchema):
          result = result && _isValidClassName()
          break
        case isTypeReference(typeSchema):
          result = result && _isValidTypeReference()
          break
        default:
          result = result && _isValidType()
          break
      }
      if (!result) {
        break
      }
    }

    // mandatory
    for (fieldName in schema) {
      field = schema[fieldName]
      mandatory = field.mandatory
      if (
        mandatory === true &&
        hasType(object[fieldName], 'undefined') &&
        object[fieldName] !== undefined
      ) {
        $log.missingProperty(fieldName)
        result = false
        break
      }
    }
  } else {
    result = false
    $log.invalidPropertyFormat(object)
  }

  return result
}

/**
 * @method isValidObject
 * @param {Object} object object to validate
 * @param {Object} schema schema that validates the object
 * @param {Boolean} strict true if validation is strict
 * @param {Boolean} cleanRef true if we remove the reference to the object
 * @returns {Boolean} true is the object is compliant with the schema
 * @description Check if the object is compliant with the schema.
 * Use it to test if the constructor of an object is compliant
 * with the definition of the class.
 */
function isValidObject(object, schema, strict, cleanRef) {
  let fieldName = ''
  let field = null
  let result = true
  let mandatory = true
  let typeSchema = ''
  let typeRef = ''
  let realType = ''
  let length = 0
  let i = 0

  if (hasType(strict, 'undefined')) {
    strict = true
  }

  if (hasType(cleanRef, 'undefined')) {
    cleanRef = false
  }

  /**
   * @method _isValidCustomType
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the custom type
   * @private
   * @description Check if a field is compliant with a custom type
   */
  function _isValidCustomType(field, typeSchema) {
    let isValid = true
    let realType = ''

    realType = store.type[typeSchema]
    if (realType) {
      switch (true) {
        case !hasType(realType.schema, 'undefined'):
          isValid = isValidObject(field, realType.schema, strict, cleanRef)
          break
        case !hasType(realType.value, 'undefined'):
          isValid = isValidEnum(field, realType)
          break
        default:
          isValid = isValidType(field, realType.type)
          break
      }
    } else {
      isValid = false
    }
    return isValid
  }

  /**
   * @method _isValidClassName
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the type of the class name
   * @private
   * @description Check if a field is compliant with the type of the class name
   */
  function _isValidClassName(field, typeSchema) {
    let isValid = true
    let comp = null
    let isComponent = false

    typeRef = getRealClassName(typeSchema)
    if (field && field.id) {
      comp = field
      isComponent = true
    } else {
      comp = $component.get(field)
    }

    if (!hasType(comp, 'undefined')) {
      if (!inheritFrom(comp.constructor.name, typeRef)) {
        isValid = false
        $log.invalidType(fieldName, field, typeRef)
      } else {
        if (isComponent && cleanRef) {
          object[fieldName] = comp.id() // store the id instead the full object
        }
      }
    } else {
      // check for default value of an object ({} or null)
      switch (true) {
        case hasType(field, 'object') &&
          field !== null &&
          Object.keys(field).length > 0:
        case hasType(field, 'string') && field !== '':
          // uncomment line if we need this log
          // $log.canNotYetValidate(field, typeRef);
          break
        default:
          break
      }
    }
    return isValid
  }

  /**
   * @method _isValidType
   * @param {String} field a field
   * @param {String} typeSchema a schema
   * @returns {Boolean} the field is compliant with the type
   * @private
   * @description Check if a field is compliant with a type
   */
  function _isValidType(field, typeSchema) {
    let isValid = true
    let date = null
    let typeArray = ''

    realType = getRealType(typeSchema)
    switch (realType) {
      case 'any':
        break
      case 'string':
        if (isCustomType(realType)) {
          isValid = isValidObject(field, typeSchema, strict, cleanRef)
        } else {
          if (typeSchema === 'array') {
            if (getRealType(field) !== 'array') {
              $log.invalidPropertyType(fieldName, typeSchema, field)
              isValid = false
              break
            }
          } else {
            if (typeSchema === 'date') {
              date = new Date(field)
              isValid = !isNaN(date.getDate())
              if (!isValid) {
                $log.invalidPropertyType(fieldName, typeSchema, field)
                break
              }
            } else {
              if (
                getRealType(field) !== typeSchema &&
                getRealType(field) !== 'any'
              ) {
                $log.invalidPropertyType(fieldName, typeSchema, field)
                isValid = false
                break
              }
            }
          }
        }
        break
      case 'array':
        if (Array.isArray(field)) {
          length = field.length
          typeArray = typeSchema[0]
          for (i = 0; i < length; i++) {
            if (isCustomType(typeArray)) {
              isValid = _isValidCustomType(field[i], typeArray)
            } else {
              if (!isClassName(typeArray)) {
                if (
                  getRealType(field[i]) !== typeArray &&
                  typeArray !== 'any'
                ) {
                  $log.invalidPropertyType(fieldName, typeArray, field[i])
                  isValid = false
                  break
                }
              } else {
                if (getRealType(field[i]) === 'string') {
                  // Case of an import of a system
                  if ($component.get(field[i])) {
                    if (
                      !inheritFrom(
                        getClassName($component.get(field[i])),
                        getRealClassName(typeArray)
                      )
                    ) {
                      $log.invalidClassName(
                        JSON.stringify(field[i]),
                        getRealClassName(typeArray),
                        getClassName($component.get(field[i]))
                      )
                      isValid = false
                      break
                    }
                  } else {
                    if (field[i] !== '') {
                      // uncomment line if we need this log
                      // $log.canNotYetValidate(
                      //  field[i],
                      //  getRealClassName(typeArray)
                      // );
                    }
                  }
                } else {
                  if (
                    !inheritFrom(
                      getClassName(field[i]),
                      getRealClassName(typeArray)
                    )
                  ) {
                    $log.invalidClassName(
                      JSON.stringify(field[i]),
                      getRealClassName(typeArray),
                      getClassName(field[i])
                    )
                    isValid = false
                    break
                  } else {
                    if (cleanRef) {
                      field[i] = field[i].id() // store the id instead the full object
                    }
                  }
                }
              }
            }
          }
        } else {
          isValid = false
          $log.invalidType(fieldName, field, 'array')
        }
        break
      default:
        isValid = false
        $log.unknownType(field)
        break
    }
    return isValid
  }

  // check if object
  if (!hasType(object, 'object')) {
    result = false
    $log.invalidConfiguration(object, 'object')
  }

  // type
  for (fieldName in object) {
    field = object[fieldName]

    if (
      !hasType(schema[fieldName], 'undefined') ||
      fieldName === $mson.CORE ||
      fieldName === $mson.ID
    ) {
      switch (true) {
        case fieldName === $mson.CORE:
          typeSchema = 'boolean'
          break
        case fieldName === $mson.ID:
          typeSchema = 'string'
          break
        default:
          typeSchema = schema[fieldName].type
          break
      }
    } else {
      if (strict) {
        $log.unknownProperty(fieldName, schema)
        return false
      } else {
        continue
      }
    }

    switch (true) {
      case isCustomType(typeSchema):
        result = result && _isValidCustomType(field, typeSchema)
        break
      case isClassName(typeSchema):
        result = result && _isValidClassName(field, typeSchema)
        break
      default:
        result = result && _isValidType(field, typeSchema)
        break
    }
  }

  // mandatory
  for (fieldName in schema) {
    field = schema[fieldName]
    mandatory = field.mandatory
    if (object && hasType(object[fieldName], 'undefined')) {
      if (mandatory === true) {
        $log.missingProperty(fieldName)
        result = false
      }
    }
  }

  return result
}

/**
 * Prepare the object in order to be compliant with the schema.
 * @method prepareObject
 * @param {Object} object object to prepate
 * @param {Object} schema schema that validates the object
 */
function prepareObject(object, schema) {
  let fieldName = ''
  let field = null
  let mandatory = true
  let defaultValue = ''

  schema = JSON.parse(JSON.stringify(schema))

  // mandatory & default value
  for (fieldName in schema) {
    field = schema[fieldName]
    mandatory = field.mandatory
    defaultValue = field.default
    if (hasType(object[fieldName], 'undefined')) {
      if (mandatory === false && !hasType(defaultValue, 'undefined')) {
        object[fieldName] = defaultValue
      }
    }
  }
}

/**
 * @method getSchema
 * @param {String} name of the schema
 * @returns {Object} the schema
 * @description Get a schema
 */
function getSchema(name) {
  let result = null

  if (store.generatedSchemas[name]) {
    result = store.generatedSchemas[name]
  }
  return result
}

/**
 * @method getModel
 * @param {String} name of the model
 * @returns {Object} the model
 * @description Get a model
 */
function getModel(name) {
  let result = null

  if (store.generatedModels[name]) {
    result = store.generatedModels[name]
  }
  return result
}

/**
 * @method getType
 * @param {String} name of the type
 * @returns {Object} the type
 * @description Get a type
 */
function getType(name) {
  let result = null

  if (store.type[name] && store.type[name]) {
    result = JSON.parse(JSON.stringify(store.type[name]))
  }
  return result
}

/**
 * @method getModelPathType
 * @param {String} model name of the model
 * @param {String} path path of the structure
 * @returns {Object} the type
 * @description Get the type of a model path
 */
function getModelPathType(model, path) {
  let result = null
  let subpaths = []
  let subpath = ''
  let i = 0
  let length = 0
  let structure = ''

  subpaths = path.split('.')
  length = subpaths.length

  for (i = 0; i < length; i++) {
    subpath = subpaths[i]
    subpath = subpath.split('[')[0]
    if (i === 0) {
      result = getModel(model)[subpath].type
    } else {
      if (Array.isArray(result)) {
        result = result[0]
      }

      if (isCustomType(result)) {
        structure = getType(result)

        switch (true) {
          case typeof structure.schema !== 'undefined':
            if (!structure.schema[subpath]) {
              $log.unknownPath(path, subpath)
            } else {
              result = structure.schema[subpath].type
            }
            break
          case typeof structure.type !== 'undefined':
            result = structure.type
            break
          default:
            $log.invalidState(model, path)
            break
        }
      }
    }
  }
  return result
}

/**
 * @method isValidModelPath
 * @param {String} model name of the model
 * @param {String} path path of the model
 * @returns {Boolean} true if the path is valid for the model
 * @description Check if a path is valid model path
 */
function isValidModelPath(model, path) {
  let result = true
  let type = null
  let subpaths = []
  let subpath = ''
  let i = 0
  let length = 0
  let structure = ''

  subpaths = path.split('.')
  length = subpaths.length

  for (i = 0; i < length; i++) {
    subpath = subpaths[i]
    subpath = subpath.split('[')[0]
    if (i === 0) {
      type = getModel(model)[subpath].type
      if (!type) {
        result = false
      }
    } else {
      if (Array.isArray(result)) {
        type = type[0]
      }

      if (isCustomType(type)) {
        structure = getType(type)
        if (structure.schema && structure.schema[subpath]) {
          type = structure.schema[subpath].type
          if (!type) {
            result = false
          }
        }
      }
    }
  }
  return result
}

/**
 * @method get
 * @param {String} id id of the schema
 * @returns {Array} id id of the parents
 * @description Get parents of a schema if any
 */
function getParents(id) {
  let result = []

  if (!store.inheritanceTree[id]) {
    result = []
  } else {
    result = store.inheritanceTree[id].slice()
  }

  return result
}

/**
 * @method inheritFrom
 * @param {String} name name of the class
 * @param {String} parentName name of the parent
 * @returns {Boolean} true if the component inherit from the specific class name
 * @description Check if a class inherits from another one
 */
function inheritFrom(name, parentName) {
  let result = false
  let parents = []
  let i = 0
  let length = 0

  /**
   * @method _searchParent
   * @param {String} className name of the class
   * @param {String} ancestorName of the parent
   * @returns {Boolean} true if the component inherit from the specific class name
   * @private
   * @description Check if a class inherits from another one
   */
  function _searchParent(className, ancestorName) {
    let isAncestor = false
    let parents = []
    let i = 0
    let length = 0

    parents = getParents(className)
    if (parents.length !== 0) {
      if (parents.indexOf(ancestorName) !== -1) {
        isAncestor = true
      } else {
        for (i = 0; i < length; i++) {
          isAncestor = _searchParent(parents[i], ancestorName)
          if (isAncestor) {
            break
          }
        }
      }
    }
    return isAncestor
  }

  if (name !== parentName) {
    parents = getParents(name)
    length = parents.length

    if (parents.length !== 0) {
      if (parents.indexOf(parentName) !== -1) {
        result = true
      } else {
        for (i = 0; i < length; i++) {
          result = _searchParent(parents[i], parentName)
          if (result) {
            break
          }
        }
      }
    }
  } else {
    result = true
  }

  return result
}

/**
 * @method isClassName
 * @param {String} value
 * @returns {Boolean} true if the name is a class name
 * @description Is the value a class name
 */
function isClassName(value) {
  let result = hasType(value, 'string')

  if (result) {
    if (Object.keys(store.generatedModels).length > 0) {
      result = typeof store.generatedModels[value] !== 'undefined'
    } else {
      result = false
    }
  }

  return result
}

export default {
  schema,
  model,
  type,
  init,
  clear,
  create,
  isEvent,
  isProperty,
  isLink,
  isCollection,
  isMethod,
  isStructure,
  isValidState,
  isValidType,
  isValidEnum,
  isValidSchema,
  isValidObject,
  prepareObject,
  getSchema,
  getModel,
  getType,
  getModelPathType,
  isValidModelPath,
  getParents,
  inheritFrom,
  isClassName,
}
