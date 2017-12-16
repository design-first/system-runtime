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
 * This module manages the states of all thecomponents.
 * 
 * @module state
 * @requires db
 * @class state
 * @static
 */

'use strict';

var $db = require('./db.js');


/* Private properties */


var store = {};


/* Public methods */


/**
 * Set the state of a component.
 * @method set
 * @param {String} id component id on which change the state
 * @param {String} state the new state of the component
 * @param {Object} value value of the state
 */
exports.set = function set (id, state, value) {
  store[id] = {
    'state': state,
    'value': value
  };
  $db.store._State[id] = {
    'state': state,
    'value': value
  };
};


/**
 * Get the state of a component.
 * @method get 
 * @param {String} id id of the component
 * @return {String} state of the component
 */
exports.get = function get (id) {
  return store[id];
};


/**
 * Remove all the states of the components from the memory.
 * @method clear
 */
exports.clear = function clear () {
  store = {};
};
