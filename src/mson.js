/*
 * System Runtime
 *
 * https://designfirst.io/systemruntime/
 *
 * Copyright 2019 Erwan Carriou
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

'use strict';

exports.ID = '_id';
exports.NAME = '_name';
exports.DESCRIPTION = '_description';
exports.INHERIT = '_inherit';
exports.CLASS = '_class';
exports.CORE = '_core';

exports.INTERNAL_NAMES = [
  '_id',
  '_name',
  '_inherit',
  '_description',
  '_class',
  '_core'
];

exports.PROPERTY_TYPE = 'property';
exports.COLLECTION_TYPE = 'collection';
exports.LINK_TYPE = 'link';
exports.METHOD_TYPE = 'method';
exports.EVENT_TYPE = 'event';

exports.INTERNAL_TYPES = ['property', 'collection', 'link', 'method', 'event'];

exports.DEFAULT_TYPES = [
  'boolean',
  'string',
  'number',
  'object',
  'function',
  'array',
  'date',
  'any'
];

exports.SCHEMA_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  _name: {
    type: 'string',
    mandatory: true
  },
  _inherit: {
    type: ['string'],
    mandatory: false,
    default: ['_Component']
  },
  _class: {
    type: 'boolean',
    mandatory: false
  },
  _core: {
    type: 'boolean',
    mandatory: false
  },
  _description: {
    type: 'string',
    mandatory: false
  }
};

exports.MODEL_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  _name: {
    type: 'string',
    mandatory: true
  },
  _inherit: {
    type: ['string'],
    mandatory: false
  },
  _class: {
    type: 'boolean',
    mandatory: false
  },
  _core: {
    type: 'boolean',
    mandatory: false
  },
  _description: {
    type: 'string',
    mandatory: false
  }
};

exports.TYPE_DEFINITION = {
  _id: {
    type: 'string',
    mandatory: true
  },
  name: {
    type: 'string',
    mandatory: true
  },
  type: {
    type: 'string',
    mandatory: true
  },
  schema: {
    type: 'object',
    mandatory: false
  },
  value: {
    type: ['any'],
    mandatory: false
  },
  core: {
    type: 'boolean',
    mandatory: false
  },
  description: {
    type: 'string',
    mandatory: false
  }
};
