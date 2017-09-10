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
 * This module manages System Runtime metamodel. <br>
 * System Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related DatabaseCollections.
 * 
 * @module metamodel
 * @requires db
 * @requires log
 * @requires component
 * @requires workflow
 * @class metamodel
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
      '_name': schema._name,
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
            'type': 'any',
            'readOnly': false,
            'mandatory': false,
            'default': '',
            'description': att,
            'label': att
          };
          break;
        case schema[att] === 'link':
          model[att] = {
            'type': '_Component',
            'readOnly': false,
            'mandatory': false,
            'default': '',
            'description': att,
            'label': att
          };
          break;
        case schema[att] === 'method':
          model[att] = {
            'params': [{
              'name': 'param',
              'type': 'any',
              'mandatory': false
            }],
            'result': 'any',
            'description': att
          };
          break;
        case schema[att] === 'event':
          model[att] = {
            'params': [{
              'name': 'param',
              'type': 'any',
              'mandatory': false
            }],
            'description': att
          };
          break;
        case schema[att] === 'collection':
          model[att] = {
            'type': ['_Component'],
            'readOnly': false,
            'mandatory': false,
            'default': [],
            'description': att,
            'label': att
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
    $db._GeneratedModel.insert(modelDef);

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
  schemas = $db._Schema.find({});

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
  models = $db._Model.find({});

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
  types = $db._Type.find({});

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
  $db.collection('_Logger');
  $db.collection('_Schema');
  $db.collection('_Model');
  $db.collection('_GeneratedModel');
  $db.collection('_ClassInfo');
  $db.collection('_Behavior');
  $db.collection('_State');
  $db.collection('_Type');
  $db.collection('_Message');
  $db.collection('_Channel');
  $db.collection('_Log');
}


/*
 * Create the Database structure (i.e. DatabaseCollection).
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
        'model': modelName
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
      inheritFrom(modelDef[NAME], '_Component')
    ) {
      if (!$component.get(name)) {
        $db._ClassInfo.insert({
          '_id': name,
          'schema': store.compiledSchemas[modelName],
          'model': modelDef
        });
      } else {
        $db._ClassInfo.update({
          '_id': name
        }, {
            '_id': name,
            'schema': store.compiledSchemas[modelName],
            'model': modelDef
          });
      }
    }
  }
}


/* 
 * Get the real name of the referenced class.
 * @method getRealClassName
 * @param {String} value
 * @return {String} real name
 * @private
 */
function getRealClassName(value) {
  return value.replace('@', '').trim();
}


/* 
 * Get the real name of the referenced type.
 * @method getRealTypeName
 * @param {String} value
 * @return {String} real name
 * @private
 */
function getRealTypeName(value) {
  return value.replace('{', '').replace('}', '').trim();
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
    !isClassName(value);

  return result;
}


/*
 * Is the value reference a type value.
 * @method isTypeReference
 * @param {String} value
 * @return {Boolean}
 */
function isTypeReference(value) {
  return value.indexOf('{') !== -1;
}


/*
 * Is the value a model path.
 * @method isModelPath
 * @param {String} value
 * @return {Boolean}
 * @private
 */
function isModelPath(value) {
  return value.indexOf('.') !== -1;
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
 * @method checkType
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
    attributeType = componentSchema[name.split('.')[0]];
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
    schema[INHERITS] = ['_Component'];
  }

  function _removeDuplicate(inherits) {
    var filteredList = [],
      list = {};

    inherits.forEach(function (name) {
      var cleanName = name.trim();
      if (typeof list[cleanName] === 'undefined') {
        list[cleanName] = cleanName;
        filteredList.push(cleanName);
      }
    });

    return filteredList;
  }

  schema[INHERITS] = _removeDuplicate(schema[INHERITS]);

  // check if schema is compliant with the meta meta model
  if (isValidObject(schema, store.metadef.schema, false)) {
    schemas = $db._Schema.find({ '_name': name });
    if (schemas.length) {
      mergedSchema = merge(schema, schemas[0]);
      $db._Schema.update({ '_name': name }, mergedSchema);
      id = schemas[0]._id;
    } else {
      result = $db._Schema.insert(schema);
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
    models = $db._Model.find({ '_name': name });
    if (models.length) {
      mergedModel = merge(model, models[0]);
      $db._Model.update({ '_name': name }, mergedModel);
      id = models[0]._id;
    } else {
      result = $db._Model.insert(model);
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
    result = $db._Type.insert(importedType);
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
      '_id': {
        'type': 'string',
        'mandatory': true
      },
      '_name': {
        'type': 'string',
        'mandatory': true
      },
      '_inherit': {
        'type': ['string'],
        'mandatory': false,
        'default': ['_Component']
      },
      '_class': {
        'type': 'boolean',
        'mandatory': false
      },
      '_core': {
        'type': 'boolean',
        'mandatory': false
      },
      '_description': {
        'type': 'string',
        'mandatory': false
      }
    },
    model: {
      '_id': {
        'type': 'string',
        'mandatory': true
      },
      '_name': {
        'type': 'string',
        'mandatory': true
      },
      '_inherit': {
        'type': ['string'],
        'mandatory': false
      },
      '_class': {
        'type': 'boolean',
        'mandatory': false
      },
      '_core': {
        'type': 'boolean',
        'mandatory': false
      },
      '_description': {
        'type': 'string',
        'mandatory': false
      }
    },
    type: {
      '_id': {
        'type': 'string',
        'mandatory': false
      },
      'name': {
        'type': 'string',
        'mandatory': true
      },
      'type': {
        'type': 'string',
        'mandatory': true
      },
      'schema': {
        'type': 'object',
        'mandatory': false
      },
      'value': {
        'type': ['any'],
        'mandatory': false
      },
      'core': {
        'type': 'boolean',
        'mandatory': false
      },
      '_description': {
        'type': 'string',
        'mandatory': false
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

  if (isModelPath(name)) {
    result = isValidModelPath(id, name);
  } else {
    if (componentSchema && componentSchema[NAME]) {
      componentSchema = store.generatedModels[componentSchema[NAME]];
    }
    state = store.states[componentSchema[NAME]];

    if (Array.isArray(state)) {
      result = state.indexOf(name) !== -1;
    }
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

  /*
  * Check if an object is compliant with a class.
  * @return {Boolean} the object is compliant with the type
  * @private
  */
  function _checkClassName(value, typeName) {
    var isValid = true;
    var typeRef = getRealClassName(typeName);
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
            case isClassName(typeName[0]):
              isValid = _checkClassName(value[i], typeName[0]);
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
        if (store.type[typeName]) {
          $log.invalidEnumType(value, typeName, store.type[typeName].type);
        } else {
          $log.invalidEnumType(value, typeName);
        }
      }

      if (result) {
        result = _isValidCustomType(value, typeName);
      }
      break;
    case isClassName(typeName):
      result = _checkClassName(value, typeName);
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

  if (isClassName(schema.type)) {
    result = _isInstanceOf($component.get(value), getRealClassName(schema.type)) && schema.value.indexOf(value) !== -1;
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
   * Check if a field is compliant with the type of the class name.
   * @return {Boolean} the field is compliant with the type of the class
   * @private
   */
  function _isValidClassName() {
    var isValid = true,
      enumValue = [];

    typeRef = getClassName(typeSchema);
    typeRef = object[typeRef];
    typeRef = typeRef.replace('@', ''); // backward compatibility
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
        if (isClassName(typeRef)) {
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
   * Check if a field is compliant with the type of the references type.
   * @return {Boolean} the field is compliant with the type of the references type
   * @private
   */
  function _isValidTypeReference() {
    var isValid = true,
      enumValue = [];

    typeRef = getRealTypeName(typeSchema);
    typeRef = object[typeRef];
    typeRef = typeRef.replace('@', ''); // backward compatibility
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
        if (isClassName(typeRef)) {
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
        case isClassName(typeSchema):
          result = _isValidClassName();
          break;
        case isTypeReference(typeSchema):
          result = _isValidTypeReference();
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
    cleanRef = false;
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
          isValid = isValidObject(field, realType.schema, strict, cleanRef);
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
   * Check if a field is compliant with the type of the class name.
   * @return {Boolean} the field is compliant with the type of the class name
   * @private
   */
  function _isValidClassName(field, typeSchema) {
    var isValid = true,
      comp = null,
      isComponent = false;

    typeRef = getRealClassName(typeSchema);
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
          isValid = isValidObject(field, typeSchema, strict, cleanRef);
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
              if (!isClassName(typeArray)) {
                if (getRealType(field[i]) !== typeArray && typeArray !== 'any') {
                  $log.invalidPropertyType(field[i], typeArray, field[i]);
                  isValid = false;
                  break;
                }
              } else {
                if (getRealType(field[i]) === 'string') {
                  // Case of an import of a system
                  if ($component.get(field[i])) {
                    if (!inheritFrom(getClassName($component.get(field[i])), getRealClassName(typeArray))) {
                      $log.invalidClassName(JSON.stringify(field[i]), getRealClassName(typeArray), getClassName($component.get(field[i])));
                      isValid = false;
                      break;
                    }
                  } else {
                    if (field[i] !== '') {
                      $log.canNotYetValidate(field[i], getRealClassName(typeArray));
                    }
                  }
                } else {
                  if (!inheritFrom(getClassName(field[i]), getRealClassName(typeArray))) {
                    $log.invalidClassName(JSON.stringify(field[i]), getRealClassName(typeArray), getClassName(field[i]));
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

  // check if object
  if (!hasType(object, 'object')) {
    result = false;
    $log.invalidType(object, 'object');
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
      case isClassName(typeSchema):
        result = _isValidClassName(field, typeSchema);
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
    if (object && hasType(object[fieldName], 'undefined')) {
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
 * Get the type of a model path.
 * @method getModelPathType
 * @param {String} model name of the model
 * @param {String} path path of the structure
 * @return {Object} the type
 */
function getModelPathType(model, path) {
  var result = null,
    subpaths = [],
    subpath = '',
    i = 0,
    length = 0,
    structure = '';

  subpaths = path.split('.');
  length = subpaths.length;

  for (i = 0; i < length; i++) {
    subpath = subpaths[i];
    if (i === 0) {
      result = getModel(model)[subpath].type;
    } else {
      if (isCustomType(result)) {
        structure = getType(result);
        if (structure.schema) {
          result = structure.schema[subpath].type;
        } else {
          $log.invalidState(model, path);
        }
      } else {
        $log.invalidState(model, path);
      }
    }
  }
  return result;
}


/**
 * Check if a path is valid model path.
 * @method isValidModelPath
 * @param {String} model name of the model
 * @param {String} path path of the model
 * @return {Boolean} true if the path is valid for the model
 */
function isValidModelPath(model, path) {
  var result = true,
    type = null,
    subpaths = [],
    subpath = '',
    i = 0,
    length = 0,
    structure = '';

  subpaths = path.split('.');
  length = subpaths.length;

  for (i = 0; i < length; i++) {
    subpath = subpaths[i];
    if (i === 0) {
      type = getModel(model)[subpath].type;
    } else {
      if (isCustomType(type)) {
        structure = getType(type);
        if (structure.schema && structure.schema[subpath]) {
          type = structure.schema[subpath].type;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
    }
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

/*
 * Is the value a class name.
 * @method isClassName
 * @param {String} value
 * @return {Boolean} true if the name is a class name
 */
function isClassName(value) {
  var name = '',
    result = hasType(value, 'string');

  if (result) {
    if (Object.keys(store.generatedModels).length > 0) {
      name = value.replace('@', '');
      result = typeof store.generatedModels[name] !== 'undefined';
    } else {
      result = false;
    }
  }

  return result;
}


/* exports */


/**
 * This module manages System Runtime metamodel. <br>
 * System Runtime metamodel loads schemas and types, analyzes them and creates the component classes and related DatabaseCollections.
 * 
 * @module metamodel
 * @requires db
 * @requires log
 * @requires component
 * @requires workflow
 * @class metamodel
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
 * @param {String} name name of the property
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


/**
 * Get the type of a model path.
 * @method getModelPathType
 * @param {String} model name of the model
 * @param {String} path path of the model
 * @return {Object} the type
 */
exports.getModelPathType = getModelPathType;


/**
 * Check if a path is valid model path.
 * @method isValidModelPath
 * @param {String} model name of the model
 * @param {String} path path of the model
 * @return {Boolean} true if the path is valid for the model
 */
exports.isValidModelPath = isValidModelPath;


/**
 * Is the value a class name.
 * @method isClassName
 * @param {String} value
 * @return {Boolean} true if tne name is a class name
 */
exports.isClassName = isClassName;