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
 * @module helper
 * @requires db
 * @requires component
 * @requires mson
 * @description This module contains all the functions used by all the modules
 */

import $db from './db.js'
import $component from './component.js'
import $mson from './mson.js'

/* Private property */

let runtimeRef = null

/* Public method */

/**
 * @method isRuntime
 * @returns {Boolean} true if a System Runtime instance exist
 * @description Check if a System Runtime instance exists
 */
function isRuntime() {
  let result = false

  if ($db.collections._Runtime && $db.collections._Runtime.find().length) {
    result = true
  }

  return result
}

/**
 * @method getRuntime
 * @returns {_Runtime} System Runtime instance
 * @description Get the System Runtime instance
 */
function getRuntime() {
  let runtimeId = ''
  let search = $db.collections._Runtime.find()

  if (!runtimeRef && search[0]) {
    runtimeId = search[0][$mson.ID]
    runtimeRef = $component.get(runtimeId)
  }

  return runtimeRef
}

/**
 * @method isOnNode
 * @returns {Boolean} true if a System Runtime is running on node
 * @description Check if a System Runtime is running on node
 */
function isOnNode() {
  let result = false

  if (typeof window === 'undefined' && typeof global !== 'undefined') {
    result = true
  }

  return result
}

/**
 * @method generateId
 * @returns {String} a uuid
 * @description Generate a uuid
 */
function generateId() {
  // taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  function gen() {
    return 'xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0
      let v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  // force the uuid to start with a letter
  function getPrefix() {
    let validPrefix = 'abcdef'
    return validPrefix.charAt(Math.floor(Math.random() * validPrefix.length))
  }

  return getPrefix() + gen()
}

export default {
  isRuntime,
  getRuntime,
  isOnNode,
  generateId,
}
