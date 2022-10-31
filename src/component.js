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
 * @module component
 * @requires workflow
 * @requires db
 * @requires metamodel
 * @requires behavior
 * @requires helper
 * @requires log
 * @requires state
 * @requires mson
 * @requires history
 * @description This module manages the components.
 * It is the factory of all the components that are created by System Runtime.
 */

import $workflow from './workflow.js'
import $db from './db.js'
import $metamodel from './metamodel.js'
import $behavior from './behavior.js'
import $helper from './helper.js'
import $log from './log.js'
import $history from './history.js'
import $state from './state.js'
import $mson from './mson.js'

/* Private properties */

let store = {}

/* Private methods */

/**
 * @class _Array
 * @param {Object} conf
 * {String} classId name of the class
 * {String} type type of the array
 * {Array} arr array
 * @private
 * @description Sub class to override many methods of Array Class
 */
function _Array(conf) {
  let arr = []
  let arrDb = []
  let type = ''
  let id = ''
  let classId = ''
  let propertyName = ''
  let isReadOnly = false
  let isClassName = false

  conf = conf || {}
  type = conf.type || ''
  id = conf.id || ''
  propertyName = conf.propertyName || ''
  arrDb = conf.arr || []
  classId = conf.classId || ''

  if (typeof conf.readOnly !== 'undefined') {
    isReadOnly = conf.readOnly
  }

  isClassName = $metamodel.isClassName(type)

  // init
  arrDb.forEach(function (val) {
    if (isClassName) {
      arr.push($helper.getRuntime().require(val))
    } else {
      arr.push(val)
    }
  })

  /**
   * @method _copy
   * @private
   * @description copy the array
   */
  function _copy() {
    let i = 0
    let j = 0
    let length = arr.length

    arrDb.forEach(function (val) {
      if (isClassName) {
        arr[i] = $helper.getRuntime().require(val)
      } else {
        arr[i] = val
      }
      i = i + 1
    })

    for (j = i; j < length; j++) {
      delete arr[j]
    }
    arr.length = arrDb.length
  }

  /**
   * @method _add
   * @param {String} val value to add
   * @param {String} action type of action
   * @param {Number} start
   * @param {String} deleteCount
   * @private
   * @description add an item in the array
   */
  function _add(val, action, start, deleteCount) {
    let i = 0
    let length = 0
    let del = []
    let oldValue = null

    if ($history.isEnabled()) {
      oldValue = JSON.stringify(arrDb)
    }

    if (!isReadOnly) {
      if (isClassName) {
        if (val && $metamodel.inheritFrom(val.constructor.name, type)) {
          switch (true) {
            case action === 'push':
              arrDb.push(val.id())
              break
            case action === 'unshift':
              arrDb.unshift(val.id())
              break
            case action === 'splice':
              del = arrDb.splice(start, deleteCount, val)

              length = del.length
              for (i = 0; i < length; i++) {
                $workflow.process({
                  component: id,
                  state: propertyName,
                  data: [store[del[i]], 'remove'],
                })
              }
              break
            default:
              break
          }

          if ($history.isEnabled() && classId.indexOf('_') !== 0) {
            $history.pushState({
              action: 'update',
              collection: classId,
              id: id,
              field: propertyName,
              value: JSON.stringify(arrDb),
              oldValue: oldValue,
            })
          }

          if ($helper.isRuntime()) {
            $helper.getRuntime().require('db').update({
              collection: classId,
              id: id,
              field: propertyName,
              value: arrDb,
            })
          }

          $workflow.process({
            component: id,
            state: propertyName,
            data: [val, 'add'],
          })
        } else {
          $log.invalidPropertyName(id, classId, propertyName, val, type)
        }
      } else {
        if (val && $metamodel.isValidType(val, type)) {
          switch (true) {
            case action === 'push':
              arrDb.push(val)
              break
            case action === 'unshift':
              arrDb.unshift(val)
              break
            case action === 'splice':
              arrDb.splice(start, deleteCount, val)
              break
            default:
              break
          }

          if ($history.isEnabled() && classId.indexOf('_') !== 0) {
            $history.pushState({
              action: 'update',
              collection: classId,
              id: id,
              field: propertyName,
              value: JSON.stringify(arrDb),
              oldValue: oldValue,
            })
          }

          if ($helper.isRuntime()) {
            $helper.getRuntime().require('db').update({
              collection: classId,
              id: id,
              field: propertyName,
              value: arrDb,
            })
          }

          $workflow.process({
            component: id,
            state: propertyName,
            data: [val, 'add'],
          })
        } else {
          $log.invalidPropertyName(id, classId, propertyName, val, type)
        }
      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName)
    }
    return arrDb.length
  }

  /**
   * @method _remove
   * @param {String} action
   * @private
   * @description remove an item from the array
   */
  function _remove(action) {
    let result
    let val = null
    let oldValue = null

    if ($history.isEnabled()) {
      oldValue = JSON.stringify(arrDb)
    }

    if (!isReadOnly) {
      if (arrDb.length !== 0) {
        switch (true) {
          case action === 'pop':
            val = arrDb.pop()
            break
          case action === 'shift':
            val = arrDb.shift()
            break
          default:
            break
        }

        if ($history.isEnabled() && classId.indexOf('_') !== 0) {
          $history.pushState({
            action: 'update',
            collection: classId,
            id: id,
            field: propertyName,
            value: JSON.stringify(arrDb),
            oldValue: oldValue,
          })
        }

        if ($helper.isRuntime()) {
          $helper.getRuntime().require('db').update({
            collection: classId,
            id: id,
            field: propertyName,
            value: arrDb,
          })
        }

        if (isClassName) {
          result = store[val]
        } else {
          result = val
        }

        $workflow.process({
          component: id,
          state: propertyName,
          data: [result, 'remove'],
        })
      }
    } else {
      $log.readOnlyProperty(id, classId, propertyName)
    }
    return result
  }

  /**
   * @method push
   * @param {_Component|Object} val
   * @description Override push method
   */
  arr.push = function push(val) {
    let result = _add(val, 'push')

    arr[arr.length] = val

    return result
  }

  /**
   * @method pop
   * @returns {_Component|Object} value
   * @description Override pop method
   */
  arr.pop = function pop() {
    let result = _remove('pop')
    let length = arr.length

    if (length !== 0) {
      delete arr[length]
      arr.length = length - 1
    }

    return result
  }

  /**
   * @method shift
   * @returns {_Component|Object} value
   * @description Override shift method
   */
  arr.shift = function shift() {
    let result = _remove('shift')
    _copy()

    return result
  }

  /**
   * @method unshift
   * @param {_Component|Object} val
   * @description Override unshift method
   */
  arr.unshift = function unshift(val) {
    let result = _add(val, 'unshift')
    _copy()

    return result
  }

  /**
   * @method push
   * @param {_Component|Object} arr
   * @description Override concat method
   */
  arr.concat = function concat(arr) {
    let i = 0
    let length = 0
    let result = null

    if (Array.isArray(arr)) {
      length = arr.length
      for (i = 0; i < length; i++) {
        _add(arr[i], 'push')
      }
    }

    conf.arr = arrDb

    result = new _Array(conf)
    _copy()

    return result
  }

  /**
   * @method sort
   * @param {Function} funct the sort function
   * @returns {_Array} the current _Array
   * @description Override sort method
   */
  arr.sort = function sort(funct) {
    let oldValue = null

    if ($history.isEnabled()) {
      oldValue = JSON.stringify(arrDb)
    }

    arrDb.sort(funct)

    if ($history.isEnabled() && classId.indexOf('_') !== 0) {
      $history.pushState({
        action: 'update',
        collection: classId,
        id: id,
        field: propertyName,
        value: JSON.stringify(arrDb),
        oldValue: oldValue,
      })
    }

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db').update({
        collection: classId,
        id: id,
        field: propertyName,
        value: arrDb,
      })
    }

    _copy()

    return arr
  }

  /**
   * @method reverse
   * @returns {_Array} the reversed _Array
   * @description Override reverse method
   */
  arr.reverse = function reverse() {
    let oldValue = null

    if ($history.isEnabled()) {
      oldValue = JSON.stringify(arrDb)
    }
    arrDb.reverse()

    if ($history.isEnabled() && classId.indexOf('_') !== 0) {
      $history.pushState({
        action: 'update',
        collection: classId,
        id: id,
        field: propertyName,
        value: JSON.stringify(arrDb),
        oldValue: oldValue,
      })
    }

    if ($helper.isRuntime()) {
      $helper.getRuntime().require('db').update({
        collection: classId,
        id: id,
        field: propertyName,
        value: arrDb,
      })
    }

    _copy()

    return arr
  }

  /**
   * @method splice
   * @returns {_Array} the spliced _Array
   * @description Override splice method
   */
  arr.splice = function splice(start, deleteCount, val) {
    let oldValue = null
    let result = []
    let i = 0
    let length = 0
    let data = null

    if ($history.isEnabled()) {
      oldValue = JSON.stringify(arrDb)
    }

    if (typeof val !== 'undefined') {
      _add(val, 'splice', start, deleteCount)
    } else {
      result = arrDb.splice(start, deleteCount)

      if ($history.isEnabled() && classId.indexOf('_') !== 0) {
        $history.pushState({
          action: 'update',
          collection: classId,
          id: id,
          field: propertyName,
          value: JSON.stringify(arrDb),
          oldValue: oldValue,
        })
      }

      if ($helper.isRuntime()) {
        $helper.getRuntime().require('db').update({
          collection: classId,
          id: id,
          field: propertyName,
          value: arrDb,
        })
      }

      length = result.length
      for (i = 0; i < length; i++) {
        if (isClassName) {
          data = store[result[i]]
        } else {
          data = result[i]
        }

        $workflow.process({
          component: id,
          state: propertyName,
          data: [data, 'remove'],
        })
      }
    }

    _copy()

    return result
  }

  /**
   * @method slice
   * @returns {_Array} the sliced _Array
   * @description Override slice method
   */
  arr.slice = function slice(begin, end) {
    let result = arrDb.slice(begin, end)
    _copy()

    return result
  }

  return arr
}

_Array.prototype = []

/**
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} all the names of method parameters of the class
 * @private
 * @description Get all the names of method parameters
 */
function getParamNames(id, methodName) {
  let params = []
  let result = []
  let length = 0
  let i = 0

  params = $metamodel.getModel(id)[methodName].params
  if (params) {
    length = params.length
    for (i = 0; i < length; i++) {
      result.push(params[i].name)
    }
  }
  return result
}

/**
 * @method getProperties
 * @param {String} id id of the class
 * @returns {Array} all the properties of the class
 * @private
 * @description Get all the property of a class
 */
function getProperties(id) {
  let model = null
  let schema = null
  let propNames = []
  let length = 0
  let i = 0
  let result = []

  model = $metamodel.getModel(id)
  schema = $metamodel.getSchema(model[$mson.NAME])

  propNames = Object.keys(schema)

  length = propNames.length
  for (i = 0; i < length; i++) {
    if (
      schema[propNames[i]] === $mson.LINK_TYPE ||
      schema[propNames[i]] === $mson.PROPERTY_TYPE ||
      schema[propNames[i]] === $mson.COLLECTION_TYPE
    ) {
      result.push({
        name: propNames[i],
        type: model[propNames[i]].type,
        readOnly: model[propNames[i]].readOnly,
      })
    }
  }

  return result
}

/**
 * @method getMethods
 * @param {String} id id of the class
 * @returns {Array} all the methods of the class
 * @private
 * @description Get all the method of a class
 */
function getMethods(id) {
  let model = null
  let schema = null
  let propNames = []
  let length = 0
  let i = 0
  let result = []

  model = $metamodel.getModel(id)
  schema = $metamodel.getSchema(model[$mson.NAME])

  propNames = Object.keys(schema)

  length = propNames.length
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === $mson.METHOD_TYPE) {
      result.push(propNames[i])
    }
  }

  return result
}

/**
 * @method getStructureProperties
 * @param {String} path path of the property
 * @param {String} name name of the model
 * @returns {Array} list of property schema of the structure type
 * @private
 * @description Get the schema of a structure
 */
function getStructureProperties(path, model) {
  let type = null
  let structure = null
  let result = []
  let propNames = []

  type = $metamodel.getModelPathType(model, path)
  structure = $metamodel.getType(type)

  if (structure && structure.schema) {
    propNames = Object.keys(structure.schema)
    propNames.forEach(function (name) {
      structure.schema[name].name = name
      result.push(structure.schema[name])
    })
  }

  return result
}

/**
 * @method getEvents
 * @param {String} id id of the class
 * @returns {Array} all the events of the class
 * @private
 * @description Get all the event of a class
 */
function getEvents(id) {
  let model = null
  let schema = null
  let propNames = []
  let length = 0
  let i = 0
  let result = []

  model = $metamodel.getModel(id)
  schema = $metamodel.getSchema(model[$mson.NAME])

  propNames = Object.keys(schema)

  length = propNames.length
  for (i = 0; i < length; i++) {
    if (schema[propNames[i]] === $mson.EVENT_TYPE) {
      result.push(propNames[i])
    }
  }

  return result
}

/**
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path
 * @returns {Object} the value
 * @private
 * @description Get the value of a structure
 */
function getStructureValue(model, id, path) {
  let result = null
  let doc = $db.store[model][id]
  let subPath = path.split('.')
  let length = subPath.length
  let i = 0
  let arr = ''
  let index = -1

  result = doc

  for (i = 0; i < length; i++) {
    if (subPath[i].indexOf('[') !== -1) {
      arr = subPath[i].split('[')[0]
      index = subPath[i].split('[')[1].replace(']', '')
      result = result[arr][index]
    } else {
      if (result) {
        result = result[subPath[i]]
      }
    }
  }
  return result
}

/**
 * @method getStructureValue
 * @param {String} model name of the model
 * @param {String} id name of the component
 * @param {String} path
 * @param {String} value the value to set
 * @private
 * @description Set the value of a structure
 */
function setStructureValue(model, id, path, value) {
  let result = null
  let doc = $db.store[model][id]
  let subPath = path.split('.')
  let length = subPath.length
  let i = 0
  let arr = ''
  let index = -1

  result = doc

  for (i = 0; i < length - 1; i++) {
    if (subPath[i].indexOf('[') !== -1) {
      arr = subPath[i].split('[')[0]
      index = subPath[i].split('[')[1].replace(']', '')
      result = result[arr][index]
    } else {
      result = result[subPath[i]]
    }
  }
  result[subPath[i]] = value
}

/**
 * @method createClasss
 * @param {String} classId name of the class
 * @returns {Function} the class
 * @private
 * @description Create a new class from a class definition
 */
function createClass(classId) {
  let proxy = function proxy(config) {
    config = config || {}
    let proxy = {}

    if (config.constructor.name !== 'Object') {
      $log.invalidConctructorParameters(config, classId)
      config = {}
    }

    if (
      !$metamodel.isValidObject(
        config,
        $metamodel.getModel(classId),
        true,
        true
      )
    ) {
      $log.invalidParameters(classId, config)
    }

    $metamodel.prepareObject(config, $metamodel.getModel(classId))

    if (typeof config[$mson.ID] === 'undefined') {
      config[$mson.ID] = $helper.generateId()
    }

    store[config[$mson.ID]] = this

    // id
    proxy = function proxy() {
      return config[$mson.ID]
    }
    this.id = new Function(
      '__proxy',
      'return function id () { return __proxy.apply(this) };'
    )(proxy)

    // create link to db
    $db.store[classId][config[$mson.ID]] = config

    if ($history.isEnabled() && classId.indexOf('_') !== 0) {
      $history.pushState({
        action: 'insert',
        collection: classId,
        id: config[$mson.ID],
        value: JSON.stringify(config),
      })
    }

    if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
      $helper.getRuntime().require('db').insert({
        collection: classId,
        document: config,
      })
    }

    Object.freeze(this)

    if (this.init) {
      this.init(config)
    }
  }
  return new Function(
    '__proxy',
    'return function ' +
      classId +
      ' (config) { __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method addIdClass
 * @param {Function} Class a class
 * @param {String} classId name of the class
 * @private
 * @description Add an id method to a class that will return its id
 */
function addIdClass(Class, classId) {
  let proxy = function proxy() {
    return classId
  }
  Class.id = new Function(
    '__proxy',
    'return function id () { return __proxy.apply(this) };'
  )(proxy)
}

/**
 * @method addProperties
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add properties to a component.
 * All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 *
 * @example
 * laure.age(); // get the age of a person
 * laure.age(22); // set the age of a person
 */
function addProperties(model, Class, classId) {
  let properties = getProperties(model)

  properties.forEach(function property(prop) {
    let proxy = {}
    let propertyName = ''
    let propertyType = ''
    let propertyReadOnly = ''

    propertyName = prop.name
    propertyType = prop.type
    propertyReadOnly = prop.readOnly

    function _isValidCollection(coll, type) {
      let result = true

      if (type !== 'any') {
        coll.forEach(function (val) {
          if ($metamodel.isClassName(type)) {
            if (
              !$metamodel.isValidType(val, type) &&
              !$metamodel.inheritFrom(val.constructor.name, type)
            ) {
              result = result && false
            }
          } else {
            if (!$metamodel.isValidType(val, type)) {
              result = result && false
            }
          }
        })
      }

      return result
    }

    function _getRealCollection(coll, type) {
      let result = []

      coll.forEach(function (val) {
        if ($metamodel.isClassName(type)) {
          switch (true) {
            case typeof val === 'string':
              result.push(val)
              break
            case typeof val.id !== 'undefined':
              result.push(val.id())
              break
            default:
              result.push(null)
              break
          }
        } else {
          result.push(val)
        }
      })

      return result
    }

    if (Array.isArray(propertyType) || propertyType === 'array') {
      // in case of array, return a sub array
      proxy = function proxy(position, value) {
        let search = []
        let component = null
        let runtimeArr = null
        let val = null
        let realVal = null
        let oldValue = null

        if (typeof value === 'undefined') {
          if (typeof position === 'undefined') {
            runtimeArr = new _Array({
              id: this.id(),
              propertyName: propertyName,
              readOnly: propertyReadOnly,
              classId: classId,
              type: propertyType === 'array' ? 'any' : propertyType[0],
              arr: $db.store[classId][this.id()][propertyName],
            })

            return runtimeArr
          } else {
            if (Array.isArray(position)) {
              // we replace the collection
              if (
                _isValidCollection(
                  position,
                  propertyType === 'array' ? 'any' : propertyType[0]
                )
              ) {
                search = $db.collections[classId].find({
                  _id: this.id(),
                })
                if (search.length) {
                  component = search[0]
                  realVal = _getRealCollection(
                    position,
                    propertyType === 'array' ? 'any' : propertyType[0]
                  )

                  $workflow.process({
                    component: this.id(),
                    state: propertyName,
                    data: [position, 'reset'],
                  })

                  if ($history.isEnabled()) {
                    oldValue = JSON.stringify(component[propertyName])
                  }

                  component[propertyName] = realVal

                  if ($history.isEnabled() && classId.indexOf('_') !== 0) {
                    $history.pushState({
                      action: 'update',
                      collection: classId,
                      id: this.id(),
                      field: propertyName,
                      value: JSON.stringify(component[propertyName]),
                      oldValue: oldValue,
                    })
                  }

                  if ($helper.isRuntime()) {
                    $helper.getRuntime().require('db').update({
                      collection: classId,
                      id: this.id(),
                      field: propertyName,
                      value: component[propertyName],
                    })
                  }
                }
              } else {
                $log.invalidCollectionItem(
                  this.id(),
                  this.constructor.name,
                  propertyName,
                  position,
                  propertyType === 'array' ? 'any' : propertyType[0]
                )
              }
            } else {
              if (typeof position === 'number') {
                val = $db.store[classId][this.id()][propertyName][position]
                if (val) {
                  switch (true) {
                    case $metamodel.isClassName(
                      propertyType === 'array' ? 'array' : propertyType[0]
                    ):
                      realVal = $helper.getRuntime().require(val)
                      break
                    case propertyType === 'array'
                      ? 'array'
                      : propertyType[0] === 'date':
                      realVal = new Date(val)
                      break
                    case $metamodel.isStructure(propertyName, model):
                      realVal = addStructure(
                        '',
                        propertyName + '[' + position + ']',
                        model,
                        this.id()
                      )
                      break
                    default:
                      realVal = val
                      break
                  }
                  return realVal
                }
              } else {
                $log.invalidPropertyName(
                  this.id(),
                  this.constructor.name,
                  propertyName,
                  position,
                  'number'
                )
              }
            }
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(
              this.id(),
              this.constructor.name,
              propertyName
            )
          } else {
            if (
              $metamodel.isValidType(
                value,
                propertyType === 'array' ? 'any' : propertyType[0]
              ) ||
              ($metamodel.inheritFrom(
                value.constructor.name,
                propertyType === 'array' ? 'array' : propertyType[0]
              ) &&
                $metamodel.isClassName(
                  propertyType === 'array' ? 'array' : propertyType[0]
                ))
            ) {
              search = $db.collections[classId].find({
                _id: this.id(),
              })
              if (search.length) {
                switch (true) {
                  case $metamodel.isClassName(
                    propertyType === 'array' ? 'array' : propertyType[0]
                  ):
                    switch (true) {
                      case typeof value === 'string':
                        realVal = value
                        break
                      case typeof value.id !== 'undefined':
                        realVal = value.id()
                        break
                      default:
                        realVal = ''
                        break
                    }
                    break
                  case Array.isArray(propertyType)
                    ? propertyType[0]
                    : 'any' === 'date':
                    if (typeof value === 'string') {
                      realVal = value
                    } else {
                      realVal = value.toISOString()
                    }
                    break
                  default:
                    realVal = ''
                    break
                }

                component = search[0]
                component[propertyName][position] = realVal

                if ($history.isEnabled()) {
                  oldValue = JSON.stringify(component[propertyName])
                }

                if ($history.isEnabled() && classId.indexOf('_') !== 0) {
                  $history.pushState({
                    action: 'update',
                    collection: classId,
                    id: this.id(),
                    field: propertyName,
                    value: JSON.stringify(component[propertyName]),
                    oldValue: oldValue,
                  })
                }

                if ($helper.isRuntime()) {
                  $helper.getRuntime().require('db').update({
                    collection: classId,
                    id: this.id(),
                    field: propertyName,
                    value: component[propertyName],
                  })
                }

                $workflow.process({
                  component: this.id(),
                  state: propertyName,
                  data: [value, 'add'],
                })
              }
            } else {
              $log.invalidPropertyName(
                this.id(),
                this.constructor.name,
                propertyName,
                value,
                propertyType[0]
              )
            }
          }
        }
      }
      Class.prototype[propertyName] = new Function(
        '__proxy',
        'return function ' +
          propertyName +
          ' (position, value) { return __proxy.apply(this, arguments) };'
      )(proxy)
    } else {
      proxy = function proxy(value) {
        let search = []
        let component = null
        let propertyValue = null
        let oldValue = null
        let realVal = null

        if (typeof value === 'undefined') {
          component = $db.store[classId][this.id()]
          if (component) {
            switch (true) {
              case $metamodel.isClassName(propertyType):
                propertyValue = get(component[propertyName])
                break
              case propertyType === 'date':
                propertyValue = new Date(component[propertyName])
                break
              case propertyType === 'json':
                propertyValue = component[propertyName]
                propertyValue = JSON.parse(JSON.stringify(propertyValue))
                break
              case propertyType === 'array':
                propertyValue = new _Array({
                  id: this.id(),
                  propertyName: propertyName,
                  readOnly: propertyReadOnly,
                  classId: classId,
                  type: 'any',
                  arr: $db.store[classId][this.id()][propertyName],
                })
                break
              case $metamodel.isStructure(propertyName, classId):
                propertyValue = addStructure('', propertyName, model, this.id())
                break
              default: // TODO case of object
                propertyValue = component[propertyName]
                break
            }
            return propertyValue
          } else {
            $log.destroyedComponentCall(propertyName, this.id())
          }
        } else {
          if (propertyReadOnly) {
            $log.readOnlyProperty(
              this.id(),
              this.constructor.name,
              propertyName
            )
          } else {
            if ($metamodel.isValidType(value, propertyType)) {
              search = $db.collections[classId].find({
                _id: this.id(),
              })
              if (search.length) {
                component = search[0]

                if ($history.isEnabled()) {
                  oldValue = JSON.stringify(component[propertyName])
                }

                switch (true) {
                  case $metamodel.isClassName(propertyType):
                    if (value === null) {
                      realVal = value
                    } else {
                      realVal = value.id()
                    }
                    break
                  case propertyType === 'date':
                    if (typeof value === 'string') {
                      realVal = value
                    } else {
                      realVal = value.toISOString()
                      component[propertyName] = value.toISOString()
                    }
                    break
                  default:
                    realVal = value
                    break
                }

                component[propertyName] = realVal

                if ($history.isEnabled() && classId.indexOf('_') !== 0) {
                  $history.pushState({
                    action: 'update',
                    collection: classId,
                    id: this.id(),
                    field: propertyName,
                    value: JSON.stringify(realVal),
                    oldValue: oldValue,
                  })
                }

                if ($helper.isRuntime() && $helper.getRuntime().require('db')) {
                  $helper.getRuntime().require('db').update({
                    collection: classId,
                    id: this.id(),
                    field: propertyName,
                    value: realVal,
                  })
                }

                // case of _Behavior
                if (classId === '_Behavior') {
                  $behavior.removeFromMemory(this.id())
                }

                $workflow.process({
                  component: this.id(),
                  state: propertyName,
                  data: [value],
                })
              }
            } else {
              $log.invalidPropertyName(
                this.id(),
                this.constructor.name,
                propertyName,
                value,
                propertyType
              )
            }
          }
        }
      }
      Class.prototype[propertyName] = new Function(
        '__proxy',
        'return function ' +
          propertyName +
          ' (value) { return __proxy.apply(this, arguments) };'
      )(proxy)
    }
  })
}

/**
 * @method addStructure
 * @param {String} path parent path
 * @param {String} name property name
 * @param {String} model model name
 * @param {String} id id of the component
 * @returns {Object} object that cointains methods to access the structure
 * @private
 * @description Add structure properties to a component.
 * All these properties will be accessed by a method with the same name.
 * Some checks can be done in order to see if the set of properties is compliant with the model.
 */
function addStructure(path, name, model, id) {
  let properties = getStructureProperties(
    path ? path + '.' + name : name,
    model
  )
  let sructure = undefined

  if (getStructureValue(model, id, path ? path + '.' + name : name)) {
    sructure = {}
    properties.forEach(function property(prop) {
      let proxy = {}
      let propertyName = ''
      let propertyType = ''
      let propertyReadOnly = ''

      propertyName = prop.name
      propertyType = prop.type
      propertyReadOnly = prop.readOnly

      if (Array.isArray(propertyType) || propertyType === 'array') {
        // in case of array, return a sub array
        proxy = function proxy(position, value) {
          let search = []
          let component = null
          let runtimeArr = null
          let val = null
          let parentPath = ''
          let fullPath = ''
          let oldValue = null

          function _isValidCollection(coll, type) {
            let result = true

            coll.forEach(function (val) {
              if (!$metamodel.isValidType(val, type)) {
                result = result && false
              }
            })

            return result
          }

          if (path) {
            parentPath = path + '.' + name
          } else {
            parentPath = name
          }
          fullPath = parentPath + '.' + propertyName

          if (typeof value === 'undefined') {
            if (typeof position === 'undefined') {
              runtimeArr = new _Array({
                id: id,
                propertyName: fullPath,
                readOnly: propertyReadOnly,
                classId: model,
                type: Array.isArray(propertyType) ? propertyType[0] : 'any',
                arr: getStructureValue(model, id, fullPath),
              })

              return runtimeArr
            } else {
              if (Array.isArray(position)) {
                // we replace the collection
                if (
                  _isValidCollection(
                    position,
                    Array.isArray(propertyType) ? propertyType[0] : 'any'
                  )
                ) {
                  search = $db.collections[model].find({
                    _id: id,
                  })
                  if (search.length) {
                    if ($history.isEnabled()) {
                      oldValue = getStructureValue(model, id, fullPath)
                    }

                    setStructureValue(model, id, fullPath, position)

                    // all element
                    if (fullPath.indexOf('[') !== -1) {
                      $workflow.process({
                        component: id,
                        state: fullPath.replace(/\[(\d)*\]/g, ''),
                        data: [position, 'reset'],
                      })
                    }

                    // current element
                    $workflow.process({
                      component: id,
                      state: fullPath,
                      data: [position, 'reset'],
                    })

                    if ($history.isEnabled() && model.indexOf('_') !== 0) {
                      $history.pushState({
                        action: 'update',
                        collection: model,
                        id: id,
                        field: fullPath,
                        value: JSON.stringify([]),
                        oldValue: JSON.stringify(oldValue),
                      })
                    }

                    if ($helper.isRuntime()) {
                      $helper.getRuntime().require('db').update({
                        collection: model,
                        id: id,
                        field: fullPath,
                        value: position,
                      })
                    }
                  }
                } else {
                  $log.invalidPropertyName(
                    id,
                    this.constructor.name,
                    propertyName,
                    position,
                    propertyType[0]
                  )
                }
              } else {
                if (typeof position === 'number') {
                  component = $db.store[model][id]
                  if (component) {
                    switch (true) {
                      case $metamodel.isClassName(
                        Array.isArray(propertyType) ? propertyType[0] : 'any'
                      ):
                        val = get(
                          getStructureValue(
                            model,
                            id,
                            fullPath + '[' + position + ']'
                          )
                        )
                        return val
                      case Array.isArray(propertyType)
                        ? propertyType[0]
                        : 'any' === 'date':
                        val = new Date(
                          getStructureValue(
                            model,
                            id,
                            fullPath + '[' + position + ']'
                          )
                        )
                        return val
                      case Array.isArray(propertyType)
                        ? propertyType[0]
                        : 'any' === 'json':
                        val = getStructureValue(
                          model,
                          id,
                          fullPath + '[' + position + ']'
                        )
                        val = JSON.parse(JSON.stringify(val))
                        return val
                      case $metamodel.isStructure(fullPath, model):
                        val = addStructure(
                          parentPath,
                          propertyName + '[' + position + ']',
                          model,
                          id
                        )
                        return val
                      default:
                        val = getStructureValue(
                          model,
                          id,
                          fullPath + '[' + position + ']'
                        )
                        return val
                    }
                  } else {
                    $log.destroyedComponentCall(
                      fullPath[position] + '[' + position + ']',
                      id
                    )
                  }
                } else {
                  $log.invalidPropertyName(
                    id,
                    this.constructor.name,
                    propertyName,
                    position,
                    'number'
                  )
                }
              }
            }
          } else {
            if (propertyReadOnly) {
              $log.readOnlyProperty(id, this.constructor.name, propertyName)
            } else {
              if (
                $metamodel.isValidType(
                  value,
                  Array.isArray(propertyType) ? propertyType[0] : 'any'
                )
              ) {
                search = $db.collections[model].find({
                  _id: id,
                })
                if (search.length) {
                  let arr = getStructureValue(model, id, fullPath)
                  if (typeof arr === 'undefined') {
                    arr = []
                  }

                  switch (true) {
                    case $metamodel.inheritFrom(
                      value.constructor.name,
                      Array.isArray(propertyType) ? propertyType[0] : 'any'
                    ) &&
                      $metamodel.isClassName(
                        Array.isArray(propertyType) ? propertyType[0] : 'any'
                      ):
                      arr[position] = value.id()
                      break
                    case Array.isArray(propertyType)
                      ? propertyType[0]
                      : 'any' === 'date':
                      arr[position] = value.toISOString()
                      break
                    default:
                      arr[position] = value
                      break
                  }

                  if ($history.isEnabled()) {
                    oldValue = getStructureValue(model, id, fullPath)
                  }

                  setStructureValue(model, id, fullPath, arr)

                  if ($history.isEnabled() && model.indexOf('_') !== 0) {
                    $history.pushState({
                      action: 'update',
                      collection: model,
                      id: id,
                      field: fullPath,
                      value: JSON.stringify(value),
                      oldValue: JSON.stringify(oldValue),
                    })
                  }

                  if ($helper.isRuntime()) {
                    $helper.getRuntime().require('db').update({
                      collection: model,
                      id: id,
                      field: fullPath,
                      value: arr,
                    })
                  }

                  // all element
                  if (fullPath.indexOf('[') !== -1) {
                    $workflow.process({
                      component: id,
                      state: fullPath.replace(/\[(\d)*\]/g, ''),
                      data: [value, 'add'],
                    })
                  }

                  // current element
                  $workflow.process({
                    component: id,
                    state: fullPath,
                    data: [value, 'add'],
                  })
                }
              } else {
                $log.invalidPropertyName(
                  id,
                  this.constructor.name,
                  propertyName,
                  value,
                  Array.isArray(propertyType) ? propertyType[0] : 'any'
                )
              }
            }
          }
        }

        sructure[propertyName] = new Function(
          '__proxy',
          'return function ' +
            propertyName +
            ' (position, value) { return __proxy.apply(this, arguments) };'
        )(proxy)
      } else {
        proxy = function proxy(value) {
          let search = []
          let component = null
          let propertyValue = null
          let parentPath = ''
          let fullPath = ''
          let oldValue = null
          let realVal = null

          if (path) {
            parentPath = path + '.' + name
          } else {
            parentPath = name
          }
          fullPath = parentPath + '.' + propertyName

          if (typeof value === 'undefined') {
            component = $db.store[model][id]
            if (component) {
              switch (true) {
                case $metamodel.isClassName(propertyType):
                  propertyValue = get(getStructureValue(model, id, fullPath))
                  break
                case propertyType === 'date':
                  propertyValue = new Date(
                    getStructureValue(model, id, fullPath)
                  )
                  break
                case propertyType === 'json':
                  propertyValue = getStructureValue(model, id, fullPath)
                  propertyValue = JSON.parse(JSON.stringify(propertyValue))
                  break
                case $metamodel.isStructure(fullPath, model):
                  propertyValue = addStructure(
                    parentPath,
                    propertyName,
                    model,
                    id
                  )
                  break
                default:
                  propertyValue = getStructureValue(model, id, fullPath)
                  break
              }
              if (propertyValue === undefined && prop.default !== undefined) {
                propertyValue = prop.default
              }
              return propertyValue
            } else {
              $log.destroyedComponentCall(fullPath, id)
            }
          } else {
            if (propertyReadOnly) {
              $log.readOnlyProperty(id, model, fullPath)
            } else {
              if ($metamodel.isValidType(value, propertyType)) {
                search = $db.collections[model].find({
                  _id: id,
                })
                if (search.length) {
                  component = search[0]

                  if ($history.isEnabled()) {
                    oldValue = getStructureValue(model, id, fullPath)
                  }

                  switch (true) {
                    case $metamodel.isClassName(propertyType):
                      realVal = value.id()
                      break
                    case propertyType === 'date':
                      realVal = value.toISOString()
                      break
                    default:
                      realVal = value
                      break
                  }

                  setStructureValue(model, id, fullPath, realVal)

                  if ($history.isEnabled() && model.indexOf('_') !== 0) {
                    $history.pushState({
                      action: 'update',
                      collection: model,
                      id: id,
                      field: fullPath,
                      value: JSON.stringify(realVal),
                      oldValue: JSON.stringify(oldValue),
                    })
                  }

                  if (
                    $helper.isRuntime() &&
                    $helper.getRuntime().require('db')
                  ) {
                    $helper.getRuntime().require('db').update({
                      collection: model,
                      id: id,
                      field: fullPath,
                      value: realVal,
                    })
                  }

                  // case of _Behavior
                  if (model === '_Behavior') {
                    $behavior.removeFromMemory(id)
                  }

                  // all elements
                  if (fullPath.indexOf('[') !== -1) {
                    $workflow.process({
                      component: id,
                      state: fullPath.replace(/\[(\d)*\]/g, ''),
                      data: [value],
                    })
                  }

                  // the current element
                  $workflow.process({
                    component: id,
                    state: fullPath,
                    data: [value],
                  })
                }
              } else {
                $log.invalidPropertyName(
                  id,
                  model,
                  fullPath,
                  value,
                  propertyType
                )
              }
            }
          }
        }

        sructure[propertyName] = new Function(
          '__proxy',
          'return function ' +
            propertyName +
            ' (value) { return __proxy.apply(this, arguments) };'
        )(proxy)
      }
    })
  }

  return sructure
}

/**
 * @method addMethods
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add methods to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts / outputs are compliant with the model.
 */
function addMethods(model, Class, classId) {
  let methods = getMethods(model)

  methods.forEach(function method(methodName) {
    let paramsName = getParamNames(classId, methodName)
    let params = paramsName.join(', ')
    let paramsWithContext = ''

    let proxy = function proxy() {
      let result = null

      result = $workflow.process({
        component: this.id(),
        state: methodName,
        data: arguments,
      })

      return result
    }

    let proxyWithContext = function proxy() {
      let result = null
      let data = Array.prototype.slice.call(arguments)

      data.shift()

      if (arguments[0]) {
        result = $workflow.process({
          component: this.id(),
          state: methodName,
          data: data,
          context: arguments[0],
        })
      } else {
        $log.unknownContext(classId, methodName)
      }

      return result
    }

    if (params) {
      paramsName.unshift('context')
      paramsWithContext = paramsName.join(', ')

      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.apply(this, arguments) };'
      )(proxy)
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (' +
            paramsWithContext +
            ') { return __proxy.apply(this, arguments) };'
        )(proxyWithContext)
      }
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.apply(this) };'
      )(proxy)
      if (methodName !== 'name') {
        Class[methodName] = new Function(
          '__proxy',
          'return function ' +
            methodName +
            ' (context) { return __proxy.apply(this, arguments) };'
        )(proxyWithContext)
      }
    }
  })
}

/**
 * @method addEvents
 * @param {String} model model name
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add events to a component.
 * The call to these methods will invoke the workflow in order to check that inpouts are compliant with the model.
 */
function addEvents(model, Class, classId) {
  let events = getEvents(model)
  events.forEach(function event(methodName) {
    let paramsName = getParamNames(classId, methodName)
    let params = paramsName.join(', ')

    let proxy = function proxy() {
      let systems = []
      let systemId = 'e89c617b6b15d24'
      let data = []
      let i = 0
      let length = -1
      let message = {}

      if (classId === '_Channel') {
        systems = $db.collections._System.find({
          master: true,
        })
        if (systems.length) {
          systemId = systems[0][$mson.ID]
        }

        message.from = systemId
        length = arguments.length
        for (i = 0; i < length; i++) {
          data.push(arguments[i])
        }
        message.data = data
        message.event = methodName

        $db.collections._Message.insert(message)

        $workflow.process({
          component: this.id(),
          state: 'send',
          data: [
            {
              event: message.event,
              from: message.from,
              data: message.data,
            },
          ],
        })
      } else {
        $workflow.process({
          component: this.id(),
          state: methodName,
          data: arguments,
        })
      }
    }
    if (params) {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' +
          methodName +
          ' (' +
          params +
          ') { return __proxy.apply(this, arguments) };'
      )(proxy)
    } else {
      Class.prototype[methodName] = new Function(
        '__proxy',
        'return function ' + methodName + ' () { return __proxy.apply(this) };'
      )(proxy)
    }
  })
}

/**
 * @method addOn
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a on method to a component to add behaviors to the component
 */
function addOn(Class, classId) {
  let proxy = function proxy(state, action, useCoreAPI, isCore) {
    let behaviorId = ''
    let currentState = ''
    let context = null

    // case of context
    if (
      useCoreAPI &&
      useCoreAPI.constructor &&
      useCoreAPI.constructor.name !== 'Boolean'
    ) {
      context = useCoreAPI
      useCoreAPI = false
      isCore = true
    }

    if (
      $workflow.checkInput({
        component: this,
        methodName: 'on',
        args: arguments,
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db.collections._Behavior.find({
            component: this.id(),
            state: state,
          }).length >= 1
        ) {
          $log.behaviorNotUnique(classId, state)
        } else {
          if ($workflow.checkInputNumbers(classId, state, action)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              action,
              useCoreAPI,
              isCore,
              context
            )

            currentState = $state.get(this.id())
            if (currentState && currentState.state === state) {
              $workflow.process({
                id: behaviorId,
                data: currentState.value,
              })
            }
          } else {
            $log.invalidParamNumberMethodOn(
              this.id(),
              this.constructor.name,
              state
            )
          }
        }
      } else {
        $log.invalidStateOn(classId, state)
      }
    }
    return behaviorId
  }
  Class.prototype.on = new Function(
    '__proxy',
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method addOnClass
 * @param {Function} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a on method to a class component to add behaviors to the class
 */
function addOnClass(Class, classId) {
  let proxy = function proxy(state, action, useCoreAPI, isCore) {
    let behaviorId = ''
    let currentState = ''
    let context = null

    // case of context
    if (
      useCoreAPI &&
      useCoreAPI.constructor &&
      useCoreAPI.constructor.name !== 'Boolean'
    ) {
      context = useCoreAPI
      useCoreAPI = false
      isCore = true
    }
    if (
      $workflow.checkInput({
        component: this,
        methodName: 'on',
        args: arguments,
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        if (
          !$metamodel.isEvent(state, classId) &&
          !$metamodel.isProperty(state, classId) &&
          !$metamodel.isLink(state, classId) &&
          !$metamodel.isCollection(state, classId) &&
          $db.collections._Behavior.find({
            component: this.id(),
            state: state,
          }).length >= 1
        ) {
          $log.behaviorNotUnique(classId, state)
        } else {
          if ($workflow.checkInputNumbers(classId, state, action)) {
            behaviorId = $behavior.add(
              this.id(),
              state,
              action,
              useCoreAPI,
              isCore,
              context
            )

            currentState = $state.get(this.id())
            if (currentState && currentState.state === state) {
              $workflow.process({
                id: behaviorId,
                data: currentState.value,
              })
            }
          } else {
            $log.invalidParamNumberMethodOn(
              this.id(),
              this.constructor.name,
              state
            )
          }
        }
      } else {
        $log.invalidStateOn(classId, state)
      }
    }
    return behaviorId
  }
  Class.on = new Function(
    '__proxy',
    'return function on (state, action, useCoreAPI, isCore) { return __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method addOffClass
 * @param {Object} Class Class
 * @param {String} classId name of the class
 * @private
 * @description Add a off method to a class component to remove behaviors from the class
 */
function addOffClass(Class, classId) {
  let proxy = function proxy(state, behaviorId) {
    if (
      $workflow.checkInput({
        component: this,
        methodName: 'off',
        args: arguments,
      })
    ) {
      if ($metamodel.isValidState(state, classId)) {
        $behavior.remove({
          behaviorId: behaviorId,
          componentId: classId,
          state: state,
        })
      } else {
        $log.invalidStateOff(classId, state)
      }
    }
  }
  Class.off = new Function(
    '__proxy',
    'return function off (state, behaviorId) { return __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method addDestroyClass
 * @param {Object} Class Class
 * @private
 * @description Add a destroy method to a class component to detroy the class and all the components of the same class
 */
function addDestroyClass(Class) {
  let proxy = function proxy() {
    let id = this.id()
    let result = []
    let i = 0
    let length = 0

    // if not virtual component
    if ($db.collections[id]) {
      result = $db.collections[id].remove()
    }

    delete store[id]

    // remove behaviors
    $behavior.remove({
      componentId: id,
    })

    length = result.length
    for (i = 0; i < length; i++) {
      // remove behaviors
      $behavior.remove({
        componentId: result[i],
      })
    }

    $workflow.process({
      component: id,
      state: 'destroy',
    })
  }
  Class.destroy = new Function(
    '__proxy',
    'return function destroy () { return __proxy.apply(this) };'
  )(proxy)
}

/**
 * @method addRequireClass
 * @param {Object} Class Class
 * @private
 * @description Require a component
 */
function addRequireClass(Class) {
  let proxy = function proxy(id) {
    return get(id)
  }
  Class.require = new Function(
    '__proxy',
    'return function require (id) { return __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method addInitClass
 * @param {Object} Class Class
 * @private
 * @description Init a class
 */
function addInitClass(Class) {
  let proxy = function proxy() {}
  Class.init = new Function(
    '__proxy',
    'return function init (conf) { return __proxy.apply(this, arguments) };'
  )(proxy)
}

/**
 * @method factory
 * @param {JSON} config configuration of the component
 * @returns {Component} the created component
 * @private
 * @description Create a component from its configuration
 */
function factory(config) {
  config = config || {}

  let Class = {}
  let classId = ''

  if (typeof config.model === 'undefined') {
    classId = $helper.generateId()
  } else {
    classId = config.model
  }

  Class = createClass(classId)

  store[classId] = Class

  addIdClass(Class, classId)

  addProperties(config.model, Class, classId)
  addMethods(config.model, Class, classId)
  addEvents(config.model, Class, classId)

  // add default properties/methods only if the component
  // inherit from _Component
  if ($metamodel.inheritFrom(classId, '_Component')) {
    addOn(Class, classId)

    addOnClass(Class, classId)
    addOffClass(Class, classId)
    addRequireClass(Class)
    addInitClass(Class)
    addDestroyClass(Class)
  }

  Object.freeze(Class)

  return Class
}

/* Public methods */

/**
 * @method get
 * @param {String} id of the component
 * @returns {Component} component
 * @description Get a component by its id
 */
function get(id) {
  return store[id]
}

/**
 * @method create
 * @param {Object} config <br>
 * {String} model model name <br>
 * @returns {Component}
 * @description Create a component from its configuration
 */
function create(config) {
  return factory(config)
}

/**
 * @method destroy
 * @param {String} id id of the component to destroy
 * @description Destroy a component from its id
 */
function destroy(id) {
  let component = store[id]
  let classId = ''

  if (component) {
    delete store[id]
    classId = component.constructor.name
    $db.collections[classId].remove({
      _id: id,
    })

    // remove behaviors
    $behavior.remove({
      componentId: id,
    })

    // case of Behavior
    if (classId === '_Behavior') {
      $behavior.removeFromMemory(id)
    }
  }
}

/**
 * @method removeFromMemory
 * @param {String} id id of the component
 * @description Remove a component with its id from the memory
 */
function removeFromMemory(id) {
  delete store[id]
}

/**
 * @method clear
 * @description Remove all the components store in the memory
 */
function clear() {
  store = {}
}

export default {
  get,
  create,
  destroy,
  removeFromMemory,
  clear,
}
