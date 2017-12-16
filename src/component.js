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
 * This module manages the components. 
 * It is the factory of all the components that are created by System Runtime.
 * 
 * @module component
 * @requires workflow
 * @requires db
 * @requires metamodel
 * @requires behavior
 * @requires helper
 * @requires log
 * @class component
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
 * @class _Array
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 */
function _Array(conf) {
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
    if ($metamodel.isClassName(type)) {
      arr.push($helper.getRuntime().require(val));
    } else {
      arr.push(val);
    }
  });

  function _copy() {
    var i = 0,
      j = 0,
      length = arr.length;

    arrDb.forEach(function (val) {
      if ($metamodel.isClassName(type)) {
        arr[i] = $helper.getRuntime().require(val);
      } else {
        arr[i] = val;
      }
      i = i + 1;
    });

    for (j = i; j < length; j++) {
      delete arr[j];
    }
    arr.length = arrDb.length;
  }

  function _add(val, action, start, deleteCount) {
    var isClass = false,
      i = 0,
      length = 0,
      del = [];

    if (!isReadOnly) {

      isClass = $metamodel.isClassName(type);

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
                  'component': id,
                  'state': propertyName,
                  'data': [store[del[i]], 'remove']
                });
              }
              break;
            default:
              break;
          }

          if ($helper.isRuntime()) {
            $helper.getRuntime().require('db')
              .update({
              'collection': classId,
              'id': id,
              'field': propertyName,
              'value': arrDb
            });
          }

          $workflow.state({
            'component': id,
            'state': propertyName,
            'data': [val, 'add']
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
            $helper.getRuntime().require('db')
.update({
              'collection': classId,
              'id': id,
              'field': propertyName,
              'value': arrDb
            });
          }

          $workflow.state({
            'component': id,
            'state': propertyName,
            'data': [val, 'add']
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
          $helper.getRuntime().require('db')
.update({
            'collection': classId,
            'id': id,
            'field': propertyName,
            'value': arrDb
          });
        }

        isClass = $metamodel.isClassName(type);

        if (isClass) {
          result = store[val];
        } else {
          result = val;
        }

        $workflow.state({
          'component': id,
          'state': propertyName,
          'data': [result, 'remove']
        });

      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName);
    }
    return result;
  }

  /* Override push method.
   * @push
   * @param {_Component|Object} val
   */
  arr.push = function push(val) {
    var result = _add(val, 'push');
    _copy();

    return result;
  };

  /* Override unshift method.
   * @unshift
   * @param {_Component|Object} val
   */
  arr.unshift = function unshift(val) {
    var result = _add(val, 'unshift');
    _copy();

    return result;
  };

  /* Override concat method.
   * @push
   * @param {_Component|Object} arr
   */
  arr.concat = function concat(arr) {
    var i = 0,
      length = 0,
      result = null;

    if (Array.isArray(arr)) {
      length = arr.length;
      for (i = 0; i < length; i++) {
        _add(arr[i], 'push');
      }
    }

    conf.arr = arrDb;

    result = new _Array(conf);
    _copy();

    return result;
  };

  /* Override pop method.
   * @pop
   * @return {_Component|Object} value
   */
  arr.pop = function pop() {
    var result = _remove('pop');
    _copy();

    return result;
  };

  /* Override shift method.
   * @shift
   * @return {_Component|Object} value
   */
  arr.shift = function shift() {
    var result = _remove('shift');
    _copy();

    return result;
  };

  /* Override sort method.
   * @sort
   * @param {Function} funct the sort function
   * @return {_Array} the current _Array
   */
  arr.sort = function sort(funct) {
    var result = null;

    arrDb.sort(funct);

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db')
.update({
        'collection': classId,
        'id': id,
        'field': propertyName,
        'value': arrDb
      });
    }

    result = arr;
    _copy();

    return result;
  };

  /* Override reverse method.
   * @reverse
   * @return {_Array} the reversed _Array
   */
  arr.reverse = function reverse() {
    arrDb.reverse();

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db')
.update({
        'collection': classId,
        'id': id,
        'field': propertyName,
        'value': arrDb
      });
    }

    _copy();

    return arr;
  };

  /* Override splice method.
   * @splice
   * @return {_Array} the spliced _Array
   */
  arr.splice = function splice(start, deleteCount, val) {
    var result = [],
      i = 0,
      length = 0,
      isClass = false,
      data = null;

    if (typeof val !== 'undefined') {
      _add(val, 'splice', start, deleteCount);
    } else {
      result = arrDb.splice(start, deleteCount);

      if ($helper.isRuntime()) {
        $helper.getRuntime().require('db')
.update({
          'collection': classId,
          'id': id,
          'field': propertyName,
          'value': arrDb
        });
      }

      length = result.length;
      for (i = 0; i < length; i++) {

        isClass = $metamodel.isClassName(type);
        if (isClass) {
          data = store[result[i]];
        } else {
          data = result[i];
        }

        $workflow.state({
          'component': id,
          'state': propertyName,
          'data': [data, 'remove']
        });
      }
    }

    _copy();

    return result;
  };

  /* Override slice method.
   * @slice
   * @return {_Array} the sliced _Array
   */
  arr.slice = function slice(begin, end) {
    var result = arrDb.slice(begin, end);
    _copy();

    return result;
  };

  return arr;
}

_Array.prototype = [];


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
        'name': propNames[i],
        'type': model[propNames[i]].type,
        'readOnly': model[propNames[i]].readOnly
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
    this.id = new Function('__body', 'return function id () { return __body.call(this) };')(body);

    // classInfo
    if ($metamodel.inheritFrom(classId, '_Component')) {
      config.classInfo = classId + 'Info';
    }

    // create link to db
    $db.store[classId][config._id] = config;

    $db.createLog('insert', classId, config._id, '', config);

    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
      $helper.getRuntime().require('db')
.insert({
        collection: classId,
        document: config
      });
    }

    Object.freeze(this);

    if (this.init) {
      this.init(config);
    }
  };
  return new Function('__body', 'return function ' + classId + ' (config) { __body.call(this,config) };')(body);
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
  Class.id = new Function('__body', 'return function id (prop, val) { return __body.call(this, prop, val) };')(body);
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
            ($metamodel.inheritFrom(val.constructor.name, type.replace('@', '')) && $metamodel.isClassName(type)))
        ) {
          result = result && false;
        }
      });

      return true;
    }

    function _getRealCollection(coll, type) {
      var result = [];

      coll.forEach(function (val) {
        if ($metamodel.isClassName(type)) {
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

    if (Array.isArray(propertyType) || propertyType === 'array') { // in case of array, return a sub array
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

            runtimeArr = new _Array({
              'id': this.id(),
              'propertyName': propertyName,
              'readOnly': propertyReadOnly,
              'classId': classId,
              'type': propertyType === 'array' ? 'any' : propertyType[0],
              'arr': $db.store[classId][this.id()][propertyName]
            });

            return runtimeArr;
          } else {
            if (Array.isArray(position)) { // we replace the collection
              if (_isValidCollection(position, propertyType === 'array' ? 'any' : propertyType[0])) {
                search = $db[classId].find({
                  '_id': this.id()
                });
                if (search.length) {

                  component = search[0];
                  realVal = _getRealCollection(position, propertyType === 'array' ? 'any' : propertyType[0]);

                  $workflow.state({
                    'component': this.id(),
                    'state': propertyName,
                    'data': [position, 'reset']
                  });

                  component[propertyName] = realVal;

                  if ($helper.isRuntime()) {
                    $helper.getRuntime().require('db')
.update({
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
                  if ($metamodel.isClassName(propertyType === 'array' ? 'array' : propertyType[0])) {
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
              $metamodel.isValidType(value, propertyType === 'array' ? 'any' : propertyType[0]) ||
              ($metamodel.inheritFrom(value.constructor.name, propertyType === 'array' ? 'array' : propertyType[0].replace('@', '')) && $metamodel.isClassName(propertyType === 'array' ? 'array' : propertyType[0]))
            ) {
              search = $db[classId].find({
                '_id': this.id()
              });
              if (search.length) {

                if ($metamodel.isClassName(propertyType === 'array' ? 'array' : propertyType[0])) {
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
                  $helper.getRuntime().require('db')
.update({
                    'collection': classId,
                    'id': this.id(),
                    'field': propertyName,
                    'value': component[propertyName]
                  });
                }

                $workflow.state({
                  'component': this.id(),
                  'state': propertyName,
                  'data': [value, 'add']
                });
              }
            } else {
              $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, value, propertyType);
            }
          }
        }
      };
      Class.prototype[propertyName] = new Function('__body', 'return function ' + propertyName + ' (position, value) { return __body.call(this, position, value) };')(body);
    } else {
      body = function body(value) {
        var search = [],
          component = null,
          propertyValue = null;

        if (typeof value === 'undefined') {
          component = $db.store[classId][this.id()];
          if (component) {
            switch (true) {
              case $metamodel.isClassName(propertyType):
                propertyValue = get(component[propertyName]);
                break;
              case propertyType === 'date':
                propertyValue = new Date(component[propertyName]);
                break;
              case propertyType === 'json':
                propertyValue = JSON.parse(JSON.stringify(component[propertyName]));
                break;
              case propertyType === 'array':
                propertyValue = new _Array({
                  'id': this.id(),
                  'propertyName': propertyName,
                  'readOnly': propertyReadOnly,
                  'classId': classId,
                  'type': 'any',
                  'arr': $db.store[classId][this.id()][propertyName]
                });
                break;
              case $metamodel.isStructure(propertyName, classId):
                propertyValue = addStructure('', propertyName, model, this.id());
                break;
              default:
                propertyValue = component[propertyName]; // TODO case of object
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
              search = $db[classId].find({
                '_id': this.id()
              });
              if (search.length) {
                component = search[0];

                switch (true) {
                  case $metamodel.isClassName(propertyType):
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
                  $helper.getRuntime().require('db')
.update({
                    'collection': classId,
                    'id': this.id(),
                    'field': propertyName,
                    'value': value
                  });
                }

                // case of _Behavior
                if (classId === '_Behavior') {
                  $behavior.removeFromMemory(this.id());
                }

                $workflow.state({
                  'component': this.id(),
                  'state': propertyName,
                  'data': [value]
                });
              }
            } else {
              $log.invalidPropertyName(this.id(), this.constructor.name, propertyName, value, propertyType);
            }
          }
        }
      };
      Class.prototype[propertyName] = new Function('__body', 'return function ' + propertyName + ' (value) { return __body.call(this,value) };')(body);
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

    if (propertyType === 'array') { // in case of array, return a sub array
      body = function body(position, value) {
        var search = [],
          component = null,
          runtimeArr = null,
          val = null,
          realVal = null,
          i = 0,
          length = 0,
          parentPath = '',
          fullPath = '';

        function _isValidCollection(coll, type) {

          var result = true;
          coll.forEach(function (val) {
            if (!$metamodel.isValidType(val, type)) {
              result = result && false;
            }
          });

          return true;
        }

        if (path) {
          parentPath = parentPath + '.' + name;
        } else {
          parentPath = name;
        }
        fullPath = parentPath + '.' + propertyName;

        if (typeof value === 'undefined') {
          if (typeof position === 'undefined') {

            runtimeArr = new _Array({
              'id': id,
              'propertyName': fullPath,
              'readOnly': propertyReadOnly,
              'classId': model,
              'type': 'any',
              'arr': getStructureValue(model, id, fullPath)
            });

            return runtimeArr;
          } else {
            if (Array.isArray(position)) { // we replace the collection
              if (_isValidCollection(position, 'any')) {
                search = $db[model].find({
                  '_id': id
                });
                if (search.length) {

                  setStructureValue(model, id, fullPath, position);

                  $workflow.state({
                    'component': id,
                    'state': fullPath,
                    'data': [position, 'reset']
                  });

                  if ($helper.isRuntime()) {
                    $helper.getRuntime().require('db')
.update({
                      'collection': model,
                      'id': id,
                      'field': fullPath,
                      'value': position
                    });
                  }
                }
              } else {
                $log.invalidPropertyName(id, this.constructor.name, propertyName, position, propertyType);
              }
            } else {
              if (typeof position === 'number') {
                val = getStructureValue(model, id, fullPath)[position];
                return val;
              } else {
                $log.invalidPropertyName(id, this.constructor.name, propertyName, position, 'number');
              }
            }
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(id, this.constructor.name, propertyName);
          } else {
            if ($metamodel.isValidType(value, 'any')) {
              search = $db[model].find({
                '_id': id
              });
              if (search.length) {

                var arr = getStructureValue(model, id, fullPath);
                if (typeof arr === 'undefined') {
                  arr = [];
                }
                arr[position] = value;
                setStructureValue(model, id, fullPath, arr);

                if ($helper.isRuntime()) {
                  $helper.getRuntime().require('db')
.update({
                    'collection': model,
                    'id': id,
                    'field': fullPath,
                    'value': arr
                  });
                }

                $workflow.state({
                  'component': id,
                  'state': fullPath,
                  'data': [arr, 'add']
                });
              }
            } else {
              $log.invalidPropertyName(id, this.constructor.name, propertyName, value, propertyType);
            }
          }
        }
      };

      sructure[propertyName] = new Function('__body', 'return function ' + propertyName + ' (position, value) { return __body.call(this, position, value) };')(body);
    } else {
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
              case $metamodel.isClassName(propertyType):
                propertyValue = get(getStructureValue(model, id, fullPath));
                break;
              case propertyType === 'date':
                propertyValue = new Date(getStructureValue(model, id, fullPath));
                break;
              case propertyType === 'json':
                propertyValue = JSON.parse(JSON.stringify(getStructureValue(model, id, fullPath)));
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
              search = $db[model].find({
                '_id': id
              });
              if (search.length) {
                component = search[0];

                switch (true) {
                  case $metamodel.isClassName(propertyType):
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
                  $helper.getRuntime().require('db')
.update({
                    'collection': model,
                    'id': id,
                    'field': fullPath,
                    'value': value
                  });
                }

                // case of _Behavior
                if (model === '_Behavior') {
                  $behavior.removeFromMemory(id);
                }

                $workflow.state({
                  'component': id,
                  'state': fullPath,
                  'data': [value]
                });
              }
            } else {
              $log.invalidPropertyName(id, model, fullPath, value, propertyType);
            }
          }
        }
      };

      sructure[propertyName] = new Function('__body', 'return function ' + propertyName + ' (value) { return __body.call(this,value) };')(body);
    }
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
      paramsWithContext = '',
      body = function () {
        var result = null;

        result = $workflow.state({
          'component': this.id(),
          'state': methodName,
          'data': arguments
        });

        return result;
      },
      bodyWithContext = function () {
        var result = null,
          data = Array.prototype.slice.call(arguments);

        data.shift();

        if (arguments[0]) {
          result = $workflow.state({
            'component': this.id(),
            'state': methodName,
            'data': data,
            'context': arguments[0]
          });
        } else {
          $log.unknownContext(classId, methodName);
        }

        return result;
      };

    if (params) {
      paramsName.unshift('context');
      paramsWithContext = paramsName.join('');

      Class.prototype[methodName] = new Function('__body', 'return function ' + methodName + ' (' + params + ') { return __body.call(this,' + params + ') };')(body);
      if (methodName !== 'name') {
        Class[methodName] = new Function('__body', 'return function ' + methodName + ' (' + paramsWithContext + ') { return __body.call(this,' + paramsWithContext + ') };')(bodyWithContext);
      }
    } else {
      Class.prototype[methodName] = new Function('__body', 'return function ' + methodName + ' () { return __body.call(this) };')(body);
      if (methodName !== 'name') {
        Class[methodName] = new Function('__body', 'return function ' + methodName + ' (context) { return __body.call(this, context) };')(bodyWithContext);
      }
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

        if (classId === '_Channel') {
          systems = $db._System.find({
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

          $db._Message.insert(message);

          $workflow.state({
            'component': this.id(),
            'state': 'send',
            'data': [{
              'event': message.event,
              'from': message.from,
              'data': message.data
            }]
          });
        } else {
          $workflow.state({
            'component': this.id(),
            'state': methodName,
            'data': arguments
          });
        }
      };
    if (params) {
      Class.prototype[methodName] = new Function('__body', 'return function ' + methodName + ' (' + params + ') { return __body.call(this,' + params + ') };')(body);
    } else {
      Class.prototype[methodName] = new Function('__body', 'return function ' + methodName + ' () { return __body.call(this) };')(body);
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
      'component': this,
      'methodName': 'on',
      'args': arguments
    })) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db._Behavior.find({
            'component': this.id(),
            'state': state
          }).length >= 1) {
          $log.behaviorNotUnique(classId, state);
        } else {
          if ($worklow.validParamNumbers(classId, state, handler)) {
            behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

            currentState = $state.get(this.id());
            if (currentState && currentState.state === state) {
              $workflow.action(behaviorId, currentState.value);
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
  Class.prototype.on = new Function('__body', 'return function on (state, handler, useCoreAPI, isCore) { return __body.call(this,state,handler,useCoreAPI,isCore) };')(body);
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
      'component': this,
      'methodName': 'on',
      'args': arguments
    })) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db._Behavior.find({
            'component': this.id(),
            'state': state
          }).length >= 1) {
          $log.behaviorNotUnique(classId, state);
        } else {
          if ($worklow.validParamNumbers(classId, state, handler)) {
            behaviorId = $behavior.add(this.id(), state, handler, useCoreAPI, isCore);

            currentState = $state.get(this.id());
            if (currentState && currentState.state === state) {
              $workflow.action(behaviorId, currentState.value);
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
  Class.on = new Function('__body', 'return function on (state, handler, useCoreAPI, isCore) { return __body.call(this, state, handler, useCoreAPI,isCore) };')(body);
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
      'component': this,
      'methodName': 'off',
      'args': arguments
    })) {
      if ($metamodel.isValidState(state, classId)) {
        $behavior.remove({
          'behaviorId': behaviorId,
          'componentId': classId,
          'state': state
        });
      } else {
        $log.invalidStateOff(classId, state);
      }
    }
  };
  Class.off = new Function('__body', 'return function off (state, behaviorId) { return __body.call(this, state, behaviorId) };')(body);
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
      'component': id,
      'state': 'destroy'
    });
  };
  Class.destroy = new Function('__body', 'return function destroy () { return __body.call(this) };')(body);
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
  Class.classInfo = new Function('__body', 'return function classInfo () { return __body.call(this) };')(body);
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
  // inherit from _Component
  if ($metamodel.inheritFrom(classId, '_Component')) {
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
      '_id': id
    });

    // remove behaviors
    $behavior.remove({
      'componentId': id
    });

    // case of Behavior
    if (classId === '_Behavior') {
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
 * It is the factory of all the components that are created by System Runtime.
 * 
 * @module component
 * @requires workflow
 * @requires db
 * @requires metamodel
 * @requires behavior
 * @requires helper
 * @requires log
 * @class component
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
