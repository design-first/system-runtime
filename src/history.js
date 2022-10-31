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
 * @module history
 * @requires db
 * @requires log
 * @description This module manages the history of all components lifecycle
 */

import $db from './db.js'
import $log from './log.js'

/* Private property */

let stack = []
let cursorIndex = -1
let historizationEnabled = false

/* Public methods */

/**
 * @method isEnabled
 * @returns {Boolean} true if the history is enabled
 * @description Is historization enabled
 */
function isEnabled() {
  return historizationEnabled
}

/**
 * @method start
 * @description start historization
 */
function start() {
  historizationEnabled = true
}

/**
 * @method stop
 * @description stop historization
 */
function stop() {
  historizationEnabled = false
}

/**
 * @method pushState
 * @param {Object} state new state
 * @description Add a state in the history
 */
function pushState(state) {
  stack.push(state)
}

/**
 * @method state
 * @returns {Object} current state
 * @description get Current state
 */
function state() {
  return state[state.length - 1]
}

/**
 * @method back
 * @returns {Integer} current cursor index
 * @description move backward into the history of state
 */
function back() {
  let state = stack[cursorIndex]
  let update = {}
  if (state) {
    switch (state.action) {
      case 'insert':
        $db.collections[state.collection].remove({
          _id: state.id,
        })
        $log.historyDocumentRemoved(state.id, state.collection)
        break
      case 'remove':
        $db.collections[state.collection].insert(JSON.parse(state.oldValue))
        $log.historyDocumentInserted(state.id, state.collection, state.oldValue)
        break
      case 'update':
        update[state.field] = JSON.parse(state.oldValue)

        $db.collections[state.collection].update(
          {
            _id: state.id,
          },
          update
        )
        $log.historyDocumentUpdated(
          state.id,
          state.collection,
          state.field,
          state.oldValue
        )
        break
      default:
        break
    }
    cursorIndex = cursorIndex - 1
  }

  return cursorIndex
}

/**
 * @method forward
 * @returns {Integer} current cursor index
 * @description move forward into the history of state
 */
function forward() {
  cursorIndex = cursorIndex + 1
  let state = stack[cursorIndex]
  let update = {}
  if (state) {
    switch (state.action) {
      case 'insert':
        $db.collections[state.collection].insert(JSON.parse(state.value))
        $log.historyDocumentInserted(state.id, state.collection, state.value)
        break
      case 'remove':
        $db.collections[state.collection].remove({
          _id: state.id,
        })
        $log.historyDocumentRemoved(state.id, state.collection)
        break
      case 'update':
        update[state.field] = JSON.parse(state.value)

        $db.collections[state.collection].update(
          {
            _id: state.id,
          },
          update
        )
        $log.historyDocumentUpdated(
          state.id,
          state.collection,
          state.field,
          state.value
        )
        break
      default:
        break
    }
  }

  return cursorIndex
}

/**
 * @method get
 * @param {}
 * @description Start back/forward from state
 */
function get(index) {
  let result = null
  if (index < 0) {
    result = stack[stack.length + index]
  } else {
    result = stack[index]
  }
  return result
}

/**
 * @method from
 * @param {Number} index index of the stack
 * @description Start back/forward from state
 */
function from(index) {
  if (index === -1) {
    cursorIndex = stack.length - 1
  } else {
    cursorIndex = index
  }
}

/**
 * @method dump
 * @returns {String} a dump of the history
 * @description Dump all the history
 */
function dump() {
  return JSON.stringify({
    stack: stack,
  })
}

/**
 * @method load
 * @param {Object|String} dump dump of an history to load
 * @returns {Boolean} true if the dump was loaded with no error
 * @description Load a dump of an history
 */
function load(dump) {
  let noError = true

  try {
    let newStack = {}
    let update = {}

    if (typeof dump === 'string') {
      newStack = JSON.parse(dump).stack
    } else {
      newStack = dump.stack
    }

    newStack.forEach(function (state) {
      if (state) {
        switch (state.action) {
          case 'insert':
            if ($db.collections[state.collection]) {
              $db.collections[state.collection].insert(JSON.parse(state.value))
              $log.historyDocumentInserted(
                state.id,
                state.collection,
                state.value
              )
            } else {
              noError = false
            }
            break
          case 'remove':
            if ($db.collections[state.collection]) {
              $db.collections[state.collection].remove({
                _id: state.id,
              })
              $log.historyDocumentRemoved(state.id, state.collection)
            } else {
              noError = false
            }
            break
          case 'update':
            if ($db.collections[state.collection]) {
              update[state.field] = JSON.parse(state.value)

              $db.collections[state.collection].update(
                {
                  _id: state.id,
                },
                update
              )

              $log.historyDocumentUpdated(
                state.id,
                state.collection,
                state.field,
                state.value
              )
            } else {
              noError = false
            }
            break
          default:
            break
        }
      }
    })
  } catch (e) {
    noError = false
  }

  return noError
}

/**
 * @method clear
 * @description Remove all the states from the memory
 */
function clear() {
  stack = []
}

export default {
  isEnabled,
  start,
  stop,
  pushState,
  state,
  back,
  forward,
  get,
  from,
  dump,
  load,
  clear,
}
