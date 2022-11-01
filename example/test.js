import runtime from '../src/runtime.js'

runtime.require('logger').level('debug')

runtime.system('component-spec')
const metamodel = runtime.require('metamodel')

metamodel.schema({
  _name: 'Person',
  _inherit: ['_Component'],
  birthDate: 'property',
  firstName: 'property',
  lastName: 'property',
  address: 'property',
  location: 'property',
  likes: 'property',
  custom: 'property',
  fullName: 'method',
  testMethod: 'method',
  children: 'collection',
  teacher: 'link',
  father: 'link',
  moving: 'event',
})

metamodel.model({
  _name: 'Person',
  _inherit: ['_Component'],
  birthDate: {
    type: 'date',
    readOnly: false,
    mandatory: false,
    default: '1970-01-01T00:00:00.000Z',
  },
  children: {
    type: ['Person'],
    readOnly: false,
    mandatory: false,
    default: [],
  },
  firstName: {
    type: 'string',
    readOnly: false,
    mandatory: true,
    default: '',
  },
  lastName: {
    type: 'string',
    readOnly: false,
    mandatory: true,
    default: '',
  },
  likes: {
    type: 'array',
    readOnly: false,
    mandatory: false,
    default: [],
  },
  custom: {
    type: 'mycustomType',
    readOnly: false,
    mandatory: false,
    default: {},
  },
  fullName: {
    result: 'string',
  },
  testMethod: {},
  father: {
    type: 'Person',
    readOnly: false,
    mandatory: false,
    default: {},
  },
  teacher: {
    type: 'Person',
    readOnly: false,
    mandatory: false,
    default: {},
  },
  address: {
    type: 'string',
    readOnly: false,
    mandatory: false,
    default: '',
  },
  location: {
    type: 'location',
    readOnly: false,
    mandatory: false,
    default: {},
  },
  moving: {},
})

metamodel.schema({
  _name: 'Teacher',
  _inherit: ['Person'],
})

metamodel.type({
  name: 'mycustomType',
  description: '',
  type: 'object',
  schema: {
    property0: {
      type: 'string',
      mandatory: false,
      default: '',
    },
    property1: {
      type: 'array',
      mandatory: false,
      default: [],
    },
    property2: {
      type: 'object',
      mandatory: false,
      default: {},
    },
    property3: {
      type: 'any',
      mandatory: false,
      default: '',
    },
    property4: {
      type: 'boolean',
      mandatory: false,
      default: false,
    },
    property5: {
      type: 'date',
      mandatory: false,
      default: '',
    },
    property6: {
      type: 'json',
      mandatory: false,
      default: {},
    },
  },
})

metamodel.type({
  name: 'street',
  description: '',
  type: 'object',
  schema: {
    street: {
      type: 'string',
      mandatory: false,
      default: '',
    },
  },
})

metamodel.type({
  name: 'location',
  description: '',
  type: 'object',
  schema: {
    cities: {
      type: ['street'],
      mandatory: false,
      default: [],
    },
  },
})

metamodel.create()

const Person = runtime.require('Person')
const yoda = new Person({
  firstName: 'Yoda',
  lastName: 'Master',
})

yoda.on('lastName', async (val) => {
  const newValue = await import('../example/module.js')
  console.log(newValue.default)
  this.address(newValue.default)
})

yoda.lastName('Grand Jedi Master')
