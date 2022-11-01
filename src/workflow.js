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
 * @module workflow
 * @requires metamodel
 * @requires component
 * @requires behavior
 * @requires state
 * @requires helper
 * @requires log
 * @requires db
 * @description This module manages the workflow of System Runtime.
 * It behaves like a workflow engine.
 * It checks if the change of status of a component is valid to be executed. By valid, it means that:
 * - the state is valid for the component,
 * - the input (i.e. parameters) of all actions for the state are compliants with the model and
 * - the output of all actions are compliants with the model.
 *
 * If an error occurs, the workflow will call the error state of the component, the current system and the runtime.
 *
 */

import $metamodel from './metamodel.js'
import $component from './component.js'
import $behavior from './behavior.js'
import $state from './state.js'
import $helper from './helper.js'
import $log from './log.js'
import $db from './db.js'
import $history from './history.js'

/* Private methods */

/**
 * @class RuntimeError
 * @constructor
 * @param {String} message message of the error
 * @description The RuntimeError class
 */
function RuntimeError(message) {
  this.message = message
  this.name = 'RuntimeError'
}
RuntimeError.prototype = new Error()
RuntimeError.prototype.constructor = RuntimeError

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
 * @method getParamNames
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} the names of all parameters of the method for the class
 * @private
 * @description Get all the names of the parameter of a method
 */
function getParamNames(id, methodName) {
  let method = null
  let params = []
  let result = []
  let length = 0
  let i = 0

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName]
  } else {
    $log.unknownModel(id)
  }

  if (method) {
    params = method.params
    if (params) {
      length = params.length
      for (i = 0; i < length; i++) {
        result.push(params[i].name)
      }
    }
  } else {
    if (!isModelPath(methodName)) {
      $log.unknownMethod(id, methodName)
    }
  }
  return result
}

/**
 * @method getParamNumber
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} number of parameters min and max for the method
 * @private
 * @description Get the number of parameters of a method
 */
function getParamNumber(id, methodName) {
  let method = null
  let params = []
  let result = []
  let length = 0
  let i = 0
  let min = 0
  let max = 0

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName]
  } else {
    $log.unknownModel(id)
  }

  if (method) {
    params = method.params
    if (params) {
      length = params.length
      for (i = 0; i < length; i++) {
        if (
          typeof params[i].mandatory === 'undefined' ||
          params[i].mandatory === true
        ) {
          min = min + 1
        }
        max = max + 1
      }
    }
    result.push(min)
    result.push(max)
  } else {
    if (methodName.indexOf('[') === -1 && methodName.indexOf('.') === -1) {
      $log.unknownMethod(id, methodName)
    }
  }
  return result
}

/**
 * @method setDefaultValue
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @param {Array} args arguments
 * @returns {Array} arguments with default values
 * @private
 * @description Set the default value of the non mandatory parameters of a method
 */
function setDefaultValue(id, methodName, args) {
  let method = null
  let params = []
  let result = []
  let length = 0
  let i = 0

  method = $metamodel.getModel(id)[methodName]
  if (method) {
    params = method.params
    if (params) {
      length = params.length
      for (i = 0; i < length; i++) {
        if (params[i].mandatory === false && typeof args[i] === 'undefined') {
          result.push(params[i].default)
        } else {
          result.push(args[i])
        }
      }
    }
  } else {
    if (methodName.indexOf('[') === -1) {
      $log.unknownMethod(id, methodName)
    } else {
      result = args
    }
  }
  return result
}

/**
 * @method getReturnType
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {String} the type returned by the method
 * @private
 * @description Get the type returned by a method
 */
function getReturnType(id, methodName) {
  let resultType = null
  let result = null

  if ($metamodel.getModel(id)) {
    resultType = $metamodel.getModel(id)[methodName].result
  } else {
    $log.unknownModel(id)
  }

  if (resultType) {
    result = resultType
  }
  return result
}

/**
 * @method getParamTypes
 * @param {String} id id of the class
 * @param {String} methodName name of the method
 * @returns {Array} the types of the parameters of a method
 * @private
 * @description Get all the type of the parameters of a method
 */
function getParamTypes(id, methodName) {
  let method = null
  let params = []
  let result = []
  let length = 0
  let i = 0

  if ($metamodel.getModel(id)) {
    method = $metamodel.getModel(id)[methodName]
  } else {
    $log.unknownModel(id)
  }

  if (method) {
    params = method.params
    if (params) {
      length = params.length
      for (i = 0; i < length; i++) {
        result.push(params[i].type)
      }
    }
  } else {
    if (methodName.indexOf('[') === -1 && methodName.indexOf('.') === -1) {
      $log.unknownMethod(id, methodName)
    }
  }
  return result
}

/**
 * @method getActions
 * @param {Object} component a System Runtime component
 * @param {String} name name of the state
 * @param {Boolean} isEvent true if the state is an event
 * @returns {Array} list of the actions
 * @private
 * @description Get the actions of the specified state
 */
function getActions(component, name, isEvent) {
  let action = $behavior.getActions(component.id(), name)
  let parents = []
  let length = 0
  let i = 0
  let parent = null

  if (!action.length || isEvent) {
    if (component.constructor.name !== 'Function') {
      action = action.concat(
        getActions($component.get(component.constructor.name), name, isEvent)
      )
    } else {
      parents = $metamodel.getParents(component.name)
      length = parents.length
      for (i = 0; i < length; i++) {
        parent = $component.get(parents[i])
        if (parent) {
          action = action.concat(getActions(parent, name, isEvent))
        } else {
          $log.unknownComponent(parents[i], component.name)
        }
        if (action.length) {
          break
        }
      }
    }
  }

  if (action.length) {
    action.reverse()
  }

  return action
}

/**
 * @method action
 * @param {Component} component
 * @param {String} state name of the state
 * @param {Object} action action
 * @param {Array} params parameters of the action
 * @param {Boolean} isEvent is the action a callback of an event
 * @returns {Boolean} result of the action
 * @description Execute an action and make some Dependency Injection if it is a core action
 */
function action(component, state, action, params, isEvent) {
  let result = null
  let injectedParams = []
  let componentClassName = ''
  let i = 0
  let length = 0

  if (component.constructor.name === 'Function') {
    componentClassName = component.name
  } else {
    componentClassName = component.constructor.name
  }

  if (
    !$metamodel.isProperty(state, componentClassName) &&
    !$metamodel.isLink(state, componentClassName) &&
    !$metamodel.isCollection(state, componentClassName)
  ) {
    params = setDefaultValue(componentClassName, state, params)
  }

  try {
    length = params.length
    for (i = 0; i < length; i++) {
      injectedParams.push(params[i])
    }

    if (action.useCoreAPI) {
      injectedParams.push($component)
      injectedParams.push($db)
      injectedParams.push($metamodel)
      injectedParams.push({
        checkInputNumbers,
        checkInput,
        checkOutput,
        process,
      })
      injectedParams.push($behavior)
      injectedParams.push($state)
      injectedParams.push($log)
      injectedParams.push($helper)
      injectedParams.push($history)
    }

    if (isEvent) {
      if (action.context) {
        setTimeout(
          action.action.bind.apply(
            action.action,
            [action.context].concat(injectedParams)
          ),
          0
        )
      } else {
        setTimeout(
          action.action.bind.apply(
            action.action,
            [component].concat(injectedParams)
          ),
          0
        )
      }
    } else {
      if (action.context) {
        result = action.action.apply(action.context, injectedParams)
      } else {
        result = action.action.apply(component, injectedParams)
      }
    }
  } catch (e) {
    if (e instanceof RuntimeError) {
      throw e
    } else {
      if (component && component.error) {
        component.error({
          message:
            "error when running the behavior '" +
            state +
            "' on component '" +
            component.id() +
            "'",
          stack: e,
        })
      }
      if ($helper.getRuntime()) {
        // do not invoke the error action of the system twice
        if (
          component &&
          $helper.getRuntime().system() &&
          $helper.getRuntime().system().id &&
          component.id() !== $helper.getRuntime().system().id()
        ) {
          $helper
            .getRuntime()
            .system()
            .error({
              message:
                "error when running the behavior '" +
                state +
                "' on component '" +
                component.id() +
                "'",
              stack: e,
            })
        }

        $helper.getRuntime().error({
          message:
            "error when running the behavior '" +
            state +
            "' on component '" +
            component.id() +
            "'",
          stack: e,
        })
      }

      $log.actionInvokeError(
        state,
        component.id(),
        component.constructor.name,
        e.message
      )
    }
  }

  return result
}

/* Public methods */

/**
 * @method checkInputNumbers
 * @param {String} className name the class
 * @param {String} state state on which the action applied
 * @param {Function} action action
 * @returns {Boolean} true if the action is the valid number of parameters
 * @description Check if an action has the valid number of parameter
 */
function checkInputNumbers(className, state, action) {
  let func = ''
  let beginBody = -1
  let header = ''
  let funcParams = ''
  let params = []
  let paramNumber = 0
  let modelNumberParam = []
  let isProperty = false
  let isLink = false
  let isCollection = false
  let result = false
  let isArrowFunction = true

  // check number of parameters of the action
  func = action.toString()

  if (func.trim().indexOf('async') === 0) {
    func = func.replace('async', '')
  }

  if (func.trim().indexOf('function') === 0) {
    isArrowFunction = false
  }

  beginBody = isArrowFunction ? func.indexOf('=>') : func.indexOf('{')
  header = func.substring(0, beginBody)
  header = header.replace('=>', '')

  if (header.indexOf('(') !== -1) {
    funcParams = header.split('(')[1].replace(')', '').trim()
  } else {
    funcParams = header.trim()
  }

  params = funcParams.split(',')
  if (params[0] === '') {
    params = []
  }
  paramNumber = params.length

  // get the number min and max of valid parameters
  isProperty = $metamodel.isProperty(state, className)
  isLink = $metamodel.isLink(state, className)
  isCollection = $metamodel.isCollection(state, className)

  switch (true) {
    case isCollection:
      modelNumberParam = [2, 2]
      break
    case isProperty:
      if ($metamodel.getModelPathType(className, state) === 'array') {
        modelNumberParam = [2, 2]
      } else {
        modelNumberParam = [1, 1]
      }
      break
    case isLink:
      modelNumberParam = [1, 1]
      break
    default:
      modelNumberParam = getParamNumber(className, state)
      break
  }

  // compare
  if (
    modelNumberParam[0] <= paramNumber &&
    paramNumber <= modelNumberParam[1]
  ) {
    result = true
  }

  return result
}

/**
 * @method checkInput
 * @param {Object} params
 * @returns {Boolean} true if condition on input are compliant with the model
 * @description Check if conditions on input are compliant with the model before calling the action
 */
function checkInput(params) {
  params = params || {}

  let component = params.component || null
  let methodName = params.methodName || ''
  let args = params.args || ''
  let paramsName = []
  let paramsType = []
  let paramsNumber = []
  let componentClassName = ''
  let length = args.length
  let i = 0
  let param = null
  let result = true
  let isProperty = false
  let isLink = false
  let isCollection = false

  if (component.constructor.name === 'Function') {
    componentClassName = component.name
  } else {
    componentClassName = component.constructor.name
  }

  isProperty = $metamodel.isProperty(methodName, componentClassName)
  isLink = $metamodel.isLink(methodName, componentClassName)
  isCollection = $metamodel.isCollection(methodName, componentClassName)
  paramsName = getParamNames(componentClassName, methodName)

  switch (true) {
    case isCollection && methodName.indexOf('.') === -1:
      if (args && args[1] && args[1] === 'reset') {
        paramsType = [
          [$metamodel.getModel(componentClassName)[methodName].type[0]],
          'string',
        ]
      } else {
        paramsType = [
          $metamodel.getModel(componentClassName)[methodName].type[0],
          'string',
        ]
      }
      paramsNumber = [2, 2]
      break
    case isProperty && methodName.indexOf('.') === -1:
      if (isModelPath(methodName)) {
        paramsType = [
          $metamodel.getModelPathType(componentClassName, methodName),
        ]
      } else {
        paramsType = [$metamodel.getModel(componentClassName)[methodName].type]
      }
      if (
        $metamodel.getModelPathType(componentClassName, methodName) === 'array'
      ) {
        if (args && args[1] && args[1] === 'reset') {
          paramsType = [['any'], 'string']
        } else {
          paramsType = ['any', 'string']
        }
        paramsNumber = [2, 2]
      } else {
        paramsNumber = [1, 1]
      }
      break
    case isLink && methodName.indexOf('.') === -1:
      paramsType = [$metamodel.getModel(componentClassName)[methodName].type]
      paramsNumber = [1, 1]
      break
    default:
      paramsType = getParamTypes(componentClassName, methodName)
      paramsNumber = getParamNumber(componentClassName, methodName)
      break
  }

  // case of object
  if (typeof length === 'undefined') {
    length = 1
  }

  if (length < paramsNumber[0] || paramsNumber[1] < length) {
    result = false
    $log.invalidParamNumber(
      component.id(),
      component.constructor.name,
      methodName
    )
  }

  for (i = 0; i < length; i++) {
    param = args[i]
    if (typeof param === 'undefined') {
      if (i < paramsNumber[0]) {
        result = false
        $log.invalidParamNumber(
          component.id(),
          component.constructor.name,
          methodName
        )
      } else {
        continue
      }
    } else {
      if (!$metamodel.isValidType(param, paramsType[i])) {
        result = false
        $log.invalidParamType(
          component.id(),
          component.constructor.name,
          methodName,
          paramsName[i]
        )
      }
    }
  }

  return result
}

/**
 * @method checkOutput
 * @param {Object} params
 * @returns {Boolean} true if conditions on ouput are compliant with the metamodel
 * @description Check if conditions on output are compliant with the metamodel
 */
function checkOutput(params) {
  params = params || {}

  let component = params.component || null
  let methodName = params.methodName || ''
  let methodResult = null
  let componentClassName = ''
  let returnType = null
  let result = true

  if (typeof params.methodResult !== 'undefined') {
    methodResult = params.methodResult
  } else {
    methodResult = undefined
  }

  if (component.constructor.name === 'Function') {
    componentClassName = component.name
  } else {
    componentClassName = component.constructor.name
  }

  returnType = getReturnType(componentClassName, methodName)
  if (!$metamodel.isValidType(methodResult, returnType)) {
    result = false
    $log.invalidResultType(
      component.id(),
      component.constructor.name,
      methodName,
      typeof returnType === 'string' ? returnType : JSON.stringify(returnType),
      Array.isArray(methodResult) ? 'array' : typeof methodResult
    )
  }

  return result
}

/**
 * @method process
 * @param {Object} params params to process
 * {String} component id of the component
 * {String} state state of the component
 * {Array} data parameters to send to the action
 * @description Task processing.
 */
function process(params) {
  params = params || {}

  params.id = params.id || ''
  params.component = params.component || ''
  params.state = params.state || ''
  params.data = params.data || []
  params.context = params.context || null

  let component = null
  let currentState = ''
  let actions = []
  let result = undefined
  let i = 0
  let length = 0
  let componentClassName = false
  let isProperty = false
  let isLink = false
  let isCollection = false
  let isEvent = false
  let isMethod = false
  let behaviors = []
  let behavior = null
  let actionFromMemory = null

  currentState = $state.get(params.component)

  // check state
  if (currentState && currentState.state === 'destroy') {
    $log.invalidUseOfComponent(params.component)
  }

  // case of event processing
  if (params.id) {
    behaviors = $db.collections._Behavior.find({
      _id: params.id,
    })

    if (behaviors.length === 0) {
      behavior = behaviors[0]
      component = $component.get(behavior.component)

      if (component) {
        if (component.constructor.name === 'Function') {
          componentClassName = component.name
        } else {
          componentClassName = component.constructor.name
        }

        isProperty = $metamodel.isProperty(behavior.state, componentClassName)
        isLink = $metamodel.isLink(behavior.state, componentClassName)
        isCollection = $metamodel.isCollection(
          behavior.state,
          componentClassName
        )
        isEvent = $metamodel.isEvent(behavior.state, componentClassName)
        isMethod = $metamodel.isMethod(behavior.state, componentClassName)

        actionFromMemory = $behavior.get(params.id)
        if (actionFromMemory) {
          actions.push({
            useCoreAPI: behavior.useCoreAPI,
            context: behavior.context,
            action: actionFromMemory,
          })
        }
      }
    }
  } else {
    component = $component.get(params.component)

    if (component) {
      if (component.constructor.name === 'Function') {
        componentClassName = component.name
      } else {
        componentClassName = component.constructor.name
      }

      isProperty = $metamodel.isProperty(params.state, componentClassName)
      isLink = $metamodel.isLink(params.state, componentClassName)
      isCollection = $metamodel.isCollection(params.state, componentClassName)
      isEvent = $metamodel.isEvent(params.state, componentClassName)
      isMethod = $metamodel.isMethod(params.state, componentClassName)

      actions = getActions(component, params.state, isEvent)
    }
  }

  if (actions.length) {
    if (
      checkInput({
        component: component,
        methodName: params.state,
        args: params.data,
      })
    ) {
      if (isMethod) {
        result = action(
          params.context || component,
          params.state,
          actions[0],
          params.data,
          false
        )

        checkOutput({
          component: component,
          methodName: params.state,
          methodResult: result,
        })
      } else {
        length = actions.length
        for (i = 0; i < length; i++) {
          action(
            params.context || component,
            params.state,
            actions[i],
            params.data,
            true
          )
        }

        $state.set(component.id(), params.state, params.data)
      }
    }
  } else {
    if (component && (isEvent || isProperty || isLink || isCollection)) {
      $state.set(component.id(), params.state, params.data)
    }
  }

  return result
}

export default {
  checkInputNumbers,
  checkInput,
  checkOutput,
  process,
}
