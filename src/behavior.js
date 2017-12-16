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
 * This module manages the behaviors of all components. 
 * A behavior is a mecanism that allow users to add actions that will be executed 
 * when a specific state of a component will change.
 * 
 * @module behavior
 * @requires db
 * @requires helper
 * @requires channel
 * @class behavior
 * @static
 */

'use strict';

var $db = require('./db.js');
var $helper = require('./helper.js');


/* Private properties */


var store = {};


/* Private methods */


/*
 * Create a function from a string.
 * The created function:
 * - will be a named function,
 * - has the context of the component and
 * - can have some core modules injected as parameters.
 * @method createFunction
 * @param {String} name default name of the function 
 * @param {String} func a stringified function
 * @param {Boolean} core if true, the behavior will be treated as a System Runtime core behavior.
 * In that case, the behavior can not be exported in a system (default false)
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the function (default false)
 * @return {Function} the created function
 * @private
 */
function createFunction (name, func, core, useCoreAPI) {
  var beginBody = -1,
    funcParams = '',
    params = [],
    paramsClean = [],
    funcBody = '',
    header = '',
    action = null,
    isArrowFunction = true,
    isOneLine = false;

  if (func.trim().indexOf('function') === 0) {
    isArrowFunction = false;
  }

  if (isArrowFunction) {
    beginBody = func.indexOf('=>');

    header = func.substring(0, beginBody);
    header = header.replace('=>', '');

    if (header.indexOf('(') !== -1) {
      funcParams = header.split('(')[1].replace(')', '').trim();
    } else {
      funcParams = header.trim();
    }

    params = funcParams.split(',');
    params.forEach(function (param) {
      paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 2, func.length).trim();

    if (funcBody.indexOf('{') === 0) {
      funcBody = funcBody.substring(1, funcBody.lastIndexOf('}')).trim();
    }

    if (funcBody.indexOf('\n') === -1) {
      isOneLine = true;
    }

    if (isArrowFunction && isOneLine && funcBody.indexOf('return ') === -1) {
      funcBody = 'return ' + funcBody;
    }
  } else {
    beginBody = func.indexOf('{');
    header = func.substring(0, beginBody);

    funcParams = header.split('(')[1].replace(')', '').trim();

    params = funcParams.split(',');
    params.forEach(function (param) {
      paramsClean.push(param.trim());
    });

    funcBody = func.substring(beginBody + 1);
    funcBody = funcBody.substring(0, funcBody.lastIndexOf('}')).trim();
  }

  if (params[0] === '') {
    params = [];
  }
  if (useCoreAPI) {
    params.push('$component');
    params.push('$db');
    params.push('$metamodel');
    params.push('$workflow');
    params.push('$behavior');
    params.push('$state');
    params.push('$log');
  }

  if (params[0] !== '') {
    action = new Function('__body', "return function " + name + " (" + params.join(',') + ") { return new Function('" + params.join("','") + "', __body).apply(this, arguments) };")(funcBody);
  } else {
    action = new Function('__body', "return function " + name + " () { return new Function(__body).apply(this, arguments) };")(funcBody);
  }

  return action;
}


/* Public methods */


/*
 * Add a behavior that will be stored in System Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in System Runtime database
 */
function add (id, state, action, useCoreAPI, core) {
  var behaviorId = $helper.generateId(),
    strAction = action.toString();

  if (typeof core === 'undefined') {
    core = false;
  }
  if (typeof useCoreAPI === 'undefined') {
    useCoreAPI = false;
  }

  action = createFunction(state, strAction, core, useCoreAPI);

  store[behaviorId] = action;

  $db._Behavior.insert({
    '_id': behaviorId,
    'component': id,
    'state': state,
    'action': strAction,
    'useCoreAPI': useCoreAPI,
    'core': core
  });

  return behaviorId;
}


/*
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
function remove (params) {
  var result = [];

  params = params || {};
  params.behaviorId = params.behaviorId || '';
  params.componentId = params.componentId || '';
  params.state = params.state || '';

  if (params.componentId) {
    if (params.behaviorId) {
      $db._Behavior.remove({
        '_id': params.behaviorId,
        'component': params.componentId,
        'state': params.state
      });
      delete store[params.behaviorId];
    } else {
      if (params.state) {
        result = $db._Behavior.remove({
          'component': params.componentId,
          'state': params.state
        });
      } else {
        result = $db._Behavior.remove({
          'component': params.componentId
        });
      }
      result.forEach(function (id) {
        delete store[id];
      });
    }
  }
}


/*
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
function removeFromMemory (id) {
  delete store[id];
}


/*
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
function getActions (id, state) {
  var result = [],
    dbResult = [],
    action = null;

  dbResult = $db._Behavior.find({
    'component': id,
    'state': state
  });

  dbResult.forEach(function (behavior) {
    action = store[behavior._id];
    if (typeof action === 'undefined') {
      action = createFunction(behavior.state, behavior.action, behavior.core, behavior.useCoreAPI);
      store[behavior._id] = action;
    }
    result.push({
      'useCoreAPI': behavior.useCoreAPI,
      'action': action
    });
  });

  return result;
}


/*
 * Remove all the behaviors stored in memory.
 * @method clear
 */
function clear () {
  store = {};
}


/*
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
function get (id) {
  return store[id];
}


/* exports */


/**
 * This module manages the behaviors of all components. A behavior is a mecanism that allow users to add action that will be executed 
 * when a specific state of a component will change.
 * 
 * @module behavior
 * @requires db
 * @requires helper
 * @requires channel
 * @class behavior
 * @static
 */


/**
 * Add a behavior that will be stored in System Runtime database.
 * @method add
 * @param {String} id id of the component
 * @param {Object} state the state on which the action will be executed 
 * @param {Object} action the action to execute when the component will have a specific state 
 * @param {Boolean} useCoreAPI if true, System Runtime core modules will be injected as parameters of the action (default false)
 * @param {Boolean} core if true, behavior can not be exported
 * @return {String} id of the behavior created in System Runtime database
 */
exports.add = add;


/**
 * Get a behavior by its id.
 * @method get
 * @param {String} id id of the behavior
 * @return {Behavior} the behavior
 */
exports.get = get;


/**
 * Remove a behavior with its id or remove all the behaviors for a specific state
 * of the component.
 * @method remove
 * @param {Object} params <br>
 * {String} componentId id of the component <br>
 * {String} state state of the component <br>
 * {String} behaviorId id of the behavior (optional)) <br>
 */
exports.remove = remove;


/**
 * Get all the actions of a behavior for a component.
 * @method getActions
 * @param {String} id id of the component
 * @param {String} state name of the state
 * @return {Array} all the actions that have to be executed for a specific component and state
 */
exports.getActions = getActions;


/**
 * Remove all the behaviors stored in memory.
 * @method clear
 */
exports.clear = clear;


/**
 * Remove a behavior with its id from the memory.
 * @method removeFromMemory
 * @param {String} id id of the component
 */
exports.removeFromMemory = removeFromMemory;
