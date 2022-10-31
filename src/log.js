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
 * @module log
 * @requires metamodel
 * @requires db
 * @requires component
 * @requires mson
 * @description This module contains all the functions that write a log
 */

import $metamodel from './metamodel.js'
import $db from './db.js'
import $component from './component.js'
import $mson from './mson.js'

/* Private properties */

let currentLevel = 'warn' // eslint-disable-line no-unused-vars
let loggerRef = null
let fakeLoggerRef = {
  currentLevel: 'warn',
  level: function debug(levelName) {
    if (levelName) {
      this.currentLevel = levelName
    }
    return this.currentLevel
  },
  debug: function debug(message) {
    if (this.currentLevel === 'debug') {
      console.log('runtime: ' + message)
    }
  },
  info: function info(message) {
    if (this.currentLevel === 'info' || this.currentLevel === 'debug') {
      console.info('runtime: ' + message)
    }
  },
  warn: function warning(message) {
    if (
      this.currentLevel === 'info' ||
      this.currentLevel === 'warn' ||
      this.currentLevel === 'debug'
    ) {
      console.warn('runtime: ' + message)
    }
  },
  error: function error(message) {
    if (
      this.currentLevel === 'info' ||
      this.currentLevel === 'warn' ||
      this.currentLevel === 'debug' ||
      this.currentLevel === 'error'
    ) {
      console.error('runtime: ' + message)
    }
  },
}

/**
 * @method getLogger
 * @return {_Logger} _Logger instance
 * @private
 * @description Get the _Logger instance
 */
function getLogger() {
  let loggerId = ''
  let loggers = []
  let result = null

  if (!$metamodel.getModel('_Logger')) {
    result = fakeLoggerRef
  } else {
    loggers = $db.collections._Logger.find()
    if (loggers.length) {
      loggerId = loggers[0][$mson.ID]

      if ($component.get(loggerId)) {
        loggerRef = $component.get(loggerId)
        result = loggerRef
      } else {
        result = fakeLoggerRef
      }
    } else {
      result = fakeLoggerRef
    }
  }

  return result
}

/* Public methods */

/**
 * @method level
 * @param {String} levelName name of the level
 * @description Set the level of the log
 */
function level(levelName) {
  currentLevel = levelName
}

/**
 * @method unknownProperty
 * @param {String} propertyName the name of the property
 * @param {Object} schema the schema definition
 * @description A property of a schema is unknown
 */
function unknownProperty(propertyName, schema) {
  let message = ''

  if (schema[$mson.NAME]) {
    message =
      "unknown property '" +
      propertyName +
      "' for the definition of '" +
      schema[$mson.NAME] +
      "'"
  } else {
    message = "unknown property '" + propertyName + "' for a model"
  }

  getLogger().warn(message)
}

/**
 * @method invalidPropertyType
 * @param {String} propertyName name of the peropety
 * @param {String} type the type defined by the schema
 * @param {String} property the property
 * @description Invalid type for a property
 */
function invalidPropertyType(propertyName, type, property) {
  let realType =
    property && property.constructor
      ? property.constructor.name
      : typeof property
  getLogger().warn(
    "invalid value for property '" +
      propertyName +
      "': expected type '" +
      type +
      "' instead of type '" +
      realType +
      "'"
  )
}

/**
 * @method invalidEnumValue
 * @param {Object} value the value
 * @param {String} type the type defined by the schema
 * @description Invalid value for type enum
 */
function invalidEnumValue(value, type) {
  getLogger().warn(
    "'" + value + "' is an invalid value for the type enum '" + type + "'"
  )
}

/**
 * @method invalidClassName
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 * @description Invalid class name for a component
 */
function invalidClassName(componentId, type, constructorName) {
  getLogger().warn(
    "invalid component '" +
      componentId +
      "' for a collection: expected a component of class '" +
      type +
      "' instead of '" +
      constructorName +
      "'"
  )
}

/**
 * @method missingProperty
 * @param {String} propertyName name of the property
 * @description Missing a property
 */
function missingProperty(propertyName) {
  getLogger().warn("property '" + propertyName + "' is missing")
}

/**
 * @method missingImplementation
 * @param {String} name name of the missing schema
 * @description A class definition is missing
 */
function missingImplementation(name) {
  getLogger().warn("schema '" + name + "' is missing")
}

/**
 * @method invalidTypeImp
 * @param {String} property a property
 * @param {String} className a class name
 * @description Invalid type for a property of a class definition
 */
function invalidTypeImp(property, className) {
  getLogger().error(
    "the property '" + property + "' of " + className + ' model is invalid'
  )
}

/**
 * @method missingPropertyImp
 * @param {String} property a property
 * @param {String} className a class name
 * @description Missing a property for a class definition
 */
function missingPropertyImp(property, className) {
  getLogger().warn(
    "missing property '" + property + "' in the model '" + className + "'"
  )
}

/**
 * @method unknownPropertyImp
 * @param {String} property a property
 * @param {Object} schema a schema
 * @description Unkown property for a class definition
 */
function unknownPropertyImp(property, schema) {
  getLogger().error(
    "the model '" + schema + "' has an unknown property '" + property + "'"
  )
}

/**
 * @method invalidTypeDefinition
 * @param {String} name a type definition
 * @description  Try to add an invalid type
 */
function invalidTypeDefinition(name) {
  getLogger().warn("the type '" + name + "' is not valid")
}

/**
 * @method invalidPropertyName
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type type defined by the schema
 * @description Invalid property name
 */
function invalidPropertyName(id, className, propertyName, propertyValue, type) {
  let classInfo = ''
  let realType = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }

  if (typeof type === 'string') {
    realType =
      propertyValue && propertyValue.constructor
        ? propertyValue.constructor.name
        : typeof propertyValue

    getLogger().warn(
      "invalid value for property '" +
        propertyName +
        "' on component '" +
        id +
        "'" +
        classInfo +
        ": expected type '" +
        type +
        "' instead of type '" +
        realType +
        "'"
    )
  } else {
    realType = type && type.constructor ? type.constructor.name : typeof type

    getLogger().warn(
      "invalid value for property '" +
        propertyName +
        "' on component '" +
        classInfo +
        ": expected type 'string' instead of type '" +
        realType +
        "'"
    )
  }
}

/**
 * @method readOnlyProperty
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} propertyName name of the property
 * @description Trying to set a read-only property
 */
function readOnlyProperty(id, className, propertyName) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }
  getLogger().warn(
    "can not set read-only property '" +
      propertyName +
      "' on component '" +
      id +
      "'" +
      classInfo
  )
}

/**
 * @method invalidDocumentOnDbInsert
 * @param {String} doc a document
 * @param {String} collectionName the name of the collection
 * @description Invalid document on a System Runtime database insert operation
 */
function invalidDocumentOnDbInsert(doc, collectionName) {
  getLogger().warn(
    "invalid document '" +
      JSON.stringify(doc).replace(/,/g, ', ') +
      "' (" +
      collectionName +
      ' collection)'
  )
}

/**
 * @method invalidPropertyTypeOnDbUpdate
 * @param {String} collectionName the name of the collection
 * @param {String} id id of the component
 * @param {String} propertyName name of the property
 * @param {String} propertyValue value of the property
 * @param {String} type expected type defined by the schema
 * @description  Invalid property on a System Runtime database update operation
 */
function invalidPropertyTypeOnDbUpdate(
  collectionName,
  id,
  propertyName,
  propertyValue,
  type
) {
  getLogger().warn(
    "invalid type for the property '" +
      propertyName +
      "' of the document '" +
      id +
      "' (" +
      collectionName +
      " collection) with the value '" +
      JSON.stringify(propertyValue) +
      "': expected type '" +
      type +
      "'"
  )
}

/**
 * @method unknownPropertyOnDbUpdate
 * @param {String} collectionName the name of the collection
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 * @description Unkonw property on a System Runtime database update operation
 */
function unknownPropertyOnDbUpdate(propertyName, collectionName, id) {
  getLogger().warn(
    "unknown property '" +
      propertyName +
      "' for document '" +
      id +
      "' (" +
      collectionName +
      ' collection)'
  )
}

/**
 * @method unknownMethod
 * @param {String} classId id of the class
 * @param {String} methodName name of the method
 * @description Call an unknown method of a class
 */
function unknownMethod(classId, methodName) {
  getLogger().warn(
    "try to call an unknown action '" +
      methodName +
      "' for the class '" +
      classId +
      "'"
  )
}

/**
 * @method invalidCollectionName
 * @param {String} name name of the collection
 * @description Try to create an invalid DatabaseCollection
 */
function invalidCollectionName(name) {
  getLogger().warn(
    "invalid name for the collection '" +
      name +
      "': there is no schema '" +
      name +
      "'"
  )
}

/**
 * @method invalidResultType
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name ot the method
 * @param {String} expectedType expected type
 * @param {String} type current type
 * @description Invalid type result of a method
 */
function invalidResultType(id, className, methodName, expectedType, type) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }

  getLogger().warn(
    "invalid type for the result of action '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo +
      ": expected type '" +
      expectedType +
      "' instead of type '" +
      type +
      "'"
  )
}

/**
 * @method unknownComponent
 * @param {String} id id of the class
 * @param {String} componentId id of the component
 * @description Unknown class
 */
function unknownComponent(className, componentId) {
  getLogger().warn(
    "unkown class name '" + className + "' for component '" + componentId + "'"
  )
}

/**
 * @method invalidParamNumber
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @description invalid parameter number for a method
 */
function invalidParamNumber(id, className, methodName) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }

  getLogger().warn(
    "invalid number of parameters when calling the action '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo
  )
}

/**
 * @method invalidParamType
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @param {String} paramName name of the parameter
 * @description  Invalid type parameters for a method
 */
function invalidParamType(id, className, methodName, paramName) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }
  if (paramName !== undefined) {
    getLogger().warn(
      "invalid type for the parameter '" +
        paramName +
        "' when calling the action '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo
    )
  } else {
    getLogger().warn(
      "invalid type for a parameter when calling the action '" +
        methodName +
        "' on component '" +
        id +
        "'" +
        classInfo
    )
  }
}

/**
 * @method behaviorNotUnique
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description Add a more than one behavior to a state
 */
function behaviorNotUnique(id, stateName) {
  getLogger().warn(
    "try to add more than one action for the state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  )
}

/**
 * @method invalidStateOn
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description Can not add a behavior with an invalid state
 */
function invalidStateOn(id, stateName) {
  getLogger().warn(
    "try to add an action to an unkwown state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  )
}

/**
 * @method invalidStateOff
 * @param {String} id id of the class
 * @param {String} stateName name of the state
 * @description The call to a remove state of the behavior module is invalid
 */
function invalidStateOff(id, stateName) {
  getLogger().warn(
    "try to remove an action from an unkwown state '" +
      stateName +
      "' on class '" +
      id +
      "'"
  )
}

/**
 * @method masterSystemNotFound
 * @description The master system is not found
 */
function masterSystemNotFound() {
  getLogger().warn('can not export the database because no system was defined')
}

/**
 * @method invalidType
 * @param {String} name name of the type
 * @param {String} value value of the type
 * @param {String} typeName expected type defined by the schema
 * @description Invalid type
 */
function invalidType(name, value, typeName) {
  let realType =
    name && value.constructor ? value.constructor.name : typeof value

  getLogger().warn(
    "invalid value for property '" +
      name +
      "': expected type '" +
      typeName +
      "' instead of type '" +
      realType +
      "'"
  )
}

/**
 * @method invalidConfiguration
 * @param {Object} obj an object
 * @param {String} type expected type for the configuration
 * @description Invalid class name
 */
function invalidConfiguration(obj, type) {
  getLogger().warn(
    "invalid type for '" + JSON.stringify(obj) + "': expected '" + type + "'"
  )
}

/**
 * @method unknownType
 * @param {String} value value
 * @description Unknown type
 */
function unknownType(value) {
  getLogger().warn("unknown type for value '" + JSON.stringify(value) + "'")
}

/**
 * @method unknownPath
 * @param {String} path path
 * @param {String} path subpath
 * @description Unknown subpath in a path
 */
function unknownPath(path, subpath) {
  getLogger().warn(
    "the path '" + path + "' has an unkown subpath '" + subpath + "'"
  )
}

/**
 * @method canNotYetValidate
 * @param {String} id id of the component
 * @param {String} className name of the class
 * @description A component has not been alreay validated
 */
function canNotYetValidate(id, className) {
  getLogger().debug(
    "can not yet validate if the document '" +
      id +
      "' is compliant with " +
      className +
      ' model'
  )
}

/**
 * @method invalidChannelEvent
 * @param {String} message message send
 * @param {String} eventName name of the event
 * @param {String} type expected type
 * @description A message send by the channel is invalid
 */
function invalidChannelEvent(message, eventName, type) {
  getLogger().warn(
    "invalid type for the message '" +
      JSON.stringify(message) +
      "': expected type '" +
      type +
      "' for event '" +
      eventName +
      "'"
  )
}

/**
 * @method invalidParamNumberMethodOn
 * @param {String} id id of the component
 * @param {String} className class name of the component
 * @param {String} methodName name of the component
 * @description invalid parameter number for a behavior add with 'on' method
 */
function invalidParamNumberMethodOn(id, className, methodName) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }
  getLogger().warn(
    "invalid number of parameters when adding an action for the state '" +
      methodName +
      "' on component '" +
      id +
      "'" +
      classInfo
  )
}

/**
 * @method updateUuid
 * @param {String} currentId id of the component
 * @param {String} newId of the component
 * @param {Boolean} alreadyUsed newId already used
 * @description Change the id of a component
 */
function updateUuid(currentId, newId, alreadyUsed) {
  if (alreadyUsed) {
    getLogger().warn(
      "try to update a component of id '" +
        currentId +
        "' with the new id '" +
        newId +
        "' that is already used"
    )
  } else {
    getLogger().warn(
      "try to update a component of id '" +
        currentId +
        "' with the new id '" +
        newId +
        "'"
    )
  }
}

/**
 * @method invalidUseOfComponent
 * @param {String} id id of the component
 * @description Try to change the state of a component that has been destroyed
 */
function invalidUseOfComponent(id) {
  getLogger().warn(
    "try to change the state of the destroyed component '" + id + "'"
  )
}

/**
 * @method invalidSchema
 * @param {String} name name of the schema
 * @description Try to add an invalid schema
 */
function invalidSchema(name) {
  getLogger().warn(
    "the schema '" +
      name +
      "' is not valid, it has been removed from the metamodel"
  )
}

/**
 * @method invalidModel
 * @param {String} name name of the model
 * @description Try to add an invalid model
 */
function invalidModel(name) {
  getLogger().warn(
    "the model '" +
      name +
      "' is not valid, it has been removed from the metamodel"
  )
}

/**
 * @method invalidParameters
 * @param {String} classId class name of the component
 * @param {String} document document
 * @description Invalid parameters set when creating an instance of a class
 */
function invalidParameters(classId, document) {
  let id = document && document._id ? document._id : ''

  getLogger().warn(
    "the parameters for creating '" +
      id +
      "' component (" +
      classId +
      ' model) are not compliant with the model'
  )
}

/**
 * @method destroyedComponentCall
 * @param {String} propertyName name of the property
 * @param {String} id id of the component
 * @description Try to get the property of a destroyed component
 */
function destroyedComponentCall(propertyName, id) {
  getLogger().warn(
    "trying to get the property '" +
      propertyName +
      "' on the destroyed component '" +
      id +
      "'"
  )
}

/**
 * @method invalidConctructorParameters
 * @param {String} object configuration
 * @param {String} name schema name
 * @description Invalid parameter type  when creating an instance of a class
 */
function invalidConctructorParameters(object, name) {
  getLogger().warn(
    "the constructor parameter '" +
      JSON.stringify(object).replace(/,/g, ', ') +
      "' for creating a component of class '" +
      name +
      "' is not an object"
  )
}

/**
 * @method unknownModel
 * @param {String} classId id of the class
 * @description Get the information of an unkown model
 */
function unknownModel(classId) {
  getLogger().warn("the model '" + classId + "' does not exist")
}

/**
 * @method missingSchema
 * @param {String} name name of the schema
 * @description A schema is missing
 */
function missingSchema(name) {
  getLogger().warn("the schema '" + name + "' is missing")
}

/**
 * @method missingSchema
 * @param {String} name name of the schema where the cyclic dependency was found
 * @description A cyclic dependency was found
 */
function cyclicDependency(name) {
  if (name) {
    getLogger().error(
      "a cyclic inheritance dependency with the schema '" +
        name +
        "’ has been found, please check the '_inherit' property of this schema"
    )
  } else {
    getLogger().error(
      "a cyclic inheritance dependency has been found, please check the '_inherit' properties of the schemas"
    )
  }
}

/**
 * @method invalidEnumType
 * @param {Object} value the value
 * @param {String} typeName name of the type
 * @param {String} type typeName of the type
 * @description Invalid type for a type enum
 */
function invalidEnumType(value, typeName, type) {
  let realType = ''

  if (typeof type !== 'undefined' && type !== typeof value) {
    realType =
      value && value.constructor ? value.constructor.name : typeof value
    getLogger().warn(
      "invalid type for the type '" +
        typeName +
        "': expected type '" +
        type +
        "' instead of type '" +
        realType +
        "'"
    )
  } else {
    getLogger().warn("invalid type for the type '" + typeName + "'")
  }
}

/**
 * @method loadSchema
 * @param {String} name name of the schema
 * @description Load schema
 */
function loadSchema(name) {
  getLogger().debug("load schema '" + name + "'")
}

/**
 * @method loadModel
 * @param {String} name name of the model
 * @description Load model
 */
function loadModel(name) {
  getLogger().debug("load model '" + name + "'")
}

/**
 * @method loadType
 * @param {String} name name of the type
 * @description Load type
 */
function loadType(name) {
  getLogger().debug("load type '" + name + "'")
}

/**
 * @method generatingSchema
 * @param {String} name name of the schema
 * @description Generate schema
 */
function generatingSchema(name) {
  getLogger().debug('generating ' + name + ' schema ...')
}

/**
 * @method checkModel
 * @param {String} name name of the model
 * @description Check model
 */
function checkModel(name) {
  getLogger().debug('analyzing ' + name + ' model...')
}

/**
 * @method createClass
 * @param {String} name name of the class
 * @description Create class
 */
function createClass(name) {
  getLogger().debug(name + ' class has been created')
}

/**
 * @method initDb
 * @description Init the database
 */
function initDb() {
  getLogger().debug('initializing data store...')
}

/**
 * @method actionInvokeError
 * @param {String} state state
 * @param {String} id component id
 * @param {String} className component class name
 * @param {String} message
 * @description An error happened when invoking a behavior
 */
function actionInvokeError(state, id, className, message) {
  if (className !== 'Function') {
    getLogger().error(
      "error when calling the action '" +
        state +
        "' on component '" +
        id +
        "' (" +
        className +
        ' class): ' +
        message
    )
  } else {
    getLogger().error(
      "error when calling the action '" +
        state +
        "' on component '" +
        id +
        "': " +
        message
    )
  }
}

/**
 * @method invalidSchemaPropertyName
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 * @description Invalid name for the property of a schema
 */
function invalidSchemaPropertyName(name, propName) {
  getLogger().warn(
    "invalid name '" +
      propName +
      "' for schema '" +
      name +
      "': a property name can not begin with '_'"
  )
}

/**
 * @method invalidSchemaProperty
 * @param {String} name name of the schema
 * @param {String} propName name of the property
 * @description Invalid name for the property of a schema
 */
function invalidSchemaProperty(name, propName) {
  getLogger().warn(
    "invalid property '" +
      propName +
      "' for schema '" +
      name +
      "': only 'property', 'link', 'collection', 'method' and 'event' are allowed"
  )
}

/**
 * @method invalidPropertyFormat
 * @param {String} obj definition of a property
 * @description Invalid format for the definition of a property
 */
function invalidPropertyFormat(obj) {
  getLogger().warn(
    "invalid format for a definition of a property: '" +
      obj +
      "' is not an object"
  )
}

/**
 * @method invalidState
 * @param {String} model name of the model
 * @param {String} state invalid state
 * @description Invalid state
 */
function invalidState(model, state) {
  getLogger().warn(
    "invalid state '" + state + "' for the model '" + model + "'"
  )
}

/**
 * @method unknownContext
 * @param {String} className name of the class
 * @param {String} methodName name of the method
 * @description Invoke a method class without a context
 */
function unknownContext(className, methodName) {
  getLogger().warn(
    "invoke the action '" +
      methodName +
      "' on the class '" +
      className +
      "' without a valid context"
  )
}

/**
 * @method historyDocumentInserted
 * @param {Object} id id of the component
 * @param {String} collectionName collectionName of the component
 * @param {String} document
 * @description Created document from history
 */
function historyDocumentInserted(id, collectionName, doc) {
  getLogger().debug(
    "Created component of id '" +
      id +
      "' ('" +
      collectionName +
      " collection) with document '" +
      doc +
      "'"
  )
}

/**
 * @method historyDocumentRemoved
 * @param {Object} id id of the component
 * @param {String} collectionName collectionName of the component
 * @description Removed document from history
 */
function historyDocumentRemoved(id, collectionName) {
  getLogger().debug(
    "Destroyed component of id '" + id + "' (" + collectionName + ' collection)'
  )
}

/**
 * @method historyDocumentUpdated
 * @param {Object} id id of the component
 * @param {String} collectionName collectionName of the component
 * @param {String} fieldName field name of the component
 * @param {String} value value of the field
 * @description Updated document from history
 */
function historyDocumentUpdated(id, collectionName, fieldName, value) {
  getLogger().debug(
    "Updated field '" +
      fieldName +
      "' of component of id '" +
      id +
      "' with value '" +
      value +
      "' (" +
      collectionName +
      ' collection)'
  )
}

/**
 * @method invalidCollectionItem
 * @param {String} componentId id of the component
 * @param {String} type the type defined by the schema
 * @param {String} constructorName name of the component class
 * @description Invalid class name for a component
 */
function invalidCollectionItem(
  id,
  className,
  propertyName,
  propertyValue,
  type
) {
  let classInfo = ''

  if (className !== 'Function') {
    classInfo = ' (' + className + ' class)'
  }

  getLogger().warn(
    "invalid value for property '" +
      propertyName +
      "' on component '" +
      id +
      "'" +
      classInfo +
      ": expected type '" +
      type +
      "' for all items of the collection '" +
      JSON.stringify(propertyValue) +
      "'"
  )
}

export default {
  level,
  unknownProperty,
  invalidPropertyType,
  invalidEnumValue,
  invalidClassName,
  missingProperty,
  missingImplementation,
  invalidTypeImp,
  missingPropertyImp,
  unknownPropertyImp,
  invalidTypeDefinition,
  invalidPropertyName,
  readOnlyProperty,
  invalidDocumentOnDbInsert,
  invalidPropertyTypeOnDbUpdate,
  unknownPropertyOnDbUpdate,
  unknownMethod,
  invalidCollectionName,
  invalidResultType,
  unknownComponent,
  invalidParamNumber,
  invalidParamType,
  behaviorNotUnique,
  invalidStateOn,
  invalidStateOff,
  masterSystemNotFound,
  invalidType,
  invalidConfiguration,
  unknownType,
  unknownPath,
  canNotYetValidate,
  invalidChannelEvent,
  invalidParamNumberMethodOn,
  updateUuid,
  invalidUseOfComponent,
  invalidSchema,
  invalidModel,
  invalidParameters,
  destroyedComponentCall,
  invalidConctructorParameters,
  unknownModel,
  missingSchema,
  cyclicDependency,
  invalidEnumType,
  loadSchema,
  loadModel,
  loadType,
  generatingSchema,
  checkModel,
  createClass,
  initDb,
  actionInvokeError,
  invalidSchemaPropertyName,
  invalidSchemaProperty,
  invalidPropertyFormat,
  invalidState,
  unknownContext,
  historyDocumentInserted,
  historyDocumentRemoved,
  historyDocumentUpdated,
  invalidCollectionItem,
}
