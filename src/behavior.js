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
 * @module behavior
 * @requires db
 * @requires helper
 * @requires mson
 * @description This module manages the behaviors of all components.
 * A behavior is a mecanism that allow users to add actions that will be executed
 * when a specific state of a component will change.
 */

import $db from './db.js'
import $helper from './helper.js'
import $mson from './mson.js'

/* Private properties */

let store = {}

/* Private methods */

/**
 * @method createFunction
 * @param {String} name default name of the function
 * @param {String} func a stringified function
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the function (default false)
 * @returns {Function} the created function
 * @private
 * @description Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters
 */
function createFunction(name, func, useCoreAPI) {
  let beginBody = -1
  let funcParams = ''
  let params = []
  let paramsClean = []
  let funcBody = ''
  let header = ''
  let action = null
  let isArrowFunction = true
  let isAsync = false
  let isOneLine = false
  let functionName = name

  if (functionName.indexOf('.') !== -1) {
    functionName = name.split('.')[name.split('.').length - 1]
  }

  if (func.trim().indexOf('async') === 0) {
    isAsync = true
    func = func.replace('async', '')
  }

  if (func.trim().indexOf('function') === 0) {
    isArrowFunction = false
  }

  if (isArrowFunction) {
    beginBody = func.indexOf('=>')

    header = func.substring(0, beginBody)
    header = header.replace('=>', '')

    if (header.indexOf('(') !== -1) {
      funcParams = header.split('(')[1].replace(')', '').trim()
    } else {
      funcParams = header.trim()
    }

    params = funcParams.split(',')
    params.forEach(function (param) {
      paramsClean.push(param.trim())
    })

    funcBody = func.substring(beginBody + 2, func.length).trim()

    if (funcBody.indexOf('{') === 0) {
      funcBody = funcBody.substring(1, funcBody.lastIndexOf('}')).trim()
    }

    if (funcBody.indexOf('\n') === -1) {
      isOneLine = true
    }

    if (isArrowFunction && isOneLine && funcBody.indexOf('return ') === -1) {
      funcBody = 'return ' + funcBody
    }
  } else {
    beginBody = func.indexOf('{')
    header = func.substring(0, beginBody)

    funcParams = header.split('(')[1].replace(')', '').trim()

    params = funcParams.split(',')
    params.forEach(function (param) {
      paramsClean.push(param.trim())
    })

    funcBody = func.substring(beginBody + 1)
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim()
  }

  // fix for Babel
  funcBody = funcBody.replace(/_this/g, 'this')

  if (paramsClean[0] === '') {
    paramsClean = []
  }

  if (useCoreAPI) {
    paramsClean.push('$component')
    paramsClean.push('$db')
    paramsClean.push('$metamodel')
    paramsClean.push('$workflow')
    paramsClean.push('$behavior')
    paramsClean.push('$state')
    paramsClean.push('$log')
    paramsClean.push('$helper')
    paramsClean.push('$history')
  }

  if (isAsync) {
    if (paramsClean[0] !== '') {
      action = new Function(
        '__action',
        'return function ' +
          functionName +
          ' (' +
          paramsClean.join(', ') +
          ") { const AsyncFunction = async function () {}.constructor; return new AsyncFunction('" +
          paramsClean.join("', '") +
          "', __action).apply(this, arguments) };"
      )(funcBody)
    } else {
      action = new Function(
        '__action',
        'return function ' +
          functionName +
          ' () { const AsyncFunction = async function () {}.constructor; return new AsyncFunction(__action).apply(this, arguments) };'
      )(funcBody)
    }
  } else {
    if (paramsClean[0] !== '') {
      action = new Function(
        '__action',
        'return function ' +
          functionName +
          ' (' +
          paramsClean.join(', ') +
          ") { return new Function('" +
          paramsClean.join("', '") +
          "', __action).apply(this, arguments) };"
      )(funcBody)
    } else {
      action = new Function(
        '__action',
        'return function ' +
          functionName +
          ' () { return new Function(__action).apply(this, arguments) };'
      )(funcBody)
    }
  }

  return action
}

/* Public methods */

/**
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed
 * @param {Object} action the action to execute when the component will have a specific state
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the action (default false)
 * @param {Object} context new context of the behavior
 * @returns {String} id of the behavior created in System Runtime database
 * @description Add a behavior that will be stored in System Runtime database
 */
function add(id, state, action, useCoreAPI, core, context) {
  let behaviorId = $helper.generateId()
  let strAction = action.toString()

  if (typeof core === 'undefined') {
    core = false
  }
  if (typeof useCoreAPI === 'undefined') {
    useCoreAPI = false
  }

  action = createFunction(state, strAction, useCoreAPI)

  store[behaviorId] = action

  $db.collections._Behavior.insert({
    _id: behaviorId,
    component: id,
    state: state,
    action: strAction,
    useCoreAPI: useCoreAPI,
    core: core,
    context: context,
  })

  return behaviorId
}

/**
 * @method remove
 * @param {Object} params
 * {String} componentId id of the component
 * {String} state state of the component
 * {String} behaviorId id of the behavior (optional)
 * @description Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component
 */
function remove(params) {
  let result = []

  params = params || {}
  params.behaviorId = params.behaviorId || ''
  params.componentId = params.componentId || ''
  params.state = params.state || ''

  if (params.componentId) {
    if (params.behaviorId) {
      $db.collections._Behavior.remove({
        _id: params.behaviorId,
        component: params.componentId,
        state: params.state,
      })
      delete store[params.behaviorId]
    } else {
      if (params.state) {
        result = $db.collections._Behavior.remove({
          component: params.componentId,
          state: params.state,
        })
      } else {
        result = $db.collections._Behavior.remove({
          component: params.componentId,
        })
      }
      result.forEach(function (id) {
        delete store[id]
      })
    }
  }
}

/**
 * @method removeFromMemory
 * @param {String} id id of the component
 * @description Remove a behavior with its id from the memory
 */
function removeFromMemory(id) {
  delete store[id]
}

/**
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @returns {Array} all the actions that have to be executed for a specific component and state
 * @description Get all the actions of a behavior for a component
 */
function getActions(id, state) {
  let result = []
  let dbResult = []
  let action = null

  dbResult = $db.collections._Behavior.find({
    component: id,
    state: state,
  })

  dbResult.forEach(function (behavior) {
    action = store[behavior[$mson.ID]]
    if (typeof action === 'undefined') {
      action = createFunction(
        behavior.state,
        behavior.action,
        behavior.useCoreAPI
      )
      store[behavior[$mson.ID]] = action
    }
    result.push({
      useCoreAPI: behavior.useCoreAPI,
      context: behavior.context,
      action: action,
    })
  })

  return result
}

/**
 * @method clear
 * @description Remove all the behaviors stored in memory
 */
function clear() {
  store = {}
}

/**
 * @method get
 * @param {String} id id of the behavior
 * @returns {Behavior} the behavior
 * @description Get a behavior by its id
 */
function get(id) {
  return store[id]
}

export default {
  add,
  remove,
  removeFromMemory,
  getActions,
  clear,
  get,
}
