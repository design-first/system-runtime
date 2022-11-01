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
 * @module mson
 * @description This module contains all the mson definition.
 */

const ID = '_id'
const NAME = '_name'
const DESCRIPTION = '_description'
const INHERIT = '_inherit'
const CLASS = '_class'
const CORE = '_core'

const INTERNAL_NAMES = [
  '_id',
  '_name',
  '_inherit',
  '_description',
  '_class',
  '_core',
]

const PROPERTY_TYPE = 'property'
const COLLECTION_TYPE = 'collection'
const LINK_TYPE = 'link'
const METHOD_TYPE = 'method'
const EVENT_TYPE = 'event'

const INTERNAL_TYPES = ['property', 'collection', 'link', 'method', 'event']

const DEFAULT_TYPES = [
  'boolean',
  'string',
  'number',
  'object',
  'function',
  'array',
  'date',
  'any',
]

const SCHEMA_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true,
  },
  _name: {
    type: 'string',
    mandatory: true,
  },
  _inherit: {
    type: ['string'],
    mandatory: false,
    default: ['_Component'],
  },
  _class: {
    type: 'boolean',
    mandatory: false,
  },
  _core: {
    type: 'boolean',
    mandatory: false,
  },
  _description: {
    type: 'string',
    mandatory: false,
  },
}

const MODEL_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true,
  },
  _name: {
    type: 'string',
    mandatory: true,
  },
  _inherit: {
    type: ['string'],
    mandatory: false,
  },
  _class: {
    type: 'boolean',
    mandatory: false,
  },
  _core: {
    type: 'boolean',
    mandatory: false,
  },
  _description: {
    type: 'string',
    mandatory: false,
  },
}

const TYPE_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true,
  },
  name: {
    type: 'string',
    mandatory: true,
  },
  type: {
    type: 'string',
    mandatory: true,
  },
  schema: {
    type: 'object',
    mandatory: false,
  },
  value: {
    type: ['any'],
    mandatory: false,
  },
  core: {
    type: 'boolean',
    mandatory: false,
  },
  description: {
    type: 'string',
    mandatory: false,
  },
}

export default {
  ID,
  NAME,
  DESCRIPTION,
  INHERIT,
  CLASS,
  CORE,
  INTERNAL_NAMES,
  PROPERTY_TYPE,
  COLLECTION_TYPE,
  LINK_TYPE,
  METHOD_TYPE,
  EVENT_TYPE,
  INTERNAL_TYPES,
  DEFAULT_TYPES,
  SCHEMA_DEFINITION,
  MODEL_DEFINITION,
  TYPE_DEFINITION,
}
